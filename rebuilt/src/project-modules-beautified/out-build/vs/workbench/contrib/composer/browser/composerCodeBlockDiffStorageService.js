"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerCodeBlockDiffStorageService.js
// Offset: 26818906 (bundle byte offset)
// Size: 3184 bytes
Wt();
rt();
ml();
Er();
kr();
Bc();
VA();
hFg = false;
w$e = hFg ? console.log : () => {};
_$e = xi("composerCodeBlockDiffStorageService");
hye = "codeBlockDiff";
BNe = class extends at {
  constructor(e) {
    super();
    this._storageService = e;
  }
  async storeDiff(e, t) {
    if (!e) {
      throw new Error("[composer] composerId is undefined");
    }
    const i = Wr();
    w$e("[composer] storing diff", `${hye}:${e.slice(0, 4)}:${i.slice(0, 4)}`);
    await this._storageService.cursorDiskKVSet(`${hye}:${e}:${i}`, JSON.stringify(t));
    return i;
  }
  async updateDiff(e, t, i) {
    if (!t || !e) {
      throw new Error("[composer] diffId or composerId is undefined" + JSON.stringify({
        diffId: t,
        composerId: e
      }));
    }
    w$e("[composer] updating diff", `${hye}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
    const r = await this.retrieveDiff(e, t);
    if (r) {
      i(r);
      await this._storageService.cursorDiskKVSet(`${hye}:${e}:${t}`, JSON.stringify(r));
    } else {
      console.error("[composer] No diff found for id", t);
    }
  }
  async retrieveDiff(e, t) {
    if (!t || !e) {
      throw new Error("[composer] diffId or composerId is undefined" + JSON.stringify({
        diffId: t,
        composerId: e
      }));
    }
    w$e("[composer] retrieving diff", `${hye}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
    const i = await this._storageService.cursorDiskKVGet(`${hye}:${e}:${t}`);
    if (!i) {
      return;
    }
    const r = JSON.parse(i);
    w$e("[composer] retrieved diff", {
      diff: r
    });
    return r;
  }
  async retrieveDiffBatch(e, t) {
    if (!e) {
      throw new Error("[composer] composerId is undefined");
    }
    if (t.length === 0) {
      return new Map();
    }
    w$e("[composer] retrieving batch of", t.length, "diffs for composer", e.slice(0, 4));
    const i = new Map();
    for (let r = 0; r < t.length; r += qze) {
      const o = t.slice(r, r + qze).map(l => `${hye}:${e}:${l}`);
      const a = await this._storageService.cursorDiskKVGetBatch(o);
      for (const [l, u] of a) {
        const d = l.split(":").pop();
        try {
          const m = JSON.parse(u);
          i.set(d, m);
          w$e("[composer] retrieved diff from batch", `${hye}:${e.slice(0, 4)}:${d.slice(0, 4)}`);
        } catch (m) {
          console.error("[composer] Failed to parse diff", d, m);
        }
      }
    }
    return i;
  }
  async deleteDiff(e, t) {
    if (!t || !e) {
      throw new Error("[composer] diffId or composerId is undefined" + JSON.stringify({
        diffId: t,
        composerId: e
      }));
    }
    w$e("[composer] deleting diff", `${hye}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
    await this._storageService.cursorDiskKVSet(`${hye}:${e}:${t}`, undefined);
  }
  async clearComposerDiffs(e) {
    if (!e) {
      throw new Error("[composer] composerId is undefined");
    }
    w$e("[composer] clearing all diffs for composer", e);
    return this._storageService.cursorDiskKVClearPrefix(`${hye}:${e}:`).catch(t => {
      console.error(`[composer] Error clearing diffs for composer ${e}:`, t);
    });
  }
};
__decorate([Gs("ComposerCodeBlockDiffStorageService.storeDiff")], BNe.prototype, "storeDiff", null);
__decorate([Gs("ComposerCodeBlockDiffStorageService.updateDiff")], BNe.prototype, "updateDiff", null);
__decorate([Gs("ComposerCodeBlockDiffStorageService.retrieveDiff")], BNe.prototype, "retrieveDiff", null);
__decorate([Gs("ComposerCodeBlockDiffStorageService.retrieveDiffBatch")], BNe.prototype, "retrieveDiffBatch", null);
__decorate([Gs("ComposerCodeBlockDiffStorageService.deleteDiff")], BNe.prototype, "deleteDiff", null);
__decorate([Gs("ComposerCodeBlockDiffStorageService.clearComposerDiffs")], BNe.prototype, "clearComposerDiffs", null);
BNe = __decorate([__param(0, Hi)], BNe);
Vi(_$e, BNe, 1);
