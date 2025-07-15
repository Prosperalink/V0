/**
 * Asset fallback management for Orson Vision
 * Handles missing assets gracefully by providing fallback options
 */

export interface AssetFallback {
  primary: string;
  fallbacks: string[];
  placeholder?: string;
}

// Video asset fallbacks
export const videoFallbacks: Record<string, AssetFallback> = {
  'cinematic-web-design': {
    primary: '/assets/videos/cinematic-web-design.mp4',
    fallbacks: [
      '/assets/hero-videos/hero-videos_creative_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_cinematic_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'digital-marketing': {
    primary: '/assets/videos/digital-marketing.mp4',
    fallbacks: [
      '/assets/hero-videos/hero-videos_digital_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_digital_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'mobile-app': {
    primary: '/assets/videos/mobile-app.mp4',
    fallbacks: [
      '/assets/hero-videos/hero-videos_technology_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_technology_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'testimonial-sarah': {
    primary: '/assets/videos/testimonial-sarah.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_cinematic_1.mp4',
      '/assets/testimonials/testimonials_executive_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'testimonial-michael': {
    primary: '/assets/videos/testimonial-michael.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_cinema_1.mp4',
      '/assets/testimonials/testimonials_business_person_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'testimonial-emily': {
    primary: '/assets/videos/testimonial-emily.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_movie_1.mp4',
      '/assets/testimonials/testimonials_entrepreneur_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  // Hero section assets
  'hero-background': {
    primary: '/hero/hero-video.mp4',
    fallbacks: [
      '/assets/hero-videos/hero-videos_cinematic_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_cinematic_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'hero-poster': {
    primary: '/hero/hero-poster.jpg',
    fallbacks: [
      '/assets/hero/hero-poster.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  // Services section assets
  'service-content-creation': {
    primary: '/assets/services/content_creation/service-hero.mp4',
    fallbacks: [
      '/assets/hero-videos/hero-videos_creative_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_creative_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'service-creative-design': {
    primary: '/assets/services/creative_design/service-hero.mp4',
    fallbacks: [
      '/assets/hero-videos/hero-videos_design_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_design_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'service-digital-innovation': {
    primary: '/assets/services/digital_innovation/service-hero.mp4',
    fallbacks: [
      '/assets/hero-videos/hero-videos_technology_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_technology_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'service-strategic-consulting': {
    primary: '/assets/services/strategic_consulting/service-hero.mp4',
    fallbacks: [
      '/assets/hero-videos/hero-videos_business_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_business_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'service-technology-solutions': {
    primary: '/assets/services/technology_solutions/service-hero.mp4',
    fallbacks: [
      '/assets/hero-videos/hero-videos_tech_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_tech_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  // Team showcase assets
  'team-member-1': {
    primary: '/assets/team/team-member-1.mp4',
    fallbacks: [
      '/assets/testimonials/testimonials_executive_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_cinematic_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'team-member-2': {
    primary: '/assets/team/team-member-2.mp4',
    fallbacks: [
      '/assets/testimonials/testimonials_business_person_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_business_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'team-member-3': {
    primary: '/assets/team/team-member-3.mp4',
    fallbacks: [
      '/assets/testimonials/testimonials_entrepreneur_1.mp4',
      '/assets/cinematic-backgrounds/cinematic-backgrounds_creative_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  // Behind the scenes assets
  'process-step-1': {
    primary: '/assets/process/process-step-1.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_cinematic_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'process-step-2': {
    primary: '/assets/process/process-step-2.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_design_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'process-step-3': {
    primary: '/assets/process/process-step-3.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_technology_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'process-step-4': {
    primary: '/assets/process/process-step-4.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_business_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  // Latest insights assets
  'insight-1': {
    primary: '/assets/blog/articles/insight-1.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_cinematic_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'insight-2': {
    primary: '/assets/blog/articles/insight-2.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_design_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
  'insight-3': {
    primary: '/assets/blog/articles/insight-3.mp4',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_technology_1.mp4',
      '/assets/videos/placeholder-video.mp4',
    ],
  },
};

// Image asset fallbacks
export const imageFallbacks: Record<string, AssetFallback> = {
  'cinematic-web-design': {
    primary: '/assets/portfolio/cinematic-web-design.jpg',
    fallbacks: [
      '/assets/portfolio/project-1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'digital-marketing': {
    primary: '/assets/portfolio/digital-marketing.jpg',
    fallbacks: [
      '/assets/portfolio/project-2.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'mobile-app': {
    primary: '/assets/portfolio/mobile-app.jpg',
    fallbacks: [
      '/assets/portfolio/project-3.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'sarah-johnson': {
    primary: '/assets/testimonials/sarah-johnson.jpg',
    fallbacks: [
      '/assets/testimonials/testimonials_executive_1.jpg',
      '/assets/testimonials/client-1.jpg',
    ],
  },
  'michael-chen': {
    primary: '/assets/testimonials/michael-chen.jpg',
    fallbacks: [
      '/assets/testimonials/testimonials_business_person_1.jpg',
      '/assets/testimonials/client-2.jpg',
    ],
  },
  'emily-rodriguez': {
    primary: '/assets/testimonials/emily-rodriguez.jpg',
    fallbacks: [
      '/assets/testimonials/testimonials_entrepreneur_1.jpg',
      '/assets/testimonials/client-3.jpg',
    ],
  },
  // Services section images
  'service-content-creation-image': {
    primary: '/assets/services/content_creation/service-image.jpg',
    fallbacks: [
      '/assets/service-icons/service-icons_content_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'service-creative-design-image': {
    primary: '/assets/services/creative_design/service-image.jpg',
    fallbacks: [
      '/assets/service-icons/service-icons_design_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'service-digital-innovation-image': {
    primary: '/assets/services/digital_innovation/service-image.jpg',
    fallbacks: [
      '/assets/service-icons/service-icons_technology_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'service-strategic-consulting-image': {
    primary: '/assets/services/strategic_consulting/service-image.jpg',
    fallbacks: [
      '/assets/service-icons/service-icons_business_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'service-technology-solutions-image': {
    primary: '/assets/services/technology_solutions/service-image.jpg',
    fallbacks: [
      '/assets/service-icons/service-icons_tech_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  // Team showcase images
  'team-member-1-image': {
    primary: '/assets/team/team-member-1.jpg',
    fallbacks: [
      '/assets/testimonials/testimonials_executive_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'team-member-2-image': {
    primary: '/assets/team/team-member-2.jpg',
    fallbacks: [
      '/assets/testimonials/testimonials_business_person_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'team-member-3-image': {
    primary: '/assets/team/team-member-3.jpg',
    fallbacks: [
      '/assets/testimonials/testimonials_entrepreneur_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  // Behind the scenes images
  'process-step-1-image': {
    primary: '/assets/process/process-step-1.jpg',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_cinematic_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'process-step-2-image': {
    primary: '/assets/process/process-step-2.jpg',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_design_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'process-step-3-image': {
    primary: '/assets/process/process-step-3.jpg',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_technology_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'process-step-4-image': {
    primary: '/assets/process/process-step-4.jpg',
    fallbacks: [
      '/assets/cinematic-backgrounds/cinematic-backgrounds_business_1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  // Latest insights images
  'insight-1-image': {
    primary: '/assets/blog/articles/insight-1.jpg',
    fallbacks: [
      '/assets/blog/images/blog-1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'insight-2-image': {
    primary: '/assets/blog/articles/insight-2.jpg',
    fallbacks: [
      '/assets/blog/images/blog-2.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'insight-3-image': {
    primary: '/assets/blog/articles/insight-3.jpg',
    fallbacks: [
      '/assets/blog/images/blog-3.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  // Media gallery images
  'media-gallery-1': {
    primary: '/assets/gallery/gallery-1.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'media-gallery-2': {
    primary: '/assets/gallery/gallery-2.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-2.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'media-gallery-3': {
    primary: '/assets/gallery/gallery-3.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-3.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'media-gallery-4': {
    primary: '/assets/gallery/gallery-4.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-4.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'media-gallery-5': {
    primary: '/assets/gallery/gallery-5.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-5.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'media-gallery-6': {
    primary: '/assets/gallery/gallery-6.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-6.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  // Client success stories images
  'success-story-1': {
    primary: '/assets/success-stories/success-story-1.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'success-story-2': {
    primary: '/assets/success-stories/success-story-2.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-2.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'success-story-3': {
    primary: '/assets/success-stories/success-story-3.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-3.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  // Feature presentation images
  'feature-presentation-1': {
    primary: '/assets/features/feature-1.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'feature-presentation-2': {
    primary: '/assets/features/feature-2.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-2.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'feature-presentation-3': {
    primary: '/assets/features/feature-3.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-3.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  // Film reel images
  'film-reel-1': {
    primary: '/assets/film-reel/film-reel-1.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-1.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'film-reel-2': {
    primary: '/assets/film-reel/film-reel-2.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-2.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'film-reel-3': {
    primary: '/assets/film-reel/film-reel-3.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-3.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'film-reel-4': {
    primary: '/assets/film-reel/film-reel-4.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-4.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'film-reel-5': {
    primary: '/assets/film-reel/film-reel-5.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-5.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
  'film-reel-6': {
    primary: '/assets/film-reel/film-reel-6.jpg',
    fallbacks: [
      '/assets/portfolio/portfolio-6.jpg',
      '/assets/images/placeholder.jpg',
    ],
  },
};

/**
 * Get the best available asset URL with fallbacks
 */
export function getAssetUrl(
  assetKey: string,
  type: 'video' | 'image' = 'video'
): string {
  const fallbacks = type === 'video' ? videoFallbacks : imageFallbacks;
  const asset = fallbacks[assetKey];

  if (!asset) {
    console.warn('Missing asset fallback for key:', assetKey, 'type:', type);
    // Return a default placeholder if no fallback is configured
    return type === 'video'
      ? '/assets/videos/placeholder-video.mp4'
      : '/assets/images/placeholder.jpg';
  }

  return asset.primary;
}

/**
 * Check if an asset exists by attempting to load it
 */
export async function checkAssetExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get the first available asset from a list of URLs
 */
export async function getFirstAvailableAsset(urls: string[]): Promise<string> {
  for (const url of urls) {
    if (await checkAssetExists(url)) {
      return url;
    }
  }

  // Return the last URL as a fallback (should be a placeholder)
  return urls[urls.length - 1] || '';
}

/**
 * Get optimized asset URL with fallback support
 */
export async function getOptimizedAssetUrl(
  assetKey: string,
  type: 'video' | 'image' = 'video'
): Promise<string> {
  const fallbacks = type === 'video' ? videoFallbacks : imageFallbacks;
  const asset = fallbacks[assetKey];

  if (!asset) {
    return type === 'video'
      ? '/assets/videos/placeholder-video.mp4'
      : '/assets/images/placeholder.jpg';
  }

  const allUrls = [asset.primary, ...asset.fallbacks];
  return await getFirstAvailableAsset(allUrls);
}

/**
 * Get asset data for homepage sections
 */
export function getHomepageAssets() {
  return {
    hero: {
      backgroundVideo: getAssetUrl('hero-background', 'video'),
      posterImage: getAssetUrl('hero-poster', 'image'),
    },
    services: {
      contentCreation: {
        video: getAssetUrl('service-content-creation', 'video'),
        image: getAssetUrl('service-content-creation-image', 'image'),
      },
      creativeDesign: {
        video: getAssetUrl('service-creative-design', 'video'),
        image: getAssetUrl('service-creative-design-image', 'image'),
      },
      digitalInnovation: {
        video: getAssetUrl('service-digital-innovation', 'video'),
        image: getAssetUrl('service-digital-innovation-image', 'image'),
      },
      strategicConsulting: {
        video: getAssetUrl('service-strategic-consulting', 'video'),
        image: getAssetUrl('service-strategic-consulting-image', 'image'),
      },
      technologySolutions: {
        video: getAssetUrl('service-technology-solutions', 'video'),
        image: getAssetUrl('service-technology-solutions-image', 'image'),
      },
    },
    team: {
      member1: {
        video: getAssetUrl('team-member-1', 'video'),
        image: getAssetUrl('team-member-1-image', 'image'),
      },
      member2: {
        video: getAssetUrl('team-member-2', 'video'),
        image: getAssetUrl('team-member-2-image', 'image'),
      },
      member3: {
        video: getAssetUrl('team-member-3', 'video'),
        image: getAssetUrl('team-member-3-image', 'image'),
      },
    },
    process: {
      step1: {
        video: getAssetUrl('process-step-1', 'video'),
        image: getAssetUrl('process-step-1-image', 'image'),
      },
      step2: {
        video: getAssetUrl('process-step-2', 'video'),
        image: getAssetUrl('process-step-2-image', 'image'),
      },
      step3: {
        video: getAssetUrl('process-step-3', 'video'),
        image: getAssetUrl('process-step-3-image', 'image'),
      },
      step4: {
        video: getAssetUrl('process-step-4', 'video'),
        image: getAssetUrl('process-step-4-image', 'image'),
      },
    },
    insights: {
      insight1: {
        video: getAssetUrl('insight-1', 'video'),
        image: getAssetUrl('insight-1-image', 'image'),
      },
      insight2: {
        video: getAssetUrl('insight-2', 'video'),
        image: getAssetUrl('insight-2-image', 'image'),
      },
      insight3: {
        video: getAssetUrl('insight-3', 'video'),
        image: getAssetUrl('insight-3-image', 'image'),
      },
    },
    gallery: {
      item1: getAssetUrl('media-gallery-1', 'image'),
      item2: getAssetUrl('media-gallery-2', 'image'),
      item3: getAssetUrl('media-gallery-3', 'image'),
      item4: getAssetUrl('media-gallery-4', 'image'),
      item5: getAssetUrl('media-gallery-5', 'image'),
      item6: getAssetUrl('media-gallery-6', 'image'),
    },
    successStories: {
      story1: getAssetUrl('success-story-1', 'image'),
      story2: getAssetUrl('success-story-2', 'image'),
      story3: getAssetUrl('success-story-3', 'image'),
    },
    features: {
      feature1: getAssetUrl('feature-presentation-1', 'image'),
      feature2: getAssetUrl('feature-presentation-2', 'image'),
      feature3: getAssetUrl('feature-presentation-3', 'image'),
    },
    filmReel: {
      reel1: getAssetUrl('film-reel-1', 'image'),
      reel2: getAssetUrl('film-reel-2', 'image'),
      reel3: getAssetUrl('film-reel-3', 'image'),
      reel4: getAssetUrl('film-reel-4', 'image'),
      reel5: getAssetUrl('film-reel-5', 'image'),
      reel6: getAssetUrl('film-reel-6', 'image'),
    },
  };
}
