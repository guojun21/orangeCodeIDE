#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {
  ROOT,
  resolveRuntimeInputRoot,
} from './runtime-config-entry.mjs';

const PACKAGE_MANAGER_INSTALL_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-package-manager-install-report.json'
);
const PACKAGE_MANAGER_RESOLUTION_REPORT_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-package-manager-resolution-report.json'
);
const NATIVE_DISTRIBUTION_PLAN_PATH = path.join(
  ROOT,
  'mapped',
  'runtime-native-distribution-plan.json'
);
const OUTPUT_ROOT = path.join(ROOT, 'recovered', 'rebuilt', 'runtime-generated-node-modules');
const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-generated-node-modules-report.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function normalizeRelative(filePath) {
  return toPosix(path.relative(ROOT, filePath));
}

function packageSegments(packageName) {
  return packageName.split('/');
}

function copyDirectoryReplace(sourceRoot, targetRoot) {
  fs.rmSync(targetRoot, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(targetRoot), { recursive: true });
  fs.cpSync(sourceRoot, targetRoot, { recursive: true, dereference: false });
}

function listTopLevelPackages(nodeModulesRoot) {
  if (!fs.existsSync(nodeModulesRoot)) {
    return [];
  }

  const result = [];
  const topLevelEntries = fs.readdirSync(nodeModulesRoot, { withFileTypes: true });
  for (const entry of topLevelEntries) {
    if (!entry.isDirectory()) {
      continue;
    }
    if (entry.name.startsWith('.')) {
      continue;
    }

    if (entry.name.startsWith('@')) {
      const scopeRoot = path.join(nodeModulesRoot, entry.name);
      const scopedEntries = fs.readdirSync(scopeRoot, { withFileTypes: true });
      for (const scopedEntry of scopedEntries) {
        if (scopedEntry.isDirectory()) {
          result.push(`${entry.name}/${scopedEntry.name}`);
        }
      }
      continue;
    }

    result.push(entry.name);
  }

  return result.sort();
}

for (const requiredPath of [
  PACKAGE_MANAGER_INSTALL_REPORT_PATH,
  PACKAGE_MANAGER_RESOLUTION_REPORT_PATH,
  NATIVE_DISTRIBUTION_PLAN_PATH,
]) {
  if (!fs.existsSync(requiredPath)) {
    throw new Error(`Missing required input: ${requiredPath}`);
  }
}

const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});
const packageManagerInstall = readJson(PACKAGE_MANAGER_INSTALL_REPORT_PATH);
const packageManagerResolution = readJson(PACKAGE_MANAGER_RESOLUTION_REPORT_PATH);
const nativeDistributionPlan = readJson(NATIVE_DISTRIBUTION_PLAN_PATH);

if (packageManagerInstall.passed !== true) {
  throw new Error('runtime-package-manager-install-report.json is not green');
}
if (nativeDistributionPlan.passed !== true) {
  throw new Error('runtime-native-distribution-plan.json is not green');
}

const installNodeModulesRoot = path.join(ROOT, packageManagerInstall.nodeModulesPath);
const installPackageJsonPath = path.join(ROOT, packageManagerInstall.packageJsonPath);
const outputNodeModulesRoot = path.join(OUTPUT_ROOT, 'node_modules');
const installPackageJson = readJson(installPackageJsonPath);

fs.rmSync(OUTPUT_ROOT, { recursive: true, force: true });
fs.mkdirSync(OUTPUT_ROOT, { recursive: true });
fs.cpSync(installNodeModulesRoot, outputNodeModulesRoot, {
  recursive: true,
  dereference: false,
});

const copiedNativePackages = [];
for (const entry of nativeDistributionPlan.packagePlans ?? []) {
  const sourceRoot = path.join(runtimeInputRoot, 'node_modules', ...packageSegments(entry.name));
  const targetRoot = path.join(outputNodeModulesRoot, ...packageSegments(entry.name));
  copyDirectoryReplace(sourceRoot, targetRoot);
  copiedNativePackages.push({
    name: entry.name,
    sourceRoot: toPosix(path.relative(runtimeInputRoot, sourceRoot)),
    targetRoot: normalizeRelative(targetRoot),
    strategyKind: entry.strategyKind,
    artifactBundleKind: entry.artifactBundleKind,
  });
}

const externalizedPackages = (packageManagerResolution.externalizedDependencies ?? []).map((entry) => {
  const sourceRoot = path.join(runtimeInputRoot, 'node_modules', ...packageSegments(entry.name));
  const targetRoot = path.join(outputNodeModulesRoot, ...packageSegments(entry.name));
  copyDirectoryReplace(sourceRoot, targetRoot);
  return {
    name: entry.name,
    sourceRoot: toPosix(path.relative(runtimeInputRoot, sourceRoot)),
    targetRoot: normalizeRelative(targetRoot),
    notes: entry.notes ?? null,
  };
});

const generatedPackages = listTopLevelPackages(outputNodeModulesRoot);
const expectedTopLevelPackages = Array.from(
  new Set([
    ...Object.keys(installPackageJson.dependencies ?? {}),
    ...copiedNativePackages.map((entry) => entry.name),
    ...externalizedPackages.map((entry) => entry.name),
  ])
).sort();
const expectedPackageSet = new Set(expectedTopLevelPackages);
const omittedPackages = (packageManagerResolution.omittedDependencies ?? [])
  .map((entry) => entry.name)
  .sort();
const missingExpectedPackages = expectedTopLevelPackages.filter(
  (name) => !generatedPackages.includes(name)
);
const hoistedTopLevelPackages = generatedPackages.filter((name) => !expectedPackageSet.has(name));

const result = {
  generatedAt: new Date().toISOString(),
  runtimeInputRoot: normalizeRelative(runtimeInputRoot),
  sourceOfTruth: {
    packageManagerInstall: 'mapped/runtime-package-manager-install-report.json',
    packageManagerResolution: 'mapped/runtime-package-manager-resolution-report.json',
    nativeDistributionPlan: 'mapped/runtime-native-distribution-plan.json',
    generatedPackageJson: normalizeRelative(installPackageJsonPath),
  },
  outputRoot: normalizeRelative(OUTPUT_ROOT),
  outputNodeModulesRoot: normalizeRelative(outputNodeModulesRoot),
  installedJsDependencyCount: packageManagerInstall.installedDependencyCount ?? 0,
  copiedNativePackageCount: copiedNativePackages.length,
  copiedExternalizedPackageCount: externalizedPackages.length,
  generatedTopLevelPackageCount: generatedPackages.length,
  expectedTopLevelPackageCount: expectedTopLevelPackages.length,
  omittedPackageCount: omittedPackages.length,
  copiedNativePackages,
  copiedExternalizedPackages: externalizedPackages,
  omittedPackages,
  missingExpectedPackages,
  hoistedTopLevelPackageCount: hoistedTopLevelPackages.length,
  hoistedTopLevelPackages,
  passed: missingExpectedPackages.length === 0,
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
