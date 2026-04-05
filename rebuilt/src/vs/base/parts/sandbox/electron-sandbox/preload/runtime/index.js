import { contextBridge, ipcRenderer, webFrame, webUtils } from 'electron';

const VSCODE_CHANNEL_PREFIX = 'vscode:';
const PRELOAD_BRIDGE_MARKER = '__SHOPEE_PRELOAD_BRIDGE__';
const PRELOAD_BRIDGE_INFO_GLOBAL = '__SHOPEE_PRELOAD_BRIDGE_INFO__';
const PRELOAD_BRIDGE_PAYLOAD = Object.freeze({
  preloadMarker: 'PRELOAD BRIDGE READY',
  source: 'rebuilt/src/vs/base/parts/sandbox/electron-sandbox/preload/runtime',
  version: 'rebuilt',
});
let cachedConfiguration;

function assertSupportedChannel(channel) {
  if (!channel || !channel.startsWith(VSCODE_CHANNEL_PREFIX)) {
    throw new Error(`Unsupported event IPC channel '${channel}'`);
  }
}

function getArgValue(name) {
  for (const arg of process.argv) {
    if (arg.startsWith(`--${name}=`)) {
      return arg.split('=')[1];
    }
  }

  return undefined;
}

async function loadWindowConfiguration() {
  const channel = getArgValue('vscode-window-config');
  if (!channel) {
    throw new Error('Preload: did not find expected vscode-window-config in renderer process arguments list.');
  }

  assertSupportedChannel(channel);

  try {
    cachedConfiguration = await ipcRenderer.invoke(channel);
    Object.assign(process.env, cachedConfiguration.userEnv);
    webFrame.setZoomLevel(cachedConfiguration.zoomLevel ?? 0);
    return cachedConfiguration;
  } catch (error) {
    throw new Error(`Preload: unable to fetch vscode-window-config: ${error}`);
  }
}

const configurationPromise = loadWindowConfiguration();
const shellEnvPromise = (async () => {
  const [userEnv, shellEnv] = await Promise.all([
    configurationPromise.then((configuration) => configuration.userEnv),
    ipcRenderer.invoke('vscode:fetchShellEnv'),
  ]);

  return {
    ...process.env,
    ...shellEnv,
    ...userEnv,
  };
})();

function createIpcBridge() {
  return {
    send(channel, ...args) {
      assertSupportedChannel(channel);
      ipcRenderer.send(channel, ...args);
    },
    invoke(channel, ...args) {
      assertSupportedChannel(channel);
      return ipcRenderer.invoke(channel, ...args);
    },
    on(channel, listener) {
      assertSupportedChannel(channel);
      ipcRenderer.on(channel, listener);
      return this;
    },
    once(channel, listener) {
      assertSupportedChannel(channel);
      ipcRenderer.once(channel, listener);
      return this;
    },
    removeListener(channel, listener) {
      assertSupportedChannel(channel);
      ipcRenderer.removeListener(channel, listener);
      return this;
    },
  };
}

function createPortBridge() {
  return {
    acquire(channel, nonce) {
      assertSupportedChannel(channel);
      const handler = (event, incomingNonce) => {
        if (incomingNonce !== nonce) {
          return;
        }

        ipcRenderer.off(channel, handler);
        window.postMessage(nonce, '*', event.ports);
      };

      ipcRenderer.on(channel, handler);
    },
  };
}

function createProcessBridge() {
  return {
    get platform() {
      return process.platform;
    },
    get arch() {
      return process.arch;
    },
    get env() {
      return { ...process.env };
    },
    get versions() {
      return process.versions;
    },
    get type() {
      return 'renderer';
    },
    get execPath() {
      return process.execPath;
    },
    get pid() {
      return process.pid;
    },
    cwd() {
      const separator = process.platform === 'win32' ? '\\' : '/';
      return process.env.VSCODE_CWD
        || process.execPath.slice(0, process.execPath.lastIndexOf(separator));
    },
    shellEnv() {
      return shellEnvPromise;
    },
    getProcessMemoryInfo() {
      return process.getProcessMemoryInfo();
    },
    on(event, listener) {
      process.on(event, listener);
    },
    getHeapStatistics() {
      return process.getHeapStatistics();
    },
  };
}

function applyPreloadBridgeMarker(bridge, globalObject = globalThis) {
  if (!bridge || typeof bridge !== 'object') {
    return bridge;
  }

  bridge.__shopeeBridgeInfo = {
    ...PRELOAD_BRIDGE_PAYLOAD,
  };
  bridge[PRELOAD_BRIDGE_MARKER] = true;
  globalObject.console?.info?.('[preload bridge] marker applied');
  return bridge;
}

globalThis.__SHOPEE_PRELOAD_BRIDGE_APPLY__ = (bridge, globalObject = globalThis) => {
  applyPreloadBridgeMarker(bridge, globalObject);
  return true;
};

const bridge = applyPreloadBridgeMarker({
  ipcRenderer: createIpcBridge(),
  ipcMessagePort: createPortBridge(),
  webFrame: {
    setZoomLevel(level) {
      if (typeof level === 'number') {
        webFrame.setZoomLevel(level);
      }
    },
  },
  webUtils: {
    getPathForFile(file) {
      return webUtils.getPathForFile(file);
    },
  },
  process: createProcessBridge(),
  context: {
    configuration() {
      return cachedConfiguration;
    },
    async resolveConfiguration() {
      return configurationPromise;
    },
  },
});

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('vscode', bridge);
    contextBridge.exposeInMainWorld(PRELOAD_BRIDGE_INFO_GLOBAL, {
      ...PRELOAD_BRIDGE_PAYLOAD,
    });
  } catch (error) {
    console.error(error);
  }
} else {
  window.vscode = bridge;
  window[PRELOAD_BRIDGE_INFO_GLOBAL] = {
    ...PRELOAD_BRIDGE_PAYLOAD,
  };
}
