"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/createPlan/createPlanToolCallHandler.js
// Offset: 30599602 (bundle byte offset)
// Size: 6980 bytes
Vg();
Uv();
$J();
oP();
qJ();
Wu();
vkf = class {
  constructor(n) {
    this.context = n;
    this.pendingQueue = new Map();
  }
  isMultiPlanEnabled() {
    return this.context.instantiationService.invokeFunction(e => e.get(Tl)).checkFeatureGate("file_based_plan_edits") === true;
  }
  getToolFormer() {
    const e = this.context.composerDataHandle.data.capabilities.find(t => t.type === ko.TOOL_FORMER);
    if (!e) {
      throw new Error("ToolFormer not found");
    }
    return e;
  }
  convertTodoStatus(n) {
    switch (n) {
      case 1:
        return "pending";
      case 2:
        return "in_progress";
      case 3:
        return "completed";
      case 4:
        return "cancelled";
      default:
        return "pending";
    }
  }
  shouldAutoOpenPlanEditor(n) {
    const e = this.context.instantiationService.invokeFunction(t => t.get(rw));
    return e.isFocused(n) || e.isPrevBubbleFocused(n);
  }
  async handlePartialToolCall(n, e) {
    const i = (this.pendingQueue.get(e) ?? Promise.resolve()).then(() => this.handleToolCallStarted(n, e));
    this.pendingQueue.set(e, i);
    try {
      await i;
    } finally {
      if (this.pendingQueue.get(e) === i) {
        this.pendingQueue.delete(e);
      }
    }
  }
  async handleToolCallDelta(n, e, t) {}
  async handleToolCallStarted(n, e) {
    const t = n.tool.value;
    const i = this.context.instantiationService.invokeFunction(C => C.get(IV));
    const r = this.getToolFormer();
    const s = t.args;
    const o = new JKe({
      plan: s?.plan,
      overview: s?.overview,
      todos: s?.todos?.map(C => new QB({
        id: C.id,
        content: C.content,
        status: this.convertTodoStatus(C.status),
        dependencies: C.dependencies
      })),
      name: s?.name,
      isProject: s?.isProject,
      phases: s?.phases?.map(C => ({
        name: C.name,
        todos: C.todos?.map(x => new QB({
          id: x.id,
          content: x.content,
          status: this.convertTodoStatus(x.status),
          dependencies: x.dependencies
        })) || []
      }))
    });
    const a = r.getOrCreateBubbleId({
      toolCallId: e,
      toolIndex: 0,
      modelCallId: "",
      toolCallType: an.CREATE_PLAN,
      name: "create_plan",
      params: {
        case: "createPlanParams",
        value: o
      },
      toolCall: n
    });
    const l = this.context.composerDataHandle.data.composerId;
    const d = r.getBubbleData(a)?.additionalData;
    const m = d?.hasOpenedEditor === true;
    const p = d?.planUri;
    const g = s?.name;
    const f = s?.plan || "";
    const A = s?.overview || "";
    const w = s?.todos?.map(C => ({
      id: C.id || "",
      content: C.content,
      status: "pending",
      dependencies: C.dependencies || []
    })) || [];
    try {
      const C = this.isMultiPlanEnabled();
      if (p) {
        if (f) {
          const {
            parsePlanUriString: x
          } = await Promise.resolve().then(() => {
            UF();
            return Spa;
          });
          const I = x(p);
          const B = s?.phases?.map(R => ({
            name: R.name,
            todos: R.todos?.map(N => ({
              id: N.id || "",
              content: N.content,
              status: "pending",
              dependencies: N.dependencies || []
            })) || []
          }));
          await i.updatePlanByUriDirty(I, g, A, w, f, l, s?.isProject, B);
        }
      } else if (g && f) {
        let x;
        if (C) {
          const I = s?.phases?.map(B => ({
            name: B.name,
            todos: B.todos?.map(R => ({
              id: R.id || "",
              content: R.content,
              status: "pending",
              dependencies: R.dependencies || []
            })) || []
          }));
          x = await i.createPlanFile(l, g, A, w, f, s?.isProject, I);
        } else {
          const I = s?.phases?.map(B => ({
            name: B.name,
            todos: B.todos?.map(R => ({
              id: R.id || "",
              content: R.content,
              status: "pending",
              dependencies: R.dependencies || []
            })) || []
          }));
          x = await i.getOrCreatePlanFile(l, g, A, w, f, s?.isProject, I);
        }
        if (!m) {
          if (this.shouldAutoOpenPlanEditor(l)) {
            await i.openPlanInEditor(x, {
              stealFocus: false,
              composerId: l
            });
          }
        }
        r.setBubbleData(a, {
          params: o,
          additionalData: {
            planUri: x.toString(),
            hasOpenedEditor: true
          }
        });
      }
    } catch (C) {
      console.error("[CreatePlanToolCallHandler] Failed to create/update plan file during streaming:", C);
    }
  }
  async handleToolCallCompleted(n, e) {
    const t = n.tool.value;
    const i = this.context.instantiationService.invokeFunction(f => f.get(IV));
    const r = await Promise.resolve().then(() => {
      Ud();
      return Rmg;
    });
    const s = this.context.instantiationService.invokeFunction(f => f.get(r.IAnalyticsService));
    const o = this.context.instantiationService.invokeFunction(f => f.get(WEe));
    const a = this.getToolFormer();
    const l = a.getBubbleIdByToolCallId(e);
    if (!l) {
      throw new Error(`Bubble not found for tool call id ${e}`);
    }
    const u = this.context.composerDataHandle;
    const d = u.data.composerId;
    const m = u.data;
    if (!m) {
      throw new Error(`Composer not found for composer id ${d}`);
    }
    const p = t.args;
    if (!p || !p.plan) {
      throw new Error(`Plan args not found for tool call id ${e}`);
    }
    const g = new JKe({
      plan: p?.plan,
      overview: p?.overview,
      todos: p?.todos?.map(f => new QB({
        id: f.id,
        content: f.content,
        status: this.convertTodoStatus(f.status),
        dependencies: f.dependencies
      })),
      name: p?.name,
      isProject: p?.isProject,
      phases: p?.phases?.map(f => ({
        name: f.name,
        todos: f.todos?.map(A => new QB({
          id: A.id,
          content: A.content,
          status: this.convertTodoStatus(A.status),
          dependencies: A.dependencies
        })) || []
      }))
    });
    if (t.result?.result?.case === "success") {
      const A = a.getBubbleData(l)?.additionalData;
      const w = A?.hasOpenedEditor === true;
      const C = A?.planUri;
      let x = C ?? t.result?.planUri;
      if (C) {
        const R = p.name || undefined;
        const N = p.overview || "";
        const M = p.todos?.map($ => ({
          id: $.id || "",
          content: $.content,
          status: "pending",
          dependencies: $.dependencies || []
        })) || [];
        const O = p?.phases?.map($ => ({
          name: $.name,
          todos: $.todos?.map(H => ({
            id: H.id || "",
            content: H.content,
            status: "pending",
            dependencies: H.dependencies || []
          })) || []
        }));
        try {
          const {
            parsePlanUriString: $
          } = await Promise.resolve().then(() => {
            UF();
            return Spa;
          });
          const H = $(C);
          await i.updatePlanByUriDirty(H, R, N, M, p.plan, d, p?.isProject, O);
          await i.savePlanModel(H);
        } catch ($) {
          console.error("[CreatePlanToolCallHandler] Failed to update plan file:", $);
        }
      } else {
        const R = p.name || undefined;
        const N = p.overview || "";
        const M = p.todos?.map(O => ({
          id: O.id || "",
          content: O.content,
          status: "pending",
          dependencies: O.dependencies || []
        })) || [];
        try {
          const O = this.isMultiPlanEnabled();
          let $;
          const H = p?.phases?.map(W => ({
            name: W.name,
            todos: W.todos?.map(z => ({
              id: z.id || "",
              content: z.content,
              status: "pending",
              dependencies: z.dependencies || []
            })) || []
          }));
          if (O) {
            $ = await i.createPlanFile(d, R || i.getPlanTitle(p.plan), N, M, p.plan, p?.isProject, H);
          } else {
            $ = await i.getOrCreatePlanFile(d, R, N, M, p.plan, p?.isProject, H);
          }
          x = $.toString();
          if (!w) {
            if (this.shouldAutoOpenPlanEditor(d)) {
              await i.openPlanInEditor($, {
                stealFocus: false,
                composerId: d
              });
            }
          }
        } catch (O) {
          console.error("[CreatePlanToolCallHandler] Failed to create plan file:", O);
        }
      }
      a.setBubbleData(l, {
        params: g,
        additionalData: {
          planUri: x,
          hasOpenedEditor: true
        }
      });
      s.trackEvent("composer.plan_mode.plan_created", {
        iteration_number: 1,
        model: m.modelConfig?.modelName || "unknown",
        composerId: d,
        invocationID: m?.latestChatGenerationUUID
      });
      const I = o.getPlanReviewModelForBubble(u, l);
      if (I) {
        try {
          s.trackEvent("composer.agent_trajectory_stopped", {
            composerId: d,
            invocationID: m?.latestChatGenerationUUID,
            toolCallId: e,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "plan.needs_approval"
          });
        } catch {}
        I.setStatus(DA.REQUESTED);
      }
      const B = new jbt({
        result: {
          case: "rejected",
          value: {}
        }
      });
      a.handleToolResult(new VR({
        tool: an.CREATE_PLAN,
        toolCallId: e,
        result: {
          case: "createPlanResult",
          value: B
        }
      }), e, true);
    } else if (t.result?.result?.case === "error") {
      const f = t.result.result.value;
      const C = a.getBubbleData(l)?.additionalData?.planUri;
      if (C) {
        try {
          const {
            parsePlanUriString: x
          } = await Promise.resolve().then(() => {
            UF();
            return Spa;
          });
          const I = x(C);
          i.discardPlanModel(I);
        } catch (x) {
          console.error("[CreatePlanToolCallHandler] Failed to discard streamed plan model after error:", x);
        }
      }
      a.setBubbleData(l, {
        status: "error",
        additionalData: {
          status: "error"
        }
      });
      a.handleToolResult(new VR({
        tool: an.CREATE_PLAN,
        toolCallId: e,
        error: {
          clientVisibleErrorMessage: "Plan creation failed",
          modelVisibleErrorMessage: `Plan creation failed: ${f.error}`,
          actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: f.error
        }
      }), e, true);
    }
  }
};
