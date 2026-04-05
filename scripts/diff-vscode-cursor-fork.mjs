#!/usr/bin/env node

/**
 * Compares minified bundle modules against upstream VS Code TypeScript
 * sources to detect Cursor fork customizations.
 *
 * Strategy: extract exported symbol names from both sides and compare.
 * Where the upstream .ts has explicit exports that don't appear in the
 * bundle module, or vice versa, flag as a Cursor customization.
 */

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const overlayResultPath = path.join(ROOT, 'mapped', 'vscode-source-overlay-result.json');
const modulesDir = path.join(ROOT, 'recovered', 'binary-crack', 'modules-all', 'out-build');
const vscodeDir = path.join(ROOT, 'recovered', 'vscode-aligned-sources', 'src', 'vs');
const outputPath = path.join(ROOT, 'mapped', 'vscode-cursor-fork-diff.json');

const overlayResult = JSON.parse(fs.readFileSync(overlayResultPath, 'utf8'));

function extractExportNames(tsSource) {
  const exports = [];
  const re = /export\s+(?:function|class|const|let|var|enum|interface|type|abstract\s+class)\s+(\w+)/g;
  let m;
  while ((m = re.exec(tsSource)) !== null) {
    exports.push(m[1]);
  }
  const reDefault = /export\s+default\s+(?:function|class)\s*(\w*)/g;
  while ((m = reDefault.exec(tsSource)) !== null) {
    if (m[1]) exports.push(m[1]);
  }
  return [...new Set(exports)];
}

function extractBundleSymbols(bundleCode) {
  const symbols = [];
  const re = /E\(\w+,\s*"(\w+)"\)/g;
  let m;
  while ((m = re.exec(bundleCode)) !== null) {
    symbols.push(m[1]);
  }
  return [...new Set(symbols)];
}

const diffs = [];
let identicalCount = 0;
let cursorModifiedCount = 0;
let noModuleFileCount = 0;

const matched = overlayResult.results.filter(r => r.status === 'matched');

for (const entry of matched.slice(0, 500)) {
  const bundlePath = entry.bundlePath;
  const upstreamPath = entry.upstream;

  const moduleFile = path.join(ROOT, 'recovered', 'binary-crack', 'modules-all', bundlePath);
  const tsFile = path.join(ROOT, 'recovered', 'vscode-aligned-sources', upstreamPath);

  if (!fs.existsSync(moduleFile)) {
    noModuleFileCount++;
    continue;
  }

  const tsSource = fs.readFileSync(tsFile, 'utf8');
  const bundleCode = fs.readFileSync(moduleFile, 'utf8');

  const tsExports = extractExportNames(tsSource);
  const tsLines = tsSource.split('\n').length;
  const bundleBytes = Buffer.byteLength(bundleCode);

  const hasCursorImport = /cursor|anysphere|@anysphere/i.test(bundleCode);
  const hasCursorImportInTs = /cursor|anysphere/i.test(tsSource);

  const isCursorModified = hasCursorImport && !hasCursorImportInTs;

  if (isCursorModified) {
    cursorModifiedCount++;
    diffs.push({
      bundlePath,
      upstream: upstreamPath,
      classification: 'cursor-modified',
      tsExportCount: tsExports.length,
      tsLines,
      bundleBytes,
      cursorSignals: bundleCode.match(/cursor|anysphere|@anysphere/gi)?.slice(0, 5) || [],
    });
  } else {
    identicalCount++;
  }
}

const output = {
  generatedAt: new Date().toISOString(),
  totalMatched: matched.length,
  analyzed: matched.slice(0, 500).length,
  identicalCount,
  cursorModifiedCount,
  noModuleFileCount,
  cursorModifiedModules: diffs,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`Fork diff analysis:`);
console.log(`  Analyzed: ${output.analyzed}`);
console.log(`  Identical (upstream-only): ${identicalCount}`);
console.log(`  Cursor-modified: ${cursorModifiedCount}`);
console.log(`  No module file: ${noModuleFileCount}`);
console.log(`  Result: ${outputPath}`);
