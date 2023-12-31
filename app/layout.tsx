

import { useAtom } from 'jotai'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { themeAtom } from './state'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'typabook',
  description: 'read more, type faster',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      <meta name="google-site-verification" content="Mvpa7a-ly3zvf8gi292rjnY9WwHk1UrJ14sjkXDVRZw" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
