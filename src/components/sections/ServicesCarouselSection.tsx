'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useLanguage } from '@/contexts/LanguageContext';

interface IServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  category: string;
  hoverImage?: string;
  color: string;
}

const services: IServiceCard[] = [
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Cinematic storytelling that captivates and converts',
    icon: '🎬',
    image:
      '/assets/services/content_creation/images/service_content_creation_image_01.svg',
    features: [
      'Video Production',
      'Photography',
      'Copywriting',
      'Social Media',
    ],
    category: 'Creative',
    color: 'from-red-500 to-pink-600',
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    description: 'Visual narratives that tell your brand story',
    icon: '🎨',
    image:
      '/assets/services/creative_design/images/service_creative_design_image_01.svg',
    features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Digital Art'],
    category: 'Creative',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'digital-innovation',
    title: 'Digital Innovation',
    description: 'Cutting-edge solutions for the modern marketplace',
    icon: '🚀',
    image:
      '/assets/services/digital_innovation/images/service_digital_innovation_image_01.svg',
    features: [
      'Web Development',
      'App Development',
      'AI Integration',
      'Automation',
    ],
    category: 'Technology',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    description: 'Data-driven insights for business transformation',
    icon: '📊',
    image:
      '/assets/services/strategic_consulting/images/service_strategic_consulting_image_01.svg',
    features: [
      'Market Analysis',
      'Business Strategy',
      'Process Optimization',
      'Growth Planning',
    ],
    category: 'Strategy',
    color: 'from-green-500 to-teal-600',
  },
  {
    id: 'technology-solutions',
    title: 'Technology Solutions',
    description: 'Scalable tech infrastructure for growth',
    icon: '⚙️',
    image:
      '/assets/services/technology_solutions/images/service_technology_solutions_image_01.svg',
    features: ['Cloud Infrastructure', 'API Development', 'Security', 'DevOps'],
    category: 'Technology',
    color: 'from-orange-500 to-amber-600',
  },
];

export default function ServicesCarouselSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const service = services[active];

  // Auto-toggle functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prevActive => (prevActive + 1) % services.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-24 flex flex-col items-center bg-transparent relative overflow-hidden">
      {/* Enhanced Background with Floating Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-br from-[var(--color-secondary)]/5 to-[var(--color-primary)]/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div
          className="text-5xl md:text-7xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          {t('services.expertise.title')}
        </motion.div>

        {/* Enhanced Service Navigation with Cinematic Effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 w-full max-w-6xl mb-12">
          {services.map((s, idx) => (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                rotateY: 5,
              }}
              onHoverStart={() => setHoveredService(s.id)}
              onHoverEnd={() => setHoveredService(null)}
              className={`flex flex-col items-center px-6 py-4 rounded-2xl transition-all duration-500 focus:outline-none border backdrop-blur-md transform-gpu ${
                active === idx
                  ? 'bg-gradient-to-br from-[var(--bg-secondary)]/90 to-[var(--bg-secondary)]/70 shadow-2xl scale-105 text-white border-white/30'
                  : 'bg-white/10 text-gray-300 hover:bg-[var(--bg-secondary)]/60 hover:text-white border-white/10 hover:border-white/30'
              }`}
              onClick={() => setActive(idx)}
              tabIndex={0}
              aria-label={s.title}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                className="mb-3 text-3xl"
                animate={{
                  rotateY: hoveredService === s.id ? 180 : 0,
                  scale: hoveredService === s.id ? 1.2 : 1,
                }}
                transition={{ duration: 0.6 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {s.icon}
              </motion.div>
              <motion.div
                className="font-semibold text-sm text-center"
                animate={{
                  y: hoveredService === s.id ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {s.title}
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* Enhanced Service Display with Cinematic Animation */}
        <div className="w-full max-w-6xl flex flex-col items-center">
          <AnimatePresence mode="wait">
            {service && (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-br from-[var(--bg-secondary)]/80 to-[var(--bg-secondary)]/60 backdrop-blur-xl rounded-3xl p-10 flex flex-col md:flex-row items-center shadow-2xl border border-white/20 transition-all duration-500 min-h-[320px] w-full transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Enhanced Image Display with Hover Effects */}
                <motion.div
                  className="w-full md:w-1/2 h-56 relative mb-6 md:mb-0 md:mr-10 rounded-2xl overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    rotateY: 2,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredService === service.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover w-full h-full transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>

                  {/* Enhanced Overlay with Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    animate={{
                      opacity: hoveredService === service.id ? 0.2 : 0.4,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Floating Icon Overlay */}
                  <motion.div
                    className="absolute top-4 right-4 text-4xl z-10"
                    animate={{
                      scale: hoveredService === service.id ? 1.3 : 1,
                      rotateY: hoveredService === service.id ? 180 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>

                {/* Enhanced Content with Cinematic Typography */}
                <div className="flex-1 flex flex-col items-start">
                  <motion.div
                    className="text-3xl font-bold text-white mb-4 flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.span
                      className="text-3xl"
                      animate={{
                        rotateY: hoveredService === service.id ? 360 : 0,
                      }}
                      transition={{ duration: 1 }}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {service.icon}
                    </motion.span>
                    <motion.span
                      animate={{
                        x: hoveredService === service.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.span>
                  </motion.div>

                  <motion.div
                    className="text-[var(--color-subtext)] text-lg mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {service.description}
                  </motion.div>

                  {/* Enhanced Features with Staggered Animation */}
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {service.features.map((feature: string, idx: number) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          boxShadow: `0 4px 15px ${
                            service.color.includes('red')
                              ? 'rgba(239, 68, 68, 0.4)'
                              : service.color.includes('purple')
                                ? 'rgba(147, 51, 234, 0.4)'
                                : service.color.includes('blue')
                                  ? 'rgba(59, 130, 246, 0.4)'
                                  : service.color.includes('green')
                                    ? 'rgba(34, 197, 94, 0.4)'
                                    : 'rgba(251, 191, 36, 0.4)'
                          }`,
                        }}
                        className="bg-gradient-to-r from-white/20 to-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white/20 transition-all duration-300 transform"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Enhanced CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: `0 10px 25px ${
                        service.color.includes('red')
                          ? 'rgba(239, 68, 68, 0.4)'
                          : service.color.includes('purple')
                            ? 'rgba(147, 51, 234, 0.4)'
                            : service.color.includes('blue')
                              ? 'rgba(59, 130, 246, 0.4)'
                              : service.color.includes('green')
                                ? 'rgba(34, 197, 94, 0.4)'
                                : 'rgba(251, 191, 36, 0.4)'
                      }`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-8 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r ${service.color} hover:shadow-xl transition-all duration-300 text-white transform`}
                  >
                    Explore {service.title}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
