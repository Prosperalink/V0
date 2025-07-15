'use client';

import { motion } from 'framer-motion';

import { IAsset } from '@/lib/asset-management';

interface IMediaGridProps {
  assets: IAsset[];
  title?: string;
  subtitle?: string;
  columns?: number;
  gap?: number;
  className?: string;
  onCardClick?: (asset: IAsset, index: number) => void;
  showTitles?: boolean;
  glassEffect?: boolean;
}

export default function MediaGrid({
  assets,
  title,
  subtitle,
  columns = 3,
  gap = 4,
  className = '',
  onCardClick,
  showTitles = true,
  glassEffect = true,
}: IMediaGridProps) {
  const handleCardClick = (asset: IAsset, index: number) => {
    onCardClick?.(asset, index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  if (!assets || assets.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-[var(--text-secondary)]">No media available</p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
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

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`grid gap-${gap} ${
          columns === 1
            ? 'grid-cols-1'
            : columns === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : columns === 3
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : columns === 4
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
        }`}
      >
        {assets.map((asset, index) => (
          <motion.div
            key={`${asset.src}-${index}`}
            variants={itemVariants}
            className="w-full"
          >
            <div
              onClick={() => handleCardClick(asset, index)}
              className={`w-full aspect-video bg-gradient-to-br from-blue-800 to-indigo-900 rounded-lg cursor-pointer transition-transform hover:scale-105 ${
                glassEffect
                  ? 'backdrop-blur-sm border border-yellow-300/20'
                  : ''
              }`}
            >
              <div className="p-4 text-white">
                {showTitles && (
                  <div>
                    <h3 className="font-bold text-lg">
                      Cinematic {asset.category} {index + 1}
                    </h3>
                    <p className="text-blue-200 text-sm">{asset.alt}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {assets.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-[var(--text-secondary)] text-lg">
            <p>No media content available</p>
            <p className="text-sm mt-2">Please check back later</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
