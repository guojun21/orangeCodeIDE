"use strict";

// Module: out-build/vs/editor/common/cursor/cursorWordOperations.js
// Offset: 711189 (bundle byte offset)
// Size: 10722 bytes
oa();
Eoe();
WFo();
g4n();
tl();
ts();
(function (n) {
  n[n.None = 0] = "None";
  n[n.Regular = 1] = "Regular";
  n[n.Separator = 2] = "Separator";
})(xch ||= {});
(function (n) {
  n[n.WordStart = 0] = "WordStart";
  n[n.WordStartFast = 1] = "WordStartFast";
  n[n.WordEnd = 2] = "WordEnd";
  n[n.WordAccessibility = 3] = "WordAccessibility";
})(Tch ||= {});
B6 = class s4 {
  static _createWord(e, t, i, r, s) {
    return {
      start: r,
      end: s,
      wordType: t,
      nextCharClass: i
    };
  }
  static _createIntlWord(e, t) {
    return {
      start: e.index,
      end: e.index + e.segment.length,
      wordType: 1,
      nextCharClass: t
    };
  }
  static _findPreviousWordOnLine(e, t, i) {
    const r = t.getLineContent(i.lineNumber);
    return this._doFindPreviousWordOnLine(r, e, i);
  }
  static _doFindPreviousWordOnLine(e, t, i) {
    let r = 0;
    const s = t.findPrevIntlWordBeforeOrAtOffset(e, i.column - 2);
    for (let o = i.column - 2; o >= 0; o--) {
      const a = e.charCodeAt(o);
      const l = t.get(a);
      if (s && o === s.index) {
        return this._createIntlWord(s, l);
      }
      if (l === 0) {
        if (r === 2) {
          return this._createWord(e, r, l, o + 1, this._findEndOfWord(e, t, r, o + 1));
        }
        r = 1;
      } else if (l === 2) {
        if (r === 1) {
          return this._createWord(e, r, l, o + 1, this._findEndOfWord(e, t, r, o + 1));
        }
        r = 2;
      } else if (l === 1 && r !== 0) {
        return this._createWord(e, r, l, o + 1, this._findEndOfWord(e, t, r, o + 1));
      }
    }
    if (r !== 0) {
      return this._createWord(e, r, 1, 0, this._findEndOfWord(e, t, r, 0));
    } else {
      return null;
    }
  }
  static _findEndOfWord(e, t, i, r) {
    const s = t.findNextIntlWordAtOrAfterOffset(e, r);
    const o = e.length;
    for (let a = r; a < o; a++) {
      const l = e.charCodeAt(a);
      const u = t.get(l);
      if (s && a === s.index + s.segment.length || u === 1 || i === 1 && u === 2 || i === 2 && u === 0) {
        return a;
      }
    }
    return o;
  }
  static _findNextWordOnLine(e, t, i) {
    const r = t.getLineContent(i.lineNumber);
    return this._doFindNextWordOnLine(r, e, i);
  }
  static _doFindNextWordOnLine(e, t, i) {
    let r = 0;
    const s = e.length;
    const o = t.findNextIntlWordAtOrAfterOffset(e, i.column - 1);
    for (let a = i.column - 1; a < s; a++) {
      const l = e.charCodeAt(a);
      const u = t.get(l);
      if (o && a === o.index) {
        return this._createIntlWord(o, u);
      }
      if (u === 0) {
        if (r === 2) {
          return this._createWord(e, r, u, this._findStartOfWord(e, t, r, a - 1), a);
        }
        r = 1;
      } else if (u === 2) {
        if (r === 1) {
          return this._createWord(e, r, u, this._findStartOfWord(e, t, r, a - 1), a);
        }
        r = 2;
      } else if (u === 1 && r !== 0) {
        return this._createWord(e, r, u, this._findStartOfWord(e, t, r, a - 1), a);
      }
    }
    if (r !== 0) {
      return this._createWord(e, r, 1, this._findStartOfWord(e, t, r, s - 1), s);
    } else {
      return null;
    }
  }
  static _findStartOfWord(e, t, i, r) {
    const s = t.findPrevIntlWordBeforeOrAtOffset(e, r);
    for (let o = r; o >= 0; o--) {
      const a = e.charCodeAt(o);
      const l = t.get(a);
      if (s && o === s.index) {
        return o;
      }
      if (l === 1 || i === 1 && l === 2 || i === 2 && l === 0) {
        return o + 1;
      }
    }
    return 0;
  }
  static moveWordLeft(e, t, i, r, s) {
    let o = i.lineNumber;
    let a = i.column;
    if (a === 1 && o > 1) {
      o = o - 1;
      a = t.getLineMaxColumn(o);
    }
    let l = s4._findPreviousWordOnLine(e, t, new ar(o, a));
    if (r === 0) {
      return new ar(o, l ? l.start + 1 : 1);
    }
    if (r === 1) {
      if (!s && l && l.wordType === 2 && l.end - l.start === 1 && l.nextCharClass === 0) {
        l = s4._findPreviousWordOnLine(e, t, new ar(o, l.start + 1));
      }
      return new ar(o, l ? l.start + 1 : 1);
    }
    if (r === 3) {
      while (l && l.wordType === 2) {
        l = s4._findPreviousWordOnLine(e, t, new ar(o, l.start + 1));
      }
      return new ar(o, l ? l.start + 1 : 1);
    }
    if (l && a <= l.end + 1) {
      l = s4._findPreviousWordOnLine(e, t, new ar(o, l.start + 1));
    }
    return new ar(o, l ? l.end + 1 : 1);
  }
  static _moveWordPartLeft(e, t) {
    const i = t.lineNumber;
    const r = e.getLineMaxColumn(i);
    if (t.column === 1) {
      if (i > 1) {
        return new ar(i - 1, e.getLineMaxColumn(i - 1));
      } else {
        return t;
      }
    }
    const s = e.getLineContent(i);
    for (let o = t.column - 1; o > 1; o--) {
      const a = s.charCodeAt(o - 2);
      const l = s.charCodeAt(o - 1);
      if (a === 95 && l !== 95) {
        return new ar(i, o);
      }
      if (a === 45 && l !== 45) {
        return new ar(i, o);
      }
      if ((Eze(a) || l2o(a)) && Ibe(l)) {
        return new ar(i, o);
      }
      if (Ibe(a) && Ibe(l) && o + 1 < r) {
        const u = s.charCodeAt(o);
        if (Eze(u) || l2o(u)) {
          return new ar(i, o);
        }
      }
    }
    return new ar(i, 1);
  }
  static moveWordRight(e, t, i, r) {
    let s = i.lineNumber;
    let o = i.column;
    let a = false;
    if (o === t.getLineMaxColumn(s) && s < t.getLineCount()) {
      a = true;
      s = s + 1;
      o = 1;
    }
    let l = s4._findNextWordOnLine(e, t, new ar(s, o));
    if (r === 2) {
      if (l && l.wordType === 2 && l.end - l.start === 1 && l.nextCharClass === 0) {
        l = s4._findNextWordOnLine(e, t, new ar(s, l.end + 1));
      }
      if (l) {
        o = l.end + 1;
      } else {
        o = t.getLineMaxColumn(s);
      }
    } else if (r === 3) {
      for (a && (o = 0); l && (l.wordType === 2 || l.start + 1 <= o);) {
        l = s4._findNextWordOnLine(e, t, new ar(s, l.end + 1));
      }
      if (l) {
        o = l.start + 1;
      } else {
        o = t.getLineMaxColumn(s);
      }
    } else {
      if (l && !a && o >= l.start + 1) {
        l = s4._findNextWordOnLine(e, t, new ar(s, l.end + 1));
      }
      if (l) {
        o = l.start + 1;
      } else {
        o = t.getLineMaxColumn(s);
      }
    }
    return new ar(s, o);
  }
  static _moveWordPartRight(e, t) {
    const i = t.lineNumber;
    const r = e.getLineMaxColumn(i);
    if (t.column === r) {
      if (i < e.getLineCount()) {
        return new ar(i + 1, 1);
      } else {
        return t;
      }
    }
    const s = e.getLineContent(i);
    for (let o = t.column + 1; o < r; o++) {
      const a = s.charCodeAt(o - 2);
      const l = s.charCodeAt(o - 1);
      if (a !== 95 && l === 95) {
        return new ar(i, o);
      }
      if (a !== 45 && l === 45) {
        return new ar(i, o);
      }
      if ((Eze(a) || l2o(a)) && Ibe(l)) {
        return new ar(i, o);
      }
      if (Ibe(a) && Ibe(l) && o + 1 < r) {
        const u = s.charCodeAt(o);
        if (Eze(u) || l2o(u)) {
          return new ar(i, o);
        }
      }
    }
    return new ar(i, r);
  }
  static _deleteWordLeftWhitespace(e, t) {
    const i = e.getLineContent(t.lineNumber);
    const r = t.column - 2;
    const s = mde(i, r);
    if (s + 1 < r) {
      return new Zt(t.lineNumber, s + 2, t.lineNumber, t.column);
    } else {
      return null;
    }
  }
  static deleteWordLeft(e, t) {
    const i = e.wordSeparators;
    const r = e.model;
    const s = e.selection;
    const o = e.whitespaceHeuristics;
    if (!s.isEmpty()) {
      return s;
    }
    if (Xgt.isAutoClosingPairDelete(e.autoClosingDelete, e.autoClosingBrackets, e.autoClosingQuotes, e.autoClosingPairs.autoClosingPairsOpenByEnd, e.model, [e.selection], e.autoClosedCharacters)) {
      const m = e.selection.getPosition();
      return new Zt(m.lineNumber, m.column - 1, m.lineNumber, m.column + 1);
    }
    const a = new ar(s.positionLineNumber, s.positionColumn);
    let l = a.lineNumber;
    let u = a.column;
    if (l === 1 && u === 1) {
      return null;
    }
    if (o) {
      const m = this._deleteWordLeftWhitespace(r, a);
      if (m) {
        return m;
      }
    }
    let d = s4._findPreviousWordOnLine(i, r, a);
    if (t === 0) {
      if (d) {
        u = d.start + 1;
      } else if (u > 1) {
        u = 1;
      } else {
        l--;
        u = r.getLineMaxColumn(l);
      }
    } else {
      if (d && u <= d.end + 1) {
        d = s4._findPreviousWordOnLine(i, r, new ar(l, d.start + 1));
      }
      if (d) {
        u = d.end + 1;
      } else if (u > 1) {
        u = 1;
      } else {
        l--;
        u = r.getLineMaxColumn(l);
      }
    }
    return new Zt(l, u, a.lineNumber, a.column);
  }
  static deleteInsideWord(e, t, i) {
    if (!i.isEmpty()) {
      return i;
    }
    const r = new ar(i.positionLineNumber, i.positionColumn);
    const s = this._deleteInsideWordWhitespace(t, r);
    return s || this._deleteInsideWordDetermineDeleteRange(e, t, r);
  }
  static _charAtIsWhitespace(e, t) {
    const i = e.charCodeAt(t);
    return i === 32 || i === 9;
  }
  static _deleteInsideWordWhitespace(e, t) {
    const i = e.getLineContent(t.lineNumber);
    const r = i.length;
    if (r === 0) {
      return null;
    }
    let s = Math.max(t.column - 2, 0);
    if (!this._charAtIsWhitespace(i, s)) {
      return null;
    }
    let o = Math.min(t.column - 1, r - 1);
    if (!this._charAtIsWhitespace(i, o)) {
      return null;
    }
    while (s > 0 && this._charAtIsWhitespace(i, s - 1)) {
      s--;
    }
    while (o + 1 < r && this._charAtIsWhitespace(i, o + 1)) {
      o++;
    }
    return new Zt(t.lineNumber, s + 1, t.lineNumber, o + 2);
  }
  static _deleteInsideWordDetermineDeleteRange(e, t, i) {
    const r = t.getLineContent(i.lineNumber);
    const s = r.length;
    if (s === 0) {
      if (i.lineNumber > 1) {
        return new Zt(i.lineNumber - 1, t.getLineMaxColumn(i.lineNumber - 1), i.lineNumber, 1);
      } else if (i.lineNumber < t.getLineCount()) {
        return new Zt(i.lineNumber, 1, i.lineNumber + 1, 1);
      } else {
        return new Zt(i.lineNumber, 1, i.lineNumber, 1);
      }
    }
    const o = m => m.start + 1 <= i.column && i.column <= m.end + 1;
    const a = (m, p) => {
      m = Math.min(m, i.column);
      p = Math.max(p, i.column);
      return new Zt(i.lineNumber, m, i.lineNumber, p);
    };
    const l = m => {
      let p = m.start + 1;
      let g = m.end + 1;
      let f = false;
      while (g - 1 < s && this._charAtIsWhitespace(r, g - 1)) {
        f = true;
        g++;
      }
      if (!f) {
        while (p > 1 && this._charAtIsWhitespace(r, p - 2)) {
          p--;
        }
      }
      return a(p, g);
    };
    const u = s4._findPreviousWordOnLine(e, t, i);
    if (u && o(u)) {
      return l(u);
    }
    const d = s4._findNextWordOnLine(e, t, i);
    if (d && o(d)) {
      return l(d);
    } else if (u && d) {
      return a(u.end + 1, d.start + 1);
    } else if (u) {
      return a(u.start + 1, u.end + 1);
    } else if (d) {
      return a(d.start + 1, d.end + 1);
    } else {
      return a(1, s + 1);
    }
  }
  static _deleteWordPartLeft(e, t) {
    if (!t.isEmpty()) {
      return t;
    }
    const i = t.getPosition();
    const r = s4._moveWordPartLeft(e, i);
    return new Zt(i.lineNumber, i.column, r.lineNumber, r.column);
  }
  static _findFirstNonWhitespaceChar(e, t) {
    const i = e.length;
    for (let r = t; r < i; r++) {
      const s = e.charAt(r);
      if (s !== " " && s !== "\t") {
        return r;
      }
    }
    return i;
  }
  static _deleteWordRightWhitespace(e, t) {
    const i = e.getLineContent(t.lineNumber);
    const r = t.column - 1;
    const s = this._findFirstNonWhitespaceChar(i, r);
    if (r + 1 < s) {
      return new Zt(t.lineNumber, t.column, t.lineNumber, s + 1);
    } else {
      return null;
    }
  }
  static deleteWordRight(e, t) {
    const i = e.wordSeparators;
    const r = e.model;
    const s = e.selection;
    const o = e.whitespaceHeuristics;
    if (!s.isEmpty()) {
      return s;
    }
    const a = new ar(s.positionLineNumber, s.positionColumn);
    let l = a.lineNumber;
    let u = a.column;
    const d = r.getLineCount();
    const m = r.getLineMaxColumn(l);
    if (l === d && u === m) {
      return null;
    }
    if (o) {
      const g = this._deleteWordRightWhitespace(r, a);
      if (g) {
        return g;
      }
    }
    let p = s4._findNextWordOnLine(i, r, a);
    if (t === 2) {
      if (p) {
        u = p.end + 1;
      } else if (u < m || l === d) {
        u = m;
      } else {
        l++;
        p = s4._findNextWordOnLine(i, r, new ar(l, 1));
        if (p) {
          u = p.start + 1;
        } else {
          u = r.getLineMaxColumn(l);
        }
      }
    } else {
      if (p && u >= p.start + 1) {
        p = s4._findNextWordOnLine(i, r, new ar(l, p.end + 1));
      }
      if (p) {
        u = p.start + 1;
      } else if (u < m || l === d) {
        u = m;
      } else {
        l++;
        p = s4._findNextWordOnLine(i, r, new ar(l, 1));
        if (p) {
          u = p.start + 1;
        } else {
          u = r.getLineMaxColumn(l);
        }
      }
    }
    return new Zt(l, u, a.lineNumber, a.column);
  }
  static _deleteWordPartRight(e, t) {
    if (!t.isEmpty()) {
      return t;
    }
    const i = t.getPosition();
    const r = s4._moveWordPartRight(e, i);
    return new Zt(i.lineNumber, i.column, r.lineNumber, r.column);
  }
  static _createWordAtPosition(e, t, i) {
    const r = new Zt(t, i.start + 1, t, i.end + 1);
    return {
      word: e.getValueInRange(r),
      startColumn: r.startColumn,
      endColumn: r.endColumn
    };
  }
  static getWordAtPosition(e, t, i, r) {
    const s = kde(t, i);
    const o = s4._findPreviousWordOnLine(s, e, r);
    if (o && o.wordType === 1 && o.start <= r.column - 1 && r.column - 1 <= o.end) {
      return s4._createWordAtPosition(e, r.lineNumber, o);
    }
    const a = s4._findNextWordOnLine(s, e, r);
    if (a && a.wordType === 1 && a.start <= r.column - 1 && r.column - 1 <= a.end) {
      return s4._createWordAtPosition(e, r.lineNumber, a);
    } else {
      return null;
    }
  }
  static word(e, t, i, r, s) {
    const o = kde(e.wordSeparators, e.wordSegmenterLocales);
    const a = s4._findPreviousWordOnLine(o, t, s);
    const l = s4._findNextWordOnLine(o, t, s);
    if (!r) {
      let g;
      let f;
      if (a && a.wordType === 1 && a.start <= s.column - 1 && s.column - 1 <= a.end) {
        g = a.start + 1;
        f = a.end + 1;
      } else if (l && l.wordType === 1 && l.start <= s.column - 1 && s.column - 1 <= l.end) {
        g = l.start + 1;
        f = l.end + 1;
      } else {
        if (a) {
          g = a.end + 1;
        } else {
          g = 1;
        }
        if (l) {
          f = l.start + 1;
        } else {
          f = t.getLineMaxColumn(s.lineNumber);
        }
      }
      return new hW(new Zt(s.lineNumber, g, s.lineNumber, f), 1, 0, new ar(s.lineNumber, f), 0);
    }
    let u;
    let d;
    if (a && a.wordType === 1 && a.start < s.column - 1 && s.column - 1 < a.end) {
      u = a.start + 1;
      d = a.end + 1;
    } else if (l && l.wordType === 1 && l.start < s.column - 1 && s.column - 1 < l.end) {
      u = l.start + 1;
      d = l.end + 1;
    } else {
      u = s.column;
      d = s.column;
    }
    const m = s.lineNumber;
    let p;
    if (i.selectionStart.containsPosition(s)) {
      p = i.selectionStart.endColumn;
    } else if (s.isBeforeOrEqual(i.selectionStart.getStartPosition())) {
      p = u;
      const g = new ar(m, p);
      if (i.selectionStart.containsPosition(g)) {
        p = i.selectionStart.endColumn;
      }
    } else {
      p = d;
      const g = new ar(m, p);
      if (i.selectionStart.containsPosition(g)) {
        p = i.selectionStart.startColumn;
      }
    }
    return i.move(true, m, p, 0);
  }
};
f4n = class extends B6 {
  static deleteWordPartLeft(n) {
    const e = zFo([B6.deleteWordLeft(n, 0), B6.deleteWordLeft(n, 2), B6._deleteWordPartLeft(n.model, n.selection)]);
    e.sort(Zt.compareRangesUsingEnds);
    return e[2];
  }
  static deleteWordPartRight(n) {
    const e = zFo([B6.deleteWordRight(n, 0), B6.deleteWordRight(n, 2), B6._deleteWordPartRight(n.model, n.selection)]);
    e.sort(Zt.compareRangesUsingStarts);
    return e[0];
  }
  static moveWordPartLeft(n, e, t, i) {
    const r = zFo([B6.moveWordLeft(n, e, t, 0, i), B6.moveWordLeft(n, e, t, 2, i), B6._moveWordPartLeft(e, t)]);
    r.sort(ar.compare);
    return r[2];
  }
  static moveWordPartRight(n, e, t) {
    const i = zFo([B6.moveWordRight(n, e, t, 0), B6.moveWordRight(n, e, t, 2), B6._moveWordPartRight(e, t)]);
    i.sort(ar.compare);
    return i[0];
  }
};
