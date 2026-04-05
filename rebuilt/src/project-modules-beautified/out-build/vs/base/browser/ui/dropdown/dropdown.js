"use strict";

// Module: out-build/vs/base/browser/ui/dropdown/dropdown.js
// Offset: 2275033 (bundle byte offset)
// Size: 2798 bytes
ri();
Tb();
Dx();
O6();
mb();
nl();
yn();
NCh();
MCh = class extends jD {
  constructor(n, e) {
    super();
    this._onDidChangeVisibility = this._register(new Qe());
    this.onDidChangeVisibility = this._onDidChangeVisibility.event;
    this._element = Rt(n, Ct(".monaco-dropdown"));
    this._label = Rt(this._element, Ct(".dropdown-label"));
    let t = e.labelRenderer;
    t ||= r => {
      r.textContent = e.label || "";
      return null;
    };
    for (const r of [ir.CLICK, ir.MOUSE_DOWN, MA.Tap]) {
      this._register(ei(this.element, r, s => zu.stop(s, true)));
    }
    for (const r of [ir.MOUSE_DOWN, MA.Tap]) {
      this._register(ei(this._label, r, s => {
        if (!I6(s) || !(s.detail > 1) && s.button === 0) {
          if (this.visible) {
            this.hide();
          } else {
            this.show();
          }
        }
      }));
    }
    this._register(ei(this._label, ir.KEY_DOWN, r => {
      const s = new vh(r);
      if (s.equals(3) || s.equals(10)) {
        zu.stop(r, true);
        if (this.visible) {
          this.hide();
        } else {
          this.show();
        }
      }
    }));
    const i = t(this._label);
    if (i) {
      this._register(i);
    }
    this._register(E1.addTarget(this._label));
  }
  get element() {
    return this._element;
  }
  get label() {
    return this._label;
  }
  set tooltip(n) {
    if (this._label) {
      if (!this.hover && n !== "") {
        this.hover = this._register(q4().setupManagedHover(Sm("mouse"), this._label, n));
      } else if (this.hover) {
        this.hover.update(n);
      }
    }
  }
  show() {
    if (!this.visible) {
      this.visible = true;
      this._onDidChangeVisibility.fire(true);
    }
  }
  hide() {
    if (this.visible) {
      this.visible = false;
      this._onDidChangeVisibility.fire(false);
    }
  }
  isVisible() {
    return !!this.visible;
  }
  onEvent(n, e) {
    this.hide();
  }
  dispose() {
    super.dispose();
    this.hide();
    if (this.boxContainer) {
      this.boxContainer.remove();
      this.boxContainer = undefined;
    }
    if (this.contents) {
      this.contents.remove();
      this.contents = undefined;
    }
    if (this._label) {
      this._label.remove();
      this._label = undefined;
    }
  }
};
FCh = class extends MCh {
  constructor(n, e) {
    super(n, e);
    this._options = e;
    this._actions = [];
    this.actions = e.actions || [];
  }
  set menuOptions(n) {
    this._menuOptions = n;
  }
  get menuOptions() {
    return this._menuOptions;
  }
  get actions() {
    if (this._options.actionProvider) {
      return this._options.actionProvider.getActions();
    } else {
      return this._actions;
    }
  }
  set actions(n) {
    this._actions = n;
  }
  show() {
    super.show();
    this.element.classList.add("active");
    this._options.contextMenuProvider.showContextMenu({
      getAnchor: () => this.element,
      getActions: () => this.actions,
      getActionsContext: () => this.menuOptions ? this.menuOptions.context : null,
      getActionViewItem: (n, e) => this.menuOptions && this.menuOptions.actionViewItemProvider ? this.menuOptions.actionViewItemProvider(n, e) : undefined,
      getKeyBinding: n => this.menuOptions && this.menuOptions.getKeyBinding ? this.menuOptions.getKeyBinding(n) : undefined,
      getMenuClassName: () => this._options.menuClassName || "",
      onHide: () => this.onHide(),
      actionRunner: this.menuOptions ? this.menuOptions.actionRunner : undefined,
      anchorAlignment: this.menuOptions ? this.menuOptions.anchorAlignment : 0,
      domForShadowRoot: this._options.menuAsChild ? this.element : undefined,
      skipTelemetry: this._options.skipTelemetry
    });
  }
  hide() {
    super.hide();
  }
  onHide() {
    this.hide();
    this.element.classList.remove("active");
  }
};
