"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/askQuestion/askQuestionToolCallHandler.js
// Offset: 30608388 (bundle byte offset)
// Size: 3853 bytes
Uv();
Vg();
_mu = class {
  constructor(n) {
    this.context = n;
  }
  getToolFormer() {
    const e = this.context.composerDataHandle.data.capabilities.find(t => t.type === ko.TOOL_FORMER);
    if (!e) {
      throw new Error("ToolFormer not found");
    }
    return e;
  }
  async handlePartialToolCall(n, e) {
    const t = n.tool.value;
    const i = this.getToolFormer();
    if (t.args) {
      const r = t.args;
      const s = r?.title || "";
      const o = r?.questions || [];
      let a = i.getBubbleIdByToolCallId(e);
      a ||= i.getOrCreateBubbleId({
        toolCallId: e,
        toolIndex: 0,
        modelCallId: "",
        toolCallType: an.ASK_QUESTION,
        name: "ask_question",
        params: undefined,
        toolCall: n
      });
      const l = i.getBubbleData(a);
      const d = l?.params?.questions?.length ?? 0;
      const m = Math.max(0, Math.min(d, o.length));
      for (let C = m; C < o.length; C++) {
        const x = o.slice(0, C + 1);
        const I = new oke({
          title: s,
          questions: x.map(B => ({
            id: B.id,
            prompt: B.prompt,
            allowMultiple: B.allowMultiple ?? false,
            options: B.options.map(R => ({
              id: R.id,
              label: R.label
            }))
          }))
        });
        i.setBubbleData(a, {
          params: I
        });
      }
      const p = r?.runAsync ?? false;
      const f = l?.params?.runAsync ?? false;
      const A = p || f;
      const w = new oke({
        title: s,
        questions: o.map(C => ({
          id: C.id,
          prompt: C.prompt,
          allowMultiple: C.allowMultiple ?? false,
          options: C.options.map(x => ({
            id: x.id,
            label: x.label
          }))
        })),
        runAsync: A
      });
      i.setBubbleData(a, {
        params: w
      });
    } else {
      i.getOrCreateBubbleId({
        toolCallId: e,
        toolIndex: 0,
        modelCallId: "",
        toolCallType: an.ASK_QUESTION,
        name: "ask_question",
        params: undefined,
        toolCall: n
      });
    }
  }
  async handleToolCallDelta(n, e, t) {}
  async handleToolCallStarted(n, e) {
    const t = n.tool.value;
    const i = this.getToolFormer();
    const r = t.args;
    const s = r?.title || "";
    const o = r?.questions || [];
    const a = r?.runAsync ?? false;
    const l = r?.asyncOriginalToolCallId;
    const u = new oke({
      title: s,
      questions: o.map(p => ({
        id: p.id,
        prompt: p.prompt,
        allowMultiple: p.allowMultiple ?? false,
        options: p.options.map(g => ({
          id: g.id,
          label: g.label
        }))
      })),
      runAsync: a
    });
    const d = i.getOrCreateBubbleId({
      toolCallId: e,
      toolIndex: 0,
      modelCallId: "",
      toolCallType: an.ASK_QUESTION,
      name: "ask_question",
      params: {
        case: "askQuestionParams",
        value: u
      },
      toolCall: n
    });
    if (t.result && t.result.result.case !== undefined && t.result.result.case !== "async" && t.result) {
      const {
        AskQuestionResult: p,
        AskQuestionResult_Answer: g
      } = await Promise.resolve().then(() => {
        Vg();
        return hPc;
      });
      let f;
      if (t.result.result.case === "success") {
        f = new p({
          answers: t.result.result.value.answers.map(A => new g({
            questionId: A.questionId,
            selectedOptionIds: A.selectedOptionIds,
            freeformText: A.freeformText
          }))
        });
      }
      i.setBubbleData(d, {
        params: u,
        result: f,
        additionalData: {
          status: "submitted"
        }
      });
      if (l) {
        const A = i.getBubbleIdByToolCallId(l);
        if (A) {
          const w = i.getBubbleData(A);
          i.setBubbleData(A, {
            additionalData: {
              ...w?.additionalData,
              answerBubbleId: d
            }
          });
        }
      }
      return;
    }
    i.setBubbleData(d, {
      params: u
    });
  }
  async handleToolCallCompleted(n, e) {
    const t = n.tool.value;
    const i = this.getToolFormer();
    const r = i.getBubbleIdByToolCallId(e);
    if (!r) {
      return;
    }
    const s = t.result?.result;
    if (s?.case === undefined) {
      return;
    }
    let o;
    let a = "submitted";
    switch (s.case) {
      case "success":
        {
          o = new zY({
            answers: s.value.answers.map(l => ({
              questionId: l.questionId,
              selectedOptionIds: l.selectedOptionIds,
              freeformText: l.freeformText
            }))
          });
          break;
        }
      case "async":
        {
          o = new zY({
            isAsync: true
          });
          a = "pending";
          break;
        }
      case "rejected":
        {
          o = new zY({
            answers: []
          });
          a = "cancelled";
          break;
        }
      case "error":
        {
          i.setBubbleData(r, {
            status: "error",
            additionalData: {
              status: "error"
            }
          });
          return;
        }
      default:
        return s;
    }
    i.setBubbleData(r, {
      status: "completed",
      result: o,
      additionalData: {
        status: a
      }
    });
  }
};
