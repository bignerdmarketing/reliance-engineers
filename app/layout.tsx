import type { Metadata } from 'next';
import { Play, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const headingFont = Play({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const BASE_URL = 'https://reliance-engineers.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Reliance Engineers | Infrastructure Engineering Excellence',
    template: '%s | Reliance Engineers',
  },
  description: 'Reliance Engineers LLC is a multidisciplinary infrastructure engineering consulting firm specializing in bridge and structural engineering, tunnel and underground construction, geotechnical engineering, and project delivery support services.',
  openGraph: {
    title: 'Reliance Engineers | Infrastructure Engineering Excellence',
    description: 'Multidisciplinary infrastructure engineering consulting firm specializing in bridge, tunnel, geotechnical, and project delivery services. DBE certified in 10 states.',
    type: 'website',
    url: BASE_URL,
    siteName: 'Reliance Engineers',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Reliance Engineers — Infrastructure Engineering Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliance Engineers | Infrastructure Engineering Excellence',
    description: 'Multidisciplinary infrastructure engineering consulting firm specializing in bridge, tunnel, geotechnical, and project delivery services. DBE certified in 10 states.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Reliance Engineers',
  legalName: 'Reliance Engineers LLC',
  url: 'https://reliance-eng.com',
  sameAs: ['https://reliance-engineers.vercel.app'],
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/icon.svg`,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-781-697-8304',
    email: 'info@reliance-eng.com',
    contactType: 'customer service',
    areaServed: 'US',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 Yarmouth Road',
    addressLocality: 'Wellesley Hills',
    addressRegion: 'MA',
    postalCode: '02481',
    addressCountry: 'US',
  },
  naics: '541330',
  identifier: [
    {
      '@type': 'PropertyValue',
      name: 'UEI',
      value: 'FKGFRQYJL8M2',
    },
    {
      '@type': 'PropertyValue',
      name: 'CAGE Code',
      value: '7XND3',
    },
    {
      '@type': 'PropertyValue',
      name: 'NAICS',
      value: '541330',
    },
  ],
  foundingDate: '2013',
  description: 'Multidisciplinary infrastructure engineering consulting firm specializing in bridge and structural engineering, tunnel and underground construction, geotechnical engineering, and project delivery services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-brand-text">
        {/* 508 Compliance: Skip navigation link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
