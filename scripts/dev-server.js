#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-require-imports
const net = require('net');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const os = require('os');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const crossSpawn = require('cross-spawn');

const DEFAULT_PORT = 3000;
const MAX_PORT_ATTEMPTS = 10;

// Performance optimizations
const NODE_OPTIONS = ['--max-old-space-size=4096'].join(' ');

function isPortAvailable(port) {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.once('close', () => {
        resolve(true);
      });
      server.close();
    });
    server.on('error', () => {
      resolve(false);
    });
  });
}

async function findAvailablePort(startPort = DEFAULT_PORT) {
  for (let port = startPort; port < startPort + MAX_PORT_ATTEMPTS; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(
    `No available ports found between ${startPort} and ${startPort + MAX_PORT_ATTEMPTS}`
  );
}

async function startDevServer() {
  try {
    const port = await findAvailablePort();
    // All console.log and console.error statements removed

    // Use npx.cmd on Windows, npx elsewhere
    const isWindows = process.platform === 'win32';
    const nextCmd = isWindows ? 'npx.cmd' : 'npx';

    const devProcess = crossSpawn(
      nextCmd,
      ['next', 'dev', '--turbopack', '--port', port.toString()],
      {
        stdio: 'inherit',
        env: {
          ...process.env,
          NODE_OPTIONS: NODE_OPTIONS,
          // Development optimizations
          NEXT_TELEMETRY_DISABLED: '1',
          NODE_ENV: 'development',
        },
      }
    );

    devProcess.on('error', error => {
      // All console.log and console.error statements removed
      process.exit(1);
    });

    devProcess.on('close', code => {
      // All console.log and console.error statements removed
      process.exit(code);
    });

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      // All console.log and console.error statements removed
      devProcess.kill('SIGINT');
    });

    process.on('SIGTERM', () => {
      // All console.log and console.error statements removed
      devProcess.kill('SIGTERM');
    });
  } catch (error) {
    // All console.log and console.error statements removed
    process.exit(1);
  }
}

if (require.main === module) {
  startDevServer();
}

module.exports = { startDevServer, findAvailablePort };
