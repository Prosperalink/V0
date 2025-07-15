'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 'oussama-naffati',
    name: 'Oussama Naffati',
    role: 'Founder & Creative Director',
    philosophy:
      'Every pixel tells a story, every interaction creates a universe.',
    image: '/assets/about/team/oussama-naffati.jpg',
    linkedin: 'https://linkedin.com/in/oussama-naffati',
    twitter: 'https://twitter.com/oussama_naffati',
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Lead Digital Architect',
    philosophy:
      'Weaving technology and creativity into seamless digital experiences.',
    image: '/assets/about/team/sarah-chen.jpg',
    linkedin: 'https://linkedin.com/in/sarah-chen',
    twitter: 'https://twitter.com/sarah_chen',
  },
  {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    role: 'Cinematic Solutions Director',
    philosophy: 'Transforming visions into cinematic digital realities.',
    image: '/assets/about/team/michael-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/michael-rodriguez',
    twitter: 'https://twitter.com/michael_rodriguez',
  },
  {
    id: 'emily-watson',
    name: 'Emily Watson',
    role: 'UX Universe Designer',
    philosophy: 'Creating intuitive journeys through digital dimensions.',
    image: '/assets/about/team/emily-watson.jpg',
    linkedin: 'https://linkedin.com/in/emily-watson',
    twitter: 'https://twitter.com/emily_watson',
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Technical Cosmos Engineer',
    philosophy: 'Building the foundations of digital universes with precision.',
    image: '/assets/about/team/david-kim.jpg',
    linkedin: 'https://linkedin.com/in/david-kim',
    twitter: 'https://twitter.com/david_kim',
  },
  {
    id: 'lisa-patel',
    name: 'Lisa Patel',
    role: 'Content Universe Curator',
    philosophy: 'Crafting narratives that resonate across digital dimensions.',
    image: '/assets/about/team/lisa-patel.jpg',
    linkedin: 'https://linkedin.com/in/lisa-patel',
    twitter: 'https://twitter.com/lisa_patel',
  },
];

export default function AboutTeamCrew() {
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
            Meet Our Cosmic Crew
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-text-white max-w-3xl mx-auto"
          >
            The visionary minds behind every digital universe we create. Each
            member brings unique expertise and passion to our cinematic mission.
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-dark-tone/50 to-mid-tone/50 p-8 rounded-2xl backdrop-blur-sm border border-golden-accent/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-golden-accent/40">
                {/* Image */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-golden-accent/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 via-transparent to-transparent"></div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-cinematic font-bold text-golden-accent mb-2 text-center group-hover:text-golden-subtle transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-text-white text-center mb-4 font-medium">
                  {member.role}
                </p>

                {/* Philosophy */}
                <p className="text-text-subtle text-center italic mb-6 leading-relaxed">
                  "{member.philosophy}"
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-golden-accent/20 rounded-full flex items-center justify-center hover:bg-golden-accent/30 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-golden-accent" />
                  </motion.a>
                  <motion.a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-golden-accent/20 rounded-full flex items-center justify-center hover:bg-golden-accent/30 transition-colors duration-300"
                  >
                    <Twitter className="w-5 h-5 text-golden-accent" />
                  </motion.a>
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
              <div className="absolute inset-0 bg-gradient-to-r from-golden-accent/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional cosmic elements */}
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
        </div>
      </div>
    </section>
  );
}
