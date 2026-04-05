"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/viewsWelcome/chatViewWelcomeController.js
// Offset: 32885302 (bundle byte offset)
// Size: 3192 bytes
ri();
fk();
bS();
yn();
rt();
oN();
Ht();
si();
Wt();
jr();
Fc();
$b();
hR();
guy();
wEt = Ct;
Wxa = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this.container = e;
    this.delegate = t;
    this.location = i;
    this.contextKeyService = r;
    this.instantiationService = s;
    this.enabled = false;
    this.enabledDisposables = this._register(new Ut());
    this.renderDisposables = this._register(new Ut());
    this.element = Rt(this.container, Ct(".chat-view-welcome"));
    this._register(In.runAndSubscribe(t.onDidChangeViewWelcomeState, () => this.update()));
    this._register(Gxa.onDidChange(() => this.update(true)));
  }
  update(e) {
    const t = this.delegate.shouldShowWelcome();
    if (this.enabled === t && !e) {
      return;
    }
    this.enabled = t;
    this.enabledDisposables.clear();
    if (!t) {
      this.container.classList.toggle("chat-view-welcome-visible", false);
      this.renderDisposables.clear();
      return;
    }
    const i = Gxa.get();
    if (i.length) {
      this.render(i);
      const r = new Set(i.flatMap(s => s.when.keys()));
      this.enabledDisposables.add(this.contextKeyService.onDidChangeContext(s => {
        if (s.affectsSome(r)) {
          this.render(i);
        }
      }));
    }
  }
  render(e) {
    this.renderDisposables.clear();
    th(this.element);
    const t = e.filter(r => this.contextKeyService.contextMatchesRules(r.when));
    let i;
    for (const r of t) {
      if (typeof r.content == "function") {
        i = r;
        break;
      }
    }
    i = i ?? t.at(0);
    if (i) {
      const r = {
        icon: i.icon,
        title: i.title,
        message: i.content
      };
      const s = this.renderDisposables.add(this.instantiationService.createInstance(FSi, r, {
        firstLinkToButton: true,
        location: this.location
      }));
      this.element.appendChild(s.element);
      this.container.classList.toggle("chat-view-welcome-visible", true);
    } else {
      this.container.classList.toggle("chat-view-welcome-visible", false);
    }
  }
};
Wxa = __decorate([__param(3, wi), __param(4, ln)], Wxa);
FSi = class extends at {
  constructor(e, t, i, r, s, o) {
    super();
    this.content = e;
    this.openerService = i;
    this.instantiationService = r;
    this.logService = s;
    this.element = Ct(".chat-welcome-view");
    try {
      const a = this.instantiationService.createInstance(sL, {});
      const l = Rt(this.element, wEt(".chat-welcome-view-icon"));
      if (e.icon) {
        l.appendChild(tL(e.icon));
      }
      const u = Rt(this.element, wEt(".chat-welcome-view-title"));
      u.textContent = e.title;
      if (typeof e.message != "function" && t?.isWidgetAgentWelcomeViewContent) {
        const m = Rt(this.element, wEt(".chat-welcome-view-indicator-container"));
        Rt(m, wEt(".chat-welcome-view-subtitle", undefined, _(5583, null)));
      }
      const d = Rt(this.element, wEt(".chat-welcome-view-message"));
      if (typeof e.message == "function") {
        Rt(d, e.message(this._register(new Ut())));
      } else {
        const m = this._register(a.render(e.message));
        const p = t?.firstLinkToButton ? m.element.querySelector("a") : undefined;
        if (p) {
          const g = p.getAttribute("data-href");
          const f = this._register(new pw(p.parentElement, lE));
          f.label = p.textContent ?? "";
          if (g) {
            this._register(f.onDidClick(() => {
              this.openerService.open(g, {
                allowCommands: true
              });
            }));
          }
          p.replaceWith(f.element);
        }
        Rt(d, m.element);
      }
      if (e.tips) {
        const m = Rt(this.element, wEt(".chat-welcome-view-tips"));
        const p = this._register(a.render(e.tips));
        m.appendChild(p.element);
      }
    } catch (a) {
      this.logService.error("Failed to render chat view welcome content", a);
    }
  }
};
FSi = __decorate([__param(2, Ja), __param(3, ln), __param(4, Rr), __param(5, EI)], FSi);
