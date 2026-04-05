'use strict';

const MARKER_KEY = '__SHOPEE_STARTUP_MODULE_RESOLUTION__';

function safeInvoke(target, method, ...args) {
  if (!target || typeof target[method] !== 'function') {
    return null;
  }
  try {
    return target[method](...args);
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export function runStartupModuleResolutionCanaryPass(configuration) {
  const loader = globalThis.__SHOPEE_STARTUP_LOADER__ ?? null;
  const contract = safeInvoke(loader, 'getResolutionContract') ?? loader?.contract ?? null;
  const canaryModules = safeInvoke(loader, 'getCanaryModules') ?? contract?.canary?.modules ?? [];

  if (!loader || !contract) {
    const unavailable = {
      status: 'unavailable',
      source: 'rebuilt/src/vs/workbench/workbenchDesktopMain/startupModuleResolutionHelper.js',
      loaderPresent: Boolean(loader),
      contractPresent: Boolean(contract),
      configurationWindowId: configuration?.windowId ?? null,
      generatedAt: new Date().toISOString(),
    };
    globalThis[MARKER_KEY] = unavailable;
    return unavailable;
  }

  const resetDiagnosticsResult = safeInvoke(loader, 'resetDiagnostics');
  const results = [];
  for (const moduleEntry of canaryModules) {
    const result = safeInvoke(loader, 'probeResolution', moduleEntry.id);
    results.push({
      id: moduleEntry.id,
      lane: moduleEntry.lane ?? null,
      result,
    });
  }

  const diagnostics = safeInvoke(loader, 'getDiagnostics') ?? null;
  const summary = {
    status: 'probed',
    mode: contract?.mode ?? null,
    source: 'rebuilt/src/vs/workbench/workbenchDesktopMain/startupModuleResolutionHelper.js',
    generatedAt: new Date().toISOString(),
    configurationWindowId: configuration?.windowId ?? null,
    canaryCount: canaryModules.length,
    canaryIds: canaryModules.map((moduleEntry) => moduleEntry.id),
    resetDiagnosticsResult,
    results,
    diagnostics,
  };

  globalThis[MARKER_KEY] = summary;
  return summary;
}

export function getStartupModuleResolutionState() {
  return globalThis[MARKER_KEY] ?? null;
}
