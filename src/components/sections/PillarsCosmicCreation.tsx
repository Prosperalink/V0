'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target, Zap } from 'lucide-react';
import Image from 'next/image';

const pillars = [
  {
    id: 'cosmic-precision',
    title: 'Cosmic Precision',
    description:
      'Every detail meticulously crafted, every pixel perfectly placed. We achieve cosmic precision through rigorous attention to detail and unwavering commitment to excellence.',
    icon: Target,
    image: '/assets/homepage/pillars/cosmic-precision.jpg',
  },
  {
    id: 'dimensional-storytelling',
    title: 'Dimensional Storytelling',
    description:
      'We weave narratives that transcend the ordinary, creating immersive experiences that transport users to new dimensions of possibility and wonder.',
    icon: Sparkles,
    image: '/assets/homepage/pillars/dimensional-storytelling.jpg',
  },
  {
    id: 'universal-production',
    title: 'Universal Production Excellence',
    description:
      'From concept to completion, we maintain the highest standards of production quality, ensuring every project meets Hollywood-level excellence.',
    icon: Zap,
    image: '/assets/homepage/pillars/universal-production.jpg',
  },
];

export default function PillarsCosmicCreation() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue">
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
            The Pillars of Cosmic Creation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-text-white max-w-3xl mx-auto"
          >
            Three foundational principles that guide our journey through the
            digital cosmos.
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

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-dark-tone/50 to-mid-tone/50 p-8 rounded-2xl backdrop-blur-sm border border-golden-accent/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-golden-accent/40">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-golden-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-golden-accent/30 transition-colors duration-300"
                >
                  <pillar.icon className="w-8 h-8 text-golden-accent" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-cinematic font-bold text-golden-accent mb-4 group-hover:text-golden-subtle transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-text-white leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Image */}
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 via-transparent to-transparent" />
                </div>

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
              <div className="absolute inset-0 bg-gradient-to-r from-golden-accent/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
