'use client'

import { useEffect, useRef } from 'react'

interface FloatingElement {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()

    // Floating elements (trees, leaves, bananas)
    const elements: FloatingElement[] = []
    
    for (let i = 0; i < 30; i++) {
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      })
    }

    function drawLeaf(x: number, y: number, size: number, rotation: number, opacity: number) {
      if (!ctx) return
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      
      // Leaf shape
      ctx.beginPath()
      ctx.moveTo(0, -size)
      ctx.bezierCurveTo(size * 0.6, -size * 0.7, size * 0.8, size * 0.3, 0, size)
      ctx.bezierCurveTo(-size * 0.8, size * 0.3, -size * 0.6, -size * 0.7, 0, -size)
      
      const gradient = ctx.createLinearGradient(-size, 0, size, 0)
      gradient.addColorStop(0, 'rgba(34, 197, 94, 0.6)')
      gradient.addColorStop(1, 'rgba(22, 163, 74, 0.6)')
      ctx.fillStyle = gradient
      ctx.fill()
      
      ctx.restore()
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      elements.forEach((element) => {
        drawLeaf(element.x, element.y, element.size, element.rotation, element.opacity)

        element.x += element.speedX
        element.y += element.speedY
        element.rotation += element.rotationSpeed

        // Wrap around
        if (element.x < -50) element.x = canvas.width + 50
        if (element.x > canvas.width + 50) element.x = -50
        if (element.y < -50) element.y = canvas.height + 50
        if (element.y > canvas.height + 50) element.y = -50
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  )
}
