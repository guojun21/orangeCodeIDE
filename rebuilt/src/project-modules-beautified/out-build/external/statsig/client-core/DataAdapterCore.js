"use strict";

// Module: out-build/external/statsig/client-core/DataAdapterCore.js
// Offset: 26687752 (bundle byte offset)
// Size: 2692 bytes
eie();
tga();
b2g();
Btt();
v2g();
Ztu = 10;
y2g = class {
  constructor(n, e) {
    this._adapterName = n;
    this._cacheSuffix = e;
    this._options = null;
    this._sdkKey = null;
    this._lastModifiedStoreKey = `statsig.last_modified_time.${e}`;
    this._inMemoryCache = new w2g();
  }
  attach(n, e, t) {
    this._sdkKey = n;
    this._options = e;
  }
  getDataSync(n) {
    const e = n && Jbi(n, this._options);
    const t = this._getCacheKey(e);
    const i = this._inMemoryCache.get(t, e);
    if (i && this._getIsCacheValueValid(i)) {
      return i;
    }
    const r = this._loadFromCache(t);
    if (r && this._getIsCacheValueValid(r)) {
      this._inMemoryCache.add(t, r);
      return this._inMemoryCache.get(t, e);
    } else {
      return null;
    }
  }
  setData(n, e) {
    const t = e && Jbi(e, this._options);
    const i = this._getCacheKey(t);
    this._inMemoryCache.add(i, Ytu("Bootstrap", n, null, t));
  }
  _getIsCacheValueValid(n) {
    return n.stableID == null || n.stableID === TNe.get(this._getSdkKey());
  }
  async _getDataAsyncImpl(n, e, t) {
    if (!j3.isReady()) {
      await j3.isReadyResolver();
    }
    const i = n ?? this.getDataSync(e);
    const r = [this._fetchAndPrepFromNetwork(i, e, t)];
    if (t?.timeoutMs) {
      r.push(new Promise(s => setTimeout(s, t.timeoutMs)).then(() => {
        CI.debug("Fetching latest value timed out");
        return null;
      }));
    }
    return await Promise.race(r);
  }
  async _prefetchDataImpl(n, e) {
    const t = n && Jbi(n, this._options);
    const i = this._getCacheKey(t);
    const r = await this._getDataAsyncImpl(null, t, e);
    if (r) {
      this._inMemoryCache.add(i, {
        ...r,
        source: "Prefetch"
      });
    }
  }
  async _fetchAndPrepFromNetwork(n, e, t) {
    const i = n?.data ?? null;
    const r = n != null && this._isCachedResultValidFor204(n, e);
    const s = await this._fetchFromNetwork(i, e, t, r);
    if (!s) {
      CI.debug("No response returned for latest value");
      return null;
    }
    const o = bSt(s, "has_updates", "Response");
    const a = this._getSdkKey();
    const l = TNe.get(a);
    let u = null;
    if (o?.has_updates === true) {
      u = Ytu("Network", s, l, e);
    } else if (i && o?.has_updates === false) {
      u = Ytu("NetworkNotModified", i, l, e);
    } else {
      return null;
    }
    const d = this._getCacheKey(e);
    this._inMemoryCache.add(d, u);
    this._writeToCache(d, u);
    return u;
  }
  _getSdkKey() {
    return this._sdkKey ?? (CI.error(`${this._adapterName} is not attached to a Client`), "");
  }
  _loadFromCache(n) {
    const e = j3.getItem?.(n);
    if (e == null) {
      return null;
    }
    const t = bSt(e, "source", "Cached Result");
    if (t) {
      return {
        ...t,
        source: "Cache"
      };
    } else {
      return null;
    }
  }
  _writeToCache(n, e) {
    j3.setItem(n, JSON.stringify(e));
    this._runLocalStorageCacheEviction(n);
  }
  _runLocalStorageCacheEviction(n) {
    const e = Jpa(this._lastModifiedStoreKey) ?? {};
    e[n] = Date.now();
    const t = A2g(e, Ztu);
    if (t) {
      delete e[t];
      j3.removeItem(t);
    }
    Gpa(this._lastModifiedStoreKey, e);
  }
};
w2g = class {
  constructor() {
    this._data = {};
  }
  get(n, e) {
    const t = this._data[n];
    const i = t?.stableID;
    const r = e?.customIDs?.stableID;
    if (r && i && r !== i) {
      CI.warn("'StatsigUser.customIDs.stableID' mismatch");
      return null;
    } else {
      return t;
    }
  }
  add(n, e) {
    const t = A2g(this._data, Ztu - 1);
    if (t) {
      delete this._data[t];
    }
    this._data[n] = e;
  }
  merge(n) {
    this._data = {
      ...this._data,
      ...n
    };
  }
};
