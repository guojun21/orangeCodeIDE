#!/usr/bin/env node

/**
 * Assembles a hybrid mega-bundle:
 *   - 1123 upstream-compiled modules (from VS Code .ts → esbuild → .js)
 *   - 120 upstream CSS modules (copied as-is)
 *   - Remaining ~1474 modules from the original bundle (Cursor-specific + third-party)
 *
 * Output format matches the original bundle's Ae({"path"(exports, module){...}}) pattern
 * so it can be loaded by Cursor's existing module loader.
 */

import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './paths.mjs';

const alignmentPath = path.join(ROOT, 'mapped', 'outbuild-vs-alignment.json');
const compiledDir = path.join(ROOT, 'recovered', 'upstream-compiled', 'esbuild-cjs');
const extractedModulesDir = path.join(ROOT, 'recovered', 'binary-crack', 'modules-all');
const originalBundle = path.join(ROOT, 'out', 'vs', 'workbench', 'workbench.desktop.main.js');
const registryPath = path.join(ROOT, 'recovered', 'binary-crack', 'workbench-bundle-complete-module-registry.txt');
const outputPath = path.join(ROOT, 'recovered', 'hybrid-bundle', 'workbench.desktop.main.js');
const reportPath = path.join(ROOT, 'mapped', 'hybrid-bundle-report.json');

console.log('[hybrid] Loading alignment...');
const alignment = JSON.parse(fs.readFileSync(alignmentPath, 'utf8'));

const upstreamAligned = new Map();
for (const a of alignment.alignments) {
  if (a.alignmentStatus === 'upstream-aligned') {
    upstreamAligned.set(a.bundlePath, a);
  }
}

console.log('[hybrid] Reading module registry...');
const registry = fs.readFileSync(registryPath, 'utf8')
  .split('\n').filter(l => l.trim()).map(l => {
    const parts = l.split('\t');
    return { path: parts[0], offset: parseInt(parts[1] || '0'), bytes: parseInt(parts[2] || '0') };
  });

console.log(`[hybrid] ${registry.length} modules in registry`);

let fromUpstream = 0, fromOriginal = 0, fromCss = 0, errors = 0;
const chunks = [];
const stats = [];

for (const mod of registry) {
  const modPath = mod.path;
  const aligned = upstreamAligned.get(modPath);

  let moduleCode;
  let source;

  if (aligned && aligned.upstreamPath.endsWith('.ts')) {
    const compiledJs = path.join(compiledDir, aligned.upstreamPath.replace('src/vs/', '').replace('.ts', '.js'));
    if (fs.existsSync(compiledJs)) {
      moduleCode = fs.readFileSync(compiledJs, 'utf8');
      source = 'upstream-compiled';
      fromUpstream++;
    }
  } else if (aligned && aligned.upstreamPath.endsWith('.css')) {
    const cssPath = path.join(ROOT, 'reference', 'vscode-1.105.1', aligned.upstreamPath);
    if (fs.existsSync(cssPath)) {
      moduleCode = fs.readFileSync(cssPath, 'utf8');
      source = 'upstream-css';
      fromCss++;
    }
  }

  if (!moduleCode) {
    const extractedPath = path.join(extractedModulesDir, modPath);
    if (fs.existsSync(extractedPath)) {
      moduleCode = fs.readFileSync(extractedPath, 'utf8');
      source = 'original-extracted';
      fromOriginal++;
    } else {
      source = 'missing';
      errors++;
      moduleCode = `/* MODULE NOT FOUND: ${modPath} */`;
    }
  }

  const isJs = modPath.endsWith('.js') || modPath.endsWith('.ts');
  const isCss = modPath.endsWith('.css');

  if (isJs) {
    chunks.push(`Ae({"${modPath}"(exports, module){"use strict";\n${moduleCode}\n}})`);
  } else if (isCss) {
    chunks.push(`Ae({"${modPath}"(exports, module){module.exports = ${JSON.stringify(moduleCode)}}})`);
  } else {
    chunks.push(`Ae({"${modPath}"(exports, module){"use strict";\n${moduleCode}\n}})`);
  }

  stats.push({ path: modPath, source, bytes: moduleCode.length });
}

console.log(`[hybrid] Assembly: ${fromUpstream} upstream, ${fromCss} css, ${fromOriginal} original, ${errors} missing`);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
const bundleContent = chunks.join(',\n');
fs.writeFileSync(outputPath, bundleContent);

const bundleSize = Buffer.byteLength(bundleContent);
console.log(`[hybrid] Output: ${outputPath} (${(bundleSize / 1024 / 1024).toFixed(1)} MB)`);

const report = {
  generatedAt: new Date().toISOString(),
  totalModules: registry.length,
  fromUpstream,
  fromCss,
  fromOriginal,
  missing: errors,
  upstreamPct: ((fromUpstream + fromCss) / registry.length * 100).toFixed(1),
  bundleSize,
  bundleSizeMB: (bundleSize / 1024 / 1024).toFixed(1),
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`[hybrid] Report: ${reportPath}`);
console.log(`[hybrid] Upstream coverage: ${report.upstreamPct}%`);
