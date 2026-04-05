#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

import { ROOT } from './paths.mjs';
import { acquireDirectoryLock, releaseDirectoryLock } from './directory-lock.mjs';
const ASSEMBLIES_MANIFEST = path.join(ROOT, 'mapped', 'runtime-assemblies.json');
const ASSEMBLY_LOCK_PATH = path.join(ROOT, '.runtime-assembly.lock');

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

function copyFile(relativePath, sourceRoot, outputRoot) {
  const sourcePath = path.join(sourceRoot, relativePath);
  const outputPath = path.join(outputRoot, relativePath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.copyFileSync(sourcePath, outputPath);
}

function copyTree(sourceRoot, outputRoot) {
  if (!fs.existsSync(sourceRoot)) {
    throw new Error(`Override root does not exist: ${sourceRoot}`);
  }
  fs.cpSync(sourceRoot, outputRoot, { recursive: true, force: true });
}

function removeTree(targetPath) {
  fs.rmSync(targetPath, {
    recursive: true,
    force: true,
    maxRetries: 20,
    retryDelay: 100,
  });
}

const args = parseArgs(process.argv);
const assemblyId = args.assembly;

if (!assemblyId) {
  throw new Error('Usage: assemble-runtime-from-slices.mjs --assembly <assembly-id>');
}

const manifest = JSON.parse(fs.readFileSync(ASSEMBLIES_MANIFEST, 'utf8'));
const baseline = manifest.baseline;
const assembly = manifest.assemblies.find((entry) => entry.assembly_id === assemblyId);

if (!assembly) {
  throw new Error(`Unknown assembly: ${assemblyId}`);
}

const runtimeRoot = path.join(ROOT, baseline.runtime_root);
const outputRoot = path.join(ROOT, assembly.output_root);
const phase2OverlayRoot = path.join(ROOT, baseline.phase2_overlay_root);

await acquireDirectoryLock(ASSEMBLY_LOCK_PATH, {
  label: 'assembly lock',
});

try {
  removeTree(outputRoot);
  fs.mkdirSync(outputRoot, { recursive: true });

  const rsyncArgs = ['-a'];
  for (const exclude of baseline.rsync_excludes) {
    rsyncArgs.push('--exclude', exclude);
  }
  rsyncArgs.push(`${runtimeRoot}/`, `${outputRoot}/`);

  const rsync = spawnSync('rsync', rsyncArgs, { stdio: 'inherit' });
  if (rsync.status !== 0) {
    process.exit(rsync.status ?? 1);
  }

  for (const relativePath of baseline.phase2_overlay_files) {
    copyFile(relativePath, phase2OverlayRoot, outputRoot);
  }

  for (const overrideRoot of assembly.override_roots) {
    copyTree(path.join(ROOT, overrideRoot), outputRoot);
  }

  const assemblyManifest = {
    generatedAt: new Date().toISOString(),
    assemblyId: assembly.assembly_id,
    phase: assembly.phase,
    outputRoot,
    phase2OverlayRoot,
    copiedBaseOverlayFiles: baseline.phase2_overlay_files,
    overrideRoots: assembly.override_roots.map((entry) => path.join(ROOT, entry)),
    rsyncExcludes: baseline.rsync_excludes
  };
  const assemblyManifestPath = path.join(
    ROOT,
    'mapped',
    `${assembly.phase}-runtime-assembly-manifest.json`
  );
  fs.writeFileSync(assemblyManifestPath, JSON.stringify(assemblyManifest, null, 2) + '\n');
} finally {
  releaseDirectoryLock(ASSEMBLY_LOCK_PATH);
}

console.log(outputRoot);
