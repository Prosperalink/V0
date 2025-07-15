'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import React, { useState } from 'react';

import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', short: 'EN' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', short: 'FR' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦', short: 'AR' },
  ] as const;

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as 'en' | 'fr' | 'ar');
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cinematic animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1, ease: 'easeOut' },
    },
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.2 },
    }),
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 180, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative">
      {/* Main Button */}
      <motion.button
        onClick={toggleDropdown}
        className="relative flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cinematic-gold/50"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        aria-label={`Current language: ${currentLanguage?.name}. Click to change language`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cinematic-gold/20 to-cinematic-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cinematic-gold/10 to-cinematic-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 flex items-center space-x-2">
          <Globe className="w-4 h-4 text-cinematic-gold group-hover:text-cinematic-gold/80 transition-colors duration-300" />
          <span className="text-sm font-medium">{currentLanguage?.flag}</span>
          <span className="text-sm font-medium hidden sm:inline">
            {currentLanguage?.short}
          </span>
          <motion.div
            variants={iconVariants}
            animate={isOpen ? 'hover' : 'initial'}
          >
            <ChevronDown className="w-3 h-3 text-white/70 group-hover:text-white transition-colors duration-300" />
          </motion.div>
        </div>

        {/* Focus ring */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-focus:border-cinematic-gold/50 transition-colors duration-300" />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50"
            variants={dropdownVariants}
            initial="closed"
            animate="open"
            exit="closed"
            role="listbox"
          >
            <div className="py-2">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-cinematic-gold/10 transition-colors duration-200 ${
                    language === lang.code
                      ? 'bg-cinematic-gold/20 text-cinematic-gold'
                      : 'text-gray-700'
                  }`}
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  role="option"
                  aria-selected={language === lang.code}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{lang.name}</span>
                    <span className="text-xs text-gray-500">{lang.short}</span>
                  </div>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto text-cinematic-gold"
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default LanguageToggle;
