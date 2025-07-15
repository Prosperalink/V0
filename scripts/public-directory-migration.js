#!/usr/bin/env node

/**
 * Public Directory Migration Script
 *
 * This script helps manage the new public directory structure
 * and provides utilities for future migrations and updates.
 */

const fs = require('fs');
const path = require('path');

class PublicDirectoryManager {
  constructor() {
    this.publicDir = path.join(process.cwd(), 'public');
    this.contentDir = path.join(this.publicDir, 'content');
    this.pagesDir = path.join(this.contentDir, 'pages');
    this.mediaDir = path.join(this.contentDir, 'media');
    this.componentsDir = path.join(this.contentDir, 'components');
    this.brandDir = path.join(this.contentDir, 'brand');
  }

  /**
   * Create the new directory structure
   */
  createStructure() {
    const directories = [
      // Root level
      path.join(this.publicDir, 'icons'),

      // Content pages
      path.join(this.pagesDir, 'homepage', 'hero'),
      path.join(this.pagesDir, 'homepage', 'about'),
      path.join(this.pagesDir, 'homepage', 'services'),
      path.join(this.pagesDir, 'homepage', 'testimonials'),
      path.join(this.pagesDir, 'homepage', 'contact'),
      path.join(this.pagesDir, 'homepage', 'client-journey'),

      path.join(this.pagesDir, 'about', 'hero'),
      path.join(this.pagesDir, 'about', 'story'),
      path.join(this.pagesDir, 'about', 'mission'),
      path.join(this.pagesDir, 'about', 'values'),
      path.join(this.pagesDir, 'about', 'team'),
      path.join(this.pagesDir, 'about', 'cinematic-humanism'),

      path.join(this.pagesDir, 'services', 'content-creation'),
      path.join(this.pagesDir, 'services', 'creative-design'),
      path.join(this.pagesDir, 'services', 'digital-innovation'),
      path.join(this.pagesDir, 'services', 'strategic-consulting'),
      path.join(this.pagesDir, 'services', 'technology-solutions'),

      path.join(this.pagesDir, 'solutions', 'content-creation'),
      path.join(this.pagesDir, 'solutions', 'creative-design'),
      path.join(this.pagesDir, 'solutions', 'digital-innovation'),
      path.join(this.pagesDir, 'solutions', 'strategic-consulting'),
      path.join(this.pagesDir, 'solutions', 'technology-solutions'),

      path.join(this.pagesDir, 'contact', 'hero'),
      path.join(this.pagesDir, 'contact', 'form'),
      path.join(this.pagesDir, 'contact', 'info'),

      path.join(this.pagesDir, 'careers', 'hero'),
      path.join(this.pagesDir, 'careers', 'culture'),
      path.join(this.pagesDir, 'careers', 'opportunities'),

      path.join(this.pagesDir, 'testimonials', 'hero'),
      path.join(this.pagesDir, 'testimonials', 'stories'),

      path.join(this.pagesDir, 'client-journey', 'hero'),
      path.join(this.pagesDir, 'client-journey', 'process'),

      path.join(this.pagesDir, 'blog', 'articles'),
      path.join(this.pagesDir, 'blog', 'featured'),

      path.join(this.pagesDir, 'legal', 'privacy'),
      path.join(this.pagesDir, 'legal', 'terms'),

      path.join(this.pagesDir, 'cinematic-universes', 'weddings'),
      path.join(this.pagesDir, 'cinematic-universes', 'education'),
      path.join(this.pagesDir, 'cinematic-universes', 'small-business'),
      path.join(this.pagesDir, 'cinematic-universes', 'corporate'),
      path.join(this.pagesDir, 'cinematic-universes', 'artisan'),
      path.join(this.pagesDir, 'cinematic-universes', 'tourism'),

      // Components
      path.join(this.componentsDir, 'navigation'),
      path.join(this.componentsDir, 'footer'),
      path.join(this.componentsDir, 'forms'),
      path.join(this.componentsDir, 'buttons'),
      path.join(this.componentsDir, 'cards'),
      path.join(this.componentsDir, 'modals'),

      // Media
      path.join(this.mediaDir, 'images', 'backgrounds'),
      path.join(this.mediaDir, 'images', 'icons'),
      path.join(this.mediaDir, 'images', 'logos'),
      path.join(this.mediaDir, 'images', 'placeholders'),

      path.join(this.mediaDir, 'videos', 'hero'),
      path.join(this.mediaDir, 'videos', 'testimonials'),
      path.join(this.mediaDir, 'videos', 'process'),
      path.join(this.mediaDir, 'videos', 'behind-scenes'),

      path.join(this.mediaDir, 'audio', 'podcasts'),
      path.join(this.mediaDir, 'audio', 'music'),

      path.join(this.mediaDir, 'documents', 'whitepapers'),
      path.join(this.mediaDir, 'documents', 'case-studies'),
      path.join(this.mediaDir, 'documents', 'presentations'),

      // Brand
      path.join(this.brandDir, 'logos', 'primary'),
      path.join(this.brandDir, 'logos', 'secondary'),
      path.join(this.brandDir, 'logos', 'variations'),
      path.join(this.brandDir, 'colors'),
      path.join(this.brandDir, 'typography'),
      path.join(this.brandDir, 'patterns'),
      path.join(this.brandDir, 'guidelines'),

      // Assets
      path.join(this.publicDir, 'assets', 'images'),
      path.join(this.publicDir, 'assets', 'videos'),
      path.join(this.publicDir, 'assets', 'documents'),
      path.join(this.publicDir, 'assets', 'fonts'),
    ];

    directories.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  /**
   * Generate metadata template for a directory
   */
  generateMetadataTemplate(directoryPath) {
    const template = `filename,description,alt_text,usage_rights,creation_date,file_size,dimensions,tags
example-image.jpg,Description of the image,Alt text for accessibility,Orson Vision,2024-12-19,1.2MB,1920x1080,hero,background
example-video.mp4,Description of the video,Video description for accessibility,Orson Vision,2024-12-19,15.5MB,1920x1080,hero,video
`;

    const metadataPath = path.join(directoryPath, 'metadata.csv');
    if (!fs.existsSync(metadataPath)) {
      fs.writeFileSync(metadataPath, template);
    }
  }

  /**
   * Generate metadata templates for all directories
   */
  generateAllMetadataTemplates() {
    const walkDir = dir => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          this.generateMetadataTemplate(filePath);
          walkDir(filePath);
        }
      });
    };

    walkDir(this.contentDir);
  }

  /**
   * Validate directory structure
   */
  validateStructure() {
    const requiredDirs = [
      this.pagesDir,
      this.mediaDir,
      this.componentsDir,
      this.brandDir,
    ];

    const missing = [];
    requiredDirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        missing.push(dir);
      }
    });

    if (missing.length > 0) {
      return false;
    }

    return true;
  }

  /**
   * List all assets in the public directory
   */
  listAssets() {
    const assets = [];

    const walkDir = (dir, prefix = '') => {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        const relativePath = path.relative(this.publicDir, filePath);

        if (stat.isDirectory()) {
          assets.push(`${prefix}📁 ${relativePath}/`);
          walkDir(filePath, prefix + '  ');
        } else {
          const ext = path.extname(file);
          const icon = this.getFileIcon(ext);
          assets.push(`${prefix}${icon} ${relativePath}`);
        }
      });
    };

    walkDir(this.publicDir);
    return assets;
  }

  /**
   * Get file icon based on extension
   */
  getFileIcon(ext) {
    const icons = {
      '.jpg': '🖼️',
      '.jpeg': '🖼️',
      '.png': '🖼️',
      '.gif': '🖼️',
      '.svg': '🎨',
      '.mp4': '🎥',
      '.mov': '🎥',
      '.avi': '🎥',
      '.pdf': '📄',
      '.doc': '📄',
      '.docx': '📄',
      '.txt': '📝',
      '.csv': '📊',
      '.json': '⚙️',
      '.xml': '⚙️',
      '.ico': '🔗',
    };

    return icons[ext.toLowerCase()] || '📄';
  }

  /**
   * Generate a report of the current structure
   */
  generateReport() {
    const assets = this.listAssets();
    assets.forEach(asset => {
      // console.log(asset); // Removed console.log
    });

    // console.log('\n📈 Statistics:'); // Removed console.log
    // console.log(`Total files: ${assets.filter(a => !a.includes('📁')).length}`); // Removed console.log
    // console.log( // Removed console.log
    //   `Total directories: ${assets.filter(a => a.includes('📁')).length}`
    // );

    const fileTypes = {};
    assets
      .filter(a => !a.includes('📁'))
      .forEach(asset => {
        const ext = path.extname(asset.split(' ').pop());
        fileTypes[ext] = (fileTypes[ext] || 0) + 1;
      });

    // console.log('\n📁 File Types:'); // Removed console.log
    Object.entries(fileTypes).forEach(([ext, count]) => {
      // console.log(`  ${ext}: ${count} files`); // Removed console.log
    });
  }
}

// CLI Interface
const manager = new PublicDirectoryManager();

const command = process.argv[2];

switch (command) {
  case 'create':
    // console.log('Creating directory structure...'); // Removed console.log
    manager.createStructure();
    // console.log('✅ Directory structure created successfully'); // Removed console.log
    break;

  case 'metadata':
    // console.log('Generating metadata templates...'); // Removed console.log
    manager.generateAllMetadataTemplates();
    // console.log('✅ Metadata templates generated successfully'); // Removed console.log
    break;

  case 'validate':
    // console.log('Validating directory structure...'); // Removed console.log
    manager.validateStructure();
    break;

  case 'report':
    manager.generateReport();
    break;

  default:
  // console.log(` // Removed console.log
  // Public Directory Migration Script
  //
  // Usage:
  //   node scripts/public-directory-migration.js <command>
  //
  // Commands:
  //   create    - Create the new directory structure
  //   metadata  - Generate metadata templates for all directories
  //   validate  - Validate the current directory structure
  //   report    - Generate a report of the current structure
  //
  // Examples:
  //   node scripts/public-directory-migration.js create
  //   node scripts/public-directory-migration.js metadata
  //   node scripts/public-directory-migration.js validate
  //   node scripts/public-directory-migration.js report
  //     `);
}

module.exports = PublicDirectoryManager;
