#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

import { ROOT } from './paths.mjs';

const DEFAULT_CONTRACT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-live-canary-contract.json'
);
const DEFAULT_MANIFEST_PATH = path.join(
  ROOT,
  'mapped',
  'startup-loader-runtime-overlay-manifest.json'
);
const DEFAULT_BUNDLE_PATH = path.join(
  ROOT,
  'recovered',
  'startup-loader',
  'overrides',
  'out',
  'vs',
  'workbench',
  'workbench.desktop.main.original.js'
);
const DEFAULT_OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-wrapper-patch.json'
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let contractPath = DEFAULT_CONTRACT_PATH;
  let manifestPath = DEFAULT_MANIFEST_PATH;
  let bundlePath = DEFAULT_BUNDLE_PATH;
  let outputPath = DEFAULT_OUTPUT_PATH;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--contract') {
      index += 1;
      contractPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--manifest') {
      index += 1;
      manifestPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--bundle') {
      index += 1;
      bundlePath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--output') {
      index += 1;
      outputPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { contractPath, manifestPath, bundlePath, outputPath };
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function sha256Content(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

function escapeForDoubleQuotedString(value) {
  return value.replaceAll('\\', '\\\\').replaceAll('"', '\\"');
}

function stripBeautifiedPreamble(source, moduleId) {
  const lines = source.split(/\r?\n/);
  const filtered = [];
  let sawStrict = false;

  for (const line of lines) {
    if (!sawStrict) {
      if (line.trim() === '') {
        continue;
      }
      if (line.includes('use strict')) {
        sawStrict = true;
        filtered.push('"use strict";');
        continue;
      }
    }

    if (/^\/\/ Module: /.test(line) || /^\/\/ Offset: /.test(line) || /^\/\/ Size: /.test(line)) {
      continue;
    }
    filtered.push(line);
  }

  let body = filtered.join('\n').trim();
  if (!body.startsWith('"use strict";') && !body.startsWith("'use strict';")) {
    body = `"use strict";\n${body}`;
  }

  const marker = [
    'globalThis.__SHOPEE_STARTUP_MODULE_FACTORY_PATCH__ ??= { hits: [], lastHit: null };',
    `const __shopeeStartupModuleFactoryHit = { id: "${escapeForDoubleQuotedString(moduleId)}", timestamp: new Date().toISOString(), source: "startup-module-resolution-wrapper-patch" };`,
    'globalThis.__SHOPEE_STARTUP_MODULE_FACTORY_PATCH__.hits.push(__shopeeStartupModuleFactoryHit);',
    'globalThis.__SHOPEE_STARTUP_MODULE_FACTORY_PATCH__.lastHit = __shopeeStartupModuleFactoryHit;',
  ].join('\n');

  return body.replace(
    /^("use strict";|'use strict';)/,
    `$1\n${marker}`
  );
}

function findAeWrapperSpan(source, moduleId) {
  const moduleIndex = source.indexOf(moduleId);
  if (moduleIndex === -1) {
    throw new Error(`Module id not found in bundle: ${moduleId}`);
  }

  const start = source.lastIndexOf('Ae({', moduleIndex);
  if (start === -1) {
    throw new Error(`Wrapper start not found for module: ${moduleId}`);
  }

  let parenDepth = 0;
  let inString = false;
  let stringQuote = '';
  let escaped = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (inLineComment) {
      if (char === '\n') {
        inLineComment = false;
      }
      continue;
    }

    if (inBlockComment) {
      if (char === '*' && next === '/') {
        inBlockComment = false;
        index += 1;
      }
      continue;
    }

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (char === stringQuote) {
        inString = false;
        stringQuote = '';
      }
      continue;
    }

    if (char === '/' && next === '/') {
      inLineComment = true;
      index += 1;
      continue;
    }

    if (char === '/' && next === '*') {
      inBlockComment = true;
      index += 1;
      continue;
    }

    if (char === '"' || char === '\'' || char === '`') {
      inString = true;
      stringQuote = char;
      continue;
    }

    if (char === '(') {
      parenDepth += 1;
      continue;
    }

    if (char === ')') {
      parenDepth -= 1;
      if (parenDepth === 0) {
        return {
          start,
          end: index + 1,
          original: source.slice(start, index + 1),
        };
      }
    }
  }

  throw new Error(`Wrapper end not found for module: ${moduleId}`);
}

function buildEnabledModules(contract, manifest) {
  const manifestById = new Map(
    (manifest.results || []).map((entry) => [entry.id, entry])
  );
  const explicitWaveToggleMap = new Map(Object.entries(contract.waveToggleMap || {}));
  const laneToggleByWave = new Map([
    ['S1', 'services-canary'],
    ['S2', 'services-low-risk'],
    ['S3', 'services-broader'],
    ['F1', 'foundation'],
  ]);
  const waveById = new Map(
    Object.entries(contract.laneGroups || {}).flatMap(([waveId, ids]) =>
      (ids || []).map((id) => [id, waveId])
    )
  );

  return (contract.canary?.modules || [])
    .map((moduleEntry) => {
      const manifestEntry = manifestById.get(moduleEntry.id) ?? null;
      const waveId = waveById.get(moduleEntry.id) ?? null;
      const toggleKey = explicitWaveToggleMap.get(waveId) ?? laneToggleByWave.get(waveId) ?? null;
      const laneEnabled = toggleKey
        ? contract.defaults?.laneToggles?.[toggleKey] === true
        : false;
      const moduleEnabled = contract.defaults?.perModuleKillSwitch?.[moduleEntry.id] !== true;
      const resolverEnabled = contract.defaults?.resolverEnabled === true;

      return {
        ...moduleEntry,
        waveId,
        toggleKey,
        laneEnabled,
        moduleEnabled,
        resolverEnabled,
        manifestEntry,
      };
    })
    .filter((moduleEntry) =>
      moduleEntry.resolverEnabled
      && moduleEntry.laneEnabled
      && moduleEntry.moduleEnabled
      && moduleEntry.manifestEntry?.status === 'materialized'
      && moduleEntry.manifestEntry?.runtimeLoaderFile
    );
}

function main() {
  const { contractPath, manifestPath, bundlePath, outputPath } = parseArgs(process.argv.slice(2));
  const contract = readJson(contractPath);
  const manifest = readJson(manifestPath);
  const enabledModules = buildEnabledModules(contract, manifest);
  const bundleBefore = fs.readFileSync(bundlePath, 'utf8');
  let bundleAfter = bundleBefore;
  const patches = [];

  for (const moduleEntry of enabledModules) {
    const runtimeLoaderFile = path.join(ROOT, moduleEntry.manifestEntry.runtimeLoaderFile);
    const moduleSource = fs.readFileSync(runtimeLoaderFile, 'utf8');
    const moduleBody = stripBeautifiedPreamble(moduleSource, moduleEntry.id);
    const replacement = `Ae({"${moduleEntry.id}"(){${moduleBody}\n}})`;
    const span = findAeWrapperSpan(bundleAfter, moduleEntry.id);
    bundleAfter = `${bundleAfter.slice(0, span.start)}${replacement}${bundleAfter.slice(span.end)}`;
    patches.push({
      id: moduleEntry.id,
      lane: moduleEntry.lane,
      waveId: moduleEntry.waveId,
      runtimeLoaderFile: moduleEntry.manifestEntry.runtimeLoaderFile,
      originalWrapperSha256: sha256Content(span.original),
      replacementWrapperSha256: sha256Content(replacement),
      replacementLength: replacement.length,
    });
  }

  fs.writeFileSync(bundlePath, bundleAfter);

  const report = {
    generatedAt: new Date().toISOString(),
    contractPath: normalizePath(path.relative(ROOT, contractPath)),
    manifestPath: normalizePath(path.relative(ROOT, manifestPath)),
    bundlePath: normalizePath(path.relative(ROOT, bundlePath)),
    mode: contract.mode,
    resolverEnabled: contract.defaults?.resolverEnabled === true,
    patchedCount: patches.length,
    patches,
    bundleSha256Before: sha256Content(bundleBefore),
    bundleSha256After: sha256Content(bundleAfter),
    changed: bundleBefore !== bundleAfter,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);

  console.log(`Startup module resolution wrapper patch: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Patched modules: ${patches.length}`);
}

main();
