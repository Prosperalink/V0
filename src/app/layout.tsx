import ErrorBoundary from '@/components/ErrorBoundary';
import BottomNavigation from '@/components/layout/BottomNavigation';
import Navigation from '@/components/layout/Navigation';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ThemeProvider from '@/components/layout/ThemeProvider';
import { JourneyProvider } from '@/contexts/JourneyContext';
import type { Metadata } from 'next';
import {
  Cinzel,
  Cormorant_Garamond,
  Inter,
  Montserrat,
  Playfair_Display,
} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://orsonvision.com'),
  title: {
    default: 'Orson Vision - Cinematic Digital Solutions',
    template: '%s | Orson Vision',
  },
  description:
    'Premium digital agency specializing in cinematic solutions, Hollywood-level production values, and award-winning web design, mobile apps, and digital marketing.',
  keywords: [
    'digital agency',
    'web design',
    'mobile app development',
    'digital marketing',
    'content creation',
    'graphic design',
    'SEO optimization',
    'social media marketing',
    'cinematic solutions',
    'Hollywood production values',
  ],
  authors: [{ name: 'Orson Vision' }],
  creator: 'Orson Vision',
  publisher: 'Orson Vision',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orsonvision.com',
    siteName: 'Orson Vision',
    title: 'Orson Vision - Cinematic Digital Solutions',
    description:
      'Premium digital agency specializing in cinematic solutions and Hollywood-level production values.',
    images: [
      {
        url: '/assets/hero/hero-poster.jpg',
        width: 1200,
        height: 630,
        alt: 'Orson Vision - Cinematic Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orson Vision - Cinematic Digital Solutions',
    description:
      'Premium digital agency specializing in cinematic solutions and Hollywood-level production values.',
    images: ['/assets/hero/hero-poster.jpg'],
    creator: '@orsonvision',
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://orsonvision.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:wght@400;500;700&family=Montserrat:wght@300;400;500&family=Playfair+Display:wght@400;500;700;800;900&family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />

        {/* Hotjar */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Orson Vision',
              url: 'https://orsonvision.com',
              logo: 'https://orsonvision.com/logo/cinematic-clapperboard-icon.svg',
              description:
                'Premium digital agency specializing in cinematic solutions and Hollywood-level production values.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'hello@orsonvision.com',
              },
              sameAs: [
                'https://twitter.com/orsonvision',
                'https://linkedin.com/company/orsonvision',
                'https://instagram.com/orsonvision',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cinzel.variable} ${cormorant.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider>
          <ErrorBoundary>
            <JourneyProvider>
              <Navigation />
              <main className="pb-16 lg:pb-0">{children}</main>
              <BottomNavigation />
              <ScrollToTop />
            </JourneyProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
