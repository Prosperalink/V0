import { Inter } from 'next/font/google';

// Inter font with variable weights for cinematic typography
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Typography scale system for consistent hierarchy
export const typography = {
  // Display sizes for hero sections
  display: {
    '2xl': 'text-6xl md:text-8xl font-bold tracking-tight leading-none',
    xl: 'text-5xl md:text-7xl font-bold tracking-tight leading-none',
    lg: 'text-4xl md:text-6xl font-bold tracking-tight leading-tight',
    md: 'text-3xl md:text-5xl font-bold tracking-tight leading-tight',
    sm: 'text-2xl md:text-4xl font-bold tracking-tight leading-tight',
  },
  // Heading sizes for sections
  heading: {
    h1: 'text-4xl md:text-6xl font-bold tracking-tight leading-tight',
    h2: 'text-3xl md:text-5xl font-semibold tracking-tight leading-tight',
    h3: 'text-2xl md:text-4xl font-semibold tracking-tight leading-tight',
    h4: 'text-xl md:text-3xl font-medium tracking-tight leading-tight',
    h5: 'text-lg md:text-2xl font-medium tracking-tight leading-tight',
    h6: 'text-base md:text-xl font-medium tracking-tight leading-tight',
  },
  // Body text sizes
  body: {
    lg: 'text-lg md:text-xl leading-relaxed',
    md: 'text-base md:text-lg leading-relaxed',
    sm: 'text-sm md:text-base leading-relaxed',
    xs: 'text-xs md:text-sm leading-relaxed',
  },
  // Caption and small text
  caption: {
    lg: 'text-sm md:text-base text-muted-foreground leading-relaxed',
    md: 'text-xs md:text-sm text-muted-foreground leading-relaxed',
    sm: 'text-xs text-muted-foreground leading-relaxed',
  },
  // Button text sizes
  button: {
    lg: 'text-lg font-semibold tracking-wide',
    md: 'text-base font-semibold tracking-wide',
    sm: 'text-sm font-semibold tracking-wide',
  },
};

// CSS custom properties for typography
export const typographyCSS = `
  :root {
    --font-inter: ${inter.style.fontFamily};
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* Typography scale */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;
    --text-6xl: 3.75rem;
    --text-7xl: 4.5rem;
    --text-8xl: 6rem;
    --text-9xl: 8rem;

    /* Line heights */
    --leading-none: 1;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;

    /* Letter spacing */
    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;
  }
`;

// Animation classes for text reveals
export const textAnimations = {
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  fadeInLeft: 'animate-fade-in-left',
  fadeInRight: 'animate-fade-in-right',
  stagger: 'animate-stagger',
  typewriter: 'animate-typewriter',
};

// Utility function for responsive typography
export const getResponsiveText = (size: string) => {
  if (size in typography.display) {
    return typography.display[size as keyof typeof typography.display];
  }
  if (size in typography.heading) {
    return typography.heading[size as keyof typeof typography.heading];
  }
  if (size in typography.body) {
    return typography.body[size as keyof typeof typography.body];
  }
  return '';
};
