import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SolutionsMatrixSection from '@/components/sections/SolutionsMatrixSection';

// Mock asset management
jest.mock('@/lib/asset-management', () => ({
  getAsset: jest.fn(),
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
        'solutions.digitalInnovation.title': 'Digital Innovation',
        'solutions.digitalInnovation.subtitle':
          'Transforming visions into compelling digital narratives',
        'solutions.digitalInnovation.description':
          'We transform your vision into compelling digital narratives',
        'solutions.creativeDesign.title': 'Creative Design',
        'solutions.creativeDesign.subtitle':
          'Crafting compelling visual narratives',
        'solutions.creativeDesign.description':
          'We craft compelling visual narratives',
        'solutions.contentCreation.title': 'Content Creation',
        'solutions.contentCreation.subtitle':
          'Amplifying your voice through cinematic storytelling',
        'solutions.contentCreation.description':
          'We amplify your voice through cinematic storytelling',
        'solutions.technologySolutions.title': 'Technology Solutions',
        'solutions.technologySolutions.subtitle':
          'Crafting seamless technology experiences',
        'solutions.technologySolutions.description':
          'We craft seamless technology experiences',
        'solutions.strategicConsulting.title': 'Strategic Consulting',
        'solutions.strategicConsulting.subtitle':
          'Unearthing your unique potential',
        'solutions.strategicConsulting.description':
          'We unearth your unique potential',
      };
      return translations[key] || key;
    },
  }),
  LanguageProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('SolutionsMatrixSection', () => {
  const mockAsset = {
    src: '/test-solution-image.jpg',
    alt: 'Test solution image',
  };

  beforeEach(() => {
    jest.clearAllMocks();
    const { getAsset } = jest.requireMock('@/lib/asset-management');
    (getAsset as any).mockReturnValue(mockAsset);
  });

  it('renders the solutions matrix section', () => {
    render(<SolutionsMatrixSection />);

    expect(screen.getByText('Digital Innovation')).toBeInTheDocument();
    expect(screen.getByText('Creative Design')).toBeInTheDocument();
    expect(screen.getByText('Content Creation')).toBeInTheDocument();
    expect(screen.getByText('Technology Solutions')).toBeInTheDocument();
    expect(screen.getByText('Strategic Consulting')).toBeInTheDocument();
  });

  it('displays solution cards with proper styling', () => {
    render(<SolutionsMatrixSection />);

    const cards = screen.getAllByRole('article');
    expect(cards.length).toBeGreaterThan(0);

    cards.forEach(card => {
      expect(card).toHaveClass('relative', 'overflow-hidden', 'rounded-xl');
    });
  });

  it('shows solution icons', () => {
    render(<SolutionsMatrixSection />);

    // Check for icon elements (they may be SVGs)
    const iconElements = document.querySelectorAll('svg');
    expect(iconElements.length).toBeGreaterThan(0);
  });

  it('displays solution descriptions', () => {
    render(<SolutionsMatrixSection />);

    expect(
      screen.getByText(
        /Transforming visions into compelling digital narratives/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Crafting compelling visual narratives/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Amplifying your voice through cinematic storytelling/)
    ).toBeInTheDocument();
  });

  it('applies cinematic styling classes', () => {
    render(<SolutionsMatrixSection />);

    const section = document.querySelector('section');
    expect(section).toHaveClass('py-20', 'bg-gradient-to-br');
  });

  it('includes proper accessibility attributes', () => {
    render(<SolutionsMatrixSection />);

    const images = screen.getAllByRole('img');
    images.forEach(image => {
      expect(image).toHaveAttribute('alt');
    });
  });
});
