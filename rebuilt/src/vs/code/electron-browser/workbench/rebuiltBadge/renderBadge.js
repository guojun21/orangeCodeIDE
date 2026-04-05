import {
  WORKBENCH_BADGE_ID,
  WORKBENCH_BADGE_STYLE,
  WORKBENCH_BADGE_TEXT,
} from './constants.js';

export function ensureWorkbenchRebuiltBadge(doc) {
  if (!doc) {
    return false;
  }

  const host = doc.querySelector('.monaco-workbench') ?? doc.body;
  if (!host) {
    return false;
  }

  if (doc.getElementById(WORKBENCH_BADGE_ID)) {
    return true;
  }

  const badge = doc.createElement('div');
  badge.id = WORKBENCH_BADGE_ID;
  badge.textContent = WORKBENCH_BADGE_TEXT;
  badge.setAttribute('style', WORKBENCH_BADGE_STYLE);
  host.appendChild(badge);
  return true;
}
