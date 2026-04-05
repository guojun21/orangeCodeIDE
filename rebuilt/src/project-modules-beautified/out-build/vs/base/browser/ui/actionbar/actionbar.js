"use strict";

// Module: out-build/vs/base/browser/ui/actionbar/actionbar.js
// Offset: 2121392 (bundle byte offset)
// Size: 12209 bytes
ri();
Tb();
Rx();
mb();
nl();
yn();
rt();
Js();
S0h();
(function (n) {
  n[n.HORIZONTAL = 0] = "HORIZONTAL";
  n[n.VERTICAL = 1] = "VERTICAL";
})(k0h ||= {});
Gf = class extends at {
  constructor(n, e = {}) {
    super();
    this._actionRunnerDisposables = this._register(new Ut());
    this.viewItemDisposables = this._register(new mp());
    this.triggerKeyDown = false;
    this.focusable = true;
    this._onDidBlur = this._register(new Qe());
    this.onDidBlur = this._onDidBlur.event;
    this._onDidCancel = this._register(new Qe({
      onWillAddFirstListener: () => this.cancelHasListener = true
    }));
    this.onDidCancel = this._onDidCancel.event;
    this.cancelHasListener = false;
    this._onDidRun = this._register(new Qe());
    this.onDidRun = this._onDidRun.event;
    this._onWillRun = this._register(new Qe());
    this.onWillRun = this._onWillRun.event;
    this.options = e;
    this._context = e.context ?? null;
    this._orientation = this.options.orientation ?? 0;
    this._triggerKeys = {
      keyDown: this.options.triggerKeys?.keyDown ?? false,
      keys: this.options.triggerKeys?.keys ?? [3, 10]
    };
    this._hoverDelegate = e.hoverDelegate ?? this._register(F6());
    if (this.options.actionRunner) {
      this._actionRunner = this.options.actionRunner;
    } else {
      this._actionRunner = new jD();
      this._actionRunnerDisposables.add(this._actionRunner);
    }
    this._actionRunnerDisposables.add(this._actionRunner.onDidRun(r => this._onDidRun.fire(r)));
    this._actionRunnerDisposables.add(this._actionRunner.onWillRun(r => this._onWillRun.fire(r)));
    this.viewItems = [];
    this.focusedItem = undefined;
    this.domNode = document.createElement("div");
    this.domNode.className = "monaco-action-bar";
    let t;
    let i;
    switch (this._orientation) {
      case 0:
        t = [15];
        i = [17];
        break;
      case 1:
        t = [16];
        i = [18];
        this.domNode.className += " vertical";
        break;
    }
    this._register(ei(this.domNode, ir.KEY_DOWN, r => {
      const s = new vh(r);
      let o = true;
      const a = typeof this.focusedItem == "number" ? this.viewItems[this.focusedItem] : undefined;
      if (t && (s.equals(t[0]) || s.equals(t[1]))) {
        o = this.focusPrevious();
      } else if (i && (s.equals(i[0]) || s.equals(i[1]))) {
        o = this.focusNext();
      } else if (s.equals(9) && this.cancelHasListener) {
        this._onDidCancel.fire();
      } else if (s.equals(14)) {
        o = this.focusFirst();
      } else if (s.equals(13)) {
        o = this.focusLast();
      } else if (s.equals(2) && a instanceof w3 && a.trapsArrowNavigation) {
        o = this.focusNext(undefined, true);
      } else if (this.isTriggerKeyEvent(s)) {
        if (this._triggerKeys.keyDown) {
          this.doTrigger(s);
        } else {
          this.triggerKeyDown = true;
        }
      } else {
        o = false;
      }
      if (o) {
        s.preventDefault();
        s.stopPropagation();
      }
    }));
    this._register(ei(this.domNode, ir.KEY_UP, r => {
      const s = new vh(r);
      if (this.isTriggerKeyEvent(s)) {
        if (!this._triggerKeys.keyDown && this.triggerKeyDown) {
          this.triggerKeyDown = false;
          this.doTrigger(s);
        }
        s.preventDefault();
        s.stopPropagation();
      } else if (s.equals(2) || s.equals(1026) || s.equals(16) || s.equals(18) || s.equals(15) || s.equals(17)) {
        this.updateFocusedItem();
      }
    }));
    this.focusTracker = this._register(CC(this.domNode));
    this._register(this.focusTracker.onDidBlur(() => {
      if (_C() === this.domNode || !HS(_C(), this.domNode)) {
        this._onDidBlur.fire();
        this.previouslyFocusedItem = this.focusedItem;
        this.focusedItem = undefined;
        this.triggerKeyDown = false;
      }
    }));
    this._register(this.focusTracker.onDidFocus(() => this.updateFocusedItem()));
    this.actionsList = document.createElement("ul");
    this.actionsList.className = "actions-container";
    if (this.options.highlightToggledItems) {
      this.actionsList.classList.add("highlight-toggled");
    }
    this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar");
    if (this.options.ariaLabel) {
      this.actionsList.setAttribute("aria-label", this.options.ariaLabel);
    }
    this.domNode.appendChild(this.actionsList);
    n.appendChild(this.domNode);
  }
  refreshRole() {
    if (this.length() >= 1) {
      this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar");
    } else {
      this.actionsList.setAttribute("role", "presentation");
    }
  }
  setAriaLabel(n) {
    if (n) {
      this.actionsList.setAttribute("aria-label", n);
    } else {
      this.actionsList.removeAttribute("aria-label");
    }
  }
  setFocusable(n) {
    this.focusable = n;
    if (this.focusable) {
      const e = this.viewItems.find(t => t instanceof w3 && t.isEnabled());
      if (e instanceof w3) {
        e.setFocusable(true);
      }
    } else {
      this.viewItems.forEach(e => {
        if (e instanceof w3) {
          e.setFocusable(false);
        }
      });
    }
  }
  isTriggerKeyEvent(n) {
    let e = false;
    this._triggerKeys.keys.forEach(t => {
      e = e || n.equals(t);
    });
    return e;
  }
  updateFocusedItem() {
    for (let n = 0; n < this.actionsList.children.length; n++) {
      const e = this.actionsList.children[n];
      if (HS(_C(), e)) {
        this.focusedItem = n;
        this.viewItems[this.focusedItem]?.showHover?.();
        break;
      }
    }
  }
  get context() {
    return this._context;
  }
  set context(n) {
    this._context = n;
    this.viewItems.forEach(e => e.setActionContext(n));
  }
  get actionRunner() {
    return this._actionRunner;
  }
  set actionRunner(n) {
    this._actionRunner = n;
    this._actionRunnerDisposables.clear();
    this._actionRunnerDisposables.add(this._actionRunner.onDidRun(e => this._onDidRun.fire(e)));
    this._actionRunnerDisposables.add(this._actionRunner.onWillRun(e => this._onWillRun.fire(e)));
    this.viewItems.forEach(e => e.actionRunner = n);
  }
  getContainer() {
    return this.domNode;
  }
  hasAction(n) {
    return this.viewItems.findIndex(e => e.action.id === n.id) !== -1;
  }
  getAction(n) {
    if (typeof n == "number") {
      return this.viewItems[n]?.action;
    }
    if (wf(n)) {
      while (n.parentElement !== this.actionsList) {
        if (!n.parentElement) {
          return;
        }
        n = n.parentElement;
      }
      for (let e = 0; e < this.actionsList.childNodes.length; e++) {
        if (this.actionsList.childNodes[e] === n) {
          return this.viewItems[e].action;
        }
      }
    }
  }
  push(n, e = {}) {
    const t = Array.isArray(n) ? n : [n];
    let i = _1(e.index) ? e.index : null;
    t.forEach(r => {
      const s = document.createElement("li");
      s.className = "action-item";
      s.setAttribute("role", "presentation");
      let o;
      const a = {
        hoverDelegate: this._hoverDelegate,
        ...e,
        isTabList: this.options.ariaRole === "tablist"
      };
      if (this.options.actionViewItemProvider) {
        o = this.options.actionViewItemProvider(r, a);
      }
      o ||= new aI(this.context, r, a);
      if (!this.options.allowContextMenu) {
        this.viewItemDisposables.set(o, ei(s, ir.CONTEXT_MENU, l => {
          zu.stop(l, true);
        }));
      }
      o.actionRunner = this._actionRunner;
      o.setActionContext(this.context);
      o.render(s);
      if (this.focusable && o instanceof w3 && this.viewItems.length === 0) {
        o.setFocusable(true);
      }
      if (i === null || i < 0 || i >= this.actionsList.children.length) {
        this.actionsList.appendChild(s);
        this.viewItems.push(o);
      } else {
        this.actionsList.insertBefore(s, this.actionsList.children[i]);
        this.viewItems.splice(i, 0, o);
        i++;
      }
    });
    if (typeof this.focusedItem == "number") {
      this.focus(this.focusedItem);
    }
    this.refreshRole();
  }
  getWidth(n) {
    if (n >= 0 && n < this.actionsList.children.length) {
      const e = this.actionsList.children.item(n);
      if (e) {
        return e.clientWidth;
      }
    }
    return 0;
  }
  getHeight(n) {
    if (n >= 0 && n < this.actionsList.children.length) {
      const e = this.actionsList.children.item(n);
      if (e) {
        return e.clientHeight;
      }
    }
    return 0;
  }
  pull(n) {
    if (n >= 0 && n < this.viewItems.length) {
      this.actionsList.childNodes[n].remove();
      this.viewItemDisposables.deleteAndDispose(this.viewItems[n]);
      Bo(this.viewItems.splice(n, 1));
      this.refreshRole();
    }
  }
  clear() {
    if (!this.isEmpty()) {
      this.viewItems = Bo(this.viewItems);
      this.viewItemDisposables.clearAndDisposeAll();
      th(this.actionsList);
      this.refreshRole();
    }
  }
  length() {
    return this.viewItems.length;
  }
  isEmpty() {
    return this.viewItems.length === 0;
  }
  focus(n) {
    let e = false;
    let t;
    if (n === undefined) {
      e = true;
    } else if (typeof n == "number") {
      t = n;
    } else if (typeof n == "boolean") {
      e = n;
    }
    if (e && typeof this.focusedItem === "undefined") {
      const i = this.viewItems.findIndex(r => r.isEnabled());
      this.focusedItem = i === -1 ? undefined : i;
      this.updateFocus(undefined, undefined, true);
    } else {
      if (t !== undefined) {
        this.focusedItem = t;
      }
      this.updateFocus(undefined, undefined, true);
    }
  }
  focusFirst() {
    this.focusedItem = this.length() - 1;
    return this.focusNext(true);
  }
  focusLast() {
    this.focusedItem = 0;
    return this.focusPrevious(true);
  }
  focusNext(n, e) {
    if (typeof this.focusedItem === "undefined") {
      this.focusedItem = this.viewItems.length - 1;
    } else if (this.viewItems.length <= 1) {
      return false;
    }
    const t = this.focusedItem;
    let i;
    do {
      if (!n && this.options.preventLoopNavigation && this.focusedItem + 1 >= this.viewItems.length) {
        this.focusedItem = t;
        return false;
      }
      this.focusedItem = (this.focusedItem + 1) % this.viewItems.length;
      i = this.viewItems[this.focusedItem];
    } while (this.focusedItem !== t && (this.options.focusOnlyEnabledItems && !i.isEnabled() || i.action.id === id.ID));
    this.updateFocus(undefined, undefined, e);
    return true;
  }
  focusPrevious(n) {
    if (typeof this.focusedItem === "undefined") {
      this.focusedItem = 0;
    } else if (this.viewItems.length <= 1) {
      return false;
    }
    const e = this.focusedItem;
    let t;
    do {
      this.focusedItem = this.focusedItem - 1;
      if (this.focusedItem < 0) {
        if (!n && this.options.preventLoopNavigation) {
          this.focusedItem = e;
          return false;
        }
        this.focusedItem = this.viewItems.length - 1;
      }
      t = this.viewItems[this.focusedItem];
    } while (this.focusedItem !== e && (this.options.focusOnlyEnabledItems && !t.isEnabled() || t.action.id === id.ID));
    this.updateFocus(true);
    return true;
  }
  updateFocus(n, e, t = false) {
    if (typeof this.focusedItem === "undefined") {
      this.actionsList.focus({
        preventScroll: e
      });
    }
    if (this.previouslyFocusedItem !== undefined && this.previouslyFocusedItem !== this.focusedItem) {
      this.viewItems[this.previouslyFocusedItem]?.blur();
    }
    const i = this.focusedItem !== undefined ? this.viewItems[this.focusedItem] : undefined;
    if (i) {
      let r = true;
      if (!Aze(i.focus)) {
        r = false;
      }
      if (this.options.focusOnlyEnabledItems && Aze(i.isEnabled) && !i.isEnabled()) {
        r = false;
      }
      if (i.action.id === id.ID) {
        r = false;
      }
      if (r) {
        if (t || this.previouslyFocusedItem !== this.focusedItem) {
          i.focus(n);
          this.previouslyFocusedItem = this.focusedItem;
        }
      } else {
        this.actionsList.focus({
          preventScroll: e
        });
        this.previouslyFocusedItem = undefined;
      }
      if (r) {
        i.showHover?.();
      }
    }
  }
  doTrigger(n) {
    if (typeof this.focusedItem === "undefined") {
      return;
    }
    const e = this.viewItems[this.focusedItem];
    if (e instanceof w3) {
      const t = e._context === null || e._context === undefined ? n : e._context;
      this.run(e._action, t);
    }
  }
  async run(n, e) {
    await this._actionRunner.run(n, e);
  }
  dispose() {
    this._context = undefined;
    this.viewItems = Bo(this.viewItems);
    this.getContainer().remove();
    super.dispose();
  }
};
