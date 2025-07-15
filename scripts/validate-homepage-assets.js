/**
 * Validate Homepage Assets for Orson Vision
 * Ensures all homepage assets exist and are properly configured
 */

const fs = require('fs');
const path = require('path');

// Asset validation configuration
const assetValidation = {
  hero: {
    'hero-video.mp4': '/hero/hero-video.mp4',
    'hero-poster.jpg': '/hero/hero-poster.jpg',
  },
  services: {
    'content-creation': {
      'service-hero.mp4': '/assets/services/content_creation/service-hero.mp4',
      'service-image.jpg':
        '/assets/services/content_creation/service-image.jpg',
    },
    'creative-design': {
      'service-hero.mp4': '/assets/services/creative_design/service-hero.mp4',
      'service-image.jpg': '/assets/services/creative_design/service-image.jpg',
    },
    'digital-innovation': {
      'service-hero.mp4':
        '/assets/services/digital_innovation/service-hero.mp4',
      'service-image.jpg':
        '/assets/services/digital_innovation/service-image.jpg',
    },
    'strategic-consulting': {
      'service-hero.mp4':
        '/assets/services/strategic_consulting/service-hero.mp4',
      'service-image.jpg':
        '/assets/services/strategic_consulting/service-image.jpg',
    },
    'technology-solutions': {
      'service-hero.mp4':
        '/assets/services/technology_solutions/service-hero.mp4',
      'service-image.jpg':
        '/assets/services/technology_solutions/service-image.jpg',
    },
  },
  team: {
    'team-member-1.mp4': '/assets/team/team-member-1.mp4',
    'team-member-1.jpg': '/assets/team/team-member-1.jpg',
    'team-member-2.mp4': '/assets/team/team-member-2.mp4',
    'team-member-2.jpg': '/assets/team/team-member-2.jpg',
    'team-member-3.mp4': '/assets/team/team-member-3.mp4',
    'team-member-3.jpg': '/assets/team/team-member-3.jpg',
  },
  process: {
    'process-step-1.mp4': '/assets/process/process-step-1.mp4',
    'process-step-1.jpg': '/assets/process/process-step-1.jpg',
    'process-step-2.mp4': '/assets/process/process-step-2.mp4',
    'process-step-2.jpg': '/assets/process/process-step-2.jpg',
    'process-step-3.mp4': '/assets/process/process-step-3.mp4',
    'process-step-3.jpg': '/assets/process/process-step-3.jpg',
    'process-step-4.mp4': '/assets/process/process-step-4.mp4',
    'process-step-4.jpg': '/assets/process/process-step-4.jpg',
  },
  insights: {
    'insight-1.mp4': '/assets/blog/articles/insight-1.mp4',
    'insight-1.jpg': '/assets/blog/articles/insight-1.jpg',
    'insight-2.mp4': '/assets/blog/articles/insight-2.mp4',
    'insight-2.jpg': '/assets/blog/articles/insight-2.jpg',
    'insight-3.mp4': '/assets/blog/articles/insight-3.mp4',
    'insight-3.jpg': '/assets/blog/articles/insight-3.jpg',
  },
  gallery: {
    'gallery-1.jpg': '/assets/gallery/gallery-1.jpg',
    'gallery-2.jpg': '/assets/gallery/gallery-2.jpg',
    'gallery-3.jpg': '/assets/gallery/gallery-3.jpg',
    'gallery-4.jpg': '/assets/gallery/gallery-4.jpg',
    'gallery-5.jpg': '/assets/gallery/gallery-5.jpg',
    'gallery-6.jpg': '/assets/gallery/gallery-6.jpg',
  },
  successStories: {
    'success-story-1.jpg': '/assets/success-stories/success-story-1.jpg',
    'success-story-2.jpg': '/assets/success-stories/success-story-2.jpg',
    'success-story-3.jpg': '/assets/success-stories/success-story-3.jpg',
  },
  features: {
    'feature-1.jpg': '/assets/features/feature-1.jpg',
    'feature-2.jpg': '/assets/features/feature-2.jpg',
    'feature-3.jpg': '/assets/features/feature-3.jpg',
  },
  filmReel: {
    'film-reel-1.jpg': '/assets/film-reel/film-reel-1.jpg',
    'film-reel-2.jpg': '/assets/film-reel/film-reel-2.jpg',
    'film-reel-3.jpg': '/assets/film-reel/film-reel-3.jpg',
    'film-reel-4.jpg': '/assets/film-reel/film-reel-4.jpg',
    'film-reel-5.jpg': '/assets/film-reel/film-reel-5.jpg',
    'film-reel-6.jpg': '/assets/film-reel/film-reel-6.jpg',
  },
  placeholders: {
    'placeholder-video.mp4': '/assets/videos/placeholder-video.mp4',
    'placeholder.jpg': '/assets/images/placeholder.jpg',
  },
};

// Check if file exists
function checkFileExists(filePath) {
  const fullPath = path.join(process.cwd(), 'public', filePath);
  return fs.existsSync(fullPath);
}

// Validate assets
function validateAssets() {
  console.log('🔍 Validating homepage assets...\n');

  let totalAssets = 0;
  let foundAssets = 0;
  let missingAssets = [];

  // Validate hero assets
  console.log('📽️  Hero Section:');
  for (const [name, filePath] of Object.entries(assetValidation.hero)) {
    totalAssets++;
    if (checkFileExists(filePath)) {
      console.log(`  ✅ ${name}`);
      foundAssets++;
    } else {
      console.log(`  ❌ ${name} - Missing`);
      missingAssets.push(filePath);
    }
  }

  // Validate service assets
  console.log('\n🛠️  Services Section:');
  for (const [service, assets] of Object.entries(assetValidation.services)) {
    console.log(`  📁 ${service}:`);
    for (const [name, filePath] of Object.entries(assets)) {
      totalAssets++;
      if (checkFileExists(filePath)) {
        console.log(`    ✅ ${name}`);
        foundAssets++;
      } else {
        console.log(`    ❌ ${name} - Missing`);
        missingAssets.push(filePath);
      }
    }
  }

  // Validate team assets
  console.log('\n👥 Team Section:');
  for (const [name, filePath] of Object.entries(assetValidation.team)) {
    totalAssets++;
    if (checkFileExists(filePath)) {
      console.log(`  ✅ ${name}`);
      foundAssets++;
    } else {
      console.log(`  ❌ ${name} - Missing`);
      missingAssets.push(filePath);
    }
  }

  // Validate process assets
  console.log('\n⚙️  Process Section:');
  for (const [name, filePath] of Object.entries(assetValidation.process)) {
    totalAssets++;
    if (checkFileExists(filePath)) {
      console.log(`  ✅ ${name}`);
      foundAssets++;
    } else {
      console.log(`  ❌ ${name} - Missing`);
      missingAssets.push(filePath);
    }
  }

  // Validate insights assets
  console.log('\n📚 Insights Section:');
  for (const [name, filePath] of Object.entries(assetValidation.insights)) {
    totalAssets++;
    if (checkFileExists(filePath)) {
      console.log(`  ✅ ${name}`);
      foundAssets++;
    } else {
      console.log(`  ❌ ${name} - Missing`);
      missingAssets.push(filePath);
    }
  }

  // Validate gallery assets
  console.log('\n🖼️  Gallery Section:');
  for (const [name, filePath] of Object.entries(assetValidation.gallery)) {
    totalAssets++;
    if (checkFileExists(filePath)) {
      console.log(`  ✅ ${name}`);
      foundAssets++;
    } else {
      console.log(`  ❌ ${name} - Missing`);
      missingAssets.push(filePath);
    }
  }

  // Validate success stories assets
  console.log('\n🏆 Success Stories Section:');
  for (const [name, filePath] of Object.entries(
    assetValidation.successStories
  )) {
    totalAssets++;
    if (checkFileExists(filePath)) {
      console.log(`  ✅ ${name}`);
      foundAssets++;
    } else {
      console.log(`  ❌ ${name} - Missing`);
      missingAssets.push(filePath);
    }
  }

  // Validate features assets
  console.log('\n⭐ Features Section:');
  for (const [name, filePath] of Object.entries(assetValidation.features)) {
    totalAssets++;
    if (checkFileExists(filePath)) {
      console.log(`  ✅ ${name}`);
      foundAssets++;
    } else {
      console.log(`  ❌ ${name} - Missing`);
      missingAssets.push(filePath);
    }
  }

  // Validate film reel assets
  console.log('\n🎬 Film Reel Section:');
  for (const [name, filePath] of Object.entries(assetValidation.filmReel)) {
    totalAssets++;
    if (checkFileExists(filePath)) {
      console.log(`  ✅ ${name}`);
      foundAssets++;
    } else {
      console.log(`  ❌ ${name} - Missing`);
      missingAssets.push(filePath);
    }
  }

  // Validate placeholder assets
  console.log('\n🔄 Placeholder Assets:');
  for (const [name, filePath] of Object.entries(assetValidation.placeholders)) {
    totalAssets++;
    if (checkFileExists(filePath)) {
      console.log(`  ✅ ${name}`);
      foundAssets++;
    } else {
      console.log(`  ❌ ${name} - Missing`);
      missingAssets.push(filePath);
    }
  }

  // Summary
  console.log('\n📊 Asset Validation Summary:');
  console.log(`  Total Assets: ${totalAssets}`);
  console.log(`  Found: ${foundAssets}`);
  console.log(`  Missing: ${totalAssets - foundAssets}`);
  console.log(
    `  Success Rate: ${((foundAssets / totalAssets) * 100).toFixed(1)}%`
  );

  if (missingAssets.length > 0) {
    console.log('\n❌ Missing Assets:');
    missingAssets.forEach(asset => {
      console.log(`  - ${asset}`);
    });

    console.log('\n💡 To fix missing assets, run:');
    console.log('  node scripts/create-placeholder-assets.js');
  } else {
    console.log('\n✅ All homepage assets are present!');
  }

  return {
    total: totalAssets,
    found: foundAssets,
    missing: missingAssets.length,
    successRate: (foundAssets / totalAssets) * 100,
  };
}

// Run validation
if (require.main === module) {
  const result = validateAssets();

  // Exit with appropriate code
  if (result.missing > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

module.exports = {
  validateAssets,
  assetValidation,
};
