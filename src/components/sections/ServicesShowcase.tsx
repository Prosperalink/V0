'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Web Design & Development',
    description:
      'Award-winning websites that blend cinematic visuals with seamless user experience.',
    image: '/assets/service-icons/service-icons_business_1.jpg',
    category: 'full',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description:
      "Intuitive, engaging apps that put your brand in your audience's hands.",
    image: '/assets/service-icons/service-icons_technology_1.jpg',
    category: 'full',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description:
      'Strategic campaigns that amplify your story and drive measurable results.',
    image: '/assets/service-icons/service-icons_business_2.jpg',
    category: 'half',
  },
  {
    id: 4,
    title: 'Content Creation',
    description:
      'Captivating video, photography, and multimedia content that inspires action.',
    image: '/assets/service-icons/service-icons_video_1.jpg',
    category: 'half',
  },
  {
    id: 5,
    title: 'Graphic Design',
    description:
      'Stunning branding, logos, and marketing materials with a cinematic touch.',
    image: '/assets/service-icons/service-icons_design_1.jpg',
    category: 'full',
  },
  {
    id: 6,
    title: 'SEO Optimization',
    description:
      'Boost your visibility and attract the right audience with expert SEO.',
    image: '/assets/service-icons/service-icons_technology_2.jpg',
    category: 'half',
  },
  {
    id: 7,
    title: 'Social Media',
    description:
      "Build a loyal community and elevate your brand's voice across platforms.",
    image: '/assets/service-icons/service-icons_business_3.jpg',
    category: 'half',
  },
  {
    id: 8,
    title: 'Hosting',
    description: 'Reliable, secure hosting for a flawless digital experience.',
    image: '/assets/service-icons/service-icons_technology_3.jpg',
    category: 'half',
  },
  {
    id: 9,
    title: 'Consulting',
    description:
      "Expert guidance to unlock your brand's full creative and business potential.",
    image: '/assets/service-icons/service-icons_design_2.jpg',
    category: 'half',
  },
];

export default function ServicesShowcase() {
  return (
    <section className="px-4 pb-8 bg-deep-blue">
      <motion.h2
        className="font-cinematic text-4xl font-bold tracking-tight text-text-white mb-8 mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Signature Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 z-0 h-full w-full">
              <Image
                src={service.image}
                alt={`${service.title} service background`}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-end bg-gradient-to-t from-deep-blue via-deep-blue/70 to-transparent p-6 pt-32">
              <h3 className="font-cinematic text-2xl font-bold text-text-white mb-3">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-text-subtle leading-relaxed">
                  {service.description}
                </p>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-golden-accent text-deep-blue px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden-accent focus:ring-offset-2 focus:ring-offset-deep-blue"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
