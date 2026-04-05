"use strict";

// Module: out-build/vs/workbench/contrib/search/common/cacheState.js
// Offset: 28194368 (bundle byte offset)
// Size: 1644 bytes
_3t();
np();
(function (n) {
  n[n.Created = 1] = "Created";
  n[n.Loading = 2] = "Loading";
  n[n.Loaded = 3] = "Loaded";
  n[n.Errored = 4] = "Errored";
  n[n.Disposed = 5] = "Disposed";
})(xEe ||= {});
eef = class {
  get cacheKey() {
    if (this.loadingPhase === xEe.Loaded || !this.previousCacheState) {
      return this._cacheKey;
    } else {
      return this.previousCacheState.cacheKey;
    }
  }
  get isLoaded() {
    const n = this.loadingPhase === xEe.Loaded;
    if (n || !this.previousCacheState) {
      return n;
    } else {
      return this.previousCacheState.isLoaded;
    }
  }
  get isUpdating() {
    const n = this.loadingPhase === xEe.Loading;
    if (n || !this.previousCacheState) {
      return n;
    } else {
      return this.previousCacheState.isUpdating;
    }
  }
  constructor(n, e, t, i) {
    this.cacheQuery = n;
    this.loadFn = e;
    this.disposeFn = t;
    this.previousCacheState = i;
    this._cacheKey = w3t.nextId();
    this.query = this.cacheQuery(this._cacheKey);
    this.loadingPhase = xEe.Created;
    if (this.previousCacheState) {
      const r = Object.assign({}, this.query, {
        cacheKey: null
      });
      const s = Object.assign({}, this.previousCacheState.query, {
        cacheKey: null
      });
      if (!fv(r, s)) {
        this.previousCacheState.dispose();
        this.previousCacheState = undefined;
      }
    }
  }
  load() {
    if (this.isUpdating) {
      return this;
    } else {
      this.loadingPhase = xEe.Loading;
      this.loadPromise = (async () => {
        try {
          await this.loadFn(this.query);
          this.loadingPhase = xEe.Loaded;
          if (this.previousCacheState) {
            this.previousCacheState.dispose();
            this.previousCacheState = undefined;
          }
        } catch (n) {
          this.loadingPhase = xEe.Errored;
          throw n;
        }
      })();
      return this;
    }
  }
  dispose() {
    if (this.loadPromise) {
      (async () => {
        try {
          await this.loadPromise;
        } catch {}
        this.loadingPhase = xEe.Disposed;
        this.disposeFn(this._cacheKey);
      })();
    } else {
      this.loadingPhase = xEe.Disposed;
    }
    if (this.previousCacheState) {
      this.previousCacheState.dispose();
      this.previousCacheState = undefined;
    }
  }
};
