import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMEs Planet - The Nebula of Small & Medium Enterprises',
  description:
    'Navigate the dynamic nebula of Small & Medium Enterprises, where agility meets cosmic ambition. Our specialized solutions transform SMEs into stellar performers across the digital universe.',
  keywords: [
    'SMEs',
    'small business',
    'medium enterprise',
    'digital transformation',
    'cosmic solutions',
    'nebula of enterprises',
    'stellar performance',
    'digital marketing',
    'video production',
    'web development',
  ].join(', '),
  openGraph: {
    title: 'SMEs Planet - The Nebula of Small & Medium Enterprises',
    description:
      'Navigate the dynamic nebula of Small & Medium Enterprises, where agility meets cosmic ambition.',
    url: 'https://orsonvision.com/planets-of-partnership/smes',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0F1A/FFED4E?text=SMEs+Nebula',
        width: 1200,
        height: 630,
        alt: 'SMEs Planet - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMEs Planet - The Nebula of Small & Medium Enterprises',
    description:
      'Navigate the dynamic nebula of Small & Medium Enterprises, where agility meets cosmic ambition.',
    images: ['https://placehold.co/1200x630/0A0F1A/FFED4E?text=SMEs+Nebula'],
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
    canonical: 'https://orsonvision.com/planets-of-partnership/smes',
  },
};

export default function SMEsPlanetPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Hero Section - The SMEs Nebula */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The{' '}
              <span className="text-golden-yellow bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text text-transparent">
                SMEs Nebula
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Where agility meets cosmic ambition. Navigate the dynamic nebula
              of Small & Medium Enterprises, where every business becomes a
              stellar performer in the digital universe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Launch Your Mission
              </button>
              <button className="border border-golden-yellow text-golden-yellow px-8 py-3 rounded-lg font-semibold hover:bg-golden-yellow hover:text-deep-blue transition-colors">
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-dark-tone/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Cosmic Challenges in the SMEs Nebula
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Limited Resources
                </h3>
                <p className="text-gray-300">
                  Navigating the cosmic expanse with constrained budgets and
                  manpower, requiring efficient, scalable solutions.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Market Competition
                </h3>
                <p className="text-gray-300">
                  Standing out in a crowded nebula of competitors, needing
                  unique positioning and compelling narratives.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Digital Transformation
                </h3>
                <p className="text-gray-300">
                  Adapting to the digital cosmos while maintaining operational
                  efficiency and customer relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Stellar Solutions for SMEs
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Cost-Effective Digital Presence
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Professional video content that maximizes impact per
                    investment
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Scalable web solutions that grow with your business
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Strategic marketing campaigns with measurable ROI
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Competitive Edge Solutions
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Unique brand storytelling that differentiates your business
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    High-quality visual content that builds trust and
                    credibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Digital marketing strategies that target your ideal
                    customers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-t from-transparent to-dark-tone/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Stellar Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Ahmed's Restaurant
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Local Restaurant Chain
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Orson Vision transformed our local restaurant into a digital
                  sensation. Our social media presence exploded, and we're now
                  the talk of the town!"
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      TechStart Tunisia
                    </h4>
                    <p className="text-gray-400 text-sm">Tech Startup</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The cinematic approach to our product videos helped us secure
                  international investors. We're now expanding across the
                  region!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
              Why SMEs Choose Orson Vision
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Cost-Effective
                </h3>
                <p className="text-gray-300">
                  Maximize your investment with scalable solutions that grow
                  with your business.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Fast Delivery
                </h3>
                <p className="text-gray-300">
                  Quick turnaround times that keep pace with your business needs
                  and market opportunities.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Results-Driven
                </h3>
                <p className="text-gray-300">
                  Focused on measurable outcomes that directly impact your
                  business growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-golden-yellow/10 to-yellow-400/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Launch Your SME into the Digital Cosmos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the stellar performers who've transformed their businesses
              with our cosmic solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Start Your Journey
              </button>
              <button className="border border-golden-yellow text-golden-yellow px-8 py-4 rounded-lg font-semibold hover:bg-golden-yellow hover:text-deep-blue transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
