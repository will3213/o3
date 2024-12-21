import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenAI O3 Models - Experience the Latest AI Breakthrough | OpenAI Models',
  description: 'Explore OpenAI O3 and O1 models with 71.7% programming accuracy and 87.7% GPQA score. Join early access for the most advanced AI models in reasoning and programming before January 10, 2025.',
  keywords: 'openai o3, openai models, openai o1, openai o3 models, open ai o3, o3 Preview, openai 12 days, o3 ai, openai o3 sign up, openai login, openai news'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
