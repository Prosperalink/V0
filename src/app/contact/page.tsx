import ContactFormCoordinates from '@/components/sections/ContactFormCoordinates';
import ContactHeroCommand from '@/components/sections/ContactHeroCommand';
import ContactInfoNexus from '@/components/sections/ContactInfoNexus';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - The Nexus Command Center',
  description:
    "Ready to embark on your digital journey? Connect with our cosmic team and let's create something extraordinary together.",
  keywords: [
    'contact',
    'get in touch',
    'digital agency',
    'web development',
    'mobile apps',
    'cinematic solutions',
    'Tunisia',
    'Den Den',
  ].join(', '),
  openGraph: {
    title: 'Contact - The Nexus Command Center',
    description:
      "Ready to embark on your digital journey? Connect with our cosmic team and let's create something extraordinary together.",
    url: 'https://orsonvision.com/contact',
    siteName: 'Orson Vision',
    images: [
      {
        url: '/assets/contact/hero/nexus-command.jpg',
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
    title: 'Contact - The Nexus Command Center',
    description:
      "Ready to embark on your digital journey? Connect with our cosmic team and let's create something extraordinary together.",
    images: ['/assets/contact/hero/nexus-command.jpg'],
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
        {/* Act I: The Command - Hero Section */}
        <ContactHeroCommand />

        {/* Act II: The Coordinates - Contact Form */}
        <ContactFormCoordinates />

        {/* Act III: The Nexus - Contact Information */}
        <ContactInfoNexus />
      </main>
    </div>
  );
}
