#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';
const SLICES_MANIFEST = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const WORKBENCH_PATCH_TARGET = `  function y(a) {
    ((globalThis._VSCODE_NLS_MESSAGES = a.nls.messages),
      (globalThis._VSCODE_NLS_LANGUAGE = a.nls.language));
    let r = a.nls.language || "en";
    (r === "zh-tw" ? (r = "zh-Hant") : r === "zh-cn" && (r = "zh-Hans"),
      window.document.documentElement.setAttribute("lang", r));
  }`;
const PRELOAD_PATCH_TARGET = `  if (process.contextIsolated)
    try {`;

function parseArgs(argv) {
  const args = { slice: [] };
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
    if (key === 'slice') {
      args.slice.push(value);
    } else {
      args[key] = value;
    }
    index += 1;
  }
  return args;
}

function materialize(template, phase) {
  return template.replaceAll('{phase}', phase);
}

function buildWorkbenchReplacementSnippet(sliceRecords) {
  const builtBlocks = sliceRecords
    .map(
      ({ sliceId, builtSource }) => `  /* rebuilt slice start: ${sliceId} */
${builtSource}
  /* rebuilt slice end: ${sliceId} */`
    )
    .join('\n');
  const hookCalls = sliceRecords
    .map(({ hookName }) => `      globalThis.${hookName}?.()`)
    .join(',\n');
  return `${builtBlocks}
  function y(a) {
    ((globalThis._VSCODE_NLS_MESSAGES = a.nls.messages),
      (globalThis._VSCODE_NLS_LANGUAGE = a.nls.language));
    let r = a.nls.language || "en";
    (r === "zh-tw" ? (r = "zh-Hant") : r === "zh-cn" && (r = "zh-Hans"),
      window.document.documentElement.setAttribute("lang", r),
${hookCalls});
  }`;
}

function buildPreloadReplacementSnippet(sliceRecords) {
  const builtBlocks = sliceRecords
    .map(
      ({ sliceId, builtSource }) => `  /* rebuilt slice start: ${sliceId} */
${builtSource}
  /* rebuilt slice end: ${sliceId} */`
    )
    .join('\n');
  const hookCalls = sliceRecords
    .map(({ hookName }) => `  globalThis.${hookName}?.(c, globalThis);`)
    .join('\n');
  return `${builtBlocks}
${hookCalls}
  if (process.contextIsolated)
    try {`;
}

function writeDirectReplacement(group) {
  const builtSource = group.sliceRecords.map((record) => record.builtSource).join('\n');
  fs.mkdirSync(path.dirname(group.overridePath), { recursive: true });
  fs.writeFileSync(group.overridePath, builtSource);
}

function removeOverrideRoot(overrideRoot) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      fs.rmSync(overrideRoot, { recursive: true, force: true, maxRetries: 3, retryDelay: 50 });
      return;
    } catch (error) {
      if (!error || (error.code !== 'ENOTEMPTY' && error.code !== 'EBUSY' && error.code !== 'EPERM')) {
        throw error;
      }
    }
  }

  fs.rmSync(overrideRoot, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 });
}

const args = parseArgs(process.argv);
const sliceIds = args.slice;
const phase = args.phase ?? 'rebuilt';

if (!sliceIds.length) {
  throw new Error('Usage: prepare-runtime-override.mjs --slice <slice-id> [--slice <slice-id> ...] [--phase rebuilt]');
}

const manifest = JSON.parse(fs.readFileSync(SLICES_MANIFEST, 'utf8'));
const selectedSlices = sliceIds.map((sliceId) => {
  const slice = manifest.slices.find((entry) => entry.slice_id === sliceId);
  if (!slice) {
    throw new Error(`Unknown slice: ${sliceId}`);
  }
  return slice;
});

const overrideRoots = new Set();
const groupMap = new Map();

for (const slice of selectedSlices) {
  const rebuiltBundlePath = path.join(ROOT, materialize(slice.build_output_template, phase));
  const overrideRelativePath = materialize(slice.override_output_template, phase);
  const groupKey = [
    slice.override_patch_strategy,
    slice.base_recovered_path,
    overrideRelativePath,
  ].join('::');
  const group = groupMap.get(groupKey) ?? {
    strategy: slice.override_patch_strategy,
    baseRecoveredPath: path.join(ROOT, slice.base_recovered_path),
    overrideRelativePath,
    overridePath: path.join(ROOT, overrideRelativePath),
    overrideRoot: path.join(ROOT, overrideRelativePath.split('/out/')[0]),
    sliceRecords: []
  };
  group.sliceRecords.push({
    sliceId: slice.slice_id,
    hookName: slice.runtime_hook_name,
    builtSource: fs.readFileSync(rebuiltBundlePath, 'utf8')
  });
  groupMap.set(groupKey, group);
  overrideRoots.add(group.overrideRoot);

  const overrideManifest = {
    generatedAt: new Date().toISOString(),
    phase,
    sliceId: slice.slice_id,
    rebuiltSourceEntry: path.join(ROOT, slice.rebuilt_entry),
    rebuiltBundlePath,
    targetBundle: slice.target_runtime_bundle,
    baseRecoveredPath: path.join(ROOT, slice.base_recovered_path),
    overridePath: path.join(ROOT, overrideRelativePath),
    observableBehavior: {
      marker: slice.validation_marker,
      badgeId: slice.validation_badge_id,
      badgeText: slice.validation_badge_text
    },
    runtimeHookName: slice.runtime_hook_name,
    validationPlan: [
      `Build rebuilt slice ${slice.slice_id}`,
      `Patch ${slice.target_runtime_bundle} from phase2 recovered baseline`,
      `Assemble ${phase}/runtime-app with the generic assembler`,
      'Launch the runtime and confirm the marker is visible'
    ]
  };

  const overrideManifestPath = path.join(ROOT, 'mapped', `${phase}-${slice.slice_id}-override-manifest.json`);
  fs.writeFileSync(overrideManifestPath, JSON.stringify(overrideManifest, null, 2) + '\n');
}

for (const overrideRoot of overrideRoots) {
  removeOverrideRoot(overrideRoot);
}

const generatedOverridePaths = [];
for (const group of groupMap.values()) {
  switch (group.strategy) {
    case 'workbench-nls-init-hook':
    case 'preload-bridge-hook': {
      const source = fs.readFileSync(group.baseRecoveredPath, 'utf8');
      const patchTarget = group.strategy === 'workbench-nls-init-hook'
        ? WORKBENCH_PATCH_TARGET
        : PRELOAD_PATCH_TARGET;
      const replacement = group.strategy === 'workbench-nls-init-hook'
        ? buildWorkbenchReplacementSnippet(group.sliceRecords)
        : buildPreloadReplacementSnippet(group.sliceRecords);

      if (!source.includes(patchTarget)) {
        throw new Error(`Patch target not found in ${group.baseRecoveredPath}`);
      }

      const patched = source.replace(patchTarget, replacement);
      fs.mkdirSync(path.dirname(group.overridePath), { recursive: true });
      fs.writeFileSync(group.overridePath, patched);
      generatedOverridePaths.push(group.overridePath);
      break;
    }
    case 'direct-file-replace':
      writeDirectReplacement(group);
      generatedOverridePaths.push(group.overridePath);
      break;
    default:
      throw new Error(`Unsupported override patch strategy: ${group.strategy}`);
  }
}

const groupManifestPath = path.join(ROOT, 'mapped', `${phase}-runtime-overrides-manifest.json`);
fs.writeFileSync(
  groupManifestPath,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      phase,
      slices: selectedSlices.map((slice) => slice.slice_id),
      overridePaths: generatedOverridePaths
    },
    null,
    2
  ) + '\n'
);

console.log(generatedOverridePaths.join('\n'));
