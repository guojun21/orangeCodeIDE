"use strict";

// Module: out-build/vs/base/browser/ui/tree/indexTreeModel.js
// Offset: 24837544 (bundle byte offset)
// Size: 9868 bytes
iNe();
Vs();
vr();
VFt();
Cpi();
yn();
Ef();
Upg = class {
  constructor(n, e, t = {}) {
    this.user = n;
    this.rootRef = [];
    this.eventBufferer = new LFt();
    this._onDidSpliceModel = new Qe();
    this.onDidSpliceModel = this._onDidSpliceModel.event;
    this._onDidSpliceRenderedNodes = new Qe();
    this.onDidSpliceRenderedNodes = this._onDidSpliceRenderedNodes.event;
    this._onDidChangeCollapseState = new Qe();
    this.onDidChangeCollapseState = this.eventBufferer.wrapEvent(this._onDidChangeCollapseState.event);
    this._onDidChangeRenderNodeCount = new Qe();
    this.onDidChangeRenderNodeCount = this.eventBufferer.wrapEvent(this._onDidChangeRenderNodeCount.event);
    this.refilterDelayer = new Nv(Sgt);
    this.collapseByDefault = typeof t.collapseByDefault === "undefined" ? false : t.collapseByDefault;
    this.allowNonCollapsibleParents = t.allowNonCollapsibleParents ?? false;
    this.filter = t.filter;
    this.autoExpandSingleChildren = typeof t.autoExpandSingleChildren === "undefined" ? false : t.autoExpandSingleChildren;
    this.root = {
      parent: undefined,
      element: e,
      children: [],
      depth: 0,
      visibleChildrenCount: 0,
      visibleChildIndex: -1,
      collapsible: false,
      collapsed: false,
      renderNodeCount: 0,
      visibility: 1,
      visible: true,
      filterData: undefined
    };
  }
  splice(n, e, t = bl.empty(), i = {}) {
    if (n.length === 0) {
      throw new Sq(this.user, "Invalid tree location");
    }
    if (i.diffIdentityProvider) {
      this.spliceSmart(i.diffIdentityProvider, n, e, t, i);
    } else {
      this.spliceSimple(n, e, t, i);
    }
  }
  spliceSmart(n, e, t, i = bl.empty(), r, s = r.diffDepth ?? 0) {
    const {
      parentNode: o
    } = this.getParentNodeWithListIndex(e);
    if (!o.lastDiffIds) {
      return this.spliceSimple(e, t, i, r);
    }
    const a = [...i];
    const l = e[e.length - 1];
    const u = new Dun({
      getElements: () => o.lastDiffIds
    }, {
      getElements: () => [...o.children.slice(0, l), ...a, ...o.children.slice(l + t)].map(f => n.getId(f.element).toString())
    }).ComputeDiff(false);
    if (u.quitEarly) {
      o.lastDiffIds = undefined;
      return this.spliceSimple(e, t, a, r);
    }
    const d = e.slice(0, -1);
    const m = (f, A, w) => {
      if (s > 0) {
        for (let C = 0; C < w; C++) {
          f--;
          A--;
          this.spliceSmart(n, [...d, f, 0], Number.MAX_SAFE_INTEGER, a[A].children, r, s - 1);
        }
      }
    };
    let p = Math.min(o.children.length, l + t);
    let g = a.length;
    for (const f of u.changes.sort((A, w) => w.originalStart - A.originalStart)) {
      m(p, g, p - (f.originalStart + f.originalLength));
      p = f.originalStart;
      g = f.modifiedStart - l;
      this.spliceSimple([...d, p], f.originalLength, bl.slice(a, g, g + f.modifiedLength), r);
    }
    m(p, g, p);
  }
  spliceSimple(n, e, t = bl.empty(), {
    onDidCreateNode: i,
    onDidDeleteNode: r,
    diffIdentityProvider: s
  }) {
    const {
      parentNode: o,
      listIndex: a,
      revealed: l,
      visible: u
    } = this.getParentNodeWithListIndex(n);
    const d = [];
    const m = bl.map(t, B => this.createTreeNode(B, o, o.visible ? 1 : 0, l, d, i));
    const p = n[n.length - 1];
    let g = 0;
    for (let B = p; B >= 0 && B < o.children.length; B--) {
      const R = o.children[B];
      if (R.visible) {
        g = R.visibleChildIndex;
        break;
      }
    }
    const f = [];
    let A = 0;
    let w = 0;
    for (const B of m) {
      f.push(B);
      w += B.renderNodeCount;
      if (B.visible) {
        B.visibleChildIndex = g + A++;
      }
    }
    const C = MMo(o.children, p, e, f);
    if (s) {
      if (o.lastDiffIds) {
        MMo(o.lastDiffIds, p, e, f.map(B => s.getId(B.element).toString()));
      } else {
        o.lastDiffIds = o.children.map(B => s.getId(B.element).toString());
      }
    } else {
      o.lastDiffIds = undefined;
    }
    let x = 0;
    for (const B of C) {
      if (B.visible) {
        x++;
      }
    }
    if (x !== 0) {
      for (let B = p + f.length; B < o.children.length; B++) {
        const R = o.children[B];
        if (R.visible) {
          R.visibleChildIndex -= x;
        }
      }
    }
    o.visibleChildrenCount += A - x;
    if (C.length > 0 && r) {
      const B = R => {
        r(R);
        R.children.forEach(B);
      };
      C.forEach(B);
    }
    if (l && u) {
      const B = C.reduce((R, N) => R + (N.visible ? N.renderNodeCount : 0), 0);
      this._updateAncestorsRenderNodeCount(o, w - B);
      this._onDidSpliceRenderedNodes.fire({
        start: a,
        deleteCount: B,
        elements: d
      });
    }
    this._onDidSpliceModel.fire({
      insertedNodes: f,
      deletedNodes: C
    });
    let I = o;
    while (I) {
      if (I.visibility === 2) {
        this.refilterDelayer.trigger(() => this.refilter());
        break;
      }
      I = I.parent;
    }
  }
  rerender(n) {
    if (n.length === 0) {
      throw new Sq(this.user, "Invalid tree location");
    }
    const {
      node: e,
      listIndex: t,
      revealed: i
    } = this.getTreeNodeWithListIndex(n);
    if (e.visible && i) {
      this._onDidSpliceRenderedNodes.fire({
        start: t,
        deleteCount: 1,
        elements: [e]
      });
    }
  }
  has(n) {
    return this.hasTreeNode(n);
  }
  getListIndex(n) {
    const {
      listIndex: e,
      visible: t,
      revealed: i
    } = this.getTreeNodeWithListIndex(n);
    if (t && i) {
      return e;
    } else {
      return -1;
    }
  }
  getListRenderCount(n) {
    return this.getTreeNode(n).renderNodeCount;
  }
  isCollapsible(n) {
    return this.getTreeNode(n).collapsible;
  }
  setCollapsible(n, e) {
    const t = this.getTreeNode(n);
    if (typeof e === "undefined") {
      e = !t.collapsible;
    }
    const i = {
      collapsible: e
    };
    return this.eventBufferer.bufferEvents(() => this._setCollapseState(n, i));
  }
  isCollapsed(n) {
    return this.getTreeNode(n).collapsed;
  }
  setCollapsed(n, e, t) {
    const i = this.getTreeNode(n);
    if (typeof e === "undefined") {
      e = !i.collapsed;
    }
    const r = {
      collapsed: e,
      recursive: t || false
    };
    return this.eventBufferer.bufferEvents(() => this._setCollapseState(n, r));
  }
  _setCollapseState(n, e) {
    const {
      node: t,
      listIndex: i,
      revealed: r
    } = this.getTreeNodeWithListIndex(n);
    const s = this._setListNodeCollapseState(t, i, r, e);
    if (t !== this.root && this.autoExpandSingleChildren && s && !UGl(e) && t.collapsible && !t.collapsed && !e.recursive) {
      let o = -1;
      for (let a = 0; a < t.children.length; a++) {
        if (t.children[a].visible) {
          if (o > -1) {
            o = -1;
            break;
          } else {
            o = a;
          }
        }
      }
      if (o > -1) {
        this._setCollapseState([...n, o], e);
      }
    }
    return s;
  }
  _setListNodeCollapseState(n, e, t, i) {
    const r = this._setNodeCollapseState(n, i, false);
    if (!t || !n.visible || !r) {
      return r;
    }
    const s = n.renderNodeCount;
    const o = this.updateNodeAfterCollapseChange(n);
    const a = s - (e === -1 ? 0 : 1);
    this._onDidSpliceRenderedNodes.fire({
      start: e + 1,
      deleteCount: a,
      elements: o.slice(1)
    });
    return r;
  }
  _setNodeCollapseState(n, e, t) {
    let i;
    if (n === this.root) {
      i = false;
    } else {
      if (UGl(e)) {
        i = n.collapsible !== e.collapsible;
        n.collapsible = e.collapsible;
      } else if (n.collapsible) {
        i = n.collapsed !== e.collapsed;
        n.collapsed = e.collapsed;
      } else {
        i = false;
      }
      if (i) {
        this._onDidChangeCollapseState.fire({
          node: n,
          deep: t
        });
      }
    }
    if (!UGl(e) && e.recursive) {
      for (const r of n.children) {
        i = this._setNodeCollapseState(r, e, true) || i;
      }
    }
    return i;
  }
  expandTo(n) {
    this.eventBufferer.bufferEvents(() => {
      let e = this.getTreeNode(n);
      while (e.parent) {
        e = e.parent;
        n = n.slice(0, n.length - 1);
        if (e.collapsed) {
          this._setCollapseState(n, {
            collapsed: false,
            recursive: false
          });
        }
      }
    });
  }
  refilter() {
    const n = this.root.renderNodeCount;
    const e = this.updateNodeAfterFilterChange(this.root);
    this._onDidSpliceRenderedNodes.fire({
      start: 0,
      deleteCount: n,
      elements: e
    });
    this.refilterDelayer.cancel();
  }
  createTreeNode(n, e, t, i, r, s) {
    const o = {
      parent: e,
      element: n.element,
      children: [],
      depth: e.depth + 1,
      visibleChildrenCount: 0,
      visibleChildIndex: -1,
      collapsible: typeof n.collapsible == "boolean" ? n.collapsible : typeof n.collapsed !== "undefined",
      collapsed: typeof n.collapsed === "undefined" ? this.collapseByDefault : n.collapsed,
      renderNodeCount: 1,
      visibility: 1,
      visible: true,
      filterData: undefined
    };
    const a = this._filterNode(o, t);
    o.visibility = a;
    if (i) {
      r.push(o);
    }
    const l = n.children || bl.empty();
    const u = i && a !== 0 && !o.collapsed;
    let d = 0;
    let m = 1;
    for (const p of l) {
      const g = this.createTreeNode(p, o, a, u, r, s);
      o.children.push(g);
      m += g.renderNodeCount;
      if (g.visible) {
        g.visibleChildIndex = d++;
      }
    }
    if (!this.allowNonCollapsibleParents) {
      o.collapsible = o.collapsible || o.children.length > 0;
    }
    o.visibleChildrenCount = d;
    o.visible = a === 2 ? d > 0 : a === 1;
    if (o.visible) {
      if (!o.collapsed) {
        o.renderNodeCount = m;
      }
    } else {
      o.renderNodeCount = 0;
      if (i) {
        r.pop();
      }
    }
    s?.(o);
    return o;
  }
  updateNodeAfterCollapseChange(n) {
    const e = n.renderNodeCount;
    const t = [];
    this._updateNodeAfterCollapseChange(n, t);
    this._updateAncestorsRenderNodeCount(n.parent, t.length - e);
    return t;
  }
  _updateNodeAfterCollapseChange(n, e) {
    if (n.visible === false) {
      return 0;
    }
    e.push(n);
    n.renderNodeCount = 1;
    if (!n.collapsed) {
      for (const t of n.children) {
        n.renderNodeCount += this._updateNodeAfterCollapseChange(t, e);
      }
    }
    this._onDidChangeRenderNodeCount.fire(n);
    return n.renderNodeCount;
  }
  updateNodeAfterFilterChange(n) {
    const e = n.renderNodeCount;
    const t = [];
    this._updateNodeAfterFilterChange(n, n.visible ? 1 : 0, t);
    this._updateAncestorsRenderNodeCount(n.parent, t.length - e);
    return t;
  }
  _updateNodeAfterFilterChange(n, e, t, i = true) {
    let r;
    if (n !== this.root) {
      r = this._filterNode(n, e);
      if (r === 0) {
        n.visible = false;
        n.renderNodeCount = 0;
        return false;
      }
      if (i) {
        t.push(n);
      }
    }
    const s = t.length;
    n.renderNodeCount = n === this.root ? 0 : 1;
    let o = false;
    if (!n.collapsed || r !== 0) {
      let a = 0;
      for (const l of n.children) {
        o = this._updateNodeAfterFilterChange(l, r, t, i && !n.collapsed) || o;
        if (l.visible) {
          l.visibleChildIndex = a++;
        }
      }
      n.visibleChildrenCount = a;
    } else {
      n.visibleChildrenCount = 0;
    }
    if (n !== this.root) {
      n.visible = r === 2 ? o : r === 1;
      n.visibility = r;
    }
    if (n.visible) {
      if (!n.collapsed) {
        n.renderNodeCount += t.length - s;
      }
    } else {
      n.renderNodeCount = 0;
      if (i) {
        t.pop();
      }
    }
    this._onDidChangeRenderNodeCount.fire(n);
    return n.visible;
  }
  _updateAncestorsRenderNodeCount(n, e) {
    if (e !== 0) {
      while (n) {
        n.renderNodeCount += e;
        this._onDidChangeRenderNodeCount.fire(n);
        n = n.parent;
      }
    }
  }
  _filterNode(n, e) {
    const t = this.filter ? this.filter.filter(n.element, e) : 1;
    if (typeof t == "boolean") {
      n.filterData = undefined;
      if (t) {
        return 1;
      } else {
        return 0;
      }
    } else if (Spi(t)) {
      n.filterData = t.data;
      return oCt(t.visibility);
    } else {
      n.filterData = undefined;
      return oCt(t);
    }
  }
  hasTreeNode(n, e = this.root) {
    if (!n || n.length === 0) {
      return true;
    }
    const [t, ...i] = n;
    if (t < 0 || t > e.children.length) {
      return false;
    } else {
      return this.hasTreeNode(i, e.children[t]);
    }
  }
  getTreeNode(n, e = this.root) {
    if (!n || n.length === 0) {
      return e;
    }
    const [t, ...i] = n;
    if (t < 0 || t > e.children.length) {
      throw new Sq(this.user, "Invalid tree location");
    }
    return this.getTreeNode(i, e.children[t]);
  }
  getTreeNodeWithListIndex(n) {
    if (n.length === 0) {
      return {
        node: this.root,
        listIndex: -1,
        revealed: true,
        visible: false
      };
    }
    const {
      parentNode: e,
      listIndex: t,
      revealed: i,
      visible: r
    } = this.getParentNodeWithListIndex(n);
    const s = n[n.length - 1];
    if (s < 0 || s > e.children.length) {
      throw new Sq(this.user, "Invalid tree location");
    }
    const o = e.children[s];
    return {
      node: o,
      listIndex: t,
      revealed: i,
      visible: r && o.visible
    };
  }
  getParentNodeWithListIndex(n, e = this.root, t = 0, i = true, r = true) {
    const [s, ...o] = n;
    if (s < 0 || s > e.children.length) {
      throw new Sq(this.user, "Invalid tree location");
    }
    for (let a = 0; a < s; a++) {
      t += e.children[a].renderNodeCount;
    }
    i = i && !e.collapsed;
    r = r && e.visible;
    if (o.length === 0) {
      return {
        parentNode: e,
        listIndex: t,
        revealed: i,
        visible: r
      };
    } else {
      return this.getParentNodeWithListIndex(o, e.children[s], t + 1, i, r);
    }
  }
  getNode(n = []) {
    return this.getTreeNode(n);
  }
  getNodeLocation(n) {
    const e = [];
    let t = n;
    while (t.parent) {
      e.push(t.parent.children.indexOf(t));
      t = t.parent;
    }
    return e.reverse();
  }
  getParentNodeLocation(n) {
    if (n.length !== 0) {
      if (n.length === 1) {
        return [];
      } else {
        return l3(n)[0];
      }
    }
  }
  getFirstElementChild(n) {
    const e = this.getTreeNode(n);
    if (e.children.length !== 0) {
      return e.children[0].element;
    }
  }
  getLastElementAncestor(n = []) {
    const e = this.getTreeNode(n);
    if (e.children.length !== 0) {
      return this._getLastElementAncestor(e);
    }
  }
  _getLastElementAncestor(n) {
    if (n.children.length === 0) {
      return n.element;
    } else {
      return this._getLastElementAncestor(n.children[n.children.length - 1]);
    }
  }
};
