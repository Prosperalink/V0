import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nonprofits Planet - The Galaxy of Social Impact',
  description:
    'Amplify your mission in the cosmic spotlight. Our nonprofits planet specializes in creating compelling visual narratives that inspire action, build community support, and showcase social impact across the digital universe.',
  keywords: [
    'nonprofit marketing',
    'social impact videos',
    'charity communication',
    'mission storytelling',
    'community engagement',
    'cosmic impact',
    'nonprofits planet',
    'social change',
    'nonprofit cinematography',
    'donor engagement',
  ].join(', '),
  openGraph: {
    title: 'Nonprofits Planet - The Galaxy of Social Impact',
    description:
      'Amplify your mission in the cosmic spotlight. Our nonprofits planet specializes in creating compelling visual narratives that inspire action and build community support.',
    url: 'https://orsonvision.com/planets-of-partnership/nonprofits',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Nonprofits+Galaxy',
        width: 1200,
        height: 630,
        alt: 'Nonprofits Planet - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nonprofits Planet - The Galaxy of Social Impact',
    description:
      'Amplify your mission in the cosmic spotlight. Our nonprofits planet specializes in creating compelling visual narratives that inspire action and build community support.',
    images: [
      'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Nonprofits+Galaxy',
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
  alternates: {
    canonical: 'https://orsonvision.com/planets-of-partnership/nonprofits',
  },
};

export default function NonprofitsPlanetPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Hero Section - The Nonprofits Galaxy */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The{' '}
              <span className="text-golden-yellow golden-text-high-contrast bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text text-transparent">
                Nonprofits Galaxy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Where social impact becomes cosmic change. Amplify your mission
              with cinematic storytelling that inspires action, builds community
              support, and showcases the transformative power of your work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Amplify Your Mission
              </button>
              <button className="border border-golden-yellow text-golden-yellow px-8 py-3 rounded-lg font-semibold hover:bg-golden-yellow hover:text-deep-blue transition-colors">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-dark-tone/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Stellar Impact Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Mission Storytelling
                </h3>
                <p className="text-gray-300">
                  Share your organization's story with compelling narratives
                  that connect hearts and inspire action for your cause.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">💝</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Donor Engagement
                </h3>
                <p className="text-gray-300">
                  Create content that builds trust with donors and showcases the
                  tangible impact of their contributions.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Community Building
                </h3>
                <p className="text-gray-300">
                  Foster connections with volunteers, partners, and supporters
                  through engaging visual content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Cosmic Challenges in Social Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Amplifying Impact in the Digital Cosmos
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Communicating complex social issues with clarity and
                    compassion
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Building trust and credibility with limited resources
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Inspiring action and engagement from diverse audiences
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Our Impactful Solutions
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Cinematic storytelling that humanizes social issues
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Strategic content that builds trust and credibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Engaging narratives that inspire action and support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-t from-transparent to-dark-tone/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Stellar Impact Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">H</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Hope Foundation Tunisia
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Education & Youth Development
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Our impact video increased donations by 400% and helped us
                  reach new supporters across the region. The storytelling
                  connected people to our mission in a powerful way."
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">E</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Environmental Action Tunisia
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Environmental Conservation
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The documentary-style content we created raised awareness
                  about our conservation efforts and increased volunteer
                  sign-ups by 300%."
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
              Why Nonprofits Choose Our Planet
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Compassionate Approach
                </h3>
                <p className="text-gray-300">
                  We understand the sensitive nature of social impact work and
                  create content that reflects the care and dedication of your
                  mission.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Measurable Impact
                </h3>
                <p className="text-gray-300">
                  Our content drives measurable results in donations, volunteer
                  engagement, and community awareness.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Inspiring Action
                </h3>
                <p className="text-gray-300">
                  We create content that not only informs but inspires people to
                  take action and support your cause.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-t from-dark-tone/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Amplify Your Social Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the nonprofits galaxy and transform how you communicate your
              mission through cinematic storytelling that inspires action and
              builds community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Start Your Impact Journey
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
