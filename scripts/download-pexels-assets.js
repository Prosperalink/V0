const fs = require('fs');
const https = require('https');
const path = require('path');

const PEXELS_API_KEY =
  'iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea';
const PEXELS_API_BASE = 'https://api.pexels.com/v1';

// Asset categories for cinematic experience
const assetCategories = {
  'cinematic-backgrounds': {
    queries: ['cinematic', 'film', 'movie', 'dramatic lighting', 'cinema'],
    count: 10,
    type: 'video',
  },
  testimonials: {
    queries: ['business person', 'professional', 'executive', 'entrepreneur'],
    count: 15,
    type: 'photo',
  },
  'hero-videos': {
    queries: ['technology', 'innovation', 'digital', 'creative'],
    count: 5,
    type: 'video',
  },
  'service-icons': {
    queries: ['camera', 'video', 'design', 'technology', 'business'],
    count: 20,
    type: 'photo',
  },
  'brand-stories': {
    queries: ['corporate', 'business', 'team', 'office'],
    count: 12,
    type: 'photo',
  },
  'product-showcases': {
    queries: ['product', 'commercial', 'advertising', 'lifestyle'],
    count: 10,
    type: 'photo',
  },
  'event-coverage': {
    queries: ['event', 'conference', 'meeting', 'presentation'],
    count: 8,
    type: 'photo',
  },
  'testimonial-stories': {
    queries: ['interview', 'portrait', 'professional', 'success'],
    count: 10,
    type: 'photo',
  },
};

// Create directories
const createDirectories = () => {
  const dirs = [
    'public/assets/videos',
    'public/assets/images',
    'public/assets/testimonials',
    'public/assets/hero',
    'public/assets/services',
    'public/assets/brand-stories',
    'public/assets/product-showcases',
    'public/assets/events',
    'public/assets/testimonial-stories',
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

// Download file from URL
const downloadFile = (url, filepath) => {
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
};

// Search Pexels API
const searchPexels = async (query, count = 15, type = 'photo') => {
  const endpoint = type === 'video' ? '/videos/search' : '/search';
  const url = `${PEXELS_API_BASE}${endpoint}?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`;

  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    };

    https
      .get(url, options, res => {
        let data = '';
        res.on('data', chunk => (data += chunk));
        res.on('end', () => {
          try {
            const response = JSON.parse(data);
            resolve(response);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', reject);
  });
};

// Download assets for a category
const downloadCategoryAssets = async (category, config) => {
  console.log(`\n🎬 Downloading ${category} assets...`);

  const categoryDir = `public/assets/${category}`;
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }

  for (let i = 0; i < config.queries.length; i++) {
    const query = config.queries[i];
    console.log(`  Searching for: ${query}`);

    try {
      const response = await searchPexels(
        query,
        Math.ceil(config.count / config.queries.length),
        config.type
      );

      if (response.photos || response.videos) {
        const items = response.photos || response.videos;

        for (let j = 0; j < Math.min(items.length, 3); j++) {
          const item = items[j];
          const filename = `${category}_${query.replace(/\s+/g, '_')}_${j + 1}.${config.type === 'video' ? 'mp4' : 'jpg'}`;
          const filepath = path.join(categoryDir, filename);

          const downloadUrl =
            config.type === 'video'
              ? item.video_files[0]?.link
              : item.src?.large2x || item.src?.large;

          if (downloadUrl) {
            try {
              await downloadFile(downloadUrl, filepath);
              console.log(`    ✓ Downloaded: ${filename}`);

              // Save metadata
              const metadata = {
                id: item.id,
                photographer: item.photographer,
                url: item.url,
                width: item.width,
                height: item.height,
                category: category,
                query: query,
              };

              fs.writeFileSync(
                filepath.replace(/\.(jpg|mp4)$/, '.json'),
                JSON.stringify(metadata, null, 2)
              );
            } catch (error) {
              console.log(`    ✗ Failed to download: ${filename}`);
            }
          }
        }
      }
    } catch (error) {
      console.log(`  ✗ Error searching for ${query}:`, error.message);
    }
  }
};

// Main download function
const downloadAllAssets = async () => {
  console.log('🎬 Starting Pexels Asset Download for V2 Prototype...\n');

  createDirectories();

  for (const [category, config] of Object.entries(assetCategories)) {
    await downloadCategoryAssets(category, config);
  }

  console.log('\n✅ Asset download complete!');
  console.log('\n📁 Assets downloaded to:');
  console.log('  - public/assets/videos/ (cinematic backgrounds)');
  console.log('  - public/assets/images/ (general images)');
  console.log('  - public/assets/testimonials/ (testimonial photos)');
  console.log('  - public/assets/hero/ (hero section videos)');
  console.log('  - public/assets/services/ (service-related images)');
  console.log('  - public/assets/brand-stories/ (corporate/business)');
  console.log('  - public/assets/product-showcases/ (product/commercial)');
  console.log('  - public/assets/events/ (event coverage)');
  console.log('  - public/assets/testimonial-stories/ (portraits/interviews)');

  console.log('\n🎬 Next steps:');
  console.log('  1. Update components to use new assets');
  console.log('  2. Implement enhanced template system');
  console.log('  3. Add local AI integration');
  console.log('  4. Test the V2 prototype!');
};

// Run the download
downloadAllAssets().catch(console.error);
