import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rahul-portfolio.vercel.app'),
  title: 'Rahul Reddy Arva - Senior Software Engineer | AI Platform Architect',
  description: 'Senior Software Engineer with 6+ years experience in AI platforms, enterprise messaging, and security compliance. Specializing in Python, cloud architecture, and scalable solutions.',
  keywords: ['Software Engineer', 'AI Platform', 'Security Compliance', 'Python', 'Enterprise Solutions', 'SOC 2', 'Data Engineering'],
  authors: [{ name: 'Rahul Reddy Arva' }],
  creator: 'Rahul Reddy Arva',
  openGraph: {
    title: 'Rahul Reddy Arva - Senior Software Engineer',
    description: 'AI Platform Architect | Security & Compliance Leader | Enterprise Solutions Expert',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rahul Reddy Arva Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Reddy Arva - Senior Software Engineer',
    description: 'AI Platform Architect | Security & Compliance Leader',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ea580c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Rahul Reddy Arva" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ea580c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}