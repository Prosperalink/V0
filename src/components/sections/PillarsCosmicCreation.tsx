'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const pillars = [
  {
    id: 'cosmic-precision',
    title: 'Cosmic Precision',
    description:
      'Every digital element is meticulously calibrated, from the subtle gravitational pull of a button interaction to the dramatic cosmic reveal of a hero section. We engineer experiences with the precision required to navigate the vastness of the digital cosmos.',
    image: '/assets/homepage/matrix/matrix-background.jpg',
  },
  {
    id: 'dimensional-storytelling',
    title: 'Dimensional Storytelling',
    description:
      "We believe that great digital products, like great cinematic sagas, are built on compelling narratives. We delve into your brand's cosmic DNA to unearth stories that resonate across dimensions, weaving them into the user journey to forge genuine inter-dimensional connections.",
    image: '/assets/homepage/pillars/pillars-background.jpg',
  },
  {
    id: 'universal-production',
    title: 'Universal Production Excellence',
    description:
      'From the initial cosmic concept to the final galactic premiere, we deliver an unparalleled level of polish. Our process leverages cutting-edge technology and cosmic talent to produce stunning visuals and seamless digital experiences, maintaining the same stellar standards as major cinematic productions.',
    image:
      'https://placehold.co/800x600/16213E/B0B0B0?text=Universal+Production',
  },
];

export default function PillarsCosmicCreation() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/30 via-dark-tone/20 to-deep-blue/30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-cinematic">
            The Pillars of Cosmic Creation
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our universe is built upon three fundamental forces – the 'Pillars
            of Cosmic Creation' – ensuring every project achieves stellar
            magnitude.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-dark-tone to-mid-tone rounded-2xl p-6 border border-border-card hover:border-golden-accent transition-all duration-500 shadow-xl hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-golden-accent mb-4 font-cinematic">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>

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
              <div className="absolute inset-0 bg-gradient-to-r from-golden-accent/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional cosmic elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full opacity-40 animate-pulse pointer-events-none" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full opacity-30 animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-golden-accent rounded-full opacity-50 animate-pulse pointer-events-none" />
      </div>
    </section>
  );
}
