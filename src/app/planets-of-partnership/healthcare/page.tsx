import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Planet - The Nebula of Healing & Wellness',
  description:
    'Illuminate your healthcare mission in the cosmic spotlight. Our healthcare planet specializes in creating compassionate visual narratives that build trust, educate patients, and showcase medical excellence across the digital universe.',
  keywords: [
    'healthcare marketing',
    'medical videos',
    'patient education',
    'healthcare communication',
    'medical content',
    'cosmic healthcare',
    'healthcare planet',
    'medical storytelling',
    'healthcare cinematography',
    'patient engagement',
  ].join(', '),
  openGraph: {
    title: 'Healthcare Planet - The Nebula of Healing & Wellness',
    description:
      'Illuminate your healthcare mission in the cosmic spotlight. Our healthcare planet specializes in creating compassionate visual narratives that build trust and educate patients.',
    url: 'https://orsonvision.com/planets-of-partnership/healthcare',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Healthcare+Nebula',
        width: 1200,
        height: 630,
        alt: 'Healthcare Planet - Orson Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Planet - The Nebula of Healing & Wellness',
    description:
      'Illuminate your healthcare mission in the cosmic spotlight. Our healthcare planet specializes in creating compassionate visual narratives that build trust and educate patients.',
    images: [
      'https://placehold.co/1200x630/0A0F1A/FFED4E?text=Healthcare+Nebula',
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
    canonical: 'https://orsonvision.com/planets-of-partnership/healthcare',
  },
};

export default function HealthcarePlanetPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      {/* Hero Section - The Healthcare Nebula */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The{' '}
              <span className="text-golden-yellow golden-text-high-contrast bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text text-transparent">
                Healthcare Nebula
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Where healing meets cosmic compassion. Illuminate your healthcare
              mission with cinematic storytelling that builds trust, educates
              patients, and showcases medical excellence across the digital
              universe.
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
              Stellar Healthcare Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Medical Facility Marketing
                </h3>
                <p className="text-gray-300">
                  Showcase your healthcare facility with compassionate
                  storytelling that highlights expertise, technology, and
                  patient care excellence.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Patient Education
                </h3>
                <p className="text-gray-300">
                  Create engaging educational content that empowers patients
                  with knowledge about treatments, procedures, and wellness.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-12 h-12 bg-golden-yellow rounded-lg flex items-center justify-center mb-4">
                  <span className="text-deep-blue text-xl">👨‍⚕️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Doctor & Staff Profiles
                </h3>
                <p className="text-gray-300">
                  Build trust through personal stories of healthcare
                  professionals, their expertise, and commitment to patient
                  care.
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
              Cosmic Challenges in Healthcare
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Building Trust in the Digital Cosmos
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Conveying medical expertise with warmth and compassion
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Educating patients without overwhelming them with technical
                    jargon
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Maintaining patient privacy while showcasing facility
                    capabilities
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-golden-yellow mb-6">
                  Our Compassionate Solutions
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Cinematic storytelling that humanizes medical care
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Educational content that simplifies complex medical concepts
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-yellow mr-3">✦</span>
                    Strategic content that builds trust and patient confidence
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
              Stellar Healthcare Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">C</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Carthage Medical Center
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Private Hospital, Tunis
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Our patient education videos increased appointment bookings
                  by 250% and helped patients feel more confident about their
                  treatment plans."
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="text-deep-blue font-bold">D</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Dr. Sarah Ben Ali
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Cardiologist, Private Practice
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The personal profile video helped me connect with patients on
                  a deeper level. My practice has grown significantly since we
                  launched the content."
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
              Why Healthcare Partners Choose Our Planet
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
                  We understand the sensitive nature of healthcare and create
                  content that reflects the care and compassion of your
                  practice.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Educational Excellence
                </h3>
                <p className="text-gray-300">
                  Transform complex medical information into engaging,
                  easy-to-understand content that empowers patients.
                </p>
              </div>
              <div className="bg-dark-tone/50 p-6 rounded-lg border border-gray-700">
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-deep-blue text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Privacy & Compliance
                </h3>
                <p className="text-gray-300">
                  We ensure all content meets healthcare privacy standards and
                  regulatory requirements while maintaining effectiveness.
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
              Ready to Illuminate Your Healthcare Mission?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the healthcare nebula and transform how you connect with
              patients through cinematic storytelling that builds trust and
              educates communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden-yellow text-deep-blue px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Start Your Healthcare Journey
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
