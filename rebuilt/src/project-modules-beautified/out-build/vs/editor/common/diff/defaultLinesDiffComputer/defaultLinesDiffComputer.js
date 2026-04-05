"use strict";

// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/defaultLinesDiffComputer.js
// Offset: 2193493 (bundle byte offset)
// Size: 5133 bytes
BdA();
Vs();
Lv();
Ix();
$I();
ts();
EW();
L3t();
WY();
pbt();
RdA();
MDc();
UdA();
mCh();
gCh();
cCh();
_5o = class {
  constructor() {
    this.dynamicProgrammingDiffing = new eCh();
    this.myersDiffingAlgorithm = new w5o();
    this.streamingDPDiffing = new X0h();
  }
  computeDiff(n, e, t) {
    if (n.length === 0 && e.length === 0) {
      return new Voe([], [], false);
    }
    if (n.length === 0) {
      return new Voe([new _3(new rh(1, 1), new rh(1, e.length + 1), undefined)], [], false);
    }
    if (e.length === 0) {
      return new Voe([new _3(new rh(1, n.length + 1), new rh(1, 1), undefined)], [], false);
    }
    if (n.length <= 1 && cg(n, e, (M, O) => M === O)) {
      return new Voe([], [], false);
    }
    if (n.length === 1 && n[0].length === 0 || e.length === 1 && e[0].length === 0) {
      return new Voe([new _3(new rh(1, n.length + 1), new rh(1, e.length + 1), [new zH(new Zt(1, 1, n.length, n[n.length - 1].length + 1), new Zt(1, 1, e.length, e[e.length - 1].length + 1))])], [], false);
    }
    const i = t.maxComputationTimeMs === 0 ? R3t.instance : new Z0h(t.maxComputationTimeMs, t.shouldGracefullyFallBackOnTimeout);
    const r = !t.ignoreTrimWhitespace;
    const s = new Map();
    function o(M) {
      let O = s.get(M);
      if (O === undefined) {
        O = s.size;
        s.set(M, O);
      }
      return O;
    }
    const a = n.length * e.length < 1000000 && t.onlyCareAboutPrefixOfOriginalLines === true;
    const l = n.map(M => o(a ? M : M.trim()));
    const u = e.map(M => o(a ? M : M.trim()));
    const d = n.every(M => M.trim().length === 0);
    const m = new S3n(l, n);
    const p = new S3n(u, e);
    const g = a ? d ? WSe.trivial(m, p) : this.streamingDPDiffing.compute(m, p, i, (M, O) => n[M] === e[O] ? e[O].length === 0 ? 0.1 : 1 + Math.log(1 + e[O].length) : 0.99) : m.length + p.length < 1700 ? this.dynamicProgrammingDiffing.compute(m, p, i, (M, O) => n[M] === e[O] ? e[O].length === 0 ? 0.1 : 1 + Math.log(1 + e[O].length) : 0.99) : this.myersDiffingAlgorithm.compute(m, p, i);
    let f = g.diffs;
    let A = g.hitTimeout;
    if (a) {
      const M = f.map(O => new _3(new rh(O.seq1Range.start + 1, O.seq1Range.endExclusive + 1), new rh(O.seq2Range.start + 1, O.seq2Range.endExclusive + 1), undefined));
      return new Voe(M, [], A);
    }
    const w = A;
    f = FDc(m, p, f);
    f = JdA(m, p, f);
    if (t.skipDiffRefinement) {
      const M = f.map(O => new _3(new rh(O.seq1Range.start + 1, O.seq1Range.endExclusive + 1), new rh(O.seq2Range.start + 1, O.seq2Range.endExclusive + 1), undefined));
      return new Voe(M, [], A);
    }
    const C = [];
    const x = M => {
      if (r) {
        for (let O = 0; O < M; O++) {
          const $ = I + O;
          const H = B + O;
          if (n[$] !== e[H]) {
            const W = this.refineDiff(n, e, new H4(new dm($, $ + 1), new dm(H, H + 1)), i, r, t);
            for (const z of W.mappings) {
              C.push(z);
            }
            if (W.hitTimeout) {
              A = true;
            }
          }
        }
      }
    };
    let I = 0;
    let B = 0;
    for (const M of f) {
      _te(() => M.seq1Range.start - I === M.seq2Range.start - B);
      const O = M.seq1Range.start - I;
      x(O);
      I = M.seq1Range.endExclusive;
      B = M.seq2Range.endExclusive;
      const $ = this.refineDiff(n, e, M, i, r, t);
      if ($.hitTimeout) {
        A = true;
      }
      for (const H of $.mappings) {
        C.push(H);
      }
    }
    x(n.length - I);
    const R = a5o(C, new y3n(n), new y3n(e));
    let N = [];
    if (t.computeMoves) {
      N = this.computeMoves(R, n, e, l, u, i, r, t);
    }
    _te(() => {
      function M($, H) {
        if ($.lineNumber < 1 || $.lineNumber > H.length) {
          return false;
        }
        const W = H[$.lineNumber - 1];
        return !($.column < 1) && !($.column > W.length + 1);
      }
      function O($, H) {
        return !($.startLineNumber < 1) && !($.startLineNumber > H.length + 1) && !($.endLineNumberExclusive < 1) && !($.endLineNumberExclusive > H.length + 1);
      }
      for (const $ of R) {
        if (!$.innerChanges) {
          return false;
        }
        for (const H of $.innerChanges) {
          if (!M(H.modifiedRange.getStartPosition(), e) || !M(H.modifiedRange.getEndPosition(), e) || !M(H.originalRange.getStartPosition(), n) || !M(H.originalRange.getEndPosition(), n)) {
            return false;
          }
        }
        if (!O($.modified, e) || !O($.original, n)) {
          return false;
        }
      }
      return true;
    });
    if (t.shouldGracefullyFallBackOnTimeout === true && A && !w) {
      const M = f.map(O => new _3(new rh(O.seq1Range.start + 1, O.seq1Range.endExclusive + 1), new rh(O.seq2Range.start + 1, O.seq2Range.endExclusive + 1), undefined));
      return new Voe(M, [], w);
    }
    return new Voe(R, N, A);
  }
  computeMoves(n, e, t, i, r, s, o, a) {
    return PdA(n, e, t, i, r, s).map(d => {
      const m = this.refineDiff(e, t, new H4(d.original.toOffsetRange(), d.modified.toOffsetRange()), s, o, a);
      const p = a5o(m.mappings, new y3n(e), new y3n(t), true);
      return new LDc(d, p);
    });
  }
  refineDiff(n, e, t, i, r, s) {
    const a = WdA(t).toRangeMapping2(n, e);
    const l = new C3n(n, a.originalRange, r);
    const u = new C3n(e, a.modifiedRange, r);
    const d = l.length + u.length < 500 ? this.dynamicProgrammingDiffing.compute(l, u, i) : this.myersDiffingAlgorithm.compute(l, u, i);
    const m = false;
    let p = d.diffs;
    if (m) {
      H4.assertSorted(p);
    }
    p = FDc(l, u, p);
    if (m) {
      H4.assertSorted(p);
    }
    p = hCh(l, u, p, (f, A) => f.findWordContaining(A));
    if (m) {
      H4.assertSorted(p);
    }
    if (s.extendToSubwords) {
      p = hCh(l, u, p, (f, A) => f.findSubWordContaining(A), true);
      if (m) {
        H4.assertSorted(p);
      }
    }
    p = qdA(l, u, p);
    if (m) {
      H4.assertSorted(p);
    }
    p = GdA(l, u, p);
    if (m) {
      H4.assertSorted(p);
    }
    const g = p.map(f => new zH(l.translateRange(f.seq1Range), u.translateRange(f.seq2Range)));
    if (m) {
      zH.assertSorted(g);
    }
    return {
      mappings: g,
      hitTimeout: d.hitTimeout
    };
  }
};
