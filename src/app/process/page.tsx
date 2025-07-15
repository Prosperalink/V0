import ProcessTimeline from '@/components/sections/ProcessTimeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process - The Voyage Map',
  description:
    'Discover our cinematic approach to digital project development. From discovery to launch, we guide you through every phase with precision and storytelling mastery.',
  keywords: [
    'digital process',
    'project phases',
    'discovery strategy',
    'design prototyping',
    'production development',
    'launch iteration',
    'cinematic workflow',
    'Tunisia',
  ].join(', '),
  openGraph: {
    title: 'Our Process - The Voyage Map',
    description:
      'Discover our cinematic approach to digital project development. From discovery to launch, we guide you through every phase with precision and storytelling mastery.',
    url: 'https://orsonvision.com/process',
    siteName: 'Orson Vision',
    images: [
      {
        url: '/assets/process/process-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Orson Vision Process - The Voyage Map',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Process - The Voyage Map',
    description:
      'Discover our cinematic approach to digital project development. From discovery to launch, we guide you through every phase with precision and storytelling mastery.',
    images: ['/assets/process/process-hero.jpg'],
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
  alternates: {
    canonical: 'https://orsonvision.com/process',
  },
};

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      <main className="relative">
        <ProcessTimeline />
      </main>
    </div>
  );
}
