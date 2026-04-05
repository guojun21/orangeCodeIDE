#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

export { ROOT };
const MANIFEST_PATH = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const REBUILT_ROOT = path.join(ROOT, 'rebuilt', 'src');
const DEFAULT_PROFILE = 'stable';

function normalizePath(filePath) {
  return path.resolve(filePath).split(path.sep).join('/');
}

export function loadSliceManifest() {
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
}

export function getActiveProfile() {
  return process.env.SHOPEECODE_REBUILT_PROFILE || DEFAULT_PROFILE;
}

export function sliceMatchesProfile(slice, profile = getActiveProfile()) {
  if (!Array.isArray(slice.profiles) || slice.profiles.length === 0) {
    return true;
  }

  return slice.profiles.includes(profile);
}

export function listSlices(profile = getActiveProfile()) {
  return loadSliceManifest().slices.filter((slice) => sliceMatchesProfile(slice, profile));
}

export function getSliceRoot(slice) {
  return path.dirname(path.join(ROOT, slice.rebuilt_entry));
}

export function getAllSliceIds(profile = getActiveProfile()) {
  return listSlices(profile).map((slice) => slice.slice_id);
}

export function getSliceIdsForFile(filePath, slices = listSlices()) {
  const normalizedFilePath = normalizePath(filePath);
  return slices
    .filter((slice) => {
      const sliceRoot = `${normalizePath(getSliceRoot(slice))}/`;
      return normalizedFilePath.startsWith(sliceRoot);
    })
    .map((slice) => slice.slice_id);
}

export function watchRebuiltSources({ onEvent }) {
  const watcher = fs.watch(REBUILT_ROOT, { recursive: true }, (eventType, filename) => {
    if (!filename) {
      return;
    }

    const relativePath = filename.toString();
    const absolutePath = path.resolve(REBUILT_ROOT, relativePath);
    const sliceIds = getSliceIdsForFile(absolutePath);

    if (sliceIds.length === 0) {
      return;
    }

    onEvent({
      eventType,
      relativePath,
      absolutePath,
      sliceIds,
    });
  });

  return () => watcher.close();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const stop = watchRebuiltSources({
    onEvent(event) {
      process.stdout.write(`${JSON.stringify(event)}\n`);
    },
  });

  process.on('SIGINT', () => {
    stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    stop();
    process.exit(0);
  });
}
