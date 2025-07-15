'use client';

import { PexelsAPI } from '@/lib/pexels-api';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function FilmReel() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Final copy for 'The Film Reel' - Cinematic Portfolio Showcase
  const projectData = [
    {
      id: 1,
      title: 'Luxury Fashion House Digital Transformation',
      category: 'Brand Identity',
      description:
        'Complete cinematic rebrand with immersive e-commerce experience, achieving 450% sales growth and 98% customer satisfaction through sophisticated storytelling and visual excellence.',
    },
    {
      id: 2,
      title: 'Tech Startup Launch Platform',
      category: 'Web Development',
      description:
        'Cutting-edge startup website with interactive product demos and investor portal, securing $2.5M in funding and 300% user engagement increase.',
    },
    {
      id: 3,
      title: 'Hospitality Marketing Campaign',
      category: 'Digital Marketing',
      description:
        'Multi-channel campaign for luxury hotel chain achieving 500% increase in bookings and 200% brand awareness growth through cinematic storytelling.',
    },
    {
      id: 4,
      title: 'Educational Institution Platform',
      category: 'Web Design',
      description:
        'Modern, accessible educational platform with 180% student engagement increase and 95% parent satisfaction through intuitive design and performance optimization.',
    },
    {
      id: 5,
      title: 'Restaurant Digital Experience',
      category: 'Content Creation',
      description:
        'Comprehensive digital strategy driving 300% increase in online orders and 250% social media engagement through compelling visual storytelling.',
    },
    {
      id: 6,
      title: 'Wedding Photography Brand',
      category: 'Social Media',
      description:
        'Viral social media campaign achieving 2M+ impressions and 50K+ engagements through authentic storytelling and cinematic visual content.',
    },
    {
      id: 7,
      title: 'Product Launch Website',
      category: 'Web Development',
      description:
        'Immersive product launch site with interactive demos and testimonials, achieving 400% conversion rate and 96% user satisfaction.',
    },
    {
      id: 8,
      title: 'Corporate Brand Video Series',
      category: 'Video Production',
      description:
        'Cinematic brand video series with professional production values, achieving 150% brand recognition and 200% lead generation increase.',
    },
  ];

  useEffect(() => {
    const fetchProjectImages = async () => {
      try {
        const images = await Promise.all(
          projectData.map(async (project, index) => {
            try {
              const query = `${project.category.toLowerCase()} digital design`;
              const photos = await PexelsAPI.searchPhotos(query, 1);
              return {
                ...project,
                image:
                  photos.length > 0 && photos[0]?.src?.medium
                    ? photos[0].src.medium
                    : '/placeholder-project.jpg',
              };
            } catch (error) {
              console.error(
                `Error fetching image for ${project.title}:`,
                error
              );
              return {
                ...project,
                image: '/placeholder-project.jpg',
              };
            }
          })
        );
        setProjects(images);
      } catch (error) {
        console.error('Error fetching project images:', error);
        setProjects(
          projectData.map(project => ({
            ...project,
            image: '/placeholder-project.jpg',
          }))
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjectImages();
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative py-24 bg-dark-tone overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-tone via-deep-blue to-dark-tone" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.03),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/6 w-1 h-1 bg-golden-accent rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/5 w-0.5 h-0.5 bg-golden-accent rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-golden-accent mb-6">
            The Film Reel
          </h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto">
            A curated collection of our cinematic digital masterpieces. Each
            project represents our commitment to storytelling, visual
            excellence, and strategic impact. Scroll through our portfolio of
            success stories.
          </p>
        </motion.div>

        {/* Film Reel Container */}
        {!loading && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative max-w-7xl mx-auto"
          >
            {/* Main Project Display */}
            <div className="relative aspect-[16/9] bg-deep-blue rounded-lg overflow-hidden shadow-2xl mb-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <img
                  src={
                    projects[currentIndex]?.image || '/placeholder-project.jpg'
                  }
                  alt={projects[currentIndex]?.title || 'Project'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-deep-blue/90 backdrop-blur-sm rounded-lg p-6">
                    <span className="inline-block px-3 py-1 bg-golden-accent text-deep-blue text-sm font-semibold rounded-full mb-3">
                      {projects[currentIndex]?.category || 'Project'}
                    </span>
                    <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-2">
                      {projects[currentIndex]?.title || 'Project Title'}
                    </h3>
                    <p className="text-text-subtle mb-4">
                      {projects[currentIndex]?.description ||
                        'Project description'}
                    </p>
                    <button className="flex items-center gap-2 text-golden-accent hover:text-yellow-400 transition-colors duration-300">
                      <span className="font-semibold">View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-deep-blue/80 backdrop-blur-sm rounded-full flex items-center justify-center text-golden-accent hover:bg-golden-accent hover:text-deep-blue transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-deep-blue/80 backdrop-blur-sm rounded-full flex items-center justify-center text-golden-accent hover:bg-golden-accent hover:text-deep-blue transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Film Strip Navigation */}
            <div className="relative">
              {/* Film Strip Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-dark-tone via-transparent to-dark-tone pointer-events-none z-10" />

              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                {projects.map((project, index) => (
                  <motion.button
                    key={project.id}
                    onClick={() => setCurrentIndex(index)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex-shrink-0 relative w-48 h-32 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentIndex
                        ? 'ring-2 ring-golden-accent scale-105'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent" />

                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-xs text-golden-accent font-semibold mb-1">
                        {project.category}
                      </div>
                      <div className="text-sm font-semibold text-text-white truncate">
                        {project.title}
                      </div>
                    </div>

                    {/* Film Perforations */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-golden-accent/60 rounded-full"
                        />
                      ))}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-golden-accent w-8'
                      : 'bg-text-subtle'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="text-golden-accent">
              <div className="w-8 h-8 border-2 border-golden-accent border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        )}

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => (window.location.href = '/portfolio')}
            className="border-2 border-golden-accent text-golden-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-accent hover:text-deep-blue transition-all duration-300"
          >
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
