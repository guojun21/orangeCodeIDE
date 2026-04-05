#!/usr/bin/env node

import path from 'node:path';

import { ROOT } from './paths.mjs';
import {
  buildStartupOverlayRegistry,
  DEFAULT_BEAUTIFIED_REGISTRY_PATH,
  DEFAULT_MODULE_PLACEMENT_PATH,
  DEFAULT_OVERLAY_REGISTRY_PATH,
  DEFAULT_RAW_REGISTRY_PATH,
  DEFAULT_STARTUP_CRITICAL_PATH,
  normalizePath,
  writeStartupOverlayRegistry,
} from './startup-overlay-resolver.mjs';

function parseArgs(argv) {
  let startupCriticalPath = DEFAULT_STARTUP_CRITICAL_PATH;
  let rawRegistryPath = DEFAULT_RAW_REGISTRY_PATH;
  let beautifiedRegistryPath = DEFAULT_BEAUTIFIED_REGISTRY_PATH;
  let modulePlacementPath = DEFAULT_MODULE_PLACEMENT_PATH;
  let outputPath = DEFAULT_OVERLAY_REGISTRY_PATH;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--startup-critical') {
      i += 1;
      startupCriticalPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--raw-registry') {
      i += 1;
      rawRegistryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--beautified-registry') {
      i += 1;
      beautifiedRegistryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--module-placement') {
      i += 1;
      modulePlacementPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return {
    startupCriticalPath,
    rawRegistryPath,
    beautifiedRegistryPath,
    modulePlacementPath,
    outputPath,
  };
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const report = buildStartupOverlayRegistry(options);
  const outputPath = writeStartupOverlayRegistry(report, options.outputPath);

  console.log(`Startup overlay registry: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Modules: ${report.totalModules}`);
  console.log(`Overlay-ready: ${report.overlayReadyCount}`);
  console.log(`Original fallbacks: ${report.originalFallbackCount}`);
  console.log(`Selected layers: ${JSON.stringify(report.selectedLayerCounts)}`);
}

main();
