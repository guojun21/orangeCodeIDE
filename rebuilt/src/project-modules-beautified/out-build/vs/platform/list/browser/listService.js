"use strict";

// Module: out-build/vs/platform/list/browser/listService.js
// Offset: 24948621 (bundle byte offset)
// Size: 21365 bytes
ri();
Apg();
SW();
PGl();
LAe();
XGl();
Sgg();
zGl();
yn();
rt();
Ht();
Ei();
Mp();
si();
Av();
pl();
Wt();
ka();
Ws();
$b();
Nh = xi("listService");
Dgg = class {
  get lastFocusedList() {
    return this._lastFocusedWidget;
  }
  constructor() {
    this.disposables = new Ut();
    this.lists = [];
    this._lastFocusedWidget = undefined;
  }
  setLastFocusedList(n) {
    if (n !== this._lastFocusedWidget) {
      this._lastFocusedWidget?.getHTMLElement().classList.remove("last-focused");
      this._lastFocusedWidget = n;
      this._lastFocusedWidget?.getHTMLElement().classList.add("last-focused");
    }
  }
  register(n, e) {
    if (this.lists.some(i => i.widget === n)) {
      throw new Error("Cannot register the same widget multiple times");
    }
    const t = {
      widget: n,
      extraContextKeys: e
    };
    this.lists.push(t);
    if (zP(n.getHTMLElement())) {
      this.setLastFocusedList(n);
    }
    return H_(n.onDidFocus(() => this.setLastFocusedList(n)), $i(() => this.lists.splice(this.lists.indexOf(t), 1)), n.onDidDispose(() => {
      this.lists = this.lists.filter(i => i !== t);
      if (this._lastFocusedWidget === n) {
        this.setLastFocusedList(undefined);
      }
    }));
  }
  dispose() {
    this.disposables.dispose();
  }
};
Run = new Sn("listScrollAtBoundary", "none");
iWl = Ee.or(Run.isEqualTo("top"), Run.isEqualTo("both"));
rWl = Ee.or(Run.isEqualTo("bottom"), Run.isEqualTo("both"));
xpi = new Sn("listFocus", true);
Pun = new Sn("treestickyScrollFocused", false);
Iet = new Sn("listSupportsMultiselect", true);
D1 = Ee.and(xpi, Ee.not(lD), Pun.negate());
Tpi = new Sn("listHasSelectionOrFocus", false);
U1e = new Sn("listDoubleSelection", false);
Rca = new Sn("listMultiSelection", false);
cCt = new Sn("listSelectionNavigation", false);
sWl = new Sn("listSupportsFind", true);
Ipi = new Sn("treeElementCanCollapse", false);
oWl = new Sn("treeElementHasParent", false);
Dpi = new Sn("treeElementCanExpand", false);
aWl = new Sn("treeElementHasChild", false);
cWl = new Sn("treeFindOpen", false);
lWl = "listTypeNavigationMode";
uWl = "listAutomaticKeyboardNavigation";
Det = "workbench.list.multiSelectModifier";
Bpi = "workbench.list.openMode";
Wae = "workbench.list.horizontalScrolling";
Pca = "workbench.list.defaultFindMode";
Lca = "workbench.list.typeNavigationMode";
Rpi = "workbench.list.keyboardNavigation";
OAe = "workbench.list.scrollByPage";
Nca = "workbench.list.defaultFindMatchType";
Lun = "workbench.tree.indent";
Ppi = "workbench.tree.renderIndentGuides";
UAe = "workbench.list.smoothScrolling";
$1e = "workbench.list.mouseWheelScrollSensitivity";
q1e = "workbench.list.fastScrollSensitivity";
Lpi = "workbench.tree.expandMode";
Npi = "workbench.tree.enableStickyScroll";
Mpi = "workbench.tree.stickyScrollMaxItemCount";
Bgg = class extends at {
  constructor(n) {
    super();
    this.configurationService = n;
    this.useAltAsMultipleSelectionModifier = oNe(n);
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.configurationService.onDidChangeConfiguration(n => {
      if (n.affectsConfiguration(Det)) {
        this.useAltAsMultipleSelectionModifier = oNe(this.configurationService);
      }
    }));
  }
  isSelectionSingleChangeEvent(n) {
    if (this.useAltAsMultipleSelectionModifier) {
      return n.browserEvent.altKey;
    } else {
      return a_h(n);
    }
  }
  isSelectionRangeChangeEvent(n) {
    return c_h(n);
  }
};
tQ = class extends JR {
  get onDidOpen() {
    return this.navigator.onDidOpen;
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    const d = typeof s.horizontalScrolling !== "undefined" ? s.horizontalScrolling : !!l.getValue(Wae);
    const [m, p] = u.invokeFunction(Bca, s);
    super(e, t, i, r, {
      keyboardSupport: false,
      ...m,
      horizontalScrolling: d
    });
    this.disposables.add(p);
    this.contextKeyService = Ica(o, this);
    this.disposables.add(Dca(this.contextKeyService, this));
    this.listSupportsMultiSelect = Iet.bindTo(this.contextKeyService);
    this.listSupportsMultiSelect.set(s.multipleSelectionSupport !== false);
    cCt.bindTo(this.contextKeyService).set(!!s.selectionNavigation);
    this.listHasSelectionOrFocus = Tpi.bindTo(this.contextKeyService);
    this.listDoubleSelection = U1e.bindTo(this.contextKeyService);
    this.listMultiSelection = Rca.bindTo(this.contextKeyService);
    this.horizontalScrolling = s.horizontalScrolling;
    this._useAltAsMultipleSelectionModifier = oNe(l);
    this.disposables.add(this.contextKeyService);
    this.disposables.add(a.register(this));
    this.updateStyles(s.overrideStyles);
    this.disposables.add(this.onDidChangeSelection(() => {
      const f = this.getSelection();
      const A = this.getFocus();
      this.contextKeyService.bufferChangeEvents(() => {
        this.listHasSelectionOrFocus.set(f.length > 0 || A.length > 0);
        this.listMultiSelection.set(f.length > 1);
        this.listDoubleSelection.set(f.length === 2);
      });
    }));
    this.disposables.add(this.onDidChangeFocus(() => {
      const f = this.getSelection();
      const A = this.getFocus();
      this.listHasSelectionOrFocus.set(f.length > 0 || A.length > 0);
    }));
    this.disposables.add(l.onDidChangeConfiguration(f => {
      if (f.affectsConfiguration(Det)) {
        this._useAltAsMultipleSelectionModifier = oNe(l);
      }
      let A = {};
      if (f.affectsConfiguration(Wae) && this.horizontalScrolling === undefined) {
        const w = !!l.getValue(Wae);
        A = {
          ...A,
          horizontalScrolling: w
        };
      }
      if (f.affectsConfiguration(OAe)) {
        const w = !!l.getValue(OAe);
        A = {
          ...A,
          scrollByPage: w
        };
      }
      if (f.affectsConfiguration(UAe)) {
        const w = !!l.getValue(UAe);
        A = {
          ...A,
          smoothScrolling: w
        };
      }
      if (f.affectsConfiguration($1e)) {
        const w = l.getValue($1e);
        A = {
          ...A,
          mouseWheelScrollSensitivity: w
        };
      }
      if (f.affectsConfiguration(q1e)) {
        const w = l.getValue(q1e);
        A = {
          ...A,
          fastScrollSensitivity: w
        };
      }
      if (Object.keys(A).length > 0) {
        this.updateOptions(A);
      }
    }));
    this.navigator = new dWl(this, {
      configurationService: l,
      ...s
    });
    this.disposables.add(this.navigator);
  }
  updateOptions(e) {
    super.updateOptions(e);
    if (e.overrideStyles !== undefined) {
      this.updateStyles(e.overrideStyles);
    }
    if (e.multipleSelectionSupport !== undefined) {
      this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport);
    }
  }
  updateStyles(e) {
    this.style(e ? zSe(e) : Abt);
  }
  get useAltAsMultipleSelectionModifier() {
    return this._useAltAsMultipleSelectionModifier;
  }
};
tQ = __decorate([__param(5, wi), __param(6, Nh), __param(7, Fn), __param(8, ln)], tQ);
Mca = class extends iCt {
  get onDidOpen() {
    return this.navigator.onDidOpen;
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    const d = typeof s.horizontalScrolling !== "undefined" ? s.horizontalScrolling : !!l.getValue(Wae);
    const [m, p] = u.invokeFunction(Bca, s);
    super(e, t, i, r, {
      keyboardSupport: false,
      ...m,
      horizontalScrolling: d
    });
    this.disposables = new Ut();
    this.disposables.add(p);
    this.contextKeyService = Ica(o, this);
    this.disposables.add(Dca(this.contextKeyService, this.widget));
    this.horizontalScrolling = s.horizontalScrolling;
    this.listSupportsMultiSelect = Iet.bindTo(this.contextKeyService);
    this.listSupportsMultiSelect.set(s.multipleSelectionSupport !== false);
    cCt.bindTo(this.contextKeyService).set(!!s.selectionNavigation);
    this._useAltAsMultipleSelectionModifier = oNe(l);
    this.disposables.add(this.contextKeyService);
    this.disposables.add(a.register(this));
    this.updateStyles(s.overrideStyles);
    this.disposables.add(l.onDidChangeConfiguration(f => {
      if (f.affectsConfiguration(Det)) {
        this._useAltAsMultipleSelectionModifier = oNe(l);
      }
      let A = {};
      if (f.affectsConfiguration(Wae) && this.horizontalScrolling === undefined) {
        const w = !!l.getValue(Wae);
        A = {
          ...A,
          horizontalScrolling: w
        };
      }
      if (f.affectsConfiguration(OAe)) {
        const w = !!l.getValue(OAe);
        A = {
          ...A,
          scrollByPage: w
        };
      }
      if (f.affectsConfiguration(UAe)) {
        const w = !!l.getValue(UAe);
        A = {
          ...A,
          smoothScrolling: w
        };
      }
      if (f.affectsConfiguration($1e)) {
        const w = l.getValue($1e);
        A = {
          ...A,
          mouseWheelScrollSensitivity: w
        };
      }
      if (f.affectsConfiguration(q1e)) {
        const w = l.getValue(q1e);
        A = {
          ...A,
          fastScrollSensitivity: w
        };
      }
      if (Object.keys(A).length > 0) {
        this.updateOptions(A);
      }
    }));
    this.navigator = new dWl(this, {
      configurationService: l,
      ...s
    });
    this.disposables.add(this.navigator);
  }
  updateOptions(e) {
    super.updateOptions(e);
    if (e.overrideStyles !== undefined) {
      this.updateStyles(e.overrideStyles);
    }
    if (e.multipleSelectionSupport !== undefined) {
      this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport);
    }
  }
  updateStyles(e) {
    this.style(e ? zSe(e) : Abt);
  }
  get useAltAsMultipleSelectionModifier() {
    return this._useAltAsMultipleSelectionModifier;
  }
  dispose() {
    this.disposables.dispose();
    super.dispose();
  }
};
Mca = __decorate([__param(5, wi), __param(6, Nh), __param(7, Fn), __param(8, ln)], Mca);
WUe = class extends xet {
  get onDidOpen() {
    return this.navigator.onDidOpen;
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    const m = typeof o.horizontalScrolling !== "undefined" ? o.horizontalScrolling : !!u.getValue(Wae);
    const [p, g] = d.invokeFunction(Bca, o);
    super(e, t, i, r, s, {
      keyboardSupport: false,
      ...p,
      horizontalScrolling: m
    });
    this.disposables.add(g);
    this.contextKeyService = Ica(a, this);
    this.disposables.add(Dca(this.contextKeyService, this));
    this.listSupportsMultiSelect = Iet.bindTo(this.contextKeyService);
    this.listSupportsMultiSelect.set(o.multipleSelectionSupport !== false);
    cCt.bindTo(this.contextKeyService).set(!!o.selectionNavigation);
    this.listHasSelectionOrFocus = Tpi.bindTo(this.contextKeyService);
    this.listDoubleSelection = U1e.bindTo(this.contextKeyService);
    this.listMultiSelection = Rca.bindTo(this.contextKeyService);
    this.horizontalScrolling = o.horizontalScrolling;
    this._useAltAsMultipleSelectionModifier = oNe(u);
    this.disposables.add(this.contextKeyService);
    this.disposables.add(l.register(this));
    this.updateStyles(o.overrideStyles);
    this.disposables.add(this.onDidChangeSelection(() => {
      const A = this.getSelection();
      const w = this.getFocus();
      this.contextKeyService.bufferChangeEvents(() => {
        this.listHasSelectionOrFocus.set(A.length > 0 || w.length > 0);
        this.listMultiSelection.set(A.length > 1);
        this.listDoubleSelection.set(A.length === 2);
      });
    }));
    this.disposables.add(this.onDidChangeFocus(() => {
      const A = this.getSelection();
      const w = this.getFocus();
      this.listHasSelectionOrFocus.set(A.length > 0 || w.length > 0);
    }));
    this.disposables.add(u.onDidChangeConfiguration(A => {
      if (A.affectsConfiguration(Det)) {
        this._useAltAsMultipleSelectionModifier = oNe(u);
      }
      let w = {};
      if (A.affectsConfiguration(Wae) && this.horizontalScrolling === undefined) {
        const C = !!u.getValue(Wae);
        w = {
          ...w,
          horizontalScrolling: C
        };
      }
      if (A.affectsConfiguration(OAe)) {
        const C = !!u.getValue(OAe);
        w = {
          ...w,
          scrollByPage: C
        };
      }
      if (A.affectsConfiguration(UAe)) {
        const C = !!u.getValue(UAe);
        w = {
          ...w,
          smoothScrolling: C
        };
      }
      if (A.affectsConfiguration($1e)) {
        const C = u.getValue($1e);
        w = {
          ...w,
          mouseWheelScrollSensitivity: C
        };
      }
      if (A.affectsConfiguration(q1e)) {
        const C = u.getValue(q1e);
        w = {
          ...w,
          fastScrollSensitivity: C
        };
      }
      if (Object.keys(w).length > 0) {
        this.updateOptions(w);
      }
    }));
    this.navigator = new Rgg(this, {
      configurationService: u,
      ...o
    });
    this.disposables.add(this.navigator);
  }
  updateOptions(e) {
    super.updateOptions(e);
    if (e.overrideStyles !== undefined) {
      this.updateStyles(e.overrideStyles);
    }
    if (e.multipleSelectionSupport !== undefined) {
      this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport);
    }
  }
  updateStyles(e) {
    this.style(e ? zSe(e) : Abt);
  }
  get useAltAsMultipleSelectionModifier() {
    return this._useAltAsMultipleSelectionModifier;
  }
  dispose() {
    this.disposables.dispose();
    super.dispose();
  }
};
WUe = __decorate([__param(6, wi), __param(7, Nh), __param(8, Fn), __param(9, ln)], WUe);
Fca = class extends at {
  constructor(n, e) {
    super();
    this.widget = n;
    this._onDidOpen = this._register(new Qe());
    this.onDidOpen = this._onDidOpen.event;
    this._register(In.filter(this.widget.onDidChangeSelection, t => BH(t.browserEvent))(t => this.onSelectionFromKeyboard(t)));
    this._register(this.widget.onPointer(t => this.onPointer(t.element, t.browserEvent)));
    this._register(this.widget.onMouseDblClick(t => this.onMouseDblClick(t.element, t.browserEvent)));
    if (typeof e?.openOnSingleClick != "boolean" && e?.configurationService) {
      this.openOnSingleClick = e?.configurationService.getValue(Bpi) !== "doubleClick";
      this._register(e?.configurationService.onDidChangeConfiguration(t => {
        if (t.affectsConfiguration(Bpi)) {
          this.openOnSingleClick = e?.configurationService.getValue(Bpi) !== "doubleClick";
        }
      }));
    } else {
      this.openOnSingleClick = e?.openOnSingleClick ?? true;
    }
  }
  onSelectionFromKeyboard(n) {
    if (n.elements.length !== 1) {
      return;
    }
    const e = n.browserEvent;
    const t = typeof e.preserveFocus == "boolean" ? e.preserveFocus : true;
    const i = typeof e.pinned == "boolean" ? e.pinned : !t;
    this._open(this.getSelectedElement(), t, i, false, n.browserEvent);
  }
  onPointer(n, e) {
    if (!this.openOnSingleClick || e.detail === 2) {
      return;
    }
    const i = e.button === 1;
    const r = true;
    const s = i;
    const o = e.ctrlKey || e.metaKey || e.altKey;
    this._open(n, r, s, o, e);
  }
  onMouseDblClick(n, e) {
    if (!e) {
      return;
    }
    const t = e.target;
    if (t.classList.contains("monaco-tl-twistie") || t.classList.contains("monaco-icon-label") && t.classList.contains("folder-icon") && e.offsetX < 16) {
      return;
    }
    const r = false;
    const s = true;
    const o = e.ctrlKey || e.metaKey || e.altKey;
    this._open(n, r, s, o, e);
  }
  _open(n, e, t, i, r) {
    if (n) {
      this._onDidOpen.fire({
        editorOptions: {
          preserveFocus: e,
          pinned: t,
          revealIfVisible: true
        },
        sideBySide: i,
        element: n,
        browserEvent: r
      });
    }
  }
};
dWl = class extends Fca {
  constructor(n, e) {
    super(n, e);
    this.widget = n;
  }
  getSelectedElement() {
    return this.widget.getSelectedElements()[0];
  }
};
Rgg = class extends Fca {
  constructor(n, e) {
    super(n, e);
  }
  getSelectedElement() {
    return this.widget.getSelectedElements()[0];
  }
};
Pgg = class extends Fca {
  constructor(n, e) {
    super(n, e);
  }
  getSelectedElement() {
    return this.widget.getSelection()[0] ?? undefined;
  }
};
H1e = class extends Hne {
  get contextKeyService() {
    return this.internals.contextKeyService;
  }
  get useAltAsMultipleSelectionModifier() {
    return this.internals.useAltAsMultipleSelectionModifier;
  }
  get onDidOpen() {
    return this.internals.onDidOpen;
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    const {
      options: d,
      getTypeNavigationMode: m,
      disposable: p
    } = o.invokeFunction(Epi, s);
    super(e, t, i, r, d);
    this.disposables.add(p);
    this.internals = new Ret(this, s, m, s.overrideStyles, a, l, u);
    this.disposables.add(this.internals);
  }
  updateOptions(e) {
    super.updateOptions(e);
    this.internals.updateOptions(e);
  }
};
H1e = __decorate([__param(5, ln), __param(6, wi), __param(7, Nh), __param(8, Fn)], H1e);
Nun = class extends jGl {
  get contextKeyService() {
    return this.internals.contextKeyService;
  }
  get useAltAsMultipleSelectionModifier() {
    return this.internals.useAltAsMultipleSelectionModifier;
  }
  get onDidOpen() {
    return this.internals.onDidOpen;
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    const {
      options: d,
      getTypeNavigationMode: m,
      disposable: p
    } = o.invokeFunction(Epi, s);
    super(e, t, i, r, d);
    this.disposables.add(p);
    this.internals = new Ret(this, s, m, s.overrideStyles, a, l, u);
    this.disposables.add(this.internals);
  }
  updateOptions(e = {}) {
    super.updateOptions(e);
    if (e.overrideStyles) {
      this.internals.updateStyleOverrides(e.overrideStyles);
    }
    this.internals.updateOptions(e);
  }
};
Nun = __decorate([__param(5, ln), __param(6, wi), __param(7, Nh), __param(8, Fn)], Nun);
Mun = class extends lme {
  get contextKeyService() {
    return this.internals.contextKeyService;
  }
  get useAltAsMultipleSelectionModifier() {
    return this.internals.useAltAsMultipleSelectionModifier;
  }
  get onDidOpen() {
    return this.internals.onDidOpen;
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    const {
      options: m,
      getTypeNavigationMode: p,
      disposable: g
    } = a.invokeFunction(Epi, o);
    super(e, t, i, r, s, m);
    this.disposables.add(g);
    this.internals = new Ret(this, o, p, o.overrideStyles, l, u, d);
    this.disposables.add(this.internals);
  }
  updateOptions(e = {}) {
    super.updateOptions(e);
    if (e.overrideStyles !== undefined) {
      this.internals.updateStyleOverrides(e.overrideStyles);
    }
    this.internals.updateOptions(e);
  }
};
Mun = __decorate([__param(6, ln), __param(7, wi), __param(8, Nh), __param(9, Fn)], Mun);
Eq = class extends kq {
  get contextKeyService() {
    return this.internals.contextKeyService;
  }
  get useAltAsMultipleSelectionModifier() {
    return this.internals.useAltAsMultipleSelectionModifier;
  }
  get onDidOpen() {
    return this.internals.onDidOpen;
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    const {
      options: m,
      getTypeNavigationMode: p,
      disposable: g
    } = a.invokeFunction(Epi, o);
    super(e, t, i, r, s, m);
    this.disposables.add(g);
    this.internals = new Ret(this, o, p, o.overrideStyles, l, u, d);
    this.disposables.add(this.internals);
  }
  updateOptions(e = {}) {
    super.updateOptions(e);
    if (e.overrideStyles) {
      this.internals.updateStyleOverrides(e.overrideStyles);
    }
    this.internals.updateOptions(e);
  }
};
Eq = __decorate([__param(6, ln), __param(7, wi), __param(8, Nh), __param(9, Fn)], Eq);
Bet = class extends _gg {
  get contextKeyService() {
    return this.internals.contextKeyService;
  }
  get useAltAsMultipleSelectionModifier() {
    return this.internals.useAltAsMultipleSelectionModifier;
  }
  get onDidOpen() {
    return this.internals.onDidOpen;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    const {
      options: p,
      getTypeNavigationMode: g,
      disposable: f
    } = l.invokeFunction(Epi, a);
    super(e, t, i, r, s, o, p);
    this.disposables.add(f);
    this.internals = new Ret(this, a, g, a.overrideStyles, u, d, m);
    this.disposables.add(this.internals);
  }
  updateOptions(e) {
    super.updateOptions(e);
    this.internals.updateOptions(e);
  }
};
Bet = __decorate([__param(7, ln), __param(8, wi), __param(9, Nh), __param(10, Fn)], Bet);
Ret = class {
  get onDidOpen() {
    return this.navigator.onDidOpen;
  }
  constructor(e, t, i, r, s, o, a) {
    this.tree = e;
    this.disposables = [];
    this.contextKeyService = Ica(s, e);
    this.disposables.push(Dca(this.contextKeyService, e));
    this.listSupportsMultiSelect = Iet.bindTo(this.contextKeyService);
    this.listSupportsMultiSelect.set(t.multipleSelectionSupport !== false);
    cCt.bindTo(this.contextKeyService).set(!!t.selectionNavigation);
    this.listSupportFindWidget = sWl.bindTo(this.contextKeyService);
    this.listSupportFindWidget.set(t.findWidgetEnabled ?? true);
    this.hasSelectionOrFocus = Tpi.bindTo(this.contextKeyService);
    this.hasDoubleSelection = U1e.bindTo(this.contextKeyService);
    this.hasMultiSelection = Rca.bindTo(this.contextKeyService);
    this.treeElementCanCollapse = Ipi.bindTo(this.contextKeyService);
    this.treeElementHasParent = oWl.bindTo(this.contextKeyService);
    this.treeElementCanExpand = Dpi.bindTo(this.contextKeyService);
    this.treeElementHasChild = aWl.bindTo(this.contextKeyService);
    this.treeFindOpen = cWl.bindTo(this.contextKeyService);
    this.treeStickyScrollFocused = Pun.bindTo(this.contextKeyService);
    this._useAltAsMultipleSelectionModifier = oNe(a);
    this.updateStyleOverrides(r);
    const u = () => {
      const m = e.getFocus()[0];
      if (!m) {
        return;
      }
      const p = e.getNode(m);
      this.treeElementCanCollapse.set(p.collapsible && !p.collapsed);
      this.treeElementHasParent.set(!!e.getParentElement(m));
      this.treeElementCanExpand.set(p.collapsible && p.collapsed);
      this.treeElementHasChild.set(!!e.getFirstElementChild(m));
    };
    const d = new Set();
    d.add(lWl);
    d.add(uWl);
    this.disposables.push(this.contextKeyService, o.register(e), e.onDidChangeSelection(() => {
      const m = e.getSelection();
      const p = e.getFocus();
      this.contextKeyService.bufferChangeEvents(() => {
        this.hasSelectionOrFocus.set(m.length > 0 || p.length > 0);
        this.hasMultiSelection.set(m.length > 1);
        this.hasDoubleSelection.set(m.length === 2);
      });
    }), e.onDidChangeFocus(() => {
      const m = e.getSelection();
      const p = e.getFocus();
      this.hasSelectionOrFocus.set(m.length > 0 || p.length > 0);
      u();
    }), e.onDidChangeCollapseState(u), e.onDidChangeModel(u), e.onDidChangeFindOpenState(m => this.treeFindOpen.set(m)), e.onDidChangeStickyScrollFocused(m => this.treeStickyScrollFocused.set(m)), a.onDidChangeConfiguration(m => {
      let p = {};
      if (m.affectsConfiguration(Det)) {
        this._useAltAsMultipleSelectionModifier = oNe(a);
      }
      if (m.affectsConfiguration(Lun)) {
        const g = a.getValue(Lun);
        p = {
          ...p,
          indent: g
        };
      }
      if (m.affectsConfiguration(Ppi) && t.renderIndentGuides === undefined) {
        const g = a.getValue(Ppi);
        p = {
          ...p,
          renderIndentGuides: g
        };
      }
      if (m.affectsConfiguration(UAe)) {
        const g = !!a.getValue(UAe);
        p = {
          ...p,
          smoothScrolling: g
        };
      }
      if (m.affectsConfiguration(Pca) || m.affectsConfiguration(Rpi)) {
        const g = Tgg(a);
        p = {
          ...p,
          defaultFindMode: g
        };
      }
      if (m.affectsConfiguration(Lca) || m.affectsConfiguration(Rpi)) {
        const g = i();
        p = {
          ...p,
          typeNavigationMode: g
        };
      }
      if (m.affectsConfiguration(Nca)) {
        const g = Igg(a);
        p = {
          ...p,
          defaultFindMatchType: g
        };
      }
      if (m.affectsConfiguration(Wae) && t.horizontalScrolling === undefined) {
        const g = !!a.getValue(Wae);
        p = {
          ...p,
          horizontalScrolling: g
        };
      }
      if (m.affectsConfiguration(OAe)) {
        const g = !!a.getValue(OAe);
        p = {
          ...p,
          scrollByPage: g
        };
      }
      if (m.affectsConfiguration(Lpi) && t.expandOnlyOnTwistieClick === undefined) {
        p = {
          ...p,
          expandOnlyOnTwistieClick: a.getValue(Lpi) === "doubleClick"
        };
      }
      if (m.affectsConfiguration(Npi)) {
        const g = a.getValue(Npi);
        p = {
          ...p,
          enableStickyScroll: g
        };
      }
      if (m.affectsConfiguration(Mpi)) {
        const g = Math.max(1, a.getValue(Mpi));
        p = {
          ...p,
          stickyScrollMaxItemCount: g
        };
      }
      if (m.affectsConfiguration($1e)) {
        const g = a.getValue($1e);
        p = {
          ...p,
          mouseWheelScrollSensitivity: g
        };
      }
      if (m.affectsConfiguration(q1e)) {
        const g = a.getValue(q1e);
        p = {
          ...p,
          fastScrollSensitivity: g
        };
      }
      if (Object.keys(p).length > 0) {
        e.updateOptions(p);
      }
    }), this.contextKeyService.onDidChangeContext(m => {
      if (m.affectsSome(d)) {
        e.updateOptions({
          typeNavigationMode: i()
        });
      }
    }));
    this.navigator = new Pgg(e, {
      configurationService: a,
      ...t
    });
    this.disposables.push(this.navigator);
  }
  get useAltAsMultipleSelectionModifier() {
    return this._useAltAsMultipleSelectionModifier;
  }
  updateOptions(e) {
    if (e.multipleSelectionSupport !== undefined) {
      this.listSupportsMultiSelect.set(!!e.multipleSelectionSupport);
    }
  }
  updateStyleOverrides(e) {
    this.tree.style(e ? zSe(e) : Abt);
  }
  dispose() {
    this.disposables = Bo(this.disposables);
  }
};
Ret = __decorate([__param(4, wi), __param(5, Nh), __param(6, Fn)], Ret);
Lgg = Di.as(Dh.Configuration);
Lgg.registerConfiguration({
  id: "workbench",
  order: 7,
  title: _(2088, null),
  type: "object",
  properties: {
    [Det]: {
      type: "string",
      enum: ["ctrlCmd", "alt"],
      markdownEnumDescriptions: [_(2089, null), _(2090, null)],
      default: "ctrlCmd",
      description: _(2091, null)
    },
    [Bpi]: {
      type: "string",
      enum: ["singleClick", "doubleClick"],
      default: "singleClick",
      description: _(2092, null)
    },
    [Wae]: {
      type: "boolean",
      default: false,
      description: _(2093, null)
    },
    [OAe]: {
      type: "boolean",
      default: false,
      description: _(2094, null)
    },
    [Lun]: {
      type: "number",
      default: 8,
      minimum: 4,
      maximum: 40,
      description: _(2095, null)
    },
    [Ppi]: {
      type: "string",
      enum: ["none", "onHover", "always"],
      default: "onHover",
      description: _(2096, null)
    },
    [UAe]: {
      type: "boolean",
      default: false,
      description: _(2097, null)
    },
    [$1e]: {
      type: "number",
      default: 1,
      markdownDescription: _(2098, null)
    },
    [q1e]: {
      type: "number",
      default: 5,
      markdownDescription: _(2099, null)
    },
    [Pca]: {
      type: "string",
      enum: ["highlight", "filter"],
      enumDescriptions: [_(2100, null), _(2101, null)],
      default: "highlight",
      description: _(2102, null)
    },
    [Rpi]: {
      type: "string",
      enum: ["simple", "highlight", "filter"],
      enumDescriptions: [_(2103, null), _(2104, null), _(2105, null)],
      default: "highlight",
      description: _(2106, null),
      deprecated: true,
      deprecationMessage: _(2107, null)
    },
    [Nca]: {
      type: "string",
      enum: ["fuzzy", "contiguous"],
      enumDescriptions: [_(2108, null), _(2109, null)],
      default: "fuzzy",
      description: _(2110, null)
    },
    [Lpi]: {
      type: "string",
      enum: ["singleClick", "doubleClick"],
      default: "singleClick",
      description: _(2111, null)
    },
    [Npi]: {
      type: "boolean",
      default: true,
      description: _(2112, null)
    },
    [Mpi]: {
      type: "number",
      minimum: 1,
      default: 7,
      markdownDescription: _(2113, null, "`#workbench.tree.enableStickyScroll#`")
    },
    [Lca]: {
      type: "string",
      enum: ["automatic", "trigger"],
      default: "automatic",
      markdownDescription: _(2114, null)
    }
  }
});
