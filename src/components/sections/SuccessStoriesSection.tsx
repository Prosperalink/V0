'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { getAsset } from '@/lib/asset-management';

import AnimationObserver from '../AnimationObserver';

const SUCCESS_STORIES = [
  {
    id: 'story-1',
    title: 'Digital Transformation Success',
    company: 'TechCorp Industries',
    description:
      'We helped TechCorp achieve a 300% increase in digital engagement through our cinematic storytelling approach.',
    metrics: {
      engagement: '+300%',
      conversion: '+150%',
      revenue: '+200%',
    },
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'story-2',
    title: 'Brand Evolution Excellence',
    company: 'InnovateLab',
    description:
      "Our creative design team transformed InnovateLab's brand identity, resulting in a 250% boost in market recognition.",
    metrics: {
      recognition: '+250%',
      leads: '+180%',
      retention: '+120%',
    },
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'story-3',
    title: 'E-commerce Revolution',
    company: 'GlobalRetail',
    description:
      "We revolutionized GlobalRetail's online presence, driving a 400% increase in online sales and customer satisfaction.",
    metrics: {
      sales: '+400%',
      satisfaction: '+95%',
      growth: '+280%',
    },
    color: 'from-green-500 to-emerald-600',
  },
];

export default function SuccessStoriesSection() {
  // Get deterministic background asset
  const backgroundImage = getAsset('home', 'success-stories');

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)]/20 to-[var(--bg-primary)] relative overflow-hidden">
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
              Success Stories That Inspire
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed"
            >
              Discover how our cinematic approach has transformed businesses and
              driven exceptional results.
            </motion.p>
          </div>
        </AnimationObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                rotateY: 2,
              }}
              className="group cursor-pointer perspective-1000"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl transform-gpu">
                {/* Enhanced Depth Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/30 via-transparent to-transparent" />

                {/* Content with Enhanced Typography */}
                <div className="relative z-10 p-8 text-[var(--color-foreground)]">
                  <motion.h3
                    className="text-2xl font-bold mb-3"
                    animate={{
                      y: 0,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {story.title}
                  </motion.h3>

                  <motion.p
                    className="text-lg font-semibold mb-4 text-[var(--text-secondary)]"
                    animate={{
                      y: 0,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {story.company}
                  </motion.p>

                  <motion.p
                    className="text-[var(--text-secondary)] leading-relaxed mb-6"
                    animate={{
                      opacity: 1,
                    }}
                    whileHover={{
                      opacity: 0.9,
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {story.description}
                  </motion.p>

                  {/* Enhanced Metrics Display */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(story.metrics).map(
                      ([key, value], metricIndex) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + metricIndex * 0.1,
                          }}
                          className="text-center"
                        >
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}
                          >
                            {value}
                          </div>
                          <div className="text-sm text-[var(--text-secondary)] capitalize">
                            {key}
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Enhanced Success Indicator */}
                  <motion.div
                    className={`mt-6 w-full h-1 bg-gradient-to-r ${story.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.6 }}
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
            className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white px-10 py-4 rounded-xl font-semibold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform-gpu"
          >
            Create Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
