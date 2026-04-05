#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const args = process.argv.slice(2);
const inputIndex = args.indexOf('--input');
const outputIndex = args.indexOf('--output');

if (inputIndex < 0 || !args[inputIndex + 1]) {
  console.error('Usage: node scripts/probe-bundle-structure.mjs --input <path> [--output <path>]');
  process.exit(1);
}

const rawInputPath = args[inputIndex + 1];
const inputPath = path.isAbsolute(rawInputPath)
  ? rawInputPath
  : path.resolve(ROOT, rawInputPath);
const outputPath =
  outputIndex >= 0 && args[outputIndex + 1]
    ? path.isAbsolute(args[outputIndex + 1])
      ? args[outputIndex + 1]
      : path.resolve(ROOT, args[outputIndex + 1])
    : path.join(ROOT, 'mapped', `${path.basename(inputPath).replace(/[^a-zA-Z0-9._-]+/g, '_')}-bundle-probe.json`);

const source = fs.readFileSync(inputPath, 'utf8');

function toRelative(filePath) {
  return path.relative(ROOT, filePath);
}

function buildLineStarts(text) {
  const starts = [0];
  for (let index = 0; index < text.length; index += 1) {
    if (text.charCodeAt(index) === 10) {
      starts.push(index + 1);
    }
  }
  return starts;
}

function lineOfIndex(lineStarts, index) {
  let low = 0;
  let high = lineStarts.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (lineStarts[mid] <= index) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high + 1;
}

function columnOfIndex(lineStarts, index, line) {
  return index - lineStarts[line - 1] + 1;
}

function compactSnippet(text) {
  return text.replace(/\s+/g, ' ').trim().slice(0, 220);
}

function collectTokenHits(text, lineStarts, label, pattern, limit = 20) {
  const flags = pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`;
  const matcher = new RegExp(pattern.source, flags);
  const hits = [];
  let match;

  while ((match = matcher.exec(text)) !== null) {
    const line = lineOfIndex(lineStarts, match.index);
    const column = columnOfIndex(lineStarts, match.index, line);
    hits.push({
      line,
      column,
      snippet: compactSnippet(text.slice(Math.max(0, match.index - 80), Math.min(text.length, match.index + 180)))
    });
    if (hits.length >= limit) {
      break;
    }
  }

  return {
    label,
    count: hits.length,
    truncated: hits.length === limit,
    hits
  };
}

function collectCommentRefs(text, lineStarts) {
  const refs = [];
  const lines = text.split('\n');

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    const trimmed = line.trim();

    if (trimmed.startsWith('//# sourceMappingURL=')) {
      refs.push({
        kind: 'sourceMappingURL-line',
        value: trimmed.slice('//# sourceMappingURL='.length).trim(),
        line: lineIndex + 1,
        column: line.indexOf('//# sourceMappingURL=') + 1,
        snippet: compactSnippet(trimmed)
      });
    }

    if (trimmed.startsWith('//# debugId=')) {
      refs.push({
        kind: 'debugId-line',
        value: trimmed.slice('//# debugId='.length).trim(),
        line: lineIndex + 1,
        column: line.indexOf('//# debugId=') + 1,
        snippet: compactSnippet(trimmed)
      });
    }
  }

  return refs;
}

function detectLikelyPackagers(text) {
  const results = [];
  if (text.includes('Ae({"')) {
    results.push('cursor-workbench-wrapper');
  }
  if (text.includes('__webpack_require__')) {
    results.push('webpack-subbundle');
  }
  if (text.includes('parcelRequire')) {
    results.push('parcel-subbundle');
  }
  if (text.includes('define.amd')) {
    results.push('umd-or-amd-wrapper');
  }
  return results;
}

function findNamedFiles(searchRoots, fileName, limit = 8) {
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
        if (!skipped.has(entry.name)) {
          queue.push(path.join(current, entry.name));
        }
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

const lineStarts = buildLineStarts(source);
const commentRefs = collectCommentRefs(source, lineStarts);
const totalLines = source.split('\n').length;
const sourceMapRefs = commentRefs.filter((entry) => entry.kind.includes('sourceMappingURL'));
const topLevelSourceMapRefs = sourceMapRefs.filter((entry) => entry.line >= totalLines - 20);
const embeddedSourceMapRefs = sourceMapRefs.filter((entry) => entry.line < totalLines - 20);
const debugIds = commentRefs.filter((entry) => entry.kind.includes('debugId'));
const siblingMapPath = `${inputPath}.map`;
const siblingMapExists = fs.existsSync(siblingMapPath);
const nearbyCandidates = topLevelSourceMapRefs.flatMap((entry) => {
  const basename = path.basename(entry.value);
  return findNamedFiles([path.dirname(inputPath), path.join(ROOT, 'out'), path.join(ROOT, 'recovered')], basename).map(
    (filePath) => ({
      sourceMapValue: entry.value,
      path: toRelative(filePath),
      sizeBytes: fs.statSync(filePath).size
    })
  );
});

const report = {
  generatedAt: new Date().toISOString(),
  inputPath: toRelative(inputPath),
  sizeBytes: Buffer.byteLength(source),
  lineCount: totalLines,
  likelyPackagers: detectLikelyPackagers(source),
  tailLines: source.trimEnd().split('\n').slice(-8),
  sourceMapRefs: topLevelSourceMapRefs,
  embeddedSourceMapRefs,
  debugIds,
  localCandidates: {
    siblingMapPath: toRelative(siblingMapPath),
    siblingMapExists,
    nearbyCandidates
  },
  tokenHits: [
    collectTokenHits(source, lineStarts, 'Ae-wrapper', /Ae\(\{"/),
    collectTokenHits(source, lineStarts, '__webpack_require__', /__webpack_require__/),
    collectTokenHits(source, lineStarts, 'webpackChunk', /webpackChunk/),
    collectTokenHits(source, lineStarts, 'parcelRequire', /parcelRequire/),
    collectTokenHits(source, lineStarts, 'define.amd', /define\.amd/),
    collectTokenHits(source, lineStarts, 'createContext', /createContext\(/)
  ],
  nextActions: [
    topLevelSourceMapRefs.length > 0
      ? '这个 bundle 自身带有 sourceMappingURL 痕迹，先判断它是真正尾部 sourcemap 还是嵌入的 worker/子包字符串。'
      : '这个 bundle 没有直接暴露 sourcemap 注释，优先继续做模块边界和语义索引。',
    source.includes('__webpack_require__')
      ? '检测到 webpack 子包，可以单独对这个子包做 webpack 级拆解，而不是继续把整个 mega bundle 当成一个文件。'
      : '没有明显 webpack 指纹时，继续依赖现有模块壳和语义关键字切分。'
  ]
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
console.log(outputPath);
