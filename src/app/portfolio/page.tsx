import PortfolioHeroConstellation from '@/components/sections/PortfolioHeroConstellation';
import PortfolioProjectsGallery from '@/components/sections/PortfolioProjectsGallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Our Stellar Portfolio',
  description:
    'Each project is a star in our constellation, illuminating the path to digital excellence and showcasing the boundless possibilities of cinematic solutions.',
  keywords: [
    'portfolio',
    'web development',
    'mobile apps',
    'brand design',
    'digital marketing',
    'video production',
    'cinematic solutions',
    'case studies',
  ].join(', '),
  openGraph: {
    title: 'Portfolio - Our Stellar Portfolio',
    description:
      'Each project is a star in our constellation, illuminating the path to digital excellence and showcasing the boundless possibilities of cinematic solutions.',
    url: 'https://orsonvision.com/portfolio',
    siteName: 'Orson Vision',
    images: [
      {
        url: '/assets/portfolio/hero/star-cluster.jpg',
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
    title: 'Portfolio - Our Stellar Portfolio',
    description:
      'Each project is a star in our constellation, illuminating the path to digital excellence and showcasing the boundless possibilities of cinematic solutions.',
    images: ['/assets/portfolio/hero/star-cluster.jpg'],
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
        {/* Act I: The Constellation - Hero Section */}
        <PortfolioHeroConstellation />

        {/* Act II: The Gallery - Projects Section */}
        <PortfolioProjectsGallery />
      </main>
    </div>
  );
}
