"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerCheckpointStorageService.js
// Offset: 26649093 (bundle byte offset)
// Size: 4453 bytes
Wt();
rt();
Er();
jk();
kr();
Bc();
VA();
rMg = false;
Ahn = rMg ? console.log : () => {};
Ctt = xi("composerCheckpointStorageService");
Stt = "checkpointId";
ktt = class extends at {
  constructor(e) {
    super();
    this._storageService = e;
  }
  async storeCheckpoint(e, t) {
    if (!e) {
      throw new Error("[composer] composerId is undefined");
    }
    const i = Wr();
    Ahn("[composer] storing checkpoint", `${Stt}:${e.slice(0, 4)}:${i.slice(0, 4)}`);
    this._storageService.cursorDiskKVSet(`${Stt}:${e}:${i}`, JSON.stringify(t));
    return i;
  }
  async updateCheckpoint(e, t, i) {
    if (!t || !e) {
      throw new Error("[composer] checkpointId or composerId is undefined" + JSON.stringify({
        checkpointId: t,
        composerId: e
      }));
    }
    Ahn("[composer] updating checkpoint", `${Stt}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
    const r = await this.retrieveCheckpoint(e, t);
    if (r) {
      i(r);
      this._storageService.cursorDiskKVSet(`${Stt}:${e}:${t}`, JSON.stringify(r));
    } else {
      console.error("[composer] No checkpoint found for id", t);
    }
  }
  async retrieveCheckpoint(e, t) {
    if (!t || !e) {
      throw new Error("[composer] checkpointId or composerId is undefined" + JSON.stringify({
        checkpointId: t,
        composerId: e
      }));
    }
    Ahn("[composer] retrieving checkpoint", `${Stt}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
    const i = await this._storageService.cursorDiskKVGet(`${Stt}:${e}:${t}`);
    if (!i) {
      return;
    }
    let r = Kjl(JSON.parse(i));
    r &&= Kjl(r);
    Ahn("[composer] retrieved checkpoint", {
      checkpoint: r
    });
    return r;
  }
  async clearComposerCheckpoints(e) {
    if (!e) {
      throw new Error("[composer] composerId is undefined");
    }
    Ahn("[composer] clearing all checkpoints for composer", e);
    return this._storageService.cursorDiskKVClearPrefix(`${Stt}:${e}:`).catch(t => {
      console.error(`[composer] Error clearing checkpoints for composer ${e}:`, t);
    });
  }
};
__decorate([Gs("ComposerCheckpointStorageService.storeCheckpoint")], ktt.prototype, "storeCheckpoint", null);
__decorate([Gs("ComposerCheckpointStorageService.updateCheckpoint")], ktt.prototype, "updateCheckpoint", null);
__decorate([Gs("ComposerCheckpointStorageService.retrieveCheckpoint")], ktt.prototype, "retrieveCheckpoint", null);
__decorate([Gs("ComposerCheckpointStorageService.clearComposerCheckpoints")], ktt.prototype, "clearComposerCheckpoints", null);
ktt = __decorate([__param(0, Hi)], ktt);
Vi(Ctt, ktt, 1);
