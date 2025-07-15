/**
 * Create Placeholder Assets for Orson Vision
 * Generates placeholder assets for all homepage sections
 */

const fs = require('fs');
const path = require('path');

// Asset configuration for homepage sections
const homepageAssets = {
  hero: {
    backgroundVideo: '/hero/hero-video.mp4',
    posterImage: '/hero/hero-poster.jpg',
  },
  services: {
    contentCreation: {
      video: '/assets/services/content_creation/service-hero.mp4',
      image: '/assets/services/content_creation/service-image.jpg',
    },
    creativeDesign: {
      video: '/assets/services/creative_design/service-hero.mp4',
      image: '/assets/services/creative_design/service-image.jpg',
    },
    digitalInnovation: {
      video: '/assets/services/digital_innovation/service-hero.mp4',
      image: '/assets/services/digital_innovation/service-image.jpg',
    },
    strategicConsulting: {
      video: '/assets/services/strategic_consulting/service-hero.mp4',
      image: '/assets/services/strategic_consulting/service-image.jpg',
    },
    technologySolutions: {
      video: '/assets/services/technology_solutions/service-hero.mp4',
      image: '/assets/services/technology_solutions/service-image.jpg',
    },
  },
  team: {
    member1: {
      video: '/assets/team/team-member-1.mp4',
      image: '/assets/team/team-member-1.jpg',
    },
    member2: {
      video: '/assets/team/team-member-2.mp4',
      image: '/assets/team/team-member-2.jpg',
    },
    member3: {
      video: '/assets/team/team-member-3.mp4',
      image: '/assets/team/team-member-3.jpg',
    },
  },
  process: {
    step1: {
      video: '/assets/process/process-step-1.mp4',
      image: '/assets/process/process-step-1.jpg',
    },
    step2: {
      video: '/assets/process/process-step-2.mp4',
      image: '/assets/process/process-step-2.jpg',
    },
    step3: {
      video: '/assets/process/process-step-3.mp4',
      image: '/assets/process/process-step-3.jpg',
    },
    step4: {
      video: '/assets/process/process-step-4.mp4',
      image: '/assets/process/process-step-4.jpg',
    },
  },
  insights: {
    insight1: {
      video: '/assets/blog/articles/insight-1.mp4',
      image: '/assets/blog/articles/insight-1.jpg',
    },
    insight2: {
      video: '/assets/blog/articles/insight-2.mp4',
      image: '/assets/blog/articles/insight-2.jpg',
    },
    insight3: {
      video: '/assets/blog/articles/insight-3.mp4',
      image: '/assets/blog/articles/insight-3.jpg',
    },
  },
  gallery: {
    item1: '/assets/gallery/gallery-1.jpg',
    item2: '/assets/gallery/gallery-2.jpg',
    item3: '/assets/gallery/gallery-3.jpg',
    item4: '/assets/gallery/gallery-4.jpg',
    item5: '/assets/gallery/gallery-5.jpg',
    item6: '/assets/gallery/gallery-6.jpg',
  },
  successStories: {
    story1: '/assets/success-stories/success-story-1.jpg',
    story2: '/assets/success-stories/success-story-2.jpg',
    story3: '/assets/success-stories/success-story-3.jpg',
  },
  features: {
    feature1: '/assets/features/feature-1.jpg',
    feature2: '/assets/features/feature-2.jpg',
    feature3: '/assets/features/feature-3.jpg',
  },
  filmReel: {
    reel1: '/assets/film-reel/film-reel-1.jpg',
    reel2: '/assets/film-reel/film-reel-2.jpg',
    reel3: '/assets/film-reel/film-reel-3.jpg',
    reel4: '/assets/film-reel/film-reel-4.jpg',
    reel5: '/assets/film-reel/film-reel-5.jpg',
    reel6: '/assets/film-reel/film-reel-6.jpg',
  },
};

// Create directory structure
function createDirectories() {
  const directories = [
    'public/hero',
    'public/assets/services/content_creation',
    'public/assets/services/creative_design',
    'public/assets/services/digital_innovation',
    'public/assets/services/strategic_consulting',
    'public/assets/services/technology_solutions',
    'public/assets/team',
    'public/assets/process',
    'public/assets/blog/articles',
    'public/assets/gallery',
    'public/assets/success-stories',
    'public/assets/features',
    'public/assets/film-reel',
    'public/assets/videos',
    'public/assets/images',
  ];

  directories.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Create placeholder video file
function createPlaceholderVideo(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Create a simple placeholder video file (1 second black video)
  const placeholderVideoContent = Buffer.from([
    0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70, 0x6d, 0x70, 0x34, 0x32,
    0x00, 0x00, 0x00, 0x00, 0x6d, 0x70, 0x34, 0x32, 0x69, 0x73, 0x6f, 0x6d,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  ]);

  fs.writeFileSync(filePath, placeholderVideoContent);
  console.log(`Created placeholder video: ${filePath}`);
}

// Create placeholder image file
function createPlaceholderImage(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Create a simple placeholder image (1x1 pixel PNG)
  const placeholderImageContent = Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d,
    0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
    0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xde, 0x00, 0x00, 0x00,
    0x0c, 0x49, 0x44, 0x41, 0x54, 0x08, 0x99, 0x01, 0x01, 0x00, 0x00, 0x00,
    0xff, 0xff, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01, 0xe2, 0x21, 0xbc, 0x33,
    0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
  ]);

  fs.writeFileSync(filePath, placeholderImageContent);
  console.log(`Created placeholder image: ${filePath}`);
}

// Generate all placeholder assets
function generatePlaceholderAssets() {
  console.log('Creating placeholder assets for Orson Vision...\n');

  // Create directories
  createDirectories();

  // Generate hero assets
  createPlaceholderVideo('public/hero/hero-video.mp4');
  createPlaceholderImage('public/hero/hero-poster.jpg');

  // Generate service assets
  Object.entries(homepageAssets.services).forEach(([service, assets]) => {
    createPlaceholderVideo(`public${assets.video}`);
    createPlaceholderImage(`public${assets.image}`);
  });

  // Generate team assets
  Object.entries(homepageAssets.team).forEach(([member, assets]) => {
    createPlaceholderVideo(`public${assets.video}`);
    createPlaceholderImage(`public${assets.image}`);
  });

  // Generate process assets
  Object.entries(homepageAssets.process).forEach(([step, assets]) => {
    createPlaceholderVideo(`public${assets.video}`);
    createPlaceholderImage(`public${assets.image}`);
  });

  // Generate insights assets
  Object.entries(homepageAssets.insights).forEach(([insight, assets]) => {
    createPlaceholderVideo(`public${assets.video}`);
    createPlaceholderImage(`public${assets.image}`);
  });

  // Generate gallery assets
  Object.entries(homepageAssets.gallery).forEach(([item, imagePath]) => {
    createPlaceholderImage(`public${imagePath}`);
  });

  // Generate success stories assets
  Object.entries(homepageAssets.successStories).forEach(
    ([story, imagePath]) => {
      createPlaceholderImage(`public${imagePath}`);
    }
  );

  // Generate features assets
  Object.entries(homepageAssets.features).forEach(([feature, imagePath]) => {
    createPlaceholderImage(`public${imagePath}`);
  });

  // Generate film reel assets
  Object.entries(homepageAssets.filmReel).forEach(([reel, imagePath]) => {
    createPlaceholderImage(`public${imagePath}`);
  });

  // Create general placeholder assets
  createPlaceholderVideo('public/assets/videos/placeholder-video.mp4');
  createPlaceholderImage('public/assets/images/placeholder.jpg');

  console.log('\n✅ All placeholder assets created successfully!');
  console.log('\n📁 Asset locations:');
  console.log('- Hero: /hero/');
  console.log('- Services: /assets/services/');
  console.log('- Team: /assets/team/');
  console.log('- Process: /assets/process/');
  console.log('- Insights: /assets/blog/articles/');
  console.log('- Gallery: /assets/gallery/');
  console.log('- Success Stories: /assets/success-stories/');
  console.log('- Features: /assets/features/');
  console.log('- Film Reel: /assets/film-reel/');
  console.log('- Placeholders: /assets/videos/, /assets/images/');
}

// Run the script
if (require.main === module) {
  generatePlaceholderAssets();
}

module.exports = {
  generatePlaceholderAssets,
  homepageAssets,
};
