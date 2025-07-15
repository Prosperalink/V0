import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Services - Digital Vérité',
  description:
    'Build your digital presence with our comprehensive digital services. Web development, digital marketing, SEO, and social media management with performance-first approach.',
  keywords: [
    'web development',
    'digital marketing',
    'SEO',
    'social media',
    'e-commerce',
    'Tunisia',
  ],
};

export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-indigo-200">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-gray-900 px-4 max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🌐</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Build Your
            <br />
            <span className="text-indigo-600">Digital Presence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            High-performance websites and applications that last. Our code is
            clean, scalable, and optimized for performance with security best
            practices.
          </p>
          <Link
            href="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Start Your Digital Project
          </Link>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Digital Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Web Development
              </h3>
              <p className="text-gray-600 mb-6">
                Building digital experiences that connect and convert with
                modern, maintainable code architecture.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Custom website development</li>
                <li>• E-commerce solutions</li>
                <li>• Mobile-first responsive design</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Digital Marketing
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic digital campaigns that drive growth and engagement
                with measurable results.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Google Ads campaigns</li>
                <li>• Facebook Ads management</li>
                <li>• Email marketing</li>
                <li>• Inbound marketing strategies</li>
              </ul>
            </div>

            {/* SEO & Analytics */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                SEO & Analytics
              </h3>
              <p className="text-gray-600 mb-6">
                Natural search optimization and comprehensive analytics to
                improve your online visibility.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Technical SEO optimization</li>
                <li>• Content SEO strategy</li>
                <li>• Local SEO optimization</li>
                <li>• Analytics and reporting</li>
              </ul>
            </div>

            {/* Social Media Management */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Social Media Management
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive social media management to build your brand and
                engage your audience.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Content creation and curation</li>
                <li>• Community management</li>
                <li>• Paid social advertising</li>
                <li>• Performance analytics</li>
              </ul>
            </div>

            {/* E-commerce Solutions */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                E-commerce Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Complete e-commerce solutions that drive sales and provide
                excellent user experience.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Custom e-commerce websites</li>
                <li>• Payment gateway integration</li>
                <li>• Inventory management</li>
                <li>• Order processing systems</li>
              </ul>
            </div>

            {/* Maintenance & Support */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Maintenance & Support
              </h3>
              <p className="text-gray-600 mb-6">
                Ongoing maintenance and support to keep your digital presence
                running smoothly.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Website maintenance</li>
                <li>• Security updates</li>
                <li>• Performance monitoring</li>
                <li>• Technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Digital Portfolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Items */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-indigo-200 to-blue-200 flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  E-commerce Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom e-commerce solution with 300% traffic increase
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 Tunis, Tunisia</span>
                  <span className="mx-2">•</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                <span className="text-6xl">📈</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Digital Marketing Campaign
                </h3>
                <p className="text-gray-600 mb-4">
                  Multi-channel campaign with 150% conversion improvement
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>📍 Sousse, Tunisia</span>
                  <span className="mx-2">•</span>
                  <span>📅 2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-6xl">🔍</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  SEO Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Technical SEO with 200% organic traffic growth
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
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Technology Stack
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• React.js and Next.js frameworks</li>
                <li>• TypeScript for type safety</li>
                <li>• Node.js backend development</li>
                <li>• PostgreSQL and MongoDB databases</li>
                <li>• AWS cloud infrastructure</li>
                <li>• CI/CD deployment pipelines</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Performance Standards
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Less than 3 seconds page load time</li>
                <li>• 99.9% uptime guarantee</li>
                <li>• Mobile-first responsive design</li>
                <li>• WCAG 2.1 AA accessibility</li>
                <li>• SSL security certificates</li>
                <li>• Regular security updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Digital Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Basic Digital
              </h3>
              <div className="text-3xl font-bold mb-6 text-indigo-600">
                $2,000
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Custom website development</li>
                <li>• Basic SEO optimization</li>
                <li>• Social media setup</li>
                <li>• Mobile responsive design</li>
                <li>• 3 months of support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Basic Package
              </Link>
            </div>

            {/* Professional Package */}
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Professional Digital</h3>
              <div className="text-3xl font-bold mb-6">$4,000</div>
              <ul className="space-y-3 mb-8">
                <li>• Advanced website development</li>
                <li>• Comprehensive SEO strategy</li>
                <li>• Digital marketing campaign</li>
                <li>• Social media management</li>
                <li>• Analytics and reporting</li>
                <li>• 6 months of support</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-white hover:bg-gray-100 text-indigo-600 text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Professional Package
              </Link>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Premium Digital
              </h3>
              <div className="text-3xl font-bold mb-6 text-indigo-600">
                $8,000
              </div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>• Complete digital transformation</li>
                <li>• E-commerce solution</li>
                <li>• Multi-channel marketing</li>
                <li>• Advanced analytics</li>
                <li>• Performance optimization</li>
                <li>• 12 months of support</li>
                <li>• Ongoing consultation</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose Premium Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Let's discuss how we can help you create a powerful digital presence
            that drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
