'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    id: 'cosmic-ecommerce',
    title: 'Cosmic E-commerce Platform',
    category: 'Web Development',
    description:
      'A cinematic e-commerce experience with immersive product showcases and seamless checkout flows.',
    image: '/assets/portfolio/cosmic-ecommerce.jpg',
    video: '/assets/portfolio/cosmic-ecommerce.mp4',
    technologies: ['React', 'Node.js', 'Stripe', 'Three.js'],
    client: 'Stellar Retail',
    year: '2024',
  },
  {
    id: 'nebula-mobile-app',
    title: 'Nebula Mobile App',
    category: 'Mobile Development',
    description:
      'A cross-platform mobile application with stunning animations and intuitive user experience.',
    image: '/assets/portfolio/nebula-mobile-app.jpg',
    video: '/assets/portfolio/nebula-mobile-app.mp4',
    technologies: ['React Native', 'Firebase', 'Framer Motion'],
    client: 'Cosmic Tech',
    year: '2024',
  },
  {
    id: 'galaxy-branding',
    title: 'Galaxy Brand Identity',
    category: 'Brand Design',
    description:
      'Complete brand identity system with cosmic aesthetics and memorable visual language.',
    image: '/assets/portfolio/galaxy-branding.jpg',
    video: '/assets/portfolio/galaxy-branding.mp4',
    technologies: [
      'Adobe Creative Suite',
      'Brand Guidelines',
      'Motion Graphics',
    ],
    client: 'Interstellar Corp',
    year: '2023',
  },
  {
    id: 'stellar-marketing',
    title: 'Stellar Marketing Campaign',
    category: 'Digital Marketing',
    description:
      'Multi-channel marketing campaign that increased engagement by 300% across all platforms.',
    image: '/assets/portfolio/stellar-marketing.jpg',
    video: '/assets/portfolio/stellar-marketing.mp4',
    technologies: [
      'Social Media',
      'Google Ads',
      'Analytics',
      'Content Creation',
    ],
    client: 'Cosmic Solutions',
    year: '2023',
  },
  {
    id: 'portal-website',
    title: 'Portal Website Design',
    category: 'Web Design',
    description:
      'Immersive website with cinematic animations and interactive storytelling elements.',
    image: '/assets/portfolio/portal-website.jpg',
    video: '/assets/portfolio/portal-website.mp4',
    technologies: ['Next.js', 'Framer Motion', 'GSAP', 'Three.js'],
    client: 'Digital Dimensions',
    year: '2024',
  },
  {
    id: 'cosmic-video',
    title: 'Cosmic Video Production',
    category: 'Video Production',
    description:
      'Cinematic video content that tells compelling stories and creates emotional connections.',
    image: '/assets/portfolio/cosmic-video.jpg',
    video: '/assets/portfolio/cosmic-video.mp4',
    technologies: [
      'Premiere Pro',
      'After Effects',
      'Cinema 4D',
      'Color Grading',
    ],
    client: 'Visual Universe',
    year: '2024',
  },
];

const categories = [
  'All',
  'Web Development',
  'Mobile Development',
  'Brand Design',
  'Digital Marketing',
  'Web Design',
  'Video Production',
];

export default function PortfolioProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

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
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-text-white max-w-3xl mx-auto"
          >
            Explore our constellation of successful projects, each showcasing
            our commitment to cinematic excellence and innovative solutions.
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

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-golden-accent text-deep-blue shadow-lg'
                  : 'bg-dark-tone/50 text-text-white border border-golden-accent/30 hover:border-golden-accent/60'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-dark-tone/50 to-mid-tone/50 rounded-2xl backdrop-blur-sm border border-golden-accent/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-golden-accent/40 overflow-hidden">
                {/* Image/Video */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project.id)}
                        className="w-16 h-16 bg-golden-accent/90 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Play className="w-6 h-6 text-deep-blue" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-golden-accent/90 text-deep-blue px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-cinematic font-bold text-golden-accent mb-2 group-hover:text-golden-subtle transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-text-white text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="bg-golden-accent/20 text-golden-accent px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Info */}
                  <div className="flex justify-between items-center text-text-subtle text-sm">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 bg-gradient-to-r from-golden-accent/20 to-yellow-400/20 text-golden-accent px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-golden-accent/30 hover:to-yellow-400/30 transition-all duration-300 border border-golden-accent/30 hover:border-golden-accent/50"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
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

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-golden-accent to-yellow-400 text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

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
