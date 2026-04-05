"use strict";

// Module: out-build/vs/workbench/contrib/comments/browser/commentsModel.js
// Offset: 33158597 (bundle byte offset)
// Size: 2556 bytes
Vs();
Yn();
Ht();
Rwu();
rt();
tg();
Cbn = class Azb extends at {
  get resourceCommentThreads() {
    return this._resourceCommentThreads;
  }
  constructor() {
    super();
    this._resourceCommentThreads = [];
    this.commentThreadsMap = new Map();
  }
  updateResourceCommentThreads() {
    const e = this.commentThreadsMap.size > 1;
    this._resourceCommentThreads = [...this.commentThreadsMap.values()].map(t => t.resourceWithCommentThreads.map(i => {
      i.ownerLabel = e ? t.ownerLabel : undefined;
      return i;
    }).flat()).flat();
  }
  setCommentThreads(e, t, i, r) {
    this.commentThreadsMap.set(e, {
      ownerLabel: i,
      resourceWithCommentThreads: this.groupByResource(e, t, r)
    });
    this.updateResourceCommentThreads();
  }
  deleteCommentsByOwner(e) {
    if (e) {
      const t = this.commentThreadsMap.get(e);
      this.commentThreadsMap.set(e, {
        ownerLabel: t?.ownerLabel,
        resourceWithCommentThreads: []
      });
    } else {
      this.commentThreadsMap.clear();
    }
    this.updateResourceCommentThreads();
  }
  updateCommentThreads(e) {
    const {
      uniqueOwner: t,
      owner: i,
      ownerLabel: r,
      removed: s,
      changed: o,
      added: a
    } = e;
    const l = this.commentThreadsMap.get(t)?.resourceWithCommentThreads || [];
    s.forEach(u => {
      const d = l.findIndex(g => g.id === u.resource);
      const m = d >= 0 ? l[d] : undefined;
      const p = m?.commentThreads.findIndex(g => g.threadId === u.threadId) ?? 0;
      if (p >= 0) {
        m?.commentThreads.splice(p, 1);
      }
      if (m?.commentThreads.length === 0) {
        l.splice(d, 1);
      }
    });
    o.forEach(u => {
      const d = l.findIndex(g => g.id === u.resource);
      const m = d >= 0 ? l[d] : undefined;
      if (!m) {
        return;
      }
      const p = m.commentThreads.findIndex(g => g.threadId === u.threadId);
      if (p >= 0) {
        m.commentThreads[p] = Qie.createCommentNode(t, i, je.parse(m.id), u);
      } else if (u.comments && u.comments.length) {
        m.commentThreads.push(Qie.createCommentNode(t, i, je.parse(m.id), u));
      }
    });
    a.forEach(u => {
      const d = l.filter(m => m.resource.toString() === u.resource);
      if (d.length) {
        const m = d[0];
        if (u.comments && u.comments.length) {
          m.commentThreads.push(Qie.createCommentNode(t, i, m.resource, u));
        }
      } else {
        l.push(new Qie(t, i, je.parse(u.resource), [u]));
      }
    });
    this.commentThreadsMap.set(t, {
      ownerLabel: r,
      resourceWithCommentThreads: l
    });
    this.updateResourceCommentThreads();
    return s.length > 0 || o.length > 0 || a.length > 0;
  }
  hasCommentThreads() {
    return !!this._resourceCommentThreads.length && this._resourceCommentThreads.some(e => e.commentThreads.length > 0 && e.commentThreads.some(t => Pwu(t.thread)));
  }
  getMessage() {
    if (this._resourceCommentThreads.length) {
      return "";
    } else {
      return _(5968, null);
    }
  }
  groupByResource(e, t, i) {
    const r = [];
    const s = new Map();
    for (const o of yte(i, Azb._compareURIs)) {
      s.set(o[0].resource, new Qie(e, t, je.parse(o[0].resource), o));
    }
    s.forEach((o, a, l) => {
      r.push(o);
    });
    return r;
  }
  static _compareURIs(e, t) {
    const i = e.resource.toString();
    const r = t.resource.toString();
    if (i < r) {
      return -1;
    } else if (i > r) {
      return 1;
    } else {
      return 0;
    }
  }
};
