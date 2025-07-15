'use client';

import { motion } from 'framer-motion';

export default function Inscription() {
  return (
    <section className="relative py-24 bg-deep-blue overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-golden-accent rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-golden-accent rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-golden-accent to-transparent mx-auto mb-12"
          />

          {/* Main Inscription */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-8 leading-tight"
          >
            Where Digital Meets Cinematic Excellence
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg sm:text-xl text-text-subtle max-w-2xl mx-auto leading-relaxed"
          >
            Every pixel tells a story. Every interaction creates a moment. Every
            project is a masterpiece in the making. We approach digital
            solutions with the precision of a master filmmaker, crafting
            experiences that rival the sophistication of Hollywood productions.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.9 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-golden-accent to-transparent mx-auto mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
