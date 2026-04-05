// Module: out-build/vs/editor/common/config/diffEditor.js
// Offset: 2268026 (bundle byte offset)
// Size: 3175 bytes

U6={
  enableSplitViewResizing:!0, splitViewDefaultRatio:.5, renderSideBySide:!0, renderMarginRevertIcon:!0, renderGutterMenu:!0, maxComputationTime:5e3, maxFileSize:50, ignoreTrimWhitespace:!0, renderIndicators:!0, originalEditable:!1, diffCodeLens:!1, renderOverviewRuler:!0, diffWordWrap:"inherit", diffAlgorithm:"advanced", accessibilityVerbose:!1, experimental:{
    showMoves:!1, showEmptyDecorations:!0, useTrueInlineView:!1
  }, hideUnchangedRegions:{
    enabled:!1, contextLineCount:3, minimumLineCount:3, revealLineCount:20
  }, isInEmbeddedEditor:!1, onlyShowAccessibleDiffViewer:!1, renderSideBySideInlineBreakpoint:900, useInlineViewWhenSpaceIsLimited:!0, compactMode:!1
}
}
});
function thA(n, e){
  return n.mappings.every(t=>nhA(t.lineRangeMapping)||ihA(t.lineRangeMapping)||e&&qDc(t.lineRangeMapping))
}
function nhA(n){
  return n.original.length===0
}
function ihA(n){
  return n.modified.length===0
}
function PCh(n, e){
  return{
    enableSplitViewResizing:sp(n.enableSplitViewResizing, e.enableSplitViewResizing), splitViewDefaultRatio:soA(n.splitViewDefaultRatio, .5, .1, .9), renderSideBySide:sp(n.renderSideBySide, e.renderSideBySide), renderMarginRevertIcon:sp(n.renderMarginRevertIcon, e.renderMarginRevertIcon), maxComputationTime:Aft(n.maxComputationTime, e.maxComputationTime, 0, 1073741824), maxFileSize:Aft(n.maxFileSize, e.maxFileSize, 0, 1073741824), ignoreTrimWhitespace:sp(n.ignoreTrimWhitespace, e.ignoreTrimWhitespace), renderIndicators:sp(n.renderIndicators, e.renderIndicators), originalEditable:sp(n.originalEditable, e.originalEditable), diffCodeLens:sp(n.diffCodeLens, e.diffCodeLens), renderOverviewRuler:sp(n.renderOverviewRuler, e.renderOverviewRuler), diffWordWrap:WI(n.diffWordWrap, e.diffWordWrap, ["off", "on", "inherit"]), diffAlgorithm:WI(n.diffAlgorithm, e.diffAlgorithm, ["legacy", "advanced"], {
      smart:"legacy",experimental:"advanced"
    }), accessibilityVerbose:sp(n.accessibilityVerbose, e.accessibilityVerbose), experimental:{
      showMoves:sp(n.experimental?.showMoves,e.experimental.showMoves),showEmptyDecorations:sp(n.experimental?.showEmptyDecorations,e.experimental.showEmptyDecorations),useTrueInlineView:sp(n.experimental?.useTrueInlineView,e.experimental.useTrueInlineView)
    }, hideUnchangedRegions:{
      enabled:sp(n.hideUnchangedRegions?.enabled??n.experimental?.collapseUnchangedRegions,e.hideUnchangedRegions.enabled),contextLineCount:Aft(n.hideUnchangedRegions?.contextLineCount,e.hideUnchangedRegions.contextLineCount,0,1073741824),minimumLineCount:Aft(n.hideUnchangedRegions?.minimumLineCount,e.hideUnchangedRegions.minimumLineCount,0,1073741824),revealLineCount:Aft(n.hideUnchangedRegions?.revealLineCount,e.hideUnchangedRegions.revealLineCount,0,1073741824)
    }, isInEmbeddedEditor:sp(n.isInEmbeddedEditor, e.isInEmbeddedEditor), onlyShowAccessibleDiffViewer:sp(n.onlyShowAccessibleDiffViewer, e.onlyShowAccessibleDiffViewer), renderSideBySideInlineBreakpoint:Aft(n.renderSideBySideInlineBreakpoint, e.renderSideBySideInlineBreakpoint, 0, 1073741824), useInlineViewWhenSpaceIsLimited:sp(n.useInlineViewWhenSpaceIsLimited, e.useInlineViewWhenSpaceIsLimited), renderGutterMenu:sp(n.renderGutterMenu, e.renderGutterMenu), compactMode:sp(n.compactMode, e.compactMode)
  }
}
var B3n, LCh=