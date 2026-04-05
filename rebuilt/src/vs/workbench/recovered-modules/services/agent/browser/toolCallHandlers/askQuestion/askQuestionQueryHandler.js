"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/askQuestion/askQuestionQueryHandler.js
// Offset: 30613785 (bundle byte offset)
// Size: 5118 bytes
X9();
b6o();
Jk();
b6o();
Uv();
Vg();
cp();
cv();
Ud();
wkf();
Ckf = class extends Error {
  constructor(n) {
    super(n);
    this.name = "ToolCallRejectedError";
  }
};
yqe = new Map();
Smu = class {
  constructor(n) {
    this.context = n;
    this.handledToolCalls = new Set();
  }
  getToolFormer() {
    const e = this.context.composerDataHandle.data.capabilities.find(t => t.type === ko.TOOL_FORMER);
    if (!e) {
      throw new Error("ToolFormer not found");
    }
    return e;
  }
  getComposerDataService() {
    return this.context.instantiationService.invokeFunction(n => n.get(Oa));
  }
  getAnalyticsService() {
    return this.context.instantiationService.invokeFunction(n => n.get(uh));
  }
  async handleAskQuestionRequest(n) {
    const e = this.getToolFormer();
    const t = this.context.composerDataHandle.data.composerId;
    const i = n.args;
    const r = n.toolCallId;
    const s = i?.runAsync ?? false;
    const o = new oke({
      title: i?.title ?? "",
      questions: (i?.questions ?? []).map(d => ({
        id: d.id,
        prompt: d.prompt,
        allowMultiple: d.allowMultiple ?? false,
        options: d.options.map(m => ({
          id: m.id,
          label: m.label
        }))
      })),
      runAsync: s
    });
    const a = e.getOrCreateBubbleId({
      toolCallId: r,
      toolIndex: 0,
      modelCallId: "",
      toolCallType: an.ASK_QUESTION,
      name: "ask_question",
      params: {
        case: "askQuestionParams",
        value: o
      }
    });
    const l = e.getBubbleData(a);
    const u = l?.additionalData && "status" in l.additionalData ? l.additionalData.status : undefined;
    if (u !== "submitted") {
      e.setBubbleData(a, {
        params: o,
        status: "loading",
        additionalData: {
          status: "pending"
        }
      });
    } else {
      e.setBubbleData(a, {
        params: o,
        status: "loading"
      });
    }
    if (s) {
      return new mtt({
        result: new cke({
          result: {
            case: "async",
            value: new s2c()
          }
        })
      });
    }
    this.context.trackTrajectoryStopped?.({
      composerId: t,
      invocationID: this.context.generationUUID,
      toolCallId: r,
      stop_category: "needs_user_approval",
      stop_source: "other",
      reason_code: "questionnaire.needs_input"
    });
    if (this.handledToolCalls.has(r)) {
      const d = yqe.get(r);
      return this.convertToAgentResult(d);
    }
    if (u === "submitted") {
      const d = yqe.get(r);
      if (d) {
        this.handledToolCalls.add(r);
        return this.convertToAgentResult(d);
      } else {
        console.warn("[AskQuestionQueryHandler] Status is submitted but result was lost, returning empty result");
        this.handledToolCalls.add(r);
        return this.convertToAgentResult(new zY({
          answers: []
        }));
      }
    }
    if (u === "cancelled") {
      this.handledToolCalls.add(r);
      return new mtt({
        result: new cke({
          result: {
            case: "rejected",
            value: new f6o({
              reason: "User cancelled questionnaire"
            })
          }
        })
      });
    } else {
      this.handledToolCalls.add(r);
      e.setBubbleData(a, {
        params: o,
        status: "completed",
        additionalData: {
          status: "pending"
        }
      });
      this.setGeneratingState(t, false);
      return new Promise((d, m) => {
        let p = false;
        const g = f => {
          if (!p) {
            p = true;
            this.trackAnalytics(t, o, false, false);
            this.setGeneratingState(t, true);
            d(new mtt({
              result: new cke({
                result: {
                  case: "rejected",
                  value: new f6o({
                    reason: f
                  })
                }
              })
            }));
          }
        };
        e.addPendingDecision(a, an.ASK_QUESTION, r, f => {
          if (p) {
            return;
          }
          if (!f) {
            g("User cancelled questionnaire");
            e.setBubbleData(a, {
              additionalData: {
                status: "cancelled"
              }
            });
            this.handledToolCalls.delete(r);
            yqe.delete(r);
            return;
          }
          const A = yqe.get(r);
          if (!A) {
            console.error("[AskQuestionQueryHandler] Accepted but no result was stored");
            g("Questionnaire was accepted but no result was available");
            e.setBubbleData(a, {
              status: "error"
            });
            this.handledToolCalls.delete(r);
            return;
          }
          const w = o.questions?.every(C => (A.answers?.find(I => I.questionId === C.id)?.selectedOptionIds?.length ?? 0) > 0) ?? false;
          p = true;
          this.trackAnalytics(t, o, true, w);
          this.setGeneratingState(t, true);
          this.handledToolCalls.delete(r);
          yqe.delete(r);
          d(this.convertToAgentResult(A));
        }, true);
      });
    }
  }
  convertToAgentResult(n) {
    if (!n || n.answers.length === 0) {
      return new mtt({
        result: new cke({
          result: {
            case: "success",
            value: new d8n({
              answers: []
            })
          }
        })
      });
    } else {
      return new mtt({
        result: new cke({
          result: {
            case: "success",
            value: new d8n({
              answers: n.answers.map(e => new g6o({
                questionId: e.questionId,
                selectedOptionIds: e.selectedOptionIds,
                freeformText: e.freeformText
              }))
            })
          }
        })
      });
    }
  }
  trackAnalytics(n, e, t, i) {
    try {
      const s = this.getComposerDataService().getComposerData(this.context.composerDataHandle);
      this.getAnalyticsService().trackEvent("ask_question_invoked", {
        number_of_questions: e?.questions?.length ?? 0,
        submitted: t,
        all_questions_answered: i,
        model: s?.modelConfig?.modelName
      });
    } catch {}
  }
  getLastAiBubbleId(n) {
    const t = this.getComposerDataService().getComposerData(this.context.composerDataHandle);
    if (t) {
      return [...(t.fullConversationHeadersOnly ?? [])].reverse().find(i => i.type === ul.AI)?.bubbleId;
    }
  }
  setGeneratingState(n, e) {
    const t = this.getLastAiBubbleId(n);
    if (!t) {
      return;
    }
    const i = this.getComposerDataService();
    const s = i.getComposerData(this.context.composerDataHandle)?.generatingBubbleIds ?? [];
    const o = s.includes(t);
    if (e && !o) {
      i.updateComposerData(this.context.composerDataHandle, {
        generatingBubbleIds: [...s, t]
      });
    } else if (!e && o) {
      i.updateComposerData(this.context.composerDataHandle, {
        generatingBubbleIds: s.filter(a => a !== t)
      });
    }
    i.updateComposerDataSetStore(this.context.composerDataHandle, a => a("status", e ? "generating" : "completed"));
  }
};
