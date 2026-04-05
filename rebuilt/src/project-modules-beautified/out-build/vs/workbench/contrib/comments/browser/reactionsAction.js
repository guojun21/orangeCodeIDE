"use strict";

// Module: out-build/vs/workbench/contrib/comments/browser/reactionsAction.js
// Offset: 33188944 (bundle byte offset)
// Size: 1520 bytes
Ht();
ri();
yF();
nl();
Yn();
Rx();
Ebn = class _zb extends Hs {
  static {
    this.ID = "toolbar.toggle.pickReactions";
  }
  constructor(e, t) {
    super(_zb.ID, t || _(6021, null), "toggle-reactions", true);
    this._menuActions = [];
    this.toggleDropdownMenu = e;
  }
  run() {
    this.toggleDropdownMenu();
    return Promise.resolve(true);
  }
  get menuActions() {
    return this._menuActions;
  }
  set menuActions(e) {
    this._menuActions = e;
  }
};
m8f = class extends aI {
  constructor(n) {
    super(null, n, {});
  }
  updateLabel() {
    if (!this.label) {
      return;
    }
    const n = this.action;
    if (n.class) {
      this.label.classList.add(n.class);
    }
    if (n.icon) {
      const e = Rt(this.label, Ct(".reaction-icon"));
      const t = je.revive(n.icon);
      e.style.backgroundImage = Bx(t);
    } else {
      const e = Rt(this.label, Ct("span.reaction-label"));
      e.innerText = n.label;
    }
    if (n.count) {
      const e = Rt(this.label, Ct("span.reaction-count"));
      e.innerText = `${n.count}`;
    }
  }
  getTooltip() {
    const n = this.action;
    const e = n.enabled ? _(6022, null) : "";
    if (n.count === undefined) {
      return _(6023, null, e, n.label);
    }
    if (n.reactors === undefined || n.reactors.length === 0) {
      if (n.count === 1) {
        return _(6024, null, e, n.label);
      }
      if (n.count > 1) {
        return _(6025, null, e, n.count, n.label);
      }
    } else {
      if (n.reactors.length <= 10 && n.reactors.length === n.count) {
        return _(6026, null, e, n.reactors.join(", "), n.label);
      }
      if (n.count > 1) {
        const t = n.reactors.slice(0, 10);
        return _(6027, null, e, t.join(", "), n.count - t.length, n.label);
      }
    }
  }
};
Hwu = class Czb extends Hs {
  static {
    this.ID = "toolbar.toggle.reaction";
  }
  constructor(e, t = "", i = "", r = true, s, o, a, l) {
    super(Czb.ID, t, i, r, s);
    this.reactors = o;
    this.icon = a;
    this.count = l;
  }
};
