import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import './globals.scss'

export const runtime = "edge";

const sourceSans = Inter({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bible History: How we got our Bible',
  description: 'This site is dedicated to the miracle of the Bible.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={sourceSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
