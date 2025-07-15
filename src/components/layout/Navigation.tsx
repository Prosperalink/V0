'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Processus', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const isActive = (id: string) => activeSection === id;

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-true-blue text-cream-white px-4 py-2 rounded-lg z-50"
      >
        Aller au contenu principal
      </a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-deep-charcoal/95 backdrop-blur-md shadow-lg border-b border-cream-white/10'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            {/* <Logo variant="primary" className="text-cream-white" /> */}

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-10"
              role="menubar"
            >
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 relative focus-ring font-semibold text-lg px-2 ${
                    isActive(item.id)
                      ? 'text-true-blue font-extrabold'
                      : 'text-cream-white hover:text-true-blue'
                  }`}
                  role="menuitem"
                  aria-current={isActive(item.id) ? 'page' : undefined}
                >
                  {item.name}
                  {isActive(item.id) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-true-blue via-blue-400 to-blue-600 shadow-lg"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}

              {/* Theme Toggle */}
              <ThemeToggle />

              <Link
                href="#contact"
                className="bg-gradient-to-r from-true-blue via-blue-400 to-blue-600 text-cream-white px-7 py-2 rounded-lg font-bold shadow-xl hover:scale-105 transition-all duration-300 focus-ring border-2 border-true-blue/40"
                role="menuitem"
              >
                Commencer
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="text-cream-white hover:text-true-blue transition-colors duration-300 p-2 focus-ring"
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden"
              id="mobile-menu"
              role="menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-deep-charcoal/95 backdrop-blur-md rounded-lg mt-2 border border-cream-white/10">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md transition-colors duration-300 focus-ring ${
                      isActive(item.id)
                        ? 'text-true-blue bg-true-blue/10'
                        : 'text-cream-white hover:text-true-blue hover:bg-cream-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                    aria-current={isActive(item.id) ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  className="w-full mt-4 btn-primary focus-ring"
                  role="menuitem"
                >
                  Commencer
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
