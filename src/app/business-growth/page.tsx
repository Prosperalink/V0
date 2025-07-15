import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Growth - Digital Vérité',
  description:
    'Drive real business results with our comprehensive digital solutions. From websites to marketing, we help businesses grow and succeed.',
  keywords: [
    'business growth',
    'digital transformation',
    'web development',
    'digital marketing',
    'Tunisia',
  ],
};

export default function BusinessGrowthPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-gray-900 px-4 max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Grow Your
            <br />
            <span className="text-green-600">Business</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Drive real business results with our comprehensive digital
            solutions. From websites to marketing, we help businesses grow and
            succeed with authentic, functional solutions.
          </p>
          <Link
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Start Your Growth Journey
          </Link>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Business Growth Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Transformation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Digital Transformation
              </h3>
              <p className="text-gray-600 mb-6">
                Complete digital transformation to modernize your business
                operations and online presence.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Digital strategy development</li>
                <li>• Technology integration</li>
                <li>• Process optimization</li>
                <li>• Staff training</li>
              </ul>
            </div>

            {/* Brand Development */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Brand Development
              </h3>
              <p className="text-gray-600 mb-6">
                Create compelling visual identities and brand experiences that
                strengthen your business.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Logo design and visual identity</li>
                <li>• Brand strategy development</li>
                <li>• Communication materials</li>
                <li>• Brand guidelines</li>
              </ul>
            </div>

            {/* Website Creation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Website Development
              </h3>
              <p className="text-gray-600 mb-6">
                High-performance websites and applications that connect and
                convert visitors into customers.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Custom website development</li>
                <li>• E-commerce solutions</li>
                <li>• Mobile-first design</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            {/* Marketing Campaigns */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Marketing Campaigns
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic digital campaigns that drive growth and engagement
                with measurable results.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• SEO optimization</li>
                <li>• Social media marketing</li>
                <li>• Google Ads campaigns</li>
                <li>• Email marketing</li>
              </ul>
            </div>

            {/* Video Production */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Video Production
              </h3>
              <p className="text-gray-600 mb-6">
                Authentic event coverage and corporate storytelling that builds
                trust and engagement.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Corporate video production</li>
                <li>• Brand films</li>
                <li>• Product videos</li>
                <li>• Event coverage</li>
              </ul>
            </div>

            {/* Content Creation */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Content Creation
              </h3>
              <p className="text-gray-600 mb-6">
                High-quality content that engages your audience and supports
                your business goals.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Blog content</li>
                <li>• Social media content</li>
                <li>• Product photography</li>
                <li>• Marketing materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Business Portfolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Items */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                <span className="text-6xl">🏭</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Tunisian Manufacturing Co.
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete website redesign with 300% increase in organic
                  traffic
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
                <span className="text-6xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  TechStart Tunisia
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom web application with 99.9% uptime
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 Tunis, Tunisia</span>
                  <span className="mx-2">•</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-6xl">🛍️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Local Service Business
                </h3>
                <p className="text-gray-600 mb-4">
                  Digital strategy with 50+ qualified leads per month
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 Sousse, Tunisia</span>
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
            Business Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🏭</div>
                <h3 className="text-xl font-bold text-gray-900">
                  Tunisian Manufacturing Company
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Our outdated website was holding us back. Digital Vérité's
                complete redesign and SEO optimization resulted in a 300%
                increase in organic traffic and 150% improvement in conversion
                rates. The authentic approach to showcasing our products
                resonated with customers."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mohamed Ben Ali</p>
                  <p className="text-sm text-gray-500">CEO - Tunis, Tunisia</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">💻</div>
                <h3 className="text-xl font-bold text-gray-900">
                  TechStart Tunisia
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                "Digital Vérité delivered our complex web application on
                schedule with 99.9% uptime. Their technical expertise and
                transparent communication made the entire process smooth and
                successful. The final product exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sara Ben Salem</p>
                  <p className="text-sm text-gray-500">CTO - Tunis, Tunisia</p>
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
            Business Growth Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Business Starter
              </h3>
              <div className="text-3xl font-bold mb-6 text-green-600">
                $3,000
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Website development</li>
                <li>• Basic SEO optimization</li>
                <li>• Social media setup</li>
                <li>• Brand identity design</li>
                <li>• 3 months of support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Starter Package
              </Link>
            </div>

            {/* Growth Package */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Business Growth</h3>
              <div className="text-3xl font-bold mb-6">$6,000</div>
              <ul className="space-y-3 mb-8">
                <li>• Complete website development</li>
                <li>• Digital marketing campaign</li>
                <li>• SEO and content marketing</li>
                <li>• Social media management</li>
                <li>• Video production</li>
                <li>• 6 months of support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-white hover:bg-gray-100 text-green-600 text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Growth Package
              </Link>
            </div>

            {/* Transformation Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Digital Transformation
              </h3>
              <div className="text-3xl font-bold mb-6 text-green-600">
                $12,000
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Complete digital transformation</li>
                <li>• Multi-channel marketing</li>
                <li>• Advanced website with CMS</li>
                <li>• Staff training program</li>
                <li>• Analytics and reporting</li>
                <li>• 12 months of support</li>
                <li>• Ongoing consultation</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Transformation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Let's discuss how we can help your business achieve real results
            with authentic, functional digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
