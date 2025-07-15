'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import AnimationObserver from '@/components/AnimationObserver';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAsset } from '@/lib/asset-management';

interface ISolutionCard {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  icon: string;
  color: string;
  bgColor: string;
  category: string;
  subcategory: string;
  hoverImage?: string;
}

const SOLUTIONS: ISolutionCard[] = [
  {
    id: 'content-creation',
    titleKey: 'solutions.contentCreation.title',
    subtitleKey: 'solutions.contentCreation.subtitle',
    descriptionKey: 'solutions.contentCreation.description',
    icon: '🎬',
    color: 'from-red-500 to-pink-600',
    bgColor: 'bg-gradient-to-br from-red-900/10 to-pink-800/10',
    category: 'services',
    subcategory: 'content-creation',
  },
  {
    id: 'creative-design',
    titleKey: 'solutions.creativeDesign.title',
    subtitleKey: 'solutions.creativeDesign.subtitle',
    descriptionKey: 'solutions.creativeDesign.description',
    icon: '🎨',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-gradient-to-br from-purple-900/10 to-indigo-800/10',
    category: 'services',
    subcategory: 'creative-design',
  },
  {
    id: 'digital-innovation',
    titleKey: 'solutions.digitalInnovation.title',
    subtitleKey: 'solutions.digitalInnovation.subtitle',
    descriptionKey: 'solutions.digitalInnovation.description',
    icon: '🚀',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-gradient-to-br from-blue-900/10 to-cyan-800/10',
    category: 'services',
    subcategory: 'digital-innovation',
  },
  {
    id: 'strategic-consulting',
    titleKey: 'solutions.strategicConsulting.title',
    subtitleKey: 'solutions.strategicConsulting.subtitle',
    descriptionKey: 'solutions.strategicConsulting.description',
    icon: '📊',
    color: 'from-green-500 to-teal-600',
    bgColor: 'bg-gradient-to-br from-green-900/10 to-teal-800/10',
    category: 'services',
    subcategory: 'strategic-consulting',
  },
  {
    id: 'technology-solutions',
    titleKey: 'solutions.technologySolutions.title',
    subtitleKey: 'solutions.technologySolutions.subtitle',
    descriptionKey: 'solutions.technologySolutions.description',
    icon: '⚙️',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-gradient-to-br from-orange-900/10 to-amber-800/10',
    category: 'services',
    subcategory: 'technology-solutions',
  },
];

export default function SolutionsMatrixSection() {
  const { t } = useLanguage();
  const [activeSolution, setActiveSolution] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getSolutionAssets = (solution: ISolutionCard) => {
    // Get primary and hover assets for each solution
    const primaryAsset = getAsset(solution.category, solution.subcategory, 0);
    const hoverAsset = getAsset(solution.category, solution.subcategory, 1);

    return {
      primary: primaryAsset,
      hover: hoverAsset,
    };
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Merged Background with Subtle Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)]/20 to-[var(--bg-primary)]" />

      {/* Floating 3D Elements for Cinematic Depth */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-full blur-xl"
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
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 rounded-full blur-xl"
      />

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
              Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-5xl mx-auto leading-relaxed"
            >
              Discover how our expertise areas intersect to create tailored
              solutions that drive real results.
            </motion.p>
          </div>
        </AnimationObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => {
            const assets = getSolutionAssets(solution);

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  rotateY: 2,
                }}
                onHoverStart={() => setHoveredCard(solution.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group cursor-pointer perspective-1000"
                onClick={() =>
                  setActiveSolution(
                    activeSolution === solution.id ? null : solution.id
                  )
                }
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${solution.bgColor} backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl transform-gpu`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Dynamic Background Image with Hover Effect */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredCard === solution.id ? 1.1 : 1,
                      opacity: hoveredCard === solution.id ? 0.3 : 0.15,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={assets.primary.src}
                      alt={assets.primary.alt}
                      fill
                      className="object-cover transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>

                  {/* Hover Image Overlay */}
                  {hoveredCard === solution.id && assets.hover && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={assets.hover.src}
                        alt={assets.hover.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                  )}

                  {/* Enhanced Depth Layer with Animated Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/30 via-transparent to-transparent"
                    animate={{
                      background:
                        hoveredCard === solution.id
                          ? 'linear-gradient(to top, rgba(249, 250, 251, 0.4), transparent)'
                          : 'linear-gradient(to top, rgba(249, 250, 251, 0.2), transparent)',
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Interactive 3D Icon */}
                  <motion.div
                    className="absolute top-6 right-6 text-4xl z-10"
                    animate={{
                      rotateY: hoveredCard === solution.id ? 180 : 0,
                      scale: hoveredCard === solution.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {solution.icon}
                  </motion.div>

                  {/* Content with Enhanced Typography */}
                  <div className="relative z-10 p-8 text-[var(--color-foreground)]">
                    <motion.h3
                      className="text-2xl font-bold mb-3"
                      animate={{
                        y: hoveredCard === solution.id ? -5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {t(solution.titleKey)}
                    </motion.h3>

                    <motion.p
                      className="text-lg font-semibold mb-4 text-[var(--text-secondary)]"
                      animate={{
                        y: hoveredCard === solution.id ? -3 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {t(solution.subtitleKey)}
                    </motion.p>

                    <motion.p
                      className="text-[var(--text-secondary)] leading-relaxed"
                      animate={{
                        opacity: hoveredCard === solution.id ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {t(solution.descriptionKey)}
                    </motion.p>

                    {/* Enhanced CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                        transform: 'translateZ(5px)',
                      }}
                      className={`mt-6 bg-gradient-to-r ${solution.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform-gpu`}
                    >
                      Learn More
                    </motion.button>
                  </div>

                  {/* Enhanced Border Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{
                      boxShadow:
                        hoveredCard === solution.id
                          ? '0 0 30px rgba(59, 130, 246, 0.3)'
                          : '0 0 0px rgba(59, 130, 246, 0)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-6"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Ready to Transform Your Digital Presence?
          </motion.h3>
          <motion.p className="text-xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
            Let&apos;s collaborate to create cinematic experiences that
            captivate your audience and drive meaningful results.
          </motion.p>
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
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
