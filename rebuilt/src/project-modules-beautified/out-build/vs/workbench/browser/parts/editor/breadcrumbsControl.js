"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/breadcrumbsControl.js
// Offset: 31438936 (bundle byte offset)
// Size: 16118 bytes
ri();
h0();
Nte();
Xoy();
sbt();
mb();
vr();
qi();
yn();
rt();
Yr();
Yn();
eV();
Ht();
ip();
dr();
Ei();
si();
pl();
sN();
ns();
Wt();
Hw();
Pd();
Rf();
Kl();
$b();
Pm();
Nu();
od();
ss();
A8();
zF();
Ybu();
eay();
tay();
GLf();
G0i = Xbu = class extends n1a {
  constructor(e, t, i, r) {
    super();
    this.model = e;
    this.element = t;
    this.options = i;
    this._instantiationService = r;
    this._disposables = new Ut();
  }
  dispose() {
    this._disposables.dispose();
  }
  equals(e) {
    if (e instanceof Xbu) {
      return this.element.element === e.element.element && this.options.showFileIcons === e.options.showFileIcons && this.options.showSymbolIcons === e.options.showSymbolIcons;
    } else {
      return false;
    }
  }
  render(e) {
    const {
      element: t,
      outline: i
    } = this.element;
    if (t === i) {
      const a = Ct("span", undefined, "…");
      e.appendChild(a);
      return;
    }
    const r = i.config.delegate.getTemplateId(t);
    const s = i.config.renderers.find(a => a.templateId === r);
    if (!s) {
      e.innerText = "<<NO RENDERER>>";
      return;
    }
    const o = s.renderTemplate(e);
    s.renderElement({
      element: t,
      children: [],
      depth: 0,
      visibleChildrenCount: 0,
      visibleChildIndex: 0,
      collapsible: false,
      collapsed: false,
      visible: true,
      filterData: undefined
    }, 0, o, undefined);
    this._disposables.add($i(() => {
      s.disposeTemplate(o);
    }));
    if (t instanceof G9 && i.uri) {
      this._disposables.add(this._instantiationService.invokeFunction(a => YLf(a, e, t.symbol.name, {
        symbol: t.symbol,
        uri: i.uri
      }, this.model, this.options.dragEditor)));
    }
  }
};
G0i = Xbu = __decorate([__param(3, ln)], G0i);
W0i = evu = class extends n1a {
  constructor(e, t, i, r, s, o) {
    super();
    this.model = e;
    this.element = t;
    this.options = i;
    this._labels = r;
    this._hoverDelegate = s;
    this._instantiationService = o;
    this._disposables = new Ut();
  }
  dispose() {
    this._disposables.dispose();
  }
  equals(e) {
    if (e instanceof evu) {
      return Iu.isEqual(this.element.uri, e.element.uri) && this.options.showFileIcons === e.options.showFileIcons && this.options.showSymbolIcons === e.options.showSymbolIcons && this.element.isWorktreesFolder === e.element.isWorktreesFolder && this.element.isPlansFolder === e.element.isPlansFolder;
    } else {
      return false;
    }
  }
  render(e) {
    const t = this._labels.create(e, {
      hoverDelegate: this._hoverDelegate
    });
    if (this.element.isPlansFolder) {
      t.setResource({
        resource: this.element.uri,
        name: "Plans"
      }, {
        hideIcon: this.element.kind === xg.FOLDER || !this.options.showFileIcons,
        fileKind: this.element.kind,
        fileDecorations: {
          colors: this.options.showDecorationColors,
          badges: false
        }
      });
    } else {
      t.setFile(this.element.uri, {
        hidePath: true,
        hideIcon: this.element.kind === xg.FOLDER || !this.options.showFileIcons,
        fileKind: this.element.kind,
        fileDecorations: {
          colors: this.options.showDecorationColors,
          badges: false
        }
      });
    }
    e.classList.add(xg[this.element.kind].toLowerCase());
    this._disposables.add(t);
    if (this.element.isWorktreesFolder) {
      e.setAttribute("data-worktrees-folder", "true");
    } else {
      e.removeAttribute("data-worktrees-folder");
    }
    if (this.element.isPlansFolder) {
      e.setAttribute("data-plans-folder", "true");
    } else {
      e.removeAttribute("data-plans-folder");
    }
    this._disposables.add(this._instantiationService.invokeFunction(i => YLf(i, e, ca(this.element.uri), this.element.uri, this.model, this.options.dragEditor)));
  }
};
W0i = evu = __decorate([__param(5, ln)], W0i);
ZLf = us("breadcrumb-separator", Be.chevronRight, _(3389, null));
wL = class {
  static {
    cxe = this;
  }
  static {
    this.HEIGHT = 32;
  }
  static {
    this.SCROLLBAR_SIZES = {
      default: 3,
      large: 8
    };
  }
  static {
    this.Payload_Reveal = {};
  }
  static {
    this.Payload_RevealAside = {};
  }
  static {
    this.Payload_Pick = {};
  }
  static {
    this.CK_BreadcrumbsPossible = new Sn("breadcrumbsPossible", false, _(3390, null));
  }
  static {
    this.CK_BreadcrumbsVisible = new Sn("breadcrumbsVisible", false, _(3391, null));
  }
  static {
    this.CK_BreadcrumbsActive = new Sn("breadcrumbsActive", false, _(3392, null));
  }
  get onDidVisibilityChange() {
    return this._onDidVisibilityChange.event;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p) {
    this._options = t;
    this._editorGroup = i;
    this._contextKeyService = r;
    this._contextViewService = s;
    this._instantiationService = o;
    this._quickInputService = a;
    this._fileService = l;
    this._editorService = u;
    this._labelService = d;
    this._disposables = new Ut();
    this._breadcrumbsDisposables = new Ut();
    this._model = new uo();
    this._breadcrumbsPickerShowing = false;
    this._onDidVisibilityChange = this._disposables.add(new Qe());
    this.domNode = document.createElement("div");
    this.domNode.classList.add("breadcrumbs-control");
    Rt(e, this.domNode);
    this._cfUseQuickPick = axe.UseQuickPick.bindTo(m);
    this._cfShowIcons = axe.Icons.bindTo(m);
    this._cfTitleScrollbarSizing = axe.TitleScrollbarSizing.bindTo(m);
    this._labels = this._instantiationService.createInstance(c5, p1t);
    const g = this._cfTitleScrollbarSizing.getValue() ?? "default";
    const f = t.widgetStyles ?? eBc;
    this._widget = new HLf(this.domNode, cxe.SCROLLBAR_SIZES[g], ZLf, f);
    this._widget.onDidSelectItem(this._onSelectEvent, this, this._disposables);
    this._widget.onDidFocusItem(this._onFocusEvent, this, this._disposables);
    this._widget.onDidChangeFocus(this._updateCkBreadcrumbsActive, this, this._disposables);
    this._ckBreadcrumbsPossible = cxe.CK_BreadcrumbsPossible.bindTo(this._contextKeyService);
    this._ckBreadcrumbsVisible = cxe.CK_BreadcrumbsVisible.bindTo(this._contextKeyService);
    this._ckBreadcrumbsActive = cxe.CK_BreadcrumbsActive.bindTo(this._contextKeyService);
    this._hoverDelegate = Sm("mouse");
    this._disposables.add(p.register(this._editorGroup.id, this._widget));
    this.hide();
  }
  dispose() {
    this._disposables.dispose();
    this._breadcrumbsDisposables.dispose();
    this._model.dispose();
    this._ckBreadcrumbsPossible.reset();
    this._ckBreadcrumbsVisible.reset();
    this._ckBreadcrumbsActive.reset();
    this._cfUseQuickPick.dispose();
    this._cfShowIcons.dispose();
    this._widget.dispose();
    this._labels.dispose();
    this.domNode.remove();
  }
  get model() {
    return this._model.value;
  }
  layout(e) {
    const t = this.domNode.clientWidth || e?.width || 0;
    const i = e?.height ?? cxe.HEIGHT;
    this._widget.layout(new Lu(t, i));
  }
  isHidden() {
    return this.domNode.classList.contains("hidden");
  }
  hide() {
    const e = this.isHidden();
    this._breadcrumbsDisposables.clear();
    this._ckBreadcrumbsVisible.set(false);
    this.domNode.classList.toggle("hidden", true);
    if (!e) {
      this._onDidVisibilityChange.fire();
    }
  }
  show() {
    const e = this.isHidden();
    this._ckBreadcrumbsVisible.set(true);
    this.domNode.classList.toggle("hidden", false);
    if (e) {
      this._onDidVisibilityChange.fire();
    }
  }
  revealLast() {
    this._widget.revealLast();
  }
  update() {
    this._breadcrumbsDisposables.clear();
    const e = gp.getCanonicalUri(this._editorGroup.activeEditor, {
      supportSideBySide: op.PRIMARY
    });
    const t = this.isHidden();
    if (!e || !this._fileService.hasProvider(e)) {
      this._ckBreadcrumbsPossible.set(false);
      if (t) {
        return false;
      } else {
        this.hide();
        return true;
      }
    }
    const i = gp.getOriginalUri(this._editorGroup.activeEditor, {
      supportSideBySide: op.PRIMARY
    });
    this.show();
    this._ckBreadcrumbsPossible.set(true);
    const r = this._instantiationService.createInstance(r1a, i ?? e, this._editorGroup.activeEditorPane);
    this._model.value = r;
    this.domNode.classList.toggle("backslash-path", this._labelService.getSeparator(e.scheme, e.authority) === "\\");
    const s = () => {
      this.domNode.classList.toggle("relative-path", r.isRelative());
      const d = this._cfShowIcons.getValue();
      const m = {
        ...this._options,
        showFileIcons: this._options.showFileIcons && d,
        showSymbolIcons: this._options.showSymbolIcons && d
      };
      const p = r.getElements().map(g => g instanceof H0i ? this._instantiationService.createInstance(W0i, r, g, m, this._labels, this._hoverDelegate) : this._instantiationService.createInstance(G0i, r, g, m));
      if (p.length === 0) {
        this._widget.setEnabled(false);
        this._widget.setItems([new class extends n1a {
          render(g) {
            g.innerText = _(3393, null);
          }
          equals(g) {
            return g === this;
          }
          dispose() {}
        }()]);
      } else {
        this._widget.setEnabled(true);
        this._widget.setItems(p);
        this._widget.reveal(p[p.length - 1]);
      }
    };
    const o = r.onDidUpdate(s);
    const a = this._cfShowIcons.onDidChange(s);
    s();
    this._breadcrumbsDisposables.clear();
    this._breadcrumbsDisposables.add(o);
    this._breadcrumbsDisposables.add($i(() => this._model.clear()));
    this._breadcrumbsDisposables.add(a);
    this._breadcrumbsDisposables.add($i(() => this._widget.setItems([])));
    const l = () => {
      const d = this._cfTitleScrollbarSizing.getValue() ?? "default";
      this._widget.setHorizontalScrollbarSize(cxe.SCROLLBAR_SIZES[d]);
    };
    l();
    const u = this._cfTitleScrollbarSizing.onDidChange(l);
    this._breadcrumbsDisposables.add(u);
    this._breadcrumbsDisposables.add({
      dispose: () => {
        if (this._breadcrumbsPickerShowing) {
          this._contextViewService.hideContextView({
            source: this
          });
        }
      }
    });
    return t !== this.isHidden();
  }
  _onFocusEvent(e) {
    if (e.item && this._breadcrumbsPickerShowing) {
      this._breadcrumbsPickerIgnoreOnceItem = undefined;
      this._widget.setSelection(e.item);
    }
  }
  _onSelectEvent(e) {
    if (!e.item) {
      return;
    }
    if (e.item === this._breadcrumbsPickerIgnoreOnceItem) {
      this._breadcrumbsPickerIgnoreOnceItem = undefined;
      this._widget.setFocused(undefined);
      this._widget.setSelection(undefined);
      return;
    }
    const {
      element: t
    } = e.item;
    this._editorGroup.focus();
    const i = this._getEditorGroup(e.payload);
    if (i !== undefined) {
      this._widget.setFocused(undefined);
      this._widget.setSelection(undefined);
      this._revealInEditor(e, t, i);
      return;
    }
    if (this._cfUseQuickPick.getValue()) {
      this._widget.setFocused(undefined);
      this._widget.setSelection(undefined);
      this._quickInputService.quickAccess.show(t instanceof i1a ? "@" : "");
      return;
    }
    let r;
    let s;
    this._contextViewService.showContextView({
      render: o => {
        if (e.item instanceof W0i) {
          r = this._instantiationService.createInstance(c1a, o, e.item.model.resource);
        } else if (e.item instanceof G0i) {
          r = this._instantiationService.createInstance(KLf, o, e.item.model.resource);
        }
        const a = r.onWillPickElement(() => this._contextViewService.hideContextView({
          source: this,
          didPick: true
        }));
        const l = M6.getInstance(As(this.domNode)).onDidChange(() => this._contextViewService.hideContextView({
          source: this
        }));
        const u = CC(o);
        const d = u.onDidBlur(() => {
          this._breadcrumbsPickerIgnoreOnceItem = this._widget.isDOMFocused() ? e.item : undefined;
          this._contextViewService.hideContextView({
            source: this
          });
        });
        this._breadcrumbsPickerShowing = true;
        this._updateCkBreadcrumbsActive();
        return H_(r, a, l, u, d);
      },
      getAnchor: () => {
        if (!s) {
          const o = As(this.domNode);
          const a = o.innerWidth - 8;
          let l = Math.min(o.innerHeight * 0.7, 300);
          const u = Math.min(a, Math.max(240, a / 4.17));
          const d = 8;
          let m;
          const p = qS(e.node.firstChild);
          const g = p.top + p.height + d;
          if (g + l >= o.innerHeight) {
            l = o.innerHeight - g - 30;
          }
          let f = p.left;
          if (f + u >= a) {
            f = a - u;
          }
          if (e.payload instanceof yy) {
            const A = u - d * 2;
            m = e.payload.posx - f;
            if (m > A) {
              f = Math.min(a - u, f + m - A);
              m = A;
            }
          } else {
            m = p.left + p.width * 0.3 - f;
          }
          r.show(t, l, u, d, Math.max(0, m));
          s = {
            x: f,
            y: g
          };
        }
        return s;
      },
      onHide: o => {
        if (!o?.didPick) {
          r.restoreViewState();
        }
        this._breadcrumbsPickerShowing = false;
        this._updateCkBreadcrumbsActive();
        if (o?.source === this) {
          this._widget.setFocused(undefined);
          this._widget.setSelection(undefined);
        }
        r.dispose();
      }
    });
  }
  _updateCkBreadcrumbsActive() {
    const e = this._widget.isDOMFocused() || this._breadcrumbsPickerShowing;
    this._ckBreadcrumbsActive.set(e);
  }
  async _revealInEditor(e, t, i, r = false) {
    if (t instanceof H0i) {
      if (t.kind === xg.FILE) {
        await this._editorService.openEditor({
          resource: t.uri,
          options: {
            pinned: r
          }
        }, i);
      } else {
        const s = this._widget.getItems();
        const o = s.indexOf(e.item);
        this._widget.setFocused(s[o + 1]);
        this._widget.setSelection(s[o + 1], cxe.Payload_Pick);
      }
    } else {
      t.outline.reveal(t, {
        pinned: r
      }, i === Aw, false);
    }
  }
  _getEditorGroup(e) {
    if (e === cxe.Payload_RevealAside) {
      return Aw;
    } else if (e === cxe.Payload_Reveal) {
      return B1;
    } else {
      return undefined;
    }
  }
};
wL = cxe = __decorate([__param(3, wi), __param(4, sy), __param(5, ln), __param(6, ha), __param(7, Gr), __param(8, yi), __param(9, Ol), __param(10, Fn), __param(11, oxe)], wL);
Q0i = class {
  get control() {
    return this._control;
  }
  get onDidEnablementChange() {
    return this._onDidEnablementChange.event;
  }
  get onDidVisibilityChange() {
    return this._onDidVisibilityChange.event;
  }
  constructor(e, t, i, r, s, o) {
    this._container = e;
    this._editorGroup = t;
    this._options = i;
    this._instantiationService = s;
    this._disposables = new Ut();
    this._controlDisposables = new Ut();
    this._onDidEnablementChange = this._disposables.add(new Qe());
    this._onDidVisibilityChange = this._disposables.add(new Qe());
    const a = this._disposables.add(axe.IsEnabled.bindTo(r));
    this._disposables.add(a.onDidChange(() => {
      const l = a.getValue();
      if (!l && this._control) {
        this._controlDisposables.clear();
        this._control = undefined;
        this._onDidEnablementChange.fire();
      } else if (l && !this._control) {
        this._control = this.createControl();
        this._control.update();
        this._onDidEnablementChange.fire();
      }
    }));
    if (a.getValue()) {
      this._control = this.createControl();
    }
    this._disposables.add(o.onDidChangeFileSystemProviderRegistrations(l => {
      if (!this._control?.model || this._control.model.resource.scheme === l.scheme) {
        if (this._control?.update()) {
          this._onDidEnablementChange.fire();
        }
      }
    }));
  }
  createControl() {
    const e = this._controlDisposables.add(this._instantiationService.createInstance(wL, this._container, this._options, this._editorGroup));
    this._controlDisposables.add(e.onDidVisibilityChange(() => this._onDidVisibilityChange.fire()));
    return e;
  }
  dispose() {
    this._disposables.dispose();
    this._controlDisposables.dispose();
  }
};
Q0i = __decorate([__param(3, Fn), __param(4, ln), __param(5, Gr)], Q0i);
Dt(class extends rn {
  constructor() {
    super({
      id: "breadcrumbs.toggle",
      title: {
        ...dt(3397, "Toggle Breadcrumbs"),
        mnemonicTitle: _(3394, null)
      },
      category: Br.View,
      toggled: {
        condition: Ee.equals("config.breadcrumbs.enabled", true),
        title: _(3395, null),
        mnemonicTitle: _(3396, null)
      },
      menu: [{
        id: st.CommandPalette
      }, {
        id: st.MenubarAppearanceMenu,
        group: "4_editor",
        order: 2
      }, {
        id: st.NotebookToolbar,
        group: "notebookLayout",
        order: 2
      }, {
        id: st.StickyScrollContext
      }, {
        id: st.NotebookStickyScrollContext,
        group: "notebookView",
        order: 2
      }, {
        id: st.NotebookToolbarContext,
        group: "notebookView",
        order: 2
      }]
    });
  }
  run(e) {
    const t = e.get(Fn);
    const i = axe.IsEnabled.bindTo(t).getValue();
    axe.IsEnabled.bindTo(t).updateValue(!i);
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "breadcrumbs.focusAndSelect",
      title: dt(3398, "Focus and Select Breadcrumbs"),
      precondition: wL.CK_BreadcrumbsVisible,
      keybinding: {
        weight: 200,
        primary: 3161,
        when: wL.CK_BreadcrumbsPossible
      },
      f1: true
    });
  }
  run(e, ...t) {
    Zbu(e, true);
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "breadcrumbs.focus",
      title: dt(3399, "Focus Breadcrumbs"),
      precondition: wL.CK_BreadcrumbsVisible,
      keybinding: {
        weight: 200,
        primary: 3157,
        when: wL.CK_BreadcrumbsPossible
      },
      f1: true
    });
  }
  run(e, ...t) {
    Zbu(e, false);
  }
});
qo.registerCommandAndKeybindingRule({
  id: "breadcrumbs.toggleToOn",
  weight: 200,
  primary: 3161,
  when: Ee.not("config.breadcrumbs.enabled"),
  handler: async n => {
    const e = n.get(ln);
    const t = n.get(Fn);
    const i = axe.IsEnabled.bindTo(t);
    if (!i.getValue()) {
      await i.updateValue(true);
      await Af(50);
    }
    return e.invokeFunction(Zbu, true);
  }
});
qo.registerCommandAndKeybindingRule({
  id: "breadcrumbs.focusNext",
  weight: 200,
  primary: 17,
  secondary: [2065],
  mac: {
    primary: 17,
    secondary: [529]
  },
  when: Ee.and(wL.CK_BreadcrumbsVisible, wL.CK_BreadcrumbsActive),
  handler(n) {
    const e = n.get(da);
    const i = n.get(oxe).getWidget(e.activeGroup.id);
    if (i) {
      i.focusNext();
    }
  }
});
qo.registerCommandAndKeybindingRule({
  id: "breadcrumbs.focusPrevious",
  weight: 200,
  primary: 15,
  secondary: [2063],
  mac: {
    primary: 15,
    secondary: [527]
  },
  when: Ee.and(wL.CK_BreadcrumbsVisible, wL.CK_BreadcrumbsActive),
  handler(n) {
    const e = n.get(da);
    const i = n.get(oxe).getWidget(e.activeGroup.id);
    if (i) {
      i.focusPrev();
    }
  }
});
qo.registerCommandAndKeybindingRule({
  id: "breadcrumbs.focusNextWithPicker",
  weight: 201,
  primary: 2065,
  mac: {
    primary: 529
  },
  when: Ee.and(wL.CK_BreadcrumbsVisible, wL.CK_BreadcrumbsActive, D1),
  handler(n) {
    const e = n.get(da);
    const i = n.get(oxe).getWidget(e.activeGroup.id);
    if (i) {
      i.focusNext();
    }
  }
});
qo.registerCommandAndKeybindingRule({
  id: "breadcrumbs.focusPreviousWithPicker",
  weight: 201,
  primary: 2063,
  mac: {
    primary: 527
  },
  when: Ee.and(wL.CK_BreadcrumbsVisible, wL.CK_BreadcrumbsActive, D1),
  handler(n) {
    const e = n.get(da);
    const i = n.get(oxe).getWidget(e.activeGroup.id);
    if (i) {
      i.focusPrev();
    }
  }
});
qo.registerCommandAndKeybindingRule({
  id: "breadcrumbs.selectFocused",
  weight: 200,
  primary: 3,
  secondary: [18],
  when: Ee.and(wL.CK_BreadcrumbsVisible, wL.CK_BreadcrumbsActive),
  handler(n) {
    const e = n.get(da);
    const i = n.get(oxe).getWidget(e.activeGroup.id);
    if (i) {
      i.setSelection(i.getFocused(), wL.Payload_Pick);
    }
  }
});
qo.registerCommandAndKeybindingRule({
  id: "breadcrumbs.revealFocused",
  weight: 200,
  primary: 10,
  secondary: [2051],
  when: Ee.and(wL.CK_BreadcrumbsVisible, wL.CK_BreadcrumbsActive),
  handler(n) {
    const e = n.get(da);
    const i = n.get(oxe).getWidget(e.activeGroup.id);
    if (i) {
      i.setSelection(i.getFocused(), wL.Payload_Reveal);
    }
  }
});
qo.registerCommandAndKeybindingRule({
  id: "breadcrumbs.selectEditor",
  weight: 201,
  primary: 9,
  when: Ee.and(wL.CK_BreadcrumbsVisible, wL.CK_BreadcrumbsActive),
  handler(n) {
    const e = n.get(da);
    const i = n.get(oxe).getWidget(e.activeGroup.id);
    if (i) {
      i.setFocused(undefined);
      i.setSelection(undefined);
      e.activeGroup.activeEditorPane?.focus();
    }
  }
});
qo.registerCommandAndKeybindingRule({
  id: "breadcrumbs.revealFocusedFromTreeAside",
  weight: 200,
  primary: 2051,
  when: Ee.and(wL.CK_BreadcrumbsVisible, wL.CK_BreadcrumbsActive, D1),
  handler(n) {
    const e = n.get(yi);
    const i = n.get(Nh).lastFocusedList;
    if (!(i instanceof Mun) && !(i instanceof Eq)) {
      return;
    }
    const r = i.getFocus()[0];
    if (je.isUri(r?.resource)) {
      return e.openEditor({
        resource: r.resource,
        options: {
          pinned: true
        }
      }, Aw);
    }
    const s = i.getInput();
    if (s && typeof s.outlineKind == "string") {
      return s.reveal(r, {
        pinned: true,
        preserveFocus: false
      }, true, false);
    }
  }
});
