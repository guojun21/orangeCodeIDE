"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/webSearch/webSearchQueryHandler.js
// Offset: 30623124 (bundle byte offset)
// Size: 1577 bytes
yVl();
Dd();
Uv();
Vg();
Ekf = class {
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
  async handleWebSearchRequest(n) {
    const e = this.getToolFormer();
    const t = this.context.instantiationService.invokeFunction(u => u.get(ku));
    const i = n.args?.searchTerm ?? "";
    const r = n.args?.toolCallId;
    if (!r) {
      return new qCt({
        result: {
          case: "rejected",
          value: new Bfi({
            reason: "Missing toolCallId"
          })
        }
      });
    }
    const s = new Hbt({
      searchTerm: i
    });
    const o = JSON.stringify({
      searchTerm: i
    });
    const a = e.getOrCreateBubbleId({
      toolCallId: r,
      toolIndex: 0,
      modelCallId: r,
      toolCallType: an.WEB_SEARCH,
      params: {
        case: "webSearchParams",
        value: s
      },
      rawArgs: o,
      name: "web_search"
    });
    e.setBubbleData(a, {
      tool: an.WEB_SEARCH,
      toolCallId: r,
      name: "web_search",
      rawArgs: o,
      params: s
    });
    if (e.shouldAutoRun_runEverythingMode() || t.applicationUserPersistentStorage?.composerState?.autoAcceptWebSearchTool === true) {
      e.acceptToolCall(r);
      return new qCt({
        result: {
          case: "approved",
          value: new Dfi()
        }
      });
    } else {
      this.context.trackTrajectoryStopped?.({
        composerId: this.context.composerDataHandle.data.composerId,
        invocationID: this.context.generationUUID,
        toolCallId: r,
        stop_category: "needs_user_approval",
        stop_source: "other",
        reason_code: "web_search.needs_approval"
      });
      return new Promise(u => {
        const d = e.addPendingDecision(a, an.WEB_SEARCH, r, m => {
          d();
          u(new qCt({
            result: m ? {
              case: "approved",
              value: new Dfi()
            } : {
              case: "rejected",
              value: new Bfi({
                reason: "User chose to skip"
              })
            }
          }));
        }, true);
      });
    }
  }
};
