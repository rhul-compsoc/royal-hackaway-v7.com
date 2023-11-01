import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import background from './background.png'
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
        <Image alt="Hackaway Photo"
          src={background}
          placeholder="blur"
          fill
          className="object-cover blur brightness-50" />
        {children}
      </body>
    </html>
  )
}
