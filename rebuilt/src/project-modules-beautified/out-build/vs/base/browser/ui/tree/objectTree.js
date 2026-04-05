"use strict";

// Module: out-build/vs/base/browser/ui/tree/objectTree.js
// Offset: 24914583 (bundle byte offset)
// Size: 6300 bytes
LAe();
B0A();
kca();
U0();
Ef();
Hne = class extends aCt {
  get onDidChangeCollapseState() {
    return this.model.onDidChangeCollapseState;
  }
  constructor(n, e, t, i, r = {}) {
    super(n, e, t, i, r);
    this.user = n;
  }
  setChildren(n, e = bl.empty(), t) {
    this.model.setChildren(n, e, t);
  }
  rerender(n) {
    if (n === undefined) {
      this.view.rerender();
      return;
    }
    this.model.rerender(n);
  }
  updateElementHeight(n, e) {
    const t = this.model.getListIndex(n);
    if (t !== -1) {
      this.view.updateElementHeight(t, e);
    }
  }
  resort(n, e = true) {
    this.model.resort(n, e);
  }
  hasElement(n) {
    return this.model.has(n);
  }
  createModel(n, e) {
    return new kpi(n, e);
  }
};
QGl = class {
  get compressedTreeNodeProvider() {
    return this._compressedTreeNodeProvider();
  }
  constructor(n, e, t) {
    this._compressedTreeNodeProvider = n;
    this.stickyScrollDelegate = e;
    this.renderer = t;
    this.templateId = t.templateId;
    if (t.onDidChangeTwistieState) {
      this.onDidChangeTwistieState = t.onDidChangeTwistieState;
    }
  }
  renderTemplate(n) {
    return {
      compressedTreeNode: undefined,
      data: this.renderer.renderTemplate(n)
    };
  }
  renderElement(n, e, t, i) {
    let r = this.stickyScrollDelegate.getCompressedNode(n);
    r ||= this.compressedTreeNodeProvider.getCompressedTreeNode(n.element);
    if (r.element.elements.length === 1) {
      t.compressedTreeNode = undefined;
      this.renderer.renderElement(n, e, t.data, i);
    } else {
      t.compressedTreeNode = r;
      this.renderer.renderCompressedElements(r, e, t.data, i);
    }
  }
  disposeElement(n, e, t, i) {
    if (t.compressedTreeNode) {
      this.renderer.disposeCompressedElements?.(t.compressedTreeNode, e, t.data, i);
    } else {
      this.renderer.disposeElement?.(n, e, t.data, i);
    }
  }
  disposeTemplate(n) {
    this.renderer.disposeTemplate(n.data);
  }
  renderTwistie(n, e) {
    if (this.renderer.renderTwistie) {
      return this.renderer.renderTwistie(n, e);
    } else {
      return false;
    }
  }
};
__decorate([cl], QGl.prototype, "compressedTreeNodeProvider", null);
dgg = class {
  constructor(n) {
    this.modelProvider = n;
    this.compressedStickyNodes = new Map();
  }
  getCompressedNode(n) {
    return this.compressedStickyNodes.get(n);
  }
  constrainStickyScrollNodes(n, e, t) {
    this.compressedStickyNodes.clear();
    if (n.length === 0) {
      return [];
    }
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      const s = r.position + r.height;
      if (i + 1 < n.length && s + n[i + 1].height > t || i >= e - 1 && e < n.length) {
        const a = n.slice(0, i);
        const l = n.slice(i);
        const u = this.compressStickyNodes(l);
        return [...a, u];
      }
    }
    return n;
  }
  compressStickyNodes(n) {
    if (n.length === 0) {
      throw new Error("Can't compress empty sticky nodes");
    }
    const e = this.modelProvider();
    if (!e.isCompressionEnabled()) {
      return n[0];
    }
    const t = [];
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      const d = e.getCompressedTreeNode(u.node.element);
      if (d.element) {
        if (l !== 0 && d.element.incompressible) {
          break;
        }
        t.push(...d.element.elements);
      }
    }
    if (t.length < 2) {
      return n[0];
    }
    const i = n[n.length - 1];
    const r = {
      elements: t,
      incompressible: false
    };
    const s = {
      ...i.node,
      children: [],
      element: r
    };
    const o = new Proxy(n[0].node, {});
    const a = {
      node: o,
      startIndex: n[0].startIndex,
      endIndex: i.endIndex,
      position: n[0].position,
      height: n[0].height
    };
    this.compressedStickyNodes.set(o, s);
    return a;
  }
};
jGl = class extends Hne {
  constructor(n, e, t, i, r = {}) {
    const s = () => this;
    const o = new dgg(() => this.model);
    const a = i.map(l => new QGl(s, o, l));
    super(n, e, t, a, {
      ...R0A(s, r),
      stickyScrollDelegate: o
    });
  }
  setChildren(n, e = bl.empty(), t) {
    this.model.setChildren(n, e, t);
  }
  createModel(n, e) {
    return new ugg(n, e);
  }
  updateOptions(n = {}) {
    super.updateOptions(n);
    if (typeof n.compressionEnabled !== "undefined") {
      this.model.setCompressionEnabled(n.compressionEnabled);
    }
  }
  getCompressedTreeNode(n = null) {
    return this.model.getCompressedTreeNode(n);
  }
};
