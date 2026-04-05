const fs = require('fs');
const path = require('path');

if (process.env.ELECTRON_RUN_AS_NODE === '1') {
  return;
}

const LOG_PATH = process.env.SHOPEECODE_EXTERNAL_URL_LOG || '/tmp/shopeecode-open-external.jsonl';
const ALLOW_OPEN = process.env.SHOPEECODE_EXTERNAL_URL_ALLOW_OPEN === '1';

function appendEvent(event) {
  try {
    fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
    fs.appendFileSync(LOG_PATH, `${JSON.stringify(event)}\n`);
  } catch {}
}

try {
  const electron = require('electron');
  if (electron?.shell?.openExternal && !electron.shell.__shopeeInterceptInstalled) {
    const original = electron.shell.openExternal.bind(electron.shell);
    electron.shell.openExternal = async (url, options) => {
      appendEvent({
        timestamp: new Date().toISOString(),
        pid: process.pid,
        url,
        options: options ?? null,
        allowOpen: ALLOW_OPEN,
      });
      if (ALLOW_OPEN) {
        return original(url, options);
      }
      return { action: 'blocked-for-capture' };
    };
    electron.shell.__shopeeInterceptInstalled = true;
    appendEvent({
      timestamp: new Date().toISOString(),
      pid: process.pid,
      message: 'openExternal intercept installed',
      allowOpen: ALLOW_OPEN,
    });
  }
} catch (error) {
  appendEvent({
    timestamp: new Date().toISOString(),
    pid: process.pid,
    message: 'failed to install openExternal intercept',
    error: error instanceof Error ? error.message : String(error),
  });
}
