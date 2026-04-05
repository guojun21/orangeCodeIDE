"use strict";

// Module: out-build/vs/base/browser/ui/toolbar/toolbar.js
// Offset: 2281720 (bundle byte offset)
// Size: 4720 bytes
Ht();
nl();
qi();
yn();
rt();
Jr();
Ov();
jde();
mb();
shA();
ave = class extends at {
  constructor(n, e, t = {
    orientation: 0
  }) {
    super();
    this.submenuActionViewItems = [];
    this.hasSecondaryActions = false;
    this._onDidChangeDropdownVisibility = this._register(new foe());
    this.onDidChangeDropdownVisibility = this._onDidChangeDropdownVisibility.event;
    this.disposables = this._register(new Ut());
    t.hoverDelegate = t.hoverDelegate ?? this._register(F6());
    this.options = t;
    this.toggleMenuAction = this._register(new D5o(() => this.toggleMenuActionViewItem?.show(), t.toggleMenuTitle));
    this.element = document.createElement("div");
    this.element.className = "monaco-toolbar";
    n.appendChild(this.element);
    this.actionBar = this._register(new Gf(this.element, {
      orientation: t.orientation,
      ariaLabel: t.ariaLabel,
      actionRunner: t.actionRunner,
      allowContextMenu: t.allowContextMenu,
      highlightToggledItems: t.highlightToggledItems,
      hoverDelegate: t.hoverDelegate,
      actionViewItemProvider: (i, r) => {
        if (i.id === D5o.ID) {
          this.toggleMenuActionViewItem = new VH(i, i.menuActions, e, {
            actionViewItemProvider: this.options.actionViewItemProvider,
            actionRunner: this.actionRunner,
            keybindingProvider: this.options.getKeyBinding,
            classNames: Qt.asClassNameArray(t.moreIcon ?? Be.ellipsisTwo),
            anchorAlignmentProvider: this.options.anchorAlignmentProvider,
            menuAsChild: !!this.options.renderDropdownAsChildElement,
            skipTelemetry: this.options.skipTelemetry,
            isMenu: true,
            hoverDelegate: this.options.hoverDelegate
          });
          this.toggleMenuActionViewItem.setActionContext(this.actionBar.context);
          this.disposables.add(this._onDidChangeDropdownVisibility.add(this.toggleMenuActionViewItem.onDidChangeVisibility));
          return this.toggleMenuActionViewItem;
        }
        if (t.actionViewItemProvider) {
          const s = t.actionViewItemProvider(i, r);
          if (s) {
            return s;
          }
        }
        if (i instanceof KP) {
          const s = new VH(i, i.actions, e, {
            actionViewItemProvider: this.options.actionViewItemProvider,
            actionRunner: this.actionRunner,
            keybindingProvider: this.options.getKeyBinding,
            classNames: i.class,
            anchorAlignmentProvider: this.options.anchorAlignmentProvider,
            menuAsChild: !!this.options.renderDropdownAsChildElement,
            skipTelemetry: this.options.skipTelemetry,
            hoverDelegate: this.options.hoverDelegate
          });
          s.setActionContext(this.actionBar.context);
          this.submenuActionViewItems.push(s);
          this.disposables.add(this._onDidChangeDropdownVisibility.add(s.onDidChangeVisibility));
          return s;
        }
      }
    }));
  }
  set actionRunner(n) {
    this.actionBar.actionRunner = n;
  }
  get actionRunner() {
    return this.actionBar.actionRunner;
  }
  set context(n) {
    this.actionBar.context = n;
    this.toggleMenuActionViewItem?.setActionContext(n);
    for (const e of this.submenuActionViewItems) {
      e.setActionContext(n);
    }
  }
  getElement() {
    return this.element;
  }
  focus() {
    this.actionBar.focus();
  }
  getItemsWidth() {
    let n = 0;
    for (let e = 0; e < this.actionBar.length(); e++) {
      n += this.actionBar.getWidth(e);
    }
    return n;
  }
  getItemAction(n) {
    return this.actionBar.getAction(n);
  }
  getItemWidth(n) {
    return this.actionBar.getWidth(n);
  }
  getItemsLength() {
    return this.actionBar.length();
  }
  setAriaLabel(n) {
    this.actionBar.setAriaLabel(n);
  }
  setActions(n, e) {
    this.clear();
    const t = n ? n.slice(0) : [];
    this.hasSecondaryActions = !!e && !!(e.length > 0);
    if (this.hasSecondaryActions && e) {
      this.toggleMenuAction.menuActions = e.slice(0);
      if ((typeof this.options.moreActionPlacement == "function" ? this.options.moreActionPlacement(n, e) : this.options.moreActionPlacement ?? "end") === "start") {
        t.unshift(this.toggleMenuAction);
      } else {
        t.push(this.toggleMenuAction);
      }
    }
    t.forEach(i => {
      this.actionBar.push(i, {
        icon: this.options.icon ?? true,
        label: this.options.label ?? false,
        keybinding: this.getKeybindingLabel(i)
      });
    });
  }
  isEmpty() {
    return this.actionBar.isEmpty();
  }
  getKeybindingLabel(n) {
    return this.options.getKeyBinding?.(n)?.getLabel() ?? undefined;
  }
  clear() {
    this.submenuActionViewItems = [];
    this.disposables.clear();
    this.actionBar.clear();
  }
  dispose() {
    this.clear();
    this.disposables.dispose();
    super.dispose();
  }
};
D5o = class LGb extends Hs {
  static {
    this.ID = "toolbar.toggle.more";
  }
  constructor(e, t) {
    t = t || _(30, null);
    super(LGb.ID, t, undefined, true);
    this._menuActions = [];
    this.toggleDropdownMenu = e;
  }
  async run() {
    this.toggleDropdownMenu();
  }
  get menuActions() {
    return this._menuActions;
  }
  set menuActions(e) {
    this._menuActions = e;
  }
};
