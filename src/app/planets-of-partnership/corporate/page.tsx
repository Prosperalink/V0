import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Planet - Navigating the Corporate Galaxy | Orson Vision',
  description:
    'For entities on the Corporate Planet, whether public or private, navigating the digital cosmos demands unparalleled precision and strategic foresight. Orson Vision crafts solutions that propel your enterprise to stellar performance.',
  keywords: [
    'corporate digital solutions',
    'enterprise web development',
    'corporate video production',
    'business digital transformation',
    'corporate branding',
    'enterprise marketing',
    'corporate communications',
    'business technology solutions',
    'corporate planet',
    'digital enterprise',
  ].join(', '),
  openGraph: {
    title: 'Corporate Planet - Navigating the Corporate Galaxy',
    description:
      'For entities on the Corporate Planet, whether public or private, navigating the digital cosmos demands unparalleled precision and strategic foresight.',
    url: 'https://orsonvision.com/planets-of-partnership/corporate',
    siteName: 'Orson Vision',
    images: [
      {
        url: 'https://placehold.co/1200x630/1A1A2E/B0B0B0?text=Corporate+Galaxy',
        width: 1200,
        height: 630,
        alt: 'Corporate Planet - Navigating the Corporate Galaxy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Planet - Navigating the Corporate Galaxy',
    description:
      'For entities on the Corporate Planet, whether public or private, navigating the digital cosmos demands unparalleled precision and strategic foresight.',
    images: [
      'https://placehold.co/1200x630/1A1A2E/B0B0B0?text=Corporate+Galaxy',
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
    canonical: 'https://orsonvision.com/planets-of-partnership/corporate',
  },
};

export default function CorporatePlanetPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/95 via-dark-tone/80 to-deep-blue/95 z-10" />
            <img
              src="/assets/planets-of-partnership/corporate/corporate-hero.jpg"
              alt="Corporate Galaxy"
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center text-cream-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-golden-accent/20 backdrop-blur-sm border border-golden-accent/30 shadow-lg">
                <span className="text-sm font-semibold tracking-wide">
                  Corporate Planet
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-cinematic font-bold text-golden-accent mb-8 leading-tight">
                Navigating the Corporate Galaxy
                <br />
                <span className="text-cream-white">
                  Our Expertise for Your Universe
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                For entities on the Corporate Planet, whether public or private,
                navigating the digital cosmos demands unparalleled precision and
                strategic foresight. Orson Vision crafts solutions that propel
                your enterprise to stellar performance.
              </p>

              {/* Golden Accent Line */}
              <div className="w-32 h-1 bg-gradient-to-r from-golden-accent to-yellow-400 mx-auto mb-12" />

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Launch Your Corporate Digital Initiative
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cosmic Hurdles Section */}
        <section className="py-20 bg-gradient-to-r from-deep-blue via-dark-tone to-deep-blue">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-cream-white">
                <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-8 text-golden-accent">
                  Cosmic Hurdles
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-text-white">
                  In the vastness of the Corporate Galaxy, challenges arise:
                  achieving scalability, ensuring secure data transit,
                  optimizing inter-departmental communication, and maintaining a
                  commanding presence. We understand these cosmic hurdles.
                </p>
                <ul className="space-y-4 text-text-subtle">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span>
                      Scalability across multiple departments and locations
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span>
                      Secure data transmission and compliance requirements
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span>Inter-departmental communication optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span>Maintaining commanding market presence</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <img
                  src="/assets/planets-of-partnership/corporate/corporate-hero.jpg"
                  alt="Cosmic Hurdles"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stellar Pathways Section */}
        <section className="py-20 bg-gradient-to-r from-dark-tone via-deep-blue to-dark-tone">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-8 text-golden-accent">
                Stellar Pathways
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Orson Vision charts 'Stellar Pathways' to overcome your cosmic
                challenges. Our 'Cinematic Solutions' are bespoke, leveraging
                our Nebulas of Expertise to deliver unparalleled results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'High-Performance Digital Gateways',
                  description:
                    'Seamless operations through cutting-edge web development and digital infrastructure.',
                  image: '/assets/services/nebulas/web-thumbnail.jpg',
                },
                {
                  title: 'Strategic Digital Marketing Campaigns',
                  description:
                    'Unparalleled reach through data-driven marketing strategies and cosmic campaigns.',
                  image: '/assets/services/nebulas/marketing-thumbnail.jpg',
                },
                {
                  title: 'Corporate Video Sagas',
                  description:
                    'Inspire and inform your galactic workforce with compelling corporate storytelling.',
                  image: '/assets/services/nebulas/video-thumbnail.jpg',
                },
                {
                  title: 'Sophisticated Brand Identities',
                  description:
                    'Command authority across the universe with memorable brand experiences.',
                  image: '/assets/services/nebulas/graphic-thumbnail.jpg',
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-dark-tone to-mid-tone rounded-2xl p-6 border border-border-card hover:border-golden-accent transition-all duration-500"
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-bold text-golden-accent mb-3 font-cinematic">
                    {solution.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Video Section */}
            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-golden-accent mb-8">
                Witness Our Stellar Pathways in Action
              </h3>
              <div className="relative max-w-4xl mx-auto">
                <video
                  className="w-full rounded-2xl shadow-2xl"
                  poster="/assets/services/hero/services-hero.jpg"
                  controls
                >
                  <source
                    src="/assets/services/hero/services-hero.jpg"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Celestial Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-deep-blue via-dark-tone to-deep-blue">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-8 text-golden-accent">
                Celestial Testimonials
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Witness the 'Celestial Testimonials' from other Corporate
                Planets that have successfully navigated their digital evolution
                with Orson Vision. Our 'Stellar Portfolio' highlights these
                triumphant journeys.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'CEO, Stellar Enterprises',
                  testimonial:
                    'Orson Vision transformed our corporate presence into a commanding force in the digital cosmos. Their cinematic approach elevated our brand beyond expectations.',
                  image:
                    'https://placehold.co/400x300/1C1C1C/E0E0E0?text=Corp+Project+Thumbnail',
                },
                {
                  name: 'Michael Chen',
                  role: 'CTO, Galactic Corp',
                  testimonial:
                    'The precision and sophistication of their solutions have propelled our enterprise to new heights. Truly stellar work.',
                  image:
                    'https://placehold.co/400x300/16213E/FFED4E?text=Corp+Project+Thumbnail',
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Marketing Director, Cosmic Industries',
                  testimonial:
                    "Their strategic approach to digital transformation has given us the competitive edge we needed in today's cosmic marketplace.",
                  image:
                    'https://placehold.co/400x300/0F3460/B0B0B0?text=Corp+Project+Thumbnail',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-dark-tone to-mid-tone rounded-2xl p-6 border border-border-card"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <p className="text-text-white italic mb-4">
                    "{testimonial.testimonial}"
                  </p>
                  <div>
                    <h4 className="text-golden-accent font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-text-subtle text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Orson Vision Section */}
        <section className="py-20 bg-gradient-to-r from-dark-tone via-deep-blue to-dark-tone">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://placehold.co/600x400/16213E/FFD700?text=Cosmic+Co-Pilot"
                  alt="Cosmic Co-Pilot"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              <div className="text-cream-white">
                <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-8 text-golden-accent">
                  Your Cosmic Co-Pilot
                </h2>
                <p className="text-xl leading-relaxed mb-8 text-text-white">
                  Choosing a co-pilot for your corporate cosmic journey is
                  critical. Orson Vision, rooted in the vibrant Tunisian market,
                  combines global standards with local insights, offering
                  agility, a deep understanding of regional dynamics, and a
                  commitment to transforming your enterprise into a shining star
                  in the digital cosmos.
                </p>
                <ul className="space-y-4 text-text-subtle">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span>Global standards with local market insights</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span>Agile development and rapid deployment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span>Deep understanding of regional dynamics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-golden-accent rounded-full" />
                    <span>Commitment to stellar results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-cinematic font-bold mb-8 text-golden-accent">
              Ready to Launch Your Corporate Digital Initiative?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Let's align our cosmic coordinates and transform your enterprise
              into a commanding presence in the digital cosmos.
            </p>
            <button className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Launch Your Corporate Digital Initiative
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
