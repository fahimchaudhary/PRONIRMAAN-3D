const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const PREFERRED_PORTS = [5173, 3001, 8000, 8085, 9000];

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};

function serveFile(req, res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';

    const headers = {
      'Content-Type': mime,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*',
      'Accept-Ranges': 'bytes'
    };

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp') {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    } else {
      headers['Cache-Control'] = 'no-cache';
    }

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') reqUrl = '/index.html';

  const safePath = path.normalize(reqUrl).replace(/^(\.\.[\/\\])+/, '');
  const targetPath = path.join(ROOT_DIR, safePath);

  if (!targetPath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  serveFile(req, res, targetPath);
});

function tryListen(ports, index = 0) {
  if (index >= ports.length) {
    console.error('No available ports found.');
    process.exit(1);
  }

  const port = ports[index];
  server.listen(port, '0.0.0.0', () => {
    console.log(`\n=================================================`);
    console.log(`🚀 High-Quality Scroll Animation Server Running!`);
    console.log(`🌐 Local Link: http://localhost:${port}`);
    console.log(`=================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying next port...`);
      tryListen(ports, index + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

tryListen(PREFERRED_PORTS);
