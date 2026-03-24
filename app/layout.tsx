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

export const metadata: Metadata = {
  title: {
    default: 'Reliance Engineers | Infrastructure Engineering Excellence',
    template: '%s | Reliance Engineers',
  },
  description: 'Reliance Engineers LLC is a multidisciplinary infrastructure engineering consulting firm specializing in bridge and structural engineering, tunnel and underground construction, geotechnical engineering, and project delivery support services.',
  openGraph: {
    title: 'Reliance Engineers | Infrastructure Engineering Excellence',
    description: 'Multidisciplinary infrastructure engineering consulting firm specializing in bridge, tunnel, geotechnical, and project delivery services. DBE certified in 10 states.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
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
