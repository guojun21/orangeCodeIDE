"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerCheckpointService.js
// Offset: 30410411 (bundle byte offset)
// Size: 18734 bytes
Wt();
cp();
rt();
oa();
Er();
oP();
VA();
jk();
fQ();
Yn();
td();
Dd();
_M();
Ud();
ps();
of();
hs();
uce();
yhn();
zr();
pQ();
Uv();
Vg();
vEe();
Ql();
Ix();
Bc();
Ff();
qwi();
bMe = xi("composerCheckpointService");
Die = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A) {
    super();
    this._composerDataService = e;
    this._composerViewsService = t;
    this._composerFileService = i;
    this._prettyDialogService = r;
    this._inlineDiffService = s;
    this._reactiveStorageService = o;
    this.composerTextModelService = a;
    this._analyticsService = l;
    this._workspaceContextService = u;
    this._commandService = d;
    this._composerCheckpointStorageService = m;
    this._composerCodeBlockService = p;
    this._textFileService = g;
    this._textModelService = f;
    this._patchGraphAdapterService = A;
  }
  async createCheckoutCallback(e, t, i) {
    if (!e) {
      console.error("[composer] No composer handle provided");
      return;
    }
    const r = this._composerDataService.getComposerData(e);
    if (!r) {
      console.error("[composer] No composer found for the given handle");
      return;
    }
    const s = r.composerId;
    const o = typeof t == "string";
    if (o && r.currentBubbleId === t) {
      console.log("[composer] Already at the target message");
      return;
    }
    let a;
    if (o && (a = r.fullConversationHeadersOnly.findIndex(g => g.bubbleId === t), a === -1)) {
      console.error("[composer] No message found with the given bubble ID or message has no checkpoint");
      return;
    }
    const l = i?.checkpointValidation ?? (await this.validateCheckpointContent(e, t));
    const u = async () => {
      if (r.currentBubbleId === undefined && o) {
        const g = r.latestCheckpointId ? await this._composerCheckpointStorageService.retrieveCheckpoint(s, r.latestCheckpointId) : undefined;
        const f = await this.createCurrentCheckpoint(s, g);
        if (!f) {
          return;
        }
        if (r.latestCheckpointId) {
          await this._composerCheckpointStorageService.updateCheckpoint(s, r.latestCheckpointId, A => {
            Object.assign(A, f);
          });
        } else {
          const A = await this._composerCheckpointStorageService.storeCheckpoint(s, f);
          this._composerDataService.updateComposerData(e, {
            latestCheckpointId: A
          });
        }
      }
    };
    if (l.isSame) {
      console.log("[composer] Checkout to message is the same as current");
      if (!i?.fromSubmitChat) {
        await u();
        this._commandService.executeCommand(rpi, s);
        this._composerDataService.updateComposerData(e, {
          currentBubbleId: o ? t : undefined,
          editingBubbleId: o ? t : undefined
        });
        setTimeout(() => {
          this._composerViewsService.getPrevEditingBubbleInputDelegate(s).focus();
        }, 0);
      }
      return;
    }
    if (!i?.fromSubmitChat) {
      let g;
      if (l.hasNotebookFiles) {
        g = `You can always undo this later.
Note: Notebook cells are not supported for reverting.`;
      } else {
        g = "You can always undo this later.";
      }
      if ((await this._prettyDialogService.openDialog({
        title: "Discard all changes up to this checkpoint?",
        message: g,
        cancelButton: {
          id: "cancel",
          label: "Cancel"
        },
        primaryButton: {
          id: "continue",
          label: "Continue"
        },
        shouldShowDontAskAgain: true,
        dialogKey: "composer-checkout-to-message"
      })) !== "continue") {
        return;
      }
      this._commandService.executeCommand(rpi, s);
    }
    const d = r.currentBubbleId ? r.fullConversationHeadersOnly.findIndex(g => g.bubbleId === r.currentBubbleId) : r.fullConversationHeadersOnly.length - 1;
    let m = !o;
    if (a) {
      m = a > d;
    }
    this._analyticsService.trackEvent("composer.checkout_to_message", {
      messageIndex: a,
      isMovingForward: m
    });
    if (!i?.fromSubmitChat) {
      await u();
    }
    return await this._patchGraphAdapterService.createRevertToCheckpointCallback(e, t, r, s, i);
  }
  async createCheckoutCallbackWithInlineDiffs(e, t, i, r, s) {
    const o = typeof t == "string";
    let a = new Set();
    let l = new Map();
    let u = new Set();
    let d;
    if (o) {
      const g = i.conversationMap[t].checkpointId;
      d = await this._composerCheckpointStorageService.retrieveCheckpoint(r, g);
    } else {
      d = t;
    }
    if (!d) {
      throw new Error("[composer] No checkpoint found for the given bubble ID");
    }
    if (o) {
      const g = await this.getFilesToRevertForCheckpoint(e, t, i.currentBubbleId, d);
      a = g.filesToRevert;
      l = g.intermediateFiles;
      u = g.foldersToDelete;
    } else {
      const g = new Set(d.activeInlineDiffs?.map(A => A.uri.toString()) ?? []);
      const f = this.getUrisForCheckpoints(i);
      a = new Set(d.files.map(A => A.uri.toString()).filter(A => !g.has(A) && f.has(A)));
    }
    const m = Object.fromEntries(Object.entries(i.originalFileStates).map(([g, f]) => [g, {
      ...f
    }]));
    return async () => {
      for (const g of a) {
        try {
          const f = je.parse(g);
          let A;
          if (f.path.endsWith(".ipynb")) {
            continue;
          }
          if (d.files.some(w => w.uri.toString() === g)) {
            A = d.files.find(w => w.uri.toString() === g);
          } else {
            const w = l.get(g);
            if (w) {
              A = w.checkpoint.files.find(C => C.uri.toString() === g);
            }
          }
          if (A) {
            const w = m[f.toString()]?.content !== undefined ? Zv(m[f.toString()].content) : undefined;
            if (A.isNewlyCreated) {
              await this._composerFileService.deleteFile({
                uri: f,
                composerData: i
              });
              console.log(`[composer] Deleted newly created file ${g}`);
            } else {
              await this._composerFileService.createNewFileAndMaybeFolder(A.uri, i, true);
              let x;
              try {
                x = await this.composerTextModelService.createModelReference(f, i, true);
                const I = x.object.textEditorModel;
                const B = I.getLinesContent();
                if (w === undefined || A.originalModelDiffWrtV0 === undefined) {
                  console.error(`[composer] No original file state found for ${f.toString()}`);
                  continue;
                }
                const R = this._composerCodeBlockService.applyDiffToLines(w, A.originalModelDiffWrtV0);
                if (B.length !== R.length || B.join(`
`) !== R.join(`
`)) {
                  I.setValue(R.join(`
`));
                  await this._composerFileService.saveFile({
                    uri: f,
                    composerData: i,
                    options: {
                      ignoreModifiedSince: true
                    }
                  });
                }
              } finally {
                x?.dispose();
              }
            }
            const C = this._inlineDiffService.inlineDiffs.nonReactive().find(x => x.uri.toString() === g);
            if (C) {
              this._inlineDiffService.remove(C.id);
            }
            console.log(`[composer] Processed file ${g} for revert operation`);
          }
        } catch (f) {
          console.error(`[composer] Error processing file ${g}:`, f);
        }
      }
      for (const g of u) {
        try {
          await this._composerFileService.deleteFolder({
            uri: je.parse(g),
            composerData: i
          });
          console.log(`[composer] Deleted newly created folder ${g}`);
        } catch (f) {
          console.error(`[composer] Error deleting folder ${g}:`, f);
        }
      }
      for (const g of d.nonExistentFiles) {
        await this._composerFileService.deleteFile({
          uri: g.uri,
          composerData: i
        });
        console.log(`[composer] Deleted non existent file ${g.uri.toString()}`);
      }
      for (const g of d.activeInlineDiffs) {
        const {
          uri: f,
          originalTextDiffWrtV0: A,
          newTextDiffWrtV0: w,
          generationUUID: C
        } = g;
        const x = m[f.toString()]?.content !== undefined ? Zv(m[f.toString()].content) : undefined;
        if (A !== undefined && w !== undefined && x !== undefined) {
          const I = this._composerCodeBlockService.applyDiffToLines(x, A);
          const B = this._composerCodeBlockService.applyDiffToLines(x, w);
          if (I && B) {
            const R = B.join(`
`);
            await this._composerFileService.writeFile({
              uri: f,
              bufferOrReadableOrStream: Ms.fromString(R),
              composerData: i
            });
            await this._composerFileService.revertFile({
              uri: f,
              composerData: i,
              options: {
                soft: false
              }
            });
            const N = await this._textModelService.createModelReference(f);
            try {
              await this._textFileService.files.resolve(f, {
                reload: {
                  async: false
                },
                forceReadFromFile: true
              });
              const M = this._inlineDiffService.inlineDiffs.nonReactive().find(H => H.uri.toString() === f.toString());
              if (M) {
                this._inlineDiffService.remove(M.id);
              }
              const O = B.length;
              const $ = new rh(1, O + 1);
              await this._inlineDiffService.addDecorationsOnlyDiff({
                uri: f,
                generationUUID: C ?? Wr(),
                currentRange: $,
                originalTextLines: I,
                newTextLines: B,
                prompt: "<checkpoint-revert>",
                attachedToPromptBar: false,
                source: gce,
                createdAt: Date.now(),
                composerMetadata: {
                  composerId: i.composerId,
                  composerGenerationID: i.chatGenerationUUID ?? ""
                },
                hideDeletionViewZones: false
              });
            } finally {
              N?.dispose();
            }
          }
        }
      }
      if (!s?.fromSubmitChat) {
        this._composerDataService.updateComposerData(e, {
          currentBubbleId: o ? t : undefined,
          editingBubbleId: o ? t : undefined,
          newlyCreatedFiles: [...d.inlineDiffNewlyCreatedResources.files],
          newlyCreatedFolders: [...d.inlineDiffNewlyCreatedResources.folders]
        });
        setTimeout(() => {
          this._composerViewsService.getPrevEditingBubbleInputDelegate(r).focus();
        }, 0);
      }
      console.log(`[composer] Completed reverting to ${o ? "message " + t : "checkpoint"}`);
    };
  }
  async checkoutToCheckpoint(e, t) {
    const i = await this.createCheckoutCallback(e, t);
    if (i) {
      await i();
    }
  }
  async checkoutToLatest(e) {
    if (!e) {
      console.error("[composer] No composer handle provided");
      return;
    }
    const t = this._composerDataService.getComposerData(e);
    if (!t) {
      console.error("[composer] No composer found for the given handle");
      return;
    }
    if (!t.latestCheckpointId) {
      console.error("[composer] No latest checkpoint found for the composer");
      return;
    }
    const i = await this._composerCheckpointStorageService.retrieveCheckpoint(t.composerId, t.latestCheckpointId);
    if (!i) {
      console.error("[composer] No latest checkpoint found for the composer");
      return;
    }
    return this.checkoutToCheckpoint(e, i);
  }
  async createCurrentCheckpoint(e, t, i) {
    const r = this._composerDataService.getHandleIfLoaded(e);
    const s = r ? this._composerDataService.getComposerData(r) : undefined;
    if (!s || !r) {
      throw new Error("[composer] No composer found for the given ID");
    }
    const o = Yjl();
    const a = this.getUrisForCheckpoints(s);
    for (const l of a) {
      const u = je.parse(l);
      const d = s.originalFileStates[l];
      if (d === undefined) {
        continue;
      }
      if (i !== undefined && d.firstEditBubbleId === i && d.isNewlyCreated) {
        o.files.push({
          uri: u,
          originalModelDiffWrtV0: [],
          isNewlyCreated: true
        });
        o.newlyCreatedFolders.push(...d.newlyCreatedFolders.map(p => ({
          uri: p
        })));
        continue;
      }
      const m = this._composerDataService.getComposerData(r);
      if (!(await this._composerFileService.exists({
        uri: u,
        composerData: m
      }))) {
        o.nonExistentFiles.push({
          uri: u
        });
        continue;
      }
      try {
        const p = this._composerDataService.getHandleIfLoaded(e);
        if (!p) {
          continue;
        }
        const g = this._composerCodeBlockService.getInlineDiff(p, u);
        if (g) {
          if ("newTextLines" in g && "originalTextLines" in g) {
            const f = g.composerMetadata?.codeblockId ?? "";
            const [A, w] = await Promise.all([this._composerCodeBlockService.computeLineDiffs(p, u, g.originalTextLines), this._composerCodeBlockService.computeLineDiffs(p, u, g.newTextLines)]);
            o.activeInlineDiffs.push({
              uri: u,
              codeBlockId: f,
              originalTextDiffWrtV0: A,
              newTextDiffWrtV0: w,
              generationUUID: g.generationUUID
            });
          }
        } else {
          let f;
          try {
            f = await this.composerTextModelService.createModelReference(u, s, true);
            const A = f.object.textEditorModel;
            const w = await this._composerCodeBlockService.computeLineDiffs(p, u, A.getLinesContent());
            o.files.push({
              uri: u,
              originalModelDiffWrtV0: w
            });
          } finally {
            f?.dispose();
          }
        }
      } catch (p) {
        console.error(`[composer] Error saving latest state for file ${l}:`, p);
      }
    }
    if (t) {
      const l = t.files.filter(u => u.isNewlyCreated && !o.files.find(d => d.uri.toString() === u.uri.toString()));
      o.files.push(...l);
      o.newlyCreatedFolders = [...t.newlyCreatedFolders];
    }
    o.inlineDiffNewlyCreatedResources = {
      files: [...s.newlyCreatedFiles],
      folders: [...s.newlyCreatedFolders]
    };
    return o;
  }
  async validateCheckpointContent(e, t) {
    if (!e) {
      return {
        isSame: false,
        hasNotebookFiles: false
      };
    }
    const i = this._composerDataService.getComposerData(e);
    if (!i) {
      return {
        isSame: false,
        hasNotebookFiles: false
      };
    }
    const r = typeof t == "string";
    let s;
    let o = new Set();
    let a = new Map();
    let l = new Set();
    if (typeof t == "string") {
      const m = i.conversationMap[t].checkpointId;
      if (!m) {
        return {
          isSame: true,
          hasNotebookFiles: false
        };
      }
      s = await this._composerCheckpointStorageService.retrieveCheckpoint(i.composerId, m);
      if (!s) {
        return {
          isSame: true,
          hasNotebookFiles: false
        };
      }
      const p = await this.getFilesToRevertForCheckpoint(e, t, i.currentBubbleId, s);
      o = p.filesToRevert;
      a = p.intermediateFiles;
      l = p.foldersToDelete;
    } else {
      s = t;
      const m = new Set(s.activeInlineDiffs?.map(g => g.uri.toString()) ?? []);
      const p = this.getUrisForCheckpoints(i);
      o = new Set(s.files.map(g => g.uri.toString()).filter(g => !m.has(g) && p.has(g)));
    }
    const u = Array.from(o).some(m => m.endsWith(".ipynb"));
    const d = await this._composerDataService.getCurrentFilesContent(i.composerId, Array.from(o));
    for (const m of o) {
      let p;
      if (s.files.some(f => f.uri.toString() === m)) {
        p = s.files.find(f => f.uri.toString() === m);
      } else {
        const f = a.get(m);
        if (f) {
          p = f.checkpoint.files.find(A => A.uri.toString() === m);
        }
      }
      const g = d.get(m) || [];
      if (p) {
        if (p.isNewlyCreated) {
          if (await this._composerFileService.exists({
            uri: p.uri,
            composerData: i
          })) {
            return {
              isSame: false,
              hasNotebookFiles: u
            };
          }
        } else {
          if (!(await this._composerFileService.exists({
            uri: p.uri,
            composerData: i
          }))) {
            return {
              isSame: false,
              hasNotebookFiles: u
            };
          }
          const f = this._composerCodeBlockService.getCodeBlockLinesByDiff(e, p.uri, p.originalModelDiffWrtV0 ?? []) ?? [];
          if (!this.areContentsEqual(g, f ?? [])) {
            return {
              isSame: false,
              hasNotebookFiles: u
            };
          }
        }
      } else if (g.length > 0) {
        return {
          isSame: false,
          hasNotebookFiles: u
        };
      }
    }
    if (l.size > 0 || s.nonExistentFiles.length > 0) {
      return {
        isSame: false,
        hasNotebookFiles: u
      };
    }
    for (const m of s.activeInlineDiffs ?? []) {
      const {
        uri: p,
        codeBlockId: g,
        originalTextDiffWrtV0: f,
        newTextDiffWrtV0: A
      } = m;
      const w = this._inlineDiffService.inlineDiffs.nonReactive().find(I => I.uri.toString() === p.toString());
      if (!w) {
        return {
          isSame: false,
          hasNotebookFiles: u
        };
      }
      const C = g || undefined;
      const x = w.composerMetadata?.codeblockId || undefined;
      if (C !== x || i.composerId !== w.composerMetadata?.composerId) {
        return {
          isSame: false,
          hasNotebookFiles: u
        };
      }
      if ("originalTextLines" in w && "newTextLines" in w) {
        const I = this._composerCodeBlockService.getCodeBlockLinesByDiff(e, p, f ?? []);
        const B = this._composerCodeBlockService.getCodeBlockLinesByDiff(e, p, A ?? []);
        if (!I || !B || !this.areContentsEqual(I, w.originalTextLines) || !this.areContentsEqual(B, w.newTextLines)) {
          return {
            isSame: false,
            hasNotebookFiles: u
          };
        }
      }
    }
    return {
      isSame: true,
      hasNotebookFiles: u
    };
  }
  async getFilesToRevertForCheckpoint(e, t, i, r) {
    const s = this._composerDataService.getComposerData(e);
    if (!s) {
      throw new Error("[composer] No composer found for the given handle");
    }
    const o = new Set(r.activeInlineDiffs?.map(f => f.uri.toString()) ?? []);
    const a = new Set();
    const l = new Map();
    r.newlyCreatedFolders.forEach(f => {
      a.add(f.uri.toString());
    });
    const u = this._composerDataService.getLoadedConversation(e);
    const d = u.findIndex(f => f.bubbleId === t) + 1;
    const m = i ? u.findIndex(f => f.bubbleId === i) : u.length;
    for (const f of u.slice(d, m)) {
      const A = f.checkpointId ? await this._composerCheckpointStorageService.retrieveCheckpoint(s.composerId, f.checkpointId) : undefined;
      if (A) {
        A.files.forEach(w => {
          const C = w.uri.toString();
          if (!r.files.some(x => x.uri.toString() === C) && !l.has(C) && !o.has(C)) {
            l.set(C, {
              checkpoint: A
            });
          }
        });
        A.newlyCreatedFolders.forEach(w => {
          a.add(w.uri.toString());
        });
      }
    }
    const p = this.getUrisForCheckpoints(s);
    return {
      filesToRevert: new Set([...r.files.filter(f => !o.has(f.uri.toString())).map(f => f.uri.toString()), ...l.keys()].filter(f => p.has(f))),
      intermediateFiles: l,
      foldersToDelete: a
    };
  }
  getUrisForCheckpoints(e) {
    if (e.isNAL) {
      return new Set(Array.from(Object.keys(e.originalFileStates)).filter(s => {
        const o = je.parse(s);
        return o.scheme !== _n.vscodeNotebookCell && !o.path.endsWith(".ipynb");
      }));
    }
    const t = new Set();
    for (const s of Object.keys(e.codeBlockData)) {
      t.add(s);
    }
    const i = this._composerDataService.getHandleIfLoaded(e.composerId);
    const r = i ? this._composerDataService.getLoadedConversation(i) : [];
    for (const s of r) {
      if (s.capabilityType === ko.TOOL_FORMER) {
        const o = i ? this._composerDataService.getComposerCapability(i, ko.TOOL_FORMER)?.getBubbleData(s.bubbleId) : undefined;
        if (o?.tool === an.DELETE_FILE && o.params?.relativeWorkspacePath) {
          const a = this._workspaceContextService.resolveRelativePath(o.params.relativeWorkspacePath);
          t.add(a.toString());
        }
      }
    }
    return new Set(Array.from(t).filter(s => {
      const o = je.parse(s);
      return o.scheme !== _n.vscodeNotebookCell && !o.path.endsWith(".ipynb");
    }));
  }
  areContentsEqual(e, t) {
    if (e.length !== t.length) {
      return false;
    }
    for (let i = 0; i < e.length; i++) {
      if (e[i] !== t[i]) {
        return false;
      }
    }
    return true;
  }
  getFileContentsGivenCheckpoint(e, t, i) {
    const r = i.toString();
    const s = t.activeInlineDiffs.find(l => l.uri.toString() === r);
    const o = t.files.find(l => l.uri.toString() === r);
    let a = null;
    if (s && s.newTextDiffWrtV0) {
      a = this._composerCodeBlockService.getCodeBlockLinesByDiff(e, i, s.newTextDiffWrtV0)?.join(`
`) ?? null;
    } else if (o && o.originalModelDiffWrtV0) {
      if (o.isNewlyCreated && o.originalModelDiffWrtV0.length === 0) {
        return null;
      }
      a = this._composerCodeBlockService.getCodeBlockLinesByDiff(e, i, o.originalModelDiffWrtV0)?.join(`
`) ?? null;
    }
    return a;
  }
  async getFileContentsGivenBubbleId(e, t, i, r) {
    if (!e) {
      return {
        case: "notFound"
      };
    }
    const s = this._composerDataService.getComposerData(e);
    if (!s) {
      return {
        case: "notFound"
      };
    }
    const o = this._composerDataService.getComposerBubble(e, t);
    if (!o) {
      return {
        case: "notFound"
      };
    }
    let a = o.checkpointId;
    if (r?.isAfterCheckpoint) {
      a = o.afterCheckpointId;
    }
    const l = a ? await this._composerCheckpointStorageService.retrieveCheckpoint(s.composerId, a) : undefined;
    if (!l) {
      return {
        case: "notFound"
      };
    }
    const u = this.getFileContentsGivenCheckpoint(e, l, i);
    if (u === null) {
      const d = i.toString();
      if (s.originalFileStates[d]?.isNewlyCreated) {
        return {
          case: "isNewlyCreated"
        };
      } else {
        return {
          case: "notFound"
        };
      }
    }
    return {
      case: "contents",
      contents: u
    };
  }
  async updateComposerBubbleCheckpoint(e, t, i) {
    const r = Date.now();
    try {
      const s = await this.createCurrentCheckpoint(e, undefined, t);
      if (s) {
        const o = this._composerDataService.getHandleIfLoaded(e);
        if (o) {
          await this._composerDataService.updateComposerBubbleCheckpoint(o, t, s, {
            isAfterCheckpoint: i?.isAfterCheckpoint ?? false
          });
        }
      }
    } finally {
      const s = Date.now();
      console.debug(`[composer.checkpoint] Updated composer bubble checkpoint for composer ${e} in ${s - r}ms`);
    }
  }
  async updateLastCheckpointWithFileIfNotTracked(e, t, i) {
    if (!e) {
      return;
    }
    const r = e.data.composerId;
    const s = this._composerDataService.getLastBubbleWhere(e, a => !!a.checkpointId);
    const o = s?.checkpointId ? await this._composerCheckpointStorageService.retrieveCheckpoint(r, s.checkpointId) : undefined;
    if (!t.path.endsWith(".ipynb") && s) {
      const a = o?.files.some(u => u.uri.toString() === t.toString()) || o?.activeInlineDiffs.some(u => u.uri.toString() === t.toString());
      let l = [" "];
      if (!a) {
        if (i?.forceModelContent) {
          l = i.forceModelContent;
        } else {
          let m;
          try {
            const p = e.data;
            m = await this.composerTextModelService.createModelReference(t, p, true);
            l = m.object.textEditorModel.getLinesContent();
          } finally {
            m?.dispose();
          }
        }
        const u = await this._composerCodeBlockService.computeLineDiffs(e, t, l);
        const d = ["conversationMap", s.bubbleId, "checkpointId"];
        if (o === undefined) {
          const m = Yjl();
          const p = await this._composerCheckpointStorageService.storeCheckpoint(r, m);
          this._composerDataService.updateComposerDataSetStore(e, g => g(...d, p));
        }
        if (s?.checkpointId) {
          const m = s.checkpointId;
          await this._composerCheckpointStorageService.updateCheckpoint(r, m, p => {
            p.files.push({
              uri: t,
              originalModelDiffWrtV0: u,
              isNewlyCreated: i?.isNewlyCreated ?? false
            });
            p.newlyCreatedFolders.push(...(i?.newlyCreatedFolders ?? []));
          });
        }
      }
    }
  }
};
__decorate([Gs("ComposerCheckpointService.createCheckoutCallback")], Die.prototype, "createCheckoutCallback", null);
__decorate([Gs("ComposerCheckpointService.createCheckoutCallbackWithInlineDiffs")], Die.prototype, "createCheckoutCallbackWithInlineDiffs", null);
__decorate([Gs("ComposerCheckpointService.checkoutToCheckpoint")], Die.prototype, "checkoutToCheckpoint", null);
__decorate([Gs("ComposerCheckpointService.checkoutToLatest")], Die.prototype, "checkoutToLatest", null);
__decorate([Gs("ComposerCheckpointService.createCurrentCheckpoint")], Die.prototype, "createCurrentCheckpoint", null);
__decorate([Gs("ComposerCheckpointService.validateCheckpointContent")], Die.prototype, "validateCheckpointContent", null);
__decorate([Gs("ComposerUtilsService.getFilesToRevertForCheckpoint")], Die.prototype, "getFilesToRevertForCheckpoint", null);
__decorate([Gs("ComposerUtilsService.getUrisForCheckpoints")], Die.prototype, "getUrisForCheckpoints", null);
__decorate([Gs("ComposerUtilsService.areContentsEqual")], Die.prototype, "areContentsEqual", null);
__decorate([Gs("ComposerCheckpointService.getFileContentsGivenCheckpoint")], Die.prototype, "getFileContentsGivenCheckpoint", null);
__decorate([Gs("ComposerCheckpointService.getFileContentsGivenBubbleId")], Die.prototype, "getFileContentsGivenBubbleId", null);
Die = __decorate([__param(0, Oa), __param(1, rw), __param(2, YZ), __param(3, JF), __param(4, fL), __param(5, ku), __param(6, iie), __param(7, uh), __param(8, Lr), __param(9, fr), __param(10, Ctt), __param(11, EJ), __param(12, Gg), __param(13, El), __param(14, tgn)], Die);
Vi(bMe, Die, 1);
