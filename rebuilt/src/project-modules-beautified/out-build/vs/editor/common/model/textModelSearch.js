"use strict";

// Module: out-build/vs/editor/common/model/textModelSearch.js
// Offset: 1144186 (bundle byte offset)
// Size: 6481 bytes
oa();
g4n();
tl();
ts();
xw();
lgh = 999;
Nde = class {
  constructor(n, e, t, i) {
    this.searchString = n;
    this.isRegex = e;
    this.matchCase = t;
    this.wordSeparators = i;
  }
  parseSearchRequest() {
    if (this.searchString === "") {
      return null;
    }
    let n;
    if (this.isRegex) {
      n = YEc(this.searchString);
    } else {
      n = this.searchString.indexOf(`
`) >= 0;
    }
    let e = null;
    try {
      e = iFn(this.searchString, this.isRegex, {
        matchCase: this.matchCase,
        wholeWord: false,
        multiline: n,
        global: true,
        unicode: true
      });
    } catch {
      return null;
    }
    if (!e) {
      return null;
    }
    let t = !this.isRegex && !n;
    if (t && this.searchString.toLowerCase() !== this.searchString.toUpperCase()) {
      t = this.matchCase;
    }
    return new cph(e, this.wordSeparators ? kde(this.wordSeparators, []) : null, t ? this.searchString : null);
  }
};
XEc = class {
  constructor(n) {
    const e = [];
    let t = 0;
    for (let i = 0, r = n.length; i < r; i++) {
      if (n.charCodeAt(i) === 10) {
        e[t++] = i;
      }
    }
    this._lineFeedsOffsets = e;
  }
  findLineFeedCountBeforeOffset(n) {
    const e = this._lineFeedsOffsets;
    let t = 0;
    let i = e.length - 1;
    if (i === -1 || n <= e[0]) {
      return 0;
    }
    while (t < i) {
      const r = t + ((i - t) / 2 >> 0);
      if (e[r] >= n) {
        i = r - 1;
      } else if (e[r + 1] >= n) {
        t = r;
        i = r;
      } else {
        t = r + 1;
      }
    }
    return t + 1;
  }
};
bOn = class {
  static findMatches(n, e, t, i, r) {
    const s = e.parseSearchRequest();
    if (s) {
      if (s.regex.multiline) {
        return this._doFindMatchesMultiline(n, t, new kft(s.wordSeparators, s.regex), i, r);
      } else {
        return this._doFindMatchesLineByLine(n, t, s, i, r);
      }
    } else {
      return [];
    }
  }
  static _getMultilineMatchRange(n, e, t, i, r, s) {
    let o;
    let a = 0;
    if (i) {
      a = i.findLineFeedCountBeforeOffset(r);
      o = e + r + a;
    } else {
      o = e + r;
    }
    let l;
    if (i) {
      const p = i.findLineFeedCountBeforeOffset(r + s.length) - a;
      l = o + s.length + p;
    } else {
      l = o + s.length;
    }
    const u = n.getPositionAt(o);
    const d = n.getPositionAt(l);
    return new Zt(u.lineNumber, u.column, d.lineNumber, d.column);
  }
  static _doFindMatchesMultiline(n, e, t, i, r) {
    const s = n.getOffsetAt(e.getStartPosition());
    const o = n.getValueInRange(e, 1);
    const a = n.getEOL() === `\r
` ? new XEc(o) : null;
    const l = [];
    let u = 0;
    let d;
    for (t.reset(0); d = t.next(o);) {
      l[u++] = Sft(this._getMultilineMatchRange(n, s, o, a, d.index, d[0]), d, i);
      if (u >= r) {
        return l;
      }
    }
    return l;
  }
  static _doFindMatchesLineByLine(n, e, t, i, r) {
    const s = [];
    let o = 0;
    if (e.startLineNumber === e.endLineNumber) {
      const l = n.getLineContent(e.startLineNumber).substring(e.startColumn - 1, e.endColumn - 1);
      o = this._findMatchesInLine(t, l, e.startLineNumber, e.startColumn - 1, o, s, i, r);
      return s;
    }
    const a = n.getLineContent(e.startLineNumber).substring(e.startColumn - 1);
    o = this._findMatchesInLine(t, a, e.startLineNumber, e.startColumn - 1, o, s, i, r);
    for (let l = e.startLineNumber + 1; l < e.endLineNumber && o < r; l++) {
      o = this._findMatchesInLine(t, n.getLineContent(l), l, 0, o, s, i, r);
    }
    if (o < r) {
      const l = n.getLineContent(e.endLineNumber).substring(0, e.endColumn - 1);
      o = this._findMatchesInLine(t, l, e.endLineNumber, 0, o, s, i, r);
    }
    return s;
  }
  static _findMatchesInLine(n, e, t, i, r, s, o, a) {
    const l = n.wordSeparators;
    if (!o && n.simpleSearch) {
      const m = n.simpleSearch;
      const p = m.length;
      const g = e.length;
      let f = -p;
      while ((f = e.indexOf(m, f + p)) !== -1) {
        if ((!l || ZEc(l, e, g, f, p)) && (s[r++] = new SOt(new Zt(t, f + 1 + i, t, f + 1 + p + i), null), r >= a)) {
          return r;
        }
      }
      return r;
    }
    const u = new kft(n.wordSeparators, n.regex);
    let d;
    u.reset(0);
    do {
      d = u.next(e);
      if (d && (s[r++] = Sft(new Zt(t, d.index + 1 + i, t, d.index + 1 + d[0].length + i), d, o), r >= a)) {
        return r;
      }
    } while (d);
    return r;
  }
  static findNextMatch(n, e, t, i) {
    const r = e.parseSearchRequest();
    if (!r) {
      return null;
    }
    const s = new kft(r.wordSeparators, r.regex);
    if (r.regex.multiline) {
      return this._doFindNextMatchMultiline(n, t, s, i);
    } else {
      return this._doFindNextMatchLineByLine(n, t, s, i);
    }
  }
  static _doFindNextMatchMultiline(n, e, t, i) {
    const r = new ar(e.lineNumber, 1);
    const s = n.getOffsetAt(r);
    const o = n.getLineCount();
    const a = n.getValueInRange(new Zt(r.lineNumber, r.column, o, n.getLineMaxColumn(o)), 1);
    const l = n.getEOL() === `\r
` ? new XEc(a) : null;
    t.reset(e.column - 1);
    const u = t.next(a);
    if (u) {
      return Sft(this._getMultilineMatchRange(n, s, a, l, u.index, u[0]), u, i);
    } else if (e.lineNumber !== 1 || e.column !== 1) {
      return this._doFindNextMatchMultiline(n, new ar(1, 1), t, i);
    } else {
      return null;
    }
  }
  static _doFindNextMatchLineByLine(n, e, t, i) {
    const r = n.getLineCount();
    const s = e.lineNumber;
    const o = n.getLineContent(s);
    const a = this._findFirstMatchInLine(t, o, s, e.column, i);
    if (a) {
      return a;
    }
    for (let l = 1; l <= r; l++) {
      const u = (s + l - 1) % r;
      const d = n.getLineContent(u + 1);
      const m = this._findFirstMatchInLine(t, d, u + 1, 1, i);
      if (m) {
        return m;
      }
    }
    return null;
  }
  static _findFirstMatchInLine(n, e, t, i, r) {
    n.reset(i - 1);
    const s = n.next(e);
    if (s) {
      return Sft(new Zt(t, s.index + 1, t, s.index + 1 + s[0].length), s, r);
    } else {
      return null;
    }
  }
  static findPreviousMatch(n, e, t, i) {
    const r = e.parseSearchRequest();
    if (!r) {
      return null;
    }
    const s = new kft(r.wordSeparators, r.regex);
    if (r.regex.multiline) {
      return this._doFindPreviousMatchMultiline(n, t, s, i);
    } else {
      return this._doFindPreviousMatchLineByLine(n, t, s, i);
    }
  }
  static _doFindPreviousMatchMultiline(n, e, t, i) {
    const r = this._doFindMatchesMultiline(n, new Zt(1, 1, e.lineNumber, e.column), t, i, lgh * 10);
    if (r.length > 0) {
      return r[r.length - 1];
    }
    const s = n.getLineCount();
    if (e.lineNumber !== s || e.column !== n.getLineMaxColumn(s)) {
      return this._doFindPreviousMatchMultiline(n, new ar(s, n.getLineMaxColumn(s)), t, i);
    } else {
      return null;
    }
  }
  static _doFindPreviousMatchLineByLine(n, e, t, i) {
    const r = n.getLineCount();
    const s = e.lineNumber;
    const o = n.getLineContent(s).substring(0, e.column - 1);
    const a = this._findLastMatchInLine(t, o, s, i);
    if (a) {
      return a;
    }
    for (let l = 1; l <= r; l++) {
      const u = (r + s - l - 1) % r;
      const d = n.getLineContent(u + 1);
      const m = this._findLastMatchInLine(t, d, u + 1, i);
      if (m) {
        return m;
      }
    }
    return null;
  }
  static _findLastMatchInLine(n, e, t, i) {
    let r = null;
    let s;
    for (n.reset(0); s = n.next(e);) {
      r = Sft(new Zt(t, s.index + 1, t, s.index + 1 + s[0].length), s, i);
    }
    return r;
  }
};
kft = class {
  constructor(n, e) {
    this._wordSeparators = n;
    this._searchRegex = e;
    this._prevMatchStartIndex = -1;
    this._prevMatchLength = 0;
  }
  reset(n) {
    this._searchRegex.lastIndex = n;
    this._prevMatchStartIndex = -1;
    this._prevMatchLength = 0;
  }
  next(n) {
    const e = n.length;
    let t;
    do {
      if (this._prevMatchStartIndex + this._prevMatchLength === e || (t = this._searchRegex.exec(n), !t)) {
        return null;
      }
      const i = t.index;
      const r = t[0].length;
      if (i === this._prevMatchStartIndex && r === this._prevMatchLength) {
        if (r === 0) {
          if (u2o(n, e, this._searchRegex.lastIndex) > 65535) {
            this._searchRegex.lastIndex += 2;
          } else {
            this._searchRegex.lastIndex += 1;
          }
          continue;
        }
        return null;
      }
      this._prevMatchStartIndex = i;
      this._prevMatchLength = r;
      if (!this._wordSeparators || ZEc(this._wordSeparators, n, e, i, r)) {
        return t;
      }
    } while (t);
    return null;
  }
};
