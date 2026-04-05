#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

import { ROOT } from './paths.mjs';

const args = process.argv.slice(2);
const inputIndex = args.indexOf('--input');
const outputIndex = args.indexOf('--output');

if (inputIndex < 0 || !args[inputIndex + 1]) {
  console.error('Usage: node scripts/sanitize-js-slice.mjs --input <path> [--output <path>]');
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
    : inputPath.replace(/\.js$/, '.sanitized.js');

const source = fs.readFileSync(inputPath, 'utf8');

function toRelative(filePath) {
  return path.relative(ROOT, filePath);
}

function isValidJavaScript(text, filename) {
  try {
    new vm.Script(text, { filename });
    return true;
  } catch {
    return false;
  }
}

function collectTopLevelCutPoints(text) {
  const cutPoints = [];
  let braceDepth = 0;
  let bracketDepth = 0;
  let parenDepth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let templateExpressionDepth = 0;
  let inLineComment = false;
  let inBlockComment = false;
  let escaped = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

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

    if (inSingle) {
      if (!escaped && char === "'") {
        inSingle = false;
      }
      escaped = !escaped && char === '\\';
      continue;
    }

    if (inDouble) {
      if (!escaped && char === '"') {
        inDouble = false;
      }
      escaped = !escaped && char === '\\';
      continue;
    }

    if (inTemplate) {
      if (!escaped && char === '`' && templateExpressionDepth === 0) {
        inTemplate = false;
        continue;
      }

      if (!escaped && char === '$' && next === '{') {
        templateExpressionDepth += 1;
        braceDepth += 1;
        index += 1;
        continue;
      }

      if (char === '{') {
        braceDepth += 1;
      } else if (char === '}') {
        braceDepth = Math.max(0, braceDepth - 1);
        if (templateExpressionDepth > 0) {
          templateExpressionDepth -= 1;
        }
      }

      escaped = !escaped && char === '\\';
      continue;
    }

    escaped = false;

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

    if (char === "'") {
      inSingle = true;
      continue;
    }

    if (char === '"') {
      inDouble = true;
      continue;
    }

    if (char === '`') {
      inTemplate = true;
      continue;
    }

    if (char === '{') {
      braceDepth += 1;
      continue;
    }

    if (char === '}') {
      braceDepth = Math.max(0, braceDepth - 1);
      if (braceDepth === 0 && bracketDepth === 0 && parenDepth === 0) {
        cutPoints.push(index + 1);
      }
      continue;
    }

    if (char === '(') {
      parenDepth += 1;
      continue;
    }

    if (char === ')') {
      parenDepth = Math.max(0, parenDepth - 1);
      continue;
    }

    if (char === '[') {
      bracketDepth += 1;
      continue;
    }

    if (char === ']') {
      bracketDepth = Math.max(0, bracketDepth - 1);
      continue;
    }

    if (char === ';' && braceDepth === 0 && bracketDepth === 0 && parenDepth === 0) {
      cutPoints.push(index + 1);
    }
  }

  return [...new Set(cutPoints)].sort((left, right) => right - left);
}

function sanitizeSource(text, filename) {
  if (isValidJavaScript(text, filename)) {
    return {
      sanitized: text,
      trimmedBytes: 0,
      cutIndex: text.length
    };
  }

  const cutPoints = collectTopLevelCutPoints(text);
  for (const cutIndex of cutPoints) {
    const candidate = text.slice(0, cutIndex).trimEnd();
    if (!candidate) {
      continue;
    }

    if (isValidJavaScript(candidate, filename)) {
      return {
        sanitized: `${candidate}\n`,
        trimmedBytes: Buffer.byteLength(text.slice(cutIndex)),
        cutIndex
      };
    }
  }

  const declarationPattern = /\b(?:var|let|const)\s+/g;
  const declarationCuts = [];
  let match;

  while ((match = declarationPattern.exec(text)) !== null) {
    declarationCuts.push(match.index);
  }

  for (let index = declarationCuts.length - 1; index >= 0; index -= 1) {
    const cutIndex = declarationCuts[index];
    if (text.length - cutIndex > 10000) {
      break;
    }

    const candidate = text.slice(0, cutIndex).trimEnd();
    if (!candidate) {
      continue;
    }

    if (isValidJavaScript(candidate, filename)) {
      return {
        sanitized: `${candidate}\n`,
        trimmedBytes: Buffer.byteLength(text.slice(cutIndex)),
        cutIndex
      };
    }
  }

  return null;
}

const result = sanitizeSource(source, inputPath);
if (!result) {
  console.error(`Unable to sanitize ${inputPath}`);
  process.exit(2);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, result.sanitized);

console.log(
  JSON.stringify(
    {
      inputPath: toRelative(inputPath),
      outputPath: toRelative(outputPath),
      originalBytes: Buffer.byteLength(source),
      sanitizedBytes: Buffer.byteLength(result.sanitized),
      trimmedBytes: result.trimmedBytes,
      cutIndex: result.cutIndex
    },
    null,
    2
  )
);
