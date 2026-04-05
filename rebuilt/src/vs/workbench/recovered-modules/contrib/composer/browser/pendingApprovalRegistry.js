"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/pendingApprovalRegistry.js
// Offset: 30381945 (bundle byte offset)
// Size: 2945 bytes
rt();
Wt();
Er();
yn();
egn = xi("pendingApprovalRegistry");
CSf = class extends at {
  constructor() {
    super();
    this._pendingWaiters = new Map();
    this._createdBubbles = new Map();
    this._onBubbleCreated = this._register(new Qe());
    this.onBubbleCreated = this._onBubbleCreated.event;
  }
  async waitForBubbleCreation(n, e, t = 5000) {
    if (!this._createdBubbles.get(n)?.has(e)) {
      return new Promise((r, s) => {
        const o = setTimeout(() => {
          this.removeWaiter(n, e, a);
          s(new Error(`Timeout waiting for bubble creation: composerId=${n}, toolCallId=${e}`));
        }, t);
        const a = {
          resolve: () => {
            clearTimeout(o);
            r();
          },
          reject: l => {
            clearTimeout(o);
            s(l);
          },
          timeoutId: o
        };
        this.addWaiter(n, e, a);
      });
    }
  }
  signalBubbleCreated(n, e) {
    let t = this._createdBubbles.get(n);
    if (!t) {
      t = new Set();
      this._createdBubbles.set(n, t);
    }
    t.add(e);
    const i = this._pendingWaiters.get(n);
    if (i) {
      const r = i.get(e);
      if (r) {
        for (const s of r) {
          s.resolve();
        }
        i.delete(e);
      }
    }
    this._onBubbleCreated.fire({
      composerId: n,
      toolCallId: e
    });
  }
  cleanupComposer(n) {
    const e = this._pendingWaiters.get(n);
    if (e) {
      for (const [t, i] of e) {
        for (const r of i) {
          clearTimeout(r.timeoutId);
          r.reject(new Error("Composer disposed"));
        }
      }
      this._pendingWaiters.delete(n);
    }
    this._createdBubbles.delete(n);
  }
  addWaiter(n, e, t) {
    let i = this._pendingWaiters.get(n);
    if (!i) {
      i = new Map();
      this._pendingWaiters.set(n, i);
    }
    let r = i.get(e);
    if (!r) {
      r = new Set();
      i.set(e, r);
    }
    r.add(t);
  }
  removeWaiter(n, e, t) {
    const i = this._pendingWaiters.get(n);
    if (i) {
      const r = i.get(e);
      if (r) {
        r.delete(t);
        if (r.size === 0) {
          i.delete(e);
        }
      }
      if (i.size === 0) {
        this._pendingWaiters.delete(n);
      }
    }
  }
  dispose() {
    for (const [n, e] of this._pendingWaiters) {
      this.cleanupComposer(n);
    }
    super.dispose();
  }
};
Vi(egn, CSf, 1);
