#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const MODULE_REGISTRY_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry.json');
const BEAUTIFIED_REGISTRY_PATH = path.join(ROOT, 'mapped', 'project-modules-beautified-registry.json');
const STARTUP_OVERLAY_REGISTRY_PATH = path.join(ROOT, 'mapped', 'startup-overlay-registry.json');

const SOURCE_ROOT = path.join(ROOT, 'recovered', 'all-modules-deobfuscated');
const RAW_ROOT = path.join(ROOT, 'rebuilt', 'src', 'project-modules-raw');
const BEAUTIFIED_ROOT = path.join(ROOT, 'rebuilt', 'src', 'project-modules-beautified');

const OUTPUT_MISSING = path.join(ROOT, 'mapped', 'project-modules-missing.json');
const OUTPUT_RAW_ONLY = path.join(ROOT, 'mapped', 'project-modules-raw-only.json');
const OUTPUT_BEAUTIFY_FAILED = path.join(ROOT, 'mapped', 'project-modules-beautify-failed.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function isPathInside(parent, candidate) {
  const relative = path.relative(parent, candidate);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function resolveSafe(root, relativePath) {
  const candidate = path.resolve(root, relativePath);
  return isPathInside(root, candidate) ? candidate : null;
}

function getSourceState(moduleId) {
  const resolvedPath = resolveSafe(SOURCE_ROOT, moduleId);
  if (!resolvedPath) {
    return {
      safe: false,
      exists: false,
      isFile: false,
      path: null,
      reason: 'path-unsafe',
    };
  }
  if (!fs.existsSync(resolvedPath)) {
    return {
      safe: true,
      exists: false,
      isFile: false,
      path: resolvedPath,
      reason: 'source-missing',
    };
  }
  const stat = fs.statSync(resolvedPath);
  if (!stat.isFile()) {
    return {
      safe: true,
      exists: true,
      isFile: false,
      path: resolvedPath,
      reason: 'source-not-file',
    };
  }
  return {
    safe: true,
    exists: true,
    isFile: true,
    path: resolvedPath,
    reason: null,
  };
}

function buildRelativeFile(root, moduleId) {
  const resolvedPath = resolveSafe(root, moduleId);
  if (!resolvedPath) {
    return null;
  }
  return normalizePath(path.relative(ROOT, resolvedPath));
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

function main() {
  const moduleRegistry = readJson(MODULE_REGISTRY_PATH);
  const beautifiedRegistry = readJson(BEAUTIFIED_REGISTRY_PATH);
  const overlayRegistry = readJson(STARTUP_OVERLAY_REGISTRY_PATH);

  const beautifiedById = new Map((beautifiedRegistry.results || []).map((entry) => [entry.id, entry]));
  const overlayById = new Map((overlayRegistry.modules || []).map((entry) => [entry.id, entry]));

  const missing = [];
  const rawOnly = [];
  const beautifyFailed = [];

  for (const moduleEntry of moduleRegistry.modules || []) {
    const source = getSourceState(moduleEntry.id);
    const rawPath = resolveSafe(RAW_ROOT, moduleEntry.id);
    const beautifiedPath = resolveSafe(BEAUTIFIED_ROOT, moduleEntry.id);
    const rawExists = Boolean(rawPath) && fs.existsSync(rawPath);
    const beautifiedExists = Boolean(beautifiedPath) && fs.existsSync(beautifiedPath);
    const beautifiedEntry = beautifiedById.get(moduleEntry.id) ?? null;
    const overlayEntry = overlayById.get(moduleEntry.id) ?? null;

    if (!source.safe || !source.exists || !source.isFile || (!rawExists && !beautifiedExists)) {
      const reason =
        source.reason ||
        (rawExists || beautifiedExists ? null : 'not-materialized');
      missing.push({
        ordinal: moduleEntry.ordinal,
        id: moduleEntry.id,
        category: moduleEntry.category,
        byteLength: moduleEntry.byteLength,
        reason,
        sourceFile: source.path ? normalizePath(path.relative(ROOT, source.path)) : null,
        rawFile: rawPath ? normalizePath(path.relative(ROOT, rawPath)) : null,
        beautifiedFile: beautifiedPath ? normalizePath(path.relative(ROOT, beautifiedPath)) : null,
        startupLane: overlayEntry?.lane ?? null,
        startupSelectedLayer: overlayEntry?.selectedLayer ?? null,
        fallbackStrategy:
          overlayEntry?.selectedLayer === 'original' ? 'original-bundle-fallback' : 'not-materialized',
      });
      continue;
    }

    if (rawExists && !beautifiedExists) {
      const fallbackReason =
        beautifiedEntry?.fallbackReason ||
        beautifiedEntry?.webcrackError ||
        (beautifiedEntry?.status === 'raw-fallback' ? 'raw-fallback' : 'beautify-missing');
      const rawOnlyEntry = {
        ordinal: moduleEntry.ordinal,
        id: moduleEntry.id,
        category: moduleEntry.category,
        byteLength: moduleEntry.byteLength,
        sourceFile: normalizePath(path.relative(ROOT, source.path)),
        rawFile: normalizePath(path.relative(ROOT, rawPath)),
        beautifiedFile: buildRelativeFile(BEAUTIFIED_ROOT, moduleEntry.id),
        startupLane: overlayEntry?.lane ?? null,
        startupSelectedLayer: overlayEntry?.selectedLayer ?? null,
        fallbackReason,
        fallbackStrategy:
          overlayEntry?.selectedLayer === 'raw' ? 'startup-raw-fallback' : 'raw-only',
      };
      rawOnly.push(rawOnlyEntry);
      beautifyFailed.push({
        ...rawOnlyEntry,
        beautifiedStatus: beautifiedEntry?.status ?? 'missing',
        formatter: beautifiedEntry?.formatter ?? null,
      });
    }
  }

  const metadata = {
    generatedAt: new Date().toISOString(),
    sourcePaths: {
      moduleRegistry: normalizePath(path.relative(ROOT, MODULE_REGISTRY_PATH)),
      beautifiedRegistry: normalizePath(path.relative(ROOT, BEAUTIFIED_REGISTRY_PATH)),
      startupOverlayRegistry: normalizePath(path.relative(ROOT, STARTUP_OVERLAY_REGISTRY_PATH)),
      sourceRoot: normalizePath(path.relative(ROOT, SOURCE_ROOT)),
      rawRoot: normalizePath(path.relative(ROOT, RAW_ROOT)),
      beautifiedRoot: normalizePath(path.relative(ROOT, BEAUTIFIED_ROOT)),
    },
    totals: {
      totalModules: moduleRegistry.totalModules ?? (moduleRegistry.modules || []).length,
      missingCount: missing.length,
      rawOnlyCount: rawOnly.length,
      beautifyFailedCount: beautifyFailed.length,
      overlayOriginalFallbackCount: overlayRegistry.originalFallbackCount ?? 0,
    },
  };

  writeJson(OUTPUT_MISSING, {
    ...metadata,
    kind: 'missing',
    modules: missing,
  });
  writeJson(OUTPUT_RAW_ONLY, {
    ...metadata,
    kind: 'raw-only',
    modules: rawOnly,
  });
  writeJson(OUTPUT_BEAUTIFY_FAILED, {
    ...metadata,
    kind: 'beautify-failed',
    modules: beautifyFailed,
  });

  console.log(normalizePath(path.relative(ROOT, OUTPUT_MISSING)));
  console.log(normalizePath(path.relative(ROOT, OUTPUT_RAW_ONLY)));
  console.log(normalizePath(path.relative(ROOT, OUTPUT_BEAUTIFY_FAILED)));
}

main();
