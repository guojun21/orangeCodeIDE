"use strict";

// Module: out-build/vs/workbench/services/agentData/browser/cacheStorageService.js
// Offset: 28512128 (bundle byte offset)
// Size: 5664 bytes
vr();
rt();
cu();
Er();
Mf();
Wt();
kr();
LAa = "agentData.cacheStorage.";
oif = 300000;
NAa = "::";
aif = [-1, 0, 1];
cif = [0, 1];
lif = 604800000;
uif = 67108864;
glu = xi("cacheStorageService");
MAa = class extends at {
  constructor(e, t) {
    super();
    this._storageService = e;
    this._inMemoryCache = new Fb(Number.MAX_SAFE_INTEGER);
    this._inMemorySizeBytes = 0;
    this._storageExpiryByScopedKey = new Map();
    this._storageIndexHydrated = false;
    this._defaultTtlMs = Math.max(1, Math.floor(t?.defaultTtlMs ?? lif));
    this._cleanupIntervalMs = Math.max(1, Math.floor(t?.cleanupIntervalMs ?? oif));
    this._maxInMemoryBytes = Math.max(1, Math.floor(t?.maxInMemoryBytes ?? uif));
    this._now = t?.now ?? (() => Date.now());
    this._cleanupScheduler = this._register(new Hu(() => this._runCleanupCycle(), this._cleanupIntervalMs));
    this._cleanupScheduler.schedule();
    const i = this._register(new Ut());
    this._register(this._storageService.onDidChangeValue(-1, undefined, i)(r => this._onStorageValueChanged(r)));
    this._register(this._storageService.onDidChangeValue(0, undefined, i)(r => this._onStorageValueChanged(r)));
    this._register(this._storageService.onDidChangeValue(1, undefined, i)(r => this._onStorageValueChanged(r)));
  }
  get(e, t) {
    const i = this._toStorageKey(e);
    const r = this._toMemoryKey(t, i);
    const s = this._now();
    const o = this._inMemoryCache.get(r);
    if (o) {
      if (o.expiresAt <= s) {
        this._deleteFromInMemory(r);
        this._storageService.remove(i, t);
        return;
      }
      return o.value;
    }
    const a = this._storageService.get(i, t);
    if (a === undefined) {
      this._untrackStorageEntry(t, i);
      return;
    }
    const l = this._parsePayload(a);
    if (!l || l.expiresAt <= s) {
      this._storageService.remove(i, t);
      this._untrackStorageEntry(t, i);
      return;
    }
    this._setInMemory(r, l.value, l.expiresAt);
    this._trackStorageEntry(t, i, l.expiresAt);
    return l.value;
  }
  store(e, t, i, r, s = this._defaultTtlMs) {
    const o = Math.floor(s);
    if (!Number.isFinite(o) || o <= 0) {
      this.remove(e, i);
      return;
    }
    const a = this._toStorageKey(e);
    const l = this._toMemoryKey(i, a);
    const u = this._now() + o;
    const d = {
      value: t,
      expiresAt: u
    };
    this._storageService.store(a, JSON.stringify(d), i, r);
    this._setInMemory(l, t, u);
    this._trackStorageEntry(i, a, u);
  }
  remove(e, t) {
    const i = this._toStorageKey(e);
    const r = this._toMemoryKey(t, i);
    this._deleteFromInMemory(r);
    this._untrackStorageEntry(t, i);
    this._storageService.remove(i, t);
  }
  _runCleanupCycle() {
    this._evictExpiredInMemory();
    this._evictExpiredInStorage();
    this._cleanupScheduler.schedule();
  }
  _evictExpiredInMemory() {
    const e = this._now();
    const t = [];
    for (const [i, r] of this._inMemoryCache) {
      if (r.expiresAt <= e) {
        t.push(i);
      }
    }
    for (const i of t) {
      this._deleteFromInMemory(i);
    }
  }
  _evictExpiredInStorage() {
    this._hydrateStorageIndex();
    const e = this._now();
    const t = [];
    for (const [i, r] of this._storageExpiryByScopedKey) {
      if (r <= e) {
        t.push(i);
      }
    }
    for (const i of t) {
      const {
        scope: r,
        storageKey: s
      } = this._fromScopedStorageKey(i);
      this._storageService.remove(s, r);
      this._deleteFromInMemory(this._toMemoryKey(r, s));
      this._storageExpiryByScopedKey.delete(i);
    }
  }
  _hydrateStorageIndex() {
    if (this._storageIndexHydrated) {
      return;
    }
    this._storageIndexHydrated = true;
    const e = this._now();
    for (const t of aif) {
      for (const i of cif) {
        for (const r of this._storageService.keys(t, i)) {
          if (!r.startsWith(LAa)) {
            continue;
          }
          const s = this._storageService.get(r, t);
          if (s === undefined) {
            this._untrackStorageEntry(t, r);
            continue;
          }
          const o = this._parsePayload(s);
          if (!o || o.expiresAt <= e) {
            this._storageService.remove(r, t);
            this._deleteFromInMemory(this._toMemoryKey(t, r));
            this._untrackStorageEntry(t, r);
            continue;
          }
          this._trackStorageEntry(t, r, o.expiresAt);
        }
      }
    }
  }
  _setInMemory(e, t, i) {
    this._deleteFromInMemory(e);
    const r = this._estimateEntrySize(e, t);
    this._inMemoryCache.set(e, {
      value: t,
      expiresAt: i,
      sizeBytes: r
    });
    this._inMemorySizeBytes += r;
    this._trimInMemoryToLimit();
  }
  _trimInMemoryToLimit() {
    while (this._inMemorySizeBytes > this._maxInMemoryBytes && this._inMemoryCache.size > 0) {
      const e = this._inMemoryCache.keys().next().value;
      if (e === undefined) {
        break;
      }
      this._deleteFromInMemory(e);
    }
  }
  _deleteFromInMemory(e) {
    const t = this._inMemoryCache.peek(e);
    if (t) {
      this._inMemorySizeBytes = Math.max(0, this._inMemorySizeBytes - t.sizeBytes);
      this._inMemoryCache.delete(e);
    }
  }
  _parsePayload(e) {
    try {
      const t = JSON.parse(e);
      if (typeof t.value != "string" || typeof t.expiresAt != "number" || !Number.isFinite(t.expiresAt)) {
        return undefined;
      } else {
        return {
          value: t.value,
          expiresAt: t.expiresAt
        };
      }
    } catch {
      return;
    }
  }
  _estimateEntrySize(e, t) {
    return 64 + (e.length + t.length) * 2;
  }
  _onStorageValueChanged(e) {
    if (!e.key.startsWith(LAa)) {
      return;
    }
    const t = this._toMemoryKey(e.scope, e.key);
    if (e.target === undefined) {
      this._deleteFromInMemory(t);
      this._untrackStorageEntry(e.scope, e.key);
      return;
    }
    const i = this._storageService.get(e.key, e.scope);
    if (i === undefined) {
      this._deleteFromInMemory(t);
      this._untrackStorageEntry(e.scope, e.key);
      return;
    }
    const r = this._parsePayload(i);
    if (!r || r.expiresAt <= this._now()) {
      this._storageService.remove(e.key, e.scope);
      this._deleteFromInMemory(t);
      this._untrackStorageEntry(e.scope, e.key);
      return;
    }
    this._setInMemory(t, r.value, r.expiresAt);
    this._trackStorageEntry(e.scope, e.key, r.expiresAt);
  }
  _trackStorageEntry(e, t, i) {
    this._storageExpiryByScopedKey.set(this._toScopedStorageKey(e, t), i);
  }
  _untrackStorageEntry(e, t) {
    this._storageExpiryByScopedKey.delete(this._toScopedStorageKey(e, t));
  }
  _toStorageKey(e) {
    return `${LAa}${e}`;
  }
  _toMemoryKey(e, t) {
    return `${e}:${t}`;
  }
  _toScopedStorageKey(e, t) {
    return `${e}${NAa}${t}`;
  }
  _fromScopedStorageKey(e) {
    const t = e.indexOf(NAa);
    if (t === -1) {
      throw new Error(`Invalid scoped storage key: ${e}`);
    }
    const i = Number(e.slice(0, t));
    const r = e.slice(t + NAa.length);
    return {
      scope: i,
      storageKey: r
    };
  }
};
MAa = __decorate([__param(0, Hi)], MAa);
Vi(glu, new Xl(MAa, [], true));
