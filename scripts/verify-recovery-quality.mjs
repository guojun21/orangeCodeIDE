#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import * as vm from 'node:vm';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const DEFAULT_DIRS = [
  'recovered/cursor-recovered',
  'recovered/packages-ui-recovered',
  'recovered/packages-ui-components',
];

const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'recovery-quality-report.json');
const MIN_LINE_COUNT = 20;
const MAX_LONGEST_LINE = 5000;

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function sanitizeOutputStem(input) {
  return input
    .replace(/^recovered\//, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function parseArgs(argv) {
  const dirs = [];
  let outputPath = null;
  let outputExplicit = false;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--dir') {
      i += 1;
      if (i >= argv.length) {
        throw new Error('--dir requires a value');
      }
      dirs.push(argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      if (i >= argv.length) {
        throw new Error('--output requires a value');
      }
      outputPath = argv[i];
      outputExplicit = true;
      continue;
    }
    dirs.push(arg);
  }

  const effectiveDirs = dirs.length > 0 ? dirs : DEFAULT_DIRS;
  let resolvedOutput = outputPath;
  if (!resolvedOutput) {
    if (dirs.length === 0) {
      resolvedOutput = DEFAULT_OUTPUT;
    } else if (effectiveDirs.length === 1) {
      const stem = sanitizeOutputStem(effectiveDirs[0]) || 'custom-scan';
      resolvedOutput = path.join(ROOT, 'mapped', `recovery-quality-${stem}.json`);
    } else {
      resolvedOutput = path.join(ROOT, 'mapped', 'recovery-quality-custom-scan.json');
    }
  }

  return {
    dirs: effectiveDirs,
    outputPath: path.isAbsolute(resolvedOutput)
      ? resolvedOutput
      : path.join(ROOT, resolvedOutput),
    outputExplicit,
  };
}

function walkJsFiles(dirPath) {
  const files = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkJsFiles(entryPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(entryPath);
    }
  }
  return files.sort();
}

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

function parseWithVm(code) {
  try {
    new vm.Script(code, { displayErrors: true });
    return { ok: true, error: null };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function detectSuspiciousRenameSignals(code) {
  const checks = [
    {
      id: 'last-assignment-residue',
      regex: /\blast\s+[A-Za-z_$][\w$]*\s*=/,
    },
    {
      id: 'last-parameter-residue',
      regex: /\blast\s*\(\{/,
    },
    {
      id: 'read-exec-path-residue',
      regex: /\/packages\/read-exec\//,
    },
  ];

  return checks.filter(check => check.regex.test(code)).map(check => check.id);
}

function stripLeadingComments(code) {
  let rest = code.trimStart();

  while (rest.length > 0) {
    if (rest.startsWith('//')) {
      const nextLine = rest.indexOf('\n');
      rest = (nextLine === -1 ? '' : rest.slice(nextLine + 1)).trimStart();
      continue;
    }

    if (rest.startsWith('/*')) {
      const end = rest.indexOf('*/');
      if (end === -1) {
        return rest;
      }
      rest = rest.slice(end + 2).trimStart();
      continue;
    }

    break;
  }

  return rest;
}

function inspectFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
  const lines = code.split(/\r?\n/);
  const trimmed = code.trimStart();
  const stripped = stripLeadingComments(code);
  const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
  const acornResult = parseWithAcorn(code);
  const vmResult = parseWithVm(code);
  const suspiciousRenameSignals = detectSuspiciousRenameSignals(code);
  const startsWithAeWrapper = stripped.startsWith('Ae({');

  const checks = {
    acornParseable: acornResult.ok,
    vmScriptParseable: vmResult.ok,
    lineCountOk: lines.length >= MIN_LINE_COUNT,
    noAeWrapper: !startsWithAeWrapper,
    longestLineOk: longestLine < MAX_LONGEST_LINE,
    noSuspiciousRenameSignals: suspiciousRenameSignals.length === 0,
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  return {
    file: normalizePath(path.relative(ROOT, filePath)),
    bytes: Buffer.byteLength(code),
    lineCount: lines.length,
    longestLine,
    startsWithAeWrapper,
    suspiciousRenameSignals,
    checks,
    parse: {
      acornParseable: acornResult.ok,
      acornError: acornResult.error,
      vmScriptParseable: vmResult.ok,
      vmError: vmResult.error,
    },
    passed: failedChecks.length === 0,
    failedChecks,
  };
}

function summarizeDirectory(input, resolvedPath, fileResults) {
  const summary = {
    input,
    resolvedPath: normalizePath(path.relative(ROOT, resolvedPath)),
    fileCount: fileResults.length,
    passedCount: fileResults.filter(file => file.passed).length,
    acornParseableCount: fileResults.filter(file => file.checks.acornParseable).length,
    vmParseableCount: fileResults.filter(file => file.checks.vmScriptParseable).length,
    lineCountOkCount: fileResults.filter(file => file.checks.lineCountOk).length,
    noAeWrapperCount: fileResults.filter(file => file.checks.noAeWrapper).length,
    longestLineOkCount: fileResults.filter(file => file.checks.longestLineOk).length,
    noSuspiciousRenameSignalsCount: fileResults.filter(file => file.checks.noSuspiciousRenameSignals).length,
  };

  const byFailure = new Map();
  for (const file of fileResults) {
    for (const failedCheck of file.failedChecks) {
      byFailure.set(failedCheck, (byFailure.get(failedCheck) ?? 0) + 1);
    }
  }

  summary.failureBreakdown = Array.from(byFailure.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([check, count]) => ({ check, count }));

  return summary;
}

function main() {
  const { dirs, outputPath } = parseArgs(process.argv.slice(2));
  const directoryResults = [];
  const allFiles = [];
  let missingDirectories = 0;

  for (const input of dirs) {
    const resolvedPath = path.isAbsolute(input) ? input : path.join(ROOT, input);
    if (!fs.existsSync(resolvedPath)) {
      directoryResults.push({
        input,
        resolvedPath: normalizePath(path.relative(ROOT, resolvedPath)),
        missing: true,
        fileCount: 0,
        passedCount: 0,
        failureBreakdown: [{ check: 'directoryMissing', count: 1 }],
      });
      missingDirectories += 1;
      continue;
    }

    const jsFiles = walkJsFiles(resolvedPath);
    const fileResults = jsFiles.map(inspectFile);
    allFiles.push(...fileResults);
    directoryResults.push({
      ...summarizeDirectory(input, resolvedPath, fileResults),
      missing: false,
    });
  }

  const totals = {
    directoryCount: dirs.length,
    missingDirectories,
    fileCount: allFiles.length,
    passedCount: allFiles.filter(file => file.passed).length,
    acornParseableCount: allFiles.filter(file => file.checks.acornParseable).length,
    vmParseableCount: allFiles.filter(file => file.checks.vmScriptParseable).length,
    lineCountOkCount: allFiles.filter(file => file.checks.lineCountOk).length,
    noAeWrapperCount: allFiles.filter(file => file.checks.noAeWrapper).length,
    longestLineOkCount: allFiles.filter(file => file.checks.longestLineOk).length,
    noSuspiciousRenameSignalsCount: allFiles.filter(file => file.checks.noSuspiciousRenameSignals).length,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    thresholds: {
      minLineCount: MIN_LINE_COUNT,
      maxLongestLine: MAX_LONGEST_LINE,
    },
    directories: directoryResults,
    totals,
    failedFiles: allFiles.filter(file => !file.passed),
  };

  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Recovery quality report: ${normalizePath(path.relative(ROOT, outputPath))}`);
  for (const dir of directoryResults) {
    const prefix = dir.missing ? '✗' : dir.passedCount === dir.fileCount ? '✓' : '○';
    console.log(
      `${prefix} ${dir.input}: passed=${dir.passedCount}/${dir.fileCount} acorn=${dir.acornParseableCount ?? 0} lines=${dir.lineCountOkCount ?? 0} noAe=${dir.noAeWrapperCount ?? 0}`
    );
  }
  console.log(
    `Totals: passed=${totals.passedCount}/${totals.fileCount} acorn=${totals.acornParseableCount} vm=${totals.vmParseableCount} lineCountOk=${totals.lineCountOkCount} noAe=${totals.noAeWrapperCount}`
  );

  process.exitCode =
    missingDirectories > 0 || totals.passedCount !== totals.fileCount ? 1 : 0;
}

main();
