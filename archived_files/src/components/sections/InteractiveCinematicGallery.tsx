'use client';

import { getAssetUrl } from '@/utils/asset-fallbacks';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  duration: string;
  services: string[];
  videoUrl: string;
  thumbnailUrl: string;
  description: string;
}

interface InteractiveCinematicGalleryProps {
  items?: PortfolioItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// Default portfolio items
const defaultItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Cinematic Web Design',
    client: 'Tech Startup',
    duration: '2:30',
    services: ['Web Design', 'Branding', 'Animation'],
    videoUrl: getAssetUrl('cinematic-web-design', 'video'),
    thumbnailUrl: getAssetUrl('cinematic-web-design', 'image'),
    description:
      'A cinematic approach to web design that tells compelling stories.',
  },
  {
    id: '2',
    title: 'Digital Marketing Campaign',
    client: 'E-commerce Brand',
    duration: '1:45',
    services: ['Digital Marketing', 'Content Creation', 'Analytics'],
    videoUrl: getAssetUrl('digital-marketing', 'video'),
    thumbnailUrl: getAssetUrl('digital-marketing', 'image'),
    description:
      'Strategic digital marketing that drives results and engagement.',
  },
  {
    id: '3',
    title: 'Mobile App Development',
    client: 'Healthcare Platform',
    duration: '3:15',
    services: ['Mobile Development', 'UX Design', 'Testing'],
    videoUrl: getAssetUrl('mobile-app', 'video'),
    thumbnailUrl: getAssetUrl('mobile-app', 'image'),
    description: 'Innovative mobile solutions that transform user experiences.',
  },
];

export default function InteractiveCinematicGallery({
  items = defaultItems,
  autoPlay = true,
  autoPlayInterval = 5000,
}: InteractiveCinematicGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure we have items and currentIndex is valid
  const safeItems = items || defaultItems;
  const safeCurrentIndex = Math.min(currentIndex, safeItems.length - 1);
  const currentItem = safeItems[safeCurrentIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isPlaying || safeItems.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % safeItems.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, isPlaying, autoPlayInterval, safeItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (safeItems.length === 0) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          setCurrentIndex(
            prev => (prev - 1 + safeItems.length) % safeItems.length
          );
          break;
        case 'ArrowRight':
          e.preventDefault();
          setCurrentIndex(prev => (prev + 1) % safeItems.length);
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
  }, [isPlaying, isMuted, safeItems.length]);

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
    if (safeItems.length > 0) {
      setCurrentIndex(prev => (prev + 1) % safeItems.length);
    }
  };

  const goToPrevious = () => {
    if (safeItems.length > 0) {
      setCurrentIndex(prev => (prev - 1 + safeItems.length) % safeItems.length);
    }
  };

  const goToIndex = (index: number) => {
    if (index >= 0 && index < safeItems.length) {
      setCurrentIndex(index);
    }
  };

  // If no items, show a placeholder
  if (!safeItems || safeItems.length === 0) {
    return (
      <section className="relative min-h-screen bg-deep-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-blue/50 to-deep-blue/80 z-10" />
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-4">
              Cinematic Portfolio
            </h2>
            <p className="text-xl text-text-white max-w-2xl mx-auto">
              Portfolio content coming soon...
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
        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-golden-accent mb-4">
            Cinematic Portfolio
          </h2>
          <p className="text-xl text-text-white max-w-2xl mx-auto">
            Experience our work through the lens of cinematic storytelling
          </p>
        </motion.div>

        {/* Main Gallery Container */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          {/* Video Player */}
          <motion.div
            key={safeCurrentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
          >
            <video
              ref={videoRef}
              src={currentItem.videoUrl}
              poster={currentItem.thumbnailUrl}
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

              {/* Bottom Controls */}
              <div className="absolute bottom-4 left-4 right-4">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-black/50 rounded-full mb-4">
                  <motion.div
                    className="h-full bg-golden-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((safeCurrentIndex + 1) / safeItems.length) * 100}%`,
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={goToPrevious}
                      className="p-2 bg-black/50 rounded-full text-golden-accent hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={goToNext}
                      className="p-2 bg-black/50 rounded-full text-golden-accent hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </motion.button>
                  </div>

                  {/* Item Info */}
                  <div className="text-white">
                    <div className="text-sm opacity-80">
                      {safeCurrentIndex + 1} / {safeItems.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Item Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl font-bold text-golden-accent mb-2">
              {currentItem.title}
            </h3>
            <p className="text-text-white mb-4 max-w-2xl mx-auto">
              {currentItem.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-subtle">
              <span>Client: {currentItem.client}</span>
              <span>Duration: {currentItem.duration}</span>
              <span>Services: {currentItem.services.join(', ')}</span>
            </div>
          </motion.div>

          {/* Thumbnail Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex justify-center gap-4 overflow-x-auto"
          >
            {safeItems.map((item, idx) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToIndex(idx)}
                className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === safeCurrentIndex
                    ? 'border-golden-accent'
                    : 'border-transparent hover:border-white/30'
                }`}
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
