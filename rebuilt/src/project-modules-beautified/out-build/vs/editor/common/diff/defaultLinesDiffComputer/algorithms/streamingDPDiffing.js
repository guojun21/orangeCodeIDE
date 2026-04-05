"use strict";

// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/algorithms/streamingDPDiffing.js
// Offset: 2173903 (bundle byte offset)
// Size: 1491 bytes
$I();
pbt();
y5o();
X0h = class {
  compute(n, e, t = R3t.instance, i) {
    if (n.length === 0 || e.length === 0) {
      return WSe.trivial(n, e);
    }
    const r = new P3t(n.length * 2 + 1, e.length + 1);
    const s = new P3t(n.length * 2 + 1, e.length + 1);
    for (let p = 0; p <= e.length; p++) {
      r.set(0, p, p);
      if (p > 0) {
        s.set(0, p, true);
      } else {
        s.set(0, p, false);
      }
    }
    for (let p = 0; p <= n.length * 2; p++) {
      r.set(p, 0, Math.floor((p + 1) / 2));
      s.set(p, 0, false);
    }
    for (let p = 1; p <= e.length; p++) {
      for (let g = 1; g <= n.length * 2; g++) {
        if (!t.isValid()) {
          return WSe.trivialTimedOut(n, e);
        }
        if (g % 2 === 0) {
          const f = r.get(g, p - 1) + 1;
          const A = r.get(g - 1, p);
          if (f < A) {
            r.set(g, p, f);
            s.set(g, p, true);
          } else {
            r.set(g, p, A);
            s.set(g, p, false);
          }
        } else {
          const f = r.get(g - 1, p) + 0.4;
          const A = n.getElement(Math.floor(g / 2)) === e.getElement(p - 1) ? r.get(g - 1, p - 1) : Number.MAX_VALUE;
          if (A < f) {
            r.set(g, p, A);
            s.set(g, p, true);
          } else {
            r.set(g, p, f);
            s.set(g, p, false);
          }
        }
      }
    }
    let o = Number.MAX_VALUE;
    let a = -1;
    for (let p = 0; p <= n.length * 2; p++) {
      const g = r.get(p, e.length);
      if (g < o) {
        o = g;
        a = p;
      }
    }
    let l = [];
    let u = a;
    let d = e.length;
    if (u <= n.length * 2 - 2) {
      l.push(new H4(new dm(Math.floor((u + 1) / 2), n.length), new dm(d, d)));
    }
    let m;
    while (u >= 0 && d >= 0) {
      if (s.get(u, d)) {
        if (u % 2 === 0) {
          if (m === undefined) {
            m = {
              x: Math.floor(u / 2),
              y: d
            };
          }
          d -= 1;
        } else {
          if (m !== undefined) {
            if (m.x !== Math.floor(u / 2) + 1 || m.y !== d) {
              l.push(new H4(new dm(Math.floor(u / 2) + 1, m.x), new dm(d, m.y)));
            }
            m = undefined;
          }
          u -= 1;
          d -= 1;
        }
      } else {
        u % 2;
        if (m === undefined) {
          m = {
            x: Math.floor((u + 1) / 2),
            y: d
          };
        }
        u -= 1;
      }
    }
    if (m !== undefined) {
      if (m.x !== Math.floor(u / 2) + 1 || m.y !== d) {
        l.push(new H4(new dm(Math.floor(u / 2) + 1, m.x), new dm(d, m.y)));
      }
      m = undefined;
    }
    l.reverse();
    return new WSe(l, false);
  }
};
