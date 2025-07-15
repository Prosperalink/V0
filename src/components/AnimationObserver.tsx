'use client';

import { Variants, motion, useAnimation, useInView } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';

// Extracted animation variants for better maintainability
const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  cinematicEntrance: {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  dramaticReveal: {
    hidden: { opacity: 0, scale: 0.5, rotateY: 90 },
    visible: { opacity: 1, scale: 1, rotateY: 0 },
  },
  heroEntrance: {
    hidden: { opacity: 0, y: 200, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  textReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

// Props interface for AnimationObserver
interface IAnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: keyof typeof ANIMATION_VARIANTS;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

// Extracted hook for animation logic
const useAnimationLogic = (props: IAnimationObserverProps) => {
  const {
    animation = 'fadeInUp',
    delay = 0,
    duration,
    once = true,
    direction = 'up',
    distance = 30,
    stagger = false,
    staggerDelay = 0.1,
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: '-100px',
  });
  const controls = useAnimation();

  // Custom animation based on direction and distance
  const getCustomAnimation = useCallback((): Variants => {
    const baseAnimation = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    switch (direction) {
      case 'up':
        return {
          ...baseAnimation,
          hidden: { ...baseAnimation.hidden, y: distance },
          visible: { ...baseAnimation.visible, y: 0 },
        };
      case 'down':
        return {
          ...baseAnimation,
          hidden: { ...baseAnimation.hidden, y: -distance },
          visible: { ...baseAnimation.visible, y: 0 },
        };
      case 'left':
        return {
          ...baseAnimation,
          hidden: { ...baseAnimation.hidden, x: -distance },
          visible: { ...baseAnimation.visible, x: 0 },
        };
      case 'right':
        return {
          ...baseAnimation,
          hidden: { ...baseAnimation.hidden, x: distance },
          visible: { ...baseAnimation.visible, x: 0 },
        };
      default:
        return baseAnimation;
    }
  }, [direction, distance]);

  // Get animation variants
  const getAnimationVariants = useCallback((): Variants => {
    if (animation && ANIMATION_VARIANTS[animation]) {
      return ANIMATION_VARIANTS[animation];
    }
    return getCustomAnimation();
  }, [animation, getCustomAnimation]);

  // Get stagger variants
  const getStaggerVariants = useCallback((): Variants => {
    return {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };
  }, [staggerDelay, delay]);

  const variants = useMemo(() => {
    return stagger ? getStaggerVariants() : getAnimationVariants();
  }, [stagger, getStaggerVariants, getAnimationVariants]);

  const transition = useMemo(
    () => ({
      duration: duration || 0.8,
      ease: [0.4, 0, 0.2, 1],
      delay,
    }),
    [duration, delay]
  );

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return {
    ref,
    variants,
    transition,
    controls,
  };
};

// Main AnimationObserver component
export default function AnimationObserver(props: IAnimationObserverProps) {
  const { children, className = '' } = props;
  const { ref, variants, transition, controls } = useAnimationLogic(props);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      exit="hidden"
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

// Extracted convenience component factory
const createConvenienceComponent = (
  animation: keyof typeof ANIMATION_VARIANTS
) => {
  const Component = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <AnimationObserver animation={animation} className={className || ''}>
      {children}
    </AnimationObserver>
  );
  Component.displayName = `ConvenienceComponent(${animation})`;
  return Component;
};

// Convenience components using factory pattern
export const FadeInUp = createConvenienceComponent('fadeInUp');
export const FadeInDown = createConvenienceComponent('fadeInDown');
export const FadeInLeft = createConvenienceComponent('fadeInLeft');
export const FadeInRight = createConvenienceComponent('fadeInRight');
export const ScaleIn = createConvenienceComponent('scaleIn');
export const SlideInUp = createConvenienceComponent('slideInUp');
export const CinematicEntrance =
  createConvenienceComponent('cinematicEntrance');
export const DramaticReveal = createConvenienceComponent('dramaticReveal');
export const HeroEntrance = createConvenienceComponent('heroEntrance');
export const TextReveal = createConvenienceComponent('textReveal');

// Special case for StaggerContainer
export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) => (
  <AnimationObserver
    animation="staggerContainer"
    className={className || ''}
    staggerDelay={staggerDelay}
    stagger={true}
  >
    {children}
  </AnimationObserver>
);

// Extracted hook for cinematic animation
export const useCinematicAnimation = () => {
  const controls = useAnimation();

  const startAnimation = useCallback(() => {
    controls.start('visible');
  }, [controls]);

  const resetAnimation = useCallback(() => {
    controls.start('hidden');
  }, [controls]);

  return {
    controls,
    startAnimation,
    resetAnimation,
  };
};
