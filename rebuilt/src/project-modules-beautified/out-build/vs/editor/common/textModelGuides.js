"use strict";

// Module: out-build/vs/editor/common/textModelGuides.js
// Offset: 1120362 (bundle byte offset)
// Size: 484 bytes
(function (n) {
  n[n.Disabled = 0] = "Disabled";
  n[n.EnabledForActive = 1] = "EnabledForActive";
  n[n.Enabled = 2] = "Enabled";
})(Cft ||= {});
BVe = class {
  constructor(n, e, t, i, r, s) {
    this.visibleColumn = n;
    this.column = e;
    this.className = t;
    this.horizontalLine = i;
    this.forWrappedLinesAfterColumn = r;
    this.forWrappedLinesBeforeOrAtColumn = s;
    if (n !== -1 == (e !== -1)) {
      throw new Error();
    }
  }
};
BOt = class {
  constructor(n, e) {
    this.top = n;
    this.endColumn = e;
  }
};
