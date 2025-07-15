'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Play,
  Shield,
  Target,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Stronger overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal/95 via-deep-charcoal/80 to-deep-charcoal/95 z-10" />
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            poster="/hero/hero-poster.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
          >
            <source src="/hero/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-true-blue/80 via-deep-charcoal/90 to-true-blue/80 flex items-center justify-center">
            <Image
              src="/hero/hero-poster.jpg"
              alt="Orson Digital Vérité"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>
        )}
        {/* Loading indicator */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="spinner w-8 h-8" />
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-true-blue/20 backdrop-blur-sm border border-true-blue/30 shadow-lg"
          >
            <span className="text-sm font-semibold tracking-wide">
              Digital Vérité - Authentic Solutions
            </span>
          </motion.div>

          {/* Main Heading - Solution First */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-fluid-4xl sm:text-fluid-5xl lg:text-fluid-7xl font-bold leading-tight tracking-tight drop-shadow-xl"
          >
            Solutions Numériques
            <br />
            <span className="text-true-blue">Qui Fonctionnent</span>
          </motion.h1>

          {/* Subtitle - Honest Expert Voice */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-fluid-lg sm:text-fluid-xl lg:text-fluid-2xl text-warm-gray max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg"
          >
            Nous créons des solutions numériques authentiques qui génèrent de
            vrais résultats commerciaux. Pas de promesses vides, pas de
            marketing trompeur - juste des solutions fonctionnelles et
            transparentes.
          </motion.p>

          {/* Solution Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8"
          >
            <div className="flex items-center justify-center gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Résultats Mesurables</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Shield className="w-5 h-5 text-success" />
              <span>Transparence Totale</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Target className="w-5 h-5 text-success" />
              <span>Solutions Durables</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-3 min-h-[48px] min-w-[48px] touch-manipulation shadow-2xl hover:shadow-3xl border-2 border-true-blue/40"
            >
              Découvrir Nos Solutions
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="btn-secondary text-lg px-8 py-4 flex items-center gap-3 min-h-[48px] min-w-[48px] touch-manipulation shadow-xl hover:shadow-2xl border-2 border-true-blue/40"
            >
              <Play size={20} />
              Voir Nos Réalisations
            </motion.button>
          </motion.div>

          {/* Trust Indicators - Digital Vérité Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="pt-12"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-warm-gray">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Prix Transparents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Résultats Garantis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Code Maintenable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Support Continu</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-cream-white/70 hover:text-cream-white transition-colors duration-300 cursor-pointer"
          onClick={() =>
            document
              .getElementById('services')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span className="text-sm font-medium">Explorer nos services</span>
          <ChevronDown size={24} className="animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 w-32 h-32 bg-true-blue/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-true-blue/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/2 right-10 w-16 h-16 bg-true-blue/5 rounded-full blur-lg"
      />
    </section>
  );
}
