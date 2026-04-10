'use strict';

import fs from 'fs';
import path from 'path';

function updateMarker(markerKey, payload) {
  const current = globalThis[markerKey] ?? {};
  const next = {
    ...current,
    ...payload,
  };
  globalThis[markerKey] = next;
  return next;
}

function writeMarkerFile(markerKey) {
  const markerFile = process.env.SHOPEECODE_ENTRYPOINT_MARKER_FILE ?? null;
  if (!markerFile) {
    return;
  }

  fs.mkdirSync(path.dirname(markerFile), { recursive: true });
  fs.writeFileSync(markerFile, JSON.stringify(globalThis[markerKey] ?? null, null, 2) + '\n');
}

function tryReadJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function looksLikeElectronAppRoot(candidatePath) {
  if (!candidatePath) {
    return false;
  }

  const resolvedPath = path.resolve(candidatePath);
  const packageJsonPath = path.join(resolvedPath, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    return false;
  }

  const packageJson = tryReadJson(packageJsonPath);
  if (!packageJson || typeof packageJson.main !== 'string') {
    return false;
  }

  return fs.existsSync(path.join(resolvedPath, packageJson.main));
}

function normalizeElectronDevAppArg(kind) {
  if (kind !== 'main-entry') {
    return null;
  }

  if (process.argv.length < 2) {
    return null;
  }

  const appRootArg = process.argv[1];
  if (!looksLikeElectronAppRoot(appRootArg)) {
    return null;
  }

  const before = process.argv.slice();
  process.argv = [process.argv[0], ...process.argv.slice(2)];

  return {
    applied: true,
    removedAppRootArg: path.resolve(appRootArg),
    argvBefore: before,
    argvAfter: process.argv.slice(),
  };
}

export async function runOriginalNodeEntrypoint({
  markerKey,
  source,
  originalModuleUrl,
  kind,
}) {
  const argvNormalization = normalizeElectronDevAppArg(kind);
  updateMarker(markerKey, {
    kind,
    source,
    originalModuleUrl,
    loadedAt: new Date().toISOString(),
    argv: process.argv.slice(1),
    argvNormalization,
  });
  writeMarkerFile(markerKey);

  let originalModule;
  try {
    originalModule = await import(originalModuleUrl);
  } catch (error) {
    updateMarker(markerKey, {
      importFailedAt: new Date().toISOString(),
      importError: error instanceof Error ? error.stack || error.message : String(error),
    });
    writeMarkerFile(markerKey);
    throw error;
  }

  updateMarker(markerKey, {
    importResolvedAt: new Date().toISOString(),
    originalExportKeys: Object.keys(originalModule),
  });
  writeMarkerFile(markerKey);

  return originalModule;
}
