#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'startup-overlay-stage-registry.json');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-overlay-stage-verify.json');
const DEFAULT_STAGE_PREFIX = 'rebuilt/src/startup-overlay/';

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
  let outputPath = DEFAULT_OUTPUT;
  let targetPrefix = DEFAULT_STAGE_PREFIX;

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
    if (arg === '--target-prefix') {
      i += 1;
      targetPrefix = argv[i];
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { registryPath, outputPath, targetPrefix };
}

function sha256(filePath) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function inspect(entry, targetPrefix) {
  if (entry.status === 'skipped-original') {
    return {
      id: entry.id,
      lane: entry.lane,
      status: entry.status,
      passed: true,
      skipped: true,
      failedChecks: [],
    };
  }

  const targetPath = path.join(ROOT, entry.targetFile);
  const sourcePath = path.join(ROOT, entry.sourceFile);
  const checks = {
    targetExists: fs.existsSync(targetPath),
    sourceExists: fs.existsSync(sourcePath),
    underStageRoot: entry.targetFile.startsWith(targetPrefix),
    sha256Matches: fs.existsSync(targetPath) && fs.existsSync(sourcePath)
      ? sha256(targetPath) === sha256(sourcePath)
      : false,
  };
  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  return {
    id: entry.id,
    lane: entry.lane,
    status: entry.status,
    skipped: false,
    passed: failedChecks.length === 0,
    failedChecks,
  };
}

function main() {
  const { registryPath, outputPath, targetPrefix } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const results = registry.results.map((entry) => inspect(entry, targetPrefix));
  const skippedCount = results.filter((entry) => entry.skipped).length;
  const checkedCount = results.length - skippedCount;
  const passedCount = results.filter((entry) => entry.passed && !entry.skipped).length;

  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: path.relative(ROOT, registryPath).split(path.sep).join('/'),
    targetPrefix,
    fileCount: results.length,
    checkedCount,
    skippedCount,
    passedCount,
    failedCount: checkedCount - passedCount,
    results,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Startup overlay stage verify: ${path.relative(ROOT, outputPath).split(path.sep).join('/')}`);
  console.log(`Passed: ${passedCount}/${checkedCount}`);
  console.log(`Skipped(original): ${skippedCount}`);

  if (passedCount !== checkedCount) {
    process.exitCode = 1;
  }
}

main();
