const fs = require('fs');
const path = require('path');

// Favicon sizes to generate
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 152, name: 'apple-touch-icon-152x152.png' },
  { size: 167, name: 'apple-touch-icon-167x167.png' },
  { size: 180, name: 'apple-touch-icon-180x180.png' },
];

// Create favicon directory if it doesn't exist
const faviconDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(faviconDir)) {
  fs.mkdirSync(faviconDir, { recursive: true });
}

// Generate favicon HTML
const generateFaviconHTML = () => {
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Orson Vision Favicons</title>
</head>
<body>
  <h1>Orson Vision Favicon Generation</h1>
  <p>This file contains the favicon links for the Orson Vision website.</p>

  <h2>Standard Favicons</h2>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/icons/favicon-48x48.png">

  <h2>Apple Touch Icons</h2>
  <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-icon-167x167.png">

  <h2>Android Chrome Icons</h2>
  <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png">

  <h2>Microsoft Tiles</h2>
  <meta name="msapplication-TileColor" content="#1e40af">
  <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png">

  <h2>Web App Manifest</h2>
  <link rel="manifest" href="/manifest.json">
</body>
</html>`;

  fs.writeFileSync(path.join(__dirname, '../public/favicon-links.html'), html);
  console.log('✅ Generated favicon-links.html');
};

// Generate manifest.json
const generateManifest = () => {
  const manifest = {
    name: 'Orson Vision',
    short_name: 'Orson Vision',
    description: 'Cinematic Excellence in Visual Storytelling',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };

  fs.writeFileSync(
    path.join(__dirname, '../public/manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('✅ Generated manifest.json');
};

// Generate site.webmanifest
const generateWebManifest = () => {
  const webmanifest = {
    name: 'Orson Vision',
    short_name: 'Orson Vision',
    description: 'Cinematic Excellence in Visual Storytelling',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };

  fs.writeFileSync(
    path.join(__dirname, '../public/site.webmanifest'),
    JSON.stringify(webmanifest, null, 2)
  );
  console.log('✅ Generated site.webmanifest');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://orsonvision.com/sitemap.xml`;

  fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robots);
  console.log('✅ Generated robots.txt');
};

// Generate sitemap.xml
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://orsonvision.com/</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://orsonvision.com/about</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://orsonvision.com/services</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://orsonvision.com/contact</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('✅ Generated sitemap.xml');
};

// Main execution
console.log('🚀 Starting favicon and brand asset generation...');

generateFaviconHTML();
generateManifest();
generateWebManifest();
generateRobotsTxt();
generateSitemap();

console.log('✅ All favicon and brand assets generated successfully!');
console.log('📁 Files created in public/icons/ and public/');
console.log('🔗 Check public/favicon-links.html for implementation guide');
