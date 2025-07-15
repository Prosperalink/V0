#!/usr/bin/env node

/**
 * CSS Validation Script
 *
 * This script validates CSS files for common compilation errors and enforces
 * the CSS compilation guidelines defined in docs/technical/css-compilation-guidelines.md
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

class CSSValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.cssFiles = [];
  }

  /**
   * Find all CSS files in the project
   */
  findCSSFiles(dir = 'src') {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        this.findCSSFiles(fullPath);
      } else if (item.name.endsWith('.css')) {
        this.cssFiles.push(fullPath);
      }
    }
  }

  /**
   * Validate a single CSS file
   */
  validateCSSFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');

      this.validateImportOrder(filePath, lines);
      this.validateTailwindDirectives(filePath, lines);
      this.validateSyntax(filePath, content);
      this.validateCustomProperties(filePath, content);
    } catch (error) {
      this.errors.push(`Failed to read ${filePath}: ${error.message}`);
    }
  }

  /**
   * Validate import statement order
   */
  validateImportOrder(filePath, lines) {
    // eslint-disable-next-line prefer-const
    const importLines = [];
    let foundOtherRules = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith('@import')) {
        if (foundOtherRules) {
          this.errors.push(
            `${filePath}:${i + 1}: @import statement found after other rules. Import statements must come first.`
          );
        }
        importLines.push({ line: i + 1, content: line });
      } else if (
        line &&
        !line.startsWith('/*') &&
        !line.startsWith('*') &&
        !line.startsWith('@charset') &&
        !line.startsWith('@layer')
      ) {
        foundOtherRules = true;
      }
    }

    if (importLines.length > 0) {
      // console.log(
      //   `  ✅ Import statements properly positioned (${importLines.length} found)`
      // );
    }
  }

  /**
   * Validate Tailwind directives
   */
  validateTailwindDirectives(filePath, lines) {
    const tailwindDirectives = [
      '@tailwind base',
      '@tailwind components',
      '@tailwind utilities',
    ];
    const foundDirectives = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('@tailwind')) {
        // Remove semicolon for comparison
        const directive = line.replace(/;$/, '');
        foundDirectives.push({ line: i + 1, directive: directive });
      }
    }

    // Check if all required directives are present
    const missingDirectives = tailwindDirectives.filter(
      directive => !foundDirectives.some(found => found.directive === directive)
    );

    if (missingDirectives.length > 0) {
      this.warnings.push(
        `${filePath}: Missing Tailwind directives: ${missingDirectives.join(', ')}`
      );
    } else {
      // console.log(`  ✅ All Tailwind directives present`);
    }

    // Check order - only if we have exactly 3 directives
    if (foundDirectives.length === 3) {
      const first = foundDirectives[0].directive;
      const second = foundDirectives[1].directive;
      const third = foundDirectives[2].directive;

      if (
        first !== '@tailwind base' ||
        second !== '@tailwind components' ||
        third !== '@tailwind utilities'
      ) {
        this.errors.push(
          `${filePath}: Tailwind directives in wrong order. Expected: @tailwind base, @tailwind components, @tailwind utilities`
        );
      } else {
        // console.log(`  ✅ Tailwind directives in correct order`);
      }
    } else if (foundDirectives.length > 0) {
      // console.log(`  ✅ Found ${foundDirectives.length} Tailwind directive(s)`);
    }
  }

  /**
   * Validate CSS syntax
   */
  validateSyntax(filePath, content) {
    // Check for common syntax errors
    const syntaxChecks = [
      {
        pattern: /[^;]\s*}/g,
        message: 'Missing semicolon before closing brace',
        exclude: /@media|@keyframes|@container/,
      },
      {
        pattern: /{[^}]*$/gm,
        message: 'Unclosed CSS rule',
        exclude: /@media|@keyframes|@container/,
      },
      {
        pattern: /[a-zA-Z-]+:\s*[^;]*$/gm,
        message: 'Missing semicolon at end of property',
        exclude: /@media|@keyframes|@container/,
      },
    ];

    for (const check of syntaxChecks) {
      const matches = content.match(check.pattern);
      if (matches) {
        // Filter out false positives for media queries, keyframes, etc.
        const filteredMatches = matches.filter(match => {
          if (check.exclude && check.exclude.test(match)) {
            return false;
          }
          return true;
        });

        if (filteredMatches.length > 0) {
          this.warnings.push(
            `${filePath}: Potential syntax issue - ${check.message}`
          );
        }
      }
    }
  }

  /**
   * Validate custom properties usage
   */
  validateCustomProperties(filePath, content) {
    const customProps = content.match(/var\(--[^)]+\)/g) || [];

    // Improved regex to capture custom property definitions more accurately
    // This handles multi-line definitions and various whitespace patterns
    const definedProps =
      content.match(/--[a-zA-Z0-9-]+(?:\s*:\s*[^;]*;?)/g) || [];

    // Create a set of defined properties (extract just the property names)
    const definedSet = new Set(
      definedProps
        .map(prop => {
          const match = prop.match(/--[a-zA-Z0-9-]+/);
          return match ? match[0] : null;
        })
        .filter(Boolean)
    );

    // Check if all used properties are defined
    for (const prop of customProps) {
      const propName = prop.match(/--[^)]+/)[0];
      if (!definedSet.has(propName)) {
        this.warnings.push(
          `${filePath}: Custom property ${propName} is used but may not be defined`
        );
      }
    }
  }

  /**
   * Run all validations
   */
  run() {
    // console.log('🚀 Starting CSS validation...\n');

    this.findCSSFiles();

    if (this.cssFiles.length === 0) {
      // console.log('No CSS files found in src/ directory');
      return;
    }

    // console.log(`Found ${this.cssFiles.length} CSS file(s):`);
    // this.cssFiles.forEach(file => console.log(`  - ${file}`));
    // console.log('');

    for (const file of this.cssFiles) {
      this.validateCSSFile(file);
      // console.log('');
    }

    this.reportResults();
  }

  /**
   * Report validation results
   */
  reportResults() {
    // console.log('📊 Validation Results:');
    // console.log('=====================');

    if (this.errors.length === 0 && this.warnings.length === 0) {
      // console.log('✅ All CSS files passed validation!');
      process.exit(0);
    }

    if (this.errors.length > 0) {
      // console.log(`❌ ${this.errors.length} error(s) found:`);
      // this.errors.forEach(error => console.log(`  - ${error}`));
      // console.log('');
    }

    if (this.warnings.length > 0) {
      // console.log(`⚠️  ${this.warnings.length} warning(s) found:`);
      // this.warnings.forEach(warning => console.log(`  - ${warning}`));
      // console.log('');
    }

    // console.log('💡 Tips:');
    // console.log(
    //   '  - Check docs/technical/css-compilation-guidelines.md for best practices'
    // );
    // console.log('  - Run "npm run lint:css" for additional checks');
    // console.log('  - Use "npm run build" to test full compilation');

    process.exit(this.errors.length > 0 ? 1 : 0);
  }
}

// Run validation if script is executed directly
if (require.main === module) {
  const validator = new CSSValidator();
  validator.run();
}

module.exports = CSSValidator;
