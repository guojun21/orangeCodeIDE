"use strict";

// Module: out-build/vs/editor/common/languages/languageConfiguration.js
// Offset: 735675 (bundle byte offset)
// Size: 2962 bytes
(function (n) {
  n[n.None = 0] = "None";
  n[n.Indent = 1] = "Indent";
  n[n.IndentOutdent = 2] = "IndentOutdent";
  n[n.Outdent = 3] = "Outdent";
})($R ||= {});
YFo = class {
  constructor(n) {
    this._neutralCharacter = null;
    this._neutralCharacterSearched = false;
    this.open = n.open;
    this.close = n.close;
    this._inString = true;
    this._inComment = true;
    this._inRegEx = true;
    if (Array.isArray(n.notIn)) {
      for (let e = 0, t = n.notIn.length; e < t; e++) {
        switch (n.notIn[e]) {
          case "string":
            this._inString = false;
            break;
          case "comment":
            this._inComment = false;
            break;
          case "regex":
            this._inRegEx = false;
            break;
        }
      }
    }
  }
  isOK(n) {
    switch (n) {
      case 0:
        return true;
      case 1:
        return this._inComment;
      case 2:
        return this._inString;
      case 3:
        return this._inRegEx;
    }
  }
  shouldAutoClose(n, e) {
    if (n.getTokenCount() === 0) {
      return true;
    }
    const t = n.findTokenIndexAtOffset(e - 2);
    const i = n.getStandardTokenType(t);
    return this.isOK(i);
  }
  _findNeutralCharacterInRange(n, e) {
    for (let t = n; t <= e; t++) {
      const i = String.fromCharCode(t);
      if (!this.open.includes(i) && !this.close.includes(i)) {
        return i;
      }
    }
    return null;
  }
  findNeutralCharacter() {
    if (!this._neutralCharacterSearched) {
      this._neutralCharacterSearched = true;
      this._neutralCharacter ||= this._findNeutralCharacterInRange(48, 57);
      this._neutralCharacter ||= this._findNeutralCharacterInRange(97, 122);
      this._neutralCharacter ||= this._findNeutralCharacterInRange(65, 90);
    }
    return this._neutralCharacter;
  }
};
Ich = class {
  constructor(n) {
    this.autoClosingPairsOpenByStart = new Map();
    this.autoClosingPairsOpenByEnd = new Map();
    this.autoClosingPairsCloseByStart = new Map();
    this.autoClosingPairsCloseByEnd = new Map();
    this.autoClosingPairsCloseSingleChar = new Map();
    for (const e of n) {
      b4n(this.autoClosingPairsOpenByStart, e.open.charAt(0), e);
      b4n(this.autoClosingPairsOpenByEnd, e.open.charAt(e.open.length - 1), e);
      b4n(this.autoClosingPairsCloseByStart, e.close.charAt(0), e);
      b4n(this.autoClosingPairsCloseByEnd, e.close.charAt(e.close.length - 1), e);
      if (e.close.length === 1 && e.open.length === 1) {
        b4n(this.autoClosingPairsCloseSingleChar, e.close, e);
      }
    }
  }
};
