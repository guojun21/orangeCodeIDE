#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { getActiveProfile, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';

import { ROOT } from './paths.mjs';
const SLICES_MANIFEST = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const ASSEMBLIES_MANIFEST = path.join(ROOT, 'mapped', 'runtime-assemblies.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-runtime-direct-check.json');

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function materialize(template, phase) {
  return template.replaceAll('{phase}', phase);
}

const slicesManifest = JSON.parse(fs.readFileSync(SLICES_MANIFEST, 'utf8'));
const assembliesManifest = JSON.parse(fs.readFileSync(ASSEMBLIES_MANIFEST, 'utf8'));
const rebuiltAssembly = assembliesManifest.assemblies.find((entry) => entry.assembly_id === 'rebuilt-runtime');
const activeProfile = getActiveProfile();

if (!rebuiltAssembly) {
  throw new Error('Missing rebuilt-runtime assembly');
}

const phase = rebuiltAssembly.phase;
const runtimeRoot = path.join(ROOT, rebuiltAssembly.output_root);
const runtimeDirectSlices = slicesManifest.slices.filter(
  (slice) =>
    slice.target_runtime_bundle.startsWith('out/') &&
    slice.override_patch_strategy === 'direct-file-replace' &&
    sliceMatchesProfile(slice, activeProfile)
);

const checks = runtimeDirectSlices.map((slice) => {
  const builtPath = path.join(ROOT, materialize(slice.build_output_template, phase));
  const runtimePath = path.join(runtimeRoot, slice.target_runtime_bundle);
  const builtExists = fs.existsSync(builtPath);
  const runtimeExists = fs.existsSync(runtimePath);
  const builtHash = builtExists ? sha256(builtPath) : null;
  const runtimeHash = runtimeExists ? sha256(runtimePath) : null;

  return {
    sliceId: slice.slice_id,
    builtPath,
    runtimePath,
    builtExists,
    runtimeExists,
    builtHash,
    runtimeHash,
    runtimeMatchesBuilt: builtExists && runtimeExists && builtHash === runtimeHash,
  };
});

const result = {
  generatedAt: new Date().toISOString(),
  phase,
  activeProfile,
  runtimeRoot,
  passed: checks.every((entry) => entry.runtimeMatchesBuilt),
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
