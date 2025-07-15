'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg" />;
  }

  // Cinematic animation variants
  const toggleVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: {
      rotate: 360,
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1.2,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="relative w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 group"
      variants={toggleVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Enhanced glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-cinematic-gold/20 to-cinematic-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
        variants={glowVariants}
        initial="initial"
        whileHover="hover"
      />

      {/* Animated background gradient */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cinematic-gold/10 to-cinematic-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon container with enhanced animations */}
      <motion.div
        className="relative z-10"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        key={theme}
      >
        {theme === 'dark' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="text-cinematic-gold group-hover:text-cinematic-gold/80 transition-colors duration-300"
          >
            <Sun className="w-4 h-4 group-hover:text-cinematic-gold" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="text-cinematic-blue group-hover:text-cinematic-blue/80 transition-colors duration-300"
          >
            <Moon className="w-4 h-4 group-hover:text-cinematic-gold" />
          </motion.div>
        )}
      </motion.div>

      {/* Enhanced focus ring */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-focus:border-cinematic-blue dark:group-focus:border-cinematic-gold transition-colors duration-300" />

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-cinematic-gold/30 dark:group-hover:border-cinematic-blue/30 transition-colors duration-300" />
    </motion.button>
  );
}
