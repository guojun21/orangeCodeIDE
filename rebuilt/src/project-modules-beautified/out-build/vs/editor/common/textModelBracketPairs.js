"use strict";

// Module: out-build/vs/editor/common/textModelBracketPairs.js
// Offset: 1054513 (bundle byte offset)
// Size: 658 bytes
kEc = class {
  constructor(n, e, t, i) {
    this.range = n;
    this.nestingLevel = e;
    this.nestingLevelOfEqualBracketType = t;
    this.isInvalid = i;
  }
};
uph = class {
  constructor(n, e, t, i, r, s) {
    this.range = n;
    this.openingBracketRange = e;
    this.closingBracketRange = t;
    this.nestingLevel = i;
    this.nestingLevelOfEqualBracketType = r;
    this.bracketPairNode = s;
  }
  get openingBracketInfo() {
    return this.bracketPairNode.openingBracket.bracketInfo;
  }
  get closingBracketInfo() {
    return this.bracketPairNode.closingBracket?.bracketInfo;
  }
};
dph = class extends uph {
  constructor(n, e, t, i, r, s, o) {
    super(n, e, t, i, r, s);
    this.minVisibleColumnIndentation = o;
  }
};
