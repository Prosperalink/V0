import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fashion & Retail - Digital Vérité',
  description:
    'Elevate your fashion brand with our specialized services. Fashion photography, product content, brand identity, and e-commerce solutions that drive sales.',
  keywords: [
    'fashion photography',
    'product content',
    'brand identity',
    'e-commerce',
    'fashion marketing',
    'Tunisia',
  ],
};

export default function FashionRetailPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-gray-900 px-4 max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🛍️</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Elevate Your
            <br />
            <span className="text-pink-600 golden-text-high-contrast">
              Fashion Brand
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            From fashion photography to e-commerce solutions, we help fashion
            and retail brands create compelling visual content that drives sales
            and builds brand recognition.
          </p>
          <Link
            href="/contact"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Start Your Fashion Project
          </Link>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Fashion & Retail Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fashion Photography */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Fashion Photography
              </h3>
              <p className="text-gray-600 mb-6">
                Authentic fashion photography that captures the essence of your
                brand and products.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Product photography</li>
                <li>• Fashion model shoots</li>
                <li>• Lifestyle photography</li>
                <li>• Editorial fashion content</li>
              </ul>
            </div>

            {/* Product Content */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Product Content Creation
              </h3>
              <p className="text-gray-600 mb-6">
                Compelling product videos and content that showcase your
                products and drive sales.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Product demonstration videos</li>
                <li>• 360-degree product views</li>
                <li>• Behind-the-scenes content</li>
                <li>• Social media content</li>
              </ul>
            </div>

            {/* Brand Identity */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Brand Identity Design
              </h3>
              <p className="text-gray-600 mb-6">
                Creating compelling visual identities that strengthen your brand
                and improve user experience.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Logo design</li>
                <li>• Visual identity systems</li>
                <li>• Brand guidelines</li>
                <li>• Packaging design</li>
              </ul>
            </div>

            {/* E-commerce Solutions */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                E-commerce Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Complete e-commerce solutions designed specifically for fashion
                and retail businesses.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Custom e-commerce websites</li>
                <li>• Payment gateway integration</li>
                <li>• Inventory management</li>
                <li>• Mobile shopping optimization</li>
              </ul>
            </div>

            {/* Fashion Marketing */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Fashion Marketing
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic marketing campaigns designed specifically for fashion
                and retail brands.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Social media marketing</li>
                <li>• Influencer collaborations</li>
                <li>• Fashion content marketing</li>
                <li>• Seasonal campaigns</li>
              </ul>
            </div>

            {/* Visual Merchandising */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Visual Merchandising
              </h3>
              <p className="text-gray-600 mb-6">
                Visual content that enhances your brand's online and offline
                presence.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Lookbook creation</li>
                <li>• Catalog photography</li>
                <li>• Store display content</li>
                <li>• Seasonal visual content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Fashion Portfolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Items */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <span className="text-6xl">👗</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Tunisian Fashion House
                </h3>
                <p className="text-gray-600 mb-4">
                  Fashion photography and brand identity redesign
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
                <span className="text-6xl">🛒</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Online Boutique
                </h3>
                <p className="text-gray-600 mb-4">
                  E-commerce solution with 40% sales increase
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
                  <span>📍 Tunis, Tunisia</span>
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
            Fashion Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">👗</div>
                <h3 className="text-xl font-bold text-gray-900">
                  Tunisian Fashion House
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Digital Vérité's fashion photography and brand identity
                redesign transformed our brand's visual presence. The authentic
                approach to showcasing our designs resonated with customers and
                increased our online engagement by 60%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-pink-600 font-bold">L</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Leila Ben Ali</p>
                  <p className="text-sm text-gray-500">
                    Fashion Designer - Tunis, Tunisia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🛒</div>
                <h3 className="text-xl font-bold text-gray-900">
                  Online Boutique
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                "The e-commerce solution developed by Digital Vérité resulted in
                a 40% increase in sales and significantly improved our customer
                experience. The mobile-optimized design and seamless payment
                integration made all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Samira Ben Salem
                  </p>
                  <p className="text-sm text-gray-500">
                    Boutique Owner - Sousse, Tunisia
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
            Fashion & Retail Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Basic Fashion
              </h3>
              <div className="text-3xl font-bold mb-6 text-pink-600">
                $1,500
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Product photography session</li>
                <li>• Basic brand identity</li>
                <li>• Social media content</li>
                <li>• Website updates</li>
                <li>• 3 months of support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-pink-600 hover:bg-pink-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Basic Package
              </Link>
            </div>

            {/* Professional Package */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Professional Fashion</h3>
              <div className="text-3xl font-bold mb-6">$3,500</div>
              <ul className="space-y-3 mb-8">
                <li>• Complete photography package</li>
                <li>• Brand identity design</li>
                <li>• E-commerce website</li>
                <li>• Digital marketing campaign</li>
                <li>• Content creation</li>
                <li>• 6 months of support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-white hover:bg-gray-100 text-pink-600 text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Professional Package
              </Link>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Premium Fashion
              </h3>
              <div className="text-3xl font-bold mb-6 text-pink-600">
                $7,000
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Complete brand transformation</li>
                <li>• Advanced e-commerce solution</li>
                <li>• Multi-channel marketing</li>
                <li>• Influencer collaborations</li>
                <li>• Analytics and reporting</li>
                <li>• 12 months of support</li>
                <li>• Ongoing consultation</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-pink-600 hover:bg-pink-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Premium Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Elevate Your Fashion Brand?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Let's discuss how we can help your fashion or retail business create
            compelling visual content that drives sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
