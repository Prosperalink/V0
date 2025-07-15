'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
// import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-deep-charcoal text-cream-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            {/* <Logo variant="primary" className="text-cream-white mb-4" /> */}
            <p className="text-warm-gray mb-6 max-w-md">
              Nous livrons des solutions numériques authentiques qui génèrent de
              vrais résultats commerciaux. De la production vidéo au
              développement web, nous créons une valeur durable grâce à la
              transparence et à la performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-true-blue/20 rounded-lg flex items-center justify-center hover:bg-true-blue transition-colors duration-300"
              >
                <ExternalLink size={20} className="text-cream-white" />
              </a>
              <a
                href="mailto:contact@orsonvision.com"
                className="w-10 h-10 bg-true-blue/20 rounded-lg flex items-center justify-center hover:bg-true-blue transition-colors duration-300"
              >
                <Mail size={20} className="text-cream-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-cream-white mb-4">
              Nos Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-warm-gray hover:text-cream-white transition-colors duration-300"
                >
                  Production Vidéo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-warm-gray hover:text-cream-white transition-colors duration-300"
                >
                  Sites Web
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-warm-gray hover:text-cream-white transition-colors duration-300"
                >
                  Marketing Digital
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-warm-gray hover:text-cream-white transition-colors duration-300"
                >
                  Design Graphique
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-cream-white mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-warm-gray">
                <Mail size={16} className="mr-2" />
                <span>contact@orsonvision.com</span>
              </div>
              <div className="flex items-center text-warm-gray">
                <Phone size={16} className="mr-2" />
                <span>+216 XX XXX XXX</span>
              </div>
              <div className="flex items-center text-warm-gray">
                <MapPin size={16} className="mr-2" />
                <span>Tunis, Tunisie</span>
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
          className="border-t border-warm-gray/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-warm-gray text-sm">
            © 2024 Orson Vision - Digital Vérité. Tous droits réservés.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-warm-gray hover:text-true-blue text-sm transition-colors duration-300"
            >
              Politique de Confidentialité
            </a>
            <a
              href="#"
              className="text-warm-gray hover:text-true-blue text-sm transition-colors duration-300"
            >
              Conditions d'Utilisation
            </a>
            <a
              href="#"
              className="text-warm-gray hover:text-true-blue text-sm transition-colors duration-300"
            >
              Politique des Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
