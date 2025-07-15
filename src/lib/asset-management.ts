// Asset Management System for Cinematic Humanism
// Enhanced with video support and reorganized asset structure

export interface IAsset {
  src: string;
  alt: string;
  type: 'image' | 'video';
  category: string;
  tags: string[];
  width?: number;
  height?: number;
  photographer?: string;
  photographer_url?: string;
  pexels_id?: number;
  poster?: string; // For videos
  duration?: number; // For videos
}

interface IAssetConfig {
  src: string;
  alt: string;
  poster?: string;
  type: 'image' | 'video';
  category: string;
  subcategory?: string;
  index?: number;
}

// Enhanced Asset Categories for Reorganized Structure
const ASSET_CATEGORIES = {
  // Global assets
  global: {
    logos: {
      keywords: ['logo', 'brand', 'identity'],
      count: 5,
    },
    icons: {
      keywords: ['icon', 'ui', 'interface'],
      count: 20,
    },
    backgrounds: {
      keywords: ['background', 'pattern', 'texture'],
      count: 10,
    },
  },

  // Page-specific assets
  pages: {
    home: {
      hero: {
        keywords: ['cinematic', 'office', 'creative', 'business', 'technology'],
        count: 10,
        videoKeywords: ['cinematic', 'professional', 'business', 'technology'],
      },
      'client-journey': {
        keywords: ['process', 'journey', 'workflow', 'collaboration'],
        count: 8,
      },
      'success-stories': {
        keywords: ['success', 'results', 'achievement', 'case-study'],
        count: 8,
      },
      'contact-section': {
        keywords: ['contact', 'communication', 'office', 'professional'],
        count: 5,
      },
    },
    about: {
      hero: {
        keywords: ['about', 'team', 'company', 'culture'],
        count: 8,
      },
      team: {
        keywords: ['team', 'people', 'collaboration', 'professional'],
        count: 12,
      },
      mission: {
        keywords: ['mission', 'purpose', 'values', 'vision'],
        count: 6,
      },
      values: {
        keywords: ['values', 'culture', 'principles', 'ethics'],
        count: 8,
      },
      story: {
        keywords: ['story', 'history', 'journey', 'timeline'],
        count: 10,
      },
    },
    services: {
      hero: {
        keywords: ['services', 'expertise', 'professional', 'business'],
        count: 8,
      },
      'content-creation': {
        keywords: ['content', 'creation', 'storytelling', 'media'],
        count: 10,
      },
      'creative-design': {
        keywords: ['design', 'creative', 'visual', 'art'],
        count: 12,
      },
      'digital-innovation': {
        keywords: ['digital', 'innovation', 'technology', 'future'],
        count: 10,
      },
      'strategic-consulting': {
        keywords: ['consulting', 'strategy', 'business', 'planning'],
        count: 8,
      },
      'technology-solutions': {
        keywords: ['technology', 'solutions', 'digital', 'innovation'],
        count: 10,
      },
    },
    contact: {
      hero: {
        keywords: ['contact', 'communication', 'office', 'professional'],
        count: 6,
      },
      office: {
        keywords: ['office', 'workspace', 'professional', 'business'],
        count: 8,
      },
    },
    careers: {
      hero: {
        keywords: ['careers', 'jobs', 'opportunity', 'professional'],
        count: 6,
      },
      culture: {
        keywords: ['culture', 'team', 'workplace', 'collaboration'],
        count: 10,
      },
      opportunities: {
        keywords: ['opportunity', 'career', 'growth', 'development'],
        count: 8,
      },
    },
    testimonials: {
      hero: {
        keywords: ['testimonials', 'reviews', 'feedback', 'success'],
        count: 6,
      },
      clients: {
        keywords: ['clients', 'testimonials', 'reviews', 'feedback'],
        count: 12,
      },
    },
    'client-journey': {
      hero: {
        keywords: ['journey', 'process', 'workflow', 'experience'],
        count: 6,
      },
      process: {
        keywords: ['process', 'workflow', 'steps', 'methodology'],
        count: 10,
      },
    },
    blog: {
      hero: {
        keywords: ['blog', 'content', 'articles', 'insights'],
        count: 6,
      },
      articles: {
        keywords: ['article', 'content', 'blog', 'insights'],
        count: 15,
      },
      featured: {
        keywords: ['featured', 'highlight', 'popular', 'trending'],
        count: 8,
      },
    },
    legal: {
      privacy: {
        keywords: ['privacy', 'security', 'protection', 'compliance'],
        count: 4,
      },
      terms: {
        keywords: ['terms', 'legal', 'agreement', 'policy'],
        count: 4,
      },
    },
  },
};

// Cache for asset management (commented out until needed)
// interface ICachedAsset {
//   assets: IAsset[];
//   timestamp: number;
//   ttl: number;
// }

// const assetCache = new Map<string, ICachedAsset>();
// const CACHE_TTL = 1000 * 60 * 60; // 1 hour

// Pexels API configuration (commented out until needed)
// const PEXELS_API_KEY =
//   process.env.PEXELS_API_KEY || 'your-pexels-api-key-here';
// const PEXELS_API_BASE = 'https://api.pexels.com/v1';

// Asset index counter (commented out until needed)
// let assetIndexCounter = 0;

/**
 * Get deterministic asset index based on category and subcategory
 */
function getDeterministicAssetIndex(
  category: string,
  subcategory?: string
): number {
  // Create a hash from category and subcategory for consistent results
  const hash = `${category}-${subcategory || 'default'}`;
  let hashValue = 0;

  for (let i = 0; i < hash.length; i++) {
    const char = hash.charCodeAt(i);
    hashValue = (hashValue << 5) - hashValue + char;
    hashValue = hashValue & hashValue; // Convert to 32-bit integer
  }

  // Use absolute value and modulo to get a consistent index
  return Math.abs(hashValue) % 10; // Assume max 10 assets per category
}

/**
 * Get asset from reorganized structure with deterministic selection
 */
export function getAsset(
  category: string,
  subcategory?: string,
  index: number = 0
): IAssetConfig {
  // Use deterministic index if not provided
  const deterministicIndex =
    index === 0 ? getDeterministicAssetIndex(category, subcategory) : index;

  // Map to actual asset structure with correct naming
  let assetPath: string;

  if (category === 'home') {
    if (subcategory === 'hero') {
      assetPath = `/assets/pages/home/images/hero/images/homepage_hero_section_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else if (subcategory === 'client-journey') {
      assetPath = `/assets/pages/home/images/client-journey/images/homepage_client_journey_client_journey_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else if (subcategory === 'success-stories') {
      assetPath = `/assets/pages/home/images/success-stories/images/homepage_success_stories_success_stories_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else if (subcategory === 'contact-section') {
      assetPath = `/assets/pages/home/images/contact/images/homepage_contact_section_contact_section_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else {
      // Fallback for other home subcategories
      assetPath = `/assets/pages/home/images/hero/images/homepage_hero_section_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    }
  } else if (category === 'services') {
    if (subcategory === 'content-creation') {
      assetPath = `/assets/pages/services/images/content-creation/images/services_content_creation_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else if (subcategory === 'creative-design') {
      assetPath = `/assets/pages/services/images/creative-design/images/services_creative_design_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else if (subcategory === 'digital-innovation') {
      assetPath = `/assets/pages/services/images/digital-innovation/images/services_digital_innovation_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else if (subcategory === 'strategic-consulting') {
      assetPath = `/assets/pages/services/images/strategic-consulting/images/services_strategic_consulting_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else if (subcategory === 'technology-solutions') {
      assetPath = `/assets/pages/services/images/technology-solutions/images/services_technology_solutions_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else {
      // Fallback for other service subcategories
      assetPath = `/assets/pages/services/images/content-creation/images/services_content_creation_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    }
  } else if (category === 'about') {
    if (subcategory === 'hero') {
      assetPath = `/assets/pages/about/images/hero/images/about_hero_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else if (subcategory === 'team') {
      assetPath = `/assets/pages/about/images/team/images/about_team_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    } else if (subcategory === 'cinematic-humanism') {
      assetPath = `/assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.svg`;
    } else {
      // Fallback for other about subcategories
      assetPath = `/assets/pages/about/images/hero/images/about_hero_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
    }
  } else {
    // Fallback for other categories
    assetPath = `/assets/pages/home/images/hero/images/homepage_hero_section_cinematic_office_${String(deterministicIndex + 1).padStart(2, '0')}.jpg`;
  }

  const config: IAssetConfig = {
    src: assetPath,
    alt: `${category} ${subcategory || ''} image ${deterministicIndex + 1}`,
    type: 'image',
    category,
    index: deterministicIndex,
  };

  if (subcategory) {
    config.subcategory = subcategory;
  }

  return config;
}

/**
 * Get deterministic asset from category (no random selection)
 */
export function getRandomAsset(
  category: string,
  subcategory?: string
): IAssetConfig {
  // Use deterministic index instead of random
  const deterministicIndex = getDeterministicAssetIndex(category, subcategory);
  return getAsset(category, subcategory, deterministicIndex);
}

/**
 * Get optimized asset with proper sizing
 */
export function getOptimizedAsset(
  category: string,
  subcategory?: string,
  index: number = 0
): IAssetConfig {
  const asset = getAsset(category, subcategory, index);

  // Add optimization parameters
  return {
    ...asset,
    src: `${asset.src}?optimize=true&quality=90`,
  };
}

/**
 * Get cinematic overlay for category
 */
export function getCinematicOverlay(category: string): string {
  const overlays = {
    hero: 'bg-gradient-to-br from-black/80 via-black/60 to-black/80',
    services:
      'bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20',
    about: 'bg-gradient-to-br from-gray-900/30 via-transparent to-blue-900/30',
    contact:
      'bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20',
    default: 'bg-gradient-to-br from-black/50 via-transparent to-black/50',
  };

  return overlays[category as keyof typeof overlays] || overlays.default;
}

/**
 * Get hero video asset
 */
export function getHeroVideo(): IAssetConfig {
  return {
    src: '/assets/pages/home/videos/hero/pexels_cinematic_office.mp4',
    alt: 'Cinematic office hero video background',
    poster:
      '/assets/pages/home/images/hero/images/homepage_hero_section_cinematic_office_01.jpg',
    type: 'video',
    category: 'home',
    subcategory: 'hero',
  };
}

/**
 * Get fallback assets when API fails
 */
// function getFallbackAssets(category: string, count: number): IAsset[] {
//   const fallbacks: Record<string, string[]> = {
//     hero: [
//       '/assets/pages/home/images/hero/images/homepage_hero_section_cinematic_office_01.jpg',
//       '/assets/pages/home/images/hero/images/homepage_hero_section_cinematic_office_02.jpg',
//       '/assets/pages/home/images/hero/images/homepage_hero_section_cinematic_office_03.jpg',
//     ],
//     services: [
//       '/assets/pages/services/images/content-creation/images/services_content_creation_cinematic_office_01.jpg',
//       '/assets/pages/services/images/creative-design/images/services_creative_design_cinematic_office_01.jpg',
//       '/assets/pages/services/images/digital-innovation/images/services_digital_innovation_cinematic_office_01.jpg',
//     ],
//     about: [
//       '/assets/pages/about/images/hero/images/about_hero_cinematic_office_01.jpg',
//       '/assets/pages/about/images/team/images/about_team_cinematic_office_01.jpg',
//       '/assets/pages/about/images/cinematic-humanism/images/about_cinematic_humanism_cinematic_office_01.jpg',
//     ],
//   };

//   const categoryFallbacks = fallbacks[category] || fallbacks.hero || [];
//   return categoryFallbacks.slice(0, count).map((src, index) => ({
//     src,
//     alt: `${category} image ${index + 1}`,
//     type: 'image',
//     category,
//     tags: [category],
//     width: 1920,
//     height: 1080,
//   }));
// }

/**
 * Preload assets for better performance
 */
export function preloadAssets(assets: IAsset[]): void {
  assets.forEach(asset => {
    if (asset.type === 'image') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = asset.src;
      document.head.appendChild(link);
    }
  });
}

/**
 * Initialize asset management system
 */
export async function initializeAssetManagement(): Promise<void> {
  try {
    // Preload critical assets
    const criticalAssets = [
      getHeroVideo(),
      getAsset('home', 'hero', 0),
      getAsset('services', 'content-creation', 0),
    ];

    // Convert to IAsset format for preloading
    const assetsForPreload = criticalAssets.map(asset => ({
      src: asset.src,
      alt: asset.alt,
      type: asset.type,
      category: asset.category,
      tags: [asset.category],
    }));

    preloadAssets(assetsForPreload);
  } catch {
    // Asset management initialization failed
  }
}

/**
 * Get optimized asset URL with parameters
 */
export function getOptimizedAssetUrl(
  asset: IAsset,
  width: number,
  height: number
): string {
  const params = new URLSearchParams({
    w: width.toString(),
    h: height.toString(),
    q: '90',
    fm: 'webp',
  });

  return `${asset.src}?${params.toString()}`;
}

/**
 * Get asset with fallback
 */
export function getAssetWithFallback(
  primaryAsset: IAsset,
  fallbackAsset: IAsset
): IAsset {
  return {
    ...primaryAsset,
    src: primaryAsset.src || fallbackAsset.src,
    alt: primaryAsset.alt || fallbackAsset.alt,
  };
}

// Export for backward compatibility
export { ASSET_CATEGORIES };
