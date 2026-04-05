"use strict";

// Module: out-build/vs/base/browser/ui/tree/abstractTree.js
// Offset: 24850284 (bundle byte offset)
// Size: 51861 bytes
ri();
KC();
yF();
z$();
Tb();
Ov();
Aca();
JZ();
ZVe();
SW();
_q();
wca();
iNe();
nl();
Vs();
vr();
qi();
Jr();
cu();
yn();
Q_();
rt();
sE();
k0A();
Ht();
mb();
Uc();
Ew();
qpg = class extends ove {
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
Hpg = class {
  constructor(n, e) {
    this.modelProvider = n;
    this.dnd = e;
    this.autoExpandDisposable = at.None;
    this.disposables = new Ut();
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
    this.dnd.onDragStart?.($Gl(n), e);
  }
  onDragOver(n, e, t, i, r, s = true) {
    const o = this.dnd.onDragOver($Gl(n), e && e.element, t, i, r);
    const a = this.autoExpandNode !== e;
    if (a) {
      this.autoExpandDisposable.dispose();
      this.autoExpandNode = e;
    }
    if (typeof e === "undefined") {
      return o;
    }
    if (a && typeof o != "boolean" && o.autoExpand) {
      this.autoExpandDisposable = nC(() => {
        const p = this.modelProvider();
        const g = p.getNodeLocation(e);
        if (p.isCollapsed(g)) {
          p.setCollapsed(g, false);
        }
        this.autoExpandNode = undefined;
      }, 500, this.disposables);
    }
    if (typeof o == "boolean" || !o.accept || typeof o.bubble === "undefined" || o.feedback) {
      if (!s) {
        const p = typeof o == "boolean" ? o : o.accept;
        const g = typeof o == "boolean" ? undefined : o.effect;
        return {
          accept: p,
          effect: g,
          feedback: [t]
        };
      }
      return o;
    }
    if (o.bubble === 1) {
      const p = this.modelProvider();
      const g = p.getNodeLocation(e);
      const f = p.getParentNodeLocation(g);
      const A = p.getNode(f);
      const w = f && p.getListIndex(f);
      return this.onDragOver(n, A, w, i, r, false);
    }
    const l = this.modelProvider();
    const u = l.getNodeLocation(e);
    const d = l.getListIndex(u);
    const m = l.getListRenderCount(u);
    return {
      ...o,
      feedback: _H(d, d + m)
    };
  }
  drop(n, e, t, i, r) {
    this.autoExpandDisposable.dispose();
    this.autoExpandNode = undefined;
    this.dnd.drop($Gl(n), e && e.element, t, i, r);
  }
  onDragEnd(n) {
    this.dnd.onDragEnd?.(n);
  }
  dispose() {
    this.disposables.dispose();
    this.dnd.dispose();
  }
};
Cca = class {
  constructor(n) {
    this.delegate = n;
  }
  getHeight(n) {
    return this.delegate.getHeight(n.element);
  }
  getTemplateId(n) {
    return this.delegate.getTemplateId(n.element);
  }
  hasDynamicHeight(n) {
    return !!this.delegate.hasDynamicHeight && this.delegate.hasDynamicHeight(n.element);
  }
  setDynamicHeight(n, e) {
    this.delegate.setDynamicHeight?.(n.element, e);
  }
};
qGl = class bWa {
  static lift(e) {
    if (e instanceof bWa) {
      return e;
    } else {
      return new bWa(e);
    }
  }
  static empty(e = 0) {
    return new bWa({
      focus: [],
      selection: [],
      expanded: Object.create(null),
      scrollTop: e
    });
  }
  constructor(e) {
    this.focus = new Set(e.focus);
    this.selection = new Set(e.selection);
    if (e.expanded instanceof Array) {
      this.expanded = Object.create(null);
      for (const t of e.expanded) {
        this.expanded[t] = 1;
      }
    } else {
      this.expanded = e.expanded;
    }
    this.expanded = e.expanded;
    this.scrollTop = e.scrollTop;
  }
  toJSON() {
    return {
      focus: Array.from(this.focus),
      selection: Array.from(this.selection),
      expanded: this.expanded,
      scrollTop: this.scrollTop
    };
  }
};
(function (n) {
  n.None = "none";
  n.OnHover = "onHover";
  n.Always = "always";
})(rNe ||= {});
Jpg = class {
  get elements() {
    return this._elements;
  }
  constructor(n, e = []) {
    this._elements = e;
    this.disposables = new Ut();
    this.onDidChange = In.forEach(n, t => this._elements = t, this.disposables);
  }
  dispose() {
    this.disposables.dispose();
  }
};
Gpg = class icd {
  static {
    this.DefaultIndent = 8;
  }
  constructor(e, t, i, r, s, o = {}) {
    this.renderer = e;
    this.model = t;
    this.activeNodes = r;
    this.renderedIndentGuides = s;
    this.renderedElements = new Map();
    this.renderedNodes = new Map();
    this.indent = icd.DefaultIndent;
    this.hideTwistiesOfChildlessElements = false;
    this.shouldRenderIndentGuides = false;
    this.activeIndentNodes = new Set();
    this.indentGuidesDisposable = at.None;
    this.disposables = new Ut();
    this.templateId = e.templateId;
    this.updateOptions(o);
    In.map(i, a => a.node)(this.onDidChangeNodeTwistieState, this, this.disposables);
    e.onDidChangeTwistieState?.(this.onDidChangeTwistieState, this, this.disposables);
  }
  updateOptions(e = {}) {
    if (typeof e.indent !== "undefined") {
      const t = zA(e.indent, 0, 40);
      if (t !== this.indent) {
        this.indent = t;
        for (const [i, r] of this.renderedNodes) {
          this.renderTreeElement(i, r);
        }
      }
    }
    if (typeof e.renderIndentGuides !== "undefined") {
      const t = e.renderIndentGuides !== rNe.None;
      if (t !== this.shouldRenderIndentGuides) {
        this.shouldRenderIndentGuides = t;
        for (const [i, r] of this.renderedNodes) {
          this._renderIndentGuides(i, r);
        }
        this.indentGuidesDisposable.dispose();
        if (t) {
          const i = new Ut();
          this.activeNodes.onDidChange(this._onDidChangeActiveNodes, this, i);
          this.indentGuidesDisposable = i;
          this._onDidChangeActiveNodes(this.activeNodes.elements);
        }
      }
    }
    if (typeof e.hideTwistiesOfChildlessElements !== "undefined") {
      this.hideTwistiesOfChildlessElements = e.hideTwistiesOfChildlessElements;
    }
  }
  renderTemplate(e) {
    const t = Rt(e, Ct(".monaco-tl-row"));
    const i = Rt(t, Ct(".monaco-tl-indent"));
    const r = Rt(t, Ct(".monaco-tl-twistie"));
    const s = Rt(t, Ct(".monaco-tl-contents"));
    const o = this.renderer.renderTemplate(s);
    return {
      container: e,
      indent: i,
      twistie: r,
      indentGuidesDisposable: at.None,
      templateData: o
    };
  }
  renderElement(e, t, i, r) {
    this.renderedNodes.set(e, i);
    this.renderedElements.set(e.element, e);
    this.renderTreeElement(e, i);
    this.renderer.renderElement(e, t, i.templateData, r);
  }
  disposeElement(e, t, i, r) {
    i.indentGuidesDisposable.dispose();
    this.renderer.disposeElement?.(e, t, i.templateData, r);
    if (typeof r == "number") {
      this.renderedNodes.delete(e);
      this.renderedElements.delete(e.element);
    }
  }
  disposeTemplate(e) {
    this.renderer.disposeTemplate(e.templateData);
  }
  onDidChangeTwistieState(e) {
    const t = this.renderedElements.get(e);
    if (t) {
      this.onDidChangeNodeTwistieState(t);
    }
  }
  onDidChangeNodeTwistieState(e) {
    const t = this.renderedNodes.get(e);
    if (t) {
      this._onDidChangeActiveNodes(this.activeNodes.elements);
      this.renderTreeElement(e, t);
    }
  }
  renderTreeElement(e, t) {
    const i = icd.DefaultIndent + (e.depth - 1) * this.indent;
    t.twistie.style.paddingLeft = `${i}px`;
    t.indent.style.width = `${i + this.indent - 16}px`;
    if (e.collapsible) {
      t.container.setAttribute("aria-expanded", String(!e.collapsed));
    } else {
      t.container.removeAttribute("aria-expanded");
    }
    t.twistie.classList.remove(...Qt.asClassNameArray(Be.treeItemExpanded));
    let r = false;
    if (this.renderer.renderTwistie) {
      r = this.renderer.renderTwistie(e.element, t.twistie);
    }
    if (e.collapsible && (!this.hideTwistiesOfChildlessElements || e.visibleChildrenCount > 0)) {
      if (!r) {
        t.twistie.classList.add(...Qt.asClassNameArray(Be.treeItemExpanded));
      }
      t.twistie.classList.add("collapsible");
      t.twistie.classList.toggle("collapsed", e.collapsed);
    } else {
      t.twistie.classList.remove("collapsible", "collapsed");
    }
    this._renderIndentGuides(e, t);
  }
  _renderIndentGuides(e, t) {
    th(t.indent);
    t.indentGuidesDisposable.dispose();
    if (!this.shouldRenderIndentGuides) {
      return;
    }
    const i = new Ut();
    while (true) {
      const r = this.model.getNodeLocation(e);
      const s = this.model.getParentNodeLocation(r);
      if (!s) {
        break;
      }
      const o = this.model.getNode(s);
      const a = Ct(".indent-guide", {
        style: `width: ${this.indent}px`
      });
      if (this.activeIndentNodes.has(o)) {
        a.classList.add("active");
      }
      if (t.indent.childElementCount === 0) {
        t.indent.appendChild(a);
      } else {
        t.indent.insertBefore(a, t.indent.firstElementChild);
      }
      this.renderedIndentGuides.add(o, a);
      i.add($i(() => this.renderedIndentGuides.delete(o, a)));
      e = o;
    }
    t.indentGuidesDisposable = i;
  }
  _onDidChangeActiveNodes(e) {
    if (!this.shouldRenderIndentGuides) {
      return;
    }
    const t = new Set();
    e.forEach(i => {
      const r = this.model.getNodeLocation(i);
      try {
        const s = this.model.getParentNodeLocation(r);
        if (i.collapsible && i.children.length > 0 && !i.collapsed) {
          t.add(i);
        } else if (s) {
          t.add(this.model.getNode(s));
        }
      } catch {}
    });
    this.activeIndentNodes.forEach(i => {
      if (!t.has(i)) {
        this.renderedIndentGuides.forEach(i, r => r.classList.remove("active"));
      }
    });
    t.forEach(i => {
      if (!this.activeIndentNodes.has(i)) {
        this.renderedIndentGuides.forEach(i, r => r.classList.add("active"));
      }
    });
    this.activeIndentNodes = t;
  }
  dispose() {
    this.renderedNodes.clear();
    this.renderedElements.clear();
    this.indentGuidesDisposable.dispose();
    Bo(this.disposables);
  }
};
HGl = class {
  get totalCount() {
    return this._totalCount;
  }
  get matchCount() {
    return this._matchCount;
  }
  set findMatchType(n) {
    this._findMatchType = n;
  }
  get findMatchType() {
    return this._findMatchType;
  }
  set findMode(n) {
    this._findMode = n;
  }
  get findMode() {
    return this._findMode;
  }
  set pattern(n) {
    this._pattern = n;
    this._lowercasePattern = n.toLowerCase();
  }
  constructor(n, e, t) {
    this._keyboardNavigationLabelProvider = n;
    this._filter = e;
    this._defaultFindVisibility = t;
    this._totalCount = 0;
    this._matchCount = 0;
    this._findMatchType = XW.Fuzzy;
    this._findMode = nR.Highlight;
    this._pattern = "";
    this._lowercasePattern = "";
    this.disposables = new Ut();
  }
  filter(n, e) {
    let t = 1;
    if (this._filter) {
      const s = this._filter.filter(n, e);
      if (typeof s == "boolean") {
        t = s ? 1 : 0;
      } else if (Spi(s)) {
        t = oCt(s.visibility);
      } else {
        t = s;
      }
      if (t === 0) {
        return false;
      }
    }
    this._totalCount++;
    if (!this._pattern) {
      this._matchCount++;
      return {
        data: hz.Default,
        visibility: t
      };
    }
    const i = this._keyboardNavigationLabelProvider.getKeyboardNavigationLabel(n);
    const r = Array.isArray(i) ? i : [i];
    for (const s of r) {
      const o = s && s.toString();
      if (typeof o === "undefined") {
        return {
          data: hz.Default,
          visibility: t
        };
      }
      let a;
      if (this._findMatchType === XW.Contiguous) {
        a = x0A(this._lowercasePattern, o.toLowerCase());
      } else {
        a = w9e(this._pattern, this._lowercasePattern, 0, o, o.toLowerCase(), 0, {
          firstMatchCanBeWeak: true,
          boostFullMatch: true
        });
      }
      if (a) {
        this._matchCount++;
        if (r.length === 1) {
          return {
            data: a,
            visibility: t
          };
        } else {
          return {
            data: {
              label: o,
              score: a
            },
            visibility: t
          };
        }
      }
    }
    if (this._findMode === nR.Filter) {
      if (typeof this._defaultFindVisibility == "number") {
        return this._defaultFindVisibility;
      } else if (this._defaultFindVisibility) {
        return this._defaultFindVisibility(n);
      } else {
        return 2;
      }
    } else {
      return {
        data: hz.Default,
        visibility: t
      };
    }
  }
  reset() {
    this._totalCount = 0;
    this._matchCount = 0;
  }
  dispose() {
    Bo(this.disposables);
  }
};
Wpg = class extends H3 {
  constructor(n, e, t) {
    super({
      icon: n.icon,
      title: n.title,
      isChecked: n.isChecked,
      inputActiveOptionBorder: e.inputActiveOptionBorder,
      inputActiveOptionForeground: e.inputActiveOptionForeground,
      inputActiveOptionBackground: e.inputActiveOptionBackground,
      hoverDelegate: t
    });
    this.id = n.id;
  }
};
Qpg = class {
  constructor(n) {
    this.stateMap = new Map(n.map(e => [e.id, {
      ...e
    }]));
  }
  states() {
    return Array.from(this.stateMap.values());
  }
  get(n) {
    const e = this.stateMap.get(n);
    if (e === undefined) {
      throw new Error(`No state found for toggle id ${n}`);
    }
    return e.isChecked;
  }
  set(n, e) {
    const t = this.stateMap.get(n);
    if (t === undefined) {
      throw new Error(`No state found for toggle id ${n}`);
    }
    if (t.isChecked === e) {
      return false;
    } else {
      t.isChecked = e;
      return true;
    }
  }
};
jpg = {
  inputBoxStyles: Ppg,
  toggleStyles: Eun,
  listFilterWidgetBackground: undefined,
  listFilterWidgetNoMatchesOutline: undefined,
  listFilterWidgetOutline: undefined,
  listFilterWidgetShadow: undefined
};
(function (n) {
  n[n.Highlight = 0] = "Highlight";
  n[n.Filter = 1] = "Filter";
})(nR ||= {});
(function (n) {
  n[n.Fuzzy = 0] = "Fuzzy";
  n[n.Contiguous = 1] = "Contiguous";
})(XW ||= {});
zpg = class extends at {
  get value() {
    return this.findInput.inputBox.value;
  }
  set value(n) {
    this.findInput.inputBox.value = n;
  }
  constructor(n, e, t, i, r = [], s) {
    super();
    this.tree = e;
    this.elements = kl(".monaco-tree-type-filter", [kl(".monaco-tree-type-filter-input@findInput"), kl(".monaco-tree-type-filter-actionbar@actionbar")]);
    this.toggles = [];
    this._onDidDisable = new Qe();
    this.onDidDisable = this._onDidDisable.event;
    n.appendChild(this.elements.root);
    this._register($i(() => this.elements.root.remove()));
    const o = s?.styles ?? jpg;
    if (o.listFilterWidgetBackground) {
      this.elements.root.style.backgroundColor = o.listFilterWidgetBackground;
    }
    if (o.listFilterWidgetShadow) {
      this.elements.root.style.boxShadow = `0 0 8px 2px ${o.listFilterWidgetShadow}`;
    }
    const a = this._register(F6());
    this.toggles = r.map(p => this._register(new Wpg(p, o.toggleStyles, a)));
    this.onDidToggleChange = In.any(...this.toggles.map(p => In.map(p.onChange, () => ({
      id: p.id,
      isChecked: p.checked
    }))));
    const l = s?.history || [];
    this.findInput = this._register(new _pi(this.elements.findInput, t, {
      label: _(31, null),
      placeholder: i,
      additionalToggles: this.toggles,
      showCommonFindToggles: false,
      inputBoxStyles: o.inputBoxStyles,
      toggleStyles: o.toggleStyles,
      history: new Set(l)
    }));
    this.actionbar = this._register(new Gf(this.elements.actionbar));
    const u = this._register(new Hg(this.findInput.inputBox.inputElement, "keydown"));
    const d = In.chain(u.event, p => p.map(g => new vh(g)));
    this._register(d(p => {
      if (p.equals(3)) {
        p.preventDefault();
        p.stopPropagation();
        this.findInput.inputBox.addToHistory();
        this.tree.domFocus();
        return;
      }
      if (p.equals(18)) {
        p.preventDefault();
        p.stopPropagation();
        if (this.findInput.inputBox.isAtLastInHistory() || this.findInput.inputBox.isNowhereInHistory()) {
          this.findInput.inputBox.addToHistory();
          this.tree.domFocus();
        } else {
          this.findInput.inputBox.showNextValue();
        }
        return;
      }
      if (p.equals(16)) {
        p.preventDefault();
        p.stopPropagation();
        this.findInput.inputBox.showPreviousValue();
        return;
      }
    }));
    const m = this._register(new Hs("close", _(32, null), "codicon codicon-close", true, () => this.dispose()));
    this.actionbar.push(m, {
      icon: true,
      label: false
    });
    this.onDidChangeValue = this.findInput.onDidChange;
  }
  setToggleState(n, e) {
    const t = this.toggles.find(i => i.id === n);
    if (t) {
      t.checked = e;
    }
  }
  setPlaceHolder(n) {
    this.findInput.inputBox.setPlaceHolder(n);
  }
  getHistory() {
    return this.findInput.inputBox.getHistory();
  }
  focus() {
    this.findInput.focus();
  }
  select() {
    this.findInput.select();
    this.findInput.inputBox.addToHistory(true);
  }
  showMessage(n) {
    this.findInput.showMessage(n);
  }
  clearMessage() {
    this.findInput.clearMessage();
  }
  async dispose() {
    this._onDidDisable.fire();
    this.elements.root.classList.add("disabled");
    await Af(300);
    super.dispose();
  }
};
(function (n) {
  n.Mode = "mode";
  n.MatchType = "matchType";
})(sNe ||= {});
Vpg = class {
  get pattern() {
    return this._pattern;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(n) {
    this._placeholder = n;
    this.widget?.setPlaceHolder(n);
  }
  constructor(n, e, t, i = {}) {
    this.tree = n;
    this.filter = e;
    this.contextViewProvider = t;
    this.options = i;
    this._pattern = "";
    this.previousPattern = "";
    this._onDidChangePattern = new Qe();
    this.onDidChangePattern = this._onDidChangePattern.event;
    this._onDidChangeOpenState = new Qe();
    this.onDidChangeOpenState = this._onDidChangeOpenState.event;
    this.enabledDisposables = new Ut();
    this.disposables = new Ut();
    this.toggles = new Qpg(i.toggles ?? []);
    this._placeholder = i.placeholder ?? _(33, null);
  }
  isOpened() {
    return !!this.widget;
  }
  open() {
    if (this.widget) {
      this.widget.focus();
      this.widget.select();
      return;
    }
    this.tree.updateOptions({
      paddingTop: 30
    });
    this.widget = new zpg(this.tree.getHTMLElement(), this.tree, this.contextViewProvider, this.placeholder, this.toggles.states(), {
      ...this.options,
      history: this._history
    });
    this.enabledDisposables.add(this.widget);
    this.widget.onDidChangeValue(this.onDidChangeValue, this, this.enabledDisposables);
    this.widget.onDidDisable(this.close, this, this.enabledDisposables);
    this.widget.onDidToggleChange(this.onDidToggleChange, this, this.enabledDisposables);
    this.widget.focus();
    this.widget.value = this.previousPattern;
    this.widget.select();
    this._onDidChangeOpenState.fire(true);
  }
  close() {
    if (this.widget) {
      this.tree.updateOptions({
        paddingTop: 0
      });
      this._history = this.widget.getHistory();
      this.widget = undefined;
      this.enabledDisposables.clear();
      this.previousPattern = this.pattern;
      this.onDidChangeValue("");
      this.tree.domFocus();
      this._onDidChangeOpenState.fire(false);
    }
  }
  onDidChangeValue(n) {
    this._pattern = n;
    this._onDidChangePattern.fire(n);
    this.filter.pattern = n;
    this.applyPattern(n);
  }
  onDidToggleChange(n) {
    this.toggles.set(n.id, n.isChecked);
  }
  updateToggleState(n, e) {
    this.toggles.set(n, e);
    this.widget?.setToggleState(n, e);
  }
  renderMessage(n, e) {
    if (n) {
      if (this.tree.options.showNotFoundMessage ?? true) {
        this.widget?.showMessage({
          type: 2,
          content: e ?? _(34, null)
        });
      } else {
        this.widget?.showMessage({
          type: 2
        });
      }
    } else {
      this.widget?.clearMessage();
    }
  }
  alertResults(n) {
    W_(n ? _(36, null, n) : _(35, null));
  }
  dispose() {
    this._history = undefined;
    this._onDidChangePattern.dispose();
    this.enabledDisposables.dispose();
    this.disposables.dispose();
  }
};
JGl = class extends Vpg {
  get mode() {
    if (this.toggles.get(sNe.Mode)) {
      return nR.Filter;
    } else {
      return nR.Highlight;
    }
  }
  set mode(n) {
    if (n === this.mode) {
      return;
    }
    const e = n === nR.Filter;
    this.updateToggleState(sNe.Mode, e);
    this.placeholder = _(e ? 37 : 38, null);
    this.filter.findMode = n;
    this.tree.refilter();
    this.render();
    this._onDidChangeMode.fire(n);
  }
  get matchType() {
    if (this.toggles.get(sNe.MatchType)) {
      return XW.Fuzzy;
    } else {
      return XW.Contiguous;
    }
  }
  set matchType(n) {
    if (n !== this.matchType) {
      this.updateToggleState(sNe.MatchType, n === XW.Fuzzy);
      this.filter.findMatchType = n;
      this.tree.refilter();
      this.render();
      this._onDidChangeMatchType.fire(n);
    }
  }
  constructor(n, e, t, i = {}) {
    const r = i.defaultFindMode ?? nR.Highlight;
    const s = i.defaultFindMatchType ?? XW.Fuzzy;
    const o = [{
      id: sNe.Mode,
      icon: Be.listFilter,
      title: _(39, null),
      isChecked: r === nR.Filter
    }, {
      id: sNe.MatchType,
      icon: Be.searchFuzzy,
      title: _(40, null),
      isChecked: s === XW.Fuzzy
    }];
    e.findMatchType = s;
    e.findMode = r;
    super(n, e, t, {
      ...i,
      toggles: o
    });
    this.filter = e;
    this._onDidChangeMode = new Qe();
    this.onDidChangeMode = this._onDidChangeMode.event;
    this._onDidChangeMatchType = new Qe();
    this.onDidChangeMatchType = this._onDidChangeMatchType.event;
    this.disposables.add(this.tree.onDidChangeModel(() => {
      if (this.isOpened()) {
        if (this.pattern.length !== 0) {
          this.tree.refilter();
        }
        this.render();
      }
    }));
    this.disposables.add(this.tree.onWillRefilter(() => this.filter.reset()));
  }
  updateOptions(n = {}) {
    if (n.defaultFindMode !== undefined) {
      this.mode = n.defaultFindMode;
    }
    if (n.defaultFindMatchType !== undefined) {
      this.matchType = n.defaultFindMatchType;
    }
  }
  applyPattern(n) {
    this.tree.refilter();
    if (n) {
      this.tree.focusNext(0, true, undefined, t => !hz.isDefault(t.filterData));
    }
    const e = this.tree.getFocus();
    if (e.length > 0) {
      const t = e[0];
      if (this.tree.getRelativeTop(t) === null) {
        this.tree.reveal(t, 0.5);
      }
    }
    this.render();
  }
  shouldAllowFocus(n) {
    if (!this.isOpened() || !this.pattern || this.filter.totalCount > 0 && this.filter.matchCount <= 1) {
      return true;
    } else {
      return !hz.isDefault(n.filterData);
    }
  }
  onDidToggleChange(n) {
    if (n.id === sNe.Mode) {
      this.mode = n.isChecked ? nR.Filter : nR.Highlight;
    } else if (n.id === sNe.MatchType) {
      this.matchType = n.isChecked ? XW.Fuzzy : XW.Contiguous;
    }
  }
  render() {
    const e = this.filter.matchCount === 0 && this.filter.totalCount > 0 && this.pattern.length > 0;
    this.renderMessage(e);
    if (this.pattern.length) {
      this.alertResults(this.filter.matchCount);
    }
  }
};
Kpg = class {
  constructor(n = []) {
    this.stickyNodes = n;
  }
  get count() {
    return this.stickyNodes.length;
  }
  equal(n) {
    return cg(this.stickyNodes, n.stickyNodes, T0A);
  }
  contains(n) {
    return this.stickyNodes.some(e => e.node.element === n.element);
  }
  lastNodePartiallyVisible() {
    if (this.count === 0) {
      return false;
    }
    const n = this.stickyNodes[this.count - 1];
    if (this.count === 1) {
      return n.position !== 0;
    }
    const e = this.stickyNodes[this.count - 2];
    return e.position + e.height !== n.position;
  }
  animationStateChanged(n) {
    if (!cg(this.stickyNodes, n.stickyNodes, $pg) || this.count === 0) {
      return false;
    }
    const e = this.stickyNodes[this.count - 1];
    const t = n.stickyNodes[n.count - 1];
    return e.position !== t.position;
  }
};
Ypg = class {
  constrainStickyScrollNodes(n, e, t) {
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      if (r.position + r.height > t || i >= e) {
        return n.slice(0, i);
      }
    }
    return n;
  }
};
GGl = class extends at {
  constructor(n, e, t, i, r, s = {}) {
    super();
    this.tree = n;
    this.model = e;
    this.view = t;
    this.treeDelegate = r;
    this.maxWidgetViewRatio = 0.4;
    const o = this.validateStickySettings(s);
    this.stickyScrollMaxItemCount = o.stickyScrollMaxItemCount;
    this.stickyScrollDelegate = s.stickyScrollDelegate ?? new Ypg();
    this.paddingTop = s.paddingTop ?? 0;
    this._widget = this._register(new Zpg(t.getScrollableElement(), t, n, i, r, s.accessibilityProvider));
    this.onDidChangeHasFocus = this._widget.onDidChangeHasFocus;
    this.onContextMenu = this._widget.onContextMenu;
    this._register(t.onDidScroll(() => this.update()));
    this._register(t.onDidChangeContentHeight(() => this.update()));
    this._register(n.onDidChangeCollapseState(() => this.update()));
    this._register(e.onDidSpliceRenderedNodes(a => {
      const l = this._widget.state;
      if (!l) {
        return;
      }
      if (a.deleteCount > 0 && l.stickyNodes.some(m => !this.model.has(this.model.getNodeLocation(m.node)))) {
        this.update();
        return;
      }
      if (l.stickyNodes.some(m => {
        const p = this.model.getListIndex(this.model.getNodeLocation(m.node));
        return p >= a.start && p < a.start + a.deleteCount && l.contains(m.node);
      })) {
        this._widget.rerender();
      }
    }));
    this.update();
  }
  get height() {
    return this._widget.height;
  }
  get count() {
    return this._widget.count;
  }
  getNode(n) {
    return this._widget.getNode(n);
  }
  getNodeAtHeight(n) {
    let e;
    if (n === 0) {
      e = this.view.firstVisibleIndex;
    } else {
      e = this.view.indexAt(n + this.view.scrollTop);
    }
    if (!(e < 0) && !(e >= this.view.length)) {
      return this.view.element(e);
    }
  }
  update() {
    const n = this.getNodeAtHeight(this.paddingTop);
    if (!n || this.tree.scrollTop <= this.paddingTop) {
      this._widget.setState(undefined);
      return;
    }
    const e = this.findStickyState(n);
    this._widget.setState(e);
  }
  findStickyState(n) {
    const e = [];
    let t = n;
    let i = 0;
    let r = this.getNextStickyNode(t, undefined, i);
    while (r && (e.push(r), i += r.height, !(e.length <= this.stickyScrollMaxItemCount) || !(t = this.getNextVisibleNode(r), !t))) {
      r = this.getNextStickyNode(t, r.node, i);
    }
    const s = this.constrainStickyNodes(e);
    if (s.length) {
      return new Kpg(s);
    } else {
      return undefined;
    }
  }
  getNextVisibleNode(n) {
    return this.getNodeAtHeight(n.position + n.height);
  }
  getNextStickyNode(n, e, t) {
    const i = this.getAncestorUnderPrevious(n, e);
    if (i && (i !== n || !!this.nodeIsUncollapsedParent(n) && !this.nodeTopAlignsWithStickyNodesBottom(n, t))) {
      return this.createStickyScrollNode(i, t);
    }
  }
  nodeTopAlignsWithStickyNodesBottom(n, e) {
    const t = this.getNodeIndex(n);
    const i = this.view.getElementTop(t);
    const r = e;
    return this.view.scrollTop === i - r;
  }
  createStickyScrollNode(n, e) {
    const t = this.treeDelegate.getHeight(n);
    const {
      startIndex: i,
      endIndex: r
    } = this.getNodeRange(n);
    const s = this.calculateStickyNodePosition(r, e, t);
    return {
      node: n,
      position: s,
      height: t,
      startIndex: i,
      endIndex: r
    };
  }
  getAncestorUnderPrevious(n, e = undefined) {
    let t = n;
    let i = this.getParentNode(t);
    while (i) {
      if (i === e) {
        return t;
      }
      t = i;
      i = this.getParentNode(t);
    }
    if (e === undefined) {
      return t;
    }
  }
  calculateStickyNodePosition(n, e, t) {
    let i = this.view.getRelativeTop(n);
    if (i === null && this.view.firstVisibleIndex === n && n + 1 < this.view.length) {
      const l = this.treeDelegate.getHeight(this.view.element(n));
      const u = this.view.getRelativeTop(n + 1);
      i = u ? u - l / this.view.renderHeight : null;
    }
    if (i === null) {
      return e;
    }
    const r = this.view.element(n);
    const s = this.treeDelegate.getHeight(r);
    const a = i * this.view.renderHeight + s;
    if (e + t > a && e <= a) {
      return a - t;
    } else {
      return e;
    }
  }
  constrainStickyNodes(n) {
    if (n.length === 0) {
      return [];
    }
    const e = this.view.renderHeight * this.maxWidgetViewRatio;
    const t = n[n.length - 1];
    if (n.length <= this.stickyScrollMaxItemCount && t.position + t.height <= e) {
      return n;
    }
    const i = this.stickyScrollDelegate.constrainStickyScrollNodes(n, this.stickyScrollMaxItemCount, e);
    if (!i.length) {
      return [];
    }
    const r = i[i.length - 1];
    if (i.length > this.stickyScrollMaxItemCount || r.position + r.height > e) {
      throw new Error("stickyScrollDelegate violates constraints");
    }
    return i;
  }
  getParentNode(n) {
    const e = this.model.getNodeLocation(n);
    const t = this.model.getParentNodeLocation(e);
    if (t) {
      return this.model.getNode(t);
    } else {
      return undefined;
    }
  }
  nodeIsUncollapsedParent(n) {
    const e = this.model.getNodeLocation(n);
    return this.model.getListRenderCount(e) > 1;
  }
  getNodeIndex(n) {
    const e = this.model.getNodeLocation(n);
    return this.model.getListIndex(e);
  }
  getNodeRange(n) {
    const e = this.model.getNodeLocation(n);
    const t = this.model.getListIndex(e);
    if (t < 0) {
      throw new Error("Node not found in tree");
    }
    const i = this.model.getListRenderCount(e);
    const r = t + i - 1;
    return {
      startIndex: t,
      endIndex: r
    };
  }
  nodePositionTopBelowWidget(n) {
    const e = [];
    let t = this.getParentNode(n);
    while (t) {
      e.push(t);
      t = this.getParentNode(t);
    }
    let i = 0;
    for (let r = 0; r < e.length && r < this.stickyScrollMaxItemCount; r++) {
      i += this.treeDelegate.getHeight(e[r]);
    }
    return i;
  }
  getFocus() {
    return this._widget.getFocus();
  }
  domFocus() {
    this._widget.domFocus();
  }
  focusedLast() {
    return this._widget.focusedLast();
  }
  updateOptions(n = {}) {
    if (n.paddingTop !== undefined) {
      this.paddingTop = n.paddingTop;
    }
    if (n.stickyScrollMaxItemCount !== undefined) {
      const e = this.validateStickySettings(n);
      if (this.stickyScrollMaxItemCount !== e.stickyScrollMaxItemCount) {
        this.stickyScrollMaxItemCount = e.stickyScrollMaxItemCount;
        this.update();
      }
    }
  }
  validateStickySettings(n) {
    let e = 7;
    if (typeof n.stickyScrollMaxItemCount == "number") {
      e = Math.max(n.stickyScrollMaxItemCount, 1);
    }
    return {
      stickyScrollMaxItemCount: e
    };
  }
  setModel(n) {
    this.model = n;
  }
};
Zpg = class {
  get state() {
    return this._previousState;
  }
  constructor(n, e, t, i, r, s) {
    this.view = e;
    this.tree = t;
    this.treeRenderers = i;
    this.treeDelegate = r;
    this.accessibilityProvider = s;
    this._previousElements = [];
    this._previousStateDisposables = new Ut();
    this._rootDomNode = Ct(".monaco-tree-sticky-container.empty");
    n.appendChild(this._rootDomNode);
    const o = Ct(".monaco-tree-sticky-container-shadow");
    this._rootDomNode.appendChild(o);
    this.stickyScrollFocus = new Xpg(this._rootDomNode, e);
    this.onDidChangeHasFocus = this.stickyScrollFocus.onDidChangeHasFocus;
    this.onContextMenu = this.stickyScrollFocus.onContextMenu;
  }
  get height() {
    if (!this._previousState) {
      return 0;
    }
    const n = this._previousState.stickyNodes[this._previousState.count - 1];
    return n.position + n.height;
  }
  get count() {
    return this._previousState?.count ?? 0;
  }
  getNode(n) {
    return this._previousState?.stickyNodes.find(e => e.node === n);
  }
  setState(n) {
    const e = !!this._previousState && this._previousState.count > 0;
    const t = !!n && n.count > 0;
    if (!e && !t || e && t && this._previousState.equal(n)) {
      return;
    }
    if (e !== t) {
      this.setVisible(t);
    }
    if (!t) {
      this._previousState = undefined;
      this._previousElements = [];
      this._previousStateDisposables.clear();
      return;
    }
    const i = n.stickyNodes[n.count - 1];
    if (this._previousState && n.animationStateChanged(this._previousState)) {
      this._previousElements[this._previousState.count - 1].style.top = `${i.position}px`;
    } else {
      this.renderState(n);
    }
    this._previousState = n;
    this._rootDomNode.style.height = `${i.position + i.height}px`;
  }
  renderState(n) {
    this._previousStateDisposables.clear();
    const e = Array(n.count);
    for (let t = n.count - 1; t >= 0; t--) {
      const i = n.stickyNodes[t];
      const {
        element: r,
        disposable: s
      } = this.createElement(i, t, n.count);
      e[t] = r;
      this._rootDomNode.appendChild(r);
      this._previousStateDisposables.add(s);
    }
    this.stickyScrollFocus.updateElements(e, n);
    this._previousElements = e;
  }
  rerender() {
    if (this._previousState) {
      this.renderState(this._previousState);
    }
  }
  createElement(n, e, t) {
    const i = n.startIndex;
    const r = document.createElement("div");
    r.style.top = `${n.position}px`;
    if (this.tree.options.setRowHeight !== false) {
      r.style.height = `${n.height}px`;
    }
    if (this.tree.options.setRowLineHeight !== false) {
      r.style.lineHeight = `${n.height}px`;
    }
    r.classList.add("monaco-tree-sticky-row");
    r.classList.add("monaco-list-row");
    r.setAttribute("data-index", `${i}`);
    r.setAttribute("data-parity", i % 2 === 0 ? "even" : "odd");
    r.setAttribute("id", this.view.getElementID(i));
    const s = this.setAccessibilityAttributes(r, n.node.element, e, t);
    const o = this.treeDelegate.getTemplateId(n.node);
    const a = this.treeRenderers.find(m => m.templateId === o);
    if (!a) {
      throw new Error(`No renderer found for template id ${o}`);
    }
    let l = n.node;
    if (l === this.tree.getNode(this.tree.getNodeLocation(n.node))) {
      l = new Proxy(n.node, {});
    }
    const u = a.renderTemplate(r);
    a.renderElement(l, n.startIndex, u, n.height);
    const d = $i(() => {
      s.dispose();
      a.disposeElement(l, n.startIndex, u, n.height);
      a.disposeTemplate(u);
      r.remove();
    });
    return {
      element: r,
      disposable: d
    };
  }
  setAccessibilityAttributes(n, e, t, i) {
    if (!this.accessibilityProvider) {
      return at.None;
    }
    if (this.accessibilityProvider.getSetSize) {
      n.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(e, t, i)));
    }
    if (this.accessibilityProvider.getPosInSet) {
      n.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(e, t)));
    }
    if (this.accessibilityProvider.getRole) {
      n.setAttribute("role", this.accessibilityProvider.getRole(e) ?? "treeitem");
    }
    const r = this.accessibilityProvider.getAriaLabel(e);
    const s = r && typeof r != "string" ? r : F0(r);
    const o = Oc(l => {
      const u = l.readObservable(s);
      if (u) {
        n.setAttribute("aria-label", u);
      } else {
        n.removeAttribute("aria-label");
      }
    });
    if (typeof r != "string") {
      if (r) {
        n.setAttribute("aria-label", r.get());
      }
    }
    const a = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(e);
    if (typeof a == "number") {
      n.setAttribute("aria-level", `${a}`);
    }
    n.setAttribute("aria-selected", String(false));
    return o;
  }
  setVisible(n) {
    this._rootDomNode.classList.toggle("empty", !n);
    if (!n) {
      this.stickyScrollFocus.updateElements([], undefined);
    }
  }
  getFocus() {
    return this.stickyScrollFocus.getFocus();
  }
  domFocus() {
    this.stickyScrollFocus.domFocus();
  }
  focusedLast() {
    return this.stickyScrollFocus.focusedLast();
  }
  dispose() {
    this.stickyScrollFocus.dispose();
    this._previousStateDisposables.dispose();
    this._rootDomNode.remove();
  }
};
Xpg = class extends at {
  get domHasFocus() {
    return this._domHasFocus;
  }
  set domHasFocus(n) {
    if (n !== this._domHasFocus) {
      this._onDidChangeHasFocus.fire(n);
      this._domHasFocus = n;
    }
  }
  constructor(n, e) {
    super();
    this.container = n;
    this.view = e;
    this.focusedIndex = -1;
    this.elements = [];
    this._onDidChangeHasFocus = new Qe();
    this.onDidChangeHasFocus = this._onDidChangeHasFocus.event;
    this._onContextMenu = new Qe();
    this.onContextMenu = this._onContextMenu.event;
    this._domHasFocus = false;
    this._register(ei(this.container, "focus", () => this.onFocus()));
    this._register(ei(this.container, "blur", () => this.onBlur()));
    this._register(this.view.onDidFocus(() => this.toggleStickyScrollFocused(false)));
    this._register(this.view.onKeyDown(t => this.onKeyDown(t)));
    this._register(this.view.onMouseDown(t => this.onMouseDown(t)));
    this._register(this.view.onContextMenu(t => this.handleContextMenu(t)));
  }
  handleContextMenu(n) {
    const e = n.browserEvent.target;
    if (!u3n(e) && !l3n(e)) {
      if (this.focusedLast()) {
        this.view.domFocus();
      }
      return;
    }
    if (!BH(n.browserEvent)) {
      if (!this.state) {
        throw new Error("Context menu should not be triggered when state is undefined");
      }
      const s = this.state.stickyNodes.findIndex(o => o.node.element === n.element?.element);
      if (s === -1) {
        throw new Error("Context menu should not be triggered when element is not in sticky scroll widget");
      }
      this.container.focus();
      this.setFocus(s);
      return;
    }
    if (!this.state || this.focusedIndex < 0) {
      throw new Error("Context menu key should not be triggered when focus is not in sticky scroll widget");
    }
    const i = this.state.stickyNodes[this.focusedIndex].node.element;
    const r = this.elements[this.focusedIndex];
    this._onContextMenu.fire({
      element: i,
      anchor: r,
      browserEvent: n.browserEvent,
      isStickyScroll: true
    });
  }
  onKeyDown(n) {
    if (this.domHasFocus && this.state) {
      if (n.key === "ArrowUp") {
        this.setFocusedElement(Math.max(0, this.focusedIndex - 1));
        n.preventDefault();
        n.stopPropagation();
      } else if (n.key === "ArrowDown" || n.key === "ArrowRight") {
        if (this.focusedIndex >= this.state.count - 1) {
          const e = this.state.stickyNodes[this.state.count - 1].startIndex + 1;
          this.view.domFocus();
          this.view.setFocus([e]);
          this.scrollNodeUnderWidget(e, this.state);
        } else {
          this.setFocusedElement(this.focusedIndex + 1);
        }
        n.preventDefault();
        n.stopPropagation();
      }
    }
  }
  onMouseDown(n) {
    const e = n.browserEvent.target;
    if (!!u3n(e) || !!l3n(e)) {
      n.browserEvent.preventDefault();
      n.browserEvent.stopPropagation();
    }
  }
  updateElements(n, e) {
    if (e && e.count === 0) {
      throw new Error("Sticky scroll state must be undefined when there are no sticky nodes");
    }
    if (e && e.count !== n.length) {
      throw new Error("Sticky scroll focus received illigel state");
    }
    const t = this.focusedIndex;
    this.removeFocus();
    this.elements = n;
    this.state = e;
    if (e) {
      const i = zA(t, 0, e.count - 1);
      this.setFocus(i);
    } else if (this.domHasFocus) {
      this.view.domFocus();
    }
    this.container.tabIndex = e ? 0 : -1;
  }
  setFocusedElement(n) {
    const e = this.state;
    if (!e) {
      throw new Error("Cannot set focus when state is undefined");
    }
    this.setFocus(n);
    if (!(n < e.count - 1) && e.lastNodePartiallyVisible()) {
      const t = e.stickyNodes[n];
      this.scrollNodeUnderWidget(t.endIndex + 1, e);
    }
  }
  scrollNodeUnderWidget(n, e) {
    const t = e.stickyNodes[e.count - 1];
    const i = e.count > 1 ? e.stickyNodes[e.count - 2] : undefined;
    const r = this.view.getElementTop(n);
    const s = i ? i.position + i.height + t.height : t.height;
    this.view.scrollTop = r - s;
  }
  getFocus() {
    if (!!this.state && this.focusedIndex !== -1) {
      return this.state.stickyNodes[this.focusedIndex].node.element;
    }
  }
  domFocus() {
    if (!this.state) {
      throw new Error("Cannot focus when state is undefined");
    }
    this.container.focus();
  }
  focusedLast() {
    if (this.state) {
      return this.view.getHTMLElement().classList.contains("sticky-scroll-focused");
    } else {
      return false;
    }
  }
  removeFocus() {
    if (this.focusedIndex !== -1) {
      this.toggleElementFocus(this.elements[this.focusedIndex], false);
      this.focusedIndex = -1;
    }
  }
  setFocus(n) {
    if (n < 0) {
      throw new Error("addFocus() can not remove focus");
    }
    if (!this.state && n >= 0) {
      throw new Error("Cannot set focus index when state is undefined");
    }
    if (this.state && n >= this.state.count) {
      throw new Error("Cannot set focus index to an index that does not exist");
    }
    const e = this.focusedIndex;
    if (e >= 0) {
      this.toggleElementFocus(this.elements[e], false);
    }
    if (n >= 0) {
      this.toggleElementFocus(this.elements[n], true);
    }
    this.focusedIndex = n;
  }
  toggleElementFocus(n, e) {
    this.toggleElementActiveFocus(n, e && this.domHasFocus);
    this.toggleElementPassiveFocus(n, e);
  }
  toggleCurrentElementActiveFocus(n) {
    if (this.focusedIndex !== -1) {
      this.toggleElementActiveFocus(this.elements[this.focusedIndex], n);
    }
  }
  toggleElementActiveFocus(n, e) {
    n.classList.toggle("focused", e);
  }
  toggleElementPassiveFocus(n, e) {
    n.classList.toggle("passive-focused", e);
  }
  toggleStickyScrollFocused(n) {
    this.view.getHTMLElement().classList.toggle("sticky-scroll-focused", n);
  }
  onFocus() {
    if (!this.state || this.elements.length === 0) {
      throw new Error("Cannot focus when state is undefined or elements are empty");
    }
    this.domHasFocus = true;
    this.toggleStickyScrollFocused(true);
    this.toggleCurrentElementActiveFocus(true);
    if (this.focusedIndex === -1) {
      this.setFocus(0);
    }
  }
  onBlur() {
    this.domHasFocus = false;
    this.toggleCurrentElementActiveFocus(false);
  }
  dispose() {
    this.toggleStickyScrollFocused(false);
    this._onDidChangeHasFocus.fire(false);
    super.dispose();
  }
};
Sca = class {
  get nodeSet() {
    this._nodeSet ||= this.createNodeSet();
    return this._nodeSet;
  }
  constructor(n, e) {
    this.getFirstViewElementWithTrait = n;
    this.identityProvider = e;
    this.nodes = [];
    this._onDidChange = new Qe();
    this.onDidChange = this._onDidChange.event;
  }
  set(n, e) {
    if (!!e?.__forceEvent || !cg(this.nodes, n)) {
      this._set(n, false, e);
    }
  }
  _set(n, e, t) {
    this.nodes = [...n];
    this.elements = undefined;
    this._nodeSet = undefined;
    if (!e) {
      const i = this;
      this._onDidChange.fire({
        get elements() {
          return i.get();
        },
        browserEvent: t
      });
    }
  }
  get() {
    this.elements ||= this.nodes.map(n => n.element);
    return [...this.elements];
  }
  getNodes() {
    return this.nodes;
  }
  has(n) {
    return this.nodeSet.has(n);
  }
  onDidModelSplice({
    insertedNodes: n,
    deletedNodes: e
  }) {
    if (!this.identityProvider) {
      const a = this.createNodeSet();
      const l = u => a.delete(u);
      e.forEach(u => _ca(u, l));
      this.set([...a.values()]);
      return;
    }
    const t = new Set();
    const i = a => t.add(this.identityProvider.getId(a.element).toString());
    e.forEach(a => _ca(a, i));
    const r = new Map();
    const s = a => r.set(this.identityProvider.getId(a.element).toString(), a);
    n.forEach(a => _ca(a, s));
    const o = [];
    for (const a of this.nodes) {
      const l = this.identityProvider.getId(a.element).toString();
      if (!t.has(l)) {
        o.push(a);
      } else {
        const d = r.get(l);
        if (d && d.visible) {
          o.push(d);
        }
      }
    }
    if (this.nodes.length > 0 && o.length === 0) {
      const a = this.getFirstViewElementWithTrait();
      if (a) {
        o.push(a);
      }
    }
    this._set(o, true);
  }
  createNodeSet() {
    const n = new Set();
    for (const e of this.nodes) {
      n.add(e);
    }
    return n;
  }
};
egg = class extends O3o {
  constructor(n, e, t) {
    super(n);
    this.tree = e;
    this.stickyScrollProvider = t;
  }
  onViewPointer(n) {
    if (o_h(n.browserEvent.target) || dW(n.browserEvent.target) || b3t(n.browserEvent.target) || n.browserEvent.isHandledByList) {
      return;
    }
    const e = n.element;
    if (!e) {
      return super.onViewPointer(n);
    }
    if (this.isSelectionRangeChangeEvent(n) || this.isSelectionSingleChangeEvent(n)) {
      return super.onViewPointer(n);
    }
    const t = n.browserEvent.target;
    const i = t.classList.contains("monaco-tl-twistie") || t.classList.contains("monaco-icon-label") && t.classList.contains("folder-icon") && n.browserEvent.offsetX < 16;
    const r = l3n(n.browserEvent.target);
    let s = false;
    if (r) {
      s = true;
    } else if (typeof this.tree.expandOnlyOnTwistieClick == "function") {
      s = this.tree.expandOnlyOnTwistieClick(e.element);
    } else {
      s = !!this.tree.expandOnlyOnTwistieClick;
    }
    if (r) {
      this.handleStickyScrollMouseEvent(n, e);
    } else {
      if (s && !i && n.browserEvent.detail !== 2) {
        return super.onViewPointer(n);
      }
      if (!this.tree.expandOnDoubleClick && n.browserEvent.detail === 2) {
        return super.onViewPointer(n);
      }
    }
    if (e.collapsible && (!r || i)) {
      const o = this.tree.getNodeLocation(e);
      const a = n.browserEvent.altKey;
      this.tree.setFocus([o]);
      this.tree.toggleCollapsed(o, a);
      if (i) {
        n.browserEvent.isHandledByList = true;
        return;
      }
    }
    if (!r) {
      super.onViewPointer(n);
    }
  }
  handleStickyScrollMouseEvent(n, e) {
    if (RuA(n.browserEvent.target) || PuA(n.browserEvent.target)) {
      return;
    }
    const t = this.stickyScrollProvider();
    if (!t) {
      throw new Error("Sticky scroll controller not found");
    }
    const i = this.list.indexOf(e);
    const r = this.list.getElementTop(i);
    const s = t.nodePositionTopBelowWidget(e);
    this.tree.scrollTop = r - s;
    this.list.domFocus();
    this.list.setFocus([i]);
    this.list.setSelection([i]);
  }
  onDoubleClick(n) {
    if (!n.browserEvent.target.classList.contains("monaco-tl-twistie") && !!this.tree.expandOnDoubleClick && !n.browserEvent.isHandledByList) {
      super.onDoubleClick(n);
    }
  }
  onMouseDown(n) {
    const e = n.browserEvent.target;
    if (!u3n(e) && !l3n(e)) {
      super.onMouseDown(n);
      return;
    }
  }
  onContextMenu(n) {
    const e = n.browserEvent.target;
    if (!u3n(e) && !l3n(e)) {
      super.onContextMenu(n);
      return;
    }
  }
};
tgg = class extends JR {
  constructor(n, e, t, i, r, s, o, a) {
    super(n, e, t, i, a);
    this.focusTrait = r;
    this.selectionTrait = s;
    this.anchorTrait = o;
  }
  createMouseController(n) {
    return new egg(this, n.tree, n.stickyScrollProvider);
  }
  splice(n, e, t = []) {
    super.splice(n, e, t);
    if (t.length === 0) {
      return;
    }
    const i = [];
    const r = [];
    let s;
    t.forEach((o, a) => {
      if (this.focusTrait.has(o)) {
        i.push(n + a);
      }
      if (this.selectionTrait.has(o)) {
        r.push(n + a);
      }
      if (this.anchorTrait.has(o)) {
        s = n + a;
      }
    });
    if (i.length > 0) {
      super.setFocus(xb([...super.getFocus(), ...i]));
    }
    if (r.length > 0) {
      super.setSelection(xb([...super.getSelection(), ...r]));
    }
    if (typeof s == "number") {
      super.setAnchor(s);
    }
  }
  setFocus(n, e, t = false) {
    super.setFocus(n, e);
    if (!t) {
      this.focusTrait.set(n.map(i => this.element(i)), e);
    }
  }
  setSelection(n, e, t = false) {
    super.setSelection(n, e);
    if (!t) {
      this.selectionTrait.set(n.map(i => this.element(i)), e);
    }
  }
  setAnchor(n, e = false) {
    super.setAnchor(n);
    if (!e) {
      if (typeof n === "undefined") {
        this.anchorTrait.set([]);
      } else {
        this.anchorTrait.set([this.element(n)]);
      }
    }
  }
};
(function (n) {
  n[n.Tree = 0] = "Tree";
  n[n.StickyScroll = 1] = "StickyScroll";
})(ngg ||= {});
aCt = class {
  get onDidScroll() {
    return this.view.onDidScroll;
  }
  get onDidChangeFocus() {
    return this.eventBufferer.wrapEvent(this.focus.onDidChange);
  }
  get onDidChangeSelection() {
    return this.eventBufferer.wrapEvent(this.selection.onDidChange);
  }
  get onMouseClick() {
    return In.map(this.view.onMouseClick, Bun);
  }
  get onMouseDblClick() {
    return In.filter(In.map(this.view.onMouseDblClick, Bun), n => n.target !== JUe.Filter);
  }
  get onMouseOver() {
    return In.map(this.view.onMouseOver, Bun);
  }
  get onMouseOut() {
    return In.map(this.view.onMouseOut, Bun);
  }
  get onContextMenu() {
    return In.any(In.filter(In.map(this.view.onContextMenu, I0A), n => !n.isStickyScroll), this.stickyScrollController?.onContextMenu ?? In.None);
  }
  get onTap() {
    return In.map(this.view.onTap, Bun);
  }
  get onPointer() {
    return In.map(this.view.onPointer, Bun);
  }
  get onKeyDown() {
    return this.view.onKeyDown;
  }
  get onKeyUp() {
    return this.view.onKeyUp;
  }
  get onKeyPress() {
    return this.view.onKeyPress;
  }
  get onDidFocus() {
    return this.view.onDidFocus;
  }
  get onDidBlur() {
    return this.view.onDidBlur;
  }
  get onDidChangeModel() {
    return In.any(this.onDidChangeModelRelay.event, this.onDidSwapModel.event);
  }
  get onDidChangeCollapseState() {
    return this.onDidChangeCollapseStateRelay.event;
  }
  get onDidChangeRenderNodeCount() {
    return this.onDidChangeRenderNodeCountRelay.event;
  }
  get findMode() {
    return this.findController?.mode ?? nR.Highlight;
  }
  set findMode(n) {
    if (this.findController) {
      this.findController.mode = n;
    }
  }
  get findMatchType() {
    return this.findController?.matchType ?? XW.Fuzzy;
  }
  set findMatchType(n) {
    if (this.findController) {
      this.findController.matchType = n;
    }
  }
  get onDidChangeFindPattern() {
    if (this.findController) {
      return this.findController.onDidChangePattern;
    } else {
      return In.None;
    }
  }
  get expandOnDoubleClick() {
    if (typeof this._options.expandOnDoubleClick === "undefined") {
      return true;
    } else {
      return this._options.expandOnDoubleClick;
    }
  }
  get expandOnlyOnTwistieClick() {
    if (typeof this._options.expandOnlyOnTwistieClick === "undefined") {
      return true;
    } else {
      return this._options.expandOnlyOnTwistieClick;
    }
  }
  get onDidDispose() {
    return this.view.onDidDispose;
  }
  constructor(n, e, t, i, r = {}) {
    this._user = n;
    this._options = r;
    this.eventBufferer = new LFt();
    this.onDidChangeFindOpenState = In.None;
    this.onDidChangeStickyScrollFocused = In.None;
    this.disposables = new Ut();
    this.onDidSwapModel = this.disposables.add(new Qe());
    this.onDidChangeModelRelay = this.disposables.add(new CH());
    this.onDidSpliceModelRelay = this.disposables.add(new CH());
    this.onDidChangeCollapseStateRelay = this.disposables.add(new CH());
    this.onDidChangeRenderNodeCountRelay = this.disposables.add(new CH());
    this.onDidChangeActiveNodesRelay = this.disposables.add(new CH());
    this._onWillRefilter = new Qe();
    this.onWillRefilter = this._onWillRefilter.event;
    this._onDidUpdateOptions = new Qe();
    this.onDidUpdateOptions = this._onDidUpdateOptions.event;
    this.modelDisposables = new Ut();
    if (r.keyboardNavigationLabelProvider && (r.findWidgetEnabled ?? true)) {
      this.findFilter = new HGl(r.keyboardNavigationLabelProvider, r.filter, r.defaultFindVisibility);
      r = {
        ...r,
        filter: this.findFilter
      };
      this.disposables.add(this.findFilter);
    }
    this.model = this.createModel(n, r);
    this.treeDelegate = new Cca(t);
    const s = this.disposables.add(new Jpg(this.onDidChangeActiveNodesRelay.event));
    const o = new RFt();
    this.renderers = i.map(a => new Gpg(a, this.model, this.onDidChangeCollapseStateRelay.event, s, o, r));
    for (const a of this.renderers) {
      this.disposables.add(a);
    }
    this.focus = new Sca(() => this.view.getFocusedElements()[0], r.identityProvider);
    this.selection = new Sca(() => this.view.getSelectedElements()[0], r.identityProvider);
    this.anchor = new Sca(() => this.view.getAnchorElement(), r.identityProvider);
    this.view = new tgg(n, e, this.treeDelegate, this.renderers, this.focus, this.selection, this.anchor, {
      ...E0A(() => this.model, this.disposables, r),
      tree: this,
      stickyScrollProvider: () => this.stickyScrollController
    });
    this.setupModel(this.model);
    if (r.keyboardSupport !== false) {
      const a = In.chain(this.view.onKeyDown, l => l.filter(u => !dW(u.target)).map(u => new vh(u)));
      In.chain(a, l => l.filter(u => u.keyCode === 15))(this.onLeftArrow, this, this.disposables);
      In.chain(a, l => l.filter(u => u.keyCode === 17))(this.onRightArrow, this, this.disposables);
      In.chain(a, l => l.filter(u => u.keyCode === 10))(this.onSpace, this, this.disposables);
    }
    if ((r.findWidgetEnabled ?? true) && r.keyboardNavigationLabelProvider && r.contextViewProvider) {
      const a = {
        styles: r.findWidgetStyles,
        defaultFindMode: r.defaultFindMode,
        defaultFindMatchType: r.defaultFindMatchType,
        showNotFoundMessage: r.showNotFoundMessage
      };
      this.findController = this.disposables.add(new JGl(this, this.findFilter, r.contextViewProvider, a));
      this.focusNavigationFilter = l => this.findController.shouldAllowFocus(l);
      this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState;
      this.onDidChangeFindMode = this.findController.onDidChangeMode;
      this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType;
    } else {
      this.onDidChangeFindMode = In.None;
      this.onDidChangeFindMatchType = In.None;
    }
    if (r.enableStickyScroll) {
      this.stickyScrollController = new GGl(this, this.model, this.view, this.renderers, this.treeDelegate, r);
      this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus;
    }
    this.styleElement = wC(this.view.getHTMLElement());
    this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === rNe.Always);
  }
  updateOptions(n = {}) {
    this._options = {
      ...this._options,
      ...n
    };
    for (const e of this.renderers) {
      e.updateOptions(n);
    }
    this.view.updateOptions(this._options);
    this.findController?.updateOptions(n);
    this.updateStickyScroll(n);
    this._onDidUpdateOptions.fire(this._options);
    this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === rNe.Always);
  }
  get options() {
    return this._options;
  }
  updateStickyScroll(n) {
    if (!this.stickyScrollController && this._options.enableStickyScroll) {
      this.stickyScrollController = new GGl(this, this.model, this.view, this.renderers, this.treeDelegate, this._options);
      this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus;
    } else if (this.stickyScrollController && !this._options.enableStickyScroll) {
      this.onDidChangeStickyScrollFocused = In.None;
      this.stickyScrollController.dispose();
      this.stickyScrollController = undefined;
    }
    this.stickyScrollController?.updateOptions(n);
  }
  updateWidth(n) {
    const e = this.model.getListIndex(n);
    if (e !== -1) {
      this.view.updateWidth(e);
    }
  }
  getHTMLElement() {
    return this.view.getHTMLElement();
  }
  get contentHeight() {
    return this.view.contentHeight;
  }
  get contentWidth() {
    return this.view.contentWidth;
  }
  get onDidChangeContentHeight() {
    return this.view.onDidChangeContentHeight;
  }
  get onDidChangeContentWidth() {
    return this.view.onDidChangeContentWidth;
  }
  get scrollTop() {
    return this.view.scrollTop;
  }
  set scrollTop(n) {
    this.view.scrollTop = n;
  }
  get scrollLeft() {
    return this.view.scrollLeft;
  }
  set scrollLeft(n) {
    this.view.scrollLeft = n;
  }
  get scrollHeight() {
    return this.view.scrollHeight;
  }
  get renderHeight() {
    return this.view.renderHeight;
  }
  get firstVisibleElement() {
    let n = this.view.firstVisibleIndex;
    if (this.stickyScrollController) {
      n += this.stickyScrollController.count;
    }
    if (n < 0 || n >= this.view.length) {
      return undefined;
    } else {
      return this.view.element(n).element;
    }
  }
  get lastVisibleElement() {
    const n = this.view.lastVisibleIndex;
    return this.view.element(n).element;
  }
  get ariaLabel() {
    return this.view.ariaLabel;
  }
  set ariaLabel(n) {
    this.view.ariaLabel = n;
  }
  get selectionSize() {
    return this.selection.getNodes().length;
  }
  domFocus() {
    if (this.stickyScrollController?.focusedLast()) {
      this.stickyScrollController.domFocus();
    } else {
      this.view.domFocus();
    }
  }
  isDOMFocused() {
    return zP(this.getHTMLElement());
  }
  layout(n, e) {
    this.view.layout(n, e);
  }
  style(n) {
    const e = `.${this.view.domId}`;
    const t = [];
    if (n.treeIndentGuidesStroke) {
      t.push(`.monaco-list${e}:hover .monaco-tl-indent > .indent-guide, .monaco-list${e}.always .monaco-tl-indent > .indent-guide  { border-color: ${n.treeInactiveIndentGuidesStroke}; }`);
      t.push(`.monaco-list${e} .monaco-tl-indent > .indent-guide.active { border-color: ${n.treeIndentGuidesStroke}; }`);
    }
    const i = n.treeStickyScrollBackground ?? n.listBackground;
    if (i) {
      t.push(`.monaco-list${e} .monaco-scrollable-element .monaco-tree-sticky-container { background-color: ${i}; }`);
      t.push(`.monaco-list${e} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-row { background-color: ${i}; }`);
    }
    if (n.treeStickyScrollBorder) {
      t.push(`.monaco-list${e} .monaco-scrollable-element .monaco-tree-sticky-container { border-bottom: 1px solid ${n.treeStickyScrollBorder}; }`);
    }
    if (n.treeStickyScrollShadow) {
      t.push(`.monaco-list${e} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-container-shadow { box-shadow: ${n.treeStickyScrollShadow} 0 6px 6px -6px inset; height: 3px; }`);
    }
    if (n.listFocusForeground) {
      t.push(`.monaco-list${e}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { color: ${n.listFocusForeground}; }`);
      t.push(`.monaco-list${e}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { color: inherit; }`);
    }
    const r = pRe(n.listFocusAndSelectionOutline, pRe(n.listSelectionOutline, n.listFocusOutline ?? ""));
    if (r) {
      t.push(`.monaco-list${e}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused.selected { outline: 1px solid ${r}; outline-offset: -1px;}`);
      t.push(`.monaco-list${e}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused.selected { outline: inherit;}`);
    }
    if (n.listFocusOutline) {
      t.push(`.monaco-list${e}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { outline: 1px solid ${n.listFocusOutline}; outline-offset: -1px; }`);
      t.push(`.monaco-list${e}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { outline: inherit; }`);
      t.push(`.monaco-workbench.context-menu-visible .monaco-list${e}.last-focused.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.passive-focused { outline: 1px solid ${n.listFocusOutline}; outline-offset: -1px; }`);
      t.push(`.monaco-workbench.context-menu-visible .monaco-list${e}.last-focused.sticky-scroll-focused .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`);
      t.push(`.monaco-workbench.context-menu-visible .monaco-list${e}.last-focused:not(.sticky-scroll-focused) .monaco-tree-sticky-container .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`);
    }
    this.styleElement.textContent = t.join(`
`);
    this.view.style(n);
  }
  getParentElement(n) {
    const e = this.model.getParentNodeLocation(n);
    return this.model.getNode(e).element;
  }
  getFirstElementChild(n) {
    return this.model.getFirstElementChild(n);
  }
  getNode(n) {
    return this.model.getNode(n);
  }
  getNodeLocation(n) {
    return this.model.getNodeLocation(n);
  }
  collapse(n, e = false) {
    return this.model.setCollapsed(n, true, e);
  }
  expand(n, e = false) {
    return this.model.setCollapsed(n, false, e);
  }
  toggleCollapsed(n, e = false) {
    return this.model.setCollapsed(n, undefined, e);
  }
  expandAll() {
    this.model.setCollapsed(this.model.rootRef, false, true);
  }
  collapseAll() {
    this.model.setCollapsed(this.model.rootRef, true, true);
  }
  isCollapsible(n) {
    return this.model.isCollapsible(n);
  }
  setCollapsible(n, e) {
    return this.model.setCollapsible(n, e);
  }
  isCollapsed(n) {
    return this.model.isCollapsed(n);
  }
  expandTo(n) {
    this.model.expandTo(n);
  }
  triggerTypeNavigation() {
    this.view.triggerTypeNavigation();
  }
  openFind() {
    this.findController?.open();
  }
  closeFind() {
    this.findController?.close();
  }
  refilter() {
    this._onWillRefilter.fire(undefined);
    this.model.refilter();
  }
  setAnchor(n) {
    if (typeof n === "undefined") {
      return this.view.setAnchor(undefined);
    }
    this.eventBufferer.bufferEvents(() => {
      const e = this.model.getNode(n);
      this.anchor.set([e]);
      const t = this.model.getListIndex(n);
      if (t > -1) {
        this.view.setAnchor(t, true);
      }
    });
  }
  getAnchor() {
    return this.anchor.get().at(0);
  }
  setSelection(n, e) {
    this.eventBufferer.bufferEvents(() => {
      const t = n.map(r => this.model.getNode(r));
      this.selection.set(t, e);
      const i = n.map(r => this.model.getListIndex(r)).filter(r => r > -1);
      this.view.setSelection(i, e, true);
    });
  }
  getSelection() {
    return this.selection.get();
  }
  setFocus(n, e) {
    this.eventBufferer.bufferEvents(() => {
      const t = n.map(r => this.model.getNode(r));
      this.focus.set(t, e);
      const i = n.map(r => this.model.getListIndex(r)).filter(r => r > -1);
      this.view.setFocus(i, e, true);
    });
  }
  focusNext(n = 1, e = false, t, i = BH(t) && t.altKey ? undefined : this.focusNavigationFilter) {
    this.view.focusNext(n, e, t, i);
  }
  focusPrevious(n = 1, e = false, t, i = BH(t) && t.altKey ? undefined : this.focusNavigationFilter) {
    this.view.focusPrevious(n, e, t, i);
  }
  focusNextPage(n, e = BH(n) && n.altKey ? undefined : this.focusNavigationFilter) {
    return this.view.focusNextPage(n, e);
  }
  focusPreviousPage(n, e = BH(n) && n.altKey ? undefined : this.focusNavigationFilter) {
    return this.view.focusPreviousPage(n, e, () => this.stickyScrollController?.height ?? 0);
  }
  focusLast(n, e = BH(n) && n.altKey ? undefined : this.focusNavigationFilter) {
    this.view.focusLast(n, e);
  }
  focusFirst(n, e = BH(n) && n.altKey ? undefined : this.focusNavigationFilter) {
    this.view.focusFirst(n, e);
  }
  getFocus() {
    return this.focus.get();
  }
  getStickyScrollFocus() {
    const n = this.stickyScrollController?.getFocus();
    if (n !== undefined) {
      return [n];
    } else {
      return [];
    }
  }
  getFocusedPart() {
    if (this.stickyScrollController?.focusedLast()) {
      return 1;
    } else {
      return 0;
    }
  }
  reveal(n, e) {
    this.model.expandTo(n);
    const t = this.model.getListIndex(n);
    if (t !== -1) {
      if (!this.stickyScrollController) {
        this.view.reveal(t, e);
      } else {
        const i = this.stickyScrollController.nodePositionTopBelowWidget(this.getNode(n));
        this.view.reveal(t, e, i);
      }
    }
  }
  getRelativeTop(n) {
    const e = this.model.getListIndex(n);
    if (e === -1) {
      return null;
    }
    const t = this.stickyScrollController?.getNode(this.getNode(n));
    return this.view.getRelativeTop(e, t?.position ?? this.stickyScrollController?.height);
  }
  getViewState(n = this.options.identityProvider) {
    if (!n) {
      throw new Sq(this._user, "Can't get tree view state without an identity provider");
    }
    const e = s => n.getId(s).toString();
    const t = qGl.empty(this.scrollTop);
    for (const s of this.getFocus()) {
      t.focus.add(e(s));
    }
    for (const s of this.getSelection()) {
      t.selection.add(e(s));
    }
    const i = this.model.getNode();
    const r = [i];
    while (r.length > 0) {
      const s = r.pop();
      if (s !== i && s.collapsible) {
        t.expanded[e(s.element)] = s.collapsed ? 0 : 1;
      }
      NMo(r, r.length, s.children);
    }
    return t;
  }
  onLeftArrow(n) {
    n.preventDefault();
    n.stopPropagation();
    const e = this.view.getFocusedElements();
    if (e.length === 0) {
      return;
    }
    const t = e[0];
    const i = this.model.getNodeLocation(t);
    if (!this.model.setCollapsed(i, true)) {
      const s = this.model.getParentNodeLocation(i);
      if (!s) {
        return;
      }
      const o = this.model.getListIndex(s);
      this.view.reveal(o);
      this.view.setFocus([o]);
    }
  }
  onRightArrow(n) {
    n.preventDefault();
    n.stopPropagation();
    const e = this.view.getFocusedElements();
    if (e.length === 0) {
      return;
    }
    const t = e[0];
    const i = this.model.getNodeLocation(t);
    if (!this.model.setCollapsed(i, false)) {
      if (!t.children.some(a => a.visible)) {
        return;
      }
      const [s] = this.view.getFocus();
      const o = s + 1;
      this.view.reveal(o);
      this.view.setFocus([o]);
    }
  }
  onSpace(n) {
    n.preventDefault();
    n.stopPropagation();
    const e = this.view.getFocusedElements();
    if (e.length === 0) {
      return;
    }
    const t = e[0];
    const i = this.model.getNodeLocation(t);
    const r = n.browserEvent.altKey;
    this.model.setCollapsed(i, undefined, r);
  }
  setupModel(n) {
    this.modelDisposables.clear();
    this.modelDisposables.add(n.onDidSpliceRenderedNodes(({
      start: r,
      deleteCount: s,
      elements: o
    }) => this.view.splice(r, s, o)));
    const e = In.forEach(n.onDidSpliceModel, r => {
      this.eventBufferer.bufferEvents(() => {
        this.focus.onDidModelSplice(r);
        this.selection.onDidModelSplice(r);
      });
    }, this.modelDisposables);
    e(() => null, null, this.modelDisposables);
    const t = this.modelDisposables.add(new Qe());
    const i = this.modelDisposables.add(new Nv(0));
    this.modelDisposables.add(In.any(e, this.focus.onDidChange, this.selection.onDidChange)(() => {
      i.trigger(() => {
        const r = new Set();
        for (const s of this.focus.getNodes()) {
          r.add(s);
        }
        for (const s of this.selection.getNodes()) {
          r.add(s);
        }
        t.fire([...r.values()]);
      });
    }));
    this.onDidChangeActiveNodesRelay.input = t.event;
    this.onDidChangeModelRelay.input = In.signal(n.onDidSpliceModel);
    this.onDidChangeCollapseStateRelay.input = n.onDidChangeCollapseState;
    this.onDidChangeRenderNodeCountRelay.input = n.onDidChangeRenderNodeCount;
    this.onDidSpliceModelRelay.input = n.onDidSpliceModel;
  }
  navigate(n) {
    return new igg(this.view, this.model, n);
  }
  dispose() {
    Bo(this.disposables);
    this.stickyScrollController?.dispose();
    this.view.dispose();
    this.modelDisposables.dispose();
  }
};
igg = class {
  constructor(n, e, t) {
    this.view = n;
    this.model = e;
    if (t) {
      this.index = this.model.getListIndex(t);
    } else {
      this.index = -1;
    }
  }
  current() {
    if (this.index < 0 || this.index >= this.view.length) {
      return null;
    } else {
      return this.view.element(this.index).element;
    }
  }
  previous() {
    this.index--;
    return this.current();
  }
  next() {
    this.index++;
    return this.current();
  }
  first() {
    this.index = 0;
    return this.current();
  }
  last() {
    this.index = this.view.length - 1;
    return this.current();
  }
};
