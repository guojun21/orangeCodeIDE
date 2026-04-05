'use strict';

import * as originalModule from './workbench.desktop.main.original.js';
import * as rebuiltTslib from './tslibRebuilt.js';
import { runStartupModuleResolutionCanaryPass } from './startupModuleResolutionHelper.js';

const MARKER_KEY = '__SHOPEE_WORKBENCH_DESKTOP_MAIN_PROXY__';
const ORIGINAL_MODULE_URL = new URL('./workbench.desktop.main.original.js', import.meta.url).href;
const INTERCEPTED_EXPORT_KEYS = [
  '__extends',
  '__rest',
  '__decorate',
  '__param',
  '__esDecorate',
  '__runInitializers',
  '__propKey',
  '__setFunctionName',
  '__metadata',
  '__awaiter',
  '__generator',
  '__exportStar',
  '__values',
  '__read',
  '__spread',
  '__spreadArrays',
  '__spreadArray',
  '__await',
  '__asyncGenerator',
  '__asyncDelegator',
  '__asyncValues',
  '__makeTemplateObject',
  '__importStar',
  '__importDefault',
  '__classPrivateFieldGet',
  '__classPrivateFieldSet',
  '__classPrivateFieldIn',
  '__addDisposableResource',
  '__disposeResources',
  '__assign',
  '__createBinding',
];

function describeMainReturnValue(value) {
  const type = value === null ? 'null' : typeof value;
  const contract = {
    type,
    tag: Object.prototype.toString.call(value),
    isAsync: !!value && typeof value.then === 'function',
    hasDispose: !!value && typeof value.dispose === 'function',
    constructorName:
      value && typeof value === 'object' && value.constructor && typeof value.constructor.name === 'string'
        ? value.constructor.name
        : typeof value === 'function' && typeof value.name === 'string'
          ? value.name || null
          : null,
  };

  if ((type === 'object' && value !== null) || type === 'function') {
    try {
      const enumerableKeys = Object.keys(value);
      const ownPropertyNames = Object.getOwnPropertyNames(value);
      contract.enumerableKeyCount = enumerableKeys.length;
      contract.ownPropertyCount = ownPropertyNames.length;
      contract.enumerableKeys = enumerableKeys.slice(0, 32);
      contract.ownPropertyNames = ownPropertyNames.slice(0, 32);
    } catch (error) {
      contract.inspectError = error instanceof Error ? error.message : String(error);
    }
  }

  return contract;
}

globalThis[MARKER_KEY] = {
  kind: 'browser-mega-bundle',
  source: 'rebuilt/src/vs/workbench/workbenchDesktopMain/index.js',
  originalModuleUrl: ORIGINAL_MODULE_URL,
  loadedAt: new Date().toISOString(),
  importResolvedAt: new Date().toISOString(),
  originalExportKeys: Object.keys(originalModule),
  interceptedExportKeys: INTERCEPTED_EXPORT_KEYS,
  tslibSource: 'rebuilt',
};

export {
  __extends,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __assign,
  __createBinding,
} from './tslibRebuilt.js';

export const deterministicMathRandom = originalModule.deterministicMathRandom;
export const MATH_RANDOM_PLEASE_CONSIDER_HOW_THIS_AFFECTS_TEST_COVERAGE =
  originalModule.MATH_RANDOM_PLEASE_CONSIDER_HOW_THIS_AFFECTS_TEST_COVERAGE;
export const generateCustomPalette = originalModule.generateCustomPalette;
export default originalModule.default;

export function main(configuration) {
  const current = globalThis[MARKER_KEY] ?? {};
  const startupModuleResolution = runStartupModuleResolutionCanaryPass(configuration);
  globalThis[MARKER_KEY] = {
    ...current,
    mainCalledAt: new Date().toISOString(),
    configurationKeys:
      configuration && typeof configuration === 'object'
        ? Object.keys(configuration).sort()
        : [],
    hasWorkspace: !!configuration?.workspace,
    windowId: configuration?.windowId ?? null,
    rebuiltTslibExportCount: INTERCEPTED_EXPORT_KEYS.filter((key) => typeof rebuiltTslib[key] === 'function').length,
    startupModuleResolution,
  };

  const result = originalModule.main(configuration);
  const next = globalThis[MARKER_KEY] ?? {};
  globalThis[MARKER_KEY] = {
    ...next,
    mainReturnedAt: new Date().toISOString(),
    mainReturnContract: describeMainReturnValue(result),
  };

  return result;
}
