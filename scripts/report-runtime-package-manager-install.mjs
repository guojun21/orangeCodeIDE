#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from './runtime-config-entry.mjs';

const REPORT_RESOLUTION_SCRIPT = path.join(
  ROOT,
  'scripts',
  'report-runtime-package-manager-resolution.mjs'
);
const RESOLUTION_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-package-manager-resolution-report.json'
);
const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-package-manager-install-report.json');
const USE_NODE22 = path.join(ROOT, 'scripts', 'use-node22.sh');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, payload) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2) + '\n');
}

function normalizeRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function sha256File(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function runPackageInstall(outputRoot) {
  return spawnSync(
    'bash',
    [
      USE_NODE22,
      'npm',
      'ci',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      '--legacy-peer-deps',
      '--prefer-offline',
    ],
    {
      cwd: outputRoot,
      encoding: 'utf8',
      maxBuffer: 40 * 1024 * 1024,
      env: {
        ...process.env,
        npm_config_cache: path.join(os.tmpdir(), 'orangecodeide-runtime-package-manager-npm-cache'),
      },
    }
  );
}

function ensureResolutionReport() {
  const result = spawnSync('bash', [USE_NODE22, 'node', REPORT_RESOLUTION_SCRIPT], {
    cwd: ROOT,
    encoding: 'utf8',
    maxBuffer: 20 * 1024 * 1024,
    env: {
      ...process.env,
      npm_config_cache: path.join(os.tmpdir(), 'orangecodeide-runtime-package-manager-npm-cache'),
    },
  });

  if ((result.status ?? 1) !== 0) {
    throw new Error(
      `Failed to generate runtime package manager resolution report.\n${(result.stdout ?? '').slice(-2000)}\n${(result.stderr ?? '').slice(-2000)}`
    );
  }
}

function packageExists(nodeModulesRoot, packageName) {
  const packagePath = packageName.startsWith('@')
    ? path.join(nodeModulesRoot, ...packageName.split('/'))
    : path.join(nodeModulesRoot, packageName);
  return fs.existsSync(packagePath);
}

ensureResolutionReport();

const resolutionReport = readJson(RESOLUTION_REPORT_PATH);
const outputRoot = path.join(ROOT, resolutionReport.outputRoot);
const packageJsonPath = path.join(outputRoot, 'package.json');
const packageLockPath = path.join(outputRoot, 'package-lock.json');

if (!fs.existsSync(packageJsonPath)) {
  throw new Error(`Missing generated runtime package manager package.json: ${packageJsonPath}`);
}

const packageJson = readJson(packageJsonPath);
const declaredDependencies = Object.keys(packageJson.dependencies ?? {}).sort();
const nodeModulesRoot = path.join(outputRoot, 'node_modules');
const packageJsonSha256 = sha256File(packageJsonPath);
const packageLockSha256 = sha256File(packageLockPath);
const previousReport = fs.existsSync(RESULT_PATH) ? readJson(RESULT_PATH) : null;

const previousInstallMatches =
  previousReport?.passed === true &&
  previousReport?.packageJsonSha256 === packageJsonSha256 &&
  previousReport?.packageLockSha256 === packageLockSha256 &&
  previousReport?.installRoot === normalizeRelative(outputRoot) &&
  fs.existsSync(nodeModulesRoot);

let installResult = {
  status: 0,
  stdout: '',
  stderr: '',
  skipped: false,
  reuseReason: null,
};

let installedDependencies = declaredDependencies.filter((name) => packageExists(nodeModulesRoot, name));
let missingDependencies = declaredDependencies.filter((name) => !packageExists(nodeModulesRoot, name));

if (previousInstallMatches && missingDependencies.length === 0) {
  installResult = {
    ...installResult,
    skipped: true,
    reuseReason: 'existing-node_modules-matches-package-lock',
  };
} else {
  installResult = runPackageInstall(outputRoot);
  installedDependencies = declaredDependencies.filter((name) => packageExists(nodeModulesRoot, name));
  missingDependencies = declaredDependencies.filter((name) => !packageExists(nodeModulesRoot, name));
}

const payload = {
  generatedAt: new Date().toISOString(),
  sourceOfTruth: 'mapped/runtime-package-manager-resolution-report.json',
  installRoot: normalizeRelative(outputRoot),
  installCommand: 'npm ci --ignore-scripts --no-audit --no-fund --legacy-peer-deps',
  packageJsonPath: normalizeRelative(packageJsonPath),
  packageLockPath: fs.existsSync(packageLockPath) ? normalizeRelative(packageLockPath) : null,
  packageJsonSha256,
  packageLockSha256,
  nodeModulesPath: fs.existsSync(nodeModulesRoot) ? normalizeRelative(nodeModulesRoot) : null,
  declaredDependencyCount: declaredDependencies.length,
  installedDependencyCount: installedDependencies.length,
  missingDependencyCount: missingDependencies.length,
  missingDependencies,
  installSkipped: installResult.skipped === true,
  reuseReason: installResult.reuseReason ?? null,
  stdoutTail: (installResult.stdout ?? '').trim().split('\n').slice(-20),
  stderrTail: (installResult.stderr ?? '').trim().split('\n').slice(-20),
  exitCode: installResult.status ?? 1,
  passed:
    (installResult.status ?? 1) === 0 &&
    fs.existsSync(nodeModulesRoot) &&
    missingDependencies.length === 0,
};

writeJson(RESULT_PATH, payload);
console.log(RESULT_PATH);
