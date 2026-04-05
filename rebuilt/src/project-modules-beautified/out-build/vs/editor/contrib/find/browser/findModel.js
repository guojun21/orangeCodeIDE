"use strict";

// Module: out-build/vs/editor/contrib/find/browser/findModel.js
// Offset: 25146350 (bundle byte offset)
// Size: 10342 bytes
GD();
vr();
rt();
M4t();
tl();
ts();
db();
i9e();
aQl();
BCA();
avg();
si();
hNe = new Sn("findWidgetVisible", false);
cvg = hNe.toNegated();
hgi = new Sn("findInputFocussed", false);
Ala = new Sn("replaceInputFocussed", false);
yCt = {
  primary: 545,
  mac: {
    primary: 2593
  }
};
wCt = {
  primary: 565,
  mac: {
    primary: 2613
  }
};
_Ct = {
  primary: 560,
  mac: {
    primary: 2608
  }
};
mgi = {
  primary: 554,
  mac: {
    primary: 2602
  }
};
tdn = {
  primary: 558,
  mac: {
    primary: 2606
  }
};
bE = {
  StartFindAction: "actions.find",
  StartFindWithSelection: "actions.findWithSelection",
  StartFindWithArgs: "editor.actions.findWithArgs",
  NextMatchFindAction: "editor.action.nextMatchFindAction",
  PreviousMatchFindAction: "editor.action.previousMatchFindAction",
  GoToMatchFindAction: "editor.action.goToMatchFindAction",
  NextSelectionMatchFindAction: "editor.action.nextSelectionMatchFindAction",
  PreviousSelectionMatchFindAction: "editor.action.previousSelectionMatchFindAction",
  StartFindReplaceAction: "editor.action.startFindReplaceAction",
  CloseFindWidgetCommand: "closeFindWidget",
  ToggleCaseSensitiveCommand: "toggleFindCaseSensitive",
  ToggleWholeWordCommand: "toggleFindWholeWord",
  ToggleRegexCommand: "toggleFindRegex",
  ToggleSearchScopeCommand: "toggleFindInSelection",
  TogglePreserveCaseCommand: "togglePreserveCase",
  ReplaceOneAction: "editor.action.replaceOne",
  ReplaceAllAction: "editor.action.replaceAll",
  SelectAllMatchesAction: "editor.action.selectAllMatches",
  StartAiInstantSearchAction: "editor.action.startAiInstantSearch"
};
mNe = 19999;
lvg = 240;
uvg = class yWa {
  constructor(e, t) {
    this._toDispose = new Ut();
    this._editor = e;
    this._state = t;
    this._isDisposed = false;
    this._startSearchingTimer = new O$();
    this._decorations = new edn(e);
    this._toDispose.add(this._decorations);
    this._updateDecorationsScheduler = new Hu(() => {
      if (this._editor.hasModel()) {
        return this.research(false);
      }
    }, 100);
    this._toDispose.add(this._updateDecorationsScheduler);
    this._toDispose.add(this._editor.onDidChangeCursorPosition(i => {
      if (i.reason === 3 || i.reason === 5 || i.reason === 6) {
        this._decorations.setStartPosition(this._editor.getPosition());
      }
    }));
    this._ignoreModelContentChanged = false;
    this._toDispose.add(this._editor.onDidChangeModelContent(i => {
      if (!this._ignoreModelContentChanged) {
        if (i.isFlush) {
          this._decorations.reset();
        }
        this._decorations.setStartPosition(this._editor.getPosition());
        this._updateDecorationsScheduler.schedule();
      }
    }));
    this._toDispose.add(this._state.onFindReplaceStateChange(i => this._onStateChanged(i)));
    this.research(false, this._state.searchScope);
  }
  dispose() {
    this._isDisposed = true;
    Bo(this._startSearchingTimer);
    this._toDispose.dispose();
  }
  _onStateChanged(e) {
    if (!this._isDisposed) {
      if (this._editor.hasModel() && (e.searchString || e.isReplaceRevealed || e.isRegex || e.wholeWord || e.matchCase || e.searchScope)) {
        if (this._editor.getModel().isTooLargeForSyncing()) {
          this._startSearchingTimer.cancel();
          this._startSearchingTimer.setIfNotSet(() => {
            if (e.searchScope) {
              this.research(e.moveCursor, this._state.searchScope);
            } else {
              this.research(e.moveCursor);
            }
          }, lvg);
        } else if (e.searchScope) {
          this.research(e.moveCursor, this._state.searchScope);
        } else {
          this.research(e.moveCursor);
        }
      }
    }
  }
  static _getSearchRange(e, t) {
    return t || e.getFullModelRange();
  }
  research(e, t) {
    let i = null;
    if (typeof t !== "undefined") {
      if (t !== null) {
        if (Array.isArray(t)) {
          i = t;
        } else {
          i = [t];
        }
      }
    } else {
      i = this._decorations.getFindScopes();
    }
    if (i !== null) {
      i = i.map(a => {
        if (a.startLineNumber !== a.endLineNumber) {
          let l = a.endLineNumber;
          if (a.endColumn === 1) {
            l = l - 1;
          }
          return new Zt(a.startLineNumber, 1, l, this._editor.getModel().getLineMaxColumn(l));
        }
        return a;
      });
    }
    const r = this._findMatches(i, false, mNe);
    this._decorations.set(r, i);
    const s = this._editor.getSelection();
    let o = this._decorations.getCurrentMatchesPosition(s);
    if (o === 0 && r.length > 0) {
      const a = Sbe(r.map(l => l.range), l => Zt.compareRangesUsingStarts(l, s) >= 0);
      o = a > 0 ? a - 1 + 1 : o;
    }
    this._state.changeMatchInfo(o, this._decorations.getCount(), undefined);
    if (e && this._editor.getOption(43).cursorMoveOnType) {
      this._moveToNextMatch(this._decorations.getStartPosition());
    }
  }
  _hasMatches() {
    return this._state.matchesCount > 0;
  }
  _cannotFind() {
    if (!this._hasMatches()) {
      const e = this._decorations.getFindScope();
      if (e) {
        this._editor.revealRangeInCenterIfOutsideViewport(e, 0);
      }
      return true;
    }
    return false;
  }
  _setCurrentFindMatch(e) {
    const t = this._decorations.setCurrentFindMatch(e);
    this._state.changeMatchInfo(t, this._decorations.getCount(), e);
    this._editor.setSelection(e);
    this._editor.revealRangeInCenterIfOutsideViewport(e, 0);
  }
  _prevSearchPosition(e) {
    const t = this._state.isRegex && (this._state.searchString.indexOf("^") >= 0 || this._state.searchString.indexOf("$") >= 0);
    let {
      lineNumber: i,
      column: r
    } = e;
    const s = this._editor.getModel();
    if (t || r === 1) {
      if (i === 1) {
        i = s.getLineCount();
      } else {
        i--;
      }
      r = s.getLineMaxColumn(i);
    } else {
      r--;
    }
    return new ar(i, r);
  }
  _moveToPrevMatch(e, t = false) {
    if (!this._state.canNavigateBack()) {
      const d = this._decorations.matchAfterPosition(e);
      if (d) {
        this._setCurrentFindMatch(d);
      }
      return;
    }
    if (this._decorations.getCount() < mNe) {
      let d = this._decorations.matchBeforePosition(e);
      if (d && d.isEmpty() && d.getStartPosition().equals(e)) {
        e = this._prevSearchPosition(e);
        d = this._decorations.matchBeforePosition(e);
      }
      if (d) {
        this._setCurrentFindMatch(d);
      }
      return;
    }
    if (this._cannotFind()) {
      return;
    }
    const i = this._decorations.getFindScope();
    const r = yWa._getSearchRange(this._editor.getModel(), i);
    if (r.getEndPosition().isBefore(e)) {
      e = r.getEndPosition();
    }
    if (e.isBefore(r.getStartPosition())) {
      e = r.getEndPosition();
    }
    const {
      lineNumber: s,
      column: o
    } = e;
    const a = this._editor.getModel();
    let l = new ar(s, o);
    let u = a.findPreviousMatch(this._state.searchString, l, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, false);
    if (u && u.range.isEmpty() && u.range.getStartPosition().equals(l)) {
      l = this._prevSearchPosition(l);
      u = a.findPreviousMatch(this._state.searchString, l, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, false);
    }
    if (u) {
      if (!t && !r.containsRange(u.range)) {
        return this._moveToPrevMatch(u.range.getStartPosition(), true);
      }
      this._setCurrentFindMatch(u.range);
    }
  }
  moveToPrevMatch() {
    this._moveToPrevMatch(this._editor.getSelection().getStartPosition());
  }
  _nextSearchPosition(e) {
    const t = this._state.isRegex && (this._state.searchString.indexOf("^") >= 0 || this._state.searchString.indexOf("$") >= 0);
    let {
      lineNumber: i,
      column: r
    } = e;
    const s = this._editor.getModel();
    if (t || r === s.getLineMaxColumn(i)) {
      if (i === s.getLineCount()) {
        i = 1;
      } else {
        i++;
      }
      r = 1;
    } else {
      r++;
    }
    return new ar(i, r);
  }
  _moveToNextMatch(e) {
    if (!this._state.canNavigateForward()) {
      const i = this._decorations.matchBeforePosition(e);
      if (i) {
        this._setCurrentFindMatch(i);
      }
      return;
    }
    if (this._decorations.getCount() < mNe) {
      let i = this._decorations.matchAfterPosition(e);
      if (i && i.isEmpty() && i.getStartPosition().equals(e)) {
        e = this._nextSearchPosition(e);
        i = this._decorations.matchAfterPosition(e);
      }
      if (i) {
        this._setCurrentFindMatch(i);
      }
      return;
    }
    const t = this._getNextMatch(e, false, true);
    if (t) {
      this._setCurrentFindMatch(t.range);
    }
  }
  _getNextMatch(e, t, i, r = false) {
    if (this._cannotFind()) {
      return null;
    }
    const s = this._decorations.getFindScope();
    const o = yWa._getSearchRange(this._editor.getModel(), s);
    if (o.getEndPosition().isBefore(e)) {
      e = o.getStartPosition();
    }
    if (e.isBefore(o.getStartPosition())) {
      e = o.getStartPosition();
    }
    const {
      lineNumber: a,
      column: l
    } = e;
    const u = this._editor.getModel();
    let d = new ar(a, l);
    let m = u.findNextMatch(this._state.searchString, d, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, t);
    if (i && m && m.range.isEmpty() && m.range.getStartPosition().equals(d)) {
      d = this._nextSearchPosition(d);
      m = u.findNextMatch(this._state.searchString, d, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, t);
    }
    if (m) {
      if (!r && !o.containsRange(m.range)) {
        return this._getNextMatch(m.range.getEndPosition(), t, i, true);
      } else {
        return m;
      }
    } else {
      return null;
    }
  }
  moveToNextMatch() {
    this._moveToNextMatch(this._editor.getSelection().getEndPosition());
  }
  _moveToMatch(e) {
    const t = this._decorations.getDecorationRangeAt(e);
    if (t) {
      this._setCurrentFindMatch(t);
    }
  }
  moveToMatch(e) {
    this._moveToMatch(e);
  }
  _getReplacePattern() {
    if (this._state.isRegex) {
      return ivg(this._state.replaceString);
    } else {
      return ugi.fromStaticValue(this._state.replaceString);
    }
  }
  replace() {
    if (!this._hasMatches()) {
      return;
    }
    const e = this._getReplacePattern();
    const t = this._editor.getSelection();
    const i = this._getNextMatch(t.getStartPosition(), true, false);
    if (i) {
      if (t.equalsRange(i.range)) {
        const r = e.buildReplaceString(i.matches, this._state.preserveCase);
        const s = new D6(t, r);
        this._executeEditorCommand("replace", s);
        this._decorations.setStartPosition(new ar(t.startLineNumber, t.startColumn + r.length));
        this.research(true);
      } else {
        this._decorations.setStartPosition(this._editor.getPosition());
        this._setCurrentFindMatch(i.range);
      }
    }
  }
  _findMatches(e, t, i) {
    const r = (e || [null]).map(s => yWa._getSearchRange(this._editor.getModel(), s));
    return this._editor.getModel().findMatches(this._state.searchString, r, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null, t, i);
  }
  replaceAll() {
    if (!this._hasMatches()) {
      return;
    }
    const e = this._decorations.getFindScopes();
    if (e === null && this._state.matchesCount >= mNe) {
      this._largeReplaceAll();
    } else {
      this._regularReplaceAll(e);
    }
    this.research(false);
  }
  _largeReplaceAll() {
    const t = new Nde(this._state.searchString, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(136) : null).parseSearchRequest();
    if (!t) {
      return;
    }
    let i = t.regex;
    if (!i.multiline) {
      let m = "mu";
      if (i.ignoreCase) {
        m += "i";
      }
      if (i.global) {
        m += "g";
      }
      i = new RegExp(i.source, m);
    }
    const r = this._editor.getModel();
    const s = r.getValue(1);
    const o = r.getFullModelRange();
    const a = this._getReplacePattern();
    let l;
    const u = this._state.preserveCase;
    if (a.hasReplacementPatterns || u) {
      l = s.replace(i, function () {
        return a.buildReplaceString(arguments, u);
      });
    } else {
      l = s.replace(i, a.buildReplaceString(null, u));
    }
    const d = new HFo(o, l, this._editor.getSelection());
    this._executeEditorCommand("replaceAll", d);
  }
  _regularReplaceAll(e) {
    const t = this._getReplacePattern();
    const i = this._findMatches(e, t.hasReplacementPatterns || this._state.preserveCase, 1073741824);
    const r = [];
    for (let o = 0, a = i.length; o < a; o++) {
      r[o] = t.buildReplaceString(i[o].matches, this._state.preserveCase);
    }
    const s = new Xbg(this._editor.getSelection(), i.map(o => o.range), r);
    this._executeEditorCommand("replaceAll", s);
  }
  selectAllMatches() {
    if (!this._hasMatches()) {
      return;
    }
    const e = this._decorations.getFindScopes();
    let i = this._findMatches(e, false, 1073741824).map(s => new Vl(s.range.startLineNumber, s.range.startColumn, s.range.endLineNumber, s.range.endColumn));
    const r = this._editor.getSelection();
    for (let s = 0, o = i.length; s < o; s++) {
      if (i[s].equalsRange(r)) {
        i = [r].concat(i.slice(0, s)).concat(i.slice(s + 1));
        break;
      }
    }
    this._editor.setSelections(i);
  }
  _executeEditorCommand(e, t) {
    try {
      this._ignoreModelContentChanged = true;
      this._editor.pushUndoStop();
      this._editor.executeCommand(e, t);
      this._editor.pushUndoStop();
    } finally {
      this._ignoreModelContentChanged = false;
    }
  }
};
