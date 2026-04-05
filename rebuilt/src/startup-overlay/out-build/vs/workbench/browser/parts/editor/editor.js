"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/editor.js
// Offset: 31112127 (bundle byte offset)
// Size: 1280 bytes
ri();
Js();
Isy();
Vs();
Zye = new Lu(220, 70);
R1t = new Lu(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
R_ = {
  showTabs: "multiple",
  highlightModifiedTabs: false,
  tabActionLocation: "right",
  tabActionCloseVisibility: true,
  tabActionUnpinVisibility: true,
  alwaysShowEditorActions: false,
  tabSizing: "fit",
  tabSizingFixedMinWidth: 50,
  tabSizingFixedMaxWidth: 160,
  pinnedTabSizing: "normal",
  pinnedTabsOnSeparateRow: false,
  tabHeight: "default",
  preventPinnedEditorClose: "keyboardAndMouse",
  titleScrollbarSizing: "default",
  focusRecentEditorAfterClose: true,
  showIcons: true,
  hasIcons: true,
  enablePreview: true,
  openPositioning: "right",
  openSideBySideDirection: "right",
  closeEmptyGroups: true,
  labelFormat: "default",
  splitSizing: "auto",
  splitOnDragAndDrop: true,
  dragToOpenWindow: true,
  centeredLayoutFixedWidth: false,
  doubleClickTabToToggleEditorGroupSizes: "expand",
  editorActionsLocation: "default",
  wrapTabs: false,
  enablePreviewFromQuickOpen: false,
  scrollToSwitchTabs: false,
  enablePreviewFromCodeNavigation: false,
  closeOnFileDelete: false,
  mouseBackForwardToNavigate: true,
  restoreViewState: true,
  splitInGroupLayout: "horizontal",
  revealIfOpen: false,
  get limit() {
    return {
      enabled: false,
      value: 10,
      perEditorGroup: false,
      excludeDirty: false
    };
  },
  get decorations() {
    return {
      badges: true,
      colors: true
    };
  },
  get autoLockGroups() {
    return new Set();
  }
};
