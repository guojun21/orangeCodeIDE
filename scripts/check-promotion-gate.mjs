#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const componentsDir = path.join(ROOT, 'recovered', 'packages-ui-components');
const symbolIndexPath = path.join(ROOT, 'mapped', 'cursor-ui-symbol-index.json');
const partitionPath = path.join(ROOT, 'mapped', 'packages-ui-partition.json');
const extractionPath = path.join(ROOT, 'mapped', 'packages-ui-component-extraction.json');
const outputPath = path.join(ROOT, 'mapped', 'promotion-gate-result.json');

const symbolIndex = JSON.parse(fs.readFileSync(symbolIndexPath, 'utf8'));
const partition = JSON.parse(fs.readFileSync(partitionPath, 'utf8'));
const extraction = JSON.parse(fs.readFileSync(extractionPath, 'utf8'));

const CURSOR_OWN_REGIONS = partition.regions
  .filter(r => r.classification === 'cursor-own')
  .map(r => r.id);

const candidates = [];

for (const comp of extraction.results) {
  if (comp.status !== 'extracted') continue;

  const filePath = path.join(ROOT, comp.file);
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, 'utf8');
  const codeStart = content.indexOf('\n\n');
  const code = codeStart >= 0 ? content.slice(codeStart + 2) : content;

  const gates = {};

  // Gate 1: acorn parse
  try {
    parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      allowReturnOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowAwaitOutsideFunction: true,
    });
    gates.acornParseable = true;
  } catch {
    gates.acornParseable = false;
  }

  // Gate 2: contains Cursor-own component names
  const cursorSymbols = comp.entrySymbols.filter(sym =>
    symbolIndex.symbols.some(s => s.symbolName === sym && s.kind === 'component')
  );
  gates.hasCursorOwnSymbols = cursorSymbols.length > 0;
  gates.cursorSymbolCount = cursorSymbols.length;

  // Gate 3: React component structure (props/render pattern)
  const hasJsx = /Ce\(|createElement\(/.test(code);
  const hasProps = /\bprops\b|\.\bchildren\b|\.className\b/.test(code);
  const hasHooks = /useState|useRef|useEffect|useCallback|useMemo|xr\(/.test(code);
  gates.hasReactStructure = hasJsx || (hasProps && hasHooks);

  // Gate 4: symbol index coverage
  const symbolsInComp = symbolIndex.symbols.filter(
    s => s.line >= comp.startLine && s.line <= comp.endLine
  );
  gates.symbolIndexCoverage = symbolsInComp.length;

  // Gate 5: static gate verification (symbol + anchor + syntax)
  gates.staticGateScore = (
    (gates.acornParseable ? 2 : 0) +
    (gates.hasCursorOwnSymbols ? 2 : 0) +
    (gates.hasReactStructure ? 1 : 0) +
    (gates.symbolIndexCoverage > 5 ? 1 : 0)
  );

  const gateReady = gates.staticGateScore >= 3;

  const candidate = {
    id: comp.id,
    file: comp.file,
    lineCount: comp.lineCount,
    bytes: comp.bytes,
    gates,
    gateReady,
    recommendation: gateReady
      ? (gates.acornParseable ? 'promote' : 'promote-with-wrapper')
      : 'needs-work',
  };

  candidates.push(candidate);

  const icon = gateReady ? '✓' : '○';
  console.log(`${icon} ${comp.id}: score=${gates.staticGateScore}/6 acorn=${gates.acornParseable} cursor=${cursorSymbols.length} react=${gates.hasReactStructure} symbols=${gates.symbolIndexCoverage} → ${candidate.recommendation}`);
}

const gateReadyCount = candidates.filter(c => c.gateReady).length;

const output = {
  generatedAt: new Date().toISOString(),
  totalCandidates: candidates.length,
  gateReadyCount,
  promoteCandidates: candidates.filter(c => c.recommendation === 'promote').map(c => c.id),
  promoteWithWrapperCandidates: candidates.filter(c => c.recommendation === 'promote-with-wrapper').map(c => c.id),
  cursorOwnRegions: CURSOR_OWN_REGIONS,
  candidates,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`\nGate-ready: ${gateReadyCount}/${candidates.length}`);
console.log(`Result: ${outputPath}`);
