#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { ROOT } from './paths.mjs';

const root = ROOT;
const manifestPath = path.join(root, 'mapped', 'rebuilt-slices.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const args = process.argv.slice(2);

function readFlag(flag, fallback = null) {
  const index = args.indexOf(flag);
  if (index === -1) {
    return fallback;
  }
  return args[index + 1] ?? fallback;
}

function ensureNodeBaseline() {
  const requiredMajor = Number.parseInt(manifest.baseline.nodeVersion.split('.')[0], 10);
  const currentMajor = Number.parseInt(process.versions.node.split('.')[0], 10);

  if (currentMajor < requiredMajor) {
    console.error(
      `build-rebuilt-slice.mjs requires Node ${manifest.baseline.nodeVersion}. ` +
      `Current runtime is ${process.versions.node}. ` +
      `Use ${path.join(root, 'scripts', 'use-node22.sh')}.`
    );
    process.exit(1);
  }
}

function materializeTemplate(template, phase) {
  return template.replaceAll('{phase}', phase);
}

const sliceId = readFlag('--slice');
const phase = readFlag('--phase', 'rebuilt');

if (!sliceId) {
  console.error('Missing required flag: --slice <slice_id>');
  process.exit(1);
}

ensureNodeBaseline();

const slice = manifest.slices.find(entry => entry.slice_id === sliceId);

if (!slice) {
  console.error(`Unknown rebuilt slice: ${sliceId}`);
  process.exit(1);
}

const entryPath = path.join(root, slice.rebuilt_entry);
const outputFile = path.join(root, materializeTemplate(slice.build_output_template, phase));

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.rmSync(outputFile, { force: true });

const esbuildVersion = manifest.baseline.esbuildVersion;
const target = slice.esbuild?.target ?? manifest.baseline.defaultBrowserTarget;
const platform = slice.esbuild?.platform ?? 'browser';
const format = slice.esbuild?.format ?? 'iife';
const packages = slice.esbuild?.packages;
const external = slice.esbuild?.external ?? [];

const esbuildArgs = [
  '-y',
  `esbuild@${esbuildVersion}`,
  entryPath,
  '--bundle',
  `--platform=${platform}`,
  `--format=${format}`,
  `--target=${target}`,
  '--log-level=warning',
  `--define:__SHOPEECODE_ROOT__=${JSON.stringify(root)}`,
  `--outfile=${outputFile}`
];

if (packages) {
  esbuildArgs.push(`--packages=${packages}`);
}

for (const moduleName of external) {
  esbuildArgs.push(`--external:${moduleName}`);
}

execFileSync(
  'npx',
  esbuildArgs,
  {
    cwd: root,
    stdio: 'inherit',
    maxBuffer: 32 * 1024 * 1024
  }
);

console.log(outputFile);
