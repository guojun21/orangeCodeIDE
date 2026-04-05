"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/actions/chatActions.js
// Offset: 28342236 (bundle byte offset)
// Size: 2249 bytes
nl();
Vs();
qi();
A9();
yn();
tg();
rt();
_r();
Jr();
Yn();
Cu();
tl();
Tq();
Ht();
L5o();
Snt();
dr();
hs();
Ei();
si();
Av();
ru();
Wt();
So();
Fc();
U$();
Kl();
Pa();
jh();
od();
ss();
wm();
zp();
Bp();
v0();
_E();
Yau();
EV();
xS();
Wq();
hcu();
SS();
gcu();
wie();
kk();
Ckt();
a8A();
Stf();
cO = dt(5004, "Chat");
xtf = "workbench.action.chat.open";
bcu = "workbench.action.chat.triggerSetup";
vcu = "workbench.action.chat.toggle";
Ttf = "workbench.action.chat.openQuotaExceededDialog";
l8A = {
  documentationUrl: av.defaultChatAgent?.documentationUrl ?? "",
  manageSettingsUrl: av.defaultChatAgent?.manageSettingsUrl ?? "",
  managePlanUrl: av.defaultChatAgent?.managePlanUrl ?? "",
  enterpriseProviderId: av.defaultChatAgent?.enterpriseProviderId ?? "",
  completionsAdvancedSetting: av.defaultChatAgent?.completionsAdvancedSetting ?? "",
  completionsMenuCommand: av.defaultChatAgent?.completionsMenuCommand ?? ""
};
Dt(class extends rn {
  constructor() {
    super({
      id: "workbench.action.chat.resetTrustedTools",
      title: dt(5017, "Reset Tool Confirmations"),
      category: cO,
      f1: true
    });
  }
  run(e) {
    e.get(yie).resetToolAutoConfirmation();
    e.get(ms).info(_(4991, null));
  }
});
Acu = class extends at {
  static {
    this.ID = "workbench.contrib.copilotTitleBarMenuRendering";
  }
  constructor(e, t, i, r) {
    super();
    const s = e.register(st.CommandCenter, st.ChatTitleBarMenu, (o, a) => {
      if (!(o instanceof h2)) {
        return;
      }
      const l = Sh({
        id: "copilot.titleBarMenuRendering.more",
        label: _(4992, null),
        run() {}
      });
      const u = i.sentiment === Akt.Installed;
      const d = i.sentiment === Akt.Disabled;
      const {
        chatQuotaExceeded: m,
        completionsQuotaExceeded: p
      } = i.quotas;
      const g = i.entitlement === TT.Unknown;
      const f = r.getValue("chat.setupFromDialog");
      let A = vcu;
      let w = _(4993, null);
      let C = Be.copilot;
      if (!u && (!f || d)) {
        A = bcu;
        w = _(4994, null);
      } else if (u && g) {
        A = f ? bcu : vcu;
        w = _(4995, null);
        C = Be.copilotNotConnected;
      } else if (u && (m || p)) {
        A = Ttf;
        if (m && !p) {
          w = _(4996, null);
        } else if (p && !m) {
          w = _(4997, null);
        } else {
          w = _(4998, null);
        }
        C = Be.copilotWarning;
      }
      return t.createInstance(Iye, t.createInstance(Ub, {
        id: A,
        title: w,
        icon: C
      }, undefined, undefined, undefined, undefined), l, o.actions, "", {
        ...a,
        skipTelemetry: true
      });
    }, In.any(i.onDidChangeSentiment, i.onDidChangeQuotaExceeded, i.onDidChangeEntitlement, In.filter(r.onDidChangeConfiguration, o => o.affectsConfiguration("chat.setupFromDialog"))));
    Cte(s);
  }
};
Acu = __decorate([__param(0, O3t), __param(1, ln), __param(2, uyi), __param(3, Fn)], Acu);
