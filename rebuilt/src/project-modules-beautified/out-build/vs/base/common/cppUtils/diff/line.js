"use strict";

// Module: out-build/vs/base/common/cppUtils/diff/line.js
// Offset: 33812087 (bundle byte offset)
// Size: 797 bytes
D0u();
WUf();
QUf = new uDa();
QUf.tokenize = function (n) {
  if (this.options.stripTrailingCr) {
    n = n.replace(/\r\n/g, `
`);
  }
  let e = [];
  let t = n.split(/(\n|\r\n)/);
  if (!t[t.length - 1]) {
    t.pop();
  }
  for (let i = 0; i < t.length; i++) {
    let r = t[i];
    if (i % 2 && !this.options.newlineIsToken) {
      e[e.length - 1] += r;
    } else {
      if (this.options.ignoreWhitespace) {
        r = r.trim();
      }
      e.push(r);
    }
  }
  return e;
};
