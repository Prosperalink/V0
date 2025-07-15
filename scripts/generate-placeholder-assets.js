const fs = require('fs');
const path = require('path');

// Missing assets identified from 404 errors
const missingAssets = [
  // About page assets
  'assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_01.jpg',
  'assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_02.jpg',
  'assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_03.jpg',
  'assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_04.jpg',
  'assets/about/cinematic_humanism/images/about_cinematic_humanism_cinematic_office_05.jpg',

  'assets/about/mission/images/about_mission_cinematic_office_01.jpg',
  'assets/about/mission/images/about_mission_cinematic_office_02.jpg',
  'assets/about/mission/images/about_mission_cinematic_office_03.jpg',
  'assets/about/mission/images/about_mission_cinematic_office_04.jpg',
  'assets/about/mission/images/about_mission_cinematic_office_05.jpg',

  'assets/about/team/images/about_team_cinematic_office_01.jpg',
  'assets/about/team/images/about_team_cinematic_office_02.jpg',
  'assets/about/team/images/about_team_cinematic_office_03.jpg',
  'assets/about/team/images/about_team_cinematic_office_04.jpg',
  'assets/about/team/images/about_team_cinematic_office_05.jpg',

  // Portfolio assets
  'assets/portfolio/cinematic-web-design.jpg',
  'assets/portfolio/digital-marketing.jpg',
  'assets/portfolio/mobile-app.jpg',

  // Logo assets
  'assets/logos/techflow-logo.png',
  'assets/logos/innovatecorp-logo.png',
  'assets/logos/startuphub-logo.png',

  // Testimonial assets
  'assets/testimonials/sarah-johnson.jpg',
  'assets/testimonials/michael-chen.jpg',
  'assets/testimonials/emily-rodriguez.jpg',

  // Video assets
  'assets/videos/digital-marketing.mp4',
  'assets/videos/testimonial-emily.mp4',

  // Fallback assets
  'assets/images/undefined/fallback-1.jpg',
];

// SVG placeholder generator
function generateSVGPlaceholder(width, height, text, category) {
  const colors = {
    about: '#1a1a2e',
    portfolio: '#16213e',
    logos: '#0f3460',
    testimonials: '#0a0a0f',
    videos: '#1a1a2e',
    default: '#16213e',
  };

  const bgColor = colors[category] || colors.default;
  const textColor = '#ffd700';

  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <rect x="2" y="2" width="${width - 4}" height="${height - 4}" fill="none" stroke="${textColor}" stroke-width="2" stroke-dasharray="5,5"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
    <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="10" fill="${textColor}" text-anchor="middle" opacity="0.7">${width}x${height}</text>
  </svg>`;
}

// Create directory if it doesn't exist
function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Generate placeholder for different file types
function generatePlaceholder(assetPath) {
  const publicPath = path.join('public', assetPath);
  ensureDirectoryExists(publicPath);

  const ext = path.extname(assetPath).toLowerCase();
  const category = assetPath.split('/')[1]; // Extract category from path
  const filename = path.basename(assetPath, ext);

  let width = 800;
  let height = 600;

  // Adjust dimensions based on category and filename
  if (category === 'logos') {
    width = 300;
    height = 100;
  } else if (category === 'testimonials') {
    width = 400;
    height = 400;
  } else if (category === 'portfolio') {
    width = 600;
    height = 400;
  } else if (category === 'about') {
    width = 800;
    height = 600;
  }

  const text = filename.replace(/_/g, ' ').replace(/-/g, ' ');

  if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
    const svg = generateSVGPlaceholder(width, height, text, category);
    fs.writeFileSync(publicPath, svg);
    console.log(`✅ Created placeholder: ${assetPath}`);
  } else if (ext === '.mp4') {
    // Create a simple text file for video placeholders
    const placeholderText = `Video placeholder for: ${text}\nCategory: ${category}\nDimensions: ${width}x${height}`;
    fs.writeFileSync(publicPath.replace('.mp4', '.txt'), placeholderText);
    console.log(
      `✅ Created video placeholder: ${assetPath.replace('.mp4', '.txt')}`
    );
  }
}

// Main execution
console.log('🎬 Generating placeholder assets for Orson Vision...\n');

missingAssets.forEach(assetPath => {
  try {
    generatePlaceholder(assetPath);
  } catch (error) {
    console.error(
      `❌ Error creating placeholder for ${assetPath}:`,
      error.message
    );
  }
});

console.log('\n🎉 Placeholder generation complete!');
console.log(
  '📝 Note: Video files (.mp4) have been replaced with .txt files as placeholders.'
);
console.log(
  '🖼️  Image files (.jpg, .png) have been replaced with SVG placeholders.'
);
