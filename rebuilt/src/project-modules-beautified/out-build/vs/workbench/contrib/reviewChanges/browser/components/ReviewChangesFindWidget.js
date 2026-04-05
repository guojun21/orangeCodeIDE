"use strict";

// Module: out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js
// Offset: 34107652 (bundle byte offset)
// Size: 6090 bytes
Ie();
Ie();
Ti();
YUe();
hs();
si();
pl();
Id();
ka();
UEt();
es();
Hqf = qe("<div class=review-changes-find-widget-container>");
Jqf = 310;
Gqf = class extends Grt {
  constructor(n, e, t, i, r, s) {
    super({
      showCommonFindToggles: true,
      checkImeCompletionState: true,
      showResultCount: true,
      initialWidth: Jqf,
      enableSash: false,
      previousMatchActionId: bE.PreviousMatchFindAction,
      nextMatchActionId: bE.NextMatchFindAction
    }, n, e, t, i);
    this.allMatches = [];
    this.currentMatchIndex = -1;
    this.matchDecorations = new Map();
    this.currentMatchDecoration = new Map();
    this.mountedEditors = r;
    this.multiDiffRef = s;
    const o = this.getFindInputDomNode();
    if (o) {
      this.onkeydown(o, a => {
        if (a.keyCode === 3) {
          this.find(a.shiftKey);
          a.preventDefault();
          a.stopPropagation();
        }
      });
    }
  }
  setMultiDiffRef(n) {
    this.multiDiffRef = n;
  }
  layout(n) {
    super.layout(500);
  }
  show(n) {
    super.show(n);
    this.updateResultCount();
  }
  hide() {
    this.clearAllDecorations();
    this.allMatches = [];
    this.currentMatchIndex = -1;
    this.previousEditorMatch = undefined;
    super.hide();
  }
  findAllMatches() {
    const n = this.inputValue;
    if (!n || n.length === 0) {
      return [];
    }
    const e = this._getRegexValue();
    const t = this._getCaseSensitiveValue();
    const i = this._getWholeWordValue();
    const r = [];
    let s = 0;
    for (const [o, {
      resource: a,
      editor: l
    }] of this.mountedEditors) {
      const u = l.getModel();
      if (!u) {
        continue;
      }
      const d = l.getVisibleRanges();
      if (d.length !== 0) {
        try {
          const m = u.findMatches(n, d, e, t, i ? null : "", false, 10000);
          for (const p of m) {
            r.push({
              uri: o,
              resource: a,
              editor: l,
              match: p,
              matchIndex: s++
            });
          }
        } catch {}
      }
    }
    return r;
  }
  clearAllDecorations() {
    for (const [n, e] of this.matchDecorations) {
      try {
        n.removeDecorations(e);
      } catch {}
    }
    this.matchDecorations.clear();
    for (const [n, e] of this.currentMatchDecoration) {
      try {
        n.removeDecorations(e);
      } catch {}
    }
    this.currentMatchDecoration.clear();
  }
  applyMatchDecorations() {
    this.clearAllDecorations();
    if (this.allMatches.length === 0) {
      return;
    }
    const n = new Map();
    for (const e of this.allMatches) {
      const t = n.get(e.editor) || [];
      t.push(e);
      n.set(e.editor, t);
    }
    for (const [e, t] of n) {
      const i = t.map(r => ({
        range: r.match.range,
        options: {
          description: "find-match-highlight",
          className: "findMatch",
          stickiness: 1
        }
      }));
      try {
        const r = e.deltaDecorations([], i);
        this.matchDecorations.set(e, r);
      } catch {}
    }
  }
  updateCurrentMatchDecoration() {
    for (const [t, i] of this.currentMatchDecoration) {
      try {
        t.removeDecorations(i);
      } catch {}
    }
    this.currentMatchDecoration.clear();
    if (this.currentMatchIndex < 0 || this.currentMatchIndex >= this.allMatches.length) {
      return;
    }
    const n = this.allMatches[this.currentMatchIndex];
    const e = {
      range: n.match.range,
      options: {
        description: "find-match-current",
        className: "currentFindMatch",
        stickiness: 1
      }
    };
    try {
      const t = n.editor.deltaDecorations([], [e]);
      this.currentMatchDecoration.set(n.editor, t);
    } catch {}
  }
  find(n) {
    const e = this.inputValue;
    if (!e || e.length === 0) {
      this.allMatches = [];
      this.currentMatchIndex = -1;
      this.previousEditorMatch = undefined;
      this.clearAllDecorations();
      this.updateResultCount();
      return;
    }
    if (this.allMatches.length === 0 || this.currentMatchIndex < 0) {
      this.allMatches = this.findAllMatches();
      if (this.allMatches.length === 0) {
        this.currentMatchIndex = -1;
        this.previousEditorMatch = undefined;
        this.clearAllDecorations();
        this.updateResultCount();
        return;
      }
      this.currentMatchIndex = n ? this.allMatches.length - 1 : 0;
      this.applyMatchDecorations();
    } else if (n) {
      this.currentMatchIndex = (this.currentMatchIndex - 1 + this.allMatches.length) % this.allMatches.length;
    } else {
      this.currentMatchIndex = (this.currentMatchIndex + 1) % this.allMatches.length;
    }
    this.updateCurrentMatchDecoration();
    this.goToMatch(this.currentMatchIndex);
    this.updateResultCount();
  }
  findFirst() {
    const n = this.inputValue;
    if (!n || n.length === 0) {
      this.allMatches = [];
      this.currentMatchIndex = -1;
      this.previousEditorMatch = undefined;
      this.clearAllDecorations();
      this.updateResultCount();
      return;
    }
    this.allMatches = this.findAllMatches();
    if (this.allMatches.length === 0) {
      this.currentMatchIndex = -1;
      this.previousEditorMatch = undefined;
      this.clearAllDecorations();
      this.updateResultCount();
      return;
    }
    this.currentMatchIndex = 0;
    this.applyMatchDecorations();
    this.updateCurrentMatchDecoration();
    this.goToMatch(0);
    this.updateResultCount();
  }
  goToMatch(n) {
    if (n < 0 || n >= this.allMatches.length) {
      return;
    }
    const e = this.allMatches[n];
    const {
      resource: t,
      editor: i,
      match: r
    } = e;
    if (this.previousEditorMatch) {
      const o = this.previousEditorMatch.editor;
      const a = this.previousEditorMatch.match;
      const l = o !== i;
      const u = a.range.startLineNumber !== r.range.startLineNumber || a.range.startColumn !== r.range.startColumn || a.range.endLineNumber !== r.range.endLineNumber || a.range.endColumn !== r.range.endColumn;
      if (l || u) {
        try {
          const d = {
            startLineNumber: a.range.startLineNumber,
            startColumn: a.range.startColumn,
            endLineNumber: a.range.startLineNumber,
            endColumn: a.range.startColumn
          };
          o.setSelection(d);
        } catch {}
      }
    }
    const s = t.modifiedUri?.toString() || t.originalUri?.toString();
    if (s && this.multiDiffRef) {
      this.multiDiffRef.expandResourceByUri(s);
    }
    setTimeout(() => {
      i.setSelection(r.range);
      i.revealRangeInCenter(r.range, 0);
      if (s && this.multiDiffRef) {
        this.multiDiffRef.scrollToResource({
          modifiedUri: s,
          lineNumber: r.range.startLineNumber,
          omitHighlight: true
        });
      }
    }, 100);
    this.previousEditorMatch = e;
  }
  _onInputChanged() {
    const n = this.inputValue;
    if (!n || n.length === 0) {
      this.allMatches = [];
      this.currentMatchIndex = -1;
      this.previousEditorMatch = undefined;
      this.clearAllDecorations();
      return false;
    } else {
      this.allMatches = this.findAllMatches();
      this.currentMatchIndex = this.allMatches.length > 0 ? 0 : -1;
      if (this.allMatches.length > 0) {
        this.applyMatchDecorations();
        this.updateCurrentMatchDecoration();
        this.goToMatch(0);
        return true;
      } else {
        this.clearAllDecorations();
        return false;
      }
    }
  }
  _onFocusTrackerFocus() {}
  _onFocusTrackerBlur() {}
  _onFindInputFocusTrackerFocus() {}
  _onFindInputFocusTrackerBlur() {}
  focusFindBox() {
    super.focusFindBox();
  }
  selectAllText() {
    const n = this.getFindInputDomNode();
    if (n) {
      const e = n.querySelector("input");
      if (e) {
        e.select();
      }
    }
  }
  updateSearchString(n) {
    const e = this.getFindInputDomNode();
    if (e) {
      const t = e.querySelector("input");
      if (t) {
        t.value = n;
        const i = new Event("input", {
          bubbles: true
        });
        t.dispatchEvent(i);
      }
    }
  }
  async _getResultCount() {
    const n = this.inputValue;
    if (!!n && n.length !== 0) {
      if (this.allMatches.length === 0) {
        this.allMatches = this.findAllMatches();
      }
      if (this.allMatches.length === 0) {
        return {
          resultIndex: 0,
          resultCount: 0
        };
      } else {
        if (this.currentMatchIndex < 0 || this.currentMatchIndex >= this.allMatches.length) {
          this.currentMatchIndex = 0;
        }
        return {
          resultIndex: this.currentMatchIndex,
          resultCount: this.allMatches.length
        };
      }
    }
  }
};
