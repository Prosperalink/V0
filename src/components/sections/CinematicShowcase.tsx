'use client';

import AnimationObserver from '@/components/AnimationObserver';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useState } from 'react';

interface ICinematicProject {
  id: string;
  title: string;
  genre: 'drama' | 'comedy' | 'action' | 'romance' | 'thriller';
  description: string;
  director: string;
  duration: string;
  year: string;
  thumbnail: string;
  videoUrl: string;
  story: string;
  techniques: string[];
  results: string[];
}

const cinematicProjects: ICinematicProject[] = [
  {
    id: 'wedding-story',
    title: 'The Perfect Day',
    genre: 'romance',
    description:
      'A cinematic wedding film that captures the essence of true love through sophisticated storytelling and elegant cinematography.',
    director: 'Sarah Chen',
    duration: '8:45',
    year: '2024',
    thumbnail: '/assets/portfolio/wedding-cinematic.jpg',
    videoUrl: '/assets/videos/wedding-cinematic.mp4',
    story:
      "Every great love story deserves a cinematic treatment. This wedding film transforms a beautiful ceremony into an epic romance, using Hollywood-level production techniques to capture the raw emotion and intimate moments that make each couple's story unique.",
    techniques: [
      'Cinematic Color Grading',
      'Emotional Storytelling',
      'Professional Audio',
      'Artistic Direction',
    ],
    results: [
      '4.9/5 Client Rating',
      'Featured in Wedding Magazine',
      '500+ Social Shares',
      '15 New Bookings',
    ],
  },
  {
    id: 'brand-transformation',
    title: 'The Evolution',
    genre: 'drama',
    description:
      'A dramatic brand transformation story that showcases the power of authentic storytelling in business.',
    director: 'Marcus Rodriguez',
    duration: '12:30',
    year: '2024',
    thumbnail: '/assets/portfolio/brand-cinematic.jpg',
    videoUrl: '/assets/videos/brand-cinematic.mp4',
    story:
      'When a traditional business needed to reinvent itself for the digital age, we created a cinematic narrative that captured their journey from legacy to innovation. This film tells the story of transformation, resilience, and the courage to embrace change.',
    techniques: [
      'Documentary Style',
      'Corporate Storytelling',
      'Visual Metaphors',
      'Emotional Arc',
    ],
    results: [
      '300% Brand Awareness',
      '50% Sales Increase',
      'Industry Award Winner',
      'Featured in Forbes',
    ],
  },
  {
    id: 'product-launch',
    title: 'The Revelation',
    genre: 'action',
    description:
      'An action-packed product launch that creates anticipation and excitement through dynamic cinematography.',
    director: 'Alex Thompson',
    duration: '6:20',
    year: '2024',
    thumbnail: '/assets/portfolio/product-cinematic.jpg',
    videoUrl: '/assets/videos/product-cinematic.mp4',
    story:
      'Product launches need to feel like blockbuster events. This cinematic approach transforms a simple product reveal into an epic unveiling, using dynamic camera work, dramatic lighting, and compelling narrative to create anticipation and excitement.',
    techniques: [
      'Dynamic Camera Work',
      'Dramatic Lighting',
      'Sound Design',
      'Visual Effects',
    ],
    results: [
      '200% Pre-orders',
      '1M+ Views',
      'Viral Social Media',
      'Industry Recognition',
    ],
  },
];

export default function CinematicShowcase() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const filteredProjects =
    selectedGenre === 'all'
      ? cinematicProjects
      : cinematicProjects.filter(project => project.genre === selectedGenre);

  const genres = [
    { id: 'all', name: 'All Genres', icon: '🎬' },
    { id: 'drama', name: 'Drama', icon: '🎭' },
    { id: 'comedy', name: 'Comedy', icon: '😄' },
    { id: 'action', name: 'Action', icon: '💥' },
    { id: 'romance', name: 'Romance', icon: '💕' },
    { id: 'thriller', name: 'Thriller', icon: '😱' },
  ];

  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject(
      prev => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const project = filteredProjects[currentProject];

  // Handle case when no projects are available
  if (!project) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/30 to-deep-blue/90" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimationObserver>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-6">
                Cinematic Showcase
              </h2>
              <p className="text-xl sm:text-2xl text-text-white mb-4 max-w-3xl mx-auto">
                Step into the director's chair and experience our work through
                the lens of cinematic storytelling
              </p>
              <p className="text-lg text-text-subtle max-w-2xl mx-auto">
                Every project is a scene, every portfolio piece a story waiting
                to be told. Navigate through our cinematic universe and discover
                how we transform ordinary projects into extraordinary visual
                narratives.
              </p>
            </motion.div>

            {/* Genre Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {genres.map(genre => (
                <motion.button
                  key={genre.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedGenre(genre.id);
                    setCurrentProject(0);
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedGenre === genre.id
                      ? 'bg-golden-accent text-deep-blue'
                      : 'bg-deep-blue/50 text-text-white border border-golden-accent/30 hover:bg-golden-accent/20'
                  }`}
                >
                  <span className="mr-2">{genre.icon}</span>
                  {genre.name}
                </motion.button>
              ))}
            </motion.div>

            {/* No Projects Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-playfair font-bold text-golden-accent mb-4">
                No Projects Available
              </h3>
              <p className="text-text-white text-lg">
                No projects match the selected genre. Please try a different
                filter.
              </p>
            </motion.div>
          </AnimationObserver>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-deep-blue via-background-blue-deep to-deep-blue overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/30 to-deep-blue/90" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimationObserver>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-6">
              Cinematic Showcase
            </h2>
            <p className="text-xl sm:text-2xl text-text-white mb-4 max-w-3xl mx-auto">
              Step into the director's chair and experience our work through the
              lens of cinematic storytelling
            </p>
            <p className="text-lg text-text-subtle max-w-2xl mx-auto">
              Every project is a scene, every portfolio piece a story waiting to
              be told. Navigate through our cinematic universe and discover how
              we transform ordinary projects into extraordinary visual
              narratives.
            </p>
          </motion.div>

          {/* Genre Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {genres.map(genre => (
              <motion.button
                key={genre.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedGenre(genre.id);
                  setCurrentProject(0);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedGenre === genre.id
                    ? 'bg-golden-accent text-deep-blue'
                    : 'bg-deep-blue/50 text-text-white border border-golden-accent/30 hover:bg-golden-accent/20'
                }`}
              >
                <span className="mr-2">{genre.icon}</span>
                {genre.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Showcase */}
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Placeholder for video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-golden-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Play className="w-12 h-12 text-golden-accent ml-1" />
                  </div>
                  <p className="text-text-white text-lg">Cinematic Preview</p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-golden-accent" />
                    ) : (
                      <Play className="w-6 h-6 text-golden-accent ml-1" />
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 bg-golden-accent/20 rounded-full flex items-center justify-center"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-golden-accent" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-golden-accent" />
                    )}
                  </motion.button>
                </div>

                <div className="text-text-white text-sm">
                  {project.duration}
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              {/* Project Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">
                    {genres.find(g => g.id === project.genre)?.icon}
                  </span>
                  <span className="text-text-subtle text-sm uppercase tracking-wider">
                    {project.genre} • {project.year}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-golden-accent mb-4">
                  {project.title}
                </h3>

                <p className="text-lg text-text-white mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-text-subtle">
                  <span>Director: {project.director}</span>
                  <span>Duration: {project.duration}</span>
                </div>
              </div>

              {/* Story */}
              <div>
                <h4 className="text-xl font-semibold text-golden-accent mb-3">
                  The Story
                </h4>
                <p className="text-text-white leading-relaxed">
                  {project.story}
                </p>
              </div>

              {/* Techniques */}
              <div>
                <h4 className="text-xl font-semibold text-golden-accent mb-3">
                  Cinematic Techniques
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.techniques.map((technique, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-golden-accent rounded-full" />
                      <span className="text-text-white text-sm">
                        {technique}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-xl font-semibold text-golden-accent mb-3">
                  Results
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-golden-accent rounded-full" />
                      <span className="text-text-white text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          {filteredProjects.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center items-center gap-8 mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevProject}
                className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center"
              >
                <ArrowLeft className="w-6 h-6 text-golden-accent" />
              </motion.button>

              <div className="flex gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject
                        ? 'bg-golden-accent'
                        : 'bg-golden-accent/30'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextProject}
                className="w-12 h-12 bg-golden-accent/20 rounded-full flex items-center justify-center"
              >
                <ArrowRight className="w-6 h-6 text-golden-accent" />
              </motion.button>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-golden-accent text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-accent/90 transition-colors duration-300 shadow-lg"
            >
              Start Your Cinematic Project
            </motion.button>
          </motion.div>
        </AnimationObserver>
      </div>
    </section>
  );
}
