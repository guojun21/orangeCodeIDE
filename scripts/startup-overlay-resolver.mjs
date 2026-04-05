import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

export const DEFAULT_STARTUP_CRITICAL_PATH = path.join(ROOT, 'mapped', 'startup-critical-modules.json');
export const DEFAULT_RAW_REGISTRY_PATH = path.join(ROOT, 'mapped', 'project-modules-raw-registry.json');
export const DEFAULT_BEAUTIFIED_REGISTRY_PATH = path.join(ROOT, 'mapped', 'project-modules-beautified-registry.json');
export const DEFAULT_MODULE_PLACEMENT_PATH = path.join(ROOT, 'mapped', 'module-placement-registry.json');
export const DEFAULT_OVERLAY_REGISTRY_PATH = path.join(ROOT, 'mapped', 'startup-overlay-registry.json');
export const RAW_ROOT = path.join(ROOT, 'rebuilt', 'src', 'project-modules-raw');
export const BEAUTIFIED_ROOT = path.join(ROOT, 'rebuilt', 'src', 'project-modules-beautified');

export function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function countBy(items, pickKey) {
  const counts = {};
  for (const item of items) {
    const key = pickKey(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

function toTargetLookup(entries, key = 'id') {
  const map = new Map();
  for (const entry of entries) {
    map.set(entry[key], entry);
  }
  return map;
}

function indexBeautified(registry) {
  const map = new Map();
  for (const entry of registry.results || []) {
    map.set(entry.id, entry);
  }
  return map;
}

function deriveSelectedSource({ seedPlacement, beautifiedEntry, beautifiedExists, beautifiedTargetFile, rawEntry, rawExists, rawTargetFile }) {
  if (beautifiedExists) {
    return {
      selectedLayer: 'beautified',
      selectedTargetFile: beautifiedTargetFile,
      selectedSourceFile: beautifiedEntry?.sourceFile ?? null,
      selectedFormatter: beautifiedEntry?.formatter ?? null,
      fallbackReason: null,
    };
  }

  if (rawExists) {
    return {
      selectedLayer: 'raw',
      selectedTargetFile: rawTargetFile,
      selectedSourceFile: rawEntry?.sourceFile ?? null,
      selectedFormatter: beautifiedEntry?.status === 'raw-fallback' ? 'raw-fallback' : null,
      fallbackReason: beautifiedEntry?.fallbackReason || beautifiedEntry?.webcrackError || null,
    };
  }

  return {
    selectedLayer: 'original',
    selectedTargetFile: null,
    selectedSourceFile: null,
    selectedFormatter: null,
    fallbackReason:
      beautifiedEntry?.fallbackReason ||
      rawEntry?.reason ||
      (seedPlacement ? 'seed-only-placement' : 'no-overlay-source'),
  };
}

export function buildStartupOverlayRegistry({
  startupCriticalPath = DEFAULT_STARTUP_CRITICAL_PATH,
  rawRegistryPath = DEFAULT_RAW_REGISTRY_PATH,
  beautifiedRegistryPath = DEFAULT_BEAUTIFIED_REGISTRY_PATH,
  modulePlacementPath = DEFAULT_MODULE_PLACEMENT_PATH,
} = {}) {
  const startupCritical = readJson(startupCriticalPath);
  const rawRegistry = readJson(rawRegistryPath);
  const beautifiedRegistry = readJson(beautifiedRegistryPath);
  const modulePlacement = fs.existsSync(modulePlacementPath) ? readJson(modulePlacementPath) : { placements: [] };

  const rawById = toTargetLookup(rawRegistry.placements || []);
  const beautifiedById = indexBeautified(beautifiedRegistry);
  const seedByRuntimePath = toTargetLookup(modulePlacement.placements || [], 'moduleRuntimePath');

  const modules = (startupCritical.modules || []).map((moduleEntry) => {
    const rawEntry = rawById.get(moduleEntry.id) ?? null;
    const beautifiedEntry = beautifiedById.get(moduleEntry.id) ?? null;
    const seedPlacement = seedByRuntimePath.get(moduleEntry.id) ?? null;
    const derivedRawTargetFile = normalizePath(path.relative(ROOT, path.join(RAW_ROOT, moduleEntry.id)));
    const derivedBeautifiedTargetFile = normalizePath(path.relative(ROOT, path.join(BEAUTIFIED_ROOT, moduleEntry.id)));
    const rawTargetFile = rawEntry?.targetFile ?? derivedRawTargetFile;
    const beautifiedTargetFile = beautifiedEntry?.targetFile ?? derivedBeautifiedTargetFile;
    const rawExists = fs.existsSync(path.join(ROOT, rawTargetFile));
    const beautifiedExists = fs.existsSync(path.join(ROOT, beautifiedTargetFile));
    const resolved = deriveSelectedSource({
      seedPlacement,
      beautifiedEntry,
      beautifiedExists,
      beautifiedTargetFile,
      rawEntry,
      rawExists,
      rawTargetFile,
    });

    return {
      ordinal: moduleEntry.ordinal,
      id: moduleEntry.id,
      lane: moduleEntry.lane,
      category: moduleEntry.category,
      byteLength: moduleEntry.byteLength,
      seedPlaced: Boolean(seedPlacement),
      seedTargetFile: seedPlacement?.targetFile ?? null,
      seedSourceTier: seedPlacement?.sourceTier ?? null,
      rawStatus: rawExists ? (rawEntry?.status === 'placed' ? 'placed' : 'present') : (rawEntry?.status ?? null),
      rawTargetFile: rawExists ? rawTargetFile : (rawEntry?.targetFile ?? null),
      beautifiedStatus:
        beautifiedExists
          ? (beautifiedEntry?.status === 'beautified' ? 'beautified' : 'present')
          : (beautifiedEntry?.status ?? null),
      beautifiedTargetFile: beautifiedExists ? beautifiedTargetFile : (beautifiedEntry?.targetFile ?? null),
      beautifiedFormatter: beautifiedEntry?.formatter ?? null,
      ...resolved,
    };
  });

  const laneCounts = {};
  for (const moduleEntry of modules) {
    const lane = moduleEntry.lane || 'unknown';
    if (!laneCounts[lane]) {
      laneCounts[lane] = {
        total: 0,
        beautified: 0,
        raw: 0,
        original: 0,
        seedPlaced: 0,
      };
    }
    laneCounts[lane].total += 1;
    laneCounts[lane][moduleEntry.selectedLayer] += 1;
    if (moduleEntry.seedPlaced) {
      laneCounts[lane].seedPlaced += 1;
    }
  }

  const selectedLayerCounts = countBy(modules, (item) => item.selectedLayer);
  const overlayReadyCount = (selectedLayerCounts.beautified ?? 0) + (selectedLayerCounts.raw ?? 0);

  return {
    generatedAt: new Date().toISOString(),
    sourcePaths: {
      startupCriticalPath: normalizePath(path.relative(ROOT, startupCriticalPath)),
      rawRegistryPath: normalizePath(path.relative(ROOT, rawRegistryPath)),
      beautifiedRegistryPath: normalizePath(path.relative(ROOT, beautifiedRegistryPath)),
      modulePlacementPath: normalizePath(path.relative(ROOT, modulePlacementPath)),
    },
    totalModules: modules.length,
    overlayReadyCount,
    originalFallbackCount: selectedLayerCounts.original ?? 0,
    selectedLayerCounts,
    seedPlacementCount: modules.filter((item) => item.seedPlaced).length,
    laneCounts,
    modules,
  };
}

export function writeStartupOverlayRegistry(report, outputPath = DEFAULT_OVERLAY_REGISTRY_PATH) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  return outputPath;
}
