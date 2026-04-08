#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import {
  getAssemblyById,
  getRequiredRuntimeItems,
  readBootstrapRuntimeManifest,
  readRuntimeAssemblies,
  resolveRuntimeInputRoot,
  ROOT,
} from './runtime-config-entry.mjs';

const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-boundary-check.json');

function normalizeRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function isGitTracked(relativePath) {
  const result = spawnSync('git', ['ls-files', '--error-unmatch', relativePath], {
    cwd: ROOT,
    stdio: 'ignore',
  });
  return result.status === 0;
}

const bootstrapManifest = readBootstrapRuntimeManifest();
const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});
const assemblies = readRuntimeAssemblies({ runtimeInputRoot });
const rebuiltAssembly = getAssemblyById('rebuilt-runtime', assemblies);

if (!rebuiltAssembly) {
  throw new Error('Missing rebuilt-runtime assembly');
}

const rebuiltAssemblyManifestPath = path.join(ROOT, 'mapped', 'rebuilt-runtime-assembly-manifest.json');
const rebuiltAssemblyManifest = fs.existsSync(rebuiltAssemblyManifestPath)
  ? JSON.parse(fs.readFileSync(rebuiltAssemblyManifestPath, 'utf8'))
  : null;
const requiredRuntimeItems = getRequiredRuntimeItems();
const repoRootRuntimeItems = requiredRuntimeItems.map((item) => ({
  path: item,
  present: fs.existsSync(path.join(ROOT, item)),
  gitTracked: isGitTracked(item),
}));
const trackedRepoRootItems = repoRootRuntimeItems.filter((entry) => entry.gitTracked).map((entry) => entry.path);
const stagedRootRelative = normalizeRelative(runtimeInputRoot);
const stagedRootInsideRuntimeDeps = stagedRootRelative === '.runtime-deps' || stagedRootRelative.startsWith('.runtime-deps/');
const assemblyUsesRepoRoot = rebuiltAssemblyManifest?.runtimeInputRoot
  ? fs.realpathSync(rebuiltAssemblyManifest.runtimeInputRoot) === ROOT
  : false;

const result = {
  generatedAt: new Date().toISOString(),
  bootstrapSource: bootstrapManifest?.source ?? null,
  stagedRuntimeRoot: stagedRootRelative,
  stagedRootInsideRuntimeDeps,
  assemblySourceOfTruth: 'config/runtime/assemblies.json',
  rebuiltAssemblyRuntimeInputRoot: rebuiltAssemblyManifest?.runtimeInputRoot
    ? normalizeRelative(rebuiltAssemblyManifest.runtimeInputRoot)
    : null,
  rebuiltAssemblyUsesRepoRoot: assemblyUsesRepoRoot,
  repoRootRuntimeItems,
  passed:
    stagedRootInsideRuntimeDeps &&
    trackedRepoRootItems.length === 0 &&
    assemblyUsesRepoRoot === false,
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
