"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/todo/todoToolCallHandler.js
// Offset: 30549406 (bundle byte offset)
// Size: 2635 bytes
Vg();
Uv();
$J();
VSf = class {
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
  async handlePartialToolCall(n, e) {
    await this.handleToolCallStarted(n, e);
  }
  async handleToolCallDelta(n, e, t) {}
  async handleToolCallStarted(n, e) {
    const t = n.tool.value;
    const i = this.getToolFormer();
    const r = t.args?.todos || [];
    const s = t.args?.merge ?? true;
    const o = this.context.composerDataHandle.data.todos || [];
    const a = r.map(d => {
      const m = o.find(p => p.id === d.id);
      return new QB({
        id: d.id,
        content: d.content || m?.content || "",
        status: this.convertTodoStatus(d.status),
        dependencies: d.dependencies
      });
    });
    const l = new Wbt({
      todos: a,
      merge: s
    });
    let u = i.getBubbleIdByToolCallId(e);
    u ||= i.getOrCreateBubbleId({
      toolCallId: e,
      toolIndex: 0,
      modelCallId: "",
      toolCallType: an.TODO_WRITE,
      name: "todo_write",
      params: {
        case: "todoWriteParams",
        value: l
      },
      toolCall: n
    });
    if (a.length > 0) {
      const m = i.getBubbleData(u)?.result?.finalTodos || [];
      const p = s ? [...m, ...a] : a;
      i.handleToolResult(new VR({
        tool: an.TODO_WRITE,
        toolCallId: e,
        result: {
          case: "todoWriteResult",
          value: new HKe({
            success: true,
            finalTodos: p,
            readyTaskIds: [],
            needsInProgressTodos: false,
            wasMerge: s
          })
        }
      }), e, false);
    }
  }
  async handleToolCallCompleted(n, e) {
    const t = n.tool.value;
    const i = this.getToolFormer();
    const r = this.context.instantiationService.invokeFunction(o => o.get(IV));
    if (i.getBubbleIdByToolCallId(e)) {
      if (t.result?.result?.case === "success") {
        const o = t.result.result.value;
        const a = t.args?.merge ?? true;
        const l = this.context.composerDataHandle.data.todos || [];
        const u = o.todos?.map(g => {
          const f = l.find(A => A.id === g.id);
          return new QB({
            id: g.id,
            content: g.content || f?.content || "",
            status: this.convertTodoStatus(g.status),
            dependencies: g.dependencies
          });
        }) || [];
        const d = this.context.composerDataHandle.data.composerId;
        const m = new Map();
        for (const g of u) {
          m.set(g.id, g.status);
        }
        await r.syncTodoUpdatesToFile(d, m);
        const p = new HKe({
          success: true,
          finalTodos: u,
          readyTaskIds: [],
          needsInProgressTodos: false,
          wasMerge: a
        });
        i.handleToolResult(new VR({
          tool: an.TODO_WRITE,
          toolCallId: e,
          result: {
            case: "todoWriteResult",
            value: p
          }
        }), e, true);
      } else if (t.result?.result?.case === "error") {
        const o = t.result.result.value;
        i.handleToolResult(new VR({
          tool: an.TODO_WRITE,
          toolCallId: e,
          error: {
            clientVisibleErrorMessage: "Todo update failed",
            modelVisibleErrorMessage: `Todo update failed: ${o.error}`,
            actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: o.error
          }
        }), e, true);
      }
    }
  }
};
