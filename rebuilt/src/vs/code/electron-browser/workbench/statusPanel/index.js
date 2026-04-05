import { WORKBENCH_STATUS_MARKER } from './constants.js';
import { ensureWorkbenchStatusPanel } from './renderStatus.js';

function readPreloadBridge(globalObject = globalThis) {
  return globalObject.__SHOPEE_PRELOAD_BRIDGE_INFO__ ?? globalObject.vscode?.__shopeeBridgeInfo;
}

export function applyWorkbenchStatusPanel(globalObject = globalThis) {
  const bridgeInfo = readPreloadBridge(globalObject);

  globalObject[WORKBENCH_STATUS_MARKER] = {
    bridgeInfo,
    source: 'rebuilt/src/vs/code/electron-browser/workbench/statusPanel',
  };

  const doc = globalObject.document;
  const install = () => ensureWorkbenchStatusPanel(doc, bridgeInfo);

  if (doc?.readyState === 'loading') {
    globalObject.addEventListener('DOMContentLoaded', install, { once: true });
  } else {
    install();
  }

  globalObject.setTimeout(install, 1400);
  globalObject.console?.info?.('[workbench status] panel applied', bridgeInfo);
}

globalThis.__SHOPEE_WORKBENCH_STATUS_APPLY__ = () => applyWorkbenchStatusPanel(globalThis);
