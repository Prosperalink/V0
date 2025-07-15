import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artists Planet - The Galaxy of Creative Expression',
  description:
    'Illuminate your artistic vision in the cosmic spotlight. Our artists planet specializes in creating compelling visual narratives that showcase creative work, tell artist stories, and inspire audiences across the digital universe.',
  keywords: [
    'artist marketing',
    'creative videos',
    'artist storytelling',
    'creative content',
    'artistic expression',
    'cosmic creativity',
    'artists planet',
    'creative cinematography',
    'artist showcase',
    'creative communication',
  ].join(', '),
  openGraph: {
    title: 'Artists Planet - The Galaxy of Creative Expression',
    description:
      'Illuminate your artistic vision in the cosmic spotlight. Our artists planet specializes in creating compelling visual narratives that showcase creative work and tell artist stories.',
    url: 'https://orsonvision.com/planets-of-partnership/artists',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Artists+Galaxy',
        width: 1200,
        height: 630,
        alt: 'Artists Planet - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artists Planet - The Galaxy of Creative Expression',
    description:
      'Illuminate your artistic vision in the cosmic spotlight. Our artists planet specializes in creating compelling visual narratives that showcase creative work and tell artist stories.',
    images: ['https://placehold.co/1200x630/0A0F1A/FFED4E?text=Artists+Galaxy'],
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
    canonical: 'https://orsonvision.com/planets-of-partnership/artists',
  },
};

export default function ArtistsPlanetPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Hero Section - The Artists Galaxy */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The{' '}
              <span className="text-golden-yellow bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text text-transparent">
                Artists Galaxy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Where creativity becomes cosmic expression. Illuminate your
              artistic vision with cinematic storytelling that showcases your
              work, tells your story, and inspires audiences across the digital
              universe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Illuminate Your Vision
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
              Stellar Creative Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Portfolio Showcases
                </h3>
                <p className="text-gray-300">
                  Bring your artwork to life with cinematic presentations that
                  highlight your unique style, technique, and creative vision.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">📸</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Creative Photography
                </h3>
                <p className="text-gray-300">
                  Capture stunning imagery that showcases your work in its best
                  light, from studio shots to installation photography.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🎬</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Artist Storytelling
                </h3>
                <p className="text-gray-300">
                  Tell your unique story through compelling visual narratives
                  that connect with audiences and build your artistic brand.
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
              Cosmic Challenges in Creative Expression
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Standing Out in the Creative Cosmos
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Differentiating your artistic voice in a crowded creative
                    market
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Showcasing the depth and meaning behind your creative work
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Building connections with art collectors and enthusiasts
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Our Creative Solutions
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Cinematic storytelling that showcases unique artistic vision
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    High-quality visual content that captures artistic essence
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Engaging narratives that build emotional connections with
                    audiences
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
              Stellar Creative Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Amina Ben Salem
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Contemporary Painter
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The portfolio showcase video we created helped me secure
                  gallery representation and increased my art sales by 400%. The
                  cinematic approach made my work look like it belonged in a
                  museum!"
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">K</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Karim El Fassi</h4>
                    <p className="text-gray-400 text-sm">
                      Digital Artist & Designer
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The artist storytelling content helped me build a strong
                  online presence and connect with international clients. My
                  social media following grew by 600%!"
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
              Why Artists Choose Our Planet
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
                  We understand artistic vision and create content that
                  showcases your work with the respect and attention it
                  deserves.
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
                  Our content drives measurable results in sales, exposure, and
                  audience engagement for creative professionals.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Artistic Elevation
                </h3>
                <p className="text-gray-300">
                  We help artists elevate their presence and connect with their
                  ideal audiences through compelling storytelling.
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
              Ready to Illuminate Your Artistic Vision?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the artists galaxy and transform how you showcase your
              creative work through cinematic storytelling that inspires
              audiences and builds your artistic brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Start Your Creative Journey
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
