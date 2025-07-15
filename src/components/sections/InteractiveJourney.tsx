'use client';

import AnimationObserver from '@/components/AnimationObserver';
import { JOURNEY_PATHS } from '@/constants';
import { useJourney } from '@/contexts/JourneyContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function InteractiveJourney() {
  const { selectedPath, setSelectedPath, setIsJourneyStarted } = useJourney();

  const handlePathSelect = (pathId: string) => {
    setSelectedPath(pathId);
    setIsJourneyStarted(true);

    // Scroll to next section after selection
    setTimeout(() => {
      const nextSection = document.getElementById('personalized-experience');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationObserver>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-6">
              Choose Your Story
            </h2>
            <p className="text-xl sm:text-2xl text-text-white mb-4 max-w-3xl mx-auto">
              Every great film begins with a choice. Select your path and let us
              craft your cinematic journey.
            </p>
            <p className="text-lg text-text-subtle max-w-2xl mx-auto">
              Each path represents a specialized journey tailored to your
              industry and goals, combining our cinematic expertise with your
              unique vision.
            </p>
          </motion.div>

          {/* Journey Paths Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOURNEY_PATHS.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border border-golden-accent/20 ${path.bgColor} backdrop-blur-sm hover:border-golden-accent/40 transition-all duration-500 group cursor-pointer ${
                  selectedPath === path.id
                    ? 'border-golden-accent scale-105'
                    : ''
                }`}
                onClick={() => handlePathSelect(path.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Path Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${path.color} text-white`}
                  >
                    <span className="text-2xl">{path.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-2">
                      {path.title}
                    </h3>
                    <p className="text-golden-accent/80 text-sm font-medium mb-2">
                      {path.subtitle}
                    </p>
                    <p className="text-text-white leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {path.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-golden-accent rounded-full" />
                        <span className="text-text-white text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  className={`w-full bg-gradient-to-r ${path.color} text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300 ${
                    selectedPath === path.id ? 'shadow-xl' : ''
                  }`}
                >
                  {selectedPath === path.id
                    ? 'Journey Selected'
                    : 'Choose This Path'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>

                {/* Selection Indicator */}
                {selectedPath === path.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-golden-accent rounded-full flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-deep-blue rounded-full" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Selection Message */}
          {selectedPath && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-12"
            >
              <p className="text-golden-accent text-lg font-medium">
                Perfect choice! Let's craft your cinematic journey...
              </p>
            </motion.div>
          )}
        </AnimationObserver>
      </div>
    </section>
  );
}
