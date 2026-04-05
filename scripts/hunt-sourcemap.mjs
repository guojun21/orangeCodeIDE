#!/usr/bin/env node

import dns from 'node:dns/promises';
import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

function parseArgs(argv) {
  const args = {
    installedRoot: process.env.ORANGECODEIDE_INSTALLED_RUNTIME_ROOT
      ? path.resolve(process.env.ORANGECODEIDE_INSTALLED_RUNTIME_ROOT)
      : null
  };

  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--installed-root') {
      args.installedRoot = path.resolve(argv[index + 1]);
      index += 1;
    }
  }

  return args;
}

const args = parseArgs(process.argv);
const installedAppRoot = args.installedRoot;
const repoBundlePath = path.join(ROOT, 'out', 'vs', 'workbench', 'workbench.desktop.main.js');
const installedBundlePath = installedAppRoot
  ? path.join(installedAppRoot, 'out', 'vs', 'workbench', 'workbench.desktop.main.js')
  : null;
const productJsonPath = installedAppRoot ? path.join(installedAppRoot, 'product.json') : null;
const outputPath = path.join(ROOT, 'mapped', 'sourcemap-hunt-result.json');

function toRelativeMaybe(filePath) {
  if (!filePath) {
    return null;
  }
  if (filePath.startsWith(`${ROOT}${path.sep}`) || filePath === ROOT) {
    return path.relative(ROOT, filePath);
  }
  return filePath;
}

function readTailMetadata(bundlePath) {
  if (!fs.existsSync(bundlePath)) {
    return {
      exists: false,
      path: toRelativeMaybe(bundlePath)
    };
  }

  const source = fs.readFileSync(bundlePath, 'utf8');
  const tailLines = source.trimEnd().split('\n').slice(-12);
  const sourceMapLine = tailLines.find((line) => line.startsWith('//# sourceMappingURL=')) ?? null;
  const debugIdLine = tailLines.find((line) => line.startsWith('//# debugId=')) ?? null;
  const rawSourceMapRef = sourceMapLine?.slice('//# sourceMappingURL='.length).trim() ?? null;
  const debugId = debugIdLine?.slice('//# debugId='.length).trim() ?? null;

  return {
    exists: true,
    path: toRelativeMaybe(bundlePath),
    sizeBytes: Buffer.byteLength(source),
    lineCount: source.split('\n').length,
    tailLines,
    rawSourceMapRef,
    debugId
  };
}

function parseSourceMapReference(rawValue, bundlePath) {
  if (!rawValue) {
    return { kind: 'missing', raw: null };
  }

  if (rawValue.startsWith('data:')) {
    return { kind: 'inline-data-url', raw: rawValue };
  }

  try {
    const url = new URL(rawValue);
    const commitMatch = /\/sourcemaps\/([^/]+)\//.exec(url.pathname);
    return {
      kind: url.protocol === 'http:' || url.protocol === 'https:' ? 'remote-url' : 'url',
      raw: rawValue,
      url: url.toString(),
      protocol: url.protocol,
      hostname: url.hostname,
      pathname: url.pathname,
      commit: commitMatch?.[1] ?? null
    };
  } catch {
    const resolvedPath = path.resolve(path.dirname(bundlePath), rawValue);
    return {
      kind: 'local-path',
      raw: rawValue,
      resolvedPath: toRelativeMaybe(resolvedPath),
      exists: fs.existsSync(resolvedPath)
    };
  }
}

function readProductMetadata() {
  if (!productJsonPath) {
    return {
      exists: false,
      path: null
    };
  }
  if (!fs.existsSync(productJsonPath)) {
    return {
      exists: false,
      path: productJsonPath
    };
  }

  const product = JSON.parse(fs.readFileSync(productJsonPath, 'utf8'));
  return {
    exists: true,
    path: productJsonPath,
    applicationName: product.applicationName,
    commit: product.commit ?? null,
    version: product.version ?? null,
    date: product.date ?? null
  };
}

function findNamedFiles(searchRoots, fileName, limit = 20) {
  const results = [];
  const skipped = new Set(['node_modules', '.git', '.runtime-user-data', '.local', 'reference']);
  const queue = [...searchRoots].filter((root) => fs.existsSync(root));

  while (queue.length > 0 && results.length < limit) {
    const current = queue.pop();
    const stat = fs.statSync(current);

    if (stat.isFile()) {
      if (path.basename(current) === fileName) {
        results.push(current);
      }
      continue;
    }

    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (!skipped.has(entry.name)) {
          queue.push(fullPath);
        }
        continue;
      }
      if (entry.isFile() && entry.name === fileName) {
        results.push(fullPath);
        if (results.length >= limit) {
          break;
        }
      }
    }
  }

  return results;
}

function listMapFiles(searchRoot, limit = 50) {
  const results = [];
  if (!fs.existsSync(searchRoot)) {
    return results;
  }

  const queue = [searchRoot];
  const skipped = new Set(['node_modules', '.git']);

  while (queue.length > 0 && results.length < limit) {
    const current = queue.pop();
    const stat = fs.statSync(current);

    if (stat.isFile()) {
      if (current.endsWith('.map')) {
        results.push(current);
      }
      continue;
    }

    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (!skipped.has(entry.name)) {
          queue.push(fullPath);
        }
        continue;
      }
      if (entry.isFile() && entry.name.endsWith('.map')) {
        results.push(fullPath);
        if (results.length >= limit) {
          break;
        }
      }
    }
  }

  return results;
}

async function probeRemoteUrl(urlString) {
  const url = new URL(urlString);
  const report = {
    url: url.toString(),
    hostname: url.hostname,
    protocol: url.protocol
  };

  try {
    const dnsLookup = await dns.lookup(url.hostname);
    report.dns = {
      ok: true,
      address: dnsLookup.address,
      family: dnsLookup.family
    };
  } catch (error) {
    report.dns = {
      ok: false,
      error: error instanceof Error ? error.message : String(error)
    };
    return report;
  }

  try {
    const response = await fetch(url, {
      method: 'HEAD',
      signal: AbortSignal.timeout(8000)
    });
    report.http = {
      ok: true,
      status: response.status,
      contentType: response.headers.get('content-type'),
      contentLength: response.headers.get('content-length')
    };
  } catch (error) {
    report.http = {
      ok: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }

  return report;
}

function buildVerdict({ repoRef, installedRef, product, repoSiblingMapExists, installedSiblingMapExists, installedMapFiles, remoteProbe }) {
  const reasons = [];

  if (repoRef.commit && product.commit && repoRef.commit === product.commit) {
    reasons.push('repo bundle sourcemap commit matches installed Cursor product commit');
  }
  if (installedRef.debugId && repoRef.debugId && installedRef.debugId === repoRef.debugId) {
    reasons.push('repo bundle debugId matches installed Cursor bundle debugId');
  }
  if (!repoSiblingMapExists && !installedSiblingMapExists && installedMapFiles.length === 0) {
    reasons.push('no local .map file found in repo or installed Cursor app');
  }
  if (remoteProbe?.dns?.ok === false) {
    reasons.push(`remote sourcemap host DNS failed: ${remoteProbe.dns.error}`);
  }

  const category =
    remoteProbe?.dns?.ok === false && installedMapFiles.length === 0 && !repoSiblingMapExists && !installedSiblingMapExists
      ? 'remote-sourcemap-known-but-unreachable-no-local-map'
      : remoteProbe?.http?.ok
        ? 'remote-sourcemap-reachable'
        : installedMapFiles.length > 0 || repoSiblingMapExists || installedSiblingMapExists
          ? 'local-map-candidate-found'
          : 'sourcemap-hunt-inconclusive';

  return { category, reasons };
}

const repoBundle = readTailMetadata(repoBundlePath);
const installedBundle = installedBundlePath
  ? readTailMetadata(installedBundlePath)
  : {
      exists: false,
      path: null
    };
const product = readProductMetadata();

const repoRef = parseSourceMapReference(repoBundle.rawSourceMapRef, repoBundlePath);
const installedRef = installedBundlePath
  ? parseSourceMapReference(installedBundle.rawSourceMapRef, installedBundlePath)
  : { kind: 'missing', raw: null };
const repoSiblingMapPath = `${repoBundlePath}.map`;
const installedSiblingMapPath = installedBundlePath ? `${installedBundlePath}.map` : null;
const repoSiblingMapExists = fs.existsSync(repoSiblingMapPath);
const installedSiblingMapExists = installedSiblingMapPath ? fs.existsSync(installedSiblingMapPath) : false;

const basename =
  repoRef.kind === 'remote-url'
    ? path.basename(repoRef.pathname)
    : path.basename(repoSiblingMapPath);

const repoNamedMatches = findNamedFiles([path.join(ROOT, 'out'), path.join(ROOT, 'recovered')], basename).map((filePath) => ({
  path: toRelativeMaybe(filePath),
  sizeBytes: fs.statSync(filePath).size
}));
const installedNamedMatches = installedAppRoot ? findNamedFiles([installedAppRoot], basename).map((filePath) => ({
  path: toRelativeMaybe(filePath),
  sizeBytes: fs.statSync(filePath).size
})) : [];
const installedMapFiles = installedAppRoot ? listMapFiles(installedAppRoot).map((filePath) => ({
  path: toRelativeMaybe(filePath),
  sizeBytes: fs.statSync(filePath).size
})) : [];

let remoteProbe = null;
if (repoRef.kind === 'remote-url') {
  remoteProbe = await probeRemoteUrl(repoRef.url);
}

const verdict = buildVerdict({
  repoRef,
  installedRef,
  product,
  repoSiblingMapExists,
  installedSiblingMapExists,
  installedMapFiles,
  remoteProbe
});

const report = {
  generatedAt: new Date().toISOString(),
  repoBundle: {
    ...repoBundle,
    sourceMapReference: repoRef
  },
  installedRuntime: {
    root: installedAppRoot,
    product,
    bundle: {
      ...installedBundle,
      sourceMapReference: installedRef
    }
  },
  localCandidates: {
    repoSiblingMapPath: toRelativeMaybe(repoSiblingMapPath),
    repoSiblingMapExists,
    installedSiblingMapPath: toRelativeMaybe(installedSiblingMapPath),
    installedSiblingMapExists,
    repoNamedMatches,
    installedNamedMatches,
    installedMapFiles
  },
  remoteProbe,
  correlation: {
    repoSourceMapCommit: repoRef.commit ?? null,
    installedSourceMapCommit: installedRef.commit ?? null,
    productCommit: product.commit ?? null,
    repoCommitMatchesProductCommit: Boolean(repoRef.commit && product.commit && repoRef.commit === product.commit),
    installedCommitMatchesProductCommit: Boolean(installedRef.commit && product.commit && installedRef.commit === product.commit),
    debugIdMatchesInstalledBundle: Boolean(repoBundle.debugId && installedBundle.debugId && repoBundle.debugId === installedBundle.debugId)
  },
  verdict,
  nextActions: [
    remoteProbe?.dns?.ok === false
      ? '当前最强结论是: 远程 sourcemap URL 真实存在且 commit 已可关联，但 go host 在当前环境不可解析。'
      : '如果远程 sourcemap 已可达，优先抓取 .map，不要继续手工拆大包。',
    '如果后续能接入可解析 go host 的网络环境，优先重跑 hunt-sourcemap.mjs。',
    '在拿不到 .map 的前提下，继续沿用模块注册表 + 高价值段切出 + nested bundle 拆解路线。'
  ]
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(outputPath);
