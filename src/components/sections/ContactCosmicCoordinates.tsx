'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactCosmicCoordinates() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/50 via-dark-tone/30 to-deep-blue/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-cream-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-golden-accent mb-8 font-cinematic">
              Transmit Your Cosmic Coordinates
            </h2>
            <p className="text-xl text-text-white mb-8">
              Transmit your 'Cosmic Coordinates' below. Our producers will
              receive your signal and initiate an inter-dimensional
              consultation, guiding you towards your brand's stellar evolution.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-golden-accent font-semibold mb-2">
                    Your Name: Cosmic Identifier
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-text-white placeholder-text-subtle focus:outline-none focus:border-golden-accent focus:ring-2 focus:ring-golden-accent/20"
                    placeholder="Enter your cosmic identifier"
                  />
                </div>
                <div>
                  <label className="block text-golden-accent font-semibold mb-2">
                    Your Email: Interstellar Frequency
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-text-white placeholder-text-subtle focus:outline-none focus:border-golden-accent focus:ring-2 focus:ring-golden-accent/20"
                    placeholder="Enter your interstellar frequency"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-golden-accent font-semibold mb-2">
                    Your Company: Galactic Affiliation
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-text-white placeholder-text-subtle focus:outline-none focus:border-golden-accent focus:ring-2 focus:ring-golden-accent/20"
                    placeholder="Enter your galactic affiliation"
                  />
                </div>
                <div>
                  <label className="block text-golden-accent font-semibold mb-2">
                    Your Phone Number: Quantum Communicator
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-text-white placeholder-text-subtle focus:outline-none focus:border-golden-accent focus:ring-2 focus:ring-golden-accent/20"
                    placeholder="Enter your quantum communicator"
                  />
                </div>
              </div>

              <div>
                <label className="block text-golden-accent font-semibold mb-2">
                  Dimensional Objective (Service of Interest)
                </label>
                <select className="w-full px-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-text-white focus:outline-none focus:border-golden-accent focus:ring-2 focus:ring-golden-accent/20">
                  <option value="">Select your dimensional objective</option>
                  <option value="video-production">
                    Production Vidéo Nebula
                  </option>
                  <option value="cinematic-production">
                    Production Cinématographique Nebula
                  </option>
                  <option value="motion-design">
                    Motion Design & Animation Nebula
                  </option>
                  <option value="photography">
                    Shooting Photos & Contenu Nebula
                  </option>
                  <option value="graphic-design">
                    Design Graphique & Identité Nebula
                  </option>
                  <option value="web-creation">
                    Création de Site Web Nebula
                  </option>
                  <option value="digital-marketing">
                    Marketing Digital Nebula
                  </option>
                  <option value="specialized-services">
                    Services Spécialisés Nebula
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-golden-accent font-semibold mb-2">
                  Tell us about your cinematic vision: Cosmic Vision Brief
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-tone/50 border border-golden-accent/30 rounded-lg text-text-white placeholder-text-subtle focus:outline-none focus:border-golden-accent focus:ring-2 focus:ring-golden-accent/20"
                  placeholder="Describe your cosmic vision and how we can help chart your digital destiny..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Transmit Coordinates
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cream-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-golden-accent mb-8 font-cinematic">
              Connect with the Nexus
            </h2>
            <p className="text-xl text-text-white mb-8">
              The heart of our universe beats in Tunisia. Connect directly with
              the Nexus, your gateway to unparalleled digital creations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-golden-accent text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-golden-accent">
                    Cosmic Transmission Channel
                  </h3>
                  <p className="text-text-subtle">contact@orsonvision.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-golden-accent text-xl">📞</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-golden-accent">
                    Inter-dimensional Frequency
                  </h3>
                  <p className="text-text-subtle">+216 XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-golden-accent text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-golden-accent">
                    Galactic Headquarters
                  </h3>
                  <p className="text-text-subtle">Tunis, Tunisia</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-golden-accent text-xl">🌐</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-golden-accent">
                    Cosmic Broadcast Channels
                  </h3>
                  <p className="text-text-subtle">@orsonvision</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-golden-accent text-xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-golden-accent">
                    Temporal Alignment
                  </h3>
                  <p className="text-text-subtle">
                    Monday - Friday, 9:00 AM - 6:00 PM (Tunisia Time)
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-golden-accent mb-4">
                Our Galactic Coordinates
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://placehold.co/600x400/1A1A2E/FFD700?text=Tunisia+Nexus+Map"
                  alt="Tunisia Nexus Map"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* What Happens Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-golden-accent mb-8 font-cinematic">
            What Happens Next: Cosmic Transmissions
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Once your coordinates are transmitted, prepare for these 'Cosmic
            Transmissions':
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Initial Consultation: Signal Alignment',
                description:
                  "We'll align our frequencies to discuss your vision and dimensional requirements.",
              },
              {
                step: '2',
                title: 'Proposal Development: Blueprint Generation',
                description:
                  'Our cosmic architects will craft a detailed blueprint tailored for your mission.',
              },
              {
                step: '3',
                title: 'Project Planning: Mission Briefing',
                description:
                  "We'll develop a comprehensive mission plan with galactic timelines and milestones.",
              },
              {
                step: '4',
                title: 'Production Begins: Cosmic Launch',
                description:
                  'Your cinematic journey ignites as our team propels your vision into its new digital dimension.',
              },
            ].map((transmission, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-golden-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-golden-accent">
                    {transmission.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-golden-accent mb-3">
                  {transmission.title}
                </h3>
                <p className="text-text-subtle text-sm leading-relaxed">
                  {transmission.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-golden-accent rounded-full opacity-50 animate-pulse" />
      </div>
    </section>
  );
}
