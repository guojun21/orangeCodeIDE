"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerMigrations.js
// Offset: 26602890 (bundle byte offset)
// Size: 7506 bytes
Uv();
_Ng();
Jk();
KZ();
sC();
vhn();
Vg();
Bc();
SNg = {
  version: 1,
  check: n => n._v === 0,
  migrate: async (n, e) => {
    let t = n;
    let i;
    if (t.latestCheckpoint) {
      i = await e.composerCheckpointStorageService.storeCheckpoint(n.composerId, t.latestCheckpoint);
      if (!i) {
        console.error("Failed to store latest checkpoint in migration");
      }
    }
    const r = [];
    for (const o of t.conversation) {
      const a = o;
      let l;
      let u;
      if (a.checkpoint) {
        l = await e.composerCheckpointStorageService.storeCheckpoint(n.composerId, a.checkpoint);
        if (!l) {
          console.error("Failed to store checkpoint in migration");
        }
      }
      if (a.afterCheckpoint) {
        u = await e.composerCheckpointStorageService.storeCheckpoint(n.composerId, a.afterCheckpoint);
        if (!u) {
          console.error("Failed to store afterCheckpoint in migration");
        }
      }
      const d = {
        ...o,
        checkpointId: l,
        afterCheckpointId: u,
        _v: 1
      };
      if ("checkpoint" in d) {
        delete d.checkpoint;
      }
      if ("afterCheckpoint" in d) {
        delete d.afterCheckpoint;
      }
      r.push(d);
    }
    const s = {
      ...n,
      latestCheckpointId: i,
      conversation: r,
      _v: 1
    };
    if ("latestCheckpoint" in s) {
      delete s.latestCheckpoint;
    }
    return s;
  }
};
kNg = {
  version: 2,
  check: n => n._v === 1,
  migrate: async (n, e) => {
    let t = n;
    t.conversation = t.conversation.map(p => Epa(p));
    const i = {};
    const s = t.capabilities.find(p => p.type === ko.TOOL_FORMER)?.data;
    const o = sNA(s?.bubbleDataMap || "{}");
    const a = {};
    const l = {};
    for (const p of t.conversation) {
      const g = p.codeBlocks || [];
      for (let f = 0; f < g.length; f++) {
        const A = g[f];
        if (A.unregistered === true) {
          continue;
        }
        const w = `${A.uri.toString()}!${A.version}`;
        l[w] = {
          bubbleId: p.bubbleId,
          codeBlockIdx: f
        };
      }
    }
    if (t.codeBlockData) {
      for (const p in t.codeBlockData) {
        const g = t.codeBlockData[p];
        for (const f of g) {
          const A = `${f.uri.toString()}!${f.version}`;
          const w = l[A];
          if (w !== undefined) {
            const C = `${f.uri.toString()}!${f.version}!${w.codeBlockIdx}`;
            a[C] = {
              content: f.content,
              languageId: f.languageId
            };
          }
        }
      }
    }
    for (const p of t.conversation) {
      const g = {
        ...p,
        _v: 2
      };
      if (p.bubbleId in o) {
        g.toolFormerData = o[p.bubbleId];
      }
      if (g.codeBlocks && g.codeBlocks.length > 0) {
        for (let f = 0; f < g.codeBlocks.length; f++) {
          const A = g.codeBlocks[f];
          if (!A.unregistered) {
            const w = A;
            const C = `${A.uri.toString()}!${A.version}!${A.codeBlockIdx}`;
            const x = {
              ...w,
              _v: 1
            };
            if (C in a) {
              x.content = a[C].content;
              if (a[C].languageId !== undefined) {
                x.languageId = a[C].languageId;
              }
            } else {
              console.error("[composerMigrations] Code block not found in codeBlockContentMap", C);
              x.content = "";
            }
            g.codeBlocks[f] = x;
          }
        }
      }
      await e.composerMessageStorageService.storeMessage(t.composerId, g);
      i[p.bubbleId] = g;
    }
    const u = {};
    if (t.codeBlockData) {
      const p = {};
      for (const g in t.codeBlockData) {
        const f = t.codeBlockData[g];
        p[g] = new Set();
        for (const A of f) {
          const C = `${A.uri.toString()}!${A.version}`;
          if (l[C] === undefined) {
            p[g].add(A.version);
            console.warn(`[composerMigrations] Code block not found in uriVersionToBlockInfo, removing: ${C}`);
          }
        }
      }
      for (const g in t.codeBlockData) {
        const f = t.codeBlockData[g];
        const A = p[g];
        u[g] = [];
        let w = 0;
        const C = new Map();
        for (let x = 0; x < f.length; x++) {
          if (A.has(x)) {
            w++;
          } else {
            const I = x - w;
            C.set(x, I);
          }
        }
        for (const x of f) {
          const I = x.version;
          if (A.has(I)) {
            continue;
          }
          const R = `${x.uri.toString()}!${I}`;
          const N = l[R];
          const M = C.get(I);
          let O;
          if (x.originalModelDiffWrtV0 || x.newModelDiffWrtV0) {
            O = await e.composerCodeBlockDiffStorageService.storeDiff(t.composerId, {
              originalModelDiffWrtV0: x.originalModelDiffWrtV0 || [],
              newModelDiffWrtV0: x.newModelDiffWrtV0 || []
            });
          }
          delete x.originalModelDiffWrtV0;
          delete x.newModelDiffWrtV0;
          u[g].push({
            ...x,
            _v: 1,
            version: M,
            bubbleId: N.bubbleId,
            codeBlockIdx: N.codeBlockIdx,
            diffId: O
          });
        }
      }
    }
    const d = t.conversation.map(p => ({
      bubbleId: p.bubbleId,
      type: p.type,
      serverBubbleId: p.serverBubbleId
    }));
    const m = {
      ...t,
      fullConversationHeadersOnly: d,
      conversationMap: i,
      codeBlockData: u,
      _v: 2
    };
    delete m.conversation;
    return m;
  }
};
ENg = {
  version: 3,
  check: n => n._v === 2,
  migrate: async (n, e) => {
    const t = n;
    const i = {};
    for (const l in t.codeBlockData) {
      const u = t.codeBlockData[l];
      i[l] = [];
      for (const d of u) {
        const {
          isChained: m,
          _v: p,
          ...g
        } = d;
        const f = {
          ...g,
          _v: 2,
          chainedInfo: undefined
        };
        if (m) {
          let A;
          for (let w = d.version - 1; w >= 0; w--) {
            const C = u[w];
            if (C?.diffId !== undefined) {
              A = C.version;
              break;
            }
          }
          if (A !== undefined) {
            f.chainedInfo = {
              chainedFromVersion: A
            };
          }
        }
        i[l].push(f);
      }
    }
    const {
      codeBlockData: r,
      _v: s,
      ...o
    } = t;
    return {
      ...o,
      codeBlockData: i,
      subComposerIds: [],
      _v: 3
    };
  }
};
xNg = {
  version: 4,
  check: n => n._v === 3,
  migrate: async (n, e) => {
    const t = n;
    let i;
    const r = t.fullConversationHeadersOnly;
    for (let o = r.length - 1; o >= 0; o--) {
      const a = r[o];
      const l = t.conversationMap[a.bubbleId];
      if (!l) {
        break;
      }
      if (l.toolFormerData && l.toolFormerData.tool === an.TODO_WRITE && l.toolFormerData.params?.todos) {
        i = l.toolFormerData.params.todos.map(u => new QB(u));
        break;
      }
    }
    return {
      ...t,
      todos: i,
      _v: 4
    };
  }
};
TNg = {
  version: 5,
  check: n => n._v === 4,
  migrate: async (n, e) => ({
    ...n,
    _v: 5
  })
};
INg = {
  version: 6,
  check: n => n._v === 5,
  migrate: async (n, e) => {
    const t = n;
    const i = {};
    for (const o in t.codeBlockData) {
      const a = t.codeBlockData[o];
      i[o] = {};
      for (const l of a) {
        const u = Wr();
        i[o][l.version] = u;
      }
    }
    const r = {};
    for (const o in t.codeBlockData) {
      const a = t.codeBlockData[o];
      if (a.length !== 0) {
        r[o] = {};
        for (const l of a) {
          const u = i[o][l.version];
          i[o][l.version] = u;
          let d;
          if (l.chainedInfo) {
            const f = i[l.uri.toString()][l.chainedInfo.chainedFromVersion];
            if (f) {
              d = {
                chainedFromCodeblockId: f
              };
            }
          }
          const m = {
            ...l,
            _v: 3,
            codeblockId: u,
            chainedInfo: d,
            fromSubagentCodeBlockInfo: undefined,
            createdAt: l.version,
            lastAppliedAt: l.isNotApplied ? -1 : l.version
          };
          r[o][u] = m;
          const p = f => {
            f.codeBlocks = f.codeBlocks?.map(A => A.uri?.toString() === o && A.version === l.version ? {
              ...A,
              _v: 2,
              codeblockId: u,
              version: undefined
            } : A);
            if (f.toolFormerData?.tool === an.EDIT_FILE && f.toolFormerData.additionalData !== undefined) {
              f.toolFormerData.additionalData.codeblockId = u;
            }
            f._v = 3;
          };
          const g = l.bubbleId;
          if (t.conversationMap[g]) {
            const f = t.conversationMap[g];
            p(f);
            await e.composerMessageStorageService.storeMessage(t.composerId, f);
          } else {
            await e.composerMessageStorageService.updateMessage(t.composerId, g, p);
          }
        }
      }
    }
    return {
      ...t,
      codeBlockData: r,
      conversationMap: t.conversationMap,
      _v: 6
    };
  }
};
DNg = {
  version: 7,
  check: n => n._v === 6,
  migrate: async (n, e) => {
    const t = n;
    const i = {};
    const r = t.originalModelLines;
    if (r) {
      for (const u in r) {
        const m = r[u].join(`
`);
        let p;
        let g = Infinity;
        const f = t.codeBlockData[u];
        if (f) {
          for (const A in f) {
            const w = f[A];
            if (w.createdAt < g) {
              g = w.createdAt;
              p = w.bubbleId;
            }
          }
        }
        if (p) {
          i[u] = {
            content: m,
            firstEditBubbleId: p,
            isNewlyCreated: false,
            newlyCreatedFolders: []
          };
        }
      }
    }
    const {
      _v: s,
      originalModelLines: o,
      ...a
    } = t;
    return {
      ...a,
      originalFileStates: i,
      _v: 7
    };
  }
};
BNg = {
  version: 8,
  check: n => n._v === 7,
  migrate: async (n, e) => {
    const t = n;
    const i = t.unifiedMode === "edit" ? "agent" : t.unifiedMode;
    return {
      ...t,
      unifiedMode: i,
      _v: 8
    };
  }
};
RNg = {
  version: 9,
  check: n => n._v === 8,
  migrate: async (n, e) => {
    const t = n;
    const i = e.modelConfigService.getModelConfig("composer").modelName;
    const r = e.modelConfigService.getModelConfig("composer").maxMode;
    return {
      ...t,
      modelConfig: {
        modelName: i,
        maxMode: r
      },
      _v: 9
    };
  }
};
PNg = {
  version: 10,
  check: n => n._v === 9,
  migrate: async (n, e) => {
    const t = n;
    const i = crypto.getRandomValues(new Uint8Array(32));
    return {
      ...t,
      speculativeSummarizationEncryptionKey: i,
      _v: 10
    };
  }
};
LNg = {
  version: 11,
  check: n => n._v === 10,
  migrate: async (n, e) => {
    const t = n;
    let i;
    try {
      const s = new eO(e.storageService, t.composerId);
      const o = await s.getLatestCheckpointPointer();
      if (o) {
        const a = TC();
        const l = await s.getBlob(a, o);
        if (l) {
          i = vk.fromBinary(l);
          console.info("[composerMigrations] V11: Loaded conversationState from blob store checkpoint", {
            composerId: t.composerId,
            turns: i.turns?.length ?? 0,
            fileStates: Object.keys(i.fileStatesV2 ?? {}).length
          });
        }
      }
    } catch (s) {
      console.warn("[composerMigrations] V11: Failed to load checkpoint from blob store", {
        composerId: t.composerId,
        error: s
      });
    }
    i ||= new vk();
    return {
      ...t,
      conversationState: i,
      _v: 11
    };
  }
};
NNg = {
  version: 12,
  check: n => n._v === 11,
  migrate: async (n, e) => ({
    ...n,
    _v: 12
  })
};
MNg = {
  version: 13,
  check: n => n._v === 12,
  migrate: async (n, e) => ({
    ...n,
    _v: 13,
    queueItems: []
  })
};
FNg = {
  version: 14,
  check: n => n._v === 13,
  migrate: async (n, e) => ({
    ...n,
    _v: 14,
    activeBranch: undefined,
    branches: []
  })
};
ONg = [SNg, kNg, ENg, xNg, TNg, INg, DNg, BNg, RNg, PNg, LNg, NNg, MNg, FNg];
