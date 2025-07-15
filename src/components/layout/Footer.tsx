'use client';

import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-deep-blue via-dark-tone to-deep-blue text-text-primary py-16 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-golden-accent font-cinematic mb-4 block"
            >
              Orson Vision
            </Link>
            <p className="text-text-secondary mb-6 max-w-md leading-relaxed">
              We craft digital universes with cinematic precision and
              storytelling artistry, creating experiences that rival the
              sophistication of Hollywood productions. Based in Den Den, Manubah
              Governorate, Tunisia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/orsonvision"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-golden-accent/20 rounded-lg flex items-center justify-center hover:bg-golden-accent/30 transition-colors duration-300 border border-golden-accent/30"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-golden-accent" />
              </a>
              <a
                href="https://twitter.com/orsonvision"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-golden-accent/20 rounded-lg flex items-center justify-center hover:bg-golden-accent/30 transition-colors duration-300 border border-golden-accent/30"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-golden-accent" />
              </a>
              <a
                href="https://instagram.com/orsonvision"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-golden-accent/20 rounded-lg flex items-center justify-center hover:bg-golden-accent/30 transition-colors duration-300 border border-golden-accent/30"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-golden-accent" />
              </a>
              <a
                href="https://linkedin.com/company/orsonvision"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-golden-accent/20 rounded-lg flex items-center justify-center hover:bg-golden-accent/30 transition-colors duration-300 border border-golden-accent/30"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-golden-accent" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4 font-cinematic">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-golden-accent transition-colors duration-300"
                >
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-golden-accent transition-colors duration-300"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-golden-accent transition-colors duration-300"
                >
                  Content Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-secondary hover:text-golden-accent transition-colors duration-300"
                >
                  Strategic Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Planets of Partnership */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4 font-cinematic">
              Planets of Partnership
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/planets-of-partnership/corporate"
                  className="text-text-secondary hover:text-golden-accent transition-colors duration-300"
                >
                  Corporate
                </Link>
              </li>
              <li>
                <Link
                  href="/planets-of-partnership/smes"
                  className="text-text-secondary hover:text-golden-accent transition-colors duration-300"
                >
                  SMEs
                </Link>
              </li>
              <li>
                <Link
                  href="/planets-of-partnership/weddings"
                  className="text-text-secondary hover:text-golden-accent transition-colors duration-300"
                >
                  Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/planets-of-partnership/tourism"
                  className="text-text-secondary hover:text-golden-accent transition-colors duration-300"
                >
                  Tourism
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4 font-cinematic">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-text-secondary">
                <Mail size={16} className="mr-2 text-golden-accent" />
                <a
                  href="mailto:hello@orsonvision.com"
                  className="hover:text-golden-accent transition-colors duration-300"
                >
                  hello@orsonvision.com
                </a>
              </div>
              <div className="flex items-center text-text-secondary">
                <Phone size={16} className="mr-2 text-golden-accent" />
                <a
                  href="tel:+21600000000"
                  className="hover:text-golden-accent transition-colors duration-300"
                >
                  +216 00 000 000
                </a>
              </div>
              <div className="flex items-center text-text-secondary">
                <MapPin size={16} className="mr-2 text-golden-accent" />
                <span>Den Den, Manubah Governorate, Tunisia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border-subtle mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-text-muted text-sm">
            © 2025 Orson Vision - Cinematic Digital Solutions. All rights
            reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/legal/privacy"
              className="text-text-muted hover:text-golden-accent text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-text-muted hover:text-golden-accent text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/cookies"
              className="text-text-muted hover:text-golden-accent text-sm transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
