'use client';

import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useCinematicMotion } from '@/lib/cinematic-motion';
import ApertureLens from './ApertureLens';

interface IService {
  id: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  glowColor: string;
  lensType: 'cinematic' | 'portrait' | 'wide' | 'macro' | 'telephoto';
  category:
    | 'storytelling'
    | 'technology'
    | 'design'
    | 'engagement'
    | 'performance'
    | 'strategy';
  priority: 'primary' | 'secondary';
}

const lenses: IService[] = [
  {
    id: 'narrative-lens',
    title: 'Narrative Lens',
    description:
      'Craft compelling stories that move audiences and build brands.',
    features: [
      'Brand Storytelling',
      'Content Strategy',
      'Scriptwriting',
      'Emotional Impact',
    ],
    color: 'from-cinematic-gold-primary to-cinematic-gold-bright',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    lensType: 'cinematic',
    category: 'storytelling',
    priority: 'primary',
  },
  {
    id: 'innovation-lens',
    title: 'Innovation Lens',
    description:
      'Leverage emerging tech and creative thinking for digital breakthroughs.',
    features: [
      'Digital Innovation',
      'Automation',
      'Emerging Tech',
      'Prototyping',
    ],
    color: 'from-cinematic-blue-primary to-cinematic-blue-rich',
    glowColor: 'rgba(30, 58, 138, 0.6)',
    lensType: 'wide',
    category: 'technology',
    priority: 'primary',
  },
  {
    id: 'brand-lens',
    title: 'Brand Lens',
    description: 'Shape a visual identity that stands out and endures.',
    features: [
      'Visual Identity',
      'Logo Design',
      'Brand Guidelines',
      'Design Systems',
    ],
    color: 'from-cinematic-gold-primary to-cinematic-gold-bright',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    lensType: 'portrait',
    category: 'design',
    priority: 'primary',
  },
  {
    id: 'engagement-lens',
    title: 'Engagement Lens',
    description: 'Create interactive experiences that connect and inspire.',
    features: [
      'Community Building',
      'Social Campaigns',
      'Interactive Content',
      'User Experience',
    ],
    color: 'from-cinematic-blue-primary to-cinematic-blue-rich',
    glowColor: 'rgba(30, 58, 138, 0.6)',
    lensType: 'macro',
    category: 'engagement',
    priority: 'secondary',
  },
  {
    id: 'performance-lens',
    title: 'Performance Lens',
    description:
      'Optimize for results with data-driven strategies and analytics.',
    features: [
      'SEO',
      'Analytics',
      'Conversion Optimization',
      'Performance Audits',
    ],
    color: 'from-cinematic-gold-primary to-cinematic-gold-bright',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    lensType: 'telephoto',
    category: 'performance',
    priority: 'secondary',
  },
  {
    id: 'partnership-lens',
    title: 'Partnership Lens',
    description: 'Collaborate for long-term success and shared growth.',
    features: [
      'Consulting',
      'Workshops',
      'Ongoing Support',
      'Strategic Alliances',
    ],
    color: 'from-cinematic-blue-primary to-cinematic-blue-rich',
    glowColor: 'rgba(30, 58, 138, 0.6)',
    lensType: 'cinematic',
    category: 'strategy',
    priority: 'secondary',
  },
  {
    id: 'global-lens',
    title: 'Global Lens',
    description: 'Expand your reach and impact across cultures and markets.',
    features: [
      'Localization',
      'Multilingual Content',
      'International Strategy',
      'Cultural Insights',
    ],
    color: 'from-cinematic-gold-primary to-cinematic-gold-bright',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    lensType: 'wide',
    category: 'strategy',
    priority: 'secondary',
  },
  {
    id: 'cinematic-lens',
    title: 'Cinematic Lens',
    description: 'Elevate your brand with cinematic visuals and storytelling.',
    features: [
      'Cinematic Video',
      'Photography',
      'Art Direction',
      'Post-Production',
    ],
    color: 'from-cinematic-blue-primary to-cinematic-blue-rich',
    glowColor: 'rgba(30, 58, 138, 0.6)',
    lensType: 'portrait',
    category: 'storytelling',
    priority: 'secondary',
  },
];

export default function CinematicLens() {
  const [selectedLens, setSelectedLens] = useState<IService | null>(null);
  const [hoveredLens, setHoveredLens] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [floatingParticles, setFloatingParticles] = useState<any[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDirectorMode, setIsDirectorMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Cinematic Motion Engine
  const cinematicMotion = useCinematicMotion();

  // Framer Motion rotation for orbital elements
  const textRotation = useMotionValue(0);
  const orbitAnimation = {
    rotate: 360,
    transition: {
      duration: 60,
      repeat: Infinity,
      ease: 'linear',
    },
  };

  // Set mounted state on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate floating particles for cinematic atmosphere
  useEffect(() => {
    if (!mounted) return;

    const particles = [...Array(30)].map((_, i) => ({
      key: `lens-particle-${i}-${Math.random()}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 4,
      size: 2 + Math.random() * 3,
    }));
    setFloatingParticles(particles);
  }, [mounted]);

  // Mouse tracking for director's chair interface
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Toggle director mode
  const toggleDirectorMode = () => {
    setIsDirectorMode(!isDirectorMode);
    cinematicMotion.toggleDirectorMode(!isDirectorMode);
  };

  // Filter lenses by category
  const filteredLenses =
    activeCategory === 'All'
      ? lenses
      : lenses.filter(lens => lens.category === activeCategory.toLowerCase());

  const primaryLenses = filteredLenses.filter(
    lens => lens.priority === 'primary'
  );
  const secondaryLenses = filteredLenses.filter(
    lens => lens.priority === 'secondary'
  );

  return (
    <section
      className={`relative min-h-screen py-20 overflow-hidden ${isDirectorMode ? 'directors-chair' : ''}`}
    >
      {/* 🎬 Hollywood Studio Background */}
      <div className="absolute inset-0">
        {/* Film Noir Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-noir-primary via-noir-secondary to-noir-primary" />

        {/* Dynamic Film Grain */}
        <div className="absolute inset-0 film-grain" />

        {/* Lens Flare Effects */}
        <motion.div
          className="absolute inset-0 lens-flare"
          animate={{
            background: [
              'radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.3) 0%, transparent 60%)',
              'radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.3) 0%, transparent 60%)',
              'radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.3) 0%, transparent 60%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Interactive Spotlight */}
        {isDirectorMode && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={cinematicMotion.getInteractiveSpotlight(
              mousePosition.x,
              mousePosition.y,
              0.2
            )}
          />
        )}
      </div>

      {/* 🎬 Floating Cinematic Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingParticles.map(particle => (
          <motion.div
            key={particle.key}
            className="absolute w-1 h-1 bg-noir-accent rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* 🎬 Film Reel Navigation */}
      <div className="absolute top-4 left-4 z-20">
        <motion.div
          className="film-strip"
          animate={cinematicMotion.getFilmReelRotation(1)}
          whileHover={{ scale: 1.05 }}
        >
          {lenses.slice(0, 6).map((lens, index) => (
            <motion.div
              key={lens.id}
              className="film-frame"
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedLens(lens)}
            />
          ))}
        </motion.div>
      </div>

      {/* 🎬 Director's Chair Toggle */}
      <motion.button
        className="absolute top-4 right-4 z-20 cinematic-button"
        onClick={toggleDirectorMode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDirectorMode ? '🎬 Exit Director Mode' : '🎬 Director Mode'}
      </motion.button>

      <div className="relative z-10 container mx-auto px-4">
        {/* 🎬 Enhanced Header with Cinematic Typography */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="cinematic-title text-4xl md:text-6xl mb-6"
            animate={cinematicMotion.getGoldenGlow()}
          >
            Choose Your
          </motion.h2>
          <motion.h2
            className="cinematic-title text-4xl md:text-6xl mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Cinematic Lens
          </motion.h2>
          <motion.p
            className="cinematic-subtitle text-xl max-w-3xl mx-auto leading-relaxed mb-8"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Each lens offers a unique perspective on digital storytelling.
            Select the one that best captures your vision and transforms your
            digital presence.
          </motion.p>

          {/* 🎬 Storyboard Category Navigation */}
          <motion.div
            className="storyboard-nav"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              'All',
              'Storytelling',
              'Technology',
              'Design',
              'Engagement',
              'Performance',
              'Strategy',
            ].map((category, index) => (
              <motion.button
                key={category}
                className={`storyboard-frame ${activeCategory === category ? 'golden-glow' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <span className="text-xs text-noir-accent font-bold">
                  {category}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* 🎬 Primary Lenses - Featured Services with 3D Effects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h3
            className="cinematic-title text-2xl mb-8 text-center"
            animate={cinematicMotion.getGoldenGlow()}
          >
            Featured Lenses
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {primaryLenses.map((lens, index) => (
              <HollywoodLensCard
                key={lens.id}
                lens={lens}
                isSelected={selectedLens?.id === lens.id}
                isHovered={hoveredLens === lens.id}
                onSelect={() => setSelectedLens(lens)}
                onHover={isHovering =>
                  setHoveredLens(isHovering ? lens.id : null)
                }
                index={index}
                priority="primary"
                cinematicMotion={cinematicMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* 🎬 Secondary Lenses - Additional Services */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3
            className="cinematic-subtitle text-2xl mb-8 text-center"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Specialized Lenses
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryLenses.map((lens, index) => (
              <HollywoodLensCard
                key={lens.id}
                lens={lens}
                isSelected={selectedLens?.id === lens.id}
                isHovered={hoveredLens === lens.id}
                onSelect={() => setSelectedLens(lens)}
                onHover={isHovering =>
                  setHoveredLens(isHovering ? lens.id : null)
                }
                index={index}
                priority="secondary"
                cinematicMotion={cinematicMotion}
              />
            ))}
          </div>
        </motion.div>

        {/* 🎬 Enhanced Service Details Panel with Cinematic Effects */}
        <AnimatePresence>
          {selectedLens && (
            <motion.div
              className="fixed inset-0 bg-noir-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLens(null)}
            >
              <motion.div
                className="cinematic-card max-w-2xl w-full p-8 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                onClick={e => e.stopPropagation()}
              >
                {/* Film Grain Overlay */}
                <div className="absolute inset-0 film-grain" />

                {/* Lens Flare Effect */}
                <div className="absolute inset-0 lens-flare" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div
                      className="relative"
                      animate={cinematicMotion.getFilmReelRotation(2)}
                    >
                      <ApertureLens size={80} color="gold" isActive={true} />
                    </motion.div>
                    <div>
                      <h3 className="cinematic-title text-3xl mb-2">
                        {selectedLens.title}
                      </h3>
                      <p className="cinematic-subtitle text-lg">
                        {selectedLens.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {selectedLens.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3 text-noir-text/90"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.div
                          className="w-3 h-3 rounded-full bg-noir-accent flex-shrink-0"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.2,
                          }}
                        />
                        <span className="text-base">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      className="cinematic-button"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Choose This Lens
                    </motion.button>
                    <motion.button
                      className="px-6 py-3 border border-noir-accent/30 text-noir-text rounded-lg hover:bg-noir-accent/10 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedLens(null)}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// 🎬 Hollywood Lens Card Component
interface IHollywoodLensCardProps {
  lens: IService;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: () => void;
  onHover: (isHovering: boolean) => void;
  index: number;
  priority: 'primary' | 'secondary';
  cinematicMotion: any;
}

function HollywoodLensCard({
  lens,
  isSelected,
  isHovered,
  onSelect,
  onHover,
  index,
  priority,
  cinematicMotion,
}: IHollywoodLensCardProps) {
  return (
    <motion.div
      className={`cinematic-card group cursor-pointer ${priority === 'primary' ? 'p-8' : 'p-6'}`}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        ...cinematicMotion.getGoldenGlow(),
      }}
      onClick={onSelect}
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
    >
      {/* Film Grain Effect */}
      <div className="absolute inset-0 film-grain" />

      {/* Lens Flare Effect */}
      <div className="absolute inset-0 lens-flare" />

      {/* Enhanced Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          background:
            isSelected || isHovered
              ? `radial-gradient(circle at 50% 50%, ${lens.glowColor} 0%, transparent 70%)`
              : 'transparent',
          boxShadow:
            isSelected || isHovered ? `0 0 30px ${lens.glowColor}` : 'none',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Particles Effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-noir-accent rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, -40],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">
        {/* Lens Icon with Enhanced Animation */}
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{
              scale: isSelected || isHovered ? 1.2 : 1,
              rotate: isSelected || isHovered ? 360 : 0,
            }}
            transition={{
              duration: isSelected || isHovered ? 0.8 : 0.3,
              ease: isSelected || isHovered ? 'easeInOut' : 'easeOut',
            }}
          >
            <ApertureLens
              size={priority === 'primary' ? 80 : 60}
              color="gold"
              isActive={isSelected || isHovered}
            />
          </motion.div>
        </div>

        {/* Content with Dynamic Typography */}
        <div className="text-center">
          <motion.h3
            className={`font-bold mb-3 ${priority === 'primary' ? 'text-2xl text-noir-text' : 'text-xl text-noir-text/90'}`}
            animate={{
              textShadow:
                isSelected || isHovered
                  ? '0 0 10px rgba(255, 215, 0, 0.5)'
                  : 'none',
            }}
            transition={{ duration: 0.3 }}
          >
            {lens.title}
          </motion.h3>
          <motion.p
            className="text-noir-text/70 text-sm leading-relaxed mb-4"
            animate={{
              opacity: isSelected || isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            {lens.description}
          </motion.p>

          {/* Animated Feature Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            animate={{
              y: isSelected || isHovered ? 0 : 5,
            }}
            transition={{ duration: 0.3 }}
          >
            {lens.features.slice(0, 2).map((feature, idx) => (
              <motion.span
                key={feature}
                className="px-3 py-1 bg-noir-secondary/50 rounded-full text-xs text-noir-text/80 border border-noir-accent/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Selection Indicator */}
        {isSelected && (
          <motion.div
            className="absolute top-4 right-4 w-6 h-6 bg-noir-accent rounded-full flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <motion.div
              className="w-3 h-3 bg-noir-text rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
