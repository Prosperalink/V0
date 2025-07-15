import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schools Planet - The Constellation of Educational Excellence',
  description:
    'Illuminate your educational mission in the cosmic spotlight. Our schools planet specializes in creating inspiring visual narratives that showcase academic excellence, student achievements, and institutional values across the digital universe.',
  keywords: [
    'school marketing',
    'educational videos',
    'student recruitment',
    'academic excellence',
    'school communication',
    'cosmic education',
    'schools planet',
    'educational storytelling',
    'school cinematography',
    'student engagement',
  ].join(', '),
  openGraph: {
    title: 'Schools Planet - The Constellation of Educational Excellence',
    description:
      'Illuminate your educational mission in the cosmic spotlight. Our schools planet specializes in creating inspiring visual narratives that showcase academic excellence.',
    url: 'https://orsonvision.com/planets-of-partnership/schools',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Schools+Constellation',
        width: 1200,
        height: 630,
        alt: 'Schools Planet - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schools Planet - The Constellation of Educational Excellence',
    description:
      'Illuminate your educational mission in the cosmic spotlight. Our schools planet specializes in creating inspiring visual narratives that showcase academic excellence.',
    images: [
      'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Schools+Constellation',
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
    canonical: 'https://orsonvision.com/planets-of-partnership/schools',
  },
};

export default function SchoolsPlanetPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Hero Section - The Schools Constellation */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The{' '}
              <span className="text-golden-yellow golden-text-high-contrast bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text text-transparent">
                Schools Constellation
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Where knowledge becomes cosmic wisdom. Illuminate your educational
              mission with cinematic storytelling that showcases academic
              excellence, student achievements, and institutional values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Illuminate Your Mission
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
              Stellar Educational Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  School Marketing & Recruitment
                </h3>
                <p className="text-gray-300">
                  Showcase your institution's unique value proposition with
                  compelling content that attracts students and parents.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Academic Excellence Showcase
                </h3>
                <p className="text-gray-300">
                  Highlight your programs, facilities, and achievements with
                  cinematic storytelling that inspires pride and confidence.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Student & Alumni Stories
                </h3>
                <p className="text-gray-300">
                  Share inspiring stories of student success and alumni
                  achievements that demonstrate your institution's impact.
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
              Cosmic Challenges in Education
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Standing Out in the Educational Cosmos
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Differentiating your institution in a competitive market
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Communicating complex educational concepts clearly
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Building trust with parents and prospective students
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Our Inspiring Solutions
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Cinematic storytelling that showcases unique value
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Engaging content that simplifies complex concepts
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Strategic content that builds confidence and trust
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
              Stellar Educational Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">I</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      International School of Tunis
                    </h4>
                    <p className="text-gray-400 text-sm">
                      International School
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Our school showcase video increased enrollment inquiries by
                  300% and helped us attract families from across the region!"
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">U</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      University of Carthage
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Higher Education Institution
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The alumni success stories we created inspired current
                  students and increased our international student applications
                  by 150%."
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
              Why Educational Institutions Choose Our Planet
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Strategic Storytelling
                </h3>
                <p className="text-gray-300">
                  We craft compelling narratives that highlight your unique
                  strengths and differentiate your institution in the market.
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
                  Our content drives measurable results in enrollment,
                  engagement, and institutional reputation.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Inspiring Excellence
                </h3>
                <p className="text-gray-300">
                  We showcase academic excellence in ways that inspire pride and
                  confidence in your community.
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
              Ready to Illuminate Your Educational Mission?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the schools constellation and transform how you showcase
              academic excellence through cinematic storytelling that inspires
              students, parents, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Start Your Educational Journey
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
