import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weddings Planet - The Constellation of Love Stories',
  description:
    'Transform your special day into a cosmic celebration. Our wedding planet specializes in capturing love stories with cinematic grandeur, creating timeless memories that shine across the digital universe.',
  keywords: [
    'wedding photography',
    'wedding videography',
    'cinematic weddings',
    'love stories',
    'cosmic celebrations',
    'wedding planet',
    'timeless memories',
    'wedding cinematography',
    'destination weddings',
    'wedding marketing',
  ].join(', '),
  openGraph: {
    title: 'Weddings Planet - The Constellation of Love Stories',
    description:
      'Transform your special day into a cosmic celebration. Our wedding planet specializes in capturing love stories with cinematic grandeur.',
    url: 'https://orsonvision.com/planets-of-partnership/weddings',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Wedding+Constellation',
        width: 1200,
        height: 630,
        alt: 'Weddings Planet - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weddings Planet - The Constellation of Love Stories',
    description:
      'Transform your special day into a cosmic celebration. Our wedding planet specializes in capturing love stories with cinematic grandeur.',
    images: [
      'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Wedding+Constellation',
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
    canonical: 'https://orsonvision.com/planets-of-partnership/weddings',
  },
};

export default function WeddingsPlanetPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Hero Section - The Wedding Constellation */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The{' '}
              <span className="text-golden-yellow bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text text-transparent">
                Wedding Constellation
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Where love stories become cosmic legends. Transform your special
              day into a celestial celebration that captures every moment with
              cinematic grandeur and timeless beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Book Your Story
              </button>
              <button className="border border-golden-yellow text-golden-yellow px-8 py-3 rounded-lg font-semibold hover:bg-golden-yellow hover:text-deep-blue transition-colors">
                View Gallery
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
              Celestial Wedding Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">📸</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Cinematic Photography
                </h3>
                <p className="text-gray-300">
                  Every shot tells a story. Our cinematic approach captures the
                  raw emotions, intimate moments, and grand celebrations of your
                  special day.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🎬</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Wedding Cinematography
                </h3>
                <p className="text-gray-300">
                  Transform your wedding into a cinematic masterpiece. From the
                  first look to the last dance, every moment becomes a scene in
                  your love story.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">💫</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Engagement Stories
                </h3>
                <p className="text-gray-300">
                  Capture the magic of your engagement with stunning pre-wedding
                  shoots that set the stage for your cosmic love story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Why Couples Choose Our Wedding Planet
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Cinematic Storytelling
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Every wedding becomes a unique cinematic narrative
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Professional cinematography techniques applied to wedding
                    coverage
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Emotional storytelling that captures the essence of your
                    love
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Timeless Quality
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    High-quality equipment and professional editing
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Attention to detail in every frame and moment
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Memories that will shine for generations to come
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
              Love Stories That Shine
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Sarah & Michael
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Beach Wedding, Sousse
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Our wedding video is like a Hollywood movie! Every time we
                  watch it, we relive the magic of our special day. Thank you
                  for making our love story cinematic!"
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">L</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Leila & Ahmed</h4>
                    <p className="text-gray-400 text-sm">
                      Traditional Wedding, Tunis
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The way they captured our traditional ceremony with modern
                  cinematic techniques was incredible. Our families are still
                  talking about the beautiful video!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Wedding Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700 text-center">
                <h3 className="text-xl font-semibold text-golden-yellow mb-4">
                  Stellar Story
                </h3>
                <p className="text-gray-300 mb-6">
                  Essential coverage for intimate weddings
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• 6 hours of coverage</li>
                  <li>• Cinematic highlights video</li>
                  <li>• 200+ edited photos</li>
                  <li>• Online gallery</li>
                </ul>
                <button className="bg-golden-yellow text-deep-blue px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Choose Package
                </button>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-golden-yellow text-center">
                <h3 className="text-xl font-semibold text-golden-yellow mb-4">
                  Cosmic Celebration
                </h3>
                <p className="text-gray-300 mb-6">
                  Complete coverage for grand celebrations
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Full day coverage</li>
                  <li>• Feature-length wedding film</li>
                  <li>• 500+ edited photos</li>
                  <li>• Engagement session</li>
                  <li>• Drone footage</li>
                </ul>
                <button className="bg-golden-yellow text-deep-blue px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Choose Package
                </button>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700 text-center">
                <h3 className="text-xl font-semibold text-golden-yellow mb-4">
                  Galactic Experience
                </h3>
                <p className="text-gray-300 mb-6">
                  Premium coverage for destination weddings
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Multi-day coverage</li>
                  <li>• Multiple cinematographers</li>
                  <li>• 1000+ edited photos</li>
                  <li>• Documentary-style film</li>
                  <li>• Travel included</li>
                </ul>
                <button className="bg-golden-yellow text-deep-blue px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Choose Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-900/10 to-purple-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Your Cosmic Love Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us transform your special day into a cinematic masterpiece
              that will shine forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Book Consultation
              </button>
              <button className="border border-golden-yellow text-golden-yellow px-8 py-4 rounded-lg font-semibold hover:bg-golden-yellow hover:text-deep-blue transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
