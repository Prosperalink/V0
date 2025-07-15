import AboutHeroGenesis from '@/components/sections/AboutHeroGenesis';
import AboutTeamCrew from '@/components/sections/AboutTeamCrew';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Our Cosmic Genesis: The Birth of a Digital Universe',
  description:
    'From a singular vision, a universe unfolded. Orson Vision was conceived by Oussama Naffati, a cinema director with a profound understanding of narrative and visual impact. Inspired by the pioneering spirit of Orson Welles, our journey began as a quest to infuse the digital realm with cinematic grandeur, rooted deeply in the vibrant landscape of Tunisia.',
  keywords: [
    'about orson vision',
    'cosmic genesis',
    'digital universe',
    'oussama naffati',
    'tunisia',
    'cinematic solutions',
    'team',
    'philosophy',
    'orson welles',
    'cinema director',
    'digital transformation',
  ].join(', '),
  openGraph: {
    title: 'About - Our Cosmic Genesis: The Birth of a Digital Universe',
    description:
      'From a singular vision, a universe unfolded. Orson Vision was conceived by Oussama Naffati, a cinema director with a profound understanding of narrative and visual impact.',
    url: 'https://orsonvision.com/about',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0A0F/FFED4E?text=Cosmic+Genesis',
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
    title: 'About - Our Cosmic Genesis: The Birth of a Digital Universe',
    description:
      'From a singular vision, a universe unfolded. Orson Vision was conceived by Oussama Naffati, a cinema director with a profound understanding of narrative and visual impact.',
    images: ['https://placehold.co/1200x630/0A0A0F/FFED4E?text=Cosmic+Genesis'],
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
