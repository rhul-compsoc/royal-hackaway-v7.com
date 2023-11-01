import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const kollektif = localFont({ src: './fonts/Kollektif.ttf' })

export const metadata: Metadata = {
  title: 'Royal Hackaway v7',
  description: 'Official website of Royal Hackaway v7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kollektif.className}>
        {children}
      </body>
    </html>
  )
}
