#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { Readable } from 'stream';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';

const DEFAULT_ARCHIVE_PATH = process.env.ORANGECODEIDE_RUNTIME_BASELINE_ARCHIVE || null;
const DEFAULT_ARCHIVE_URL = process.env.ORANGECODEIDE_RUNTIME_BASELINE_URL || null;
const DEFAULT_DIST_URL = process.env.ORANGECODEIDE_RUNTIME_DIST_URL || null;
const DEFAULT_CURSOR_RELEASE = process.env.ORANGECODEIDE_CURSOR_RELEASE || null;
const REQUIRED_RUNTIME_ITEMS = [
  'bin',
  'extensions',
  'node_modules',
  'node_modules.asar',
  'out',
  'policies',
  'product.json',
  'resources',
  'LICENSE.txt',
  'ThirdPartyNotices.txt',
];

function parseArgs(argv) {
  const args = {
    force: false,
    archive: DEFAULT_ARCHIVE_PATH,
    url: DEFAULT_ARCHIVE_URL,
    distUrl: DEFAULT_DIST_URL,
    cursorRelease: DEFAULT_CURSOR_RELEASE,
  };

  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--force') {
      args.force = true;
      continue;
    }
    if (token === '--archive') {
      args.archive = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (token === '--url') {
      args.url = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (token === '--dist-url') {
      args.distUrl = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
    if (token === '--cursor-release') {
      args.cursorRelease = argv[index + 1] ?? null;
      index += 1;
      continue;
    }
  }

  return args;
}

async function downloadFile(url, outputPath) {
  const response = await fetch(url);
  if (!response.ok || !response.body) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
  }

  await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });
  const stream = fs.createWriteStream(outputPath);
  await new Promise((resolve, reject) => {
    Readable.fromWeb(response.body).pipe(stream);
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

function resetRuntimeTargets() {
  for (const relativePath of REQUIRED_RUNTIME_ITEMS) {
    fs.rmSync(path.join(ROOT, relativePath), {
      recursive: true,
      force: true,
      maxRetries: 10,
      retryDelay: 100,
    });
  }
}

function copyFromRuntimeRoot(runtimeRoot) {
  if (!fs.existsSync(runtimeRoot)) {
    throw new Error(`Runtime root not found: ${runtimeRoot}`);
  }

  resetRuntimeTargets();
  for (const relativePath of REQUIRED_RUNTIME_ITEMS) {
    const sourcePath = path.join(runtimeRoot, relativePath);
    const targetPath = path.join(ROOT, relativePath);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      fs.cpSync(sourcePath, targetPath, { recursive: true, force: true, dereference: true });
    } else {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function extractArchive(archivePath) {
  resetRuntimeTargets();
  const tar = spawnSync('tar', ['-xzf', archivePath, '-C', ROOT], {
    stdio: 'inherit',
  });
  if (tar.status !== 0) {
    throw new Error(`tar extraction failed with exit code ${tar.status ?? 1}`);
  }
}

function ensureRuntimeTargetsPresent() {
  const missing = REQUIRED_RUNTIME_ITEMS.filter((relativePath) => !fs.existsSync(path.join(ROOT, relativePath)));
  if (missing.length > 0) {
    throw new Error(`Runtime baseline bootstrap incomplete. Missing: ${missing.join(', ')}`);
  }
}

function readPackageVersion() {
  const packageJsonPath = path.join(ROOT, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  return packageJson.version;
}

function resolveCursorReleaseSeries(explicitValue) {
  if (explicitValue) {
    return explicitValue;
  }
  const version = readPackageVersion();
  const [major, minor] = String(version).split('.');
  if (!major || !minor) {
    throw new Error(`Unable to derive Cursor release series from package version: ${version}`);
  }
  return `${major}.${minor}`;
}

function resolveOfficialDistributionUrl(explicitUrl, cursorRelease) {
  if (explicitUrl) {
    return explicitUrl;
  }
  if (process.platform !== 'darwin') {
    throw new Error(
      'No runtime baseline source configured. ' +
      'On non-macOS, pass --archive <tar.gz>, --url <tar.gz-url>, or --dist-url <official-runtime-url>.'
    );
  }
  return `https://api2.cursor.sh/updates/download/golden/darwin-universal/cursor/${cursorRelease}`;
}

function findMountedRuntimeRoot(mountRoot) {
  const appEntry = fs
    .readdirSync(mountRoot, { withFileTypes: true })
    .find((entry) => entry.isDirectory() && entry.name.endsWith('.app'));

  if (!appEntry) {
    throw new Error(`No .app bundle found in mounted distribution: ${mountRoot}`);
  }

  const runtimeRoot = path.join(mountRoot, appEntry.name, 'Contents', 'Resources', 'app');
  if (!fs.existsSync(runtimeRoot)) {
    throw new Error(`Mounted app runtime root not found: ${runtimeRoot}`);
  }
  return runtimeRoot;
}

function copyFromDownloadedDistribution(distributionPath) {
  if (process.platform !== 'darwin') {
    throw new Error('Official distribution extraction is currently implemented for macOS only.');
  }

  const mountRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'orangecodeide-runtime-dist-mount-'));
  const attach = spawnSync(
    'hdiutil',
    ['attach', distributionPath, '-nobrowse', '-readonly', '-mountpoint', mountRoot],
    { stdio: 'inherit' }
  );
  if (attach.status !== 0) {
    throw new Error(`hdiutil attach failed with exit code ${attach.status ?? 1}`);
  }

  try {
    const runtimeRoot = findMountedRuntimeRoot(mountRoot);
    copyFromRuntimeRoot(runtimeRoot);
    return runtimeRoot;
  } finally {
    const detach = spawnSync('hdiutil', ['detach', mountRoot, '-quiet'], { stdio: 'inherit' });
    if (detach.status !== 0) {
      throw new Error(`hdiutil detach failed with exit code ${detach.status ?? 1}`);
    }
  }
}

const args = parseArgs(process.argv);
const manifest = {
  generatedAt: new Date().toISOString(),
  force: args.force,
  source: null,
};

if (!args.force) {
  const allPresent = REQUIRED_RUNTIME_ITEMS.every((relativePath) => fs.existsSync(path.join(ROOT, relativePath)));
  if (allPresent) {
    const manifestPath = path.join(ROOT, 'mapped', 'bootstrap-runtime-baseline.json');
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
    fs.writeFileSync(manifestPath, JSON.stringify({ ...manifest, source: 'kept-existing' }, null, 2) + '\n');
    console.log(manifestPath);
    process.exit(0);
  }
}

if (args.archive) {
  if (!fs.existsSync(args.archive)) {
    throw new Error(`Runtime baseline archive not found: ${args.archive}`);
  }
  extractArchive(args.archive);
  manifest.source = 'local-archive';
  manifest.archive = args.archive;
} else if (args.url) {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'orangecodeide-runtime-baseline-'));
  const archivePath = path.join(tmpRoot, 'runtime-baseline.tar.gz');
  await downloadFile(args.url, archivePath);
  extractArchive(archivePath);
  manifest.source = 'remote-archive';
  manifest.url = args.url;
} else {
  const cursorRelease = resolveCursorReleaseSeries(args.cursorRelease);
  const distributionUrl = resolveOfficialDistributionUrl(args.distUrl, cursorRelease);
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'orangecodeide-runtime-distribution-'));
  const distributionPath = path.join(tmpRoot, path.basename(new URL(distributionUrl).pathname) || 'Cursor.dmg');
  await downloadFile(distributionUrl, distributionPath);
  const runtimeRoot = copyFromDownloadedDistribution(distributionPath);
  manifest.source = 'official-cursor-distribution';
  manifest.cursorRelease = cursorRelease;
  manifest.distributionUrl = distributionUrl;
  manifest.distributionPath = distributionPath;
  manifest.runtimeRoot = runtimeRoot;
}

ensureRuntimeTargetsPresent();

const manifestPath = path.join(ROOT, 'mapped', 'bootstrap-runtime-baseline.json');
fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(manifestPath);
