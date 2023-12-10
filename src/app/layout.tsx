import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     
        {/* Include any additional meta tags, stylesheets, or scripts here */}
      </head>
      <body className={inter.className}>
        <div>
          <Toaster />
        </div>
        {children}
        {/* Include any additional scripts or footers here */}
      </body>
    </html>
  )
}
