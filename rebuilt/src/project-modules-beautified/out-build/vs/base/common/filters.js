"use strict";

// Module: out-build/vs/base/common/filters.js
// Offset: 1966415 (bundle byte offset)
// Size: 712 bytes
cu();
puA();
oa();
kuA = Owh.bind(undefined, false);
KVe = Owh.bind(undefined, true);
qIc = new Set();
"()[]{}<>`'\"-/;:,.?!".split("").forEach(n => qIc.add(n.charCodeAt(0)));
P3o = new Map();
zwh = p3t(KVe, D3o, VVe);
Vwh = p3t(KVe, D3o, DIc);
HIc = new Fb(10000);
_9e = 128;
JIc = Wwh(_9e * 2);
L3o = Wwh(_9e * 2);
qSe = OIc();
C9e = OIc();
g3t = OIc();
Kwh = false;
(function (n) {
  n[n.Diag = 1] = "Diag";
  n[n.Left = 2] = "Left";
  n[n.LeftLeft = 3] = "LeftLeft";
})(Ywh ||= {});
(function (n) {
  n.Default = [-100, 0];
  function e(t) {
    return !t || t.length === 2 && t[0] === -100 && t[1] === 0;
  }
  n.isDefault = e;
})(hz ||= {});
o3n = class {
  static {
    this.default = {
      boostFullMatch: true,
      firstMatchCanBeWeak: false
    };
  }
  constructor(n, e) {
    this.firstMatchCanBeWeak = n;
    this.boostFullMatch = e;
  }
};
