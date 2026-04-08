#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { getActiveProfile, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';

import { ROOT } from './paths.mjs';
import { resolveRuntimeInputRoot } from './runtime-config.mjs';
const SLICES_MANIFEST = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-extension-signatures.json');
const OVERRIDE_FILE = path.join(
  ROOT,
  'recovered',
  'rebuilt',
  'overrides',
  'out',
  'vs',
  'workbench',
  'api',
  'node',
  'extensionHostProcess.js'
);

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

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function materialize(template, phase) {
  return template.replaceAll('{phase}', phase);
}

const args = parseArgs(process.argv);
const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: args['runtime-input-root'] ?? process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});
const SOURCE_FILE = path.join(
  runtimeInputRoot,
  'out',
  'vs',
  'workbench',
  'api',
  'node',
  'extensionHostProcess.js'
);

const manifest = JSON.parse(fs.readFileSync(SLICES_MANIFEST, 'utf8'));
const phase = 'rebuilt';
const activeProfile = getActiveProfile();
const extensionSlices = manifest.slices.filter(
  (slice) =>
    slice.signature_extension_id &&
    slice.signature_relative_path &&
    sliceMatchesProfile(slice, activeProfile)
);

const source = fs.readFileSync(SOURCE_FILE, 'utf8');
const startMarker = 'var hct=';
const endMarker = ';import zMe';
const startIndex = source.indexOf(startMarker);
const endIndex = source.indexOf(endMarker, startIndex);

if (startIndex === -1 || endIndex === -1) {
  throw new Error('Unable to locate extension signature table in extensionHostProcess.js');
}

const tableSource = source.slice(startIndex + startMarker.length, endIndex);
const signatures = vm.runInNewContext(`(${tableSource})`);

const updates = [];
for (const slice of extensionSlices) {
  const builtPath = path.join(ROOT, materialize(slice.build_output_template, phase));
  const hash = sha256(builtPath);
  const extensionEntry = signatures[slice.signature_extension_id];
  if (!extensionEntry) {
    throw new Error(`Missing signature entry for ${slice.signature_extension_id}`);
  }

  const segments = slice.signature_relative_path.split('/');
  let cursor = extensionEntry;
  for (let index = 0; index < segments.length - 1; index += 1) {
    cursor = cursor?.[segments[index]];
  }

  const fileName = segments.at(-1);
  if (!cursor || typeof cursor[fileName] !== 'string') {
    throw new Error(`Missing signature path ${slice.signature_relative_path} for ${slice.signature_extension_id}`);
  }

  cursor[fileName] = hash;
  updates.push({
    sliceId: slice.slice_id,
    extensionId: slice.signature_extension_id,
    relativePath: slice.signature_relative_path,
    hash,
  });
}

const patched = `${source.slice(0, startIndex)}${startMarker}${JSON.stringify(signatures)}${source.slice(endIndex)}`;
fs.mkdirSync(path.dirname(OVERRIDE_FILE), { recursive: true });
fs.writeFileSync(OVERRIDE_FILE, patched);

const result = {
  generatedAt: new Date().toISOString(),
  activeProfile,
  runtimeInputRoot,
  sourceFile: SOURCE_FILE,
  overrideFile: OVERRIDE_FILE,
  updates,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
