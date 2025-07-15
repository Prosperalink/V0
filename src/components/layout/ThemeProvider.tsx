'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  isSystemTheme: boolean;
}

const themeContext = createContext<IThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Only run on client side
    if (typeof window !== 'undefined') {
      // Check for saved theme preference or default to system preference
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      if (savedTheme) {
        setTheme(savedTheme);
        setIsSystemTheme(false);
      } else {
        setTheme(systemTheme);
        setIsSystemTheme(true);
      }

      // Listen for system theme changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        if (isSystemTheme) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      };

      mediaQuery.addEventListener('change', handleSystemThemeChange);
      return () =>
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }

    // Return undefined for server-side rendering
    return undefined;
  }, [isSystemTheme]);

  useEffect(() => {
    if (!mounted) return;

    // Only run on client side
    if (typeof window !== 'undefined') {
      // Update document attribute and localStorage
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);

      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          'content',
          theme === 'dark' ? '#111827' : '#ffffff'
        );
      }

      // Add smooth transition class
      document.documentElement.classList.add('theme-transition');

      // Remove transition class after animation completes
      const timer = setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 300);

      return () => clearTimeout(timer);
    }
    // Return undefined for server-side rendering
    return undefined;
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    setIsSystemTheme(false);
  };

  const handleSetTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    setIsSystemTheme(false);
  };

  return (
    <themeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme: handleSetTheme,
        isSystemTheme,
      }}
    >
      {!mounted ? (
        <div style={{ visibility: 'hidden' }}>{children}</div>
      ) : (
        children
      )}
    </themeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(themeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
