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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { name: 'Services', href: '/services', id: 'services' },
    {
      name: 'Planets of Partnership',
      href: '#',
      id: 'planets',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Corporate', href: '/planets-of-partnership/corporate' },
        { name: 'SMEs', href: '/planets-of-partnership/smes' },
        { name: 'Weddings', href: '/planets-of-partnership/weddings' },
        { name: 'Tourism', href: '/planets-of-partnership/tourism' },
        { name: 'Healthcare', href: '/planets-of-partnership/healthcare' },
        { name: 'Schools', href: '/planets-of-partnership/schools' },
        { name: 'Nonprofits', href: '/planets-of-partnership/nonprofits' },
        { name: 'Fashion', href: '/planets-of-partnership/fashion' },
        { name: 'Artists', href: '/planets-of-partnership/artists' },
      ],
    },
    { name: 'Portfolio', href: '/portfolio', id: 'portfolio' },
    { name: 'Process', href: '/process', id: 'process' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ];

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
            <Link
              href="/"
              className="text-2xl font-bold text-golden-accent font-cinematic"
            >
              Orson Vision
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-10"
              role="menubar"
            >
              {navItems.map(item => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.id)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button
                      className="transition-all duration-300 relative focus-ring font-semibold text-lg px-2 text-cream-white hover:text-golden-accent flex items-center"
                      role="menuitem"
                      aria-expanded={activeDropdown === item.id}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-all duration-300 relative focus-ring font-semibold text-lg px-2 text-cream-white hover:text-golden-accent"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-deep-charcoal/95 backdrop-blur-md rounded-lg shadow-xl border border-cream-white/10 z-50"
                      role="menu"
                    >
                      <div className="py-2">
                        {item.dropdownItems?.map(dropdownItem => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-cream-white hover:text-golden-accent hover:bg-cream-white/5 transition-colors duration-300"
                            role="menuitem"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Theme Toggle */}
              <ThemeToggle />

              <Link
                href="/contact"
                className="bg-gradient-to-r from-golden-accent to-golden-subtle text-deep-blue px-7 py-2 rounded-lg font-bold shadow-xl hover:scale-105 transition-all duration-300 focus-ring border-2 border-golden-accent/40"
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
                className="text-cream-white hover:text-golden-accent transition-colors duration-300 p-2 focus-ring"
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
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="w-full text-left px-3 py-2 rounded-md transition-colors duration-300 focus-ring text-cream-white hover:text-golden-accent hover:bg-cream-white/5 flex items-center justify-between"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.id ? null : item.id
                            )
                          }
                          role="menuitem"
                          aria-expanded={activeDropdown === item.id}
                        >
                          {item.name}
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {activeDropdown === item.id && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.dropdownItems?.map(dropdownItem => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-3 py-2 rounded-md transition-colors duration-300 focus-ring text-cream-white/80 hover:text-golden-accent hover:bg-cream-white/5 text-sm"
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                                role="menuitem"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded-md transition-colors duration-300 focus-ring text-cream-white hover:text-golden-accent hover:bg-cream-white/5"
                        onClick={() => setIsOpen(false)}
                        role="menuitem"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="w-full mt-4 btn-primary focus-ring block text-center"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  Commencer
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
