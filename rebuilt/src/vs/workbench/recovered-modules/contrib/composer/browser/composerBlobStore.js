"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js
// Offset: 26599560 (bundle byte offset)
// Size: 3330 bytes
t8();
sC();
Cbi = "agentKv:blob:";
wpa = "agentKv:checkpoint:";
_pa = "agentKv:bubbleCheckpoint:";
eO = class {
  constructor(n, e) {
    this.storageService = n;
    this.conversationId = e;
  }
  keyFor(n) {
    return `${Cbi}${sQ(n)}`;
  }
  async getBlob(n, e) {
    const t = {
      stack: [],
      error: undefined,
      hasError: false
    };
    try {
      const i = __addDisposableResource(t, wS(n.withName("ComposerBlobStore.getBlob")), false);
      const r = this.keyFor(e);
      const s = await this.storageService.cursorDiskKVGetBinary(r);
      if (s !== undefined) {
        if (s.length === 1 && s[0] === 0) {
          return new Uint8Array(0);
        } else {
          return s;
        }
      }
      const o = await this.storageService.cursorDiskKVGet(r);
      if (o) {
        try {
          const a = Zne(o);
          if (a.length === 1 && a[0] === 0) {
            return new Uint8Array(0);
          } else {
            return a;
          }
        } catch {
          return;
        }
      }
      return;
    } catch (i) {
      t.error = i;
      t.hasError = true;
    } finally {
      __disposeResources(t);
    }
  }
  async setBlob(n, e, t) {
    const i = {
      stack: [],
      error: undefined,
      hasError: false
    };
    try {
      const r = __addDisposableResource(i, wS(n.withName("ComposerBlobStore.setBlob")), false);
      const s = this.keyFor(e);
      await this.storageService.cursorDiskKVSetBinary(s, t);
    } catch (r) {
      i.error = r;
      i.hasError = true;
    } finally {
      __disposeResources(i);
    }
  }
  async setBlobLocallyOnly(n, e, t) {
    return Promise.resolve();
  }
  requireConversationId() {
    if (!this.conversationId) {
      throw new Error("Conversation ID is required");
    }
    return this.conversationId;
  }
  async getLatestCheckpointPointer() {
    const n = await this.storageService.cursorDiskKVGet(`${wpa}${this.requireConversationId()}`);
    if (n) {
      return Zne(n);
    } else {
      return undefined;
    }
  }
  async getBubbleCheckpoint(n) {
    const e = await this.storageService.cursorDiskKVGet(`${_pa}${this.requireConversationId()}:${n}`);
    if (e) {
      return Zne(e);
    } else {
      return undefined;
    }
  }
  async flush(n) {
    return Promise.resolve();
  }
  async clearLegacyCheckpoints() {
    if (this.conversationId) {
      await Promise.all([this.storageService.cursorDiskKVClearPrefix(`${wpa}${this.conversationId}`), this.storageService.cursorDiskKVClearPrefix(`${_pa}${this.conversationId}:`)]);
    }
  }
};
CNg = class extends eO {
  constructor() {
    super(...arguments);
    this._writtenBlobIds = [];
  }
  async setBlob(n, e, t) {
    await super.setBlob(n, e, t);
    this._writtenBlobIds.push(e);
  }
  getWrittenBlobIds() {
    return this._writtenBlobIds;
  }
};
