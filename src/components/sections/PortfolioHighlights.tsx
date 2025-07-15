'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  category,
  link,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-dark-tone to-mid-tone border border-border-card hover:border-border-golden transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 bg-golden-accent/20 text-golden-accent text-sm font-medium rounded-full border border-golden-accent/30">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2 font-cinematic">
          {title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-2">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center text-golden-accent hover:text-golden-subtle transition-colors duration-300 font-medium"
        >
          Voir le projet
          <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-10 h-10 bg-golden-accent/20 rounded-full flex items-center justify-center border border-golden-accent/30">
          <ArrowRight className="h-5 w-5 text-golden-accent" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const featuredProjects: ProjectCardProps[] = [
  {
    id: 'cinematic-web-design',
    title: 'Cinematic Web Design',
    description:
      'Une expérience web immersive avec des animations cinématiques et une narration visuelle sophistiquée.',
    image: '/assets/portfolio/cinematic-web-design.jpg',
    category: 'Design Web',
    link: '/portfolio/cinematic-web-design',
  },
  {
    id: 'digital-marketing-campaign',
    title: 'Campagne Marketing Digital',
    description:
      'Stratégie marketing complète avec storytelling cinématique et optimisation des conversions.',
    image: '/assets/portfolio/digital-marketing.jpg',
    category: 'Marketing Digital',
    link: '/portfolio/digital-marketing-campaign',
  },
  {
    id: 'mobile-app-development',
    title: 'Application Mobile Premium',
    description:
      'Application mobile avec interface utilisateur cinématique et expérience utilisateur immersive.',
    image: '/assets/portfolio/mobile-app.jpg',
    category: 'Développement Mobile',
    link: '/portfolio/mobile-app-development',
  },
];

export default function PortfolioHighlights() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-cinematic">
            Explore Our Universes
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A glimpse into the worlds we've directed. Each project represents a
            unique cinematic universe crafted with precision and storytelling
            mastery.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-golden-accent to-golden-subtle text-deep-blue font-semibold rounded-lg hover:shadow-lg hover:shadow-golden-accent/25 transition-all duration-300 transform hover:scale-105"
          >
            Voir tous nos projets
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
