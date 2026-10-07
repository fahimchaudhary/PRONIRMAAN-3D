const http = require('http');
const fs = require('fs');
const path = require('path');
const net = require('net');
const { spawn } = require('child_process');

const ROOT_DIR = __dirname;
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const PORT = 5173;
const NEXT_PORT = 3000;

let nextProcess = null;

function startNextDev() {
  if (nextProcess) return;
  console.log(`\n⚡ Automatically starting Next.js dev server on port ${NEXT_PORT}...`);
  nextProcess = spawn('npx', ['next', 'dev', '-p', String(NEXT_PORT)], {
    cwd: FRONTEND_DIR,
    stdio: 'inherit',
    shell: true
  });

  nextProcess.on('exit', (code) => {
    console.log(`Next.js process exited with code ${code}`);
    nextProcess = null;
  });
}

function ensureNextRunning() {
  const sock = net.connect(NEXT_PORT, '127.0.0.1', () => {
    sock.destroy();
  });
  sock.on('error', () => {
    startNextDev();
  });
}

// Clean up child process on exit
const cleanup = () => {
  if (nextProcess) {
    try {
      nextProcess.kill();
    } catch (_) {}
  }
};
process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(); });
process.on('SIGTERM', () => { cleanup(); process.exit(); });

// Auto-start Next.js immediately when server boots
ensureNextRunning();

const server = http.createServer((req, res) => {
  // Ensure Next.js is running
  ensureNextRunning();

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
    res.writeHead(503, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="2">
  <title>Starting ProNirmaan Server...</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #0f172a; color: #f8fafc; text-align: center; }
    .card { background: #1e293b; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); max-width: 450px; }
    .spinner { border: 4px solid rgba(255,255,255,0.1); width: 44px; height: 44px; border-radius: 50%; border-left-color: #3b82f6; animation: spin 1s linear infinite; margin: 0 auto 20px; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    h2 { margin: 0 0 10px; font-size: 22px; color: #fff; }
    p { margin: 0; color: #94a3b8; font-size: 14px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="spinner"></div>
    <h2>Starting ProNirmaan Server...</h2>
    <p>Next.js is starting in the background. Page will automatically refresh momentarily.</p>
  </div>
  <script>setTimeout(() => location.reload(), 2000);</script>
</body>
</html>`);
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
  console.log(`🚀 ProNirmaan Unified Server Running!`);
  console.log(`🌐 Local Link: http://localhost:${PORT}`);
  console.log(`🔗 Proxied to Next.js (port ${NEXT_PORT})`);
  console.log(`=================================================\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} in use.`);
  } else {
    console.error('Server error:', err);
  }
});
