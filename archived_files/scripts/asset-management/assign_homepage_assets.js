const fs = require('fs');
const path = require('path');

// Homepage sections mapping
const HOMEPAGE_SECTIONS = {
  hero_section: {
    source: 'assets/homepage/hero_section',
    destination: 'public/assets/pages/homepage/hero_section',
    description: 'Hero section assets',
  },
  solutions_matrix: {
    source: 'assets/homepage/solutions_matrix',
    destination: 'public/assets/pages/homepage/solutions_matrix',
    description: 'Solutions matrix assets',
  },
  client_journey: {
    source: 'assets/homepage/client_journey',
    destination: 'public/assets/pages/homepage/client_journey',
    description: 'Client journey assets',
  },
  success_stories: {
    source: 'assets/homepage/success_stories',
    destination: 'public/assets/pages/homepage/success_stories',
    description: 'Success stories assets',
  },
  contact_section: {
    source: 'assets/homepage/contact_section',
    destination: 'public/assets/pages/homepage/contact_section',
    description: 'Contact section assets',
  },
};

// Solutions matrix sub-sections
const SOLUTIONS_MATRIX_SUBSECTIONS = [
  'content_creation',
  'creative_design',
  'digital_innovation',
  'strategic_consulting',
  'technology_solutions',
];

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function copyDirectory(source, destination) {
  if (!fs.existsSync(source)) {
    return;
  }

  ensureDirectoryExists(destination);

  const items = fs.readdirSync(source);

  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);

    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

function assignAssetsToSections() {
  // Process each homepage section
  Object.entries(HOMEPAGE_SECTIONS).forEach(([sectionName, config]) => {
    if (sectionName === 'solutions_matrix') {
      // Handle solutions matrix with sub-sections
      SOLUTIONS_MATRIX_SUBSECTIONS.forEach(subsection => {
        const sourceSubsection = path.join(config.source, subsection);
        const destSubsection = path.join(config.destination, subsection);

        if (fs.existsSync(sourceSubsection)) {
          copyDirectory(sourceSubsection, destSubsection);
        }
      });
    } else {
      // Handle regular sections
      copyDirectory(config.source, config.destination);
    }
  });

  // Create additional sections that might be needed
  const additionalSections = [
    'testimonials',
    'about_section',
    'cinematic_universes',
    'services_section',
  ];

  additionalSections.forEach(section => {
    const sectionPath = path.join('public/assets/pages/homepage', section);
    ensureDirectoryExists(sectionPath);

    // Create images and videos subdirectories
    const imagesPath = path.join(sectionPath, 'images');
    const videosPath = path.join(sectionPath, 'videos');
    ensureDirectoryExists(imagesPath);
    ensureDirectoryExists(videosPath);
  });

  // Generate summary
  Object.entries(HOMEPAGE_SECTIONS).forEach(([sectionName, config]) => {
    const destPath = config.destination;
    if (fs.existsSync(destPath)) {
      const files = getAllFiles(destPath);
    }
  });
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function createAssetMappingFile() {
  const mapping = {
    homepage_sections: HOMEPAGE_SECTIONS,
    solutions_matrix_subsections: SOLUTIONS_MATRIX_SUBSECTIONS,
    asset_structure: {
      hero_section: {
        description:
          'Hero section with main call-to-action and brand messaging',
        assets: ['images', 'videos'],
      },
      solutions_matrix: {
        description: 'Services and solutions showcase',
        subsections: SOLUTIONS_MATRIX_SUBSECTIONS,
        assets: ['images', 'videos'],
      },
      client_journey: {
        description: 'Process and workflow visualization',
        assets: ['images', 'videos'],
      },
      success_stories: {
        description: 'Case studies and testimonials',
        assets: ['images', 'videos'],
      },
      contact_section: {
        description: 'Contact forms and information',
        assets: ['images', 'videos'],
      },
      testimonials: {
        description: 'Client testimonials and reviews',
        assets: ['images', 'videos'],
      },
      about_section: {
        description: 'Company information and team',
        assets: ['images', 'videos'],
      },
      cinematic_universes: {
        description: 'Industry-specific solutions',
        assets: ['images', 'videos'],
      },
      services_section: {
        description: 'Detailed service offerings',
        assets: ['images', 'videos'],
      },
    },
  };

  fs.writeFileSync(
    'public/assets/pages/homepage/asset-mapping.json',
    JSON.stringify(mapping, null, 2)
  );
}

// Run the assignment
try {
  assignAssetsToSections();
  createAssetMappingFile();
} catch (error) {
  // Error handling without console
}
