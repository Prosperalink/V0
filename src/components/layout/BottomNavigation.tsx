'use client';

import { useJourney } from '@/contexts/JourneyContext';
import { motion } from 'framer-motion';
import { Briefcase, Home, Phone, User } from 'lucide-react';

interface IBottomNavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
  action?: () => void;
}

const bottomNavItems: IBottomNavItem[] = [
  {
    name: 'Home',
    icon: <Home className="w-5 h-5" />,
    href: '/',
  },
  {
    name: 'Services',
    icon: <Briefcase className="w-5 h-5" />,
    href: '/services',
  },
  {
    name: 'About',
    icon: <User className="w-5 h-5" />,
    href: '/about',
  },
  {
    name: 'Contact',
    icon: <Phone className="w-5 h-5" />,
    href: '/contact',
  },
];

export default function BottomNavigation() {
  const { resetJourney } = useJourney();

  const handleNavClick = (item: IBottomNavItem) => {
    if (item.href === '/') {
      resetJourney();
    }
    if (item.action) {
      item.action();
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      {/* Background with blur effect */}
      <div className="bg-deep-blue/95 backdrop-blur-md border-t border-golden-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around h-16">
            {bottomNavItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavClick(item)}
                className="flex flex-col items-center justify-center flex-1 py-2 text-text-white hover:text-golden-accent transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-golden-accent focus:ring-offset-2 focus:ring-offset-deep-blue rounded"
                aria-label={`Navigate to ${item.name}`}
              >
                <div className="mb-1 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-medium group-hover:text-golden-accent transition-colors duration-300">
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
