import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hospitality Marketing - Digital Vérité',
  description:
    'Showcase your hospitality excellence with our specialized marketing services. Hotel marketing videos, restaurant photography, and tourism content that drives bookings.',
  keywords: [
    'hotel marketing',
    'restaurant photography',
    'tourism content',
    'hospitality marketing',
    'Tunisia',
  ],
};

export default function HospitalityMarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-gray-900 px-4 max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🏨</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Showcase Your
            <br />
            <span className="text-orange-600 golden-text-high-contrast">
              Hospitality Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            From hotel marketing videos to restaurant photography, we create
            compelling content that showcases your hospitality and drives
            bookings.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Start Your Hospitality Project
          </Link>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Hospitality Marketing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hotel Marketing */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Hotel Marketing Videos
              </h3>
              <p className="text-gray-600 mb-6">
                Cinematic hotel videos that showcase your property's unique
                features and guest experience.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Property showcase videos</li>
                <li>• Room and amenity tours</li>
                <li>• Guest experience stories</li>
                <li>• Seasonal marketing content</li>
              </ul>
            </div>

            {/* Restaurant Photography */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Restaurant Photography
              </h3>
              <p className="text-gray-600 mb-6">
                Authentic food photography that captures the essence of your
                culinary experience.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Food and beverage photography</li>
                <li>• Restaurant atmosphere shots</li>
                <li>• Chef and kitchen photography</li>
                <li>• Menu photography</li>
              </ul>
            </div>

            {/* Tourism Content */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Tourism Content Creation
              </h3>
              <p className="text-gray-600 mb-6">
                Compelling tourism content that showcases destinations and
                attracts visitors.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Destination marketing videos</li>
                <li>• Cultural experience content</li>
                <li>• Travel photography</li>
                <li>• Tourism campaign materials</li>
              </ul>
            </div>

            {/* Hospitality Websites */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Hospitality Websites
              </h3>
              <p className="text-gray-600 mb-6">
                High-performance websites designed specifically for hospitality
                businesses.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Hotel booking websites</li>
                <li>• Restaurant websites</li>
                <li>• Tourism destination sites</li>
                <li>• Mobile-optimized design</li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Hospitality Digital Marketing
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic digital marketing campaigns designed for hospitality
                businesses.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Google Ads for hotels</li>
                <li>• Social media marketing</li>
                <li>• Email marketing campaigns</li>
                <li>• Local SEO optimization</li>
              </ul>
            </div>

            {/* Event Coverage */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Event Coverage
              </h3>
              <p className="text-gray-600 mb-6">
                Professional coverage of hospitality events, weddings, and
                special occasions.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Hotel event coverage</li>
                <li>• Restaurant events</li>
                <li>• Wedding photography</li>
                <li>• Corporate events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Hospitality Portfolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Items */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-orange-200 to-yellow-200 flex items-center justify-center">
                <span className="text-6xl">🏨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Hotel Dar El Medina
                </h3>
                <p className="text-gray-600 mb-4">
                  Cinematic hotel showcase with 25% booking increase
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 Tunis, Tunisia</span>
                  <span className="mx-2">•</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-red-200 to-pink-200 flex items-center justify-center">
                <span className="text-6xl">🍽️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Restaurant La Goulette
                </h3>
                <p className="text-gray-600 mb-4">
                  Food photography and marketing campaign
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 La Goulette, Tunisia</span>
                  <span className="mx-2">•</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
                <span className="text-6xl">🌍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Tunisia Tourism Campaign
                </h3>
                <p className="text-gray-600 mb-4">
                  Destination marketing video series
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 Tunisia</span>
                  <span className="mx-2">•</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Hospitality Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🏨</div>
                <h3 className="text-xl font-bold text-gray-900">
                  Hotel Dar El Medina
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                "The cinematic hotel showcase video created by Digital Vérité
                resulted in a 25% increase in direct bookings and significantly
                improved our online presence. The authentic approach to
                showcasing our property's unique character resonated with
                guests."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-bold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Ahmed Ben Youssef
                  </p>
                  <p className="text-sm text-gray-500">
                    Hotel Manager - Tunis, Tunisia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🍽️</div>
                <h3 className="text-xl font-bold text-gray-900">
                  Restaurant La Goulette
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                "The food photography and marketing campaign by Digital Vérité
                transformed our restaurant's online presence. The authentic food
                photography captured the essence of our culinary experience and
                attracted more customers."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">F</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Fatima Ben Salem
                  </p>
                  <p className="text-sm text-gray-500">
                    Restaurant Owner - La Goulette, Tunisia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Hospitality Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Basic Hospitality
              </h3>
              <div className="text-3xl font-bold mb-6 text-orange-600">
                $2,000
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Hotel marketing video</li>
                <li>• Restaurant photography</li>
                <li>• Basic website updates</li>
                <li>• Social media content</li>
                <li>• 3 months of support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Basic Package
              </Link>
            </div>

            {/* Comprehensive Package */}
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                Comprehensive Hospitality
              </h3>
              <div className="text-3xl font-bold mb-6">$4,500</div>
              <ul className="space-y-3 mb-8">
                <li>• Complete marketing campaign</li>
                <li>• Professional photography</li>
                <li>• Website development</li>
                <li>• Digital marketing</li>
                <li>• SEO optimization</li>
                <li>• 6 months of support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-white hover:bg-gray-100 text-orange-600 text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Comprehensive Package
              </Link>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Premium Hospitality
              </h3>
              <div className="text-3xl font-bold mb-6 text-orange-600">
                $8,000
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Full digital transformation</li>
                <li>• Multi-channel marketing</li>
                <li>• Advanced website with booking</li>
                <li>• Content marketing strategy</li>
                <li>• Analytics and reporting</li>
                <li>• 12 months of support</li>
                <li>• Ongoing consultation</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Premium Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Showcase Your Hospitality?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let's discuss how we can help your hospitality business attract more
            guests with compelling, authentic content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
