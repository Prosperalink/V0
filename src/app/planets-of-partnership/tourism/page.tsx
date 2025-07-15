import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tourism Planet - The Galaxy of Travel Experiences',
  description:
    'Showcase your destination in the cosmic spotlight. Our tourism planet specializes in creating compelling visual narratives that transport viewers to extraordinary destinations and inspire wanderlust across the digital universe.',
  keywords: [
    'tourism marketing',
    'destination videos',
    'travel content',
    'hotel marketing',
    'tourist attractions',
    'cosmic travel',
    'destination storytelling',
    'tourism planet',
    'travel cinematography',
    'destination marketing',
  ].join(', '),
  openGraph: {
    title: 'Tourism Planet - The Galaxy of Travel Experiences',
    description:
      'Showcase your destination in the cosmic spotlight. Our tourism planet specializes in creating compelling visual narratives that transport viewers to extraordinary destinations.',
    url: 'https://orsonvision.com/planets-of-partnership/tourism',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Tourism+Galaxy',
        width: 1200,
        height: 630,
        alt: 'Tourism Planet - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tourism Planet - The Galaxy of Travel Experiences',
    description:
      'Showcase your destination in the cosmic spotlight. Our tourism planet specializes in creating compelling visual narratives that transport viewers to extraordinary destinations.',
    images: ['https://placehold.co/1200x630/0A0F1A/FFED4E?text=Tourism+Galaxy'],
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
    canonical: 'https://orsonvision.com/planets-of-partnership/tourism',
  },
};

export default function TourismPlanetPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Hero Section - The Tourism Galaxy */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The{' '}
              <span className="text-golden-yellow bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text text-transparent">
                Tourism Galaxy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Where destinations become cosmic destinations. Showcase your
              location in the stellar spotlight with cinematic storytelling that
              transports viewers to extraordinary experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Launch Your Destination
              </button>
              <button className="border border-golden-yellow text-golden-yellow px-8 py-3 rounded-lg font-semibold hover:bg-golden-yellow hover:text-deep-blue transition-colors">
                View Showcase
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
              Stellar Tourism Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🏨</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Hotel & Resort Marketing
                </h3>
                <p className="text-gray-300">
                  Transform your property into a cinematic destination. Showcase
                  amenities, experiences, and the unique atmosphere that sets
                  you apart.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🗺️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Destination Videos
                </h3>
                <p className="text-gray-300">
                  Capture the essence of your location with stunning aerial
                  footage, cultural highlights, and immersive storytelling.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Tourist Attractions
                </h3>
                <p className="text-gray-300">
                  Bring your attractions to life with dynamic content that
                  showcases experiences and encourages visitor engagement.
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
              Cosmic Challenges in Tourism
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Standing Out in the Digital Cosmos
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Competing with countless destinations in the digital space
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Conveying authentic experiences through digital media
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Creating content that inspires actual travel decisions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Our Stellar Solutions
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Cinematic storytelling that captures authentic experiences
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Strategic content distribution across multiple platforms
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Data-driven approaches to maximize engagement and bookings
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
              Stellar Tourism Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">D</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Djerba Island Resort
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Luxury Resort, Tunisia
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Our cinematic resort video increased bookings by 300% and
                  became the most shared content in our marketing history!"
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Tunisia Tourism Board
                    </h4>
                    <p className="text-gray-400 text-sm">
                      National Tourism Campaign
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The destination series we created showcased Tunisia's beauty
                  in a way that resonated with international travelers and
                  increased tourism by 40%."
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
              Why Tourism Partners Choose Our Planet
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Cinematic Quality
                </h3>
                <p className="text-gray-300">
                  Professional cinematography that captures the essence and
                  beauty of your destination with stunning visual storytelling.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Strategic Impact
                </h3>
                <p className="text-gray-300">
                  Data-driven content strategies that maximize engagement,
                  reach, and ultimately drive tourism bookings and revenue.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Global Reach
                </h3>
                <p className="text-gray-300">
                  Multi-platform distribution strategies that ensure your
                  destination reaches international audiences effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/10 to-green-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Showcase Your Destination in the Cosmic Spotlight?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your location into a must-visit destination with our
              stellar tourism marketing solutions.
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
