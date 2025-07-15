import ContactCosmicCoordinates from '@/components/sections/ContactCosmicCoordinates';
import ContactHeroNexus from '@/components/sections/ContactHeroNexus';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - The Nexus Command Center: Chart Your Digital Destiny',
  description:
    'Ready to launch your brand into its own digital dimension? Connect with our "Nexus Command Center" in Tunisia. Our cosmic architects are ready to receive your transmission and begin charting the course for your next masterpiece.',
  keywords: [
    'contact',
    'nexus command center',
    'cosmic coordinates',
    'digital destiny',
    'tunisia',
    'consultation',
    'cosmic architects',
    'digital transformation',
    'cinematic solutions',
    'cosmic transmission',
  ].join(', '),
  openGraph: {
    title: 'Contact - The Nexus Command Center: Chart Your Digital Destiny',
    description:
      'Ready to launch your brand into its own digital dimension? Connect with our "Nexus Command Center" in Tunisia.',
    url: 'https://orsonvision.com/contact',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0A0F/B0B0B0?text=Nexus+Command+Center',
        width: 1200,
        height: 630,
        alt: 'The Nexus Command Center - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - The Nexus Command Center: Chart Your Digital Destiny',
    description:
      'Ready to launch your brand into its own digital dimension? Connect with our "Nexus Command Center" in Tunisia.',
    images: [
      'https://placehold.co/1200x630/0A0A0F/B0B0B0?text=Nexus+Command+Center',
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
    canonical: 'https://orsonvision.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Main Content - The Nexus Command Center */}
      <main className="relative">
        {/* Act I: The Nexus - Hero Section */}
        <ContactHeroNexus />

        {/* Act II: The Coordinates - Contact Section */}
        <ContactCosmicCoordinates />
      </main>
    </div>
  );
}
