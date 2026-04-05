"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/diffCellEditorOptions.js
// Offset: 33525824 (bundle byte offset)
// Size: 894 bytes
m6f = {
  top: 24,
  bottom: 24
};
I_u = {
  top: 12,
  bottom: 12
};
Tki = {
  padding: I_u,
  scrollBeyondLastLine: false,
  scrollbar: {
    verticalScrollbarSize: 14,
    horizontal: "auto",
    vertical: "auto",
    useShadows: true,
    verticalHasArrows: false,
    horizontalHasArrows: false,
    alwaysConsumeMouseWheel: false
  },
  renderLineHighlightOnlyWhenFocus: true,
  overviewRulerLanes: 0,
  overviewRulerBorder: false,
  selectOnLineNumbers: false,
  wordWrap: "off",
  lineNumbers: "off",
  glyphMargin: true,
  fixedOverflowWidgets: true,
  minimap: {
    enabled: false
  },
  renderValidationDecorations: "on",
  renderLineHighlight: "none",
  readOnly: true
};
Iki = {
  ...Tki,
  glyphMargin: true,
  enableSplitViewResizing: false,
  renderIndicators: true,
  renderMarginRevertIcon: false,
  readOnly: false,
  isInEmbeddedEditor: true,
  renderOverviewRuler: false,
  wordWrap: "off",
  diffWordWrap: "off",
  diffAlgorithm: "advanced",
  renderSideBySide: true,
  useInlineViewWhenSpaceIsLimited: false
};
