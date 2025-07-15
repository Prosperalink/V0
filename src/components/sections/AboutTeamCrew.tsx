'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Oussama Naffati',
    role: 'The Cosmic Director',
    title: 'Visionary Architect & Founder',
    expertise: 'Universal Storytelling, Dimensional Design, Galactic Strategy',
    philosophy:
      'Every project is a new dimension waiting to be explored. My mission is to guide its creation with cosmic precision.',
    image:
      'https://placehold.co/400x400/16213E/F0F0F0?text=Oussama+Naffati+Cosmic',
  },
  {
    name: 'Sarah Johnson',
    role: 'The Celestial Cinematographer',
    title: 'Creative Director & Visual Architect',
    expertise: 'Cinematic Storytelling, Visual Design, Brand Evolution',
    philosophy:
      'I craft visual narratives that transcend the ordinary and transport audiences to new dimensions of possibility.',
    image:
      'https://placehold.co/400x400/1A1A2E/FFED4E?text=Sarah+Johnson+Cosmic',
  },
  {
    name: 'Michael Chen',
    role: 'The Interstellar Engineer',
    title: 'Technical Director & Digital Architect',
    expertise:
      'Digital Infrastructure, Cosmic Technology, Performance Optimization',
    philosophy:
      'I build the digital foundations that power our cinematic universes with precision and scalability.',
    image:
      'https://placehold.co/400x400/0F3460/B0B0B0?text=Michael+Chen+Cosmic',
  },
  {
    name: 'Emily Rodriguez',
    role: 'The Galactic Strategist',
    title: 'Strategic Director & Market Navigator',
    expertise: 'Market Analysis, Strategic Planning, Cosmic Positioning',
    philosophy:
      'I chart the course for brands to navigate the digital cosmos and achieve stellar market presence.',
    image:
      'https://placehold.co/400x400/1C1C1C/D4AF37?text=Emily+Rodriguez+Cosmic',
  },
];

export default function AboutTeamCrew() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/50 via-dark-tone/30 to-deep-blue/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-golden-glow rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-cinematic">
            Meet the Crew
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A universe is only as magnificent as its architects. Meet the
            'Cosmic Team' – a collective of visionary directors, celestial
            cinematographers, and interstellar engineers, each a master of their
            craft, converging at our Tunisian nexus to build your digital
            destiny.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-dark-tone to-mid-tone rounded-2xl p-6 border border-border-card hover:border-golden-accent transition-all duration-500 shadow-xl hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-golden-accent mb-2 font-cinematic">
                    {member.role}
                  </h3>
                  <h4 className="text-lg font-semibold text-text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-golden-accent mb-4">
                    {member.title}
                  </p>
                  <p className="text-xs text-text-subtle mb-4 leading-relaxed">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                  <p className="text-sm text-text-secondary italic leading-relaxed">
                    "{member.philosophy}"
                  </p>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                  className="absolute top-4 right-4 w-2 h-2 bg-golden-accent rounded-full"
                />
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-golden-accent/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-golden-accent mb-8 font-cinematic">
            Our Philosophy: Cinematic Solutions
          </h3>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
            Our philosophy is the gravitational law of our universe: 'Cinematic
            Solutions.' It's the force that shapes every dimension we create,
            ensuring unparalleled depth, narrative power, and stellar
            performance. We are driven by:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="text-lg font-bold text-golden-accent mb-4">
                Cosmic Precision
              </h4>
              <p className="text-text-subtle">
                Engineering every detail for flawless inter-dimensional harmony.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold text-golden-accent mb-4">
                Dimensional Storytelling
              </h4>
              <p className="text-text-subtle">
                Crafting narratives that resonate across all cosmic frequencies.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold text-golden-accent mb-4">
                Universal Production Excellence
              </h4>
              <p className="text-text-subtle">
                Delivering stellar quality that propels brands into their own
                digital galaxies.
              </p>
            </div>
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
