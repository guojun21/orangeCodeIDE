#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';
const SOURCE_PATH = path.join(ROOT, 'out', 'vs', 'code', 'electron-sandbox', 'workbench', 'workbench.js');
const OUTPUT_PATH = path.join(
  ROOT,
  'rebuilt',
  'src',
  'vs',
  'code',
  'electron-browser',
  'workbench',
  'workbenchShell',
  'index.js'
);

const ORIGINAL_SET_NLS = `function y(a){globalThis._VSCODE_NLS_MESSAGES=a.nls.messages,globalThis._VSCODE_NLS_LANGUAGE=a.nls.language;let r=a.nls.language||"en";r==="zh-tw"?r="zh-Hant":r==="zh-cn"&&(r="zh-Hans"),window.document.documentElement.setAttribute("lang",r)}`;

const INJECTED_HELPERS = `function __shopeeEnsureWorkbenchBadge__(){const a="__shopee_workbench_rebuilt_badge",r=document.querySelector(".monaco-workbench")??document.body;if(!r)return!1;if(document.getElementById(a))return!0;const e=document.createElement("div");return e.id=a,e.textContent="SHOPEE WORKBENCH REBUILT",e.setAttribute("style","position:fixed;bottom:76px;right:16px;z-index:2147483647;padding:6px 10px;border-radius:999px;background:#1dd1a1;color:#0f172a;font:700 12px/1.2 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;box-shadow:0 10px 28px rgba(0,0,0,.35);pointer-events:none"),r.appendChild(e),!0}function __shopeeEnsureWorkbenchStatus__(){const a=window.vscode?.__shopeeBridgeInfo??null,r="__shopee_workbench_status_panel",e=document.querySelector(".monaco-workbench")??document.body;if(!e)return!1;e.style.setProperty("outline","4px solid rgba(34,197,94,.95)","important"),e.style.setProperty("outline-offset","-4px","important");const o=document.getElementById(r);o&&o.remove();const l=document.createElement("div");l.id=r,l.setAttribute("style","position:fixed;bottom:116px;right:16px;z-index:2147483646;min-width:220px;padding:10px 12px;border-radius:14px;background:rgba(15,23,42,.92);color:#e2e8f0;font:600 12px/1.4 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;box-shadow:0 14px 34px rgba(0,0,0,.4);pointer-events:none");const s=document.createElement("div");s.textContent="SHOPEE RUNTIME STATUS",s.setAttribute("style","color:#f8fafc;font-weight:800;letter-spacing:.03em;"),l.appendChild(s);const t=document.createElement("div");t.textContent=\`preload: \${a?.preloadMarker??"missing"}\`,t.setAttribute("style",\`margin-top:4px;color:\${a?"#86efac":"#fca5a5"};\`),l.appendChild(t);const i=document.createElement("div");return i.textContent=\`source: \${a?.source??"unavailable"}\`,i.setAttribute("style","margin-top:4px;color:#cbd5e1;"),l.appendChild(i),e.appendChild(l),window.__SHOPEE_WORKBENCH_STATUS_PANEL__={bridgeInfo:a,source:"rebuilt/src/vs/code/electron-browser/workbench/workbenchShell"},!0}function __shopeeApplyWorkbenchShellMarkers__(){window.__SHOPEE_WORKBENCH_REBUILT__={source:"rebuilt/src/vs/code/electron-browser/workbench/workbenchShell",badgeId:"__shopee_workbench_rebuilt_badge",badgeText:"SHOPEE WORKBENCH REBUILT"};const a=()=>{__shopeeEnsureWorkbenchBadge__(),__shopeeEnsureWorkbenchStatus__()};document?.readyState==="loading"?window.addEventListener("DOMContentLoaded",a,{once:!0}):a(),window.setTimeout(a,1200)}`;

const REPLACED_SET_NLS = `${INJECTED_HELPERS}function y(a){globalThis._VSCODE_NLS_MESSAGES=a.nls.messages,globalThis._VSCODE_NLS_LANGUAGE=a.nls.language;let r=a.nls.language||"en";r==="zh-tw"?r="zh-Hant":r==="zh-cn"&&(r="zh-Hans"),window.document.documentElement.setAttribute("lang",r);try{__shopeeApplyWorkbenchShellMarkers__()}catch(e){console.error("[workbench shell rebuilt]",e)}}`;

const source = fs.readFileSync(SOURCE_PATH, 'utf8');

if (!source.includes(ORIGINAL_SET_NLS)) {
  throw new Error('Could not find workbench NLS initializer for shell source generation');
}

const output = source.replace(ORIGINAL_SET_NLS, REPLACED_SET_NLS);

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, output);

console.log(OUTPUT_PATH);
