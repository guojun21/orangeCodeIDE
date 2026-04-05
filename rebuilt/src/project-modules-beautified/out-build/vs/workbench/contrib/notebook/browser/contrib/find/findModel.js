"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/contrib/find/findModel.js
// Offset: 33336903 (bundle byte offset)
// Size: 9893 bytes
GD();
vr();
rt();
ts();
UVe();
Ei();
$8f();
Sb();
ph();
Aki = class {
  get length() {
    return this._contentMatches.length + this._webviewMatches.length;
  }
  get contentMatches() {
    return this._contentMatches;
  }
  get webviewMatches() {
    return this._webviewMatches;
  }
  constructor(n, e, t, i) {
    this.cell = n;
    this.index = e;
    this._contentMatches = t;
    this._webviewMatches = i;
  }
  getMatch(n) {
    if (n >= this.length) {
      throw new Error("NotebookCellFindMatch: index out of range");
    }
    if (n < this._contentMatches.length) {
      return this._contentMatches[n];
    } else {
      return this._webviewMatches[n - this._contentMatches.length];
    }
  }
};
qTa = class extends at {
  get findMatches() {
    return this._findMatches;
  }
  get currentMatch() {
    return this._currentMatch;
  }
  constructor(e, t, i) {
    super();
    this._notebookEditor = e;
    this._state = t;
    this._configurationService = i;
    this._findMatches = [];
    this._findMatchesStarts = null;
    this._currentMatch = -1;
    this._computePromise = null;
    this._modelDisposable = this._register(new Ut());
    this._throttledDelayer = new Nv(20);
    this._computePromise = null;
    this._register(t.onFindReplaceStateChange(r => {
      this._updateCellStates(r);
      if (r.searchString || r.isRegex || r.matchCase || r.searchScope || r.wholeWord || r.isRevealed && this._state.isRevealed || r.filters || r.isReplaceRevealed) {
        this.research();
      }
      if (r.isRevealed && !this._state.isRevealed) {
        this.clear();
      }
    }));
    this._register(this._notebookEditor.onDidChangeModel(r => {
      this._registerModelListener(r);
    }));
    this._register(this._notebookEditor.onDidChangeCellState(r => {
      if (r.cell.cellKind === zd.Markup && r.source.editStateChanged) {
        this.research();
      }
    }));
    if (this._notebookEditor.hasModel()) {
      this._registerModelListener(this._notebookEditor.textModel);
    }
    this._findMatchDecorationModel = new m_u(this._notebookEditor, this._notebookEditor.getId());
  }
  _updateCellStates(e) {
    if (!this._state.filters?.markupInput || !this._state.filters?.markupPreview || !this._state.filters?.findScope) {
      return;
    }
    const t = () => {
      const i = this._notebookEditor.getViewModel();
      if (!i) {
        return;
      }
      const r = this._configurationService.inspect("editor.wordSeparators").value;
      const s = {
        regex: this._state.isRegex,
        wholeWord: this._state.wholeWord,
        caseSensitive: this._state.matchCase,
        wordSeparators: r,
        includeMarkupInput: true,
        includeCodeInput: false,
        includeMarkupPreview: false,
        includeOutput: false,
        findScope: this._state.filters?.findScope
      };
      const o = i.find(this._state.searchString, s);
      for (let a = 0; a < i.length; a++) {
        const l = i.cellAt(a);
        if (l && l.cellKind === zd.Markup) {
          const d = o.find(p => p.cell.handle === l.handle && p.contentMatches.length > 0) ? aw.Editing : aw.Preview;
          const m = l.getEditState();
          if (m === aw.Editing && l.editStateSource !== "find") {
            continue;
          }
          if (m !== d) {
            l.updateEditState(d, "find");
          }
        }
      }
    };
    if (e.isReplaceRevealed && !this._state.isReplaceRevealed) {
      const i = this._notebookEditor.getViewModel();
      if (!i) {
        return;
      }
      for (let r = 0; r < i.length; r++) {
        const s = i.cellAt(r);
        if (s && s.cellKind === zd.Markup && s.getEditState() === aw.Editing && s.editStateSource === "find") {
          s.updateEditState(aw.Preview, "find");
        }
      }
      return;
    }
    if (e.isReplaceRevealed || (e.filters || e.isRevealed || e.searchString || e.replaceString) && this._state.isRevealed && this._state.isReplaceRevealed) {
      t();
    }
  }
  ensureFindMatches() {
    if (!this._findMatchesStarts) {
      this.set(this._findMatches, true);
    }
  }
  getCurrentMatch() {
    const e = this._findMatchesStarts.getIndexOf(this._currentMatch);
    const t = this._findMatches[e.index].cell;
    const i = this._findMatches[e.index].getMatch(e.remainder);
    return {
      cell: t,
      match: i,
      isModelMatch: e.remainder < this._findMatches[e.index].contentMatches.length
    };
  }
  refreshCurrentMatch(e) {
    const t = this.findMatches.findIndex(o => o.cell === e.cell);
    if (t === -1) {
      return;
    }
    const r = this.findMatches[t].contentMatches.findIndex(o => o.range.intersectRanges(e.range) !== null);
    if (r === undefined) {
      return;
    }
    const s = t === 0 ? 0 : this._findMatchesStarts?.getPrefixSum(t - 1) ?? 0;
    this._currentMatch = s + r;
    this.highlightCurrentFindMatchDecoration(t, r).then(o => {
      this.revealCellRange(t, r, o);
      this._state.changeMatchInfo(this._currentMatch, this._findMatches.reduce((a, l) => a + l.length, 0), undefined);
    });
  }
  find(e) {
    if (!this.findMatches.length) {
      return;
    }
    if (!this._findMatchesStarts) {
      this.set(this._findMatches, true);
      if ("index" in e) {
        this._currentMatch = e.index;
      }
    } else {
      const i = this._findMatchesStarts.getTotalSum();
      if ("index" in e) {
        this._currentMatch = e.index;
      } else if (this._currentMatch === -1) {
        this._currentMatch = e.previous ? i - 1 : 0;
      } else {
        const r = (this._currentMatch + (e.previous ? -1 : 1) + i) % i;
        this._currentMatch = r;
      }
    }
    const t = this._findMatchesStarts.getIndexOf(this._currentMatch);
    this.highlightCurrentFindMatchDecoration(t.index, t.remainder).then(i => {
      this.revealCellRange(t.index, t.remainder, i);
      this._state.changeMatchInfo(this._currentMatch, this._findMatches.reduce((r, s) => r + s.length, 0), undefined);
    });
  }
  revealCellRange(e, t, i) {
    const r = this._findMatches[e];
    if (t >= r.contentMatches.length) {
      this._notebookEditor.focusElement(r.cell);
      if (this._notebookEditor.getCellIndex(r.cell) !== undefined) {
        this._notebookEditor.revealCellOffsetInCenter(r.cell, i ?? 0);
      }
    } else {
      const s = r.getMatch(t);
      if (r.cell.getEditState() !== aw.Editing) {
        r.cell.updateEditState(aw.Editing, "find");
      }
      r.cell.isInputCollapsed = false;
      this._notebookEditor.focusElement(r.cell);
      this._notebookEditor.setCellEditorSelection(r.cell, s.range);
      this._notebookEditor.revealRangeInCenterIfOutsideViewportAsync(r.cell, s.range);
    }
  }
  _registerModelListener(e) {
    this._modelDisposable.clear();
    if (e) {
      this._modelDisposable.add(e.onDidChangeContent(t => {
        if (t.rawEvents.some(i => i.kind === sb.ChangeCellContent || i.kind === sb.ModelChange)) {
          this.research();
        }
      }));
    }
    this.research();
  }
  async research() {
    return this._throttledDelayer.trigger(async () => {
      this._state.change({
        isSearching: true
      }, false);
      await this._research();
      this._state.change({
        isSearching: false
      }, false);
    });
  }
  async _research() {
    this._computePromise?.cancel();
    if (!this._state.isRevealed || !this._notebookEditor.hasModel()) {
      this.set([], false);
      return;
    }
    this._computePromise = dw(a => this._compute(a));
    const e = await this._computePromise;
    if (!e) {
      this.set([], false);
      return;
    }
    if (e.length === 0) {
      this.set([], false);
      return;
    }
    const t = a => {
      const l = Sbe(e.map(u => u.index), u => u >= a);
      this._updateCurrentMatch(e, this._matchesCountBeforeIndex(e, l));
    };
    if (this._currentMatch === -1) {
      if (this._notebookEditor.getLength() === 0) {
        this.set(e, false);
        return;
      } else {
        const a = this._notebookEditor.getFocus().start;
        t(a);
        this.set(e, false);
        return;
      }
    }
    const i = this._findMatchesStarts.getIndexOf(this._currentMatch);
    const r = this._findMatches[i.index].cell;
    const s = this._notebookEditor.getCellIndex(r);
    if (s < 0) {
      if (this._notebookEditor.getLength() === 0) {
        this.set(e, false);
        return;
      }
      t(s);
      return;
    }
    const o = this._notebookEditor.cellAt(s);
    if (o.cellKind === zd.Markup && o.getEditState() === aw.Preview) {
      t(s);
      return;
    }
    if (!this._findMatchDecorationModel.currentMatchDecorations) {
      t(s);
      return;
    }
    if (this._findMatchDecorationModel.currentMatchDecorations.kind === "input") {
      const a = this._findMatchDecorationModel.currentMatchDecorations.decorations.find(u => u.ownerId === o.handle);
      if (!a) {
        t(s);
        return;
      }
      const l = Sbe(e, u => u.index >= s) % e.length;
      if (e[l].index > s) {
        this._updateCurrentMatch(e, this._matchesCountBeforeIndex(e, l));
        return;
      } else {
        let u = o.editorAttached && a.decorations[0] ? o.getCellDecorationRange(a.decorations[0]) : null;
        if (u === null && i.remainder < this._findMatches[i.index].contentMatches.length) {
          u = this._findMatches[i.index].getMatch(i.remainder).range;
        }
        if (u !== null) {
          const d = e[l];
          const m = Sbe(d.contentMatches, p => Zt.compareRangesUsingStarts(p.range, u) >= 0);
          this._updateCurrentMatch(e, this._matchesCountBeforeIndex(e, l) + m);
        } else {
          this._updateCurrentMatch(e, this._matchesCountBeforeIndex(e, l));
          return;
        }
      }
    } else {
      const a = Sbe(e.map(l => l.index), l => l >= s) % e.length;
      this._updateCurrentMatch(e, this._matchesCountBeforeIndex(e, a));
    }
  }
  set(e, t) {
    if (!e || !e.length) {
      this._findMatches = [];
      this._findMatchDecorationModel.setAllFindMatchesDecorations([]);
      this.constructFindMatchesStarts();
      this._currentMatch = -1;
      this._findMatchDecorationModel.clearCurrentFindMatchDecoration();
      this._state.changeMatchInfo(this._currentMatch, this._findMatches.reduce((i, r) => i + r.length, 0), undefined);
      return;
    }
    this._findMatches = e;
    this._findMatchDecorationModel.setAllFindMatchesDecorations(e || []);
    this.constructFindMatchesStarts();
    if (t) {
      this._currentMatch = 0;
      this.highlightCurrentFindMatchDecoration(0, 0);
    }
    this._state.changeMatchInfo(this._currentMatch, this._findMatches.reduce((i, r) => i + r.length, 0), undefined);
  }
  async _compute(e) {
    if (!this._notebookEditor.hasModel()) {
      return null;
    }
    let t = null;
    const i = this._state.searchString;
    const r = this._configurationService.inspect("editor.wordSeparators").value;
    const s = {
      regex: this._state.isRegex,
      wholeWord: this._state.wholeWord,
      caseSensitive: this._state.matchCase,
      wordSeparators: r,
      includeMarkupInput: this._state.filters?.markupInput ?? true,
      includeCodeInput: this._state.filters?.codeInput ?? true,
      includeMarkupPreview: !!this._state.filters?.markupPreview,
      includeOutput: !!this._state.filters?.codeOutput,
      findScope: this._state.filters?.findScope
    };
    t = await this._notebookEditor.find(i, s, e);
    if (e.isCancellationRequested) {
      return null;
    } else {
      return t;
    }
  }
  _updateCurrentMatch(e, t) {
    this._currentMatch = t % e.length;
    this.set(e, false);
    const i = this._findMatchesStarts.getIndexOf(this._currentMatch);
    this.highlightCurrentFindMatchDecoration(i.index, i.remainder);
    this._state.changeMatchInfo(this._currentMatch, this._findMatches.reduce((r, s) => r + s.length, 0), undefined);
  }
  _matchesCountBeforeIndex(e, t) {
    let i = 0;
    for (let r = 0; r < t; r++) {
      i += e[r].length;
    }
    return i;
  }
  constructFindMatchesStarts() {
    if (this._findMatches && this._findMatches.length) {
      const e = new Uint32Array(this._findMatches.length);
      for (let t = 0; t < this._findMatches.length; t++) {
        e[t] = this._findMatches[t].length;
      }
      this._findMatchesStarts = new Uft(e);
    } else {
      this._findMatchesStarts = null;
    }
  }
  async highlightCurrentFindMatchDecoration(e, t) {
    const i = this._findMatches[e].cell;
    const r = this._findMatches[e].getMatch(t);
    if (t < this._findMatches[e].contentMatches.length) {
      return this._findMatchDecorationModel.highlightCurrentFindMatchDecorationInCell(i, r.range);
    } else {
      return this._findMatchDecorationModel.highlightCurrentFindMatchDecorationInWebview(i, r.index);
    }
  }
  clear() {
    this._computePromise?.cancel();
    this._throttledDelayer.cancel();
    this.set([], false);
  }
  dispose() {
    this._findMatchDecorationModel.dispose();
    super.dispose();
  }
};
qTa = __decorate([__param(2, Fn)], qTa);
