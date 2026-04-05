"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatProgressContentPart.js
// Offset: 32830447 (bundle byte offset)
// Size: 2007 bytes
ri();
Ew();
qi();
tg();
rt();
Jr();
Yn();
Ht();
Wt();
Wq();
o5f();
mxa();
yEt = class extends at {
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this.instantiationService = a;
    this.chatMarkdownAnchorService = l;
    const u = i.content.slice(i.contentIndex + 1);
    this.showSpinner = r ?? Y5f(u, i.element);
    this.isHidden = s !== true && u.some(g => g.kind !== "progressMessage");
    if (this.isHidden) {
      this.domNode = Ct("");
      return;
    }
    if (this.showSpinner) {
      W_(e.content.value);
    }
    const d = o || (this.showSpinner ? Qt.modify(Be.loading, "spin") : Be.check);
    const m = this._register(t.render(e.content));
    m.element.classList.add("progress-step");
    this.renderFileWidgets(m.element);
    this.domNode = Ct(".progress-container");
    const p = Ct("div");
    p.classList.add(...Qt.asClassNameArray(d));
    Rt(this.domNode, p);
    Rt(this.domNode, m.element);
  }
  renderFileWidgets(e) {
    e.querySelectorAll("a").forEach(i => {
      if (!i.textContent?.trim()) {
        const r = i.getAttribute("data-href");
        const s = r ? je.parse(r) : undefined;
        if (s?.scheme) {
          const o = this._register(this.instantiationService.createInstance(gSi, i, {
            kind: "inlineReference",
            inlineReference: s
          }));
          this._register(this.chatMarkdownAnchorService.register(o));
        }
      }
    });
  }
  hasSameContent(e, t, i) {
    if (t.some(s => s.kind !== "progressMessage") && !this.isHidden) {
      return false;
    }
    const r = Y5f(t, i);
    return e.kind === "progressMessage" && this.showSpinner === r;
  }
};
yEt = __decorate([__param(6, ln), __param(7, fEt)], yEt);
xxa = class extends yEt {
  constructor(e, t, i, r, s) {
    const o = {
      kind: "progressMessage",
      content: e.isPaused ? new _c().appendText(_(5222, null)) : new _c().appendText(_(5223, null))
    };
    super(o, t, i, undefined, undefined, e.isPaused ? Be.debugPause : undefined, r, s);
    this.workingProgress = e;
  }
  hasSameContent(e, t, i) {
    return e.kind === "working" && this.workingProgress.isPaused === e.isPaused;
  }
};
xxa = __decorate([__param(3, ln), __param(4, fEt)], xxa);
Z5f = class {
  constructor(n, e) {
    this.domNode = Ct(".progress-container");
    const t = Ct("div");
    t.classList.add(...Qt.asClassNameArray(e));
    Rt(this.domNode, t);
    n.classList.add("progress-step");
    Rt(this.domNode, n);
  }
};
