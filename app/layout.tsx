import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apex Runner | Climb, Compete, Earn',
  description: 'Join the ultimate blockchain arcade game on Base. Climb higher, compete harder, and earn $TICKET tokens.',
  keywords: 'Apex Runner, blockchain game, Ticket game, Base network, gaming token, play to earn',
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
