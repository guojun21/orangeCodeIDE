"use strict";

// Module: out-build/vs/editor/contrib/folding/browser/foldingDecorations.js
// Offset: 25228133 (bundle byte offset)
// Size: 4981 bytes
qi();
bv();
Ht();
Nl();
Pm();
Io();
Jr();
nAg = Rn("editor.foldBackground", {
  light: rl(Doe, 0.3),
  dark: rl(Doe, 0.3),
  hcDark: null,
  hcLight: null
}, _(1141, null), true);
Rn("editor.foldPlaceholderForeground", {
  light: "#808080",
  dark: "#808080",
  hcDark: null,
  hcLight: null
}, _(1142, null));
Rn("editorGutter.foldingControlForeground", eOt, _(1143, null));
ddn = us("folding-expanded", Be.chevronDown, _(1144, null));
hdn = us("folding-collapsed", Be.chevronRight, _(1145, null));
TQl = us("folding-manual-collapsed", hdn, _(1146, null));
IQl = us("folding-manual-expanded", ddn, _(1147, null));
Bla = {
  color: kC(nAg),
  position: 1
};
kCt = _(1148, null);
bgi = _(1149, null);
iAg = class sge {
  static {
    this.COLLAPSED_VISUAL_DECORATION = Zh.register({
      description: "folding-collapsed-visual-decoration",
      stickiness: 0,
      afterContentClassName: "inline-folded",
      isWholeLine: true,
      linesDecorationsTooltip: kCt,
      firstLineDecorationClassName: Qt.asClassName(hdn)
    });
  }
  static {
    this.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION = Zh.register({
      description: "folding-collapsed-highlighted-visual-decoration",
      stickiness: 0,
      afterContentClassName: "inline-folded",
      className: "folded-background",
      minimap: Bla,
      isWholeLine: true,
      linesDecorationsTooltip: kCt,
      firstLineDecorationClassName: Qt.asClassName(hdn)
    });
  }
  static {
    this.MANUALLY_COLLAPSED_VISUAL_DECORATION = Zh.register({
      description: "folding-manually-collapsed-visual-decoration",
      stickiness: 0,
      afterContentClassName: "inline-folded",
      isWholeLine: true,
      linesDecorationsTooltip: kCt,
      firstLineDecorationClassName: Qt.asClassName(TQl)
    });
  }
  static {
    this.MANUALLY_COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION = Zh.register({
      description: "folding-manually-collapsed-highlighted-visual-decoration",
      stickiness: 0,
      afterContentClassName: "inline-folded",
      className: "folded-background",
      minimap: Bla,
      isWholeLine: true,
      linesDecorationsTooltip: kCt,
      firstLineDecorationClassName: Qt.asClassName(TQl)
    });
  }
  static {
    this.NO_CONTROLS_COLLAPSED_RANGE_DECORATION = Zh.register({
      description: "folding-no-controls-range-decoration",
      stickiness: 0,
      afterContentClassName: "inline-folded",
      isWholeLine: true,
      linesDecorationsTooltip: kCt
    });
  }
  static {
    this.NO_CONTROLS_COLLAPSED_HIGHLIGHTED_RANGE_DECORATION = Zh.register({
      description: "folding-no-controls-range-decoration",
      stickiness: 0,
      afterContentClassName: "inline-folded",
      className: "folded-background",
      minimap: Bla,
      isWholeLine: true,
      linesDecorationsTooltip: kCt
    });
  }
  static {
    this.EXPANDED_VISUAL_DECORATION = Zh.register({
      description: "folding-expanded-visual-decoration",
      stickiness: 1,
      isWholeLine: true,
      firstLineDecorationClassName: "alwaysShowFoldIcons " + Qt.asClassName(ddn),
      linesDecorationsTooltip: bgi
    });
  }
  static {
    this.EXPANDED_AUTO_HIDE_VISUAL_DECORATION = Zh.register({
      description: "folding-expanded-auto-hide-visual-decoration",
      stickiness: 1,
      isWholeLine: true,
      firstLineDecorationClassName: Qt.asClassName(ddn),
      linesDecorationsTooltip: bgi
    });
  }
  static {
    this.MANUALLY_EXPANDED_VISUAL_DECORATION = Zh.register({
      description: "folding-manually-expanded-visual-decoration",
      stickiness: 0,
      isWholeLine: true,
      firstLineDecorationClassName: "alwaysShowFoldIcons " + Qt.asClassName(IQl),
      linesDecorationsTooltip: bgi
    });
  }
  static {
    this.MANUALLY_EXPANDED_AUTO_HIDE_VISUAL_DECORATION = Zh.register({
      description: "folding-manually-expanded-auto-hide-visual-decoration",
      stickiness: 0,
      isWholeLine: true,
      firstLineDecorationClassName: Qt.asClassName(IQl),
      linesDecorationsTooltip: bgi
    });
  }
  static {
    this.NO_CONTROLS_EXPANDED_RANGE_DECORATION = Zh.register({
      description: "folding-no-controls-range-decoration",
      stickiness: 0,
      isWholeLine: true
    });
  }
  static {
    this.HIDDEN_RANGE_DECORATION = Zh.register({
      description: "folding-hidden-range-decoration",
      stickiness: 1
    });
  }
  constructor(e, t) {
    this.editor = e;
    this.reactiveStorageService = t;
    this.showFoldingControls = "mouseover";
    this.showFoldingHighlights = true;
  }
  getDecorationOption(e, t, i) {
    if (t) {
      return sge.HIDDEN_RANGE_DECORATION;
    } else if (this.showFoldingControls === "never") {
      if (e) {
        if (this.showFoldingHighlights) {
          return sge.NO_CONTROLS_COLLAPSED_HIGHLIGHTED_RANGE_DECORATION;
        } else {
          return sge.NO_CONTROLS_COLLAPSED_RANGE_DECORATION;
        }
      } else {
        return sge.NO_CONTROLS_EXPANDED_RANGE_DECORATION;
      }
    } else if (e) {
      if (i) {
        if (this.showFoldingHighlights) {
          return sge.MANUALLY_COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION;
        } else {
          return sge.MANUALLY_COLLAPSED_VISUAL_DECORATION;
        }
      } else if (this.showFoldingHighlights) {
        return sge.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION;
      } else {
        return sge.COLLAPSED_VISUAL_DECORATION;
      }
    } else if (this.showFoldingControls === "mouseover") {
      if (i) {
        return sge.MANUALLY_EXPANDED_AUTO_HIDE_VISUAL_DECORATION;
      } else {
        return sge.EXPANDED_AUTO_HIDE_VISUAL_DECORATION;
      }
    } else if (i) {
      return sge.MANUALLY_EXPANDED_VISUAL_DECORATION;
    } else {
      return sge.EXPANDED_VISUAL_DECORATION;
    }
  }
  changeDecorations(e) {
    return this.editor.changeDecorations(e);
  }
  removeDecorations(e) {
    this.editor.removeDecorations(e);
  }
};
