import FinalCTA from '@/components/sections/FinalCTA';
import HeroPortalEntry from '@/components/sections/HeroPortalEntry';
import ManifestoCosmicGenesis from '@/components/sections/ManifestoCosmicGenesis';
import MatrixGalacticMap from '@/components/sections/MatrixGalacticMap';
import PillarsCosmicCreation from '@/components/sections/PillarsCosmicCreation';
import PortfolioHighlights from '@/components/sections/PortfolioHighlights';
import TestimonialsSocialProof from '@/components/sections/TestimonialsSocialProof';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orson Vision - Directing Digital Universes: Your Vision, Our Cosmos',
  description:
    "Step through the portal. At Orson Vision, we don't just build digital products; we architect immersive cinematic universes that captivate, inspire, and endure across dimensions. Born from the visionary spirit of Oussama Naffati, and inspired by the boundless creativity of Orson Welles, our universe began its genesis in the heart of Tunisia.",
  keywords: [
    'cinematic universe',
    'digital dimensions',
    'cosmic solutions',
    'portal entry',
    'nebula formation',
    'holographic display',
    'cosmic team',
    'digital architecture',
    'Tunisia',
    'Oussama Naffati',
    'Orson Welles',
    'cinematic solutions',
    'galactic map',
    'planets of partnership',
    'nebulas of expertise',
  ].join(', '),
  openGraph: {
    title:
      'Orson Vision - Directing Digital Universes: Your Vision, Our Cosmos',
    description:
      "Step through the portal. At Orson Vision, we don't just build digital products; we architect immersive cinematic universes that captivate, inspire, and endure across dimensions.",
    url: 'https://orsonvision.com',
    siteName: 'Orson Vision',
    images: [
      {
        url: '/assets/homepage/hero/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'Orson Vision - Directing Digital Universes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Orson Vision - Directing Digital Universes: Your Vision, Our Cosmos',
    description:
      "Step through the portal. At Orson Vision, we don't just build digital products; we architect immersive cinematic universes that captivate, inspire, and endure across dimensions.",
    images: ['/assets/homepage/hero/hero-background.jpg'],
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
    canonical: 'https://orsonvision.com',
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Main Content - The Cinematic Universe */}
      <main className="relative">
        {/* Act I: The Origin Dimension - Hero Section */}
        <HeroPortalEntry />

        {/* Act II: The Cosmic Genesis - Manifesto Section */}
        <ManifestoCosmicGenesis />

        {/* Act III: The Galactic Map - Solutions Matrix Section */}
        <MatrixGalacticMap />

        {/* Act IV: The Pillars of Cosmic Creation */}
        <PillarsCosmicCreation />

        {/* Act V: Galactic Premieres - Portfolio Highlights */}
        <PortfolioHighlights />

        {/* Act VI: Transmissions From Our Partners - Testimonials */}
        <TestimonialsSocialProof />

        {/* Act VII: Chart Your Digital Destiny - Final CTA */}
        <FinalCTA />
      </main>
    </div>
  );
}
