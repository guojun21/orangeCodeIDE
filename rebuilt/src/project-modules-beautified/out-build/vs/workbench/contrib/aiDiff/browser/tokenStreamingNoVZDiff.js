"use strict";

// Module: out-build/vs/workbench/contrib/aiDiff/browser/tokenStreamingNoVZDiff.js
// Offset: 33817672 (bundle byte offset)
// Size: 7032 bytes
Yki();
rt();
ivn();
Oh();
ts();
Hk();
VD();
F0u();
HIa();
dDa();
hDa = class extends at {
  constructor(e, t, i, r, s, o, a) {
    super();
    this.model = e;
    this.mainEditor = t;
    this.options = r;
    this.diffingService = s;
    this.codeEditorService = o;
    this.editorWorkerService = a;
    this.streamingCurrentCharacterDecorationId = undefined;
    this.greenDecIds = [];
    this.replaceText = "";
    this.streamIsFinished = false;
    this.originalText = undefined;
    this.undoRedoGroup = new FOt();
    this.originalEditorSelection = undefined;
    this.showingOrHidingAbortController = new AbortController();
    this.decorationId = e.deltaDecorations([], [this.getDecorationOptions(i)])[0];
  }
  getDecorationOptions(e) {
    let t;
    t = {
      description: "token streaming diff",
      className: "cpp-suggestion-text-decoration-debug " + (this.options.decorationClassName ?? ""),
      stickiness: 0
    };
    return {
      range: {
        startLineNumber: e.startLineNumber,
        startColumn: e.startColumn,
        endLineNumber: e.endLineNumber,
        endColumn: e.endColumn
      },
      options: t
    };
  }
  isShowing() {
    return this.originalText !== undefined;
  }
  append(e) {
    if (this.streamIsFinished) {
      console.error("Trying to append to a finished diff...");
      return;
    }
    this.replaceText += e;
    this.flushDisplay().catch(t => console.error(t));
  }
  async setReplaceText(e) {
    this.streamIsFinished = true;
    this.replaceText = e;
    await this.flushDisplay({
      isFinal: true
    }).catch(t => console.error(t));
  }
  async finish() {
    this.streamIsFinished = true;
    return this.flushDisplay({
      isFinal: true
    });
  }
  async flushDisplay(e) {
    if (this.flusher) {
      await this.flusher.process({
        runEvenIfAlreadyProcessing: false,
        waitUntilProcessed: e?.isFinal === true
      });
    }
  }
  async flushDisplayIntern(e) {
    try {
      if (!this.isShowing()) {
        return;
      }
      if (this.replaceText === "" && !this.streamIsFinished) {
        this.showStreamingCurrentCharacter("");
        return;
      }
      if (this.model.getDecorationRange(this.decorationId)) {
        const i = this.getCurrentModelText();
        const r = this.replaceText;
        const s = this.originalText ?? "";
        let {
          changes: o
        } = await this.editorWorkerService.computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(s, r, {
          computeMoves: false,
          ignoreTrimWhitespace: false,
          maxComputationTimeMs: 100,
          onlyCareAboutPrefixOfOriginalLines: !this.streamIsFinished
        });
        if (!this.streamIsFinished) {
          const d = o.at(-1);
          if (d && d.removed === true) {
            d.removed = false;
          }
          const m = o.at(-2);
          if (d && m && m.added === true && d.value.startsWith(m.value)) {
            o = [...o.slice(0, -2), d];
          }
        }
        let a = "";
        for (const d of o) {
          if (d.removed === false) {
            a += d.value;
          }
        }
        const {
          changes: l
        } = await this.editorWorkerService.computeWordDiff_FOR_STRINGS_SMALLER_THAN_100_KB_ONLY(i, a, {
          computeMoves: false,
          ignoreTrimWhitespace: false,
          maxComputationTimeMs: 100,
          onlyCareAboutPrefixOfOriginalLines: false
        });
        if (!this.isShowing()) {
          return;
        }
        const u = this.getCurrentModelText();
        if (i !== u || e.aborted) {
          return;
        }
        this.updateVisibleSuggestionText(l);
        this.showStreamingCurrentCharacter(r);
        this.updateSuggestionGreenHighlights(o);
      }
    } finally {}
  }
  updateSuggestionGreenHighlights(e) {
    const t = this.getCurrentRange();
    if (!t) {
      return;
    }
    const {
      greenRanges: i
    } = L0u(e, t, "post-change");
    this.greenDecIds = this.model.deltaDecorations(this.greenDecIds, i.map(r => ({
      range: {
        startLineNumber: r.startLineNumber,
        startColumn: r.startColumn,
        endLineNumber: r.endLineNumber,
        endColumn: r.endColumn
      },
      options: {
        description: "green",
        className: "token-streaming-diff-green-background",
        stickiness: 1
      }
    })));
  }
  revertGreenHighlights() {
    if (this.greenDecIds.length > 0) {
      this.model.deltaDecorations(this.greenDecIds, []);
      this.greenDecIds = [];
    }
  }
  showStreamingCurrentCharacter(e) {
    if (this.streamIsFinished) {
      this.revertStreamingCurrentCharacter();
      return;
    }
    const t = this.model.getDecorationRange(this.decorationId);
    if (!t) {
      return;
    }
    const i = e.split(`
`);
    const r = i.at(-1);
    if (r === undefined) {
      return;
    }
    const s = r.length;
    const o = t.startLineNumber + i.length - 1;
    const a = Math.max(i.length === 1 ? Math.max(t.startColumn + s - 1, t.startColumn) : s - 1, 1);
    const l = {
      startLineNumber: o,
      startColumn: a,
      endLineNumber: o,
      endColumn: a + 2
    };
    const d = {
      range: this.model.validateRange(l),
      options: {
        description: "token streaming diff streaming",
        className: e.length === 0 ? "cpp-suggestion-text-decoration-debug-streaming-pending" : "cpp-suggestion-text-decoration-debug-streaming",
        stickiness: 1
      }
    };
    this.streamingCurrentCharacterDecorationId = this.model.deltaDecorations(this.streamingCurrentCharacterDecorationId ? [this.streamingCurrentCharacterDecorationId] : [], [d]).at(0);
  }
  revertStreamingCurrentCharacter() {
    if (this.streamingCurrentCharacterDecorationId) {
      this.model.deltaDecorations([this.streamingCurrentCharacterDecorationId], []);
      this.streamingCurrentCharacterDecorationId = undefined;
    }
  }
  updateVisibleSuggestionText(e) {
    let t = this.model.getDecorationRange(this.decorationId);
    if (!t) {
      return;
    }
    let i = t.startLineNumber;
    let r = t.startColumn;
    let s = [];
    for (const o of e) {
      const a = o.value.split(`
`);
      const l = i + a.length - 1;
      const u = a.length > 1 ? a[a.length - 1].length + 1 : r + o.value.length;
      if (o.added === true) {
        s.push({
          range: new Zt(i, r, i, r),
          text: o.value
        });
      } else if (o.removed === true) {
        s.push({
          range: new Zt(i, r, l, u),
          text: ""
        });
      }
      if (o.added !== true) {
        r = u;
        i = l;
      }
    }
    rvn.current = true;
    if (this.options.shouldAppendToUndoRedoGroup) {
      this.model.pushEditOperations([], s, () => null, this.undoRedoGroup);
    } else {
      this.model.applyEdits(s);
    }
  }
  saveOriginalSelectionMaybe() {
    if (this.mainEditor?.getModel()?.id !== this.model.id) {
      return;
    }
    const e = this.mainEditor.getSelection();
    const t = this.model.getDecorationRange(this.decorationId);
    if (t !== null && e !== null && e.intersectRanges(t) !== null) {
      this.mainEditor.setPosition({
        lineNumber: e.startLineNumber,
        column: e.startColumn
      }, "cpp-peek");
      this.mainEditor.setSelection(new Zt(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn), "cpp-peek");
      this.originalEditorSelection = e !== null ? e : undefined;
    }
  }
  revertOriginalSelectionMaybe() {
    if (this.mainEditor?.getModel()?.id === this.model.id && this.originalEditorSelection !== undefined) {
      this.mainEditor.setSelection(this.originalEditorSelection, "cpp-revert");
    }
  }
  async show(e) {
    if (!this.isShowing()) {
      const t = this.getNewAbortController();
      this.flusher = new e$f(async i => {
        await this.flushDisplayIntern(i);
        return v2e("success");
      }, t.signal, i => console.error(i), 50);
      this.originalText = this.getCurrentModelText();
      this.saveOriginalSelectionMaybe();
    }
    if (e?.dontFlush !== true) {
      await this.flushDisplay();
    }
  }
  async revertSuggestionText(e, t) {
    if (this.model.getDecorationRange(this.decorationId)) {
      const r = this.getCurrentModelText();
      const {
        changes: s
      } = await this.diffingService.wordDiff(r, e);
      if (this.isShowing()) {
        return;
      }
      const o = this.getCurrentModelText();
      if (r !== o || t.aborted) {
        return;
      }
      this.updateVisibleSuggestionText(s);
    }
  }
  async accept() {
    if (!this.isShowing()) {
      await this.show();
    }
    this.dispose();
  }
  getNewAbortController() {
    this.showingOrHidingAbortController.abort();
    this.showingOrHidingAbortController = new AbortController();
    return this.showingOrHidingAbortController;
  }
  async hide() {
    if (this.isShowing()) {
      const e = this.getNewAbortController();
      const t = this.originalText ?? "";
      this.originalText = undefined;
      await this.revertSuggestionText(t, e.signal);
      if (e.signal.aborted) {
        return;
      }
      this.revertStreamingCurrentCharacter();
      this.revertGreenHighlights();
      this.revertOriginalSelectionMaybe();
    }
  }
  dispose() {
    super.dispose();
    this.model.deltaDecorations([this.decorationId], []);
    this.revertGreenHighlights();
    this.revertStreamingCurrentCharacter();
  }
  getCurrentRange() {
    return this.model.getDecorationRange(this.decorationId);
  }
  getCurrentModelText() {
    const e = this.model.getDecorationRange(this.decorationId);
    if (e === null) {
      return "";
    } else {
      return this.model.getValueInRange(e);
    }
  }
};
hDa = __decorate([__param(4, Kbn), __param(5, fl), __param(6, c_)], hDa);
