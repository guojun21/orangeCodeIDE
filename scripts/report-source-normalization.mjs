#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { ROOT } from './paths.mjs';

const CONFIG_PATH = path.join(ROOT, 'config', 'runtime', 'source-normalization.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'source-normalization-report.json');
const SOURCE_EXTENSIONS = new Set(['.js', '.mjs', '.cjs', '.jsx', '.ts', '.tsx']);

function normalizeRelative(filePath) {
  return path.relative(ROOT, filePath).split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function dedupeRealPaths(entries) {
  const seen = new Set();
  const result = [];
  for (const entry of entries) {
    if (!fs.existsSync(entry)) {
      continue;
    }
    const realPath = fs.realpathSync(entry);
    if (seen.has(realPath)) {
      continue;
    }
    seen.add(realPath);
    result.push(realPath);
  }
  return result;
}

function walkSourceFiles(rootPath, excludedRoots, files) {
  const dirEntries = fs.readdirSync(rootPath, { withFileTypes: true });
  for (const entry of dirEntries) {
    const absolutePath = path.join(rootPath, entry.name);
    const realPath = fs.realpathSync(absolutePath);
    if (excludedRoots.has(realPath)) {
      continue;
    }
    if (entry.isDirectory()) {
      walkSourceFiles(absolutePath, excludedRoots, files);
      continue;
    }
    if (!entry.isFile()) {
      continue;
    }
    if (!SOURCE_EXTENSIONS.has(path.extname(entry.name))) {
      continue;
    }
    files.push(realPath);
  }
}

function buildAllowlist(config) {
  const allowlist = new Set();
  const byPath = new Map();
  for (const entry of config.legacyAllowlist ?? []) {
    const kinds = entry.kinds ?? [];
    for (const kind of kinds) {
      allowlist.add(`${entry.path}::${kind}`);
    }
    byPath.set(entry.path, entry);
  }
  return { allowlist, byPath };
}

function findFamily(relativePath, families) {
  let bestMatch = null;
  for (const [family, prefixes] of Object.entries(families)) {
    for (const prefix of prefixes) {
      if (!relativePath.startsWith(prefix)) {
        continue;
      }
      if (!bestMatch || prefix.length > bestMatch.prefix.length) {
        bestMatch = { family, prefix };
      }
    }
  }
  return bestMatch?.family ?? 'unclassified';
}

function scanActiveRuntime(config) {
  const activeRoots = dedupeRealPaths(
    (config.activeRuntimeRoots ?? []).map((entry) => path.join(ROOT, entry))
  );
  const excludedRoots = new Set(
    dedupeRealPaths((config.referenceOnlyRoots ?? []).map((entry) => path.join(ROOT, entry)))
  );

  const files = [];
  for (const activeRoot of activeRoots) {
    walkSourceFiles(activeRoot, excludedRoots, files);
  }

  const forbiddenKinds = Object.entries(config.forbiddenImportKinds ?? {});
  const { allowlist, byPath } = buildAllowlist(config);
  const fileSummaries = [];
  const allowedLegacyMatches = [];
  const unexpectedMatches = [];

  for (const filePath of files) {
    const relativePath = normalizeRelative(filePath);
    const source = fs.readFileSync(filePath, 'utf8');
    const hits = forbiddenKinds
      .filter(([, rule]) => source.includes(rule.needle))
      .map(([kind]) => kind);
    const family = findFamily(relativePath, config.families ?? {});
    const allowedKinds = [];
    const unexpectedKinds = [];

    for (const kind of hits) {
      if (allowlist.has(`${relativePath}::${kind}`)) {
        allowedKinds.push(kind);
        allowedLegacyMatches.push({
          path: relativePath,
          kind,
          family,
          notes: byPath.get(relativePath)?.notes ?? null,
        });
      } else {
        unexpectedKinds.push(kind);
        unexpectedMatches.push({
          path: relativePath,
          kind,
          family,
          description: config.forbiddenImportKinds?.[kind]?.description ?? null,
        });
      }
    }

    fileSummaries.push({
      path: relativePath,
      family,
      forbiddenKinds: hits,
      allowedLegacyKinds: allowedKinds,
      unexpectedKinds,
    });
  }

  const unusedLegacyEntries = (config.legacyAllowlist ?? [])
    .filter((entry) =>
      !(fileSummaries.find((summary) => summary.path === entry.path)?.allowedLegacyKinds ?? [])
        .some((kind) => (entry.kinds ?? []).includes(kind))
    )
    .map((entry) => ({
      path: entry.path,
      kinds: entry.kinds ?? [],
      family: entry.family ?? null,
      notes: entry.notes ?? null,
    }));

  return {
    activeFiles: fileSummaries,
    allowedLegacyMatches,
    unexpectedMatches,
    unusedLegacyEntries,
  };
}

function buildFamilySummary(config, scanResult) {
  return Object.entries(config.families ?? {}).map(([family, prefixes]) => {
    const files = scanResult.activeFiles.filter((entry) => entry.family === family);
    const allowedLegacyMatchCount = scanResult.allowedLegacyMatches.filter(
      (entry) => entry.family === family
    ).length;
    const unexpectedMatchCount = scanResult.unexpectedMatches.filter(
      (entry) => entry.family === family
    ).length;
    const status = family.startsWith('reference-')
      ? 'reference-only'
      : unexpectedMatchCount > 0
        ? 'unexpected-forbidden-import'
        : allowedLegacyMatchCount > 0
          ? 'legacy-allowed'
          : 'source-owned';
    return {
      family,
      prefixes,
      activeFileCount: files.length,
      fileWithForbiddenMatchCount: files.filter((entry) => entry.forbiddenKinds.length > 0).length,
      allowedLegacyMatchCount,
      unexpectedMatchCount,
      status,
    };
  });
}

export function generateSourceNormalizationReport() {
  const config = readJson(CONFIG_PATH);
  const scanResult = scanActiveRuntime(config);
  const missingEntrypoints = (config.ownedRuntimeEntrypoints ?? []).filter(
    (entry) => !fs.existsSync(path.join(ROOT, entry))
  );
  const familySummary = buildFamilySummary(config, scanResult);

  const result = {
    generatedAt: new Date().toISOString(),
    sourceOfTruth: normalizeRelative(CONFIG_PATH),
    activeRuntimeRoots: config.activeRuntimeRoots ?? [],
    sourceAliasRoots: config.sourceAliasRoots ?? [],
    referenceOnlyRoots: config.referenceOnlyRoots ?? [],
    ownedRuntimeEntrypoints: config.ownedRuntimeEntrypoints ?? [],
    ownedBusinessFamilies: config.ownedBusinessFamilies ?? [],
    forbiddenImportKinds: Object.fromEntries(
      Object.entries(config.forbiddenImportKinds ?? {}).map(([kind, rule]) => [
        kind,
        {
          needle: rule.needle,
          description: rule.description ?? null,
        },
      ])
    ),
    totals: {
      scannedFileCount: scanResult.activeFiles.length,
      fileWithForbiddenMatchCount: scanResult.activeFiles.filter(
        (entry) => entry.forbiddenKinds.length > 0
      ).length,
      allowedLegacyMatchCount: scanResult.allowedLegacyMatches.length,
      unexpectedMatchCount: scanResult.unexpectedMatches.length,
      unusedLegacyEntryCount: scanResult.unusedLegacyEntries.length,
      missingEntrypointCount: missingEntrypoints.length,
    },
    missingEntrypoints,
    familySummary,
    allowedLegacyMatches: scanResult.allowedLegacyMatches,
    unexpectedMatches: scanResult.unexpectedMatches,
    unusedLegacyEntries: scanResult.unusedLegacyEntries,
    passed:
      missingEntrypoints.length === 0 &&
      scanResult.unexpectedMatches.length === 0,
  };

  fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
  fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
  return result;
}

const isMain = process.argv[1]
  ? pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url
  : false;

if (isMain) {
  generateSourceNormalizationReport();
  console.log(RESULT_PATH);
}
