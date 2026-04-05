#!/usr/bin/env node

/**
 * Deep source recovery for Cursor-specific modules.
 *
 * Recovery techniques:
 *   1. E()-derived rename mappings (7364 global entries)
 *   2. Constructor parameter recovery: this._fooService = e → rename e to fooService
 *   3. xi("serviceName") → infer IServiceName interface variable
 *   4. Class name inference from file name + service registration
 *   5. Module-level JSDoc with subsystem/service/class info
 *   6. Full module body preserved (dep calls + class definitions)
 *
 * Input:  recovered/all-modules-deobfuscated/ (raw deobfuscated)
 * Output: recovered/cursor-recovered/ (properly recovered source code)
 *         mapped/cursor-recovery-report.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './paths.mjs';

const deobDir = path.join(ROOT, 'recovered', 'all-modules-deobfuscated');
const extractedDir = path.join(ROOT, 'recovered', 'binary-crack', 'modules-all');
const cursorRecoveredDir = path.join(ROOT, 'recovered', 'cursor-recovered');
const renameMappingPath = path.join(ROOT, 'mapped', 'v8-rename-mapping.json');
const archMapPath = path.join(ROOT, 'mapped', 'cursor-architecture-map.json');
const reportPath = path.join(ROOT, 'mapped', 'cursor-recovery-report.json');
const cursorSrcManifest = path.join(ROOT, 'recovered', 'cursor-src', 'manifest.json');

console.log('[recover] Loading data...');
const renameData = JSON.parse(fs.readFileSync(renameMappingPath, 'utf8'));
const globalRenames = new Map(Object.entries(renameData.allMappings));
const archMap = JSON.parse(fs.readFileSync(archMapPath, 'utf8'));
const manifest = JSON.parse(fs.readFileSync(cursorSrcManifest, 'utf8'));

// Purge dangerous mappings: JS keywords, common short words, and known false positives
const RENAME_BLACKLIST = new Set([
  // JS keywords
  'function', 'return', 'const', 'let', 'var', 'class', 'if', 'else', 'for', 'while',
  'switch', 'case', 'break', 'continue', 'new', 'this', 'true', 'false', 'null',
  'undefined', 'typeof', 'instanceof', 'void', 'delete', 'throw', 'try', 'catch',
  'finally', 'import', 'export', 'default', 'from', 'async', 'await', 'yield',
  'static', 'get', 'set', 'of', 'in', 'do', 'with', 'super', 'extends', 'implements',
  // Common short identifiers that appear in module paths/code and must not be renamed
  'agent', 'chat', 'composer', 'file', 'path', 'name', 'type', 'data', 'code',
  'text', 'list', 'node', 'last', 'next', 'prev', 'size', 'line', 'word', 'read',
  'write', 'open', 'close', 'start', 'stop', 'init', 'load', 'save', 'push', 'pull',
  'value', 'index', 'count', 'state', 'event', 'error', 'model', 'view', 'item',
  'key', 'map', 'log', 'run', 'end', 'add', 'use', 'has', 'can',
]);

let purged = 0;
for (const k of globalRenames.keys()) {
  if (RENAME_BLACKLIST.has(k) || k.length <= 2) {
    globalRenames.delete(k);
    purged++;
  }
}
console.log(`[recover] Purged ${purged} dangerous/short mappings`);
console.log(`[recover] ${globalRenames.size} safe global renames, ${Object.keys(manifest).length} modules`);

fs.mkdirSync(cursorRecoveredDir, { recursive: true });

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

// --- Helper: escape regex ---
function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// --- 1. Extract constructor parameter → service mappings ---
function recoverConstructorParams(code) {
  const paramMap = new Map();
  // Pattern: this._fooBarService=e, this._bazService=t, ...
  // or: this._fooBarService = e,
  const ctorRe = /this\.(_\w+)\s*=\s*(\w)\b/g;
  let m;
  while ((m = ctorRe.exec(code)) !== null) {
    const field = m[1]; // _composerDataService
    const param = m[2]; // e
    if (param.length === 1 && /^[a-z]$/.test(param)) {
      const name = field.replace(/^_/, '');
      paramMap.set(param, name);
    }
  }
  return paramMap;
}

// --- 2. Extract xi("serviceName") → variable mappings ---
function recoverServiceInterfaces(code) {
  const svcMap = new Map();
  const services = [];
  const xiRe = /(\w+)\s*=\s*xi\(\s*"(\w+)"\s*\)/g;
  let m;
  while ((m = xiRe.exec(code)) !== null) {
    const varName = m[1];
    const serviceId = m[2];
    // Convert "composerDataService" to "IComposerDataService"
    const interfaceName = 'I' + serviceId.charAt(0).toUpperCase() + serviceId.slice(1);
    svcMap.set(varName, interfaceName);
    services.push({ variable: varName, serviceId, interfaceName });
  }
  return { svcMap, services };
}

// --- 3. Infer class names from file name + context ---
function inferClassName(modPath, code) {
  const fileName = path.basename(modPath, path.extname(modPath));
  // PascalCase the file name
  const pascal = fileName.replace(/(^|[-_])(\w)/g, (_, __, c) => c.toUpperCase());

  // Find class declaration pattern: someVar=class extends BaseClass{
  const classRe = /(\w+)\s*=\s*class\s+extends\s+(\w+)\s*\{/g;
  const classes = [];
  let m;
  while ((m = classRe.exec(code)) !== null) {
    classes.push({ variable: m[1], extendsClass: m[2] });
  }

  const classMap = new Map();
  if (classes.length === 1) {
    classMap.set(classes[0].variable, pascal);
  } else if (classes.length > 1) {
    // Try to match based on being the "main" class (largest, or named after file)
    for (const cls of classes) {
      if (globalRenames.has(cls.variable)) {
        classMap.set(cls.variable, globalRenames.get(cls.variable));
      }
    }
    // If the first class isn't mapped yet, use the file name
    if (classes.length > 0 && !classMap.has(classes[0].variable)) {
      classMap.set(classes[0].variable, pascal);
    }
  }

  return { classes, classMap };
}

// --- 4. Apply all renames to code ---
function applyAllRenames(code, localMaps) {
  // Merge all local maps (they take priority over global)
  const combined = new Map();

  // Global renames (only >3 char minified names to avoid false positives)
  for (const [min, orig] of globalRenames) {
    if (min.length > 3) combined.set(min, orig);
  }

  // Local overrides
  for (const lm of localMaps) {
    for (const [min, orig] of lm) {
      combined.set(min, orig);
    }
  }

  if (combined.size === 0) return { code, renames: 0, details: [] };

  let renames = 0;
  const details = [];

  // Sort by minified length descending to avoid partial matches
  const sorted = [...combined.entries()].sort((a, b) => b[0].length - a[0].length);

  for (const [minified, original] of sorted) {
    const re = new RegExp(`\\b${esc(minified)}\\b`, 'g');
    let count = 0;
    code = code.replace(re, () => { count++; return original; });
    if (count > 0) {
      renames += count;
      details.push({ from: minified, to: original, count });
    }
  }

  return { code, renames, details };
}

// --- 5. Add import-style dependency comments ---
function formatDependencySection(depCalls) {
  if (depCalls.length === 0) return '';
  return `// Module dependencies (${depCalls.length} loader calls):\n` +
    `// ${depCalls.join(', ')}\n\n`;
}

// --- Extract dependency calls from start of module ---
function extractDeps(code) {
  const match = code.match(/^([A-Za-z$_][\w$]*\(\)[,\s]*)+/);
  if (!match) return { deps: [], body: code };
  const depsStr = match[0];
  const deps = [];
  const re = /([A-Za-z$_][\w$]*)\(\)/g;
  let m;
  while ((m = re.exec(depsStr)) !== null) deps.push(m[1]);
  const body = code.slice(depsStr.length).trim();
  return { deps, body };
}

// --- Subsystem from path ---
function getSubsystem(p) {
  let m = p.match(/contrib\/(\w+)\//);
  if (m) return m[1];
  m = p.match(/services\/(\w+)\//);
  if (m) return m[1];
  m = p.match(/platform\/(\w+)\//);
  if (m) return m[1];
  if (p.includes('../packages/')) {
    const pkg = p.match(/packages\/([^/]+)/);
    return pkg ? `pkg:${pkg[1]}` : 'packages';
  }
  return 'unknown';
}

// --- Read raw module code ---
function readRawModule(modPath) {
  let deobPath, extPath;
  if (modPath.startsWith('../packages/')) {
    const relPath = modPath.replace('../packages/', 'packages/');
    deobPath = path.join(deobDir, relPath.replace('.ts', '.js'));
    extPath = path.join(extractedDir, '_parent_packages', modPath.replace('../packages/', ''));
  } else {
    deobPath = path.join(deobDir, modPath);
    extPath = path.join(extractedDir, modPath);
  }

  if (fs.existsSync(deobPath) && fs.statSync(deobPath).isFile()) {
    return { code: fs.readFileSync(deobPath, 'utf8'), source: 'deobfuscated' };
  }
  if (fs.existsSync(extPath) && fs.statSync(extPath).isFile()) {
    return { code: fs.readFileSync(extPath, 'utf8'), source: 'extracted' };
  }
  return { code: null, source: 'missing' };
}

function stripDeobHeader(code) {
  const lines = code.split('\n');
  let i = 0;
  while (i < lines.length && lines[i].startsWith('//')) i++;
  while (i < lines.length && lines[i].trim() === '') i++;
  return lines.slice(i).join('\n');
}

// ===== MAIN PROCESSING =====
const stats = {
  total: 0, withRenames: 0, totalRenameOps: 0,
  totalCtorParams: 0, totalServiceIfaces: 0, totalClasses: 0,
  bySubsystem: {},
};
const moduleDetails = [];

for (const [modPath, info] of Object.entries(manifest)) {
  const { code: rawCode, source } = readRawModule(modPath);
  if (!rawCode) continue;

  const cleanCode = stripDeobHeader(rawCode);
  const { deps, body: codeBody } = extractDeps(cleanCode);
  const subsystem = getSubsystem(modPath);

  // Recover names from context
  const ctorParams = recoverConstructorParams(cleanCode);
  const { svcMap, services } = recoverServiceInterfaces(cleanCode);
  const { classes, classMap } = inferClassName(modPath, cleanCode);

  // Apply renames — ONLY module-level symbols, NOT single-letter scoped vars
  // Constructor params are scoped to constructor; renaming them globally corrupts other methods
  const { code: renamedCode, renames, details } = applyAllRenames(
    cleanCode,
    [svcMap, classMap] // no ctorParams — they're documentation only
  );

  // Build recovered file
  const headerParts = [`/**`, ` * @module ${modPath}`, ` * @subsystem ${subsystem}`];

  if (services.length > 0) {
    headerParts.push(` * @services ${services.map(s => `${s.serviceId} (${s.interfaceName})`).join(', ')}`);
  }
  if (classes.length > 0) {
    const clsStr = classes.map(c => {
      const name = classMap.get(c.variable) || globalRenames.get(c.variable) || c.variable;
      const base = globalRenames.get(c.extendsClass) || c.extendsClass;
      return `${name} extends ${base}`;
    });
    headerParts.push(` * @classes ${clsStr.join(', ')}`);
  }
  if (ctorParams.size > 0) {
    headerParts.push(` * @constructorParams ${ctorParams.size} recovered (${[...ctorParams.entries()].slice(0, 5).map(([k, v]) => `${k}→${v}`).join(', ')}${ctorParams.size > 5 ? '...' : ''})`);
  }
  if (renames > 0) {
    headerParts.push(` * @renames ${renames} applied across ${details.length} symbols`);
  }
  if (deps.length > 0) {
    headerParts.push(` * @dependencies ${deps.length} modules`);
  }
  headerParts.push(` */`, '');

  let finalCode = headerParts.join('\n');

  if (deps.length > 0) {
    finalCode += formatDependencySection(deps);
  }

  // Keep the full module body including inline variable declarations
  finalCode += renamedCode + '\n';

  // Write output
  const outRelPath = modPath.startsWith('../packages/')
    ? modPath.replace('../packages/', 'packages/').replace('.ts', '.js')
    : modPath;
  const outFile = path.join(cursorRecoveredDir, outRelPath);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, finalCode);

  stats.total++;
  if (renames > 0) stats.withRenames++;
  stats.totalRenameOps += renames;
  stats.totalCtorParams += ctorParams.size;
  stats.totalServiceIfaces += services.length;
  stats.totalClasses += classes.length;
  stats.bySubsystem[subsystem] = (stats.bySubsystem[subsystem] || 0) + 1;

  moduleDetails.push({
    modPath, subsystem, source,
    ctorParams: ctorParams.size,
    services: services.map(s => s.serviceId),
    classes: classes.map(c => ({
      minified: c.variable,
      recovered: classMap.get(c.variable) || globalRenames.get(c.variable) || c.variable,
      extends: c.extendsClass,
    })),
    renames, renameDetails: details.length,
    deps: deps.length,
    bytes: Buffer.byteLength(finalCode),
  });
}

// --- Summary ---
console.log(`\n[recover] === Recovery Summary ===`);
console.log(`  Modules: ${stats.total}`);
console.log(`  With renames: ${stats.withRenames}`);
console.log(`  Total rename operations: ${stats.totalRenameOps}`);
console.log(`  Constructor params recovered: ${stats.totalCtorParams}`);
console.log(`  Service interfaces found: ${stats.totalServiceIfaces}`);
console.log(`  Classes found: ${stats.totalClasses}`);
console.log(`  Subsystems:`);
for (const [sub, cnt] of Object.entries(stats.bySubsystem).sort((a, b) => b[1] - a[1])) {
  console.log(`    ${sub}: ${cnt}`);
}

const topByRenames = moduleDetails.sort((a, b) => b.renames - a.renames).slice(0, 10);
console.log(`\n  Top 10 by renames:`);
for (const m of topByRenames) {
  console.log(`    ${m.modPath} — ${m.renames} renames, ${m.ctorParams} ctor params, ${m.services.length} svc`);
}

const totalBytes = moduleDetails.reduce((s, m) => s + m.bytes, 0);
console.log(`\n  Total output: ${(totalBytes / 1024 / 1024).toFixed(1)} MB across ${stats.total} files`);

const report = {
  generatedAt: new Date().toISOString(),
  stats,
  topByRenames: topByRenames.map(m => ({ path: m.modPath, renames: m.renames, ctorParams: m.ctorParams, services: m.services })),
  allModules: moduleDetails,
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`[recover] Output: ${cursorRecoveredDir}`);
console.log(`[recover] Report: ${reportPath}`);
