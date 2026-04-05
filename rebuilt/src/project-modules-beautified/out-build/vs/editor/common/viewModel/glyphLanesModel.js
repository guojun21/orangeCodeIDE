"use strict";

// Module: out-build/vs/editor/common/viewModel/glyphLanesModel.js
// Offset: 1412004 (bundle byte offset)
// Size: 1436 bytes
xw();
$Ve = G$.Right;
Gbh = class {
  constructor(n) {
    this.persist = 0;
    this._requiredLanes = 1;
    this.lanes = new Uint8Array(Math.ceil((n + 1) * $Ve / 8));
  }
  reset(n) {
    const e = Math.ceil((n + 1) * $Ve / 8);
    if (this.lanes.length < e) {
      this.lanes = new Uint8Array(e);
    } else {
      this.lanes.fill(0);
    }
    this._requiredLanes = 1;
  }
  get requiredLanes() {
    return this._requiredLanes;
  }
  push(n, e, t) {
    if (t) {
      this.persist |= 1 << n - 1;
    }
    for (let i = e.startLineNumber; i <= e.endLineNumber; i++) {
      const r = $Ve * i + (n - 1);
      this.lanes[r >>> 3] |= 1 << r % 8;
      this._requiredLanes = Math.max(this._requiredLanes, this.countAtLine(i));
    }
  }
  getLanesAtLine(n) {
    const e = [];
    let t = $Ve * n;
    for (let i = 0; i < $Ve; i++) {
      if (this.persist & 1 << i || this.lanes[t >>> 3] & 1 << t % 8) {
        e.push(i + 1);
      }
      t++;
    }
    if (e.length) {
      return e;
    } else {
      return [G$.Center];
    }
  }
  countAtLine(n) {
    let e = $Ve * n;
    let t = 0;
    for (let i = 0; i < $Ve; i++) {
      if (this.persist & 1 << i || this.lanes[e >>> 3] & 1 << e % 8) {
        t++;
      }
      e++;
    }
    return t;
  }
};
