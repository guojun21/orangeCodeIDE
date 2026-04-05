"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/notebookOptions.js
// Offset: 33405248 (bundle byte offset)
// Size: 17762 bytes
Nte();
yn();
rt();
Uc();
Js();
qft();
Oh();
MSe();
Ei();
ph();
uD();
b_u = 18;
v_u = 4;
A_u = Object.freeze({
  codeCellLeftMargin: 28,
  cellRunGutter: 32,
  markdownCellTopMargin: 8,
  markdownCellBottomMargin: 8,
  markdownCellLeftMargin: 0,
  markdownCellGutter: 32,
  focusIndicatorLeftMargin: 4
});
y_u = Object.freeze({
  codeCellLeftMargin: 8,
  cellRunGutter: 36,
  markdownCellTopMargin: 6,
  markdownCellBottomMargin: 6,
  markdownCellLeftMargin: 8,
  markdownCellGutter: 36,
  focusIndicatorLeftMargin: 4
});
Trt = class extends at {
  constructor(e, t, i, r, s, o) {
    super();
    this.targetWindow = e;
    this.isReadonly = t;
    this.overrides = i;
    this.configurationService = r;
    this.notebookExecutionStateService = s;
    this.codeEditorService = o;
    this._onDidChangeOptions = this._register(new Qe());
    this.onDidChangeOptions = this._onDidChangeOptions.event;
    this._editorTopPadding = 12;
    this.previousModelToCompare = Ua("previousModelToCompare", undefined);
    const a = this.configurationService.getValue(yo.showCellStatusBar);
    const l = i?.globalToolbar ?? this.configurationService.getValue(yo.globalToolbar) ?? true;
    const u = i?.stickyScrollEnabled ?? this.configurationService.getValue(yo.stickyScrollEnabled) ?? false;
    const d = this._computeStickyScrollModeOption();
    const m = this.configurationService.getValue(yo.consolidatedOutputButton) ?? true;
    const p = this.configurationService.getValue(yo.consolidatedRunButton) ?? false;
    const g = i?.dragAndDropEnabled ?? this.configurationService.getValue(yo.dragAndDropEnabled) ?? true;
    const f = this.configurationService.getValue(yo.cellToolbarLocation) ?? {
      default: "right"
    };
    const A = i?.cellToolbarInteraction ?? this.configurationService.getValue(yo.cellToolbarVisibility);
    const w = this.configurationService.getValue(yo.compactView) ?? true;
    const C = this._computeFocusIndicatorOption();
    const x = this._computeInsertToolbarPositionOption(this.isReadonly);
    const I = this._computeInsertToolbarAlignmentOption();
    const B = this._computeShowFoldingControlsOption();
    const R = this.configurationService.getValue("editor.fontSize");
    const N = this.configurationService.getValue(yo.markupFontSize);
    const M = this.configurationService.getValue(yo.markdownLineHeight);
    let O = this.configurationService.getValue(yo.cellEditorOptionsCustomizations) ?? {};
    O = $g(O) ? O : {};
    const $ = this.configurationService.getValue(yo.interactiveWindowCollapseCodeCells);
    let H;
    const W = this.configurationService.getValue(yo.outputLineHeightDeprecated);
    if (W !== undefined) {
      this._migrateDeprecatedSetting(yo.outputLineHeightDeprecated, yo.outputLineHeight);
      H = W;
    } else {
      H = this.configurationService.getValue(yo.outputLineHeight);
    }
    let z;
    const Y = this.configurationService.getValue(yo.outputFontSizeDeprecated);
    if (Y !== undefined) {
      this._migrateDeprecatedSetting(yo.outputFontSizeDeprecated, yo.outputFontSize);
      z = Y;
    } else {
      z = this.configurationService.getValue(yo.outputFontSize) || R;
    }
    let j;
    const X = this.configurationService.getValue(yo.outputFontFamilyDeprecated);
    if (X !== undefined) {
      this._migrateDeprecatedSetting(yo.outputFontFamilyDeprecated, yo.outputFontFamily);
      j = X;
    } else {
      j = this.configurationService.getValue(yo.outputFontFamily);
    }
    let ee;
    const re = this.configurationService.getValue(yo.outputScrollingDeprecated);
    if (re !== undefined) {
      this._migrateDeprecatedSetting(yo.outputScrollingDeprecated, yo.outputScrolling);
      ee = re;
    } else {
      ee = this.configurationService.getValue(yo.outputScrolling);
    }
    const ne = this._computeOutputLineHeight(H, z);
    const pe = this.configurationService.getValue(yo.outputWordWrap);
    const le = this.configurationService.getValue(yo.textOutputLineLimit) ?? 30;
    const he = this.configurationService.getValue(yo.LinkifyOutputFilePaths) ?? true;
    const be = this.configurationService.getValue(yo.minimalErrorRendering);
    const fe = this.configurationService.getValue(yo.markupFontFamily);
    const ke = this._computeEditorTopPadding();
    this._layoutConfiguration = {
      ...(w ? y_u : A_u),
      cellTopMargin: 6,
      cellBottomMargin: 6,
      cellRightMargin: 16,
      cellStatusBarHeight: 20,
      cellOutputPadding: 8,
      markdownPreviewPadding: 8,
      editorToolbarHeight: 0,
      editorTopPadding: ke,
      editorBottomPadding: 4,
      editorBottomPaddingWithoutStatusBar: 12,
      collapsedIndicatorHeight: 28,
      showCellStatusBar: a,
      globalToolbar: l,
      stickyScrollEnabled: u,
      stickyScrollMode: d,
      consolidatedOutputButton: m,
      consolidatedRunButton: p,
      dragAndDropEnabled: g,
      cellToolbarLocation: f,
      cellToolbarInteraction: A,
      compactView: w,
      focusIndicator: C,
      insertToolbarPosition: x,
      insertToolbarAlignment: I,
      showFoldingControls: B,
      fontSize: R,
      outputFontSize: z,
      outputFontFamily: j,
      outputLineHeight: ne,
      markupFontSize: N,
      markdownLineHeight: M,
      editorOptionsCustomizations: O,
      focusIndicatorGap: 3,
      interactiveWindowCollapseCodeCells: $,
      markdownFoldHintHeight: 22,
      outputScrolling: ee,
      outputWordWrap: pe,
      outputLineLimit: le,
      outputLinkifyFilePaths: he,
      outputMinimalError: be,
      markupFontFamily: fe,
      disableRulers: i?.disableRulers
    };
    this._register(this.configurationService.onDidChangeConfiguration(Se => {
      this._updateConfiguration(Se);
    }));
  }
  updateOptions(e) {
    if (this.isReadonly !== e) {
      this.isReadonly = e;
      this._updateConfiguration({
        affectsConfiguration(t) {
          return t === yo.insertToolbarLocation;
        },
        source: 7,
        affectedKeys: new Set([yo.insertToolbarLocation]),
        change: {
          keys: [yo.insertToolbarLocation],
          overrides: []
        }
      });
    }
  }
  _computeEditorTopPadding() {
    let e = false;
    const t = s => {
      this._editorTopPadding = s;
      const o = Object.assign({}, this._layoutConfiguration);
      o.editorTopPadding = this._editorTopPadding;
      this._layoutConfiguration = o;
      this._onDidChangeOptions.fire({
        editorTopPadding: true
      });
    };
    const i = new Set();
    const r = s => {
      if (!e && !i.has(s)) {
        try {
          const o = this.codeEditorService.resolveDecorationOptions(s, true);
          if (o.afterContentClassName || o.beforeContentClassName) {
            const a = this.codeEditorService.resolveDecorationCSSRules(s);
            if (a !== null) {
              for (let l = 0; l < a.length; l++) {
                if ((a[l].selectorText.endsWith("::after") || a[l].selectorText.endsWith("::after")) && a[l].cssText.indexOf("top:") > -1) {
                  const u = this.configurationService.getValue("editor");
                  t(Xbe.createFromRawSettings(u, M6.getInstance(this.targetWindow).value).lineHeight + 2);
                  e = true;
                  break;
                }
              }
            }
          }
          i.add(s);
        } catch {}
      }
    };
    this._register(this.codeEditorService.onDecorationTypeRegistered(r));
    this.codeEditorService.listDecorationTypes().forEach(r);
    return this._editorTopPadding;
  }
  _migrateDeprecatedSetting(e, t) {
    const i = this.configurationService.inspect(e);
    if (i.application !== undefined) {
      this.configurationService.updateValue(e, undefined, 1);
      this.configurationService.updateValue(t, i.application.value, 1);
    }
    if (i.user !== undefined) {
      this.configurationService.updateValue(e, undefined, 2);
      this.configurationService.updateValue(t, i.user.value, 2);
    }
    if (i.userLocal !== undefined) {
      this.configurationService.updateValue(e, undefined, 3);
      this.configurationService.updateValue(t, i.userLocal.value, 3);
    }
    if (i.userRemote !== undefined) {
      this.configurationService.updateValue(e, undefined, 4);
      this.configurationService.updateValue(t, i.userRemote.value, 4);
    }
    if (i.workspace !== undefined) {
      this.configurationService.updateValue(e, undefined, 5);
      this.configurationService.updateValue(t, i.workspace.value, 5);
    }
    if (i.workspaceFolder !== undefined) {
      this.configurationService.updateValue(e, undefined, 6);
      this.configurationService.updateValue(t, i.workspaceFolder.value, 6);
    }
  }
  _computeOutputLineHeight(e, t) {
    if (e === 0) {
      const r = this.configurationService.getValue("editor");
      e = FSe.readFontInfo(this.targetWindow, Xbe.createFromRawSettings(r, M6.getInstance(this.targetWindow).value)).lineHeight;
    } else if (e < 9) {
      let r = t;
      if (r === 0) {
        r = this.configurationService.getValue("editor.fontSize");
      }
      e = e * r;
    }
    e = Math.round(e);
    if (e < 9) {
      e = 9;
    }
    return e;
  }
  _updateConfiguration(e) {
    const t = e.affectsConfiguration(yo.showCellStatusBar);
    const i = e.affectsConfiguration(yo.cellToolbarLocation);
    const r = e.affectsConfiguration(yo.cellToolbarVisibility);
    const s = e.affectsConfiguration(yo.compactView);
    const o = e.affectsConfiguration(yo.focusIndicator);
    const a = e.affectsConfiguration(yo.insertToolbarLocation);
    const l = e.affectsConfiguration(yo.experimentalInsertToolbarAlignment);
    const u = e.affectsConfiguration(yo.globalToolbar);
    const d = e.affectsConfiguration(yo.stickyScrollEnabled);
    const m = e.affectsConfiguration(yo.stickyScrollMode);
    const p = e.affectsConfiguration(yo.consolidatedOutputButton);
    const g = e.affectsConfiguration(yo.consolidatedRunButton);
    const f = e.affectsConfiguration(yo.showFoldingControls);
    const A = e.affectsConfiguration(yo.dragAndDropEnabled);
    const w = e.affectsConfiguration("editor.fontSize");
    const C = e.affectsConfiguration(yo.outputFontSize);
    const x = e.affectsConfiguration(yo.markupFontSize);
    const I = e.affectsConfiguration(yo.markdownLineHeight);
    const B = e.affectsConfiguration("editor.fontFamily");
    const R = e.affectsConfiguration(yo.outputFontFamily);
    const N = e.affectsConfiguration(yo.cellEditorOptionsCustomizations);
    const M = e.affectsConfiguration(yo.interactiveWindowCollapseCodeCells);
    const O = e.affectsConfiguration(yo.outputLineHeight);
    const $ = e.affectsConfiguration(yo.outputScrolling);
    const H = e.affectsConfiguration(yo.outputWordWrap);
    const W = e.affectsConfiguration(yo.LinkifyOutputFilePaths);
    const z = e.affectsConfiguration(yo.minimalErrorRendering);
    const Y = e.affectsConfiguration(yo.markupFontFamily);
    if (!t && !i && !r && !s && !o && !a && !l && !u && !d && !m && !p && !g && !f && !A && !w && !C && !x && !I && !B && !R && !N && !M && !O && !$ && !H && !W && !z && !Y) {
      return;
    }
    let j = Object.assign({}, this._layoutConfiguration);
    if (t) {
      j.showCellStatusBar = this.configurationService.getValue(yo.showCellStatusBar);
    }
    if (i) {
      j.cellToolbarLocation = this.configurationService.getValue(yo.cellToolbarLocation) ?? {
        default: "right"
      };
    }
    if (r && !this.overrides?.cellToolbarInteraction) {
      j.cellToolbarInteraction = this.configurationService.getValue(yo.cellToolbarVisibility);
    }
    if (o) {
      j.focusIndicator = this._computeFocusIndicatorOption();
    }
    if (s) {
      const X = this.configurationService.getValue(yo.compactView) ?? true;
      j = Object.assign(j, {
        ...(X ? y_u : A_u)
      });
      j.compactView = X;
    }
    if (l) {
      j.insertToolbarAlignment = this._computeInsertToolbarAlignmentOption();
    }
    if (a) {
      j.insertToolbarPosition = this._computeInsertToolbarPositionOption(this.isReadonly);
    }
    if (u && this.overrides?.globalToolbar === undefined) {
      j.globalToolbar = this.configurationService.getValue(yo.globalToolbar) ?? true;
    }
    if (d && this.overrides?.stickyScrollEnabled === undefined) {
      j.stickyScrollEnabled = this.configurationService.getValue(yo.stickyScrollEnabled) ?? false;
    }
    if (m) {
      j.stickyScrollMode = this.configurationService.getValue(yo.stickyScrollMode) ?? "flat";
    }
    if (p) {
      j.consolidatedOutputButton = this.configurationService.getValue(yo.consolidatedOutputButton) ?? true;
    }
    if (g) {
      j.consolidatedRunButton = this.configurationService.getValue(yo.consolidatedRunButton) ?? true;
    }
    if (f) {
      j.showFoldingControls = this._computeShowFoldingControlsOption();
    }
    if (A) {
      j.dragAndDropEnabled = this.configurationService.getValue(yo.dragAndDropEnabled) ?? true;
    }
    if (w) {
      j.fontSize = this.configurationService.getValue("editor.fontSize");
    }
    if (C || w) {
      j.outputFontSize = this.configurationService.getValue(yo.outputFontSize) || j.fontSize;
    }
    if (x) {
      j.markupFontSize = this.configurationService.getValue(yo.markupFontSize);
    }
    if (I) {
      j.markdownLineHeight = this.configurationService.getValue(yo.markdownLineHeight);
    }
    if (R) {
      j.outputFontFamily = this.configurationService.getValue(yo.outputFontFamily);
    }
    if (N) {
      j.editorOptionsCustomizations = this.configurationService.getValue(yo.cellEditorOptionsCustomizations);
    }
    if (M) {
      j.interactiveWindowCollapseCodeCells = this.configurationService.getValue(yo.interactiveWindowCollapseCodeCells);
    }
    if (O || w || C) {
      const X = this.configurationService.getValue(yo.outputLineHeight);
      j.outputLineHeight = this._computeOutputLineHeight(X, j.outputFontSize);
    }
    if (H) {
      j.outputWordWrap = this.configurationService.getValue(yo.outputWordWrap);
    }
    if ($) {
      j.outputScrolling = this.configurationService.getValue(yo.outputScrolling);
    }
    if (W) {
      j.outputLinkifyFilePaths = this.configurationService.getValue(yo.LinkifyOutputFilePaths);
    }
    if (z) {
      j.outputMinimalError = this.configurationService.getValue(yo.minimalErrorRendering);
    }
    if (Y) {
      j.markupFontFamily = this.configurationService.getValue(yo.markupFontFamily);
    }
    this._layoutConfiguration = Object.freeze(j);
    this._onDidChangeOptions.fire({
      cellStatusBarVisibility: t,
      cellToolbarLocation: i,
      cellToolbarInteraction: r,
      compactView: s,
      focusIndicator: o,
      insertToolbarPosition: a,
      insertToolbarAlignment: l,
      globalToolbar: u,
      stickyScrollEnabled: d,
      stickyScrollMode: m,
      showFoldingControls: f,
      consolidatedOutputButton: p,
      consolidatedRunButton: g,
      dragAndDropEnabled: A,
      fontSize: w,
      outputFontSize: C,
      markupFontSize: x,
      markdownLineHeight: I,
      fontFamily: B,
      outputFontFamily: R,
      editorOptionsCustomizations: N,
      interactiveWindowCollapseCodeCells: M,
      outputLineHeight: O,
      outputScrolling: $,
      outputWordWrap: H,
      outputLinkifyFilePaths: W,
      minimalError: z,
      markupFontFamily: Y
    });
  }
  _computeInsertToolbarPositionOption(e) {
    if (e) {
      return "hidden";
    } else {
      return this.configurationService.getValue(yo.insertToolbarLocation) ?? "both";
    }
  }
  _computeInsertToolbarAlignmentOption() {
    return this.configurationService.getValue(yo.experimentalInsertToolbarAlignment) ?? "center";
  }
  _computeShowFoldingControlsOption() {
    return this.configurationService.getValue(yo.showFoldingControls) ?? "mouseover";
  }
  _computeFocusIndicatorOption() {
    return this.configurationService.getValue(yo.focusIndicator) ?? "gutter";
  }
  _computeStickyScrollModeOption() {
    return this.configurationService.getValue(yo.stickyScrollMode) ?? "flat";
  }
  getCellCollapseDefault() {
    if (this._layoutConfiguration.interactiveWindowCollapseCodeCells === "never") {
      return {
        codeCell: {
          inputCollapsed: false
        }
      };
    } else {
      return {
        codeCell: {
          inputCollapsed: true
        }
      };
    }
  }
  getLayoutConfiguration() {
    return this._layoutConfiguration;
  }
  getDisplayOptions() {
    return this._layoutConfiguration;
  }
  getCellEditorContainerLeftMargin() {
    const {
      codeCellLeftMargin: e,
      cellRunGutter: t
    } = this._layoutConfiguration;
    return e + t;
  }
  computeCollapsedMarkdownCellHeight(e) {
    const {
      bottomToolbarGap: t
    } = this.computeBottomToolbarDimensions(e);
    return this._layoutConfiguration.markdownCellTopMargin + this._layoutConfiguration.collapsedIndicatorHeight + t + this._layoutConfiguration.markdownCellBottomMargin;
  }
  computeBottomToolbarOffset(e, t) {
    const {
      bottomToolbarGap: i,
      bottomToolbarHeight: r
    } = this.computeBottomToolbarDimensions(t);
    return e - i - r / 2;
  }
  computeCodeCellEditorWidth(e) {
    return e - (this._layoutConfiguration.codeCellLeftMargin + this._layoutConfiguration.cellRunGutter + this._layoutConfiguration.cellRightMargin);
  }
  computeMarkdownCellEditorWidth(e) {
    return e - this._layoutConfiguration.markdownCellGutter - this._layoutConfiguration.markdownCellLeftMargin - this._layoutConfiguration.cellRightMargin;
  }
  computeStatusBarHeight() {
    return this._layoutConfiguration.cellStatusBarHeight;
  }
  _computeBottomToolbarDimensions(e, t, i, r) {
    if (i === "left" || r !== "hidden") {
      return {
        bottomToolbarGap: 18,
        bottomToolbarHeight: 18
      };
    } else if (t === "betweenCells" || t === "both") {
      if (e) {
        return {
          bottomToolbarGap: 12,
          bottomToolbarHeight: 20
        };
      } else {
        return {
          bottomToolbarGap: 20,
          bottomToolbarHeight: 20
        };
      }
    } else {
      return {
        bottomToolbarGap: 0,
        bottomToolbarHeight: 0
      };
    }
  }
  computeBottomToolbarDimensions(e) {
    const t = this._layoutConfiguration;
    const i = this.computeCellToolbarLocation(e);
    const {
      bottomToolbarGap: r,
      bottomToolbarHeight: s
    } = this._computeBottomToolbarDimensions(t.compactView, t.insertToolbarPosition, t.insertToolbarAlignment, i);
    return {
      bottomToolbarGap: r,
      bottomToolbarHeight: s
    };
  }
  computeCellToolbarLocation(e) {
    const t = this._layoutConfiguration.cellToolbarLocation;
    if (typeof t == "string") {
      if (t === "left" || t === "right" || t === "hidden") {
        return t;
      }
    } else if (e) {
      const i = t[e] ?? t.default;
      let r = "right";
      switch (i) {
        case "left":
          r = "left";
          break;
        case "right":
          r = "right";
          break;
        case "hidden":
          r = "hidden";
          break;
        default:
          r = "right";
          break;
      }
      return r;
    }
    return "right";
  }
  computeTopInsertToolbarHeight(e) {
    if (this._layoutConfiguration.insertToolbarPosition === "betweenCells" || this._layoutConfiguration.insertToolbarPosition === "both") {
      return b_u;
    }
    const t = this.computeCellToolbarLocation(e);
    if (t === "left" || t === "right") {
      return b_u;
    } else {
      return 0;
    }
  }
  computeEditorPadding(e, t) {
    return {
      top: this._editorTopPadding,
      bottom: this.statusBarIsVisible(e, t) ? this._layoutConfiguration.editorBottomPadding : this._layoutConfiguration.editorBottomPaddingWithoutStatusBar
    };
  }
  computeEditorStatusbarHeight(e, t) {
    if (this.statusBarIsVisible(e, t)) {
      return this.computeStatusBarHeight();
    } else {
      return 0;
    }
  }
  statusBarIsVisible(e, t) {
    const i = this.notebookExecutionStateService.getCellExecution(t);
    if (this._layoutConfiguration.showCellStatusBar === "visible") {
      return true;
    } else if (this._layoutConfiguration.showCellStatusBar === "visibleAfterExecute") {
      return typeof e.lastRunSuccess == "boolean" || i !== undefined;
    } else {
      return false;
    }
  }
  computeWebviewOptions() {
    return {
      outputNodePadding: this._layoutConfiguration.cellOutputPadding,
      outputNodeLeftPadding: this._layoutConfiguration.cellOutputPadding,
      previewNodePadding: this._layoutConfiguration.markdownPreviewPadding,
      markdownLeftMargin: this._layoutConfiguration.markdownCellGutter + this._layoutConfiguration.markdownCellLeftMargin,
      leftMargin: this._layoutConfiguration.codeCellLeftMargin,
      rightMargin: this._layoutConfiguration.cellRightMargin,
      runGutter: this._layoutConfiguration.cellRunGutter,
      dragAndDropEnabled: this._layoutConfiguration.dragAndDropEnabled,
      fontSize: this._layoutConfiguration.fontSize,
      outputFontSize: this._layoutConfiguration.outputFontSize,
      outputFontFamily: this._layoutConfiguration.outputFontFamily,
      markupFontSize: this._layoutConfiguration.markupFontSize,
      markdownLineHeight: this._layoutConfiguration.markdownLineHeight,
      outputLineHeight: this._layoutConfiguration.outputLineHeight,
      outputScrolling: this._layoutConfiguration.outputScrolling,
      outputWordWrap: this._layoutConfiguration.outputWordWrap,
      outputLineLimit: this._layoutConfiguration.outputLineLimit,
      outputLinkifyFilePaths: this._layoutConfiguration.outputLinkifyFilePaths,
      minimalError: this._layoutConfiguration.outputMinimalError,
      markupFontFamily: this._layoutConfiguration.markupFontFamily
    };
  }
  computeDiffWebviewOptions() {
    return {
      outputNodePadding: this._layoutConfiguration.cellOutputPadding,
      outputNodeLeftPadding: 0,
      previewNodePadding: this._layoutConfiguration.markdownPreviewPadding,
      markdownLeftMargin: 0,
      leftMargin: 32,
      rightMargin: 0,
      runGutter: 0,
      dragAndDropEnabled: false,
      fontSize: this._layoutConfiguration.fontSize,
      outputFontSize: this._layoutConfiguration.outputFontSize,
      outputFontFamily: this._layoutConfiguration.outputFontFamily,
      markupFontSize: this._layoutConfiguration.markupFontSize,
      markdownLineHeight: this._layoutConfiguration.markdownLineHeight,
      outputLineHeight: this._layoutConfiguration.outputLineHeight,
      outputScrolling: this._layoutConfiguration.outputScrolling,
      outputWordWrap: this._layoutConfiguration.outputWordWrap,
      outputLineLimit: this._layoutConfiguration.outputLineLimit,
      outputLinkifyFilePaths: false,
      minimalError: false,
      markupFontFamily: this._layoutConfiguration.markupFontFamily
    };
  }
  computeIndicatorPosition(e, t, i) {
    const {
      bottomToolbarGap: r
    } = this.computeBottomToolbarDimensions(i);
    return {
      bottomIndicatorTop: e - r - this._layoutConfiguration.cellBottomMargin - t,
      verticalIndicatorHeight: e - r - t
    };
  }
};
Trt = __decorate([__param(3, Fn), __param(4, pE), __param(5, fl)], Trt);
