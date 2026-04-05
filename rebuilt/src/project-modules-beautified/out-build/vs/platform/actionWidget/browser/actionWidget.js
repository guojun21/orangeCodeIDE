"use strict";

// Module: out-build/vs/platform/actionWidget/browser/actionWidget.js
// Offset: 2451158 (bundle byte offset)
// Size: 3395 bytes
ri();
Ov();
rt();
jSh();
Ht();
MhA();
dr();
si();
pl();
Er();
Wt();
Nl();
Rn("actionBar.toggledBackground", uVe, _(1800, null));
_Ke = {
  Visible: new Sn("codeActionMenuVisible", false, _(1801, null))
};
TRe = xi("actionWidgetService");
CKe = class extends at {
  get isVisible() {
    return _Ke.Visible.getValue(this._contextKeyService) || false;
  }
  constructor(e, t, i) {
    super();
    this._contextViewService = e;
    this._contextKeyService = t;
    this._instantiationService = i;
    this._list = this._register(new uo());
  }
  show(e, t, i, r, s, o, a) {
    const l = _Ke.Visible.bindTo(this._contextKeyService);
    const u = this._instantiationService.createInstance(n9o, e, t, i, r);
    this._contextViewService.showContextView({
      getAnchor: () => s,
      render: d => {
        l.set(true);
        return this._renderWidget(d, u, a ?? []);
      },
      onHide: d => {
        l.reset();
        this._onWidgetClosed(d);
      }
    }, o, false);
  }
  acceptSelected(e) {
    this._list.value?.acceptSelected(e);
  }
  focusPrevious() {
    this._list?.value?.focusPrevious();
  }
  focusNext() {
    this._list?.value?.focusNext();
  }
  hide(e) {
    this._list.value?.hide(e);
    this._list.clear();
  }
  clear() {
    this._list.clear();
  }
  _renderWidget(e, t, i) {
    const r = document.createElement("div");
    r.classList.add("action-widget");
    e.appendChild(r);
    this._list.value = t;
    if (this._list.value) {
      r.appendChild(this._list.value.domNode);
    } else {
      throw new Error("List has no value");
    }
    const s = new Ut();
    const o = document.createElement("div");
    const a = e.appendChild(o);
    a.classList.add("context-view-block");
    s.add(ei(a, ir.MOUSE_DOWN, g => g.stopPropagation()));
    const l = document.createElement("div");
    const u = e.appendChild(l);
    u.classList.add("context-view-pointerBlock");
    s.add(ei(u, ir.POINTER_MOVE, () => u.remove()));
    s.add(ei(u, ir.MOUSE_DOWN, () => u.remove()));
    let d = 0;
    if (i.length) {
      const g = this._createActionBar(".action-widget-action-bar", i);
      if (g) {
        r.appendChild(g.getContainer().parentElement);
        s.add(g);
        d = g.getContainer().offsetWidth;
      }
    }
    const m = this._list.value?.layout(d);
    r.style.width = `${m}px`;
    const p = s.add(CC(e));
    s.add(p.onDidBlur(() => this.hide(true)));
    return s;
  }
  _createActionBar(e, t) {
    if (!t.length) {
      return;
    }
    const i = Ct(e);
    const r = new Gf(i);
    r.push(t, {
      icon: false,
      label: true
    });
    return r;
  }
  _onWidgetClosed(e) {
    this._list.value?.hide(e);
  }
};
CKe = __decorate([__param(0, sy), __param(1, wi), __param(2, ln)], CKe);
Vi(TRe, CKe, 1);
Z3t = 1100;
Dt(class extends rn {
  constructor() {
    super({
      id: "hideCodeActionWidget",
      title: dt(1802, "Hide action widget"),
      precondition: _Ke.Visible,
      keybinding: {
        weight: Z3t,
        primary: 9,
        secondary: [1033]
      }
    });
  }
  run(n) {
    n.get(TRe).hide(true);
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "selectPrevCodeAction",
      title: dt(1803, "Select previous action"),
      precondition: _Ke.Visible,
      keybinding: {
        weight: Z3t,
        primary: 16,
        secondary: [2064],
        mac: {
          primary: 16,
          secondary: [2064, 302]
        }
      }
    });
  }
  run(n) {
    const e = n.get(TRe);
    if (e instanceof CKe) {
      e.focusPrevious();
    }
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "selectNextCodeAction",
      title: dt(1804, "Select next action"),
      precondition: _Ke.Visible,
      keybinding: {
        weight: Z3t,
        primary: 18,
        secondary: [2066],
        mac: {
          primary: 18,
          secondary: [2066, 300]
        }
      }
    });
  }
  run(n) {
    const e = n.get(TRe);
    if (e instanceof CKe) {
      e.focusNext();
    }
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: PBc,
      title: dt(1805, "Accept selected action"),
      precondition: _Ke.Visible,
      keybinding: {
        weight: Z3t,
        primary: 3,
        secondary: [2137]
      }
    });
  }
  run(n) {
    const e = n.get(TRe);
    if (e instanceof CKe) {
      e.acceptSelected();
    }
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: LBc,
      title: dt(1806, "Preview selected action"),
      precondition: _Ke.Visible,
      keybinding: {
        weight: Z3t,
        primary: 2051
      }
    });
  }
  run(n) {
    const e = n.get(TRe);
    if (e instanceof CKe) {
      e.acceptSelected(true);
    }
  }
});
