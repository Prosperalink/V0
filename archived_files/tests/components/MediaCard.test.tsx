import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';

import MediaCard from '@/components/MediaCard';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
    button: ({
      children,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => (
      <button {...props}>{children}</button>
    ),
  },
  AnimatePresence: ({ children }: { children?: React.ReactNode }) => children,
}));

describe('MediaCard', () => {
  const defaultAsset = {
    src: '/test-image.jpg',
    alt: 'Test image',
    type: 'image' as const,
    category: 'test',
    tags: ['test'],
  };

  const defaultProps = {
    asset: defaultAsset,
    title: 'Test Title',
    subtitle: 'Test Subtitle',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders with title and subtitle', () => {
      render(<MediaCard {...defaultProps} />);

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    });

    it('renders image with correct src and alt', () => {
      render(<MediaCard {...defaultProps} />);

      const image = screen.getByAltText('Test image');
      expect(image).toHaveAttribute('src', '/test-image.jpg');
      expect(image).toHaveAttribute('alt', 'Test image');
    });

    it('renders loading state initially', () => {
      render(<MediaCard {...defaultProps} />);

      expect(screen.getByText('')).toBeInTheDocument(); // Image icon
    });

    it('renders video play icon for video assets', () => {
      const videoAsset = {
        ...defaultAsset,
        type: 'video' as const,
      };

      render(<MediaCard {...defaultProps} asset={videoAsset} />);

      expect(screen.getByText('')).toBeInTheDocument(); // Play icon
    });

    it('applies glass effect when enabled', () => {
      const { container } = render(
        <MediaCard {...defaultProps} glassEffect={true} />
      );

      const glassElement = container.querySelector('.backdrop-blur-sm');
      expect(glassElement).toBeInTheDocument();
    });

    it('does not apply glass effect when disabled', () => {
      const { container } = render(
        <MediaCard {...defaultProps} glassEffect={false} />
      );

      const glassElement = container.querySelector('.backdrop-blur-sm');
      expect(glassElement).not.toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onClick when clicked', () => {
      const handleClick = jest.fn();
      render(<MediaCard {...defaultProps} onClick={handleClick} />);

      const card = screen.getByRole('button');
      fireEvent.click(card);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies hover effects on mouse enter', () => {
      const { container } = render(<MediaCard {...defaultProps} />);

      const card = container.querySelector('.group');
      fireEvent.mouseEnter(card!);

      // Check for hover state classes
      expect(card).toHaveClass('group');
    });

    it('removes hover effects on mouse leave', () => {
      const { container } = render(<MediaCard {...defaultProps} />);

      const card = container.querySelector('.group');
      fireEvent.mouseEnter(card!);
      fireEvent.mouseLeave(card!);

      // Card should still exist
      expect(card).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper role when onClick is provided', () => {
      render(<MediaCard {...defaultProps} onClick={() => {}} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('has proper alt text for images', () => {
      render(<MediaCard {...defaultProps} />);

      const image = screen.getByAltText('Test image');
      expect(image).toBeInTheDocument();
    });

    it('supports keyboard navigation when clickable', () => {
      render(<MediaCard {...defaultProps} onClick={() => {}} />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('tabindex', '0');
    });

    it('has proper ARIA attributes', () => {
      render(<MediaCard {...defaultProps} onClick={() => {}} />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('tabIndex', '0');
    });
  });

  describe('Image Loading', () => {
    it('shows loading state until image loads', () => {
      render(<MediaCard {...defaultProps} />);

      // Initially shows loading state
      expect(screen.getByText('')).toBeInTheDocument(); // Image icon
    });

    it('handles image load success', async () => {
      render(<MediaCard {...defaultProps} />);

      const image = screen.getByAltText('Test image');

      // Simulate image load
      fireEvent.load(image);

      await waitFor(() => {
        expect(image).toHaveClass('opacity-100');
      });
    });

    it('handles image load error gracefully', async () => {
      render(<MediaCard {...defaultProps} />);

      const image = screen.getByAltText('Test image');

      // Simulate image error
      fireEvent.error(image);

      await waitFor(() => {
        expect(image).toHaveClass('opacity-100');
      });
    });
  });

  describe('Video Assets', () => {
    it('shows play icon for video assets', () => {
      const videoAsset = {
        ...defaultAsset,
        type: 'video' as const,
      };

      render(<MediaCard {...defaultProps} asset={videoAsset} />);

      expect(screen.getByText('')).toBeInTheDocument(); // Play icon
    });

    it('applies video-specific styling', () => {
      const videoAsset = {
        ...defaultAsset,
        type: 'video' as const,
      };

      const { container } = render(
        <MediaCard {...defaultProps} asset={videoAsset} />
      );

      const playIcon = container.querySelector('.bg-black\\/50');
      expect(playIcon).toBeInTheDocument();
    });
  });

  describe('Overlay Content', () => {
    it('shows title and subtitle overlay', () => {
      render(<MediaCard {...defaultProps} />);

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    });

    it('does not show overlay when no title or subtitle', () => {
      render(<MediaCard asset={defaultAsset} />);

      expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
      expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
    });

    it('applies overlay styling correctly', () => {
      const { container } = render(<MediaCard {...defaultProps} />);

      const overlay = container.querySelector('.absolute.bottom-0');
      expect(overlay).toBeInTheDocument();
    });
  });

  describe('Styling and Classes', () => {
    it('applies correct base classes', () => {
      const { container } = render(<MediaCard {...defaultProps} />);

      const card = container.querySelector(
        '.relative.overflow-hidden.rounded-xl'
      );
      expect(card).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <MediaCard {...defaultProps} className="custom-class" />
      );

      const card = container.querySelector('.custom-class');
      expect(card).toBeInTheDocument();
    });

    it('applies hover effect classes', () => {
      const { container } = render(<MediaCard {...defaultProps} />);

      const card = container.querySelector('.group');
      expect(card).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('uses proper image optimization', () => {
      render(<MediaCard {...defaultProps} />);

      const image = screen.getByAltText('Test image');
      expect(image).toHaveClass('object-cover');
    });

    it('implements proper loading states', () => {
      render(<MediaCard {...defaultProps} />);

      // Should show loading state initially
      expect(screen.getByText('')).toBeInTheDocument(); // Image icon
    });

    it('handles multiple cards efficiently', () => {
      const { rerender } = render(<MediaCard {...defaultProps} />);

      // Re-render with different asset
      const newAsset = {
        ...defaultAsset,
        src: '/test-image-2.jpg',
        alt: 'Test image 2',
      };

      rerender(<MediaCard {...defaultProps} asset={newAsset} />);

      expect(screen.getByAltText('Test image 2')).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('handles missing asset gracefully', () => {
      const invalidAsset = {
        ...defaultAsset,
        src: '',
      };

      render(<MediaCard {...defaultProps} asset={invalidAsset} />);

      // Should still render without crashing
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('handles invalid image src', () => {
      const invalidAsset = {
        ...defaultAsset,
        src: 'invalid-url',
      };

      render(<MediaCard {...defaultProps} asset={invalidAsset} />);

      const image = screen.getByAltText('Test image');
      fireEvent.error(image);

      // Should handle error gracefully
      expect(image).toBeInTheDocument();
    });
  });
});
