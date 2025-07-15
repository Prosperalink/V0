#!/usr/bin/env node

/**
 * Quality Standards Verification Script
 *
 * This script verifies that all quality enforcement mechanisms are working correctly.
 * It attempts to introduce violations and confirms they are caught by the appropriate tools.
 */

const { execSync } = require('child_process');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

class QualityVerifier {
  constructor() {
    this.results = [];
    this.tempFiles = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'error'
        ? '❌'
        : type === 'success'
          ? '✅'
          : type === 'warning'
            ? '⚠️'
            : 'ℹ️';
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd(),
        shell: true,
      });
      this.log(`✅ ${description} - PASSED`, 'success');
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} - FAILED: ${error.message}`, 'error');
      return {
        success: false,
        output: error.stdout || error.stderr || error.message,
      };
    }
  }

  createTempFile(content, filename) {
    const filepath = path.join(process.cwd(), filename);
    fs.writeFileSync(filepath, content);
    this.tempFiles.push(filepath);
    return filepath;
  }

  cleanup() {
    this.tempFiles.forEach(file => {
      if (fs.existsSync(file)) {
        try {
          fs.unlinkSync(file);
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    });
  }

  async verifyESLintRules() {
    this.log('🔍 Verifying ESLint Rules...');

    // Test 1: Unused variable should be caught
    const unusedVarCode = `
import React from 'react';

function TestComponent() {
  const unusedVar = 'this should be caught';
  return <div>Test</div>;
}

export default TestComponent;
`;

    const testFile = this.createTempFile(unusedVarCode, 'test-unused-var.tsx');
    const result = await this.runCommand(
      `npx eslint "${testFile}"`,
      'ESLint unused variable detection'
    );

    if (!result.success) {
      this.results.push({ test: 'ESLint unused variable', status: 'PASSED' });
    } else {
      this.results.push({ test: 'ESLint unused variable', status: 'FAILED' });
    }

    // Test 2: Security rule violation
    const securityViolationCode = `
import React from 'react';

function TestComponent() {
  const dangerousCode = eval('console.log("dangerous")');
  return <div>Test</div>;
}

export default TestComponent;
`;

    const securityFile = this.createTempFile(
      securityViolationCode,
      'test-security.tsx'
    );
    const securityResult = await this.runCommand(
      `npx eslint "${securityFile}"`,
      'ESLint security rule detection'
    );

    if (!securityResult.success) {
      this.results.push({ test: 'ESLint security rules', status: 'PASSED' });
    } else {
      this.results.push({ test: 'ESLint security rules', status: 'FAILED' });
    }
  }

  async verifyTypeScriptRules() {
    this.log('🔍 Verifying TypeScript Rules...');

    // Test: Implicit any should be caught
    const implicitAnyCode = `
function testFunction(param) {
  return param.length;
}

export default testFunction;
`;

    const testFile = this.createTempFile(
      implicitAnyCode,
      'test-implicit-any.ts'
    );
    const result = await this.runCommand(
      `npx tsc --noEmit "${testFile}"`,
      'TypeScript implicit any detection'
    );

    if (!result.success) {
      this.results.push({ test: 'TypeScript implicit any', status: 'PASSED' });
    } else {
      this.results.push({ test: 'TypeScript implicit any', status: 'FAILED' });
    }
  }

  async verifyPrettierRules() {
    this.log('🔍 Verifying Prettier Rules...');

    // Test: Formatting should be enforced
    const unformattedCode = `
function testFunction(){
const x=1;
return x;
}
`;

    const testFile = this.createTempFile(unformattedCode, 'test-formatting.ts');
    const result = await this.runCommand(
      `npx prettier --check "${testFile}"`,
      'Prettier formatting check'
    );

    if (!result.success) {
      this.results.push({ test: 'Prettier formatting', status: 'PASSED' });
    } else {
      this.results.push({ test: 'Prettier formatting', status: 'FAILED' });
    }
  }

  async verifySecurityAudit() {
    this.log('🔍 Verifying Security Audit...');

    const result = await this.runCommand(
      'npm audit --audit-level=moderate',
      'npm security audit'
    );

    if (result.success) {
      this.results.push({ test: 'Security audit', status: 'PASSED' });
    } else {
      this.results.push({ test: 'Security audit', status: 'WARNING' });
    }
  }

  async verifyDocumentationRules() {
    this.log('🔍 Verifying Documentation Rules...');

    const result = await this.runCommand(
      'npm run check-docs',
      'Documentation organization check'
    );

    if (result.success) {
      this.results.push({ test: 'Documentation rules', status: 'PASSED' });
    } else {
      this.results.push({ test: 'Documentation rules', status: 'FAILED' });
    }
  }

  async verifyGitHooks() {
    this.log('🔍 Verifying Git Hooks...');

    // Check if husky is installed
    const huskyPath = path.join(process.cwd(), '.husky', 'pre-commit');
    if (fs.existsSync(huskyPath)) {
      this.results.push({ test: 'Git hooks', status: 'PASSED' });
    } else {
      this.results.push({ test: 'Git hooks', status: 'FAILED' });
    }
  }

  async verifyVSCodeSettings() {
    this.log('🔍 Verifying VS Code Settings...');

    const settingsPath = path.join(process.cwd(), '.vscode', 'settings.json');
    if (fs.existsSync(settingsPath)) {
      try {
        const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));

        const requiredSettings = [
          'editor.formatOnSave',
          'editor.defaultFormatter',
          'eslint.validate',
          'prettier.requireConfig',
        ];

        const missingSettings = requiredSettings.filter(
          setting => !settings.hasOwnProperty(setting)
        );

        if (missingSettings.length === 0) {
          this.results.push({ test: 'VS Code settings', status: 'PASSED' });
        } else {
          this.results.push({
            test: 'VS Code settings',
            status: 'FAILED',
            details: `Missing settings: ${missingSettings.join(', ')}`,
          });
        }
      } catch (error) {
        this.results.push({
          test: 'VS Code settings',
          status: 'FAILED',
          details: `JSON parsing error: ${error.message}`,
        });
      }
    } else {
      this.results.push({ test: 'VS Code settings', status: 'FAILED' });
    }
  }

  async verifyPackageScripts() {
    this.log('🔍 Verifying Package Scripts...');

    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const requiredScripts = [
        'lint:strict',
        'type-check',
        'format:check',
        'test:security',
        'quality-gate',
      ];

      const missingScripts = requiredScripts.filter(
        script => !packageJson.scripts.hasOwnProperty(script)
      );

      if (missingScripts.length === 0) {
        this.results.push({ test: 'Package scripts', status: 'PASSED' });
      } else {
        this.results.push({
          test: 'Package scripts',
          status: 'FAILED',
          details: `Missing scripts: ${missingScripts.join(', ')}`,
        });
      }
    } catch (error) {
      this.results.push({
        test: 'Package scripts',
        status: 'FAILED',
        details: `JSON parsing error: ${error.message}`,
      });
    }
  }

  async verifyCIWorkflow() {
    this.log('🔍 Verifying CI/CD Workflow...');

    const workflowPath = path.join(
      process.cwd(),
      '.github',
      'workflows',
      'quality-gate.yml'
    );
    if (fs.existsSync(workflowPath)) {
      this.results.push({ test: 'CI/CD workflow', status: 'PASSED' });
    } else {
      this.results.push({ test: 'CI/CD workflow', status: 'FAILED' });
    }
  }

  printResults() {
    this.log('\n📊 Quality Standards Verification Results');
    this.log('==========================================');

    const passed = this.results.filter(r => r.status === 'PASSED').length;
    const failed = this.results.filter(r => r.status === 'FAILED').length;
    const warnings = this.results.filter(r => r.status === 'WARNING').length;

    this.results.forEach(result => {
      // const icon =
      //   result.status === 'PASSED'
      //     ? '✅'
      //     : result.status === 'FAILED'
      //       ? '❌'
      //       : '⚠️';
      // console.log(`${icon} ${result.test}: ${result.status}`);
      // if (result.details) {
      //   console.log(`   Details: ${result.details}`);
      // }
    });

    this.log(`\n📈 Summary:`);
    this.log(`   ✅ Passed: ${passed}`);
    this.log(`   ❌ Failed: ${failed}`);
    this.log(`   ⚠️  Warnings: ${warnings}`);

    if (failed === 0) {
      this.log('\n🎉 All quality standards are properly enforced!', 'success');
    } else {
      this.log(
        `\n⚠️  ${failed} quality standard(s) need attention.`,
        'warning'
      );
    }
  }

  async runAllVerifications() {
    this.log('🚀 Starting Quality Standards Verification...');

    try {
      await this.verifyESLintRules();
      await this.verifyTypeScriptRules();
      await this.verifyPrettierRules();
      await this.verifySecurityAudit();
      await this.verifyDocumentationRules();
      await this.verifyGitHooks();
      await this.verifyVSCodeSettings();
      await this.verifyPackageScripts();
      await this.verifyCIWorkflow();

      this.printResults();
    } catch (error) {
      this.log(`❌ Verification failed: ${error.message}`, 'error');
    } finally {
      this.cleanup();
    }
  }
}

// Run verification
const verifier = new QualityVerifier();
verifier.runAllVerifications();
