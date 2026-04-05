#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { getActiveProfile, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';

import { ROOT } from './paths.mjs';
const SLICES_MANIFEST = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const ASSEMBLIES_MANIFEST = path.join(ROOT, 'mapped', 'runtime-assemblies.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-artifact-check.json');

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
const sliceChecks = slicesManifest.slices.filter((slice) => sliceMatchesProfile(slice, activeProfile)).map((slice) => {
  const builtPath = path.join(ROOT, materialize(slice.build_output_template, phase));
  const overridePath = path.join(ROOT, materialize(slice.override_output_template, phase));
  return {
    sliceId: slice.slice_id,
    builtPath,
    builtExists: fs.existsSync(builtPath),
    overridePath,
    overrideExists: fs.existsSync(overridePath),
    targetRuntimeBundle: slice.target_runtime_bundle,
  };
});

const runtimeRoot = path.join(ROOT, rebuiltAssembly.output_root);
const baseOverlayChecks = assembliesManifest.baseline.phase2_overlay_files.map((relativePath) => ({
  relativePath,
  existsInRuntime: fs.existsSync(path.join(runtimeRoot, relativePath)),
}));

const result = {
  generatedAt: new Date().toISOString(),
  phase,
  activeProfile,
  runtimeRoot,
  runtimeExists: fs.existsSync(runtimeRoot),
  slicesOk: sliceChecks.every((entry) => entry.builtExists && entry.overrideExists),
  overlayOk: baseOverlayChecks.every((entry) => entry.existsInRuntime),
  sliceChecks,
  baseOverlayChecks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
