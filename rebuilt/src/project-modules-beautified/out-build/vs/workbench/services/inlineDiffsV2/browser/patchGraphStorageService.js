"use strict";

// Module: out-build/vs/workbench/services/inlineDiffsV2/browser/patchGraphStorageService.js
// Offset: 26893350 (bundle byte offset)
// Size: 6416 bytes
vr();
yn();
rt();
Yn();
dr();
Dnu();
Er();
Wt();
jr();
kr();
ps();
Wu();
ml();
SSt();
Mga();
qhn = xi("patchGraphStorageService");
OFg = class vQb extends rn {
  static {
    this.ID = "patchGraph.clearStorage";
  }
  constructor() {
    super({
      id: vQb.ID,
      title: {
        value: "Clear Patch Graph Storage",
        original: "Clear Patch Graph Storage"
      },
      category: {
        value: "Developer",
        original: "Developer"
      },
      f1: true
    });
  }
  async run(e) {
    await e.get(qhn).clearStorage();
  }
};
Lga(OFg, "inline_diffs_v2_adapter");
Fga = class extends at {
  constructor(e, t, i, r, s, o) {
    super();
    this.patchGraphService = e;
    this.storageService = t;
    this.workspaceContextService = i;
    this.logService = r;
    this.nonAgentChangeTracker = o;
    this._ready = new x6();
    this.whenReady = this._ready.wait().then(() => {});
    this._isLoading = false;
    this._fullyLoadedFiles = new Set();
    this._inFlightLoads = new Map();
    this._onDidClearPatchesForComposer = this._register(new Qe());
    this.onDidClearPatchesForComposer = this._onDidClearPatchesForComposer.event;
    this._featureEnabled = s.checkFeatureGate("inline_diffs_v2_adapter");
    if (!this._featureEnabled) {
      this._ready.open();
      return;
    }
    this._register(this.storageService.cursorDiskKVOnShouldSave(async () => {
      await this._persist();
    }));
    Promise.all([this.nonAgentChangeTracker.whenReady, this._load()]).finally(() => this._ready.open());
  }
  async clearPatchesForComposer(e) {
    if (!this._featureEnabled) {
      return;
    }
    const t = this.patchGraphService.query([{
      composerMetadata: {
        composerId: e
      }
    }]);
    const i = [];
    for (const r of t) {
      r.attribs.reviewed = true;
      i.push(r.attribs.fileUri);
    }
    if (i.length > 0) {
      this.nonAgentChangeTracker.onPatchesReviewed();
      this._onDidClearPatchesForComposer.fire({
        composerId: e,
        affectedFileUris: i
      });
    }
  }
  async clearStorage() {
    if (this._featureEnabled) {
      this.patchGraphService.clear();
      this._fullyLoadedFiles.clear();
      await this.storageService.cursorDiskKVClearPrefix(this._getMetaPrefix());
      await this.storageService.cursorDiskKVClearPrefix(this._getDataPrefix());
      await this.nonAgentChangeTracker.clearStorage();
      this.logService.info("[PatchGraphStorage] Cleared all patch graph data from memory and disk");
    }
  }
  async ensureHunksLoaded(e) {
    if (!this._featureEnabled) {
      return;
    }
    const t = e.toString();
    if (this._fullyLoadedFiles.has(t)) {
      return;
    }
    const i = this._inFlightLoads.get(t);
    if (i) {
      return i;
    }
    const r = this._doLoadHunksForFile(e, t).then(() => {
      this._fullyLoadedFiles.add(t);
    }).finally(() => {
      this._inFlightLoads.delete(t);
    });
    this._inFlightLoads.set(t, r);
    return r;
  }
  async _doLoadHunksForFile(e, t) {
    const i = await this._getDataKey(e);
    const r = await this.storageService.cursorDiskKVGet(i);
    if (!r) {
      this.logService.warn("[PatchGraphStorage] No data key found for", t);
      return;
    }
    let s;
    try {
      s = JSON.parse(r);
    } catch (o) {
      this.logService.error("[PatchGraphStorage] Corrupt data key for", t, o);
      return;
    }
    if (s.version !== 2 || !s.hunksByPatchId) {
      this.logService.warn("[PatchGraphStorage] Unknown data version or missing hunks for", t);
      return;
    }
    this.patchGraphService.hydrateSkeletonHunks(e, s.hunksByPatchId);
  }
  _getWorkspaceId() {
    return this.workspaceContextService.getWorkspace()?.id ?? "default";
  }
  _getMetaPrefix() {
    return `patch-graph:${this._getWorkspaceId()}:meta:`;
  }
  _getDataPrefix() {
    return `patch-graph:${this._getWorkspaceId()}:data:`;
  }
  async _uriHash(e) {
    const t = new TextEncoder().encode(e.toString());
    const i = await crypto.subtle.digest("SHA-256", t);
    return Array.from(new Uint8Array(i)).map(r => r.toString(16).padStart(2, "0")).join("");
  }
  async _getMetaKey(e) {
    return `${this._getMetaPrefix()}${await this._uriHash(e)}`;
  }
  async _getDataKey(e) {
    return `${this._getDataPrefix()}${await this._uriHash(e)}`;
  }
  async _persist() {
    if (!this._isLoading) {
      try {
        const e = Array.from(this.patchGraphService.getFilesWithPatches());
        const t = new Set();
        for (const i of e) {
          const r = je.parse(i);
          const s = this.patchGraphService.getNodesForFile(r);
          if (s.length === 0) {
            continue;
          }
          const o = await this._getMetaKey(r);
          const a = await this._getDataKey(r);
          t.add(o);
          const l = this._serializeFileMeta(r, s);
          await this.storageService.cursorDiskKVSet(o, JSON.stringify(l));
          const u = await this._serializeFileData(s, a);
          await this.storageService.cursorDiskKVSet(a, JSON.stringify(u));
        }
        await this._cleanupOrphanedKeys(t);
        this.logService.debug("[PatchGraphStorage] Persisted", e.length, "files");
      } catch (e) {
        this.logService.error("[PatchGraphStorage] Error persisting:", e);
      }
    }
  }
  _serializeFileMeta(e, t) {
    const i = t.map(s => ({
      id: s.patch.id,
      attribs: this._serializeAttribs(s.patch.attribs),
      status: s.patch.status,
      parentIds: s.parents.map(o => o.patch.id),
      registrationIndex: s.registrationIndex
    }));
    const r = this.patchGraphService.getProvenance(e);
    return {
      version: 2,
      fileUri: e.toJSON(),
      patches: i,
      provenance: r?.serialize() ?? {
        spans: [],
        deletionMarkers: []
      }
    };
  }
  async _serializeFileData(e, t) {
    let i = {};
    try {
      const s = await this.storageService.cursorDiskKVGet(t);
      if (s) {
        const o = JSON.parse(s);
        if (o.version === 2 && o.hunksByPatchId) {
          i = o.hunksByPatchId;
        }
      }
    } catch (s) {
      this.logService.error("[PatchGraphStorage] Corrupt data key during merge, accepting loss:", t, s);
    }
    const r = {};
    for (const s of e) {
      if (s.patch.hunks.length > 0) {
        r[s.patch.id] = s.patch.hunks;
      } else {
        const o = i[s.patch.id];
        if (o) {
          r[s.patch.id] = o;
        }
      }
    }
    return {
      version: 2,
      hunksByPatchId: r
    };
  }
  async _cleanupOrphanedKeys(e) {
    const t = await this.storageService.cursorDiskKVGetPrefixKeys(this._getMetaPrefix());
    for (const i of t) {
      if (!e.has(i)) {
        const r = i.replace(this._getMetaPrefix(), this._getDataPrefix());
        await this.storageService.cursorDiskKVClearPrefix(i);
        await this.storageService.cursorDiskKVClearPrefix(r);
      }
    }
  }
  async _load() {
    this._isLoading = true;
    try {
      const e = this._getMetaPrefix();
      const t = await this.storageService.cursorDiskKVGetPrefixKeys(e);
      if (t.length === 0) {
        this.logService.debug("[PatchGraphStorage] No persisted meta keys found");
        return;
      }
      let i = 0;
      for (let r = 0; r < t.length; r += qze) {
        const s = t.slice(r, r + qze);
        const o = await this.storageService.cursorDiskKVGetBatch(s);
        for (const [a, l] of o) {
          try {
            const u = JSON.parse(l);
            if (u.version !== 2) {
              this.logService.warn("[PatchGraphStorage] Unknown meta version, skipping:", u.version, a);
              continue;
            }
            const d = je.revive(u.fileUri);
            const m = u.patches ?? [];
            const p = u.provenance ?? {
              spans: [],
              deletionMarkers: []
            };
            this.patchGraphService.restoreSkeletonNodes(d, m, p);
            i++;
          } catch (u) {
            this.logService.error("[PatchGraphStorage] Error parsing meta key:", a, u);
          }
        }
        if (r + qze < t.length) {
          await new Promise(a => setTimeout(a, 0));
        }
      }
      this.logService.debug("[PatchGraphStorage] Loaded skeletons for", i, "files");
    } catch (e) {
      this.logService.error("[PatchGraphStorage] Error loading:", e);
    } finally {
      this._isLoading = false;
    }
  }
  _serializeAttribs(e) {
    return {
      ...e,
      fileUri: e.fileUri.toJSON(),
      reviewed: e.reviewed ?? false
    };
  }
};
Fga = __decorate([__param(0, $tt), __param(1, Hi), __param(2, Lr), __param(3, Rr), __param(4, Tl), __param(5, Xbi)], Fga);
Vi(qhn, Fga, 0);
