'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 'cosmic-ecommerce',
    name: 'Cosmic E-commerce Platform',
    client: 'Stellar Retail Corp',
    category: 'Création de Site Web Nebula',
    clientSegment: 'Corporate Planet',
    challenge:
      'Navigating a cosmic challenge: Creating a seamless digital marketplace that could handle inter-galactic transactions while maintaining the sophistication expected of a premium retail brand.',
    solution:
      'Our "Cinematic Solutions" charted a course: Developed a high-performance e-commerce platform with cinematic user experience, featuring holographic product displays and seamless payment gateways.',
    result:
      'Achieving stellar impact: 300% increase in online sales, 85% improvement in user engagement, and recognition as "Best Digital Experience" in the retail cosmos.',
    description:
      'This project, launched from our Tunisian nexus, involved creating a revolutionary e-commerce platform that transformed how customers interact with products across the digital universe.',
    video:
      'https://placehold.co/1280x720/1A1A2E/FFD700?text=Project+1+Cosmic+Trailer',
    images: [
      'https://placehold.co/800x600/0F3460/F0F0F0?text=Screenshot+1',
      'https://placehold.co/800x600/1C1C1C/E0E0E0?text=Screenshot+2',
      'https://placehold.co/800x600/16213E/B0B0B0?text=Screenshot+3',
    ],
  },
  {
    id: 'nebula-mobile-app',
    name: 'Nebula Mobile Application',
    client: 'Healthcare Innovations',
    category: 'Motion Design & Animation Nebula',
    clientSegment: 'Healthcare Planet',
    challenge:
      'Navigating a cosmic challenge: Developing a mobile application that could provide critical healthcare information while maintaining the trust and reliability required in medical environments.',
    solution:
      'Our "Cinematic Solutions" charted a course: Created an intuitive mobile app with animated health visualizations and seamless data integration, ensuring both functionality and user engagement.',
    result:
      'Achieving stellar impact: 500,000+ downloads, 95% user satisfaction rate, and improved patient outcomes through better health monitoring.',
    description:
      'This project, launched from our Tunisian nexus, involved developing a comprehensive mobile health application that revolutionized patient care across the digital cosmos.',
    video:
      'https://placehold.co/1280x720/0A0F1A/FFED4E?text=Project+2+Cosmic+Trailer',
    images: [
      'https://placehold.co/800x600/1A1A2E/D4AF37?text=Screenshot+1',
      'https://placehold.co/800x600/0F3460/FFFFFF?text=Screenshot+2',
      'https://placehold.co/800x600/1C1C1C/B0B0B0?text=Screenshot+3',
    ],
  },
  {
    id: 'galaxy-branding',
    name: 'Galaxy Brand Identity',
    client: 'Cosmic Fashion House',
    category: 'Design Graphique & Identité Nebula',
    clientSegment: 'Fashion Planet',
    challenge:
      "Navigating a cosmic challenge: Establishing a distinctive brand identity that could compete in the highly competitive fashion cosmos while reflecting the brand's unique vision.",
    solution:
      'Our "Cinematic Solutions" charted a course: Developed a comprehensive brand identity system with cinematic visual elements, including logo design, color palette, and brand guidelines.',
    result:
      'Achieving stellar impact: 200% increase in brand recognition, 150% growth in social media engagement, and establishment as a leading fashion force in the digital universe.',
    description:
      'This project, launched from our Tunisian nexus, involved creating a complete brand identity that elevated the fashion house to new heights in the cosmic marketplace.',
    video:
      'https://placehold.co/1280x720/16213E/E0E0E0?text=Project+3+Cosmic+Trailer',
    images: [
      'https://placehold.co/800x600/0A0A0F/FFD700?text=Screenshot+1',
      'https://placehold.co/800x600/1A1A2E/FFFFFF?text=Screenshot+2',
      'https://placehold.co/800x600/0F3460/B0B0B0?text=Screenshot+3',
    ],
  },
  {
    id: 'stellar-marketing',
    name: 'Stellar Marketing Campaign',
    client: 'Tourism Tunisia',
    category: 'Marketing Digital Nebula',
    clientSegment: 'Tourism Planet',
    challenge:
      "Navigating a cosmic challenge: Creating a marketing campaign that could showcase Tunisia's unique cultural heritage while attracting international travelers in a competitive tourism market.",
    solution:
      'Our "Cinematic Solutions" charted a course: Developed a comprehensive digital marketing strategy with cinematic video content, social media campaigns, and targeted advertising.',
    result:
      'Achieving stellar impact: 400% increase in international bookings, 250% growth in social media followers, and recognition as "Best Tourism Campaign" in the digital cosmos.',
    description:
      'This project, launched from our Tunisian nexus, involved creating a marketing campaign that positioned Tunisia as a premier destination in the global tourism universe.',
    video:
      'https://placehold.co/1280x720/1C1C1C/FFED4E?text=Project+4+Cosmic+Trailer',
    images: [
      'https://placehold.co/800x600/16213E/D4AF37?text=Screenshot+1',
      'https://placehold.co/800x600/0A0F1A/FFFFFF?text=Screenshot+2',
      'https://placehold.co/800x600/1A1A2E/B0B0B0?text=Screenshot+3',
    ],
  },
  {
    id: 'portal-website',
    name: 'Portal Website Experience',
    client: 'Educational Nexus',
    category: 'Création de Site Web Nebula',
    clientSegment: 'Schools Planet',
    challenge:
      'Navigating a cosmic challenge: Building a website that could serve as a comprehensive educational portal while maintaining the academic credibility and user-friendly experience required for educational institutions.',
    solution:
      'Our "Cinematic Solutions" charted a course: Developed an immersive educational website with interactive learning modules, student portals, and seamless content management.',
    result:
      'Achieving stellar impact: 300% increase in student engagement, 90% improvement in content accessibility, and establishment as a leading educational platform in the digital cosmos.',
    description:
      'This project, launched from our Tunisian nexus, involved creating a comprehensive educational website that revolutionized how students and educators interact in the digital universe.',
    video:
      'https://placehold.co/1280x720/0F3460/FFFFFF?text=Project+5+Cosmic+Trailer',
    images: [
      'https://placehold.co/800x600/1A1A2E/FFD700?text=Screenshot+1',
      'https://placehold.co/800x600/0A0A0F/E0E0E0?text=Screenshot+2',
      'https://placehold.co/800x600/16213E/B0B0B0?text=Screenshot+3',
    ],
  },
  {
    id: 'cosmic-video',
    name: 'Cosmic Video Production',
    client: 'Wedding Universe',
    category: 'Production Cinématographique Nebula',
    clientSegment: 'Weddings Planet',
    challenge:
      "Navigating a cosmic challenge: Creating cinematic wedding videos that could capture the emotional essence of couples' special moments while maintaining the highest production standards.",
    solution:
      'Our "Cinematic Solutions" charted a course: Produced cinematic wedding videos with dramatic lighting, professional cinematography, and emotional storytelling that resonated with couples across the universe.',
    result:
      'Achieving stellar impact: 100% client satisfaction rate, 500+ happy couples served, and recognition as "Best Wedding Videography" in the cosmic wedding industry.',
    description:
      "This project, launched from our Tunisian nexus, involved creating cinematic wedding videos that captured the magic and emotion of couples' most important moments.",
    video:
      'https://placehold.co/1280x720/1A1A2E/D4AF37?text=Project+6+Cosmic+Trailer',
    images: [
      'https://placehold.co/800x600/0F3460/FFFFFF?text=Screenshot+1',
      'https://placehold.co/800x600/1C1C1C/FFED4E?text=Screenshot+2',
      'https://placehold.co/800x600/16213E/B0B0B0?text=Screenshot+3',
    ],
  },
];

export default function PortfolioGalacticPremieres() {
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
            Galactic Premieres
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Witness the 'Galactic Premieres' – our most impactful missions,
            showcasing how we've expanded the digital horizons for our 'Planets
            of Partnership' across various dimensions. Each 'Star System' below
            represents a triumphant journey from vision to cosmic reality.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-12 items-center`}
            >
              {/* Content */}
              <div
                className={`text-cream-white ${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-golden-accent/20 text-golden-accent text-sm rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-golden-accent mb-2 font-cinematic">
                    {project.name}
                  </h3>
                  <p className="text-lg text-text-white mb-4">
                    A Cosmic Odyssey for <strong>{project.client}</strong>
                  </p>
                  <p className="text-sm text-golden-accent">
                    Client Segment: {project.clientSegment}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-golden-accent mb-2">
                      Challenge:
                    </h4>
                    <p className="text-text-subtle leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-golden-accent mb-2">
                      Solution:
                    </h4>
                    <p className="text-text-subtle leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-golden-accent mb-2">
                      Result:
                    </h4>
                    <p className="text-text-subtle leading-relaxed">
                      {project.result}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-golden-accent mb-2">
                      Description:
                    </h4>
                    <p className="text-text-subtle leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Media */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="space-y-6">
                  {/* Video */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <video
                      className="w-full h-auto"
                      poster={project.images[0]}
                      controls
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  </div>

                  {/* Images Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative rounded-xl overflow-hidden shadow-lg"
                      >
                        <Image
                          src={image}
                          alt={`${project.name} Screenshot ${imageIndex + 1}`}
                          width={300}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 via-transparent to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-golden-accent mb-8 font-cinematic">
            Ready to Create Your Own Star System?
          </h3>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Let's align our cosmic coordinates and launch your next digital
            masterpiece into the Cinematic Universe.
          </p>
          <button className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Launch Your Project
          </button>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-golden-accent rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-golden-accent rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-golden-accent rounded-full opacity-50 animate-pulse" />
      </div>
    </section>
  );
}
