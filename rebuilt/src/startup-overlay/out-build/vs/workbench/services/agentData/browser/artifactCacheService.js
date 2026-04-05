"use strict";

// Module: out-build/vs/workbench/services/agentData/browser/artifactCacheService.js
// Offset: 30759187 (bundle byte offset)
// Size: 4532 bytes
yn();
rt();
Wt();
Er();
Vw();
t_i();
jkf = "backgroundComposerArtifactCache";
zkf = 1;
r1t = "artifacts";
Emu = 432000000;
xmu = 33554432;
Vkf = 524288;
Tmu = xi("artifactCacheService");
Kkf = class {
  constructor(n) {
    this._onDidChange = new Qe();
    this.onDidChange = this._onDidChange.event;
    this._url = n;
  }
  get url() {
    return this._url;
  }
  update(n) {
    if (n !== this._url) {
      this._url = n;
      this._onDidChange.fire(n);
    }
  }
  dispose() {
    this._onDidChange.dispose();
  }
};
S0a = class extends at {
  constructor(e) {
    super();
    this._aiService = e;
    this._activeBlobUrls = new Map();
    this._inflightFetches = new Map();
    this._inflightRevalidations = new Set();
    this._lastFetchedAt = new Map();
    this._handles = new Map();
  }
  async resolveArtifactUrl(e, t, i) {
    if (!Nny(t)) {
      const l = await this._resolveViaPresignedUrl(e, t, i);
      return this._getOrCreateHandle(Gkf(e, t), l);
    }
    const r = Gkf(e, t);
    const s = this._activeBlobUrls.get(r);
    if (s) {
      this._maybeRevalidateInBackground(e, t, r);
      return this._getOrCreateHandle(r, s);
    }
    const o = this._inflightFetches.get(r);
    if (o) {
      return o;
    }
    const a = this._resolveWithDiskCache(e, t, r, i);
    this._inflightFetches.set(r, a);
    a.finally(() => {
      this._inflightFetches.delete(r);
    });
    return a;
  }
  _getOrCreateHandle(e, t) {
    let i = this._handles.get(e);
    if (i) {
      i.update(t);
      return i;
    } else {
      i = new Kkf(t);
      this._handles.set(e, i);
      return i;
    }
  }
  async _resolveWithDiskCache(e, t, i, r) {
    const s = await this._idbGet(i);
    if (s) {
      const o = Qkf(s.content, s.contentType);
      this._activeBlobUrls.set(i, o);
      if (Wkf(s)) {
        this._revalidate(e, t, i);
      }
      return this._getOrCreateHandle(i, o);
    }
    await this._fetchAndCache(e, t, i, r);
    return this._handles.get(i);
  }
  async _fetchAndCache(e, t, i, r) {
    const {
      arrayBuffer: s,
      contentType: o,
      totalSize: a
    } = await this._streamArtifact(e, t, r);
    const l = this._activeBlobUrls.get(i);
    if (l) {
      const d = await this._idbGet(i);
      if (d && Mny(d.content, s)) {
        if (a <= xmu) {
          this._idbPut(i, {
            content: d.content,
            contentType: o,
            savedAt: Date.now()
          }).catch(() => {});
        }
        this._lastFetchedAt.set(i, Date.now());
        return;
      }
    }
    if (a <= xmu) {
      this._idbPut(i, {
        content: s,
        contentType: o,
        savedAt: Date.now()
      }).catch(() => {});
    }
    const u = Qkf(s, o);
    this._activeBlobUrls.set(i, u);
    this._lastFetchedAt.set(i, Date.now());
    if (l) {
      URL.revokeObjectURL(l);
    }
    this._getOrCreateHandle(i, u);
  }
  async _streamArtifact(e, t, i) {
    const r = await this._aiService.backgroundComposerClient();
    try {
      const s = r.streamBackgroundComposerArtifact({
        bcId: e,
        absolutePath: t
      }, i ? {
        signal: i
      } : undefined);
      let o = "application/octet-stream";
      let a = 0;
      const l = [];
      for await (const d of s) {
        if (d.contentType) {
          o = d.contentType;
        }
        if (d.totalSize) {
          a = Number(d.totalSize);
        }
        if (d.contentChunk.length > 0) {
          l.push(d.contentChunk);
        }
      }
      const u = Fny(l, a);
      if (a === 0) {
        a = u.byteLength;
      }
      return {
        arrayBuffer: u,
        contentType: o,
        totalSize: a
      };
    } catch {
      const s = await r.getBackgroundComposerArtifactBytes({
        bcId: e,
        absolutePath: t
      }, i ? {
        signal: i
      } : undefined);
      const o = s.content.buffer.slice(s.content.byteOffset, s.content.byteOffset + s.content.byteLength);
      const a = s.contentType || "application/octet-stream";
      return {
        arrayBuffer: o,
        contentType: a,
        totalSize: o.byteLength
      };
    }
  }
  _maybeRevalidateInBackground(e, t, i) {
    if (!this._inflightRevalidations.has(i)) {
      this._idbGet(i).then(r => {
        if (r) {
          if (Wkf(r)) {
            this._revalidate(e, t, i);
          }
          return;
        }
        const s = this._lastFetchedAt.get(i);
        if (!s || Date.now() - s > Emu) {
          this._revalidate(e, t, i);
        }
      }).catch(() => {});
    }
  }
  _revalidate(e, t, i) {
    if (!this._inflightRevalidations.has(i)) {
      this._inflightRevalidations.add(i);
      this._fetchAndCache(e, t, i, undefined).catch(() => {}).finally(() => {
        this._inflightRevalidations.delete(i);
      });
    }
  }
  async _resolveViaPresignedUrl(e, t, i) {
    return (await (await this._aiService.backgroundComposerClient()).getBackgroundComposerArtifact({
      bcId: e,
      absolutePath: t
    }, i ? {
      signal: i
    } : undefined)).url;
  }
  _getDb() {
    this._dbPromise ||= new Promise((e, t) => {
      const i = indexedDB.open(jkf, zkf);
      i.onupgradeneeded = () => {
        const r = i.result;
        if (!r.objectStoreNames.contains(r1t)) {
          r.createObjectStore(r1t);
        }
      };
      i.onsuccess = () => e(i.result);
      i.onerror = () => t(i.error);
    });
    return this._dbPromise;
  }
  async _idbGet(e) {
    const t = await this._getDb();
    return new Promise((i, r) => {
      const a = t.transaction(r1t, "readonly").objectStore(r1t).get(e);
      a.onsuccess = () => i(a.result);
      a.onerror = () => r(a.error);
    });
  }
  async _idbPut(e, t) {
    const i = await this._getDb();
    return new Promise((r, s) => {
      const l = i.transaction(r1t, "readwrite").objectStore(r1t).put(t, e);
      l.onsuccess = () => r();
      l.onerror = () => s(l.error);
    });
  }
  dispose() {
    super.dispose();
    for (const e of this._activeBlobUrls.values()) {
      URL.revokeObjectURL(e);
    }
    this._activeBlobUrls.clear();
    for (const e of this._handles.values()) {
      e.dispose();
    }
    this._handles.clear();
    this._dbPromise?.then(e => e.close()).catch(() => {});
    this._dbPromise = undefined;
  }
};
S0a = __decorate([__param(0, Jv)], S0a);
Vi(Tmu, S0a, 1);
