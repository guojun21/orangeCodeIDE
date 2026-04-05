"use strict";

// Module: out-build/vs/base/browser/ui/tree/objectTreeModel.js
// Offset: 24902145 (bundle byte offset)
// Size: 5715 bytes
wca();
iNe();
Ef();
kpi = class {
  get size() {
    return this.nodes.size;
  }
  constructor(n, e = {}) {
    this.user = n;
    this.rootRef = null;
    this.nodes = new Map();
    this.nodesByIdentity = new Map();
    this.model = new Upg(n, null, e);
    this.onDidSpliceModel = this.model.onDidSpliceModel;
    this.onDidSpliceRenderedNodes = this.model.onDidSpliceRenderedNodes;
    this.onDidChangeCollapseState = this.model.onDidChangeCollapseState;
    this.onDidChangeRenderNodeCount = this.model.onDidChangeRenderNodeCount;
    if (e.sorter) {
      this.sorter = {
        compare(t, i) {
          return e.sorter.compare(t.element, i.element);
        }
      };
    }
    this.identityProvider = e.identityProvider;
  }
  setChildren(n, e = bl.empty(), t = {}) {
    const i = this.getElementLocation(n);
    this._setChildren(i, this.preserveCollapseState(e), t);
  }
  _setChildren(n, e = bl.empty(), t) {
    const i = new Set();
    const r = new Set();
    const s = a => {
      if (a.element === null) {
        return;
      }
      const l = a;
      i.add(l.element);
      this.nodes.set(l.element, l);
      if (this.identityProvider) {
        const u = this.identityProvider.getId(l.element).toString();
        r.add(u);
        this.nodesByIdentity.set(u, l);
      }
      t.onDidCreateNode?.(l);
    };
    const o = a => {
      if (a.element === null) {
        return;
      }
      const l = a;
      if (!i.has(l.element)) {
        this.nodes.delete(l.element);
      }
      if (this.identityProvider) {
        const u = this.identityProvider.getId(l.element).toString();
        if (!r.has(u)) {
          this.nodesByIdentity.delete(u);
        }
      }
      t.onDidDeleteNode?.(l);
    };
    this.model.splice([...n, 0], Number.MAX_VALUE, e, {
      ...t,
      onDidCreateNode: s,
      onDidDeleteNode: o
    });
  }
  preserveCollapseState(n = bl.empty()) {
    if (this.sorter) {
      n = [...n].sort(this.sorter.compare.bind(this.sorter));
    }
    return bl.map(n, e => {
      let t = this.nodes.get(e.element);
      if (!t && this.identityProvider) {
        const s = this.identityProvider.getId(e.element).toString();
        t = this.nodesByIdentity.get(s);
      }
      if (!t) {
        let s;
        if (typeof e.collapsed === "undefined") {
          s = undefined;
        } else if (e.collapsed === Cq.Collapsed || e.collapsed === Cq.PreserveOrCollapsed) {
          s = true;
        } else if (e.collapsed === Cq.Expanded || e.collapsed === Cq.PreserveOrExpanded) {
          s = false;
        } else {
          s = !!e.collapsed;
        }
        return {
          ...e,
          children: this.preserveCollapseState(e.children),
          collapsed: s
        };
      }
      const i = typeof e.collapsible == "boolean" ? e.collapsible : t.collapsible;
      let r;
      if (typeof e.collapsed === "undefined" || e.collapsed === Cq.PreserveOrCollapsed || e.collapsed === Cq.PreserveOrExpanded) {
        r = t.collapsed;
      } else if (e.collapsed === Cq.Collapsed) {
        r = true;
      } else if (e.collapsed === Cq.Expanded) {
        r = false;
      } else {
        r = !!e.collapsed;
      }
      return {
        ...e,
        collapsible: i,
        collapsed: r,
        children: this.preserveCollapseState(e.children)
      };
    });
  }
  rerender(n) {
    const e = this.getElementLocation(n);
    this.model.rerender(e);
  }
  resort(n = null, e = true) {
    if (!this.sorter) {
      return;
    }
    const t = this.getElementLocation(n);
    const i = this.model.getNode(t);
    this._setChildren(t, this.resortChildren(i, e), {});
  }
  resortChildren(n, e, t = true) {
    let i = [...n.children];
    if (e || t) {
      i = i.sort(this.sorter.compare.bind(this.sorter));
    }
    return bl.map(i, r => ({
      element: r.element,
      collapsible: r.collapsible,
      collapsed: r.collapsed,
      children: this.resortChildren(r, e, false)
    }));
  }
  getFirstElementChild(n = null) {
    const e = this.getElementLocation(n);
    return this.model.getFirstElementChild(e);
  }
  getLastElementAncestor(n = null) {
    const e = this.getElementLocation(n);
    return this.model.getLastElementAncestor(e);
  }
  has(n) {
    return this.nodes.has(n);
  }
  getListIndex(n) {
    const e = this.getElementLocation(n);
    return this.model.getListIndex(e);
  }
  getListRenderCount(n) {
    const e = this.getElementLocation(n);
    return this.model.getListRenderCount(e);
  }
  isCollapsible(n) {
    const e = this.getElementLocation(n);
    return this.model.isCollapsible(e);
  }
  setCollapsible(n, e) {
    const t = this.getElementLocation(n);
    return this.model.setCollapsible(t, e);
  }
  isCollapsed(n) {
    const e = this.getElementLocation(n);
    return this.model.isCollapsed(e);
  }
  setCollapsed(n, e, t) {
    const i = this.getElementLocation(n);
    return this.model.setCollapsed(i, e, t);
  }
  expandTo(n) {
    const e = this.getElementLocation(n);
    this.model.expandTo(e);
  }
  refilter() {
    this.model.refilter();
  }
  getNode(n = null) {
    if (n === null) {
      return this.model.getNode(this.model.rootRef);
    }
    const e = this.nodes.get(n);
    if (!e) {
      throw new Sq(this.user, `Tree element not found: ${n}`);
    }
    return e;
  }
  getNodeLocation(n) {
    return n.element;
  }
  getParentNodeLocation(n) {
    if (n === null) {
      throw new Sq(this.user, "Invalid getParentNodeLocation call");
    }
    const e = this.nodes.get(n);
    if (!e) {
      throw new Sq(this.user, `Tree element not found: ${n}`);
    }
    const t = this.model.getNodeLocation(e);
    const i = this.model.getParentNodeLocation(t);
    return this.model.getNode(i).element;
  }
  getElementLocation(n) {
    if (n === null) {
      return [];
    }
    const e = this.nodes.get(n);
    if (!e) {
      throw new Sq(this.user, `Tree element not found: ${n}`);
    }
    return this.model.getNodeLocation(e);
  }
};
