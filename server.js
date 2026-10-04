const http = require('http');
const fs = require('fs');
const path = require('path');
const net = require('net');

const ROOT_DIR = __dirname;
const PORT = 5173;
const NEXT_PORT = 3000;

const server = http.createServer((req, res) => {
  // Try proxying to Next.js dev server on port 3000
  const options = {
    hostname: '127.0.0.1',
    port: NEXT_PORT,
    path: req.url,
    method: req.method,
    headers: { ...req.headers, host: `localhost:${PORT}` }
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', () => {
    // Next.js dev server starting or momentarily unreachable
    res.writeHead(503, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!DOCTYPE html><html><body style="font-family:sans-serif;text-align:center;padding:50px;"><h2>Starting ProNirmaan Server...</h2><p>Please wait a moment and refresh.</p></body></html>');
  });

  req.pipe(proxyReq);
});

// Support WebSockets (Next.js HMR)
server.on('upgrade', (req, socket, head) => {
  const proxySocket = net.connect(NEXT_PORT, '127.0.0.1', () => {
    proxySocket.write(
      `${req.method} ${req.url} HTTP/${req.httpVersion}\r\n` +
      Object.entries(req.headers).map(([k, v]) => `${k}: ${v}`).join('\r\n') +
      '\r\n\r\n'
    );
    proxySocket.write(head);
    proxySocket.pipe(socket);
    socket.pipe(proxySocket);
  });
  proxySocket.on('error', () => socket.destroy());
  socket.on('error', () => proxySocket.destroy());
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n=================================================`);
  console.log(`🚀 ProNirmaan Unified Multipage Server Running!`);
  console.log(`🌐 Local Link: http://localhost:${PORT}`);
  console.log(`🔗 Proxied to Next.js (port ${NEXT_PORT}) with local static fallback`);
  console.log(`=================================================\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} in use.`);
  } else {
    console.error('Server error:', err);
  }
});
