import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ape Run | Climb, Compete, Earn',
  description: 'Join the ultimate jungle adventure. Climb the Base tree, dodge obstacles, collect rewards, and compete in tournaments.',
  keywords: 'Ape Run, blockchain game, NFT game, Base network, gaming token, play to earn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
