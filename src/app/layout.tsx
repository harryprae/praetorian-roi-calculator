import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Praetorian ROI Calculator',
  description: 'Calculate the financial impact of consolidating your security stack with Praetorian\'s unified offensive security platform',
  keywords: 'security ROI, penetration testing, attack surface management, vulnerability management, cybersecurity calculator',
  authors: [{ name: 'Praetorian' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Praetorian ROI Calculator',
    description: 'Calculate the financial impact of consolidating your security stack with Praetorian\'s unified offensive security platform',
    type: 'website',
    siteName: 'Praetorian',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praetorian ROI Calculator',
    description: 'Calculate the financial impact of consolidating your security stack',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  )
}