import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Orson Vision Cinematic Solutions Brand Colors
        'deep-blue': '#0a0f1a',
        'dark-tone': '#1c1c1c',
        'golden-accent': '#d4af37',
        'text-white': '#f0f0f0',
        'text-subtle': '#a0a0a0',
        'background-dark': '#0d1117',
        'background-blue-deep': '#02040a',
        'accent-gold': '#d4af37',
        'text-light': '#e6edf3',
        'text-muted': '#8b949e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        cinematic: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'slide-in-bottom': 'slideInFromBottom 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInFromBottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
