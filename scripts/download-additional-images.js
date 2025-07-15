const { createClient } = require('pexels');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PEXELS_API_KEY =
  'iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea';
const client = createClient(PEXELS_API_KEY);

// Additional image requirements for matrix components
const additionalImages = {
  planets: {
    corporate: { query: 'corporate business modern', width: 100, height: 100 },
    smes: { query: 'small business startup', width: 100, height: 100 },
    weddings: { query: 'wedding celebration', width: 100, height: 100 },
    tourism: { query: 'travel destination', width: 100, height: 100 },
    healthcare: { query: 'medical healthcare', width: 100, height: 100 },
    schools: { query: 'education learning', width: 100, height: 100 },
    nonprofits: { query: 'charity community', width: 100, height: 100 },
    fashion: { query: 'fashion style', width: 100, height: 100 },
  },
  nebulas: {
    video: { query: 'video production camera', width: 100, height: 100 },
    cinematic: { query: 'cinematic film', width: 100, height: 100 },
    motion: { query: 'motion design animation', width: 100, height: 100 },
    photography: { query: 'photography camera', width: 100, height: 100 },
    graphic: { query: 'graphic design creative', width: 100, height: 100 },
    web: { query: 'web design digital', width: 100, height: 100 },
    marketing: { query: 'digital marketing', width: 100, height: 100 },
    specialized: { query: 'specialized services', width: 100, height: 100 },
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
      orientation: 'square',
    });

    if (queryResult.photos && queryResult.photos.length > 0) {
      const photo = queryResult.photos[0];
      const imageUrl = photo.src.medium; // Use medium size for thumbnails

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

async function downloadAdditionalImages() {
  console.log('🚀 Starting additional Pexels image download...\n');

  const baseDir = 'public/assets';

  // Download planet thumbnails
  console.log('📸 Downloading planet thumbnails...');
  for (const [planet, requirements] of Object.entries(
    additionalImages.planets
  )) {
    await searchAndDownloadImage(
      requirements.query,
      requirements.width,
      requirements.height,
      `${baseDir}/planets-of-partnership/${planet}/${planet}-thumbnail.jpg`
    );
  }

  // Download nebula thumbnails
  console.log('\n📸 Downloading nebula thumbnails...');
  for (const [nebula, requirements] of Object.entries(
    additionalImages.nebulas
  )) {
    await searchAndDownloadImage(
      requirements.query,
      requirements.width,
      requirements.height,
      `${baseDir}/services/nebulas/${nebula}-thumbnail.jpg`
    );
  }

  console.log('\n🎉 All additional images downloaded successfully!');
}

// Run the download
downloadAdditionalImages().catch(console.error);
