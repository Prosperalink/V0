// Cinematic Humanism Layout System
// Advanced CSS Grid with intentional asymmetry and cinematic compositions

// Responsive breakpoints for mobile-first approach
export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
};

// Spacing scale for consistent rhythm
export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
  '5xl': '8rem', // 128px
  '6xl': '12rem', // 192px
};

// Grid system for cinematic layouts
export const gridSystem = {
  // Standard grid columns
  columns: {
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    12: 'repeat(12, minmax(0, 1fr))',
  },
  // Cinematic grid patterns
  cinematic: {
    hero: '1fr 2fr 1fr',
    asymmetric: '1fr 3fr 1fr',
    golden: '1fr 1.618fr 1fr',
    dramatic: '1fr 4fr 1fr',
    balanced: '1fr 1fr 1fr',
  },
  // Responsive grid patterns
  responsive: {
    mobile: '1fr',
    tablet: 'repeat(2, 1fr)',
    desktop: 'repeat(3, 1fr)',
    wide: 'repeat(4, 1fr)',
  },
};

// Layout containers for different content types
export const layoutContainers = {
  // Hero section layouts
  hero: {
    fullscreen: 'min-h-screen grid place-items-center',
    cinematic:
      'min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-8 items-center',
    split: 'min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center',
    centered: 'min-h-screen flex items-center justify-center',
  },
  // Content section layouts
  content: {
    narrow: 'max-w-4xl mx-auto px-4',
    standard: 'max-w-6xl mx-auto px-4',
    wide: 'max-w-7xl mx-auto px-4',
    full: 'w-full px-4',
  },
  // Grid layouts
  grid: {
    cards: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    masonry: 'columns-1 md:columns-2 lg:columns-3 gap-6',
    gallery: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
    showcase: 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
  },
  // Navigation layouts
  navigation: {
    horizontal: 'flex items-center justify-between',
    vertical: 'flex flex-col space-y-4',
    sidebar: 'grid grid-cols-1 lg:grid-cols-4 gap-8',
  },
};

// Cinematic composition patterns
export const cinematicCompositions = {
  // Rule of thirds
  ruleOfThirds: {
    container: 'grid grid-cols-3 grid-rows-3 gap-4',
    primary: 'col-span-2 row-span-2',
    secondary: 'col-span-1 row-span-1',
    accent: 'col-span-1 row-span-1',
  },
  // Golden ratio
  goldenRatio: {
    container: 'grid grid-cols-5 gap-4',
    primary: 'col-span-3',
    secondary: 'col-span-2',
  },
  // Asymmetric balance
  asymmetric: {
    container: 'grid grid-cols-12 gap-4',
    primary: 'col-span-8',
    secondary: 'col-span-4',
    accent: 'col-span-3',
  },
  // Dramatic composition
  dramatic: {
    container: 'grid grid-cols-1 lg:grid-cols-5 gap-8',
    hero: 'lg:col-span-3',
    content: 'lg:col-span-2',
  },
};

// Spacing utilities for visual hierarchy
export const spacingUtilities = {
  // Section spacing
  section: {
    small: 'py-8 md:py-12',
    medium: 'py-12 md:py-16',
    large: 'py-16 md:py-24',
    xlarge: 'py-24 md:py-32',
  },
  // Component spacing
  component: {
    tight: 'space-y-2',
    normal: 'space-y-4',
    loose: 'space-y-8',
    xloose: 'space-y-12',
  },
  // Padding utilities
  padding: {
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
    '2xl': 'p-16',
  },
  // Margin utilities
  margin: {
    xs: 'm-2',
    sm: 'm-4',
    md: 'm-6',
    lg: 'm-8',
    xl: 'm-12',
    '2xl': 'm-16',
  },
};

// Z-index system for layering
export const zIndex = {
  base: 0,
  content: 1,
  navigation: 10,
  modal: 20,
  overlay: 30,
  tooltip: 40,
  dropdown: 50,
  toast: 60,
};

// Aspect ratios for responsive media
export const aspectRatios = {
  square: 'aspect-square',
  video: 'aspect-video',
  cinema: 'aspect-[21/9]',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/10]',
  ultrawide: 'aspect-[21/9]',
};

// Container queries for component-level responsiveness
export const containerQueries = {
  // Container query breakpoints
  breakpoints: {
    sm: '@container (min-width: 640px)',
    md: '@container (min-width: 768px)',
    lg: '@container (min-width: 1024px)',
    xl: '@container (min-width: 1280px)',
  },
  // Container query utilities
  utilities: {
    container: 'container-type-inline-size',
    responsive: 'container-type-size',
  },
};

// CSS Grid utilities for complex layouts
export const gridUtilities = {
  // Grid template areas
  areas: {
    header: '"header"',
    main: '"main"',
    sidebar: '"sidebar"',
    footer: '"footer"',
    'header-main': '"header header" "main main"',
    'header-sidebar': '"header header" "sidebar main"',
    'sidebar-main': '"sidebar main"',
    'main-sidebar': '"main sidebar"',
  },
  // Grid alignment
  alignment: {
    start: 'justify-items-start',
    center: 'justify-items-center',
    end: 'justify-items-end',
    stretch: 'justify-items-stretch',
  },
  // Grid placement
  placement: {
    'start-start': 'justify-self-start self-start',
    'start-center': 'justify-self-start self-center',
    'start-end': 'justify-self-start self-end',
    'center-start': 'justify-self-center self-start',
    'center-center': 'justify-self-center self-center',
    'center-end': 'justify-self-center self-end',
    'end-start': 'justify-self-end self-start',
    'end-center': 'justify-self-end self-center',
    'end-end': 'justify-self-end self-end',
  },
};

// Layout components for common patterns
export const layoutComponents = {
  // Hero section
  hero: {
    fullscreen: 'min-h-screen flex items-center justify-center',
    split: 'min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center',
    centered:
      'min-h-screen flex flex-col items-center justify-center text-center',
    cinematic: 'min-h-screen relative overflow-hidden',
  },
  // Content sections
  section: {
    standard: 'py-16 md:py-24',
    narrow: 'max-w-4xl mx-auto px-4',
    wide: 'max-w-7xl mx-auto px-4',
    full: 'w-full',
  },
  // Navigation
  navigation: {
    horizontal: 'flex items-center justify-between',
    vertical: 'flex flex-col space-y-4',
    sidebar: 'grid grid-cols-1 lg:grid-cols-4 gap-8',
  },
  // Cards
  card: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    masonry: 'columns-1 md:columns-2 lg:columns-3 gap-6',
    gallery: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
  },
};

// Utility functions for layout
export const createGridLayout = (columns: number, gap: string = '1rem') => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
  gap,
});

export const createFlexLayout = (
  direction: 'row' | 'column' = 'row',
  justify: string = 'flex-start',
  align: string = 'stretch'
) => ({
  display: 'flex',
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
});

export const createResponsiveLayout = (
  breakpoint: keyof typeof breakpoints,
  layout: Record<string, unknown>
) => ({
  [`@media (min-width: ${breakpoints[breakpoint]})`]: {
    ...layout,
  },
});

// CSS custom properties for layout
export const layoutCSS = `
  :root {
    /* Breakpoints */
    --breakpoint-xs: ${breakpoints.xs};
    --breakpoint-sm: ${breakpoints.sm};
    --breakpoint-md: ${breakpoints.md};
    --breakpoint-lg: ${breakpoints.lg};
    --breakpoint-xl: ${breakpoints.xl};
    --breakpoint-2xl: ${breakpoints['2xl']};
    --breakpoint-3xl: ${breakpoints['3xl']};

    /* Spacing */
    --spacing-xs: ${spacing.xs};
    --spacing-sm: ${spacing.sm};
    --spacing-md: ${spacing.md};
    --spacing-lg: ${spacing.lg};
    --spacing-xl: ${spacing.xl};
    --spacing-2xl: ${spacing['2xl']};
    --spacing-3xl: ${spacing['3xl']};
    --spacing-4xl: ${spacing['4xl']};
    --spacing-5xl: ${spacing['5xl']};
    --spacing-6xl: ${spacing['6xl']};

    /* Z-index */
    --z-base: ${zIndex.base};
    --z-content: ${zIndex.content};
    --z-navigation: ${zIndex.navigation};
    --z-modal: ${zIndex.modal};
    --z-overlay: ${zIndex.overlay};
    --z-tooltip: ${zIndex.tooltip};
    --z-dropdown: ${zIndex.dropdown};
    --z-toast: ${zIndex.toast};
  }
`;
