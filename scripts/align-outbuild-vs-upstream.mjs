#!/usr/bin/env node

/**
 * Aligns 1808 out-build/vs module paths from the workbench bundle
 * against VS Code upstream source structure (v1.105.1).
 *
 * Maps each bundle module path to its upstream equivalent,
 * checks if the upstream path exists in reference/vscode/ if available.
 */

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const registryPath = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry.json');
const binaryRegistryPath = path.join(ROOT, 'recovered', 'binary-crack', 'workbench-bundle-complete-module-registry.txt');
const outputPath = path.join(ROOT, 'mapped', 'outbuild-vs-alignment.json');

let outBuildModules = [];

if (fs.existsSync(registryPath)) {
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  outBuildModules = registry.modules
    .filter(m => m.id.startsWith('out-build/vs/'))
    .map(m => m.id);
} else if (fs.existsSync(binaryRegistryPath)) {
  outBuildModules = fs.readFileSync(binaryRegistryPath, 'utf8')
    .split('\n')
    .filter(l => l.startsWith('out-build/vs/'))
    .map(l => l.trim());
}

console.log(`[align] found ${outBuildModules.length} out-build/vs modules`);

function mapToUpstream(bundlePath) {
  return bundlePath
    .replace(/^out-build\/vs\//, 'src/vs/')
    .replace(/\.js(`?)$/, '.ts$1');
}

const categories = {};
const alignments = [];

for (const mod of outBuildModules) {
  const upstreamPath = mapToUpstream(mod);

  const parts = mod.replace('out-build/vs/', '').split('/');
  const topLevel = parts[0];
  const subLevel = parts.length > 1 ? parts[1] : '_root';
  const catKey = `${topLevel}/${subLevel}`;
  categories[catKey] = (categories[catKey] || 0) + 1;

  const refPath = path.join(ROOT, 'reference', 'vscode', upstreamPath);
  const refExists = fs.existsSync(refPath);

  alignments.push({
    bundlePath: mod,
    upstreamPath,
    category: topLevel,
    subCategory: subLevel,
    referenceExists: refExists,
  });
}

const catSorted = Object.entries(categories).sort((a, b) => b[1] - a[1]);
const refExistsCount = alignments.filter(a => a.referenceExists).length;

console.log(`[align] reference matches: ${refExistsCount}/${outBuildModules.length}`);
console.log(`[align] top categories:`);
for (const [cat, count] of catSorted.slice(0, 15)) {
  console.log(`  ${cat}: ${count}`);
}

const output = {
  generatedAt: new Date().toISOString(),
  vscodeVersion: '1.105.1',
  totalModules: outBuildModules.length,
  referenceExistsCount: refExistsCount,
  categoryBreakdown: Object.fromEntries(catSorted),
  topLevelCategories: Object.fromEntries(
    Object.entries(
      alignments.reduce((acc, a) => { acc[a.category] = (acc[a.category] || 0) + 1; return acc; }, {})
    ).sort((a, b) => b[1] - a[1])
  ),
  alignments,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`\nResult: ${outputPath}`);
