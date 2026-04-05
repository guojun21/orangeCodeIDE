#!/usr/bin/env node

/**
 * Experimental probe that assembles a COMPLETE replacement mega-bundle using
 * the Ae() module loader format.
 *
 * Sources (priority order for each module):
 *   1. Upstream VS Code 1.105.1 compiled TS → JS (1243 modules, 27.8 MB)
 *   2. Cursor-specific source tree (545 modules, 2.9 MB)
 *   3. packages/ui deobfuscated source (1 module, 15.9 MB)
 *   4. Third-party npm extracted (node_modules/* from bundle, ~20 MB)
 *   5. Original extracted fallback (remaining proto/misc modules)
 *
 * Output: recovered/full-bundle/workbench.desktop.main.js
 *         mapped/full-bundle-report.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './paths.mjs';

const t0 = Date.now();

// --- Paths ---
const registryPath = path.join(ROOT, 'recovered', 'binary-crack', 'workbench-bundle-complete-module-registry.txt');
const alignmentPath = path.join(ROOT, 'mapped', 'outbuild-vs-alignment.json');
const cursorSrcDir = path.join(ROOT, 'recovered', 'cursor-src');
const cursorManifestPath = path.join(cursorSrcDir, 'manifest.json');
const pkgUiSrcDir = path.join(ROOT, 'recovered', 'packages-ui-src');
const compiledDir = path.join(ROOT, 'recovered', 'upstream-compiled', 'esbuild-cjs');
const extractedDir = path.join(ROOT, 'recovered', 'binary-crack', 'modules-all');
const vscRef = path.join(ROOT, 'reference', 'vscode-1.105.1');

const outputDir = path.join(ROOT, 'recovered', 'full-bundle');
const outputPath = path.join(outputDir, 'workbench.desktop.main.js');
const reportPath = path.join(ROOT, 'mapped', 'full-bundle-report.json');

fs.mkdirSync(outputDir, { recursive: true });

// --- Load data ---
console.log('[full-bundle] Loading registry and alignment...');
const registry = fs.readFileSync(registryPath, 'utf8')
  .split('\n').filter(l => l.trim()).map(l => l.split('\t')[0]);

const alignment = JSON.parse(fs.readFileSync(alignmentPath, 'utf8'));
const upstreamAligned = new Map();
for (const a of alignment.alignments) {
  if (a.alignmentStatus === 'upstream-aligned') {
    upstreamAligned.set(a.bundlePath, a);
  }
}

const cursorManifest = JSON.parse(fs.readFileSync(cursorManifestPath, 'utf8'));
const cursorModPaths = new Set(Object.keys(cursorManifest));

console.log(`[full-bundle] ${registry.length} total modules`);
console.log(`[full-bundle] ${upstreamAligned.size} upstream-aligned`);
console.log(`[full-bundle] ${cursorModPaths.size} cursor-source`);

// --- Module resolution ---
const stats = { upstream: 0, upstreamCss: 0, cursorSrc: 0, pkgUi: 0, extracted: 0, missing: 0 };
const chunks = [];
const moduleStats = [];

function wrapJs(modPath, code) {
  return `Ae({"${modPath}"(exports, module){"use strict";\n${code}\n}})`;
}

function wrapCss(modPath, code) {
  return `Ae({"${modPath}"(exports, module){module.exports = ${JSON.stringify(code)}}})`;
}

function stripDeobHeader(code) {
  const lines = code.split('\n');
  let start = 0;
  while (start < lines.length && (lines[start].startsWith('// Source:') || lines[start].startsWith('// Origin:') || lines[start].startsWith('// Dependencies:') || lines[start].startsWith('// ---') || lines[start] === '')) start++;
  return lines.slice(start).join('\n');
}

function stripModuleAllHeader(code) {
  const lines = code.split('\n');
  let start = 0;
  while (
    start < lines.length &&
    (lines[start].startsWith('// Module:') ||
      lines[start].startsWith('// Offset:') ||
      lines[start].startsWith('// Size:') ||
      lines[start] === '')
  ) {
    start += 1;
  }
  return lines.slice(start).join('\n');
}

for (const modPath of registry) {
  let code, source;

  // 1. Upstream compiled TS
  const aligned = upstreamAligned.get(modPath);
  if (aligned && aligned.upstreamPath.endsWith('.ts')) {
    const compiledJs = path.join(compiledDir, aligned.upstreamPath.replace('src/vs/', '').replace('.ts', '.js'));
    if (fs.existsSync(compiledJs)) {
      code = fs.readFileSync(compiledJs, 'utf8');
      source = 'upstream';
      stats.upstream++;
    }
  }

  // 2. Upstream CSS
  if (!code && aligned && aligned.upstreamPath.endsWith('.css')) {
    const cssPath = path.join(vscRef, aligned.upstreamPath);
    if (fs.existsSync(cssPath)) {
      code = fs.readFileSync(cssPath, 'utf8');
      source = 'upstream-css';
      stats.upstreamCss++;
    }
  }

  // 3. Cursor source tree
  if (!code && cursorModPaths.has(modPath)) {
    const info = cursorManifest[modPath];
    const srcFile = path.join(cursorSrcDir, info.srcPath);
    if (fs.existsSync(srcFile)) {
      code = stripDeobHeader(fs.readFileSync(srcFile, 'utf8'));
      source = 'cursor-src';
      stats.cursorSrc++;
    }
  }

  // 4. packages/ui
  if (!code && modPath === 'packages/ui/dist/bundle.js') {
    const uiFile = path.join(pkgUiSrcDir, 'bundle.js');
    if (fs.existsSync(uiFile)) {
      code = stripDeobHeader(fs.readFileSync(uiFile, 'utf8'));
      source = 'packages-ui-src';
      stats.pkgUi++;
    }
  }

  // 5. Original extracted fallback (already Ae-wrapped)
  if (!code) {
    let extPath;
    if (modPath.startsWith('../packages/')) {
      extPath = path.join(extractedDir, '_parent_packages', modPath.replace('../packages/', ''));
    } else {
      extPath = path.join(extractedDir, modPath);
    }
    if (fs.existsSync(extPath) && fs.statSync(extPath).isFile()) {
      code = fs.readFileSync(extPath, 'utf8');
      source = 'extracted';
      stats.extracted++;
    }
  }

  // 6. Missing
  if (!code) {
    code = `/* MODULE NOT FOUND: ${modPath} */`;
    source = 'missing';
    stats.missing++;
  }

  // Extracted modules from modules-all already contain their Ae() wrapper —
  // strip header comments and use as-is. Other sources need wrapping.
  if (source === 'extracted') {
    const stripped = stripModuleAllHeader(code);
    if (stripped.trimStart().startsWith('Ae(')) {
      chunks.push(stripped.trim());
    } else {
      const isCss = modPath.endsWith('.css');
      chunks.push(isCss ? wrapCss(modPath, stripped) : wrapJs(modPath, stripped));
    }
  } else {
    const isCss = modPath.endsWith('.css');
    chunks.push(isCss ? wrapCss(modPath, code) : wrapJs(modPath, code));
  }
  moduleStats.push({ path: modPath, source, bytes: Buffer.byteLength(code) });
}

// --- Assemble ---
console.log('[full-bundle] Assembling...');
const bundleContent = chunks.join(',\n');
fs.writeFileSync(outputPath, bundleContent);

const elapsed = Date.now() - t0;
const bundleSize = Buffer.byteLength(bundleContent);
const lines = bundleContent.split('\n').length;

console.log(`[full-bundle] Output: ${(bundleSize / 1024 / 1024).toFixed(1)} MB, ${lines} lines`);
console.log(`[full-bundle] Sources: upstream=${stats.upstream} css=${stats.upstreamCss} cursor=${stats.cursorSrc} pkgUi=${stats.pkgUi} extracted=${stats.extracted} missing=${stats.missing}`);

// --- Source breakdown by bytes ---
const bytesBySource = {};
for (const s of moduleStats) {
  bytesBySource[s.source] = (bytesBySource[s.source] || 0) + s.bytes;
}
console.log('[full-bundle] Bytes by source:');
for (const [src, bytes] of Object.entries(bytesBySource).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${src}: ${(bytes / 1024 / 1024).toFixed(1)} MB (${(bytes / bundleSize * 100).toFixed(1)}%)`);
}

const totalFromSource = (bytesBySource['upstream'] || 0) + (bytesBySource['upstream-css'] || 0)
  + (bytesBySource['cursor-src'] || 0) + (bytesBySource['packages-ui-src'] || 0);
console.log(`[full-bundle] From source/deobfuscated: ${(totalFromSource / bundleSize * 100).toFixed(1)}%`);

// --- Report ---
const report = {
  generatedAt: new Date().toISOString(),
  elapsedMs: elapsed,
  totalModules: registry.length,
  bundleSizeMB: (bundleSize / 1024 / 1024).toFixed(1),
  lines,
  sources: stats,
  bytesBySource: Object.fromEntries(
    Object.entries(bytesBySource).map(([k, v]) => [k, { mb: (v / 1024 / 1024).toFixed(1), pct: (v / bundleSize * 100).toFixed(1) }])
  ),
  fromSourcePct: (totalFromSource / bundleSize * 100).toFixed(1),
  missingModules: moduleStats.filter(s => s.source === 'missing').map(s => s.path),
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`[full-bundle] Report: ${reportPath}`);
console.log(`[full-bundle] Done in ${elapsed}ms`);
