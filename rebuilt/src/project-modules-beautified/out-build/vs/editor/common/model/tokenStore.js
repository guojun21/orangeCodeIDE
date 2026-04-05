"use strict";

// Module: out-build/vs/editor/common/model/tokenStore.js
// Offset: 1213111 (bundle byte offset)
// Size: 5188 bytes
NVe = class YJb {
  get children() {
    return this._children;
  }
  get length() {
    return this._length;
  }
  constructor(e) {
    this.height = e;
    this._children = [];
    this._length = 0;
  }
  static create(e, t) {
    const i = new YJb(e.height + 1);
    i.appendChild(e);
    i.appendChild(t);
    return i;
  }
  canAppendChild() {
    return this._children.length < 3;
  }
  appendChild(e) {
    if (!this.canAppendChild()) {
      throw new Error("Cannot insert more than 3 children in a ListNode");
    }
    this._children.push(e);
    this._length += e.length;
    this._updateParentLength(e.length);
    if (!P6(e)) {
      e.parent = this;
    }
  }
  _updateParentLength(e) {
    let t = this.parent;
    while (t) {
      t._length += e;
      t = t.parent;
    }
  }
  unappendChild() {
    const e = this._children.pop();
    this._length -= e.length;
    this._updateParentLength(-e.length);
    return e;
  }
  prependChild(e) {
    if (this._children.length >= 3) {
      throw new Error("Cannot prepend more than 3 children in a ListNode");
    }
    this._children.unshift(e);
    this._length += e.length;
    this._updateParentLength(e.length);
    if (!P6(e)) {
      e.parent = this;
    }
  }
  unprependChild() {
    const e = this._children.shift();
    this._length -= e.length;
    this._updateParentLength(-e.length);
    return e;
  }
  lastChild() {
    return this._children[this._children.length - 1];
  }
  dispose() {
    this._children.splice(0, this._children.length);
  }
};
(function (n) {
  n[n.None = 0] = "None";
  n[n.ViewportGuess = 1] = "ViewportGuess";
  n[n.EditGuess = 2] = "EditGuess";
  n[n.Accurate = 3] = "Accurate";
})(qoe ||= {});
Ggh = class ZJb {
  get root() {
    return this._root;
  }
  constructor(e) {
    this._textModel = e;
    this._root = this.createEmptyRoot();
  }
  createEmptyRoot() {
    return {
      length: this._textModel.getValueLength(),
      token: 0,
      height: 0,
      tokenQuality: qoe.None
    };
  }
  buildStore(e, t) {
    this._root = this.createFromUpdates(e, t);
  }
  createFromUpdates(e, t) {
    if (e.length === 0) {
      return this.createEmptyRoot();
    }
    let i = {
      length: e[0].length,
      token: e[0].token,
      height: 0,
      tokenQuality: t
    };
    for (let r = 1; r < e.length; r++) {
      i = Jgh(i, {
        length: e[r].length,
        token: e[r].token,
        height: 0,
        tokenQuality: t
      });
    }
    return i;
  }
  update(e, t, i) {
    if (t.length !== 0) {
      this.replace(e, t[0].startOffsetInclusive, t, i);
    }
  }
  delete(e, t) {
    this.replace(e, t, [], qoe.EditGuess);
  }
  replace(e, t, i, r) {
    const s = t + e;
    const o = [];
    const a = [];
    const l = [{
      node: this._root,
      offset: 0
    }];
    while (l.length > 0) {
      const m = l.pop();
      const p = m.offset;
      if (p < t && p + m.node.length <= t) {
        if (!P6(m.node)) {
          m.node.parent = undefined;
        }
        o.push(m.node);
        continue;
      } else if (P6(m.node) && p < t) {
        o.push({
          length: t - p,
          token: m.node.token,
          height: 0,
          tokenQuality: m.node.tokenQuality
        });
      }
      if (!(t <= p) || !(p + m.node.length <= s)) {
        if (p >= s) {
          if (!P6(m.node)) {
            m.node.parent = undefined;
          }
          a.push(m.node);
          continue;
        } else if (P6(m.node) && p + m.node.length > s) {
          a.push({
            length: p + m.node.length - s,
            token: m.node.token,
            height: 0,
            tokenQuality: m.node.tokenQuality
          });
          continue;
        }
        if (!P6(m.node)) {
          let g = p + m.node.length;
          for (let f = m.node.children.length - 1; f >= 0; f--) {
            g -= m.node.children[f].length;
            l.push({
              node: m.node.children[f],
              offset: g
            });
          }
        }
      }
    }
    let u;
    if (i.length > 0) {
      u = o.concat(this.createFromUpdates(i, r), a);
    } else {
      u = o.concat(a);
    }
    let d = u[0];
    for (let m = 1; m < u.length; m++) {
      d = uaA(d, u[m]);
    }
    this._root = d ?? this.createEmptyRoot();
  }
  traverseInOrderInRange(e, t, i) {
    const r = [{
      node: this._root,
      offset: 0
    }];
    while (r.length > 0) {
      const {
        node: s,
        offset: o
      } = r.pop();
      if (!(o + s.length <= e) && !(o >= t)) {
        if (i(s, o)) {
          return;
        }
        if (!P6(s)) {
          let l = o + s.length;
          for (let u = s.children.length - 1; u >= 0; u--) {
            l -= s.children[u].length;
            r.push({
              node: s.children[u],
              offset: l
            });
          }
        }
      }
    }
  }
  getTokenAt(e) {
    let t;
    this.traverseInOrderInRange(e, this._root.length, (i, r) => P6(i) ? (t = {
      token: i.token,
      startOffsetInclusive: r,
      length: i.length
    }, true) : false);
    return t;
  }
  getTokensInRange(e, t) {
    const i = [];
    this.traverseInOrderInRange(e, t, (r, s) => {
      if (P6(r)) {
        let o = r.length;
        let a = s;
        if (s < e && s + r.length > t) {
          a = e;
          o = t - e;
        } else if (s < e) {
          o -= e - s;
          a = e;
        } else if (s + r.length > t) {
          o -= s + r.length - t;
        }
        i.push({
          token: r.token,
          startOffsetInclusive: a,
          length: o
        });
      }
      return false;
    });
    return i;
  }
  markForRefresh(e, t) {
    this.traverseInOrderInRange(e, t, i => {
      if (P6(i)) {
        i.tokenQuality = qoe.None;
      }
      return false;
    });
  }
  rangeHasTokens(e, t, i) {
    let r = true;
    this.traverseInOrderInRange(e, t, s => {
      if (P6(s) && s.tokenQuality < i) {
        r = false;
      }
      return false;
    });
    return r;
  }
  rangeNeedsRefresh(e, t) {
    let i = false;
    this.traverseInOrderInRange(e, t, r => {
      if (P6(r) && r.tokenQuality !== qoe.Accurate) {
        i = true;
      }
      return false;
    });
    return i;
  }
  getNeedsRefresh() {
    const e = [];
    this.traverseInOrderInRange(0, this._textModel.getValueLength(), (t, i) => {
      if (P6(t) && t.tokenQuality !== qoe.Accurate) {
        if (e.length > 0 && e[e.length - 1].endOffset === i) {
          e[e.length - 1].endOffset += t.length;
        } else {
          e.push({
            startOffset: i,
            endOffset: i + t.length
          });
        }
      }
      return false;
    });
    return e;
  }
  deepCopy() {
    const e = new ZJb(this._textModel);
    e._root = this._copyNodeIterative(this._root);
    return e;
  }
  _copyNodeIterative(e) {
    const t = P6(e) ? {
      length: e.length,
      token: e.token,
      tokenQuality: e.tokenQuality,
      height: e.height
    } : new NVe(e.height);
    const i = [[e, t]];
    while (i.length > 0) {
      const [r, s] = i.pop();
      if (!P6(r)) {
        for (const o of r.children) {
          const a = P6(o) ? {
            length: o.length,
            token: o.token,
            tokenQuality: o.tokenQuality,
            height: o.height
          } : new NVe(o.height);
          s.appendChild(a);
          i.push([o, a]);
        }
      }
    }
    return t;
  }
  printTree(e = this._root) {
    const t = [];
    const i = [[e, 0]];
    while (i.length > 0) {
      const [r, s] = i.pop();
      const o = "  ".repeat(s);
      if (P6(r)) {
        t.push(`${o}Leaf(length: ${r.length}, token: ${r.token}, refresh: ${r.tokenQuality})
`);
      } else {
        t.push(`${o}List(length: ${r.length})
`);
        for (let a = r.children.length - 1; a >= 0; a--) {
          i.push([r.children[a], s + 1]);
        }
      }
    }
    return t.join("");
  }
  dispose() {
    const e = [[this._root, false]];
    while (e.length > 0) {
      const [t, i] = e.pop();
      if (!P6(t)) {
        if (i) {
          t.dispose();
          t.parent = undefined;
        } else {
          e.push([t, true]);
          for (let r = t.children.length - 1; r >= 0; r--) {
            e.push([t.children[r], false]);
          }
        }
      }
    }
    this._root = undefined;
  }
};
