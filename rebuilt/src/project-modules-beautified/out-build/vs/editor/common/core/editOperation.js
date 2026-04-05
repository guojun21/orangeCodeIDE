"use strict";

// Module: out-build/vs/editor/common/core/editOperation.js
// Offset: 1185027 (bundle byte offset)
// Size: 366 bytes
ts();
zb = class {
  static insert(n, e) {
    return {
      range: new Zt(n.lineNumber, n.column, n.lineNumber, n.column),
      text: e,
      forceMoveMarkers: true
    };
  }
  static delete(n) {
    return {
      range: n,
      text: null
    };
  }
  static replace(n, e) {
    return {
      range: n,
      text: e
    };
  }
  static replaceMove(n, e) {
    return {
      range: n,
      text: e,
      forceMoveMarkers: true
    };
  }
};
