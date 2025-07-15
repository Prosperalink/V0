const fs = require('fs');
const https = require('https');
const path = require('path');

// Pexels API Configuration
const PEXELS_API_KEY =
  'iJOcZebzVaISr7kLFc6VwLinxpIC7Lsk8v6dZ4okdIetld1mT3Tm83Ea';
const PEXELS_API_BASE = 'https://api.pexels.com/v1';

// Search parameters for cinematic hero video
const searchParams = {
  query: 'cinematic office creative business technology',
  per_page: 5,
  orientation: 'landscape',
  size: 'large2x',
};

async function fetchHeroVideo() {
  try {
    console.log('🔍 Searching for cinematic hero video...');

    // Search for videos
    const videoSearchUrl = `${PEXELS_API_BASE}/videos/search?query=${encodeURIComponent(searchParams.query)}&per_page=${searchParams.per_page}&orientation=${searchParams.orientation}`;

    const videoData = await makeRequest(videoSearchUrl);

    if (!videoData.videos || videoData.videos.length === 0) {
      console.log('❌ No videos found, trying alternative search...');

      // Try alternative search
      const altSearchUrl = `${PEXELS_API_BASE}/videos/search?query=professional business technology&per_page=3&orientation=landscape`;
      const altVideoData = await makeRequest(altSearchUrl);

      if (!altVideoData.videos || altVideoData.videos.length === 0) {
        throw new Error('No suitable videos found');
      }

      return processVideo(altVideoData.videos[0]);
    }

    return processVideo(videoData.videos[0]);
  } catch (error) {
    console.error('❌ Error fetching hero video:', error.message);
    return null;
  }
}

function processVideo(video) {
  console.log('✅ Found suitable video:', video.url);
  console.log('📊 Video details:', {
    id: video.id,
    duration: video.duration,
    width: video.width,
    height: video.height,
    user: video.user.name,
  });

  // Find the best quality video file
  const bestQuality =
    video.video_files.find(file => file.quality === 'hd') ||
    video.video_files.find(file => file.quality === 'sd') ||
    video.video_files[0];

  if (!bestQuality) {
    throw new Error('No suitable video file found');
  }

  return {
    id: video.id,
    url: bestQuality.link,
    poster: video.image,
    width: bestQuality.width,
    height: bestQuality.height,
    duration: video.duration,
    photographer: video.user.name,
    photographer_url: video.user.url,
  };
}

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    };

    https
      .get(url, options, res => {
        let data = '';

        res.on('data', chunk => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const jsonData = JSON.parse(data);
            resolve(jsonData);
          } catch (error) {
            reject(new Error('Invalid JSON response'));
          }
        });
      })
      .on('error', error => {
        reject(error);
      });
  });
}

async function downloadVideo(videoData) {
  try {
    console.log('📥 Downloading hero video...');

    const videoUrl = videoData.url;
    const fileName = `hero-cinematic-office-${videoData.id}.mp4`;
    const filePath = path.join(
      __dirname,
      '..',
      'public',
      'assets',
      'pages',
      'home',
      'videos',
      'hero',
      fileName
    );

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Download video file
    const file = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
      https
        .get(videoUrl, response => {
          response.pipe(file);

          file.on('finish', () => {
            file.close();
            console.log('✅ Hero video downloaded successfully:', fileName);

            // Create metadata file
            const metadata = {
              id: videoData.id,
              filename: fileName,
              url: videoData.url,
              poster: videoData.poster,
              width: videoData.width,
              height: videoData.height,
              duration: videoData.duration,
              photographer: videoData.photographer,
              photographer_url: videoData.photographer_url,
              downloaded_at: new Date().toISOString(),
              usage: 'hero-section-background',
            };

            const metadataPath = path.join(
              __dirname,
              '..',
              'public',
              'assets',
              'pages',
              'home',
              'videos',
              'hero',
              'metadata.json'
            );
            fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

            resolve({
              path: `/assets/pages/home/videos/hero/${fileName}`,
              metadata,
            });
          });
        })
        .on('error', error => {
          fs.unlink(filePath, () => {}); // Delete file on error
          reject(error);
        });
    });
  } catch (error) {
    console.error('❌ Error downloading video:', error.message);
    return null;
  }
}

async function main() {
  console.log('🎬 Orson Vision Hero Video Fetcher');
  console.log('=====================================');

  const videoData = await fetchHeroVideo();

  if (videoData) {
    const result = await downloadVideo(videoData);

    if (result) {
      console.log('\n✅ Hero video setup complete!');
      console.log('📁 File path:', result.path);
      console.log(
        '📊 Metadata saved to:',
        '/assets/pages/home/videos/hero/metadata.json'
      );
      console.log('\n🎯 Next steps:');
      console.log('1. Update HeroSection component to use the new video');
      console.log('2. Test video playback and performance');
      console.log('3. Optimize video for web delivery if needed');
    } else {
      console.log('❌ Failed to download video');
    }
  } else {
    console.log('❌ Failed to fetch video data');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { fetchHeroVideo, downloadVideo };
