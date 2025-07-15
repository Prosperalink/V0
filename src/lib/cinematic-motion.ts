// 🎬 HOLLYWOOD STUDIO - Cinematic Motion System

export interface ICinematicMotion {
  // 3D Parallax System
  parallax: (depth: number) => {
    transform: string;
    transition: string;
  };

  // Camera Movements
  cameraPan: (
    x: number,
    y: number
  ) => {
    transform: string;
    transition: string;
  };

  // Lens Effects
  lensBlur: (focus: boolean) => {
    filter: string;
    transition: string;
  };

  // Spotlight System
  spotlight: (
    x: number,
    y: number
  ) => {
    background: string;
  };

  // Film Effects
  filmGrain: (intensity: number) => {
    opacity: string;
    animation: string;
  };

  // Card Animations
  cardFlip: (isFlipped: boolean) => {
    transform: string;
    transition: string;
  };

  // Film Reel Animation
  filmReel: (isHovered: boolean) => {
    animation: string;
    transform: string;
  };
}

// 🎬 Cinematic Motion Engine
export class CinematicMotionEngine {
  private mousePosition = { x: 0, y: 0 };
  private isDirectorMode = false;
  private spotlightElement: HTMLElement | null = null;

  constructor() {
    this.initializeMouseTracking();
    this.createSpotlightElement();
  }

  // Initialize mouse tracking for spotlight effect
  private initializeMouseTracking() {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', e => {
        this.mousePosition = { x: e.clientX, y: e.clientY };
        this.updateSpotlight();
      });
    }
  }

  // Create spotlight element for director's chair interface
  private createSpotlightElement() {
    if (typeof document !== 'undefined') {
      this.spotlightElement = document.createElement('div');
      this.spotlightElement.className = 'cinematic-spotlight';
      this.spotlightElement.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at ${this.mousePosition.x}px ${this.mousePosition.y}px, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
      document.body.appendChild(this.spotlightElement);
    }
  }

  // Update spotlight position
  private updateSpotlight() {
    if (this.spotlightElement && this.isDirectorMode) {
      this.spotlightElement.style.background = `radial-gradient(circle at ${this.mousePosition.x}px ${this.mousePosition.y}px, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`;
      this.spotlightElement.style.opacity = '1';
    }
  }

  // Enable/disable director's chair interface
  public toggleDirectorMode(enabled: boolean) {
    this.isDirectorMode = enabled;
    if (this.spotlightElement) {
      this.spotlightElement.style.opacity = enabled ? '1' : '0';
    }
  }

  // 3D Parallax System
  public getParallax(depth: number) {
    return {
      transform: `translateZ(${depth}px)`,
      transition: 'transform 0.3s ease-out',
    };
  }

  // Camera Pan Effect
  public getCameraPan(x: number, y: number) {
    return {
      transform: `translateX(${x}px) translateY(${y}px)`,
      transition: 'transform 0.5s ease-out',
    };
  }

  // Lens Blur Effect
  public getLensBlur(focus: boolean) {
    return {
      filter: focus ? 'blur(0px)' : 'blur(2px)',
      transition: 'filter 0.3s ease-out',
    };
  }

  // Spotlight Effect
  public getSpotlight(x: number, y: number) {
    return {
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 215, 0, 0.2) 0%, transparent 50%)`,
    };
  }

  // Film Grain Effect
  public getFilmGrain(intensity: number = 0.1) {
    return {
      opacity: intensity.toString(),
      animation: 'filmGrain 8s steps(10) infinite',
    };
  }

  // Card Flip Animation
  public getCardFlip(isFlipped: boolean) {
    return {
      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  }

  // Film Reel Animation
  public getFilmReel(isHovered: boolean) {
    return {
      animation: isHovered
        ? 'filmReel 5s linear infinite'
        : 'filmReel 20s linear infinite',
      transform: 'rotate(0deg)',
    };
  }

  // Golden Glow Effect
  public getGoldenGlow() {
    return {
      animation: 'goldenGlow 3s ease-in-out infinite',
    };
  }

  // Film Scratch Effect
  public getFilmScratch() {
    return {
      animation: 'filmScratch 3s ease-in-out infinite',
    };
  }

  // Lens Flare Effect
  public getLensFlare() {
    return {
      animation: 'lensFlare 6s ease-in-out infinite',
    };
  }

  // Camera Shake Effect
  public getCameraShake(intensity: number = 1) {
    return {
      animation: `cameraShake ${intensity}s ease-in-out infinite`,
    };
  }

  // Focus Pull Effect
  public getFocusPull(isFocused: boolean) {
    return {
      filter: isFocused ? 'blur(0px)' : 'blur(4px)',
      transform: isFocused ? 'scale(1.05)' : 'scale(1)',
      transition: 'all 0.3s ease-out',
    };
  }

  // Film Burn Effect
  public getFilmBurn() {
    return {
      animation: 'filmBurn 2s ease-in-out',
    };
  }

  // Cinematic Fade
  public getCinematicFade(isVisible: boolean) {
    return {
      opacity: isVisible ? '1' : '0',
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.5s ease-out',
    };
  }

  // Storyboard Slide
  public getStoryboardSlide(direction: 'left' | 'right' | 'up' | 'down') {
    const transforms = {
      left: 'translateX(-100%)',
      right: 'translateX(100%)',
      up: 'translateY(-100%)',
      down: 'translateY(100%)',
    };

    return {
      transform: transforms[direction],
      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  }

  // Film Strip Animation
  public getFilmStrip(isPlaying: boolean) {
    return {
      animation: isPlaying ? 'filmStrip 10s linear infinite' : 'none',
      transform: 'translateX(0)',
    };
  }

  // Director's Cut Effect
  public getDirectorsCut(isActive: boolean) {
    return {
      filter: isActive
        ? 'contrast(1.2) saturate(1.1)'
        : 'contrast(1) saturate(1)',
      transform: isActive ? 'scale(1.02)' : 'scale(1)',
      transition: 'all 0.3s ease-out',
    };
  }

  // Cinematic Zoom
  public getCinematicZoom(scale: number) {
    return {
      transform: `scale(${scale})`,
      transition: 'transform 0.5s ease-out',
    };
  }

  // Film Grain Overlay
  public getFilmGrainOverlay(intensity: number = 0.05) {
    return {
      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noise)" opacity="${intensity}"/></svg>')`,
      animation: 'filmGrain 8s steps(10) infinite',
    };
  }

  // Lens Distortion
  public getLensDistortion(intensity: number = 0.1) {
    return {
      filter: `blur(${intensity}px)`,
      transform: `scale(${1 + intensity})`,
      transition: 'all 0.3s ease-out',
    };
  }

  // Cinematic Color Grade
  public getCinematicColorGrade(
    style: 'noir' | 'golden' | 'midnight' | 'sunset'
  ) {
    const filters = {
      noir: 'contrast(1.3) saturate(0.8) brightness(0.9)',
      golden: 'contrast(1.1) saturate(1.2) brightness(1.1)',
      midnight: 'contrast(1.2) saturate(0.9) brightness(0.8)',
      sunset: 'contrast(1.1) saturate(1.3) brightness(1.05)',
    };

    return {
      filter: filters[style],
      transition: 'filter 0.5s ease-out',
    };
  }

  // Interactive Spotlight
  public getInteractiveSpotlight(
    x: number,
    y: number,
    intensity: number = 0.2
  ) {
    return {
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 215, 0, ${intensity}) 0%, transparent 50%)`,
      transition: 'background 0.1s ease-out',
    };
  }

  // Film Reel Rotation
  public getFilmReelRotation(speed: number = 1) {
    return {
      animation: `filmReel ${20 / speed}s linear infinite`,
      transform: 'rotate(0deg)',
    };
  }

  // Cinematic Transition
  public getCinematicTransition(type: 'fade' | 'slide' | 'zoom' | 'flip') {
    const transitions = {
      fade: {
        opacity: '0',
        transition: 'opacity 0.5s ease-out',
      },
      slide: {
        transform: 'translateX(-100%)',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zoom: {
        transform: 'scale(0.8)',
        opacity: '0',
        transition: 'all 0.5s ease-out',
      },
      flip: {
        transform: 'rotateY(90deg)',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    };

    return transitions[type];
  }

  // Cleanup method
  public destroy() {
    if (this.spotlightElement) {
      document.body.removeChild(this.spotlightElement);
    }
  }
}

// 🎬 Cinematic Motion Hooks
export const useCinematicMotion = () => {
  const engine = new CinematicMotionEngine();

  return {
    // Core motion functions
    getParallax: engine.getParallax.bind(engine),
    getCameraPan: engine.getCameraPan.bind(engine),
    getLensBlur: engine.getLensBlur.bind(engine),
    getSpotlight: engine.getSpotlight.bind(engine),
    getFilmGrain: engine.getFilmGrain.bind(engine),
    getCardFlip: engine.getCardFlip.bind(engine),
    getFilmReel: engine.getFilmReel.bind(engine),
    getGoldenGlow: engine.getGoldenGlow.bind(engine),
    getFilmScratch: engine.getFilmScratch.bind(engine),
    getLensFlare: engine.getLensFlare.bind(engine),
    getCameraShake: engine.getCameraShake.bind(engine),
    getFocusPull: engine.getFocusPull.bind(engine),
    getFilmBurn: engine.getFilmBurn.bind(engine),
    getCinematicFade: engine.getCinematicFade.bind(engine),
    getStoryboardSlide: engine.getStoryboardSlide.bind(engine),
    getFilmStrip: engine.getFilmStrip.bind(engine),
    getDirectorsCut: engine.getDirectorsCut.bind(engine),
    getCinematicZoom: engine.getCinematicZoom.bind(engine),
    getFilmGrainOverlay: engine.getFilmGrainOverlay.bind(engine),
    getLensDistortion: engine.getLensDistortion.bind(engine),
    getCinematicColorGrade: engine.getCinematicColorGrade.bind(engine),
    getInteractiveSpotlight: engine.getInteractiveSpotlight.bind(engine),
    getFilmReelRotation: engine.getFilmReelRotation.bind(engine),
    getCinematicTransition: engine.getCinematicTransition.bind(engine),

    // Director mode
    toggleDirectorMode: engine.toggleDirectorMode.bind(engine),

    // Cleanup
    destroy: engine.destroy.bind(engine),
  };
};

// 🎬 Cinematic Motion Constants
export const CINEMATIC_MOTION_CONSTANTS = {
  // Animation Durations
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
    CINEMATIC: 0.8,
    EPIC: 1.2,
  },

  // Easing Functions
  EASING: {
    LINEAR: 'linear',
    EASE: 'ease',
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
    CINEMATIC: 'cubic-bezier(0.4, 0, 0.2, 1)',
    BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Parallax Depths
  PARALLAX: {
    BACKGROUND: -50,
    MIDGROUND: -25,
    FOREGROUND: 0,
    HERO: 25,
    OVERLAY: 50,
  },

  // Spotlight Intensities
  SPOTLIGHT: {
    SUBTLE: 0.1,
    NORMAL: 0.2,
    INTENSE: 0.4,
    DRAMATIC: 0.6,
  },

  // Film Grain Intensities
  GRAIN: {
    NONE: 0,
    SUBTLE: 0.05,
    NORMAL: 0.1,
    HEAVY: 0.2,
  },

  // Lens Blur Amounts
  BLUR: {
    NONE: 0,
    SOFT: 1,
    MEDIUM: 2,
    HEAVY: 4,
  },
};

// 🎬 Cinematic Motion Utilities
export const cinematicMotionUtils = {
  // Convert mouse position to spotlight coordinates
  mouseToSpotlight: (x: number, y: number) => ({
    x: (x / window.innerWidth) * 100,
    y: (y / window.innerHeight) * 100,
  }),

  // Calculate parallax offset based on scroll
  getParallaxOffset: (scrollY: number, depth: number) => ({
    x: 0,
    y: scrollY * (depth / 100),
  }),

  // Generate random film grain pattern
  generateFilmGrain: (intensity: number = 0.1) => ({
    opacity: intensity,
    animation: `filmGrain ${8 + Math.random() * 4}s steps(10) infinite`,
  }),

  // Create cinematic color grade
  createColorGrade: (style: 'noir' | 'golden' | 'midnight' | 'sunset') => {
    const grades = {
      noir: { contrast: 1.3, saturate: 0.8, brightness: 0.9 },
      golden: { contrast: 1.1, saturate: 1.2, brightness: 1.1 },
      midnight: { contrast: 1.2, saturate: 0.9, brightness: 0.8 },
      sunset: { contrast: 1.1, saturate: 1.3, brightness: 1.05 },
    };

    const grade = grades[style];
    return {
      filter: `contrast(${grade.contrast}) saturate(${grade.saturate}) brightness(${grade.brightness})`,
      transition: 'filter 0.5s ease-out',
    };
  },
};

export default CinematicMotionEngine;
