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

function summarizeConfiguration(configuration) {
  if (!configuration || typeof configuration !== 'object') {
    return null;
  }

  return {
    appRoot: configuration.appRoot ?? null,
    colorScheme: configuration.colorScheme ?? null,
    platform: configuration.platform ?? null,
    zoomLevel: configuration.zoomLevel ?? null,
  };
}

export function createOriginalMainProxy({
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
    startupCalls: 0,
  });

  let originalModulePromise;

  async function loadOriginalModule() {
    if (!originalModulePromise) {
      updateMarker(markerKey, {
        importStartedAt: new Date().toISOString(),
      });
      originalModulePromise = import(originalModuleUrl);
    }

    const originalModule = await originalModulePromise;
    updateMarker(markerKey, {
      hasStartupExport: typeof originalModule.startup === 'function',
      originalExportKeys: Object.keys(originalModule),
    });
    return originalModule;
  }

  return async function startup(configuration) {
    const current = globalThis[markerKey] ?? {};
    updateMarker(markerKey, {
      startupCalls: (current.startupCalls ?? 0) + 1,
      startupConfiguration: summarizeConfiguration(configuration),
      startupInvokedAt: new Date().toISOString(),
    });

    const originalModule = await loadOriginalModule();
    if (typeof originalModule.startup !== 'function') {
      throw new Error(`Original module is missing startup(): ${originalModuleUrl}`);
    }

    return originalModule.startup(configuration);
  };
}
