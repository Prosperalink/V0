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
    'public/assets/about/values/images',
    'public/assets/about/story/images',
    'public/assets/about/cta/images',
    'public/assets/services/content_creation/images',
    'public/assets/services/creative_design/images',
    'public/assets/services/digital_innovation/images',
    'public/assets/services/strategic_consulting/images',
    'public/assets/services/technology_solutions/images',
    'public/assets/homepage/hero_section/images',
    'public/assets/homepage/client_journey/images',
    'public/assets/homepage/contact_section/images',
    'public/assets/homepage/solutions_matrix/images',
    'public/assets/homepage/success_stories/images',
    'public/assets/blog/articles/images',
    'public/assets/blog/featured/images',
    'public/assets/careers/hero/images',
    'public/assets/careers/culture/images',
    'public/assets/careers/opportunities/images',
    'public/assets/contact/hero/images',
    'public/assets/contact/contact_form/images',
    'public/assets/contact/contact_info/images',
    'public/assets/legal/privacy/images',
    'public/assets/legal/terms/images',
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
  text = 'Placeholder',
  category = ''
) {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0a0a0f;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="golden" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffd700;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#ffed4e;stop-opacity:0.6" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad1)"/>
  <rect x="10" y="10" width="${width - 20}" height="${height - 20}" fill="none" stroke="url(#golden)" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="50%" y="40%" font-family="Arial, sans-serif" font-size="20" fill="#ffd700" text-anchor="middle" dominant-baseline="middle">${text}</text>
  ${category ? `<text x="50%" y="60%" font-family="Arial, sans-serif" font-size="14" fill="#b0b0b0" text-anchor="middle" dominant-baseline="middle">${category}</text>` : ''}
  <text x="50%" y="80%" font-family="Arial, sans-serif" font-size="12" fill="#808080" text-anchor="middle" dominant-baseline="middle">${width}x${height}</text>
</svg>`;

  fs.writeFileSync(filePath, svgContent);
  console.log(`Created placeholder image: ${filePath}`);
}

// Create all the required assets
function createAllAssets() {
  console.log('Creating comprehensive demo assets...');

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
    createPlaceholderImage(
      filePath,
      400,
      300,
      `Gallery ${index + 1}`,
      'Cinematic'
    );
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
    createPlaceholderImage(filePath, 200, 200, names[index], 'Testimonial');
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
    createPlaceholderImage(filePath, 400, 300, titles[index], 'Portfolio');
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
    createPlaceholderImage(filePath, 200, 80, names[index], 'Logo');
  });

  // About section images
  const aboutSections = [
    'cinematic_humanism',
    'mission',
    'team',
    'values',
    'story',
    'cta',
  ];

  aboutSections.forEach(section => {
    for (let i = 1; i <= 5; i++) {
      const fileName = `about_${section}_cinematic_office_0${i}.jpg`;
      const filePath = `public/assets/about/${section}/images/${fileName}`;
      const sectionName = section
        .replace('_', ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      createPlaceholderImage(
        filePath,
        400,
        300,
        `${sectionName} Office ${i}`,
        'About'
      );
    }
  });

  // Services images
  const services = [
    'content_creation',
    'creative_design',
    'digital_innovation',
    'strategic_consulting',
    'technology_solutions',
  ];

  services.forEach(service => {
    for (let i = 1; i <= 3; i++) {
      const fileName = `service_${service}_image_0${i}.jpg`;
      const filePath = `public/assets/services/${service}/images/${fileName}`;
      const serviceName = service
        .replace('_', ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      createPlaceholderImage(
        filePath,
        400,
        300,
        `${serviceName} ${i}`,
        'Service'
      );
    }
  });

  // Homepage images
  const homepageSections = [
    'hero_section',
    'client_journey',
    'contact_section',
    'solutions_matrix',
    'success_stories',
  ];

  homepageSections.forEach(section => {
    for (let i = 1; i <= 3; i++) {
      const fileName = `homepage_${section}_image_0${i}.jpg`;
      const filePath = `public/assets/homepage/${section}/images/${fileName}`;
      const sectionName = section
        .replace('_', ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      createPlaceholderImage(
        filePath,
        400,
        300,
        `${sectionName} ${i}`,
        'Homepage'
      );
    }
  });

  // Blog images
  const blogSections = ['articles', 'featured'];
  blogSections.forEach(section => {
    for (let i = 1; i <= 5; i++) {
      const fileName = `blog_${section}_image_0${i}.jpg`;
      const filePath = `public/assets/blog/${section}/images/${fileName}`;
      const sectionName = section.replace(/\b\w/g, l => l.toUpperCase());
      createPlaceholderImage(
        filePath,
        400,
        300,
        `Blog ${sectionName} ${i}`,
        'Blog'
      );
    }
  });

  // Careers images
  const careersSections = ['hero', 'culture', 'opportunities'];
  careersSections.forEach(section => {
    for (let i = 1; i <= 3; i++) {
      const fileName = `careers_${section}_image_0${i}.jpg`;
      const filePath = `public/assets/careers/${section}/images/${fileName}`;
      const sectionName = section.replace(/\b\w/g, l => l.toUpperCase());
      createPlaceholderImage(
        filePath,
        400,
        300,
        `Careers ${sectionName} ${i}`,
        'Careers'
      );
    }
  });

  // Contact images
  const contactSections = ['hero', 'contact_form', 'contact_info'];
  contactSections.forEach(section => {
    for (let i = 1; i <= 2; i++) {
      const fileName = `contact_${section}_image_0${i}.jpg`;
      const filePath = `public/assets/contact/${section}/images/${fileName}`;
      const sectionName = section
        .replace('_', ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      createPlaceholderImage(
        filePath,
        400,
        300,
        `Contact ${sectionName} ${i}`,
        'Contact'
      );
    }
  });

  // Legal images
  const legalSections = ['privacy', 'terms'];
  legalSections.forEach(section => {
    for (let i = 1; i <= 2; i++) {
      const fileName = `legal_${section}_image_0${i}.jpg`;
      const filePath = `public/assets/legal/${section}/images/${fileName}`;
      const sectionName = section.replace(/\b\w/g, l => l.toUpperCase());
      createPlaceholderImage(
        filePath,
        400,
        300,
        `Legal ${sectionName} ${i}`,
        'Legal'
      );
    }
  });

  console.log('All comprehensive demo assets created successfully!');
}

// Create fallback images
function createFallbackImages() {
  const fallbackDir = 'public/assets/images/undefined';
  if (!fs.existsSync(fallbackDir)) {
    fs.mkdirSync(fallbackDir, { recursive: true });
  }

  for (let i = 1; i <= 10; i++) {
    const filePath = `${fallbackDir}/fallback-${i}.jpg`;
    createPlaceholderImage(filePath, 400, 300, `Fallback ${i}`, 'Placeholder');
  }
}

// Create video placeholders
function createVideoPlaceholders() {
  const videoDirs = [
    'public/assets/videos',
    'public/assets/about/cinematic_humanism/videos',
    'public/assets/about/mission/videos',
    'public/assets/about/team/videos',
    'public/assets/services/content_creation/videos',
    'public/assets/services/creative_design/videos',
    'public/assets/services/digital_innovation/videos',
    'public/assets/services/strategic_consulting/videos',
    'public/assets/services/technology_solutions/videos',
  ];

  videoDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Create a placeholder video file (just a text file for now)
    const placeholderContent = `This is a placeholder for a video file.
In a real implementation, this would be an actual video file.
For demo purposes, this text file represents the video content.`;

    const videoFile = `${dir}/placeholder-video.mp4`;
    fs.writeFileSync(videoFile, placeholderContent);
    console.log(`Created video placeholder: ${videoFile}`);
  });
}

// Run the asset creation
try {
  createDirectories();
  createAllAssets();
  createFallbackImages();
  createVideoPlaceholders();
  console.log(
    '✅ All comprehensive demo assets have been created successfully!'
  );
  console.log(
    '📁 Total assets created: Gallery, Testimonials, Portfolio, Logos, About sections, Services, Homepage, Blog, Careers, Contact, Legal, and Video placeholders'
  );
} catch (error) {
  console.error('❌ Error creating assets:', error);
}
