// Sober Cinematic Humanism Color System - AUTHORIZED PALETTE ONLY
// Professional blue meets muted gold for trust and creativity

export const colors = {
  // Primary Blue Palette - AUTHORIZED ONLY
  primary: {
    blue: {
      lightText: '#0F1419',
      lightAccent: '#1A1F2E',
      dark: '#2D3748',
      darkLighter: '#4A5568',
    },
    gold: {
      lightPrimary: '#B45309',
      lightLighter: '#D97706',
      darkPrimary: '#D97706',
      darkLighter: '#F59E0B',
    },
  },

  // Neutral Palette - AUTHORIZED ONLY (No white in dark mode)
  neutral: {
    lightBgPrimary: '#F7FAFC',
    lightTextSecondary: '#4A5568',
    lightWhite: '#FFFFFF',
    darkTextPrimary: '#E2E8F0',
    darkTextSecondary: '#A0AEC0',
    darkBgPrimary: '#0F1419',
    darkBgSecondary: '#1A1F2E',
    darkDarker: '#0F1419',
  },

  // Semantic Colors - AUTHORIZED ONLY
  semantic: {
    success: '#059669',
    error: '#DC2626',
    info: '#0891B2',
  },

  // Thematic Accent Color - AUTHORIZED ONLY
  thematic: {
    sunset: '#D97706',
  },
};

// Color psychology mapping for emotional impact - AUTHORIZED COLORS ONLY
export const colorPsychology = {
  trust: colors.primary.blue.lightAccent,
  creativity: colors.primary.gold.lightPrimary,
  professionalism: colors.neutral.darkBgSecondary,
  warmth: colors.thematic.sunset,
  energy: colors.primary.blue.dark,
  success: colors.semantic.success,
  warning: colors.primary.gold.lightPrimary,
  error: colors.semantic.error,
  calm: colors.primary.blue.lightAccent,
  luxury: colors.primary.gold.lightLighter,
};

// Accessibility-compliant color combinations - AUTHORIZED COLORS ONLY
export const accessibleColors = {
  // High contrast combinations (4.5:1 ratio)
  highContrast: {
    primary: {
      background: colors.primary.blue.lightAccent,
      text: colors.neutral.lightWhite,
    },
    secondary: {
      background: colors.primary.gold.lightPrimary,
      text: colors.neutral.lightBgPrimary,
    },
    success: {
      background: colors.semantic.success,
      text: colors.neutral.lightWhite,
    },
    error: {
      background: colors.semantic.error,
      text: colors.neutral.lightWhite,
    },
  },
  // Medium contrast combinations (3:1 ratio for large text)
  mediumContrast: {
    primary: {
      background: colors.primary.blue.dark,
      text: colors.neutral.lightWhite,
    },
    secondary: {
      background: colors.primary.gold.lightLighter,
      text: colors.neutral.darkDarker,
    },
  },
};

// Theme-specific color mappings - AUTHORIZED COLORS ONLY
export const themeColors = {
  light: {
    background: colors.neutral.lightBgPrimary,
    foreground: colors.primary.blue.lightText,
    primary: colors.primary.blue.lightAccent,
    secondary: colors.primary.gold.lightPrimary,
    muted: colors.neutral.lightTextSecondary,
    accent: colors.primary.blue.dark,
  },
  dark: {
    background: colors.neutral.darkBgPrimary,
    foreground: colors.neutral.darkTextPrimary,
    primary: colors.primary.blue.dark,
    secondary: colors.primary.gold.darkPrimary,
    muted: colors.neutral.darkTextSecondary,
    accent: colors.primary.blue.darkLighter,
  },
};

// CSS custom properties for colors - AUTHORIZED COLORS ONLY
export const colorCSS = `
  :root {
    /* Primary Colors - AUTHORIZED ONLY */
    --color-primary-blue-light-text: ${colors.primary.blue.lightText};
    --color-primary-blue-light-accent: ${colors.primary.blue.lightAccent};
    --color-primary-blue-dark: ${colors.primary.blue.dark};
    --color-primary-blue-dark-lighter: ${colors.primary.blue.darkLighter};

    /* Gold Colors - AUTHORIZED ONLY */
    --color-primary-gold-light-primary: ${colors.primary.gold.lightPrimary};
    --color-primary-gold-light-lighter: ${colors.primary.gold.lightLighter};
    --color-primary-gold-dark-primary: ${colors.primary.gold.darkPrimary};
    --color-primary-gold-dark-lighter: ${colors.primary.gold.darkLighter};

    /* Neutral Colors - AUTHORIZED ONLY */
    --color-neutral-light-bg-primary: ${colors.neutral.lightBgPrimary};
    --color-neutral-light-text-secondary: ${colors.neutral.lightTextSecondary};
    --color-neutral-light-white: ${colors.neutral.lightWhite};
    --color-neutral-dark-text-primary: ${colors.neutral.darkTextPrimary};
    --color-neutral-dark-text-secondary: ${colors.neutral.darkTextSecondary};
    --color-neutral-dark-bg-primary: ${colors.neutral.darkBgPrimary};
    --color-neutral-dark-bg-secondary: ${colors.neutral.darkBgSecondary};
    --color-neutral-dark-darker: ${colors.neutral.darkDarker};

    /* Semantic Colors - AUTHORIZED ONLY */
    --color-semantic-success: ${colors.semantic.success};
    --color-semantic-error: ${colors.semantic.error};
    --color-semantic-info: ${colors.semantic.info};

    /* Thematic Colors - AUTHORIZED ONLY */
    --color-thematic-sunset: ${colors.thematic.sunset};

    /* Theme Colors - AUTHORIZED ONLY */
    --color-background: ${themeColors.light.background};
    --color-foreground: ${themeColors.light.foreground};
    --color-primary: ${themeColors.light.primary};
    --color-secondary: ${themeColors.light.secondary};
    --color-muted: ${themeColors.light.muted};
    --color-accent: ${themeColors.light.accent};
  }

  [data-theme='dark'] {
    --color-background: ${themeColors.dark.background};
    --color-foreground: ${themeColors.dark.foreground};
    --color-primary: ${themeColors.dark.primary};
    --color-secondary: ${themeColors.dark.secondary};
    --color-muted: ${themeColors.dark.muted};
    --color-accent: ${themeColors.dark.accent};
  }
`;

// Utility functions for authorized colors only
export function getColorValue(colorName: string): string {
  const colorMap: Record<string, string> = {
    'cinematic-blue-deep': '#0F1419',
    'cinematic-blue-rich': '#1A1F2E',
    'cinematic-blue-vibrant': '#2D3748',
    'cinematic-blue-soft': '#E2E8F0',
    'cinematic-gold-primary': '#B45309',
    'cinematic-gold-bright': '#D97706',
    'cinematic-gold-soft': '#FEF3C7',
    'cinematic-gold-deep': '#92400E',
  };

  return colorMap[colorName] || colorName;
}

export const getAccessibleTextColor = (backgroundColor: string) => {
  // Simple luminance calculation for authorized colors
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5
    ? colors.neutral.darkDarker
    : colors.neutral.darkTextPrimary;
};

export const getColorWithOpacity = (color: string, opacity: number) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
