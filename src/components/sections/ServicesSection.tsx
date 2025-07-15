'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  Globe,
  Image,
  Mic,
  Palette,
  Play,
  Settings,
  TrendingUp,
  Video,
} from 'lucide-react';

const services = [
  {
    title: 'Production Vidéo',
    description:
      'Authentic event coverage and corporate storytelling with documentary-style authenticity.',
    icon: Camera,
    color: 'from-true-blue to-blue-600',
    features: [
      'Event coverage and live streaming',
      'Corporate video production',
      'Documentary-style filming',
      'Real people in real environments',
    ],
  },
  {
    title: 'Production Cinématographique',
    description:
      'High-end cinematic productions for premium brands with artistic vision and technical precision.',
    icon: Video,
    color: 'from-purple-500 to-purple-600',
    features: [
      'Brand films and commercial production',
      'Artistic direction and cinematic editing',
      'Music video production',
      'Premium advertising spots',
    ],
  },
  {
    title: 'Motion Design & Animation',
    description:
      'Dynamic visual storytelling through animation that brings static elements to life.',
    icon: Play,
    color: 'from-pink-500 to-pink-600',
    features: [
      '2D/3D animation and motion graphics',
      'Logo animation and brand motion',
      'Explainer videos and educational content',
      'Cinematic visual effects',
    ],
  },
  {
    title: 'Production Audio & Podcasts',
    description:
      'Professional audio content creation and podcast production with authentic voices.',
    icon: Mic,
    color: 'from-orange-500 to-orange-600',
    features: [
      'Podcast recording and production',
      'Audio editing and post-production',
      'Video podcasts with visual elements',
      'Distribution and promotion strategies',
    ],
  },
  {
    title: 'Photographie & Contenu',
    description:
      'Capturing authentic moments with emotional depth and artistic vision.',
    icon: Image,
    color: 'from-green-500 to-green-600',
    features: [
      'Product photography and culinary photography',
      'Fashion and beauty photography',
      'Event coverage and documentary photography',
      'Digital content creation',
    ],
  },
  {
    title: 'Design Graphique & Identité',
    description:
      'Creating compelling visual identities and brand experiences with clean, functional design.',
    icon: Palette,
    color: 'from-indigo-500 to-indigo-600',
    features: [
      'Logo design and visual identity',
      'Communication materials and branding',
      'Packaging and product design',
      'Digital content creation',
    ],
  },
  {
    title: 'Création de Sites Web',
    description:
      'Building high-performance websites and applications that connect and convert.',
    icon: Globe,
    color: 'from-teal-500 to-teal-600',
    features: [
      'Custom website development',
      'E-commerce solutions',
      'SEO optimization and visibility',
      'Social media management',
    ],
  },
  {
    title: 'Marketing Digital',
    description:
      'Data-driven digital marketing strategies that deliver measurable results.',
    icon: TrendingUp,
    color: 'from-red-500 to-red-600',
    features: [
      'Data-driven strategies',
      'Real audience connection',
      'Measurable conversions',
      'Performance tracking',
    ],
  },
  {
    title: 'Services Spécialisés',
    description:
      'Tailored solutions for specific industries and occasions with specialized expertise.',
    icon: Settings,
    color: 'from-yellow-500 to-yellow-600',
    features: [
      'Industry-specific solutions',
      'Custom project requirements',
      'Specialized expertise',
      'Tailored deliverables',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-cream-white to-gray-50 relative overflow-hidden"
    >
      {/* Soft background pattern/gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-true-blue/5 via-cream-white/60 to-true-blue/5 opacity-80" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-true-blue/10 text-true-blue text-sm font-medium mb-6 shadow-md"
          >
            Nos 9 Métiers
          </motion.div>

          <h2 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold text-deep-charcoal mb-6 drop-shadow-lg">
            Solutions Numériques
            <span className="text-true-blue"> Authentiques</span>
          </h2>
          <p className="text-fluid-lg text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Nous livrons des solutions authentiques et fonctionnelles qui
            génèrent de vrais résultats commerciaux. Pas de fumée ni de miroirs
            - juste des résultats transparents et mesurables.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 border border-true-blue/10 group-hover:border-true-blue/30 h-full">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="w-9 h-9 text-white drop-shadow-md" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-deep-charcoal mb-4 group-hover:text-true-blue transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-warm-gray leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-warm-gray"
                    >
                      <div className="w-1.5 h-1.5 bg-true-blue rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-true-blue font-semibold hover:text-blue-700 transition-colors duration-300 group/link underline underline-offset-4 decoration-true-blue/40 decoration-2"
                >
                  En savoir plus
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl"
          >
            Voir Tous Nos Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
