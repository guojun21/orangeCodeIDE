"use strict";

// Module: out-build/external/statsig/client-core/NetworkFallbackResolver.js
// Offset: 26695358 (bundle byte offset)
// Size: 2241 bytes
gMA();
Lhn();
eie();
Btt();
inu = 604800000;
L2g = 14400000;
N2g = class {
  constructor(n) {
    this._fallbackInfo = null;
    this._errorBoundary = null;
    this._dnsQueryCooldowns = {};
    this._networkOverrideFunc = n.networkConfig?.networkOverrideFunc;
  }
  setErrorBoundary(n) {
    this._errorBoundary = n;
  }
  tryBumpExpiryTime(n, e) {
    const t = this._fallbackInfo?.[e.endpoint];
    if (t) {
      t.expiryTime = Date.now() + inu;
      nnu(n, {
        ...this._fallbackInfo,
        [e.endpoint]: t
      });
    }
  }
  getActiveFallbackUrl(n, e) {
    if (e.customUrl != null && e.fallbackUrls != null) {
      return null;
    }
    let t = this._fallbackInfo;
    if (t == null) {
      t = bMA(n) ?? {};
      this._fallbackInfo = t;
    }
    const i = t[e.endpoint];
    if (!i || Date.now() > (i.expiryTime ?? 0) || e.getChecksum() !== i.urlConfigChecksum) {
      delete t[e.endpoint];
      this._fallbackInfo = t;
      nnu(n, this._fallbackInfo);
      return null;
    } else if (i.url) {
      return i.url;
    } else {
      return null;
    }
  }
  async tryFetchUpdatedFallbackInfo(n, e, t, i) {
    try {
      if (!fMA(t, i)) {
        return false;
      }
      const s = e.customUrl == null && e.fallbackUrls == null ? await this._tryFetchFallbackUrlsFromNetwork(e) : e.fallbackUrls;
      const o = this._pickNewFallbackUrl(this._fallbackInfo?.[e.endpoint], s);
      if (o) {
        this._updateFallbackInfoWithNewUrl(n, e, o);
        return true;
      } else {
        return false;
      }
    } catch (r) {
      this._errorBoundary?.logError("tryFetchUpdatedFallbackInfo", r);
      return false;
    }
  }
  _updateFallbackInfoWithNewUrl(n, e, t) {
    const i = {
      urlConfigChecksum: e.getChecksum(),
      url: t,
      expiryTime: Date.now() + inu,
      previous: []
    };
    const r = e.endpoint;
    const s = this._fallbackInfo?.[r];
    if (s) {
      i.previous.push(...s.previous);
    }
    if (i.previous.length > 10) {
      i.previous = [];
    }
    const o = this._fallbackInfo?.[r]?.url;
    if (o != null) {
      i.previous.push(o);
    }
    this._fallbackInfo = {
      ...this._fallbackInfo,
      [r]: i
    };
    nnu(n, this._fallbackInfo);
  }
  async _tryFetchFallbackUrlsFromNetwork(n) {
    const e = this._dnsQueryCooldowns[n.endpoint];
    if (e && Date.now() < e) {
      return null;
    }
    this._dnsQueryCooldowns[n.endpoint] = Date.now() + L2g;
    const t = [];
    const i = await mMA(this._networkOverrideFunc ?? fetch);
    const r = vMA(n.defaultUrl);
    for (const s of i) {
      if (!s.startsWith(n.endpointDnsKey + "=")) {
        continue;
      }
      const o = s.split("=");
      if (o.length > 1) {
        let a = o[1];
        if (a.endsWith("/")) {
          a = a.slice(0, -1);
        }
        t.push(`https://${a}${r}`);
      }
    }
    return t;
  }
  _pickNewFallbackUrl(n, e) {
    if (e == null) {
      return null;
    }
    const t = new Set(n?.previous ?? []);
    const i = n?.url;
    let r = null;
    for (const s of e) {
      const o = s.endsWith("/") ? s.slice(0, -1) : s;
      if (!t.has(s) && o !== i) {
        r = o;
        break;
      }
    }
    return r;
  }
};
