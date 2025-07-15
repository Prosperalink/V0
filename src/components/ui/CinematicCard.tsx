'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface CinematicCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  category?: string;
  duration?: string;
  overlay?: boolean;
  aspectRatio?: 'square' | 'landscape' | 'portrait';
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function CinematicCard({
  image,
  title,
  subtitle,
  description,
  category,
  duration,
  overlay = true,
  aspectRatio = 'landscape',
  onClick,
  className = '',
  children,
}: CinematicCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const aspectRatioClasses = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]',
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-[var(--dark-tone)] border border-[var(--golden-accent)]/20 group cursor-pointer ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Image Container */}
      <div
        className={`relative ${aspectRatioClasses[aspectRatio]} overflow-hidden`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}

        {/* Category Badge */}
        {category && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 left-4 bg-[var(--golden-accent)]/90 backdrop-blur-sm text-[var(--deep-blue)] px-3 py-1 rounded-full text-xs font-semibold"
          >
            {category}
          </motion.div>
        )}

        {/* Duration Badge */}
        {duration && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute top-4 right-4 bg-[var(--deep-blue)]/90 backdrop-blur-sm text-[var(--golden-accent)] px-3 py-1 rounded-full text-xs font-semibold"
          >
            {duration}
          </motion.div>
        )}

        {/* Play Button Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-[var(--golden-accent)]/90 backdrop-blur-sm rounded-full p-4">
            <svg
              className="w-6 h-6 text-[var(--deep-blue)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <motion.h3 className="text-xl font-bold text-[var(--golden-accent)] mb-2 group-hover:text-[var(--golden-accent)] transition-colors duration-300">
          {title}
        </motion.h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-[var(--text-subtle)] text-sm mb-3 font-medium">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-[var(--text-subtle)] text-sm leading-relaxed overflow-hidden"
          >
            {description}
          </motion.p>
        )}

        {/* Custom Children */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 border-2 border-[var(--golden-accent)]/0 rounded-xl pointer-events-none"
        animate={{
          borderColor: isHovered
            ? 'rgba(245, 158, 11, 0.3)'
            : 'rgba(245, 158, 11, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
