const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
function createDirectories() {
  const directories = [
    'public/assets/gallery/images',
    'public/assets/testimonials',
    'public/assets/portfolio',
    'public/assets/logos',
    'public/assets/about/cinematic_humanism/images',
    'public/assets/about/mission/images',
    'public/assets/about/team/images',
  ];

  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Create placeholder images with SVG content
function createPlaceholderImage(
  filePath,
  width = 400,
  height = 300,
  text = 'Placeholder'
) {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0a0a0f;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad1)"/>
  <rect x="10" y="10" width="${width - 20}" height="${height - 20}" fill="none" stroke="#ffd700" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#ffd700" text-anchor="middle" dominant-baseline="middle">${text}</text>
  <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="14" fill="#b0b0b0" text-anchor="middle" dominant-baseline="middle">${width}x${height}</text>
</svg>`;

  fs.writeFileSync(filePath, svgContent);
  console.log(`Created placeholder image: ${filePath}`);
}

// Create all the required assets
function createAllAssets() {
  console.log('Creating demo assets...');

  // Gallery images
  const galleryImages = [
    'gallery_image_01.jpg',
    'gallery_image_02.jpg',
    'gallery_image_03.jpg',
    'gallery_image_04.jpg',
    'gallery_image_05.jpg',
    'gallery_image_06.jpg',
  ];

  galleryImages.forEach((image, index) => {
    const filePath = `public/assets/gallery/images/${image}`;
    createPlaceholderImage(filePath, 400, 300, `Gallery ${index + 1}`);
  });

  // Testimonial images
  const testimonialImages = [
    'sarah-johnson.jpg',
    'michael-chen.jpg',
    'emily-rodriguez.jpg',
  ];

  testimonialImages.forEach((image, index) => {
    const filePath = `public/assets/testimonials/${image}`;
    const names = ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez'];
    createPlaceholderImage(filePath, 200, 200, names[index]);
  });

  // Portfolio images
  const portfolioImages = [
    'cinematic-web-design.jpg',
    'digital-marketing.jpg',
    'mobile-app.jpg',
  ];

  portfolioImages.forEach((image, index) => {
    const filePath = `public/assets/portfolio/${image}`;
    const titles = ['Cinematic Web Design', 'Digital Marketing', 'Mobile App'];
    createPlaceholderImage(filePath, 400, 300, titles[index]);
  });

  // Logo images
  const logoImages = [
    'innovatecorp-logo.png',
    'startuphub-logo.png',
    'techflow-logo.png',
  ];

  logoImages.forEach((image, index) => {
    const filePath = `public/assets/logos/${image}`;
    const names = ['InnovateCorp', 'StartupHub', 'TechFlow'];
    createPlaceholderImage(filePath, 200, 80, names[index]);
  });

  // About section images
  const aboutImages = [
    'about_cinematic_humanism_cinematic_office_01.jpg',
    'about_cinematic_humanism_cinematic_office_02.jpg',
    'about_cinematic_humanism_cinematic_office_03.jpg',
    'about_cinematic_humanism_cinematic_office_04.jpg',
    'about_cinematic_humanism_cinematic_office_05.jpg',
  ];

  aboutImages.forEach((image, index) => {
    const filePath = `public/assets/about/cinematic_humanism/images/${image}`;
    createPlaceholderImage(filePath, 400, 300, `Cinematic Office ${index + 1}`);
  });

  // Mission images
  const missionImages = [
    'about_mission_cinematic_office_01.jpg',
    'about_mission_cinematic_office_02.jpg',
    'about_mission_cinematic_office_03.jpg',
    'about_mission_cinematic_office_04.jpg',
    'about_mission_cinematic_office_05.jpg',
  ];

  missionImages.forEach((image, index) => {
    const filePath = `public/assets/about/mission/images/${image}`;
    createPlaceholderImage(filePath, 400, 300, `Mission Office ${index + 1}`);
  });

  // Team images
  const teamImages = [
    'about_team_cinematic_office_01.jpg',
    'about_team_cinematic_office_02.jpg',
    'about_team_cinematic_office_03.jpg',
    'about_team_cinematic_office_04.jpg',
    'about_team_cinematic_office_05.jpg',
  ];

  teamImages.forEach((image, index) => {
    const filePath = `public/assets/about/team/images/${image}`;
    createPlaceholderImage(filePath, 400, 300, `Team Office ${index + 1}`);
  });

  console.log('All demo assets created successfully!');
}

// Create fallback images
function createFallbackImages() {
  const fallbackDir = 'public/assets/images/undefined';
  if (!fs.existsSync(fallbackDir)) {
    fs.mkdirSync(fallbackDir, { recursive: true });
  }

  for (let i = 1; i <= 5; i++) {
    const filePath = `${fallbackDir}/fallback-${i}.jpg`;
    createPlaceholderImage(filePath, 400, 300, `Fallback ${i}`);
  }
}

// Run the asset creation
try {
  createDirectories();
  createAllAssets();
  createFallbackImages();
  console.log('✅ All demo assets have been created successfully!');
} catch (error) {
  console.error('❌ Error creating assets:', error);
}
