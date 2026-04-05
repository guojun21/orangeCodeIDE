"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatQuotaExceededPart.js
// Offset: 32832454 (bundle byte offset)
// Size: 1513 bytes
ri();
fk();
qi();
yn();
tg();
rt();
Jr();
Js();
Ht();
hs();
Pa();
$b();
Nl();
kk();
BSi = Ct;
Yyu = false;
Zyu = false;
Txa = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this._onDidChangeHeight = this._register(new Qe());
    this.onDidChangeHeight = this._onDidChangeHeight.event;
    const o = e.errorDetails;
    Kd(!!o, "errorDetails");
    this.domNode = BSi(".chat-quota-error-widget");
    Rt(this.domNode, BSi("span")).classList.add(...Qt.asClassNameArray(Be.warning));
    const l = Rt(this.domNode, BSi(".chat-quota-error-message"));
    const u = t.render(new _c(o.message));
    Rt(l, u.element);
    const d = this._register(new pw(l, {
      ...lE,
      supportIcons: true
    }));
    d.label = _(5224, null);
    d.element.classList.add("chat-quota-error-button");
    let m = false;
    const p = () => {
      if (!!Zyu && !m) {
        m = true;
        Rt(l, BSi(".chat-quota-wait-warning", undefined, _(5225, null)));
      }
    };
    let g = false;
    const f = () => {
      if (!Yyu || g) {
        return;
      }
      g = true;
      const A = this._register(new pw(l, {
        buttonBackground: undefined,
        buttonForeground: zo(PY)
      }));
      A.element.classList.add("chat-quota-error-secondary-button");
      A.label = _(5226, null);
      this._onDidChangeHeight.fire();
      this._register(A.onDidClick(() => {
        const w = i.getWidgetBySessionId(e.sessionId);
        if (w) {
          w.rerunLastRequest();
          Zyu = true;
          p();
        }
      }));
    };
    this._register(d.onDidClick(async () => {
      const A = "workbench.action.chat.upgradePlan";
      s.publicLog2("workbenchActionExecuted", {
        id: A,
        from: "chat-response"
      });
      await r.executeCommand(A);
      Yyu = true;
      f();
    }));
    f();
    p();
  }
  hasSameContent(e) {
    return true;
  }
};
Txa = __decorate([__param(2, M1), __param(3, fr), __param(4, ea)], Txa);
