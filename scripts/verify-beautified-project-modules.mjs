#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import * as vm from 'node:vm';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'project-modules-beautified-registry.json');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'project-modules-beautified-verify.json');
const BEAUTIFIED_ROOT = path.join(ROOT, 'rebuilt', 'src', 'project-modules-beautified');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
  let outputPath = DEFAULT_OUTPUT;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { registryPath, outputPath };
}

function parseWithAcorn(code) {
  try {
    parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      allowAwaitOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true,
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

function longestLineLength(code) {
  return code.split('\n').reduce((max, line) => Math.max(max, line.length), 0);
}

function exportSignature(code) {
  const exportNames = [...code.matchAll(/\bexport\s+(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/g)].map(match => match[1]);
  const exportList = [...code.matchAll(/\bexport\s*\{([^}]+)\}/g)].flatMap(match =>
    match[1]
      .split(',')
      .map(part => part.trim())
      .filter(Boolean)
  );
  const commonJs = {
    moduleExports: (code.match(/module\.exports/g) ?? []).length,
    exportsDot: (code.match(/\bexports\./g) ?? []).length,
  };
  return JSON.stringify({
    exportNames: [...new Set(exportNames)].sort(),
    exportList: [...new Set(exportList)].sort(),
    moduleExports: commonJs.moduleExports,
    exportsDot: commonJs.exportsDot,
  });
}

function inspect(entry) {
  if (entry.status === 'raw-fallback') {
    return {
      id: entry.id,
      wave: entry.wave,
      formatter: entry.formatter,
      status: entry.status,
      fallbackReason: entry.fallbackReason || entry.webcrackError || 'raw-fallback',
      passed: true,
      skipped: true,
      failedChecks: [],
    };
  }

  const beautifiedPath = path.join(ROOT, entry.targetFile);
  const beautifiedCode = fs.readFileSync(beautifiedPath, 'utf8').replace(/^\uFEFF/, '');
  const beautifiedAcorn = parseWithAcorn(beautifiedCode);
  const beautifiedVm = parseWithVm(beautifiedCode, path.basename(beautifiedPath));
  const beautifiedLines = beautifiedCode.split(/\r?\n/).length;
  const beautifiedLongest = longestLineLength(beautifiedCode);
  const checks = {
    sanitizedParseable: Boolean(entry.sanitizedParseable),
    beautifiedAcornParseable: beautifiedAcorn.ok,
    beautifiedVmParseable: beautifiedVm.ok,
    exportSignatureStable: entry.exportSignature === exportSignature(beautifiedCode),
    lineCountImproved: beautifiedLines >= entry.sanitizedLineCount,
    longestLineReduced: beautifiedLongest <= entry.sanitizedLongestLine,
    underProjectModulesBeautifiedRoot: normalizePath(path.relative(ROOT, beautifiedPath)).startsWith(
      'rebuilt/src/project-modules-beautified/'
    ),
  };
  const gatingChecks = {
    sanitizedParseable: checks.sanitizedParseable,
    beautifiedAcornParseable: checks.beautifiedAcornParseable,
    beautifiedVmParseable: checks.beautifiedVmParseable,
    exportSignatureStable: checks.exportSignatureStable,
    underProjectModulesBeautifiedRoot: checks.underProjectModulesBeautifiedRoot,
  };
  const failedChecks = Object.entries(gatingChecks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  return {
    id: entry.id,
    wave: entry.wave,
    formatter: entry.formatter,
    rawLineCount: entry.rawLineCount,
    sanitizedLineCount: entry.sanitizedLineCount,
    beautifiedLineCount: beautifiedLines,
    rawLongestLine: entry.rawLongestLine,
    sanitizedLongestLine: entry.sanitizedLongestLine,
    beautifiedLongestLine: beautifiedLongest,
    checks,
    parse: {
      beautifiedAcornError: beautifiedAcorn.error,
      beautifiedVmError: beautifiedVm.error,
    },
    skipped: false,
    passed: failedChecks.length === 0,
    failedChecks,
  };
}

function main() {
  const { registryPath, outputPath } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const results = registry.results.map(inspect);
  const skippedCount = results.filter(item => item.skipped).length;
  const checkedCount = results.length - skippedCount;
  const passedCount = results.filter(item => item.passed && !item.skipped).length;

  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: normalizePath(path.relative(ROOT, registryPath)),
    targetRoot: normalizePath(path.relative(ROOT, BEAUTIFIED_ROOT)),
    fileCount: results.length,
    checkedCount,
    skippedCount,
    passedCount,
    failedCount: checkedCount - passedCount,
    results,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Beautified project modules verify: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Passed: ${passedCount}/${checkedCount}`);
  console.log(`Skipped(raw fallback): ${skippedCount}`);

  if (passedCount !== checkedCount) {
    process.exitCode = 1;
  }
}

main();
