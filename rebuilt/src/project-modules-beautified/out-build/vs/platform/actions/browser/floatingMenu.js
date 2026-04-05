"use strict";

// Module: out-build/vs/platform/actions/browser/floatingMenu.js
// Offset: 33425213 (bundle byte offset)
// Size: 2845 bytes
ri();
$4();
yn();
rt();
dg();
dr();
si();
Wt();
Nl();
__u = class extends HR {
  constructor(n) {
    super();
    this.label = n;
    this._onClick = this._register(new Qe());
    this.onClick = this._onClick.event;
    this._domNode = Ct(".floating-click-widget");
    this._domNode.style.padding = "6px 11px";
    this._domNode.style.borderRadius = "2px";
    this._domNode.style.cursor = "pointer";
    this._domNode.style.zIndex = "1";
  }
  getDomNode() {
    return this._domNode;
  }
  render() {
    th(this._domNode);
    this._domNode.style.backgroundColor = oft(LY, zo(Wm));
    this._domNode.style.color = oft(Roe, zo(jE));
    this._domNode.style.border = `1px solid ${zo(Du)}`;
    Rt(this._domNode, Ct("")).textContent = this.label;
    this.onclick(this._domNode, () => this._onClick.fire());
  }
};
C_u = class extends HR {
  constructor(n) {
    super();
    this.buttons = n;
    this._onButtonClick = this._register(new Qe());
    this.onButtonClick = this._onButtonClick.event;
    this._domNode = Ct(".multi-button-floating-widget");
    this._domNode.style.display = "flex";
    this._domNode.style.gap = "8px";
    this._domNode.style.zIndex = "1";
  }
  getDomNode() {
    return this._domNode;
  }
  render() {
    th(this._domNode);
    this.buttons.forEach((n, e) => {
      const t = Ct(".floating-click-widget");
      t.style.padding = "6px 11px";
      t.style.borderRadius = "2px";
      t.style.cursor = "pointer";
      t.style.backgroundColor = oft(LY, zo(Wm));
      t.style.color = oft(Roe, zo(jE));
      t.style.border = `1px solid ${zo(Du)}`;
      Rt(t, Ct("")).textContent = n.label;
      this.onclick(t, () => this._onButtonClick.fire(e));
      this._domNode.appendChild(t);
    });
  }
};
Cki = class extends at {
  constructor(e, t, i) {
    super();
    this.renderEmitter = new Qe();
    this.onDidRender = this.renderEmitter.event;
    this.menu = this._register(t.createMenu(e, i));
  }
  render() {
    const e = this._register(new Ut());
    const t = () => {
      e.clear();
      if (!this.isVisible()) {
        return;
      }
      let i = xW(this.menu.getActions({
        renderShortTitle: true,
        shouldForwardArgs: true
      }));
      if (i.length !== 0) {
        if (i.length > 2) {
          i = i.slice(0, 2);
        }
        if (i.length === 1) {
          const [r] = i;
          const s = this.createWidget(r, e);
          e.add(s);
          e.add(s.onClick(() => r.run(this.getActionArg())));
          s.render();
        } else {
          const r = this.createMultiWidget(i, e);
          e.add(r);
          e.add(r.onButtonClick(s => {
            i[s].run(this.getActionArg());
          }));
          r.render();
        }
      }
    };
    this._register(this.menu.onDidChange(t));
    t();
  }
  getActionArg() {}
  isVisible() {
    return true;
  }
};
Cki = __decorate([__param(1, xd), __param(2, wi)], Cki);
tIa = class extends Cki {
  constructor(e, t, i, r) {
    super(e.menuId, i, r);
    this.options = e;
    this.instantiationService = t;
    this.render();
  }
  createWidget(e, t) {
    const i = this.instantiationService.createInstance(__u, e.label);
    const r = i.getDomNode();
    this.options.container.appendChild(r);
    t.add($i(() => r.remove()));
    return i;
  }
  createMultiWidget(e, t) {
    const i = e.map(o => ({
      label: o.label,
      action: o
    }));
    const r = this.instantiationService.createInstance(C_u, i);
    const s = r.getDomNode();
    this.options.container.appendChild(s);
    t.add($i(() => s.remove()));
    return r;
  }
  getActionArg() {
    return this.options.getActionArg();
  }
};
tIa = __decorate([__param(1, ln), __param(2, xd), __param(3, wi)], tIa);
