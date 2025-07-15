const fs = require('fs');
const path = require('path');

// Configuration
const ASSETS_CONFIG = {
  baseDir: 'public/assets',
  categories: {
    hero: {
      videos: 5,
      images: 10,
      queries: [
        'cinematic office',
        'luxury workspace',
        'creative studio',
        'modern design',
        'professional environment',
      ],
    },
    process: {
      videos: 8,
      images: 15,
      queries: [
        'behind the scenes',
        'creative process',
        'design workflow',
        'team collaboration',
        'project development',
      ],
    },
    testimonials: {
      videos: 6,
      images: 12,
      queries: [
        'business people',
        'professional portraits',
        'client testimonials',
        'team meetings',
        'success stories',
      ],
    },
    gallery: {
      videos: 10,
      images: 20,
      queries: [
        'digital art',
        'web design',
        'mobile app',
        'branding',
        'marketing materials',
        'portfolio work',
      ],
    },
    insights: {
      videos: 4,
      images: 8,
      queries: [
        'business insights',
        'digital trends',
        'creative inspiration',
        'industry analysis',
      ],
    },
    services: {
      videos: 6,
      images: 12,
      queries: [
        'web development',
        'mobile development',
        'digital marketing',
        'content creation',
        'brand design',
      ],
    },
  },
};

// Utility functions
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function createPlaceholderVideo(duration = 10, outputPath) {
  // Create a simple placeholder video file (just a small binary file)
  const placeholderData = Buffer.from('placeholder video content', 'utf8');
  fs.writeFileSync(outputPath, placeholderData);
  return true;
}

function createPlaceholderImage(width = 1920, height = 1080, outputPath) {
  // Create a simple placeholder image file (just a small binary file)
  const placeholderData = Buffer.from('placeholder image content', 'utf8');
  fs.writeFileSync(outputPath, placeholderData);
  return true;
}

function createMetadataFile(category, type, index, filename) {
  const metadata = {
    id: `${category}_${type}_${index}`,
    filename: filename,
    category: category,
    type: type,
    index: index,
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} ${type} ${index}`,
    description: `Cinematic ${type} for ${category} section`,
    tags: [category, type, 'cinematic', 'orson vision'],
    createdAt: new Date().toISOString(),
    dimensions:
      type === 'video'
        ? { width: 1920, height: 1080 }
        : { width: 1920, height: 1080 },
    duration: type === 'video' ? 10 : null,
    fileSize: type === 'video' ? '5MB' : '2MB',
    quality: 'high',
    format: type === 'video' ? 'mp4' : 'jpg',
    compression: type === 'video' ? 'H.264' : 'JPEG',
    colorProfile: 'sRGB',
    aspectRatio: '16:9',
    placeholder: true,
    note: 'This is a placeholder file. Replace with actual multimedia content.',
  };

  const metadataPath = path.join(
    ASSETS_CONFIG.baseDir,
    category,
    type,
    `${filename}.json`
  );
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  return metadata;
}

function createCategoryStructure() {
  console.log('📁 Creating directory structure...');

  Object.keys(ASSETS_CONFIG.categories).forEach(category => {
    const categoryDir = path.join(ASSETS_CONFIG.baseDir, category);
    ensureDirectoryExists(categoryDir);

    ['videos', 'images'].forEach(type => {
      const typeDir = path.join(categoryDir, type);
      ensureDirectoryExists(typeDir);
    });
  });
}

function generatePlaceholderAssets() {
  console.log('🎬 Generating placeholder multimedia assets...');

  Object.entries(ASSETS_CONFIG.categories).forEach(([category, config]) => {
    console.log(`\n📂 Processing ${category} category...`);

    // Generate videos
    for (let i = 1; i <= config.videos; i++) {
      const videoFilename = `${category}_video_${i.toString().padStart(2, '0')}.mp4`;
      const videoPath = path.join(
        ASSETS_CONFIG.baseDir,
        category,
        'videos',
        videoFilename
      );

      if (!fs.existsSync(videoPath)) {
        console.log(
          `  🎥 Generating video ${i}/${config.videos}: ${videoFilename}`
        );
        createPlaceholderVideo(10, videoPath);
        createMetadataFile(category, 'video', i, videoFilename);
      }
    }

    // Generate images
    for (let i = 1; i <= config.images; i++) {
      const imageFilename = `${category}_image_${i.toString().padStart(2, '0')}.jpg`;
      const imagePath = path.join(
        ASSETS_CONFIG.baseDir,
        category,
        'images',
        imageFilename
      );

      if (!fs.existsSync(imagePath)) {
        console.log(
          `  🖼️  Generating image ${i}/${config.images}: ${imageFilename}`
        );
        createPlaceholderImage(1920, 1080, imagePath);
        createMetadataFile(category, 'image', i, imageFilename);
      }
    }
  });
}

function createAssetIndex() {
  console.log('📋 Creating asset index...');

  const assetIndex = {
    generatedAt: new Date().toISOString(),
    totalAssets: 0,
    categories: {},
    summary: {
      videos: 0,
      images: 0,
      totalSize: '0MB',
    },
  };

  Object.entries(ASSETS_CONFIG.categories).forEach(([category, config]) => {
    const categoryDir = path.join(ASSETS_CONFIG.baseDir, category);
    const videosDir = path.join(categoryDir, 'videos');
    const imagesDir = path.join(categoryDir, 'images');

    const videos = fs.existsSync(videosDir)
      ? fs.readdirSync(videosDir).filter(f => f.endsWith('.mp4'))
      : [];
    const images = fs.existsSync(imagesDir)
      ? fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg'))
      : [];

    assetIndex.categories[category] = {
      videos: videos.length,
      images: images.length,
      total: videos.length + images.length,
      videoFiles: videos,
      imageFiles: images,
    };

    assetIndex.summary.videos += videos.length;
    assetIndex.summary.images += images.length;
    assetIndex.totalAssets += videos.length + images.length;
  });

  const indexPath = path.join(ASSETS_CONFIG.baseDir, 'asset-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(assetIndex, null, 2));

  console.log(`✅ Asset index created: ${assetIndex.totalAssets} total assets`);
  console.log(`   📹 Videos: ${assetIndex.summary.videos}`);
  console.log(`   🖼️  Images: ${assetIndex.summary.images}`);
}

function createAssetManifest() {
  console.log('📄 Creating asset manifest for components...');

  const manifest = {
    homepage: {
      hero: {
        backgroundVideo: '/assets/hero/videos/hero_video_01.mp4',
        backgroundImage: '/assets/hero/images/hero_image_01.jpg',
        overlayImage: '/assets/hero/images/hero_image_02.jpg',
      },
      gallery: {
        videos: [
          '/assets/gallery/videos/gallery_video_01.mp4',
          '/assets/gallery/videos/gallery_video_02.mp4',
          '/assets/gallery/videos/gallery_video_03.mp4',
        ],
        images: [
          '/assets/gallery/images/gallery_image_01.jpg',
          '/assets/gallery/images/gallery_image_02.jpg',
          '/assets/gallery/images/gallery_image_03.jpg',
        ],
      },
      process: {
        videos: [
          '/assets/process/videos/process_video_01.mp4',
          '/assets/process/videos/process_video_02.mp4',
          '/assets/process/videos/process_video_03.mp4',
        ],
        images: [
          '/assets/process/images/process_image_01.jpg',
          '/assets/process/images/process_image_02.jpg',
          '/assets/process/images/process_image_03.jpg',
        ],
      },
      testimonials: {
        videos: [
          '/assets/testimonials/videos/testimonials_video_01.mp4',
          '/assets/testimonials/videos/testimonials_video_02.mp4',
        ],
        images: [
          '/assets/testimonials/images/testimonials_image_01.jpg',
          '/assets/testimonials/images/testimonials_image_02.jpg',
        ],
      },
      insights: {
        videos: [
          '/assets/insights/videos/insights_video_01.mp4',
          '/assets/insights/videos/insights_video_02.mp4',
        ],
        images: [
          '/assets/insights/images/insights_image_01.jpg',
          '/assets/insights/images/insights_image_02.jpg',
        ],
      },
      services: {
        videos: [
          '/assets/services/videos/services_video_01.mp4',
          '/assets/services/videos/services_video_02.mp4',
        ],
        images: [
          '/assets/services/images/services_image_01.jpg',
          '/assets/services/images/services_image_02.jpg',
        ],
      },
    },
  };

  const manifestPath = path.join(ASSETS_CONFIG.baseDir, 'asset-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log('✅ Asset manifest created');
}

function createDownloadScript() {
  console.log('📥 Creating download script for real assets...');

  const downloadScript = `#!/bin/bash

# Orson Vision - Multimedia Asset Download Script
# This script downloads real multimedia assets from various sources

echo "🎬 Downloading multimedia assets for Orson Vision..."

# Create directories
mkdir -p public/assets/{hero,process,testimonials,gallery,insights,services}/{videos,images}

# Download from Pexels API (requires API key)
# Uncomment and add your Pexels API key
# PEXELS_API_KEY="your_pexels_api_key_here"

# Download videos
echo "📹 Downloading videos..."

# Hero videos
curl -H "Authorization: \$PEXELS_API_KEY" \\
  "https://api.pexels.com/videos/search?query=cinematic+office&per_page=5" \\
  -o public/assets/hero/videos/hero_videos.json

# Process videos
curl -H "Authorization: \$PEXELS_API_KEY" \\
  "https://api.pexels.com/videos/search?query=behind+the+scenes+creative&per_page=8" \\
  -o public/assets/process/videos/process_videos.json

# Testimonial videos
curl -H "Authorization: \$PEXELS_API_KEY" \\
  "https://api.pexels.com/videos/search?query=business+people+professional&per_page=6" \\
  -o public/assets/testimonials/videos/testimonials_videos.json

# Gallery videos
curl -H "Authorization: \$PEXELS_API_KEY" \\
  "https://api.pexels.com/videos/search?query=digital+art+web+design&per_page=10" \\
  -o public/assets/gallery/videos/gallery_videos.json

# Download images
echo "🖼️  Downloading images..."

# Hero images
curl -H "Authorization: \$PEXELS_API_KEY" \\
  "https://api.pexels.com/photos/search?query=luxury+workspace+modern&per_page=10" \\
  -o public/assets/hero/images/hero_images.json

# Process images
curl -H "Authorization: \$PEXELS_API_KEY" \\
  "https://api.pexels.com/photos/search?query=creative+process+design&per_page=15" \\
  -o public/assets/process/images/process_images.json

# Testimonial images
curl -H "Authorization: \$PEXELS_API_KEY" \\
  "https://api.pexels.com/photos/search?query=professional+portraits+business&per_page=12" \\
  -o public/assets/testimonials/images/testimonials_images.json

# Gallery images
curl -H "Authorization: \$PEXELS_API_KEY" \\
  "https://api.pexels.com/photos/search?query=digital+design+portfolio&per_page=20" \\
  -o public/assets/gallery/images/gallery_images.json

echo "✅ Download complete! Check the JSON files for download URLs."
echo "📝 Note: You'll need to manually download the actual files from the URLs in the JSON files."
`;

  const scriptPath = path.join(
    ASSETS_CONFIG.baseDir,
    'download-real-assets.sh'
  );
  fs.writeFileSync(scriptPath, downloadScript);

  console.log('✅ Download script created: download-real-assets.sh');
}

function createDocumentation() {
  console.log('📚 Creating documentation...');

  const documentation = `# Orson Vision - Multimedia Assets Documentation

## Overview
This directory contains all multimedia assets for the Orson Vision website, organized by category and type.

## Directory Structure
\`\`\`
public/assets/
├── hero/           # Hero section assets
│   ├── videos/     # Background videos
│   └── images/     # Hero images
├── process/        # Behind the scenes content
│   ├── videos/     # Process videos
│   └── images/     # Process images
├── testimonials/   # Client testimonials
│   ├── videos/     # Video testimonials
│   └── images/     # Client portraits
├── gallery/        # Portfolio gallery
│   ├── videos/     # Project videos
│   └── images/     # Project images
├── insights/       # Latest insights
│   ├── videos/     # Insight videos
│   └── images/     # Insight images
└── services/       # Services showcase
    ├── videos/     # Service videos
    └── images/     # Service images
\`\`\`

## Asset Specifications

### Videos
- Format: MP4
- Codec: H.264
- Resolution: 1920x1080 (Full HD)
- Frame Rate: 30fps
- Duration: 10-30 seconds
- File Size: 5-15MB

### Images
- Format: JPG
- Resolution: 1920x1080 (Full HD)
- Color Profile: sRGB
- Quality: High
- File Size: 1-3MB

## Usage in Components

### Hero Section
\`\`\`tsx
import { useAssets } from '@/lib/asset-management';

const heroAssets = useAssets('hero');
// Returns: { videos: [...], images: [...] }
\`\`\`

### Gallery Section
\`\`\`tsx
import { useGalleryAssets } from '@/lib/asset-management';

const galleryAssets = useGalleryAssets();
// Returns: { videos: [...], images: [...] }
\`\`\`

## Asset Management

### Adding New Assets
1. Place files in appropriate category directory
2. Update metadata JSON file
3. Run asset index generation script

### Updating Assets
1. Replace files in directory
2. Update metadata if needed
3. Regenerate asset index

### Performance Optimization
- Videos are lazy-loaded
- Images use responsive sizing
- Assets are cached appropriately
- CDN integration available

## Metadata Structure
Each asset has a corresponding JSON metadata file containing:
- Asset information (dimensions, duration, etc.)
- Usage guidelines
- Performance data
- SEO information

## Quality Standards
- All assets meet cinematic quality standards
- Consistent color grading
- Professional production values
- Optimized for web delivery

## Future Enhancements
- AI-generated content integration
- Dynamic asset loading
- Real-time content updates
- Interactive asset experiences
`;

  const docPath = path.join(ASSETS_CONFIG.baseDir, 'README.md');
  fs.writeFileSync(docPath, documentation);

  console.log('✅ Documentation created: README.md');
}

// Main execution
async function main() {
  console.log('🎬 Orson Vision - Multimedia Asset Generation');
  console.log('=============================================\n');

  try {
    createCategoryStructure();
    generatePlaceholderAssets();
    createAssetIndex();
    createAssetManifest();
    createDownloadScript();
    createDocumentation();

    console.log('\n🎉 Asset generation complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Review generated placeholder assets');
    console.log('2. Run download-real-assets.sh to get real content');
    console.log('3. Update component imports to use new assets');
    console.log('4. Test multimedia sections on homepage');
  } catch (error) {
    console.error('❌ Error during asset generation:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  generatePlaceholderAssets,
  createAssetIndex,
  createAssetManifest,
  ASSETS_CONFIG,
};
