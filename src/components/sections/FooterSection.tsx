import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0a1833] pt-16 pb-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand & Description */}
        <div>
          <div className="text-2xl font-bold text-white mb-4">Orson Vision</div>
          <div className="text-[var(--color-subtext)] mb-6">
            We craft digital experiences that blend artistic excellence with
            technical precision, creating moments that inspire, connect, and
            transform.
          </div>
          <div className="flex items-start gap-2 mb-2 text-[var(--color-subtext)]">
            <MapPin size={18} className="mt-1" />
            123 Innovation Drive, Tech City, TC 12345
          </div>
          <div className="flex items-start gap-2 mb-2 text-[var(--color-subtext)]">
            <Phone size={18} className="mt-1" />
            +1 (555) 123-4567
          </div>
          <div className="flex items-start gap-2 text-[var(--color-subtext)]">
            <Mail size={18} className="mt-1" />
            hello@orsonvision.com
          </div>
        </div>
        {/* Company Links */}
        <div>
          <div className="text-lg font-semibold text-yellow-400 mb-4">
            Company
          </div>
          <ul className="space-y-2 text-[var(--color-subtext)]">
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-white transition-colors">
                Our Team
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Services Links */}
        <div>
          <div className="text-lg font-semibold text-yellow-400 mb-4">
            Services
          </div>
          <ul className="space-y-2 text-[var(--color-subtext)]">
            <li>
              <a
                href="/solutions/content-creation"
                className="hover:text-white transition-colors"
              >
                Content Creation
              </a>
            </li>
            <li>
              <a
                href="/solutions/creative-design"
                className="hover:text-white transition-colors"
              >
                Creative Design
              </a>
            </li>
            <li>
              <a
                href="/solutions/digital-innovation"
                className="hover:text-white transition-colors"
              >
                Digital Innovation
              </a>
            </li>
            <li>
              <a
                href="/solutions/strategic-consulting"
                className="hover:text-white transition-colors"
              >
                Strategic Consulting
              </a>
            </li>
            <li>
              <a
                href="/solutions/technology-solutions"
                className="hover:text-white transition-colors"
              >
                Technology Solutions
              </a>
            </li>
          </ul>
        </div>
        {/* Resources Links */}
        <div>
          <div className="text-lg font-semibold text-yellow-400 mb-4">
            Resources
          </div>
          <ul className="space-y-2 text-[var(--color-subtext)]">
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <a
                href="/case-studies"
                className="hover:text-white transition-colors"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                href="/whitepapers"
                className="hover:text-white transition-colors"
              >
                Whitepapers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Stay Updated (placeholder) */}
      <div className="w-full max-w-7xl mb-8">
        <div className="text-lg font-semibold text-yellow-400 mb-2">
          Stay Updated
        </div>
        {/* Placeholder for newsletter signup */}
      </div>
      <div className="w-full max-w-7xl text-center text-[var(--color-subtext)] text-sm border-t border-white/10 pt-6">
        © 2025 Orson Vision. All rights reserved.
      </div>
    </footer>
  );
}
