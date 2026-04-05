#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const componentsDir = path.join(ROOT, 'recovered', 'packages-ui-components');
const extractionResultPath = path.join(ROOT, 'mapped', 'packages-ui-component-extraction.json');
const outputPath = path.join(ROOT, 'mapped', 'extracted-components-verify.json');

const extractionResult = JSON.parse(fs.readFileSync(extractionResultPath, 'utf8'));

const checks = [];
let allPassed = true;

for (const comp of extractionResult.results) {
  if (comp.status !== 'extracted') {
    checks.push({ id: comp.id, passed: false, reason: 'not-extracted' });
    allPassed = false;
    continue;
  }

  const filePath = path.join(ROOT, comp.file);
  if (!fs.existsSync(filePath)) {
    checks.push({ id: comp.id, passed: false, reason: 'file-missing' });
    allPassed = false;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const codeStart = content.indexOf('\n\n');
  const code = codeStart >= 0 ? content.slice(codeStart + 2) : content;

  let acornOk = false;
  let acornError = null;
  try {
    parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      allowReturnOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowAwaitOutsideFunction: true,
    });
    acornOk = true;
  } catch (err) {
    acornError = `${err.message} at line ${err.loc?.line}`;
  }

  let hasEntrySymbol = false;
  for (const sym of comp.entrySymbols) {
    if (code.includes(`"${sym}"`)) {
      hasEntrySymbol = true;
      break;
    }
  }

  const hasReactPatterns = /xr\(|Ce\(|Ee\(|By\(|useState|useRef|useEffect|useCallback|useMemo/.test(code);

  const lineCount = code.split('\n').length;
  const sizeOk = lineCount >= 10 && Buffer.byteLength(code) >= 500;

  const passed = hasEntrySymbol && sizeOk;

  if (!passed) allPassed = false;

  const check = {
    id: comp.id,
    passed,
    acornParseable: acornOk,
    acornError,
    hasEntrySymbol,
    hasReactPatterns,
    lineCount,
    bytes: Buffer.byteLength(code),
    componentCount: comp.componentCount,
    functionCount: comp.functionCount,
  };

  checks.push(check);
  const icon = passed ? '✓' : '✗';
  console.log(`${icon} ${comp.id}: acorn=${acornOk ? 'ok' : 'partial'} entry=${hasEntrySymbol} react=${hasReactPatterns} ${lineCount} lines`);
}

const output = {
  generatedAt: new Date().toISOString(),
  passed: allPassed,
  totalChecks: checks.length,
  passedCount: checks.filter(c => c.passed).length,
  acornParseableCount: checks.filter(c => c.acornParseable).length,
  checks,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`\nOverall: ${output.passedCount}/${output.totalChecks} passed, ${output.acornParseableCount} acorn-parseable`);
console.log(`Result: ${outputPath}`);
