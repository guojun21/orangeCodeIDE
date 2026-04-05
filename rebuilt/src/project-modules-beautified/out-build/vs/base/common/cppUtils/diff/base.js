"use strict";

// Module: out-build/vs/base/common/cppUtils/diff/base.js
// Offset: 33809821 (bundle byte offset)
// Size: 2186 bytes
uDa.prototype = {
  diff(n, e, t = {}) {
    let i = t.callback;
    if (typeof t == "function") {
      i = t;
      t = {};
    }
    this.options = t;
    let r = this;
    function s(C) {
      if (i) {
        setTimeout(function () {
          i(undefined, C);
        }, 0);
        return true;
      } else {
        return C;
      }
    }
    n = this.castInput(n);
    e = this.castInput(e);
    n = this.removeEmpty(this.tokenize(n));
    e = this.removeEmpty(this.tokenize(e));
    let o = e.length;
    let a = n.length;
    let l = 1;
    let u = o + a;
    if (t.maxEditLength) {
      u = Math.min(u, t.maxEditLength);
    }
    const d = t.timeout ?? Infinity;
    const m = Date.now() + d;
    let p = [{
      oldPos: -1,
      lastComponent: undefined
    }];
    let g = this.extractCommon(p[0], e, n, 0);
    if (p[0].oldPos + 1 >= a && g + 1 >= o) {
      return s([{
        value: this.join(e),
        count: e.length
      }]);
    }
    let f = -Infinity;
    let A = Infinity;
    function w() {
      for (let C = Math.max(f, -l); C <= Math.min(A, l); C += 2) {
        let x;
        let I = p[C - 1];
        let B = p[C + 1];
        if (I) {
          p[C - 1] = undefined;
        }
        let R = false;
        if (B) {
          const M = B.oldPos - C;
          R = B && M >= 0 && M < o;
        }
        let N = I && I.oldPos + 1 < a;
        if (!R && !N) {
          p[C] = undefined;
          continue;
        }
        if (!N || R && I.oldPos + 1 < B.oldPos) {
          x = r.addToPath(B, true, undefined, 0);
        } else {
          x = r.addToPath(I, undefined, true, 1);
        }
        g = r.extractCommon(x, e, n, C);
        if (x.oldPos + 1 >= a && g + 1 >= o) {
          return s(gmy(r, x.lastComponent, e, n, r.useLongestToken));
        }
        p[C] = x;
        if (x.oldPos + 1 >= a) {
          A = Math.min(A, C - 1);
        }
        if (g + 1 >= o) {
          f = Math.max(f, C + 1);
        }
      }
      l++;
    }
    if (i) {
      (function C() {
        setTimeout(function () {
          if (l > u || Date.now() > m) {
            return i();
          }
          if (!w()) {
            C();
          }
        }, 0);
      })();
    } else {
      while (l <= u && Date.now() <= m) {
        let C = w();
        if (C) {
          return C;
        }
      }
    }
  },
  addToPath(n, e, t, i) {
    let r = n.lastComponent;
    if (r && r.added === e && r.removed === t) {
      return {
        oldPos: n.oldPos + i,
        lastComponent: {
          count: r.count + 1,
          added: e,
          removed: t,
          previousComponent: r.previousComponent
        }
      };
    } else {
      return {
        oldPos: n.oldPos + i,
        lastComponent: {
          count: 1,
          added: e,
          removed: t,
          previousComponent: r
        }
      };
    }
  },
  extractCommon(n, e, t, i) {
    let r = e.length;
    let s = t.length;
    let o = n.oldPos;
    let a = o - i;
    let l = 0;
    while (a + 1 < r && o + 1 < s && this.equals(e[a + 1], t[o + 1])) {
      a++;
      o++;
      l++;
    }
    if (l) {
      n.lastComponent = {
        count: l,
        previousComponent: n.lastComponent
      };
    }
    n.oldPos = o;
    return a;
  },
  equals(n, e) {
    if (this.options.comparator) {
      return this.options.comparator(n, e);
    } else {
      return n === e || this.options.ignoreCase && n.toLowerCase() === e.toLowerCase();
    }
  },
  removeEmpty(n) {
    let e = [];
    for (let t = 0; t < n.length; t++) {
      if (n[t]) {
        e.push(n[t]);
      }
    }
    return e;
  },
  castInput(n) {
    return n;
  },
  tokenize(n) {
    return n.split("");
  },
  join(n) {
    return n.join("");
  }
};
