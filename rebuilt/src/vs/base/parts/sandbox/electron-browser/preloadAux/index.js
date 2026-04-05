'use strict';

(function () {
  const { ipcRenderer, webFrame, contextBridge } = require('electron');
  const PRELOAD_BRIDGE_MARKER = '__SHOPEE_PRELOAD_BRIDGE__';
  const PRELOAD_BRIDGE_PAYLOAD = Object.freeze({
    preloadMarker: 'PRELOAD BRIDGE READY',
    source: 'rebuilt/src/vs/base/parts/sandbox/electron-sandbox/preload/runtime',
    version: 'rebuilt',
  });

  function validateIPC(channel) {
    if (!channel || !channel.startsWith('vscode:')) {
      throw new Error(`Unsupported event IPC channel '${channel}'`);
    }

    return true;
  }

  function applyPreloadBridgeMarker(globals, globalObject = globalThis) {
    if (!globals || typeof globals !== 'object') {
      return globals;
    }

    // preload-aux can win the last exposeInMainWorld('vscode') call, so keep the
    // same bridge marker visible from the page world.
    globals.__shopeeBridgeInfo = {
      ...PRELOAD_BRIDGE_PAYLOAD,
    };
    globals[PRELOAD_BRIDGE_MARKER] = true;
    globalObject.console?.info?.('[preload aux bridge] marker applied');
    return globals;
  }

  const globals = applyPreloadBridgeMarker({
    ipcRenderer: {
      send(channel, ...args) {
        if (validateIPC(channel)) {
          ipcRenderer.send(channel, ...args);
        }
      },

      invoke(channel, ...args) {
        validateIPC(channel);
        return ipcRenderer.invoke(channel, ...args);
      }
    },

    webFrame: {
      setZoomLevel(level) {
        if (typeof level === 'number') {
          webFrame.setZoomLevel(level);
        }
      }
    }
  });

  try {
    contextBridge.exposeInMainWorld('vscode', globals);
  } catch (error) {
    console.error(error);
  }
}());
