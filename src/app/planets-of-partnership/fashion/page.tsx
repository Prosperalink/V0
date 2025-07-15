import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fashion Planet - The Nebula of Style & Innovation',
  description:
    'Illuminate your brand in the cosmic spotlight. Our fashion planet specializes in creating stunning visual narratives that showcase collections, tell brand stories, and inspire style across the digital universe.',
  keywords: [
    'fashion marketing',
    'fashion videos',
    'brand storytelling',
    'fashion photography',
    'style content',
    'cosmic fashion',
    'fashion planet',
    'fashion cinematography',
    'brand showcase',
    'fashion communication',
  ].join(', '),
  openGraph: {
    title: 'Fashion Planet - The Nebula of Style & Innovation',
    description:
      'Illuminate your brand in the cosmic spotlight. Our fashion planet specializes in creating stunning visual narratives that showcase collections and tell brand stories.',
    url: 'https://orsonvision.com/planets-of-partnership/fashion',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Fashion+Nebula',
        width: 1200,
        height: 630,
        alt: 'Fashion Planet - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion Planet - The Nebula of Style & Innovation',
    description:
      'Illuminate your brand in the cosmic spotlight. Our fashion planet specializes in creating stunning visual narratives that showcase collections and tell brand stories.',
    images: ['https://placehold.co/1200x630/0A0F1A/FFED4E?text=Fashion+Nebula'],
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
    canonical: 'https://orsonvision.com/planets-of-partnership/fashion',
  },
};

export default function FashionPlanetPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Hero Section - The Fashion Nebula */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The{' '}
              <span className="text-golden-yellow bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text text-transparent">
                Fashion Nebula
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Where style becomes cosmic art. Illuminate your brand with
              cinematic storytelling that showcases collections, tells brand
              stories, and inspires style across the digital universe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Illuminate Your Brand
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
              Stellar Fashion Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">👗</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Collection Showcases
                </h3>
                <p className="text-gray-300">
                  Bring your collections to life with cinematic presentations
                  that highlight design details, craftsmanship, and style
                  innovation.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">📸</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Fashion Photography
                </h3>
                <p className="text-gray-300">
                  Capture stunning imagery that showcases your pieces in their
                  best light, from editorial shoots to e-commerce content.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🎬</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Brand Storytelling
                </h3>
                <p className="text-gray-300">
                  Tell your brand's unique story through compelling visual
                  narratives that connect with your audience and build brand
                  loyalty.
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
              Cosmic Challenges in Fashion
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Standing Out in the Style Cosmos
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Differentiating your brand in a crowded fashion market
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Showcasing quality and craftsmanship through digital media
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Building emotional connections with fashion-conscious
                    consumers
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
                    Cinematic storytelling that showcases unique brand identity
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    High-quality visual content that highlights craftsmanship
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Engaging narratives that build emotional brand connections
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
              Stellar Fashion Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">E</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Elegance Tunis</h4>
                    <p className="text-gray-400 text-sm">
                      Luxury Fashion House
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Our collection showcase video increased online sales by 350%
                  and helped us reach international markets. The cinematic
                  approach made our pieces look like art!"
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Modern Style Boutique
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Contemporary Fashion Retailer
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The brand storytelling content we created helped us build a
                  loyal customer base and increased our social media following
                  by 500%."
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
              Why Fashion Brands Choose Our Planet
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Creative Excellence
                </h3>
                <p className="text-gray-300">
                  We bring artistic vision to every project, creating content
                  that showcases your designs in their most beautiful light.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Measurable Results
                </h3>
                <p className="text-gray-300">
                  Our content drives measurable results in sales, engagement,
                  and brand awareness for fashion businesses.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Brand Elevation
                </h3>
                <p className="text-gray-300">
                  We help fashion brands elevate their presence and connect with
                  their ideal customers through compelling storytelling.
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
              Ready to Illuminate Your Fashion Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the fashion nebula and transform how you showcase your
              collections through cinematic storytelling that inspires style and
              builds brand loyalty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Start Your Style Journey
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
