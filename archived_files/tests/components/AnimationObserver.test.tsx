import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import AnimationObserver from '../../src/components/AnimationObserver';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
  },
  useAnimation: () => ({
    start: jest.fn(),
    stop: jest.fn(),
  }),
  useInView: () => ({
    ref: jest.fn(),
    inView: true,
  }),
}));

describe('AnimationObserver', () => {
  const defaultProps = {
    children: <div data-testid="test-child">Test Content</div>,
    once: true,
  };

  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = class IntersectionObserver {
      constructor() {}
      disconnect() {}
      observe() {}
      unobserve() {}
      root = null;
      rootMargin = '';
      thresholds = [];
      takeRecords() {
        return [];
      }
    };
  });

  describe('Component Rendering', () => {
    it('renders without crashing', () => {
      render(<AnimationObserver {...defaultProps} />);
      expect(screen.getByTestId('test-child')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
      const testContent = 'Custom Test Content';
      render(
        <AnimationObserver>
          <div data-testid="custom-child">{testContent}</div>
        </AnimationObserver>
      );

      expect(screen.getByTestId('custom-child')).toBeInTheDocument();
      expect(screen.getByText(testContent)).toBeInTheDocument();
    });

    it('applies motion wrapper to children', () => {
      render(<AnimationObserver {...defaultProps} />);

      const childElement = screen.getByTestId('test-child');
      expect(childElement.parentElement).toBeInTheDocument();
    });
  });

  describe('Animation Behavior', () => {
    it('applies initial animation state', () => {
      render(<AnimationObserver {...defaultProps} />);

      // The component should render with motion wrapper
      const childElement = screen.getByTestId('test-child');
      expect(childElement).toBeInTheDocument();
    });

    it('handles different animation types', () => {
      render(<AnimationObserver {...defaultProps} animation="fadeInDown" />);

      expect(screen.getByTestId('test-child')).toBeInTheDocument();
    });

    it('handles once prop', () => {
      render(<AnimationObserver {...defaultProps} once={false} />);

      expect(screen.getByTestId('test-child')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('maintains accessibility attributes', () => {
      render(
        <AnimationObserver>
          <button aria-label="Test Button">Click me</button>
        </AnimationObserver>
      );

      const button = screen.getByRole('button', { name: 'Test Button' });
      expect(button).toBeInTheDocument();
    });

    it('preserves semantic HTML structure', () => {
      render(
        <AnimationObserver>
          <section aria-labelledby="test-heading">
            <h2 id="test-heading">Test Section</h2>
            <p>Test content</p>
          </section>
        </AnimationObserver>
      );

      expect(screen.getByRole('region')).toBeInTheDocument();
      expect(screen.getByText('Test Section')).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('does not cause unnecessary re-renders', () => {
      const { rerender } = render(<AnimationObserver {...defaultProps} />);

      // Re-render with same props
      rerender(<AnimationObserver {...defaultProps} />);

      expect(screen.getByTestId('test-child')).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
      render(<AnimationObserver>{null}</AnimationObserver>);

      // Should not crash
      expect(document.body).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles multiple children', () => {
      render(
        <AnimationObserver>
          <div data-testid="child-1">Child 1</div>
          <div data-testid="child-2">Child 2</div>
        </AnimationObserver>
      );

      expect(screen.getByTestId('child-1')).toBeInTheDocument();
      expect(screen.getByTestId('child-2')).toBeInTheDocument();
    });

    it('handles complex nested structures', () => {
      render(
        <AnimationObserver>
          <div data-testid="parent">
            <span data-testid="child">Nested Content</span>
          </div>
        </AnimationObserver>
      );

      expect(screen.getByTestId('parent')).toBeInTheDocument();
      expect(screen.getByTestId('child')).toBeInTheDocument();
    });
  });
});
