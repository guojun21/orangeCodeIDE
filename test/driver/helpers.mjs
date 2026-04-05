#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from '../../scripts/paths.mjs';

export { ROOT };
export const TEST_ROOT = path.join(ROOT, 'test');
export const OUTPUT_DIR = path.join(TEST_ROOT, '.output');

export function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
  return dirPath;
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function waitForCondition(fn, {
  timeoutMs = 30000,
  intervalMs = 250,
  description = 'condition',
} = {}) {
  const start = Date.now();
  let lastValue;

  while (Date.now() - start < timeoutMs) {
    try {
      lastValue = await fn();
      if (lastValue) {
        return lastValue;
      }
    } catch {}
    await delay(intervalMs);
  }

  throw new Error(`Timed out waiting for ${description}`);
}

export function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

export function outputPath(fileName) {
  ensureDir(OUTPUT_DIR);
  return path.join(OUTPUT_DIR, fileName);
}
