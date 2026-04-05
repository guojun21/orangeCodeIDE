#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import * as vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const deobfuscatedRenamedPath = path.join(
  ROOT,
  'recovered',
  'packages-ui',
  'deobfuscated',
  'deobfuscated-renamed.js'
);
const deobfuscatedPath = path.join(
  ROOT,
  'recovered',
  'packages-ui',
  'deobfuscated',
  'deobfuscated.js'
);
const partitionPath = path.join(ROOT, 'mapped', 'packages-ui-partition.json');
const symbolIndexPath = path.join(ROOT, 'mapped', 'cursor-ui-symbol-index.json');
const candidateDir = path.join(ROOT, 'recovered', 'candidate-source', 'packages-ui');
const analysisDir = path.join(ROOT, 'recovered', 'analysis', 'packages-ui-v2');
const resultPath = path.join(ROOT, 'mapped', 'packages-ui-v2-extraction.json');

const TARGETS = [
  {
    id: 'Streamdown',
    regionId: 'streamdown-markdown',
    entrySymbols: ['Streamdown'],
    startSymbol: 'Streamdown',
    endSymbol: 'Streamdown',
    startOccurrence: 'first',
    endOccurrence: 'last',
    startBeforeLines: 50,
    endBeyondLines: 200,
  },
  {
    id: 'FileTree',
    regionId: 'file-tree',
    entrySymbols: ['LazyFileTreeController', 'FileTree', 'FilterTabBar'],
    startSymbol: 'LazyFileTreeController',
    endSymbol: 'FilterTabBar',
    startOccurrence: 'last',
    endOccurrence: 'last',
    startBeforeLines: 200,
    endBeyondLines: 40,
  },
  {
    id: 'Lightbox',
    regionId: 'lightbox',
    entrySymbols: ['Lightbox', 'LightboxGrid', 'LightboxPortal', 'LightboxBackdrop', 'LightboxPopup'],
    startSymbol: 'Lightbox',
    endSymbol: 'LightboxPopup',
    startOccurrence: 'first',
    endOccurrence: 'last',
    startBeforeLines: 0,
    endBeyondLines: 24,
  },
  {
    id: 'ModelPicker',
    regionId: 'model-picker',
    entrySymbols: ['ModelPickerProvider', 'ModelPickerMenuContent', 'ModelPickerInner'],
    startSymbol: 'ModelPickerProvider',
    endSymbol: 'ModelPickerInner',
    startOccurrence: 'first',
    endOccurrence: 'last',
    startBeforeLines: 90,
    endBeyondLines: 80,
  },
  {
    id: 'PlanTodosSection',
    regionId: 'plan-and-agent-ui',
    entrySymbols: ['AgentRow', 'PlanAgentList', 'PlanTodosSection'],
    startSymbol: 'AgentRow',
    endSymbol: 'PlanTodosSection',
    startOccurrence: 'first',
    endOccurrence: 'last',
    startBeforeLines: 30,
    endBeyondLines: 100,
  },
];

function parseWithAcorn(code) {
  try {
    parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      allowReturnOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowAwaitOutsideFunction: true,
    });
    return { ok: true, error: null };
  } catch (error) {
    return {
      ok: false,
      error: `${error.message}${error.loc?.line ? ` at line ${error.loc.line}` : ''}`,
    };
  }
}

function parseWithVm(code, filename) {
  try {
    new vm.Script(code, { filename });
    return { ok: true, error: null };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function findScopeEnd(lines, startLine, maxScanLines) {
  let depth = 0;
  let foundOpen = false;
  const maxLine = Math.min(lines.length, startLine + maxScanLines);
  for (let lineIndex = startLine - 1; lineIndex < maxLine; lineIndex += 1) {
    for (const ch of lines[lineIndex]) {
      if (ch === '{') {
        depth += 1;
        foundOpen = true;
      } else if (ch === '}') {
        depth -= 1;
      }
      if (foundOpen && depth === 0) {
        return lineIndex + 1;
      }
    }
  }
  return maxLine;
}

function getRegion(partition, regionId) {
  return partition.regions.find(region => region.id === regionId);
}

function collectSymbolLines(symbolIndex, symbolName, lineRange) {
  return symbolIndex.symbols
    .filter(
      symbol =>
        symbol.symbolName === symbolName &&
        symbol.line >= lineRange.start &&
        symbol.line <= lineRange.endInclusive
    )
    .map(symbol => symbol.line)
    .sort((a, b) => a - b);
}

function pickOccurrence(lines, occurrence) {
  if (lines.length === 0) {
    return -1;
  }
  return occurrence === 'last' ? lines[lines.length - 1] : lines[0];
}

function relativePath(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function formatWithJsBeautify(code) {
  return execFileSync(
    'npx',
    ['--yes', 'js-beautify', '--type', 'js'],
    {
      cwd: ROOT,
      input: code,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }
  );
}

const sourcePath = fs.existsSync(deobfuscatedRenamedPath)
  ? deobfuscatedRenamedPath
  : deobfuscatedPath;
const source = fs.readFileSync(sourcePath, 'utf8');
const lines = source.split('\n');
const partition = JSON.parse(fs.readFileSync(partitionPath, 'utf8'));
const symbolIndex = JSON.parse(fs.readFileSync(symbolIndexPath, 'utf8'));

fs.mkdirSync(candidateDir, { recursive: true });
fs.mkdirSync(analysisDir, { recursive: true });

const results = [];

for (const target of TARGETS) {
  const region = getRegion(partition, target.regionId);
  if (!region) {
    results.push({
      id: target.id,
      status: 'region-missing',
      regionId: target.regionId,
    });
    console.error(`[SKIP] ${target.id}: region ${target.regionId} not found`);
    continue;
  }

  const startCandidates = collectSymbolLines(symbolIndex, target.startSymbol, region.lineRange);
  const endCandidates = collectSymbolLines(symbolIndex, target.endSymbol, region.lineRange);
  const startAnchorLine = pickOccurrence(startCandidates, target.startOccurrence);
  const endAnchorLine = pickOccurrence(endCandidates, target.endOccurrence);

  if (startAnchorLine < 0 || endAnchorLine < 0) {
    results.push({
      id: target.id,
      status: 'anchor-missing',
      regionId: target.regionId,
      startSymbol: target.startSymbol,
      endSymbol: target.endSymbol,
    });
    console.error(`[SKIP] ${target.id}: anchor missing (${target.startSymbol} / ${target.endSymbol})`);
    continue;
  }

  const startLine = Math.max(
    region.lineRange.start,
    startAnchorLine - (target.startBeforeLines ?? 0)
  );
  const rawEndLine = Math.min(
    region.lineRange.endInclusive,
    endAnchorLine + (target.endBeyondLines ?? 0)
  );
  const scopeEnd = findScopeEnd(lines, endAnchorLine, target.endBeyondLines ?? 200);
  const endLine = Math.max(rawEndLine, Math.min(scopeEnd, region.lineRange.endInclusive));

  const extracted = lines.slice(startLine - 1, endLine).join('\n');
  const acornResult = parseWithAcorn(extracted);
  const vmResult = parseWithVm(extracted, `${target.id}.js`);
  const parseable = acornResult.ok && vmResult.ok;
  const finalCode = parseable ? formatWithJsBeautify(extracted) : extracted;

  const outputBaseDir = parseable ? candidateDir : analysisDir;
  const outputPath = path.join(outputBaseDir, `${target.id}.js`);
  const header = [
    `// Component: ${target.id}`,
    `// Source: ${relativePath(sourcePath)}`,
    `// Region: ${target.regionId} (${region.lineRange.start}-${region.lineRange.endInclusive})`,
    `// Lines: ${startLine}-${endLine} (${endLine - startLine + 1} lines)`,
    `// Entry symbols: ${target.entrySymbols.join(', ')}`,
    '',
  ].join('\n');

  fs.writeFileSync(outputPath, header + finalCode);

  results.push({
    id: target.id,
    status: parseable ? 'candidate' : 'analysis',
    regionId: target.regionId,
    file: relativePath(outputPath),
    startLine,
    endLine,
    lineCount: endLine - startLine + 1,
    bytes: Buffer.byteLength(finalCode),
    entrySymbols: target.entrySymbols,
    anchors: {
      startSymbol: target.startSymbol,
      startAnchorLine,
      endSymbol: target.endSymbol,
      endAnchorLine,
    },
    parse: {
      acornParseable: acornResult.ok,
      acornError: acornResult.error,
      vmScriptParseable: vmResult.ok,
      vmError: vmResult.error,
    },
  });

  console.log(
    `[${parseable ? 'CANDIDATE' : 'ANALYSIS'}] ${target.id}: ${startLine}-${endLine} (${endLine - startLine + 1} lines)`
  );
}

const output = {
  generatedAt: new Date().toISOString(),
  sourcePath: relativePath(sourcePath),
  candidateDir: relativePath(candidateDir),
  analysisDir: relativePath(analysisDir),
  totalTargets: TARGETS.length,
  candidateCount: results.filter(result => result.status === 'candidate').length,
  analysisCount: results.filter(result => result.status === 'analysis').length,
  skippedCount: results.filter(result => result.status !== 'candidate' && result.status !== 'analysis').length,
  results,
};

fs.writeFileSync(resultPath, JSON.stringify(output, null, 2));
console.log(`Result: ${relativePath(resultPath)}`);
