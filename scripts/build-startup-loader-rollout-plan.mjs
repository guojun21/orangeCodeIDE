#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'startup-overlay-registry.json');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-loader-rollout-plan.json');

const WAVE_DEFINITIONS = [
  { id: 'wave1-services', lanes: ['services'] },
  { id: 'wave2-foundation', lanes: ['common', 'contrib-appLayout'] },
  { id: 'wave3-composer-review', lanes: ['contrib-composer', 'contrib-reviewChanges'] },
  { id: 'wave4-browser', lanes: ['browser'] },
];

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
  let outputPath = DEFAULT_OUTPUT;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { registryPath, outputPath };
}

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function main() {
  const { registryPath, outputPath } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const modules = registry.modules || [];

  const waves = WAVE_DEFINITIONS.map((definition) => {
    const waveModules = modules.filter((entry) => definition.lanes.includes(entry.lane));
    const overlayModules = waveModules.filter((entry) => entry.selectedLayer !== 'original');
    const fallbackModules = waveModules.filter((entry) => entry.selectedLayer === 'original');

    return {
      id: definition.id,
      lanes: definition.lanes,
      totalCount: waveModules.length,
      overlayCount: overlayModules.length,
      fallbackCount: fallbackModules.length,
      overlayModules: overlayModules.map((entry) => ({
        id: entry.id,
        lane: entry.lane,
        selectedLayer: entry.selectedLayer,
        selectedTargetFile: entry.selectedTargetFile,
      })),
      fallbackModules: fallbackModules.map((entry) => ({
        id: entry.id,
        lane: entry.lane,
        fallbackReason: entry.fallbackReason,
      })),
    };
  });

  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: normalizePath(path.relative(ROOT, registryPath)),
    totalModules: modules.length,
    overlayReadyCount: registry.overlayReadyCount,
    originalFallbackCount: registry.originalFallbackCount,
    waveOrder: waves.map((wave) => wave.id),
    waves,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Startup loader rollout plan: ${normalizePath(path.relative(ROOT, outputPath))}`);
  for (const wave of waves) {
    console.log(`${wave.id}: overlay ${wave.overlayCount}/${wave.totalCount}, fallback ${wave.fallbackCount}`);
  }
}

main();
