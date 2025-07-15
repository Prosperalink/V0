const fs = require('fs');
const path = require('path');
const https = require('https');

const PEXELS_API_KEY =
  'iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea';

// Asset definitions with search terms and target paths
const ASSETS = [
  // Hero Section
  {
    searchTerm: 'cosmic portal wormhole abstract space travel',
    targetPath: 'public/assets/homepage/hero/cosmic-portal.mp4',
    type: 'video',
  },
  {
    searchTerm: 'galaxy celestial cityscape futuristic city nebula',
    targetPath: 'public/assets/homepage/hero/galaxy-cityscape.jpg',
    type: 'image',
  },

  // Manifesto Section
  {
    searchTerm:
      'star map glowing blueprint holographic chart constellation lines',
    targetPath: 'public/assets/homepage/manifesto/cosmic-blueprint.jpg',
    type: 'image',
  },

  // Solutions Matrix
  {
    searchTerm: 'abstract planet icon cosmic sphere',
    targetPath: 'public/assets/homepage/solutions/planet-solutions.jpg',
    type: 'image',
  },
  {
    searchTerm: 'nebula icon cosmic cloud',
    targetPath: 'public/assets/homepage/solutions/nebula-solutions.jpg',
    type: 'image',
  },
  {
    searchTerm: 'digital precision technology abstract',
    targetPath: 'public/assets/homepage/solutions/digital-precision.jpg',
    type: 'image',
  },
  {
    searchTerm: 'storytelling light trails cinematic',
    targetPath: 'public/assets/homepage/solutions/storytelling-light.jpg',
    type: 'image',
  },
  {
    searchTerm: 'high tech production cinematic',
    targetPath: 'public/assets/homepage/solutions/high-tech-production.jpg',
    type: 'image',
  },

  // Team Section
  {
    searchTerm: 'cosmic team constellation collaboration',
    targetPath: 'public/assets/homepage/team/cosmic-team.jpg',
    type: 'image',
  },

  // Process Section
  {
    searchTerm: 'cinematic process film production',
    targetPath: 'public/assets/homepage/process/cinematic-process.jpg',
    type: 'image',
  },

  // Pillars Section
  {
    searchTerm: 'innovation pillar cosmic',
    targetPath: 'public/assets/homepage/pillars/innovation-pillar.jpg',
    type: 'image',
  },
  {
    searchTerm: 'creativity pillar artistic',
    targetPath: 'public/assets/homepage/pillars/creativity-pillar.jpg',
    type: 'image',
  },
  {
    searchTerm: 'excellence pillar premium',
    targetPath: 'public/assets/homepage/pillars/excellence-pillar.jpg',
    type: 'image',
  },

  // Contact Section
  {
    searchTerm: 'cosmic contact portal communication',
    targetPath: 'public/assets/homepage/contact/cosmic-contact.jpg',
    type: 'image',
  },
];

// Create directories recursively
function createDirectories(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Download file from URL
function downloadFile(url, targetPath) {
  return new Promise((resolve, reject) => {
    createDirectories(targetPath);

    const file = fs.createWriteStream(targetPath);
    https
      .get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${targetPath}`);
          resolve();
        });
      })
      .on('error', err => {
        fs.unlink(targetPath, () => {}); // Delete the file if download failed
        reject(err);
      });
  });
}

// Search Pexels API
async function searchPexels(query, type = 'image') {
  const searchUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
  const videoUrl = `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;

  const url = type === 'video' ? videoUrl : searchUrl;

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.pexels.com',
      path: new URL(url).pathname + new URL(url).search,
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    };

    https
      .get(options, res => {
        let data = '';
        res.on('data', chunk => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            const response = JSON.parse(data);
            if (
              type === 'video' &&
              response.videos &&
              response.videos.length > 0
            ) {
              resolve(response.videos[0].video_files[0].link);
            } else if (
              type === 'image' &&
              response.photos &&
              response.photos.length > 0
            ) {
              resolve(response.photos[0].src.large);
            } else {
              reject(new Error(`No ${type} found for query: ${query}`));
            }
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', reject);
  });
}

// Main download function
async function downloadAssets() {
  console.log('🚀 Starting Cinematic Asset Download...\n');

  for (const asset of ASSETS) {
    try {
      console.log(`🔍 Searching for: ${asset.searchTerm}`);
      const downloadUrl = await searchPexels(asset.searchTerm, asset.type);
      await downloadFile(downloadUrl, asset.targetPath);
      console.log(`📁 Saved to: ${asset.targetPath}\n`);
    } catch (error) {
      console.error(
        `❌ Failed to download ${asset.targetPath}:`,
        error.message
      );
      console.log(`⏭️  Skipping to next asset...\n`);
    }
  }

  console.log('🎬 Cinematic Asset Download Complete!');
}

// Run the downloader
downloadAssets().catch(console.error);
