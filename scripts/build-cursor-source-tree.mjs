#!/usr/bin/env node

/**
 * Creates organized source trees from deobfuscated Cursor modules and packages/ui.
 *
 * Input:
 *   - recovered/all-modules-deobfuscated/ (335+ Cursor contrib/services modules)
 *   - recovered/all-modules-deobfuscated/packages/ui/dist/bundle.js (16.6 MB)
 *   - recovered/binary-crack/modules-all/ (original extracted, fallback)
 *   - recovered/binary-crack/workbench-bundle-complete-module-registry.txt
 *
 * Output:
 *   - recovered/cursor-src/   — 335+ Cursor-specific modules as individual .js files
 *   - recovered/cursor-src/manifest.json — module path → file path mapping
 *   - recovered/packages-ui-src/bundle.js — cleaned packages/ui source
 *   - recovered/packages-ui-src/manifest.json
 *   - mapped/cursor-source-tree-report.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './paths.mjs';

const deobDir = path.join(ROOT, 'recovered', 'all-modules-deobfuscated');
const extractedDir = path.join(ROOT, 'recovered', 'binary-crack', 'modules-all');
const registryPath = path.join(ROOT, 'recovered', 'binary-crack', 'workbench-bundle-complete-module-registry.txt');
const cursorSrcDir = path.join(ROOT, 'recovered', 'cursor-src');
const pkgUiSrcDir = path.join(ROOT, 'recovered', 'packages-ui-src');
const reportPath = path.join(ROOT, 'mapped', 'cursor-source-tree-report.json');

const CURSOR_CONTRIB_PREFIXES = [
  'out-build/vs/workbench/contrib/composer/',
  'out-build/vs/workbench/contrib/chat/',
  'out-build/vs/workbench/contrib/agent',
  'out-build/vs/workbench/contrib/reviewChanges/',
  'out-build/vs/workbench/contrib/cursorBlame/',
  'out-build/vs/workbench/contrib/aiBackgroundComposer/',
  'out-build/vs/workbench/contrib/inlineChat/',
  'out-build/vs/workbench/contrib/inlineDiffsV2/',
  'out-build/vs/workbench/contrib/appLayout/',
  'out-build/vs/workbench/contrib/mcp/',
  'out-build/vs/workbench/contrib/remote/',
  'out-build/vs/workbench/contrib/ai/',
  'out-build/vs/workbench/contrib/aiCpp/',
  'out-build/vs/workbench/contrib/analytics/',
  'out-build/vs/workbench/contrib/notebook/',
  'out-build/vs/workbench/services/cursor',
  'out-build/vs/platform/cursor',
  '../packages/',
];

function isCursorModule(modPath) {
  return CURSOR_CONTRIB_PREFIXES.some(p => modPath.startsWith(p));
}

function isPackagesUi(modPath) {
  return modPath === 'packages/ui/dist/bundle.js';
}

function stripHeaderComments(code) {
  const lines = code.split('\n');
  let start = 0;
  while (start < lines.length && lines[start].startsWith('//')) start++;
  return lines.slice(start).join('\n').trim();
}

function extractDependencyCalls(code) {
  const match = code.match(/^([A-Za-z$_][\w$]*\(\)[,\s]*)+/);
  if (!match) return { deps: [], body: code };

  const depsStr = match[0];
  const deps = [];
  const depRe = /([A-Za-z$_][\w$]*)\(\)/g;
  let m;
  while ((m = depRe.exec(depsStr)) !== null) {
    deps.push(m[1]);
  }

  const body = code.slice(depsStr.length).trim();
  return { deps, body };
}

console.log('[cursor-src] Reading module registry...');
const registry = fs.readFileSync(registryPath, 'utf8')
  .split('\n').filter(l => l.trim());

const cursorModules = registry.filter(l => isCursorModule(l.split('\t')[0]));
const pkgUiModules = registry.filter(l => isPackagesUi(l.split('\t')[0]));

console.log(`[cursor-src] Found ${cursorModules.length} Cursor-specific modules, ${pkgUiModules.length} packages/ui entries`);

// --- Build Cursor source tree ---
fs.mkdirSync(cursorSrcDir, { recursive: true });

const manifest = {};
let fromDeob = 0, fromExtracted = 0, missing = 0;
let totalBytes = 0;

for (const line of cursorModules) {
  const modPath = line.split('\t')[0];

  let deobPath, extPath, code, source;

  if (modPath.startsWith('../packages/')) {
    const relPath = modPath.replace('../packages/', 'packages/');
    deobPath = path.join(deobDir, relPath.replace('.ts', '.js'));
    // modules-all stores ../packages/ as _parent_packages/
    extPath = path.join(extractedDir, '_parent_packages', modPath.replace('../packages/', ''));
  } else {
    deobPath = path.join(deobDir, modPath);
    extPath = path.join(extractedDir, modPath);
  }

  if (fs.existsSync(deobPath) && fs.statSync(deobPath).isFile()) {
    code = fs.readFileSync(deobPath, 'utf8');
    source = 'deobfuscated';
    fromDeob++;
  } else if (fs.existsSync(extPath) && fs.statSync(extPath).isFile()) {
    code = fs.readFileSync(extPath, 'utf8');
    source = 'extracted';
    fromExtracted++;
  } else {
    source = 'missing';
    missing++;
    code = `/* MODULE NOT FOUND: ${modPath} */`;
  }

  const cleanCode = stripHeaderComments(code);
  const { deps } = extractDependencyCalls(cleanCode);

  const srcRelPath = modPath.startsWith('../packages/')
    ? modPath.replace('../packages/', 'packages/').replace('.ts', '.js')
    : modPath;
  const outPath = path.join(cursorSrcDir, srcRelPath);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const header = [
    `// Source: ${modPath}`,
    `// Origin: ${source}`,
    deps.length > 0 ? `// Dependencies: ${deps.length} module-loader calls` : null,
    `// ---`,
    '',
  ].filter(Boolean).join('\n');

  const finalCode = header + cleanCode + '\n';
  fs.writeFileSync(outPath, finalCode);

  manifest[modPath] = {
    srcPath: srcRelPath,
    source,
    bytes: Buffer.byteLength(finalCode),
    deps: deps.length,
  };
  totalBytes += Buffer.byteLength(finalCode);
}

fs.writeFileSync(
  path.join(cursorSrcDir, 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log(`[cursor-src] Cursor modules: ${fromDeob} deobfuscated, ${fromExtracted} extracted, ${missing} missing`);
console.log(`[cursor-src] Total: ${Object.keys(manifest).length} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);

// --- Build packages/ui source ---
fs.mkdirSync(pkgUiSrcDir, { recursive: true });

const pkgUiDeob = path.join(deobDir, 'packages', 'ui', 'dist', 'bundle.js');
const pkgUiExtracted = path.join(extractedDir, 'packages', 'ui', 'dist', 'bundle.js');

let pkgUiCode, pkgUiSource;
if (fs.existsSync(pkgUiDeob)) {
  pkgUiCode = fs.readFileSync(pkgUiDeob, 'utf8');
  pkgUiSource = 'deobfuscated';
} else if (fs.existsSync(pkgUiExtracted)) {
  pkgUiCode = fs.readFileSync(pkgUiExtracted, 'utf8');
  pkgUiSource = 'extracted';
} else {
  pkgUiCode = '/* packages/ui/dist/bundle.js NOT FOUND */';
  pkgUiSource = 'missing';
}

const pkgUiClean = stripHeaderComments(pkgUiCode);
const pkgUiHeader = [
  '// Source: packages/ui/dist/bundle.js',
  `// Origin: ${pkgUiSource}`,
  `// Lines: ${pkgUiClean.split('\n').length}`,
  '// ---',
  '',
].join('\n');

fs.writeFileSync(path.join(pkgUiSrcDir, 'bundle.js'), pkgUiHeader + pkgUiClean + '\n');

const pkgUiManifest = {
  'packages/ui/dist/bundle.js': {
    srcPath: 'bundle.js',
    source: pkgUiSource,
    bytes: Buffer.byteLength(pkgUiClean),
    lines: pkgUiClean.split('\n').length,
  }
};
fs.writeFileSync(path.join(pkgUiSrcDir, 'manifest.json'), JSON.stringify(pkgUiManifest, null, 2));

console.log(`[packages-ui] ${pkgUiSource}: ${(Buffer.byteLength(pkgUiClean) / 1024 / 1024).toFixed(1)} MB, ${pkgUiClean.split('\n').length} lines`);

// --- Report ---
const report = {
  generatedAt: new Date().toISOString(),
  cursorModules: {
    total: Object.keys(manifest).length,
    fromDeobfuscated: fromDeob,
    fromExtracted: fromExtracted,
    missing,
    totalMB: (totalBytes / 1024 / 1024).toFixed(1),
    outputDir: 'recovered/cursor-src/',
  },
  packagesUi: {
    source: pkgUiSource,
    sizeMB: (Buffer.byteLength(pkgUiClean) / 1024 / 1024).toFixed(1),
    lines: pkgUiClean.split('\n').length,
    outputDir: 'recovered/packages-ui-src/',
  },
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`[report] ${reportPath}`);
