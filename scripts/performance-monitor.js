#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const os = require('os');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      startTime: Date.now(),
      buildTime: 0,
      typeCheckTime: 0,
      lintTime: 0,
      testTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      systemMemory: 0,
      cpuUsage: 0,
    };
    this.thresholds = {
      buildTime: 30000, // 30 seconds
      typeCheckTime: 5000, // 5 seconds
      lintTime: 3000, // 3 seconds
      testTime: 10000, // 10 seconds
      memoryUsage: 500, // 500MB
      bundleSize: 1000000, // 1MB
    };
  }

  async measureBuildTime() {
    const start = Date.now();
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.metrics.buildTime = Date.now() - start;
    } catch (error) {
      // console.error('❌ Build failed:', error.message);
    }
  }

  async measureTypeCheckTime() {
    const start = Date.now();
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      this.metrics.typeCheckTime = Date.now() - start;
    } catch (error) {
      // console.error('❌ Type check failed:', error.message);
    }
  }

  async measureLintTime() {
    const start = Date.now();
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      this.metrics.lintTime = Date.now() - start;
    } catch (error) {
      // console.error('❌ Lint failed:', error.message);
    }
  }

  async measureTestTime() {
    const start = Date.now();
    try {
      execSync('npm run test:ci', { stdio: 'pipe' });
      this.metrics.testTime = Date.now() - start;
    } catch (error) {
      // console.error('❌ Tests failed:', error.message);
    }
  }

  async measureMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024);
    } catch (error) {
      // console.error('❌ Memory measurement failed:', error.message);
    }
  }

  async measureSystemResources() {
    try {
      // System memory
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      this.metrics.systemMemory = Math.round(
        (totalMem - freeMem) / 1024 / 1024
      );

      // CPU usage (simplified)
      const cpus = os.cpus();
      const cpuUsage =
        (cpus.reduce((acc, cpu) => {
          const total = Object.values(cpu.times).reduce((a, b) => a + b);
          const idle = cpu.times.idle;
          return acc + (total - idle) / total;
        }, 0) /
          cpus.length) *
        100;

      this.metrics.cpuUsage = Math.round(cpuUsage);
    } catch (error) {
      // console.error('❌ System resource measurement failed:', error.message);
    }
  }

  async measureBundleSize() {
    try {
      // Check if .next directory exists
      const nextDir = path.join(__dirname, '../.next');
      if (fs.existsSync(nextDir)) {
        const stats = fs.statSync(nextDir);
        this.metrics.bundleSize = stats.size;
      } else {
        // console.log('ℹ️  No build directory found, run build first');
      }
    } catch (error) {
      // console.error('❌ Bundle size measurement failed:', error.message);
    }
  }

  generateReport() {
    const totalTime = Date.now() - this.metrics.startTime;

    // console.log('\n📊 Performance Report');
    // console.log('===================');
    // console.log(`Total execution time: ${totalTime}ms`);
    // console.log(`Build time: ${this.metrics.buildTime}ms`);
    // console.log(`Type check time: ${this.metrics.typeCheckTime}ms`);
    // console.log(`Lint time: ${this.metrics.lintTime}ms`);
    // console.log(`Test time: ${this.metrics.testTime}ms`);
    // console.log(`Memory usage: ${this.metrics.memoryUsage}MB`);
    // console.log(`System memory: ${this.metrics.systemMemory}MB`);
    // console.log(`CPU usage: ${this.metrics.cpuUsage}%`);
    // console.log(`Bundle size: ${Math.round(this.metrics.bundleSize / 1024)}KB`);

    // console.log('\n🎯 Performance Analysis');
    // console.log('=====================');

    // Performance analysis
    const analysis = {
      buildTime: this.metrics.buildTime <= this.thresholds.buildTime,
      typeCheckTime:
        this.metrics.typeCheckTime <= this.thresholds.typeCheckTime,
      lintTime: this.metrics.lintTime <= this.thresholds.lintTime,
      testTime: this.metrics.testTime <= this.thresholds.testTime,
      memoryUsage: this.metrics.memoryUsage <= this.thresholds.memoryUsage,
      bundleSize: this.metrics.bundleSize <= this.thresholds.bundleSize,
    };

    // Object.entries(analysis).forEach(([metric, isGood]) => {
    //   const icon = isGood ? '✅' : '⚠️';
    //   const status = isGood ? 'acceptable' : 'needs optimization';
    //   console.log(`${icon} ${metric}: ${status}`);
    // });

    // Recommendations
    // console.log('\n💡 Recommendations');
    // console.log('==================');

    // if (!analysis.buildTime) {
    //   console.log('• Consider using npm run dev:fast for development');
    //   console.log('• Review large dependencies with npm run analyze');
    // }

    // if (!analysis.typeCheckTime) {
    //   console.log('• Use incremental compilation in tsconfig.json');
    //   console.log('• Consider running type checking in separate process');
    // }

    // if (!analysis.memoryUsage) {
    //   console.log('• Increase Node.js memory limit with --max-old-space-size');
    //   console.log('• Restart development server periodically');
    // }

    // Save report to file
    const reportPath = path.join(__dirname, '../performance-report.json');
    const reportData = {
      ...this.metrics,
      analysis,
      timestamp: new Date().toISOString(),
      thresholds: this.thresholds,
    };

    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    // console.log(`\n📄 Report saved to: ${reportPath}`);
  }

  async startRealTimeMonitoring() {
    // console.log('🔄 Starting real-time performance monitoring...');
    // console.log('Press Ctrl+C to stop monitoring\n');

    const interval = setInterval(async () => {
      await this.measureMemoryUsage();
      await this.measureSystemResources();

      // console.log(
      //   `📊 Current - Memory: ${this.metrics.memoryUsage}MB, CPU: ${this.metrics.cpuUsage}%`
      // );

      // Alert if thresholds exceeded
      // if (this.metrics.memoryUsage > this.thresholds.memoryUsage) {
      //   console.log(
      //     '⚠️  Memory usage is high! Consider restarting dev server.'
      //   );
      // }

      // if (this.metrics.cpuUsage > 80) {
      //   console.log('⚠️  CPU usage is high! Check for intensive processes.');
      // }
    }, 5000); // Check every 5 seconds

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      clearInterval(interval);
      // console.log('\n🛑 Stopping real-time monitoring...');
      process.exit(0);
    });
  }

  async runAllMeasurements() {
    // console.log('🚀 Starting performance measurements...\n');

    await this.measureBuildTime();
    await this.measureTypeCheckTime();
    await this.measureLintTime();
    await this.measureTestTime();
    await this.measureMemoryUsage();
    await this.measureSystemResources();
    await this.measureBundleSize();

    this.generateReport();
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const monitor = new PerformanceMonitor();

if (args.includes('--realtime') || args.includes('-r')) {
  monitor.startRealTimeMonitoring();
} else {
  monitor.runAllMeasurements().catch(() => process.exit(1));
}

module.exports = PerformanceMonitor;
