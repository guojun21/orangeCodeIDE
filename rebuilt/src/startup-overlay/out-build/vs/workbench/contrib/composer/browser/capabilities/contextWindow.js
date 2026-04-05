"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/capabilities/contextWindow.js
// Offset: 30374626 (bundle byte offset)
// Size: 3666 bytes
Uv();
SI();
S$e();
cp();
Fwi = class extends Pq {
  constructor(e, t, i) {
    super(e, t, i);
    this.priority = 100;
    this.type = ko.CONTEXT_WINDOW;
    this.name = Jtt[ko.CONTEXT_WINDOW];
    this.schema = {};
  }
  static getContextUsagePercentage(e, t) {
    try {
      return t.getComposerDataIfLoaded(e)?.contextUsagePercent;
    } catch {
      return;
    }
  }
  static getContextTokenData(e, t) {
    try {
      const i = t.getComposerDataIfLoaded(e);
      const r = i?.contextTokensUsed;
      const s = i?.contextTokenLimit;
      if (r !== undefined && s !== undefined) {
        return {
          tokensUsed: r,
          tokenLimit: s
        };
      } else {
        return undefined;
      }
    } catch {
      return;
    }
  }
  static getContextWindowStatus(e, t) {
    try {
      const i = t.getComposerDataIfLoaded(e);
      const r = i?.contextUsagePercent;
      const s = i?.contextTokensUsed;
      const o = i?.contextTokenLimit;
      if (r !== undefined) {
        return {
          percentageRemaining: 100 - r,
          tokensUsed: s,
          tokenLimit: o
        };
      } else {
        return undefined;
      }
    } catch {
      return;
    }
  }
};
Fwi = __decorate([__param(2, Oa)], Fwi);
ace(ko.CONTEXT_WINDOW, Fwi);
