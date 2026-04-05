import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire, register as registerLoader } from 'node:module';

const require = createRequire(import.meta.url);
const fileRoot = path.dirname(fileURLToPath(import.meta.url));
const runtimeRoot = path.resolve(fileRoot, '..');

function mark(name) {
  try {
    if (typeof performance?.mark === 'function') {
      performance.mark(name);
    }
  } catch {}
}

function pipeLoggingToParent() {
  const maxStreamBufferLength = 1024 * 1024;
  const maxLength = 100000;

  function safeToString(args) {
    const seen = [];
    const values = [];

    for (let index = 0; index < args.length; index += 1) {
      let value = args[index];
      if (typeof value === 'undefined') {
        value = 'undefined';
      } else if (value instanceof Error) {
        value = value.stack || value.toString();
      }
      values.push(value);
    }

    try {
      const serialized = JSON.stringify(values, (_key, value) => {
        if (value && typeof value === 'object') {
          if (
            Array.isArray(value) ||
            (!(value instanceof RegExp) && !(value instanceof Date))
          ) {
            if (seen.includes(value)) {
              return '[Circular]';
            }
            seen.push(value);
          }
        }
        return value;
      });

      if (serialized.length > maxLength) {
        return 'Output omitted for a large object that exceeds the limits';
      }

      return serialized;
    } catch (error) {
      return `Output omitted for an object that cannot be inspected ('${error.toString()}')`;
    }
  }

  function safeSend(message) {
    try {
      process.send?.(message);
    } catch {}
  }

  function wrapConsoleMethod(method, severity) {
    Object.defineProperty(console, method, {
      set: () => {},
      get: () => function wrappedConsoleMethod() {
        safeSend({
          type: '__$console',
          severity,
          arguments: safeToString(arguments),
        });
      },
    });
  }

  function wrapStream(streamName, severity) {
    const stream = process[streamName];
    const originalWrite = stream.write.bind(stream);
    let buffer = '';

    Object.defineProperty(stream, 'write', {
      set: () => {},
      get: () => (chunk, encoding, callback) => {
        buffer += chunk.toString(encoding);
        const endOfLine = buffer.length > maxStreamBufferLength ? buffer.length : buffer.lastIndexOf('\n');
        if (endOfLine !== -1) {
          console[severity](buffer.slice(0, endOfLine));
          buffer = buffer.slice(endOfLine + 1);
        }
        return originalWrite(chunk, encoding, callback);
      },
    });
  }

  if (process.env.VSCODE_VERBOSE_LOGGING === 'true') {
    wrapConsoleMethod('info', 'log');
    wrapConsoleMethod('log', 'log');
    wrapConsoleMethod('warn', 'warn');
    wrapConsoleMethod('error', 'error');
  } else {
    console.log = () => {};
    console.warn = () => {};
    console.info = () => {};
    wrapConsoleMethod('error', 'error');
  }

  wrapStream('stderr', 'error');
  wrapStream('stdout', 'log');
}

function handleExceptions() {
  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception: ', error);
  });

  process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Promise Rejection: ', reason);
  });
}

function terminateWhenParentTerminates() {
  const parentPid = Number(process.env.VSCODE_PARENT_PID);
  if (typeof parentPid !== 'number' || Number.isNaN(parentPid)) {
    return;
  }

  setInterval(() => {
    try {
      process.kill(parentPid, 0);
    } catch {
      process.exit();
    }
  }, 5000);
}

function configureCrashReporter() {
  const crashReporterProcessType = process.env.VSCODE_CRASH_REPORTER_PROCESS_TYPE;
  if (!crashReporterProcessType) {
    return;
  }

  try {
    if (process.crashReporter && typeof process.crashReporter.addExtraParameter === 'function') {
      process.crashReporter.addExtraParameter('processType', crashReporterProcessType);
    }
  } catch (error) {
    console.error(error);
  }
}

function removeGlobalNodeJsModuleLookupPaths() {
  if (typeof process?.versions?.electron === 'string') {
    return;
  }

  const moduleModule = require('module');
  const globalPaths = moduleModule.globalPaths;
  const originalResolveLookupPaths = moduleModule._resolveLookupPaths;
  moduleModule._resolveLookupPaths = function patchedResolveLookupPaths(request, parent) {
    const result = originalResolveLookupPaths(request, parent);
    if (!Array.isArray(result)) {
      return result;
    }

    let commonSuffix = 0;
    while (
      commonSuffix < result.length &&
      commonSuffix < globalPaths.length &&
      result[result.length - 1 - commonSuffix] === globalPaths[globalPaths.length - 1 - commonSuffix]
    ) {
      commonSuffix += 1;
    }

    return result.slice(0, result.length - commonSuffix);
  };
}

function devInjectNodeModuleLookupPath(injectPath) {
  if (!process.env.VSCODE_DEV || !injectPath) {
    return;
  }

  registerLoader('./bootstrap-import.js', {
    parentURL: import.meta.url,
    data: { injectPath, dirname: fileRoot },
  });
}

function computeProductPaths() {
  return {
    productJsonPath: path.join(runtimeRoot, 'product.json'),
    packageJsonPath: path.join(runtimeRoot, 'package.json'),
    productOverridesPath: path.join(runtimeRoot, 'product.overrides.json'),
  };
}

function loadJson(filePath, fallback = {}) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return { ...fallback };
  }
}

async function loadNls() {
  mark('code/willLoadNls');

  if (!process.env.VSCODE_NLS_CONFIG) {
    mark('code/didLoadNls');
    return;
  }

  try {
    const config = JSON.parse(process.env.VSCODE_NLS_CONFIG);
    globalThis._VSCODE_NLS_LANGUAGE = config?.resolvedLanguage;
    const messagesFile = config?.languagePack?.messagesFile || config?.defaultMessagesFile;
    if (messagesFile && !process.env.VSCODE_DEV) {
      globalThis._VSCODE_NLS_MESSAGES = JSON.parse(fs.readFileSync(messagesFile, 'utf8'));
    }
  } catch (error) {
    console.error(`Error reading VSCODE_NLS_CONFIG from environment: ${error}`);
  }

  mark('code/didLoadNls');
}

mark('code/fork/start');

if (process.platform === 'darwin' && process.env.VSCODE_PROCESS_TITLE) {
  process.title = `${path.basename(process.title)}: ${process.env.VSCODE_PROCESS_TITLE}`;
}

configureCrashReporter();
removeGlobalNodeJsModuleLookupPaths();
devInjectNodeModuleLookupPath(process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH);

if (process.send && process.env.VSCODE_PIPE_LOGGING === 'true') {
  pipeLoggingToParent();
}

if (!process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS) {
  handleExceptions();
}

if (process.env.VSCODE_PARENT_PID) {
  terminateWhenParentTerminates();
}

const { productJsonPath, packageJsonPath, productOverridesPath } = computeProductPaths();

globalThis._VSCODE_PRODUCT_JSON = loadJson(productJsonPath, { nameShort: 'Cursor' });
if (process.env.VSCODE_DEV && fs.existsSync(productOverridesPath)) {
  globalThis._VSCODE_PRODUCT_JSON = {
    ...globalThis._VSCODE_PRODUCT_JSON,
    ...loadJson(productOverridesPath, {}),
  };
}
globalThis._VSCODE_PACKAGE_JSON = loadJson(packageJsonPath, { name: 'Cursor' });
globalThis._VSCODE_FILE_ROOT = fileRoot;
globalThis.__SHOPEE_BOOTSTRAP_FORK__ = {
  source: 'rebuilt/src/bootstrapFork/index.js',
  runtimeRoot,
  fileRoot,
  esmEntrypoint: process.env.VSCODE_ESM_ENTRYPOINT || null,
};

await loadNls();

const entryPoint = process.env.VSCODE_ESM_ENTRYPOINT;
if (!entryPoint) {
  throw new Error('Missing VSCODE_ESM_ENTRYPOINT');
}

const importAtRuntime = new Function('specifier', 'return import(specifier);');
await importAtRuntime(`./${entryPoint}.js`);
