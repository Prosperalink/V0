const fs = require('fs');
const path = require('path');

// Asset Management System for Orson Vision
class AssetManager {
  constructor() {
    this.publicDir = 'public';
    this.assetDirs = [
      'assets/about',
      'assets/portfolio',
      'assets/logos',
      'assets/testimonials',
      'assets/videos',
      'assets/images',
    ];
  }

  // Recursive file finder (replaces glob)
  findFiles(dir, pattern = /.*/) {
    const files = [];

    function scan(currentDir) {
      if (!fs.existsSync(currentDir)) return;

      const items = fs.readdirSync(currentDir);

      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          scan(fullPath);
        } else if (stat.isFile() && pattern.test(item)) {
          files.push(fullPath);
        }
      }
    }

    scan(dir);
    return files;
  }

  // Scan for all assets in public directory
  scanAssets() {
    const assets = [];

    this.assetDirs.forEach(dir => {
      const fullPath = path.join(this.publicDir, dir);
      if (fs.existsSync(fullPath)) {
        const files = this.findFiles(fullPath);
        files.forEach(file => {
          const relativePath = path.relative(this.publicDir, file);
          assets.push({
            path: relativePath,
            size: fs.statSync(file).size,
            type: path.extname(file).toLowerCase(),
            category: dir.split('/')[1],
          });
        });
      }
    });

    return assets;
  }

  // Check for missing assets by scanning code files
  findMissingAssets() {
    const codeFiles = this.findFiles('src', /\.(ts|tsx|js|jsx)$/);
    const assetReferences = new Set();

    codeFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');

      // Find asset references in code
      const assetPatterns = [
        /\/assets\/[^"'\s)]+/g,
        /src=["']([^"']*\.(jpg|jpeg|png|gif|svg|mp4|webm))["']/g,
        /backgroundImage:\s*url\(['"]([^'"]+)['"]\)/g,
      ];

      assetPatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            if (match.includes('/assets/')) {
              assetReferences.add(match.replace(/['"]/g, ''));
            }
          });
        }
      });
    });

    const missingAssets = [];
    assetReferences.forEach(ref => {
      const assetPath = path.join(this.publicDir, ref);
      if (!fs.existsSync(assetPath)) {
        missingAssets.push(ref);
      }
    });

    return Array.from(missingAssets);
  }

  // Generate asset report
  generateReport() {
    console.log('🎬 Orson Vision Asset Management Report\n');

    const existingAssets = this.scanAssets();
    const missingAssets = this.findMissingAssets();

    console.log(`📊 Asset Statistics:`);
    console.log(`   • Total existing assets: ${existingAssets.length}`);
    console.log(`   • Missing assets: ${missingAssets.length}`);

    if (existingAssets.length > 0) {
      console.log(`\n📁 Existing Assets by Category:`);
      const byCategory = {};
      existingAssets.forEach(asset => {
        byCategory[asset.category] = (byCategory[asset.category] || 0) + 1;
      });

      Object.entries(byCategory).forEach(([category, count]) => {
        console.log(`   • ${category}: ${count} assets`);
      });
    }

    if (missingAssets.length > 0) {
      console.log(`\n❌ Missing Assets:`);
      missingAssets.forEach(asset => {
        console.log(`   • ${asset}`);
      });
    }

    return {
      existing: existingAssets,
      missing: missingAssets,
    };
  }

  // Create placeholder for missing asset
  createPlaceholder(assetPath) {
    const fullPath = path.join(this.publicDir, assetPath);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const ext = path.extname(assetPath).toLowerCase();
    const category = assetPath.split('/')[1];
    const filename = path.basename(assetPath, ext);

    let width = 800;
    let height = 600;

    // Adjust dimensions based on category
    if (category === 'logos') {
      width = 300;
      height = 100;
    } else if (category === 'testimonials') {
      width = 400;
      height = 400;
    } else if (category === 'portfolio') {
      width = 600;
      height = 400;
    }

    const text = filename.replace(/_/g, ' ').replace(/-/g, ' ');

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const svg = this.generateSVGPlaceholder(width, height, text, category);
      fs.writeFileSync(fullPath, svg);
      console.log(`✅ Created placeholder: ${assetPath}`);
    } else if (ext === '.mp4') {
      const placeholderText = `Video placeholder for: ${text}\nCategory: ${category}\nDimensions: ${width}x${height}`;
      fs.writeFileSync(fullPath.replace('.mp4', '.txt'), placeholderText);
      console.log(
        `✅ Created video placeholder: ${assetPath.replace('.mp4', '.txt')}`
      );
    }
  }

  generateSVGPlaceholder(width, height, text, category) {
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

  // Fix all missing assets
  fixMissingAssets() {
    const missingAssets = this.findMissingAssets();

    if (missingAssets.length === 0) {
      console.log('🎉 No missing assets found!');
      return;
    }

    console.log(
      `🔧 Creating placeholders for ${missingAssets.length} missing assets...\n`
    );

    missingAssets.forEach(assetPath => {
      try {
        this.createPlaceholder(assetPath);
      } catch (error) {
        console.error(
          `❌ Error creating placeholder for ${assetPath}:`,
          error.message
        );
      }
    });

    console.log('\n✅ Asset fix complete!');
  }
}

// CLI interface
const manager = new AssetManager();

const command = process.argv[2];

switch (command) {
  case 'report':
    manager.generateReport();
    break;
  case 'fix':
    manager.fixMissingAssets();
    break;
  case 'scan':
    const assets = manager.scanAssets();
    console.log('📁 Found assets:', assets.length);
    assets.forEach(asset => {
      console.log(`   • ${asset.path} (${asset.type})`);
    });
    break;
  default:
    console.log('🎬 Orson Vision Asset Manager');
    console.log('\nUsage:');
    console.log(
      '  node scripts/asset-management.js report  - Generate asset report'
    );
    console.log(
      '  node scripts/asset-management.js fix     - Fix missing assets'
    );
    console.log(
      '  node scripts/asset-management.js scan    - Scan existing assets'
    );
    break;
}
