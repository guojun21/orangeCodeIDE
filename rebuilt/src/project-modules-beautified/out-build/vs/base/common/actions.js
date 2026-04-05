"use strict";

// Module: out-build/vs/base/common/actions.js
// Offset: 574641 (bundle byte offset)
// Size: 2334 bytes
yn();
rt();
Ht();
Hs = class extends at {
  constructor(n, e = "", t = "", i = true, r) {
    super();
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._enabled = true;
    this._id = n;
    this._label = e;
    this._cssClass = t;
    this._enabled = i;
    this._actionCallback = r;
  }
  get id() {
    return this._id;
  }
  get label() {
    return this._label;
  }
  set label(n) {
    this._setLabel(n);
  }
  _setLabel(n) {
    if (this._label !== n) {
      this._label = n;
      this._onDidChange.fire({
        label: n
      });
    }
  }
  get tooltip() {
    return this._tooltip || "";
  }
  set tooltip(n) {
    this._setTooltip(n);
  }
  _setTooltip(n) {
    if (this._tooltip !== n) {
      this._tooltip = n;
      this._onDidChange.fire({
        tooltip: n
      });
    }
  }
  get class() {
    return this._cssClass;
  }
  set class(n) {
    this._setClass(n);
  }
  _setClass(n) {
    if (this._cssClass !== n) {
      this._cssClass = n;
      this._onDidChange.fire({
        class: n
      });
    }
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(n) {
    this._setEnabled(n);
  }
  _setEnabled(n) {
    if (this._enabled !== n) {
      this._enabled = n;
      this._onDidChange.fire({
        enabled: n
      });
    }
  }
  get checked() {
    return this._checked;
  }
  set checked(n) {
    this._setChecked(n);
  }
  _setChecked(n) {
    if (this._checked !== n) {
      this._checked = n;
      this._onDidChange.fire({
        checked: n
      });
    }
  }
  async run(n, e) {
    if (this._actionCallback) {
      await this._actionCallback(n);
    }
  }
};
jD = class extends at {
  constructor() {
    super(...arguments);
    this._onWillRun = this._register(new Qe());
    this.onWillRun = this._onWillRun.event;
    this._onDidRun = this._register(new Qe());
    this.onDidRun = this._onDidRun.event;
  }
  async run(n, e) {
    if (!n.enabled) {
      return;
    }
    this._onWillRun.fire({
      action: n
    });
    let t;
    try {
      await this.runAction(n, e);
    } catch (i) {
      t = i;
    }
    this._onDidRun.fire({
      action: n,
      error: t
    });
  }
  async runAction(n, e) {
    await n.run(e);
  }
};
id = class rad {
  constructor() {
    this.id = rad.ID;
    this.label = "";
    this.tooltip = "";
    this.class = "separator";
    this.enabled = false;
    this.checked = false;
  }
  static join(...e) {
    let t = [];
    for (const i of e) {
      if (i.length) {
        if (t.length) {
          t = [...t, new rad(), ...i];
        } else {
          t = i;
        }
      }
    }
    return t;
  }
  static {
    this.ID = "vs.actions.separator";
  }
  async run() {}
};
KP = class {
  get actions() {
    return this._actions;
  }
  constructor(n, e, t, i) {
    this.tooltip = "";
    this.enabled = true;
    this.checked = undefined;
    this.id = n;
    this.label = e;
    this.class = i;
    this._actions = t;
  }
  async run() {}
};
gah = class uJb extends Hs {
  static {
    this.ID = "vs.actions.empty";
  }
  constructor() {
    super(uJb.ID, _(44, null), undefined, false);
  }
};
