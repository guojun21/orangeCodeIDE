"use strict";

// Module: out-build/vs/editor/contrib/find/browser/findDecorations.js
// Offset: 25135002 (bundle byte offset)
// Size: 6263 bytes
ts();
xw();
bv();
Nl();
Io();
edn = class BTe {
  constructor(e) {
    this._editor = e;
    this._decorations = [];
    this._overviewRulerApproximateDecorations = [];
    this._findScopeDecorationIds = [];
    this._rangeHighlightDecorationId = null;
    this._highlightedDecorationId = null;
    this._startPosition = this._editor.getPosition();
  }
  dispose() {
    this._editor.removeDecorations(this._allDecorations());
    this._decorations = [];
    this._overviewRulerApproximateDecorations = [];
    this._findScopeDecorationIds = [];
    this._rangeHighlightDecorationId = null;
    this._highlightedDecorationId = null;
  }
  reset() {
    this._decorations = [];
    this._overviewRulerApproximateDecorations = [];
    this._findScopeDecorationIds = [];
    this._rangeHighlightDecorationId = null;
    this._highlightedDecorationId = null;
  }
  getCount() {
    return this._decorations.length;
  }
  getFindScope() {
    if (this._findScopeDecorationIds[0]) {
      return this._editor.getModel().getDecorationRange(this._findScopeDecorationIds[0]);
    } else {
      return null;
    }
  }
  getFindScopes() {
    if (this._findScopeDecorationIds.length) {
      const e = this._findScopeDecorationIds.map(t => this._editor.getModel().getDecorationRange(t)).filter(t => !!t);
      if (e.length) {
        return e;
      }
    }
    return null;
  }
  getStartPosition() {
    return this._startPosition;
  }
  setStartPosition(e) {
    this._startPosition = e;
    this.setCurrentFindMatch(null);
  }
  _getDecorationIndex(e) {
    const t = this._decorations.indexOf(e);
    if (t >= 0) {
      return t + 1;
    } else {
      return 1;
    }
  }
  getDecorationRangeAt(e) {
    const t = e < this._decorations.length ? this._decorations[e] : null;
    if (t) {
      return this._editor.getModel().getDecorationRange(t);
    } else {
      return null;
    }
  }
  getCurrentMatchesPosition(e) {
    const t = this._editor.getModel().getDecorationsInRange(e);
    for (const i of t) {
      const r = i.options;
      if (r === BTe._FIND_MATCH_DECORATION || r === BTe._CURRENT_FIND_MATCH_DECORATION) {
        return this._getDecorationIndex(i.id);
      }
    }
    return 0;
  }
  setCurrentFindMatch(e) {
    let t = null;
    let i = 0;
    if (e) {
      for (let r = 0, s = this._decorations.length; r < s; r++) {
        const o = this._editor.getModel().getDecorationRange(this._decorations[r]);
        if (e.equalsRange(o)) {
          t = this._decorations[r];
          i = r + 1;
          break;
        }
      }
    }
    if (this._highlightedDecorationId !== null || t !== null) {
      this._editor.changeDecorations(r => {
        if (this._highlightedDecorationId !== null) {
          r.changeDecorationOptions(this._highlightedDecorationId, BTe._FIND_MATCH_DECORATION);
          this._highlightedDecorationId = null;
        }
        if (t !== null) {
          this._highlightedDecorationId = t;
          r.changeDecorationOptions(this._highlightedDecorationId, BTe._CURRENT_FIND_MATCH_DECORATION);
        }
        if (this._rangeHighlightDecorationId !== null) {
          r.removeDecoration(this._rangeHighlightDecorationId);
          this._rangeHighlightDecorationId = null;
        }
        if (t !== null) {
          let s = this._editor.getModel().getDecorationRange(t);
          if (s.startLineNumber !== s.endLineNumber && s.endColumn === 1) {
            const o = s.endLineNumber - 1;
            const a = this._editor.getModel().getLineMaxColumn(o);
            s = new Zt(s.startLineNumber, s.startColumn, o, a);
          }
          this._rangeHighlightDecorationId = r.addDecoration(s, BTe._RANGE_HIGHLIGHT_DECORATION);
        }
      });
    }
    return i;
  }
  set(e, t) {
    this._editor.changeDecorations(i => {
      let r = BTe._FIND_MATCH_DECORATION;
      const s = [];
      if (e.length > 1000) {
        r = BTe._FIND_MATCH_NO_OVERVIEW_DECORATION;
        const a = this._editor.getModel().getLineCount();
        const u = this._editor.getLayoutInfo().height / a;
        const d = Math.max(2, Math.ceil(3 / u));
        let m = e[0].range.startLineNumber;
        let p = e[0].range.endLineNumber;
        for (let g = 1, f = e.length; g < f; g++) {
          const A = e[g].range;
          if (p + d >= A.startLineNumber) {
            if (A.endLineNumber > p) {
              p = A.endLineNumber;
            }
          } else {
            s.push({
              range: new Zt(m, 1, p, 1),
              options: BTe._FIND_MATCH_ONLY_OVERVIEW_DECORATION
            });
            m = A.startLineNumber;
            p = A.endLineNumber;
          }
        }
        s.push({
          range: new Zt(m, 1, p, 1),
          options: BTe._FIND_MATCH_ONLY_OVERVIEW_DECORATION
        });
      }
      const o = new Array(e.length);
      for (let a = 0, l = e.length; a < l; a++) {
        o[a] = {
          range: e[a].range,
          options: r
        };
      }
      this._decorations = i.deltaDecorations(this._decorations, o);
      this._overviewRulerApproximateDecorations = i.deltaDecorations(this._overviewRulerApproximateDecorations, s);
      if (this._rangeHighlightDecorationId) {
        i.removeDecoration(this._rangeHighlightDecorationId);
        this._rangeHighlightDecorationId = null;
      }
      if (this._findScopeDecorationIds.length) {
        this._findScopeDecorationIds.forEach(a => i.removeDecoration(a));
        this._findScopeDecorationIds = [];
      }
      if (t?.length) {
        this._findScopeDecorationIds = t.map(a => i.addDecoration(a, BTe._FIND_SCOPE_DECORATION));
      }
    });
  }
  matchBeforePosition(e) {
    if (this._decorations.length === 0) {
      return null;
    }
    for (let t = this._decorations.length - 1; t >= 0; t--) {
      const i = this._decorations[t];
      const r = this._editor.getModel().getDecorationRange(i);
      if (!!r && !(r.endLineNumber > e.lineNumber)) {
        if (r.endLineNumber < e.lineNumber) {
          return r;
        }
        if (!(r.endColumn > e.column)) {
          return r;
        }
      }
    }
    return this._editor.getModel().getDecorationRange(this._decorations[this._decorations.length - 1]);
  }
  matchAfterPosition(e) {
    if (this._decorations.length === 0) {
      return null;
    }
    for (let t = 0, i = this._decorations.length; t < i; t++) {
      const r = this._decorations[t];
      const s = this._editor.getModel().getDecorationRange(r);
      if (!!s && !(s.startLineNumber < e.lineNumber)) {
        if (s.startLineNumber > e.lineNumber) {
          return s;
        }
        if (!(s.startColumn < e.column)) {
          return s;
        }
      }
    }
    return this._editor.getModel().getDecorationRange(this._decorations[0]);
  }
  _allDecorations() {
    let e = [];
    e = e.concat(this._decorations);
    e = e.concat(this._overviewRulerApproximateDecorations);
    if (this._findScopeDecorationIds.length) {
      e.push(...this._findScopeDecorationIds);
    }
    if (this._rangeHighlightDecorationId) {
      e.push(this._rangeHighlightDecorationId);
    }
    return e;
  }
  static {
    this._CURRENT_FIND_MATCH_DECORATION = Zh.register({
      description: "current-find-match",
      stickiness: 1,
      zIndex: 13,
      className: "currentFindMatch",
      inlineClassName: "currentFindMatchInline",
      showIfCollapsed: true,
      overviewRuler: {
        color: kC(W5e),
        position: Tx.Center
      },
      minimap: {
        color: kC(rOt),
        position: 1
      }
    });
  }
  static {
    this._FIND_MATCH_DECORATION = Zh.register({
      description: "find-match",
      stickiness: 1,
      zIndex: 10,
      className: "findMatch",
      inlineClassName: "findMatchInline",
      showIfCollapsed: true,
      overviewRuler: {
        color: kC(W5e),
        position: Tx.Center
      },
      minimap: {
        color: kC(rOt),
        position: 1
      }
    });
  }
  static {
    this._FIND_MATCH_NO_OVERVIEW_DECORATION = Zh.register({
      description: "find-match-no-overview",
      stickiness: 1,
      className: "findMatch",
      showIfCollapsed: true
    });
  }
  static {
    this._FIND_MATCH_ONLY_OVERVIEW_DECORATION = Zh.register({
      description: "find-match-only-overview",
      stickiness: 1,
      overviewRuler: {
        color: kC(W5e),
        position: Tx.Center
      }
    });
  }
  static {
    this._RANGE_HIGHLIGHT_DECORATION = Zh.register({
      description: "find-range-highlight",
      stickiness: 1,
      className: "rangeHighlight",
      isWholeLine: true
    });
  }
  static {
    this._FIND_SCOPE_DECORATION = Zh.register({
      description: "find-scope",
      className: "findScope",
      isWholeLine: true
    });
  }
};
