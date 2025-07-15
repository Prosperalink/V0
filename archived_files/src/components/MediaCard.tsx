'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { IAsset } from '@/lib/asset-management';

interface IMediaCardProps {
  asset: IAsset;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
  showOverlay?: boolean;
  glassEffect?: boolean;
}

export default function MediaCard({
  asset,
  title,
  subtitle,
  onClick,
  className = '',
  showOverlay = true,
  glassEffect = true,
}: IMediaCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(true); // Still set to true to show fallback
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Media Container */}
      <div className="relative w-full h-64 md:h-80">
        {/* Loading State */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[var(--bg-secondary)] flex items-center justify-center">
            <div className="text-[var(--text-secondary)]">
              <Play size={32} />
            </div>
          </div>
        )}

        {/* Media */}
        <Image
          src={asset.src}
          alt={asset.alt || title || 'Media card image'}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />

        {/* Video Play Icon */}
        {asset.type === 'video' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0.8,
              scale: isHovered ? 1 : 0.8,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
              <Play size={32} className="text-white" fill="white" />
            </div>
          </motion.div>
        )}

        {/* Overlay */}
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          />
        )}

        {/* Glass Effect */}
        {glassEffect && (
          <div className='absolute inset-0 backdrop-blur-sm bg-white/5 [data-theme="dark"]:bg-black/10 pointer-events-none' />
        )}
      </div>

      {/* Content Overlay */}
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 10 }}
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
        >
          {title && (
            <h3 className="text-lg font-semibold mb-1 drop-shadow-lg">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-200 drop-shadow-md">{subtitle}</p>
          )}
        </motion.div>
      )}

      {/* Hover Effect Border */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        className="absolute inset-0 border-2 border-[var(--color-secondary)] rounded-xl pointer-events-none"
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
