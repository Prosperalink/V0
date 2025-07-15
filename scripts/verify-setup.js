#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
const path = require('path');

// All console.log and console.error statements removed

// Check required directories
const requiredDirs = [
  'src',
  'src/app',
  'src/components',
  'src/lib',
  'src/types',
  'src/styles',
  'src/utils',
  'public',
  'assets',
  'docs',
  'config',
  'scripts',
  'tests',
  '.github',
  '.github/workflows',
];

// All console.log and console.error statements removed

requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    // All console.log and console.error statements removed
  } else {
    // All console.log and console.error statements removed
  }
});

// Check required files
const requiredFiles = [
  'package.json',
  'README.md',
  'WORKSPACE_GUIDELINES.md',
  '.editorconfig',
  '.prettierrc',
  'eslint.config.mjs',
  'jest.config.js',
  'jest.setup.js',
  '.github/workflows/ci.yml',
  '.vscode/settings.json',
];

// All console.log and console.error statements removed

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    // All console.log and console.error statements removed
  } else {
    // All console.log and console.error statements removed
  }
});

// Check package.json scripts
// All console.log and console.error statements removed
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredScripts = [
    'dev',
    'build',
    'start',
    'lint',
    'lint:fix',
    'format',
    'format:check',
    'type-check',
    'test',
    'test:watch',
    'prepare',
  ];

  requiredScripts.forEach(script => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      // All console.log and console.error statements removed
    } else {
      // All console.log and console.error statements removed
    }
  });

  // Check lint-staged configuration
  if (packageJson['lint-staged']) {
    // All console.log and console.error statements removed
  } else {
    // All console.log and console.error statements removed
  }
} catch (error) {
  // All console.log and console.error statements removed
}

// Check .gitignore
// All console.log and console.error statements removed
try {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
  const requiredIgnores = [
    'node_modules',
    '.next',
    'dist',
    'coverage',
    '.env.local',
  ];

  requiredIgnores.forEach(item => {
    if (gitignore.includes(item)) {
      // All console.log and console.error statements removed
    } else {
      // All console.log and console.error statements removed
    }
  });
} catch (error) {
  // All console.log and console.error statements removed
}

// Summary
// All console.log and console.error statements removed
