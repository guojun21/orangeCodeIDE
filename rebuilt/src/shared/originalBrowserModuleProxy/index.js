'use strict';

function updateMarker(markerKey, payload) {
  const current = globalThis[markerKey] ?? {};
  const next = {
    ...current,
    ...payload,
  };
  globalThis[markerKey] = next;
  return next;
}

export async function loadOriginalBrowserModule({
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
  });

  let originalModule;
  try {
    originalModule = await import(originalModuleUrl);
  } catch (error) {
    updateMarker(markerKey, {
      importFailedAt: new Date().toISOString(),
      importError: error instanceof Error ? error.stack || error.message : String(error),
    });
    throw error;
  }

  updateMarker(markerKey, {
    importResolvedAt: new Date().toISOString(),
    originalExportKeys: Object.keys(originalModule),
  });

  return originalModule;
}
