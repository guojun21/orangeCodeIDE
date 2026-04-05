#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry.json');
const DEFAULT_SOURCE_ROOT = path.join(ROOT, 'recovered', 'all-modules-deobfuscated');
const DEFAULT_TARGET_ROOT = path.join(ROOT, 'rebuilt', 'src', 'project-modules-raw');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'project-modules-raw-registry.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
  let sourceRoot = DEFAULT_SOURCE_ROOT;
  let targetRoot = DEFAULT_TARGET_ROOT;
  let outputPath = DEFAULT_OUTPUT;
  let dryRun = false;
  const waves = new Set();

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--source-root') {
      i += 1;
      sourceRoot = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--target-root') {
      i += 1;
      targetRoot = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--wave') {
      i += 1;
      waves.add(Number(argv[i]));
      continue;
    }
    if (arg === '--dry-run') {
      dryRun = true;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  const selectedWaves = [...waves].filter(Number.isInteger).filter(wave => wave >= 1 && wave <= 4).sort();
  return {
    registryPath,
    sourceRoot,
    targetRoot,
    outputPath,
    dryRun,
    selectedWaves,
  };
}

function classifyWave(moduleId) {
  if (
    moduleId.startsWith('out-build/vs/workbench/browser/')
    || moduleId.startsWith('out-build/vs/workbench/common/')
  ) {
    return 1;
  }
  if (moduleId.startsWith('out-build/vs/workbench/services/')) {
    return 2;
  }
  if (moduleId.startsWith('out-build/vs/workbench/contrib/')) {
    return 3;
  }
  return 4;
}

function safeResolve(baseDir, relativePath) {
  const base = path.resolve(baseDir);
  const resolved = path.resolve(baseDir, relativePath);
  if (resolved === base || resolved.startsWith(`${base}${path.sep}`)) {
    return resolved;
  }
  return null;
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function sha256File(filePath) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function relativeToRoot(filePath) {
  return filePath ? normalizePath(path.relative(ROOT, filePath)) : null;
}

function buildEntry(moduleEntry, context) {
  const wave = classifyWave(moduleEntry.id);
  const selected = context.selectedWaves.length === 0 || context.selectedWaves.includes(wave);
  const sourcePath = safeResolve(context.sourceRoot, moduleEntry.id);
  const targetPath = safeResolve(context.targetRoot, moduleEntry.id);
  const sourceExists = Boolean(sourcePath && fs.existsSync(sourcePath));
  const sourceIsFile = sourceExists && fs.statSync(sourcePath).isFile();
  const sha256 = sourceIsFile ? sha256File(sourcePath) : null;

  let status = 'skipped';
  let reason = selected ? null : 'wave-filter';

  if (selected) {
    if (!sourcePath || !targetPath) {
      status = 'path-unsafe';
      reason = 'unsafe-runtime-path';
    } else if (!sourceIsFile) {
      status = sourceExists ? 'source-not-file' : 'source-missing';
      reason = sourceExists ? 'source-is-not-regular-file' : 'source-not-found';
    } else if (!sourceExists) {
      status = 'source-missing';
      reason = 'source-not-found';
    } else if (context.dryRun) {
      status = 'planned';
      reason = null;
    } else {
      ensureDir(targetPath);
      fs.copyFileSync(sourcePath, targetPath);
      status = 'placed';
      reason = null;
    }
  }

  return {
    ordinal: moduleEntry.ordinal,
    id: moduleEntry.id,
    category: moduleEntry.category,
    wave,
    selected,
    byteLength: moduleEntry.byteLength,
    sourceFile: relativeToRoot(sourcePath),
    targetFile: relativeToRoot(targetPath),
    sha256,
    status,
    reason,
  };
}

function countBy(items, picker) {
  const counts = {};
  for (const item of items) {
    const key = picker(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const moduleRegistry = JSON.parse(fs.readFileSync(options.registryPath, 'utf8'));
  const placements = moduleRegistry.modules.map(moduleEntry => buildEntry(moduleEntry, options));

  const registry = {
    generatedAt: new Date().toISOString(),
    sourceRegistryPath: normalizePath(path.relative(ROOT, options.registryPath)),
    sourceRoot: normalizePath(path.relative(ROOT, options.sourceRoot)),
    targetRoot: normalizePath(path.relative(ROOT, options.targetRoot)),
    outputPath: normalizePath(path.relative(ROOT, options.outputPath)),
    dryRun: options.dryRun,
    selectedWaves: options.selectedWaves,
    totalModules: moduleRegistry.modules.length,
    counts: {
      byStatus: countBy(placements, item => item.status),
      byWave: countBy(placements, item => `wave${item.wave}`),
      selectedByWave: countBy(
        placements.filter(item => item.selected),
        item => `wave${item.wave}`
      ),
    },
    placements,
  };

  fs.mkdirSync(path.dirname(options.outputPath), { recursive: true });
  fs.writeFileSync(options.outputPath, JSON.stringify(registry, null, 2));

  console.log(`Project module placement registry: ${normalizePath(path.relative(ROOT, options.outputPath))}`);
  console.log(`Dry run: ${options.dryRun ? 'yes' : 'no'}`);
  console.log(`Selected waves: ${options.selectedWaves.length ? options.selectedWaves.join(',') : 'all'}`);
  console.log(`Status counts: ${JSON.stringify(registry.counts.byStatus)}`);
}

main();
