const fs = require('fs');
const path = require('path');

// Mapping of placeholder URLs to real image paths
const imageReplacements = {
  // Homepage
  'https://placehold.co/1920x1080/1A1A2E/F0F0F0?text=Galaxy+Cityscape+Image':
    '/assets/homepage/hero/hero-background.jpg',
  'https://placehold.co/1200x800/0F3460/FFD700?text=Cosmic+Blueprint':
    '/assets/homepage/manifesto/manifesto-background.jpg',
  'https://placehold.co/800x600/1C1C1C/FFD700?text=Cosmic+Precision':
    '/assets/homepage/matrix/matrix-background.jpg',
  'https://placehold.co/800x600/0A0F1A/E0E0E0?text=Dimensional+Storytelling':
    '/assets/homepage/pillars/pillars-background.jpg',

  // About page
  'https://placehold.co/1920x1080/0A0A0F/E0E0E0?text=Team+Collaboration':
    '/assets/about/hero/about-hero.jpg',

  // Services page
  'https://placehold.co/1920x1080/0A0F1A/FFED4E?text=Nebula+Formation+Video':
    '/assets/services/hero/services-hero.jpg',
  'https://placehold.co/800x600/1C1C1C/F0F0F0?text=Cosmic+Production+Image':
    '/assets/services/nebulas/video-thumbnail.jpg',
  'https://placehold.co/800x600/1A1A2E/E0E0E0?text=Galactic+Shoot+Image':
    '/assets/services/nebulas/cinematic-thumbnail.jpg',
  'https://placehold.co/800x600/0A0A0F/FFFFFF?text=Stellar+Shot+Image':
    '/assets/services/nebulas/photography-thumbnail.jpg',
  'https://placehold.co/800x600/16213E/B0B0B0?text=Holographic+Animation+Image':
    '/assets/services/nebulas/motion-thumbnail.jpg',

  // Portfolio page
  'https://placehold.co/1920x1080/0A0A0F/E0E0E0?text=Star+Cluster+Portfolio':
    '/assets/portfolio/hero/portfolio-hero.jpg',

  // Contact page
  'https://placehold.co/1920x1080/0A0A0F/B0B0B0?text=Nexus+Command+Center':
    '/assets/contact/hero/contact-hero.jpg',

  // Planet pages
  'https://placehold.co/1920x600/1A1A2E/B0B0B0?text=Corporate+Galaxy':
    '/assets/planets-of-partnership/corporate/corporate-hero.jpg',
  'https://placehold.co/800x450/0F3460/FFD700?text=Cosmic+Hurdles':
    '/assets/planets-of-partnership/corporate/corporate-hero.jpg',
  'https://placehold.co/400x300/16213E/FFFFFF?text=Digital+Gateway':
    '/assets/services/nebulas/web-thumbnail.jpg',
  'https://placehold.co/400x300/1A1A2E/FFED4E?text=Marketing+Campaign':
    '/assets/services/nebulas/marketing-thumbnail.jpg',
  'https://placehold.co/400x300/0F3460/D4AF37?text=Video+Saga':
    '/assets/services/nebulas/video-thumbnail.jpg',
  'https://placehold.co/400x300/1C1C1C/E0E0E0?text=Brand+Identity':
    '/assets/services/nebulas/graphic-thumbnail.jpg',
  'https://placehold.co/800x450/0A0F1A/D4AF37?text=Stellar+Pathways+Video':
    '/assets/services/hero/services-hero.jpg',

  // Matrix thumbnails
  'https://placehold.co/100x100/16213E/FFFFFF?text=Corporate+Planet':
    '/assets/planets-of-partnership/corporate/corporate-thumbnail.jpg',
  'https://placehold.co/100x100/1A1A2E/F0F0F0?text=SME+Planet':
    '/assets/planets-of-partnership/smes/smes-thumbnail.jpg',
  'https://placehold.co/100x100/1A1A2E/FFED4E?text=Wedding+Planet':
    '/assets/planets-of-partnership/weddings/weddings-thumbnail.jpg',
  'https://placehold.co/100x100/0F3460/B0B0B0?text=Tourism+Planet':
    '/assets/planets-of-partnership/tourism/tourism-thumbnail.jpg',
  'https://placehold.co/100x100/1C1C1C/D4AF37?text=Healthcare+Planet':
    '/assets/planets-of-partnership/healthcare/healthcare-thumbnail.jpg',
  'https://placehold.co/100x100/0A0A0F/E0E0E0?text=Schools+Planet':
    '/assets/planets-of-partnership/schools/schools-thumbnail.jpg',
  'https://placehold.co/100x100/16213E/FFED4E?text=NonProfit+Planet':
    '/assets/planets-of-partnership/nonprofits/nonprofits-thumbnail.jpg',
  'https://placehold.co/100x100/1A1A2E/F0F0F0?text=Fashion+Planet':
    '/assets/planets-of-partnership/fashion/fashion-thumbnail.jpg',

  // Nebula thumbnails
  'https://placehold.co/100x100/0A0A0F/D4AF37?text=Video+Production+Nebula':
    '/assets/services/nebulas/video-thumbnail.jpg',
  'https://placehold.co/100x100/1A1A2E/FFED4E?text=Cinematic+Production+Nebula':
    '/assets/services/nebulas/cinematic-thumbnail.jpg',
  'https://placehold.co/100x100/0F3460/F0F0F0?text=Motion+Design+Nebula':
    '/assets/services/nebulas/motion-thumbnail.jpg',
  'https://placehold.co/100x100/16213E/B0B0B0?text=Photography+Nebula':
    '/assets/services/nebulas/photography-thumbnail.jpg',
  'https://placehold.co/100x100/1C1C1C/D4AF37?text=Graphic+Design+Nebula':
    '/assets/services/nebulas/graphic-thumbnail.jpg',
  'https://placehold.co/100x100/0A0A0F/E0E0E0?text=Web+Creation+Nebula':
    '/assets/services/nebulas/web-thumbnail.jpg',
  'https://placehold.co/100x100/1A1A2E/FFED4E?text=Digital+Marketing+Nebula':
    '/assets/services/nebulas/marketing-thumbnail.jpg',
  'https://placehold.co/100x100/0F3460/FFFFFF?text=Specialized+Services+Nebula':
    '/assets/services/nebulas/specialized-thumbnail.jpg',

  // Video sources
  'https://placehold.co/1920x1080/0A0F1A/D4AF37?text=Cosmic+Portal+Video':
    '/assets/homepage/hero/hero-background.jpg',
};

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let replaced = false;

    for (const [placeholder, replacement] of Object.entries(
      imageReplacements
    )) {
      if (content.includes(placeholder)) {
        content = content.replace(
          new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
          replacement
        );
        replaced = true;
        console.log(`✅ Replaced placeholder in ${filePath}`);
      }
    }

    if (replaced) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.js') ||
      file.endsWith('.jsx')
    ) {
      replaceInFile(filePath);
    }
  }
}

console.log('🚀 Starting placeholder replacement...\n');

// Process all relevant directories
const directories = ['src/app', 'src/components', 'src/lib', 'src/utils'];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`📁 Processing ${dir}...`);
    processDirectory(dir);
  }
});

console.log('\n🎉 Placeholder replacement completed!');
