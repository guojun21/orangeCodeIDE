#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';

function parseArgs(argv) {
  const args = {};
  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) {
      continue;
    }
    const key = token.slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = value;
    index += 1;
  }
  return args;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch {}
    await delay(500);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function waitForTarget(port, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const targets = await waitForJson(`http://127.0.0.1:${port}/json/list`, 2000);
      const target = targets.find((entry) => entry.type === 'page' && entry.webSocketDebuggerUrl);
      if (target) {
        return target;
      }
    } catch {}
    await delay(500);
  }
  throw new Error('Timed out waiting for a page target');
}

class CdpClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.nextId = 1;
    this.pending = new Map();
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.ws.addEventListener('open', resolve, { once: true });
      this.ws.addEventListener('error', reject, { once: true });
    });

    this.ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data.toString());
      if (typeof message.id !== 'number') {
        return;
      }
      const pending = this.pending.get(message.id);
      if (!pending) {
        return;
      }
      this.pending.delete(message.id);
      if (message.error) {
        pending.reject(new Error(message.error.message));
      } else {
        pending.resolve(message.result);
      }
    });
  }

  async send(method, params = {}) {
    const id = this.nextId++;
    const response = new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
    this.ws.send(JSON.stringify({ id, method, params }));
    return response;
  }

  async close() {
    await new Promise((resolve) => {
      this.ws.addEventListener('close', resolve, { once: true });
      this.ws.close();
    });
  }
}

const args = parseArgs(process.argv);
const port = Number.parseInt(args.port ?? '9333', 10);
const outputPath = args.output
  ? path.resolve(args.output)
  : path.join(ROOT, 'mapped', 'runtime-port-probe.json');
const screenshotPath = args.screenshot
  ? path.resolve(args.screenshot)
  : '/tmp/shopeecode-runtime-port-probe.png';

const versionInfo = await waitForJson(`http://127.0.0.1:${port}/json/version`);
const target = await waitForTarget(port);
const cdp = new CdpClient(target.webSocketDebuggerUrl);
await cdp.open();
await cdp.send('Runtime.enable');
await cdp.send('Page.enable');
await delay(2000);

const evaluation = await cdp.send('Runtime.evaluate', {
  expression: `(() => {
    const describeNode = (id) => {
      const node = document.getElementById(id);
      if (!node) {
        return null;
      }
      const style = window.getComputedStyle(node);
      const rect = node.getBoundingClientRect();
      return {
        id,
        text: node.textContent,
        connected: node.isConnected,
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity,
        zIndex: style.zIndex,
        position: style.position,
        background: style.backgroundColor,
        color: style.color,
        rect: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        }
      };
    };

    return JSON.stringify({
      title: document.title,
      readyState: document.readyState,
      hasWorkbench: !!document.querySelector('.monaco-workbench'),
      workbenchBadgeMarker: globalThis.__SHOPEE_WORKBENCH_REBUILT__ ?? null,
      preloadBridgeInfo: globalThis.vscode?.__shopeeBridgeInfo ?? null,
      statusPanelMarker: globalThis.__SHOPEE_WORKBENCH_STATUS_PANEL__ ?? null,
      badgeNode: !!document.getElementById('__shopee_workbench_rebuilt_badge'),
      statusPanelNode: !!document.getElementById('__shopee_workbench_status_panel'),
      badgeNodeInfo: describeNode('__shopee_workbench_rebuilt_badge'),
      statusPanelNodeInfo: describeNode('__shopee_workbench_status_panel')
    });
  })()`,
  returnByValue: true,
});

const screenshot = await cdp.send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(screenshotPath, Buffer.from(screenshot.data, 'base64'));

const result = {
  generatedAt: new Date().toISOString(),
  versionInfo,
  target: {
    id: target.id,
    title: target.title,
    url: target.url,
  },
  runtime: JSON.parse(evaluation.result.value),
  screenshotPath,
};

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2) + '\n');
console.log(outputPath);

await cdp.close();
