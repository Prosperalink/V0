import AboutHeroGenesis from '@/components/sections/AboutHeroGenesis';
import AboutTeamCrew from '@/components/sections/AboutTeamCrew';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Our Cosmic Genesis',
  description:
    'From a singular vision, a universe unfolded. Born from the visionary spirit of Oussama Naffati, and inspired by the boundless creativity of Orson Welles, our universe began its genesis in the heart of Tunisia.',
  keywords: [
    'about orson vision',
    'cosmic genesis',
    'digital universe',
    'oussama naffati',
    'tunisia',
    'cinematic solutions',
    'team',
    'philosophy',
  ].join(', '),
  openGraph: {
    title: 'About - Our Cosmic Genesis',
    description:
      'From a singular vision, a universe unfolded. Born from the visionary spirit of Oussama Naffati, and inspired by the boundless creativity of Orson Welles.',
    url: 'https://orsonvision.com/about',
    siteName: 'Orson Vision',
    images: [
      {
        url: '/assets/about/hero/cosmic-genesis.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Cosmic Genesis - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Our Cosmic Genesis',
    description:
      'From a singular vision, a universe unfolded. Born from the visionary spirit of Oussama Naffati, and inspired by the boundless creativity of Orson Welles.',
    images: ['/assets/about/hero/cosmic-genesis.jpg'],
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
    canonical: 'https://orsonvision.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Main Content - Our Cosmic Genesis */}
      <main className="relative">
        {/* Act I: The Genesis - Hero Section */}
        <AboutHeroGenesis />

        {/* Act II: The Crew - Team Section */}
        <AboutTeamCrew />
      </main>
    </div>
  );
}
