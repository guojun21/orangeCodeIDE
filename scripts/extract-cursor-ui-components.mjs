#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const deobfuscatedPath = path.join(ROOT, 'recovered', 'packages-ui', 'deobfuscated', 'deobfuscated.js');
const symbolIndexPath = path.join(ROOT, 'mapped', 'cursor-ui-symbol-index.json');
const outputDir = path.join(ROOT, 'recovered', 'packages-ui-components');
const resultPath = path.join(ROOT, 'mapped', 'packages-ui-component-extraction.json');

const TARGETS = [
  {
    id: 'ModelPicker',
    entrySymbols: ['ModelPickerProvider', 'ModelPickerMenuContent', 'ModelPickerInner'],
    startAnchor: 'parametersToMap',
    endAnchor: 'ModelPickerInner',
    endBeyondLines: 40,
  },
  {
    id: 'FileTree',
    entrySymbols: ['LazyFileTreeController', 'FileTree'],
    startAnchor: 'LazyFileTreeController',
    startBeforeLines: 200,
    endAnchor: 'FilterTabBar',
    endBeyondLines: 0,
  },
  {
    id: 'Lightbox',
    entrySymbols: ['Lightbox', 'LightboxGrid', 'LightboxPortal', 'LightboxBackdrop', 'LightboxPopup'],
    startAnchor: 'useLightboxContext',
    endAnchor: 'LightboxClose',
    endBeyondLines: 20,
  },
  {
    id: 'PlanTodosSection',
    entrySymbols: ['PlanTodosSection', 'TodoRow', 'PhaseBlock', 'PlanAgentList'],
    startAnchor: 'createToggleSelectionAction',
    endAnchor: 'PlanTodosSection',
    endBeyondLines: 120,
  },
  {
    id: 'Streamdown',
    entrySymbols: ['Streamdown'],
    startAnchor: 'Streamdown',
    startBeforeLines: 50,
    endAnchor: 'Streamdown',
    endBeyondLines: 200,
  },
];

const source = fs.readFileSync(deobfuscatedPath, 'utf8');
const lines = source.split('\n');
const symbolIndex = JSON.parse(fs.readFileSync(symbolIndexPath, 'utf8'));

function findLineOfSymbol(symbolName) {
  const hit = symbolIndex.symbols.find(s => s.symbolName === symbolName);
  return hit ? hit.line : -1;
}

function findDefinitionLine(name) {
  const pattern = `E(`;
  const nameQuoted = `"${name}"`;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(pattern) && lines[i].includes(nameQuoted)) {
      return i + 1;
    }
  }
  return findLineOfSymbol(name);
}

function findScopeEnd(startLine, maxScan = 500) {
  let depth = 0;
  let foundOpen = false;
  for (let i = startLine - 1; i < Math.min(startLine + maxScan, lines.length); i++) {
    for (const ch of lines[i]) {
      if (ch === '{') { depth++; foundOpen = true; }
      if (ch === '}') { depth--; }
      if (foundOpen && depth === 0) return i + 1;
    }
  }
  return startLine + maxScan;
}

fs.mkdirSync(outputDir, { recursive: true });

const results = [];

for (const target of TARGETS) {
  const anchorStart = findDefinitionLine(target.startAnchor);
  const anchorEnd = findDefinitionLine(target.endAnchor);

  if (anchorStart < 0 || anchorEnd < 0) {
    console.error(`[SKIP] ${target.id}: anchor not found (start=${anchorStart} end=${anchorEnd})`);
    results.push({ id: target.id, status: 'anchor-not-found', anchorStart, anchorEnd });
    continue;
  }

  const startLine = Math.max(1, anchorStart - (target.startBeforeLines || 0));
  const rawEnd = anchorEnd + (target.endBeyondLines || 0);
  const scopeEnd = findScopeEnd(anchorEnd, target.endBeyondLines || 200);
  const endLine = Math.max(rawEnd, scopeEnd);

  const extracted = lines.slice(startLine - 1, endLine).join('\n');
  const outFile = path.join(outputDir, `${target.id}.js`);

  const header = [
    `// Component: ${target.id}`,
    `// Source: recovered/packages-ui/deobfuscated/deobfuscated.js`,
    `// Lines: ${startLine}-${endLine} (${endLine - startLine + 1} lines)`,
    `// Entry symbols: ${target.entrySymbols.join(', ')}`,
    `// Extracted at: ${new Date().toISOString()}`,
    '',
  ].join('\n');

  fs.writeFileSync(outFile, header + extracted);

  let syntaxOk = false;
  try {
    new Function(extracted);
    syntaxOk = true;
  } catch {
    try {
      await import('node:vm').then(vm => {
        new vm.Script(extracted, { filename: `${target.id}.js` });
        syntaxOk = true;
      });
    } catch {
      syntaxOk = false;
    }
  }

  const symbolsInRange = symbolIndex.symbols.filter(
    s => s.line >= startLine && s.line <= endLine
  );

  const componentCount = symbolsInRange.filter(s => s.kind === 'component').length;
  const functionCount = symbolsInRange.filter(s => s.kind === 'function').length;

  const result = {
    id: target.id,
    status: 'extracted',
    file: path.relative(ROOT, outFile),
    startLine,
    endLine,
    lineCount: endLine - startLine + 1,
    bytes: Buffer.byteLength(extracted),
    syntaxValid: syntaxOk,
    symbolsInRange: symbolsInRange.length,
    componentCount,
    functionCount,
    entrySymbols: target.entrySymbols,
  };

  results.push(result);
  console.log(`[OK] ${target.id}: lines ${startLine}-${endLine} (${result.lineCount} lines, ${result.bytes} bytes, syntax=${syntaxOk ? 'ok' : 'FAIL'}, ${componentCount} components, ${functionCount} functions)`);
}

const output = {
  generatedAt: new Date().toISOString(),
  sourcePath: path.relative(ROOT, deobfuscatedPath),
  outputDir: path.relative(ROOT, outputDir),
  totalTargets: TARGETS.length,
  extracted: results.filter(r => r.status === 'extracted').length,
  results,
};

fs.writeFileSync(resultPath, JSON.stringify(output, null, 2));
console.log(`\nResult: ${resultPath}`);
console.log(`Components dir: ${outputDir}`);
