import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import { CookieButton } from '@/components/cookie-button'
import { BackToTop } from '@/components/back-to-top'
import { ChatButton } from '@/components/chat-button'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
})

// GTM ID - wird später durch Environment Variable ersetzt
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://previum.de'),
  title: {
    default: 'IHHT München – Energie zurück bei Long COVID & Burnout | Previum®',
    template: '%s | Previum® München',
  },
  description: 'Erschöpft trotz Ruhe? IHHT-Zelltraining reaktiviert deine Mitochondrien. Spezialisiert auf Long COVID, Burnout & Fatigue seit 2015. Praxis München.',
  keywords: ['IHHT', 'Long COVID', 'Burnout', 'München', 'Mitochondrien', 'Zelltraining', 'Post-COVID', 'Fatigue', 'Höhentraining'],
  authors: [{ name: 'Markus Spiegelhalder' }],
  creator: 'Previum® München GmbH',
  publisher: 'Previum® München GmbH',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://previum.de',
    siteName: 'Previum® München',
    title: 'IHHT München – Energie zurück bei Long COVID & Burnout',
    description: 'Erschöpft trotz Ruhe? IHHT-Zelltraining reaktiviert deine Mitochondrien.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Previum® München - IHHT Zelltraining',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IHHT München – Energie zurück bei Long COVID & Burnout',
    description: 'Erschöpft trotz Ruhe? IHHT-Zelltraining reaktiviert deine Mitochondrien.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

// Schema.org JSON-LD für Medical Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Previum® München GmbH',
  description: 'IHHT Zelltraining bei Long COVID, Burnout und chronischer Erschöpfung',
  url: 'https://previum.de',
  telephone: '+498932389988',
  email: 'energy@previum.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Schumannstraße 9',
    addressLocality: 'München',
    postalCode: '81679',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '48.1505',
    longitude: '11.5910',
  },
  openingHours: 'Mo-Fr 09:00-17:00',
  priceRange: '€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '835',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Google Tag Manager */}
        {GTM_ID && (
          <script
            id="gtm-script"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        {/* GTM noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        
        {children}
        <CookieBanner />
        <CookieButton />
        <BackToTop />
        <ChatButton />
        <Analytics />
      </body>
    </html>
  )
}