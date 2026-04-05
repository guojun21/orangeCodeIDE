"use strict";

// Module: out-build/vs/editor/common/viewEvents.js
// Offset: 1324845 (bundle byte offset)
// Size: 3039 bytes
(function (n) {
  n[n.ViewCompositionStart = 0] = "ViewCompositionStart";
  n[n.ViewCompositionEnd = 1] = "ViewCompositionEnd";
  n[n.ViewConfigurationChanged = 2] = "ViewConfigurationChanged";
  n[n.ViewCursorStateChanged = 3] = "ViewCursorStateChanged";
  n[n.ViewDecorationsChanged = 4] = "ViewDecorationsChanged";
  n[n.ViewFlushed = 5] = "ViewFlushed";
  n[n.ViewFocusChanged = 6] = "ViewFocusChanged";
  n[n.ViewLanguageConfigurationChanged = 7] = "ViewLanguageConfigurationChanged";
  n[n.ViewLineMappingChanged = 8] = "ViewLineMappingChanged";
  n[n.ViewLinesChanged = 9] = "ViewLinesChanged";
  n[n.ViewLinesDeleted = 10] = "ViewLinesDeleted";
  n[n.ViewLinesInserted = 11] = "ViewLinesInserted";
  n[n.ViewRevealRangeRequest = 12] = "ViewRevealRangeRequest";
  n[n.ViewScrollChanged = 13] = "ViewScrollChanged";
  n[n.ViewThemeChanged = 14] = "ViewThemeChanged";
  n[n.ViewTokensChanged = 15] = "ViewTokensChanged";
  n[n.ViewTokensColorsChanged = 16] = "ViewTokensColorsChanged";
  n[n.ViewZonesChanged = 17] = "ViewZonesChanged";
})(Jfh ||= {});
Gfh = class {
  constructor() {
    this.type = 0;
  }
};
Wfh = class {
  constructor() {
    this.type = 1;
  }
};
Qfh = class {
  constructor(n) {
    this.type = 2;
    this._source = n;
  }
  hasChanged(n) {
    return this._source.hasChanged(n);
  }
};
jfh = class {
  constructor(n, e, t) {
    this.selections = n;
    this.modelSelections = e;
    this.reason = t;
    this.type = 3;
  }
};
FVe = class {
  constructor(n) {
    this.type = 4;
    if (n) {
      this.affectsMinimap = n.affectsMinimap;
      this.affectsOverviewRuler = n.affectsOverviewRuler;
      this.affectsGlyphMargin = n.affectsGlyphMargin;
      this.affectsLineNumber = n.affectsLineNumber;
    } else {
      this.affectsMinimap = true;
      this.affectsOverviewRuler = true;
      this.affectsGlyphMargin = true;
      this.affectsLineNumber = true;
    }
  }
};
FOn = class {
  constructor() {
    this.type = 5;
  }
};
zfh = class {
  constructor(n) {
    this.type = 6;
    this.isFocused = n;
  }
};
Vfh = class {
  constructor() {
    this.type = 7;
  }
};
OOn = class {
  constructor() {
    this.type = 8;
  }
};
Oxc = class {
  constructor(n, e) {
    this.fromLineNumber = n;
    this.count = e;
    this.type = 9;
  }
};
GOo = class {
  constructor(n, e) {
    this.type = 10;
    this.fromLineNumber = n;
    this.toLineNumber = e;
  }
};
WOo = class {
  constructor(n, e) {
    this.type = 11;
    this.fromLineNumber = n;
    this.toLineNumber = e;
  }
};
(function (n) {
  n[n.Simple = 0] = "Simple";
  n[n.Center = 1] = "Center";
  n[n.CenterIfOutsideViewport = 2] = "CenterIfOutsideViewport";
  n[n.Top = 3] = "Top";
  n[n.Bottom = 4] = "Bottom";
  n[n.NearTop = 5] = "NearTop";
  n[n.NearTopIfOutsideViewport = 6] = "NearTopIfOutsideViewport";
})(Kfh ||= {});
jOt = class {
  constructor(n, e, t, i, r, s, o) {
    this.source = n;
    this.minimalReveal = e;
    this.range = t;
    this.selections = i;
    this.verticalType = r;
    this.revealHorizontal = s;
    this.scrollType = o;
    this.type = 12;
  }
};
Yfh = class {
  constructor(n) {
    this.type = 13;
    this.scrollWidth = n.scrollWidth;
    this.scrollLeft = n.scrollLeft;
    this.scrollHeight = n.scrollHeight;
    this.scrollTop = n.scrollTop;
    this.scrollWidthChanged = n.scrollWidthChanged;
    this.scrollLeftChanged = n.scrollLeftChanged;
    this.scrollHeightChanged = n.scrollHeightChanged;
    this.scrollTopChanged = n.scrollTopChanged;
  }
};
Zfh = class {
  constructor(n) {
    this.theme = n;
    this.type = 14;
  }
};
Xfh = class {
  constructor(n) {
    this.type = 15;
    this.ranges = n;
  }
};
ebh = class {
  constructor() {
    this.type = 16;
  }
};
tbh = class {
  constructor() {
    this.type = 17;
  }
};
