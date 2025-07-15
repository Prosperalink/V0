import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Creative Services - Digital Vérité',
  description:
    'Bring your vision to life with our creative services. Video production, photography, motion design, and audio production with technical precision and artistic vision.',
  keywords: [
    'video production',
    'photography',
    'motion design',
    'audio production',
    'creative services',
    'Tunisia',
  ],
};

export default function CreativeServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-gray-900 px-4 max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🎬</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Bring Your
            <br />
            <span className="text-purple-600">Vision to Life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Technical precision with artistic vision. From video production to
            motion design, we create compelling visual content that engages and
            inspires.
          </p>
          <Link
            href="/contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Start Your Creative Project
          </Link>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Creative Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Production */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Video Production
              </h3>
              <p className="text-gray-600 mb-6">
                Authentic event coverage and corporate storytelling with
                documentary-style authenticity.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Event coverage and live streaming</li>
                <li>• Corporate video production</li>
                <li>• Digital content creation</li>
                <li>• Video marketing materials</li>
              </ul>
            </div>

            {/* Cinematic Production */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Cinematic Production
              </h3>
              <p className="text-gray-600 mb-6">
                High-end cinematic productions that elevate your brand with
                artistic vision and technical precision.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Brand films and commercials</li>
                <li>• Artistic direction and editing</li>
                <li>• Music video production</li>
                <li>• Premium advertising spots</li>
              </ul>
            </div>

            {/* Photography */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Photography & Content
              </h3>
              <p className="text-gray-600 mb-6">
                Capturing moments with emotional depth and artistic vision. No
                staged photography, just real moments.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Product photography</li>
                <li>• Fashion and beauty photography</li>
                <li>• Event coverage</li>
                <li>• Documentary photography</li>
              </ul>
            </div>

            {/* Motion Design */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Motion Design & Animation
              </h3>
              <p className="text-gray-600 mb-6">
                Dynamic visual storytelling through animation. Every movement
                tells a story, every transition creates emotion.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 2D/3D animation</li>
                <li>• Logo animation</li>
                <li>• Explainer videos</li>
                <li>• Cinematic visual effects</li>
              </ul>
            </div>

            {/* Audio Production */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Audio Production & Podcasts
              </h3>
              <p className="text-gray-600 mb-6">
                Professional audio content creation that connects with your
                audience through real voices and real stories.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Podcast recording</li>
                <li>• Audio editing</li>
                <li>• Video podcasts</li>
                <li>• Distribution strategies</li>
              </ul>
            </div>

            {/* Brand Identity */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Design & Brand Identity
              </h3>
              <p className="text-gray-600 mb-6">
                Creating compelling visual identities and brand experiences that
                strengthen your brand identity.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Logo design</li>
                <li>• Visual identity</li>
                <li>• Communication materials</li>
                <li>• Brand guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Creative Portfolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Items */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-6xl">🎥</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Corporate Brand Film
                </h3>
                <p className="text-gray-600 mb-4">
                  Cinematic brand story for manufacturing company
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 Tunis, Tunisia</span>
                  <span className="mx-2">•</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                <span className="text-6xl">📸</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Product Photography
                </h3>
                <p className="text-gray-600 mb-4">
                  Authentic product showcase for retail brand
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 Sousse, Tunisia</span>
                  <span className="mx-2">•</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                <span className="text-6xl">✨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Motion Design
                </h3>
                <p className="text-gray-600 mb-4">
                  Animated explainer video for tech startup
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 Tunis, Tunisia</span>
                  <span className="mx-2">•</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Technical Excellence
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Equipment & Technology
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 4K video cameras and drones</li>
                <li>• Professional lighting equipment</li>
                <li>• High-end audio recording gear</li>
                <li>• Advanced editing software</li>
                <li>• Motion graphics and animation tools</li>
                <li>• Color grading and post-production</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Quality Standards
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 4K resolution video delivery</li>
                <li>• Professional color grading</li>
                <li>• Multiple format delivery</li>
                <li>• Optimized for web performance</li>
                <li>• Mobile-friendly content</li>
                <li>• Accessibility compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Creative Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Basic Creative
              </h3>
              <div className="text-3xl font-bold mb-6 text-purple-600">
                $800
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• 2-hour video production</li>
                <li>• Basic editing and color grading</li>
                <li>• 2-3 photo sessions</li>
                <li>• Simple motion graphics</li>
                <li>• 2 weeks delivery</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Basic Package
              </Link>
            </div>

            {/* Professional Package */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Professional Creative</h3>
              <div className="text-3xl font-bold mb-6">$1,500</div>
              <ul className="space-y-3 mb-8">
                <li>• 4-hour video production</li>
                <li>• Advanced editing and effects</li>
                <li>• 5-7 photo sessions</li>
                <li>• Complex motion graphics</li>
                <li>• Audio production</li>
                <li>• 3 weeks delivery</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-white hover:bg-gray-100 text-purple-600 text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Professional Package
              </Link>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Premium Creative
              </h3>
              <div className="text-3xl font-bold mb-6 text-purple-600">
                $3,000
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Full-day video production</li>
                <li>• Cinematic quality editing</li>
                <li>• Unlimited photo sessions</li>
                <li>• Advanced motion design</li>
                <li>• Professional audio production</li>
                <li>• Brand identity design</li>
                <li>• 4 weeks delivery</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Premium Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's discuss your creative vision and bring it to life with
            technical precision and artistic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
