const fs = require('fs');
const https = require('https');
const path = require('path');

// Asset list: { url, dest }
const assets = [
  // Hero Videos (using working video URLs)
  {
    url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    dest: 'public/hero/hero-video-1.mp4',
  },
  {
    url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    dest: 'public/hero/hero-video-2.mp4',
  },
  // Hero/Background Images (Unsplash direct links)
  {
    url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/backgrounds/starry-sky.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/backgrounds/abstract-blue.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/backgrounds/modern-office.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80',
    dest: 'public/backgrounds/creative-teamwork.jpg',
  },
  // Service Illustrations (Pexels direct links)
  {
    url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=800',
    dest: 'public/services/web-development.jpg',
  },
  {
    url: 'https://images.pexels.com/photos/1103537/pexels-photo-1103537.jpeg?auto=compress&w=800',
    dest: 'public/services/ui-ux-design.jpg',
  },
  {
    url: 'https://images.pexels.com/photos/260851/pexels-photo-260851.jpeg?auto=compress&w=800',
    dest: 'public/services/video-production.jpg',
  },
  {
    url: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=800',
    dest: 'public/services/digital-marketing.jpg',
  },
  {
    url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800',
    dest: 'public/services/ai-integration.jpg',
  },
  {
    url: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&w=800',
    dest: 'public/services/consulting.jpg',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (fs.existsSync(dest)) {
      return resolve();
    }

    const file = fs.createWriteStream(dest);
    const request = https.get(url, response => {
      if (response.statusCode !== 200) {
        fs.unlinkSync(dest);
        return reject(`Failed to get '${url}' (${response.statusCode})`);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });

    request.on('error', err => {
      fs.unlinkSync(dest);
      reject(err.message);
    });

    request.setTimeout(30000, () => {
      request.destroy();
      fs.unlinkSync(dest);
      reject('Request timeout');
    });
  });
}

(async () => {
  for (const asset of assets) {
    try {
      await download(asset.url, path.join(__dirname, asset.dest));
    } catch (err) {
      // console.error(`✖ Error downloading ${asset.url}: ${err}`);
    }
  }
})();
