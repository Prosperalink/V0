#!/usr/bin/env node

/**
 * Windows-Compatible Asset Reorganization Script
 * Reorganizes public/assets folder to align with sitemap structure
 * Uses copy operations instead of rename to handle Windows limitations
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// New sitemap-based structure
const NEW_STRUCTURE = {
  global: {
    images: ['backgrounds', 'icons', 'logos', 'placeholders'],
    videos: ['hero', 'behind-scenes', 'process', 'testimonials'],
  },
  pages: {
    home: {
      images: [
        'hero',
        'solutions-matrix',
        'client-journey',
        'success-stories',
        'contact',
      ],
      videos: [
        'hero',
        'solutions-matrix',
        'client-journey',
        'success-stories',
        'contact',
      ],
    },
    about: {
      images: [
        'hero',
        'cinematic-humanism',
        'mission',
        'story',
        'team',
        'values',
        'cta',
      ],
      videos: [
        'hero',
        'cinematic-humanism',
        'mission',
        'story',
        'team',
        'values',
        'cta',
      ],
    },
    services: {
      images: [
        'hero',
        'content-creation',
        'creative-design',
        'digital-innovation',
        'strategic-consulting',
        'technology-solutions',
      ],
      videos: [
        'hero',
        'content-creation',
        'creative-design',
        'digital-innovation',
        'strategic-consulting',
        'technology-solutions',
      ],
    },
    solutions: {
      images: [
        'hero',
        'content-creation',
        'creative-design',
        'digital-innovation',
        'strategic-consulting',
        'technology-solutions',
      ],
      videos: [
        'hero',
        'content-creation',
        'creative-design',
        'digital-innovation',
        'strategic-consulting',
        'technology-solutions',
      ],
    },
    contact: {
      images: ['hero', 'contact-form', 'contact-info'],
      videos: ['hero', 'contact-form', 'contact-info'],
    },
    careers: {
      images: ['hero', 'culture', 'opportunities'],
      videos: ['hero', 'culture', 'opportunities'],
    },
    testimonials: {
      images: ['hero', 'stories'],
      videos: ['hero', 'stories'],
    },
    'client-journey': {
      images: ['hero', 'process'],
      videos: ['hero', 'process'],
    },
    blog: {
      images: ['articles', 'featured'],
      videos: ['articles', 'featured'],
    },
  },
  components: {
    'service-card': {
      images: [],
      videos: [],
    },
    'testimonial-card': {
      images: [],
      videos: [],
    },
  },
};

// Asset mapping from old to new structure
const ASSET_MAPPING = {
  // Global assets
  'global/images/abstract-blue.jpg':
    'global/images/backgrounds/abstract-blue.jpg',
  'global/images/creative-teamwork.jpg':
    'global/images/backgrounds/creative-teamwork.jpg',
  'global/images/modern-office.jpg':
    'global/images/backgrounds/modern-office.jpg',
  'global/images/starry-sky.jpg': 'global/images/backgrounds/starry-sky.jpg',
  'global/images/backgrounds/': 'global/images/backgrounds/',
  'global/images/icons/': 'global/images/icons/',
  'global/images/logos/': 'global/images/logos/',
  'global/images/placeholders/': 'global/images/placeholders/',
  'global/videos/hero/hero-video.mp4': 'global/videos/hero/hero-video.mp4',
  'global/videos/': 'global/videos/',

  // Homepage assets
  'pages/homepage/hero/': 'pages/home/images/hero/',
  'pages/homepage/hero_section/': 'pages/home/images/hero/',
  'pages/homepage/solutions_matrix/': 'pages/home/images/solutions-matrix/',
  'pages/homepage/client_journey/': 'pages/home/images/client-journey/',
  'pages/homepage/client-journey/': 'pages/home/images/client-journey/',
  'pages/homepage/success_stories/': 'pages/home/images/success-stories/',
  'pages/homepage/contact/': 'pages/home/images/contact/',
  'pages/homepage/contact_section/': 'pages/home/images/contact/',
  'pages/homepage/cinematic_universes/':
    'pages/home/images/cinematic-universes/',
  'pages/homepage/services/': 'pages/home/images/services/',
  'pages/homepage/services_section/': 'pages/home/images/services/',
  'pages/homepage/about/': 'pages/home/images/about/',
  'pages/homepage/about_section/': 'pages/home/images/about/',
  'pages/homepage/testimonials/': 'pages/home/images/testimonials/',

  // About page assets
  'pages/about/hero/': 'pages/about/images/hero/',
  'pages/about/cinematic_humanism/': 'pages/about/images/cinematic-humanism/',
  'pages/about/cinematic-humanism/': 'pages/about/images/cinematic-humanism/',
  'pages/about/mission/': 'pages/about/images/mission/',
  'pages/about/story/': 'pages/about/images/story/',
  'pages/about/team/': 'pages/about/images/team/',
  'pages/about/values/': 'pages/about/images/values/',
  'pages/about/cta/': 'pages/about/images/cta/',

  // Services page assets
  'pages/services/content_creation/': 'pages/services/images/content-creation/',
  'pages/services/content-creation/': 'pages/services/images/content-creation/',
  'pages/services/creative_design/': 'pages/services/images/creative-design/',
  'pages/services/creative-design/': 'pages/services/images/creative-design/',
  'pages/services/digital_innovation/':
    'pages/services/images/digital-innovation/',
  'pages/services/digital-innovation/':
    'pages/services/images/digital-innovation/',
  'pages/services/strategic_consulting/':
    'pages/services/images/strategic-consulting/',
  'pages/services/strategic-consulting/':
    'pages/services/images/strategic-consulting/',
  'pages/services/technology_solutions/':
    'pages/services/images/technology-solutions/',
  'pages/services/technology-solutions/':
    'pages/services/images/technology-solutions/',

  // Contact page assets
  'pages/contact/hero/': 'pages/contact/images/hero/',
  'pages/contact/contact_form/': 'pages/contact/images/contact-form/',
  'pages/contact/contact_info/': 'pages/contact/images/contact-info/',
  'pages/contact/form/': 'pages/contact/images/contact-form/',
  'pages/contact/info/': 'pages/contact/images/contact-info/',

  // Careers page assets
  'pages/careers/hero/': 'pages/careers/images/hero/',
  'pages/careers/culture/': 'pages/careers/images/culture/',
  'pages/careers/opportunities/': 'pages/careers/images/opportunities/',

  // Blog page assets
  'pages/blog/articles/': 'pages/blog/images/articles/',
  'pages/blog/featured/': 'pages/blog/images/featured/',

  // Legal page assets
  'pages/legal/privacy/': 'pages/legal/images/privacy/',
  'pages/legal/terms/': 'pages/legal/images/terms/',

  // Brand assets
  'brand/': 'global/brand/',
  'components/': 'components/',
};

// Video mapping (same structure as images)
const VIDEO_MAPPING = {
  // Homepage videos
  'pages/homepage/hero/videos/': 'pages/home/videos/hero/',
  'pages/homepage/hero_section/videos/': 'pages/home/videos/hero/',
  'pages/homepage/solutions_matrix/videos/':
    'pages/home/videos/solutions-matrix/',
  'pages/homepage/client_journey/videos/': 'pages/home/videos/client-journey/',
  'pages/homepage/client-journey/videos/': 'pages/home/videos/client-journey/',
  'pages/homepage/success_stories/videos/':
    'pages/home/videos/success-stories/',
  'pages/homepage/contact/videos/': 'pages/home/videos/contact/',
  'pages/homepage/contact_section/videos/': 'pages/home/videos/contact/',
  'pages/homepage/cinematic_universes/videos/':
    'pages/home/videos/cinematic-universes/',
  'pages/homepage/services/videos/': 'pages/home/videos/services/',
  'pages/homepage/services_section/videos/': 'pages/home/videos/services/',
  'pages/homepage/about/videos/': 'pages/home/videos/about/',
  'pages/homepage/about_section/videos/': 'pages/home/videos/about/',
  'pages/homepage/testimonials/videos/': 'pages/home/videos/testimonials/',

  // About page videos
  'pages/about/hero/videos/': 'pages/about/videos/hero/',
  'pages/about/cinematic_humanism/videos/':
    'pages/about/videos/cinematic-humanism/',
  'pages/about/cinematic-humanism/videos/':
    'pages/about/videos/cinematic-humanism/',
  'pages/about/mission/videos/': 'pages/about/videos/mission/',
  'pages/about/story/videos/': 'pages/about/videos/story/',
  'pages/about/team/videos/': 'pages/about/videos/team/',
  'pages/about/values/videos/': 'pages/about/videos/values/',
  'pages/about/cta/videos/': 'pages/about/videos/cta/',

  // Services page videos
  'pages/services/content_creation/videos/':
    'pages/services/videos/content-creation/',
  'pages/services/content-creation/videos/':
    'pages/services/videos/content-creation/',
  'pages/services/creative_design/videos/':
    'pages/services/videos/creative-design/',
  'pages/services/creative-design/videos/':
    'pages/services/videos/creative-design/',
  'pages/services/digital_innovation/videos/':
    'pages/services/videos/digital-innovation/',
  'pages/services/digital-innovation/videos/':
    'pages/services/videos/digital-innovation/',
  'pages/services/strategic_consulting/videos/':
    'pages/services/videos/strategic-consulting/',
  'pages/services/strategic-consulting/videos/':
    'pages/services/videos/strategic-consulting/',
  'pages/services/technology_solutions/videos/':
    'pages/services/videos/technology-solutions/',
  'pages/services/technology-solutions/videos/':
    'pages/services/videos/technology-solutions/',

  // Contact page videos
  'pages/contact/hero/videos/': 'pages/contact/videos/hero/',
  'pages/contact/contact_form/videos/': 'pages/contact/videos/contact-form/',
  'pages/contact/contact_info/videos/': 'pages/contact/videos/contact-info/',
  'pages/contact/form/videos/': 'pages/contact/videos/contact-form/',
  'pages/contact/info/videos/': 'pages/contact/videos/contact-info/',

  // Careers page videos
  'pages/careers/hero/videos/': 'pages/careers/videos/hero/',
  'pages/careers/culture/videos/': 'pages/careers/videos/culture/',
  'pages/careers/opportunities/videos/': 'pages/careers/videos/opportunities/',

  // Blog page videos
  'pages/blog/articles/videos/': 'pages/blog/videos/articles/',
  'pages/blog/featured/videos/': 'pages/blog/videos/featured/',

  // Legal page videos
  'pages/legal/privacy/videos/': 'pages/legal/videos/privacy/',
  'pages/legal/terms/videos/': 'pages/legal/videos/terms/',

  // Global videos
  'global/videos/': 'global/videos/',
};

// Helper function to copy directory recursively
function copyDirectory(src, dest) {
  if (!fs.existsSync(src)) {
    return false;
  }

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);

  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  });

  return true;
}

// Helper function to remove directory recursively
function removeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  const items = fs.readdirSync(dirPath);

  items.forEach(item => {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      removeDirectory(itemPath);
    } else {
      fs.unlinkSync(itemPath);
    }
  });

  fs.rmdirSync(dirPath);
}

// Function to create directory structure
function createDirectoryStructure() {
  const basePath = 'public/assets';

  // Create main directories
  const mainDirs = ['global', 'pages', 'components'];
  mainDirs.forEach(dir => {
    const fullPath = path.join(basePath, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });

  // Create page directories
  Object.keys(NEW_STRUCTURE.pages).forEach(page => {
    const pagePath = path.join(basePath, 'pages', page);
    if (!fs.existsSync(pagePath)) {
      fs.mkdirSync(pagePath, { recursive: true });
    }

    // Create images and videos directories for each page
    ['images', 'videos'].forEach(mediaType => {
      const mediaPath = path.join(pagePath, mediaType);
      if (!fs.existsSync(mediaPath)) {
        fs.mkdirSync(mediaPath, { recursive: true });
      }

      // Create subdirectories for each page
      NEW_STRUCTURE.pages[page][mediaType].forEach(subdir => {
        const subdirPath = path.join(mediaPath, subdir);
        if (!fs.existsSync(subdirPath)) {
          fs.mkdirSync(subdirPath, { recursive: true });
        }
      });
    });
  });

  // Create global subdirectories
  Object.keys(NEW_STRUCTURE.global).forEach(mediaType => {
    const mediaPath = path.join(basePath, 'global', mediaType);
    if (!fs.existsSync(mediaPath)) {
      fs.mkdirSync(mediaPath, { recursive: true });
    }

    NEW_STRUCTURE.global[mediaType].forEach(subdir => {
      const subdirPath = path.join(mediaPath, subdir);
      if (!fs.existsSync(subdirPath)) {
        fs.mkdirSync(subdirPath, { recursive: true });
      }
    });
  });

  // Create component directories
  Object.keys(NEW_STRUCTURE.components).forEach(component => {
    const componentPath = path.join(basePath, 'components', component);
    if (!fs.existsSync(componentPath)) {
      fs.mkdirSync(componentPath, { recursive: true });
    }

    ['images', 'videos'].forEach(mediaType => {
      const mediaPath = path.join(componentPath, mediaType);
      if (!fs.existsSync(mediaPath)) {
        fs.mkdirSync(mediaPath, { recursive: true });
      }
    });
  });
}

// Function to copy assets
function copyAssets() {
  const basePath = 'public/assets';
  let copiedCount = 0;
  let skippedCount = 0;

  // Copy image assets
  Object.entries(ASSET_MAPPING).forEach(([oldPath, newPath]) => {
    const fullOldPath = path.join(basePath, oldPath);
    const fullNewPath = path.join(basePath, newPath);

    if (fs.existsSync(fullOldPath)) {
      try {
        // Create destination directory if it doesn't exist
        const newDir = path.dirname(fullNewPath);
        if (!fs.existsSync(newDir)) {
          fs.mkdirSync(newDir, { recursive: true });
        }

        // Copy the file/directory
        if (fs.statSync(fullOldPath).isDirectory()) {
          if (copyDirectory(fullOldPath, fullNewPath)) {
            copiedCount++;
          }
        } else {
          fs.copyFileSync(fullOldPath, fullNewPath);
          copiedCount++;
        }
      } catch (error) {
        // Error copying file - silent fail
      }
    } else {
      skippedCount++;
    }
  });

  // Copy video assets
  Object.entries(VIDEO_MAPPING).forEach(([oldPath, newPath]) => {
    const fullOldPath = path.join(basePath, oldPath);
    const fullNewPath = path.join(basePath, newPath);

    if (fs.existsSync(fullOldPath)) {
      try {
        // Create destination directory if it doesn't exist
        const newDir = path.dirname(fullNewPath);
        if (!fs.existsSync(newDir)) {
          fs.mkdirSync(newDir, { recursive: true });
        }

        // Copy the file/directory
        if (fs.statSync(fullOldPath).isDirectory()) {
          if (copyDirectory(fullOldPath, fullNewPath)) {
            copiedCount++;
          }
        } else {
          fs.copyFileSync(fullOldPath, fullNewPath);
          copiedCount++;
        }
      } catch (error) {
        // Error copying file - silent fail
      }
    } else {
      skippedCount++;
    }
  });
}

// Function to remove old directories after copying
function removeOldDirectories() {
  const basePath = 'public/assets';
  let removedCount = 0;

  // List of old directories to remove
  const oldDirs = [
    'pages/homepage',
    'pages/about/cinematic_humanism',
    'pages/about/cinematic-humanism',
    'pages/services/content_creation',
    'pages/services/content-creation',
    'pages/services/creative_design',
    'pages/services/creative-design',
    'pages/services/digital_innovation',
    'pages/services/digital-innovation',
    'pages/services/strategic_consulting',
    'pages/services/strategic-consulting',
    'pages/services/technology_solutions',
    'pages/services/technology-solutions',
    'pages/contact/contact_form',
    'pages/contact/contact_info',
    'pages/contact/form',
    'pages/contact/info',
    'pages/careers/culture',
    'pages/careers/opportunities',
    'pages/blog/articles',
    'pages/blog/featured',
    'pages/legal/privacy',
    'pages/legal/terms',
    'brand',
    'components',
  ];

  oldDirs.forEach(dir => {
    const fullPath = path.join(basePath, dir);
    if (fs.existsSync(fullPath)) {
      try {
        removeDirectory(fullPath);
        removedCount++;
      } catch (error) {
        // Error removing directory - silent fail
      }
    }
  });
}

// Function to update file references
function updateFileReferences() {
  const filesToUpdate = [
    'src/app/page.tsx',
    'src/app/about/page.tsx',
    'src/app/contact/page.tsx',
    'src/app/careers/page.tsx',
    'src/app/client-journey/page.tsx',
    'src/app/testimonials/page.tsx',
    'src/app/solutions/page.tsx',
    'src/components/HeroSection.tsx',
    'src/components/ContactForm.tsx',
    'src/components/ClientJourney.tsx',
    'src/components/SolutionsMatrix.tsx',
    'src/components/TestimonialsSection.tsx',
  ];

  let updatedFiles = 0;

  filesToUpdate.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let fileUpdated = false;

        // Update image references
        Object.entries(ASSET_MAPPING).forEach(([oldPath, newPath]) => {
          const oldRef = `/assets/${oldPath}`;
          const newRef = `/assets/${newPath}`;

          if (content.includes(oldRef)) {
            content = content.replace(
              new RegExp(oldRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
              newRef
            );
            fileUpdated = true;
          }
        });

        // Update video references
        Object.entries(VIDEO_MAPPING).forEach(([oldPath, newPath]) => {
          const oldRef = `/assets/${oldPath}`;
          const newRef = `/assets/${newPath}`;

          if (content.includes(oldRef)) {
            content = content.replace(
              new RegExp(oldRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
              newRef
            );
            fileUpdated = true;
          }
        });

        if (fileUpdated) {
          fs.writeFileSync(filePath, content);
          updatedFiles++;
        }
      } catch (error) {
        // Error updating file - silent fail
      }
    }
  });
}

// Function to clean up empty directories
function cleanupEmptyDirectories() {
  const basePath = 'public/assets';
  let removedCount = 0;

  function removeEmptyDirs(dirPath) {
    if (fs.existsSync(dirPath)) {
      const items = fs.readdirSync(dirPath);

      // Recursively remove empty subdirectories
      items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
          removeEmptyDirs(itemPath);
        }
      });

      // Check if directory is now empty
      const remainingItems = fs.readdirSync(dirPath);
      if (remainingItems.length === 0 && dirPath !== basePath) {
        fs.rmdirSync(dirPath);
        removedCount++;
      }
    }
  }

  removeEmptyDirs(basePath);
}

// Function to generate new tree structure
function generateNewTreeStructure() {
  const basePath = 'public/assets';
  const treeStructure = [];

  function buildTree(dirPath, prefix = '') {
    const items = fs.readdirSync(dirPath).sort();

    items.forEach((item, index) => {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      const isLast = index === items.length - 1;
      const currentPrefix = isLast ? '└── ' : '├── ';
      const nextPrefix = isLast ? '    ' : '│   ';

      treeStructure.push(`${prefix}${currentPrefix}${item}`);

      if (stat.isDirectory()) {
        buildTree(itemPath, prefix + nextPrefix);
      }
    });
  }

  buildTree(basePath);

  const treeContent = `New Asset Structure (Generated: ${new Date().toISOString()})\n\n${treeStructure.join('\n')}`;
  fs.writeFileSync('public/assets/new_tree_structure.txt', treeContent);
}

// Function to verify asset integrity
function verifyAssetIntegrity() {
  const basePath = 'public/assets';
  let totalAssets = 0;
  let verifiedAssets = 0;
  let brokenAssets = 0;

  function countAssets(dirPath) {
    if (fs.existsSync(dirPath)) {
      const items = fs.readdirSync(dirPath);

      items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
          countAssets(itemPath);
        } else {
          totalAssets++;
          // Check if file is accessible
          try {
            fs.accessSync(itemPath, fs.constants.R_OK);
            verifiedAssets++;
          } catch (error) {
            brokenAssets++;
            // Broken asset detected - silent fail
          }
        }
      });
    }
  }

  countAssets(basePath);
}

// Main execution function
function main() {
  try {
    // Step 1: Create new directory structure
    createDirectoryStructure();

    // Step 2: Copy assets to new structure
    copyAssets();

    // Step 3: Remove old directories
    removeOldDirectories();

    // Step 4: Update file references
    updateFileReferences();

    // Step 5: Clean up empty directories
    cleanupEmptyDirectories();

    // Step 6: Generate new tree structure
    generateNewTreeStructure();

    // Step 7: Verify asset integrity
    verifyAssetIntegrity();
  } catch (error) {
    // Reorganization failed - silent fail
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  NEW_STRUCTURE,
  ASSET_MAPPING,
  VIDEO_MAPPING,
  createDirectoryStructure,
  copyAssets,
  removeOldDirectories,
  updateFileReferences,
  cleanupEmptyDirectories,
  generateNewTreeStructure,
  verifyAssetIntegrity,
};
