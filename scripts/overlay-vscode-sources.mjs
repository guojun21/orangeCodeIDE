#!/usr/bin/env node

/**
 * Overlays VS Code 1.105.1 upstream TypeScript sources onto the
 * out-build/vs module registry, producing a recovered source tree.
 */

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const alignmentPath = path.join(ROOT, 'mapped', 'outbuild-vs-alignment.json');
const vscodeRoot = path.join(ROOT, 'reference', 'vscode-1.105.1');
const outputDir = path.join(ROOT, 'recovered', 'vscode-aligned-sources');
const resultPath = path.join(ROOT, 'mapped', 'vscode-source-overlay-result.json');

const alignment = JSON.parse(fs.readFileSync(alignmentPath, 'utf8'));

let matched = 0;
let notFound = 0;
let copied = 0;
const results = [];

for (const entry of alignment.alignments) {
  const upstreamTs = entry.upstreamPath;
  const srcPath = path.join(vscodeRoot, upstreamTs);

  if (!fs.existsSync(srcPath)) {
    results.push({ bundlePath: entry.bundlePath, upstream: upstreamTs, status: 'not-found' });
    notFound++;
    continue;
  }

  matched++;

  const destPath = path.join(outputDir, upstreamTs);
  const destDir = path.dirname(destPath);
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(srcPath, destPath);
  copied++;

  const stat = fs.statSync(srcPath);
  results.push({
    bundlePath: entry.bundlePath,
    upstream: upstreamTs,
    status: 'matched',
    bytes: stat.size,
  });
}

const categoryCounts = {};
for (const r of results) {
  const cat = r.status;
  categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
}

const output = {
  generatedAt: new Date().toISOString(),
  vscodeVersion: '1.105.1',
  vscodeCommit: '7d842fb85a0275a4a8e4d7e040d2625abbf7f084',
  totalAlignments: alignment.alignments.length,
  matched,
  notFound,
  copied,
  matchRate: (matched / alignment.alignments.length * 100).toFixed(1) + '%',
  categoryCounts,
  results,
};

fs.writeFileSync(resultPath, JSON.stringify(output, null, 2));

console.log(`VS Code 1.105.1 source overlay:`);
console.log(`  Total modules: ${alignment.alignments.length}`);
console.log(`  Matched: ${matched} (${output.matchRate})`);
console.log(`  Not found: ${notFound}`);
console.log(`  Copied: ${copied}`);
console.log(`  Output: ${outputDir}`);
console.log(`  Result: ${resultPath}`);
