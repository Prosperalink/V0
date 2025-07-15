'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MatrixGalacticMap() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/30 via-dark-tone/20 to-deep-blue/30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 motion-component"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-cinematic crisp-text">
            The Galactic Map
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto crisp-text">
            Explore the vastness of our Cinematic Universe. Our 'Galactic Map'
            reveals the diverse 'Planets of Partnership' we orbit and the
            'Nebulas of Expertise' that define our cosmic capabilities. Click on
            any celestial body to discover how we chart a course for your
            success or delve deeper into a specific client 'Planet'.
          </p>
        </motion.div>

        {/* Planets of Partnership Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 motion-component"
        >
          <h3 className="text-3xl font-bold text-golden-accent mb-8 text-center crisp-text">
            Planets of Partnership
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              {
                name: 'Corporate Planet',
                image:
                  '/assets/planets-of-partnership/corporate/corporate-thumbnail.jpg',
              },
              {
                name: 'SME Planet',
                image: '/assets/planets-of-partnership/smes/smes-thumbnail.jpg',
              },
              {
                name: 'Wedding Planet',
                image:
                  '/assets/planets-of-partnership/weddings/weddings-thumbnail.jpg',
              },
              {
                name: 'Tourism Planet',
                image:
                  '/assets/planets-of-partnership/tourism/tourism-thumbnail.jpg',
              },
              {
                name: 'Healthcare Planet',
                image:
                  '/assets/planets-of-partnership/healthcare/healthcare-thumbnail.jpg',
              },
              {
                name: 'Schools Planet',
                image:
                  '/assets/planets-of-partnership/schools/schools-thumbnail.jpg',
              },
              {
                name: 'NonProfit Planet',
                image:
                  '/assets/planets-of-partnership/nonprofits/nonprofits-thumbnail.jpg',
              },
              {
                name: 'Fashion Planet',
                image:
                  '/assets/planets-of-partnership/fashion/fashion-thumbnail.jpg',
              },
            ].map((planet, index) => (
              <motion.div
                key={planet.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src={planet.image}
                    alt={planet.name}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-full border-2 border-golden-accent/30 group-hover:border-golden-accent transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-golden-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-xs text-text-subtle text-center mt-2 group-hover:text-golden-accent transition-colors duration-300 crisp-text">
                  {planet.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nebulas of Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="motion-component"
        >
          <h3 className="text-3xl font-bold text-golden-accent mb-8 text-center crisp-text">
            Nebulas of Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              {
                name: 'Video Production Nebula',
                image: '/assets/services/nebulas/video-thumbnail.jpg',
              },
              {
                name: 'Cinematic Production Nebula',
                image: '/assets/services/nebulas/cinematic-thumbnail.jpg',
              },
              {
                name: 'Motion Design Nebula',
                image: '/assets/services/nebulas/motion-thumbnail.jpg',
              },
              {
                name: 'Photography Nebula',
                image: '/assets/services/nebulas/photography-thumbnail.jpg',
              },
              {
                name: 'Graphic Design Nebula',
                image: '/assets/services/nebulas/graphic-thumbnail.jpg',
              },
              {
                name: 'Web Creation Nebula',
                image: '/assets/services/nebulas/web-thumbnail.jpg',
              },
              {
                name: 'Digital Marketing Nebula',
                image: '/assets/services/nebulas/marketing-thumbnail.jpg',
              },
              {
                name: 'Specialized Services Nebula',
                image: '/assets/services/nebulas/specialized-thumbnail.jpg',
              },
            ].map((nebula, index) => (
              <motion.div
                key={nebula.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src={nebula.image}
                    alt={nebula.name}
                    width={100}
                    height={100}
                    className="w-full h-auto rounded-full border-2 border-golden-accent/30 group-hover:border-golden-accent transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-golden-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-xs text-text-subtle text-center mt-2 group-hover:text-golden-accent transition-colors duration-300 crisp-text">
                  {nebula.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 motion-component"
        >
          <p className="text-lg text-text-secondary mb-6 crisp-text">
            Navigate through our cosmic array of digital solutions, each a
            unique constellation of expertise designed to illuminate your path
            through the digital universe.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore Our Galactic Map
          </motion.button>
        </motion.div>

        {/* Background decorative elements for cosmic atmosphere */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full opacity-40 animate-pulse pointer-events-none" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full opacity-30 animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-golden-accent rounded-full opacity-50 animate-pulse pointer-events-none" />
      </div>
    </section>
  );
}
