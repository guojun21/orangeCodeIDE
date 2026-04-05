"use strict";

// Module: out-build/external/statsig/js-client/Network.js
// Offset: 26714746 (bundle byte offset)
// Size: 2235 bytes
Rtt();
YMA();
sga = class extends z2g {
  constructor(n, e) {
    super(n, e);
    const t = n?.networkConfig;
    this._option = n;
    this._initializeUrlConfig = new qtu(Cme._initialize, t?.initializeUrl, t?.api, t?.initializeFallbackUrls);
  }
  async fetchEvaluations(n, e, t, i, r) {
    const s = e ? bSt(e, "has_updates", "InitializeResponse") : null;
    let o = {
      user: i,
      hash: this._option?.networkConfig?.initializeHashAlgorithm ?? "djb2",
      deltasResponseRequested: false,
      full_checksum: null
    };
    if (s?.has_updates) {
      const a = s?.hash_used !== (this._option?.networkConfig?.initializeHashAlgorithm ?? "djb2");
      o = {
        ...o,
        sinceTime: r && !a ? s.time : 0,
        previousDerivedFields: "derived_fields" in s && r ? s.derived_fields : {},
        deltasResponseRequested: true,
        full_checksum: s.full_checksum,
        partialUserMatchSinceTime: a ? 0 : s.time
      };
    }
    return this._fetchEvaluations(n, s, o, t);
  }
  async _fetchEvaluations(n, e, t, i) {
    const r = await this.post({
      sdkKey: n,
      urlConfig: this._initializeUrlConfig,
      data: t,
      retries: 2,
      isStatsigEncodable: true,
      priority: i
    });
    if (r?.code === 204) {
      return "{\"has_updates\": false}";
    }
    if (r?.code !== 200) {
      return r?.body ?? null;
    }
    if (e?.has_updates !== true || r.body?.includes("\"is_delta\":true") !== true || t.deltasResponseRequested !== true) {
      return r.body;
    }
    const s = zMA(e, r.body);
    if (typeof s == "string") {
      return s;
    } else {
      return this._fetchEvaluations(n, e, {
        ...t,
        ...s,
        deltasResponseRequested: false
      }, i);
    }
  }
};
