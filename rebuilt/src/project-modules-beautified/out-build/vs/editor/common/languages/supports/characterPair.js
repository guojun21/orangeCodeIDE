"use strict";

// Module: out-build/vs/editor/common/languages/supports/characterPair.js
// Offset: 738846 (bundle byte offset)
// Size: 1730 bytes
Xze();
Dch = class uad {
  static {
    this.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES = `;:.,=}])> 
	`;
  }
  static {
    this.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS = `'"\`;:.,=}])> 
	`;
  }
  static {
    this.DEFAULT_AUTOCLOSE_BEFORE_WHITESPACE = ` 
	`;
  }
  constructor(e) {
    if (e.autoClosingPairs) {
      this._autoClosingPairs = e.autoClosingPairs.map(t => new YFo(t));
    } else if (e.brackets) {
      this._autoClosingPairs = e.brackets.map(t => new YFo({
        open: t[0],
        close: t[1]
      }));
    } else {
      this._autoClosingPairs = [];
    }
    if (e.__electricCharacterSupport && e.__electricCharacterSupport.docComment) {
      const t = e.__electricCharacterSupport.docComment;
      this._autoClosingPairs.push(new YFo({
        open: t.open,
        close: t.close || ""
      }));
    }
    this._autoCloseBeforeForQuotes = typeof e.autoCloseBefore == "string" ? e.autoCloseBefore : uad.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES;
    this._autoCloseBeforeForBrackets = typeof e.autoCloseBefore == "string" ? e.autoCloseBefore : uad.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS;
    this._surroundingPairs = e.surroundingPairs || this._autoClosingPairs;
  }
  getAutoClosingPairs() {
    return this._autoClosingPairs;
  }
  getAutoCloseBeforeSet(e) {
    if (e) {
      return this._autoCloseBeforeForQuotes;
    } else {
      return this._autoCloseBeforeForBrackets;
    }
  }
  getSurroundingPairs() {
    return this._surroundingPairs;
  }
};
