"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/blobUploadService.js
// Offset: 30654799 (bundle byte offset)
// Size: 3030 bytes
sC();
vr();
rt();
Bc();
Er();
Wt();
kr();
fE();
KKe();
KZ();
Rkf = xi("agentClientService");
kmu = xi("blobUploadService");
Pkf = 100;
Lkf = 3;
Nkf = 2000;
w0a = class extends at {
  constructor(e, t, i) {
    super();
    this._agentClientService = e;
    this._storageService = t;
    this._metricsService = i;
    this._queue = [];
    this._draining = false;
    this._drainScheduler = this._register(new Hu(() => this._drain(), Nkf));
  }
  enqueue(e) {
    const t = Tny(e.blobIds, Pkf);
    const i = t.length;
    const r = `fork-${Wr()}`;
    for (let s = 0; s < t.length; s++) {
      this._queue.push({
        conversationId: e.conversationId,
        forkRequestId: r,
        blobIds: t[s],
        chunkIndex: s,
        totalChunks: i,
        attempts: 0
      });
    }
    if (!this._draining) {
      this._drainScheduler.schedule();
    }
  }
  notifyClone(e) {
    this._agentClientService.notifyConversationClone(TC(), {
      conversationId: e.conversationId,
      sourceConversationId: e.sourceConversationId,
      sourceRequestId: e.sourceRequestId
    }).catch(t => {
      console.error("[BlobUploadService] notifyConversationClone failed:", t);
    });
  }
  async _drain() {
    if (!this._draining) {
      this._draining = true;
      try {
        while (this._queue.length > 0) {
          const e = this._queue.shift();
          await this._processJob(e);
        }
      } finally {
        this._draining = false;
      }
    }
  }
  async _processJob(e) {
    const t = performance.now();
    try {
      const i = new eO(this._storageService, e.conversationId);
      const r = TC();
      const s = [];
      for (const o of e.blobIds) {
        const a = await i.getBlob(r, o);
        if (a) {
          s.push(new d4c({
            id: o,
            value: a
          }));
        }
      }
      if (s.length > 0) {
        await this._agentClientService.uploadConversationBlobs(TC(), {
          conversationId: e.conversationId,
          blobs: s,
          forkRequestId: e.forkRequestId,
          chunkIndex: e.chunkIndex,
          totalChunks: e.totalChunks
        });
        this._metricsService.increment({
          stat: "composer.blobUpload.uploaded",
          tags: {
            success: "true"
          }
        });
        this._metricsService.distribution({
          stat: "composer.blobUpload.uploadDuration",
          value: performance.now() - t
        });
        this._metricsService.distribution({
          stat: "composer.blobUpload.blobCount",
          value: s.length
        });
      }
    } catch (i) {
      e.attempts++;
      if (e.attempts < Lkf) {
        this._queue.push(e);
      } else {
        console.error("[BlobUploadService] chunk upload failed:", i);
        this._metricsService.increment({
          stat: "composer.blobUpload.uploaded",
          tags: {
            success: "false"
          }
        });
      }
    }
  }
};
w0a = __decorate([__param(0, Rkf), __param(1, Hi), __param(2, R1)], w0a);
Vi(kmu, w0a, 1);
