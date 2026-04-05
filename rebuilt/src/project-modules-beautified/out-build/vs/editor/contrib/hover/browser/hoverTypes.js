"use strict";

// Module: out-build/vs/editor/contrib/hover/browser/hoverTypes.js
// Offset: 4198867 (bundle byte offset)
// Size: 1023 bytes
(function (n) {
  n[n.Range = 1] = "Range";
  n[n.ForeignElement = 2] = "ForeignElement";
})(gJh ||= {});
a$o = class {
  constructor(n, e, t, i) {
    this.priority = n;
    this.range = e;
    this.initialMousePosX = t;
    this.initialMousePosY = i;
    this.type = 1;
  }
  equals(n) {
    return n.type === 1 && this.range.equalsRange(n.range);
  }
  canAdoptVisibleHover(n, e) {
    return n.type === 1 && e.lineNumber === this.range.startLineNumber;
  }
};
q9t = class {
  constructor(n, e, t, i, r, s) {
    this.priority = n;
    this.owner = e;
    this.range = t;
    this.initialMousePosX = i;
    this.initialMousePosY = r;
    this.supportsMarkerHover = s;
    this.type = 2;
  }
  equals(n) {
    return n.type === 2 && this.owner === n.owner;
  }
  canAdoptVisibleHover(n, e) {
    return n.type === 2 && this.owner === n.owner;
  }
};
nPe = class {
  constructor(n, e) {
    this.renderedHoverParts = n;
    this.disposables = e;
  }
  dispose() {
    for (const n of this.renderedHoverParts) {
      n.dispose();
    }
    this.disposables?.dispose();
  }
};
u8e = new class {
  constructor() {
    this._participants = [];
  }
  register(e) {
    this._participants.push(e);
  }
  getAll() {
    return this._participants;
  }
}();
