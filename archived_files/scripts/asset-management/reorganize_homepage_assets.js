const fs = require('fs');
const path = require('path');

// Homepage sections based on the codebase analysis
const HOMEPAGE_SECTIONS = [
  'hero_section',
  'services_section',
  'solutions_matrix',
  'client_journey',
  'success_stories',
  'testimonials',
  'contact_section',
  'about_section',
  'cinematic_universes',
];

// Solutions matrix sub-sections
const SOLUTIONS_MATRIX_SUBSECTIONS = [
  'content_creation',
  'creative_design',
  'digital_innovation',
  'strategic_consulting',
  'technology_solutions',
];

function createDirectoryStructure() {
  const basePath = 'public/assets/pages/homepage';

  // Create main section directories
  HOMEPAGE_SECTIONS.forEach(section => {
    const sectionPath = path.join(basePath, section);
    const imagesPath = path.join(sectionPath, 'images');
    const videosPath = path.join(sectionPath, 'videos');

    if (!fs.existsSync(sectionPath)) {
      fs.mkdirSync(sectionPath, { recursive: true });
    }
    if (!fs.existsSync(imagesPath)) {
      fs.mkdirSync(imagesPath, { recursive: true });
    }
    if (!fs.existsSync(videosPath)) {
      fs.mkdirSync(videosPath, { recursive: true });
    }
  });

  // Create solutions matrix sub-section directories
  SOLUTIONS_MATRIX_SUBSECTIONS.forEach(subsection => {
    const subsectionPath = path.join(basePath, 'solutions_matrix', subsection);
    const imagesPath = path.join(subsectionPath, 'images');
    const videosPath = path.join(subsectionPath, 'videos');

    if (!fs.existsSync(subsectionPath)) {
      fs.mkdirSync(subsectionPath, { recursive: true });
    }
    if (!fs.existsSync(imagesPath)) {
      fs.mkdirSync(imagesPath, { recursive: true });
    }
    if (!fs.existsSync(videosPath)) {
      fs.mkdirSync(videosPath, { recursive: true });
    }
  });
}

function getAllAssets() {
  const basePath = 'public/assets/pages/homepage';
  const allAssets = [];

  function scanDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;

    const items = fs.readdirSync(dirPath);

    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (stat.isFile()) {
        // Only include image and video files
        const ext = path.extname(item).toLowerCase();
        if (
          ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mov', '.avi'].includes(
            ext
          )
        ) {
          allAssets.push({
            path: fullPath,
            name: item,
            size: stat.size,
            type:
              ext === '.mp4' || ext === '.mov' || ext === '.avi'
                ? 'video'
                : 'image',
          });
        }
      }
    });
  }

  scanDirectory(basePath);
  return allAssets;
}

function distributeAssetsRandomly() {
  const allAssets = getAllAssets();

  // Separate images and videos
  const images = allAssets.filter(asset => asset.type === 'image');
  const videos = allAssets.filter(asset => asset.type === 'video');

  // Create target directories
  const targetDirectories = [];

  // Main sections
  HOMEPAGE_SECTIONS.forEach(section => {
    targetDirectories.push({
      path: `public/assets/pages/homepage/${section}/images`,
      type: 'image',
      section: section,
    });
    targetDirectories.push({
      path: `public/assets/pages/homepage/${section}/videos`,
      type: 'video',
      section: section,
    });
  });

  // Solutions matrix sub-sections
  SOLUTIONS_MATRIX_SUBSECTIONS.forEach(subsection => {
    targetDirectories.push({
      path: `public/assets/pages/homepage/solutions_matrix/${subsection}/images`,
      type: 'image',
      section: `solutions_matrix_${subsection}`,
    });
    targetDirectories.push({
      path: `public/assets/pages/homepage/solutions_matrix/${subsection}/videos`,
      type: 'video',
      section: `solutions_matrix_${subsection}`,
    });
  });

  // Distribute images
  const imageTargets = targetDirectories.filter(dir => dir.type === 'image');
  const videoTargets = targetDirectories.filter(dir => dir.type === 'video');

  // Distribute images equally and randomly
  images.forEach((image, index) => {
    const targetIndex = index % imageTargets.length;
    const target = imageTargets[targetIndex];

    const newPath = path.join(target.path, image.name);

    try {
      // Create directory if it doesn't exist
      const targetDir = path.dirname(newPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // Copy file
      fs.copyFileSync(image.path, newPath);
    } catch (error) {
      // Error handling without console
    }
  });

  // Distribute videos equally and randomly
  videos.forEach((video, index) => {
    const targetIndex = index % videoTargets.length;
    const target = videoTargets[targetIndex];

    const newPath = path.join(target.path, video.name);

    try {
      // Create directory if it doesn't exist
      const targetDir = path.dirname(newPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // Copy file
      fs.copyFileSync(video.path, newPath);
    } catch (error) {
      // Error handling without console
    }
  });
}

function createMetadataFiles() {
  const basePath = 'public/assets/pages/homepage';

  function createMetadataForDirectory(dirPath, sectionName) {
    const metadata = {
      section: sectionName,
      created: new Date().toISOString(),
      total_files: 0,
      images: 0,
      videos: 0,
      files: [],
    };

    if (fs.existsSync(dirPath)) {
      const items = fs.readdirSync(dirPath);

      items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isFile()) {
          const ext = path.extname(item).toLowerCase();
          if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
            metadata.images++;
            metadata.files.push({
              name: item,
              type: 'image',
              size: stat.size,
              path: fullPath,
            });
          } else if (['.mp4', '.mov', '.avi'].includes(ext)) {
            metadata.videos++;
            metadata.files.push({
              name: item,
              type: 'video',
              size: stat.size,
              path: fullPath,
            });
          }
        }
      });

      metadata.total_files = metadata.images + metadata.videos;

      // Write metadata file
      const metadataPath = path.join(dirPath, 'metadata.json');
      fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    }
  }

  // Create metadata for main sections
  HOMEPAGE_SECTIONS.forEach(section => {
    createMetadataForDirectory(
      path.join(basePath, section, 'images'),
      `${section}_images`
    );
    createMetadataForDirectory(
      path.join(basePath, section, 'videos'),
      `${section}_videos`
    );
  });

  // Create metadata for solutions matrix sub-sections
  SOLUTIONS_MATRIX_SUBSECTIONS.forEach(subsection => {
    createMetadataForDirectory(
      path.join(basePath, 'solutions_matrix', subsection, 'images'),
      `solutions_matrix_${subsection}_images`
    );
    createMetadataForDirectory(
      path.join(basePath, 'solutions_matrix', subsection, 'videos'),
      `solutions_matrix_${subsection}_videos`
    );
  });
}

function main() {
  try {
    // Step 1: Create directory structure
    createDirectoryStructure();

    // Step 2: Distribute assets randomly
    distributeAssetsRandomly();

    // Step 3: Create metadata files
    createMetadataFiles();

    // Step 4: Generate summary
    generateSummary();
  } catch (error) {
    // Error handling without console
  }
}

// Run the script
main();
