#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'project-modules-raw-registry.json');
const DEFAULT_TARGET_ROOT = path.join(ROOT, 'rebuilt', 'src', 'project-modules-raw');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'project-modules-raw-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
  let targetRoot = DEFAULT_TARGET_ROOT;
  let outputPath = DEFAULT_OUTPUT;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
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
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { registryPath, targetRoot, outputPath };
}

function sha256File(filePath) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function countBy(items, picker) {
  const counts = {};
  for (const item of items) {
    const key = picker(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

function inspectPlaced(entry, targetRoot) {
  const sourcePath = path.join(ROOT, entry.sourceFile);
  const targetPath = path.join(ROOT, entry.targetFile);
  const sourceExists = fs.existsSync(sourcePath);
  const targetExists = fs.existsSync(targetPath);
  const sourceIsFile = sourceExists && fs.statSync(sourcePath).isFile();
  const targetIsFile = targetExists && fs.statSync(targetPath).isFile();
  const sha256Match = sourceIsFile && targetIsFile ? sha256File(sourcePath) === sha256File(targetPath) : false;
  const targetRelative = normalizePath(path.relative(targetRoot, targetPath));
  const pathSuffixMatch = targetRelative === entry.id;
  const underProjectModulesRawRoot =
    normalizePath(path.relative(ROOT, targetPath)).startsWith('rebuilt/src/project-modules-raw/');

  const checks = {
    sourceExists,
    sourceIsFile,
    targetExists,
    targetIsFile,
    sha256Match,
    pathSuffixMatch,
    underProjectModulesRawRoot,
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  return {
    id: entry.id,
    wave: entry.wave,
    sourceFile: entry.sourceFile,
    targetFile: entry.targetFile,
    status: entry.status,
    checks,
    passed: failedChecks.length === 0,
    failedChecks,
  };
}

function main() {
  const { registryPath, targetRoot, outputPath } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const placedEntries = registry.placements.filter(entry => entry.status === 'placed');
  const placedResults = placedEntries.map(entry => inspectPlaced(entry, targetRoot));
  const passedCount = placedResults.filter(item => item.passed).length;
  const failedCount = placedResults.length - passedCount;

  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: normalizePath(path.relative(ROOT, registryPath)),
    targetRoot: normalizePath(path.relative(ROOT, targetRoot)),
    fileCount: placedResults.length,
    passedCount,
    failedCount,
    selectedStatusCounts: countBy(
      registry.placements.filter(entry => entry.selected),
      entry => entry.status
    ),
    allStatusCounts: countBy(registry.placements, entry => entry.status),
    expectedNonPlaced: registry.placements
      .filter(entry => entry.selected && entry.status !== 'placed')
      .map(entry => ({
        id: entry.id,
        wave: entry.wave,
        status: entry.status,
        reason: entry.reason,
      })),
    results: placedResults,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Project module verify: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Placed passed: ${passedCount}/${placedResults.length}`);
  console.log(`Expected non-placed selected modules: ${report.expectedNonPlaced.length}`);

  if (failedCount > 0) {
    process.exitCode = 1;
  }
}

main();
