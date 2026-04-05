"use strict";

// Module: out-build/vs/platform/cursor/browser/aiEverythingProviderService.js
// Offset: 27594444 (bundle byte offset)
// Size: 4974 bytes
yn();
rt();
Er();
Wt();
AU = xi("everythingProviderService");
bJg = class extends at {
  constructor() {
    super();
    this._onDidChangeCommandProvider = this._register(new Qe());
    this.onDidChangeCommandProvider = this._onDidChangeCommandProvider.event;
    this._commandProviderGeneration = 0;
    this._routerProvider = {
      supportedCommands: [],
      runCommand: (n, e, t) => {
        const i = this._commandMap.get(n);
        if (i) {
          return i.provider.runCommand(n, e, t);
        } else {
          return Promise.resolve(undefined);
        }
      }
    };
    this._commandMap = new Map();
  }
  _emitCommandProviderChanges(n, e, t) {
    for (const i of e) {
      this._commandProviderGeneration++;
      this._onDidChangeCommandProvider.fire({
        providerId: n,
        command: i,
        state: t,
        generation: this._commandProviderGeneration
      });
    }
  }
  registerEverythingProvider(n, e, t) {
    if (t.length === 0) {
      throw new Error("EverythingProvider must declare at least one supported command");
    }
    const i = new Set();
    for (const r of t) {
      if (i.has(r)) {
        throw new Error(`EverythingProvider command '${r}' listed more than once in registration request`);
      }
      i.add(r);
      const s = this._commandMap.get(r);
      if (s) {
        throw new Error(`EverythingProvider command '${r}' already registered by provider ${s.providerId}`);
      }
    }
    for (const r of t) {
      this._commandMap.set(r, {
        providerId: n,
        provider: e
      });
    }
    this._refreshRouter();
    this._emitCommandProviderChanges(n, t, "registered");
  }
  unregisterEverythingProvider(n, e) {
    const t = [];
    for (const i of e) {
      const r = this._commandMap.get(i);
      if (r && r.providerId === n) {
        this._commandMap.delete(i);
        t.push(i);
      }
    }
    this._refreshRouter();
    this._emitCommandProviderChanges(n, t, "unregistered");
  }
  unregisterEverythingProviderById(n) {
    let e = false;
    const t = [];
    for (const [i, r] of Array.from(this._commandMap.entries())) {
      if (r.providerId === n) {
        this._commandMap.delete(i);
        e = true;
        t.push(i);
      }
    }
    if (e) {
      this._refreshRouter();
      this._emitCommandProviderChanges(n, t, "unregistered");
    }
  }
  _refreshRouter() {
    if (this._commandMap.size === 0) {
      this.provider = undefined;
      return;
    }
    this._routerProvider = {
      supportedCommands: Array.from(this._commandMap.keys()),
      runCommand: this._routerProvider.runCommand
    };
    this.provider = this._routerProvider;
  }
  registerEverythingProviderAllLocal(n) {
    this.onlyLocalProvider = n;
  }
  unregisterEverythingProviderAllLocal() {
    this.onlyLocalProvider = undefined;
  }
  async waitForEverythingProvider(n) {
    if (this.provider) {
      return this.provider;
    } else {
      return new Promise((e, t) => {
        const i = Date.now();
        const r = () => {
          if (this.provider) {
            e(this.provider);
            return;
          }
          if (Date.now() - i >= n) {
            t(new Error("Timeout waiting for EverythingProvider"));
            return;
          }
          setTimeout(r, 100);
        };
        r();
      });
    }
  }
  async waitForOnlyLocalProvider(n) {
    if (this.onlyLocalProvider) {
      return this.onlyLocalProvider;
    } else {
      return new Promise((e, t) => {
        const i = Date.now();
        const r = () => {
          if (this.onlyLocalProvider) {
            e(this.onlyLocalProvider);
            return;
          }
          if (Date.now() - i >= n) {
            t(new Error("Timeout waiting for OnlyLocalProvider"));
            return;
          }
          setTimeout(r, 100);
        };
        r();
      });
    }
  }
  async waitForCommandEverythingProvider(n, e) {
    if (this._commandMap.has(e)) {
      return this._commandMap.get(e).provider;
    } else {
      return new Promise((t, i) => {
        const r = Date.now();
        const s = () => {
          if (this._commandMap.has(e)) {
            t(this._commandMap.get(e).provider);
            return;
          }
          if (Date.now() - r >= n) {
            i(new Error(`Timeout waiting for EverythingProvider with command '${e}'`));
            return;
          }
          setTimeout(s, 100);
        };
        s();
      });
    }
  }
};
Vi(AU, bJg, 1);
