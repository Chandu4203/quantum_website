const net = require('node:net');
const { spawn } = require('node:child_process');
const path = require('node:path');

const apiPort = 4204;
const webPort = 5173;
const apiUrl = `http://127.0.0.1:${apiPort}/api/me`;
const webUrl = `http://127.0.0.1:${webPort}/`;
const children = [];
let stopping = false;

async function isProjectApiRunning() {
  try {
    const response = await fetch(apiUrl, { signal: AbortSignal.timeout(1000) });
    return response.status === 200 || response.status === 401;
  } catch {
    return false;
  }
}

async function isProjectWebRunning() {
  try {
    const response = await fetch(webUrl, { signal: AbortSignal.timeout(1000) });
    return response.ok && (await response.text()).includes('/src/main.jsx');
  } catch {
    return false;
  }
}

function isPortOpen(port) {
  return new Promise((resolve) => {
    const socket = net.connect({ host: '127.0.0.1', port });
    socket.setTimeout(500);
    socket.once('connect', () => { socket.destroy(); resolve(true); });
    socket.once('timeout', () => { socket.destroy(); resolve(false); });
    socket.once('error', () => resolve(false));
  });
}

function start(label, command, args, cwd) {
  const child = spawn(command, args, { stdio: 'inherit', cwd });
  children.push(child);
  child.once('error', (error) => {
    console.error(`${label} failed to start: ${error.message}`);
    stop('SIGTERM');
    process.exitCode = 1;
  });
  child.once('exit', (code) => {
    if (!stopping) {
      stopping = true;
      for (const other of children) {
        if (other !== child) other.kill();
      }
      process.exitCode = code || 1;
    }
  });
}

function stop(signal) {
  if (stopping) return;
  stopping = true;
  for (const child of children) child.kill(signal);
}

process.on('SIGINT', () => stop('SIGINT'));
process.on('SIGTERM', () => stop('SIGTERM'));

async function main() {
  const [apiRunning, webRunning] = await Promise.all([
    isProjectApiRunning(),
    isProjectWebRunning()
  ]);

  if (!apiRunning && await isPortOpen(apiPort)) {
    throw new Error(`Port ${apiPort} is occupied by a service that is not this project's API.`);
  }
  if (!webRunning && await isPortOpen(webPort)) {
    throw new Error(`Port ${webPort} is occupied by a service that is not this project's Vite app.`);
  }

  if (apiRunning) console.log(`Reusing API at http://localhost:${apiPort}`);
  else start('API', 'python', ['-m', 'uvicorn', 'fastapi_app:app', '--host', '0.0.0.0', '--port', String(apiPort)], path.resolve(__dirname, '../backend'));

  if (webRunning) console.log(`Reusing frontend at http://localhost:${webPort}`);
  else start('Frontend', process.execPath, [path.resolve(__dirname, 'node_modules/vite/bin/vite.js'), '--host', '0.0.0.0', '--port', String(webPort), '--strictPort'], __dirname);

  if (!children.length) console.log('Project is already running at http://localhost:5173');
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
