'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        )
        gradient.addColorStop(0, `rgba(251, 191, 36, ${particle.opacity})`)
        gradient.addColorStop(0.5, `rgba(251, 191, 36, ${particle.opacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(251, 191, 36, 0)')
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f766e 100%)' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-10" />

      {/* Monkey decorations */}
      <img 
        src="/monkey1.png" 
        alt="" 
        className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 object-contain z-30 opacity-90"
        style={{ transform: 'rotate(-15deg)' }}
      />
      <img 
        src="/monkey2.png" 
        alt="" 
        className="absolute bottom-32 right-10 w-40 h-40 md:w-56 md:h-56 object-contain z-30 opacity-90"
        style={{ transform: 'rotate(12deg)' }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-6 py-2">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-primary-400 font-semibold text-sm">Live on Base Network</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-white">Climb the Tree.</span>
            <br />
            <span className="text-gradient">Conquer the Jungle.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the ultimate arcade adventure where skill meets rewards. 
            Dodge obstacles, collect bananas, and compete in tournaments to earn real value.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="btn-primary w-full sm:w-auto">
              <span>Play Now</span>
            </button>
            <button className="btn-secondary w-full sm:w-auto" onClick={() => document.getElementById('tokenomics')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>View Tokenomics</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="stat-item bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20">
              <div className="text-4xl font-bold text-gradient mb-2">100B</div>
              <div className="text-gray-400 text-sm font-medium">Total Supply</div>
            </div>
            <div className="stat-item bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">50%</div>
              <div className="text-gray-400 text-sm font-medium">Liquidity Pool</div>
            </div>
            <div className="stat-item bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">10%</div>
              <div className="text-gray-400 text-sm font-medium">Player Rewards</div>
            </div>
            <div className="stat-item bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-gradient mb-2">Base</div>
              <div className="text-gray-400 text-sm font-medium">Network</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-primary-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
