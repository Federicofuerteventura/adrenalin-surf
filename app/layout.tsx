import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyMobileCTA from '@/components/ui/StickyMobileCTA'
import TrackingScripts from '@/components/ui/TrackingScripts'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adrenalinsurfschool.com'
const SITE_NAME = 'Adrenalin Surf School'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Surf Lessons in Fuerteventura`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Learn to surf in La Pared, South Fuerteventura. Certified instructors, all levels welcome. Boards, wetsuits & safety gear included. Book your surf lesson today.',
  keywords: [
    'surf lessons Fuerteventura',
    'surf school La Pared',
    'clases de surf Fuerteventura',
    'surf course Canary Islands',
    'beginner surf Fuerteventura',
    'Adrenalin Surf School',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['es_ES'],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Surf Lessons in Fuerteventura`,
    description:
      'Learn to surf in La Pared, South Fuerteventura. Certified instructors, all levels welcome.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Adrenalin Surf School La Pared Fuerteventura' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Surf Lessons in Fuerteventura`,
    description:
      'Learn to surf in La Pared, South Fuerteventura. Certified instructors, all levels welcome.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B2A3A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${SITE_URL}/#business`,
              name: 'Adrenalin Surf School',
              description:
                'Surf school in La Pared, South Fuerteventura. Beginner to advanced surf lessons, equipment rental, and transfers.',
              url: SITE_URL,
              logo: `${SITE_URL}/images/logo.png`,
              image: `${SITE_URL}/og-image.jpg`,
              telephone: '+34-XXX-XXX-XXX',
              email: 'info@adrenalinsurfschool.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'La Pared Beach',
                addressLocality: 'La Pared',
                addressRegion: 'Fuerteventura',
                postalCode: '35628',
                addressCountry: 'ES',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.1200',
                longitude: '-14.2200',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                  opens: '08:00',
                  closes: '18:00',
                },
              ],
              priceRange: '€€',
              currenciesAccepted: 'EUR',
              paymentAccepted: 'Cash, Credit Card',
              areaServed: 'Fuerteventura, Canary Islands',
              hasMap: 'https://goo.gl/maps/placeholder',
              sameAs: [
                'https://www.facebook.com/adrenalinsurfschool',
                'https://www.instagram.com/adrenalinsurfschool',
              ],
            }),
          }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <TrackingScripts />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
