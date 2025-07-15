import ServicesHeroNebulas from '@/components/sections/ServicesHeroNebulas';
import ServicesNebulaDetails from '@/components/sections/ServicesNebulaDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Services - Our Nebulas of Expertise: Illuminating Your Digital Cosmos',
  description:
    'Navigate through our specialized "Nebulas of Expertise," each a vibrant cluster of services designed to expand your brand\'s presence across the digital universe. From the creation of captivating visual dimensions to the engineering of seamless digital pathways, our solutions are tailored to your cosmic ambition.',
  keywords: [
    'digital services',
    'video production',
    'cinematic production',
    'motion design',
    'photography',
    'graphic design',
    'web development',
    'digital marketing',
    'specialized services',
    'nebulas of expertise',
    'cinematic solutions',
    'digital transformation',
  ].join(', '),
  openGraph: {
    title:
      'Services - Our Nebulas of Expertise: Illuminating Your Digital Cosmos',
    description:
      'Navigate through our specialized "Nebulas of Expertise," each a vibrant cluster of services designed to expand your brand\'s presence across the digital universe.',
    url: 'https://orsonvision.com/services',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Nebula+Formation+Video',
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
    title:
      'Services - Our Nebulas of Expertise: Illuminating Your Digital Cosmos',
    description:
      'Navigate through our specialized "Nebulas of Expertise," each a vibrant cluster of services designed to expand your brand\'s presence across the digital universe.',
    images: [
      'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Nebula+Formation+Video',
    ],
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

        {/* Act II: The Nebula Details - Services Section */}
        <ServicesNebulaDetails />
      </main>
    </div>
  );
}
