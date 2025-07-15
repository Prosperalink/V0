'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { IAsset } from '@/lib/asset-management';

interface IMediaDrivenSectionProps {
  title: string;
  subtitle: string;
  category: string;
  autoRotate?: boolean;
  rotationInterval?: number;
  showControls?: boolean;
  glassEffect?: boolean;
}

export default function MediaDrivenSection({
  title,
  subtitle,
  category,
  autoRotate = true,
  rotationInterval = 5000,
  showControls = true,
  glassEffect = true,
}: IMediaDrivenSectionProps) {
  // removed unused variable t
  const [assets, setAssets] = useState<IAsset[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoRotate);
  const [isLoading, setIsLoading] = useState(true);

  // Load assets (placeholder for future Pexels API integration)
  useEffect(() => {
    const loadAssets = async () => {
      try {
        setIsLoading(true);
        // Placeholder for future Pexels API integration
        // const fetchedAssets = await fetchAssetsFromPexels(category, 8);
        setAssets([
          {
            src: `/assets/images/${category}/fallback-1.jpg`,
            alt: `Cinematic ${category} image`,
            type: 'image',
            category,
            tags: [category],
          },
          {
            src: `/assets/images/${category}/fallback-2.jpg`,
            alt: `Cinematic ${category} image`,
            type: 'image',
            category,
            tags: [category],
          },
        ]);
      } catch {
        // Fallback to local assets
        setAssets([
          {
            src: `/assets/images/${category}/fallback-1.jpg`,
            alt: `Cinematic ${category} image`,
            type: 'image',
            category,
            tags: [category],
          },
          {
            src: `/assets/images/${category}/fallback-2.jpg`,
            alt: `Cinematic ${category} image`,
            type: 'image',
            category,
            tags: [category],
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    loadAssets();
  }, [category]);

  // Auto-rotation logic
  useEffect(() => {
    if (!autoRotate || !isPlaying || assets.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % assets.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isPlaying, assets.length, rotationInterval]);

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % assets.length);
  }, [assets.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + assets.length) % assets.length);
  }, [assets.length]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  if (isLoading) {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-secondary)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)]">
            Loading cinematic content...
          </p>
        </div>
      </section>
    );
  }

  if (assets.length === 0) {
    return null;
  }

  const currentAsset = assets[currentIndex];

  if (!currentAsset) {
    return null;
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            <Image
              src={currentAsset.src}
              alt={currentAsset.alt}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/60"></div>

        {/* Linear.app-inspired Glass Overlay */}
        {glassEffect && (
          <div className='absolute inset-0 backdrop-blur-sm bg-white/5 [data-theme="dark"]:bg-black/10'></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
        </motion.div>

        {/* Media Controls */}
        {showControls && assets.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center space-y-4"
          >
            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlayPause}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </motion.button>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrevious}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </motion.button>

              {/* Thumbnail Indicators */}
              <div className="flex space-x-2">
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

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Attribution for Pexels */}
      {currentAsset.photographer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 right-4 text-white/60 text-sm backdrop-blur-md bg-black/20 px-3 py-1 rounded-full"
        >
          Photo by{' '}
          <a
            href={currentAsset.photographer_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-secondary)] hover:text-[var(--accent-gold-light-lighter)] transition-colors"
          >
            {currentAsset.photographer}
          </a>
          {' on '}
          <a
            href="https://pexels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-secondary)] hover:text-[var(--accent-gold-light-lighter)] transition-colors"
          >
            Pexels
          </a>
        </motion.div>
      )}
    </section>
  );
}

// Specialized Media-Driven Components

export function MediaCard({
  asset,
  title,
  description,
  className = '',
}: {
  asset: IAsset;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      {/* Card Background */}
      <div className="absolute inset-0">
        {asset.type === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={asset.src} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full object-cover"
            style={{
              backgroundImage: `url(${asset.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}

        {/* Card Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        {description && (
          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

export function MediaGrid({
  assets,
  className = '',
}: {
  assets: IAsset[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {assets.map((asset, index) => (
        <motion.div
          key={asset.src}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="aspect-video"
        >
          <MediaCard
            asset={asset}
            title={`Cinematic ${asset.category} ${index + 1}`}
            description={`Professional ${asset.category} showcase`}
            className="h-full"
          />
        </motion.div>
      ))}
    </div>
  );
}

export function MediaCarousel({
  assets,
  className = '',
}: {
  assets: IAsset[];
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % assets.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + assets.length) % assets.length);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl aspect-video">
        {assets.map((asset, index) => (
          <motion.div
            key={asset.src}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1,
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <MediaCard
              asset={asset}
              title={`Cinematic ${asset.category} ${index + 1}`}
              description={`Professional ${asset.category} showcase`}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-md"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-md"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
        {assets.map((_, index) => (
          // item intentionally unused; index used for key
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[var(--color-secondary)] scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
