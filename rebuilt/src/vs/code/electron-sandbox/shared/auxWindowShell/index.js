'use strict';

const vscode = window.vscode;
const processInfo = vscode.process;

const IMPORT_MAP_NODE_MODULES = {
  react: 'react/esm-index-development.js',
  'react/jsx-runtime': 'react/esm-jsx-runtime-development.js',
  'react-dom': 'react-dom/esm-index-development.js',
  'react-dom/client': 'react-dom/esm-client-development.js',
  'react-vnc': 'react-vnc/dist/react-vnc.js',
  '@tanstack/query-core': '@tanstack/query-core/build/modern/index.js',
  '@tanstack/react-query': '@tanstack/react-query/build/modern/index.js',
  '@tanstack/solid-query': '@tanstack/solid-query/build/index.js',
  'solid-refresh': 'solid-refresh/dist/solid-refresh.mjs',
  '@solid-devtools/overlay': '@solid-devtools/overlay/dist/index.js',
  '@solid-devtools/debugger/setup': '@solid-devtools/debugger/dist/setup.js',
  '@solid-devtools/debugger/bundled': '@solid-devtools/debugger/dist/bundled.js',
  '@solid-devtools/shared/utils': '@solid-devtools/shared/dist/utils.js',
  '@nothing-but/utils': '@nothing-but/utils/dist/index.js',
  '@nothing-but/utils/num': '@nothing-but/utils/dist/num.js',
  'solid-js': 'solid-js/dist/dev.js',
  'solid-js/web': 'solid-js/web/dist/dev.js',
  'solid-js/store': 'solid-js/store/dist/dev.js',
  'solid-js/jsx-runtime': 'solid-js/h/jsx-runtime/dist/jsx.js',
  '@opentelemetry/api': '@opentelemetry/api/build/esm/index.js',
  '@connectrpc/connect': '@connectrpc/connect/dist/esm/index.js',
  '@connectrpc/connect/protocol': '@connectrpc/connect/dist/esm/protocol/index.js',
  rxjs: 'rxjs/dist/esm/index.js',
  'rxjs/internal/Subject': 'rxjs/dist/esm/internal/Subject.js',
  jimp: 'jimp/dist/esm/index.js',
  zod: 'zod/index.js',
  'gray-matter': 'gray-matter/index.js',
  '@sentry/browser': '@sentry/browser/build/npm/esm/dev/index.js',
  '@sentry-internal/replay': '@sentry-internal/replay/build/npm/esm/index.js',
  '@sentry-internal/replay-canvas': '@sentry-internal/replay-canvas/build/npm/esm/index.js',
  '@sentry-internal/feedback': '@sentry-internal/feedback/build/npm/esm/index.js',
};

const IMPORT_MAP_EXTERNAL = {
  'proto/': '../proto/',
  '@anysphere/proto/': '../proto/',
  '@bufbuild/protobuf': 'bufbuild/protobuf.js',
  '@sentry/core': 'sentry/core/index.js',
  '@sentry/types': 'sentry/types/index.js',
  '@sentry-internal/browser-utils': 'sentry/browser-utils/index.js',
  '@anysphere/constants': '../../packages/constants/dist/index.js',
  '@anysphere/agent-analytics': '../../packages/agent-analytics/dist/browser.js',
  '@anysphere/agent-analytics/browser': '../../packages/agent-analytics/dist/browser.js',
  '@anysphere/agent-analytics/commit-scoring': '../../packages/agent-analytics/dist/commit-scoring/index.js',
  '@anysphere/agent-exec': '../../packages/agent-exec/dist/index.js',
  '@anysphere/agent-core': '../../packages/agent-core/dist/index.js',
  '@anysphere/agent-kv': '../../packages/agent-kv/dist/index.js',
  '@anysphere/agent-transcript': '../../packages/agent-transcript/dist/index.js',
  '@anysphere/agent-client': '../../packages/agent-client/dist/index.js',
  '@anysphere/context': '../../packages/context/dist/index.js',
  '@anysphere/context-rpc': '../../packages/context-rpc/dist/index.js',
  '@anysphere/metrics': '../../packages/metrics/dist/index.js',
  '@anysphere/ui': '../../packages/ui/dist/bundle.js',
  '@anysphere/utils': '../../packages/utils/dist/browser.js',
  '@anysphere/git-core': '../../packages/git-core/dist/index.js',
  '@anysphere/hooks': '../../packages/hooks/dist/index.js',
};

const OPEN_TELEMETRY_API_SUBPATHS = [
  'api/context',
  'api/diag',
  'api/metrics',
  'api/propagation',
  'api/trace',
  'baggage/context-helpers',
  'baggage/internal/baggage-impl',
  'baggage/internal/symbol',
  'baggage/types',
  'baggage/utils',
  'common/Attributes',
  'common/Exception',
  'common/Time',
  'context/context',
  'context/NoopContextManager',
  'context/types',
  'diag/ComponentLogger',
  'diag/consoleLogger',
  'diag/internal/logLevelLogger',
  'diag/internal/noopLogger',
  'diag/types',
  'experimental/index',
  'experimental/trace/SugaredOptions',
  'experimental/trace/SugaredTracer',
  'internal/global-utils',
  'internal/semver',
  'metrics/Meter',
  'metrics/MeterProvider',
  'metrics/Metric',
  'metrics/NoopMeter',
  'metrics/NoopMeterProvider',
  'metrics/ObservableResult',
  'platform/browser/globalThis',
  'platform/browser/index',
  'platform/index',
  'platform/node/globalThis',
  'platform/node/index',
  'propagation/NoopTextMapPropagator',
  'propagation/TextMapPropagator',
  'trace/attributes',
  'trace/context-utils',
  'trace/internal/tracestate-impl',
  'trace/internal/tracestate-validators',
  'trace/internal/utils',
  'trace/invalid-span-constants',
  'trace/link',
  'trace/NonRecordingSpan',
  'trace/NoopTracer',
  'trace/NoopTracerProvider',
  'trace/ProxyTracer',
  'trace/ProxyTracerProvider',
  'trace/Sampler',
  'trace/SamplingResult',
  'trace/span',
  'trace/span_context',
  'trace/span_kind',
  'trace/spancontext-utils',
  'trace/SpanOptions',
  'trace/status',
  'trace/trace_flags',
  'trace/trace_state',
  'trace/tracer',
  'trace/tracer_options',
  'trace/tracer_provider',
  'context-api',
  'diag-api',
  'index',
  'metrics-api',
  'propagation-api',
  'trace-api',
  'version',
];

async function resolveWindowConfiguration() {
  const timeout = setTimeout(() => {
    console.error(
      '[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...'
    );
  }, 10_000);

  performance.mark('code/willWaitForWindowConfig');
  const configuration = await vscode.context.resolveConfiguration();
  performance.mark('code/didWaitForWindowConfig');
  clearTimeout(timeout);
  return configuration;
}

function configureDeveloperSettings(configuration, options) {
  const settings =
    typeof options?.configureDeveloperSettings === 'function'
      ? options.configureDeveloperSettings(configuration)
      : {
          forceEnableDeveloperKeybindings: false,
          disallowReloadKeybinding: false,
          removeDeveloperKeybindingsAfterLoad: false,
          forceDisableShowDevtoolsOnError: false,
        };

  const enableDeveloperKeybindings = Boolean(processInfo.env.VSCODE_DEV || settings.forceEnableDeveloperKeybindings);
  let developerDeveloperKeybindingsDisposable;
  if (enableDeveloperKeybindings) {
    developerDeveloperKeybindingsDisposable = registerDeveloperKeybindings(settings.disallowReloadKeybinding);
  }

  return {
    enableDeveloperKeybindings,
    removeDeveloperKeybindingsAfterLoad: settings.removeDeveloperKeybindingsAfterLoad,
    developerDeveloperKeybindingsDisposable,
    forceDisableShowDevtoolsOnError: settings.forceDisableShowDevtoolsOnError,
  };
}

function registerDeveloperKeybindings(disallowReloadKeybinding) {
  const ipcRenderer = vscode.ipcRenderer;
  const computeChord = (event) => [
    event.ctrlKey ? 'ctrl-' : '',
    event.metaKey ? 'meta-' : '',
    event.altKey ? 'alt-' : '',
    event.shiftKey ? 'shift-' : '',
    event.keyCode,
  ].join('');
  const toggleDevToolsKeybinding =
    processInfo.platform === 'darwin' ? 'meta-alt-73' : 'ctrl-shift-73';
  const legacyToggleDevToolsKeybinding = '123';
  const reloadWindowKeybinding = processInfo.platform === 'darwin' ? 'meta-82' : 'ctrl-82';

  let handler = (event) => {
    const chord = computeChord(event);
    if (chord === toggleDevToolsKeybinding || chord === legacyToggleDevToolsKeybinding) {
      ipcRenderer.send('vscode:toggleDevTools');
    } else if (chord === reloadWindowKeybinding && !disallowReloadKeybinding) {
      ipcRenderer.send('vscode:reloadWindow');
    }
  };

  window.addEventListener('keydown', handler);
  return function dispose() {
    if (!handler) {
      return;
    }
    window.removeEventListener('keydown', handler);
    handler = undefined;
  };
}

function applyNlsConfiguration(configuration) {
  globalThis._VSCODE_NLS_MESSAGES = configuration.nls.messages;
  globalThis._VSCODE_NLS_LANGUAGE = configuration.nls.language;

  let language = configuration.nls.language || 'en';
  if (language === 'zh-tw') {
    language = 'zh-Hant';
  } else if (language === 'zh-cn') {
    language = 'zh-Hans';
  }

  window.document.documentElement.setAttribute('lang', language);
}

function handleBootstrapError(error, shouldOpenDevTools) {
  if (shouldOpenDevTools) {
    vscode.ipcRenderer.send('vscode:openDevTools');
  }

  console.error(`[uncaught exception]: ${error}`);
  if (error && typeof error !== 'string' && error.stack) {
    console.error(error.stack);
  }
}

function fileUriFromPath(filePath, options) {
  let normalizedPath = filePath.replace(/\\/g, '/');
  if (normalizedPath.length > 0 && normalizedPath.charAt(0) !== '/') {
    normalizedPath = `/${normalizedPath}`;
  }

  let uri;
  if (options.isWindows && normalizedPath.startsWith('//')) {
    uri = encodeURI(`${options.scheme || 'file'}:${normalizedPath}`);
  } else {
    uri = encodeURI(
      `${options.scheme || 'file'}://${options.fallbackAuthority || ''}${normalizedPath}`
    );
  }

  return uri.replace(/#/g, '%23');
}

function installImportMap(configuration, outRoot) {
  const importMap = { imports: {} };

  for (const [specifier, relativePath] of Object.entries(IMPORT_MAP_NODE_MODULES)) {
    importMap.imports[specifier] = new URL(`../node_modules/${relativePath}`, outRoot).href;
  }

  for (const [specifier, relativePath] of Object.entries(IMPORT_MAP_EXTERNAL)) {
    importMap.imports[specifier] = new URL(`./external/${relativePath}`, outRoot).href;
  }

  const openTelemetryRoot = new URL('../node_modules/@opentelemetry/api/build/esm/', outRoot).href;
  for (const subPath of OPEN_TELEMETRY_API_SUBPATHS) {
    importMap.imports[`${openTelemetryRoot}${subPath}`] = `${openTelemetryRoot}${subPath}.js`;
  }
  importMap.imports[`${openTelemetryRoot}platform`] = `${openTelemetryRoot}platform/index.js`;
  importMap.imports[`${openTelemetryRoot}experimental`] = `${openTelemetryRoot}experimental/index.js`;
  importMap.imports[`${openTelemetryRoot}platform/node`] = `${openTelemetryRoot}platform/node/index.js`;
  importMap.imports[`${openTelemetryRoot}platform/browser`] = `${openTelemetryRoot}platform/browser/index.js`;

  if (configuration.cssModules && configuration.cssModules.size > 0) {
    performance.mark('code/willAddCssLoader');
    globalThis._VSCODE_CSS_LOAD = function loadCss(url, id, hash) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${url}?hash=${hash}`;
      link.type = 'text/css';
      link.media = 'screen';
      link.id = id.replace('.css', '');
      document.head.appendChild(link);
    };

    const cssModules = new Map(
      Array.from(configuration.cssModules, ([modulePath, hash]) => [
        modulePath,
        { hash, url: new URL(modulePath, outRoot).href },
      ])
    );

    const cssLoaderSource = `
      const cssMapping = ${JSON.stringify(Object.fromEntries(cssModules))};
      const url = new URL(import.meta.url);
      const params = new URLSearchParams(url.hash.slice(1));
      const currentModule = params.get('module');
      const entry = cssMapping[currentModule];
      if (entry) {
        globalThis._VSCODE_CSS_LOAD(entry.url, currentModule, entry.hash);
      } else {
        console.log('[CSS_DEV] No cssModule found', currentModule);
      }
      export default {};
    `;

    const blob = new Blob([cssLoaderSource], { type: 'application/javascript' });
    const cssLoaderUrl = URL.createObjectURL(blob);

    for (const [modulePath] of configuration.cssModules) {
      const cssUrl = new URL(modulePath, outRoot).href;
      importMap.imports[cssUrl] = `${cssLoaderUrl}#module=${encodeURIComponent(modulePath)}`;
    }

    const policy = window.trustedTypes?.createPolicy('vscode-bootstrapImportMap', {
      createScript(value) {
        return value;
      },
    });

    const importMapScript = document.createElement('script');
    importMapScript.type = 'importmap';
    importMapScript.setAttribute('nonce', '0c6a828f1297');
    const importMapContent = JSON.stringify(importMap, undefined, 2);
    importMapScript.textContent = policy?.createScript(importMapContent) ?? importMapContent;
    document.head.appendChild(importMapScript);
    performance.mark('code/didAddCssLoader');
    return;
  }

  const policy = window.trustedTypes?.createPolicy('vscode-bootstrapImportMap', {
    createScript(value) {
      return value;
    },
  });

  const importMapScript = document.createElement('script');
  importMapScript.type = 'importmap';
  importMapScript.setAttribute('nonce', '0c6a828f1297');
  const importMapContent = JSON.stringify(importMap, undefined, 2);
  importMapScript.textContent = policy?.createScript(importMapContent) ?? importMapContent;
  document.head.appendChild(importMapScript);
}

async function load(modulePath, options) {
  const configuration = await resolveWindowConfiguration();
  options?.beforeImport?.(configuration);

  const {
    enableDeveloperKeybindings,
    removeDeveloperKeybindingsAfterLoad,
    developerDeveloperKeybindingsDisposable,
    forceDisableShowDevtoolsOnError,
  } = configureDeveloperSettings(configuration, options);

  applyNlsConfiguration(configuration);

  const outRoot = new URL(
    `${fileUriFromPath(configuration.appRoot, {
      isWindows: processInfo.platform === 'win32',
      scheme: 'vscode-file',
      fallbackAuthority: 'vscode-app',
    })}/out/`
  );

  globalThis._VSCODE_FILE_ROOT = outRoot.toString();
  installImportMap(configuration, outRoot);

  try {
    const result = await import(new URL(`${modulePath}.js`, outRoot).href);
    if (developerDeveloperKeybindingsDisposable && removeDeveloperKeybindingsAfterLoad) {
      developerDeveloperKeybindingsDisposable();
    }
    return { result, configuration };
  } catch (error) {
    handleBootstrapError(error, enableDeveloperKeybindings && !forceDisableShowDevtoolsOnError);
    throw error;
  }
}

export function bootstrapAuxWindowShell(modulePath, options = {}) {
  globalThis.MonacoBootstrapWindow = { load };

  (async function startAuxWindow() {
    const { result, configuration } = await globalThis.MonacoBootstrapWindow.load(modulePath, options);
    result.startup(configuration);
  })();
}
