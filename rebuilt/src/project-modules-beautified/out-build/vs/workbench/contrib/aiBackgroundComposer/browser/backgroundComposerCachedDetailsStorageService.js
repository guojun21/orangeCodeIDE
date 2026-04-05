"use strict";

// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/backgroundComposerCachedDetailsStorageService.js
// Offset: 33805851 (bundle byte offset)
// Size: 2479 bytes
Wt();
rt();
Er();
kr();
VA();
qp();
ZS();
cDa = xi("backgroundComposerCachedDetailsStorageService");
tvn = "bcCachedDetails";
Ort = class extends at {
  constructor(e) {
    super();
    this._storageService = e;
  }
  async storeCachedDetails(e, t) {
    if (!e) {
      throw new Error("[backgroundComposer] bcId is undefined");
    }
    try {
      const i = new Nsu({
        diffChangesHash: t.diffChangesHash ?? "",
        detailedDiff: t.detailedDiff ? new Bbt(t.detailedDiff) : undefined,
        bc: t.bc
      });
      await this._storageService.cursorDiskKVSetBinary(`${tvn}:${e}`, i.toBinary());
    } catch (i) {
      console.error("[backgroundComposer] Failed to store cached details as binary, skipping cache write", i);
    }
  }
  async getCachedDetails(e) {
    if (!e) {
      throw new Error("[backgroundComposer] bcId is undefined");
    }
    try {
      const t = await this._storageService.cursorDiskKVGetBinary(`${tvn}:${e}`);
      if (t) {
        return this._readBinaryFormat(t);
      }
    } catch (t) {
      console.error("[backgroundComposer] Failed to read binary cached details", t);
    }
    try {
      const t = await this._storageService.cursorDiskKVGet(`${tvn}:${e}`);
      if (t) {
        return this._readLegacyJsonFormat(t);
      }
    } catch (t) {
      console.error("[backgroundComposer] Failed to read legacy cached details", t);
    }
  }
  _readBinaryFormat(e) {
    const t = Nsu.fromBinary(e);
    return {
      bc: t.bc,
      detailedDiff: t.detailedDiff ? {
        ...t.detailedDiff
      } : undefined,
      diffChangesHash: t.diffChangesHash || undefined
    };
  }
  _readLegacyJsonFormat(e) {
    const t = JSON.parse(e);
    const i = t.bc ? new Bmn().fromJsonString(t.bc, {
      ignoreUnknownFields: true
    }) : undefined;
    const r = t.detailedDiff ? {
      ...Bbt.fromJsonString(t.detailedDiff, {
        ignoreUnknownFields: true
      })
    } : undefined;
    return {
      ...t,
      bc: i,
      detailedDiff: r
    };
  }
  async deleteCachedDetails(e) {
    if (!e) {
      throw new Error("[backgroundComposer] bcId is undefined");
    }
    await this._storageService.cursorDiskKVSet(`${tvn}:${e}`, undefined);
  }
  async clearAll() {
    await this._storageService.cursorDiskKVClearPrefix(`${tvn}:`).catch(e => {
      console.error("[backgroundComposer] Failed to clear cached details", e);
    });
  }
};
__decorate([Gs("BackgroundComposerCachedDetailsStorageService.storeCachedDetails")], Ort.prototype, "storeCachedDetails", null);
__decorate([Gs("BackgroundComposerCachedDetailsStorageService.getCachedDetails")], Ort.prototype, "getCachedDetails", null);
__decorate([Gs("BackgroundComposerCachedDetailsStorageService.deleteCachedDetails")], Ort.prototype, "deleteCachedDetails", null);
__decorate([Gs("BackgroundComposerCachedDetailsStorageService.clearAll")], Ort.prototype, "clearAll", null);
Ort = __decorate([__param(0, Hi)], Ort);
Vi(cDa, Ort, 2);
