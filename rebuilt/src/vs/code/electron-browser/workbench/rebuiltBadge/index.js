import {
  WORKBENCH_BADGE_ID,
  WORKBENCH_BADGE_TEXT,
  WORKBENCH_REBUILT_MARKER,
} from './constants.js';
import { ensureWorkbenchRebuiltBadge } from './renderBadge.js';

export function applyWorkbenchRebuiltBadge(globalObject = globalThis) {
  globalObject[WORKBENCH_REBUILT_MARKER] = {
    source: 'rebuilt/src/vs/code/electron-browser/workbench/rebuiltBadge',
    badgeId: WORKBENCH_BADGE_ID,
    badgeText: WORKBENCH_BADGE_TEXT,
  };

  const doc = globalObject.document;
  const install = () => ensureWorkbenchRebuiltBadge(doc);

  if (doc?.readyState === 'loading') {
    globalObject.addEventListener('DOMContentLoaded', install, { once: true });
  } else {
    install();
  }

  globalObject.setTimeout(install, 1200);
  globalObject.console?.info?.('[workbench rebuilt] badge applied');
}

globalThis.__SHOPEE_WORKBENCH_BADGE_APPLY__ = () => applyWorkbenchRebuiltBadge(globalThis);
