#!/usr/bin/env node

import { delay } from './helpers.mjs';

export class CdpClient {
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
    if (this.ws.readyState >= WebSocket.CLOSING) {
      return;
    }
    await new Promise((resolve) => {
      const timer = setTimeout(resolve, 1500);
      this.ws.addEventListener('close', () => {
        clearTimeout(timer);
        resolve();
      }, { once: true });
      this.ws.close();
    });
  }
}

export async function waitForJson(port, endpoint, timeoutMs = 30000) {
  const start = Date.now();
  const url = `http://127.0.0.1:${port}${endpoint}`;
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch {}
    await delay(250);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

export async function listTargets(port, timeoutMs = 5000) {
  return waitForJson(port, '/json/list', timeoutMs);
}

export async function waitForPageTarget(port, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const targets = await listTargets(port, 2000);
      const target = targets.find((entry) => entry.type === 'page' && entry.webSocketDebuggerUrl);
      if (target) {
        return target;
      }
    } catch {}
    await delay(250);
  }
  throw new Error(`Timed out waiting for page target on port ${port}`);
}

export async function waitForAnyTarget(port, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const targets = await listTargets(port, 2000);
      if (targets.length > 0) {
        return targets;
      }
    } catch {}
    await delay(250);
  }
  throw new Error(`Timed out waiting for any target on port ${port}`);
}
