"use strict";

// Module: out-build/external/statsig/client-core/NetworkCore.js
// Offset: 26700230 (bundle byte offset)
// Size: 5276 bytes
Ttt();
Ttt();
Btu();
eie();
Opa();
AMA();
M2g();
enu();
fSt();
lnu();
tga();
$2g();
Zpa();
$bi();
Wtu();
H2g = 10000;
J2g = 500;
G2g = 30000;
W2g = 1000;
unu = 50;
Q2g = unu / W2g;
j2g = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
z2g = class {
  constructor(n, e) {
    this._emitter = e;
    this._errorBoundary = null;
    this._timeout = H2g;
    this._netConfig = {};
    this._options = {};
    this._leakyBucket = {};
    this._lastUsedInitUrl = null;
    if (n) {
      this._options = n;
    }
    if (this._options.networkConfig) {
      this._netConfig = this._options.networkConfig;
    }
    if (this._netConfig.networkTimeoutMs) {
      this._timeout = this._netConfig.networkTimeoutMs;
    }
    this._fallbackResolver = new N2g(this._options);
    this.setLogEventCompressionMode(this._getLogEventCompressionMode(n));
  }
  setLogEventCompressionMode(n) {
    this._options.logEventCompressionMode = n;
  }
  setErrorBoundary(n) {
    this._errorBoundary = n;
    this._errorBoundary.wrap(this);
    this._errorBoundary.wrap(this._fallbackResolver);
    this._fallbackResolver.setErrorBoundary(n);
  }
  isBeaconSupported() {
    return typeof navigator !== "undefined" && typeof navigator.sendBeacon == "function";
  }
  getLastUsedInitUrlAndReset() {
    const n = this._lastUsedInitUrl;
    this._lastUsedInitUrl = null;
    return n;
  }
  beacon(n) {
    if (!dnu(n)) {
      return false;
    }
    const e = this._getInternalRequestArgs("POST", n);
    const t = this._getPopulatedURL(e);
    const i = navigator;
    return i.sendBeacon.bind(i)(t, e.body);
  }
  async post(n) {
    const e = this._getInternalRequestArgs("POST", n);
    this._tryEncodeBody(e);
    await this._tryToCompressBody(e);
    return this._sendRequest(e);
  }
  get(n) {
    const e = this._getInternalRequestArgs("GET", n);
    return this._sendRequest(e);
  }
  async _sendRequest(n) {
    if (!dnu(n) || this._netConfig.preventAllNetworkTraffic) {
      return null;
    }
    const {
      method: e,
      body: t,
      retries: i,
      attempt: r
    } = n;
    const s = n.urlConfig.endpoint;
    if (this._isRateLimited(s)) {
      CI.warn(`Request to ${s} was blocked because you are making requests too frequently.`);
      return null;
    }
    const o = r ?? 1;
    const a = typeof AbortController !== "undefined" ? new AbortController() : null;
    const l = setTimeout(() => {
      a?.abort(`Timeout of ${this._timeout}ms expired.`);
    }, this._timeout);
    const u = this._getPopulatedURL(n);
    let d = null;
    const m = Gtu();
    try {
      const p = {
        method: e,
        body: t,
        headers: {
          ...n.headers
        },
        signal: a?.signal,
        priority: n.priority,
        keepalive: m
      };
      DMA(n, o);
      const g = this._leakyBucket[s];
      if (g) {
        g.lastRequestTime = Date.now();
        this._leakyBucket[s] = g;
      }
      d = await (this._netConfig.networkOverrideFunc ?? fetch)(u, p);
      clearTimeout(l);
      if (!d.ok) {
        const w = await d.text().catch(() => "No Text");
        const C = new Error(`NetworkError: ${u} ${w}`);
        C.name = "NetworkError";
        throw C;
      }
      const A = await d.text();
      q2g(n, d, o, A);
      this._fallbackResolver.tryBumpExpiryTime(n.sdkKey, n.urlConfig);
      return {
        body: A,
        code: d.status
      };
    } catch (p) {
      const g = TMA(a, p);
      const f = IMA(a);
      q2g(n, d, o, "", p);
      if (await this._fallbackResolver.tryFetchUpdatedFallbackInfo(n.sdkKey, n.urlConfig, g, f)) {
        n.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(n.sdkKey, n.urlConfig);
      }
      if (!i || o > i || !j2g.has(d?.status ?? 500)) {
        this._emitter?.({
          name: "error",
          error: p,
          tag: U2g.NetworkError,
          requestArgs: n
        });
        const w = `A networking error occurred during ${e} request to ${u}.`;
        CI.error(w, g, p);
        this._errorBoundary?.attachErrorIfNoneExists(w);
        return null;
      }
      await BMA(o);
      return this._sendRequest({
        ...n,
        retries: i,
        attempt: o + 1
      });
    }
  }
  _getLogEventCompressionMode(n) {
    let e = n?.logEventCompressionMode;
    if (!e && n?.disableCompression === true) {
      e = Dtt.Disabled;
    }
    e ||= Dtt.Enabled;
    return e;
  }
  _isRateLimited(n) {
    const e = Date.now();
    const t = this._leakyBucket[n] ?? {
      count: 0,
      lastRequestTime: e
    };
    const i = e - t.lastRequestTime;
    const r = Math.floor(i * Q2g);
    t.count = Math.max(0, t.count - r);
    if (t.count >= unu) {
      return true;
    } else {
      t.count += 1;
      t.lastRequestTime = e;
      this._leakyBucket[n] = t;
      return false;
    }
  }
  _getPopulatedURL(n) {
    const e = n.fallbackUrl ?? n.urlConfig.getUrl();
    if (n.urlConfig.endpoint === Cme._initialize || n.urlConfig.endpoint === Cme._download_config_specs) {
      this._lastUsedInitUrl = e;
    }
    const t = {
      [v$e.SdkKey]: n.sdkKey,
      [v$e.SdkType]: Gbi._get(n.sdkKey),
      [v$e.SdkVersion]: Kpa,
      [v$e.Time]: String(Date.now()),
      [v$e.SessionID]: cnu.get(n.sdkKey),
      ...n.params
    };
    const i = Object.keys(t).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&");
    return `${e}${i ? `?${i}
  ` : ""}`;
  }
  _tryEncodeBody(n) {
    const e = gSt();
    const t = n.body;
    if (!!n.isStatsigEncodable && !this._options.disableStatsigEncoding && typeof t == "string" && Etu("no-encode") == null && !!e?.btoa) {
      try {
        n.body = e.btoa(t).split("").reverse().join("");
        n.params = {
          ...(n.params ?? {}),
          [v$e.StatsigEncoded]: "1"
        };
      } catch (i) {
        CI.warn(`Request encoding failed for ${n.urlConfig.getUrl()}`, i);
      }
    }
  }
  async _tryToCompressBody(n) {
    const e = n.body;
    if (typeof e == "string" && !!xMA(n, this._options)) {
      try {
        const t = new TextEncoder().encode(e);
        const i = new CompressionStream("gzip");
        const r = i.writable.getWriter();
        r.write(t).catch(CI.error);
        r.close().catch(CI.error);
        const s = i.readable.getReader();
        const o = [];
        let a;
        while (!(a = await s.read()).done) {
          o.push(a.value);
        }
        const l = o.reduce((m, p) => m + p.length, 0);
        const u = new Uint8Array(l);
        let d = 0;
        for (const m of o) {
          u.set(m, d);
          d += m.length;
        }
        n.body = u;
        n.params = {
          ...(n.params ?? {}),
          [v$e.IsGzipped]: "1"
        };
      } catch (t) {
        CI.warn(`Request compression failed for ${n.urlConfig.getUrl()}`, t);
      }
    }
  }
  _getInternalRequestArgs(n, e) {
    const t = this._fallbackResolver.getActiveFallbackUrl(e.sdkKey, e.urlConfig);
    const i = {
      ...e,
      method: n,
      fallbackUrl: t
    };
    if ("data" in e) {
      V2g(i, e.data);
    }
    return i;
  }
};
dnu = n => n.sdkKey ? true : (CI.warn("Unable to make request without an SDK key"), false);
V2g = (n, e) => {
  const {
    sdkKey: t,
    fallbackUrl: i
  } = n;
  const r = TNe.get(t);
  const s = cnu.get(t);
  const o = Gbi._get(t);
  n.body = JSON.stringify({
    ...e,
    statsigMetadata: {
      ...jtu.get(),
      stableID: r,
      sessionID: s,
      sdkType: o,
      fallbackUrl: i
    }
  });
};
