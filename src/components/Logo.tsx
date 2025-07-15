'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface LogoProps {
  variant?: 'primary' | 'logomark' | 'wordmark' | 'icon';
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  variant = 'primary',
  className = '',
  showTagline = true,
}: LogoProps) {
  const baseClasses =
    'font-extrabold transition-colors duration-300 focus-ring';

  const variants = {
    primary: (
      <div className={`flex items-center gap-2 ${baseClasses} ${className}`}>
        {/* Frame brackets */}
        <span className="text-true-blue text-2xl font-black">[</span>
        <div className="flex flex-col">
          <span className="text-deep-charcoal text-xl font-black tracking-tight">
            ORSON VISION
          </span>
          {showTagline && (
            <span className="text-warm-gray text-xs font-medium tracking-wide">
              Digital Vérité
            </span>
          )}
        </div>
        <span className="text-true-blue text-2xl font-black">]</span>
      </div>
    ),

    logomark: (
      <div className={`flex items-center gap-1 ${baseClasses} ${className}`}>
        <span className="text-true-blue text-xl font-black">[</span>
        <span className="text-deep-charcoal text-lg font-black tracking-tight">
          OV
        </span>
        <span className="text-true-blue text-xl font-black">]</span>
      </div>
    ),

    wordmark: (
      <div className={`flex items-center ${baseClasses} ${className}`}>
        <span className="text-deep-charcoal text-xl font-black tracking-tight">
          ORSON VISION
        </span>
        {showTagline && (
          <span className="text-warm-gray text-xs font-medium tracking-wide ml-2">
            Digital Vérité
          </span>
        )}
      </div>
    ),

    icon: (
      <div
        className={`w-8 h-8 bg-true-blue rounded-full flex items-center justify-center shadow-lg ${className}`}
      >
        <span className="text-cream-white font-bold text-sm">OV</span>
      </div>
    ),
  };

  return (
    <Link href="/" aria-label="Orson Vision - Digital Vérité Home">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {variants[variant]}
      </motion.div>
    </Link>
  );
}
