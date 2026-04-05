"use strict";

// Module: out-build/vs/base/browser/ui/tree/asyncDataTree.js
// Offset: 24920883 (bundle byte offset)
// Size: 22305 bytes
ZVe();
LAe();
wca();
zGl();
iNe();
vr();
qi();
Jr();
_s();
yn();
Ef();
rt();
Js();
Po();
Q_();
Vs();
Ht();
pgg = class MWb {
  get element() {
    return this.node.element.element;
  }
  get children() {
    return this.node.children.map(e => new MWb(e));
  }
  get depth() {
    return this.node.depth;
  }
  get visibleChildrenCount() {
    return this.node.visibleChildrenCount;
  }
  get visibleChildIndex() {
    return this.node.visibleChildIndex;
  }
  get collapsible() {
    return this.node.collapsible;
  }
  get collapsed() {
    return this.node.collapsed;
  }
  get visible() {
    return this.node.visible;
  }
  get filterData() {
    return this.node.filterData;
  }
  constructor(e) {
    this.node = e;
  }
};
ggg = class {
  constructor(n, e, t) {
    this.renderer = n;
    this.nodeMapper = e;
    this.onDidChangeTwistieState = t;
    this.renderedNodes = new Map();
    this.templateId = n.templateId;
  }
  renderTemplate(n) {
    return {
      templateData: this.renderer.renderTemplate(n)
    };
  }
  renderElement(n, e, t, i) {
    this.renderer.renderElement(this.nodeMapper.map(n), e, t.templateData, i);
  }
  renderTwistie(n, e) {
    if (n.slow) {
      e.classList.add(...Qt.asClassNameArray(Be.treeItemLoading));
      return true;
    } else {
      e.classList.remove(...Qt.asClassNameArray(Be.treeItemLoading));
      return false;
    }
  }
  disposeElement(n, e, t, i) {
    this.renderer.disposeElement?.(this.nodeMapper.map(n), e, t.templateData, i);
  }
  disposeTemplate(n) {
    this.renderer.disposeTemplate(n.templateData);
  }
  dispose() {
    this.renderedNodes.clear();
  }
};
fgg = class extends ove {
  set context(n) {
    this.data.context = n;
  }
  get context() {
    return this.data.context;
  }
  constructor(n) {
    super(n.elements.map(e => e.element));
    this.data = n;
  }
};
bgg = class {
  constructor(n) {
    this.dnd = n;
  }
  getDragURI(n) {
    return this.dnd.getDragURI(n.element);
  }
  getDragLabel(n, e) {
    if (this.dnd.getDragLabel) {
      return this.dnd.getDragLabel(n.map(t => t.element), e);
    }
  }
  onDragStart(n, e) {
    this.dnd.onDragStart?.(YGl(n), e);
  }
  onDragOver(n, e, t, i, r, s = true) {
    return this.dnd.onDragOver(YGl(n), e && e.element, t, i, r);
  }
  drop(n, e, t, i, r) {
    this.dnd.drop(YGl(n), e && e.element, t, i, r);
  }
  onDragEnd(n) {
    this.dnd.onDragEnd?.(n);
  }
  dispose() {
    this.dnd.dispose();
  }
};
vgg = class extends HGl {
  constructor(n, e, t) {
    super(e, t);
    this.findProvider = n;
    this.isFindSessionActive = false;
  }
  filter(n, e) {
    const t = super.filter(n, e);
    if (!this.isFindSessionActive || this.findMode === nR.Highlight || !this.findProvider.isVisible) {
      return t;
    }
    const i = Spi(t) ? t.visibility : t;
    if (oCt(i) === 0) {
      return 0;
    } else if (this.findProvider.isVisible(n)) {
      return t;
    } else {
      return 0;
    }
  }
};
Agg = class extends JGl {
  constructor(n, e, t, i, r) {
    super(n, t, i, r);
    this.findProvider = e;
    this.filter = t;
    this.activeSession = false;
    this.asyncWorkInProgress = false;
    this.taskQueue = new L4(250);
    this.disposables.add($i(async () => {
      if (this.activeSession) {
        await this.findProvider.endSession?.();
      }
    }));
  }
  applyPattern(n) {
    this.renderMessage(false);
    this.activeTokenSource?.cancel();
    this.activeTokenSource = new Wc();
    this.taskQueue.trigger(() => this.applyPatternAsync());
  }
  async applyPatternAsync() {
    const n = this.activeTokenSource?.token;
    if (!n || n.isCancellationRequested) {
      return;
    }
    const e = this.pattern;
    if (e === "") {
      if (this.activeSession) {
        this.asyncWorkInProgress = true;
        await this.deactivateFindSession();
        this.asyncWorkInProgress = false;
        if (!n.isCancellationRequested) {
          this.filter.reset();
          super.applyPattern("");
        }
      }
      return;
    }
    if (!this.activeSession) {
      this.activateFindSession();
    }
    this.asyncWorkInProgress = true;
    this.activeFindMetadata = undefined;
    const t = await this.findProvider.find(e, {
      matchType: this.matchType,
      findMode: this.mode
    }, n);
    if (!n.isCancellationRequested && t !== undefined) {
      this.asyncWorkInProgress = false;
      this.activeFindMetadata = t;
      this.filter.reset();
      super.applyPattern(e);
      if (t.warningMessage) {
        this.renderMessage(true, t.warningMessage);
      }
    }
  }
  activateFindSession() {
    this.activeSession = true;
    this.filter.isFindSessionActive = true;
    this.findProvider.startSession?.();
  }
  async deactivateFindSession() {
    this.activeSession = false;
    this.filter.isFindSessionActive = false;
    await this.findProvider.endSession?.();
  }
  render() {
    if (this.asyncWorkInProgress || !this.activeFindMetadata) {
      return;
    }
    const n = this.activeFindMetadata.matchCount === 0 && this.pattern.length > 0;
    this.renderMessage(n);
    if (this.pattern.length) {
      this.alertResults(this.activeFindMetadata.matchCount);
    }
  }
  onDidToggleChange(n) {
    this.toggles.set(n.id, n.isChecked);
    this.filter.findMode = this.mode;
    this.filter.findMatchType = this.matchType;
    this.placeholder = this.mode === nR.Filter ? _(41, null) : _(42, null);
    this.applyPattern(this.pattern);
  }
  shouldAllowFocus(n) {
    return this.shouldFocusWhenNavigating(n);
  }
  shouldFocusWhenNavigating(n) {
    if (!this.activeSession || !this.activeFindMetadata) {
      return true;
    }
    const e = n.element?.element;
    if (e && this.activeFindMetadata.isMatch(e)) {
      return true;
    } else {
      return !hz.isDefault(n.filterData);
    }
  }
};
kq = class {
  get onDidScroll() {
    return this.tree.onDidScroll;
  }
  get onDidChangeFocus() {
    return In.map(this.tree.onDidChangeFocus, hgg);
  }
  get onDidChangeSelection() {
    return In.map(this.tree.onDidChangeSelection, hgg);
  }
  get onKeyDown() {
    return this.tree.onKeyDown;
  }
  get onMouseClick() {
    return In.map(this.tree.onMouseClick, Tca);
  }
  get onMouseDblClick() {
    return In.map(this.tree.onMouseDblClick, Tca);
  }
  get onContextMenu() {
    return In.map(this.tree.onContextMenu, L0A);
  }
  get onTap() {
    return In.map(this.tree.onTap, Tca);
  }
  get onPointer() {
    return In.map(this.tree.onPointer, Tca);
  }
  get onDidFocus() {
    return this.tree.onDidFocus;
  }
  get onDidBlur() {
    return this.tree.onDidBlur;
  }
  get onDidChangeModel() {
    return this.tree.onDidChangeModel;
  }
  get onDidChangeCollapseState() {
    return this.tree.onDidChangeCollapseState;
  }
  get onDidUpdateOptions() {
    return this.tree.onDidUpdateOptions;
  }
  get onDidChangeStickyScrollFocused() {
    return this.tree.onDidChangeStickyScrollFocused;
  }
  get findMode() {
    if (this.findController) {
      return this.findController.mode;
    } else {
      return this.tree.findMode;
    }
  }
  set findMode(n) {
    if (this.findController) {
      this.findController.mode = n;
    } else {
      this.tree.findMode = n;
    }
  }
  get findMatchType() {
    if (this.findController) {
      return this.findController.matchType;
    } else {
      return this.tree.findMatchType;
    }
  }
  set findMatchType(n) {
    if (this.findController) {
      this.findController.matchType = n;
    } else {
      this.tree.findMatchType = n;
    }
  }
  get expandOnlyOnTwistieClick() {
    if (typeof this.tree.expandOnlyOnTwistieClick == "boolean") {
      return this.tree.expandOnlyOnTwistieClick;
    }
    const n = this.tree.expandOnlyOnTwistieClick;
    return e => n(this.nodes.get(e === this.root.element ? null : e) || null);
  }
  get onDidDispose() {
    return this.tree.onDidDispose;
  }
  constructor(n, e, t, i, r, s = {}) {
    this.user = n;
    this.dataSource = r;
    this.nodes = new Map();
    this.subTreeRefreshPromises = new Map();
    this.refreshPromises = new Map();
    this._onDidRender = new Qe();
    this._onDidChangeNodeSlowState = new Qe();
    this.nodeMapper = new yca(l => new pgg(l));
    this.disposables = new Ut();
    this.identityProvider = s.identityProvider;
    this.autoExpandSingleChildren = typeof s.autoExpandSingleChildren === "undefined" ? false : s.autoExpandSingleChildren;
    this.sorter = s.sorter;
    this.getDefaultCollapseState = l => s.collapseByDefault ? s.collapseByDefault(l) ? Cq.PreserveOrCollapsed : Cq.PreserveOrExpanded : undefined;
    let o = false;
    let a;
    if (s.findProvider && (s.findWidgetEnabled ?? true) && s.keyboardNavigationLabelProvider && s.contextViewProvider) {
      o = true;
      a = new vgg(s.findProvider, s.keyboardNavigationLabelProvider, s.filter);
    }
    this.tree = this.createTree(n, e, t, i, {
      ...s,
      findWidgetEnabled: !o,
      filter: a ?? s.filter
    });
    this.root = VGl({
      element: undefined,
      parent: null,
      hasChildren: true,
      defaultCollapseState: undefined
    });
    if (this.identityProvider) {
      this.root = {
        ...this.root,
        id: null
      };
    }
    this.nodes.set(null, this.root);
    this.tree.onDidChangeCollapseState(this._onDidChangeCollapseState, this, this.disposables);
    if (o) {
      const l = {
        styles: s.findWidgetStyles,
        showNotFoundMessage: s.showNotFoundMessage,
        defaultFindMatchType: s.defaultFindMatchType,
        defaultFindMode: s.defaultFindMode
      };
      this.findController = this.disposables.add(new Agg(this.tree, s.findProvider, a, this.tree.options.contextViewProvider, l));
      this.focusNavigationFilter = u => this.findController.shouldFocusWhenNavigating(u);
      this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState;
      this.onDidChangeFindMode = this.findController.onDidChangeMode;
      this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType;
    } else {
      this.onDidChangeFindOpenState = this.tree.onDidChangeFindOpenState;
      this.onDidChangeFindMode = this.tree.onDidChangeFindMode;
      this.onDidChangeFindMatchType = this.tree.onDidChangeFindMatchType;
    }
  }
  createTree(n, e, t, i, r) {
    const s = new Cca(t);
    const o = i.map(l => new ggg(l, this.nodeMapper, this._onDidChangeNodeSlowState.event));
    const a = mgg(r) || {};
    return new Hne(n, e, s, o, a);
  }
  updateOptions(n = {}) {
    if (this.findController) {
      if (n.defaultFindMode !== undefined) {
        this.findController.mode = n.defaultFindMode;
      }
      if (n.defaultFindMatchType !== undefined) {
        this.findController.matchType = n.defaultFindMatchType;
      }
    }
    this.tree.updateOptions(n);
  }
  get options() {
    return this.tree.options;
  }
  getHTMLElement() {
    return this.tree.getHTMLElement();
  }
  get contentHeight() {
    return this.tree.contentHeight;
  }
  get contentWidth() {
    return this.tree.contentWidth;
  }
  get onDidChangeContentHeight() {
    return this.tree.onDidChangeContentHeight;
  }
  get onDidChangeContentWidth() {
    return this.tree.onDidChangeContentWidth;
  }
  get scrollTop() {
    return this.tree.scrollTop;
  }
  set scrollTop(n) {
    this.tree.scrollTop = n;
  }
  get scrollLeft() {
    return this.tree.scrollLeft;
  }
  set scrollLeft(n) {
    this.tree.scrollLeft = n;
  }
  get scrollHeight() {
    return this.tree.scrollHeight;
  }
  get renderHeight() {
    return this.tree.renderHeight;
  }
  get lastVisibleElement() {
    return this.tree.lastVisibleElement.element;
  }
  get ariaLabel() {
    return this.tree.ariaLabel;
  }
  set ariaLabel(n) {
    this.tree.ariaLabel = n;
  }
  domFocus() {
    this.tree.domFocus();
  }
  isDOMFocused() {
    return this.tree.isDOMFocused();
  }
  navigate(n) {
    let e;
    if (n) {
      e = this.getDataNode(n);
    }
    return new Cgg(this.tree.navigate(e));
  }
  layout(n, e) {
    this.tree.layout(n, e);
  }
  style(n) {
    this.tree.style(n);
  }
  getInput() {
    return this.root.element;
  }
  async setInput(n, e) {
    this.refreshPromises.forEach(i => i.cancel());
    this.refreshPromises.clear();
    this.root.element = n;
    const t = e && {
      viewState: e,
      focus: [],
      selection: []
    };
    await this._updateChildren(n, true, false, t);
    if (t) {
      this.tree.setFocus(t.focus);
      this.tree.setSelection(t.selection);
    }
    if (e && typeof e.scrollTop == "number") {
      this.scrollTop = e.scrollTop;
    }
  }
  async updateChildren(n = this.root.element, e = true, t = false, i) {
    await this._updateChildren(n, e, t, undefined, i);
  }
  async _updateChildren(n = this.root.element, e = true, t = false, i, r) {
    if (typeof this.root.element === "undefined") {
      throw new Sq(this.user, "Tree input not set");
    }
    if (this.root.refreshPromise) {
      await this.root.refreshPromise;
      await In.toPromise(this._onDidRender.event);
    }
    const s = this.getDataNode(n);
    await this.refreshAndRenderNode(s, e, i, r);
    if (t) {
      try {
        this.tree.rerender(s);
      } catch {}
    }
  }
  resort(n = this.root.element, e = true) {
    this.tree.resort(this.getDataNode(n), e);
  }
  hasNode(n) {
    return n === this.root.element || this.nodes.has(n);
  }
  rerender(n) {
    if (n === undefined || n === this.root.element) {
      this.tree.rerender();
      return;
    }
    const e = this.getDataNode(n);
    this.tree.rerender(e);
  }
  updateElementHeight(n, e) {
    const t = this.getDataNode(n);
    this.tree.updateElementHeight(t, e);
  }
  updateWidth(n) {
    const e = this.getDataNode(n);
    this.tree.updateWidth(e);
  }
  getNode(n = this.root.element) {
    const e = this.getDataNode(n);
    const t = this.tree.getNode(e === this.root ? null : e);
    return this.nodeMapper.map(t);
  }
  collapse(n, e = false) {
    const t = this.getDataNode(n);
    return this.tree.collapse(t === this.root ? null : t, e);
  }
  async expand(n, e = false) {
    if (typeof this.root.element === "undefined") {
      throw new Sq(this.user, "Tree input not set");
    }
    if (this.root.refreshPromise) {
      await this.root.refreshPromise;
      await In.toPromise(this._onDidRender.event);
    }
    const t = this.getDataNode(n);
    if (this.tree.hasElement(t) && !this.tree.isCollapsible(t) || (t.refreshPromise && (await this.root.refreshPromise, await In.toPromise(this._onDidRender.event)), t !== this.root && !t.refreshPromise && !this.tree.isCollapsed(t))) {
      return false;
    }
    const i = this.tree.expand(t === this.root ? null : t, e);
    if (t.refreshPromise) {
      await this.root.refreshPromise;
      await In.toPromise(this._onDidRender.event);
    }
    return i;
  }
  toggleCollapsed(n, e = false) {
    return this.tree.toggleCollapsed(this.getDataNode(n), e);
  }
  expandAll() {
    this.tree.expandAll();
  }
  async expandTo(n) {
    if (!this.dataSource.getParent) {
      throw new Error("Can't expand to element without getParent method");
    }
    const e = [];
    while (!this.hasNode(n)) {
      n = this.dataSource.getParent(n);
      if (n !== this.root.element) {
        e.push(n);
      }
    }
    for (const t of bl.reverse(e)) {
      await this.expand(t);
    }
    this.tree.expandTo(this.getDataNode(n));
  }
  collapseAll() {
    this.tree.collapseAll();
  }
  isCollapsible(n) {
    return this.tree.isCollapsible(this.getDataNode(n));
  }
  isCollapsed(n) {
    return this.tree.isCollapsed(this.getDataNode(n));
  }
  triggerTypeNavigation() {
    this.tree.triggerTypeNavigation();
  }
  openFind() {
    if (this.findController) {
      this.findController.open();
    } else {
      this.tree.openFind();
    }
  }
  closeFind() {
    if (this.findController) {
      this.findController.close();
    } else {
      this.tree.closeFind();
    }
  }
  refilter() {
    this.tree.refilter();
  }
  setAnchor(n) {
    this.tree.setAnchor(typeof n === "undefined" ? undefined : this.getDataNode(n));
  }
  getAnchor() {
    return this.tree.getAnchor()?.element;
  }
  setSelection(n, e) {
    const t = n.map(i => this.getDataNode(i));
    this.tree.setSelection(t, e);
  }
  getSelection() {
    return this.tree.getSelection().map(e => e.element);
  }
  setFocus(n, e) {
    const t = n.map(i => this.getDataNode(i));
    this.tree.setFocus(t, e);
  }
  focusNext(n = 1, e = false, t) {
    this.tree.focusNext(n, e, t, this.focusNavigationFilter);
  }
  focusPrevious(n = 1, e = false, t) {
    this.tree.focusPrevious(n, e, t, this.focusNavigationFilter);
  }
  focusNextPage(n) {
    return this.tree.focusNextPage(n, this.focusNavigationFilter);
  }
  focusPreviousPage(n) {
    return this.tree.focusPreviousPage(n, this.focusNavigationFilter);
  }
  focusLast(n) {
    this.tree.focusLast(n, this.focusNavigationFilter);
  }
  focusFirst(n) {
    this.tree.focusFirst(n, this.focusNavigationFilter);
  }
  getFocus() {
    return this.tree.getFocus().map(e => e.element);
  }
  getStickyScrollFocus() {
    return this.tree.getStickyScrollFocus().map(e => e.element);
  }
  getFocusedPart() {
    return this.tree.getFocusedPart();
  }
  reveal(n, e) {
    this.tree.reveal(this.getDataNode(n), e);
  }
  getRelativeTop(n) {
    return this.tree.getRelativeTop(this.getDataNode(n));
  }
  getParentElement(n) {
    const e = this.tree.getParentElement(this.getDataNode(n));
    return e && e.element;
  }
  getFirstElementChild(n = this.root.element) {
    const e = this.getDataNode(n);
    const t = this.tree.getFirstElementChild(e === this.root ? null : e);
    return t && t.element;
  }
  getDataNode(n) {
    const e = this.nodes.get(n === this.root.element ? null : n);
    if (!e) {
      const t = this.identityProvider?.getId(n).toString();
      throw new Sq(this.user, `Data tree node not found${t ? `: ${t}
    ` : ""}`);
    }
    return e;
  }
  async refreshAndRenderNode(n, e, t, i) {
    if (!this.disposables.isDisposed) {
      await this.refreshNode(n, e, t);
      if (!this.disposables.isDisposed) {
        this.render(n, t, i);
      }
    }
  }
  async refreshNode(n, e, t) {
    let i;
    this.subTreeRefreshPromises.forEach((r, s) => {
      if (!i && P0A(s, n)) {
        i = r.then(() => this.refreshNode(n, e, t));
      }
    });
    if (i) {
      return i;
    }
    if (n !== this.root && this.tree.getNode(n).collapsed) {
      n.hasChildren = !!this.dataSource.hasChildren(n.element);
      n.stale = true;
      this.setChildren(n, [], e, t);
      return;
    }
    return this.doRefreshSubTree(n, e, t);
  }
  async doRefreshSubTree(n, e, t) {
    let i;
    n.refreshPromise = new Promise(r => i = r);
    this.subTreeRefreshPromises.set(n, n.refreshPromise);
    n.refreshPromise.finally(() => {
      n.refreshPromise = undefined;
      this.subTreeRefreshPromises.delete(n);
    });
    try {
      const r = await this.doRefreshNode(n, e, t);
      n.stale = false;
      await ib.settled(r.map(s => this.doRefreshSubTree(s, e, t)));
    } finally {
      i();
    }
  }
  async doRefreshNode(n, e, t) {
    n.hasChildren = !!this.dataSource.hasChildren(n.element);
    let i;
    if (!n.hasChildren) {
      i = Promise.resolve(bl.empty());
    } else {
      const r = this.doGetChildren(n);
      if (s0c(r)) {
        i = Promise.resolve(r);
      } else {
        const s = Af(800);
        s.then(() => {
          n.slow = true;
          this._onDidChangeNodeSlowState.fire(n);
        }, o => null);
        i = r.finally(() => s.cancel());
      }
    }
    try {
      const r = await i;
      return this.setChildren(n, r, e, t);
    } catch (r) {
      if (n !== this.root && this.tree.hasElement(n)) {
        this.tree.collapse(n);
      }
      if (bf(r)) {
        return [];
      }
      throw r;
    } finally {
      if (n.slow) {
        n.slow = false;
        this._onDidChangeNodeSlowState.fire(n);
      }
    }
  }
  doGetChildren(n) {
    let e = this.refreshPromises.get(n);
    if (e) {
      return e;
    }
    const t = this.dataSource.getChildren(n.element);
    if (s0c(t)) {
      return this.processChildren(t);
    } else {
      e = dw(async () => this.processChildren(await t));
      this.refreshPromises.set(n, e);
      return e.finally(() => {
        this.refreshPromises.delete(n);
      });
    }
  }
  _onDidChangeCollapseState({
    node: n,
    deep: e
  }) {
    if (n.element !== null && !n.collapsed && n.element.stale) {
      if (e) {
        this.collapse(n.element.element);
      } else {
        this.refreshAndRenderNode(n.element, false).catch(Gc);
      }
    }
  }
  setChildren(n, e, t, i) {
    const r = [...e];
    if (n.children.length === 0 && r.length === 0) {
      return [];
    }
    const s = new Map();
    const o = new Map();
    for (const u of n.children) {
      s.set(u.element, u);
      if (this.identityProvider) {
        o.set(u.id, {
          node: u,
          collapsed: this.tree.hasElement(u) && this.tree.isCollapsed(u)
        });
      }
    }
    const a = [];
    const l = r.map(u => {
      const d = !!this.dataSource.hasChildren(u);
      if (!this.identityProvider) {
        const f = VGl({
          element: u,
          parent: n,
          hasChildren: d,
          defaultCollapseState: this.getDefaultCollapseState(u)
        });
        if (d && f.defaultCollapseState === Cq.PreserveOrExpanded) {
          a.push(f);
        }
        return f;
      }
      const m = this.identityProvider.getId(u).toString();
      const p = o.get(m);
      if (p) {
        const f = p.node;
        s.delete(f.element);
        this.nodes.delete(f.element);
        this.nodes.set(u, f);
        f.element = u;
        f.hasChildren = d;
        if (t) {
          if (p.collapsed) {
            f.children.forEach(A => ZGl(A, w => this.nodes.delete(w.element)));
            f.children.splice(0, f.children.length);
            f.stale = true;
          } else {
            a.push(f);
          }
        } else if (d && !p.collapsed) {
          a.push(f);
        }
        return f;
      }
      const g = VGl({
        element: u,
        parent: n,
        id: m,
        hasChildren: d,
        defaultCollapseState: this.getDefaultCollapseState(u)
      });
      if (i && i.viewState.focus && i.viewState.focus.indexOf(m) > -1) {
        i.focus.push(g);
      }
      if (i && i.viewState.selection && i.viewState.selection.indexOf(m) > -1) {
        i.selection.push(g);
      }
      if (i && i.viewState.expanded && i.viewState.expanded.indexOf(m) > -1 || d && g.defaultCollapseState === Cq.PreserveOrExpanded) {
        a.push(g);
      }
      return g;
    });
    for (const u of s.values()) {
      ZGl(u, d => this.nodes.delete(d.element));
    }
    for (const u of l) {
      this.nodes.set(u.element, u);
    }
    MMo(n.children, 0, n.children.length, l);
    if (n !== this.root && this.autoExpandSingleChildren && l.length === 1 && a.length === 0) {
      l[0].forceExpanded = true;
      a.push(l[0]);
    }
    return a;
  }
  render(n, e, t) {
    const i = n.children.map(s => this.asTreeElement(s, e));
    const r = t && {
      ...t,
      diffIdentityProvider: t.diffIdentityProvider && {
        getId(s) {
          return t.diffIdentityProvider.getId(s.element);
        }
      }
    };
    this.tree.setChildren(n === this.root ? null : n, i, r);
    if (n !== this.root) {
      this.tree.setCollapsible(n, n.hasChildren);
    }
    this._onDidRender.fire();
  }
  asTreeElement(n, e) {
    if (n.stale) {
      return {
        element: n,
        collapsible: n.hasChildren,
        collapsed: true
      };
    }
    let t;
    if (e && e.viewState.expanded && n.id && e.viewState.expanded.indexOf(n.id) > -1) {
      t = false;
    } else if (n.forceExpanded) {
      t = false;
      n.forceExpanded = false;
    } else {
      t = n.defaultCollapseState;
    }
    return {
      element: n,
      children: n.hasChildren ? bl.map(n.children, i => this.asTreeElement(i, e)) : [],
      collapsible: n.hasChildren,
      collapsed: t
    };
  }
  processChildren(n) {
    if (this.sorter) {
      n = [...n].sort(this.sorter.compare.bind(this.sorter));
    }
    return n;
  }
  getViewState() {
    if (!this.identityProvider) {
      throw new Sq(this.user, "Can't get tree view state without an identity provider");
    }
    const n = o => this.identityProvider.getId(o).toString();
    const e = this.getFocus().map(n);
    const t = this.getSelection().map(n);
    const i = [];
    const r = this.tree.getNode();
    const s = [r];
    while (s.length > 0) {
      const o = s.pop();
      if (o !== r && o.collapsible && !o.collapsed) {
        i.push(n(o.element.element));
      }
      NMo(s, s.length, o.children);
    }
    return {
      focus: e,
      selection: t,
      expanded: i,
      scrollTop: this.scrollTop
    };
  }
  dispose() {
    this.disposables.dispose();
    this.tree.dispose();
  }
};
ygg = class FWb {
  get element() {
    return {
      elements: this.node.element.elements.map(e => e.element),
      incompressible: this.node.element.incompressible
    };
  }
  get children() {
    return this.node.children.map(e => new FWb(e));
  }
  get depth() {
    return this.node.depth;
  }
  get visibleChildrenCount() {
    return this.node.visibleChildrenCount;
  }
  get visibleChildIndex() {
    return this.node.visibleChildIndex;
  }
  get collapsible() {
    return this.node.collapsible;
  }
  get collapsed() {
    return this.node.collapsed;
  }
  get visible() {
    return this.node.visible;
  }
  get filterData() {
    return this.node.filterData;
  }
  constructor(e) {
    this.node = e;
  }
};
wgg = class {
  constructor(n, e, t, i) {
    this.renderer = n;
    this.nodeMapper = e;
    this.compressibleNodeMapperProvider = t;
    this.onDidChangeTwistieState = i;
    this.renderedNodes = new Map();
    this.disposables = [];
    this.templateId = n.templateId;
  }
  renderTemplate(n) {
    return {
      templateData: this.renderer.renderTemplate(n)
    };
  }
  renderElement(n, e, t, i) {
    this.renderer.renderElement(this.nodeMapper.map(n), e, t.templateData, i);
  }
  renderCompressedElements(n, e, t, i) {
    this.renderer.renderCompressedElements(this.compressibleNodeMapperProvider().map(n), e, t.templateData, i);
  }
  renderTwistie(n, e) {
    if (n.slow) {
      e.classList.add(...Qt.asClassNameArray(Be.treeItemLoading));
      return true;
    } else {
      e.classList.remove(...Qt.asClassNameArray(Be.treeItemLoading));
      return false;
    }
  }
  disposeElement(n, e, t, i) {
    this.renderer.disposeElement?.(this.nodeMapper.map(n), e, t.templateData, i);
  }
  disposeCompressedElements(n, e, t, i) {
    this.renderer.disposeCompressedElements?.(this.compressibleNodeMapperProvider().map(n), e, t.templateData, i);
  }
  disposeTemplate(n) {
    this.renderer.disposeTemplate(n.templateData);
  }
  dispose() {
    this.renderedNodes.clear();
    this.disposables = Bo(this.disposables);
  }
};
_gg = class extends kq {
  constructor(n, e, t, i, r, s, o = {}) {
    super(n, e, t, r, s, o);
    this.compressionDelegate = i;
    this.compressibleNodeMapper = new yca(a => new ygg(a));
    this.filter = o.filter;
  }
  getCompressedTreeNode(n) {
    const e = this.getDataNode(n);
    return this.tree.getCompressedTreeNode(e).element;
  }
  createTree(n, e, t, i, r) {
    const s = new Cca(t);
    const o = i.map(l => new wgg(l, this.nodeMapper, () => this.compressibleNodeMapper, this._onDidChangeNodeSlowState.event));
    const a = N0A(r) || {};
    return new jGl(n, e, s, o, a);
  }
  asTreeElement(n, e) {
    return {
      incompressible: this.compressionDelegate.isIncompressible(n.element),
      ...super.asTreeElement(n, e)
    };
  }
  getViewState() {
    if (!this.identityProvider) {
      throw new Sq(this.user, "Can't get tree view state without an identity provider");
    }
    const n = o => this.identityProvider.getId(o).toString();
    const e = this.getFocus().map(n);
    const t = this.getSelection().map(n);
    const i = [];
    const r = this.tree.getCompressedTreeNode();
    const s = [r];
    while (s.length > 0) {
      const o = s.pop();
      if (o !== r && o.collapsible && !o.collapsed) {
        for (const a of o.element.elements) {
          i.push(n(a.element));
        }
      }
      s.push(...o.children);
    }
    return {
      focus: e,
      selection: t,
      expanded: i,
      scrollTop: this.scrollTop
    };
  }
  render(n, e, t) {
    if (!this.identityProvider) {
      return super.render(n, e);
    }
    const i = p => this.identityProvider.getId(p).toString();
    const r = p => {
      const g = new Set();
      for (const f of p) {
        const A = this.tree.getCompressedTreeNode(f === this.root ? null : f);
        if (A.element) {
          for (const w of A.element.elements) {
            g.add(i(w.element));
          }
        }
      }
      return g;
    };
    const s = r(this.tree.getSelection());
    const o = r(this.tree.getFocus());
    super.render(n, e, t);
    const a = this.getSelection();
    let l = false;
    const u = this.getFocus();
    let d = false;
    const m = p => {
      const g = p.element;
      if (g) {
        for (let f = 0; f < g.elements.length; f++) {
          const A = i(g.elements[f].element);
          const w = g.elements[g.elements.length - 1].element;
          if (s.has(A) && a.indexOf(w) === -1) {
            a.push(w);
            l = true;
          }
          if (o.has(A) && u.indexOf(w) === -1) {
            u.push(w);
            d = true;
          }
        }
      }
      p.children.forEach(m);
    };
    m(this.tree.getCompressedTreeNode(n === this.root ? null : n));
    if (l) {
      this.setSelection(a);
    }
    if (d) {
      this.setFocus(u);
    }
  }
  processChildren(n) {
    if (this.filter) {
      n = bl.filter(n, e => {
        const t = this.filter.filter(e, 1);
        const i = M0A(t);
        if (i === 2) {
          throw new Error("Recursive tree visibility not supported in async data compressed trees");
        }
        return i === 1;
      });
    }
    return super.processChildren(n);
  }
  navigate(n) {
    return super.navigate(n);
  }
};
Cgg = class {
  constructor(n) {
    this.navigator = n;
  }
  current() {
    const n = this.navigator.current();
    if (n === null) {
      return null;
    } else {
      return n.element;
    }
  }
  previous() {
    this.navigator.previous();
    return this.current();
  }
  first() {
    this.navigator.first();
    return this.current();
  }
  last() {
    this.navigator.last();
    return this.current();
  }
  next() {
    this.navigator.next();
    return this.current();
  }
};
