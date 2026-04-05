#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

const root = ROOT;
const runtimeInventoryPath = path.join(root, 'mapped', 'runtime-inventory.json');
const extensionRestoreIndexPath = path.join(root, 'mapped', 'phase2-extension-restore-index', 'manifest.json');
const outputPath = path.join(root, 'mapped', 'phase3-module-map.json');

const runtimeInventory = JSON.parse(fs.readFileSync(runtimeInventoryPath, 'utf8'));
const extensionRestoreIndex = JSON.parse(fs.readFileSync(extensionRestoreIndexPath, 'utf8'));

const coreRecoveredMappings = [
  {
    module_name: 'bootstrap-fork',
    source_bundle: 'out/bootstrap-fork.js',
    recovered_module_id: null,
    recovered_path: 'recovered/phase2/core-entrypoints/out/bootstrap-fork.js',
    runtime_path: 'out/bootstrap-fork.js',
    mapping_type: 'upstream_equivalent',
    upstream_vscode_path: 'src/bootstrap-fork.ts',
    source_boundary: 'vscode',
    confidence: 'high',
    evidence: [
      'Entry chain and bootstrap helpers match upstream bootstrap-fork.',
      'Upstream VS Code 1.105.1 contains src/bootstrap-fork.ts as the direct source counterpart.',
      'Runtime file retains equivalent fork bootstrap responsibilities with packaging wrappers.'
    ],
    cursor_signals: [
      'Packaged product/package injection',
      'Sentry debug wrapper',
      'Compiled helper emission'
    ],
    notes: 'Treat as the packaged output of the upstream bootstrap path, not as a Cursor-only module.'
  },
  {
    module_name: 'electron-sandbox-workbench-shell',
    source_bundle: 'out/vs/code/electron-sandbox/workbench/workbench.js',
    recovered_module_id: null,
    recovered_path: 'recovered/phase2/core-entrypoints/out/vs/code/electron-sandbox/workbench/workbench.js',
    runtime_path: 'out/vs/code/electron-sandbox/workbench/workbench.js',
    mapping_type: 'cursor_modified',
    upstream_vscode_path: 'src/vs/code/electron-browser/workbench/workbench.ts',
    source_boundary: 'vscode+cursor',
    confidence: 'high',
    evidence: [
      'Upstream workbench shell lives at src/vs/code/electron-browser/workbench/workbench.ts.',
      'Recovered file keeps the same splash and configuration resolution structure.',
      'Recovered file additionally injects Cursor-specific import map entries such as @anysphere/*, solid-js, react-vnc, and composer-related resources.'
    ],
    cursor_signals: [
      '@anysphere import map entries',
      'composer preload and browser-specific integration hooks',
      'Cursor-specific package bundle references'
    ],
    notes: 'Map to the upstream workbench shell, but treat the runtime version as a Cursor-modified shell with additional product-specific dependency wiring.'
  },
  {
    module_name: 'electron-sandbox-preload',
    source_bundle: 'out/vs/base/parts/sandbox/electron-sandbox/preload.js',
    recovered_module_id: null,
    recovered_path: 'recovered/phase2/core-entrypoints/out/vs/base/parts/sandbox/electron-sandbox/preload.js',
    runtime_path: 'out/vs/base/parts/sandbox/electron-sandbox/preload.js',
    mapping_type: 'cursor_modified',
    upstream_vscode_path: 'src/vs/base/parts/sandbox/electron-browser/preload.ts',
    source_boundary: 'vscode+cursor',
    confidence: 'high',
    evidence: [
      'Upstream preload source lives at src/vs/base/parts/sandbox/electron-browser/preload.ts.',
      'Recovered file matches the same IPC validation, configuration resolution, and shell-env flow.',
      'Recovered runtime exposes additional process surface such as pid and getHeapStatistics beyond the upstream baseline.'
    ],
    cursor_signals: [
      'extra process.pid exposure',
      'extra process.getHeapStatistics exposure',
      'runtime path drift from electron-browser source to electron-sandbox output'
    ],
    notes: 'Map to the upstream preload source, but keep a Cursor-modified flag because the exposed sandbox globals are extended.'
  }
];

const extensionMappings = runtimeInventory.cursorExtensions.map(ext => {
  const restore = extensionRestoreIndex.find(item => item.module_name === ext.name) || null;
  let mappingType = 'cursor_only';
  let sourceBoundary = 'cursor';
  let confidence = 'high';
  let notes = 'Cursor-specific extension package with no upstream VS Code extension counterpart.';

  if (ext.kind === 'stub') {
    mappingType = 'stub';
    sourceBoundary = 'cursor';
    notes = 'Not a meaningful recovery target; keep as a placeholder package.';
  } else if (ext.kind === 'asset-only') {
    mappingType = 'asset_only';
    sourceBoundary = 'cursor';
    notes = 'Grammar/assets package rather than a JS bundle source recovery target.';
  } else if (ext.kind === 'vendor-resources') {
    mappingType = 'vendor_resources';
    sourceBoundary = 'cursor';
    notes = 'Vendor/resource payload rather than a normal extension entrypoint.';
  }

  return {
    module_name: ext.name,
    source_bundle: ext.entryPath ?? `extensions/${ext.name}`,
    recovered_module_id: null,
    recovered_path: restore?.entry_file ?? null,
    runtime_path: `extensions/${ext.name}`,
    entry_path: ext.entryPath,
    mapping_type: mappingType,
    upstream_vscode_path: 'cursor_only',
    source_boundary: sourceBoundary,
    confidence,
    preferred_restore_tool: restore?.preferred_restore_tool ?? null,
    restore_output_dir: restore?.primary_output_dir ?? null,
    restore_status: restore?.status ?? null,
    restore_entry_file: restore?.entry_file ?? null,
    restore_module_count: restore?.module_count ?? null,
    notes
  };
});

const countsByMappingType = [...coreRecoveredMappings, ...extensionMappings].reduce((acc, item) => {
  acc[item.mapping_type] = (acc[item.mapping_type] ?? 0) + 1;
  return acc;
}, {});

const countsBySourceBoundary = [...coreRecoveredMappings, ...extensionMappings].reduce((acc, item) => {
  acc[item.source_boundary] = (acc[item.source_boundary] ?? 0) + 1;
  return acc;
}, {});

const summary = {
  generatedAt: new Date().toISOString(),
  runtime: runtimeInventory.runtime,
  summary: {
    coreRecoveredCount: coreRecoveredMappings.length,
    extensionCount: extensionMappings.length,
    countsByMappingType,
    countsBySourceBoundary
  },
  coreRecoveredMappings,
  extensionMappings
};

fs.writeFileSync(outputPath, JSON.stringify(summary, null, 2) + '\n');
console.log(outputPath);
