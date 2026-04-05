"use strict";

// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/createPlan/createPlanQueryHandler.js
// Offset: 30606582 (bundle byte offset)
// Size: 1679 bytes
$J();
oP();
UF();
Uv();
bha();
Wu();
Akf = class {
  constructor(n) {
    this.context = n;
  }
  shouldAutoOpenPlanEditor(n) {
    const e = this.context.instantiationService.invokeFunction(t => t.get(rw));
    return e.isFocused(n) || e.isPrevBubbleFocused(n);
  }
  getToolFormer() {
    const e = this.context.composerDataHandle.data.capabilities.find(t => t.type === ko.TOOL_FORMER);
    if (!e) {
      throw new Error("ToolFormer not found");
    }
    return e;
  }
  isMultiPlanEnabled() {
    return this.context.instantiationService.invokeFunction(e => e.get(Tl)).checkFeatureGate("file_based_plan_edits") === true;
  }
  async handleCreatePlanRequest(n) {
    const e = this.context.instantiationService.invokeFunction(m => m.get(IV));
    const t = this.context.composerDataHandle.data.composerId;
    const i = n.toolCallId;
    const r = n.args;
    const s = this.isMultiPlanEnabled();
    const o = this.getToolFormer();
    const a = o.getBubbleIdByToolCallId(i);
    const l = a ? o.getBubbleData(a) : undefined;
    const u = l?.additionalData?.planUri;
    let d;
    if (u) {
      d = dEe(u).fsPath;
    } else {
      try {
        const m = r?.name || undefined;
        const p = r?.overview || "";
        const g = r?.todos?.map(A => ({
          id: A.id || "",
          content: A.content,
          status: "pending",
          dependencies: []
        })) || [];
        let f;
        if (s) {
          const A = m ?? e.getPlanTitle(r?.plan ?? "");
          f = await e.createPlanFile(t, A, p, g, r?.plan ?? "");
        } else {
          f = await e.getOrCreatePlanFile(t, m, p, g, r?.plan ?? "");
        }
        d = f.fsPath;
        if (this.shouldAutoOpenPlanEditor(t)) {
          await e.openPlanInEditor(f, {
            stealFocus: false,
            composerId: t
          });
        }
        if (a) {
          o.setBubbleData(a, {
            additionalData: {
              ...l?.additionalData,
              planUri: f.toString(),
              hasOpenedEditor: true
            }
          });
        }
      } catch (m) {
        console.error("[CreatePlanQueryHandler] Failed to create plan file in fallback path:", m);
      }
    }
    return new fha({
      result: new gha({
        result: {
          case: "success",
          value: new vVl()
        },
        planUri: d ?? ""
      })
    });
  }
};
