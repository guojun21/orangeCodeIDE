#!/usr/bin/env node

import dns from 'node:dns/promises';
import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const bundlePath = path.join(ROOT, 'out', 'vs', 'workbench', 'workbench.desktop.main.js');
const outputPath = path.join(ROOT, 'mapped', 'workbench-desktop-main-sourcemap-probe.json');

const source = fs.readFileSync(bundlePath, 'utf8');
const tailLines = source.trimEnd().split('\n').slice(-10);

const sourceMapLine = tailLines.find((line) => line.startsWith('//# sourceMappingURL=')) ?? null;
const debugIdLine = tailLines.find((line) => line.startsWith('//# debugId=')) ?? null;
const rawSourceMapRef = sourceMapLine?.slice('//# sourceMappingURL='.length).trim() ?? null;
const debugId = debugIdLine?.slice('//# debugId='.length).trim() ?? null;

function toRelative(filePath) {
  return path.relative(ROOT, filePath);
}

function parseSourceMapReference(rawValue) {
  if (!rawValue) {
    return {
      kind: 'missing',
      raw: null
    };
  }

  if (rawValue.startsWith('data:')) {
    return {
      kind: 'inline-data-url',
      raw: rawValue
    };
  }

  try {
    const url = new URL(rawValue);
    return {
      kind: url.protocol === 'http:' || url.protocol === 'https:' ? 'remote-url' : 'url',
      raw: rawValue,
      url: url.toString(),
      protocol: url.protocol,
      hostname: url.hostname
    };
  } catch {
    const resolvedPath = path.resolve(path.dirname(bundlePath), rawValue);
    return {
      kind: 'local-path',
      raw: rawValue,
      resolvedPath,
      exists: fs.existsSync(resolvedPath)
    };
  }
}

function findNamedFiles(searchRoots, fileName, limit = 12) {
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
      if (entry.isDirectory()) {
        if (skipped.has(entry.name)) {
          continue;
        }
        queue.push(path.join(current, entry.name));
        continue;
      }

      if (entry.isFile() && entry.name === fileName) {
        results.push(path.join(current, entry.name));
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
    const lookupResult = await dns.lookup(url.hostname);
    report.dns = {
      ok: true,
      address: lookupResult.address,
      family: lookupResult.family
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

const parsedRef = parseSourceMapReference(rawSourceMapRef);
const siblingMapPath = `${bundlePath}.map`;
const siblingMapExists = fs.existsSync(siblingMapPath);
const basename = rawSourceMapRef ? path.basename(rawSourceMapRef) : path.basename(siblingMapPath);
const nearbyNamedMatches = findNamedFiles(
  [path.join(ROOT, 'out'), path.join(ROOT, 'recovered')],
  basename
).map((filePath) => ({
  path: toRelative(filePath),
  sizeBytes: fs.statSync(filePath).size
}));

let remoteProbe = null;
if (parsedRef.kind === 'remote-url') {
  remoteProbe = await probeRemoteUrl(parsedRef.url);
}

const report = {
  generatedAt: new Date().toISOString(),
  bundlePath: toRelative(bundlePath),
  sizeBytes: Buffer.byteLength(source),
  lineCount: source.split('\n').length,
  tailLines,
  sourceMapReference: parsedRef,
  debugId,
  localCandidates: {
    siblingMapPath: toRelative(siblingMapPath),
    siblingMapExists,
    nearbyNamedMatches
  },
  remoteProbe,
  nextActions: [
    parsedRef.kind === 'remote-url'
      ? '如果 sourcemap 服务可访问，优先抓取外部 .map，而不是继续手工拆 bundle。'
      : '如果没有远程 sourcemap，先按模块壳切开 mega bundle，再决定是否做 AST 级恢复。',
    '如果拿到 .map 且包含 sourcesContent，就直接批量恢复文件树。',
    '如果 .map 只有 sources 没有 sourcesContent，就把 sources 路径和映射位置用于和 VS Code upstream 对齐重建。'
  ]
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(outputPath);
