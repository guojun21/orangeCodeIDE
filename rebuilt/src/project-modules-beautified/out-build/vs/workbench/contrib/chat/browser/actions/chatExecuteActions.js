"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/actions/chatExecuteActions.js
// Offset: 31003754 (bundle byte offset)
// Size: 6135 bytes
qi();
Jr();
Ht();
dr();
hs();
Ei();
si();
ru();
Bp();
hR();
_E();
EV();
xS();
SS();
wie();
kk();
egu();
Ice();
igu();
rgu = class extends rn {
  run(n, ...e) {
    const t = e[0];
    const i = n.get(M1);
    (t?.widget ?? i.lastFocusedWidget)?.acceptInput(t?.inputValue);
  }
};
y1t = Ee.or(qa.isRequestPaused, qa.requestInProgress.negate());
w1t = class OQb extends rgu {
  static {
    this.ID = "workbench.action.chat.submit";
  }
  constructor() {
    const e = Ee.and(Ee.or(qa.inputHasText, qa.instructionsAttached), y1t, qa.chatMode.isEqualTo(iA.Ask));
    super({
      id: OQb.ID,
      title: dt(5084, "Send and Dispatch"),
      f1: false,
      category: cO,
      icon: Be.send,
      precondition: e,
      keybinding: {
        when: qa.inChatInput,
        primary: 3,
        weight: 100
      },
      menu: [{
        id: st.ChatExecuteSecondary,
        group: "group_1",
        order: 1,
        when: qa.chatMode.isEqualTo(iA.Ask)
      }, {
        id: st.ChatExecute,
        order: 4,
        when: Ee.and(y1t, qa.chatMode.isEqualTo(iA.Ask)),
        group: "navigation"
      }]
    });
  }
};
sgu = "workbench.action.chat.toggleAgentMode";
Hry = class UQb extends rn {
  static {
    this.ID = sgu;
  }
  constructor() {
    super({
      id: UQb.ID,
      title: dt(5085, "Set Chat Mode"),
      f1: true,
      category: cO,
      precondition: Ee.and(qa.enabled, Ee.or(qa.Editing.hasToolsAgent, apn.unifiedChatEnabled), qa.requestInProgress.negate()),
      tooltip: _(5073, null),
      keybinding: {
        when: Ee.and(qa.inChatInput, apn.inEditsOrUnified),
        primary: 2137,
        weight: 100
      },
      menu: [{
        id: st.ChatExecute,
        order: 1,
        when: Ee.and(qa.enabled, Ee.or(Ee.and(qa.location.isEqualTo(zh.EditingSession), qa.Editing.hasToolsAgent), qa.inUnifiedChat)),
        group: "navigation"
      }]
    });
  }
  async run(e, ...t) {
    const i = e.get(ES);
    const r = e.get(fr);
    const s = e.get(Fn);
    const o = e.get(Ml);
    const a = _Tf(e, t);
    if (!a?.chatWidget) {
      return;
    }
    const l = t.at(0);
    const d = a.chatWidget.viewModel?.model?.getRequests().length ?? 0;
    const m = Qau(l?.mode) ?? this.getNextMode(a.chatWidget, d, s);
    const p = (!i.unifiedViewEnabled || !s.getValue(CV.Edits2Enabled) && (a.chatWidget.input.currentMode === iA.Edit || m === iA.Edit)) && d > 0;
    if (m !== a.chatWidget.input.currentMode) {
      if (p) {
        const g = _(5074, null);
        if (!a.editingSession) {
          return;
        }
        if (a.editingSession.entries.get().filter(w => w.state.get() === 0).length > 0) {
          if (!(await c8A(a.editingSession, g, o))) {
            return;
          }
        } else if (!(await o.confirm({
          title: _(5075, null),
          message: _(5076, null),
          primaryButton: _(5077, null),
          type: "info"
        })).confirmed) {
          return;
        }
      }
      a.chatWidget.input.setChatMode(m);
      if (p) {
        const g = i.unifiedViewEnabled ? ngu : kTf;
        await r.executeCommand(g);
      }
    }
  }
  getNextMode(e, t, i) {
    const r = [iA.Agent];
    if (i.getValue(CV.Edits2Enabled) || t === 0) {
      r.push(iA.Edit);
    }
    if (e.location === zh.Panel) {
      r.push(iA.Ask);
    }
    const s = r.indexOf(e.input.currentMode);
    return r[(s + 1) % r.length];
  }
};
ETf = "workbench.action.chat.toggleRequestPaused";
Jry = class $Qb extends rn {
  static {
    this.ID = ETf;
  }
  constructor() {
    super({
      id: $Qb.ID,
      title: dt(5086, "Toggle Request Paused"),
      category: cO,
      icon: Be.debugPause,
      toggled: {
        condition: qa.isRequestPaused,
        icon: Be.play,
        tooltip: _(5078, null)
      },
      tooltip: _(5079, null),
      menu: [{
        id: st.ChatExecute,
        order: 3.5,
        when: Ee.and(qa.canRequestBePaused, qa.chatMode.isEqualTo(iA.Agent), apn.inEditsOrUnified, Ee.or(qa.isRequestPaused.negate(), qa.inputHasText.negate())),
        group: "navigation"
      }]
    });
  }
  run(e, ...t) {
    const i = t[0];
    const r = e.get(M1);
    (i?.widget ?? r.lastFocusedWidget)?.togglePaused();
  }
};
ogu = "workbench.action.chat.switchToNextModel";
Gry = class qQb extends rn {
  static {
    this.ID = ogu;
  }
  constructor() {
    super({
      id: qQb.ID,
      title: dt(5087, "Switch to Next Model"),
      category: cO,
      f1: true,
      keybinding: {
        primary: 2649,
        weight: 200,
        when: qa.inChatInput
      },
      precondition: qa.enabled,
      menu: {
        id: st.ChatExecute,
        order: 3,
        group: "navigation",
        when: Ee.and(qa.languageModelsAreUserSelectable, Ee.or(Ee.equals(qa.location.key, zh.Panel), Ee.equals(qa.location.key, zh.EditingSession), Ee.equals(qa.location.key, zh.Editor), Ee.equals(qa.location.key, zh.Notebook), Ee.equals(qa.location.key, zh.Terminal)))
      }
    });
  }
  run(e, ...t) {
    e.get(M1).lastFocusedWidget?.input.switchToNextModel();
  }
};
JCa = class HQb extends rgu {
  static {
    this.ID = "workbench.action.edits.submit";
  }
  constructor() {
    const e = Ee.and(Ee.or(qa.inputHasText, qa.instructionsAttached), y1t, qa.chatMode.notEqualsTo(iA.Ask));
    super({
      id: HQb.ID,
      title: dt(5088, "Send"),
      f1: false,
      category: cO,
      icon: Be.send,
      precondition: e,
      keybinding: {
        when: qa.inChatInput,
        primary: 3,
        weight: 100
      },
      menu: [{
        id: st.ChatExecuteSecondary,
        group: "group_1",
        when: Ee.and(y1t, qa.chatMode.notEqualsTo(iA.Ask)),
        order: 1
      }, {
        id: st.ChatExecute,
        order: 4,
        when: Ee.and(Ee.or(Ee.and(qa.isRequestPaused, qa.inputHasText), qa.requestInProgress.negate()), qa.chatMode.notEqualsTo(iA.Ask)),
        group: "navigation"
      }]
    });
  }
};
Wry = class JQb extends rn {
  static {
    this.ID = "workbench.action.chat.submitWithoutDispatching";
  }
  constructor() {
    const e = Ee.and(Ee.or(qa.inputHasText, qa.instructionsAttached), y1t, qa.chatMode.isEqualTo(iA.Ask));
    super({
      id: JQb.ID,
      title: dt(5089, "Send"),
      f1: false,
      category: cO,
      precondition: e,
      keybinding: {
        when: qa.inChatInput,
        primary: 1539,
        weight: 100
      },
      menu: [{
        id: st.ChatExecuteSecondary,
        group: "group_1",
        order: 2,
        when: qa.chatMode.isEqualTo(iA.Ask)
      }]
    });
  }
  run(e, ...t) {
    const i = t[0];
    const r = e.get(M1);
    (i?.widget ?? r.lastFocusedWidget)?.acceptInput(i?.inputValue, {
      noCommandDetection: true
    });
  }
};
Qry = class GQb extends rn {
  static {
    this.ID = "workbench.action.chat.submitWithCodebase";
  }
  constructor() {
    const e = Ee.and(Ee.or(qa.inputHasText, qa.instructionsAttached), y1t);
    super({
      id: GQb.ID,
      title: dt(5090, "Send with {0}", `${Sk}codebase`),
      precondition: e,
      menu: {
        id: st.ChatExecuteSecondary,
        group: "group_1",
        order: 3,
        when: Ee.equals(qa.location.key, zh.Panel)
      },
      keybinding: {
        when: qa.inChatInput,
        primary: 2051,
        weight: 100
      }
    });
  }
  run(e, ...t) {
    const i = t[0];
    const r = e.get(M1);
    const s = i?.widget ?? r.lastFocusedWidget;
    if (!s) {
      return;
    }
    const a = e.get(yie).getToolByName("codebase");
    if (a) {
      s.input.attachmentModel.addContext({
        id: a.id,
        name: a.displayName ?? "",
        fullName: a.displayName ?? "",
        value: undefined,
        icon: Qt.isThemeIcon(a.icon) ? a.icon : undefined,
        isTool: true
      });
      s.acceptInput();
    }
  }
};
GCa = "workbench.action.chat.cancel";
agu = class WQb extends rn {
  static {
    this.ID = GCa;
  }
  constructor() {
    super({
      id: WQb.ID,
      title: dt(5093, "Cancel"),
      f1: false,
      category: cO,
      icon: Be.stopCircle,
      menu: {
        id: st.ChatExecute,
        when: Ee.and(qa.isRequestPaused.negate(), qa.requestInProgress),
        order: 4,
        group: "navigation"
      }
    });
  }
  run(e, ...t) {
    const i = t[0];
    const r = e.get(M1);
    const s = i?.widget ?? r.lastFocusedWidget;
    if (!s) {
      return;
    }
    const o = e.get(ES);
    if (s.viewModel) {
      o.cancelCurrentRequestForSession(s.viewModel.sessionId);
    }
  }
};
