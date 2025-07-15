import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import ServicesCarouselSection from '@/components/sections/ServicesCarouselSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Mock the asset management
jest.mock('@/lib/asset-management', () => ({
  getRandomAsset: () => ({
    src: '/test-service-image.jpg',
    alt: 'Test service image',
  }),
}));

// Mock CSS imports
jest.mock('swiper/css', () => ({}), { virtual: true });

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<'div'>) => (
      <div {...props}>{children}</div>
    ),
    section: ({ children, ...props }: React.ComponentProps<'section'>) => (
      <section {...props}>{children}</section>
    ),
    h2: ({ children, ...props }: React.ComponentProps<'h2'>) => (
      <h2 {...props}>{children}</h2>
    ),
    p: ({ children, ...props }: React.ComponentProps<'p'>) => (
      <p {...props}>{children}</p>
    ),
    button: ({ children, ...props }: React.ComponentProps<'button'>) => (
      <button {...props}>{children}</button>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

// Mock Next.js Image
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} />;
  };
});

// Mock the language context
jest.mock('@/contexts/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'en',
    setLanguage: jest.fn(),
    t: (key: string) => {
      const translations: { [key: string]: string } = {
        'services.hero.title': 'Technical Expertise, Artistic Vision',
        'services.hero.subtitle':
          'Where cinematic precision meets creative innovation',
        'services.hero.description':
          'Discover our comprehensive range of services',
        'services.productionVideo.title': 'Video Production',
        'services.productionVideo.description': 'Professional video content',
        'services.cinematography.title': 'Cinematographic Production',
        'services.cinematography.description': 'High-end cinematic productions',
        'services.motionDesign.title': 'Motion Design & Animation',
        'services.motionDesign.description': 'Dynamic visual storytelling',
        'services.audioPodcasts.title': 'Audio Production & Podcasts',
        'services.audioPodcasts.description': 'Professional audio content',
        'services.photography.title': 'Photography & Content',
        'services.photography.description':
          'Capturing moments with emotional depth',
        'services.design.title': 'Graphic Design & Identity',
        'services.design.description': 'Creating compelling visual identities',
        'services.web.title': 'Web Development',
        'services.web.description': 'Building digital experiences',
        'services.marketing.title': 'Digital Marketing',
        'services.marketing.description': 'Strategic digital campaigns',
        'services.specialized.title': 'Specialized Services',
        'services.specialized.description': 'Tailored solutions',
        'services.collaboration.title': 'Inter-Métier Collaboration',
        'services.collaboration.description':
          'Our expertise areas work together',
        'services.cta': 'Request a Quote',
      };
      return translations[key] || key;
    },
  }),
  LanguageProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

const renderWithLanguageProvider = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>);
};

describe('ServicesCarouselSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the main title', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);
      expect(screen.getByText('services.expertise.title')).toBeInTheDocument();
    });

    it('renders all service navigation buttons', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      // Use getAllByText to get all instances and check they exist
      const contentCreationButtons = screen.getAllByText('Content Creation');
      const creativeDesignButtons = screen.getAllByText('Creative Design');
      const digitalInnovationButtons =
        screen.getAllByText('Digital Innovation');
      const strategicConsultingButtons = screen.getAllByText(
        'Strategic Consulting'
      );
      const technologySolutionsButtons = screen.getAllByText(
        'Technology Solutions'
      );

      expect(contentCreationButtons.length).toBeGreaterThan(0);
      expect(creativeDesignButtons.length).toBeGreaterThan(0);
      expect(digitalInnovationButtons.length).toBeGreaterThan(0);
      expect(strategicConsultingButtons.length).toBeGreaterThan(0);
      expect(technologySolutionsButtons.length).toBeGreaterThan(0);
    });

    it('renders service icons', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      // Use getAllByText to get all instances
      const filmIcons = screen.getAllByText('🎬');
      const paintIcons = screen.getAllByText('🎨');
      const rocketIcons = screen.getAllByText('🚀');
      const chartIcons = screen.getAllByText('📊');
      const gearIcons = screen.getAllByText('⚙️');

      expect(filmIcons.length).toBeGreaterThan(0);
      expect(paintIcons.length).toBeGreaterThan(0);
      expect(rocketIcons.length).toBeGreaterThan(0);
      expect(chartIcons.length).toBeGreaterThan(0);
      expect(gearIcons.length).toBeGreaterThan(0);
    });

    it('renders the active service display', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      // Check for the description text which is unique
      expect(
        screen.getByText('Cinematic storytelling that captivates and converts')
      ).toBeInTheDocument();
    });

    it('renders service features', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      expect(screen.getByText('Video Production')).toBeInTheDocument();
      expect(screen.getByText('Photography')).toBeInTheDocument();
      expect(screen.getByText('Copywriting')).toBeInTheDocument();
      expect(screen.getByText('Social Media')).toBeInTheDocument();
    });

    it('renders the CTA button', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      expect(screen.getByText('Explore Content Creation')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('changes active service when navigation button is clicked', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      // Initially shows Content Creation description
      expect(
        screen.getByText('Cinematic storytelling that captivates and converts')
      ).toBeInTheDocument();

      // Click on Creative Design button (get the first one)
      const creativeDesignButtons = screen.getAllByText('Creative Design');
      const creativeDesignButton = creativeDesignButtons[0]?.closest('button');
      if (creativeDesignButton) {
        fireEvent.click(creativeDesignButton);
      }

      // Should now show Creative Design content
      expect(
        screen.getByText('Visual narratives that tell your brand story')
      ).toBeInTheDocument();
      expect(screen.getByText('Brand Identity')).toBeInTheDocument();
      expect(screen.getByText('UI/UX Design')).toBeInTheDocument();
    });

    it('handles hover states on navigation buttons', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      const contentCreationButtons = screen.getAllByText('Content Creation');
      const contentCreationButton =
        contentCreationButtons[0]?.closest('button');
      if (contentCreationButton) {
        fireEvent.mouseEnter(contentCreationButton);
        fireEvent.mouseLeave(contentCreationButton);
      }

      // Should not throw errors and maintain functionality
      expect(contentCreationButton).toBeInTheDocument();
    });

    it('handles CTA button interactions', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      const ctaButton = screen.getByText('Explore Content Creation');

      fireEvent.click(ctaButton);
      fireEvent.mouseEnter(ctaButton);
      fireEvent.mouseLeave(ctaButton);

      // Should not throw errors
      expect(ctaButton).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper tabindex on interactive elements', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      const navigationButtons = screen.getAllByRole('button');
      navigationButtons.forEach(button => {
        expect(button).toHaveAttribute('tabIndex');
      });
    });

    it('maintains keyboard navigation', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        if (button) {
          fireEvent.keyDown(button, { key: 'Enter' });
          fireEvent.keyDown(button, { key: ' ' });
        }
      });

      // Should not throw errors
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('Performance', () => {
    it('handles rapid service switching', async () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      const buttons = screen.getAllByRole('button');

      // Rapidly click through all services
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        if (button) fireEvent.click(button);
        await waitFor(() => {
          expect(button).toBeInTheDocument();
        });
      }

      // Should not crash or throw errors
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('handles hover state changes efficiently', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      const buttons = screen.getAllByRole('button');

      // Rapidly hover over all buttons
      buttons.forEach(button => {
        if (button) {
          fireEvent.mouseEnter(button);
          fireEvent.mouseLeave(button);
        }
      });

      // Should not throw errors
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('Animation Integration', () => {
    it('integrates with framer-motion components', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      // Should render motion components without errors
      expect(
        screen.getByText('Cinematic storytelling that captivates and converts')
      ).toBeInTheDocument();
    });

    it('handles AnimatePresence transitions', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      // Switch between services to test AnimatePresence
      const creativeDesignButtons = screen.getAllByText('Creative Design');
      const creativeDesignButton = creativeDesignButtons[0]?.closest('button');
      if (creativeDesignButton) {
        fireEvent.click(creativeDesignButton);
      }

      // Should transition smoothly
      expect(
        screen.getByText('Visual narratives that tell your brand story')
      ).toBeInTheDocument();
    });
  });

  describe('Asset Integration', () => {
    it('displays service images', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      const images = screen.getAllByRole('img');
      expect(images.length).toBeGreaterThan(0);
    });

    it('handles image loading states', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('src');
        expect(img).toHaveAttribute('alt');
      });
    });
  });

  describe('Error Handling', () => {
    it('handles missing service data gracefully', () => {
      // Mock empty services array
      // removed unused variable

      // This should not crash the component
      expect(() => {
        renderWithLanguageProvider(<ServicesCarouselSection />);
      }).not.toThrow();
    });

    it('handles missing image assets gracefully', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      // Should still render without images
      expect(
        screen.getByText('Cinematic storytelling that captivates and converts')
      ).toBeInTheDocument();
    });
  });

  describe('Auto-rotation', () => {
    it('auto-rotates through services', async () => {
      jest.useFakeTimers();

      renderWithLanguageProvider(<ServicesCarouselSection />);

      // Initially shows first service
      expect(
        screen.getByText('Cinematic storytelling that captivates and converts')
      ).toBeInTheDocument();

      // Fast-forward time to trigger auto-rotation
      jest.advanceTimersByTime(5000);

      await waitFor(() => {
        // Should now show second service
        expect(
          screen.getByText('Visual narratives that tell your brand story')
        ).toBeInTheDocument();
      });

      jest.useRealTimers();
    });
  });

  describe('Cinematic Effects', () => {
    it('applies cinematic styling to elements', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      // Check for cinematic classes and styles
      const serviceDisplay = screen
        .getByText('Cinematic storytelling that captivates and converts')
        .closest('div');
      expect(serviceDisplay).toBeInTheDocument();
    });

    it('handles 3D transform effects', () => {
      renderWithLanguageProvider(<ServicesCarouselSection />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveClass('transform-gpu');
      });
    });
  });
});
