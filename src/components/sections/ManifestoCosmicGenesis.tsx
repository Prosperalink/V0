'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ManifestoCosmicGenesis() {
  return (
    <section className="py-20 bg-gradient-to-r from-deep-blue via-dark-tone to-deep-blue relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-cream-white"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-cinematic font-bold mb-8 text-golden-accent crisp-text"
            >
              The Cosmic Genesis
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed mb-8 text-text-white crisp-text"
            >
              Every pixel is a star. Every interaction, a gravitational pull.
              Every project, a new dimension brought to life. Our philosophy,
              'Cinematic Solutions,' is the fundamental force guiding the
              creation of digital experiences that rival the grandeur of
              cinematic epics. From our Tunisian nexus, we fuse artistic vision
              with technical mastery to expand your brand's cosmic footprint.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-text-subtle crisp-text"
            >
              In the vast expanse of digital possibility, we craft universes
              where technology meets storytelling, where innovation dances with
              imagination, and where every solution becomes a portal to new
              dimensions of human experience.
            </motion.p>

            {/* Golden Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              viewport={{ once: true }}
              className="w-32 h-1 bg-gradient-to-r from-golden-accent to-yellow-400 mt-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/homepage/manifesto/manifesto-background.jpg"
                alt="Cosmic Blueprint"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Overlay with cinematic glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-4 right-4 w-3 h-3 bg-golden-accent rounded-full shadow-lg pointer-events-none"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
                className="absolute bottom-6 left-6 w-2 h-2 bg-golden-accent rounded-full shadow-lg pointer-events-none"
              />
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-golden-accent/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-golden-accent/5 rounded-full blur-xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
