'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ServicesHeroNebulas() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/95 via-deep-blue/80 to-deep-blue/95 z-10"></div>
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            poster="/assets/services/hero/nebula-formation.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
          >
            <source
              src="/assets/services/hero/nebula-formation.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-deep-blue/80 via-deep-blue/90 to-deep-blue/80 flex items-center justify-center">
            <Image
              src="/assets/services/hero/nebula-formation.jpg"
              alt="Nebula Formation"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>
        )}
        {/* Loading indicator */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="spinner w-8 h-8"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-cream-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-golden-accent/20 backdrop-blur-sm border border-golden-accent/30 shadow-lg"
          >
            <span className="text-sm font-semibold tracking-wide">
              Our Expertise Nebulas
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-cinematic font-bold text-golden-accent mb-8 leading-tight"
          >
            Our Nebulas of Expertise
            <br />
            <span className="text-cream-white">
              Illuminating Your Digital Cosmos
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl text-text-white mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Explore our cosmic array of digital solutions, each a unique nebula
            of expertise designed to illuminate your path through the digital
            universe.
          </motion.p>

          {/* Golden Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-golden-accent to-yellow-400 mx-auto mb-12"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden-accent focus:ring-offset-2 focus:ring-offset-deep-blue"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-golden-accent text-golden-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-accent hover:text-deep-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden-accent focus:ring-offset-2 focus:ring-offset-deep-blue"
            >
              View Our Portfolio
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-accent mb-2">
                8+
              </div>
              <div className="text-text-subtle">Service Nebulas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-accent mb-2">
                500+
              </div>
              <div className="text-text-subtle">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden-accent mb-2">
                98%
              </div>
              <div className="text-text-subtle">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full opacity-40"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-golden-accent rounded-full opacity-50"
        />
      </div>
    </section>
  );
}
