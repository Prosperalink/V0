/**
 * Homepage Asset Manager for Orson Vision
 * Ensures all homepage sections have proper fallback assets
 */

import { getAssetUrl, getOptimizedAssetUrl } from './asset-fallbacks';

export interface HomepageAsset {
  video?: string;
  image?: string;
  poster?: string;
  thumbnail?: string;
}

export interface HomepageAssets {
  hero: {
    backgroundVideo: string;
    posterImage: string;
  };
  services: {
    contentCreation: HomepageAsset;
    creativeDesign: HomepageAsset;
    digitalInnovation: HomepageAsset;
    strategicConsulting: HomepageAsset;
    technologySolutions: HomepageAsset;
  };
  team: {
    member1: HomepageAsset;
    member2: HomepageAsset;
    member3: HomepageAsset;
  };
  process: {
    step1: HomepageAsset;
    step2: HomepageAsset;
    step3: HomepageAsset;
    step4: HomepageAsset;
  };
  insights: {
    insight1: HomepageAsset;
    insight2: HomepageAsset;
    insight3: HomepageAsset;
  };
  gallery: {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
  };
  successStories: {
    story1: string;
    story2: string;
    story3: string;
  };
  features: {
    feature1: string;
    feature2: string;
    feature3: string;
  };
  filmReel: {
    reel1: string;
    reel2: string;
    reel3: string;
    reel4: string;
    reel5: string;
    reel6: string;
  };
}

/**
 * Get all homepage assets with fallbacks
 */
export function getHomepageAssets(): HomepageAssets {
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

/**
 * Get optimized homepage assets with async fallback checking
 */
export async function getOptimizedHomepageAssets(): Promise<HomepageAssets> {
  const assets = getHomepageAssets();

  // Optimize hero assets
  const optimizedHero = {
    backgroundVideo: await getOptimizedAssetUrl('hero-background', 'video'),
    posterImage: await getOptimizedAssetUrl('hero-poster', 'image'),
  };

  // Optimize service assets
  const optimizedServices = {
    contentCreation: {
      video: await getOptimizedAssetUrl('service-content-creation', 'video'),
      image: await getOptimizedAssetUrl(
        'service-content-creation-image',
        'image'
      ),
    },
    creativeDesign: {
      video: await getOptimizedAssetUrl('service-creative-design', 'video'),
      image: await getOptimizedAssetUrl(
        'service-creative-design-image',
        'image'
      ),
    },
    digitalInnovation: {
      video: await getOptimizedAssetUrl('service-digital-innovation', 'video'),
      image: await getOptimizedAssetUrl(
        'service-digital-innovation-image',
        'image'
      ),
    },
    strategicConsulting: {
      video: await getOptimizedAssetUrl(
        'service-strategic-consulting',
        'video'
      ),
      image: await getOptimizedAssetUrl(
        'service-strategic-consulting-image',
        'image'
      ),
    },
    technologySolutions: {
      video: await getOptimizedAssetUrl(
        'service-technology-solutions',
        'video'
      ),
      image: await getOptimizedAssetUrl(
        'service-technology-solutions-image',
        'image'
      ),
    },
  };

  // Optimize team assets
  const optimizedTeam = {
    member1: {
      video: await getOptimizedAssetUrl('team-member-1', 'video'),
      image: await getOptimizedAssetUrl('team-member-1-image', 'image'),
    },
    member2: {
      video: await getOptimizedAssetUrl('team-member-2', 'video'),
      image: await getOptimizedAssetUrl('team-member-2-image', 'image'),
    },
    member3: {
      video: await getOptimizedAssetUrl('team-member-3', 'video'),
      image: await getOptimizedAssetUrl('team-member-3-image', 'image'),
    },
  };

  // Optimize process assets
  const optimizedProcess = {
    step1: {
      video: await getOptimizedAssetUrl('process-step-1', 'video'),
      image: await getOptimizedAssetUrl('process-step-1-image', 'image'),
    },
    step2: {
      video: await getOptimizedAssetUrl('process-step-2', 'video'),
      image: await getOptimizedAssetUrl('process-step-2-image', 'image'),
    },
    step3: {
      video: await getOptimizedAssetUrl('process-step-3', 'video'),
      image: await getOptimizedAssetUrl('process-step-3-image', 'image'),
    },
    step4: {
      video: await getOptimizedAssetUrl('process-step-4', 'video'),
      image: await getOptimizedAssetUrl('process-step-4-image', 'image'),
    },
  };

  // Optimize insights assets
  const optimizedInsights = {
    insight1: {
      video: await getOptimizedAssetUrl('insight-1', 'video'),
      image: await getOptimizedAssetUrl('insight-1-image', 'image'),
    },
    insight2: {
      video: await getOptimizedAssetUrl('insight-2', 'video'),
      image: await getOptimizedAssetUrl('insight-2-image', 'image'),
    },
    insight3: {
      video: await getOptimizedAssetUrl('insight-3', 'video'),
      image: await getOptimizedAssetUrl('insight-3-image', 'image'),
    },
  };

  // Optimize gallery assets
  const optimizedGallery = {
    item1: await getOptimizedAssetUrl('media-gallery-1', 'image'),
    item2: await getOptimizedAssetUrl('media-gallery-2', 'image'),
    item3: await getOptimizedAssetUrl('media-gallery-3', 'image'),
    item4: await getOptimizedAssetUrl('media-gallery-4', 'image'),
    item5: await getOptimizedAssetUrl('media-gallery-5', 'image'),
    item6: await getOptimizedAssetUrl('media-gallery-6', 'image'),
  };

  // Optimize success stories assets
  const optimizedSuccessStories = {
    story1: await getOptimizedAssetUrl('success-story-1', 'image'),
    story2: await getOptimizedAssetUrl('success-story-2', 'image'),
    story3: await getOptimizedAssetUrl('success-story-3', 'image'),
  };

  // Optimize features assets
  const optimizedFeatures = {
    feature1: await getOptimizedAssetUrl('feature-presentation-1', 'image'),
    feature2: await getOptimizedAssetUrl('feature-presentation-2', 'image'),
    feature3: await getOptimizedAssetUrl('feature-presentation-3', 'image'),
  };

  // Optimize film reel assets
  const optimizedFilmReel = {
    reel1: await getOptimizedAssetUrl('film-reel-1', 'image'),
    reel2: await getOptimizedAssetUrl('film-reel-2', 'image'),
    reel3: await getOptimizedAssetUrl('film-reel-3', 'image'),
    reel4: await getOptimizedAssetUrl('film-reel-4', 'image'),
    reel5: await getOptimizedAssetUrl('film-reel-5', 'image'),
    reel6: await getOptimizedAssetUrl('film-reel-6', 'image'),
  };

  return {
    hero: optimizedHero,
    services: optimizedServices,
    team: optimizedTeam,
    process: optimizedProcess,
    insights: optimizedInsights,
    gallery: optimizedGallery,
    successStories: optimizedSuccessStories,
    features: optimizedFeatures,
    filmReel: optimizedFilmReel,
  };
}

/**
 * Get asset for specific homepage section
 */
export function getHomepageSectionAsset(
  section: keyof HomepageAssets,
  subsection?: string,
  type: 'video' | 'image' = 'image'
): string {
  const assets = getHomepageAssets();
  const sectionAssets = assets[section];

  if (
    subsection &&
    typeof sectionAssets === 'object' &&
    'video' in sectionAssets
  ) {
    // Handle nested assets like services.contentCreation
    const subsectionAssets =
      sectionAssets[subsection as keyof typeof sectionAssets];
    if (subsectionAssets && typeof subsectionAssets === 'object') {
      return type === 'video'
        ? (subsectionAssets as HomepageAsset).video ||
            getAssetUrl('placeholder', 'video')
        : (subsectionAssets as HomepageAsset).image ||
            getAssetUrl('placeholder', 'image');
    }
  }

  if (typeof sectionAssets === 'string') {
    return sectionAssets;
  }

  // Return placeholder if asset not found
  return type === 'video'
    ? getAssetUrl('placeholder', 'video')
    : getAssetUrl('placeholder', 'image');
}

/**
 * Validate all homepage assets exist
 */
export async function validateHomepageAssets(): Promise<{
  valid: boolean;
  missing: string[];
  total: number;
  found: number;
}> {
  const assets = getHomepageAssets();
  const missing: string[] = [];
  let total = 0;
  let found = 0;

  // Helper function to check asset
  const checkAsset = async (url: string, name: string) => {
    total++;
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        found++;
      } else {
        missing.push(name);
      }
    } catch {
      missing.push(name);
    }
  };

  // Check hero assets
  await checkAsset(assets.hero.backgroundVideo, 'Hero Background Video');
  await checkAsset(assets.hero.posterImage, 'Hero Poster Image');

  // Check service assets
  for (const [service, serviceAssets] of Object.entries(assets.services)) {
    if (serviceAssets.video) {
      await checkAsset(serviceAssets.video, `${service} Video`);
    }
    if (serviceAssets.image) {
      await checkAsset(serviceAssets.image, `${service} Image`);
    }
  }

  // Check team assets
  for (const [member, memberAssets] of Object.entries(assets.team)) {
    if (memberAssets.video) {
      await checkAsset(memberAssets.video, `${member} Video`);
    }
    if (memberAssets.image) {
      await checkAsset(memberAssets.image, `${member} Image`);
    }
  }

  // Check process assets
  for (const [step, stepAssets] of Object.entries(assets.process)) {
    if (stepAssets.video) {
      await checkAsset(stepAssets.video, `${step} Video`);
    }
    if (stepAssets.image) {
      await checkAsset(stepAssets.image, `${step} Image`);
    }
  }

  // Check insights assets
  for (const [insight, insightAssets] of Object.entries(assets.insights)) {
    if (insightAssets.video) {
      await checkAsset(insightAssets.video, `${insight} Video`);
    }
    if (insightAssets.image) {
      await checkAsset(insightAssets.image, `${insight} Image`);
    }
  }

  // Check gallery assets
  for (const [item, imageUrl] of Object.entries(assets.gallery)) {
    await checkAsset(imageUrl, `Gallery ${item}`);
  }

  // Check success stories assets
  for (const [story, imageUrl] of Object.entries(assets.successStories)) {
    await checkAsset(imageUrl, `Success Story ${story}`);
  }

  // Check features assets
  for (const [feature, imageUrl] of Object.entries(assets.features)) {
    await checkAsset(imageUrl, `Feature ${feature}`);
  }

  // Check film reel assets
  for (const [reel, imageUrl] of Object.entries(assets.filmReel)) {
    await checkAsset(imageUrl, `Film Reel ${reel}`);
  }

  return {
    valid: missing.length === 0,
    missing,
    total,
    found,
  };
}
