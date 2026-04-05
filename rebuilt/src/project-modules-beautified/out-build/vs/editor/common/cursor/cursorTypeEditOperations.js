"use strict";

// Module: out-build/vs/editor/common/cursor/cursorTypeEditOperations.js
// Offset: 806895 (bundle byte offset)
// Size: 14899 bytes
_s();
oa();
M4t();
S4n();
Tlh();
Eoe();
g4n();
ts();
tl();
Xze();
QE();
u4n();
o1c();
s1c();
Llh = class {
  static getEdits(n, e, t, i, r) {
    if (!r && this._isAutoIndentType(n, e, t)) {
      const s = [];
      for (const a of t) {
        const l = this._findActualIndentationForSelection(n, e, a, i);
        if (l === null) {
          return;
        }
        s.push({
          selection: a,
          indentation: l
        });
      }
      const o = f4o.getAutoClosingPairClose(n, e, t, i, false);
      return this._getIndentationAndAutoClosingPairEdits(n, e, s, i, o);
    }
  }
  static _isAutoIndentType(n, e, t) {
    if (n.autoIndent < 4) {
      return false;
    }
    for (let i = 0, r = t.length; i < r; i++) {
      if (!e.tokenization.isCheapToTokenize(t[i].getEndPosition().lineNumber)) {
        return false;
      }
    }
    return true;
  }
  static _findActualIndentationForSelection(n, e, t, i) {
    const r = FrA(n, e, t, i, {
      shiftIndent: o => g4o(n, o),
      unshiftIndent: o => x4n(n, o)
    }, n.languageConfigurationService);
    if (r === null) {
      return null;
    }
    const s = plh(e, t.startLineNumber, t.startColumn);
    if (r === n.normalizeIndentation(s)) {
      return null;
    } else {
      return r;
    }
  }
  static _getIndentationAndAutoClosingPairEdits(n, e, t, i, r) {
    const s = t.map(({
      selection: a,
      indentation: l
    }) => {
      if (r !== null) {
        const u = this._getEditFromIndentationAndSelection(n, e, l, a, i, false);
        return new Wlh(u, a, i, r);
      } else {
        const u = this._getEditFromIndentationAndSelection(n, e, l, a, i, true);
        return rft(u.range, u.text, false);
      }
    });
    const o = {
      shouldPushStackElementBefore: true,
      shouldPushStackElementAfter: false
    };
    return new mW(4, s, o);
  }
  static _getEditFromIndentationAndSelection(n, e, t, i, r, s = true) {
    const o = i.startLineNumber;
    const a = e.getLineFirstNonWhitespaceColumn(o);
    let l = n.normalizeIndentation(t);
    if (a !== 0) {
      const d = e.getLineContent(o);
      l += d.substring(a - 1, i.startColumn - 1);
    }
    l += s ? r : "";
    return {
      range: new Zt(o, 1, i.endLineNumber, i.endColumn),
      text: l
    };
  }
};
Nlh = class {
  static getEdits(n, e, t, i, r, s) {
    if (Rlh(e, t, i, r, s)) {
      return this._runAutoClosingOvertype(n, i, s);
    }
  }
  static _runAutoClosingOvertype(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const a = e[r].getPosition();
      const l = new Zt(a.lineNumber, a.column, a.lineNumber, a.column + 1);
      i[r] = new D6(l, t);
    }
    return new mW(4, i, {
      shouldPushStackElementBefore: p4o(n, 4),
      shouldPushStackElementAfter: false
    });
  }
};
Mlh = class {
  static getEdits(n, e, t, i, r) {
    if (Rlh(n, e, t, i, r)) {
      const s = t.map(o => new D6(new Zt(o.positionLineNumber, o.positionColumn, o.positionLineNumber, o.positionColumn + 1), "", false));
      return new mW(4, s, {
        shouldPushStackElementBefore: true,
        shouldPushStackElementAfter: false
      });
    }
  }
};
f4o = class {
  static getEdits(n, e, t, i, r, s) {
    if (!s) {
      const o = this.getAutoClosingPairClose(n, e, t, i, r);
      if (o !== null) {
        return this._runAutoClosingOpenCharType(t, i, r, o);
      }
    }
  }
  static _runAutoClosingOpenCharType(n, e, t, i) {
    const r = [];
    for (let s = 0, o = n.length; s < o; s++) {
      const a = n[s];
      r[s] = new Glh(a, e, !t, i);
    }
    return new mW(4, r, {
      shouldPushStackElementBefore: true,
      shouldPushStackElementAfter: false
    });
  }
  static getAutoClosingPairClose(n, e, t, i, r) {
    for (const g of t) {
      if (!g.isEmpty()) {
        return null;
      }
    }
    const s = t.map(g => {
      const f = g.getPosition();
      if (r) {
        return {
          lineNumber: f.lineNumber,
          beforeColumn: f.column - i.length,
          afterColumn: f.column
        };
      } else {
        return {
          lineNumber: f.lineNumber,
          beforeColumn: f.column,
          afterColumn: f.column
        };
      }
    });
    const o = this._findAutoClosingPairOpen(n, e, s.map(g => new ar(g.lineNumber, g.beforeColumn)), i);
    if (!o) {
      return null;
    }
    let a;
    let l;
    if (Kze(i)) {
      a = n.autoClosingQuotes;
      l = n.shouldAutoCloseBefore.quote;
    } else if (n.blockCommentStartToken ? o.open.includes(n.blockCommentStartToken) : false) {
      a = n.autoClosingComments;
      l = n.shouldAutoCloseBefore.comment;
    } else {
      a = n.autoClosingBrackets;
      l = n.shouldAutoCloseBefore.bracket;
    }
    if (a === "never") {
      return null;
    }
    const d = this._findContainedAutoClosingPair(n, o);
    const m = d ? d.close : "";
    let p = true;
    for (const g of s) {
      const {
        lineNumber: f,
        beforeColumn: A,
        afterColumn: w
      } = g;
      const C = e.getLineContent(f);
      const x = C.substring(0, A - 1);
      const I = C.substring(w - 1);
      if (!I.startsWith(m)) {
        p = false;
      }
      if (I.length > 0) {
        const M = I.charAt(0);
        if (!this._isBeforeClosingBrace(n, I) && !l(M)) {
          return null;
        }
      }
      if (o.open.length === 1 && (i === "'" || i === "\"") && a !== "always") {
        const M = kde(n.wordSeparators, []);
        if (x.length > 0) {
          const O = x.charCodeAt(x.length - 1);
          if (M.get(O) === 0) {
            return null;
          }
        }
      }
      if (!e.tokenization.isCheapToTokenize(f)) {
        return null;
      }
      e.tokenization.forceTokenization(f);
      const B = e.tokenization.getLineTokens(f);
      const R = Zgt(B, A - 1);
      if (!o.shouldAutoClose(R, A - R.firstCharOffset)) {
        return null;
      }
      const N = o.findNeutralCharacter();
      if (N) {
        const M = e.tokenization.getTokenTypeIfInsertingCharacter(f, A, N);
        if (!o.isOK(M)) {
          return null;
        }
      }
    }
    if (p) {
      return o.close.substring(0, o.close.length - m.length);
    } else {
      return o.close;
    }
  }
  static _findContainedAutoClosingPair(n, e) {
    if (e.open.length <= 1) {
      return null;
    }
    const t = e.close.charAt(e.close.length - 1);
    const i = n.autoClosingPairs.autoClosingPairsCloseByEnd.get(t) || [];
    let r = null;
    for (const s of i) {
      if (s.open !== e.open && e.open.includes(s.open) && e.close.endsWith(s.close) && (!r || s.open.length > r.open.length)) {
        r = s;
      }
    }
    return r;
  }
  static _findAutoClosingPairOpen(n, e, t, i) {
    const r = n.autoClosingPairs.autoClosingPairsOpenByEnd.get(i);
    if (!r) {
      return null;
    }
    let s = null;
    for (const o of r) {
      if (s === null || o.open.length > s.open.length) {
        let a = true;
        for (const l of t) {
          if (e.getValueInRange(new Zt(l.lineNumber, l.column - o.open.length + 1, l.lineNumber, l.column)) + i !== o.open) {
            a = false;
            break;
          }
        }
        if (a) {
          s = o;
        }
      }
    }
    return s;
  }
  static _isBeforeClosingBrace(n, e) {
    const t = e.charAt(0);
    const i = n.autoClosingPairs.autoClosingPairsOpenByStart.get(t) || [];
    const r = n.autoClosingPairs.autoClosingPairsCloseByStart.get(t) || [];
    const s = i.some(a => e.startsWith(a.open));
    const o = r.some(a => e.startsWith(a.close));
    return !s && o;
  }
};
c1c = class {
  static getEdits(n, e) {
    if (n.inputMode !== "overtype") {
      return null;
    }
    const i = e.map(r => new Ach(r.insertedTextRange));
    return new mW(4, i, {
      shouldPushStackElementBefore: true,
      shouldPushStackElementAfter: false
    });
  }
};
Flh = class {
  static getEdits(n, e, t, i, r) {
    if (!r && this._isSurroundSelectionType(n, e, t, i)) {
      return this._runSurroundSelectionType(n, t, i);
    }
  }
  static _runSurroundSelectionType(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = n.surroundingPairs[t];
      i[r] = new Elh(o, t, a);
    }
    return new mW(0, i, {
      shouldPushStackElementBefore: true,
      shouldPushStackElementAfter: true
    });
  }
  static _isSurroundSelectionType(n, e, t, i) {
    if (!Plh(n, i) || !n.surroundingPairs.hasOwnProperty(i)) {
      return false;
    }
    const r = Kze(i);
    for (const s of t) {
      if (s.isEmpty()) {
        return false;
      }
      let o = true;
      for (let a = s.startLineNumber; a <= s.endLineNumber; a++) {
        const l = e.getLineContent(a);
        const u = a === s.startLineNumber ? s.startColumn - 1 : 0;
        const d = a === s.endLineNumber ? s.endColumn - 1 : l.length;
        const m = l.substring(u, d);
        if (/[^ \t]/.test(m)) {
          o = false;
          break;
        }
      }
      if (o) {
        return false;
      }
      if (r && s.startLineNumber === s.endLineNumber && s.startColumn + 1 === s.endColumn) {
        const a = e.getValueInRange(s);
        if (Kze(a)) {
          return false;
        }
      }
    }
    return true;
  }
};
Olh = class {
  static getEdits(n, e, t, i, r, s) {
    if (!s && this._isTypeInterceptorElectricChar(e, t, i)) {
      const o = this._typeInterceptorElectricChar(n, e, t, i[0], r);
      if (o) {
        return o;
      }
    }
  }
  static _isTypeInterceptorElectricChar(n, e, t) {
    return t.length === 1 && !!e.tokenization.isCheapToTokenize(t[0].getEndPosition().lineNumber);
  }
  static _typeInterceptorElectricChar(n, e, t, i, r) {
    if (!e.electricChars.hasOwnProperty(r) || !i.isEmpty()) {
      return null;
    }
    const s = i.getPosition();
    t.tokenization.forceTokenization(s.lineNumber);
    const o = t.tokenization.getLineTokens(s.lineNumber);
    let a;
    try {
      a = e.onElectricCharacter(r, o, s.column);
    } catch (l) {
      Gc(l);
      return null;
    }
    if (!a) {
      return null;
    }
    if (a.matchOpenBracket) {
      const l = (o.getLineContent() + r).lastIndexOf(a.matchOpenBracket) + 1;
      const u = t.bracketPairs.findMatchingBracketUp(a.matchOpenBracket, {
        lineNumber: s.lineNumber,
        column: l
      }, 500);
      if (u) {
        if (u.startLineNumber === s.lineNumber) {
          return null;
        }
        const d = t.getLineContent(u.startLineNumber);
        const m = rE(d);
        const p = e.normalizeIndentation(m);
        const g = t.getLineContent(s.lineNumber);
        const f = t.getLineFirstNonWhitespaceColumn(s.lineNumber) || s.column;
        const A = g.substring(f - 1, s.column - 1);
        const w = p + A + r;
        const C = new Zt(s.lineNumber, 1, s.lineNumber, s.column);
        const x = new D6(C, w);
        return new mW(a1c(w, n), [x], {
          shouldPushStackElementBefore: false,
          shouldPushStackElementAfter: true
        });
      }
    }
    return null;
  }
};
Ulh = class {
  static getEdits(n, e, t, i, r) {
    const s = [];
    for (let a = 0, l = t.length; a < l; a++) {
      const u = n.inputMode === "overtype" && !r ? qFo : D6;
      s[a] = new u(t[a], i);
    }
    const o = a1c(i, e);
    return new mW(o, s, {
      shouldPushStackElementBefore: p4o(e, o),
      shouldPushStackElementAfter: false
    });
  }
};
T4n = class {
  static getEdits(n, e, t, i, r) {
    if (!r && i === `
`) {
      const s = [];
      for (let o = 0, a = t.length; o < a; o++) {
        s[o] = this._enter(n, e, false, t[o]);
      }
      return new mW(4, s, {
        shouldPushStackElementBefore: true,
        shouldPushStackElementAfter: false
      });
    }
  }
  static _enter(n, e, t, i) {
    if (n.autoIndent === 0) {
      return rft(i, `
`, t);
    }
    if (!e.tokenization.isCheapToTokenize(i.getStartPosition().lineNumber) || n.autoIndent === 1) {
      const a = e.getLineContent(i.startLineNumber);
      const l = rE(a).substring(0, i.startColumn - 1);
      return rft(i, `
${n.normalizeIndentation(l)}`, t);
    }
    const r = j4t(n.autoIndent, e, i, n.languageConfigurationService);
    if (r) {
      if (r.indentAction === $R.None) {
        return rft(i, `
${n.normalizeIndentation(r.indentation + r.appendText)}`, t);
      }
      if (r.indentAction === $R.Indent) {
        return rft(i, `
${n.normalizeIndentation(r.indentation + r.appendText)}`, t);
      }
      if (r.indentAction === $R.IndentOutdent) {
        const a = n.normalizeIndentation(r.indentation);
        const l = n.normalizeIndentation(r.indentation + r.appendText);
        const u = `
${l}
${a}`;
        if (t) {
          return new d4n(i, u, true);
        } else {
          return new h4n(i, u, -1, l.length - a.length, true);
        }
      } else if (r.indentAction === $R.Outdent) {
        const a = x4n(n, r.indentation);
        return rft(i, `
${n.normalizeIndentation(a + r.appendText)}`, t);
      }
    }
    const s = e.getLineContent(i.startLineNumber);
    const o = rE(s).substring(0, i.startColumn - 1);
    if (n.autoIndent >= 4) {
      const a = MrA(n.autoIndent, e, i, {
        unshiftIndent: l => x4n(n, l),
        shiftIndent: l => g4o(n, l),
        normalizeIndentation: l => n.normalizeIndentation(l)
      }, n.languageConfigurationService);
      if (a) {
        let l = n.visibleColumnFromColumn(e, i.getEndPosition());
        const u = i.endColumn;
        const d = e.getLineContent(i.endLineNumber);
        const m = TH(d);
        if (m >= 0) {
          i = i.setEndPosition(i.endLineNumber, Math.max(i.endColumn, m + 1));
        } else {
          i = i.setEndPosition(i.endLineNumber, e.getLineMaxColumn(i.endLineNumber));
        }
        if (t) {
          return new d4n(i, `
${n.normalizeIndentation(a.afterEnter)}`, true);
        }
        {
          let p = 0;
          if (u <= m + 1) {
            if (!n.insertSpaces) {
              l = Math.ceil(l / n.indentSize);
            }
            p = Math.min(l + 1 - n.normalizeIndentation(a.afterEnter).length - 1, 0);
          }
          return new h4n(i, `
${n.normalizeIndentation(a.afterEnter)}`, 0, p, true);
        }
      }
    }
    return rft(i, `
${n.normalizeIndentation(o)}`, t);
  }
  static lineInsertBefore(n, e, t) {
    if (e === null || t === null) {
      return [];
    }
    const i = [];
    for (let r = 0, s = t.length; r < s; r++) {
      let o = t[r].positionLineNumber;
      if (o === 1) {
        i[r] = new d4n(new Zt(1, 1, 1, 1), `
`);
      } else {
        o--;
        const a = e.getLineMaxColumn(o);
        i[r] = this._enter(n, e, false, new Zt(o, a, o, a));
      }
    }
    return i;
  }
  static lineInsertAfter(n, e, t) {
    if (e === null || t === null) {
      return [];
    }
    const i = [];
    for (let r = 0, s = t.length; r < s; r++) {
      const o = t[r].positionLineNumber;
      const a = e.getLineMaxColumn(o);
      i[r] = this._enter(n, e, false, new Zt(o, a, o, a));
    }
    return i;
  }
  static lineBreakInsert(n, e, t) {
    const i = [];
    for (let r = 0, s = t.length; r < s; r++) {
      i[r] = this._enter(n, e, true, t[r]);
    }
    return i;
  }
};
$lh = class {
  static getEdits(n, e, t, i, r, s) {
    const o = this._distributePasteToCursors(n, t, i, r, s);
    if (o) {
      t = t.sort(Zt.compareRangesUsingStarts);
      return this._distributedPaste(n, e, t, o);
    } else {
      return this._simplePaste(n, e, t, i, r);
    }
  }
  static _distributePasteToCursors(n, e, t, i, r) {
    if (i || e.length === 1) {
      return null;
    }
    if (r && r.length === e.length) {
      return r;
    }
    if (n.multiCursorPaste === "spread") {
      if (t.charCodeAt(t.length - 1) === 10) {
        t = t.substring(0, t.length - 1);
      }
      if (t.charCodeAt(t.length - 1) === 13) {
        t = t.substring(0, t.length - 1);
      }
      const s = Zv(t);
      if (s.length === e.length) {
        return s;
      }
    }
    return null;
  }
  static _distributedPaste(n, e, t, i) {
    const r = [];
    for (let s = 0, o = t.length; s < o; s++) {
      const l = n.overtypeOnPaste && n.inputMode === "overtype" ? qFo : D6;
      r[s] = new l(t[s], i[s]);
    }
    return new mW(0, r, {
      shouldPushStackElementBefore: true,
      shouldPushStackElementAfter: true
    });
  }
  static _simplePaste(n, e, t, i, r) {
    const s = [];
    for (let o = 0, a = t.length; o < a; o++) {
      const l = t[o];
      const u = l.getPosition();
      if (r && !l.isEmpty()) {
        r = false;
      }
      if (r && i.indexOf(`
`) !== i.length - 1) {
        r = false;
      }
      if (r) {
        const d = new Zt(u.lineNumber, 1, u.lineNumber, 1);
        s[o] = new HFo(d, i, l, true);
      } else {
        const m = n.overtypeOnPaste && n.inputMode === "overtype" ? qFo : D6;
        s[o] = new m(l, i);
      }
    }
    return new mW(0, s, {
      shouldPushStackElementBefore: true,
      shouldPushStackElementAfter: true
    });
  }
};
qlh = class {
  static getEdits(n, e, t, i, r, s, o, a) {
    const l = i.map(u => this._compositionType(t, u, r, s, o, a));
    return new mW(4, l, {
      shouldPushStackElementBefore: p4o(n, 4),
      shouldPushStackElementAfter: false
    });
  }
  static _compositionType(n, e, t, i, r, s) {
    if (!e.isEmpty()) {
      return null;
    }
    const o = e.getPosition();
    const a = Math.max(1, o.column - i);
    const l = Math.min(n.getLineMaxColumn(o.lineNumber), o.column + r);
    const u = new Zt(o.lineNumber, a, o.lineNumber, l);
    return new h4n(u, t, 0, s);
  }
};
Hlh = class {
  static getEdits(n, e, t) {
    const i = [];
    for (let s = 0, o = e.length; s < o; s++) {
      i[s] = new D6(e[s], t);
    }
    const r = a1c(t, n);
    return new mW(r, i, {
      shouldPushStackElementBefore: p4o(n, r),
      shouldPushStackElementAfter: false
    });
  }
};
Jlh = class {
  static getCommands(n, e, t) {
    const i = [];
    for (let r = 0, s = t.length; r < s; r++) {
      const o = t[r];
      if (o.isEmpty()) {
        const a = e.getLineContent(o.startLineNumber);
        if (/^\s*$/.test(a) && e.tokenization.isCheapToTokenize(o.startLineNumber)) {
          let l = this._goodIndentForLine(n, e, o.startLineNumber);
          l = l || "\t";
          const u = n.normalizeIndentation(l);
          if (!a.startsWith(u)) {
            i[r] = new D6(new Zt(o.startLineNumber, 1, o.startLineNumber, a.length + 1), u, true);
            continue;
          }
        }
        i[r] = this._replaceJumpToNextIndent(n, e, o, true);
      } else {
        if (o.startLineNumber === o.endLineNumber) {
          const a = e.getLineMaxColumn(o.startLineNumber);
          if (o.startColumn !== 1 || o.endColumn !== a) {
            i[r] = this._replaceJumpToNextIndent(n, e, o, false);
            continue;
          }
        }
        i[r] = new xoe(o, {
          isUnshift: false,
          tabSize: n.tabSize,
          indentSize: n.indentSize,
          insertSpaces: n.insertSpaces,
          useTabStops: n.useTabStops,
          autoIndent: n.autoIndent
        }, n.languageConfigurationService);
      }
    }
    return i;
  }
  static _goodIndentForLine(n, e, t) {
    let i = null;
    let r = "";
    const s = k4n(n.autoIndent, e, t, false, n.languageConfigurationService);
    if (s) {
      i = s.action;
      r = s.indentation;
    } else if (t > 1) {
      let o;
      for (o = t - 1; o >= 1; o--) {
        const u = e.getLineContent(o);
        if (mde(u) >= 0) {
          break;
        }
      }
      if (o < 1) {
        return null;
      }
      const a = e.getLineMaxColumn(o);
      const l = j4t(n.autoIndent, e, new Zt(o, a, o, a), n.languageConfigurationService);
      if (l) {
        r = l.indentation + l.appendText;
      }
    }
    if (i) {
      if (i === $R.Indent) {
        r = g4o(n, r);
      }
      if (i === $R.Outdent) {
        r = x4n(n, r);
      }
      r = n.normalizeIndentation(r);
    }
    return r || null;
  }
  static _replaceJumpToNextIndent(n, e, t, i) {
    let r = "";
    const s = t.getStartPosition();
    if (n.insertSpaces) {
      const o = n.visibleColumnFromColumn(e, s);
      const a = n.indentSize;
      const l = a - o % a;
      for (let u = 0; u < l; u++) {
        r += " ";
      }
    } else {
      r = "\t";
    }
    return new D6(t, r, i);
  }
};
b4o = class extends h4n {
  constructor(n, e, t, i, r, s) {
    super(n, e, t, i);
    this._openCharacter = r;
    this._closeCharacter = s;
    this.closeCharacterRange = null;
    this.enclosingRange = null;
  }
  _computeCursorStateWithRange(n, e, t) {
    this.closeCharacterRange = new Zt(e.startLineNumber, e.endColumn - this._closeCharacter.length, e.endLineNumber, e.endColumn);
    this.enclosingRange = new Zt(e.startLineNumber, e.endColumn - this._openCharacter.length - this._closeCharacter.length, e.endLineNumber, e.endColumn);
    return super.computeCursorState(n, t);
  }
};
Glh = class extends b4o {
  constructor(n, e, t, i) {
    const r = (t ? e : "") + i;
    const s = 0;
    const o = -i.length;
    super(n, r, s, o, e, i);
  }
  computeCursorState(n, e) {
    const i = e.getInverseEditOperations()[0].range;
    return this._computeCursorStateWithRange(n, i, e);
  }
};
Wlh = class extends b4o {
  constructor(n, e, t, i) {
    const r = t + i;
    const s = 0;
    const o = t.length;
    super(e, r, s, o, t, i);
    this._autoIndentationEdit = n;
    this._autoClosingEdit = {
      range: e,
      text: r
    };
  }
  getEditOperations(n, e) {
    e.addTrackedEditOperation(this._autoIndentationEdit.range, this._autoIndentationEdit.text);
    e.addTrackedEditOperation(this._autoClosingEdit.range, this._autoClosingEdit.text);
  }
  computeCursorState(n, e) {
    const t = e.getInverseEditOperations();
    if (t.length !== 2) {
      throw new Error("There should be two inverse edit operations!");
    }
    const i = t[0].range;
    const r = t[1].range;
    const s = i.plusRange(r);
    return this._computeCursorStateWithRange(n, s, e);
  }
};
