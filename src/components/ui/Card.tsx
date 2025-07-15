'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  description,
  children,
  className = '',
  aspectRatio = 'square',
  onClick,
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
  };

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-[var(--dark-tone)] to-[var(--mid-tone)] border border-[var(--border-card)] shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-[var(--border-golden)] hover:-translate-y-1 ${aspectRatioClasses[aspectRatio]} ${className}`}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title || 'Card image'}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6">
        {children || (
          <>
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm font-medium text-[var(--golden-accent)] mb-2 tracking-wide"
              >
                {subtitle}
              </motion.div>
            )}

            {title && (
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold text-[var(--text-primary)] mb-3 leading-tight font-cinematic"
              >
                {title}
              </motion.h3>
            )}

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[var(--text-subtle)] text-sm leading-relaxed line-clamp-3"
              >
                {description}
              </motion.p>
            )}
          </>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--golden-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Golden Border Effect */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[var(--border-golden)] transition-colors duration-300 rounded-xl" />
    </motion.div>
  );
};

export default Card;

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`px-6 py-4 border-b border-accent ${className}`}>
      {children}
    </div>
  );
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 border-t border-accent ${className}`}>
      {children}
    </div>
  );
}
