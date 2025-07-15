'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { IAsset } from '@/lib/asset-management';

interface IMediaCarouselProps {
  assets: IAsset[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
  onSlideChange?: (index: number) => void;
  glassEffect?: boolean;
}

export default function MediaCarousel({
  assets,
  title,
  subtitle,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  className = '',
  onSlideChange,
  glassEffect = true,
}: IMediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isPlaying || assets.length <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % assets.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPlaying, assets.length, interval]);

  // Navigation functions
  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % assets.length);
  }, [assets.length]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + assets.length) % assets.length);
  }, [assets.length]);

  const goToIndex = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Notify parent of slide change
  useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  const currentAsset = assets[currentIndex];

  if (!currentAsset) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-[var(--text-secondary)]">No media available</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Media Slides */}
        <div className="relative w-full h-96 md:h-[500px]">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction * 300,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -direction * 300,
              }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Media */}
              <Image
                src={currentAsset.src}
                alt={currentAsset.alt}
                className="w-full h-full object-cover"
                width={400}
                height={300}
              />

              {/* Video Play Icon */}
              {currentAsset.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-6">
                    <Play size={48} className="text-white" fill="white" />
                  </div>
                </div>
              )}

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40" />

              {/* Glass Effect */}
              {glassEffect && (
                <div className='absolute inset-0 backdrop-blur-sm bg-white/5 [data-theme="dark"]:bg-black/10' />
              )}

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                  {currentAsset.alt}
                </h3>
                {currentAsset.photographer && (
                  <p className="text-sm text-gray-200 drop-shadow-md">
                    Photo by {currentAsset.photographer}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        {showControls && assets.length > 1 && (
          <>
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </motion.button>
          </>
        )}

        {/* Indicators */}
        {showIndicators && assets.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
            {assets.map((_, index) => (
              // item intentionally unused; index used for key
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[var(--color-secondary)] scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Slide Counter */}
      {assets.length > 1 && (
        <div className="text-center mt-4 text-[var(--text-secondary)]">
          {currentIndex + 1} of {assets.length}
        </div>
      )}
    </div>
  );
}
