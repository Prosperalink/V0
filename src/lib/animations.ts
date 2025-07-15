// Cinematic Humanism Animation System
// Advanced animations and micro-interactions for immersive storytelling

import { TargetAndTransition, Transition, Variants } from 'framer-motion';

// ===== CINEMATIC ANIMATION VARIANTS =====

export const cinematicVariants = {
  // Hero Animations
  heroTitle: {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  },

  heroSubtitle: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  heroDescription: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Enhanced Section Animations
  sectionFadeIn: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  sectionStagger: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Enhanced Card Animations with Glass Effect
  cardHover: {
    initial: { scale: 1, y: 0, rotateX: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      rotateX: 2,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  cardTap: {
    initial: { scale: 1 },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Enhanced Button Animations
  buttonHover: {
    initial: { scale: 1, y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Cinematic Button with Glow Effect
  buttonCinematic: {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      filter: 'brightness(1)',
    },
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow:
        '0 10px 25px -3px rgba(0, 0, 0, 0.2), 0 0 20px rgba(59, 130, 246, 0.3)',
      filter: 'brightness(1.1)',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Navigation Animations
  navItem: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Enhanced Media Animations
  mediaFade: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  mediaSlide: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Cinematic Media Transitions
  mediaCinematic: {
    hidden: { opacity: 0, scale: 1.2, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Enhanced Text Animations
  textReveal: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  textStagger: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Cinematic Text Typewriter Effect
  textTypewriter: {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05,
      },
    },
  },

  // Enhanced Loading Animations
  loadingPulse: {
    initial: { opacity: 0.5, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Cinematic Loading Spinner
  loadingCinematic: {
    initial: { rotate: 0, scale: 0.8 },
    animate: {
      rotate: 360,
      scale: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },

  // Enhanced Scroll Animations
  scrollFadeIn: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  scrollSlideIn: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Cinematic Scroll with Parallax
  scrollCinematic: {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Enhanced Parallax Animations
  parallax: {
    hidden: { y: 100 },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Cinematic Parallax with Depth
  parallaxCinematic: {
    hidden: { y: 150, scale: 0.8, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Enhanced Modal Animations
  modalBackdrop: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Cinematic Modal with Glass Effect
  modalCinematic: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
      backdropFilter: 'blur(0px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      backdropFilter: 'blur(10px)',
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15,
      backdropFilter: 'blur(0px)',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Micro-interaction Animations
  microHover: {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  microTap: {
    initial: { scale: 1 },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Glass Morphism Animations
  glassHover: {
    initial: {
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    hover: {
      backdropFilter: 'blur(15px)',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Floating Animation
  float: {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // Pulse Animation with Color
  pulseColor: {
    initial: {
      scale: 1,
      boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)',
    },
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        '0 0 0 0 rgba(59, 130, 246, 0.7)',
        '0 0 0 10px rgba(59, 130, 246, 0)',
        '0 0 0 0 rgba(59, 130, 246, 0)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
};

// ===== MICRO-INTERACTION VARIANTS =====

export const microInteractions = {
  // Hover Effects
  subtleHover: {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Focus Effects
  focusRing: {
    initial: { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)' },
    focus: {
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.3)',
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Loading States
  loadingSpinner: {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },

  // Success States
  successCheck: {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Error States
  errorShake: {
    initial: { x: 0 },
    animate: {
      x: [-10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
};

// ===== PERFORMANCE OPTIMIZED TRANSITIONS =====

export const optimizedTransitions: Record<string, Transition> = {
  // Fast transitions for micro-interactions
  fast: {
    duration: 0.15,
    ease: [0.25, 0.46, 0.45, 0.94],
  },

  // Medium transitions for UI elements
  medium: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
  },

  // Slow transitions for major animations
  slow: {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94],
  },

  // Stagger transitions for lists
  stagger: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
    staggerChildren: 0.1,
  },

  // Spring transitions for natural movement
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },

  // Bounce transitions for playful elements
  bounce: {
    type: 'spring',
    stiffness: 200,
    damping: 10,
  },
};

// ===== SCROLL-BASED ANIMATIONS =====

export const scrollAnimations = {
  // Fade in on scroll
  fadeInOnScroll: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Slide in from left
  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Slide in from right
  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Scale in on scroll
  scaleInOnScroll: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Parallax effect
  parallaxEffect: {
    hidden: { y: 100 },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
};

// ===== UTILITY FUNCTIONS =====

/**
 * Create staggered animation variants
 */
export function createStaggerVariants(
  baseVariant: Variants,
  staggerDelay: number = 0.1
): Variants {
  const newVariant = { ...baseVariant };
  if (newVariant.visible && typeof newVariant.visible === 'object') {
    const visible = newVariant.visible as TargetAndTransition;
    if (visible.transition) {
      visible.transition = {
        ...visible.transition,
        staggerChildren: staggerDelay,
      };
    }
  }
  return newVariant;
}

/**
 * Create responsive animation variants
 */
export function createResponsiveVariants(
  baseVariant: Variants,
  breakpoint: 'sm' | 'md' | 'lg' | 'xl' = 'md'
): Variants {
  const responsiveVariant = { ...baseVariant };

  // Adjust animations for mobile
  if (breakpoint === 'sm') {
    if (
      responsiveVariant.visible &&
      typeof responsiveVariant.visible === 'object'
    ) {
      const visible = responsiveVariant.visible as TargetAndTransition;
      if (
        visible.transition &&
        typeof visible.transition === 'object' &&
        'duration' in visible.transition &&
        typeof (visible.transition as { duration?: number }).duration ===
          'number'
      ) {
        (visible.transition as { duration: number }).duration *= 0.8;
      }
    }
  }

  return responsiveVariant;
}

/**
 * Create performance-optimized animation
 */
export function createOptimizedAnimation(
  variant: Variants,
  willChange: string = 'transform'
): Variants {
  const newVariant = { ...variant };
  if (newVariant.visible && typeof newVariant.visible === 'object') {
    const visible = newVariant.visible as TargetAndTransition;
    visible.style = {
      willChange,
    };
  }
  return newVariant;
}

/**
 * Create reduced motion animation
 */
export function createReducedMotionAnimation(baseVariant: Variants): Variants {
  const newVariant = { ...baseVariant };
  if (newVariant.visible && typeof newVariant.visible === 'object') {
    const visible = newVariant.visible as TargetAndTransition;
    visible.transition = {
      duration: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    };
  }
  return newVariant;
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get appropriate animation based on user preferences
 */
export function getAccessibleAnimation(
  fullAnimation: Variants,
  reducedAnimation?: Variants
): Variants {
  if (prefersReducedMotion()) {
    return reducedAnimation || createReducedMotionAnimation(fullAnimation);
  }
  return fullAnimation;
}

// ===== ANIMATION HOOKS =====

/**
 * Hook for scroll-triggered animations
 */
export function useScrollAnimation(
  threshold: number = 0.1,
  triggerOnce: boolean = true
) {
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: {
      once: triggerOnce,
      amount: threshold,
    },
  };
}

/**
 * Hook for hover animations
 */
export function useHoverAnimation() {
  return {
    whileHover: 'hover',
    whileTap: 'tap',
  };
}

/**
 * Hook for focus animations
 */
export function useFocusAnimation() {
  return {
    whileFocus: 'focus',
  };
}
