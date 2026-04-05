"use strict";

// Module: out-build/vs/base/browser/ui/dropdown/dropdownActionViewItem.js
// Offset: 2277831 (bundle byte offset)
// Size: 3816 bytes
Ht();
nl();
qi();
yn();
Jr();
ri();
Tb();
Rx();
O6();
mb();
NCh();
OCh();
VH = class extends w3 {
  constructor(n, e, t, i = Object.create(null)) {
    super(null, n, i);
    this.actionItem = null;
    this._onDidChangeVisibility = this._register(new Qe());
    this.onDidChangeVisibility = this._onDidChangeVisibility.event;
    this.menuActionsOrProvider = e;
    this.contextMenuProvider = t;
    this.options = i;
    if (this.options.actionRunner) {
      this.actionRunner = this.options.actionRunner;
    }
  }
  render(n) {
    this.actionItem = n;
    const e = r => {
      this.element = Rt(r, Ct("a.action-label"));
      return this.renderLabel(this.element);
    };
    const t = Array.isArray(this.menuActionsOrProvider);
    const i = {
      contextMenuProvider: this.contextMenuProvider,
      labelRenderer: e,
      menuAsChild: this.options.menuAsChild,
      actions: t ? this.menuActionsOrProvider : undefined,
      actionProvider: t ? undefined : this.menuActionsOrProvider,
      skipTelemetry: this.options.skipTelemetry
    };
    this.dropdownMenu = this._register(new FCh(n, i));
    this._register(this.dropdownMenu.onDidChangeVisibility(r => {
      this.element?.setAttribute("aria-expanded", `${r}`);
      this._onDidChangeVisibility.fire(r);
    }));
    this.dropdownMenu.menuOptions = {
      actionViewItemProvider: this.options.actionViewItemProvider,
      actionRunner: this.actionRunner,
      getKeyBinding: this.options.keybindingProvider,
      context: this._context
    };
    if (this.options.anchorAlignmentProvider) {
      const r = this;
      this.dropdownMenu.menuOptions = {
        ...this.dropdownMenu.menuOptions,
        get anchorAlignment() {
          return r.options.anchorAlignmentProvider();
        }
      };
    }
    this.updateTooltip();
    this.updateEnabled();
  }
  renderLabel(n) {
    let e = [];
    if (typeof this.options.classNames == "string") {
      e = this.options.classNames.split(/\s+/g).filter(t => !!t);
    } else if (this.options.classNames) {
      e = this.options.classNames;
    }
    if (!e.find(t => t === "icon")) {
      e.push("codicon");
    }
    n.classList.add(...e);
    if (this._action.label) {
      this._register(q4().setupManagedHover(this.options.hoverDelegate ?? Sm("mouse"), n, this._action.label));
    }
    return null;
  }
  setAriaLabelAttributes(n) {
    n.setAttribute("role", "button");
    n.setAttribute("aria-haspopup", "true");
    n.setAttribute("aria-expanded", "false");
    n.ariaLabel = this._action.label || "";
  }
  getTooltip() {
    let n = null;
    if (this.action.tooltip) {
      n = this.action.tooltip;
    } else if (this.action.label) {
      n = this.action.label;
    }
    return n ?? undefined;
  }
  setActionContext(n) {
    super.setActionContext(n);
    if (this.dropdownMenu) {
      if (this.dropdownMenu.menuOptions) {
        this.dropdownMenu.menuOptions.context = n;
      } else {
        this.dropdownMenu.menuOptions = {
          context: n
        };
      }
    }
  }
  show() {
    this.dropdownMenu?.show();
  }
  updateEnabled() {
    const n = !this.action.enabled;
    this.actionItem?.classList.toggle("disabled", n);
    this.element?.classList.toggle("disabled", n);
  }
};
UCh = class extends aI {
  constructor(n, e, t, i) {
    super(n, e, t);
    this.contextMenuProvider = i;
  }
  render(n) {
    super.render(n);
    if (this.element) {
      this.element.classList.add("action-dropdown-item");
      const e = {
        getActions: () => {
          const r = this.options.menuActionsOrProvider;
          if (Array.isArray(r)) {
            return r;
          } else {
            return r.getActions();
          }
        }
      };
      const t = this.options.menuActionClassNames || [];
      const i = kl("div.action-dropdown-item-separator", [kl("div", {})]).root;
      i.classList.toggle("prominent", t.includes("prominent"));
      Rt(this.element, i);
      this.dropdownMenuActionViewItem = this._register(new VH(this._register(new Hs("dropdownAction", _(8, null))), e, this.contextMenuProvider, {
        classNames: ["dropdown", ...Qt.asClassNameArray(Be.dropDownButton), ...t],
        hoverDelegate: this.options.hoverDelegate
      }));
      this.dropdownMenuActionViewItem.render(this.element);
      this._register(ei(this.element, ir.KEY_DOWN, r => {
        if (e.getActions().length === 0) {
          return;
        }
        const s = new vh(r);
        let o = false;
        if (this.dropdownMenuActionViewItem?.isFocused() && s.equals(15)) {
          o = true;
          this.dropdownMenuActionViewItem?.blur();
          this.focus();
        } else if (this.isFocused() && s.equals(17)) {
          o = true;
          this.blur();
          this.dropdownMenuActionViewItem?.focus();
        }
        if (o) {
          s.preventDefault();
          s.stopPropagation();
        }
      }));
    }
  }
  blur() {
    super.blur();
    this.dropdownMenuActionViewItem?.blur();
  }
  setFocusable(n) {
    super.setFocusable(n);
    this.dropdownMenuActionViewItem?.setFocusable(n);
  }
};
