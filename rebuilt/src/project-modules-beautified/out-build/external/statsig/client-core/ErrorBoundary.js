"use strict";

// Module: out-build/external/statsig/client-core/ErrorBoundary.js
// Offset: 26691561 (bundle byte offset)
// Size: 1609 bytes
eie();
enu();
Zpa();
C2g = "https://statsigapi.net/v1/sdk_exception";
tnu = "[Statsig] UnknownError";
S2g = class {
  constructor(n, e, t, i) {
    this._sdkKey = n;
    this._options = e;
    this._emitter = t;
    this._lastSeenError = i;
    this._seen = new Set();
  }
  wrap(n) {
    try {
      const e = n;
      aMA(e).forEach(t => {
        const i = e[t];
        if (!("$EB" in i)) {
          e[t] = (...r) => this._capture(t, () => i.apply(n, r));
          e[t].$EB = true;
        }
      });
    } catch (e) {
      this._onError("eb:wrap", e);
    }
  }
  logError(n, e) {
    this._onError(n, e);
  }
  getLastSeenErrorAndReset() {
    const n = this._lastSeenError;
    this._lastSeenError = undefined;
    return n ?? null;
  }
  attachErrorIfNoneExists(n) {
    this._lastSeenError ||= _2g(n);
  }
  _capture(n, e) {
    try {
      const t = e();
      if (t && t instanceof Promise) {
        return t.catch(i => this._onError(n, i));
      } else {
        return t;
      }
    } catch (t) {
      this._onError(n, t);
      return null;
    }
  }
  _onError(n, e) {
    try {
      CI.warn(`Caught error in ${n}`, {
        error: e
      });
      (async () => {
        const i = e || Error(tnu);
        const r = i instanceof Error;
        const s = r ? i.name : "No Name";
        const o = _2g(i);
        this._lastSeenError = o;
        if (this._seen.has(s)) {
          return;
        }
        this._seen.add(s);
        if (this._options?.networkConfig?.preventAllNetworkTraffic) {
          this._emitter?.({
            name: "error",
            error: e,
            tag: n
          });
          return;
        }
        const a = Gbi._get(this._sdkKey);
        const l = jtu.get();
        const u = r ? i.stack : oMA(i);
        const d = {
          tag: n,
          exception: s,
          info: u,
          statsigOptions: cMA(this._options),
          ...l,
          sdkType: a
        };
        await (this._options?.networkConfig?.networkOverrideFunc ?? fetch)(C2g, {
          method: "POST",
          headers: {
            "STATSIG-API-KEY": this._sdkKey,
            "STATSIG-SDK-TYPE": String(a),
            "STATSIG-SDK-VERSION": String(l.sdkVersion),
            "Content-Type": "application/json"
          },
          body: JSON.stringify(d)
        });
        this._emitter?.({
          name: "error",
          error: e,
          tag: n
        });
      })().then(() => {}).catch(() => {});
    } catch {}
  }
};
