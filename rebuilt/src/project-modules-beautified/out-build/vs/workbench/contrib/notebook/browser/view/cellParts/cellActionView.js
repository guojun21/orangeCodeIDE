"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellActionView.js
// Offset: 33259943 (bundle byte offset)
// Size: 2900 bytes
ri();
Js();
Dx();
mb();
bS();
Jr();
dg();
dr();
pl();
ka();
Io();
Id();
Tbn = class extends f2 {
  updateLabel() {
    if (this.options.label && this.label) {
      um(this.label, ...a_(this._commandAction.label ?? ""));
      const n = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService);
      if (n) {
        const e = document.createElement("span");
        e.className = "notebook-keybinding-label";
        e.textContent = n.getLabel() || "";
        this.label.appendChild(e);
      }
    }
  }
  getTooltip() {
    return "";
  }
};
DTa = class extends f2 {
  render(n) {
    super.render(n);
    n.classList.add("notebook-action-view-item");
    this._actionLabel = document.createElement("a");
    n.appendChild(this._actionLabel);
    this.updateLabel();
  }
  updateLabel() {
    if (this._actionLabel) {
      this._actionLabel.classList.add("notebook-label");
      this._actionLabel.innerText = this._action.label;
    }
  }
};
EEt = class extends CRe {
  constructor(e, t, i, r, s, o, a, l, u) {
    super(e, {
      ...t,
      hoverDelegate: t?.hoverDelegate ?? Sm("element")
    }, o, a, l);
    this._renderLabel = i;
    this.subActionProvider = r;
    this.subActionViewItemProvider = s;
    this._hoverService = u;
  }
  render(e) {
    super.render(e);
    e.classList.add("notebook-action-view-item");
    e.classList.add("notebook-action-view-item-unified");
    this._actionLabel = document.createElement("a");
    e.appendChild(this._actionLabel);
    this._hover = this._register(this._hoverService.setupManagedHover(this.options.hoverDelegate ?? Sm("element"), this._actionLabel, ""));
    this.updateLabel();
    for (const t of [ir.CLICK, ir.MOUSE_DOWN, MA.Tap]) {
      this._register(ei(e, t, i => this.onClick(i, true)));
    }
  }
  onClick(e, t = false) {
    zu.stop(e, true);
    const i = gA(this._context) ? this.options?.useEventAsContext ? e : {
      preserveFocus: t
    } : this._context;
    this.actionRunner.run(this._primaryAction ?? this._action, i);
  }
  updateLabel() {
    const e = this.subActionProvider.getActions();
    if (this._actionLabel) {
      const t = e[0];
      this._primaryAction = t;
      if (t && t instanceof Ub) {
        const i = this.element;
        if (i && t.item.icon && Qt.isThemeIcon(t.item.icon)) {
          const r = Qt.asClassNameArray(t.item.icon);
          i.classList.forEach(s => {
            if (s.startsWith("codicon-")) {
              i.classList.remove(s);
            }
          });
          i.classList.add(...r);
        }
        if (this._renderLabel) {
          this._actionLabel.classList.add("notebook-label");
          this._actionLabel.innerText = this._action.label;
          this._hover?.update(t.tooltip.length ? t.tooltip : t.label);
        }
      } else if (this._renderLabel) {
        this._actionLabel.classList.add("notebook-label");
        this._actionLabel.innerText = this._action.label;
        this._hover?.update(this._action.tooltip.length ? this._action.tooltip : this._action.label);
      }
    }
  }
};
EEt = __decorate([__param(5, mo), __param(6, kc), __param(7, bo), __param(8, Kc)], EEt);
