#!/usr/bin/env node

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import * as vm from 'node:vm';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'project-modules-raw-registry.json');
const DEFAULT_TARGET_ROOT = path.join(ROOT, 'rebuilt', 'src', 'project-modules-beautified');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'project-modules-beautified-registry.json');
const MAX_LONGEST_LINE = 5000;
const MAX_SOURCE_BYTES = 5_000_000;

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
  let targetRoot = DEFAULT_TARGET_ROOT;
  let outputPath = DEFAULT_OUTPUT;
  const waves = new Set();

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--target-root') {
      i += 1;
      targetRoot = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--wave') {
      i += 1;
      waves.add(Number(argv[i]));
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  const selectedWaves = [...waves].filter(Number.isInteger).filter(wave => wave >= 1 && wave <= 4).sort();
  return { registryPath, targetRoot, outputPath, selectedWaves };
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
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
    return true;
  } catch {
    return false;
  }
}

function parseWithVm(code, filename) {
  try {
    new vm.Script(code, { filename });
    return true;
  } catch {
    return false;
  }
}

function wrapForWebcrack(code) {
  return `(function(exports, module) {\n"use strict";\n${code}\n})({}, {});`;
}

function unwrapWebcrackIife(code) {
  const lines = code.split('\n');
  if (lines.length < 3) {
    return code;
  }
  if (!lines[0].trim().startsWith('(function') || lines.at(-1)?.trim() !== '})({}, {});') {
    return code;
  }
  return lines
    .slice(1, -1)
    .map(line => (line.startsWith('  ') ? line.slice(2) : line))
    .join('\n')
    .trimEnd();
}

function runWebcrack(code) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'shopeecode-project-modules-webcrack-'));
  const inputFile = path.join(tempRoot, 'input.js');
  const outputDir = path.join(tempRoot, 'out');
  fs.writeFileSync(inputFile, wrapForWebcrack(code));
  try {
    execFileSync('npx', ['webcrack', inputFile, '-o', outputDir], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      timeout: 15000,
      killSignal: 'SIGKILL',
    });
    return {
      ok: true,
      code: fs.readFileSync(path.join(outputDir, 'deobfuscated.js'), 'utf8'),
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      code,
      error: error.stderr?.toString?.() || error.message,
    };
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

function formatWithJsBeautify(code) {
  return execFileSync('npx', ['--yes', 'js-beautify', '--type', 'js'], {
    cwd: ROOT,
    input: code,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });
}

function longestLineLength(code) {
  return code.split('\n').reduce((max, line) => Math.max(max, line.length), 0);
}

function isParseable(code, filename) {
  return parseWithAcorn(code) && parseWithVm(code, filename);
}

function trimToParse(code, filename) {
  if (isParseable(code, filename)) {
    return {
      ok: true,
      code,
      trimmedTailLines: 0,
    };
  }

  const lines = code.split(/\r?\n/);
  for (let end = lines.length - 1; end > 0; end -= 1) {
    const candidate = `${lines.slice(0, end).join('\n').trimEnd()}\n`;
    if (!candidate.trim()) {
      continue;
    }
    if (isParseable(candidate, filename)) {
      return {
        ok: true,
        code: candidate,
        trimmedTailLines: lines.length - end,
      };
    }
  }

  return {
    ok: false,
    code,
    trimmedTailLines: 0,
  };
}

function exportSignature(code) {
  const exportNames = [...code.matchAll(/\bexport\s+(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/g)].map(match => match[1]);
  const exportList = [...code.matchAll(/\bexport\s*\{([^}]+)\}/g)].flatMap(match =>
    match[1]
      .split(',')
      .map(part => part.trim())
      .filter(Boolean)
  );
  return JSON.stringify({
    exportNames: [...new Set(exportNames)].sort(),
    exportList: [...new Set(exportList)].sort(),
    moduleExports: (code.match(/module\.exports/g) ?? []).length,
    exportsDot: (code.match(/\bexports\./g) ?? []).length,
  });
}

function buildResultSkeleton(entry, targetPath, rawCode, sanitized, baseCode, baseExportSignature) {
  return {
    id: entry.id,
    wave: entry.wave,
    sourceFile: entry.targetFile,
    targetFile: targetPath ? normalizePath(path.relative(ROOT, targetPath)) : null,
    sanitizedParseable: sanitized.ok,
    trimmedTailLines: sanitized.trimmedTailLines,
    exportSignature: baseExportSignature,
    rawLineCount: rawCode.split(/\r?\n/).length,
    sanitizedLineCount: baseCode.split(/\r?\n/).length,
    rawLongestLine: longestLineLength(rawCode),
    sanitizedLongestLine: longestLineLength(baseCode),
    sourceBytes: Buffer.byteLength(rawCode),
  };
}

function processEntry(entry, targetRoot) {
  const sourcePath = path.join(ROOT, entry.targetFile);
  const targetPath = path.join(targetRoot, entry.id);
  const sourceBytes = fs.statSync(sourcePath).size;

  if (sourceBytes > MAX_SOURCE_BYTES) {
    return {
      id: entry.id,
      wave: entry.wave,
      sourceFile: entry.targetFile,
      targetFile: null,
      formatter: 'raw-fallback',
      sanitizedParseable: null,
      trimmedTailLines: 0,
      exportSignature: null,
      rawLineCount: null,
      sanitizedLineCount: null,
      beautifiedLineCount: null,
      rawLongestLine: null,
      sanitizedLongestLine: null,
      beautifiedLongestLine: null,
      sourceBytes,
      webcrackUsed: false,
      webcrackError: `source-too-large:${sourceBytes}`,
      status: 'raw-fallback',
      fallbackReason: 'source-too-large',
    };
  }

  const rawCode = fs.readFileSync(sourcePath, 'utf8');
  const sanitized = trimToParse(rawCode, path.basename(sourcePath));
  const baseCode = sanitized.ok ? sanitized.code : rawCode;
  const baseExportSignature = exportSignature(baseCode);
  const baseLongestLine = longestLineLength(baseCode);
  const skeleton = buildResultSkeleton(entry, targetPath, rawCode, sanitized, baseCode, baseExportSignature);

  if (fs.existsSync(targetPath)) {
    const existingCode = fs.readFileSync(targetPath, 'utf8');
    if (isParseable(existingCode, path.basename(targetPath)) && exportSignature(existingCode) === baseExportSignature) {
      return {
        ...skeleton,
        formatter: 'resume-existing',
        webcrackUsed: false,
        webcrackError: null,
        beautifiedLineCount: existingCode.split(/\r?\n/).length,
        beautifiedLongestLine: longestLineLength(existingCode),
        status: 'beautified',
      };
    }
  }

  const webcrack = sanitized.ok ? runWebcrack(baseCode) : { ok: false, code: baseCode, error: 'sanitize-failed' };
  const webcrackCode = unwrapWebcrackIife(webcrack.code);
  let finalCode = isParseable(webcrackCode, path.basename(targetPath)) ? webcrackCode : baseCode;
  let formatter = webcrack.ok && finalCode === webcrackCode ? 'sanitize+webcrack' : 'sanitize';

  if (longestLineLength(finalCode) >= baseLongestLine || longestLineLength(finalCode) > MAX_LONGEST_LINE) {
    try {
      finalCode = formatWithJsBeautify(finalCode);
      if (!isParseable(finalCode, path.basename(targetPath))) {
        finalCode = webcrack.ok && isParseable(webcrackCode, path.basename(targetPath)) ? webcrackCode : baseCode;
      } else {
        formatter = webcrack.ok && finalCode !== baseCode ? 'sanitize+webcrack+js-beautify' : 'sanitize+js-beautify';
      }
    } catch {
      // Keep the best-effort code we already have.
    }
  }

  ensureDir(targetPath);
  fs.writeFileSync(targetPath, finalCode.endsWith('\n') ? finalCode : `${finalCode}\n`);

  return {
    ...skeleton,
    formatter,
    webcrackUsed: webcrack.ok,
    webcrackError: webcrack.error,
    beautifiedLineCount: finalCode.split(/\r?\n/).length,
    beautifiedLongestLine: longestLineLength(finalCode),
    status: 'beautified',
  };
}

function main() {
  const { registryPath, targetRoot, outputPath, selectedWaves } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const candidates = registry.placements.filter(entry => {
    if (entry.status !== 'placed') {
      return false;
    }
    if (selectedWaves.length === 0) {
      return true;
    }
    return selectedWaves.includes(entry.wave);
  });

  const results = candidates.map(entry => processEntry(entry, targetRoot));
  const output = {
    generatedAt: new Date().toISOString(),
    sourceRegistryPath: normalizePath(path.relative(ROOT, registryPath)),
    targetRoot: normalizePath(path.relative(ROOT, targetRoot)),
    selectedWaves,
    fileCount: results.length,
    beautifiedCount: results.filter(item => item.status === 'beautified').length,
    rawFallbackCount: results.filter(item => item.status === 'raw-fallback').length,
    formatterCounts: results.reduce((acc, item) => {
      acc[item.formatter] = (acc[item.formatter] ?? 0) + 1;
      return acc;
    }, {}),
    results,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`Project module beautify registry: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Beautified files: ${output.beautifiedCount}`);
  console.log(`Raw fallbacks: ${output.rawFallbackCount}`);
}

main();
