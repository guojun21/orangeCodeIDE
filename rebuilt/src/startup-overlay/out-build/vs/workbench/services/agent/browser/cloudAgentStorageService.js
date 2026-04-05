"use strict";

// Module: out-build/vs/workbench/services/agent/browser/cloudAgentStorageService.js
// Offset: 30140376 (bundle byte offset)
// Size: 7755 bytes
t8();
g9o();
sC();
zk();
rt();
Cey();
kr();
pye();
Wt();
Er();
Tw();
KZ();
vE();
cp();
Mhu = "cloudAgent:metadata";
M_a = 1;
xCf = class {
  getMetadata() {
    return this.metadata;
  }
  setMetadata(n) {
    this.metadata = n;
  }
  setState(n, e) {
    this.currentStateBlobIdHex = n;
    this.currentState = e;
  }
  getState(n) {
    if (this.currentStateBlobIdHex === n) {
      return this.currentState;
    }
  }
  clear() {
    this.metadata = undefined;
    this.currentStateBlobIdHex = undefined;
    this.currentState = undefined;
  }
};
Swi = xi("cloudAgentStorageService");
TCf = 50;
F_a = class extends at {
  constructor(e, t, i) {
    super();
    this.storageService = e;
    this.structuredLogService = t;
    this.composerDataService = i;
    this.composerBlobStores = new Map();
    this.stateCachesByBcId = new Map();
    this.metadataProperties = new Map();
    this.cloudAgentStateProperties = new Map();
    this.bcIdToComposerId = new Map();
    this.blobWriteQueuesByComposerId = new Map();
    this.pendingWritesByComposerId = new Map();
  }
  getComposerBlobStore(e, t) {
    if (!this.bcIdToComposerId.has(e)) {
      this.bcIdToComposerId.set(e, t);
    } else {
      const r = this.bcIdToComposerId.get(e);
      if (r !== t) {
        this.structuredLogService.warn("background_composer", "bcId has multiple composerIds", {
          bcId: e,
          existingComposerId: r,
          composerId: t
        });
      }
    }
    let i = this.composerBlobStores.get(t);
    if (i === undefined) {
      i = new eO(this.storageService, t);
      this.composerBlobStores.set(t, i);
    }
    return i;
  }
  getStateCache(e) {
    let t = this.stateCachesByBcId.get(e);
    if (t === undefined) {
      t = new xCf();
      this.stateCachesByBcId.set(e, t);
    }
    return t;
  }
  async getMetadataIfExists(e) {
    const t = this.getStateCache(e).getMetadata();
    if (t !== undefined && t.version === M_a) {
      return t;
    }
    const i = ECf(e, Mhu);
    const r = await this.storageService.cursorDiskKVGet(i);
    if (!r) {
      return;
    }
    const s = Rhu.fromBinary(r5n.dec(r));
    if (s.version === M_a) {
      this.getStateCache(e).setMetadata(s);
      return s;
    }
  }
  async getMetadata(e) {
    const t = await this.getMetadataIfExists(e);
    if (t === undefined) {
      throw new Error(`Metadata not found for bcId: ${e}`);
    }
    return t;
  }
  async setMetadata(e, t) {
    const i = ECf(e, Mhu);
    await this.storageService.cursorDiskKVSet(i, r5n.enc(t.toBinary()));
    this.getStateCache(e).setMetadata(t);
  }
  async getMetadataAsync(e) {
    return this.getMetadata(e);
  }
  getMetadataProperty(e) {
    let t = this.metadataProperties.get(e);
    if (!t) {
      t = new j_("not_loaded");
      this.metadataProperties.set(e, t);
      (async () => {
        const i = await this.getMetadataIfExists(e);
        if (i) {
          t.change(i);
        }
      })();
    }
    return t;
  }
  async getBlob(e) {
    const {
      bcId: t,
      composerId: i,
      blobId: r
    } = e;
    return await this.getComposerBlobStore(t, i).getBlob(TC(), r);
  }
  async storePreFetchedBlobs(e) {
    const {
      bcId: t,
      composerId: i,
      blobs: r
    } = e;
    if (r.length === 0) {
      return;
    }
    const s = this.getComposerBlobStore(t, i);
    const o = this.getBlobWriteQueue(i);
    const a = TC();
    await o.enqueueList(r, async l => {
      await s.setBlob(a, l.id, l.value);
    });
  }
  getBlobWriteQueue(e) {
    let t = this.blobWriteQueuesByComposerId.get(e);
    if (!t) {
      t = new pDg({
        max: TCf
      });
      this.blobWriteQueuesByComposerId.set(e, t);
    }
    return t;
  }
  getPendingWrites(e) {
    let t = this.pendingWritesByComposerId.get(e);
    if (!t) {
      t = new Set();
      this.pendingWritesByComposerId.set(e, t);
    }
    return t;
  }
  enqueueSetBlobs(e) {
    const {
      bcId: t,
      composerId: i,
      blobs: r
    } = e;
    if (r.length === 0) {
      return;
    }
    const s = this.getComposerBlobStore(t, i);
    const o = this.getBlobWriteQueue(i);
    const a = this.getPendingWrites(i);
    const l = TC();
    for (const u of r) {
      const d = o.enqueue(async () => {
        await s.setBlob(l, u.id, u.value);
      }).catch(m => {
        this.structuredLogService.error("background_composer", "Error in enqueueSetBlobs", m, {
          bcId: t,
          composerId: i
        });
      }).finally(() => {
        a.delete(d);
      });
      a.add(d);
    }
  }
  async waitForPendingWrites(e) {
    const {
      composerId: t
    } = e;
    const i = this.pendingWritesByComposerId.get(t);
    if (!!i && i.size !== 0) {
      await Promise.all(i);
    }
  }
  async getCloudAgentStateFromDiskOrCache(e, t) {
    const {
      bcId: i,
      composerId: r
    } = e;
    const s = sQ(t);
    const o = this.getStateCache(i).getState(s);
    if (o !== undefined) {
      return o;
    }
    const a = await this.getBlob({
      bcId: i,
      composerId: r,
      blobId: t
    });
    if (a === undefined) {
      throw new Error(`Cloud agent state blob not found for bcId: ${i}, composerId: ${r}`);
    }
    const l = Cwi.fromBinary(a);
    this.getStateCache(i).setState(s, l);
    return l;
  }
  async getPRUrlFromState(e, t) {
    const {
      bcId: i,
      composerId: r
    } = e;
    if (!t.prUrl) {
      return;
    }
    const s = t.prUrl;
    if (!s) {
      return;
    }
    const o = await this.getBlob({
      bcId: i,
      composerId: r,
      blobId: s
    });
    if (o) {
      return new TextDecoder().decode(o);
    }
  }
  async getAgentNameFromState(e, t) {
    const {
      bcId: i,
      composerId: r
    } = e;
    if (!t.agentName || t.agentName.length === 0) {
      return;
    }
    const s = await this.getBlob({
      bcId: i,
      composerId: r,
      blobId: t.agentName
    });
    if (s) {
      return new TextDecoder().decode(s);
    }
  }
  async getBranchNameFromState(e, t) {
    const {
      bcId: i,
      composerId: r
    } = e;
    if (!t.branchName || t.branchName.length === 0) {
      return;
    }
    const s = await this.getBlob({
      bcId: i,
      composerId: r,
      blobId: t.branchName
    });
    if (s) {
      return new TextDecoder().decode(s);
    }
  }
  getNumTurnsFromState(e) {
    if (e.conversationState) {
      return e.conversationState.turns.length;
    } else {
      return 0;
    }
  }
  async getDerivedPropertiesFromState(e, t) {
    const [i, r, s] = await Promise.all([this.getPRUrlFromState(e, t), this.getAgentNameFromState(e, t), this.getBranchNameFromState(e, t)]);
    const o = this.getNumTurnsFromState(t);
    const a = t.baseBranch;
    const l = t.originalRequestStartUnixMs ? new Date(Number(t.originalRequestStartUnixMs)) : undefined;
    const u = t.initialSource;
    return {
      prUrl: i,
      numTurns: o,
      agentName: r,
      branchName: s,
      baseBranch: a,
      originalRequestStartTime: l,
      initialSource: u
    };
  }
  getCloudAgentStateProperty(e) {
    const {
      bcId: t,
      composerId: i
    } = e;
    let r = this.cloudAgentStateProperties.get(t);
    if (!r) {
      r = new j_("not_loaded");
      this.cloudAgentStateProperties.set(t, r);
      (async () => {
        const s = await this.getMetadataIfExists(t);
        if (!s || !s.cloudAgentStateBlobId) {
          return;
        }
        const o = await this.getCloudAgentStateFromDiskOrCache({
          bcId: t,
          composerId: i
        }, s.cloudAgentStateBlobId);
        const a = await this.getDerivedPropertiesFromState({
          bcId: t,
          composerId: i
        }, o);
        r.change(a);
      })();
    }
    return r;
  }
  async getCloudAgentState(e) {
    const {
      bcId: t,
      composerId: i
    } = e;
    const r = await this.getMetadata(t);
    return {
      value: await this.getCloudAgentStateFromDiskOrCache({
        bcId: t,
        composerId: i
      }, r.cloudAgentStateBlobId),
      metadata: r
    };
  }
  async getConversationStateWithLastInteraction(e) {
    const {
      bcId: t,
      composerId: i
    } = e;
    const r = await this.getCloudAgentState({
      bcId: t,
      composerId: i
    });
    return {
      value: {
        conversationState: r.value.conversationState,
        lastInteractionUpdateOffsetKey: r.value.lastInteractionUpdateOffsetKey
      },
      metadata: r.metadata
    };
  }
  async updateMetadata(e, t) {
    const i = await this.getMetadataIfExists(e);
    const r = new Rhu({
      cloudAgentStateBlobId: i?.cloudAgentStateBlobId,
      offsetKey: i?.offsetKey,
      workflowStatus: i?.workflowStatus,
      ...t,
      version: M_a,
      timestampMs: Date.now()
    });
    await this.setMetadata(e, r);
    this.metadataProperties.get(e)?.change(r);
  }
  async saveNewCloudAgentState(e) {
    const t = {
      stack: [],
      error: undefined,
      hasError: false
    };
    try {
      const {
        bcId: i,
        composerId: r,
        blobId: s,
        state: o,
        offsetKey: a
      } = e;
      const l = this.getComposerBlobStore(i, r);
      const u = TC();
      const d = __addDisposableResource(t, await this.composerDataService.getComposerHandleById(r), false);
      if (!d) {
        throw new Error(`Composer handle not found for composerId: ${r}`);
      }
      const m = o.toBinary();
      await l.setBlob(u, s, m);
      if (o.conversationState) {
        d.setData("conversationState", o.conversationState);
      }
      await this.updateMetadata(i, {
        cloudAgentStateBlobId: s,
        offsetKey: a
      });
      this.getStateCache(i).setState(sQ(s), o);
      if (this.cloudAgentStateProperties.has(i)) {
        const p = await this.getDerivedPropertiesFromState({
          bcId: i,
          composerId: r
        }, o);
        this.cloudAgentStateProperties.get(i).change(p);
      }
    } catch (i) {
      t.error = i;
      t.hasError = true;
    } finally {
      __disposeResources(t);
    }
  }
  async saveNewWorkflowStatus(e, t, i) {
    await this.updateMetadata(e, {
      workflowStatus: t,
      offsetKey: i
    });
  }
};
F_a = __decorate([__param(0, Hi), __param(1, Kk), __param(2, Oa)], F_a);
Vi(Swi, F_a, 1);
