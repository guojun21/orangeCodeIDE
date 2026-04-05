"use strict";

// Module: out-build/vs/workbench/contrib/aiCpp/browser/cppDebouncingService.js
// Offset: 27501302 (bundle byte offset)
// Size: 1424 bytes
Bc();
lJg = class {
  constructor(n, e, t) {
    this.clientDebounceDuration = n;
    this.totalDebounceDuration = e;
    this.evictionDuration = t;
    this.debounceHistory = [];
  }
  setDebouncingDurations({
    clientDebounceDuration: n,
    totalDebounceDuration: e
  }) {
    this.clientDebounceDuration = n;
    this.totalDebounceDuration = e;
  }
  pruneOldRequests() {
    const n = performance.now() + performance.timeOrigin;
    const e = [...this.debounceHistory.entries()].reverse();
    for (const [t, i] of e) {
      if (n - i.startTime > this.evictionDuration) {
        this.debounceHistory.splice(t, 1);
      }
    }
  }
  runRequest() {
    this.pruneOldRequests();
    const n = performance.now() + performance.timeOrigin;
    const e = Wr();
    const t = this.debounceHistory.filter(r => r.startTime + this.totalDebounceDuration > n).map(r => r.requestId);
    this.debounceHistory.push({
      requestId: e,
      startTime: n
    });
    const i = new AbortController();
    return {
      generationUUID: e,
      startTime: n,
      abortController: i,
      requestIdsToCancel: t
    };
  }
  async shouldDebounce(n, e = false) {
    const t = [...this.debounceHistory];
    let i = -1;
    for (const [l, u] of t.entries()) {
      if (u.requestId === n) {
        i = l;
      }
    }
    if (i === -1) {
      return false;
    }
    const r = performance.now() + performance.timeOrigin;
    const s = t[i];
    const o = r - s.startTime;
    if (o < this.clientDebounceDuration && !e) {
      await new Promise(l => setTimeout(l, this.clientDebounceDuration - o));
      return await this.shouldDebounce(n, true);
    } else if (i === t.length - 1) {
      return false;
    } else {
      return t[i + 1].startTime - s.startTime < this.clientDebounceDuration;
    }
  }
};
