#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import * as vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const inputDir = path.join(ROOT, 'recovered', 'cursor-recovered', 'out-build');
const candidateDir = path.join(ROOT, 'recovered', 'candidate-source', 'cursor-modules');
const analysisDir = path.join(ROOT, 'recovered', 'analysis', 'cursor-modules');
const outputPath = path.join(ROOT, 'mapped', 'cursor-ae-strip-report.json');
const MAX_LONGEST_LINE = 5000;

function relativePath(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function walkJsFiles(dirPath) {
  const files = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
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

function parseWithVm(code, filename) {
  try {
    new vm.Script(code, { filename });
    return { ok: true, error: null };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function stripLeadingDocBlocks(code) {
  let rest = code.trimStart();
  while (rest.startsWith('/**') || rest.startsWith('//')) {
    if (rest.startsWith('/**')) {
      const end = rest.indexOf('*/');
      if (end === -1) break;
      rest = rest.slice(end + 2).trimStart();
      continue;
    }
    if (rest.startsWith('//')) {
      const next = rest.indexOf('\n');
      rest = (next === -1 ? '' : rest.slice(next + 1)).trimStart();
      continue;
    }
  }
  return rest;
}

function stripLeadingAeStub(code) {
  const trimmed = code.trimStart();
  if (!trimmed.startsWith('Ae({')) {
    return { code, stripped: false };
  }

  const endMarker = '});';
  const endIndex = trimmed.indexOf(endMarker);
  if (endIndex === -1) {
    return { code, stripped: false };
  }

  return {
    code: trimmed.slice(endIndex + endMarker.length).trimStart(),
    stripped: true,
  };
}

function sanitizeCode(originalCode) {
  const noDocs = stripLeadingDocBlocks(originalCode);
  const aeResult = stripLeadingAeStub(noDocs);
  let working = aeResult.code;
  let lines = working.split('\n');
  let trimmedTailLines = 0;
  let parseResult = {
    acorn: parseWithAcorn(working),
    vm: parseWithVm(working, 'module.js'),
  };

  while (
    lines.length > 1 &&
    (!parseResult.acorn.ok || !parseResult.vm.ok)
  ) {
    lines = lines.slice(0, -1);
    trimmedTailLines += 1;
    working = lines.join('\n').trimEnd();
    parseResult = {
      acorn: parseWithAcorn(working),
      vm: parseWithVm(working, 'module.js'),
    };
  }

  return {
    code: working,
    strippedAeStub: aeResult.stripped,
    trimmedTailLines,
    parseResult,
  };
}

function longestLineLength(code) {
  return code.split('\n').reduce((max, line) => Math.max(max, line.length), 0);
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

function splitLeadingCommaChain(code) {
  const lines = code.split('\n');
  if (lines.length === 0) {
    return code;
  }
  lines[0] = lines[0].replace(
    /, (?=[A-Za-z_$][\w$]*(?:\(\)|\s*=))/g,
    ',\n'
  );
  return lines.join('\n');
}

fs.mkdirSync(candidateDir, { recursive: true });
fs.mkdirSync(analysisDir, { recursive: true });

fs.rmSync(candidateDir, { recursive: true, force: true });
fs.rmSync(analysisDir, { recursive: true, force: true });
fs.mkdirSync(candidateDir, { recursive: true });
fs.mkdirSync(analysisDir, { recursive: true });

const results = [];

for (const file of walkJsFiles(inputDir)) {
  const original = fs.readFileSync(file, 'utf8');
  const sanitized = sanitizeCode(original);
  const relativeSource = relativePath(file);
  const lineCount = sanitized.code.split('\n').length;
  const candidate =
    sanitized.parseResult.acorn.ok &&
    sanitized.parseResult.vm.ok &&
    lineCount >= 20;
  const maybeSplit = candidate ? splitLeadingCommaChain(sanitized.code) : sanitized.code;
  const finalCode =
    candidate && longestLineLength(maybeSplit) > MAX_LONGEST_LINE
      ? formatWithJsBeautify(maybeSplit)
      : maybeSplit;
  const outputRoot = candidate ? candidateDir : analysisDir;
  const outputFile = path.join(outputRoot, path.relative(inputDir, file));
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });

  const header = [
    `// Source: ${relativeSource}`,
    `// Sanitized from recovered/cursor-recovered/out-build`,
    `// strippedAeStub: ${sanitized.strippedAeStub}`,
    `// trimmedTailLines: ${sanitized.trimmedTailLines}`,
    '',
  ].join('\n');

  fs.writeFileSync(outputFile, header + finalCode + '\n');

  results.push({
    source: relativeSource,
    output: relativePath(outputFile),
    status: candidate ? 'candidate' : 'analysis',
    lineCount,
    bytes: Buffer.byteLength(finalCode),
    strippedAeStub: sanitized.strippedAeStub,
    trimmedTailLines: sanitized.trimmedTailLines,
    parse: {
      acornParseable: sanitized.parseResult.acorn.ok,
      acornError: sanitized.parseResult.acorn.error,
      vmScriptParseable: sanitized.parseResult.vm.ok,
      vmError: sanitized.parseResult.vm.error,
    },
  });
}

const output = {
  generatedAt: new Date().toISOString(),
  inputDir: relativePath(inputDir),
  candidateDir: relativePath(candidateDir),
  analysisDir: relativePath(analysisDir),
  totalFiles: results.length,
  candidateCount: results.filter(result => result.status === 'candidate').length,
  analysisCount: results.filter(result => result.status === 'analysis').length,
  strippedAeStubCount: results.filter(result => result.strippedAeStub).length,
  trimmedTailFileCount: results.filter(result => result.trimmedTailLines > 0).length,
  results,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`Cursor strip report: ${relativePath(outputPath)}`);
console.log(`Candidates: ${output.candidateCount}/${output.totalFiles}`);
console.log(`Analysis: ${output.analysisCount}/${output.totalFiles}`);
console.log(`Files with Ae stub stripped: ${output.strippedAeStubCount}`);
console.log(`Files with tail trimming: ${output.trimmedTailFileCount}`);
