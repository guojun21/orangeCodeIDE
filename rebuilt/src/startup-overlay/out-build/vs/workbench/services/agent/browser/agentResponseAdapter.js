"use strict";

// Module: out-build/vs/workbench/services/agent/browser/agentResponseAdapter.js
// Offset: 30630697 (bundle byte offset)
// Size: 23831 bytes
rkt();
X9();
OVl();
sC();
Ti();
Jk();
cv();
qp();
Uv();
vr();
Cye();
Bc();
Fc();
Yn();
VA();
Hhn();
LNe();
Bie();
jk();
cp();
kQ();
oP();
a0a();
Ud();
Nce();
rSf();
kny();
imu();
Ikf = 200;
Dkf = 16;
Bkf = class {
  constructor(n) {
    this.onChunk = n;
    this.timer = new woe();
    this.queue = [];
    this.currentChunks = [];
    this.currentChunkIndex = 0;
    this.isDisposed = false;
  }
  enqueue(n) {
    if (!this.isDisposed) {
      if (this.currentChunks.length > 0 && this.currentChunkIndex < this.currentChunks.length) {
        this.flushCurrentChunks();
      }
      this.queue.push(n);
      if (this.currentChunks.length === 0 || this.currentChunkIndex >= this.currentChunks.length) {
        this.startNextSummary();
      }
    }
  }
  flush() {
    this.timer.cancel();
    this.flushCurrentChunks();
    while (this.queue.length > 0) {
      const n = this.queue.shift();
      this.onChunk(n);
    }
  }
  flushCurrentChunks() {
    while (this.currentChunkIndex < this.currentChunks.length) {
      this.onChunk(this.currentChunks[this.currentChunkIndex]);
      this.currentChunkIndex++;
    }
    this.currentChunks = [];
    this.currentChunkIndex = 0;
  }
  startNextSummary() {
    if (this.queue.length === 0) {
      this.timer.cancel();
      this.currentChunks = [];
      this.currentChunkIndex = 0;
      return;
    }
    const n = this.queue.shift();
    this.currentChunks = Eny(n, Dkf);
    this.currentChunkIndex = 0;
    if (this.currentChunks.length === 0) {
      this.startNextSummary();
      return;
    }
    const e = Ikf / Math.max(this.currentChunks.length, 1);
    this.timer.cancelAndSet(() => {
      if (!this.isDisposed) {
        if (this.currentChunkIndex < this.currentChunks.length && (this.onChunk(this.currentChunks[this.currentChunkIndex]), this.currentChunkIndex++, this.queue.length > 0 && this.currentChunkIndex < this.currentChunks.length)) {
          this.flushCurrentChunks();
          this.startNextSummary();
          return;
        }
        if (this.currentChunkIndex >= this.currentChunks.length) {
          this.startNextSummary();
        }
      }
    }, e);
  }
  dispose() {
    this.isDisposed = true;
    this.timer.dispose();
    this.queue.length = 0;
    this.currentChunks = [];
    this.currentChunkIndex = 0;
  }
};
sit = class {
  constructor(n, e, t, i, r) {
    this.instantiationService = n;
    this.composerDataHandle = e;
    this.conversationActionManager = t;
    this.generationUUID = i;
    this.hasReceivedFirstToken = false;
    this.toolCallIdToBubbleId = new Map();
    this.unfinishedToolCallIds = new Set();
    this.postTurnEndedWorkQueue = [];
    this.hooks = r ?? {};
    this.asyncOperationRegistry = n.invokeFunction(o => o.get(Htt));
    const s = {
      instantiationService: n,
      composerDataHandle: e,
      conversationActionManager: t
    };
    this.shellToolCallHandler = new jSf(s);
    this.editToolCallHandler = new zSf(s);
    this.todoToolCallHandler = new VSf(s);
    this.taskToolCallHandler = new bkf(s);
    this.createPlanToolCallHandler = new vkf(s);
    this.askQuestionToolCallHandler = new _mu(s);
    this.askQuestionQueryHandler = new Smu({
      instantiationService: n,
      composerDataHandle: e,
      conversationActionManager: t,
      generationUUID: i,
      trackTrajectoryStopped: o => this.trackTrajectoryStopped(o)
    });
    this.switchModeQueryHandler = new kkf({
      instantiationService: n,
      composerDataHandle: e,
      conversationActionManager: t,
      generationUUID: i,
      trackTrajectoryStopped: o => this.trackTrajectoryStopped(o)
    });
    this.mcpAuthQueryHandler = new Tkf({
      instantiationService: n,
      composerDataHandle: e,
      conversationActionManager: t,
      generationUUID: i,
      trackTrajectoryStopped: o => this.trackTrajectoryStopped(o)
    });
    this.webSearchQueryHandler = new Ekf({
      instantiationService: n,
      composerDataHandle: e,
      generationUUID: i,
      trackTrajectoryStopped: o => this.trackTrajectoryStopped(o)
    });
    this.webFetchQueryHandler = new xkf({
      instantiationService: n,
      composerDataHandle: e,
      generationUUID: i,
      trackTrajectoryStopped: o => this.trackTrajectoryStopped(o)
    });
    this.createPlanQueryHandler = new Akf({
      instantiationService: n,
      composerDataHandle: e
    });
    this.specialToolHandlers = new Map();
    this.specialToolHandlers.set("editToolCall", this.editToolCallHandler);
    this.specialToolHandlers.set("updateTodosToolCall", this.todoToolCallHandler);
    this.specialToolHandlers.set("shellToolCall", this.shellToolCallHandler);
    this.specialToolHandlers.set("createPlanToolCall", this.createPlanToolCallHandler);
    this.specialToolHandlers.set("taskToolCall", this.taskToolCallHandler);
    this.specialToolHandlers.set("askQuestionToolCall", this.askQuestionToolCallHandler);
  }
  getToolFormer() {
    const e = this.composerDataHandle.data.capabilities.find(t => t.type === ko.TOOL_FORMER);
    if (!e) {
      throw new Error("ToolFormer not found");
    }
    return e;
  }
  trackTrajectoryStopped(n) {
    try {
      this.instantiationService.invokeFunction(t => t.get(uh)).trackEvent("composer.agent_trajectory_stopped", n);
    } catch {}
  }
  notifyFirstTokenIfNeeded() {
    if (!this.hasReceivedFirstToken) {
      this.hasReceivedFirstToken = true;
      this.hooks.onFirstToken?.();
    }
  }
  notifyBeforeUpdate() {
    if (this.hasReceivedFirstToken) {
      this.hooks.onBeforeNextUpdate?.();
    }
  }
  notifyAfterUpdate() {
    this.hooks.onAfterUpdate?.();
  }
  getExistingToolFormerBubbleId(n) {
    const e = this.toolCallIdToBubbleId.get(n);
    if (e !== undefined) {
      return e;
    }
    const i = this.instantiationService.invokeFunction(r => r.get(Oa)).getLoadedConversation(this.composerDataHandle);
    for (const r of i) {
      if (r.toolFormerData?.toolCallId === n) {
        this.toolCallIdToBubbleId.set(n, r.bubbleId);
        return r.bubbleId;
      }
    }
  }
  upsertToolFormerBubbleData(n, e) {
    this.instantiationService.invokeFunction(i => i.get(Oa)).updateComposerBubbleSetStore(this.composerDataHandle, n, i => {
      i("toolFormerData", r => {
        const s = e.additionalData ?? r?.additionalData;
        const o = e.attachments ?? r?.attachments;
        const a = e.params ?? r?.params;
        const l = e.result ?? r?.result;
        const u = e.userDecision ?? r?.userDecision;
        return {
          ...e,
          params: a,
          result: l,
          additionalData: s,
          attachments: o,
          userDecision: u
        };
      });
    });
    this.toolCallIdToBubbleId.set(e.toolCallId, n);
  }
  getOrCreateToolFormerBubbleId(n) {
    const e = this.getExistingToolFormerBubbleId(n.toolCallId);
    if (e !== undefined) {
      return e;
    }
    const t = this.instantiationService.invokeFunction(s => s.get(Oa));
    const i = {
      ...h_(),
      codeBlocks: [],
      type: ul.AI,
      text: "",
      capabilityType: ko.TOOL_FORMER,
      toolFormerData: n
    };
    const r = i.bubbleId;
    Gw(() => {
      t.appendComposerBubbles(this.composerDataHandle, [i]);
      t.updateComposerDataSetStore(this.composerDataHandle, s => s("generatingBubbleIds", []));
    });
    this.instantiationService.invokeFunction(s => {
      s.get(egn).signalBubbleCreated(this.composerDataHandle.data.composerId, n.toolCallId);
    });
    this.toolCallIdToBubbleId.set(n.toolCallId, r);
    return r;
  }
  markToolCallAsUnfinished(n) {
    this.unfinishedToolCallIds.add(n);
  }
  markToolCallAsFinished(n) {
    this.unfinishedToolCallIds.delete(n);
  }
  addToolCallSizeBreadcrumbData(n, e) {
    switch (e.tool.case) {
      case "readToolCall":
        {
          const t = e.tool.value.result?.result;
          if (t?.case === "success") {
            const i = t.value.output;
            if (i?.case === "content") {
              n.charsRead = i.value.length;
            }
            if (t.value.fileSize !== undefined) {
              n.fileSize = Number(t.value.fileSize);
            }
            n.totalLines = t.value.totalLines;
          }
          break;
        }
      case "editToolCall":
        {
          const t = e.tool.value.result?.result;
          if (t?.case === "success") {
            if (t.value.beforeFullFileContent !== undefined) {
              n.beforeChars = t.value.beforeFullFileContent.length;
            }
            if (t.value.afterFullFileContent !== undefined) {
              n.afterChars = t.value.afterFullFileContent.length;
            }
          }
          break;
        }
      case "shellToolCall":
        {
          const t = e.tool.value.result?.result;
          if (t?.case === "success" || t?.case === "failure") {
            const i = t.value;
            const r = (i.interleavedOutput?.length ?? 0) || (i.stdout?.length ?? 0) + (i.stderr?.length ?? 0);
            n.outputChars = r;
          }
          break;
        }
      default:
        break;
    }
  }
  cancelUnfinishedToolCalls() {
    if (this.unfinishedToolCallIds.size === 0) {
      return;
    }
    const n = this.getToolFormer();
    for (const e of Array.from(this.unfinishedToolCallIds)) {
      const t = this.getExistingToolFormerBubbleId(e);
      if (!t) {
        this.unfinishedToolCallIds.delete(e);
        continue;
      }
      const i = n.getBubbleData(t);
      if (!i) {
        this.unfinishedToolCallIds.delete(e);
        continue;
      }
      if (i.status !== "loading") {
        this.unfinishedToolCallIds.delete(e);
        continue;
      }
      const r = i.additionalData;
      let s;
      if (r && typeof r == "object" && "status" in r) {
        s = {
          ...r,
          status: "cancelled"
        };
      }
      n.setBubbleData(t, {
        status: "cancelled",
        ...(s ? {
          additionalData: s
        } : {})
      });
      this.unfinishedToolCallIds.delete(e);
    }
  }
  dispose() {
    this.cancelUnfinishedToolCalls();
    if (this.thinkingWordStreamer) {
      this.thinkingWordStreamer.flush();
      this.thinkingWordStreamer.dispose();
      this.thinkingWordStreamer = undefined;
    }
    this.shellToolCallHandler.dispose();
  }
  async handleToolCallDelta(n, e) {
    const t = e.message;
    if (t.case !== "toolCallDelta") {
      return;
    }
    this.notifyFirstTokenIfNeeded();
    const i = this.composerDataHandle.data.composerId;
    const r = t.value.callId;
    const s = t.value.toolCallDelta?.delta.case;
    const o = t.value.toolCallDelta?.delta.value;
    if (s && o) {
      const a = s.replace(/Delta$/, "");
      const l = this.specialToolHandlers.get(a);
      if (l) {
        await $ga(this.asyncOperationRegistry, i, "process_tool_call_delta", () => l.handleToolCallDelta(n, o, r), {
          lastToolCallId: r,
          lastToolName: a
        });
      }
    }
  }
  async handlePartialToolCall(n) {
    const e = n.message;
    if (e.case !== "partialToolCall") {
      return;
    }
    this.notifyFirstTokenIfNeeded();
    const t = e.value.toolCall;
    if (!t) {
      return;
    }
    const i = t.tool.case;
    const r = e.value.callId;
    this.markToolCallAsUnfinished(r);
    if (!i) {
      return;
    }
    const s = this.specialToolHandlers.get(i);
    if (s) {
      await s.handlePartialToolCall(t, r);
      return;
    }
    try {
      const o = await Z_a(t, r, this.instantiationService);
      const a = this.getOrCreateToolFormerBubbleId(o);
      if (a !== undefined) {
        this.upsertToolFormerBubbleData(a, o);
      }
    } catch (o) {
      if (o instanceof Error && o.message.includes("Unsupported tool type")) {
        this.handleTextDelta(`[Tool: ${i}]
`);
        return;
      }
      throw o;
    }
  }
  async handleToolCallStarted(n) {
    const e = n.message;
    if (e.case !== "toolCallStarted") {
      return;
    }
    this.notifyFirstTokenIfNeeded();
    const t = this.composerDataHandle.data.composerId;
    const i = e.value.toolCall;
    if (!i) {
      return;
    }
    const r = i.tool.case;
    const s = e.value.callId;
    this.markToolCallAsUnfinished(s);
    if (r) {
      await $ga(this.asyncOperationRegistry, t, "process_tool_call_started", async () => {
        const o = this.specialToolHandlers.get(r);
        if (o) {
          await o.handleToolCallStarted(i, s);
          return;
        }
        try {
          const a = await Z_a(i, s, this.instantiationService);
          const l = this.getOrCreateToolFormerBubbleId(a);
          if (l !== undefined) {
            this.upsertToolFormerBubbleData(l, a);
          }
        } catch (a) {
          if (a instanceof Error && a.message.includes("Unsupported tool type")) {
            this.handleTextDelta(`[Tool: ${r}]
`);
          } else {
            throw a;
          }
        }
      }, {
        lastToolCallId: s,
        lastToolName: r
      });
    }
  }
  async handleToolCallCompleted(n) {
    const e = n.message;
    if (e.case !== "toolCallCompleted") {
      return;
    }
    const t = this.composerDataHandle.data.composerId;
    const i = e.value.callId;
    const r = e.value.toolCall;
    if (!r) {
      return;
    }
    const s = r.tool.case;
    this.markToolCallAsFinished(i);
    if (s === "deleteToolCall") {
      const o = r.tool.value;
      const a = o.args?.path;
      const l = o.result?.result?.case === "success";
      if (a && l) {
        this.instantiationService.invokeFunction(u => {
          const d = u.get(Yz);
          const g = u.get(Oa).getComposerData(this.composerDataHandle)?.modelConfig?.modelName;
          d.recordAiDeletedFile(a, {
            composerId: t,
            model: g
          }).catch(f => {
            console.error("[AgentResponseAdapter] Error recording AI deleted file:", f);
          });
        });
      }
    }
    await $ga(this.asyncOperationRegistry, t, "process_tool_call_completed", async () => {
      if (s) {
        const o = this.specialToolHandlers.get(s);
        if (o) {
          const a = this.getToolExecutionLocation(s);
          await $ga(this.asyncOperationRegistry, t, a, () => o.handleToolCallCompleted(r, i), {
            lastToolCallId: i,
            lastToolName: s
          });
          const l = this.getToolFormer();
          const u = l.getBubbleIdByToolCallId(i);
          if (u) {
            l.setBubbleData(u, {
              toolCall: r
            });
          }
          return;
        }
        try {
          const a = await Z_a(r, i, this.instantiationService);
          const l = this.getOrCreateToolFormerBubbleId(a);
          if (l !== undefined) {
            this.upsertToolFormerBubbleData(l, a);
          }
        } catch (a) {
          if (a instanceof Error && a.message.includes("Unsupported tool type")) {
            this.handleTextDelta(`[Tool: ${s}]
`);
            return;
          }
          throw a;
        }
      }
    }, {
      lastToolCallId: i,
      lastToolName: s
    });
  }
  getToolExecutionLocation(n) {
    switch (n) {
      case "shellToolCall":
        return "tool_execution_shell";
      case "editToolCall":
        return "tool_execution_edit";
      case "taskToolCall":
        return "tool_execution_task";
      default:
        return "tool_execution_other";
    }
  }
  handleTextDelta(n) {
    if (n.length === 0) {
      return;
    }
    this.cancelUnfinishedToolCalls();
    this.notifyFirstTokenIfNeeded();
    const e = this.instantiationService.invokeFunction(a => a.get(Oa));
    const t = e.getComposerData(this.composerDataHandle);
    if (!t) {
      return;
    }
    const i = e.getLastBubble(this.composerDataHandle);
    const r = i && t.generatingBubbleIds?.includes(i.bubbleId);
    if (i?.type !== ul.AI || i.capabilityType !== undefined || !r) {
      const a = {
        ...h_(),
        codeBlocks: [],
        type: ul.AI,
        text: ""
      };
      Gw(() => {
        e.appendComposerBubbles(this.composerDataHandle, [a]);
        e.updateComposerDataSetStore(this.composerDataHandle, l => l("generatingBubbleIds", [a.bubbleId]));
      });
    }
    const s = e.getLastAiBubble(this.composerDataHandle);
    if (!s) {
      return;
    }
    const o = s.text + n;
    e.updateComposerDataSetStore(this.composerDataHandle, a => a("conversationMap", s.bubbleId, "text", o));
  }
  appendThinkingText(n) {
    const e = this.currentThinkingBubbleId;
    if (!e) {
      return;
    }
    this.instantiationService.invokeFunction(i => i.get(Oa)).updateComposerDataSetStore(this.composerDataHandle, i => i("conversationMap", e, "thinking", r => ({
      text: (r?.text ?? "") + n,
      signature: r?.signature ?? ""
    })));
  }
  handleThinkingDelta(n, e) {
    const t = n.length === 0;
    this.cancelUnfinishedToolCalls();
    this.notifyFirstTokenIfNeeded();
    const i = this.instantiationService.invokeFunction(u => u.get(Oa));
    if (!i.getComposerData(this.composerDataHandle)) {
      return;
    }
    const s = i.getLastBubble(this.composerDataHandle);
    const o = s?.capabilityType === ko.THINKING;
    let a;
    if (o) {
      a = s.bubbleId;
    } else {
      if (this.thinkingWordStreamer) {
        this.thinkingWordStreamer.flush();
      }
      const u = {
        ...h_(),
        type: ul.AI,
        text: "",
        capabilityType: ko.THINKING
      };
      a = u.bubbleId;
      Gw(() => {
        i.appendComposerBubbles(this.composerDataHandle, [u]);
        i.updateComposerDataSetStore(this.composerDataHandle, d => d("generatingBubbleIds", [u.bubbleId]));
      });
    }
    this.currentThinkingBubbleId = a;
    const l = this.convertAgentThinkingStyleToConversationThinkingStyle(e);
    i.updateComposerDataSetStore(this.composerDataHandle, u => u("conversationMap", a, "thinkingStyle", d => d ?? l));
    if (t) {
      i.updateComposerDataSetStore(this.composerDataHandle, u => u("conversationMap", a, "thinking", d => ({
        text: d?.text ?? "",
        signature: d?.signature ?? ""
      })));
    } else {
      this.thinkingWordStreamer ||= new Bkf(u => this.appendThinkingText(u));
      this.thinkingWordStreamer.enqueue(n);
    }
  }
  convertAgentThinkingStyleToConversationThinkingStyle(n) {
    switch (n) {
      case 2:
        return uke.CODEX;
      case 3:
        return uke.GPT5;
      case 1:
      case 0:
      case undefined:
      default:
        return uke.DEFAULT;
    }
  }
  emitAfterModelThought(n, e) {
    const t = this.instantiationService.invokeFunction(l => l.get(lX));
    if (!t.hasHookForStep(df.afterAgentThought)) {
      return;
    }
    const i = this.instantiationService.invokeFunction(l => l.get(Oa));
    const r = i.getComposerData(this.composerDataHandle);
    const s = r?.latestChatGenerationUUID ?? r?.chatGenerationUUID ?? "";
    const o = i.getComposerBubble(this.composerDataHandle, n);
    const a = o?.thinking?.text ?? "";
    if (o?.thinkingDurationMs === undefined) {
      t.executeHookForStep(df.afterAgentThought, {
        conversation_id: this.composerDataHandle.data.composerId,
        generation_id: s,
        text: a,
        duration_ms: e,
        model: r?.modelConfig?.modelName ?? ""
      }).catch(l => {
        console.error("[composer] error executing afterAgentThought hook", l);
      });
    }
  }
  handleThinkingCompleted(n) {
    const e = n.message;
    if (e.case !== "thinkingCompleted") {
      return;
    }
    if (this.thinkingWordStreamer) {
      this.thinkingWordStreamer.flush();
    }
    const t = this.instantiationService.invokeFunction(o => o.get(Oa));
    const i = t.getLastBubble(this.composerDataHandle);
    if (i?.capabilityType !== ko.THINKING) {
      return;
    }
    const r = i.bubbleId;
    const s = e.value.thinkingDurationMs;
    this.emitAfterModelThought(r, s);
    Gw(() => {
      t.updateComposerDataSetStore(this.composerDataHandle, o => o("conversationMap", r, "thinkingDurationMs", s));
      t.updateComposerDataSetStore(this.composerDataHandle, o => o("generatingBubbleIds", []));
    });
  }
  handleSummaryStarted() {
    const n = this.instantiationService.invokeFunction(r => r.get(Oa));
    if (!n.getComposerData(this.composerDataHandle)) {
      return;
    }
    const t = n.getLastBubble(this.composerDataHandle);
    if (t?.capabilityType === ko.SUMMARIZATION) {
      n.updateComposerDataSetStore(this.composerDataHandle, r => r("generatingBubbleIds", [t.bubbleId]));
      return;
    }
    const i = {
      ...h_(),
      type: ul.AI,
      text: "",
      capabilityType: ko.SUMMARIZATION
    };
    Gw(() => {
      n.appendComposerBubbles(this.composerDataHandle, [i]);
      n.updateComposerDataSetStore(this.composerDataHandle, r => r("generatingBubbleIds", [i.bubbleId]));
    });
  }
  handleSummaryCompleted(n) {
    const e = this.instantiationService.invokeFunction(i => i.get(Oa));
    const t = e.getLastBubble(this.composerDataHandle);
    if (t?.capabilityType === ko.SUMMARIZATION) {
      if (n) {
        e.updateComposerBubble(this.composerDataHandle, t.bubbleId, {
          text: n
        });
      }
      e.updateComposerDataSetStore(this.composerDataHandle, i => i("generatingBubbleIds", []));
    }
  }
  enqueuePostTurnEndedWork(n) {
    this.postTurnEndedWorkQueue.push(n);
  }
  async flushPostTurnEndedWork(n) {
    const e = this.postTurnEndedWorkQueue;
    this.postTurnEndedWorkQueue = [];
    for (const t of e) {
      try {
        await t();
      } catch (i) {
        console.error("Error executing post-turn-ended work:", i);
      }
    }
  }
  async sendUpdate(n, e) {
    const t = e.message.case;
    if (t !== "promptSuggestion" && t !== "postRequestPrompt" && this.generationUUID !== undefined && this.composerDataHandle.data.chatGenerationUUID !== this.generationUUID) {
      return;
    }
    this.hooks.onInteractionUpdate?.(e);
    const r = this.composerDataHandle.data.composerId;
    this.asyncOperationRegistry.enter(r, "capability_process_stream");
    if (t !== undefined && !["textDelta", "thinkingDelta", "tokenDelta", "toolCallDelta", "heartbeat", "shellOutputDelta", "partialToolCall"].includes(t)) {
      const o = {
        composerId: this.composerDataHandle.data.composerId,
        generationUUID: this.generationUUID
      };
      if (t === "toolCallStarted" || t === "toolCallCompleted" || t === "toolCallDelta" || t === "partialToolCall") {
        const a = e.message.value.callId;
        o.toolCallId = a;
        if (t !== "toolCallDelta") {
          const l = e.message.value.toolCall;
          const u = l?.tool?.case;
          if (u) {
            o.toolName = u;
          }
          if (t === "toolCallCompleted" && l) {
            this.addToolCallSizeBreadcrumbData(o, l);
          }
        }
      }
      P5e({
        category: "agent.update",
        message: t,
        level: "info",
        data: o
      });
    }
    this.notifyBeforeUpdate();
    try {
      switch (e.message.case) {
        case "textDelta":
          {
            this.handleTextDelta(e.message.value.text);
            break;
          }
        case "thinkingDelta":
          {
            this.handleThinkingDelta(e.message.value.text, e.message.value.thinkingStyle);
            break;
          }
        case "thinkingCompleted":
          {
            this.handleThinkingCompleted(e);
            break;
          }
        case "toolCallStarted":
          await this.handleToolCallStarted(e);
          break;
        case "toolCallCompleted":
          await this.handleToolCallCompleted(e);
          break;
        case "partialToolCall":
          await this.handlePartialToolCall(e);
          break;
        case "toolCallDelta":
          await this.handleToolCallDelta(n, e);
          break;
        case "userMessageAppended":
          {
            const o = e.message.value.userMessage;
            const a = o?.messageId;
            if (this.conversationActionManager && a) {
              this.conversationActionManager.markMessageAsProcessed(o);
            }
            if (a) {
              const l = this.instantiationService.invokeFunction(d => d.get(Oa));
              const u = this.composerDataHandle.data.conversationState;
              l.updateComposerBubbleSetStore(this.composerDataHandle, a, d => {
                d("conversationState", u);
              });
            }
            break;
          }
        case "tokenDelta":
          break;
        case "summary":
          break;
        case "summaryStarted":
          {
            this.handleSummaryStarted();
            break;
          }
        case "summaryCompleted":
          {
            this.handleSummaryCompleted(e.message.value.hookMessage);
            break;
          }
        case "heartbeat":
          break;
        case "shellOutputDelta":
          break;
        case "turnEnded":
          {
            const o = this.instantiationService.invokeFunction(I => I.get(Oa));
            const a = this.instantiationService.invokeFunction(I => I.get(wM));
            const l = this.instantiationService.invokeFunction(I => I.get(bEe));
            const u = this.composerDataHandle.data.composerId;
            const d = o.getComposerCapability(this.composerDataHandle, ko.QUEUING);
            const p = (d?.getQueueItemsReactive() ?? [])[0];
            const g = p && this.composerDataHandle.data.editingQueueItemId === p.id;
            if (p && !g) {
              const I = p.extras?.contextOverride;
              const B = Wr();
              d?.removeFromQueue(p.id);
              await a.appendQueuedHumanMessage(this.composerDataHandle, p.query, {
                richText: p.extras.richText,
                contextOverride: I,
                bubbleId: B
              });
              const R = await l.buildComposerSelectedContext(TC(), this.composerDataHandle);
              o.updateComposerDataSetStore(this.composerDataHandle, N => {
                N("generatingBubbleIds", []);
              });
              this.conversationActionManager.submitConversationAction(new SF({
                action: {
                  case: "userMessageAction",
                  value: new ORe({
                    userMessage: new KR({
                      text: p.query,
                      richText: p.extras.richText,
                      messageId: B,
                      selectedContext: R
                    })
                  })
                }
              }));
              break;
            }
            o.updateComposerDataSetStore(this.composerDataHandle, I => {
              I("status", "completed");
              I("generatingBubbleIds", []);
              I("chatGenerationUUID", undefined);
            });
            const f = this.instantiationService.invokeFunction(I => I.get(rw));
            {
              const I = f.getInputDelegate(u);
              I.setPendingSuggestionReqId(this.generationUUID);
              I.enablePendingSuggestion();
            }
            const A = this.instantiationService.invokeFunction(I => I.get(IM));
            const w = o.getLastHumanBubbleId(this.composerDataHandle);
            const C = o.getLastAiBubbleId(this.composerDataHandle);
            if (w && C) {
              await A.runCapabilitiesForProcess(this.composerDataHandle, "chat-stream-finished", {
                composerId: u,
                humanBubbleId: w,
                aiBubbleId: C,
                startTime: undefined,
                parentSpanCtx: L5e
              }).catch(I => {
                console.error("[AgentResponseAdapter] error running capabilities for chat-stream-finished", I);
              });
            }
            this.instantiationService.invokeFunction(I => I.get(Dwi)).refetch(true);
            break;
          }
        case "stepStarted":
          break;
        case "stepCompleted":
          {
            const o = e.message.case === "stepCompleted" ? e.message.value : undefined;
            if (o) {
              const a = this.instantiationService.invokeFunction(u => u.get(Oa));
              const l = a.getLastAiBubble(this.composerDataHandle);
              if (l) {
                a.updateComposerBubbleSetStore(this.composerDataHandle, l.bubbleId, u => {
                  u("turnDurationMs", Number(o.stepDurationMs));
                });
              }
            }
            break;
          }
        case "promptSuggestion":
          {
            const o = this.instantiationService.invokeFunction(u => u.get(rw));
            const a = this.composerDataHandle.data.composerId;
            o.getInputDelegate(a).setSuggestionText(e.message.value.suggestion, this.generationUUID);
            break;
          }
        case "postRequestPrompt":
          {
            const o = this.instantiationService.invokeFunction(u => u.get(Oa));
            const a = this.instantiationService.invokeFunction(u => u.get(Ja));
            const l = o.getLastBubble(this.composerDataHandle);
            if (l) {
              const u = e.message.value;
              o.updateComposerDataSetStore(this.composerDataHandle, d => d("conversationMap", l.bubbleId, "errorDetails", {
                title: u.title,
                message: u.message,
                requestId: "",
                error: new cN({
                  error: yc.CUSTOM_MESSAGE,
                  details: new Rbt({
                    title: u.title,
                    detail: u.message,
                    showRequestId: false,
                    additionalInfo: {
                      hideIcon: "true",
                      hideKeybindings: "true"
                    }
                  })
                }),
                extraButtons: [{
                  label: u.buttonLabel,
                  variant: "primary",
                  callback: () => {
                    a.open(je.parse(u.buttonUrl));
                  }
                }]
              }));
            }
            break;
          }
        case undefined:
          break;
        default:
          {
            const o = e.message;
            break;
          }
      }
    } catch (o) {
      console.error("[AgentResponseStateMachine] Error processing update:", o);
    } finally {
      this.notifyAfterUpdate();
      this.asyncOperationRegistry.exit(r, "capability_process_stream");
    }
  }
  async query(n, e) {
    switch (e.query.case) {
      case "webSearchRequestQuery":
        {
          const t = e.query.value;
          if (!t) {
            throw new Error("Missing web search query payload");
          }
          const i = await this.handleWebSearchRequest(t);
          if (i.result.case === "approved") {
            return Dme.webSearchApproved(e.id);
          } else {
            return Dme.webSearchRejected(e.id, i.result.value?.reason);
          }
        }
      case "webFetchRequestQuery":
        {
          const t = e.query.value;
          if (!t) {
            throw new Error("Missing web fetch query payload");
          }
          const i = await this.handleWebFetchRequest(t);
          if (i.result.case === "approved") {
            return Dme.webFetchApproved(e.id);
          } else {
            return Dme.webFetchRejected(e.id, i.result.value?.reason);
          }
        }
      case "askQuestionInteractionQuery":
        {
          const t = e.query.value;
          if (!t) {
            throw new Error("Missing ask question query payload");
          }
          const i = await this.handleAskQuestionRequest(t);
          return Dme.askQuestion(e.id, i.result);
        }
      case "switchModeRequestQuery":
        {
          const t = e.query.value;
          if (!t) {
            throw new Error("Missing switch mode query payload");
          }
          const i = await this.handleSwitchModeRequest(t);
          if (i.result.case === "approved") {
            return Dme.switchModeApproved(e.id);
          } else {
            return Dme.switchModeRejected(e.id, i.result.value?.reason);
          }
        }
      case "createPlanRequestQuery":
        {
          const t = e.query.value;
          if (!t) {
            throw new Error("Missing create plan query payload");
          }
          const i = await this.handleCreatePlanRequest(t);
          return Dme.createPlan(e.id, i.result);
        }
      case "mcpAuthRequestQuery":
        {
          const t = e.query.value;
          if (!t) {
            throw new Error("Missing MCP auth query payload");
          }
          const i = await this.handleMcpAuthRequest(t);
          if (i.result.case === "approved") {
            return Dme.mcpAuthApproved(e.id);
          } else {
            return Dme.mcpAuthRejected(e.id, i.result.value?.reason);
          }
        }
      case "setupVmEnvironmentArgs":
        return Dme.setupVmEnvironment(e.id, new xha({
          result: {
            case: "success",
            value: new FVl({})
          }
        }));
      case "prManagementRequestQuery":
        return Dme.prManagement(e.id, WOA());
      default:
        {
          if (e.query.case !== undefined) {
            const t = e.query;
          }
          throw new Error("Unhandled interaction query type");
        }
    }
  }
  async handleAskQuestionRequest(n) {
    return this.askQuestionQueryHandler.handleAskQuestionRequest(n);
  }
  async handleSwitchModeRequest(n) {
    return this.switchModeQueryHandler.handleSwitchModeRequest(n);
  }
  async handleCreatePlanRequest(n) {
    return this.createPlanQueryHandler.handleCreatePlanRequest(n);
  }
  async handleWebSearchRequest(n) {
    return this.webSearchQueryHandler.handleWebSearchRequest(n);
  }
  async handleWebFetchRequest(n) {
    return this.webFetchQueryHandler.handleWebFetchRequest(n);
  }
  async handleMcpAuthRequest(n) {
    return this.mcpAuthQueryHandler.handleMcpAuthRequest(n);
  }
};
