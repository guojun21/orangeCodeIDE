#!/usr/bin/env node

/**
 * Full deobfuscation pipeline for the 254 Cursor-specific modules:
 *   1. Strip Ae({}) module wrapper
 *   2. prettier format
 *   3. fast_rename via C tool (7364 mappings)
 *   4. acorn parse validation
 *
 * Outputs to recovered/cursor-specific-deobfuscated/
 * Reports to mapped/cursor-specific-deobfuscation-result.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync, execFileSync } from 'node:child_process';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const inputDir = path.join(ROOT, 'recovered', 'cursor-specific-modules');
const outputDir = path.join(ROOT, 'recovered', 'cursor-specific-deobfuscated');
const mappingTsv = '/tmp/rename-mapping.tsv';
const fastRenameBin = path.join(ROOT, 'tools', 'binary-crack', 'fast_rename');
const resultPath = path.join(ROOT, 'mapped', 'cursor-specific-deobfuscation-result.json');

if (!fs.existsSync(mappingTsv)) {
  const mapping = JSON.parse(fs.readFileSync(path.join(ROOT, 'mapped', 'v8-rename-mapping.json'), 'utf8'));
  const lines = Object.entries(mapping.allMappings).map(([k, v]) => `${k}\t${v}`).join('\n');
  fs.writeFileSync(mappingTsv, lines);
}

fs.mkdirSync(outputDir, { recursive: true });

function stripWrapper(code) {
  const headerMatch = code.match(/^\/\/ Module:.*\n\/\/ Offset:.*\n\/\/ Size:.*\n\n?/);
  const header = headerMatch ? headerMatch[0] : '';
  let body = headerMatch ? code.slice(headerMatch[0].length) : code;

  const aeMatch = body.match(/^Ae\(\{"[^"]*"\(\)\{"use strict";/);
  if (aeMatch) {
    body = body.slice(aeMatch[0].length);
    if (body.endsWith('}})')) body = body.slice(0, -3);
    else if (body.endsWith('}}),')) body = body.slice(0, -4);

    const trailingMatch = body.match(/\}\}\)[^}]*$/);
    if (trailingMatch) body = body.slice(0, -trailingMatch[0].length);
  }
  return { header, body };
}

function tryPrettier(code) {
  try {
    return execSync(
      'npx prettier --parser babel --single-quote --print-width 100 --stdin-filepath temp.js',
      { input: code, timeout: 30000, maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' }
    );
  } catch {
    return code;
  }
}

function tryRename(inputFile, outputFile) {
  try {
    execFileSync(fastRenameBin, [mappingTsv, inputFile, outputFile], {
      timeout: 30000, stdio: ['pipe', 'pipe', 'pipe'],
    });
    return true;
  } catch {
    return false;
  }
}

function checkAcorn(code) {
  try {
    parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      allowReturnOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowAwaitOutsideFunction: true,
    });
    return { ok: true, error: null };
  } catch (e) {
    return { ok: false, error: `${e.message} at line ${e.loc?.line}` };
  }
}

const results = [];
let total = 0, formatted = 0, renamed = 0, acornOk = 0, failed = 0;

function walkDir(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) { walkDir(full); continue; }
    if (!ent.name.endsWith('.js') && !ent.name.endsWith('.css')) continue;

    const rel = path.relative(inputDir, full);
    const stat = fs.statSync(full);

    if (stat.size < 200) {
      results.push({ file: rel, status: 'skipped-small', bytes: stat.size });
      continue;
    }

    total++;
    const raw = fs.readFileSync(full, 'utf8');

    if (ent.name.endsWith('.css')) {
      const outPath = path.join(outputDir, rel);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, raw);
      results.push({ file: rel, status: 'css-passthrough', bytes: stat.size });
      continue;
    }

    const { header, body } = stripWrapper(raw);

    const prettyCode = tryPrettier(body);
    const didFormat = prettyCode !== body;
    if (didFormat) formatted++;

    const tmpIn = `/tmp/deob-input-${process.pid}.js`;
    const tmpOut = `/tmp/deob-output-${process.pid}.js`;
    fs.writeFileSync(tmpIn, prettyCode);

    const didRename = tryRename(tmpIn, tmpOut);
    if (didRename) renamed++;

    const finalCode = didRename ? fs.readFileSync(tmpOut, 'utf8') : prettyCode;

    const acorn = checkAcorn(finalCode);
    if (acorn.ok) acornOk++;

    const outPath = path.join(outputDir, rel);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, header + '\n' + finalCode);

    const lines = finalCode.split('\n').length;

    const r = {
      file: rel,
      status: 'processed',
      inputBytes: stat.size,
      outputBytes: Buffer.byteLength(finalCode),
      outputLines: lines,
      formatted: didFormat,
      renamed: didRename,
      acornParseable: acorn.ok,
      acornError: acorn.error,
    };
    results.push(r);

    const icon = acorn.ok ? '✓' : (didFormat ? '○' : '✗');
    if (stat.size > 10000 || acorn.ok) {
      console.log(`${icon} ${rel}: ${stat.size}→${Buffer.byteLength(finalCode)} bytes, ${lines} lines, fmt=${didFormat} ren=${didRename} acorn=${acorn.ok}`);
    }
  }
}

console.log('[deob] Starting pipeline...');
walkDir(inputDir);

try { fs.unlinkSync(`/tmp/deob-input-${process.pid}.js`); } catch {}
try { fs.unlinkSync(`/tmp/deob-output-${process.pid}.js`); } catch {}

const output = {
  generatedAt: new Date().toISOString(),
  total,
  formatted,
  renamed,
  acornParseable: acornOk,
  failed: total - acornOk,
  outputDir: path.relative(ROOT, outputDir),
  results,
};

fs.writeFileSync(resultPath, JSON.stringify(output, null, 2));

console.log(`\n[deob] Pipeline complete:`);
console.log(`  Total: ${total}`);
console.log(`  Formatted: ${formatted}`);
console.log(`  Renamed: ${renamed}`);
console.log(`  Acorn-parseable: ${acornOk}`);
console.log(`  Failed parse: ${total - acornOk}`);
console.log(`  Result: ${resultPath}`);
