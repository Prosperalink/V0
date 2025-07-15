'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-deep-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-golden-accent mb-8">
              Behind the Cinematic Lens
            </h2>

            <p className="text-xl text-text-white mb-6 leading-relaxed">
              Orson Vision was born from a passion for cinematic storytelling
              and digital innovation. We believe that every project deserves the
              same level of production value as major international brands.
            </p>

            <p className="text-lg text-text-subtle mb-8 leading-relaxed">
              We approach every project with the precision of a master
              filmmaker, combining artistic vision with technical excellence to
              create experiences that rival Hollywood productions. Every frame,
              every interaction, every moment is carefully composed to tell
              stories that captivate and convert.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-golden-accent rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="text-golden-accent font-semibold mb-2">
                    Cinematic Storytelling
                  </h4>
                  <p className="text-text-subtle">
                    Every project is a scene, every portfolio piece a story
                    waiting to be told
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-golden-accent rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="text-golden-accent font-semibold mb-2">
                    Technical Mastery
                  </h4>
                  <p className="text-text-subtle">
                    Cutting-edge technology with cinematic precision and
                    artistic vision
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-golden-accent rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="text-golden-accent font-semibold mb-2">
                    Measurable Impact
                  </h4>
                  <p className="text-text-subtle">
                    Transform ordinary projects into extraordinary visual
                    narratives
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-golden-accent/20 to-transparent rounded-lg p-8 border border-golden-accent/30">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-playfair font-semibold text-golden-accent mb-4">
                  Cinematic Showcase
                </h3>
                <p className="text-text-white leading-relaxed">
                  Step into the director's chair and experience our work through
                  the lens of cinematic storytelling. Navigate through our
                  cinematic universe and discover how we transform ordinary
                  projects into extraordinary visual narratives.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-golden-accent/30 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-golden-accent/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
