"use strict";

// Module: out-build/vs/editor/common/model.js
// Offset: 1051522 (bundle byte offset)
// Size: 2991 bytes
np();
rOn();
(function (n) {
  n[n.Left = 1] = "Left";
  n[n.Center = 2] = "Center";
  n[n.Right = 4] = "Right";
  n[n.Full = 7] = "Full";
})(Tx ||= {});
(function (n) {
  n[n.Left = 1] = "Left";
  n[n.Center = 2] = "Center";
  n[n.Right = 3] = "Right";
})(G$ ||= {});
(function (n) {
  n[n.Inline = 1] = "Inline";
  n[n.Gutter = 2] = "Gutter";
})(Xmh ||= {});
(function (n) {
  n[n.Normal = 1] = "Normal";
  n[n.Underlined = 2] = "Underlined";
})(eph ||= {});
(function (n) {
  n[n.Both = 0] = "Both";
  n[n.Right = 1] = "Right";
  n[n.Left = 2] = "Left";
  n[n.None = 3] = "None";
})(UH ||= {});
(function (n) {
  n[n.TextDefined = 0] = "TextDefined";
  n[n.LF = 1] = "LF";
  n[n.CRLF = 2] = "CRLF";
})(tph ||= {});
(function (n) {
  n[n.LF = 1] = "LF";
  n[n.CRLF = 2] = "CRLF";
})(nph ||= {});
(function (n) {
  n[n.LF = 0] = "LF";
  n[n.CRLF = 1] = "CRLF";
})(iph ||= {});
nOo = class {
  get originalIndentSize() {
    if (this._indentSizeIsTabSize) {
      return "tabSize";
    } else {
      return this.indentSize;
    }
  }
  constructor(n) {
    this._textModelResolvedOptionsBrand = undefined;
    this.tabSize = Math.max(1, n.tabSize | 0);
    if (n.indentSize === "tabSize") {
      this.indentSize = this.tabSize;
      this._indentSizeIsTabSize = true;
    } else {
      this.indentSize = Math.max(1, n.indentSize | 0);
      this._indentSizeIsTabSize = false;
    }
    this.insertSpaces = !!n.insertSpaces;
    this.defaultEOL = n.defaultEOL | 0;
    this.trimAutoWhitespace = !!n.trimAutoWhitespace;
    this.bracketPairColorizationOptions = n.bracketPairColorizationOptions;
  }
  equals(n) {
    return this.tabSize === n.tabSize && this._indentSizeIsTabSize === n._indentSizeIsTabSize && this.indentSize === n.indentSize && this.insertSpaces === n.insertSpaces && this.defaultEOL === n.defaultEOL && this.trimAutoWhitespace === n.trimAutoWhitespace && fv(this.bracketPairColorizationOptions, n.bracketPairColorizationOptions);
  }
  createChangeEvent(n) {
    return {
      tabSize: this.tabSize !== n.tabSize,
      indentSize: this.indentSize !== n.indentSize,
      insertSpaces: this.insertSpaces !== n.insertSpaces,
      trimAutoWhitespace: this.trimAutoWhitespace !== n.trimAutoWhitespace
    };
  }
};
SOt = class {
  constructor(n, e) {
    this._findMatchBrand = undefined;
    this.range = n;
    this.matches = e;
  }
};
(function (n) {
  n[n.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges";
  n[n.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges";
  n[n.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore";
  n[n.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(rph ||= {});
sph = () => ({
  topPromptBarData: {
    selections: [],
    selectedDocs: [],
    lastGenerationUUID: undefined,
    diffIds: [],
    initText: "",
    userBubbleDelegate: new Z5e(),
    shown: false
  }
});
(function (n) {
  n[n.Left = 0] = "Left";
  n[n.Right = 1] = "Right";
  n[n.None = 2] = "None";
  n[n.LeftOfInjectedText = 3] = "LeftOfInjectedText";
  n[n.RightOfInjectedText = 4] = "RightOfInjectedText";
})(oph ||= {});
(function (n) {
  n[n.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1000] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(aph ||= {});
sOn = class {
  constructor(n, e, t, i, r, s) {
    this.identifier = n;
    this.range = e;
    this.text = t;
    this.forceMoveMarkers = i;
    this.isAutoWhitespaceEdit = r;
    this._isTracked = s;
  }
};
cph = class {
  constructor(n, e, t) {
    this.regex = n;
    this.wordSeparators = e;
    this.simpleSearch = t;
  }
};
lph = class {
  constructor(n, e, t) {
    this.reverseEdits = n;
    this.changes = e;
    this.trimAutoWhitespaceLineNumbers = t;
  }
};
