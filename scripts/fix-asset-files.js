const fs = require('fs');
const path = require('path');

// Function to check if a file is actually SVG content
function isSVGContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return (
      content.trim().startsWith('<?xml') || content.trim().startsWith('<svg')
    );
  } catch (error) {
    return false;
  }
}

// Function to create a proper JPG placeholder
function createJPGPlaceholder(filePath, width = 400, height = 300) {
  // Create a simple SVG that will be converted to JPG
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
  <text x="50%" y="40%" font-family="Arial, sans-serif" font-size="20" fill="#ffd700" text-anchor="middle" dominant-baseline="middle">Placeholder Image</text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="14" fill="#b0b0b0" text-anchor="middle" dominant-baseline="middle">${path.basename(filePath, '.jpg')}</text>
  <text x="50%" y="80%" font-family="Arial, sans-serif" font-size="12" fill="#808080" text-anchor="middle" dominant-baseline="middle">${width}x${height}</text>
</svg>`;

  // For now, we'll create a proper SVG file with .svg extension
  const svgPath = filePath.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Created SVG placeholder: ${svgPath}`);

  // Remove the problematic .jpg file
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed problematic file: ${filePath}`);
  }
}

// Function to process a directory recursively
function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory does not exist: ${dirPath}`);
    return;
  }

  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.jpg')) {
      if (isSVGContent(fullPath)) {
        console.log(`Found SVG content in JPG file: ${fullPath}`);
        createJPGPlaceholder(fullPath);
      }
    }
  }
}

// Main execution
console.log('Starting asset file fix...');

// Process the main assets directory
const assetsDir = path.join(__dirname, '..', 'public', 'assets');
processDirectory(assetsDir);

console.log('Asset file fix completed!');
console.log('\nNext steps:');
console.log(
  '1. Update asset management system to use .svg files instead of .jpg'
);
console.log('2. Update component imports to reference .svg files');
console.log('3. Consider using proper image files for better performance');
