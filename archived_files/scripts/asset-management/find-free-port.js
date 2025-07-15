#!/usr/bin/env node
const net = require('net');

function findFreePort(start = 3000, end = 3999) {
  return new Promise((resolve, reject) => {
    let port = start;
    function tryPort() {
      if (port > end) return reject(new Error('No free port found'));
      const server = net.createServer();
      server.unref();
      server.on('error', () => {
        port++;
        tryPort();
      });
      server.listen(port, () => {
        server.close(() => resolve(port));
      });
    }
    tryPort();
  });
}

findFreePort()
  .then(port => {
    process.exit(0);
  })
  .catch(err => {
    process.exit(1);
  });
