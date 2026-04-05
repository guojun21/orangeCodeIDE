#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

export { ROOT };
export const DEFAULT_SHARED_REBUILT_USER_DATA_DIR = path.join(
  ROOT,
  '.runtime-user-data',
  'rebuilt-main'
);
export const DEFAULT_PROBE_REBUILT_USER_DATA_ROOT = path.join(
  ROOT,
  '.runtime-user-data',
  'probe-runs'
);

const HEAVY_USER_DATA_ENTRIES = new Set([
  'logs',
  'Cache',
  'CachedData',
  'GPUCache',
  'DawnGraphiteCache',
  'Crashpad',
  'blob_storage',
  'snapshots',
  'Shared Dictionary',
]);

function sanitizeStamp(value) {
  return value.replace(/[^0-9A-Za-z_-]/g, '');
}

function walk(dirPath) {
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const absolutePath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(absolutePath));
    } else {
      results.push(absolutePath);
    }
  }
  return results;
}

function shouldRemoveUserDataEntry(filePath) {
  const baseName = path.basename(filePath);
  let stat = null;

  try {
    stat = fs.lstatSync(filePath);
  } catch {
    return false;
  }

  return (
    stat.isSocket() ||
    baseName === 'LOCK' ||
    baseName === 'DevToolsActivePort' ||
    baseName === 'code.lock' ||
    baseName.startsWith('Singleton') ||
    baseName.endsWith('.sock')
  );
}

export function cleanupUserDataLocks(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  for (const filePath of walk(dirPath)) {
    if (shouldRemoveUserDataEntry(filePath)) {
      fs.rmSync(filePath, { force: true });
    }
  }
}

export function getSharedRebuiltUserDataDir(...envKeys) {
  for (const key of envKeys) {
    const value = process.env[key];
    if (value) {
      return value;
    }
  }
  return DEFAULT_SHARED_REBUILT_USER_DATA_DIR;
}

export function createProbeUserDataDirName(prefix = 'probe') {
  const normalizedPrefix = sanitizeStamp(prefix).slice(0, 10) || 'probe';
  const stamp = Date.now().toString(36);
  const pid = process.pid.toString(36);
  const nonce = Math.random().toString(36).slice(2, 6);
  return `${normalizedPrefix}-${stamp}${pid}${nonce}`;
}

export function cloneUserDataForProbe({ sourceDir, targetDir }) {
  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.mkdirSync(targetDir, { recursive: true });

  if (!sourceDir || !fs.existsSync(sourceDir)) {
    return targetDir;
  }

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    if (HEAVY_USER_DATA_ENTRIES.has(entry.name)) {
      continue;
    }

    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    const sourceStat = fs.lstatSync(sourcePath);
    if (
      sourceStat.isSocket() ||
      entry.name === 'LOCK' ||
      entry.name === 'DevToolsActivePort' ||
      entry.name === 'code.lock' ||
      entry.name.startsWith('Singleton') ||
      entry.name.endsWith('.sock')
    ) {
      continue;
    }
    fs.cpSync(sourcePath, targetPath, {
      recursive: true,
      force: true,
      verbatimSymlinks: true,
    });
  }

  cleanupUserDataLocks(targetDir);
  return targetDir;
}

export function createIsolatedProbeUserDataDir({
  sourceDir = DEFAULT_SHARED_REBUILT_USER_DATA_DIR,
  rootDir = DEFAULT_PROBE_REBUILT_USER_DATA_ROOT,
  prefix = 'probe',
} = {}) {
  fs.mkdirSync(rootDir, { recursive: true });
  const targetDir = path.join(rootDir, createProbeUserDataDirName(prefix));
  return cloneUserDataForProbe({ sourceDir, targetDir });
}
