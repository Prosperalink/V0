#!/usr/bin/env node

/**
 * AI Quality Enforcement Script
 * Ensures all AI-generated code meets Orson Vision's quality standards
 * Updated for Cinematic Humanism Vision
 */

const fs = require('fs');
const path = require('path');

// Quality Standards Configuration
const QUALITY_STANDARDS = {
  // Naming Conventions
  naming: {
    components: /^[A-Z][a-zA-Z0-9]*\.tsx?$/,
    functions: /^[a-z][a-zA-Z0-9]*$/,
    interfaces: /^I[A-Z][a-zA-Z0-9]*$/,
    constants: /^[A-Z_][A-Z0-9_]*$/,
    files: /^[a-z][a-z0-9-]*\.(tsx?|js|css|md)$/,
  },

  // Cinematic Humanism Specific Standards
  cinematic: {
    requiredComponents: [
      'HeroSection',
      'CinematicLens',
      'DirectorsInterface',
      'StoryboardExperience',
    ],
    requiredColors: [
      'cinematic-blue-deep',
      'cinematic-blue-rich',
      'cinematic-blue-vibrant',
      'cinematic-gold-primary',
      'cinematic-gold-bright',
    ],
    requiredAnimations: [
      'fade-in-up',
      'fade-in-down',
      'golden-glow',
      'cinematic-shimmer',
      'lens-rotate',
      'director-spin',
    ],
  },

  // Code Quality Standards
  codeQuality: {
    maxFunctionLength: 50,
    maxComponentLength: 200,
    maxFileLength: 500,
    requiredImports: ['react', 'framer-motion', 'lucide-react'],
    forbiddenPatterns: ['console.log', 'alert(', 'eval(', 'innerHTML'],
  },

  // Accessibility Standards
  accessibility: {
    requiredAttributes: ['aria-label', 'role', 'alt', 'title'],
    colorContrast: {
      minimum: 4.5,
      largeText: 3.0,
    },
  },

  // Performance Standards
  performance: {
    maxBundleSize: 250, // KB
    maxRenderTime: 50, // ms
    requiredOptimizations: ['lazy', 'memo', 'useCallback', 'useMemo'],
  },
};

// File Patterns to Check
const FILE_PATTERNS = {
  components: 'src/components/**/*.{ts,tsx}',
  pages: 'src/app/**/*.{ts,tsx}',
  styles: 'src/**/*.css',
  config: '*.config.{js,ts}',
};

/**
 * Check Naming Conventions
 */
function checkNamingConventions(content, filePath) {
  const issues = [];
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Check component names
    const componentMatch = line.match(
      /export\s+(default\s+)?function\s+([A-Za-z0-9_]+)/
    );
    if (componentMatch) {
      const componentName = componentMatch[2];
      if (!QUALITY_STANDARDS.naming.components.test(componentName)) {
        issues.push({
          line: index + 1,
          message: `Component name "${componentName}" should be PascalCase`,
          severity: 'error',
        });
      }
    }

    // Check function names
    const functionMatch = line.match(/function\s+([a-zA-Z0-9_]+)/);
    if (functionMatch) {
      const functionName = functionMatch[1];
      if (!QUALITY_STANDARDS.naming.functions.test(functionName)) {
        issues.push({
          line: index + 1,
          message: `Function name "${functionName}" should be camelCase`,
          severity: 'error',
        });
      }
    }

    // Check interface names
    const interfaceMatch = line.match(/interface\s+([A-Za-z0-9_]+)/);
    if (interfaceMatch) {
      const interfaceName = interfaceMatch[1];
      if (!QUALITY_STANDARDS.naming.interfaces.test(interfaceName)) {
        issues.push({
          line: index + 1,
          message: `Interface name "${interfaceName}" should start with 'I' and be PascalCase`,
          severity: 'error',
        });
      }
    }
  });

  return issues;
}

/**
 * Check Cinematic Humanism Standards
 */
function checkCinematicStandards(content, filePath) {
  const issues = [];
  const lines = content.split('\n');

  // Check for required components
  QUALITY_STANDARDS.cinematic.requiredComponents.forEach(component => {
    if (
      content.includes(component) &&
      !content.includes(`import.*${component}`)
    ) {
      issues.push({
        line: 1,
        message: `Missing import for required component: ${component}`,
        severity: 'error',
      });
    }
  });

  // Check for required colors
  const colorUsage = QUALITY_STANDARDS.cinematic.requiredColors.filter(color =>
    content.includes(color)
  );
  if (colorUsage.length === 0) {
    issues.push({
      line: 1,
      message:
        'No Cinematic Humanism colors found. Consider using the new color palette.',
      severity: 'warning',
    });
  }

  // Check for required animations
  const animationUsage = QUALITY_STANDARDS.cinematic.requiredAnimations.filter(
    animation => content.includes(animation)
  );
  if (animationUsage.length === 0) {
    issues.push({
      line: 1,
      message:
        'No Cinematic Humanism animations found. Consider adding cinematic animations.',
      severity: 'warning',
    });
  }

  // Check for cinematic effects
  const cinematicEffects = [
    'lens-effect',
    'director-effect',
    'storyboard-effect',
    'text-gradient',
    'cinematic-text-shadow',
  ];

  const effectsUsed = cinematicEffects.filter(effect =>
    content.includes(effect)
  );
  if (effectsUsed.length === 0) {
    issues.push({
      line: 1,
      message:
        'No cinematic effects found. Consider adding lens, director, or storyboard effects.',
      severity: 'warning',
    });
  }

  return issues;
}

/**
 * Check Code Quality
 */
function checkCodeQuality(content, filePath) {
  const issues = [];
  const lines = content.split('\n');

  // Check function length
  let functionStart = -1;
  lines.forEach((line, index) => {
    if (line.match(/function\s+[a-zA-Z0-9_]+/)) {
      functionStart = index;
    }
    if (functionStart !== -1 && line.trim() === '}') {
      const functionLength = index - functionStart;
      if (functionLength > QUALITY_STANDARDS.codeQuality.maxFunctionLength) {
        issues.push({
          line: functionStart + 1,
          message: `Function is ${functionLength} lines long. Consider breaking it into smaller functions.`,
          severity: 'warning',
        });
      }
      functionStart = -1;
    }
  });

  // Check for forbidden patterns
  lines.forEach((line, index) => {
    QUALITY_STANDARDS.codeQuality.forbiddenPatterns.forEach(pattern => {
      if (line.includes(pattern)) {
        issues.push({
          line: index + 1,
          message: `Forbidden pattern found: ${pattern}`,
          severity: 'error',
        });
      }
    });
  });

  // Check required imports
  const requiredImports = QUALITY_STANDARDS.codeQuality.requiredImports.filter(
    importName => !content.includes(`import.*${importName}`)
  );
  if (requiredImports.length > 0) {
    issues.push({
      line: 1,
      message: `Missing required imports: ${requiredImports.join(', ')}`,
      severity: 'warning',
    });
  }

  return issues;
}

/**
 * Check Accessibility
 */
function checkAccessibility(content, filePath) {
  const issues = [];
  const lines = content.split('\n');

  // Check for required accessibility attributes
  lines.forEach((line, index) => {
    if (
      line.includes('<button') ||
      line.includes('<div') ||
      line.includes('<section')
    ) {
      const hasAriaLabel =
        line.includes('aria-label') || line.includes('aria-labelledby');
      const hasRole = line.includes('role=');

      if (!hasAriaLabel && !hasRole) {
        issues.push({
          line: index + 1,
          message:
            'Interactive element should have aria-label or role attribute',
          severity: 'warning',
        });
      }
    }

    if (line.includes('<img')) {
      if (!line.includes('alt=')) {
        issues.push({
          line: index + 1,
          message: 'Image should have alt attribute for accessibility',
          severity: 'error',
        });
      }
    }
  });

  return issues;
}

/**
 * Check Performance
 */
function checkPerformance(content, filePath) {
  const issues = [];

  // Check for required optimizations
  const optimizations =
    QUALITY_STANDARDS.performance.requiredOptimizations.filter(
      opt => !content.includes(opt)
    );

  if (optimizations.length > 0) {
    issues.push({
      line: 1,
      message: `Consider adding performance optimizations: ${optimizations.join(', ')}`,
      severity: 'warning',
    });
  }

  // Check for heavy operations
  const heavyPatterns = [
    'document.querySelector',
    'innerHTML',
    'eval(',
    'setInterval',
    'setTimeout',
  ];

  heavyPatterns.forEach(pattern => {
    if (content.includes(pattern)) {
      issues.push({
        line: 1,
        message: `Heavy operation detected: ${pattern}. Consider optimization.`,
        severity: 'warning',
      });
    }
  });

  return issues;
}

/**
 * Main Quality Check Function
 */
function performQualityCheck(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];

    // Run all quality checks
    issues.push(...checkNamingConventions(content, filePath));
    issues.push(...checkCinematicStandards(content, filePath));
    issues.push(...checkCodeQuality(content, filePath));
    issues.push(...checkAccessibility(content, filePath));
    issues.push(...checkPerformance(content, filePath));

    return {
      file: filePath,
      issues,
      passed: issues.filter(issue => issue.severity === 'error').length === 0,
    };
  } catch (error) {
    return {
      file: filePath,
      issues: [
        {
          line: 1,
          message: `Error reading file: ${error.message}`,
          severity: 'error',
        },
      ],
      passed: false,
    };
  }
}

/**
 * Generate Quality Report
 */
function generateQualityReport(results) {
  const totalFiles = results.length;
  const passedFiles = results.filter(r => r.passed).length;
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const errors = results.reduce(
    (sum, r) => sum + r.issues.filter(i => i.severity === 'error').length,
    0
  );
  const warnings = results.reduce(
    (sum, r) => sum + r.issues.filter(i => i.severity === 'warning').length,
    0
  );

  console.log('\n🎬 Cinematic Humanism Quality Report');
  console.log('=====================================');
  console.log(`📁 Files Checked: ${totalFiles}`);
  console.log(`✅ Files Passed: ${passedFiles}`);
  console.log(`❌ Files Failed: ${totalFiles - passedFiles}`);
  console.log(
    `🚨 Total Issues: ${totalIssues} (${errors} errors, ${warnings} warnings)`
  );
  console.log(
    `📊 Success Rate: ${((passedFiles / totalFiles) * 100).toFixed(1)}%`
  );

  if (totalIssues > 0) {
    console.log('\n📋 Issues Found:');
    results.forEach(result => {
      if (result.issues.length > 0) {
        console.log(`\n📄 ${result.file}:`);
        result.issues.forEach(issue => {
          const icon = issue.severity === 'error' ? '❌' : '⚠️';
          console.log(`  ${icon} Line ${issue.line}: ${issue.message}`);
        });
      }
    });
  }

  return {
    totalFiles,
    passedFiles,
    totalIssues,
    errors,
    warnings,
    successRate: (passedFiles / totalFiles) * 100,
  };
}

/**
 * Main Execution
 */
function main() {
  console.log('🎬 Orson Vision - AI Quality Enforcement');
  console.log('Cinematic Humanism Vision v2.0');
  console.log('=====================================\n');

  // Get files to check
  const filesToCheck = process.argv.slice(2);

  if (filesToCheck.length === 0) {
    console.log('No files specified. Checking all component files...');
    // Add default file patterns here if needed
    return;
  }

  const results = filesToCheck.map(performQualityCheck);
  const report = generateQualityReport(results);

  // Exit with error code if there are critical issues
  if (report.errors > 0) {
    console.log('\n❌ Quality check failed due to errors.');
    process.exit(1);
  } else if (report.warnings > 0) {
    console.log('\n⚠️  Quality check passed with warnings.');
  } else {
    console.log('\n✅ Quality check passed successfully!');
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  performQualityCheck,
  generateQualityReport,
  QUALITY_STANDARDS,
};
