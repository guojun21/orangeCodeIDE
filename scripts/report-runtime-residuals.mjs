#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {
  getAssemblyById,
  readRuntimeAssemblies,
  readRuntimeOwnershipConfig,
  resolveRuntimeInputRoot,
  ROOT,
} from './runtime-config-entry.mjs';
import { loadSliceManifest, getActiveProfile, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';

const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-residuals-report.json');

function parseArgs(argv) {
  const args = {};
  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) {
      continue;
    }
    const key = token.slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = value;
    index += 1;
  }
  return args;
}

function normalizeRelative(filePath, basePath = ROOT) {
  return path.relative(basePath, filePath).split(path.sep).join('/');
}

function walkFiles(rootDir) {
  if (!fs.existsSync(rootDir)) {
    return [];
  }
  const files = [];
  for (const entry of fs.readdirSync(rootDir, { withFileTypes: true })) {
    const absolutePath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(absolutePath));
    } else {
      files.push(absolutePath);
    }
  }
  return files;
}

function classifyPath(relativePath, ownership) {
  for (const [groupName, members] of Object.entries(ownership.groups.out ?? {})) {
    if (members.includes(relativePath)) {
      return groupName;
    }
  }
  return 'unclassified';
}

const args = parseArgs(process.argv);
const assemblyId = args.assembly ?? 'rebuilt-runtime';
const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: args['runtime-input-root'] ?? process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});
const assemblies = readRuntimeAssemblies({ runtimeInputRoot });
const assembly = getAssemblyById(assemblyId, assemblies);
const ownership = readRuntimeOwnershipConfig();
const activeProfile = getActiveProfile();
const sliceManifest = loadSliceManifest();

if (!assembly) {
  throw new Error(`Unknown assembly: ${assemblyId}`);
}

const runtimeRoot = path.join(ROOT, assembly.outputRoot);
const runtimeFiles = walkFiles(runtimeRoot).map((filePath) => normalizeRelative(filePath, runtimeRoot));
const activeSlices = sliceManifest.slices.filter((slice) => sliceMatchesProfile(slice, activeProfile));
const coveredTargets = new Set([
  ...assemblies.baseline.phase2OverlayFiles,
  ...activeSlices.map((slice) => slice.target_runtime_bundle),
  'package.json',
]);

const topLevelResiduals = {};
for (const filePath of runtimeFiles) {
  const topLevel = filePath.split('/')[0];
  const covered = coveredTargets.has(filePath);
  if (covered) {
    continue;
  }
  if (!topLevelResiduals[topLevel]) {
    topLevelResiduals[topLevel] = [];
  }
  topLevelResiduals[topLevel].push(filePath);
}

const topLevelSummary = Object.entries(topLevelResiduals)
  .map(([topLevel, files]) => ({
    path: topLevel,
    count: files.length,
    sample: files.slice(0, 20),
    ownershipKind: ownership.topLevel[topLevel]?.kind ?? 'unknown',
  }))
  .sort((left, right) => right.count - left.count);

const outResidualFiles = (topLevelResiduals.out ?? []).map((relativePath) => ({
  path: relativePath,
  group: classifyPath(relativePath, ownership),
}));
const groupedOutResiduals = Object.entries(
  outResidualFiles.reduce((acc, entry) => {
    if (!acc[entry.group]) {
      acc[entry.group] = [];
    }
    acc[entry.group].push(entry.path);
    return acc;
  }, {})
).map(([group, files]) => ({
  group,
  count: files.length,
  sample: files.slice(0, 20),
})).sort((left, right) => right.count - left.count);

const result = {
  generatedAt: new Date().toISOString(),
  assemblyId,
  activeProfile,
  runtimeInputRoot: normalizeRelative(runtimeInputRoot),
  outputRoot: assembly.outputRoot,
  coveredTargetCount: coveredTargets.size,
  topLevelSummary,
  topLevelResidualCounts: Object.fromEntries(topLevelSummary.map((entry) => [entry.path, entry.count])),
  outResidualGroups: groupedOutResiduals,
  extensionResidualSample: (topLevelResiduals.extensions ?? []).slice(0, 20),
  passed: true,
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
