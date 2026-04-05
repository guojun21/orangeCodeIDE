"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/InteractionManager.js
// Offset: 206680 (bundle byte offset)
// Size: 1315 bytes
Rth();
AMo = 10;
L_c = 0;
Pth = () => P_c() - L_c;
Lth = class {
  constructor() {
    this._longestInteractionList = [];
    this._longestInteractionMap = new Map();
  }
  _resetInteractions() {
    L_c = P_c();
    this._longestInteractionList.length = 0;
    this._longestInteractionMap.clear();
  }
  _estimateP98LongestInteraction() {
    const n = Math.min(this._longestInteractionList.length - 1, Math.floor(Pth() / 50));
    return this._longestInteractionList[n];
  }
  _processEntry(n) {
    this._onBeforeProcessingEntry?.(n);
    if (!n.interactionId && n.entryType !== "first-input") {
      return;
    }
    const e = this._longestInteractionList.at(-1);
    let t = this._longestInteractionMap.get(n.interactionId);
    if (t || this._longestInteractionList.length < AMo || n.duration > e._latency) {
      if (t) {
        if (n.duration > t._latency) {
          t.entries = [n];
          t._latency = n.duration;
        } else if (n.duration === t._latency && n.startTime === t.entries[0].startTime) {
          t.entries.push(n);
        }
      } else {
        t = {
          id: n.interactionId,
          entries: [n],
          _latency: n.duration
        };
        this._longestInteractionMap.set(t.id, t);
        this._longestInteractionList.push(t);
      }
      this._longestInteractionList.sort((i, r) => r._latency - i._latency);
      if (this._longestInteractionList.length > AMo) {
        const i = this._longestInteractionList.splice(AMo);
        for (const r of i) {
          this._longestInteractionMap.delete(r.id);
        }
      }
      this._onAfterProcessingINPCandidate?.(t);
    }
  }
};
