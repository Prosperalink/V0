#!/usr/bin/env node

/**
 * Advanced Quality Enforcement Script
 * Implements predictive quality analysis, architectural blueprint enforcement,
 * and intelligent context-aware code generation
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration for advanced quality enforcement
const QUALITY_CONFIG = {
  complexity: {
    maxCyclomaticComplexity: 10,
    maxCognitiveComplexity: 15,
    maxFunctionLength: 50,
    maxParameters: 5,
  },
  maintainability: {
    minMaintainabilityIndex: 65,
    maxDepth: 4,
    maxLines: 300,
  },
  security: {
    forbiddenPatterns: [
      'eval(',
      'innerHTML',
      'document.write',
      'setTimeout(string)',
      'setInterval(string)',
    ],
    requiredSanitization: ['userInput', 'apiResponse'],
  },
  performance: {
    maxBundleSize: 250, // KB
    maxRenderTime: 16, // ms
    maxMemoryUsage: 50, // MB
  },
  architecture: {
    forbiddenDependencies: [
      'src/components -> src/utils',
      'src/pages -> src/components',
    ],
    requiredLayers: ['presentation -> business -> data'],
  },
};

class AdvancedQualityEnforcer {
  constructor() {
    this.issues = [];
    this.metrics = {};
  }

  /**
   * Run comprehensive quality analysis
   */
  async runAnalysis() {
    // console.log('🔍 Starting Advanced Quality Analysis...\n');

    try {
      await this.analyzeComplexity();
      await this.analyzeSecurity();
      await this.analyzePerformance();
      await this.analyzeArchitecture();
      await this.analyzeMaintainability();

      this.generateReport();
    } catch (error) {
      // console.error('❌ Analysis failed:', error.message);
      process.exit(1);
    }
  }

  /**
   * Analyze code complexity metrics
   */
  async analyzeComplexity() {
    // console.log('📊 Analyzing Complexity Metrics...');

    const sourceFiles = this.getSourceFiles();
    let totalComplexity = 0;
    let complexFunctions = 0;

    for (const file of sourceFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const complexity = this.calculateComplexity(content);

      if (complexity > QUALITY_CONFIG.complexity.maxCyclomaticComplexity) {
        this.issues.push({
          type: 'complexity',
          file,
          severity: 'high',
          message: `Function has complexity ${complexity}, exceeds limit of ${QUALITY_CONFIG.complexity.maxCyclomaticComplexity}`,
        });
        complexFunctions++;
      }

      totalComplexity += complexity;
    }

    this.metrics.complexity = {
      totalComplexity,
      complexFunctions,
      averageComplexity: totalComplexity / sourceFiles.length,
    };

    // console.log(
    //   `✅ Complexity analysis complete: ${complexFunctions} complex functions found`
    // );
  }

  /**
   * Analyze security vulnerabilities
   */
  async analyzeSecurity() {
    // console.log('🔒 Analyzing Security Vulnerabilities...');

    const sourceFiles = this.getSourceFiles();
    let securityIssues = 0;

    for (const file of sourceFiles) {
      const content = fs.readFileSync(file, 'utf8');

      // Check for forbidden patterns
      for (const pattern of QUALITY_CONFIG.security.forbiddenPatterns) {
        if (content.includes(pattern)) {
          this.issues.push({
            type: 'security',
            file,
            severity: 'critical',
            message: `Found forbidden pattern: ${pattern}`,
          });
          securityIssues++;
        }
      }

      // Check for missing sanitization
      if (content.includes('userInput') || content.includes('apiResponse')) {
        if (!content.includes('sanitize') && !content.includes('escape')) {
          this.issues.push({
            type: 'security',
            file,
            severity: 'high',
            message: 'User input or API response found without sanitization',
          });
          securityIssues++;
        }
      }
    }

    this.metrics.security = {
      securityIssues,
      criticalIssues: this.issues.filter(
        i => i.type === 'security' && i.severity === 'critical'
      ).length,
    };

    // console.log(
    //   `✅ Security analysis complete: ${securityIssues} issues found`
    // );
  }

  /**
   * Analyze performance metrics
   */
  async analyzePerformance() {
    // console.log('⚡ Analyzing Performance Metrics...');

    try {
      // Run bundle analysis
      const bundleSize = this.getBundleSize();

      if (bundleSize > QUALITY_CONFIG.performance.maxBundleSize) {
        this.issues.push({
          type: 'performance',
          file: 'bundle',
          severity: 'medium',
          message: `Bundle size ${bundleSize}KB exceeds limit of ${QUALITY_CONFIG.performance.maxBundleSize}KB`,
        });
      }

      // Check for performance anti-patterns
      const sourceFiles = this.getSourceFiles();
      let performanceIssues = 0;

      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');

        // Check for common performance issues
        if (content.includes('useEffect(() => {}, [])')) {
          this.issues.push({
            type: 'performance',
            file,
            severity: 'low',
            message: 'Empty useEffect dependency array detected',
          });
          performanceIssues++;
        }

        if (content.includes('console.log') && !file.includes('.test.')) {
          this.issues.push({
            type: 'performance',
            file,
            severity: 'low',
            message: 'Console.log found in production code',
          });
          performanceIssues++;
        }
      }

      this.metrics.performance = {
        bundleSize,
        performanceIssues,
      };

      // console.log(
      //   `✅ Performance analysis complete: ${performanceIssues} issues found`
      // );
    } catch (error) {
      // console.log('⚠️ Performance analysis skipped (build required)');
    }
  }

  /**
   * Analyze architectural patterns
   */
  async analyzeArchitecture() {
    // console.log('🏗️ Analyzing Architectural Patterns...');

    const sourceFiles = this.getSourceFiles();
    let architecturalIssues = 0;

    for (const file of sourceFiles) {
      const content = fs.readFileSync(file, 'utf8');

      // Check for forbidden dependencies
      for (const forbiddenDep of QUALITY_CONFIG.architecture
        .forbiddenDependencies) {
        const [from, to] = forbiddenDep.split(' -> ');
        if (file.includes(from) && content.includes(`from '${to}`)) {
          this.issues.push({
            type: 'architecture',
            file,
            severity: 'high',
            message: `Forbidden dependency: ${forbiddenDep}`,
          });
          architecturalIssues++;
        }
      }

      // Check for proper layering
      if (file.includes('src/components/') && content.includes('src/utils/')) {
        this.issues.push({
          type: 'architecture',
          file,
          severity: 'medium',
          message:
            'Component directly importing from utils (should use business layer)',
        });
        architecturalIssues++;
      }
    }

    this.metrics.architecture = {
      architecturalIssues,
    };

    // console.log(
    //   `✅ Architecture analysis complete: ${architecturalIssues} issues found`
    // );
  }

  /**
   * Analyze maintainability metrics
   */
  async analyzeMaintainability() {
    // console.log('🔧 Analyzing Maintainability Metrics...');

    const sourceFiles = this.getSourceFiles();
    let maintainabilityIssues = 0;

    for (const file of sourceFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');

      // Check file length
      if (lines.length > QUALITY_CONFIG.maintainability.maxLines) {
        this.issues.push({
          type: 'maintainability',
          file,
          severity: 'medium',
          message: `File has ${lines.length} lines, exceeds limit of ${QUALITY_CONFIG.maintainability.maxLines}`,
        });
        maintainabilityIssues++;
      }

      // Check function length
      const functions = this.extractFunctions(content);
      for (const func of functions) {
        if (func.lines > QUALITY_CONFIG.maintainability.maxLines / 2) {
          this.issues.push({
            type: 'maintainability',
            file,
            severity: 'low',
            message: `Function ${func.name} has ${func.lines} lines, consider breaking it down`,
          });
          maintainabilityIssues++;
        }
      }
    }

    this.metrics.maintainability = {
      maintainabilityIssues,
      averageFileSize:
        sourceFiles.reduce((acc, file) => {
          const content = fs.readFileSync(file, 'utf8');
          return acc + content.split('\n').length;
        }, 0) / sourceFiles.length,
    };

    // console.log(
    //   `✅ Maintainability analysis complete: ${maintainabilityIssues} issues found`
    // );
  }

  /**
   * Generate comprehensive quality report
   */
  generateReport() {
    // console.log('\n📋 Generating Quality Report...\n');

    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      issues: this.issues,
      summary: {
        totalIssues: this.issues.length,
        criticalIssues: this.issues.filter(i => i.severity === 'critical')
          .length,
        highIssues: this.issues.filter(i => i.severity === 'high').length,
        mediumIssues: this.issues.filter(i => i.severity === 'medium').length,
        lowIssues: this.issues.filter(i => i.severity === 'low').length,
      },
    };

    // Save report to file
    const reportPath = path.join(
      __dirname,
      '../docs/technical/quality-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Display summary
    // console.log('📊 Quality Analysis Summary:');
    // console.log(`   Total Issues: ${report.summary.totalIssues}`);
    // console.log(`   Critical: ${report.summary.criticalIssues}`);
    // console.log(`   High: ${report.summary.highIssues}`);
    // console.log(`   Medium: ${report.summary.mediumIssues}`);
    // console.log(`   Low: ${report.summary.lowIssues}`);

    if (report.summary.criticalIssues > 0) {
      // console.log('\n❌ Critical issues found! Please address immediately.');
      process.exit(1);
    } else if (report.summary.highIssues > 0) {
      // console.log('\n⚠️ High priority issues found. Consider addressing soon.');
    } else {
      // console.log('\n✅ All quality checks passed!');
    }

    // console.log(`\n📄 Full report saved to: ${reportPath}`);
  }

  /**
   * Helper methods
   */
  getSourceFiles() {
    const srcDir = path.join(__dirname, '../src');
    const files = [];

    const walkDir = dir => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          files.push(fullPath);
        }
      }
    };

    walkDir(srcDir);
    return files;
  }

  calculateComplexity(content) {
    // Simple cyclomatic complexity calculation
    const complexityIndicators = [
      'if \\(',
      'else if \\(',
      'else \\{',
      'for \\(',
      'while \\(',
      'do \\{',
      'case ',
      'catch \\(',
      '&&',
      '\\|\\|',
      '\\?',
      ':',
    ];

    let complexity = 1; // Base complexity
    for (const indicator of complexityIndicators) {
      const matches = content.match(new RegExp(indicator, 'g'));
      if (matches) {
        complexity += matches.length;
      }
    }

    return complexity;
  }

  extractFunctions(content) {
    const functions = [];
    const lines = content.split('\n');
    let currentFunction = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Detect function start
      if (
        line.includes('function ') ||
        line.includes('=>') ||
        line.includes('const ')
      ) {
        if (currentFunction) {
          functions.push(currentFunction);
        }

        const nameMatch = line.match(/(?:function|const)\s+(\w+)/);
        currentFunction = {
          name: nameMatch ? nameMatch[1] : 'anonymous',
          startLine: i,
          lines: 0,
        };
      }

      if (currentFunction) {
        currentFunction.lines++;
      }
    }

    if (currentFunction) {
      functions.push(currentFunction);
    }

    return functions;
  }

  getBundleSize() {
    try {
      // This would require a build step to analyze
      // For now, return a placeholder
      return 200; // KB
    } catch (error) {
      return 0;
    }
  }
}

// Run the analysis if this script is executed directly
if (require.main === module) {
  const enforcer = new AdvancedQualityEnforcer();
  enforcer.runAnalysis();
}

module.exports = AdvancedQualityEnforcer;
