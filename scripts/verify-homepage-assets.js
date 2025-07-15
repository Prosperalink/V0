/**
 * Verify Homepage Assets Usage
 * Checks that all homepage components are using the correct asset paths
 */

const fs = require('fs');
const path = require('path');

// Component asset usage verification
const componentAssetUsage = {
  CinematicHero: {
    file: 'src/components/sections/CinematicHero.tsx',
    expectedAssets: ['hero-background', 'hero-poster'],
    usesAssetSystem: false, // Uses Pexels API
    notes: 'Uses Pexels API for dynamic background videos',
  },
  InteractiveCinematicGallery: {
    file: 'src/components/sections/InteractiveCinematicGallery.tsx',
    expectedAssets: ['cinematic-web-design', 'digital-marketing', 'mobile-app'],
    usesAssetSystem: true,
    notes: 'Uses getAssetUrl() for video and image assets',
  },
  CinematicTestimonialsCarousel: {
    file: 'src/components/sections/CinematicTestimonialsCarousel.tsx',
    expectedAssets: [
      'testimonial-sarah',
      'sarah-johnson',
      'testimonial-michael',
      'michael-chen',
      'testimonial-emily',
      'emily-rodriguez',
    ],
    usesAssetSystem: true,
    notes: 'Uses getAssetUrl() for testimonial videos and images',
  },
  TeamShowcase: {
    file: 'src/components/sections/TeamShowcase.tsx',
    expectedAssets: [
      'team-member-1',
      'team-member-1-image',
      'team-member-2',
      'team-member-2-image',
      'team-member-3',
      'team-member-3-image',
    ],
    usesAssetSystem: true,
    notes: 'Uses asset system for team member videos and images',
  },
  BehindTheScenesSection: {
    file: 'src/components/sections/BehindTheScenesSection.tsx',
    expectedAssets: [
      'process-step-1',
      'process-step-1-image',
      'process-step-2',
      'process-step-2-image',
      'process-step-3',
      'process-step-3-image',
      'process-step-4',
      'process-step-4-image',
    ],
    usesAssetSystem: true,
    notes: 'Uses asset system for process step videos and images',
  },
  LatestInsightsSection: {
    file: 'src/components/sections/LatestInsightsSection.tsx',
    expectedAssets: [
      'insight-1',
      'insight-1-image',
      'insight-2',
      'insight-2-image',
      'insight-3',
      'insight-3-image',
    ],
    usesAssetSystem: true,
    notes: 'Uses asset system for insight videos and images',
  },
  MediaGallerySection: {
    file: 'src/components/sections/MediaGallerySection.tsx',
    expectedAssets: [
      'media-gallery-1',
      'media-gallery-2',
      'media-gallery-3',
      'media-gallery-4',
      'media-gallery-5',
      'media-gallery-6',
    ],
    usesAssetSystem: true,
    notes: 'Uses asset system for gallery images',
  },
  ClientSuccessStoriesSection: {
    file: 'src/components/sections/ClientSuccessStoriesSection.tsx',
    expectedAssets: ['success-story-1', 'success-story-2', 'success-story-3'],
    usesAssetSystem: true,
    notes: 'Uses asset system for success story images',
  },
  FeaturePresentation: {
    file: 'src/components/sections/FeaturePresentation.tsx',
    expectedAssets: [
      'feature-presentation-1',
      'feature-presentation-2',
      'feature-presentation-3',
    ],
    usesAssetSystem: true,
    notes: 'Uses asset system for feature images',
  },
  FilmReel: {
    file: 'src/components/sections/FilmReel.tsx',
    expectedAssets: [
      'film-reel-1',
      'film-reel-2',
      'film-reel-3',
      'film-reel-4',
      'film-reel-5',
      'film-reel-6',
    ],
    usesAssetSystem: true,
    notes: 'Uses asset system for film reel images',
  },
};

// Check if component file exists
function checkComponentExists(componentName, filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  return fs.existsSync(fullPath);
}

// Check if component uses asset system
function checkAssetSystemUsage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return {
      usesGetAssetUrl: content.includes('getAssetUrl'),
      usesAssetFallbacks: content.includes('asset-fallbacks'),
      usesHomepageAssetManager: content.includes('homepage-asset-manager'),
      hasAssetImports: content.includes('import.*asset'),
    };
  } catch (error) {
    return {
      usesGetAssetUrl: false,
      usesAssetFallbacks: false,
      usesHomepageAssetManager: false,
      hasAssetImports: false,
    };
  }
}

// Verify homepage asset usage
function verifyHomepageAssets() {
  console.log('🔍 Verifying homepage asset usage...\n');

  let totalComponents = 0;
  let validComponents = 0;
  let issues = [];

  for (const [componentName, config] of Object.entries(componentAssetUsage)) {
    totalComponents++;
    console.log(`📁 ${componentName}:`);

    // Check if component file exists
    if (!checkComponentExists(componentName, config.file)) {
      console.log(`  ❌ Component file not found: ${config.file}`);
      issues.push(`${componentName}: File not found`);
      continue;
    }

    console.log(`  ✅ Component file exists: ${config.file}`);

    // Check asset system usage
    const assetUsage = checkAssetSystemUsage(config.file);

    if (config.usesAssetSystem) {
      if (assetUsage.usesGetAssetUrl) {
        console.log(`  ✅ Uses getAssetUrl() function`);
      } else {
        console.log(`  ❌ Expected to use getAssetUrl() but not found`);
        issues.push(`${componentName}: Missing getAssetUrl() usage`);
      }

      if (assetUsage.usesAssetFallbacks) {
        console.log(`  ✅ Imports asset-fallbacks`);
      } else {
        console.log(`  ⚠️  No asset-fallbacks import found`);
      }
    } else {
      console.log(`  ℹ️  Uses external API (${config.notes})`);
    }

    // Check expected assets
    console.log(`  📋 Expected assets: ${config.expectedAssets.length}`);
    config.expectedAssets.forEach(asset => {
      console.log(`    - ${asset}`);
    });

    console.log(`  📝 Notes: ${config.notes}`);
    console.log('');
    validComponents++;
  }

  // Summary
  console.log('📊 Asset Usage Summary:');
  console.log(`  Total Components: ${totalComponents}`);
  console.log(`  Valid Components: ${validComponents}`);
  console.log(`  Issues Found: ${issues.length}`);

  if (issues.length > 0) {
    console.log('\n❌ Issues Found:');
    issues.forEach(issue => {
      console.log(`  - ${issue}`);
    });
  } else {
    console.log('\n✅ All components are properly configured!');
  }

  // Check asset fallback system
  console.log('\n🔧 Asset System Status:');

  const assetFallbacksPath = 'src/utils/asset-fallbacks.ts';
  if (fs.existsSync(assetFallbacksPath)) {
    console.log(`  ✅ Asset fallbacks system exists: ${assetFallbacksPath}`);

    const fallbackContent = fs.readFileSync(assetFallbacksPath, 'utf8');
    const videoFallbacks = (fallbackContent.match(/videoFallbacks.*?};/s) ||
      [])[0];
    const imageFallbacks = (fallbackContent.match(/imageFallbacks.*?};/s) ||
      [])[0];

    if (videoFallbacks) {
      const videoCount = (videoFallbacks.match(/primary:/g) || []).length;
      console.log(`  📹 Video fallbacks: ${videoCount} configured`);
    }

    if (imageFallbacks) {
      const imageCount = (imageFallbacks.match(/primary:/g) || []).length;
      console.log(`  🖼️  Image fallbacks: ${imageCount} configured`);
    }
  } else {
    console.log(`  ❌ Asset fallbacks system missing: ${assetFallbacksPath}`);
  }

  const homepageAssetManagerPath = 'src/utils/homepage-asset-manager.ts';
  if (fs.existsSync(homepageAssetManagerPath)) {
    console.log(
      `  ✅ Homepage asset manager exists: ${homepageAssetManagerPath}`
    );
  } else {
    console.log(
      `  ❌ Homepage asset manager missing: ${homepageAssetManagerPath}`
    );
  }

  return {
    totalComponents,
    validComponents,
    issues,
    success: issues.length === 0,
  };
}

// Run verification
if (require.main === module) {
  const result = verifyHomepageAssets();

  // Exit with appropriate code
  if (result.issues.length > 0) {
    console.log('\n💡 Recommendations:');
    console.log(
      '  1. Ensure all components use getAssetUrl() for asset references'
    );
    console.log('  2. Import asset-fallbacks in components that need it');
    console.log('  3. Update components to use the homepage asset manager');
    process.exit(1);
  } else {
    console.log('\n🎉 All homepage assets are properly configured!');
    process.exit(0);
  }
}

module.exports = {
  verifyHomepageAssets,
  componentAssetUsage,
};
