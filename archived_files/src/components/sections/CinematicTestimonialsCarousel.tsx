'use client';

import { getAssetUrl } from '@/utils/asset-fallbacks';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Quote,
  Star,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  testimonial: string;
  rating: number;
  videoUrl?: string;
  imageUrl?: string;
  logoUrl?: string;
  services: string[];
  projectType: string;
}

interface CinematicTestimonialsCarouselProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showVideoTestimonials?: boolean;
}

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah Johnson',
    company: 'TechFlow Solutions',
    role: 'CEO',
    testimonial:
      'Orson Vision transformed our digital presence with their cinematic approach. The results exceeded our expectations and our conversion rates increased by 300%.',
    rating: 5,
    videoUrl: getAssetUrl('testimonial-sarah', 'video'),
    imageUrl: getAssetUrl('sarah-johnson', 'image'),
    logoUrl: '/assets/logos/techflow-logo.png',
    services: ['Web Design', 'Digital Marketing', 'Branding'],
    projectType: 'E-commerce Platform',
  },
  {
    id: '2',
    clientName: 'Michael Chen',
    company: 'InnovateCorp',
    role: 'Marketing Director',
    testimonial:
      'The level of creativity and attention to detail is unmatched. Our brand story is now told through stunning visuals that resonate with our audience.',
    rating: 5,
    videoUrl: getAssetUrl('testimonial-michael', 'video'),
    imageUrl: getAssetUrl('michael-chen', 'image'),
    logoUrl: '/assets/logos/innovatecorp-logo.png',
    services: ['Brand Strategy', 'Content Creation', 'Social Media'],
    projectType: 'Brand Campaign',
  },
  {
    id: '3',
    clientName: 'Emily Rodriguez',
    company: 'StartupHub',
    role: 'Founder',
    testimonial:
      'Working with Orson Vision was like having a Hollywood production team for our digital needs. The quality and professionalism are outstanding.',
    rating: 5,
    videoUrl: getAssetUrl('testimonial-emily', 'video'),
    imageUrl: getAssetUrl('emily-rodriguez', 'image'),
    logoUrl: '/assets/logos/startuphub-logo.png',
    services: ['Mobile App', 'UI/UX Design', 'Development'],
    projectType: 'Mobile Application',
  },
];

export default function CinematicTestimonialsCarousel({
  testimonials = defaultTestimonials,
  autoPlay = true,
  autoPlayInterval = 6000,
  showVideoTestimonials = true,
}: CinematicTestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure we have testimonials and currentIndex is valid
  const safeTestimonials = testimonials || defaultTestimonials;
  const safeCurrentIndex = Math.min(currentIndex, safeTestimonials.length - 1);
  const currentTestimonial = safeTestimonials[safeCurrentIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isPlaying || isHovered || safeTestimonials.length === 0)
      return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % safeTestimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [
    autoPlay,
    isPlaying,
    autoPlayInterval,
    safeTestimonials.length,
    isHovered,
  ]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (safeTestimonials.length === 0) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          setCurrentIndex(
            prev =>
              (prev - 1 + safeTestimonials.length) % safeTestimonials.length
          );
          break;
        case 'ArrowRight':
          e.preventDefault();
          setCurrentIndex(prev => (prev + 1) % safeTestimonials.length);
          break;
        case ' ':
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 'm':
          e.preventDefault();
          setIsMuted(!isMuted);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, isMuted, safeTestimonials.length]);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const goToNext = () => {
    if (safeTestimonials.length > 0) {
      setCurrentIndex(prev => (prev + 1) % safeTestimonials.length);
    }
  };

  const goToPrevious = () => {
    if (safeTestimonials.length > 0) {
      setCurrentIndex(
        prev => (prev - 1 + safeTestimonials.length) % safeTestimonials.length
      );
    }
  };

  const goToIndex = (index: number) => {
    if (index >= 0 && index < safeTestimonials.length) {
      setCurrentIndex(index);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-golden-accent fill-current' : 'text-text-subtle'
        }`}
      />
    ));
  };

  // If no testimonials, show a placeholder
  if (!safeTestimonials || safeTestimonials.length === 0) {
    return (
      <section className="relative min-h-screen bg-deep-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/50 to-deep-blue/80 z-10" />
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-text-white max-w-2xl mx-auto">
              Testimonials coming soon...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Ensure currentTestimonial exists
  if (!currentTestimonial) {
    return (
      <section className="relative min-h-screen bg-deep-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/50 to-deep-blue/80 z-10" />
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-text-white max-w-2xl mx-auto">
              Loading testimonials...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-deep-blue overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/50 to-deep-blue/80 z-10" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-text-white max-w-2xl mx-auto">
            Experience the impact of our cinematic solutions through the eyes of
            our valued clients
          </p>
        </motion.div>

        {/* Main Carousel Container */}
        <div
          ref={containerRef}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Testimonial Content */}
          <motion.div
            key={safeCurrentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Video Testimonial */}
            {showVideoTestimonials && currentTestimonial.videoUrl && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              >
                <video
                  ref={videoRef}
                  src={currentTestimonial.videoUrl}
                  poster={currentTestimonial.imageUrl}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  {/* Top Controls */}
                  <div className="absolute top-4 right-4 flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleMuteToggle}
                      className="p-2 bg-black/50 rounded-full text-golden-accent hover:bg-black/70 transition-colors"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </motion.button>
                  </div>

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleVideoPlay}
                      className="p-4 bg-golden-accent/90 rounded-full text-deep-blue hover:bg-golden-accent transition-colors"
                    >
                      {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Testimonial Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-golden-accent opacity-60" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl text-text-white mb-6 leading-relaxed">
                "{currentTestimonial.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  {currentTestimonial.logoUrl && (
                    <img
                      src={currentTestimonial.logoUrl}
                      alt={`${currentTestimonial.company} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  <div>
                    <h4 className="text-lg font-bold text-golden-accent">
                      {currentTestimonial.clientName}
                    </h4>
                    <p className="text-text-subtle">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(currentTestimonial.rating)}
                  <span className="text-text-subtle text-sm">
                    {currentTestimonial.rating}/5
                  </span>
                </div>

                {/* Project Info */}
                <div className="text-sm text-text-subtle">
                  <p>
                    <strong>Project:</strong> {currentTestimonial.projectType}
                  </p>
                  <p>
                    <strong>Services:</strong>{' '}
                    {currentTestimonial.services.join(', ')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrevious}
              className="p-3 bg-golden-accent/20 rounded-full text-golden-accent hover:bg-golden-accent/30 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {safeTestimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === safeCurrentIndex
                      ? 'bg-golden-accent'
                      : 'bg-text-subtle/30 hover:bg-text-subtle/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="p-3 bg-golden-accent/20 rounded-full text-golden-accent hover:bg-golden-accent/30 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8">
            <div className="w-full h-1 bg-text-subtle/20 rounded-full">
              <motion.div
                className="h-full bg-golden-accent rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${((safeCurrentIndex + 1) / safeTestimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <div className="text-center mt-2 text-text-subtle text-sm">
              {safeCurrentIndex + 1} of {safeTestimonials.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
