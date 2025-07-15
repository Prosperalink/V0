'use client';

import SolutionsMatrix from '@/components/SolutionsMatrix';
import { motion } from 'framer-motion';

export default function MatrixGalacticMap() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-tone via-deep-blue to-dark-tone">
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
            The Solutions Matrix
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-text-white max-w-3xl mx-auto"
          >
            Navigate through our cosmic array of digital solutions, each a
            unique dimension in the Orson Vision universe.
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background decorative elements for cosmic atmosphere */}
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
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 4,
              }}
              className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-golden-accent rounded-full"
            />
          </div>

          {/* Solutions Matrix with enhanced styling */}
          <div className="relative z-10">
            <SolutionsMatrix />
          </div>

          {/* Additional cosmic elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-golden-accent/5 rounded-full blur-xl" />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-golden-accent/3 rounded-full blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}
