import Footer from '@/components/footer'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default:
      'Bukky Group | Excellence in Beauty, Fashion, Lifestyle & Empowerment',
    template: '%s | Bukky Group',
  },
  description:
    'Bridging luxury and impact. Bukky Group is a premier multi-industry conglomerate spanning high-end beauty, haute couture, culinary excellence, and education. Home to 3S The Label, Bukky Beauty World, 3S Restaurant, and the Get Busy Foundation.',
  keywords: [
    'Bukky Group',
    'Bukky Anny',
    '3S The Label',
    'Bukky Beauty World',
    '3S Restaurant',
    '3S Glam',
    '3S College',
    '3S Books',
    'July 18 Cosmetics',
    'Luxury Fashion Nigeria',
    'Beauty Education Africa',
    'Youth Empowerment Foundation',
    'Executive Leadership',
    'Conglomerate Nigeria',
  ],
  authors: [{ name: 'Bukky Anny' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bukkygroup.com',
    title:
      'Bukky Group | Excellence in Beauty, Fashion, Lifestyle & Empowerment',
    description:
      'A global movement of excellence across beauty, luxury lifestyle, and social impact. Explore our flagship brands and visionary leadership.',
    siteName: 'Bukky Group',
    images: [
      {
        url: '/og-image.png', // Fallback to a standard OG image if it exists
        width: 1200,
        height: 630,
        alt: 'Bukky Group - Excellence in Everything We Do',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bukky Group | Luxury & Social Impact',
    description:
      'Transforming industries and empowering lives through excellence in beauty, fashion, and education.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${cinzel.variable} antialiased`}
      >
        <Header />
        <main className='bg-black px-5 lg:px-10'>{children}</main>
        {/* <LocationMap /> */}
        <Footer />
        <Toaster position='top-center' />
      </body>
    </html>
  )
}
