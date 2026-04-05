"use strict";

// Module: out-build/vs/workbench/services/agent/browser/subagentComposerService.js
// Offset: 30569322 (bundle byte offset)
// Size: 20578 bytes
VNe();
sC();
X9();
cv();
Uv();
Vg();
qp();
Ql();
rt();
oa();
Yn();
Bc();
ns();
Er();
Wt();
vE();
ps();
LNe();
SI();
k$e();
jk();
cp();
Vw();
fE();
Wu();
fN();
_g();
OJ();
m0a();
ICf();
Aqe();
Qwi = xi("subagentComposerService");
jwi = class extends Error {
  constructor(n, e) {
    super(n);
    this.composerId = e;
    this.name = "SubagentCreationError";
  }
};
b0a = class extends at {
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this._composerDataService = e;
    this._aiService = t;
    this._modelConfigService = i;
    this._instantiationService = r;
    this._structuredLogService = s;
    this._metricsService = o;
    this._workspaceContextService = a;
    this._pathService = l;
    this._backgroundWorkService = u;
    this._experimentService = d;
    this._fileService = m;
    this._lifecycleStore = new NZg({
      onStateChange: ({
        sessionId: p,
        nextState: g
      }) => {
        this._syncBackgroundWorkRegistration(p, g);
      },
      onQueuedRunReady: ({
        sessionId: p,
        sourceRunId: g,
        queuedResume: f
      }) => {
        this._startQueuedResumeRunFromLifecycle(p, g, f);
      }
    });
    this._backgroundPromises = new Map();
    this._backgroundAbortControllers = new Map();
    this._terminationReasonByComposerId = new Map();
    this._register(this._backgroundWorkService.registerSubagentKiller(async p => this._lifecycleStore.getState(p).status === "idle" && !this._backgroundPromises.has(p) ? false : (this.cancelSubagentTree(p), true)));
  }
  isLongRunningJobsEnabled() {
    return this._experimentService.checkFeatureGate("long_running_jobs");
  }
  async createOrResumeSubagent(e) {
    let t;
    let i = e.resumeAgentId;
    try {
      const r = this._resolveInheritedGitWorktree(e);
      if (e.resumeAgentId) {
        i = e.resumeAgentId;
        const s = await this._composerDataService.getComposerHandleById(i);
        if (!s) {
          throw new jwi(`Composer not found for resume: ${i}`, i);
        }
        t = s;
        if (r && !t.data.gitWorktree) {
          this._composerDataService.updateComposerDataSetStore(t, o => {
            o("gitWorktree", {
              ...r
            });
          });
        }
        await this._appendPromptBubbles(t, {
          prompt: e.prompt,
          toolCallId: e.toolCallId
        });
      } else {
        i = Wr();
        const s = {
          ...this._modelConfigService.getModelConfig("composer"),
          modelName: e.modelId
        };
        const o = e.readonly ? "chat" : "agent";
        const a = Rdn(r, K9(s, i, o));
        const l = cce(this._instantiationService, i, {
          forceCapabilities: [ko.TOOL_FORMER, ko.THINKING, ko.SUB_COMPOSER]
        });
        a.capabilities = l;
        if (this.isLongRunningJobsEnabled()) {
          if (!e.parentConversationId || e.parentConversationId.trim().length === 0) {
            throw new jwi(`Missing parentConversationId for subagent spawn (toolCallId: ${e.toolCallId})`, i);
          }
          const d = this._composerDataService.getHandleIfLoaded(e.parentConversationId);
          const m = this._deriveLineageFromParent(d);
          a.subagentInfo = {
            subagentType: wve.TASK,
            parentComposerId: e.parentConversationId,
            conversationLengthAtSpawn: 0,
            additionalData: {},
            subagentTypeName: e.subagentType,
            toolCallId: e.toolCallId,
            ...m
          };
        } else {
          const d = this._findParentComposerAndBubble(e.toolCallId);
          if (d) {
            const m = this._deriveLineageFromParent(d.parentHandle);
            a.subagentInfo = {
              subagentType: wve.TASK,
              parentComposerId: d.parentHandle.data.composerId,
              conversationLengthAtSpawn: 0,
              additionalData: {},
              subagentTypeName: e.subagentType,
              toolCallId: e.toolCallId,
              ...m
            };
          }
        }
        const u = await this._composerDataService.appendSubComposer(a);
        if (!u) {
          throw new jwi("Failed to create subagent composer", i);
        }
        t = u;
        await this._appendPromptBubbles(t, {
          prompt: e.prompt,
          toolCallId: e.toolCallId
        });
        this._triggerRenameComposer(t);
      }
    } catch (r) {
      const s = r instanceof Error ? r.message : String(r);
      throw new jwi(s, i ?? Wr());
    }
    return t;
  }
  async runSubagentWithHandle(e, t) {
    return this._runSubagent(e, t);
  }
  async getBackgroundMessage(e) {
    const t = await this._resolveAndEnsureTranscriptFile(e);
    return any({
      transcriptPath: t
    });
  }
  getLastTerminationReason(e) {
    return this._terminationReasonByComposerId.get(e);
  }
  notifyBackgroundFailure({
    toolCallId: e,
    error: t
  }) {
    const i = this._findParentComposerAndBubble(e);
    if (!i) {
      return;
    }
    const r = t || "Subagent failed in background.";
    i.toolFormer.setBubbleData(i.bubbleId, {
      status: "error",
      error: new ske({
        clientVisibleErrorMessage: r
      }),
      additionalData: {
        status: "error"
      }
    });
  }
  registerBackgroundPromise({
    composerId: e,
    promise: t,
    abortController: i
  }) {
    const r = this._lifecycleStore.startRun(e, {
      abort: i ? () => i.abort() : undefined
    });
    const s = {
      runId: r,
      promise: t,
      settled: false
    };
    t.then(o => {
      s.settled = true;
      s.result = o;
      this._enqueueSubagentCompletion(o);
      this._resolveBackgroundWaiters(s);
    }, o => {
      s.settled = true;
      s.result = {
        success: false,
        composerId: e,
        error: "Background subagent promise rejected",
        terminationReason: "error"
      };
      this._enqueueSubagentCompletion(s.result);
      this._resolveBackgroundWaiters(s);
    });
    this._backgroundPromises.set(e, s);
    if (i) {
      this._backgroundAbortControllers.set(e, {
        runId: r,
        abortController: i
      });
    }
    t.finally(() => {
      if (this._backgroundPromises.get(e)?.runId === r) {
        this._backgroundPromises.delete(e);
      }
      if (this._backgroundAbortControllers.get(e)?.runId === r) {
        this._backgroundAbortControllers.delete(e);
      }
      this._lifecycleStore.finishRun(e, r);
      this._releaseLifecycleIfIdle(e);
    });
  }
  _enqueueSubagentCompletion(e) {
    if (!this.isLongRunningJobsEnabled()) {
      return;
    }
    const i = this._composerDataService.getHandleIfLoaded(e.composerId);
    const r = this._backgroundWorkService.backgroundWorkItems.value.find(u => u.kind === "subagent" && u.id === e.composerId);
    const s = i?.data.subagentInfo?.parentComposerId ?? e.composerId;
    const o = e.success ? "success" : e.terminationReason === "aborted" ? "aborted" : "error";
    const a = !e.success && e.error ? e.error : undefined;
    const l = r?.composerId ?? s;
    this._backgroundWorkService.enqueueCompletion({
      composerId: l,
      taskId: e.composerId,
      kind: "subagent",
      status: o,
      title: r?.title ?? this._resolveBackgroundSubagentTitle(i),
      ...(a ? {
        detail: a
      } : {})
    });
  }
  isRunningInBackground({
    composerId: e
  }) {
    return this._lifecycleStore.isBusy(e) || this._backgroundPromises.has(e);
  }
  enqueueOrMergeResumePrompt({
    composerId: e,
    prompt: t,
    toolCallId: i,
    parentConversationId: r,
    subagentType: s,
    modelId: o,
    credentials: a,
    readonly: l,
    continuationConfig: u
  }) {
    const d = this._lifecycleStore.getState(e);
    const m = d.status === "running" || d.status === "runningWithQueuedResume" ? d.runId : this._backgroundPromises.get(e)?.runId;
    this._lifecycleStore.queueResume(e, {
      queuedResume: {
        prompt: t,
        toolCallIds: [i],
        runToolCallId: i,
        parentConversationId: r,
        subagentType: s,
        modelId: o,
        credentials: a,
        readonly: l,
        continuationConfig: u
      },
      targetRunId: m,
      mergeQueuedResume: (p, g) => {
        const f = B5A({
          existingPrompt: p.prompt,
          newPrompt: g.prompt
        });
        return {
          ...g,
          prompt: f,
          parentConversationId: p.parentConversationId,
          credentials: p.credentials ?? g.credentials,
          toolCallIds: p.toolCallIds.includes(g.runToolCallId) ? p.toolCallIds : [...p.toolCallIds, g.runToolCallId]
        };
      }
    });
    this._linkParentToSubagent(i, e);
  }
  async waitForBackgroundSubagent({
    composerId: e,
    abortSignal: t
  }) {
    const i = this.isLongRunningJobsEnabled();
    const r = this._backgroundPromises.get(e);
    if (r) {
      if (i) {
        return await this._waitForBackgroundEntry(r, t);
      }
      const s = await r.promise;
      if (this._backgroundPromises.get(e) === r) {
        this._backgroundPromises.delete(e);
      }
      return s;
    }
    for (const [s, o] of this._backgroundPromises) {
      const a = this._composerDataService.getHandleIfLoaded(s) ?? (await this._composerDataService.getComposerHandleById(s));
      if (a && a.data.subagentInfo?.parentComposerId === e) {
        if (i) {
          return await this._waitForBackgroundEntry(o, t);
        }
        const l = await o.promise;
        if (this._backgroundPromises.get(s) === o) {
          this._backgroundPromises.delete(s);
        }
        return l;
      }
    }
    return {
      success: true,
      composerId: e
    };
  }
  _resolveBackgroundWaiters(e) {
    const t = e.waiters;
    if (!t || t.size === 0) {
      return;
    }
    e.waiters = undefined;
    const i = e.result;
    if (!i) {
      const r = new Error("Background subagent settled without a result");
      for (const s of t) {
        s.reject(r);
      }
      return;
    }
    for (const r of t) {
      r.resolve(i);
    }
  }
  _waitForBackgroundEntry(e, t) {
    if (e.settled) {
      if (e.result) {
        return Promise.resolve(e.result);
      } else {
        return Promise.resolve({
          success: false,
          composerId: "",
          error: "Background subagent settled without a result",
          terminationReason: "error"
        });
      }
    } else if (t?.aborted) {
      return Promise.reject(new Error("aborted"));
    } else {
      return new Promise((i, r) => {
        let s = false;
        const o = () => {
          if (t && d) {
            t.removeEventListener("abort", d);
          }
        };
        const a = m => {
          if (!s) {
            s = true;
            o();
            i(m);
          }
        };
        const l = m => {
          if (!s) {
            s = true;
            o();
            r(m);
          }
        };
        const u = {
          resolve: a,
          reject: l
        };
        e.waiters ||= new Set();
        e.waiters.add(u);
        let d;
        if (t) {
          d = () => {
            if (e.waiters?.delete(u)) {
              l(new Error("aborted"));
            }
          };
          t.addEventListener("abort", d, {
            once: true
          });
        }
      });
    }
  }
  cancelSubagentTree(e) {
    this._lifecycleStore.abort(e);
    this._lifecycleStore.clearQueuedResume(e);
    this._releaseLifecycleIfIdle(e);
    this._abortComposerRun(e);
    const t = this._composerDataService.getHandleIfLoaded(e);
    if (!t) {
      return;
    }
    const i = this._composerDataService.getComposerData(t);
    if (i) {
      for (const r of i.subagentComposerIds ?? []) {
        this.cancelSubagentTree(r);
        this._lifecycleStore.clearQueuedResume(r);
        this._releaseLifecycleIfIdle(r);
      }
    }
  }
  async _appendPromptBubbles(e, t) {
    const i = Wr();
    const r = Wr();
    await this._composerDataService.appendComposerBubbles(e, [{
      ...h_(),
      bubbleId: i,
      type: ul.HUMAN,
      text: t.prompt,
      richText: t.prompt,
      createdAt: new Date().toISOString()
    }, {
      ...h_(),
      bubbleId: r,
      type: ul.AI,
      text: "",
      richText: "",
      createdAt: new Date().toISOString()
    }]);
    this._linkParentToSubagent(t.toolCallId, e.data.composerId);
  }
  _deriveLineageFromParent(e) {
    if (!e) {
      return {};
    }
    const t = this._composerDataService.getComposerData(e);
    const i = t?.chatGenerationUUID ?? t?.latestChatGenerationUUID;
    if (!i) {
      return {};
    }
    const r = t?.subagentInfo?.rootParentRequestId ?? t?.subagentInfo?.parentRequestId ?? i;
    return {
      parentRequestId: i,
      rootParentRequestId: r
    };
  }
  async _runSubagent(e, t, i) {
    const r = performance.now();
    const s = t.data.composerId;
    this._terminationReasonByComposerId.delete(s);
    const [o, a] = this._aiService.registerNewGeneration({
      generationUUID: Wr(),
      metadata: {
        type: "composer",
        textDescription: e.prompt,
        isNAL: true
      }
    });
    let l;
    if (e.abortSignal) {
      l = () => a.abort();
      e.abortSignal.addEventListener("abort", l);
    }
    try {
      const u = t.data.subagentInfo?.parentComposerId ?? e.parentConversationId;
      const d = u ? this._composerDataService.getHandleIfLoaded(u) : undefined;
      const m = d ? this._composerDataService.getComposerData(d)?.modelConfig?.maxMode ?? false : false;
      const p = new Yf({
        modelName: e.modelId,
        maxMode: m,
        ...ony(e.credentials)
      });
      const f = this._composerDataService.getComposerData(t)?.conversationState ?? new sEe();
      const A = this._composerDataService.getLoadedConversation(t).length;
      this._composerDataService.updateComposerDataSetStore(t, B => {
        B("status", "generating");
        B("chatGenerationUUID", o);
        B("latestChatGenerationUUID", o);
      });
      const w = O_a(TC(), this._structuredLogService, this._metricsService);
      await this._instantiationService.invokeFunction(B => B.get(bEe)).getAgentStreamResponse(w, {
        modelDetails: p,
        generationUUID: o,
        composerHandle: t,
        abortController: a,
        startTime: r,
        conversationState: f
      });
      this._composerDataService.updateComposerDataSetStore(t, B => {
        B("status", i?.deferCompletedStatus ? "generating" : "completed");
        B("chatGenerationUUID", undefined);
        B("generatingBubbleIds", []);
      });
      this._aiService.streamingAbortControllers.delete(o);
      const x = this._extractFinalAssistantMessage(t);
      const I = this._countToolCallsSince(t, A);
      this._terminationReasonByComposerId.set(s, "completed");
      return {
        success: true,
        composerId: s,
        finalMessage: x,
        toolCallCount: I,
        terminationReason: "completed"
      };
    } catch (u) {
      this._composerDataService.updateComposerDataSetStore(t, m => {
        m("status", "aborted");
        m("chatGenerationUUID", undefined);
        m("generatingBubbleIds", []);
      });
      this._aiService.streamingAbortControllers.delete(o);
      const d = a.signal.aborted ? "aborted" : "error";
      this._terminationReasonByComposerId.set(s, d);
      if (a.signal.aborted) {
        return {
          success: false,
          composerId: s,
          error: "Subagent was aborted by the user",
          terminationReason: d
        };
      } else {
        return {
          success: false,
          composerId: s,
          error: u instanceof Error ? u.message : String(u),
          terminationReason: d
        };
      }
    } finally {
      this._aiService.removeInprogressAIGeneration(o);
      if (e.abortSignal && l) {
        e.abortSignal.removeEventListener("abort", l);
      }
    }
  }
  async runWithContinuation(e, t, i) {
    const r = t.data.composerId;
    const s = i.maxLoops > 0 ? i.maxLoops : Infinity;
    const o = {
      ...e,
      runInBackground: false
    };
    let a;
    this._composerDataService.updateComposerDataSetStore(t, l => {
      l("isContinuationInProgress", true);
    });
    try {
      let l = await this._runContinuationLoop(o, t, i, s);
      if (i.collectBackgroundChildren && l.success) {
        this._markComposerAsGenerating(t);
        const u = 500;
        for (let d = 0; d < u; d++) {
          if (e.abortSignal.aborted) {
            l = {
              success: false,
              composerId: r,
              error: "Aborted while collecting child results",
              terminationReason: "aborted"
            };
            break;
          }
          const m = await this._collectAvailableChildren(r);
          if (m.length === 0) {
            break;
          }
          const p = this._buildChildrenCompletedMessage(m, i.childrenCompletedMessageTemplate);
          await this._appendPromptBubbles(t, {
            prompt: p,
            toolCallId: e.toolCallId
          });
          l = await this._runContinuationLoop({
            ...o,
            prompt: p,
            resumeAgentId: r
          }, t, i, s);
          if (!l.success) {
            break;
          }
        }
      }
      a = l;
      return l;
    } catch (l) {
      a = {
        success: false,
        composerId: r,
        error: l instanceof Error ? l.message : String(l),
        terminationReason: e.abortSignal.aborted ? "aborted" : "error"
      };
      return a;
    } finally {
      this._finalizeComposerAfterContinuation(t, a ?? {
        success: false,
        composerId: r,
        error: "Subagent continuation exited unexpectedly",
        terminationReason: "error"
      });
    }
  }
  async _runContinuationLoop(e, t, i, r) {
    const s = t.data.composerId;
    let o = 0;
    let a;
    let l;
    for (let u = 0; u < r; u++) {
      if (u === 0) {
        l = await this._runSubagent(e, t, {
          deferCompletedStatus: true
        });
      } else {
        const p = this._computeContinuationNudge(i, o, a);
        await this._appendPromptBubbles(t, {
          prompt: p,
          toolCallId: e.toolCallId
        });
        l = await this._runSubagent({
          ...e,
          prompt: p,
          resumeAgentId: s
        }, t, {
          deferCompletedStatus: true
        });
      }
      if (!l.success) {
        return l;
      }
      const d = l.toolCallCount ?? 0;
      const m = l.finalMessage ?? "";
      if (a && m.includes(a)) {
        break;
      }
      if (d > 0) {
        this._markComposerAsGenerating(t);
        o = 0;
        a = undefined;
        continue;
      }
      o++;
      if (o >= i.idleThreshold) {
        a = `DONE_${this._randomHex(4)}`;
      } else {
        a = undefined;
      }
      this._markComposerAsGenerating(t);
    }
    return l ?? {
      success: false,
      composerId: s,
      error: "No iterations ran",
      terminationReason: "error"
    };
  }
  _markComposerAsGenerating(e) {
    this._composerDataService.updateComposerDataSetStore(e, t => {
      t("status", "generating");
    });
  }
  _finalizeComposerAfterContinuation(e, t) {
    const i = t.terminationReason ?? (t.success ? "completed" : "error");
    this._terminationReasonByComposerId.set(e.data.composerId, i);
    this._composerDataService.updateComposerDataSetStore(e, r => {
      r("status", i === "completed" ? "completed" : "aborted");
      r("chatGenerationUUID", undefined);
      r("generatingBubbleIds", []);
      r("isContinuationInProgress", false);
    });
  }
  _computeContinuationNudge(e, t, i) {
    if (t >= e.idleThreshold && i) {
      return e.escapeMessageTemplate.replace("{idle_count}", String(t)).replace("{escape_token}", i);
    } else {
      return e.nudgeMessage;
    }
  }
  async _startQueuedResumeRunFromLifecycle(e, t, i) {
    const r = this._lifecycleStore.getState(e);
    if (r.status === "idle" || r.runId !== t || (await this._startQueuedResumeRun(e, t, i))) {
      return;
    }
    const o = this._lifecycleStore.getState(e);
    if (o.status !== "idle" && o.runId === t) {
      this._lifecycleStore.finishRun(e, t);
      this._releaseLifecycleIfIdle(e);
    }
  }
  async _startQueuedResumeRun(e, t, i) {
    const r = this._composerDataService.getHandleIfLoaded(e) ?? (await this._composerDataService.getComposerHandleById(e));
    if (!r) {
      this._notifyQueuedResumeFailure(i, `Subagent composer not found for queued resume: ${e}`);
      return false;
    }
    try {
      await this._appendPromptBubbles(r, {
        prompt: i.prompt,
        toolCallId: i.runToolCallId
      });
      const s = this._lifecycleStore.getState(e);
      if (s.status === "idle" || s.runId !== t) {
        return false;
      }
      const o = new AbortController();
      const a = {
        abortSignal: o.signal,
        toolCallId: i.runToolCallId,
        parentConversationId: i.parentConversationId,
        subagentType: i.subagentType,
        modelId: i.modelId,
        credentials: i.credentials,
        prompt: i.prompt,
        readonly: i.readonly,
        resumeAgentId: e,
        runInBackground: true,
        continuationConfig: i.continuationConfig
      };
      const l = (i.continuationConfig ? this.runWithContinuation(a, r, i.continuationConfig) : this.runSubagentWithHandle(a, r)).catch(u => {
        const d = u instanceof Error ? u.message : String(u);
        return {
          success: false,
          composerId: e,
          error: d,
          terminationReason: "error"
        };
      });
      this.registerBackgroundPromise({
        composerId: e,
        promise: l,
        abortController: o
      });
      l.then(u => {
        if (!u.success) {
          this._notifyQueuedResumeFailure(i, u.error ?? "Unknown subagent error");
        }
      });
      return true;
    } catch (s) {
      const o = s instanceof Error ? s.message : String(s);
      this._notifyQueuedResumeFailure(i, o);
      return false;
    }
  }
  _syncBackgroundWorkRegistration(e, t = PZg()) {
    if (t.status === "running" || t.status === "runningWithQueuedResume") {
      const i = this._composerDataService.getHandleIfLoaded(e);
      const r = i?.data.subagentInfo?.parentComposerId ?? e;
      const s = this._resolveBackgroundSubagentTitle(i);
      const o = this._backgroundWorkService.backgroundWorkItems.value.find(a => a.kind === "subagent" && a.id === e)?.startTimeMs;
      this._backgroundWorkService.upsertSubagentWork({
        id: e,
        kind: "subagent",
        composerId: r,
        title: s,
        startTimeMs: o ?? Date.now(),
        subagentComposerId: e
      });
      return;
    }
    this._backgroundWorkService.clearSubagentWork(e);
  }
  _resolveBackgroundSubagentTitle(e) {
    const t = e?.data.name?.trim();
    if (t) {
      return t;
    }
    const i = e?.data.subagentInfo?.toolCallId;
    if (i) {
      const s = this._findParentComposerAndBubble(i);
      const a = s?.toolFormer.getBubbleData(s.bubbleId)?.params;
      const l = typeof a?.description == "string" ? a.description.trim() : typeof a?.value?.description == "string" ? a.value.description.trim() : undefined;
      if (l && l.length > 0) {
        return l;
      }
      const u = typeof a?.prompt == "string" ? a.prompt.trim() : typeof a?.value?.prompt == "string" ? a.value.prompt.trim() : undefined;
      if (u && u.length > 0) {
        return Zv(u)[0];
      }
    }
    const r = e?.data.subagentInfo?.subagentTypeName?.trim();
    return r || "Background subagent";
  }
  _releaseLifecycleIfIdle(e) {
    if (!this._backgroundPromises.has(e) && this._lifecycleStore.getState(e).status === "idle") {
      this._lifecycleStore.release(e);
    }
  }
  _abortComposerRun(e) {
    const t = this._backgroundAbortControllers.get(e);
    if (t) {
      t.abortController.abort();
      this._backgroundAbortControllers.delete(e);
    }
    const i = this._composerDataService.getHandleIfLoaded(e);
    if (!i) {
      return;
    }
    const r = this._composerDataService.getComposerData(i);
    if (!r?.chatGenerationUUID) {
      return;
    }
    const s = this._aiService.streamingAbortControllers.get(r.chatGenerationUUID);
    if (s) {
      s.abort();
      this._aiService.streamingAbortControllers.delete(r.chatGenerationUUID);
    }
  }
  _notifyQueuedResumeFailure(e, t) {
    for (const i of e.toolCallIds) {
      this.notifyBackgroundFailure({
        toolCallId: i,
        error: t
      });
    }
  }
  async _findChildEntries(e) {
    const t = [];
    for (const [i, r] of this._backgroundPromises) {
      const s = this._composerDataService.getHandleIfLoaded(i) ?? (await this._composerDataService.getComposerHandleById(i));
      if (s && s.data.subagentInfo?.parentComposerId === e) {
        t.push({
          childId: i,
          entry: r
        });
      }
    }
    return t;
  }
  async _collectAvailableChildren(e) {
    const t = [];
    const i = await this._findChildEntries(e);
    if (i.length === 0) {
      return t;
    }
    let r = i.filter(o => o.entry.settled);
    const s = i.filter(o => !o.entry.settled);
    if (r.length === 0 && s.length > 0) {
      await Promise.race(s.map(o => o.entry.promise.catch(() => {})));
      r = i.filter(o => o.entry.settled);
    }
    for (const o of r) {
      const a = o.entry.result ?? (await o.entry.promise);
      if (this._backgroundPromises.get(o.childId) === o.entry) {
        this._backgroundPromises.delete(o.childId);
      }
      t.push({
        agentId: a.composerId ?? o.childId,
        success: a.success,
        finalMessage: a.success ? a.finalMessage ?? "" : a.error ?? "Unknown error"
      });
    }
    return t;
  }
  _buildChildrenCompletedMessage(e, t) {
    const i = e.map(r => {
      const s = r.success ? "SUCCESS" : "FAILED";
      return `## Agent ${r.agentId} -- ${s}

${r.finalMessage}`;
    }).join(`

---

`);
    return t.replace("{summaries}", i);
  }
  _randomHex(e) {
    const t = new Uint8Array(e);
    crypto.getRandomValues(t);
    return Array.from(t, i => i.toString(16).padStart(2, "0")).join("");
  }
  async _resolveAndEnsureTranscriptFile(e) {
    try {
      const t = this._workspaceContextService.getWorkspace();
      const i = await aqe(t, this._pathService);
      const s = (await this._composerDataService.getComposerHandleById(e))?.data.subagentInfo?.parentComposerId;
      const o = s ? sny({
        transcriptsDir: i,
        parentConversationId: s,
        conversationId: e
      }) : gkf(i, e);
      try {
        const a = je.joinPath(o, "..");
        await this._fileService.createFolder(a);
      } catch {}
      try {
        if (!(await this._fileService.exists(o))) {
          await this._fileService.writeFile(o, Ms.fromString(""));
        }
      } catch {}
      return o.fsPath;
    } catch {
      return;
    }
  }
  _countToolCallsSince(e, t) {
    const i = this._composerDataService.getLoadedConversation(e);
    let r = 0;
    for (let s = t; s < i.length; s++) {
      if (i[s].toolFormerData?.tool) {
        r++;
      }
    }
    return r;
  }
  _extractFinalAssistantMessage(e) {
    const i = [...this._composerDataService.getLoadedConversation(e)];
    for (let r = i.length - 1; r >= 0; r--) {
      const s = i[r];
      if (s.type === ul.AI && s.text && s.text.trim() !== "") {
        return s.text;
      }
    }
  }
  _triggerRenameComposer(e) {
    this._instantiationService.invokeFunction(i => i.get(wM)).renameComposerIfNeeded(e).catch(i => {
      console.error("[subagentComposerService] Error renaming subagent composer:", i);
    });
  }
  _linkParentToSubagent(e, t) {
    const i = this._findParentComposerAndBubble(e);
    if (i) {
      i.toolFormer.setBubbleData(i.bubbleId, {
        additionalData: {
          subagentComposerId: t
        }
      });
      this._composerDataService.updateComposerDataSetStore(i.parentHandle, r => {
        r("subagentComposerIds", s => {
          const o = s ?? [];
          if (o.includes(t)) {
            return o;
          } else {
            return [...o, t];
          }
        });
      });
    }
  }
  _findParentComposerAndBubble(e) {
    for (const t of this._composerDataService.getLoadedComposers()) {
      const i = this._composerDataService.getHandleIfLoaded(t);
      if (!i) {
        continue;
      }
      const r = this._composerDataService.getComposerCapability(i, ko.TOOL_FORMER);
      if (!r) {
        continue;
      }
      const s = r.getBubbleIdByToolCallId(e);
      if (s) {
        return {
          parentHandle: i,
          bubbleId: s,
          toolFormer: r
        };
      }
    }
  }
  _resolveInheritedGitWorktree(e) {
    const i = this._findParentComposerAndBubble(e.toolCallId)?.parentHandle ?? (e.parentConversationId ? this._composerDataService.getHandleIfLoaded(e.parentConversationId) : undefined);
    if (!i) {
      return;
    }
    const r = this._composerDataService.getComposerData(i);
    if (r?.gitWorktree) {
      return r.gitWorktree;
    }
    const s = this._composerDataService.getRootComposerId(i.data.composerId);
    if (s === i.data.composerId) {
      return;
    }
    const o = this._composerDataService.getHandleIfLoaded(s);
    if (o) {
      return this._composerDataService.getComposerData(o)?.gitWorktree;
    } else {
      return undefined;
    }
  }
};
b0a = __decorate([__param(0, Oa), __param(1, Jv), __param(2, ix), __param(3, ln), __param(4, Kk), __param(5, R1), __param(6, Lr), __param(7, kp), __param(8, ogn), __param(9, Tl), __param(10, Gr)], b0a);
Vi(Qwi, b0a, 1);
