import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import './globals.scss'

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
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "0f2d8cb1422649b89287ab181272595e"}'></script>
      </body>
    </html>
  )
}
