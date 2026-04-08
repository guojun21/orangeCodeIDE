#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import {
  getAssemblyById,
  readRuntimeAssemblies,
  readRuntimeOwnershipConfig,
  resolveRuntimeInputRoot,
  ROOT,
} from './runtime-config-entry.mjs';
import { getActiveProfile, loadSliceManifest, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';

const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-ownership-report.json');
const RESIDUALS_PATH = path.join(ROOT, 'mapped', 'runtime-residuals-report.json');

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

function normalizeRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function isGitTracked(filePath) {
  const relativePath = normalizeRelative(filePath);
  const result = spawnSync('git', ['ls-files', '--error-unmatch', relativePath], {
    cwd: ROOT,
    stdio: 'ignore',
  });
  return result.status === 0;
}

const args = parseArgs(process.argv);
const assemblyId = args.assembly ?? 'rebuilt-runtime';
const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: args['runtime-input-root'] ?? process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});
const assemblies = readRuntimeAssemblies({ runtimeInputRoot });
const assembly = getAssemblyById(assemblyId, assemblies);

if (!assembly) {
  throw new Error(`Unknown assembly: ${assemblyId}`);
}

const ownership = readRuntimeOwnershipConfig();
const activeProfile = getActiveProfile();
const slices = loadSliceManifest().slices.filter((slice) => sliceMatchesProfile(slice, activeProfile));
const residuals = fs.existsSync(RESIDUALS_PATH)
  ? JSON.parse(fs.readFileSync(RESIDUALS_PATH, 'utf8'))
  : null;
const outputRoot = path.join(ROOT, assembly.outputRoot);
const extensionSlices = slices.filter((slice) => slice.target_runtime_bundle.startsWith('extensions/'));

const topLevelOwnership = Object.entries(ownership.topLevel).map(([name, entry]) => ({
  path: name,
  kind: entry.kind,
  notes: entry.notes,
  existsInRuntime: fs.existsSync(path.join(outputRoot, name)),
  trackedInRepoRoot: isGitTracked(path.join(ROOT, name)),
}));

const extensionEntries = extensionSlices.map((slice) => ({
  sliceId: slice.slice_id,
  rebuiltEntry: slice.rebuilt_entry,
  targetRuntimeBundle: slice.target_runtime_bundle,
  repoTracked: fs.existsSync(path.join(ROOT, slice.rebuilt_entry)),
}));

const groupedOwnership = Object.fromEntries(
  Object.entries(ownership.groups ?? {}).map(([groupRoot, groups]) => [
    groupRoot,
    Object.entries(groups).map(([groupName, members]) => ({
      group: groupName,
      members: members.map((member) => ({
        path: member,
        existsInRuntime: fs.existsSync(path.join(outputRoot, member)),
        coveredBySlice: slices.some((slice) => slice.target_runtime_bundle === member),
      })),
    })),
  ])
);

const result = {
  generatedAt: new Date().toISOString(),
  assemblyId,
  activeProfile,
  runtimeInputRoot: normalizeRelative(runtimeInputRoot),
  outputRoot: normalizeRelative(outputRoot),
  topLevelOwnership,
  extensions: {
    trackedEntryCount: extensionEntries.filter((entry) => entry.repoTracked).length,
    totalEntryCount: extensionEntries.length,
    entries: extensionEntries,
  },
  groupedOwnership,
  outGroups: groupedOwnership.out ?? [],
  residuals: residuals
    ? {
        topLevelSummary: residuals.topLevelSummary,
        outResidualGroups: residuals.outResidualGroups,
        extensionResidualSample: residuals.extensionResidualSample,
      }
    : null,
  passed: topLevelOwnership.every((entry) => entry.existsInRuntime),
};

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
