"use strict";

// Module: out-build/vs/editor/common/model/guidesTextModelPart.js
// Offset: 1120846 (bundle byte offset)
// Size: 6544 bytes
GD();
oa();
koe();
ts();
$ph();
JEc();
GEc();
_s();
qph = class extends HEc {
  constructor(n, e) {
    super();
    this.textModel = n;
    this.languageConfigurationService = e;
  }
  getLanguageConfiguration(n) {
    return this.languageConfigurationService.getLanguageConfiguration(n);
  }
  _computeIndentLevel(n) {
    return mOo(this.textModel.getLineContent(n + 1), this.textModel.getOptions().tabSize);
  }
  getActiveIndentGuide(n, e, t) {
    this.assertNotDisposed();
    const i = this.textModel.getLineCount();
    if (n < 1 || n > i) {
      throw new _m("Illegal value for lineNumber");
    }
    const r = this.getLanguageConfiguration(this.textModel.getLanguageId()).foldingRules;
    const s = !!r && !!r.offSide;
    let o = -2;
    let a = -1;
    let l = -2;
    let u = -1;
    const d = N => {
      if (o !== -1 && (o === -2 || o > N - 1)) {
        o = -1;
        a = -1;
        for (let M = N - 2; M >= 0; M--) {
          const O = this._computeIndentLevel(M);
          if (O >= 0) {
            o = M;
            a = O;
            break;
          }
        }
      }
      if (l === -2) {
        l = -1;
        u = -1;
        for (let M = N; M < i; M++) {
          const O = this._computeIndentLevel(M);
          if (O >= 0) {
            l = M;
            u = O;
            break;
          }
        }
      }
    };
    let m = -2;
    let p = -1;
    let g = -2;
    let f = -1;
    const A = N => {
      if (m === -2) {
        m = -1;
        p = -1;
        for (let M = N - 2; M >= 0; M--) {
          const O = this._computeIndentLevel(M);
          if (O >= 0) {
            m = M;
            p = O;
            break;
          }
        }
      }
      if (g !== -1 && (g === -2 || g < N - 1)) {
        g = -1;
        f = -1;
        for (let M = N; M < i; M++) {
          const O = this._computeIndentLevel(M);
          if (O >= 0) {
            g = M;
            f = O;
            break;
          }
        }
      }
    };
    let w = 0;
    let C = true;
    let x = 0;
    let I = true;
    let B = 0;
    let R = 0;
    for (let N = 0; C || I; N++) {
      const M = n - N;
      const O = n + N;
      if (N > 1 && (M < 1 || M < e)) {
        C = false;
      }
      if (N > 1 && (O > i || O > t)) {
        I = false;
      }
      if (N > 50000) {
        C = false;
        I = false;
      }
      let $ = -1;
      if (C && M >= 1) {
        const W = this._computeIndentLevel(M - 1);
        if (W >= 0) {
          l = M - 1;
          u = W;
          $ = Math.ceil(W / this.textModel.getOptions().indentSize);
        } else {
          d(M);
          $ = this._getIndentLevelForWhitespaceLine(s, a, u);
        }
      }
      let H = -1;
      if (I && O <= i) {
        const W = this._computeIndentLevel(O - 1);
        if (W >= 0) {
          m = O - 1;
          p = W;
          H = Math.ceil(W / this.textModel.getOptions().indentSize);
        } else {
          A(O);
          H = this._getIndentLevelForWhitespaceLine(s, p, f);
        }
      }
      if (N === 0) {
        R = $;
        continue;
      }
      if (N === 1) {
        if (O <= i && H >= 0 && R + 1 === H) {
          C = false;
          w = O;
          x = O;
          B = H;
          continue;
        }
        if (M >= 1 && $ >= 0 && $ - 1 === R) {
          I = false;
          w = M;
          x = M;
          B = $;
          continue;
        }
        w = n;
        x = n;
        B = R;
        if (B === 0) {
          return {
            startLineNumber: w,
            endLineNumber: x,
            indent: B
          };
        }
      }
      if (C) {
        if ($ >= B) {
          w = M;
        } else {
          C = false;
        }
      }
      if (I) {
        if (H >= B) {
          x = O;
        } else {
          I = false;
        }
      }
    }
    return {
      startLineNumber: w,
      endLineNumber: x,
      indent: B
    };
  }
  getLinesBracketGuides(n, e, t, i) {
    const r = [];
    for (let d = n; d <= e; d++) {
      r.push([]);
    }
    const s = true;
    const o = this.textModel.bracketPairs.getBracketPairsInRangeWithMinIndentation(new Zt(n, 1, e, this.textModel.getLineMaxColumn(e))).toArray();
    let a;
    if (t && o.length > 0) {
      const d = (n <= t.lineNumber && t.lineNumber <= e ? o : this.textModel.bracketPairs.getBracketPairsInRange(Zt.fromPositions(t)).toArray()).filter(m => Zt.strictContainsPosition(m.range, t));
      a = Cbe(d, m => s || m.range.startLineNumber !== m.range.endLineNumber)?.range;
    }
    const l = this.textModel.getOptions().bracketPairColorizationOptions.independentColorPoolPerBracketType;
    const u = new WEc();
    for (const d of o) {
      if (!d.closingBracketRange) {
        continue;
      }
      const m = a && d.range.equalsRange(a);
      if (!m && !i.includeInactive) {
        continue;
      }
      const p = u.getInlineClassName(d.nestingLevel, d.nestingLevelOfEqualBracketType, l) + (i.highlightActive && m ? " " + u.activeClassName : "");
      const g = d.openingBracketRange.getStartPosition();
      const f = d.closingBracketRange.getStartPosition();
      const A = i.horizontalGuides === Cft.Enabled || i.horizontalGuides === Cft.EnabledForActive && m;
      if (d.range.startLineNumber === d.range.endLineNumber) {
        if (s && A) {
          r[d.range.startLineNumber - n].push(new BVe(-1, d.openingBracketRange.getEndPosition().column, p, new BOt(false, f.column), -1, -1));
        }
        continue;
      }
      const w = this.getVisibleColumnFromPosition(f);
      const C = this.getVisibleColumnFromPosition(d.openingBracketRange.getStartPosition());
      const x = Math.min(C, w, d.minVisibleColumnIndentation + 1);
      let I = false;
      if (TH(this.textModel.getLineContent(d.closingBracketRange.startLineNumber)) < d.closingBracketRange.startColumn - 1) {
        I = true;
      }
      const N = Math.max(g.lineNumber, n);
      const M = Math.min(f.lineNumber, e);
      const O = I ? 1 : 0;
      for (let $ = N; $ < M + O; $++) {
        r[$ - n].push(new BVe(x, -1, p, null, $ === g.lineNumber ? g.column : -1, $ === f.lineNumber ? f.column : -1));
      }
      if (A) {
        if (g.lineNumber >= n && C > x) {
          r[g.lineNumber - n].push(new BVe(x, -1, p, new BOt(false, g.column), -1, -1));
        }
        if (f.lineNumber <= e && w > x) {
          r[f.lineNumber - n].push(new BVe(x, -1, p, new BOt(!I, f.column), -1, -1));
        }
      }
    }
    for (const d of r) {
      d.sort((m, p) => m.visibleColumn - p.visibleColumn);
    }
    return r;
  }
  getVisibleColumnFromPosition(n) {
    return ZP.visibleColumnFromColumn(this.textModel.getLineContent(n.lineNumber), n.column, this.textModel.getOptions().tabSize) + 1;
  }
  getLinesIndentGuides(n, e) {
    this.assertNotDisposed();
    const t = this.textModel.getLineCount();
    if (n < 1 || n > t) {
      throw new Error("Illegal value for startLineNumber");
    }
    if (e < 1 || e > t) {
      throw new Error("Illegal value for endLineNumber");
    }
    const i = this.textModel.getOptions();
    const r = this.getLanguageConfiguration(this.textModel.getLanguageId()).foldingRules;
    const s = !!r && !!r.offSide;
    const o = new Array(e - n + 1);
    let a = -2;
    let l = -1;
    let u = -2;
    let d = -1;
    for (let m = n; m <= e; m++) {
      const p = m - n;
      const g = this._computeIndentLevel(m - 1);
      if (g >= 0) {
        a = m - 1;
        l = g;
        o[p] = Math.ceil(g / i.indentSize);
        continue;
      }
      if (a === -2) {
        a = -1;
        l = -1;
        for (let f = m - 2; f >= 0; f--) {
          const A = this._computeIndentLevel(f);
          if (A >= 0) {
            a = f;
            l = A;
            break;
          }
        }
      }
      if (u !== -1 && (u === -2 || u < m - 1)) {
        u = -1;
        d = -1;
        for (let f = m; f < t; f++) {
          const A = this._computeIndentLevel(f);
          if (A >= 0) {
            u = f;
            d = A;
            break;
          }
        }
      }
      o[p] = this._getIndentLevelForWhitespaceLine(s, l, d);
    }
    return o;
  }
  _getIndentLevelForWhitespaceLine(n, e, t) {
    const i = this.textModel.getOptions();
    if (e === -1 || t === -1) {
      return 0;
    } else if (e < t) {
      return 1 + Math.floor(e / i.indentSize);
    } else if (e === t || n) {
      return Math.ceil(t / i.indentSize);
    } else {
      return 1 + Math.floor(t / i.indentSize);
    }
  }
};
WEc = class {
  constructor() {
    this.activeClassName = "indent-active";
  }
  getInlineClassName(n, e, t) {
    return this.getInlineClassNameOfLevel(t ? e : n);
  }
  getInlineClassNameOfLevel(n) {
    return `bracket-indent-guide lvl-${n % 30}`;
  }
};
