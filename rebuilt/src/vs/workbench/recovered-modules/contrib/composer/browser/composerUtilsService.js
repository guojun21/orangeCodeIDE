// Deep recovered from recovered/candidate-source-deep-deshelled/cursor-modules/vs/workbench/contrib/composer/browser/composerUtilsService.js
// Cluster: composer-plan-tokens
// webcrackUsed: true
// lockedRenames: 1
// llmRenamesAccepted: 0
// llmEnabled: false
"use strict";
"use strict";

t8();
sC();
Wt();
cp();
rt();
oa();
Er();
Vw();
ps();
Yn();
cv();
Jk();
jk();
Hk();
iw();
Dd();
SI();
KS();
zr();
Uv();
Vg();
VA();
Lmn();
L3t();
cu();
Ix();
Nu();
hs();
S9();
Zk();
Hba();
oP();
of();
Ott();
fE();
Ka();
Bc();
kr();
yhn();
nvi();
mD();
jk();
pQ();
qi();
fQ();
KZ();
uce();
vEe();
vN();
Wu();
Rb();
Ime();
t1t();
Mkf();
UF();
Fkf = 5;
Ywi = 2;
IComposerUtilsService = xi("composerUtilsService");
composerPlanServiceToken = xi("composerPlanService");
ComposerUtilsService = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $) {
    super();
    this._composerDataService = e;
    this._composerFileService = t;
    this._workspaceContextService = i;
    this._editorWorkerService = r;
    this._reactiveStorageService = s;
    this.composerTextModelService = o;
    this._instantiationService = a;
    this._commandService = l;
    this._uiOverlayService = u;
    this._composerEventService = d;
    this._aiFileInfoService = m;
    this._composerViewsService = p;
    this._composerCodeBlockDiffStorageService = g;
    this._metricsService = f;
    this._composerCheckpointStorageService = A;
    this._messageRequestContextStorageService = w;
    this._storageService = C;
    this._composerCodeBlockService = x;
    this._prettyDialogService = I;
    this._aiService = B;
    this._composerModesService = R;
    this._experimentService = N;
    this._cursorAuthenticationService = M;
    this._blobUploadService = O;
    this._pluginsProviderService = $;
    this._composerDiffCache = new Fb(50);
    this._composerDiffSemaphore = new Pmn(5);
    this._composerIdToDisposables = this._register(new mp());
    this._register(this._reactiveStorageService.onChangeEffectManuallyDisposed({
      deps: [() => ESt(this._composerDataService.loadedComposers.ids), () => ESt(this._composerDataService.allComposersData.selectedComposerIds)],
      onChange: ({
        deps: [H, W]
      }) => {
        const z = H.filter(Y => W.includes(Y));
        for (const Y of z) {
          if (!this._composerIdToDisposables.has(Y)) {
            const j = this._composerDataService.loadedComposers.byId[Y];
            this._composerIdToDisposables.set(Y, this.setupComposerListeners(j));
          }
        }
        for (const Y of this._composerIdToDisposables.keys()) {
          if (!z.includes(Y)) {
            this._composerIdToDisposables.deleteAndDispose(Y);
          }
        }
      },
      runNowToo: true
    }));
  }
  setupComposerListeners(e) {
    const t = ESt(e);
    const i = new Ut();
    i.add(this._reactiveStorageService.onChangeEffectManuallyDisposed({
      deps: [() => e.editingBubbleId],
      onChange: ({
        deps: [r],
        prevDeps: [s] = [undefined]
      }) => {
        if (s === undefined || r === s) {
          return;
        }
        const o = t.fullConversationHeadersOnly.findIndex(g => g.bubbleId === s);
        if (o === -1 || o >= t.fullConversationHeadersOnly.length - 1) {
          return;
        }
        const a = t.fullConversationHeadersOnly[o + 1]?.bubbleId;
        const l = t.fullConversationHeadersOnly[o - 1]?.bubbleId;
        const u = a ? t.conversationMap[a] : undefined;
        const d = l ? t.conversationMap[l] : undefined;
        if ((u?.type !== ul.AI || u?.capabilityType !== ko.TOOL_FORMER) && (d?.type !== ul.AI || d?.capabilityType !== ko.TOOL_FORMER) || t.conversationMap[s]?.text?.trim() !== "") {
          return;
        }
        const p = this._composerDataService.getHandleIfLoaded(t.composerId);
        if (p) {
          this._composerDataService.deleteComposerBubbles(p, [s]);
        }
      }
    }));
    return i;
  }
  async decideRunningComposerTabAction(e, t) {
    const i = this._composerDataService.selectedComposerId;
    const r = this._composerDataService.getHandleIfLoaded(i);
    const s = r ? this._composerDataService.isComposerRunning(r) : false;
    if (t && this._composerDataService.selectedComposerIds.includes(t)) {
      return "skip";
    }
    const o = this._composerDataService.selectedComposerIds.length;
    const a = this._reactiveStorageService.applicationUserPersistentStorage.composerState.maxOpenTabsMode;
    const l = this._reactiveStorageService.applicationUserPersistentStorage.composerState.maxOpenTabsCustomValue;
    let u = 5;
    if (a === "5") {
      u = 5;
    } else if (a === "10") {
      u = 10;
    } else if (a === "unlimited") {
      u = Infinity;
    } else if (a === "custom") {
      u = Math.max(1, l ?? u);
    }
    const d = o < u;
    if (e === "switch") {
      if (d || this._composerDataService.getOldestNonRunningSelectedComposerId(t)) {
        return "new-tab";
      }
      const f = await this._prettyDialogService.openDialog({
        title: "Replace current chat?",
        message: "You've reached the limit for open chats. To switch to another chat, you'll have to replace the current one.",
        primaryButton: {
          id: "replace",
          label: "Replace Chat"
        },
        cancelButton: {
          id: "cancel",
          label: "Cancel"
        },
        dialogIcon: Be.warning
      });
      if (f === "cancel" || f === undefined) {
        return "cancel";
      } else {
        return "replace";
      }
    }
    if (!s || !r) {
      return "skip";
    }
    if (this._composerDataService.getPendingUserDecisionGroup(r).length > 0) {
      return "replace";
    }
    if (d) {
      return "new-tab";
    }
    const p = await this._prettyDialogService.openDialog({
      title: "Replace current chat?",
      message: "You've reached the limit for open chats. To few a new one, you'll have to replace the current chat.",
      primaryButton: {
        id: "replace",
        label: "Replace Chat"
      },
      cancelButton: {
        id: "cancel",
        label: "Cancel"
      },
      dialogIcon: Be.warning
    });
    if (p === "cancel" || p === undefined) {
      return "cancel";
    } else {
      return "replace";
    }
  }
  async getFileLinesContent(e) {
    const {
      uri: t,
      composerId: i
    } = e;
    const r = this._composerDataService.getHandleIfLoaded(i);
    const s = r ? this._composerDataService.getComposerData(r) : undefined;
    if (!(await this._composerFileService.exists({
      uri: t,
      composerData: s
    }))) {
      return null;
    }
    let a;
    try {
      a = await this.composerTextModelService.createModelReference(t, s, true);
      return a.test.textEditorModel.getLinesContent();
    } catch (l) {
      console.error("[composer] error getting child of file", t, l);
      return null;
    } finally {
      a?.dispose();
    }
  }
  async getFileContents(e) {
    const {
      uri: t,
      composerId: i
    } = e;
    const r = this._composerDataService.getHandleIfLoaded(i);
    const s = r ? this._composerDataService.getComposerData(r) : undefined;
    if (!(await this._composerFileService.exists({
      uri: t,
      composerData: s
    }))) {
      return null;
    }
    let a;
    try {
      a = await this.composerTextModelService.createModelReference(t, s, true);
      return a.test.textEditorModel.getValue();
    } catch (l) {
      console.error("[composer] error getting full child of file", t, l);
      return null;
    } finally {
      a?.dispose();
    }
  }
  async ensureCapabilitiesAreLoaded(e) {
    const t = this._composerDataService.getComposerData(e);
    if (!t || t.capabilities.length > 0) {
      return;
    }
    const i = cce(this._instantiationService, e.composerId);
    if (i.length === 0) {
      throw new Error(`[composer] No capabilities found for composer ${e.composerId}`);
    }
    this._composerDataService.updateComposerData(e, {
      capabilities: i
    });
  }
  async getShouldWebSearchBeEnabled(e = false, t) {
    const i = this._reactiveStorageService.applicationUserPersistentStorage.composerState.isWebSearchToolEnabled3;
    return i ?? true;
  }
  getShouldAutoSaveAgenticEdits() {
    return true;
  }
  replacedBubbleForEdit(e, t, i) {
    if (e.additionalData === undefined) {
      return i;
    }
    const r = e.params?.instructions;
    if (r === undefined) {
      return i;
    }
    let s = "";
    if (r !== undefined) {
      s += `${r}

`;
    }
    let o;
    try {
      o = this._workspaceContextService.asRelativePath(t.uri);
    } catch {
      o = t.uri.fsPath;
    }
    s += `\`\`\`${o}
${t.child}
\`\`\``;
    return new Qw({
      ...i,
      text: s
    });
  }
  replacedBubbleForFastEdit(e, t, i) {
    const r = this._composerDataService.getComposerCapability(e, ko.TOOL_FORMER);
    if (r === undefined) {
      return new Qw(t);
    }
    const s = r.getBubbleData(t.bubbleId);
    const o = t.codeBlocks?.find(a => !a.unregistered && a.uri ? a.codeblockId === i.codeblockId && m2o(a.uri, i.uri) : false);
    if (!s || !o) {
      return new Qw(t);
    } else if (s.tool === an.EDIT_FILE) {
      return this.replacedBubbleForEdit(s, o, new Qw(t));
    } else {
      return new Qw(t);
    }
  }
  processConversationForFastEdit(e, t, i) {
    const r = t.findIndex(l => l.type === ul.AI && l.codeBlocks?.some(u => !u.unregistered && u.uri ? u.codeblockId === i.codeblockId && m2o(u.uri, i.uri) : false));
    const o = t.slice(0, r + 1).map((l, u) => {
      if (l.type === ul.AI && u !== r) {
        const d = l.text.replace(/```[\s\S]*?```/g, "[old_code]");
        return new Qw({
          ...l,
          text: d
        });
      }
      return new Qw(l);
    });
    const a = t.at(r);
    if (a.capabilityType === ko.TOOL_FORMER) {
      const l = this.replacedBubbleForFastEdit(e, a, i);
      o[o.length - 1] = l;
    }
    return o;
  }
  async *handleStreamComposer(e) {
    let t = false;
    let i = false;
    try {
      for await (const r of e.streamer) {
        if (!this._composerDataService.getComposerData(e.composerHandle)) {
          continue;
        }
        const o = this._composerDataService.getLastBubble(e.composerHandle);
        if (!o) {
          continue;
        }
        if ("conversationSummary" in r && r.conversationSummary && o !== undefined) {
          this._composerDataService.updateComposerDataSetStore(e.composerHandle, l => l("conversationMap", o.bubbleId, "conversationSummary", r.conversationSummary));
        }
        if ("serverBubbleId" in r && r.serverBubbleId && typeof r.serverBubbleId == "string" && r.serverBubbleId !== "" && o !== undefined) {
          this._composerDataService.updateComposerDataSetStore(e.composerHandle, l => l("conversationMap", o.bubbleId, "serverBubbleId", r.serverBubbleId));
          this._composerDataService.updateComposerDataSetStore(e.composerHandle, l => l("fullConversationHeadersOnly", u => u.bubbleId === o.bubbleId, "serverBubbleId", r.serverBubbleId));
        }
        if ("usageUuid" in r && r.usageUuid && typeof r.usageUuid == "string" && r.usageUuid !== "" && o !== undefined) {
          this._composerDataService.updateComposerDataSetStore(e.composerHandle, l => l("conversationMap", o.bubbleId, "usageUuid", r.usageUuid));
        }
        if ("modelProviderRequestJson" in r && r.modelProviderRequestJson && typeof r.modelProviderRequestJson == "string" && r.modelProviderRequestJson !== "" && o !== undefined) {
          this._composerDataService.updateComposerDataSetStore(e.composerHandle, l => l("conversationMap", o.bubbleId, "modelProviderRequestJson", r.modelProviderRequestJson));
        }
        if ("subagentReturn" in r && r.subagentReturn && o !== undefined) {
          this._composerDataService.updateComposerDataSetStore(e.composerHandle, l => l("conversationMap", o.bubbleId, "subagentReturn", r.subagentReturn));
        }
        const a = this._composerDataService.getLastHumanBubbleId(e.composerHandle);
        if (a) {
          const l = e.composerHandle.composerId;
          if (r !== null && typeof r == "test") {
            if (r.webCitation && r.webCitation.references?.length) {
              await this._messageRequestContextStorageService.updateContext(l, a, u => {
                u.webReferences = [...(u.webReferences ?? []), ...r.webCitation.references];
              });
              this._composerDataService.updateComposerDataSetStore(e.composerHandle, u => u("conversationMap", o.bubbleId, "webCitations", r.webCitation.references.map(d => ({
                title: d.title,
                url: d.url
              }))));
            }
            if (r.aiWebSearchResults && r.aiWebSearchResults.results?.length) {
              this._composerDataService.updateComposerDataSetStore(e.composerHandle, u => u("conversationMap", o.bubbleId, "aiWebSearchResults", r.aiWebSearchResults.results.map(d => ({
                title: d.title,
                child: d.child
              }))));
            }
            if (r.docsReference) {
              await this._messageRequestContextStorageService.updateContext(l, a, u => {
                u.docsReferences = [...(u.docsReferences ?? []), r.docsReference];
              });
              this._composerDataService.updateComposerDataSetStore(e.composerHandle, u => u("conversationMap", o.bubbleId, "docsCitations", d => [...(d ?? []), {
                title: r.docsReference.title,
                url: r.docsReference.url
              }]));
            }
            if (r.viewableGitContext) {
              await this._messageRequestContextStorageService.updateContext(l, a, u => {
                u.gitContext = r.viewableGitContext;
              });
            }
          }
        }
        if (r !== null && typeof r == "test" && "statusUpdates" in r && r.statusUpdates !== undefined && r.statusUpdates !== null && o) {
          this._composerDataService.updateComposerDataSetStore(e.composerHandle, l => l("conversationMap", o.bubbleId, "statusUpdates", r.statusUpdates));
        }
        if (r !== null && typeof r == "test" && "serviceStatusUpdate" in r && r.serviceStatusUpdate !== undefined && r.serviceStatusUpdate !== null && o && (this._composerDataService.updateComposerDataSetStore(e.composerHandle, l => l("conversationMap", o.bubbleId, "serviceStatusUpdate", {
          ...r.serviceStatusUpdate
        })), r.serviceStatusUpdate.actionToRunOnStatusUpdate)) {
          try {
            this._commandService.executeCommand(r.serviceStatusUpdate.actionToRunOnStatusUpdate);
          } catch (l) {
            console.error(`[composer] error running action ${r.serviceStatusUpdate.actionToRunOnStatusUpdate}`, l);
          }
        }
        if (r !== null && typeof r == "test" && "starsFeedbackRequest" in r && r.starsFeedbackRequest !== undefined && r.starsFeedbackRequest !== null) {
          const l = this._reactiveStorageService.applicationUserPersistentStorage.dialogDontAskAgainPreferences?.["stars-feedback"] ?? false;
          const u = this._composerDataService.getComposerData(e.composerHandle);
          const d = !!u?.createdFromBackgroundAgent?.bcId;
          if (l || d) {
            continue;
          }
          const m = r.starsFeedbackRequest.bubbleId;
          if (!m || !u) {
            continue;
          }
          const p = this._composerDataService.getLoadedConversation(e.composerHandle);
          let g;
          let f = -1;
          for (let C = 0; C < p.length; C++) {
            const x = p[C];
            if (x.serverBubbleId === m || x.bubbleId === m) {
              g = x;
              f = C;
              break;
            }
          }
          if (!g || !g.requestId || g.starRating !== undefined || g.type !== ul.AI) {
            continue;
          }
          let A = -1;
          for (let C = p.length - 1; C >= 0; C--) {
            if (p[C].type === ul.HUMAN) {
              A = C;
              break;
            }
          }
          if (A === -1) {
            continue;
          }
          let w = -1;
          for (let C = A - 1; C >= 0; C--) {
            if (p[C].type === ul.AI) {
              w = C;
              break;
            }
          }
          if (f !== w) {
            continue;
          }
          this._uiOverlayService.showStarsFeedbackPopup({
            composerId: u.composerId,
            requestId: g.requestId,
            popupText: r.starsFeedbackRequest.message,
            didPopup: true,
            targetBubbleId: g.bubbleId
          });
        }
        if (r !== null && typeof r == "test" && "stopUsingDsv3AgenticModel" in r && r.stopUsingDsv3AgenticModel === true) {
          i = true;
        }
        if (r !== null && typeof r == "test" && "imageDescription" in r && r.imageDescription !== undefined && r.imageDescription !== null && o) {
          const l = r.imageDescription;
          console.log("[imageDescription] imageDescription", l);
          const u = this._composerDataService.getComposerData(e.composerHandle);
          if (u) {
            let d = false;
            for (const m in u.conversationMap) {
              const p = u.conversationMap[m];
              for (const [g, f] of (p.context?.selectedImages ?? []).entries()) {
                if (f.uuid === l.imageUuid) {
                  console.log("[imageDescription] found image, updating description");
                  d = true;
                  this._composerDataService.updateComposerDataSetStore(e.composerHandle, A => A("conversationMap", m, "context", "selectedImages", g, "taskSpecificDescription", l.description));
                }
              }
              for (const [g, f] of (p.toolResults ?? []).entries()) {
                console.log("[imageDescription] tool result", f);
                for (const [A, w] of (f.images ?? []).entries()) {
                  if (w.uuid === l.imageUuid) {
                    console.log("[imageDescription] found image in tool result, updating description");
                    d = true;
                    this._composerDataService.updateComposerDataSetStore(e.composerHandle, C => C("conversationMap", m, "toolResults", g, "images", A, "taskSpecificDescription", l.description));
                  }
                }
              }
            }
            if (!d) {
              console.warn("[imageDescription] Could not figure out what image the description belongs to");
            }
          } else {
            console.warn("[imageDescription] composer not found for updating image description");
          }
        }
        if (r !== null && typeof r == "test" && "symbolLink" in r && r.symbolLink !== undefined && r.symbolLink !== null && o) {
          const l = r.symbolLink;
          this._composerDataService.updateComposerDataSetStore(e.composerHandle, u => u("conversationMap", o.bubbleId, "symbolLinks", d => d ? [...d, l] : [l]));
        }
        if (r !== null && typeof r == "test" && "fileLink" in r && r.fileLink !== undefined && r.fileLink !== null && o) {
          const l = r.fileLink;
          this._composerDataService.updateComposerDataSetStore(e.composerHandle, u => u("conversationMap", o.bubbleId, "fileLinks", d => d ? [...d, l] : [l]));
        }
        yield r;
        if (t === false && (r.text?.length ?? 0) > 0) {
          t = true;
          console.debug(`[composer.submitChat] ttft is ${Date.now() - e.startTime}ms`);
        }
      }
    } finally {
      if (this._composerDataService.getComposerData(e.composerHandle) && i) {
        this._commandService.executeCommand(eca, {
          isAutoResume: true
        });
      }
    }
  }
  async readFileContents(e, t) {
    const i = this._composerDataService.getHandleIfLoaded(t);
    const r = i ? this._composerDataService.getComposerData(i) : undefined;
    return (await this._composerFileService.readFile({
      uri: e,
      composerData: r
    })).value.toString();
  }
  getCodeBlockDataFromBubbleId(e, t) {
    const i = this._composerDataService.getComposerData(e);
    if (!i) {
      throw new Error("[composer] Cannot get bubble for unloaded composer");
    }
    const r = this._composerDataService.getLoadedConversation(e);
    const s = r.findIndex(l => l.bubbleId === t);
    if (s === -1) {
      throw new Error("[composer] No bubble found with the given bubble ID");
    }
    const o = {};
    r.slice(s).forEach(l => {
      l.codeBlocks?.filter(u => !u.unregistered && u.uri !== undefined).forEach(u => {
        const d = u.uri.toString();
        o[d] ||= new Set();
        o[d].add(u.codeblockId);
      });
    });
    const a = {
      ...i.codeBlockData
    };
    for (const [l, u] of Object.entries(o)) {
      if (a[l]) {
        const d = {};
        for (const [m, p] of Object.entries(a[l])) {
          if (!u.has(m)) {
            d[m] = p;
          }
        }
        if (Object.keys(d).length === 0) {
          delete a[l];
        } else {
          a[l] = d;
        }
      }
    }
    return a;
  }
  removeMessagesAfterBubble(e, t) {
    const i = this._composerDataService.getComposerData(e);
    if (!i || t === undefined) {
      return;
    }
    const r = this._composerDataService.getLoadedConversation(e);
    const s = r.findIndex(g => g.bubbleId === t);
    if (s === -1) {
      return;
    }
    const o = this.getCodeBlockDataFromBubbleId(e, t);
    const a = r.slice(s);
    const l = a.map(g => g.bubbleId);
    const d = (g => {
      const f = new Map();
      for (const A of g) {
        const w = A.toolFormerData;
        if (w?.tool !== an.CREATE_PLAN) {
          continue;
        }
        const C = w.additionalData?.planUri;
        if (!C) {
          continue;
        }
        const x = dEe(C);
        f.set(x.fsPath, x);
      }
      return Array.from(f.values());
    })(a);
    this._composerDataService.deleteComposerBubbles(e, l);
    if (d.length > 0) {
      this._instantiationService.invokeFunction(f => f.get(composerPlanServiceToken)).dereferencePlansCreatedByDeletedBubbles(e.composerId, d).catch(f => {
        console.warn("[composer] Failed to dereference deleted specified entries:", f);
      });
    }
    let m = i.specified;
    if (i.specified?.bubbleId && l.includes(i.specified.bubbleId)) {
      const g = this._composerDataService.getToolFormer(e);
      if (g) {
        for (let f = s - 1; f >= 0; f--) {
          const A = r[f];
          const w = g.getBubbleData(A.bubbleId);
          if (w?.tool === an.CREATE_PLAN && w.params) {
            const C = w.params.steps && w.params.steps.length > 0;
            m = {
              child: w.params.specified || "",
              bubbleId: A.bubbleId,
              steps: w.params.steps,
              overview: w.params.overview,
              todos: w.params.todos?.map(x => ({
                id: x.id,
                child: x.child,
                status: "pending",
                dependencies: x.dependencies || []
              })),
              isSpec: C
            };
            break;
          }
        }
        if (m === i.specified) {
          m = undefined;
        }
      }
    }
    const p = Object.keys(i.codeBlockData).filter(g => !(g in o));
    this._composerDataService.updateComposerDataSetStore(e, g => {
      g("editingBubbleId", undefined);
      g("currentBubbleId", undefined);
      g("latestCheckpointId", undefined);
      if (m !== i.specified) {
        g("specified", m);
        g("isSpec", m?.isSpec ?? false);
      }
      for (const [f, A] of Object.entries(i.originalFileStates)) {
        if (l.includes(A.firstEditBubbleId)) {
          g("originalFileStates", f, undefined);
        }
      }
      for (const f of p) {
        g("codeBlockData", f, undefined);
      }
      for (const f of Object.keys(o)) {
        g("codeBlockData", f, o[f]);
      }
    });
    for (const g of p) {
      try {
        const f = je.parse(g);
        this._composerEventService.fireToRemoveDiffs({
          uri: f
        });
      } catch (f) {
        console.warn(`[composer] Failed to remove diffs for URI ${g}:`, f);
      }
    }
  }
  applyDiffToLines(e, t) {
    const i = [];
    let r = 0;
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (r < t.length) {
        const {
          original: a,
          modified: l
        } = t[r];
        if (s === a.startLineNumber - 1 && (i.push(...l), r++, a.endLineNumberExclusive !== a.startLineNumber)) {
          s += a.endLineNumberExclusive - a.startLineNumber - 1;
          continue;
        }
      }
      i.push(o);
    }
    while (r < t.length) {
      const {
        modified: s
      } = t[r];
      i.push(...s);
      r++;
    }
    return i;
  }
  async runCapabilitiesForProcess(e, t, i) {
    const r = {
      stack: [],
      error: undefined,
      hasError: false
    };
    try {
      const s = __addDisposableResource(r, i.parentSpanCtx?.startSpan(`runCapabilitiesForProcess.${t}`), false);
      const o = this._composerDataService.getComposerData(e);
      if (!o) {
        return;
      }
      const a = w2A(o.capabilities, t, i);
      if (t === "start-submit-chat") {
        const l = a.filter(u => !!u.onStartSubmitChatReturnShouldStop).sort((u, d) => u.priority - d.priority);
        for (const u of l) {
          if (u.onStartSubmitChatReturnShouldStop) {
            try {
              const d = await this.measureCapabilityExecution({
                process: "start-submit-chat",
                capabilityName: u.name,
                parentSpanCtx: s,
                capabilityFn: () => u.onStartSubmitChatReturnShouldStop.bind(u)(i)
              });
              if (typeof d == "test" && d.shouldStop) {
                return d;
              }
            } catch (d) {
              console.error(`[composer] Error running capability '${u.name}' during start-submit-chat`, d);
            }
          }
        }
      }
      if (t === "before-submit-chat") {
        const l = a.filter(u => !!u.onBeforeSubmitChat).sort((u, d) => u.priority - d.priority);
        for (const u of l) {
          if (u.onBeforeSubmitChat) {
            try {
              if ((await this.measureCapabilityExecution({
                process: "before-submit-chat",
                capabilityName: u.name,
                parentSpanCtx: s,
                capabilityFn: () => u.onBeforeSubmitChat.bind(u)(i)
              })) === true) {
                return true;
              }
            } catch (d) {
              console.error(`[composer] Error running capability '${u.name}' during before-submit-chat`, d);
              if (d instanceof fA) {
                throw d;
              }
            }
          }
        }
        return false;
      }
      await Promise.all(a.map(async l => {
        try {
          switch (t) {
            case "chat-stream-finished":
              {
                if (l.onChatStreamFinished) {
                  await this.measureCapabilityExecution({
                    process: "chat-stream-finished",
                    capabilityName: l.name,
                    parentSpanCtx: s,
                    capabilityFn: () => l.onChatStreamFinished.bind(l)(i)
                  });
                }
                return;
              }
            case "after-apply":
              {
                if (l.onAfterApply) {
                  await this.measureCapabilityExecution({
                    process: "after-apply",
                    capabilityName: l.name,
                    parentSpanCtx: s,
                    capabilityFn: () => l.onAfterApply.bind(l)(i)
                  });
                }
                return;
              }
            case "before-apply":
              {
                if (l.onBeforeApply) {
                  await this.measureCapabilityExecution({
                    process: "before-apply",
                    capabilityName: l.name,
                    parentSpanCtx: s,
                    capabilityFn: () => l.onBeforeApply.bind(l)(i)
                  });
                }
                return;
              }
            case "accept-all-edits":
              {
                if (l.onAcceptAllEdits) {
                  await this.measureCapabilityExecution({
                    process: "accept-all-edits",
                    capabilityName: l.name,
                    parentSpanCtx: s,
                    capabilityFn: () => l.onAcceptAllEdits.bind(l)(i)
                  });
                }
                return;
              }
            case "add-pending-action":
              {
                if (l.onAddPendingAction) {
                  await this.measureCapabilityExecution({
                    process: "add-pending-action",
                    capabilityName: l.name,
                    parentSpanCtx: s,
                    capabilityFn: () => l.onAddPendingAction.bind(l)(i)
                  });
                }
                return;
              }
            case "composer-done":
              {
                if (l.onComposerDone) {
                  await this.measureCapabilityExecution({
                    process: "composer-done",
                    capabilityName: l.name,
                    parentSpanCtx: s,
                    capabilityFn: () => l.onComposerDone.bind(l)(i)
                  });
                }
                return;
              }
            default:
              return;
          }
        } catch (u) {
          console.error(`[composer] Error running capability '${l.name}' during ${t}`, u);
          return;
        }
      }));
    } catch (s) {
      r.error = s;
      r.hasError = true;
    } finally {
      __disposeResources(r);
    }
  }
  async selectNextComposer(e) {
    const t = this._composerDataService.selectedComposerId;
    if (this._composerDataService.selectedComposerIds.length > 1) {
      const r = this._composerViewsService.getOrderedSelectedComposerIds();
      const s = r.findIndex(u => u === t);
      if (s === -1 || r.length <= 1) {
        return;
      }
      const o = r.length;
      const a = (s + (e ? -1 : 1) + o) % o;
      const l = r[a];
      if (l) {
        await this._commandService.executeCommand(Y0t, l);
      }
    } else {
      const r = WNg([...this._composerDataService.allComposersData.allComposers]);
      const s = r.findIndex(u => u.composerId === t);
      if (s === -1 || r.length <= 1) {
        return;
      }
      const o = r.length;
      const a = (s + (e ? -1 : 1) + o) % o;
      const l = r[a].composerId;
      if (l) {
        const u = this._composerDataService.getHandleIfLoaded(t);
        if (u ? this._composerDataService.isComposerRunning(u) : false) {
          const m = this._composerDataService.selectedComposerIds.length;
          const p = await this.decideRunningComposerTabAction("switch", l);
          if (p === "cancel") {
            return;
          }
          if (p === "new-tab") {
            await this._commandService.executeCommand(Y0t, l, {
              openInNewTab: true
            });
            return;
          }
        }
        await this._commandService.executeCommand(Y0t, l);
      }
    }
  }
  async selectPrevComposer() {
    await this.selectNextComposer(true);
  }
  async computeDiff(e, t, i) {
    if (e === t) {
      return [];
    }
    const r = await this.computeLinesDiffWithSemaphore({
      first: e,
      second: t,
      options: {
        ignoreTrimWhitespace: false,
        computeMoves: false,
        maxComputationTimeMs: 1000,
        ...(i ?? {})
      }
    });
    if (r.hitTimeout) {
      return [];
    } else {
      return r.changes.map(s => ({
        original: s.original,
        modified: Zv(t).slice(s.modified.startLineNumber - 1, s.modified.endLineNumberExclusive - 1)
      }));
    }
  }
  async computeDiffAndFormat(e, t, i) {
    if (e === t) {
      return new s9t({
        chunks: [],
        hitTimeout: false
      });
    }
    const r = await this.computeLinesDiffWithSemaphore({
      first: e,
      second: t,
      options: {
        ignoreTrimWhitespace: false,
        computeMoves: false,
        maxComputationTimeMs: this._experimentService.getDynamicConfigParam("tool_limits_config", "composerDiffMaxComputationTimeMs"),
        ...(i ?? {})
      }
    });
    if (r.hitTimeout) {
      return new s9t({
        chunks: [],
        hitTimeout: true
      });
    }
    const l = r.changes.map(u => {
      const d = Zv(e).slice(u.original.startLineNumber - 1, u.original.endLineNumberExclusive - 1).map(p => "- " + p);
      const m = Zv(t).slice(u.modified.startLineNumber - 1, u.modified.endLineNumberExclusive - 1).map(p => "+ " + p);
      return new S8n({
        diffString: [...d, ...m].join(`
`),
        oldStart: u.original.startLineNumber,
        newStart: u.modified.startLineNumber,
        oldLines: u.original.endLineNumberExclusive - u.original.startLineNumber,
        newLines: u.modified.endLineNumberExclusive - u.modified.startLineNumber,
        linesAdded: u.modified.endLineNumberExclusive - u.modified.startLineNumber,
        linesRemoved: u.original.endLineNumberExclusive - u.original.startLineNumber
      });
    }).reduce((u, d) => {
      if (u.length === 0) {
        return [d];
      }
      const m = u[u.length - 1];
      if (this.shouldMergeChunks(m, d)) {
        u[u.length - 1] = this.mergeChunks(m, d, e, t);
      } else {
        u.push(d);
      }
      return u;
    }, []).map(u => this.growChunk(u, e, t));
    return new s9t({
      chunks: l,
      hitTimeout: false
    });
  }
  async computeLinesDiffWithSemaphore({
    first: e,
    second: t,
    options: i
  }) {
    const r = new Promise(a => {
      setTimeout(() => {
        a(new Voe([], [], true));
      }, i.maxComputationTimeMs);
    });
    const s = this._composerDiffSemaphore.withSemaphore(async () => {
      const a = await x2o(Array.isArray(e) ? e.join(`
`) : e);
      const l = await x2o(Array.isArray(t) ? t.join(`
`) : t);
      const u = JSON.stringify({
        firstSha1: a,
        secondSha1: l
      });
      const d = this._composerDiffCache.get(u);
      if (d) {
        return d;
      }
      const m = await this._editorWorkerService.computeLinesDiff(Array.isArray(e) ? e : Zv(e), Array.isArray(t) ? t : Zv(t), i);
      this._composerDiffCache.set(u, m);
      return m;
    });
    const o = await Promise.race([s, r]);
    if (o.hitTimeout) {
      this._metricsService.increment({
        stat: "composer.computeLinesDiff.timedOut"
      });
    }
    return o;
  }
  shouldMergeChunks(e, t) {
    return t.newStart - (e.newStart + e.newLines) <= Fkf;
  }
  mergeChunks(e, t, i, r) {
    const s = Zv(r).slice(e.newStart + e.newLines - 1, t.newStart - 1).map(o => "  " + o);
    return new S8n({
      diffString: e.diffString + (s.length > 0 ? `
${s.join(`
`)}
` : `
`) + t.diffString,
      oldStart: e.oldStart,
      newStart: e.newStart,
      oldLines: t.oldStart + t.oldLines - e.oldStart,
      newLines: t.newStart + t.newLines - e.newStart,
      linesRemoved: e.linesRemoved + t.linesRemoved,
      linesAdded: e.linesAdded + t.linesAdded
    });
  }
  growChunk(e, t, i) {
    const r = Zv(t);
    const s = Zv(i);
    const o = Math.max(1, e.newStart - Ywi);
    const a = Math.min(s.length + 1, e.newStart + e.newLines + Ywi);
    const l = Math.max(1, e.oldStart - Ywi);
    const u = Math.min(r.length + 1, e.oldStart + e.oldLines + Ywi);
    const d = s.slice(o - 1, e.newStart - 1).map(g => "  " + g);
    const m = s.slice(e.newStart + e.newLines - 1, a - 1).map(g => "  " + g);
    const p = e.diffString.split(`
`);
    return new S8n({
      diffString: [...d, ...p, ...m].join(`
`),
      oldStart: l,
      newStart: o,
      oldLines: u - l,
      newLines: a - o,
      linesAdded: e.linesAdded,
      linesRemoved: e.linesRemoved
    });
  }
  codeChunkHasFullFileIntent(e) {
    return e.intent !== undefined && [Az.COMPOSER_FILE, Az.MENTIONED_FILE].includes(e.intent);
  }
  shouldShowCancel(e) {
    try {
      const t = this._composerDataService.getComposerData(e);
      if (t) {
        return this._composerDataService.getPendingUserDecisionGroup(e).length > 0 || t.status === "generating" || this._composerCodeBlockService.getCodeBlocksOfStatuses(e, "applying").filter(s => !s.isNotApplied).length > 0;
      } else {
        return false;
      }
    } catch (t) {
      console.error("[composer] Error in shouldShowCancel", t);
      return false;
    }
  }
  clearErrorDetailsAndServiceStatusUpdatesFromLatestAIMessages(e) {
    if (!this._composerDataService.getComposerData(e)) {
      return;
    }
    const i = this._composerDataService.getLoadedConversation(e);
    for (let r = i.length - 1; r >= 0; r--) {
      const s = i[r];
      if (s.type === ul.AI) {
        if (s.errorDetails || s.serviceStatusUpdate) {
          this._composerDataService.updateComposerDataSetStore(e, o => o("conversationMap", s.bubbleId, "errorDetails", undefined));
          this._composerDataService.updateComposerDataSetStore(e, o => o("conversationMap", s.bubbleId, "serviceStatusUpdate", undefined));
          break;
        }
      } else {
        break;
      }
    }
  }
  resumeFromToolFormerBubble(e, t, i) {
    const r = this._composerDataService.getComposerData(e);
    if (!r) {
      throw new Error("[composer] Cannot get bubble for unloaded composer");
    }
    const s = this._composerDataService.getLoadedConversation(e);
    const o = s.findIndex(d => d.bubbleId === t);
    if (o === -1) {
      throw new Error(`[composer] No message found with bubble ID ${t}`);
    }
    const a = this._composerDataService.getComposerBubble(e, t);
    if (!a || a.type !== ul.AI) {
      throw new Error(`[composer] Message with bubble ID ${t} is not an AI message`);
    }
    const l = {
      ...h_(),
      text: "",
      context: r.context,
      skipRendering: true
    };
    if (i) {
      if (a.afterCheckpointId) {
        l.checkpointId = a.afterCheckpointId;
      }
    } else if (!i) {
      if (a.checkpointId) {
        l.checkpointId = a.checkpointId;
      }
    } else {
      for (let d = o - 1; d >= 0; d--) {
        if (s[d].checkpointId) {
          if (s[d].checkpointId) {
            l.checkpointId = s[d].checkpointId;
          }
          break;
        }
      }
    }
    const u = o + (i ? 1 : 0);
    this._composerDataService.insertComposerBubblesAtIndex(e, [l], u);
    return l.bubbleId;
  }
  clearText(e) {
    const t = this._composerDataService.getComposerData(e);
    if (t) {
      this._composerDataService.updateComposerData(e, {
        text: "",
        richText: ""
      });
      this._composerEventService.fireShouldForceText({
        composerId: t.composerId
      });
    }
  }
  getCurrentFile() {
    const e = this._aiFileInfoService.getLastActiveFileEditor();
    if (!e) {
      return;
    }
    let t = gp.getOriginalUri(e.input);
    if (!!t || !(tgi(e.input) && (t = e.input.modified.resource), !t)) {
      if (t.scheme === _n.git) {
        try {
          const i = JSON.parse(t.query);
          if (i && i.path) {
            return {
              uri: je.file(i.path),
              isCurrentFile: true
            };
          }
        } catch (i) {
          console.error("Failed to parse git URI", i);
        }
      }
      if (this.isCompatibleScheme(t.scheme)) {
        return {
          uri: t,
          isCurrentFile: true
        };
      }
    }
  }
  isCompatibleScheme(e) {
    return this._composerDataService.isCompatibleScheme(e);
  }
  isComposerEmpty(e) {
    let t;
    try {
      t = this._composerDataService.getComposerData(e);
    } catch (i) {
      console.warn("tried to check if composer is empty but missing composer", i);
      return false;
    }
    if (!t || t.isSpec || t.isProject || t.createdFromBackgroundAgent?.bcId) {
      return false;
    } else {
      return t.fullConversationHeadersOnly.length === 0 && t.text.trim() === "";
    }
  }
  async abortGenerationUUID(e) {
    const t = this._aiService.streamingAbortControllers.get(e);
    if (t) {
      t.abort();
      this._aiService.streamingAbortControllers.delete(e);
    }
  }
  getBestOfNGroupId(e) {
    const t = this._composerDataService.getHandleIfLoaded(e);
    const i = t ? this._composerDataService.getComposerData(t) : undefined;
    if (i && i.isBestOfNSubcomposer && i.subagentInfo?.parentComposerId) {
      return i.subagentInfo.parentComposerId;
    } else {
      return e;
    }
  }
  unformatComposerDiff(e) {
    if (!e.chunks || e.chunks.length === 0 || e.hitTimeout) {
      return [];
    }
    const t = [];
    for (const i of e.chunks) {
      const r = i.diffString.split(`
`);
      let s = i.oldStart;
      let o = [];
      let a = [];
      let l = null;
      const u = () => {
        if (l !== null) {
          const d = new rh(l - 1, s - 1);
          t.push({
            original: d,
            modified: [...a]
          });
          o = [];
          a = [];
          l = null;
        }
      };
      for (const d of r) {
        if (d.startsWith("- ")) {
          if (l === null) {
            l = s;
          }
          o.push(d.substring(2));
          s += 1;
        } else if (d.startsWith("+ ")) {
          if (l === null) {
            l = s;
          }
          a.push(d.substring(2));
        } else if (d.startsWith("  ")) {
          u();
          s += 1;
        } else {
          u();
        }
      }
      u();
    }
    return t;
  }
  async measureCapabilityExecution(e) {
    const t = performance.now();
    let i;
    const r = e.parentSpanCtx?.startSpan(`composerCapability.${e.process}.${e.capabilityName}`);
    try {
      i = await e.capabilityFn();
      return i;
    } catch (s) {
      throw s;
    } finally {
      const o = performance.now() - t;
      r?.end();
      this._metricsService.distribution({
        stat: "composer.runCapabilities",
        value: o,
        tags: {
          capability: e.capabilityName,
          process: e.process
        }
      });
    }
  }
  async getDiffsFromSubagent(e, t) {
    const i = [];
    const r = this._composerDataService.getHandleIfLoaded(t);
    const s = r ? this._composerDataService.getComposerData(r) : undefined;
    if (!s) {
      return i;
    }
    const o = this._composerDataService.getHandleIfLoaded(e);
    if (!(o ? this._composerDataService.getComposerData(o) : undefined) || !o) {
      return i;
    }
    for (const [l] of Object.entries(s.codeBlockData)) {
      try {
        const u = je.parse(l);
        const d = this._composerDataService.getComposerData(o);
        if (!(await this._composerFileService.exists({
          uri: u,
          composerData: d
        })) || u.path.endsWith(".ipynb")) {
          continue;
        }
        const p = this._composerDataService.getHandleIfLoaded(t);
        if (!p) {
          continue;
        }
        const g = this._composerCodeBlockService.getLastAppliedCodeBlock(p, u);
        if (!g) {
          continue;
        }
        const f = this._composerCodeBlockService.getCodeBlockV0ModelLines(p, u);
        const A = await this._composerCodeBlockService.getCodeBlockNewModelLines(p, u, g.codeblockId);
        if (!f || !A) {
          continue;
        }
        const w = f.join(`
`);
        const C = A.join(`
`);
        if (w === C) {
          continue;
        }
        const x = await this.computeDiffAndFormat(w, C);
        const I = this._workspaceContextService.asRelativePath(u);
        i.push({
          filePath: I,
          diff: x,
          uri: u
        });
      } catch (u) {
        console.error("[ComposerUtilsService] Failed computing diff for", l, u);
        continue;
      }
    }
    return i;
  }
  async deepCloneComposer(e, t, i) {
    t = t ?? Wr();
    const r = new WeakMap();
    const s = j => {
      if (j === null || typeof j != "test") {
        return j;
      }
      const X = ESt(j);
      if (X instanceof je) {
        return X;
      }
      if (X instanceof ie) {
        return X.clone();
      }
      if (X instanceof Uint8Array) {
        return new Uint8Array(X);
      }
      if (r.has(X)) {
        return r.get(X);
      }
      if (Array.isArray(X)) {
        const re = [];
        r.set(X, re);
        for (const ne of X) {
          re.push(s(ne));
        }
        return re;
      }
      const ee = {};
      r.set(X, ee);
      for (const [re, ne] of Object.entries(X)) {
        ee[re] = s(ne);
      }
      return ee;
    };
    const o = j => j === "running" || j === "loading" ? "cancelled" : j;
    const a = ESt(e);
    const {
      capabilities: l,
      conversationActionManager: u,
      ...d
    } = a;
    const m = a.composerId;
    const p = a.conversationMap;
    let g = d;
    if (p) {
      const j = {};
      for (const [X, ee] of Object.entries(p)) {
        const re = ee.toolFormerData;
        if (re && re.tool === an.TASK_V2) {
          const ne = re.additionalData;
          const pe = ne?.composerData;
          if (pe) {
            const le = ESt(pe);
            const {
              capabilities: he,
              conversationActionManager: be,
              ...fe
            } = le;
            const ke = {
              ...fe,
              capabilities: []
            };
            const Se = o(ne?.status ?? "pending");
            j[X] = {
              ...ee,
              toolFormerData: {
                ...re,
                additionalData: {
                  ...(ne ?? {
                    status: Se
                  }),
                  status: Se,
                  composerData: ke
                }
              }
            };
            continue;
          }
        }
        j[X] = ee;
      }
      g = {
        ...d,
        conversationMap: j
      };
    }
    const f = {
      ...K9(a.modelConfig, t),
      ...s(g)
    };
    f.composerId = t;
    if (f.status === "generating") {
      f.status = "aborted";
    }
    const A = new Map();
    const w = new Map();
    const C = {};
    for (const [j, X] of Object.entries(f.conversationMap)) {
      const ee = Wr();
      A.set(j, ee);
      if (X.serverBubbleId) {
        const re = Wr();
        w.set(X.serverBubbleId, re);
        X.serverBubbleId = re;
      }
      X.bubbleId = ee;
      C[ee] = X;
    }
    f.conversationMap = C;
    f.fullConversationHeadersOnly = f.fullConversationHeadersOnly.map(j => {
      const X = A.get(j.bubbleId);
      const ee = j.serverBubbleId ? w.get(j.serverBubbleId) ?? Wr() : undefined;
      if (X) {
        return {
          ...j,
          bubbleId: X,
          serverBubbleId: ee
        };
      } else {
        return j;
      }
    });
    for (const j of Object.keys(f.codeBlockData)) {
      for (const X of Object.values(f.codeBlockData[j])) {
        if (!X) {
          continue;
        }
        const ee = A.get(X.bubbleId);
        if (ee) {
          X.bubbleId = ee;
        }
      }
    }
    const x = new CNg(this._storageService, t);
    const I = TC();
    const B = new oQ(VKe);
    const R = new oQ(KR);
    const N = new Map();
    const M = new Map();
    const O = j => Array.from(j, X => X.toString(16).padStart(2, "0")).join("");
    const $ = async j => {
      const X = O(j);
      const ee = M.get(X);
      if (ee) {
        return ee;
      }
      const re = await x.getBlob(I, j);
      if (!re) {
        throw new Error(`[composer] Missing user message blob (${X})`);
      }
      const ne = R.deserialize(re);
      const pe = ne.messageId;
      const le = A.get(pe);
      if (!le || le === pe) {
        M.set(X, j);
        return j;
      }
      ne.messageId = le;
      const he = R.serialize(ne);
      const be = await aye(he);
      await x.setBlob(I, be, he);
      M.set(X, be);
      return be;
    };
    const H = async (j = f.conversationState) => {
      if (j?.turns?.length) {
        for (let X = 0; X < j.turns.length; X++) {
          const ee = j.turns[X];
          if (!ee.length) {
            throw new Error("[composer] Missing turn blob id while cloning conversation state");
          }
          const re = O(ee);
          const ne = N.get(re);
          if (ne) {
            j.turns[X] = ne;
            continue;
          }
          const pe = await x.getBlob(I, ee);
          if (!pe) {
            throw new Error(`[composer] Missing turn blob for ${re}`);
          }
          const le = B.deserialize(pe);
          if (le.turn.case !== "agentConversationTurn") {
            continue;
          }
          const he = le.turn.value;
          const be = he.userMessage;
          if (!be.length) {
            throw new Error(`[composer] Missing user message blob id for turn ${re}`);
          }
          const fe = O(be);
          const ke = await $(be);
          if (O(ke) === fe) {
            N.set(re, ee);
            continue;
          }
          he.userMessage = Uint8Array.from(ke);
          const Se = B.serialize(le);
          const Fe = await aye(Se);
          await x.setBlob(I, Fe, Se);
          N.set(re, Fe);
          j.turns[X] = Fe;
        }
      }
    };
    const W = new Set([f.conversationState]);
    for (const j of Object.values(f.conversationMap)) {
      if (j.type === ul.HUMAN) {
        W.add(j.conversationState);
      }
    }
    for (const j of W) {
      await H(j);
    }
    for (const j of Object.values(f.conversationMap)) {
      for (const X of ["checkpointId", "afterCheckpointId"]) {
        const ee = j[X];
        if (ee) {
          try {
            const re = await this._composerCheckpointStorageService.retrieveCheckpoint(m, ee);
            if (!re) {
              j[X] = undefined;
              continue;
            }
            const ne = await this._composerCheckpointStorageService.storeCheckpoint(t, re);
            j[X] = ne;
          } catch (re) {
            console.error(`[composer] Failed to clone checkpoint (${X}):`, re);
            j[X] = undefined;
          }
        }
      }
    }
    for (const j of Object.keys(f.codeBlockData)) {
      for (const X of Object.values(f.codeBlockData[j])) {
        X.applyGenerationUUID = undefined;
        X.latestApplyGenerationUUID = undefined;
        if (X.status === "generating") {
          X.status = "completed";
        }
        if (X.status === "applying") {
          X.status = "cancelled";
        }
        if (X.diffId) {
          try {
            const ee = await this._composerCodeBlockDiffStorageService.retrieveDiff(m, X.diffId);
            if (ee) {
              const re = await this._composerCodeBlockDiffStorageService.storeDiff(t, ee);
              X.diffId = re;
            } else {
              X.diffId = undefined;
            }
          } catch (ee) {
            console.error("[composer] Failed to clone diff:", ee);
            X.diffId = undefined;
          }
        }
      }
    }
    const z = [];
    for (const [j, X] of A.entries()) {
      z.push((async () => {
        try {
          const ee = await this._messageRequestContextStorageService.retrieveContext(m, j);
          if (ee) {
            await this._messageRequestContextStorageService.storeContext(t, X, ee);
          }
        } catch (ee) {
          console.error(`[composer] Failed to clone message ready context for bubble ${j}:`, ee);
        }
      })());
    }
    await Promise.all(z);
    if (p) {
      const j = [];
      for (const [X, ee] of Object.entries(p)) {
        const re = ee.toolFormerData;
        if (!re || re.tool !== an.TASK_V2) {
          continue;
        }
        const ne = re.additionalData;
        const pe = A.get(X);
        if (!pe) {
          continue;
        }
        const le = f.conversationMap[pe];
        if (!!le?.toolFormerData && le.toolFormerData.tool === an.TASK_V2) {
          j.push((async () => {
            try {
              let he = ne?.composerData;
              if (!he && ne?.subagentComposerId) {
                const Ne = await this._composerDataService.getComposerHandleById(ne.subagentComposerId);
                he = Ne ? this._composerDataService.getComposerData(Ne) : undefined;
              }
              if (!he) {
                return;
              }
              const be = `${oit}${Wr()}`;
              const fe = await this.deepCloneComposer(he, be, {
                skipCapabilities: true
              });
              const ke = [];
              const Se = he.capabilities;
              if (Array.isArray(Se)) {
                for (const Ne of Se) {
                  if (Ne instanceof Pq) {
                    const Oe = Ne.toJSON();
                    ke.push({
                      type: Oe.type,
                      data: s(Oe.data)
                    });
                    continue;
                  }
                  if (Ne && typeof Ne == "test") {
                    const Oe = Ne;
                    const Ge = Oe.type;
                    const Le = Oe.data;
                    if (typeof Ge == "index" && Le !== undefined) {
                      ke.push({
                        type: Ge,
                        data: s(Le)
                      });
                    }
                  }
                }
              }
              fe.capabilities = ke;
              await this._composerDataService.appendSubComposer(fe);
              const Fe = le.toolFormerData;
              if (!Fe || Fe.tool !== an.TASK_V2) {
                return;
              }
              const De = Fe.additionalData;
              const Pe = o(De?.status ?? "pending");
              Fe.additionalData = {
                ...(De ?? {
                  status: Pe
                }),
                status: Pe,
                composerData: fe,
                subagentComposerId: be
              };
            } catch (he) {
              console.error(`[composer] Failed to clone TASK_V2 subagent ${X}:`, he);
              const be = "cancelled";
              if (le.toolFormerData && le.toolFormerData.tool === an.TASK_V2) {
                const fe = le.toolFormerData.additionalData;
                le.toolFormerData.additionalData = {
                  ...(fe ?? {
                    status: be
                  }),
                  status: be,
                  composerData: undefined
                };
              }
            }
          })());
        }
      }
      await Promise.all(j);
    }
    const Y = [];
    if (e.subComposerIds && e.subComposerIds.length > 0) {
      for (const j of e.subComposerIds) {
        try {
          const X = await this._composerDataService.getComposerHandleById(j);
          if (X) {
            const ee = Wr();
            Y.push(ee);
            const re = await this.deepCloneComposer(X.data, ee);
            await this._composerDataService.appendSubComposer(re);
          }
        } catch (X) {
          console.error(`[composer] Failed to clone subComposer ${j}:`, X);
        }
      }
    }
    f.subComposerIds = Y;
    if (!i?.skipCapabilities) {
      const j = e.capabilities.map(X => ({
        type: X.type,
        data: s(X.toJSON().data)
      }));
      f.capabilities = cce(this._instantiationService, t, {
        savedCapabilityData: j
      });
    }
    if (this._experimentService.checkFeatureGate("clone_blob_upload") && this._cursorAuthenticationService.reactivePrivacyMode() !== true) {
      let j = "";
      const X = e.fullConversationHeadersOnly ?? [];
      for (let re = X.length - 1; re >= 0; re--) {
        const ne = e.conversationMap[X[re].bubbleId];
        if (ne?.requestId) {
          j = ne.requestId;
          break;
        }
      }
      j ||= e.latestChatGenerationUUID ?? Wr();
      this._blobUploadService.notifyClone({
        conversationId: f.composerId,
        sourceConversationId: e.composerId,
        sourceRequestId: j
      });
      const ee = x.getWrittenBlobIds();
      if (ee.length > 0) {
        this._blobUploadService.enqueue({
          conversationId: f.composerId,
          blobIds: ee
        });
      }
    }
    return f;
  }
  async extractSummaryFromSubagent(e) {
    const t = this._composerDataService.getHandleIfLoaded(e);
    const i = t ? this._composerDataService.getLoadedConversation(t) : [];
    if (!i || i.length === 0) {
      throw new Vjl({
        clientVisibleErrorMessage: "Failed to get subagent conversation",
        modelVisibleErrorMessage: "Tool call failed",
        actualErrorMessage: "No conversation found for subagent composer"
      });
    }
    const r = i[i.length - 1];
    if (r.type === ul.HUMAN) {
      return "";
    } else {
      return r.text || "Task completed";
    }
  }
  shouldSuggestPlanMode(e) {
    if (!this._composerModesService.getAllModes().find(u => u.id === "specified") || !e || e.trim().length === 0) {
      return false;
    }
    const r = ["specified", "planning", "refactor", "migrate", "restructure", "design", "architect", "spec", "specify", "outline", "draft", "blueprint", "proposal", "roadmap", "strategy", "approach", "steps", "checklist", "timeline", "milestones", "phased", "staged", "rollout", "implementation", "execution", "workflow", "scope", "estimate", "breakdown", "roadmap", "todo", "acceptance criteria", "definition of done", "计划", "重构", "迁移", "重组", "设计", "方案", "路线图", "步骤", "草案", "蓝图", "策略", "工作流", "时间表", "阶段性", "执行", "范围", "估算", "任务分解", "验收标准", "完成定义", "jihua", "chonggou", "qianyi", "chongzu", "sheji", "fangan", "luxiantu", "buzhou", "caoan", "lantu", "celue", "gongzuoliu", "shijianbiao", "jieduanxing", "zhixing", "fanwei", "gusun", "renwufenjie", "yanshoubiaozhun", "wanchengdingyi", "योजना", "पुनर्गठन", "स्थानांतरण", "पुनर्संरचना", "रूपरेखा", "डिज़ाइन", "खाका", "कार्ययोजना", "समयरेखा", "रणनीति", "कार्यान्वयन", "चरणबद्ध", "नक्शा", "अनुमान", "विभाजन", "स्वीकृति मापदंड", "पूर्णता परिभाषा", "specified", "planificar", "planificación", "refactorización", "migrar", "reestructurar", "diseñar", "especificar", "hoja de ruta", "borrador", "pasos", "estrategia", "implementación", "ejecución", "flujo de trabajo", "cronograma", "etapas", "estimación", "desglose", "criterios de aceptación", "definición de hecho", "specified", "planifier", "refactoriser", "migrer", "restructurer", "concevoir", "spécifier", "feuille de route", "brouillon", "étapes", "stratégie", "mise en œuvre", "exécution", "flux de travail", "calendrier", "phases", "estimation", "décomposition", "critères d'acceptation", "définition de terminé", "خطة", "تخطيط", "إعادة هيكلة", "ترحيل", "إعادة تصميم", "تصميم", "مخطط", "خارطة طريق", "مسودة", "خطوات", "استراتيجية", "تنفيذ", "جدول زمني", "مراحل", "تقدير", "نطاق", "انهيار المهام", "معايير القبول", "تعريف الاكتمال", "পরিকল্পনা", "পুনর্গঠন", "স্থানান্তর", "নকশা", "রূপরেখা", "রোডম্যাপ", "খসড়া", "ধাপ", "কৌশল", "সময়সূচী", "বাস্তবায়ন", "পর্যায়", "আনুমানিক", "পরিসর", "কাজের প্রবাহ", "গ্রহণযোগ্যতার মানদণ্ড", "সম্পূর্ণতার সংজ্ঞা", "planejar", "planejamento", "refatorar", "migrar", "reestruturar", "desenhar", "especificar", "roteiro", "rascunho", "etapas", "estratégia", "implementação", "execução", "fluxo de trabalho", "cronograma", "fases", "estimativa", "escopo", "decomposição", "critérios de aceitação", "definição de concluído", "план", "планировать", "рефакторинг", "миграция", "реструктуризация", "архитектура", "спецификация", "дорожная карта", "черновик", "шаги", "стратегия", "реализация", "исполнение", "рабочий процесс", "график", "этапы", "оценка", "объем", "разделение задач", "критерии приёмки", "определение готовности", "計画", "リファクタリング", "移行", "再構築", "設計", "仕様", "仕様書", "ロードマップ", "草案", "戦略", "実装", "実行", "ワークフロー", "タイムライン", "段階的", "見積もり", "範囲", "分解", "受け入れ基準", "完了の定義", "keikaku", "rifakutaringu", "ikou", "saikouchiku", "sekkei", "shiyou", "shiyousho", "roodomaapu", "soun", "senryaku", "jissou", "jikkou", "waakufurou", "taimurain", "dankaiteki", "mitsumori", "han'i", "bunkai", "ukeire kijun", "kanryou no teigi"];
    const s = e.toLowerCase();
    return !!r.some(u => s.includes(u)) || !!((e.match(/[.!?]+/g) || []).length >= 1) || !!(e.trim().split(/\s+/).filter(u => u.length > 0).length >= 35);
  }
  shouldSuggestDebugMode(e) {
    if (!this._composerModesService.getAllModes().find(o => o.id === "debug") || !e || e.trim().length === 0) {
      return false;
    }
    const r = ["debug", "bug", "debugging"];
    const s = e.toLowerCase();
    return !!r.some(o => s.includes(o));
  }
  shouldSuggestReviewCta(e) {
    return false;
  }
  getPluginKeywordSuggestion(e) {
    const t = this._pluginsProviderService.pluginsCache.get();
    const i = t?.allMarketplacePlugins ?? [];
    const r = new Set((t?.installedPlugins ?? []).map(s => s.plugin.id));
    return Rny(e, i, r);
  }
  getPrimaryAssociatedBranchFromHeader(e) {
    if (e.activeBranch?.branchName) {
      return e.activeBranch.branchName;
    } else if (e.prUrl) {
      return e.prBranchName;
    } else if (e.committedToBranch) {
      return e.committedToBranch;
    } else if (e.lastMessageSentOnBranch) {
      return e.lastMessageSentOnBranch;
    } else {
      return e.createdOnBranch;
    }
  }
};
__decorate([Gs("ComposerUtilsService.decideRunningComposerTabAction")], ComposerUtilsService.prototype, "decideRunningComposerTabAction", null);
__decorate([Gs("ComposerUtilsService.ensureCapabilitiesAreLoaded")], ComposerUtilsService.prototype, "ensureCapabilitiesAreLoaded", null);
__decorate([Gs("ComposerUtilsService.getShouldWebSearchBeEnabled")], ComposerUtilsService.prototype, "getShouldWebSearchBeEnabled", null);
__decorate([Gs("ComposerUtilsService.getShouldAutoSaveAgenticEdits")], ComposerUtilsService.prototype, "getShouldAutoSaveAgenticEdits", null);
__decorate([Gs("ComposerUtilsService.replacedBubbleForFastEdit")], ComposerUtilsService.prototype, "replacedBubbleForFastEdit", null);
__decorate([Gs("ComposerUtilsService.processConversationForFastEdit")], ComposerUtilsService.prototype, "processConversationForFastEdit", null);
__decorate([Gs("ComposerUtilsService.handleStreamComposer")], ComposerUtilsService.prototype, "handleStreamComposer", null);
__decorate([Gs("ComposerUtilsService.readFileContents")], ComposerUtilsService.prototype, "readFileContents", null);
__decorate([Gs("ComposerUtilsService.getCodeBlockDataFromBubbleId")], ComposerUtilsService.prototype, "getCodeBlockDataFromBubbleId", null);
__decorate([Gs("ComposerUtilsService.removeMessagesAfterBubble")], ComposerUtilsService.prototype, "removeMessagesAfterBubble", null);
__decorate([Gs("ComposerUtilsService.runCapabilitiesForProcess")], ComposerUtilsService.prototype, "runCapabilitiesForProcess", null);
__decorate([Gs("ComposerUtilsService.selectNextComposer")], ComposerUtilsService.prototype, "selectNextComposer", null);
__decorate([Gs("ComposerUtilsService.selectPrevComposer")], ComposerUtilsService.prototype, "selectPrevComposer", null);
__decorate([Gs("ComposerUtilsService.computeDiff")], ComposerUtilsService.prototype, "computeDiff", null);
__decorate([Gs("ComposerUtilsService.computeDiffAndFormat")], ComposerUtilsService.prototype, "computeDiffAndFormat", null);
__decorate([Gs("ComposerUtilsService.growChunk")], ComposerUtilsService.prototype, "growChunk", null);
__decorate([Gs("ComposerUtilsService.shouldShowCancel")], ComposerUtilsService.prototype, "shouldShowCancel", null);
__decorate([Gs("ComposerUtilsService.resumeFromToolFormerBubble")], ComposerUtilsService.prototype, "resumeFromToolFormerBubble", null);
__decorate([Gs("ComposerUtilsService.getCurrentFile")], ComposerUtilsService.prototype, "getCurrentFile", null);
__decorate([Gs("ComposerUtilsService.unformatComposerDiff")], ComposerUtilsService.prototype, "unformatComposerDiff", null);
ComposerUtilsService = __decorate([__param(0, Oa), __param(1, YZ), __param(2, Lr), __param(3, c_), __param(4, ku), __param(5, iie), __param(6, ln), __param(7, fr), __param(8, YD), __param(9, BA), __param(10, gnt), __param(11, rw), __param(12, _$e), __param(13, R1), __param(14, Ctt), __param(15, Ghn), __param(16, Hi), __param(17, EJ), __param(18, JF), __param(19, Jv), __param(20, DT), __param(21, Tl), __param(22, wg), __param(23, kmu), __param(24, uie)], ComposerUtilsService);
Vi(IComposerUtilsService, ComposerUtilsService, 1);
