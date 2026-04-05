#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const extractionPath = path.join(ROOT, 'mapped', 'packages-ui-v2-extraction.json');
const symbolIndexPath = path.join(ROOT, 'mapped', 'cursor-ui-symbol-index.json');
const outputPath = path.join(ROOT, 'mapped', 'promotion-gate-v2-result.json');

const extraction = JSON.parse(fs.readFileSync(extractionPath, 'utf8'));
const symbolIndex = JSON.parse(fs.readFileSync(symbolIndexPath, 'utf8'));

const candidates = [];

for (const item of extraction.results) {
  const filePath = path.join(ROOT, item.file);
  const fileExists = fs.existsSync(filePath);
  const content = fileExists ? fs.readFileSync(filePath, 'utf8') : '';
  const symbolCoverage = symbolIndex.symbols.filter(
    symbol => symbol.line >= item.startLine && symbol.line <= item.endLine
  ).length;
  const entrySymbolHits = (item.entrySymbols ?? []).filter(symbolName =>
    content.includes(symbolName)
  );

  const gates = {
    extractedIntoCandidateSource: item.status === 'candidate',
    acornParseable: item.parse?.acornParseable === true,
    vmScriptParseable: item.parse?.vmScriptParseable === true,
    lineCountOk: item.lineCount >= 20,
    fileExists,
    symbolCoverage,
    entrySymbolHitCount: entrySymbolHits.length,
  };

  const strictGateReady =
    gates.extractedIntoCandidateSource &&
    gates.acornParseable &&
    gates.vmScriptParseable &&
    gates.lineCountOk &&
    gates.fileExists &&
    gates.symbolCoverage > 0;

  const candidate = {
    id: item.id,
    file: item.file,
    status: item.status,
    lineCount: item.lineCount,
    bytes: item.bytes,
    gates,
    strictGateReady,
    recommendation: strictGateReady ? 'promote' : 'analysis',
  };

  candidates.push(candidate);
  const icon = strictGateReady ? '✓' : '○';
  console.log(
    `${icon} ${item.id}: candidate=${gates.extractedIntoCandidateSource} acorn=${gates.acornParseable} vm=${gates.vmScriptParseable} lines=${gates.lineCountOk} symbols=${gates.symbolCoverage} -> ${candidate.recommendation}`
  );
}

const strictGateReadyCount = candidates.filter(candidate => candidate.strictGateReady).length;

const output = {
  generatedAt: new Date().toISOString(),
  totalCandidates: candidates.length,
  strictGateReadyCount,
  promoteCandidates: candidates
    .filter(candidate => candidate.recommendation === 'promote')
    .map(candidate => candidate.id),
  candidates,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`\nStrict gate-ready: ${strictGateReadyCount}/${candidates.length}`);
console.log(`Result: ${outputPath}`);
