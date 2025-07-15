'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { getAsset } from '@/lib/asset-management';

import AnimationObserver from '../AnimationObserver';

const JOURNEY_STEPS = [
  {
    id: 'discovery',
    title: 'Discovery & Strategy',
    description:
      'We begin by deeply understanding your brand, audience, and objectives to craft a strategic foundation.',
    icon: '🔍',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'creation',
    title: 'Creative Development',
    description:
      'Our team transforms insights into compelling visual narratives and immersive experiences.',
    icon: '🎨',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'execution',
    title: 'Execution & Launch',
    description:
      'We bring your vision to life with precision, ensuring every detail aligns with your goals.',
    icon: '🚀',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'optimization',
    title: 'Optimization & Growth',
    description:
      'Continuous refinement and data-driven improvements to maximize your digital impact.',
    icon: '📈',
    color: 'from-orange-500 to-red-600',
  },
];

export default function ClientJourney() {
  // Get deterministic background asset
  const backgroundImage = getAsset('home', 'client-journey');

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background with Cinematic Quality */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            quality={90}
          />
        </motion.div>

        {/* Enhanced Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)]/80 via-[var(--bg-primary)]/60 to-[var(--bg-primary)]/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimationObserver>
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-[var(--color-foreground)] mb-8"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              Your Journey to Digital Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed"
            >
              Experience our proven process that transforms visions into
              compelling digital realities.
            </motion.p>
          </div>
        </AnimationObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {JOURNEY_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateY: 2,
              }}
              className="group cursor-pointer perspective-1000"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl transform-gpu">
                {/* Enhanced Depth Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/30 via-transparent to-transparent" />

                {/* Interactive 3D Icon */}
                <motion.div
                  className="absolute top-6 right-6 text-4xl z-10"
                  animate={{
                    rotateY: 0,
                    scale: 1,
                  }}
                  whileHover={{
                    rotateY: 180,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Content with Enhanced Typography */}
                <div className="relative z-10 p-8 text-[var(--color-foreground)]">
                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    animate={{
                      y: 0,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="text-[var(--text-secondary)] leading-relaxed"
                    animate={{
                      opacity: 1,
                    }}
                    whileHover={{
                      opacity: 0.9,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Enhanced Step Indicator */}
                  <motion.div
                    className={`mt-6 w-12 h-1 bg-gradient-to-r ${step.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>

                {/* Enhanced Border Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
                  }}
                  whileHover={{
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)',
              transform: 'translateZ(10px)',
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-10 py-4 rounded-xl font-semibold text-xl flex items-center gap-3 mx-auto transition-all duration-300 shadow-2xl hover:shadow-3xl transform-gpu"
          >
            Start Your Journey
            <ArrowRight size={24} className="" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
