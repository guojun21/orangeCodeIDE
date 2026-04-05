"use strict";

// Module: out-build/vs/editor/common/cursorCommon.js
// Offset: 686843 (bundle byte offset)
// Size: 5663 bytes
tl();
ts();
db();
u4n();
koe();
Pkc();
$Fo();
(function (n) {
  n[n.Other = 0] = "Other";
  n[n.DeletingLeft = 2] = "DeletingLeft";
  n[n.DeletingRight = 3] = "DeletingRight";
  n[n.TypingOther = 4] = "TypingOther";
  n[n.TypingFirstSpace = 5] = "TypingFirstSpace";
  n[n.TypingConsecutiveSpace = 6] = "TypingConsecutiveSpace";
})(uch ||= {});
dch = () => true;
hch = () => false;
mch = n => n === " " || n === "\t";
Yze = class {
  static shouldRecreate(n) {
    return n.hasChanged(151) || n.hasChanged(136) || n.hasChanged(38) || n.hasChanged(78) || n.hasChanged(80) || n.hasChanged(81) || n.hasChanged(6) || n.hasChanged(7) || n.hasChanged(11) || n.hasChanged(9) || n.hasChanged(10) || n.hasChanged(14) || n.hasChanged(133) || n.hasChanged(52) || n.hasChanged(96) || n.hasChanged(135) || n.hasChanged(85);
  }
  constructor(n, e, t, i) {
    this.languageConfigurationService = i;
    this._cursorMoveConfigurationBrand = undefined;
    this._languageId = n;
    const r = t.options;
    const s = r.get(151);
    const o = r.get(52);
    this.readOnly = r.get(96);
    this.tabSize = e.tabSize;
    this.indentSize = e.indentSize;
    this.insertSpaces = e.insertSpaces;
    this.stickyTabStops = r.get(121);
    this.lineHeight = o.lineHeight;
    this.typicalHalfwidthCharacterWidth = o.typicalHalfwidthCharacterWidth;
    this.pageSize = Math.max(1, Math.floor(s.height / this.lineHeight) - 2);
    this.useTabStops = r.get(133);
    this.wordSeparators = r.get(136);
    this.emptySelectionClipboard = r.get(38);
    this.copyWithSyntaxHighlighting = r.get(25);
    this.multiCursorMergeOverlapping = r.get(78);
    this.multiCursorPaste = r.get(80);
    this.multiCursorLimit = r.get(81);
    this.autoClosingBrackets = r.get(6);
    this.autoClosingComments = r.get(7);
    this.autoClosingQuotes = r.get(11);
    this.autoClosingDelete = r.get(9);
    this.autoClosingOvertype = r.get(10);
    this.autoSurround = r.get(14);
    this.autoIndent = r.get(12);
    this.wordSegmenterLocales = r.get(135);
    this.overtypeOnPaste = r.get(85);
    this.surroundingPairs = {};
    this._electricChars = null;
    this.shouldAutoCloseBefore = {
      quote: this._getShouldAutoClose(n, this.autoClosingQuotes, true),
      comment: this._getShouldAutoClose(n, this.autoClosingComments, false),
      bracket: this._getShouldAutoClose(n, this.autoClosingBrackets, false)
    };
    this.autoClosingPairs = this.languageConfigurationService.getLanguageConfiguration(n).getAutoClosingPairs();
    const a = this.languageConfigurationService.getLanguageConfiguration(n).getSurroundingPairs();
    if (a) {
      for (const u of a) {
        this.surroundingPairs[u.open] = u.close;
      }
    }
    const l = this.languageConfigurationService.getLanguageConfiguration(n).comments;
    this.blockCommentStartToken = l?.blockCommentStartToken ?? null;
  }
  get electricChars() {
    if (!this._electricChars) {
      this._electricChars = {};
      const n = this.languageConfigurationService.getLanguageConfiguration(this._languageId).electricCharacter?.getElectricCharacters();
      if (n) {
        for (const e of n) {
          this._electricChars[e] = true;
        }
      }
    }
    return this._electricChars;
  }
  get inputMode() {
    return Vze.getInputMode();
  }
  onElectricCharacter(n, e, t) {
    const i = Zgt(e, t - 1);
    const r = this.languageConfigurationService.getLanguageConfiguration(i.languageId).electricCharacter;
    if (r) {
      return r.onElectricCharacter(n, i, t - i.firstCharOffset);
    } else {
      return null;
    }
  }
  normalizeIndentation(n) {
    return Rkc(n, this.indentSize, this.insertSpaces);
  }
  _getShouldAutoClose(n, e, t) {
    switch (e) {
      case "beforeWhitespace":
        return mch;
      case "languageDefined":
        return this._getLanguageDefinedShouldAutoClose(n, t);
      case "always":
        return dch;
      case "never":
        return hch;
    }
  }
  _getLanguageDefinedShouldAutoClose(n, e) {
    const t = this.languageConfigurationService.getLanguageConfiguration(n).getAutoCloseBeforeSet(e);
    return i => t.indexOf(i) !== -1;
  }
  visibleColumnFromColumn(n, e) {
    return ZP.visibleColumnFromColumn(n.getLineContent(e.lineNumber), e.column, this.tabSize);
  }
  columnFromVisibleColumn(n, e, t) {
    const i = ZP.columnFromVisibleColumn(n.getLineContent(e), t, this.tabSize);
    const r = n.getLineMinColumn(e);
    if (i < r) {
      return r;
    }
    const s = n.getLineMaxColumn(e);
    if (i > s) {
      return s;
    } else {
      return i;
    }
  }
};
s_ = class xJb {
  static fromModelState(e) {
    return new pch(e);
  }
  static fromViewState(e) {
    return new gch(e);
  }
  static fromModelSelection(e) {
    const t = Vl.liftSelection(e);
    const i = new hW(Zt.fromPositions(t.getSelectionStart()), 0, 0, t.getPosition(), 0);
    return xJb.fromModelState(i);
  }
  static fromModelSelections(e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      t[i] = this.fromModelSelection(e[i]);
    }
    return t;
  }
  constructor(e, t) {
    this._cursorStateBrand = undefined;
    this.modelState = e;
    this.viewState = t;
  }
  equals(e) {
    return this.viewState.equals(e.viewState) && this.modelState.equals(e.modelState);
  }
};
pch = class {
  constructor(n) {
    this.modelState = n;
    this.viewState = null;
  }
};
gch = class {
  constructor(n) {
    this.modelState = null;
    this.viewState = n;
  }
};
(function (n) {
  n[n.Simple = 0] = "Simple";
  n[n.Word = 1] = "Word";
  n[n.Line = 2] = "Line";
})(fch ||= {});
hW = class GGa {
  constructor(e, t, i, r, s) {
    this.selectionStart = e;
    this.selectionStartKind = t;
    this.selectionStartLeftoverVisibleColumns = i;
    this.position = r;
    this.leftoverVisibleColumns = s;
    this._singleCursorStateBrand = undefined;
    this.selection = GGa._computeSelection(this.selectionStart, this.position);
  }
  equals(e) {
    return this.selectionStartLeftoverVisibleColumns === e.selectionStartLeftoverVisibleColumns && this.leftoverVisibleColumns === e.leftoverVisibleColumns && this.selectionStartKind === e.selectionStartKind && this.position.equals(e.position) && this.selectionStart.equalsRange(e.selectionStart);
  }
  hasSelection() {
    return !this.selection.isEmpty() || !this.selectionStart.isEmpty();
  }
  move(e, t, i, r) {
    if (e) {
      return new GGa(this.selectionStart, this.selectionStartKind, this.selectionStartLeftoverVisibleColumns, new ar(t, i), r);
    } else {
      return new GGa(new Zt(t, i, t, i), 0, r, new ar(t, i), r);
    }
  }
  static _computeSelection(e, t) {
    if (e.isEmpty() || !t.isBeforeOrEqual(e.getStartPosition())) {
      return Vl.fromPositions(e.getStartPosition(), t);
    } else {
      return Vl.fromPositions(e.getEndPosition(), t);
    }
  }
};
mW = class {
  constructor(n, e, t) {
    this._editOperationResultBrand = undefined;
    this.type = n;
    this.commands = e;
    this.shouldPushStackElementBefore = t.shouldPushStackElementBefore;
    this.shouldPushStackElementAfter = t.shouldPushStackElementAfter;
  }
};
