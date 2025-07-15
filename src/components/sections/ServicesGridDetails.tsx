'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Camera,
  Code,
  Globe,
  Palette,
  PenTool,
  Smartphone,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 'digital-innovation',
    title: 'Digital Innovation',
    description:
      'Pioneering new dimensions in technology, creating portals to future possibilities that transform how we interact with the digital cosmos.',
    icon: Zap,
    image: '/assets/services/digital_innovation/innovation-hub.jpg',
    subServices: [
      'AI & Machine Learning',
      'Blockchain Solutions',
      'IoT Integration',
      'Cloud Architecture',
      'API Development',
      'Digital Transformation',
    ],
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    description:
      'Crafting visual narratives that transcend the ordinary, painting with pixels to create immersive experiences that captivate the soul.',
    icon: Palette,
    image: '/assets/services/creative_design/design-studio.jpg',
    subServices: [
      'UI/UX Design',
      'Brand Identity',
      'Visual Design',
      'Motion Graphics',
      '3D Modeling',
      'Design Systems',
    ],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description:
      'Weaving stories that resonate across dimensions, creating content that connects hearts and minds in the digital realm.',
    icon: PenTool,
    image: '/assets/services/content_creation/content-studio.jpg',
    subServices: [
      'Copywriting',
      'Video Production',
      'Photography',
      'Social Media',
      'Blog Content',
      'Marketing Materials',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Building digital foundations that stand the test of time, creating robust and scalable web experiences.',
    icon: Code,
    image: '/assets/services/technology_solutions/web-development.jpg',
    subServices: [
      'Frontend Development',
      'Backend Development',
      'E-commerce',
      'CMS Integration',
      'Performance Optimization',
      'Security Implementation',
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description:
      'Creating portable universes that fit in your pocket, delivering cinematic experiences on every device.',
    icon: Smartphone,
    image: '/assets/services/technology_solutions/mobile-apps.jpg',
    subServices: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'App Store Optimization',
      'Push Notifications',
      'Mobile Analytics',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description:
      'Orchestrating campaigns that reach across the digital cosmos, connecting brands with their perfect audience.',
    icon: Globe,
    image: '/assets/services/strategic_consulting/digital-marketing.jpg',
    subServices: [
      'SEO Optimization',
      'PPC Campaigns',
      'Social Media Marketing',
      'Email Marketing',
      'Content Marketing',
      'Analytics & Reporting',
    ],
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    description:
      'Guiding businesses through the digital cosmos with strategic insights that illuminate the path to success.',
    icon: BarChart3,
    image: '/assets/services/strategic_consulting/consulting-room.jpg',
    subServices: [
      'Digital Strategy',
      'Market Research',
      'Competitive Analysis',
      'Growth Planning',
      'Process Optimization',
      'Technology Audits',
    ],
  },
  {
    id: 'video-production',
    title: 'Video Production',
    description:
      'Capturing cinematic moments that tell compelling stories and create lasting impressions across all platforms.',
    icon: Camera,
    image: '/assets/services/content_creation/video-production.jpg',
    subServices: [
      'Commercial Videos',
      'Product Demos',
      'Corporate Films',
      'Social Media Videos',
      'Animation',
      'Post-production',
    ],
  },
];

export default function ServicesGridDetails() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-tone via-deep-blue to-dark-tone">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-cinematic font-bold mb-6 text-golden-accent"
          >
            Our Service Nebulas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-text-white max-w-3xl mx-auto"
          >
            Each service is a unique nebula of expertise, designed to illuminate
            your path through the digital universe with precision and
            creativity.
          </motion.p>

          {/* Golden Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-gradient-to-r from-golden-accent to-yellow-400 mx-auto mt-8"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-dark-tone/50 to-mid-tone/50 p-8 rounded-2xl backdrop-blur-sm border border-golden-accent/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-golden-accent/40 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-golden-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-golden-accent/30 transition-colors duration-300"
                >
                  <service.icon className="w-8 h-8 text-golden-accent" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-cinematic font-bold text-golden-accent mb-4 group-hover:text-golden-subtle transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-white leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Image */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 via-transparent to-transparent"></div>
                </div>

                {/* Sub-services */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-golden-accent mb-3">
                    What We Offer:
                  </h4>
                  <ul className="space-y-2">
                    {service.subServices.map((subService, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-text-subtle text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-golden-accent rounded-full"></div>
                        {subService}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-golden-accent/20 to-yellow-400/20 text-golden-accent px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-golden-accent/30 hover:to-yellow-400/30 transition-all duration-300 border border-golden-accent/30 hover:border-golden-accent/50"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                  className="absolute top-4 right-4 w-2 h-2 bg-golden-accent rounded-full"
                />
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-golden-accent/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional cosmic elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
