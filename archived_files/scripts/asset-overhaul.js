const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Pexels API Configuration
const PEXELS_API_KEY =
  'iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea';
const PEXELS_BASE_URL = 'https://api.pexels.com/v1';

// Asset requirements for the Cinematic Universe theme
const ASSET_REQUIREMENTS = [
  {
    type: 'video',
    searchTerm: 'cosmic portal wormhole abstract space travel nebula formation',
    path: 'public/assets/homepage/hero/cosmic-portal.mp4',
    description: 'Hero video - cosmic portal or dimensional gateway',
  },
  {
    type: 'image',
    searchTerm: 'galaxy celestial cityscape futuristic city nebula',
    path: 'public/assets/homepage/hero/galaxy-cityscape.jpg',
    description: 'Hero fallback image - stylized galaxy cityscape',
  },
  {
    type: 'image',
    searchTerm:
      'star map glowing blueprint holographic chart constellation lines',
    path: 'public/assets/homepage/manifesto/cosmic-blueprint.jpg',
    description: 'Manifesto section - cosmic blueprint or star map',
  },
  {
    type: 'image',
    searchTerm: 'abstract planet icon nebula icon digital precision',
    path: 'public/assets/homepage/solutions/planet-solutions.jpg',
    description: 'Solutions matrix - abstract planet icons',
  },
  {
    type: 'image',
    searchTerm: 'storytelling light trails digital narrative',
    path: 'public/assets/homepage/pillars/storytelling-pillars.jpg',
    description: 'Pillars section - storytelling light trails',
  },
  {
    type: 'image',
    searchTerm: 'high tech production cinematic equipment',
    path: 'public/assets/homepage/process/high-tech-production.jpg',
    description: 'Process section - high tech production equipment',
  },
  {
    type: 'image',
    searchTerm: 'cosmic team collaboration space station',
    path: 'public/assets/homepage/team/cosmic-team.jpg',
    description: 'Team section - cosmic team collaboration',
  },
  {
    type: 'image',
    searchTerm: 'digital portal interface holographic display',
    path: 'public/assets/homepage/contact/contact-portal.jpg',
    description: 'Contact section - digital portal interface',
  },
];

// Utility functions
function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function deleteDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`Deleted directory: ${dirPath}`);
  }
}

function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;

    const file = fs.createWriteStream(filePath);
    protocol
      .get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filePath}`);
          resolve();
        });
      })
      .on('error', err => {
        fs.unlink(filePath, () => {}); // Delete the file if download failed
        reject(err);
      });
  });
}

async function searchPexels(query, type = 'image', perPage = 1) {
  const searchUrl = `${PEXELS_BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}`;

  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    };

    https
      .get(searchUrl, options, res => {
        let data = '';
        res.on('data', chunk => (data += chunk));
        res.on('end', () => {
          try {
            const result = JSON.parse(data);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', reject);
  });
}

async function downloadAsset(requirement) {
  try {
    console.log(`Searching for: ${requirement.description}`);
    console.log(`Search terms: ${requirement.searchTerm}`);

    const searchResult = await searchPexels(
      requirement.searchTerm,
      requirement.type
    );

    if (!searchResult.photos || searchResult.photos.length === 0) {
      console.log(
        `No ${requirement.type} found for: ${requirement.searchTerm}`
      );
      return false;
    }

    const asset = searchResult.photos[0];
    let downloadUrl;
    let fileName;

    if (requirement.type === 'video') {
      downloadUrl = asset.video_files[0].link;
      fileName = `${path.basename(requirement.path, path.extname(requirement.path))}.mp4`;
    } else {
      downloadUrl = asset.src.original;
      fileName = path.basename(requirement.path);
    }

    // Ensure directory exists
    ensureDirectoryExists(requirement.path);

    // Download the asset
    await downloadFile(downloadUrl, requirement.path);

    console.log(`Successfully downloaded: ${requirement.path}`);
    return true;
  } catch (error) {
    console.error(
      `Error downloading ${requirement.description}:`,
      error.message
    );
    return false;
  }
}

async function cleanupOldAssets() {
  console.log('🧹 Cleaning up old assets...');

  const assetsDir = 'public/assets';
  if (fs.existsSync(assetsDir)) {
    deleteDirectory(assetsDir);
    console.log('✅ Old assets directory deleted');
  }

  // Recreate the base assets directory
  fs.mkdirSync(assetsDir, { recursive: true });
  console.log('✅ Created fresh assets directory');
}

async function downloadNewAssets() {
  console.log('🚀 Starting asset download process...');

  let successCount = 0;
  let totalCount = ASSET_REQUIREMENTS.length;

  for (const requirement of ASSET_REQUIREMENTS) {
    console.log(`\n📥 Processing: ${requirement.description}`);
    const success = await downloadAsset(requirement);
    if (success) successCount++;

    // Add a small delay to be respectful to the API
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(
    `\n✅ Asset download complete: ${successCount}/${totalCount} assets downloaded successfully`
  );
}

async function main() {
  try {
    console.log('🎬 Starting Cinematic Universe Asset Overhaul...\n');

    // Step 1: Clean up old assets
    await cleanupOldAssets();

    // Step 2: Download new assets
    await downloadNewAssets();

    console.log('\n🎉 Asset overhaul process completed successfully!');
  } catch (error) {
    console.error('❌ Error during asset overhaul:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main, ASSET_REQUIREMENTS };
