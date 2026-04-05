"use strict";

// Module: out-build/vs/workbench/services/inlineDiffsV2/browser/nonAgentChangeTracker.js
// Offset: 26888958 (bundle byte offset)
// Size: 4392 bytes
vr();
rt();
oa();
Yn();
zr();
Er();
Wt();
jr();
kr();
ps();
Wu();
Cde();
SSt();
rce();
Xbi = xi("nonAgentChangeTrackerService");
Nga = class extends at {
  static {
    Bnu = this;
  }
  static {
    this.DEBUG_LOG_ID = "patch-graph";
  }
  constructor(e, t, i, r, s, o) {
    super();
    this._experimentService = e;
    this._patchGraphService = t;
    this._logService = i;
    this._clientDebugLogService = r;
    this._storageService = s;
    this._workspaceContextService = o;
    this._lastKnownContent = new Map();
    this._dirtyFiles = new Set();
    this._ready = new x6();
    this.whenReady = this._ready.wait().then(() => {});
    this._enabled = this._experimentService.checkFeatureGate("inline_diffs_v2_adapter");
    this._sentryEnabled = this._experimentService.checkFeatureGate("patch_graph_sentry_reporting");
    if (!this._enabled) {
      this._ready.open();
      return;
    }
    this._register(this._experimentService.onDidChangeGates(a => {
      if (!a.changedGates || a.changedGates.has("patch_graph_sentry_reporting")) {
        this._sentryEnabled = this._experimentService.checkFeatureGate("patch_graph_sentry_reporting");
      }
    }));
    this._register(this._storageService.cursorDiskKVOnShouldSave(async () => {
      await this._persist();
    }));
    this._load().finally(() => this._ready.open());
  }
  _clientDebugLog(e, t) {
    if (!this._sentryEnabled) {
      return;
    }
    const i = kx().isInternalUser ? JSON.stringify({
      t: new Date().toISOString(),
      m: e,
      ...t
    }) : `${new Date().toISOString()} ${e}`;
    this._clientDebugLogService.log(Bnu.DEBUG_LOG_ID, i);
  }
  stopTracking(e) {
    if (!this._enabled) {
      return;
    }
    const t = e.toString();
    this._lastKnownContent.delete(t);
    this._dirtyFiles.delete(t);
  }
  recordExternalChanges(e, t) {
    this._updateLastKnownContent(e, t, true);
  }
  updateLastKnownBaseline(e, t) {
    this._updateLastKnownContent(e, t, false);
  }
  _updateLastKnownContent(e, t, i) {
    if (!this._enabled || e.scheme === _n.vscodeNotebookCell) {
      return;
    }
    const r = e.toString();
    const s = g5e(t, `
`);
    const o = this._lastKnownContent.get(r);
    this._clientDebugLog("updateLastKnownContent:entry", {
      file: e.fsPath,
      caller: i ? "recordExternalChanges" : "updateLastKnownBaseline",
      existingLen: o?.length,
      newLen: s.length
    });
    if (i && o !== undefined && o !== s) {
      const a = this._patchGraphService.diff(o, s, {
        fileUri: e,
        timestamp: Date.now(),
        patchSource: "external",
        reviewed: false
      });
      this._clientDebugLog("recordExternalChanges:drift", {
        file: e.fsPath,
        existingLength: o.length,
        newLength: s.length,
        patchId: a.id,
        hunkCount: a.hunks.length,
        hunks: a.hunks.slice(0, 5).map(u => ({
          range: `@@ -${u.oldStart},${u.oldLineCount} +${u.newStart},${u.newLineCount} @@`,
          lines: u.lines.slice(0, 20).map(d => `${d.type === "insert" ? "+" : d.type === "delete" ? "-" : " "}${d.content.slice(0, 100)}`)
        }))
      });
      const l = this._patchGraphService.splitPatch(a);
      for (const u of l) {
        this._patchGraphService.registerPatch(u);
      }
    }
    this._lastKnownContent.set(r, s);
    this._dirtyFiles.add(r);
    this._clientDebugLog("updateLastKnownContent:set", {
      file: e.fsPath,
      len: s.length
    });
  }
  getLastKnownContent(e) {
    if (this._enabled) {
      return this._lastKnownContent.get(e.toString());
    }
  }
  onPatchesReviewed() {}
  _getStorageKeyPrefix() {
    return `expectedContent-v1-${this._workspaceContextService.getWorkspace()?.id ?? "default"}-`;
  }
  _getStorageKeyForFile(e) {
    return `${this._getStorageKeyPrefix()}${e}`;
  }
  async _persist() {
    if (this._enabled) {
      try {
        await Promise.allSettled([...this._dirtyFiles].map(e => {
          const t = this._lastKnownContent.get(e);
          const i = this._getStorageKeyForFile(e);
          return this._storageService.cursorDiskKVSet(i, t);
        }));
        this._dirtyFiles.clear();
        this._logService.debug("[NonAgentChangeTracker] Persisted expected content");
      } catch (e) {
        this._logService.error("[NonAgentChangeTracker] Error persisting:", e);
      }
    }
  }
  async _load() {
    if (this._enabled) {
      try {
        const e = this._getStorageKeyPrefix();
        const t = await this._storageService.cursorDiskKVGetPrefix(e);
        for (const [i, r] of t) {
          if (r?.length) {
            const s = i.substring(e.length);
            try {
              const o = je.parse(s);
              if (o.scheme === _n.vscodeNotebookCell) {
                this._dirtyFiles.delete(o.toString());
                continue;
              }
              this.updateLastKnownBaseline(o, r);
              this._dirtyFiles.delete(o.toString());
            } catch (o) {
              this._logService.warn("[NonAgentChangeTracker] Failed to parse URI from storage key:", i, o);
            }
          }
        }
      } catch (e) {
        this._logService.error("[NonAgentChangeTracker] Error loading:", e);
      }
    }
  }
  async clearStorage() {
    if (this._enabled) {
      this._lastKnownContent.clear();
      this._dirtyFiles.clear();
      await this._storageService.cursorDiskKVClearPrefix(this._getStorageKeyPrefix());
      this._logService.info("[NonAgentChangeTracker] Cleared all expected content from memory and disk");
    }
  }
};
Nga = Bnu = __decorate([__param(0, Tl), __param(1, $tt), __param(2, Rr), __param(3, tie), __param(4, Hi), __param(5, Lr)], Nga);
Vi(Xbi, Nga, 1);
