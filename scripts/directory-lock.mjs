#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isProcessAlive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) {
    return false;
  }
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readOwner(lockPath) {
  const ownerPath = path.join(lockPath, 'owner.json');
  if (!fs.existsSync(ownerPath)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(ownerPath, 'utf8'));
  } catch {
    return null;
  }
}

function removeLock(lockPath) {
  fs.rmSync(lockPath, {
    recursive: true,
    force: true,
    maxRetries: 10,
    retryDelay: 100,
  });
}

function maybeRemoveStaleLock(lockPath) {
  const owner = readOwner(lockPath);
  if (!owner?.pid) {
    return false;
  }
  if (isProcessAlive(owner.pid)) {
    return false;
  }
  removeLock(lockPath);
  return true;
}

export async function acquireDirectoryLock(lockPath, {
  timeoutMs = 30000,
  pollMs = 200,
  label = 'lock',
} = {}) {
  const start = Date.now();

  while (true) {
    try {
      fs.mkdirSync(lockPath);
      fs.writeFileSync(path.join(lockPath, 'owner.json'), JSON.stringify({
        pid: process.pid,
        acquiredAt: new Date().toISOString(),
      }, null, 2) + '\n');
      return;
    } catch (error) {
      if (error?.code !== 'EEXIST') {
        throw error;
      }

      maybeRemoveStaleLock(lockPath);
      if (Date.now() - start >= timeoutMs) {
        throw new Error(`Timed out waiting for ${label}: ${lockPath}`);
      }

      await delay(pollMs);
    }
  }
}

export function releaseDirectoryLock(lockPath) {
  removeLock(lockPath);
}
