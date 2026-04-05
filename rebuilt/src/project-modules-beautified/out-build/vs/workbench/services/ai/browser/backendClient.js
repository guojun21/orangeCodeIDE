"use strict";

// Module: out-build/vs/workbench/services/ai/browser/backendClient.js
// Offset: 27505497 (bundle byte offset)
// Size: 1938 bytes
mD();
rt();
Dd();
vE();
Pfa();
YS = class extends at {
  constructor(e, t, i, r) {
    super();
    this.opts = e;
    this._reactiveStorageService = t;
    this._aiConnectRequestService = i;
    this._structuredLogService = r;
    this._serversCreated = false;
    this._authWaitedOnce = false;
    this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this));
    this._register(this._aiConnectRequestService.onDidChangeTransport(() => {
      this.createServer();
    }));
  }
  async get() {
    const e = this.server;
    if (!this._serversCreated || e === undefined) {
      this.createServer();
      this._serversCreated = true;
    }
    const t = await this.server;
    if (t === undefined) {
      throw new Error("Invariant violated! server did not get created.");
    }
    return t;
  }
  createServer() {
    this.server = this.createSingleServer();
  }
  async createSingleServer() {
    const e = this.opts.service.typeName;
    if (this.opts.waitForAuth !== false && !this._authWaitedOnce) {
      const s = await this._aiConnectRequestService.waitForAuthReady();
      this._authWaitedOnce = true;
      if (s.raceConditionPrevented) {
        this._structuredLogService.info("auth", "BackendClient waited for auth before creating server", {
          subkey: "backend_client_auth_wait",
          service: e,
          waitedMs: String(s.waitedMs ?? 0),
          hasToken: String(s.hasToken)
        });
      }
      if (!s.isReady) {
        this._structuredLogService.warn("auth", "BackendClient proceeding without auth ready (timeout or logged out)", {
          subkey: "backend_client_no_auth",
          service: e,
          waitedMs: String(s.waitedMs ?? 0)
        });
      }
    }
    const i = await this._aiConnectRequestService.transport();
    let r = i;
    if (this.opts.headerInjector) {
      const s = this.opts.headerInjector;
      r = {
        unary: async (o, a, l, u, d, m, p) => {
          const g = new Headers(d);
          for (const [f, A] of Object.entries(await s())) {
            g.set(f, A);
          }
          return i.unary(o, a, l, u, g, m, p);
        },
        stream: async (o, a, l, u, d, m, p) => {
          const g = new Headers(d);
          for (const [f, A] of Object.entries(await s())) {
            g.set(f, A);
          }
          return i.stream(o, a, l, u, Object.fromEntries(g), m, p);
        }
      };
    }
    return kMg(this.opts.service, r);
  }
};
YS = __decorate([__param(1, ku), __param(2, lmn), __param(3, Kk)], YS);
