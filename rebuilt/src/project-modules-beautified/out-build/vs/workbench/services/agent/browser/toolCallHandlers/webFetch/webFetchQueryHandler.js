"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/webFetch/webFetchQueryHandler.js
// Offset: 30624821 (bundle byte offset)
// Size: 2168 bytes
$Vl();
Dd();
ghn();
Uv();
Vg();
xkf = class {
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
  async handleWebFetchRequest(n) {
    const e = this.getToolFormer();
    const t = this.context.instantiationService.invokeFunction(u => u.get(ku));
    const i = n.args?.url ?? "";
    const r = n.args?.toolCallId;
    if (!r) {
      return new htt({
        result: {
          case: "rejected",
          value: new Lfi({
            reason: "Missing toolCallId"
          })
        }
      });
    }
    const s = new WKe({
      url: i
    });
    const o = JSON.stringify({
      url: i
    });
    const a = e.getOrCreateBubbleId({
      toolCallId: r,
      toolIndex: 0,
      modelCallId: r,
      toolCallType: an.WEB_FETCH,
      params: {
        case: "webFetchParams",
        value: s
      },
      rawArgs: o,
      name: "web_fetch"
    });
    e.setBubbleData(a, {
      tool: an.WEB_FETCH,
      toolCallId: r,
      name: "web_fetch",
      rawArgs: o,
      params: s
    });
    if (n.skipApproval) {
      e.acceptToolCall(r);
      return new htt({
        result: {
          case: "approved",
          value: new Jdn()
        }
      });
    } else if (this.shouldAutoApproveWebFetch(i, t, e)) {
      e.acceptToolCall(r);
      return new htt({
        result: {
          case: "approved",
          value: new Jdn()
        }
      });
    } else {
      e.setBubbleData(a, {
        additionalData: {
          reviewData: {
            status: DA.REQUESTED,
            selectedOption: cV.RUN,
            isShowingInput: false,
            highlightedOption: undefined
          }
        }
      });
      this.context.trackTrajectoryStopped?.({
        composerId: this.context.composerDataHandle.data.composerId,
        invocationID: this.context.generationUUID,
        toolCallId: r,
        stop_category: "needs_user_approval",
        stop_source: "other",
        reason_code: "web_fetch.needs_approval"
      });
      return new Promise(u => {
        const d = e.addPendingDecision(a, an.WEB_FETCH, r, m => {
          d();
          u(new htt({
            result: m ? {
              case: "approved",
              value: new Jdn()
            } : {
              case: "rejected",
              value: new Lfi({
                reason: "User chose to skip"
              })
            }
          }));
        }, true);
      });
    }
  }
  shouldAutoApproveWebFetch(n, e, t) {
    if (t.shouldAutoRun_runEverythingMode()) {
      return true;
    }
    if (t.shouldAutoRun_eitherUseAllowlistOrRunEverythingMode()) {
      const i = e.applicationUserPersistentStorage?.composerState?.webFetchDomainAllowlist ?? [];
      if (i.length === 0) {
        return false;
      }
      let r;
      try {
        r = new URL(n.startsWith("http") ? n : `https://${n}`).hostname;
      } catch {
        return false;
      }
      return i.some(s => {
        if (s === "*") {
          return true;
        }
        if (s.startsWith("*.")) {
          const o = s.slice(2);
          return r === o || r.endsWith("." + o);
        }
        return s === r;
      });
    }
    return false;
  }
};
