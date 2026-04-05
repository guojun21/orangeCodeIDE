"use strict";

// Module: out-build/vs/editor/browser/widget/diffEditor/diffEditorOptions.js
// Offset: 2271201 (bundle byte offset)
// Size: 3697 bytes
Uc();
zg();
RCh();
pk();
k5o();
B3n = class {
  get editorOptions() {
    return this._options;
  }
  constructor(e, t) {
    this._accessibilityService = t;
    this._diffEditorWidth = Ua(this, 0);
    this._screenReaderMode = tp(this, this._accessibilityService.onDidChangeScreenReaderOptimized, () => this._accessibilityService.isScreenReaderOptimized());
    this.couldShowInlineViewBecauseOfSize = Ro(this, r => this._options.read(r).renderSideBySide && this._diffEditorWidth.read(r) <= this._options.read(r).renderSideBySideInlineBreakpoint);
    this.renderOverviewRuler = Ro(this, r => this._options.read(r).renderOverviewRuler);
    this.renderSideBySide = Ro(this, r => this.compactMode.read(r) && this.shouldRenderInlineViewInSmartMode.read(r) ? false : this._options.read(r).renderSideBySide && (!this._options.read(r).useInlineViewWhenSpaceIsLimited || !this.couldShowInlineViewBecauseOfSize.read(r) || !!this._screenReaderMode.read(r)));
    this.readOnly = Ro(this, r => this._options.read(r).readOnly);
    this.shouldRenderOldRevertArrows = Ro(this, r => !!this._options.read(r).renderMarginRevertIcon && !!this.renderSideBySide.read(r) && !this.readOnly.read(r) && !this.shouldRenderGutterMenu.read(r));
    this.shouldRenderGutterMenu = Ro(this, r => this._options.read(r).renderGutterMenu);
    this.renderIndicators = Ro(this, r => this._options.read(r).renderIndicators);
    this.enableSplitViewResizing = Ro(this, r => this._options.read(r).enableSplitViewResizing);
    this.splitViewDefaultRatio = Ro(this, r => this._options.read(r).splitViewDefaultRatio);
    this.ignoreTrimWhitespace = Ro(this, r => this._options.read(r).ignoreTrimWhitespace);
    this.maxComputationTimeMs = Ro(this, r => this._options.read(r).maxComputationTime);
    this.showMoves = Ro(this, r => this._options.read(r).experimental.showMoves && this.renderSideBySide.read(r));
    this.isInEmbeddedEditor = Ro(this, r => this._options.read(r).isInEmbeddedEditor);
    this.diffWordWrap = Ro(this, r => this._options.read(r).diffWordWrap);
    this.originalEditable = Ro(this, r => this._options.read(r).originalEditable);
    this.diffCodeLens = Ro(this, r => this._options.read(r).diffCodeLens);
    this.accessibilityVerbose = Ro(this, r => this._options.read(r).accessibilityVerbose);
    this.diffAlgorithm = Ro(this, r => this._options.read(r).diffAlgorithm);
    this.showEmptyDecorations = Ro(this, r => this._options.read(r).experimental.showEmptyDecorations);
    this.onlyShowAccessibleDiffViewer = Ro(this, r => this._options.read(r).onlyShowAccessibleDiffViewer);
    this.compactMode = Ro(this, r => this._options.read(r).compactMode);
    this.trueInlineDiffRenderingEnabled = Ro(this, r => this._options.read(r).experimental.useTrueInlineView);
    this.useTrueInlineDiffRendering = Ro(this, r => !this.renderSideBySide.read(r) && this.trueInlineDiffRenderingEnabled.read(r));
    this.hideUnchangedRegions = Ro(this, r => this._options.read(r).hideUnchangedRegions.enabled);
    this.hideUnchangedRegionsRevealLineCount = Ro(this, r => this._options.read(r).hideUnchangedRegions.revealLineCount);
    this.hideUnchangedRegionsContextLineCount = Ro(this, r => this._options.read(r).hideUnchangedRegions.contextLineCount);
    this.hideUnchangedRegionsMinimumLineCount = Ro(this, r => this._options.read(r).hideUnchangedRegions.minimumLineCount);
    this._model = Ua(this, undefined);
    this.shouldRenderInlineViewInSmartMode = this._model.map(this, r => znA(this, s => {
      const o = r?.diff.read(s);
      if (o) {
        return thA(o, this.trueInlineDiffRenderingEnabled.read(s));
      } else {
        return undefined;
      }
    })).flatten().map(this, r => !!r);
    this.inlineViewHideOriginalLineNumbers = this.compactMode;
    const i = {
      ...e,
      ...PCh(e, U6)
    };
    this._options = Ua(this, i);
  }
  updateOptions(e) {
    const t = PCh(e, this._options.get());
    const i = {
      ...this._options.get(),
      ...e,
      ...t
    };
    this._options.set(i, undefined, {
      changedOptions: e
    });
  }
  setWidth(e) {
    this._diffEditorWidth.set(e, undefined);
  }
  setModel(e) {
    this._model.set(e, undefined);
  }
};
B3n = __decorate([__param(1, Cf)], B3n);
