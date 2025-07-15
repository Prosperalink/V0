'use client';

import { useEffect, useRef } from 'react';

interface IAnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

export default function AnimationObserver({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  animationClass = 'fade-in',
}: IAnimationObserverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}
