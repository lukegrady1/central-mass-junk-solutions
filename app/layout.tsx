import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import { BUSINESS } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://centralmassjunk.com'),
  title: {
    default: `${BUSINESS.name} — Same-Day Junk Removal in ${BUSINESS.region}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    `Same-day junk removal across ${BUSINESS.region}. Upfront text quotes, licensed and insured, eco-friendly disposal. Snap a photo, get a price in 15 minutes.`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: BUSINESS.name,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'US',
  },
  email: BUSINESS.email,
  url: 'https://centralmassjunk.com',
  sameAs: [BUSINESS.socialUrls.facebook, BUSINESS.socialUrls.instagram],
  areaServed: BUSINESS.region,
  openingHours: 'Mo-Su 00:00-23:59',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  )
}
