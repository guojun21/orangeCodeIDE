"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/switchMode/switchModeQueryHandler.js
// Offset: 30619037 (bundle byte offset)
// Size: 3966 bytes
EVl();
Uv();
Vg();
Dd();
cp();
vN();
Ud();
kkf = class {
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
  getComposerModesService() {
    return this.context.instantiationService.invokeFunction(n => n.get(DT));
  }
  getReactiveStorageService() {
    return this.context.instantiationService.invokeFunction(n => n.get(ku));
  }
  getAnalyticsService() {
    return this.context.instantiationService.invokeFunction(n => n.get(uh));
  }
  async handleSwitchModeRequest(n) {
    const e = this.getToolFormer();
    const t = this.getComposerModesService();
    const i = this.getReactiveStorageService();
    const r = this.getAnalyticsService();
    const s = this.getComposerDataService();
    const o = this.context.composerDataHandle.data.composerId;
    const a = n.args?.toolCallId;
    if (!a) {
      return new rEe({
        result: {
          case: "rejected",
          value: new dtt({
            reason: "Missing toolCallId"
          })
        }
      });
    }
    const l = n.args?.targetModeId ?? "";
    const u = t.getComposerUnifiedMode(o) || "agent";
    const d = n.args?.explanation;
    const m = new GKe({
      fromModeId: u,
      toModeId: l,
      explanation: d
    });
    const p = JSON.stringify({
      fromModeId: u,
      toModeId: l,
      explanation: d
    });
    const g = e.getOrCreateBubbleId({
      toolCallId: a,
      toolIndex: 0,
      modelCallId: a,
      toolCallType: an.SWITCH_MODE,
      params: {
        case: "switchModeParams",
        value: m
      },
      rawArgs: p,
      name: "switch_mode"
    });
    e.setBubbleData(g, {
      tool: an.SWITCH_MODE,
      toolCallId: a,
      name: "switch_mode",
      rawArgs: p,
      params: m
    });
    const f = e.getBubbleData(g);
    if (f?.userDecision !== undefined) {
      if (f.userDecision === "accepted") {
        return this.performModeSwitch(o, u, l, true, false);
      } else {
        return new rEe({
          result: {
            case: "rejected",
            value: new dtt({
              reason: "User rejected the mode switch"
            })
          }
        });
      }
    }
    if (u === l) {
      e.setBubbleData(g, {
        userDecision: "accepted"
      });
      return new rEe({
        result: {
          case: "approved",
          value: new Rfi()
        }
      });
    }
    if (this.handledToolCalls.has(a)) {
      return new rEe({
        result: {
          case: "rejected",
          value: new dtt({
            reason: "Mode switch already handled"
          })
        }
      });
    }
    this.handledToolCalls.add(a);
    const A = `${u}->${l}`;
    if ((i.applicationUserPersistentStorage?.composerState?.autoRejectedModeTransitions || []).includes(A)) {
      if (g) {
        e.setBubbleData(g, {
          userDecision: "rejected"
        });
      }
      const B = s.getComposerData(this.context.composerDataHandle);
      r.trackEvent("switch_mode_invoked", {
        fromModeId: u,
        toModeId: l,
        accepted: false,
        model: B?.modelConfig?.modelName
      });
      this.handledToolCalls.delete(a);
      return new rEe({
        result: {
          case: "rejected",
          value: new dtt({
            reason: `Mode switch from ${u} to ${l} is disabled by user preference`
          })
        }
      });
    }
    if ((i.applicationUserPersistentStorage?.composerState?.autoApprovedModeTransitions || []).includes(A)) {
      if (g) {
        e.setBubbleData(g, {
          userDecision: "accepted"
        });
      }
      this.handledToolCalls.delete(a);
      return this.performModeSwitch(o, u, l, true, true);
    } else {
      this.context.trackTrajectoryStopped?.({
        composerId: o,
        invocationID: this.context.generationUUID,
        toolCallId: a,
        stop_category: "needs_user_approval",
        stop_source: "other",
        reason_code: "switch_mode.needs_approval"
      });
      return new Promise(B => {
        const R = e.addPendingDecision(g, an.SWITCH_MODE, a, N => {
          R();
          this.handledToolCalls.delete(a);
          if (N) {
            B(this.performModeSwitch(o, u, l, true, false));
          } else {
            const M = s.getComposerData(this.context.composerDataHandle);
            r.trackEvent("switch_mode_invoked", {
              fromModeId: u,
              toModeId: l,
              accepted: false,
              model: M?.modelConfig?.modelName
            });
            B(new rEe({
              result: {
                case: "rejected",
                value: new dtt({
                  reason: "User rejected the mode switch"
                })
              }
            }));
          }
        }, true);
      });
    }
  }
  performModeSwitch(n, e, t, i, r) {
    const s = this.getComposerModesService();
    const o = this.getComposerDataService();
    const a = this.getAnalyticsService();
    const l = o.getComposerData(this.context.composerDataHandle);
    a.trackEvent("switch_mode_invoked", {
      fromModeId: e,
      toModeId: t,
      accepted: true,
      model: l?.modelConfig?.modelName
    });
    if (t === "plan") {
      a.trackEvent("composer.plan_mode.entry_point", {
        entrypoint: "switch_mode_tool",
        model: l?.modelConfig?.modelName || "unknown"
      });
    }
    s.setComposerUnifiedMode(this.context.composerDataHandle, t);
    return new rEe({
      result: {
        case: "approved",
        value: new Rfi()
      }
    });
  }
};
