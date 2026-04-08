#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {
  getAssemblyById,
  getRequiredRuntimeItems,
  readRuntimeAssemblies,
  resolveRuntimeInputRoot,
  ROOT,
} from './runtime-config-entry.mjs';

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

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
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

const outputRoot = path.join(ROOT, assembly.outputRoot);
const assemblyManifestPath = path.join(
  ROOT,
  'mapped',
  `${assembly.phase}-runtime-assembly-manifest.json`
);
const assemblyManifest = readJsonIfExists(assemblyManifestPath);
const generatedRuntimeAssets = new Set(assemblyManifest?.generatedRuntimeAssets ?? []);
const topLevelItems = getRequiredRuntimeItems();
const overlayTopLevels = new Set(
  assemblies.baseline.phase2OverlayFiles.map((entry) => entry.split('/')[0]).filter(Boolean)
);
const overrideTopLevels = new Set();
for (const overrideRoot of assembly.overrideRoots) {
  const absoluteRoot = path.join(ROOT, overrideRoot);
  if (!fs.existsSync(absoluteRoot)) {
    continue;
  }
  for (const entry of fs.readdirSync(absoluteRoot, { withFileTypes: true })) {
    overrideTopLevels.add(entry.name);
  }
}

const topLevelOrigins = topLevelItems.map((relativePath) => {
  const runtimePath = path.join(outputRoot, relativePath);
  const existsInRuntime = fs.existsSync(runtimePath);
  const contributors = ['external-runtime-input'];
  if (generatedRuntimeAssets.has(relativePath)) {
    contributors.push('generated-runtime-asset');
  }
  if (overlayTopLevels.has(relativePath)) {
    contributors.push('phase2-overlay');
  }
  if (overrideTopLevels.has(relativePath)) {
    contributors.push('rebuilt-override');
  }

  return {
    path: relativePath,
    existsInRuntime,
    source: contributors.includes('generated-runtime-asset')
      ? 'generated-runtime-asset'
      : contributors.includes('rebuilt-override') || contributors.includes('phase2-overlay')
        ? 'rebuilt-override'
        : 'external-runtime-input',
    contributors,
  };
});

const result = {
  generatedAt: new Date().toISOString(),
  assemblyId,
  sourceOfTruth: 'config/runtime/assemblies.json',
  runtimeInputRoot: normalizeRelative(runtimeInputRoot),
  outputRoot: normalizeRelative(outputRoot),
  topLevelOrigins,
  meta: [
    {
      path: 'package.json',
      source: 'generated-report',
    },
    {
      path: 'mapped/runtime-origin-report.json',
      source: 'generated-report',
    },
  ],
  passed: topLevelOrigins.every((entry) => entry.existsInRuntime),
};

const outputPath = path.join(ROOT, 'mapped', 'runtime-origin-report.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2) + '\n');
console.log(outputPath);
