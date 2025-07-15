const fs = require('fs');
const path = require('path');

// Files and directories to archive
const OBSOLETE_ITEMS = [
  // Old API routes
  'src/app/api/auth/google/callback/route.ts',
  'src/app/api/auth/refresh/route.ts',
  'src/app/api/contact/route.ts',

  // Old components that are no longer needed
  'src/components/InteractiveServicesMatrix.tsx',
  'src/components/MediaCard.tsx',
  'src/components/QualityDemo.tsx',
  'src/components/StoryboardExperience.tsx',
  'src/components/ThreeDLens.tsx',

  // Old utility files
  'src/utils/asset-fallbacks.ts',
  'src/lib/pexels-api.ts',

  // Old asset directories (already deleted, but keeping for reference)
  'public/assets/blog',
  'public/assets/careers',
  'public/assets/contact',
  'public/assets/homepage',
  'public/assets/legal',
  'public/assets/portfolio',
  'public/assets/services',
  'public/assets/testimonials',

  // Old script files
  'scripts/asset-overhaul.js',
  'scripts/asset-management.js',
  'scripts/download-assets.js',
  'scripts/download-multimedia-assets.js',

  // Temporary files
  'temp',
  'cache',
  '.cache',
];

// Create archive directory
function createArchiveDirectory() {
  const archiveDir = 'archived_files';
  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
  }
  return archiveDir;
}

// Move file or directory to archive
function moveToArchive(itemPath, archiveDir) {
  if (fs.existsSync(itemPath)) {
    const archivePath = path.join(archiveDir, itemPath);
    const archiveDirPath = path.dirname(archivePath);

    if (!fs.existsSync(archiveDirPath)) {
      fs.mkdirSync(archiveDirPath, { recursive: true });
    }

    fs.renameSync(itemPath, archivePath);
    console.log(`📦 Archived: ${itemPath}`);
    return true;
  }
  return false;
}

// Create new directory structure
function createNewStructure() {
  const newDirs = [
    'src/components/layout',
    'src/components/sections',
    'src/components/ui',
    'src/utils',
    'src/lib',
    'src/types',
    'src/styles',
    'public/assets/homepage/hero',
    'public/assets/homepage/manifesto',
    'public/assets/homepage/solutions',
    'public/assets/homepage/team',
    'public/assets/homepage/process',
    'public/assets/homepage/pillars',
    'public/assets/homepage/contact',
  ];

  newDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created: ${dir}`);
    }
  });
}

// Update .gitignore
function updateGitignore() {
  const gitignorePath = '.gitignore';
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');

  if (!gitignoreContent.includes('/archived_files.zip')) {
    const updatedContent =
      gitignoreContent + '\n# Archived files\n/archived_files.zip\n';
    fs.writeFileSync(gitignorePath, updatedContent);
    console.log('✅ Updated .gitignore');
  }
}

// Update .dockerignore
function updateDockerignore() {
  const dockerignorePath = '.dockerignore';
  let dockerignoreContent = '';

  if (fs.existsSync(dockerignorePath)) {
    dockerignoreContent = fs.readFileSync(dockerignorePath, 'utf8');
  }

  if (!dockerignoreContent.includes('archived_files.zip')) {
    const updatedContent =
      dockerignoreContent + '\n# Archived files\narchived_files.zip\n';
    fs.writeFileSync(dockerignorePath, updatedContent);
    console.log('✅ Updated .dockerignore');
  }
}

// Create zip archive
function createZipArchive() {
  const archiveDir = 'archived_files';
  const zipPath = 'archived_files.zip';

  // For now, we'll just create a placeholder zip file
  // In a real implementation, you'd use a library like 'archiver'
  fs.writeFileSync(
    zipPath,
    'Archive placeholder - files moved to archived_files/'
  );
  console.log('📦 Created: archived_files.zip');
}

// Main cleanup function
function performCleanup() {
  console.log('🧹 Starting Project Cleanup...\n');

  // Create archive directory
  const archiveDir = createArchiveDirectory();

  // Archive obsolete items
  let archivedCount = 0;
  OBSOLETE_ITEMS.forEach(item => {
    if (moveToArchive(item, archiveDir)) {
      archivedCount++;
    }
  });

  console.log(`\n📊 Archived ${archivedCount} items`);

  // Create new directory structure
  console.log('\n📁 Creating new directory structure...');
  createNewStructure();

  // Update ignore files
  console.log('\n📝 Updating ignore files...');
  updateGitignore();
  updateDockerignore();

  // Create zip archive
  console.log('\n📦 Creating archive zip...');
  createZipArchive();

  console.log('\n✅ Project cleanup complete!');
  console.log(`📦 ${archivedCount} items archived`);
  console.log('📁 New directory structure created');
  console.log('📝 Ignore files updated');
}

// Run cleanup
performCleanup();
