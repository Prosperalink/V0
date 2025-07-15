const { createClient } = require('pexels');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PEXELS_API_KEY =
  'iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea';
const client = createClient(PEXELS_API_KEY);

// Image requirements for different sections
const imageRequirements = {
  homepage: {
    hero: { query: 'cosmic space galaxy', width: 1920, height: 1080 },
    manifesto: { query: 'cinematic film production', width: 1200, height: 800 },
    matrix: { query: 'digital technology abstract', width: 800, height: 600 },
    pillars: { query: 'business corporate modern', width: 800, height: 600 },
    testimonials: {
      query: 'professional portrait business',
      width: 400,
      height: 400,
    },
  },
  about: {
    hero: { query: 'team collaboration creative', width: 1920, height: 1080 },
    team: { query: 'professional headshot business', width: 400, height: 400 },
  },
  services: {
    hero: { query: 'digital services technology', width: 1920, height: 1080 },
    nebulas: { query: 'creative design abstract', width: 800, height: 600 },
  },
  portfolio: {
    hero: { query: 'portfolio showcase creative', width: 1920, height: 1080 },
    projects: { query: 'web design digital', width: 800, height: 600 },
  },
  contact: {
    hero: { query: 'contact communication modern', width: 1920, height: 1080 },
  },
  planets: {
    corporate: {
      query: 'corporate business modern office',
      width: 1200,
      height: 800,
    },
    smes: { query: 'small business startup', width: 1200, height: 800 },
    weddings: {
      query: 'wedding celebration romantic',
      width: 1200,
      height: 800,
    },
    tourism: {
      query: 'travel destination beautiful',
      width: 1200,
      height: 800,
    },
    healthcare: {
      query: 'medical healthcare modern',
      width: 1200,
      height: 800,
    },
    schools: { query: 'education learning modern', width: 1200, height: 800 },
    nonprofits: {
      query: 'charity community helping',
      width: 1200,
      height: 800,
    },
    fashion: { query: 'fashion style modern', width: 1200, height: 800 },
    artists: { query: 'art creative studio', width: 1200, height: 800 },
  },
};

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https
      .get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filepath);
        });
      })
      .on('error', err => {
        fs.unlink(filepath, () => {}); // Delete the file async
        reject(err);
      });
  });
}

async function searchAndDownloadImage(query, width, height, filename) {
  try {
    const queryResult = await client.photos.search({
      query,
      per_page: 1,
      orientation: 'landscape',
    });

    if (queryResult.photos && queryResult.photos.length > 0) {
      const photo = queryResult.photos[0];
      const imageUrl = photo.src.original;

      // Create directory if it doesn't exist
      const dir = path.dirname(filename);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      await downloadImage(imageUrl, filename);
      console.log(`✅ Downloaded: ${filename}`);
      return filename;
    } else {
      console.log(`❌ No images found for query: ${query}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error downloading ${filename}:`, error.message);
    return null;
  }
}

async function downloadAllImages() {
  console.log('🚀 Starting Pexels image download...\n');

  const baseDir = 'public/assets';

  // Create base directories
  const directories = [
    'homepage/hero',
    'homepage/manifesto',
    'homepage/matrix',
    'homepage/pillars',
    'homepage/testimonials',
    'about/hero',
    'about/team',
    'services/hero',
    'services/nebulas',
    'portfolio/hero',
    'portfolio/projects',
    'contact/hero',
    'planets-of-partnership/corporate',
    'planets-of-partnership/smes',
    'planets-of-partnership/weddings',
    'planets-of-partnership/tourism',
    'planets-of-partnership/healthcare',
    'planets-of-partnership/schools',
    'planets-of-partnership/nonprofits',
    'planets-of-partnership/fashion',
    'planets-of-partnership/artists',
  ];

  directories.forEach(dir => {
    const fullPath = path.join(baseDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });

  // Download homepage images
  console.log('📸 Downloading homepage images...');
  await searchAndDownloadImage(
    imageRequirements.homepage.hero.query,
    imageRequirements.homepage.hero.width,
    imageRequirements.homepage.hero.height,
    `${baseDir}/homepage/hero/hero-background.jpg`
  );

  await searchAndDownloadImage(
    imageRequirements.homepage.manifesto.query,
    imageRequirements.homepage.manifesto.width,
    imageRequirements.homepage.manifesto.height,
    `${baseDir}/homepage/manifesto/manifesto-background.jpg`
  );

  await searchAndDownloadImage(
    imageRequirements.homepage.matrix.query,
    imageRequirements.homepage.matrix.width,
    imageRequirements.homepage.matrix.height,
    `${baseDir}/homepage/matrix/matrix-background.jpg`
  );

  await searchAndDownloadImage(
    imageRequirements.homepage.pillars.query,
    imageRequirements.homepage.pillars.width,
    imageRequirements.homepage.pillars.height,
    `${baseDir}/homepage/pillars/pillars-background.jpg`
  );

  // Download about page images
  console.log('\n📸 Downloading about page images...');
  await searchAndDownloadImage(
    imageRequirements.about.hero.query,
    imageRequirements.about.hero.width,
    imageRequirements.about.hero.height,
    `${baseDir}/about/hero/about-hero.jpg`
  );

  // Download services page images
  console.log('\n📸 Downloading services page images...');
  await searchAndDownloadImage(
    imageRequirements.services.hero.query,
    imageRequirements.services.hero.width,
    imageRequirements.services.hero.height,
    `${baseDir}/services/hero/services-hero.jpg`
  );

  // Download portfolio page images
  console.log('\n📸 Downloading portfolio page images...');
  await searchAndDownloadImage(
    imageRequirements.portfolio.hero.query,
    imageRequirements.portfolio.hero.width,
    imageRequirements.portfolio.hero.height,
    `${baseDir}/portfolio/hero/portfolio-hero.jpg`
  );

  // Download contact page images
  console.log('\n📸 Downloading contact page images...');
  await searchAndDownloadImage(
    imageRequirements.contact.hero.query,
    imageRequirements.contact.hero.width,
    imageRequirements.contact.hero.height,
    `${baseDir}/contact/hero/contact-hero.jpg`
  );

  // Download planet images
  console.log('\n📸 Downloading planet images...');
  for (const [planet, requirements] of Object.entries(
    imageRequirements.planets
  )) {
    await searchAndDownloadImage(
      requirements.query,
      requirements.width,
      requirements.height,
      `${baseDir}/planets-of-partnership/${planet}/${planet}-hero.jpg`
    );
  }

  console.log('\n🎉 All images downloaded successfully!');
}

// Run the download
downloadAllImages().catch(console.error);
