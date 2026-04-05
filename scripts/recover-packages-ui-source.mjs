#!/usr/bin/env node

/**
 * Source recovery for packages/ui — extracts Cursor UI components from the
 * 102K-line deobfuscated bundle into individual files with name recovery.
 *
 * Strategy:
 *   1. Use symbol index to locate component boundaries
 *   2. Extract E()-derived name regions as individual component files
 *   3. Apply global rename mappings
 *   4. Split into: Cursor-own components / third-party libraries / proto definitions
 *
 * Input:
 *   - recovered/packages-ui/deobfuscated/deobfuscated-renamed.js (with E() renames)
 *   - mapped/cursor-ui-symbol-index.json (11,401 symbols)
 *   - mapped/v8-rename-mapping.json (7,364 mappings)
 *
 * Output:
 *   - recovered/packages-ui-recovered/components/ (Cursor UI components)
 *   - recovered/packages-ui-recovered/proto/ (protobuf definitions)
 *   - recovered/packages-ui-recovered/third-party/ (embedded libraries)
 *   - recovered/packages-ui-recovered/manifest.json
 *   - mapped/packages-ui-recovery-report.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './paths.mjs';

const deobFile = path.join(ROOT, 'recovered', 'packages-ui', 'deobfuscated', 'deobfuscated-renamed.js');
const deobFallback = path.join(ROOT, 'recovered', 'packages-ui', 'deobfuscated', 'deobfuscated.js');
const symbolIndexPath = path.join(ROOT, 'mapped', 'cursor-ui-symbol-index.json');
const renameMappingPath = path.join(ROOT, 'mapped', 'v8-rename-mapping.json');
const outputDir = path.join(ROOT, 'recovered', 'packages-ui-recovered');
const reportPath = path.join(ROOT, 'mapped', 'packages-ui-recovery-report.json');

console.log('[ui-recover] Loading data...');

const srcPath = fs.existsSync(deobFile) ? deobFile : deobFallback;
const source = fs.readFileSync(srcPath, 'utf8');
const sourceLines = source.split('\n');
console.log(`[ui-recover] Source: ${srcPath.split('/').pop()} (${sourceLines.length} lines, ${(Buffer.byteLength(source)/1024/1024).toFixed(1)} MB)`);

const symbolIndex = JSON.parse(fs.readFileSync(symbolIndexPath, 'utf8'));
const renameData = JSON.parse(fs.readFileSync(renameMappingPath, 'utf8'));
const globalRenames = new Map(Object.entries(renameData.allMappings));

const RENAME_BLACKLIST = new Set([
  'function', 'return', 'const', 'let', 'var', 'class', 'if', 'else', 'for', 'while',
  'switch', 'case', 'break', 'continue', 'new', 'this', 'true', 'false', 'null',
  'undefined', 'typeof', 'instanceof', 'void', 'delete', 'throw', 'try', 'catch',
  'finally', 'import', 'export', 'default', 'from', 'async', 'await', 'yield',
  'static', 'get', 'set', 'of', 'in', 'do', 'with', 'super', 'extends', 'implements',
  'agent', 'chat', 'composer', 'file', 'path', 'name', 'type', 'data', 'code',
  'text', 'list', 'node', 'last', 'next', 'prev', 'size', 'line', 'word', 'read',
  'write', 'open', 'close', 'start', 'stop', 'init', 'load', 'save', 'push', 'pull',
  'value', 'index', 'count', 'state', 'event', 'error', 'model', 'view', 'item',
  'key', 'map', 'log', 'run', 'end', 'add', 'use', 'has', 'can',
]);
for (const k of globalRenames.keys()) {
  if (RENAME_BLACKLIST.has(k) || k.length <= 2) globalRenames.delete(k);
}

// --- Define extraction regions based on known component locations ---
// From the architecture analysis, Cursor-own UI is concentrated in specific line ranges
const COMPONENT_EXTRACTIONS = [
  { name: 'Streamdown', startLine: 18050, endLine: 18400, category: 'components' },
  { name: 'CodeBlock', startLine: 289900, endLine: 292500, category: 'components' },
  { name: 'ComposerExternalLink', startLine: 292500, endLine: 293000, category: 'components' },
  { name: 'DiffProvider', startLine: 315350, endLine: 316000, category: 'components' },
  { name: 'FileTree', startLine: 336600, endLine: 337100, category: 'components' },
  { name: 'DiffContent-v2', startLine: 358780, endLine: 359080, category: 'components' },
  { name: 'LazyFileTreeController', startLine: 359080, endLine: 359250, category: 'components' },
  { name: 'FilterTabBar', startLine: 359250, endLine: 359260, category: 'components' },
  { name: 'Lightbox', startLine: 359255, endLine: 359400, category: 'components' },
  { name: 'ModelPicker', startLine: 359390, endLine: 359540, category: 'components' },
  { name: 'AgentRow', startLine: 359530, endLine: 359560, category: 'components' },
  { name: 'PlanTodosSection', startLine: 359555, endLine: 359600, category: 'components' },
  { name: 'CodeBlockHighlight', startLine: 359600, endLine: 359800, category: 'components' },
  { name: 'ContextMenu', startLine: 437700, endLine: 437800, category: 'components' },
];

// Proto definitions region
const PROTO_EXTRACTIONS = [
  { name: 'proto-aiserver', startLine: 41000, endLine: 51000, category: 'proto' },
  { name: 'proto-lsp', startLine: 51000, endLine: 55000, category: 'proto' },
];

// Third-party library regions (approximate)
const THIRDPARTY_EXTRACTIONS = [
  { name: 'react-dom', startLine: 55000, endLine: 75000, category: 'third-party' },
  { name: 'prosemirror', startLine: 100000, endLine: 130000, category: 'third-party' },
  { name: 'mermaid', startLine: 130000, endLine: 190000, category: 'third-party' },
  { name: 'shiki', startLine: 195000, endLine: 250000, category: 'third-party' },
  { name: 'cytoscape', startLine: 79000, endLine: 84000, category: 'third-party' },
];

function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function applyRenames(code) {
  let renames = 0;
  const sorted = [...globalRenames.entries()]
    .filter(([k]) => k.length > 3)
    .sort((a, b) => b[0].length - a[0].length);
  for (const [minified, original] of sorted) {
    const re = new RegExp(`\\b${esc(minified)}\\b`, 'g');
    let count = 0;
    code = code.replace(re, () => { count++; return original; });
    if (count > 0) renames += count;
  }
  return { code, renames };
}

function extractRegion(startLine, endLine) {
  const start = Math.max(0, startLine - 1);
  const end = Math.min(sourceLines.length, endLine);
  return sourceLines.slice(start, end).join('\n');
}

// --- Extract all regions ---
fs.mkdirSync(path.join(outputDir, 'components'), { recursive: true });
fs.mkdirSync(path.join(outputDir, 'proto'), { recursive: true });
fs.mkdirSync(path.join(outputDir, 'third-party'), { recursive: true });

const allExtractions = [...COMPONENT_EXTRACTIONS, ...PROTO_EXTRACTIONS, ...THIRDPARTY_EXTRACTIONS];
const manifest = {};
const extractionResults = [];

for (const ext of allExtractions) {
  const raw = extractRegion(ext.startLine, ext.endLine);
  const lineCount = ext.endLine - ext.startLine;

  let finalCode, renameCount;
  if (ext.category === 'third-party') {
    // Don't rename third-party code
    finalCode = raw;
    renameCount = 0;
  } else {
    const { code, renames } = applyRenames(raw);
    finalCode = code;
    renameCount = renames;
  }

  // Find E() names in this region
  const eNames = [];
  const eRe = /E\((\w+),\s*"(\w+)"\)/g;
  let m;
  while ((m = eRe.exec(raw)) !== null) {
    if (m[1] !== m[2]) eNames.push({ minified: m[1], original: m[2] });
  }

  const header = [
    `/**`,
    ` * @component ${ext.name}`,
    ` * @source packages/ui/dist/bundle.js lines ${ext.startLine}-${ext.endLine}`,
    ` * @category ${ext.category}`,
    eNames.length > 0 ? ` * @recoveredNames ${eNames.map(n => n.original).join(', ')}` : null,
    renameCount > 0 ? ` * @renames ${renameCount}` : null,
    ` */`,
    '',
  ].filter(Boolean).join('\n');

  const outPath = path.join(outputDir, ext.category, `${ext.name}.js`);
  fs.writeFileSync(outPath, header + finalCode + '\n');

  const bytes = Buffer.byteLength(header + finalCode);
  manifest[ext.name] = {
    category: ext.category,
    lines: lineCount,
    bytes,
    renames: renameCount,
    eNames: eNames.length,
    file: `${ext.category}/${ext.name}.js`,
  };

  extractionResults.push({
    name: ext.name,
    category: ext.category,
    lines: lineCount,
    bytes,
    renames: renameCount,
    eNames: eNames.length,
  });

  console.log(`[ui-recover] ${ext.category}/${ext.name}: ${lineCount} lines, ${renameCount} renames, ${eNames.length} E() names`);
}

// --- Also extract remaining "gap" regions as misc chunks ---
console.log('\n[ui-recover] Extracting remaining regions...');

// Find gaps between extractions
const coveredRanges = allExtractions.map(e => [e.startLine, e.endLine]).sort((a, b) => a[0] - b[0]);
let lastEnd = 0;
const gaps = [];
for (const [start, end] of coveredRanges) {
  if (start > lastEnd + 100) {
    gaps.push({ start: lastEnd, end: start });
  }
  lastEnd = Math.max(lastEnd, end);
}
if (lastEnd < sourceLines.length) {
  gaps.push({ start: lastEnd, end: sourceLines.length });
}

// Save large gaps as misc chunks
fs.mkdirSync(path.join(outputDir, 'misc'), { recursive: true });
let miscTotal = 0;
for (const gap of gaps) {
  if (gap.end - gap.start < 500) continue;
  const raw = extractRegion(gap.start, gap.end);
  const chunkName = `lines-${gap.start}-${gap.end}`;
  const outPath = path.join(outputDir, 'misc', `${chunkName}.js`);

  const header = `/**\n * @chunk ${chunkName}\n * @source packages/ui/dist/bundle.js lines ${gap.start}-${gap.end}\n */\n\n`;
  fs.writeFileSync(outPath, header + raw + '\n');
  miscTotal++;
}
console.log(`[ui-recover] ${miscTotal} misc chunks for uncovered regions`);

// --- Write manifest ---
fs.writeFileSync(path.join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

// --- Report ---
const totalBytes = extractionResults.reduce((s, e) => s + e.bytes, 0);
const totalRenames = extractionResults.reduce((s, e) => s + e.renames, 0);

const report = {
  generatedAt: new Date().toISOString(),
  sourceFile: srcPath.split('/').pop(),
  sourceLines: sourceLines.length,
  extractions: {
    components: extractionResults.filter(e => e.category === 'components').length,
    proto: extractionResults.filter(e => e.category === 'proto').length,
    thirdParty: extractionResults.filter(e => e.category === 'third-party').length,
    miscChunks: miscTotal,
  },
  totalExtractedMB: (totalBytes / 1024 / 1024).toFixed(1),
  totalRenames,
  details: extractionResults,
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`\n[ui-recover] Output: ${outputDir}`);
console.log(`[ui-recover] ${extractionResults.length} named extractions, ${miscTotal} misc chunks`);
console.log(`[ui-recover] ${(totalBytes / 1024 / 1024).toFixed(1)} MB extracted, ${totalRenames} renames`);
console.log(`[ui-recover] Report: ${reportPath}`);
