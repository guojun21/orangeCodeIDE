"use strict";

// Module: out-build/vs/base/browser/ui/actionbar/actionViewItems.js
// Offset: 2114965 (bundle byte offset)
// Size: 6427 bytes
Ay();
dz();
ri();
Dx();
mb();
ubt();
nl();
rt();
_r();
Js();
S0h();
Ht();
O6();
w3 = class extends at {
  get action() {
    return this._action;
  }
  constructor(n, e, t = {}) {
    super();
    this.options = t;
    this._context = n || this;
    this._action = e;
    if (e instanceof Hs) {
      this._register(e.onDidChange(i => {
        if (this.element) {
          this.handleActionChangeEvent(i);
        }
      }));
    }
  }
  handleActionChangeEvent(n) {
    if (n.enabled !== undefined) {
      this.updateEnabled();
    }
    if (n.checked !== undefined) {
      this.updateChecked();
    }
    if (n.class !== undefined) {
      this.updateClass();
    }
    if (n.label !== undefined) {
      this.updateLabel();
      this.updateTooltip();
    }
    if (n.tooltip !== undefined) {
      this.updateTooltip();
    }
  }
  get actionRunner() {
    this._actionRunner ||= this._register(new jD());
    return this._actionRunner;
  }
  set actionRunner(n) {
    this._actionRunner = n;
  }
  isEnabled() {
    return this._action.enabled;
  }
  setActionContext(n) {
    this._context = n;
  }
  render(n) {
    const e = this.element = n;
    this._register(E1.addTarget(n));
    const t = this.options && this.options.draggable;
    if (t) {
      n.draggable = true;
      if (u3) {
        this._register(ei(n, ir.DRAG_START, i => i.dataTransfer?.setData(fT.TEXT, this._action.label)));
      }
    }
    this._register(ei(e, MA.Tap, i => this.onClick(i, true)));
    this._register(ei(e, ir.MOUSE_DOWN, i => {
      if (!t) {
        zu.stop(i, true);
      }
      if (this._action.enabled && i.button === 0) {
        e.classList.add("active");
      }
    }));
    if (Fs) {
      this._register(ei(e, ir.CONTEXT_MENU, i => {
        if (i.button === 0 && i.ctrlKey === true) {
          this.onClick(i);
        }
      }));
    }
    this._register(ei(e, ir.CLICK, i => {
      zu.stop(i, true);
      if (!this.options || !this.options.isMenu) {
        this.onClick(i);
      }
    }));
    this._register(ei(e, ir.DBLCLICK, i => {
      zu.stop(i, true);
    }));
    [ir.MOUSE_UP, ir.MOUSE_OUT].forEach(i => {
      this._register(ei(e, i, r => {
        zu.stop(r);
        e.classList.remove("active");
      }));
    });
  }
  onClick(n, e = false) {
    zu.stop(n, true);
    const t = gA(this._context) ? this.options?.useEventAsContext ? n : {
      preserveFocus: e
    } : this._context;
    this.actionRunner.run(this._action, t);
  }
  focus() {
    if (this.element) {
      this.element.tabIndex = 0;
      this.element.focus();
      this.element.classList.add("focused");
    }
  }
  isFocused() {
    return !!this.element?.classList.contains("focused");
  }
  blur() {
    if (this.element) {
      this.element.blur();
      this.element.tabIndex = -1;
      this.element.classList.remove("focused");
    }
  }
  setFocusable(n) {
    if (this.element) {
      this.element.tabIndex = n ? 0 : -1;
    }
  }
  get trapsArrowNavigation() {
    return false;
  }
  updateEnabled() {}
  updateLabel() {}
  getClass() {
    return this.action.class;
  }
  getTooltip() {
    return this.action.tooltip;
  }
  updateTooltip() {
    if (!this.element) {
      return;
    }
    const n = this.getTooltip() ?? "";
    this.updateAriaLabel();
    if (this.options.hoverDelegate?.showNativeHover) {
      this.element.title = n;
    } else if (!this.customHover && n !== "") {
      const e = this.options.hoverDelegate ?? Sm("element");
      this.customHover = this._store.add(q4().setupManagedHover(e, this.element, n));
    } else if (this.customHover) {
      this.customHover.update(n);
    }
  }
  updateAriaLabel() {
    if (this.element) {
      const n = this.getTooltip() ?? "";
      this.element.setAttribute("aria-label", n);
    }
  }
  updateClass() {}
  updateChecked() {}
  dispose() {
    if (this.element) {
      this.element.remove();
      this.element = undefined;
    }
    this._context = undefined;
    super.dispose();
  }
};
aI = class extends w3 {
  constructor(n, e, t) {
    super(n, e, t);
    this.options = t;
    this.options.icon = t.icon !== undefined ? t.icon : false;
    this.options.label = t.label !== undefined ? t.label : true;
    this.cssClass = "";
  }
  render(n) {
    super.render(n);
    Kd(this.element);
    const e = document.createElement("a");
    e.classList.add("action-label");
    e.setAttribute("role", this.getDefaultAriaRole());
    this.label = e;
    this.element.appendChild(e);
    if (this.options.label && this.options.keybinding && !this.options.keybindingNotRenderedWithLabel) {
      const t = document.createElement("span");
      t.classList.add("keybinding");
      t.textContent = this.options.keybinding;
      this.element.appendChild(t);
    }
    this.updateClass();
    this.updateLabel();
    this.updateTooltip();
    this.updateEnabled();
    this.updateChecked();
  }
  getDefaultAriaRole() {
    if (this._action.id === id.ID) {
      return "presentation";
    } else if (this.options.isMenu) {
      return "menuitem";
    } else if (this.options.isTabList) {
      return "tab";
    } else {
      return "button";
    }
  }
  focus() {
    if (this.label) {
      this.label.tabIndex = 0;
      this.label.focus();
    }
  }
  isFocused() {
    return !!this.label && this.label?.tabIndex === 0;
  }
  blur() {
    if (this.label) {
      this.label.tabIndex = -1;
    }
  }
  setFocusable(n) {
    if (this.label) {
      this.label.tabIndex = n ? 0 : -1;
    }
  }
  updateLabel() {
    if (this.options.label && this.label) {
      this.label.textContent = this.action.label;
    }
  }
  getTooltip() {
    let n = null;
    if (this.action.tooltip) {
      n = this.action.tooltip;
    } else if (this.action.label) {
      n = this.action.label;
      if (this.options.keybinding) {
        n = _(0, null, n, this.options.keybinding);
      }
    }
    return n ?? undefined;
  }
  updateClass() {
    if (this.cssClass && this.label) {
      this.label.classList.remove(...this.cssClass.split(" "));
    }
    if (this.options.icon) {
      this.cssClass = this.getClass();
      if (this.label) {
        this.label.classList.add("codicon");
        if (this.cssClass) {
          this.label.classList.add(...this.cssClass.split(" "));
        }
      }
      this.updateEnabled();
    } else {
      this.label?.classList.remove("codicon");
    }
  }
  updateEnabled() {
    if (this.action.enabled) {
      if (this.label) {
        this.label.removeAttribute("aria-disabled");
        this.label.classList.remove("disabled");
      }
      this.element?.classList.remove("disabled");
    } else {
      if (this.label) {
        this.label.setAttribute("aria-disabled", "true");
        this.label.classList.add("disabled");
      }
      this.element?.classList.add("disabled");
    }
  }
  updateAriaLabel() {
    if (this.label) {
      const n = this.getTooltip() ?? "";
      this.label.setAttribute("aria-label", n);
    }
  }
  updateChecked() {
    if (this.label) {
      if (this.action.checked !== undefined) {
        this.label.classList.toggle("checked", this.action.checked);
        if (this.options.isTabList) {
          this.label.setAttribute("aria-selected", this.action.checked ? "true" : "false");
        } else {
          this.label.setAttribute("aria-checked", this.action.checked ? "true" : "false");
          this.label.setAttribute("role", "checkbox");
        }
      } else {
        this.label.classList.remove("checked");
        this.label.removeAttribute(this.options.isTabList ? "aria-selected" : "aria-checked");
        this.label.setAttribute("role", this.getDefaultAriaRole());
      }
    }
  }
};
v3n = class extends w3 {
  constructor(n, e, t, i, r, s, o) {
    super(n, e);
    this.selectBox = new k9e(t, i, r, s, o);
    this.selectBox.setFocusable(false);
    this._register(this.selectBox);
    this.registerListeners();
  }
  setOptions(n, e) {
    this.selectBox.setOptions(n, e);
  }
  select(n) {
    this.selectBox.select(n);
  }
  registerListeners() {
    this._register(this.selectBox.onDidSelect(n => this.runAction(n.selected, n.index)));
  }
  runAction(n, e) {
    this.actionRunner.run(this._action, this.getActionContext(n, e));
  }
  getActionContext(n, e) {
    return n;
  }
  setFocusable(n) {
    this.selectBox.setFocusable(n);
  }
  focus() {
    this.selectBox?.focus();
  }
  blur() {
    this.selectBox?.blur();
  }
  render(n) {
    this.selectBox.render(n);
  }
};
