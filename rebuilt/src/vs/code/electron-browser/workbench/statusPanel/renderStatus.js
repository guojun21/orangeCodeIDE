import {
  WORKBENCH_STATUS_PANEL_ID,
  WORKBENCH_STATUS_STYLE,
  WORKBENCH_STATUS_TITLE,
} from './constants.js';

function buildLine(doc, text, color = '#93c5fd') {
  const line = doc.createElement('div');
  line.textContent = text;
  line.setAttribute('style', `margin-top:4px;color:${color};`);
  return line;
}

export function ensureWorkbenchStatusPanel(doc, bridgeInfo) {
  if (!doc) {
    return false;
  }

  const host = doc.querySelector('.monaco-workbench') ?? doc.body;
  if (!host) {
    return false;
  }

  host.style.setProperty('outline', '4px solid rgba(34,197,94,.95)', 'important');
  host.style.setProperty('outline-offset', '-4px', 'important');

  const existing = doc.getElementById(WORKBENCH_STATUS_PANEL_ID);
  if (existing) {
    existing.remove();
  }

  const panel = doc.createElement('div');
  panel.id = WORKBENCH_STATUS_PANEL_ID;
  panel.setAttribute('style', WORKBENCH_STATUS_STYLE);

  const title = doc.createElement('div');
  title.textContent = WORKBENCH_STATUS_TITLE;
  title.setAttribute('style', 'color:#f8fafc;font-weight:800;letter-spacing:.03em;');
  panel.appendChild(title);

  panel.appendChild(buildLine(doc, `preload: ${bridgeInfo?.preloadMarker ?? 'missing'}`, bridgeInfo ? '#86efac' : '#fca5a5'));
  panel.appendChild(buildLine(doc, `source: ${bridgeInfo?.source ?? 'unavailable'}`, '#cbd5e1'));

  host.appendChild(panel);
  return true;
}
