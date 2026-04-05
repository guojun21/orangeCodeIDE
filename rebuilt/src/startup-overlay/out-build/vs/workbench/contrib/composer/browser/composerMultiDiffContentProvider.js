"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerMultiDiffContentProvider.js
// Offset: 34028304 (bundle byte offset)
// Size: 599 bytes
Ku();
hd();
tBa = class {
  constructor(e, t, i) {
    this.contents = e;
    this.languageService = t;
    this.modelService = i;
  }
  async provideTextContent(e) {
    const t = this.modelService.getModel(e);
    if (t && !t.isDisposed()) {
      t.setValue(this.contents);
      return t;
    }
    let i = this.languageService.guessLanguageIdByFilepathOrFirstLine(e);
    if (i && !i.startsWith("worktree-")) {
      i = "worktree-" + i;
    }
    return this.modelService.createModel(this.contents, this.languageService.createById(i), e, false, false, false);
  }
};
tBa = __decorate([__param(1, Jl), __param(2, Il)], tBa);
