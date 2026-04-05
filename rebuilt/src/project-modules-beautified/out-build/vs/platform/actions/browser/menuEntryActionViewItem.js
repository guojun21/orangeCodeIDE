"use strict";

// Module: out-build/vs/platform/actions/browser/menuEntryActionViewItem.js
// Offset: 2304775 (bundle byte offset)
// Size: 10697 bytes
yF();
ri();
Tb();
Rx();
jde();
nl();
pKe();
rt();
_r();
Jr();
Js();
Ht();
zg();
x9e();
vbt();
si();
pl();
Wt();
ka();
So();
kr();
$b();
Nl();
qI();
Io();
dr();
ml();
lhA();
T9e = "data-command-id";
f2 = class extends aI {
  dispose() {
    super.dispose();
    this._solidDisposable?.dispose();
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    super(undefined, e, {
      icon: !!e.class || !!e.item.icon,
      label: !e.class && !e.item.icon,
      draggable: t?.draggable,
      keybinding: t?.keybinding,
      hoverDelegate: t?.hoverDelegate,
      keybindingNotRenderedWithLabel: t?.keybindingNotRenderedWithLabel
    });
    this._options = t;
    this._keybindingService = i;
    this._notificationService = r;
    this._contextKeyService = s;
    this._themeService = o;
    this._contextMenuService = a;
    this._accessibilityService = l;
    this._actionBadgeService = u;
    this._wantsAltCommand = false;
    this._itemClassDispose = this._register(new uo());
    this._badgeDisposable = this._register(new uo());
    this._altKey = qBe.getInstance();
    this._register(this._actionBadgeService.onDidChangeBadge(d => {
      if (d.actionId === this._commandAction.id) {
        this.updateBadge(d.badge);
      }
    }));
  }
  get _menuItemAction() {
    return this._action;
  }
  get _commandAction() {
    return this._wantsAltCommand && this._menuItemAction.alt || this._menuItemAction;
  }
  async onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await this.actionRunner.run(this._commandAction, this._context);
    } catch (t) {
      this._notificationService.error(t);
    }
  }
  render(e) {
    if (this._action.id === Dgt) {
      if (this._solidDisposable) {
        this._solidDisposable.dispose();
      }
      const r = document.createElement("span");
      r.classList.add("keybinding");
      const s = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService);
      const o = s && s.getLabel();
      r.textContent = o || "";
      r.style.fontSize = "10px";
      r.style.opacity = "0.5";
      r.style.display = "none";
      this.specialKbDiv = r;
      const a = this._contextKeyService;
      this._solidDisposable = a.onDidChangeContext(l => {
        if (l.affectsSome(new Set(["focusedView"]))) {
          if (a.getContextKeyValue("focusedView") === FB) {
            if (this.startupTimeout) {
              clearTimeout(this.startupTimeout);
            }
            if (Date.now() - WCc < 3000) {
              this.startupTimeout = setTimeout(() => {
                r.style.display = "inline";
              }, 3000 - (Date.now() - WCc));
            } else {
              r.style.display = "inline";
            }
          } else {
            r.style.display = "none";
          }
        }
      });
    }
    super.render(e);
    e.classList.add("menu-entry");
    try {
      const r = this._menuItemAction.item.id;
      if (r) {
        e.setAttribute(T9e, r);
        this.element?.setAttribute(T9e, r);
      }
    } catch {}
    if (this.options.icon) {
      this._updateItemClass(this._menuItemAction.item);
    }
    this._badge = Rt(e, Ct(".badge"));
    this._badgeContent = Rt(this._badge, Ct(".badge-content"));
    Ng(this._badge);
    const t = this._commandAction.item.badge;
    const i = this._actionBadgeService.getBadge(this._commandAction.id);
    if (t || i) {
      this.updateBadge(i || t);
    }
    if (this._menuItemAction.alt) {
      let r = false;
      const s = () => {
        const o = !!this._menuItemAction.alt?.enabled && (!this._accessibilityService.isMotionReduced() || r) && (this._altKey.keyStatus.altKey || this._altKey.keyStatus.shiftKey && r);
        if (o !== this._wantsAltCommand) {
          this._wantsAltCommand = o;
          this.updateLabel();
          this.updateTooltip();
          this.updateClass();
        }
      };
      this._register(this._altKey.event(s));
      this._register(ei(e, "mouseleave", o => {
        r = false;
        s();
      }));
      this._register(ei(e, "mouseenter", o => {
        r = true;
        s();
      }));
      s();
    }
  }
  updateLabel() {
    if (this.options.label && this.label) {
      this.label.textContent = this._commandAction.label;
    }
  }
  getTooltip() {
    const e = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService);
    const t = e && e.getLabel();
    const i = this._commandAction.tooltip || this._commandAction.label;
    let r = t ? _(1784, null, i, t) : i;
    if (!this._wantsAltCommand && this._menuItemAction.alt?.enabled) {
      const s = this._menuItemAction.alt.tooltip || this._menuItemAction.alt.label;
      const o = this._keybindingService.lookupKeybinding(this._menuItemAction.alt.id, this._contextKeyService);
      const a = o && o.getLabel();
      const l = a ? _(1785, null, s, a) : s;
      r = _(1786, null, r, mKe.modifierLabels[cf].altKey, l);
    }
    return r;
  }
  updateClass() {
    if (this.options.icon) {
      if (this._commandAction !== this._menuItemAction) {
        if (this._menuItemAction.alt) {
          this._updateItemClass(this._menuItemAction.alt.item);
        }
      } else {
        this._updateItemClass(this._menuItemAction.item);
      }
    }
  }
  _updateItemClass(e) {
    this._itemClassDispose.value = undefined;
    const {
      element: t,
      label: i
    } = this;
    if (!t || !i) {
      return;
    }
    const r = this._commandAction.checked && ZDc(e.toggled) && e.toggled.icon ? e.toggled.icon : e.icon;
    if (r) {
      if (Qt.isThemeIcon(r)) {
        const s = Qt.asClassNameArray(r);
        i.classList.add(...s);
        this._itemClassDispose.value = $i(() => {
          i.classList.remove(...s);
        });
      } else {
        i.style.backgroundImage = hOt(this._themeService.getColorTheme().type) ? Bx(r.dark) : Bx(r.light);
        i.classList.add("icon");
        this._itemClassDispose.value = H_($i(() => {
          i.style.backgroundImage = "";
          i.classList.remove("icon");
        }), this._themeService.onDidColorThemeChange(() => {
          this.updateClass();
        }));
      }
    }
  }
  updateBadge(e) {
    if ((!this._badge || !this._badgeContent) && this.element && e) {
      this._badge = Rt(this.element, Ct(".badge"));
      this._badgeContent = Rt(this._badge, Ct(".badge-content"));
      Ng(this._badge);
    } else if (!this._badge || !this._badgeContent) {
      return;
    }
    const t = new Ut();
    this._badgeDisposable.value?.dispose();
    this._badgeDisposable.value = t;
    th(this._badgeContent);
    Ng(this._badge);
    if (!e) {
      return;
    }
    const i = ["badge-content"];
    if (typeof e.value == "number") {
      let o = e.value.toString();
      if (e.value > 999) {
        const a = e.value / 1000;
        const l = Math.floor(a);
        if (a > l) {
          o = `${l}K+`;
        } else {
          o = `${a}K`;
        }
      }
      this._badgeContent.textContent = o;
      gv(this._badge);
    } else if (typeof e.value == "string") {
      this._badgeContent.textContent = e.value;
      if (this._badgeContent.textContent) {
        this._badge.classList.remove("empty");
      } else {
        this._badge.classList.add("empty");
      }
      gv(this._badge);
    }
    if (i.length) {
      this._badgeContent.classList.add(...i);
      t.add($i(() => this._badgeContent?.classList.remove(...i)));
    }
    const r = e.foregroundColor || "var(--vscode-badge-foreground)";
    const s = e.backgroundColor || "var(--vscode-badge-background)";
    if (this._badgeContent) {
      this._badgeContent.style.color = r ? r.toString() : "";
      this._badgeContent.style.backgroundColor = s ? s.toString() : "";
    }
  }
};
f2 = __decorate([__param(2, mo), __param(3, ms), __param(4, wi), __param(5, bo), __param(6, kc), __param(7, Cf), __param(8, cve)], f2);
zCh = class NGb extends f2 {
  render(e) {
    this.options.label = true;
    this.options.icon = false;
    super.render(e);
    e.classList.add("text-only");
    e.classList.toggle("use-comma", this._options?.useComma ?? false);
  }
  updateLabel() {
    const e = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
    if (!e) {
      return super.updateLabel();
    }
    if (this.label) {
      const t = NGb._symbolPrintEnter(e);
      if (this._options?.conversational) {
        this.label.textContent = _(1787, null, this._action.label, t);
      } else {
        this.label.textContent = _(1788, null, this._action.label, t);
      }
    }
  }
  static _symbolPrintEnter(e) {
    return e.getLabel()?.replace(/\benter\b/gi, "⏎").replace(/\bEscape\b/gi, "Esc");
  }
};
CRe = class extends VH {
  constructor(e, t, i, r, s) {
    const o = {
      ...t,
      menuAsChild: t?.menuAsChild ?? false,
      classNames: t?.classNames ?? (Qt.isThemeIcon(e.item.icon) ? Qt.asClassName(e.item.icon) : undefined),
      keybindingProvider: t?.keybindingProvider ?? (a => i.lookupKeybinding(a.id))
    };
    super(e, {
      getActions: () => e.actions
    }, r, o);
    this._keybindingService = i;
    this._contextMenuService = r;
    this._themeService = s;
  }
  render(e) {
    super.render(e);
    Kd(this.element);
    e.classList.add("menu-entry");
    const t = this._action;
    const {
      icon: i
    } = t.item;
    if (i && !Qt.isThemeIcon(i)) {
      this.element.classList.add("icon");
      const r = () => {
        if (this.element) {
          this.element.style.backgroundImage = hOt(this._themeService.getColorTheme().type) ? Bx(i.dark) : Bx(i.light);
        }
      };
      r();
      this._register(this._themeService.onDidColorThemeChange(() => {
        r();
      }));
    }
  }
};
CRe = __decorate([__param(2, mo), __param(3, kc), __param(4, bo)], CRe);
M5o = class extends w3 {
  get onDidChangeDropdownVisibility() {
    return this._dropdown.onDidChangeVisibility;
  }
  constructor(e, t, i, r, s, o, a, l) {
    super(null, e);
    this._keybindingService = i;
    this._notificationService = r;
    this._contextMenuService = s;
    this._menuService = o;
    this._instaService = a;
    this._storageService = l;
    this._defaultActionDisposables = this._register(new Ut());
    this._container = null;
    this._options = t;
    this._storageKey = `${e.item.submenu.id}_lastActionId`;
    let u;
    const d = t?.persistLastActionId ? l.get(this._storageKey, 1) : undefined;
    if (d) {
      u = e.actions.find(p => d === p.id);
    }
    u ||= e.actions[0];
    this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(f2, u, {
      keybinding: this._getDefaultActionKeybindingLabel(u)
    }));
    const m = {
      keybindingProvider: p => this._keybindingService.lookupKeybinding(p.id),
      ...t,
      menuAsChild: t?.menuAsChild ?? true,
      classNames: t?.classNames ?? ["codicon", "codicon-chevron-down"],
      actionRunner: t?.actionRunner ?? this._register(new jD())
    };
    this._dropdown = this._register(new VH(e, e.actions, this._contextMenuService, m));
    this._register(this._dropdown.actionRunner.onDidRun(p => {
      if (p.action instanceof Ub) {
        this.update(p.action);
      }
    }));
  }
  update(e) {
    if (this._options?.persistLastActionId) {
      this._storageService.store(this._storageKey, e.id, 1, 1);
    }
    this._defaultActionDisposables.clear();
    this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(f2, e, {
      keybinding: this._getDefaultActionKeybindingLabel(e)
    }));
    this._defaultAction.actionRunner = this._defaultActionDisposables.add(new class extends jD {
      async runAction(t, i) {
        await t.run(undefined);
      }
    }());
    if (this._container) {
      this._defaultAction.render(CSe(this._container, Ct(".action-container")));
    }
  }
  _getDefaultActionKeybindingLabel(e) {
    let t;
    if (this._options?.renderKeybindingWithDefaultActionLabel) {
      const i = this._keybindingService.lookupKeybinding(e.id);
      if (i) {
        t = `(${i.getLabel()})`;
      }
    }
    return t;
  }
  setActionContext(e) {
    super.setActionContext(e);
    this._defaultAction.setActionContext(e);
    this._dropdown.setActionContext(e);
  }
  render(e) {
    this._container = e;
    super.render(this._container);
    this._container.classList.add("monaco-dropdown-with-default");
    const t = Ct(".action-container");
    this._defaultAction.render(Rt(this._container, t));
    this._register(ei(t, ir.KEY_DOWN, r => {
      const s = new vh(r);
      if (s.equals(17)) {
        this._defaultAction.element.tabIndex = -1;
        this._dropdown.focus();
        s.stopPropagation();
      }
    }));
    const i = Ct(".dropdown-action-container");
    this._dropdown.render(Rt(this._container, i));
    this._register(ei(i, ir.KEY_DOWN, r => {
      const s = new vh(r);
      if (s.equals(15)) {
        this._defaultAction.element.tabIndex = 0;
        this._dropdown.setFocusable(false);
        this._defaultAction.element?.focus();
        s.stopPropagation();
      }
    }));
  }
  focus(e) {
    if (e) {
      this._dropdown.focus();
    } else {
      this._defaultAction.element.tabIndex = 0;
      this._defaultAction.element.focus();
    }
  }
  blur() {
    this._defaultAction.element.tabIndex = -1;
    this._dropdown.blur();
    this._container.blur();
  }
  setFocusable(e) {
    if (e) {
      this._defaultAction.element.tabIndex = 0;
    } else {
      this._defaultAction.element.tabIndex = -1;
      this._dropdown.setFocusable(false);
    }
  }
};
M5o = __decorate([__param(2, mo), __param(3, ms), __param(4, kc), __param(5, xd), __param(6, ln), __param(7, Hi)], M5o);
F5o = class extends v3n {
  constructor(e, t) {
    super(null, e, e.actions.map(i => ({
      text: i.id === id.ID ? "─────────" : i.label,
      isDisabled: !i.enabled
    })), 0, t, KSe, {
      ariaLabel: e.tooltip,
      optionsAsChildren: true
    });
    this.select(Math.max(0, e.actions.findIndex(i => i.checked)));
  }
  render(e) {
    super.render(e);
    e.style.borderColor = zo(dVe);
  }
  runAction(e, t) {
    const i = this.action.actions[t];
    if (i) {
      this.actionRunner.run(i);
    }
  }
};
F5o = __decorate([__param(1, sy)], F5o);
