#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from './runtime-config-entry.mjs';

const MANIFEST_PATH = path.join(ROOT, 'mapped', 'runtime-package-manager-manifest.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-package-manager-resolution-report.json');
const OUTPUT_ROOT = path.join(ROOT, 'recovered', 'rebuilt', 'runtime-package-manager-input');
const USE_NODE22 = path.join(ROOT, 'scripts', 'use-node22.sh');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, payload) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2) + '\n');
}

function writePackageJson(outputRoot, dependencies) {
  const packageJson = {
    name: 'orangecodeide-runtime-js-deps',
    private: true,
    type: 'module',
    description: 'Generated install input for orangeCodeIDE runtime JS dependencies',
    dependencies,
  };
  fs.mkdirSync(outputRoot, { recursive: true });
  fs.writeFileSync(path.join(outputRoot, 'package.json'), JSON.stringify(packageJson, null, 2) + '\n');
}

function resetWorkspace(outputRoot) {
  fs.rmSync(path.join(outputRoot, 'node_modules'), { recursive: true, force: true });
  fs.rmSync(path.join(outputRoot, 'package-lock.json'), { force: true });
}

function runPackageLockResolution(outputRoot) {
  return spawnSync(
    'bash',
    [
      USE_NODE22,
      'npm',
      'install',
      '--package-lock-only',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      '--legacy-peer-deps',
    ],
    {
      cwd: outputRoot,
      encoding: 'utf8',
      maxBuffer: 20 * 1024 * 1024,
      env: {
        ...process.env,
        npm_config_cache: path.join(os.tmpdir(), 'orangecodeide-runtime-package-manager-npm-cache'),
      },
    }
  );
}

function detectFailedDependency(logText) {
  const patterns = [
    {
      reason: 'missing-version',
      match: /Invalid tag name "null" of package "([^"]+)@null"/,
      normalize: (match) => ({ name: match[1], version: null }),
    },
    {
      reason: 'no-matching-version',
      match: /No matching version found for ((?:@[^/\s]+\/)?[^@\s]+)@([^\s]+)/,
      normalize: (match) => ({ name: match[1], version: match[2] }),
    },
    {
      reason: 'not-in-registry',
      match: /'((?:@[^/']+\/)?[^@']+)@([^']+)' is not in this registry/,
      normalize: (match) => ({ name: match[1], version: match[2] }),
    },
    {
      reason: 'not-in-registry',
      match: /404 Not Found - .*\/((?:@[^/\s]+%2f)?[^@\s]+)(?:\s|$)/,
      normalize: (match) => ({
        name: decodeURIComponent(match[1]),
        version: null,
      }),
    },
  ];

  for (const pattern of patterns) {
    const match = logText.match(pattern.match);
    if (match) {
      return {
        ...pattern.normalize(match),
        reason: pattern.reason,
      };
    }
  }
  return null;
}

if (!fs.existsSync(MANIFEST_PATH)) {
  throw new Error(
    `Missing runtime package manager manifest: ${MANIFEST_PATH}. Run "npm run report:runtime-package-manager-manifest" first.`
  );
}

const manifest = readJson(MANIFEST_PATH);
const originalDependencies = { ...(manifest.dependencies ?? {}) };
const workingDependencies = { ...originalDependencies };
const unresolved = [];

for (const [name, version] of Object.entries(originalDependencies)) {
  if (version !== null) {
    continue;
  }
  unresolved.push({
    name,
    version,
    reason: 'missing-version',
    detectedBy: 'manifest-prefilter',
  });
  delete workingDependencies[name];
}

let attempts = 0;
let finalResolution = null;

while (attempts < 50) {
  attempts += 1;
  writePackageJson(OUTPUT_ROOT, workingDependencies);
  resetWorkspace(OUTPUT_ROOT);
  const result = runPackageLockResolution(OUTPUT_ROOT);
  const combinedLog = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;

  if (result.status === 0) {
    finalResolution = {
      status: 'resolved',
      stdout: result.stdout ?? '',
      stderr: result.stderr ?? '',
    };
    break;
  }

  const failedDependency = detectFailedDependency(combinedLog);
  if (!failedDependency || !workingDependencies[failedDependency.name]) {
    throw new Error(
      `Unable to classify npm resolution failure on attempt ${attempts}.\n${combinedLog.slice(-4000)}`
    );
  }

  unresolved.push({
    ...failedDependency,
    version: workingDependencies[failedDependency.name] ?? failedDependency.version ?? null,
    detectedBy: 'npm-install',
  });
  delete workingDependencies[failedDependency.name];
}

if (!finalResolution) {
  throw new Error('Failed to resolve runtime package manager manifest within retry budget.');
}

const lockfilePath = path.join(OUTPUT_ROOT, 'package-lock.json');
const result = {
  generatedAt: new Date().toISOString(),
  sourceOfTruth: 'mapped/runtime-package-manager-manifest.json',
  outputRoot: path.relative(ROOT, OUTPUT_ROOT).split(path.sep).join('/'),
  installCommand: 'npm install --package-lock-only --ignore-scripts --no-audit --no-fund --legacy-peer-deps',
  totalManifestDependencyCount: Object.keys(originalDependencies).length,
  resolvedDependencyCount: Object.keys(workingDependencies).length,
  unresolvedDependencyCount: unresolved.length,
  attempts,
  resolvedPackageJsonPath: path.relative(ROOT, path.join(OUTPUT_ROOT, 'package.json')).split(path.sep).join('/'),
  resolvedLockfilePath: fs.existsSync(lockfilePath)
    ? path.relative(ROOT, lockfilePath).split(path.sep).join('/')
    : null,
  unresolvedDependencies: unresolved.sort((left, right) => left.name.localeCompare(right.name)),
  passed: fs.existsSync(lockfilePath),
};

writeJson(RESULT_PATH, result);
console.log(RESULT_PATH);
