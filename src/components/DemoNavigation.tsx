'use client';

import CinematicButton from '@/components/ui/CinematicButton';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Code, Eye, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DemoSection {
  id: string;
  title: string;
  description: string;
  category: 'ui' | 'interactive' | 'sections' | 'advanced';
}

const demoSections: DemoSection[] = [
  {
    id: 'hero',
    title: 'Hero Section',
    description: 'Immersive hero sections with dynamic backgrounds',
    category: 'sections',
  },
  {
    id: 'cards',
    title: 'Cinematic Cards',
    description: 'Sophisticated cards with hover effects',
    category: 'ui',
  },
  {
    id: 'gallery',
    title: 'Interactive Gallery',
    description: 'Interactive image gallery with cinematic effects',
    category: 'ui',
  },
  {
    id: 'buttons',
    title: 'Cinematic Buttons',
    description: 'Premium buttons with various styles',
    category: 'ui',
  },
  {
    id: 'lens',
    title: 'Cinematic Lens',
    description: 'Interactive lens effects and visual elements',
    category: 'interactive',
  },
  {
    id: 'film-reel',
    title: 'Film Reel',
    description: 'Dynamic film reel with cinematic animations',
    category: 'interactive',
  },
  {
    id: 'directors',
    title: 'Directors Interface',
    description: 'Interactive interface for project management',
    category: 'interactive',
  },
  {
    id: 'storyboard',
    title: 'Storyboard Experience',
    description: 'Interactive storyboard for creative planning',
    category: 'interactive',
  },
  {
    id: 'solutions',
    title: 'Solutions Matrix',
    description: 'Interactive matrix showcasing services',
    category: 'interactive',
  },
  {
    id: 'journey',
    title: 'Client Journey',
    description: 'Interactive journey mapping for clients',
    category: 'interactive',
  },
  {
    id: 'universes',
    title: 'Creative Universes',
    description: 'Explore different creative universes',
    category: 'interactive',
  },
  {
    id: 'quality',
    title: 'Quality Demo',
    description: 'Showcasing quality standards and processes',
    category: 'interactive',
  },
  {
    id: 'media',
    title: 'Media Components',
    description: 'Media cards, carousels, and grids',
    category: 'ui',
  },
  {
    id: 'sections',
    title: 'Section Components',
    description: 'Complete section components for full pages',
    category: 'sections',
  },
  {
    id: 'advanced',
    title: 'Advanced Sections',
    description: 'Sophisticated section components',
    category: 'advanced',
  },
  {
    id: 'loading',
    title: 'Loading Screen',
    description: 'Cinematic loading screen with animations',
    category: 'ui',
  },
  {
    id: 'usage',
    title: 'Implementation Guide',
    description: 'How to use these components in projects',
    category: 'advanced',
  },
];

const categoryColors = {
  ui: 'var(--golden-accent)',
  interactive: 'var(--golden-subtle)',
  sections: 'var(--golden-dark)',
  advanced: 'var(--text-primary)',
};

const categoryIcons = {
  ui: <Eye className="w-4 h-4" />,
  interactive: <Play className="w-4 h-4" />,
  sections: <Code className="w-4 h-4" />,
  advanced: <Code className="w-4 h-4" />,
};

export default function DemoNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = demoSections.map(section => section.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const groupedSections = demoSections.reduce(
    (acc, section) => {
      if (!acc[section.category]) {
        acc[section.category] = [];
      }
      acc[section.category].push(section);
      return acc;
    },
    {} as Record<string, DemoSection[]>
  );

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      {/* Toggle Button */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <CinematicButton
          variant="primary"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronUp className="w-4 h-4 mr-2" />
          ) : (
            <ChevronDown className="w-4 h-4 mr-2" />
          )}
          {isOpen ? 'Hide' : 'Show'} Navigation
        </CinematicButton>
      </motion.div>

      {/* Navigation Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="bg-[var(--dark-tone)] border border-[var(--border-golden)] rounded-xl p-4 w-80 max-h-[70vh] overflow-y-auto backdrop-blur-md"
        >
          <h3 className="text-lg font-bold text-[var(--golden-accent)] mb-4">
            Demo Navigation
          </h3>

          <div className="space-y-4">
            {Object.entries(groupedSections).map(([category, sections]) => (
              <div key={category}>
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="p-1 rounded"
                    style={{
                      color:
                        categoryColors[
                          category as keyof typeof categoryColors
                        ] || 'var(--text-subtle)',
                    }}
                  >
                    {categoryIcons[category as keyof typeof categoryIcons] || (
                      <Eye className="w-4 h-4" />
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                    {category}
                  </h4>
                </div>

                <div className="space-y-1 ml-6">
                  {sections?.map(section => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left p-2 rounded-md transition-all duration-200 text-sm ${
                        activeSection === section.id
                          ? 'bg-[var(--golden-accent)]/20 text-[var(--golden-accent)] border border-[var(--border-golden)]'
                          : 'text-[var(--text-subtle)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
                      }`}
                    >
                      <div className="font-medium">{section.title}</div>
                      <div className="text-xs opacity-70 mt-1">
                        {section.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
            <div className="flex gap-2">
              <CinematicButton
                variant="outline"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Top
              </CinematicButton>
              <CinematicButton
                variant="outline"
                size="sm"
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth',
                  })
                }
              >
                Bottom
              </CinematicButton>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
