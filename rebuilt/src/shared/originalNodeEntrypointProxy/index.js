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

export async function runOriginalNodeEntrypoint({
  markerKey,
  source,
  originalModuleUrl,
  kind,
}) {
  updateMarker(markerKey, {
    kind,
    source,
    originalModuleUrl,
    loadedAt: new Date().toISOString(),
    argv: process.argv.slice(2),
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
