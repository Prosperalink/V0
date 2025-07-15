import ServicesGridDetails from '@/components/sections/ServicesGridDetails';
import ServicesHeroNebulas from '@/components/sections/ServicesHeroNebulas';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Our Nebulas of Expertise',
  description:
    'Explore our cosmic array of digital solutions, each a unique nebula of expertise designed to illuminate your path through the digital universe.',
  keywords: [
    'digital services',
    'web development',
    'mobile apps',
    'digital marketing',
    'creative design',
    'content creation',
    'strategic consulting',
    'video production',
    'cinematic solutions',
  ].join(', '),
  openGraph: {
    title: 'Services - Our Nebulas of Expertise',
    description:
      'Explore our cosmic array of digital solutions, each a unique nebula of expertise designed to illuminate your path through the digital universe.',
    url: 'https://orsonvision.com/services',
    siteName: 'Orson Vision',
    images: [
      {
        url: '/assets/services/hero/nebula-formation.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Nebulas of Expertise - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Our Nebulas of Expertise',
    description:
      'Explore our cosmic array of digital solutions, each a unique nebula of expertise designed to illuminate your path through the digital universe.',
    images: ['/assets/services/hero/nebula-formation.jpg'],
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
  alternates: {
    canonical: 'https://orsonvision.com/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Main Content - Our Nebulas of Expertise */}
      <main className="relative">
        {/* Act I: The Nebulas - Hero Section */}
        <ServicesHeroNebulas />

        {/* Act II: The Details - Services Grid */}
        <ServicesGridDetails />
      </main>
    </div>
  );
}
