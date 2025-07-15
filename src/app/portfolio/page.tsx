import PortfolioGalacticPremieres from '@/components/sections/PortfolioGalacticPremieres';
import PortfolioHeroStellar from '@/components/sections/PortfolioHeroStellar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Our Stellar Portfolio: A Constellation of Creations',
  description:
    'Journey through our "Stellar Portfolio," a curated exhibition of digital masterpieces that shine brightly across the Cinematic Universe. Each project is a unique star system, a testament to our "Cinematic Solutions" philosophy, and a beacon of success launched from our Tunisian hub.',
  keywords: [
    'portfolio',
    'stellar portfolio',
    'galactic premieres',
    'digital projects',
    'cinematic solutions',
    'star systems',
    'digital masterpieces',
    'tunisia',
    'cosmic projects',
    'digital universe',
  ].join(', '),
  openGraph: {
    title: 'Portfolio - Our Stellar Portfolio: A Constellation of Creations',
    description:
      'Journey through our "Stellar Portfolio," a curated exhibition of digital masterpieces that shine brightly across the Cinematic Universe.',
    url: 'https://orsonvision.com/portfolio',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0A0F/E0E0E0?text=Star+Cluster+Portfolio',
        width: 1200,
        height: 630,
        alt: 'Our Stellar Portfolio - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Our Stellar Portfolio: A Constellation of Creations',
    description:
      'Journey through our "Stellar Portfolio," a curated exhibition of digital masterpieces that shine brightly across the Cinematic Universe.',
    images: [
      'https://placehold.co/1200x630/0A0A0F/E0E0E0?text=Star+Cluster+Portfolio',
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
    canonical: 'https://orsonvision.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Main Content - Our Stellar Portfolio */}
      <main className="relative">
        {/* Act I: The Stellar Portfolio - Hero Section */}
        <PortfolioHeroStellar />

        {/* Act II: The Galactic Premieres - Portfolio Section */}
        <PortfolioGalacticPremieres />
      </main>
    </div>
  );
}
