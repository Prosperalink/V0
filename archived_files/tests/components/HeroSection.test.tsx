import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import HeroSection from '@/components/sections/HeroSection';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { getHeroVideo, getRandomAsset } from '@/lib/asset-management';

// Mock asset management
jest.mock('@/lib/asset-management', () => ({
  getHeroVideo: jest.fn(),
  getRandomAsset: jest.fn(),
}));

// Mock video element
Object.defineProperty(window.HTMLVideoElement.prototype, 'play', {
  writable: true,
  value: jest.fn(),
});

Object.defineProperty(window.HTMLVideoElement.prototype, 'pause', {
  writable: true,
  value: jest.fn(),
});

describe('HeroSection', () => {
  const mockHeroVideo = {
    src: '/assets/pages/home/videos/hero/hero-cinematic-office.mp4',
    alt: 'Cinematic office hero video background',
    poster: '/assets/pages/home/videos/hero/hero-cinematic-office-poster.jpg',
    type: 'video' as const,
    category: 'home',
    subcategory: 'hero',
  };

  const mockFallbackImage = {
    src: '/assets/pages/home/images/hero/home-hero-01.jpg',
    alt: 'home hero image 1',
    type: 'image' as const,
    category: 'home',
    subcategory: 'hero',
    index: 0,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (getHeroVideo as any).mockReturnValue(mockHeroVideo);
    (getRandomAsset as any).mockReturnValue(mockFallbackImage);
  });

  const renderHeroSection = () => {
    return render(
      <LanguageProvider>
        <HeroSection />
      </LanguageProvider>
    );
  };

  describe('Rendering', () => {
    it('renders hero section with video background', () => {
      renderHeroSection();

      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('video')).toBeInTheDocument();
    });

    it('renders hero title with cinematic styling', () => {
      renderHeroSection();

      const title = screen.getByText(
        'Cinematic Humanism in Digital Innovation'
      );
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass(
        'text-6xl',
        'md:text-8xl',
        'font-bold',
        'text-white'
      );
    });

    it('renders hero subtitle with proper styling', () => {
      renderHeroSection();

      const subtitle = screen.getByText('Where creativity meets technology');
      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveClass(
        'text-2xl',
        'md:text-3xl',
        'text-neutral-lightWhite'
      );
    });

    it('renders hero description', () => {
      renderHeroSection();

      const description = screen.getByText(
        /We craft immersive digital experiences/
      );
      expect(description).toBeInTheDocument();
      expect(description).toHaveClass(
        'text-lg',
        'md:text-xl',
        'text-neutral-lightTextSecondary'
      );
    });
  });

  describe('Video Functionality', () => {
    it('renders video with correct attributes', () => {
      renderHeroSection();

      const video = screen.getByRole('video');
      expect(video).toHaveAttribute('src', mockHeroVideo.src);
      expect(video).toHaveAttribute('poster', mockHeroVideo.poster);
      expect(video).toHaveAttribute('autoPlay');
      expect(video).toHaveAttribute('muted');
      expect(video).toHaveAttribute('loop');
      expect(video).toHaveAttribute('playsInline');
    });

    it('applies cinematic filters to video', () => {
      renderHeroSection();

      const video = screen.getByRole('video');
      expect(video).toHaveStyle({
        filter: 'brightness(0.7) contrast(1.1)',
      });
    });

    it('handles video loading states', async () => {
      renderHeroSection();

      const video = screen.getByRole('video');

      // Initially video should be present but may not be loaded
      expect(video).toBeInTheDocument();

      // Simulate video load
      video.dispatchEvent(new Event('loadedmetadata'));

      await waitFor(() => {
        expect(video).toBeVisible();
      });
    });

    it('handles video error with fallback image', async () => {
      renderHeroSection();

      const video = screen.getByRole('video');

      // Simulate video error
      video.dispatchEvent(new Event('error'));

      await waitFor(() => {
        // Should show fallback image instead of video
        expect(screen.queryByRole('video')).not.toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
      });
    });
  });

  describe('Interactive Elements', () => {
    it('renders primary CTA button with cinematic effects', () => {
      renderHeroSection();

      const primaryButton = screen.getByText('Start Your Journey');
      expect(primaryButton).toBeInTheDocument();
      expect(primaryButton).toHaveClass(
        'bg-gradient-to-r',
        'from-[var(--color-secondary)]',
        'to-[var(--accent-gold-light-lighter)]',
        'text-white',
        'px-10',
        'py-5',
        'rounded-xl',
        'font-semibold',
        'text-xl'
      );
    });

    it('renders secondary CTA button with glass morphism', () => {
      renderHeroSection();

      const secondaryButton = screen.getByText('Watch Our Story');
      expect(secondaryButton).toBeInTheDocument();
      expect(secondaryButton).toHaveClass(
        'bg-white/15',
        'hover:bg-white/25',
        'text-white',
        'backdrop-blur-md',
        'border',
        'border-white/30'
      );
    });

    it('renders logo carousel with trusted by text', () => {
      renderHeroSection();

      expect(
        screen.getByText('Trusted by industry leaders')
      ).toBeInTheDocument();

      // Check for logo items
      expect(screen.getByText('Orson Vision')).toBeInTheDocument();
      expect(screen.getByText('Cinematic')).toBeInTheDocument();
      expect(screen.getByText('Humanism')).toBeInTheDocument();
      expect(screen.getByText('Creative')).toBeInTheDocument();
      expect(screen.getByText('Digital')).toBeInTheDocument();
      expect(screen.getByText('Innovation')).toBeInTheDocument();
    });
  });

  describe('Cinematic Effects', () => {
    it('applies cinematic overlays', () => {
      renderHeroSection();

      const section = screen.getByRole('banner');
      expect(section).toHaveClass(
        'relative',
        'min-h-screen',
        'overflow-hidden'
      );
    });

    it('renders floating cinematic elements', () => {
      renderHeroSection();

      // Check for floating elements (they may not have specific text content)
      const floatingElements = document.querySelectorAll('.absolute');
      expect(floatingElements.length).toBeGreaterThan(0);
    });

    it('applies text shadows for cinematic typography', () => {
      renderHeroSection();

      const title = screen.getByText(
        'Cinematic Humanism in Digital Innovation'
      );
      expect(title).toHaveStyle({
        textShadow: expect.stringContaining('rgba(0, 0, 0, 0.6)'),
      });
    });
  });

  describe('Responsive Design', () => {
    it('applies responsive typography classes', () => {
      renderHeroSection();

      const title = screen.getByText(
        'Cinematic Humanism in Digital Innovation'
      );
      expect(title).toHaveClass('text-6xl', 'md:text-8xl');

      const subtitle = screen.getByText('Where creativity meets technology');
      expect(subtitle).toHaveClass('text-2xl', 'md:text-3xl');
    });

    it('renders responsive button layout', () => {
      renderHeroSection();

      const buttonContainer =
        screen.getByText('Start Your Journey').parentElement;
      expect(buttonContainer).toHaveClass('flex', 'flex-col', 'sm:flex-row');
    });
  });

  describe('Accessibility', () => {
    it('has proper semantic structure', () => {
      renderHeroSection();

      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('provides proper alt text for images', () => {
      renderHeroSection();

      // Simulate video error to show fallback image
      const video = screen.getByRole('video');
      video.dispatchEvent(new Event('error'));

      waitFor(() => {
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('alt', mockFallbackImage.alt);
      });
    });

    it('has proper color contrast for text', () => {
      renderHeroSection();

      const title = screen.getByText(
        'Cinematic Humanism in Digital Innovation'
      );
      expect(title).toHaveClass('text-white');

      const subtitle = screen.getByText('Where creativity meets technology');
      expect(subtitle).toHaveClass('text-neutral-lightWhite');
    });
  });

  describe('Performance', () => {
    it('uses priority loading for critical images', () => {
      renderHeroSection();

      // Simulate video error to show fallback image
      const video = screen.getByRole('video');
      video.dispatchEvent(new Event('error'));

      waitFor(() => {
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('priority');
      });
    });

    it('applies proper image sizing', () => {
      renderHeroSection();

      // Simulate video error to show fallback image
      const video = screen.getByRole('video');
      video.dispatchEvent(new Event('error'));

      waitFor(() => {
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('sizes', '100vw');
        expect(image).toHaveAttribute('quality', '90');
      });
    });
  });

  describe('Asset Management Integration', () => {
    it('calls asset management functions', () => {
      renderHeroSection();

      expect(getHeroVideo).toHaveBeenCalled();
      expect(getRandomAsset).toHaveBeenCalledWith('home', 'hero');
    });

    it('uses correct asset paths', () => {
      renderHeroSection();

      const video = screen.getByRole('video');
      expect(video).toHaveAttribute('src', mockHeroVideo.src);
      expect(video).toHaveAttribute('poster', mockHeroVideo.poster);
    });
  });
});
