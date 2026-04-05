"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/task/taskToolCallHandler.js
// Offset: 30589900 (bundle byte offset)
// Size: 9581 bytes
cv();
Uv();
Vg();
Cye();
cp();
wSt();
Nce();
wmu();
t1t();
v0a = class extends Error {
  constructor(n) {
    super(n);
    this.name = "SubagentBlockedByHookError";
  }
};
bkf = class {
  constructor(n) {
    this.context = n;
    this.taskComposerHandles = new Map();
    this.subagentMetadata = new Map();
    this.deniedToolCallIds = new Set();
    this.clientSideSubagentIds = new Set();
  }
  findClientSideSubagentComposerId(n) {
    const e = this.context.instantiationService.invokeFunction(i => i.get(Oa));
    const t = e.getLoadedComposers();
    for (const i of t) {
      const r = e.getHandleIfLoaded(i);
      if (r && e.getComposerData(r)?.subagentInfo?.toolCallId === n) {
        return i;
      }
    }
  }
  getToolFormer() {
    const e = this.context.composerDataHandle.data.capabilities.find(t => t.type === ko.TOOL_FORMER);
    if (!e) {
      throw new Error("ToolFormer not found");
    }
    return e;
  }
  getSubagentTerminationReason(n) {
    if (n) {
      return this.context.instantiationService.invokeFunction(t => t.get(Qwi)).getLastTerminationReason(n);
    } else {
      return undefined;
    }
  }
  async handlePartialToolCall(n, e) {
    if (!this.subagentMetadata.has(e) && !this.deniedToolCallIds.has(e)) {
      await this.handleToolCallStarted(n, e);
    }
  }
  async handleToolCallDelta(n, e, t) {
    if (this.deniedToolCallIds.has(t) || this.clientSideSubagentIds.has(t)) {
      return;
    }
    if (this.findClientSideSubagentComposerId(t)) {
      this.clientSideSubagentIds.add(t);
      return;
    }
    let r = this.taskComposerHandles.get(t);
    if (!r) {
      const o = this.getToolFormer();
      const a = this.context.instantiationService.invokeFunction(m => m.get(Oa));
      let l = o.getBubbleIdByToolCallId(t);
      if (!l) {
        const m = o.getBubbleDataByToolCallId(t);
        let p;
        if (m?.params) {
          p = m.params;
        } else {
          p = new $Ke({
            description: "",
            prompt: "",
            subagentType: "",
            name: "general-purpose"
          });
        }
        l = o.getOrCreateBubbleId({
          toolCallId: t,
          toolIndex: 0,
          modelCallId: "",
          toolCallType: an.TASK_V2,
          name: "task_v2",
          params: {
            case: "taskV2Params",
            value: p
          }
        });
      }
      r = xny({
        instantiationService: this.context.instantiationService,
        composerDataService: a,
        parentHandle: this.context.composerDataHandle,
        bubbleId: l,
        toolCallId: t,
        conversationActionManager: this.context.conversationActionManager,
        toolFormer: o
      });
      const u = o.getBubbleData(l);
      const d = u?.params?.description;
      if (d) {
        r.handle.data.name = d;
        const m = u?.additionalData;
        if (m && "composerData" in m && m.composerData) {
          o.setBubbleData(l, {
            additionalData: {
              ...m,
              composerData: {
                ...m.composerData,
                name: d
              }
            }
          });
        }
      }
      this.taskComposerHandles.set(t, r);
    }
    const s = e.interactionUpdate;
    if (s) {
      await r.adapter.sendUpdate(n, s);
    }
  }
  async handleToolCallStarted(n, e, t = false) {
    const i = n.tool.value;
    const r = this.getToolFormer();
    const s = i.args;
    const o = s?.description || "";
    const a = s?.prompt || "";
    const l = s?.subagentType;
    const u = l?.type.case ?? "unspecified";
    const d = s?.model;
    let m;
    if (l?.type.case === "custom") {
      m = l.type.value.name;
    } else if (l?.type.case === "unspecified" || !l) {
      m = "general-purpose";
    } else {
      m = l.type.case ?? "unknown";
    }
    const p = new $Ke({
      description: o,
      prompt: a,
      subagentType: u,
      model: d,
      name: m
    });
    let g = r.getBubbleIdByToolCallId(e);
    if (g) {
      r.setBubbleData(g, {
        status: "loading",
        params: p,
        additionalData: {
          status: "loading"
        }
      });
    } else {
      g = r.getOrCreateBubbleId({
        toolCallId: e,
        toolIndex: 0,
        modelCallId: "",
        toolCallType: an.TASK_V2,
        name: "task_v2",
        params: {
          case: "taskV2Params",
          value: p
        },
        toolCall: n
      });
      r.setBubbleData(g, {
        status: "loading",
        additionalData: {
          status: "loading"
        }
      });
    }
    const f = this.subagentMetadata.has(e);
    if (!f) {
      this.subagentMetadata.set(e, {
        startTime: Date.now(),
        subagentType: m,
        taskDescription: o,
        taskPrompt: a,
        model: d
      });
    }
    if (!t && !f) {
      try {
        const A = this.context.instantiationService.invokeFunction(w => w.get(lX));
        if (A.hasHookForStep(df.subagentStart)) {
          const w = this.context.composerDataHandle.data;
          const C = w.composerId;
          const x = await A.executeHookForStep(df.subagentStart, {
            conversation_id: C,
            generation_id: C,
            model: d || w.modelConfig?.modelName || "unknown",
            subagent_id: e,
            subagent_type: m,
            task: a,
            parent_conversation_id: C,
            tool_call_id: e,
            subagent_model: d,
            is_parallel_worker: false,
            git_branch: w.gitWorktree?.branchName
          });
          if (x?.permission === "deny") {
            const I = x.user_message ? `Subagent creation blocked by hook: ${x.user_message}` : "Subagent creation blocked by hook";
            console.warn("[TaskToolCallHandler] subagentStart hook denied subagent creation:", I);
            throw new v0a(I);
          }
          if (x?.permission === "ask") {
            const I = "The 'ask' permission for subagentStart hooks is not yet implemented. Use 'allow' or 'deny' instead.";
            console.warn("[TaskToolCallHandler] subagentStart hook returned unsupported permission \"ask\"");
            throw new v0a(I);
          }
        }
      } catch (A) {
        if (A instanceof v0a) {
          this.deniedToolCallIds.add(e);
          this.subagentMetadata.delete(e);
          if (g) {
            r.setBubbleData(g, {
              status: "error",
              additionalData: {
                status: "error"
              }
            });
          }
          throw A;
        }
        console.error("[TaskToolCallHandler] Error executing subagentStart hook:", A);
      }
    }
  }
  async handleToolCallCompleted(n, e) {
    const t = n.tool.value;
    const i = this.getToolFormer();
    let r = i.getBubbleIdByToolCallId(e);
    const s = this.findClientSideSubagentComposerId(e);
    if (s) {
      if (!r) {
        await this.handleToolCallStarted(n, e, true);
        r = i.getBubbleIdByToolCallId(e);
      }
      if (r) {
        const x = this.context.instantiationService.invokeFunction(Y => Y.get(Oa));
        const I = x.getHandleIfLoaded(s);
        const B = I ? x.getComposerData(I) : undefined;
        const R = t.result?.result?.case === "success";
        const N = t.result?.result?.case === "error";
        const M = this.getSubagentTerminationReason(s);
        const $ = R ? "completed" : N ? M === "aborted" ? "aborted" : "error" : M ?? "error";
        const H = $ === "completed" ? "completed" : $ === "aborted" ? "cancelled" : "error";
        const W = $ === "completed" ? "success" : $ === "aborted" ? "cancelled" : "error";
        i.setBubbleData(r, {
          status: H,
          additionalData: {
            status: W,
            terminationReason: $,
            composerData: B,
            subagentComposerId: s
          }
        });
        if (R) {
          const j = t.result.result.value.agentId;
          const X = new qKe({
            agentId: j || s
          });
          i.handleToolResult(new VR({
            tool: an.TASK_V2,
            toolCallId: e,
            result: {
              case: "taskV2Result",
              value: X
            }
          }), e, true);
        }
        const z = this.subagentMetadata.get(e);
        if (z) {
          const Y = $;
          await this.executeSubagentStopHook(e, z, Y);
          this.subagentMetadata.delete(e);
        }
        this.clientSideSubagentIds.delete(e);
      }
      return;
    }
    const o = this.taskComposerHandles.get(e);
    let a;
    if (o) {
      a = o.handle.data;
    }
    let l;
    if (!r && a) {
      const x = a.fullConversationHeadersOnly?.[0];
      if (x) {
        const I = a.conversationMap?.[x.bubbleId];
        if (I?.createdAt) {
          l = new Date(I.createdAt).getTime();
        }
      }
    }
    if (!r) {
      await this.handleToolCallStarted(n, e, true);
      r = i.getBubbleIdByToolCallId(e);
      if (!r) {
        throw new Error(`Bubble not found for tool call id ${e}`);
      }
      if (l !== undefined) {
        const x = this.subagentMetadata.get(e);
        if (x) {
          x.startTime = l;
        }
      }
    }
    const u = this.context.instantiationService.invokeFunction(x => x.get(Oa));
    const d = this.context.instantiationService.invokeFunction(x => x.get(Ftt));
    const m = u.getComposerBubble(this.context.composerDataHandle, r);
    if (!m) {
      throw new Error(`Bubble data not found for bubble id ${r}`);
    }
    await d.storeMessage(this.context.composerDataHandle.data.composerId, m);
    if (o) {
      o.handle.dispose();
      o.adapter.dispose();
      this.taskComposerHandles.delete(e);
    }
    let p = "completed";
    let g;
    let f;
    const w = i.getBubbleData(r)?.additionalData;
    if (w?.terminationReason === "aborted" || w?.status === "cancelled") {
      p = "aborted";
    } else if (t.result?.result?.case === "success") {
      const I = t.result.result.value.agentId;
      const B = new qKe({
        agentId: I
      });
      i.setBubbleData(r, {
        status: "completed",
        additionalData: {
          status: "success",
          terminationReason: "completed"
        }
      });
      i.handleToolResult(new VR({
        tool: an.TASK_V2,
        toolCallId: e,
        result: {
          case: "taskV2Result",
          value: B
        }
      }), e, true);
      p = "completed";
    } else if (t.result?.result?.case === "error") {
      const x = t.result.result.value;
      const I = w?.subagentComposerId;
      if ((this.getSubagentTerminationReason(I) === "aborted" || w?.terminationReason === "aborted" ? "aborted" : "error") === "aborted") {
        i.setBubbleData(r, {
          status: "cancelled",
          additionalData: {
            ...w,
            status: "cancelled",
            terminationReason: "aborted"
          }
        });
        p = "aborted";
      } else {
        i.setBubbleData(r, {
          status: "error",
          additionalData: {
            ...w,
            status: "error",
            terminationReason: "error"
          }
        });
        i.handleToolResult(new VR({
          tool: an.TASK_V2,
          toolCallId: e,
          error: {
            clientVisibleErrorMessage: "Task failed",
            modelVisibleErrorMessage: `Task failed: ${x.error}`,
            actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: x.error
          }
        }), e, true);
        p = "error";
        g = x.error;
      }
    }
    try {
      const x = this.context.instantiationService.invokeFunction(I => I.get(lX));
      if (this.deniedToolCallIds.has(e)) {
        console.log(`[TaskToolCallHandler] Skipping subagentStop hook for denied tool call ${e}`);
      } else if (x.hasHookForStep(df.subagentStop)) {
        const I = this.subagentMetadata.get(e);
        const B = this.context.composerDataHandle.data;
        const R = B.composerId;
        const N = I ? Date.now() - I.startTime : 0;
        let M = 0;
        let O = 0;
        const $ = [];
        if (a) {
          M = a.fullConversationHeadersOnly?.length ?? 0;
          O = Object.keys(a.codeBlockData?.codeblockMap ?? {}).length;
          const H = [...(a.fullConversationHeadersOnly ?? [])].reverse().find(W => W.type === ul.AI);
          if (H) {
            const W = a.conversationMap?.[H.bubbleId];
            if (W?.text) {
              f = W.text;
            }
          }
        }
        await x.executeHookForStep(df.subagentStop, {
          conversation_id: R,
          generation_id: R,
          model: I?.model || B.modelConfig?.modelName || "unknown",
          subagent_id: e,
          subagent_type: I?.subagentType ?? "unknown",
          status: p,
          duration_ms: N,
          summary: f,
          parent_conversation_id: R,
          message_count: M,
          tool_call_count: O,
          error_message: g,
          modified_files: $.length > 0 ? $ : undefined,
          git_branch: B.gitWorktree?.branchName,
          loop_count: 0,
          task: I?.taskPrompt,
          description: I?.taskDescription
        });
      }
    } catch (x) {
      console.error("[TaskToolCallHandler] Error executing subagentStop hook:", x);
    }
    this.subagentMetadata.delete(e);
    this.deniedToolCallIds.delete(e);
  }
  async executeSubagentStopHook(n, e, t, i) {
    try {
      const r = this.context.instantiationService.invokeFunction(s => s.get(lX));
      if (r.hasHookForStep(df.subagentStop)) {
        const s = this.context.composerDataHandle.data;
        const o = s.composerId;
        const a = Date.now() - e.startTime;
        await r.executeHookForStep(df.subagentStop, {
          conversation_id: o,
          generation_id: o,
          model: e.model || s.modelConfig?.modelName || "unknown",
          subagent_id: n,
          subagent_type: e.subagentType,
          status: t,
          duration_ms: a,
          summary: i?.summary,
          parent_conversation_id: o,
          message_count: i?.messageCount ?? 0,
          tool_call_count: i?.toolCallCount ?? 0,
          error_message: i?.errorMessage,
          modified_files: undefined,
          git_branch: s.gitWorktree?.branchName,
          loop_count: 0,
          task: e.taskPrompt,
          description: e.taskDescription
        });
      }
    } catch (r) {
      console.error("[TaskToolCallHandler] Error executing subagentStop hook:", r);
    }
  }
};
