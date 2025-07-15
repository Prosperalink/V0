#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const os = require('os');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

class OptimizedSetupVerifier {
  constructor() {
    this.results = {
      devServer: false,
      mockApi: false,
      performance: false,
      debugging: false,
      snippets: false,
      documentation: false,
      qualityTools: false,
    };
  }

  async verifyDevServer() {
    try {
      // Test if dev server can start
      const devProcess = spawn('npm', ['run', 'dev:fast'], {
        stdio: 'pipe',
        env: { ...process.env, PORT: '3001' },
      });

      // Wait a bit for server to start
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Check if server is responding
      const response = await fetch('http://localhost:3001');
      if (response.ok) {
        this.results.devServer = true;
      }

      devProcess.kill();
    } catch (error) {
      // console.log('❌ Development server verification failed:', error.message);
    }
  }

  async verifyMockApi() {
    try {
      const mockProcess = spawn('node', ['mock-api.js'], {
        stdio: 'pipe',
        env: { ...process.env, MOCK_API_PORT: '4001' },
      });

      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Test mock API endpoint
      const response = await fetch('http://localhost:4001/api/hello');
      const data = await response.json();

      if (data.message === 'Hello from the mock API!') {
        this.results.mockApi = true;
      }

      mockProcess.kill();
    } catch (error) {
      // console.log('❌ Mock API verification failed:', error.message);
    }
  }

  async verifyPerformanceTools() {
    try {
      // Test performance script
      execSync('npm run performance', { stdio: 'pipe' });
      this.results.performance = true;
    } catch (error) {
      // console.log('❌ Performance tools verification failed:', error.message);
    }
  }

  async verifyDebugging() {
    try {
      const launchConfig = path.join(__dirname, '../.vscode/launch.json');
      if (fs.existsSync(launchConfig)) {
        const config = JSON.parse(fs.readFileSync(launchConfig, 'utf8'));
        if (config.configurations && config.configurations.length > 0) {
          this.results.debugging = true;
        }
      }
    } catch (error) {
      // console.log('❌ Debugging verification failed:', error.message);
    }
  }

  async verifySnippets() {
    try {
      const reactSnippets = path.join(
        __dirname,
        '../.vscode/snippets/react.json'
      );
      const tailwindSnippets = path.join(
        __dirname,
        '../.vscode/snippets/tailwind.json'
      );

      if (fs.existsSync(reactSnippets) && fs.existsSync(tailwindSnippets)) {
        this.results.snippets = true;
      }
    } catch (error) {
      // console.log('❌ Snippets verification failed:', error.message);
    }
  }

  async verifyDocumentation() {
    try {
      const guidelines = path.join(
        __dirname,
        '../docs/technical/dev-environment-guidelines.md'
      );
      if (fs.existsSync(guidelines)) {
        const content = fs.readFileSync(guidelines, 'utf8');
        if (content.includes('Mock API') && content.includes('Lighthouse CI')) {
          this.results.documentation = true;
        }
      }
    } catch (error) {
      // console.log('❌ Documentation verification failed:', error.message);
    }
  }

  async verifyQualityTools() {
    try {
      // Test ESLint
      execSync('npm run lint', { stdio: 'pipe' });

      // Test TypeScript
      execSync('npm run type-check', { stdio: 'pipe' });

      // Test Prettier
      execSync('npm run format:check', { stdio: 'pipe' });

      this.results.qualityTools = true;
    } catch (error) {
      // console.log('❌ Quality tools verification failed:', error.message);
    }
  }

  generateReport() {
    // console.log('\n📊 Optimization Verification Report');
    // console.log('===================================');

    const totalChecks = Object.keys(this.results).length;
    const passedChecks = Object.values(this.results).filter(Boolean).length;

    Object.entries(this.results).forEach(([check, passed]) => {
      const icon = passed ? '✅' : '❌';
      const status = passed ? 'PASSED' : 'FAILED';
      // console.log(`${icon} ${check}: ${status}`);
    });

    // console.log(`\n🎯 Overall: ${passedChecks}/${totalChecks} checks passed`);

    if (passedChecks === totalChecks) {
      // console.log('🎉 All optimizations are working correctly!');
    } else {
      // console.log('⚠️  Some optimizations need attention');
    }

    // Save report
    const reportPath = path.join(
      __dirname,
      '../optimization-verification.json'
    );
    const reportData = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        total: totalChecks,
        passed: passedChecks,
        failed: totalChecks - passedChecks,
      },
    };

    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    // console.log(`\n📄 Report saved to: ${reportPath}`);
  }

  async runAllVerifications() {
    // console.log('🚀 Starting optimization verification...\n');

    await this.verifyDevServer();
    await this.verifyMockApi();
    await this.verifyPerformanceTools();
    await this.verifyDebugging();
    await this.verifySnippets();
    await this.verifyDocumentation();
    await this.verifyQualityTools();

    this.generateReport();
  }
}

// Run if called directly
if (require.main === module) {
  const verifier = new OptimizedSetupVerifier();
  verifier.runAllVerifications().catch(() => process.exit(1));
}

module.exports = OptimizedSetupVerifier;
