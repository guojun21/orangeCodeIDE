"use strict";

// Module: out-build/vs/editor/common/config/editorOptions.js
// Offset: 969598 (bundle byte offset)
// Size: 72536 bytes
Vs();
np();
_r();
z4o();
Jbe();
Ht();
U$();
(function (n) {
  n[n.None = 0] = "None";
  n[n.Keep = 1] = "Keep";
  n[n.Brackets = 2] = "Brackets";
  n[n.Advanced = 3] = "Advanced";
  n[n.Full = 4] = "Full";
})(bhh ||= {});
ISe = 8;
vhh = class {
  constructor(n) {
    this._values = n;
  }
  hasChanged(n) {
    return this._values[n];
  }
};
cEc = class {
  constructor() {
    this.stableMinimapLayoutInput = null;
    this.stableFitMaxMinimapScale = 0;
    this.stableFitRemainingWidth = 0;
  }
};
eI = class {
  constructor(n, e, t, i) {
    this.id = n;
    this.name = e;
    this.defaultValue = t;
    this.schema = i;
  }
  applyUpdate(n, e) {
    return V4o(n, e);
  }
  compute(n, e, t) {
    return t;
  }
};
nOn = class {
  constructor(n, e) {
    this.newValue = n;
    this.didChange = e;
  }
};
_Ve = class {
  constructor(n) {
    this.schema = undefined;
    this.id = n;
    this.name = "_never_";
    this.defaultValue = undefined;
  }
  applyUpdate(n, e) {
    return V4o(n, e);
  }
  validate(n) {
    return this.defaultValue;
  }
};
yft = class {
  constructor(n, e, t, i) {
    this.id = n;
    this.name = e;
    this.defaultValue = t;
    this.schema = i;
  }
  applyUpdate(n, e) {
    return V4o(n, e);
  }
  validate(n) {
    if (typeof n === "undefined") {
      return this.defaultValue;
    } else {
      return n;
    }
  }
  compute(n, e, t) {
    return t;
  }
};
hw = class extends yft {
  constructor(n, e, t, i = undefined) {
    if (typeof i !== "undefined") {
      i.type = "boolean";
      i.default = t;
    }
    super(n, e, t, i);
  }
  validate(n) {
    return sp(n, this.defaultValue);
  }
};
aE = class OJb extends yft {
  static clampedInt(e, t, i, r) {
    return Aft(e, t, i, r);
  }
  constructor(e, t, i, r, s, o = undefined) {
    if (typeof o !== "undefined") {
      o.type = "integer";
      o.default = i;
      o.minimum = r;
      o.maximum = s;
    }
    super(e, t, i, o);
    this.minimum = r;
    this.maximum = s;
  }
  validate(e) {
    return OJb.clampedInt(e, this.defaultValue, this.minimum, this.maximum);
  }
};
Pde = class UJb extends yft {
  static clamp(e, t, i) {
    if (e < t) {
      return t;
    } else if (e > i) {
      return i;
    } else {
      return e;
    }
  }
  static float(e, t) {
    if (typeof e == "number") {
      return e;
    }
    if (typeof e === "undefined") {
      return t;
    }
    const i = parseFloat(e);
    if (isNaN(i)) {
      return t;
    } else {
      return i;
    }
  }
  constructor(e, t, i, r, s) {
    if (typeof s !== "undefined") {
      s.type = "number";
      s.default = i;
    }
    super(e, t, i, s);
    this.validationFn = r;
  }
  validate(e) {
    return this.validationFn(UJb.float(e, this.defaultValue));
  }
};
OY = class $Jb extends yft {
  static string(e, t) {
    if (typeof e != "string") {
      return t;
    } else {
      return e;
    }
  }
  constructor(e, t, i, r = undefined) {
    if (typeof r !== "undefined") {
      r.type = "string";
      r.default = i;
    }
    super(e, t, i, r);
  }
  validate(e) {
    return $Jb.string(e, this.defaultValue);
  }
};
QI = class extends yft {
  constructor(n, e, t, i, r = undefined) {
    if (typeof r !== "undefined") {
      r.type = "string";
      r.enum = i;
      r.default = t;
    }
    super(n, e, t, r);
    this._allowedValues = i;
  }
  validate(n) {
    return WI(n, this.defaultValue, this._allowedValues);
  }
};
_Ot = class extends eI {
  constructor(n, e, t, i, r, s, o = undefined) {
    if (typeof o !== "undefined") {
      o.type = "string";
      o.enum = r;
      o.default = i;
    }
    super(n, e, t, o);
    this._allowedValues = r;
    this._convert = s;
  }
  validate(n) {
    if (typeof n != "string") {
      return this.defaultValue;
    } else if (this._allowedValues.indexOf(n) === -1) {
      return this.defaultValue;
    } else {
      return this._convert(n);
    }
  }
};
Ahh = class extends eI {
  constructor() {
    super(2, "accessibilitySupport", 0, {
      type: "string",
      enum: ["auto", "on", "off"],
      enumDescriptions: [_(323, null), _(324, null), _(325, null)],
      default: "auto",
      tags: ["accessibility"],
      description: _(326, null)
    });
  }
  validate(n) {
    switch (n) {
      case "auto":
        return 0;
      case "off":
        return 1;
      case "on":
        return 2;
    }
    return this.defaultValue;
  }
  compute(n, e, t) {
    if (t === 0) {
      return n.accessibilitySupport;
    } else {
      return t;
    }
  }
};
yhh = class extends eI {
  constructor() {
    const n = {
      insertSpace: true,
      ignoreEmptyLines: true
    };
    super(23, "comments", n, {
      "editor.comments.insertSpace": {
        type: "boolean",
        default: n.insertSpace,
        description: _(327, null)
      },
      "editor.comments.ignoreEmptyLines": {
        type: "boolean",
        default: n.ignoreEmptyLines,
        description: _(328, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      insertSpace: sp(e.insertSpace, this.defaultValue.insertSpace),
      ignoreEmptyLines: sp(e.ignoreEmptyLines, this.defaultValue.ignoreEmptyLines)
    };
  }
};
(function (n) {
  n[n.Hidden = 0] = "Hidden";
  n[n.Blink = 1] = "Blink";
  n[n.Smooth = 2] = "Smooth";
  n[n.Phase = 3] = "Phase";
  n[n.Expand = 4] = "Expand";
  n[n.Solid = 5] = "Solid";
})(whh ||= {});
(function (n) {
  n[n.Line = 1] = "Line";
  n[n.Block = 2] = "Block";
  n[n.Underline = 3] = "Underline";
  n[n.LineThin = 4] = "LineThin";
  n[n.BlockOutline = 5] = "BlockOutline";
  n[n.UnderlineThin = 6] = "UnderlineThin";
})(hT ||= {});
_hh = class extends _Ve {
  constructor() {
    super(148);
  }
  compute(n, e, t) {
    const i = ["monaco-editor"];
    if (e.get(41)) {
      i.push(e.get(41));
    }
    if (n.extraEditorClassName) {
      i.push(n.extraEditorClassName);
    }
    if (e.get(75) === "default") {
      i.push("mouse-default");
    } else if (e.get(75) === "copy") {
      i.push("mouse-copy");
    }
    if (e.get(116)) {
      i.push("showUnused");
    }
    if (e.get(145)) {
      i.push("showDeprecated");
    }
    return i.join(" ");
  }
};
Chh = class extends hw {
  constructor() {
    super(38, "emptySelectionClipboard", true, {
      description: _(329, null)
    });
  }
  compute(n, e, t) {
    return t && n.emptySelectionClipboard;
  }
};
Shh = class extends eI {
  constructor() {
    const n = {
      cursorMoveOnType: true,
      seedSearchStringFromSelection: "always",
      autoFindInSelection: "never",
      globalFindClipboard: false,
      addExtraSpaceOnTop: true,
      loop: true,
      history: "workspace",
      replaceHistory: "workspace"
    };
    super(43, "find", n, {
      "editor.find.cursorMoveOnType": {
        type: "boolean",
        default: n.cursorMoveOnType,
        description: _(330, null)
      },
      "editor.find.seedSearchStringFromSelection": {
        type: "string",
        enum: ["never", "always", "selection"],
        default: n.seedSearchStringFromSelection,
        enumDescriptions: [_(331, null), _(332, null), _(333, null)],
        description: _(334, null)
      },
      "editor.find.autoFindInSelection": {
        type: "string",
        enum: ["never", "always", "multiline"],
        default: n.autoFindInSelection,
        enumDescriptions: [_(335, null), _(336, null), _(337, null)],
        description: _(338, null)
      },
      "editor.find.globalFindClipboard": {
        type: "boolean",
        default: n.globalFindClipboard,
        description: _(339, null),
        included: Fs
      },
      "editor.find.addExtraSpaceOnTop": {
        type: "boolean",
        default: n.addExtraSpaceOnTop,
        description: _(340, null)
      },
      "editor.find.loop": {
        type: "boolean",
        default: n.loop,
        description: _(341, null)
      },
      "editor.find.history": {
        type: "string",
        enum: ["never", "workspace"],
        default: "workspace",
        enumDescriptions: [_(342, null), _(343, null)],
        description: _(344, null)
      },
      "editor.find.replaceHistory": {
        type: "string",
        enum: ["never", "workspace"],
        default: "workspace",
        enumDescriptions: [_(345, null), _(346, null)],
        description: _(347, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      cursorMoveOnType: sp(e.cursorMoveOnType, this.defaultValue.cursorMoveOnType),
      seedSearchStringFromSelection: typeof n.seedSearchStringFromSelection == "boolean" ? n.seedSearchStringFromSelection ? "always" : "never" : WI(e.seedSearchStringFromSelection, this.defaultValue.seedSearchStringFromSelection, ["never", "always", "selection"]),
      autoFindInSelection: typeof n.autoFindInSelection == "boolean" ? n.autoFindInSelection ? "always" : "never" : WI(e.autoFindInSelection, this.defaultValue.autoFindInSelection, ["never", "always", "multiline"]),
      globalFindClipboard: sp(e.globalFindClipboard, this.defaultValue.globalFindClipboard),
      addExtraSpaceOnTop: sp(e.addExtraSpaceOnTop, this.defaultValue.addExtraSpaceOnTop),
      loop: sp(e.loop, this.defaultValue.loop),
      history: WI(e.history, this.defaultValue.history, ["never", "workspace"]),
      replaceHistory: WI(e.replaceHistory, this.defaultValue.replaceHistory, ["never", "workspace"])
    };
  }
};
Y5e = class RCn extends eI {
  static {
    this.OFF = "\"liga\" off, \"calt\" off";
  }
  static {
    this.ON = "\"liga\" on, \"calt\" on";
  }
  constructor() {
    super(53, "fontLigatures", RCn.OFF, {
      anyOf: [{
        type: "boolean",
        description: _(348, null)
      }, {
        type: "string",
        description: _(349, null)
      }],
      description: _(350, null),
      default: false
    });
  }
  validate(e) {
    if (typeof e === "undefined") {
      return this.defaultValue;
    } else if (typeof e == "string") {
      if (e === "false" || e.length === 0) {
        return RCn.OFF;
      } else if (e === "true") {
        return RCn.ON;
      } else {
        return e;
      }
    } else if (e) {
      return RCn.ON;
    } else {
      return RCn.OFF;
    }
  }
};
Y4o = class PCn extends eI {
  static {
    this.OFF = "normal";
  }
  static {
    this.TRANSLATE = "translate";
  }
  constructor() {
    super(56, "fontVariations", PCn.OFF, {
      anyOf: [{
        type: "boolean",
        description: _(351, null)
      }, {
        type: "string",
        description: _(352, null)
      }],
      description: _(353, null),
      default: false
    });
  }
  validate(e) {
    if (typeof e === "undefined") {
      return this.defaultValue;
    } else if (typeof e == "string") {
      if (e === "false") {
        return PCn.OFF;
      } else if (e === "true") {
        return PCn.TRANSLATE;
      } else {
        return e;
      }
    } else if (e) {
      return PCn.TRANSLATE;
    } else {
      return PCn.OFF;
    }
  }
  compute(e, t, i) {
    return e.fontInfo.fontVariationSettings;
  }
};
khh = class extends _Ve {
  constructor() {
    super(52);
  }
  compute(n, e, t) {
    return n.fontInfo;
  }
};
Ehh = class extends _Ve {
  constructor() {
    super(147);
  }
  compute(n, e, t) {
    if (n.inputMode === "overtype") {
      return e.get(84);
    } else {
      return e.get(28);
    }
  }
};
xhh = class extends _Ve {
  constructor() {
    super(157);
  }
  compute(n, e) {
    return typeof globalThis.EditContext == "function" && e.get(37);
  }
};
Thh = class extends yft {
  constructor() {
    super(54, "fontSize", jI.fontSize, {
      type: "number",
      minimum: 6,
      maximum: 100,
      default: jI.fontSize,
      description: _(354, null)
    });
  }
  validate(n) {
    const e = Pde.float(n, this.defaultValue);
    if (e === 0) {
      return jI.fontSize;
    } else {
      return Pde.clamp(e, 6, 100);
    }
  }
  compute(n, e, t) {
    return n.fontInfo.fontSize;
  }
};
Ihh = class LCn extends eI {
  static {
    this.SUGGESTION_VALUES = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
  }
  static {
    this.MINIMUM_VALUE = 1;
  }
  static {
    this.MAXIMUM_VALUE = 1000;
  }
  constructor() {
    super(55, "fontWeight", jI.fontWeight, {
      anyOf: [{
        type: "number",
        minimum: LCn.MINIMUM_VALUE,
        maximum: LCn.MAXIMUM_VALUE,
        errorMessage: _(355, null)
      }, {
        type: "string",
        pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$"
      }, {
        enum: LCn.SUGGESTION_VALUES
      }],
      default: jI.fontWeight,
      description: _(356, null)
    });
  }
  validate(e) {
    if (e === "normal" || e === "bold") {
      return e;
    } else {
      return String(aE.clampedInt(e, jI.fontWeight, LCn.MINIMUM_VALUE, LCn.MAXIMUM_VALUE));
    }
  }
};
Dhh = class extends eI {
  constructor() {
    const n = {
      multiple: "peek",
      multipleDefinitions: "peek",
      multipleTypeDefinitions: "peek",
      multipleDeclarations: "peek",
      multipleImplementations: "peek",
      multipleReferences: "peek",
      multipleTests: "peek",
      alternativeDefinitionCommand: "editor.action.goToReferences",
      alternativeTypeDefinitionCommand: "editor.action.goToReferences",
      alternativeDeclarationCommand: "editor.action.goToReferences",
      alternativeImplementationCommand: "",
      alternativeReferenceCommand: "",
      alternativeTestsCommand: ""
    };
    const e = {
      type: "string",
      enum: ["peek", "gotoAndPeek", "goto"],
      default: n.multiple,
      enumDescriptions: [_(357, null), _(358, null), _(359, null)]
    };
    const t = ["", "editor.action.referenceSearch.trigger", "editor.action.goToReferences", "editor.action.peekImplementation", "editor.action.goToImplementation", "editor.action.peekTypeDefinition", "editor.action.goToTypeDefinition", "editor.action.explainSymbol", "editor.action.peekDeclaration", "editor.action.revealDeclaration", "editor.action.peekDefinition", "editor.action.revealDefinitionAside", "editor.action.revealDefinition"];
    super(60, "gotoLocation", n, {
      "editor.gotoLocation.multiple": {
        deprecationMessage: _(360, null)
      },
      "editor.gotoLocation.multipleDefinitions": {
        description: _(361, null),
        ...e
      },
      "editor.gotoLocation.multipleTypeDefinitions": {
        description: _(362, null),
        ...e
      },
      "editor.gotoLocation.multipleDeclarations": {
        description: _(363, null),
        ...e
      },
      "editor.gotoLocation.multipleImplementations": {
        description: _(364, null),
        ...e
      },
      "editor.gotoLocation.multipleReferences": {
        description: _(365, null),
        ...e
      },
      "editor.gotoLocation.alternativeDefinitionCommand": {
        type: "string",
        default: n.alternativeDefinitionCommand,
        enum: t,
        description: _(366, null)
      },
      "editor.gotoLocation.alternativeTypeDefinitionCommand": {
        type: "string",
        default: n.alternativeTypeDefinitionCommand,
        enum: t,
        description: _(367, null)
      },
      "editor.gotoLocation.alternativeDeclarationCommand": {
        type: "string",
        default: n.alternativeDeclarationCommand,
        enum: t,
        description: _(368, null)
      },
      "editor.gotoLocation.alternativeImplementationCommand": {
        type: "string",
        default: n.alternativeImplementationCommand,
        enum: t,
        description: _(369, null)
      },
      "editor.gotoLocation.alternativeReferenceCommand": {
        type: "string",
        default: n.alternativeReferenceCommand,
        enum: t,
        description: _(370, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      multiple: WI(e.multiple, this.defaultValue.multiple, ["peek", "gotoAndPeek", "goto"]),
      multipleDefinitions: e.multipleDefinitions ?? WI(e.multipleDefinitions, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleTypeDefinitions: e.multipleTypeDefinitions ?? WI(e.multipleTypeDefinitions, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleDeclarations: e.multipleDeclarations ?? WI(e.multipleDeclarations, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleImplementations: e.multipleImplementations ?? WI(e.multipleImplementations, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleReferences: e.multipleReferences ?? WI(e.multipleReferences, "peek", ["peek", "gotoAndPeek", "goto"]),
      multipleTests: e.multipleTests ?? WI(e.multipleTests, "peek", ["peek", "gotoAndPeek", "goto"]),
      alternativeDefinitionCommand: OY.string(e.alternativeDefinitionCommand, this.defaultValue.alternativeDefinitionCommand),
      alternativeTypeDefinitionCommand: OY.string(e.alternativeTypeDefinitionCommand, this.defaultValue.alternativeTypeDefinitionCommand),
      alternativeDeclarationCommand: OY.string(e.alternativeDeclarationCommand, this.defaultValue.alternativeDeclarationCommand),
      alternativeImplementationCommand: OY.string(e.alternativeImplementationCommand, this.defaultValue.alternativeImplementationCommand),
      alternativeReferenceCommand: OY.string(e.alternativeReferenceCommand, this.defaultValue.alternativeReferenceCommand),
      alternativeTestsCommand: OY.string(e.alternativeTestsCommand, this.defaultValue.alternativeTestsCommand)
    };
  }
};
Bhh = class extends eI {
  constructor() {
    const n = {
      enabled: true,
      delay: 300,
      hidingDelay: 300,
      sticky: true,
      above: true
    };
    super(62, "hover", n, {
      "editor.hover.enabled": {
        type: "boolean",
        default: n.enabled,
        description: _(371, null)
      },
      "editor.hover.delay": {
        type: "number",
        default: n.delay,
        minimum: 0,
        maximum: 10000,
        description: _(372, null)
      },
      "editor.hover.sticky": {
        type: "boolean",
        default: n.sticky,
        description: _(373, null)
      },
      "editor.hover.hidingDelay": {
        type: "integer",
        minimum: 0,
        default: n.hidingDelay,
        description: _(374, null)
      },
      "editor.hover.above": {
        type: "boolean",
        default: n.above,
        description: _(375, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      enabled: sp(e.enabled, this.defaultValue.enabled),
      delay: aE.clampedInt(e.delay, this.defaultValue.delay, 0, 10000),
      sticky: sp(e.sticky, this.defaultValue.sticky),
      hidingDelay: aE.clampedInt(e.hidingDelay, this.defaultValue.hidingDelay, 0, 600000),
      above: sp(e.above, this.defaultValue.above)
    };
  }
};
(function (n) {
  n[n.None = 0] = "None";
  n[n.Text = 1] = "Text";
  n[n.Blocks = 2] = "Blocks";
})(Rhh ||= {});
lEc = class jGa extends _Ve {
  constructor() {
    super(151);
  }
  compute(e, t, i) {
    return jGa.computeLayout(t, {
      memory: e.memory,
      outerWidth: e.outerWidth,
      outerHeight: e.outerHeight,
      isDominatedByLongLines: e.isDominatedByLongLines,
      lineHeight: e.fontInfo.lineHeight,
      viewLineCount: e.viewLineCount,
      lineNumbersDigitCount: e.lineNumbersDigitCount,
      typicalHalfwidthCharacterWidth: e.fontInfo.typicalHalfwidthCharacterWidth,
      maxDigitWidth: e.fontInfo.maxDigitWidth,
      pixelRatio: e.pixelRatio,
      glyphMarginDecorationLaneCount: e.glyphMarginDecorationLaneCount
    });
  }
  static computeContainedMinimapLineCount(e) {
    const t = e.height / e.lineHeight;
    const i = Math.floor(e.paddingTop / e.lineHeight);
    let r = Math.floor(e.paddingBottom / e.lineHeight);
    if (e.scrollBeyondLastLine) {
      r = Math.max(r, t - 1);
    }
    const s = (i + e.viewLineCount + r) / (e.pixelRatio * e.height);
    const o = Math.floor(e.viewLineCount / s);
    return {
      typicalViewportLineCount: t,
      extraLinesBeforeFirstLine: i,
      extraLinesBeyondLastLine: r,
      desiredRatio: s,
      minimapLineCount: o
    };
  }
  static _computeMinimapLayout(e, t) {
    const i = e.outerWidth;
    const r = e.outerHeight;
    const s = e.pixelRatio;
    if (!e.minimap.enabled) {
      return {
        renderMinimap: 0,
        minimapLeft: 0,
        minimapWidth: 0,
        minimapHeightIsEditorHeight: false,
        minimapIsSampling: false,
        minimapScale: 1,
        minimapLineHeight: 1,
        minimapCanvasInnerWidth: 0,
        minimapCanvasInnerHeight: Math.floor(s * r),
        minimapCanvasOuterWidth: 0,
        minimapCanvasOuterHeight: r
      };
    }
    const o = t.stableMinimapLayoutInput;
    const a = o && e.outerHeight === o.outerHeight && e.lineHeight === o.lineHeight && e.typicalHalfwidthCharacterWidth === o.typicalHalfwidthCharacterWidth && e.pixelRatio === o.pixelRatio && e.scrollBeyondLastLine === o.scrollBeyondLastLine && e.paddingTop === o.paddingTop && e.paddingBottom === o.paddingBottom && e.minimap.enabled === o.minimap.enabled && e.minimap.side === o.minimap.side && e.minimap.size === o.minimap.size && e.minimap.showSlider === o.minimap.showSlider && e.minimap.renderCharacters === o.minimap.renderCharacters && e.minimap.maxColumn === o.minimap.maxColumn && e.minimap.scale === o.minimap.scale && e.verticalScrollbarWidth === o.verticalScrollbarWidth && e.isViewportWrapping === o.isViewportWrapping;
    const l = e.lineHeight;
    const u = e.typicalHalfwidthCharacterWidth;
    const d = e.scrollBeyondLastLine;
    const m = e.minimap.renderCharacters;
    let p = s >= 2 ? Math.round(e.minimap.scale * 2) : e.minimap.scale;
    const g = e.minimap.maxColumn;
    const f = e.minimap.size;
    const A = e.minimap.side;
    const w = e.verticalScrollbarWidth;
    const C = e.viewLineCount;
    const x = e.remainingWidth;
    const I = e.isViewportWrapping;
    const B = m ? 2 : 3;
    let R = Math.floor(s * r);
    const N = R / s;
    let M = false;
    let O = false;
    let $ = B * p;
    let H = p / s;
    let W = 1;
    if (f === "fill" || f === "fit") {
      const {
        typicalViewportLineCount: ne,
        extraLinesBeforeFirstLine: pe,
        extraLinesBeyondLastLine: le,
        desiredRatio: he,
        minimapLineCount: be
      } = jGa.computeContainedMinimapLineCount({
        viewLineCount: C,
        scrollBeyondLastLine: d,
        paddingTop: e.paddingTop,
        paddingBottom: e.paddingBottom,
        height: r,
        lineHeight: l,
        pixelRatio: s
      });
      if (C / be > 1) {
        M = true;
        O = true;
        p = 1;
        $ = 1;
        H = p / s;
      } else {
        let ke = false;
        let Se = p + 1;
        if (f === "fit") {
          const Fe = Math.ceil((pe + C + le) * $);
          if (I && a && x <= t.stableFitRemainingWidth) {
            ke = true;
            Se = t.stableFitMaxMinimapScale;
          } else {
            ke = Fe > R;
          }
        }
        if (f === "fill" || ke) {
          M = true;
          const Fe = p;
          $ = Math.min(l * s, Math.max(1, Math.floor(1 / he)));
          if (I && a && x <= t.stableFitRemainingWidth) {
            Se = t.stableFitMaxMinimapScale;
          }
          p = Math.min(Se, Math.max(1, Math.floor($ / B)));
          if (p > Fe) {
            W = Math.min(2, p / Fe);
          }
          H = p / s / W;
          R = Math.ceil(Math.max(ne, pe + C + le) * $);
          if (I) {
            t.stableMinimapLayoutInput = e;
            t.stableFitRemainingWidth = x;
            t.stableFitMaxMinimapScale = p;
          } else {
            t.stableMinimapLayoutInput = null;
            t.stableFitRemainingWidth = 0;
          }
        }
      }
    }
    const z = Math.floor(g * H);
    const Y = Math.min(z, Math.max(0, Math.floor((x - w - 2) * H / (u + H))) + ISe);
    let j = Math.floor(s * Y);
    const X = j / s;
    j = Math.floor(j * W);
    const ee = m ? 1 : 2;
    const re = A === "left" ? 0 : i - Y - w;
    return {
      renderMinimap: ee,
      minimapLeft: re,
      minimapWidth: Y,
      minimapHeightIsEditorHeight: M,
      minimapIsSampling: O,
      minimapScale: p,
      minimapLineHeight: $,
      minimapCanvasInnerWidth: j,
      minimapCanvasInnerHeight: R,
      minimapCanvasOuterWidth: X,
      minimapCanvasOuterHeight: N
    };
  }
  static computeLayout(e, t) {
    const i = t.outerWidth | 0;
    const r = t.outerHeight | 0;
    const s = t.lineHeight | 0;
    const o = t.lineNumbersDigitCount | 0;
    const a = t.typicalHalfwidthCharacterWidth;
    const l = t.maxDigitWidth;
    const u = t.pixelRatio;
    const d = t.viewLineCount;
    const m = e.get(142);
    const p = m === "inherit" ? e.get(141) : m;
    const g = p === "inherit" ? e.get(137) : p;
    const f = e.get(140);
    const A = t.isDominatedByLongLines;
    const w = e.get(59);
    const C = e.get(69).renderType !== 0;
    const x = e.get(70);
    const I = e.get(110);
    const B = e.get(88);
    const R = e.get(74);
    const N = e.get(108);
    const M = N.verticalScrollbarSize;
    const O = N.verticalHasArrows;
    const $ = N.arrowSize;
    const H = N.horizontalScrollbarSize;
    const W = e.get(45);
    const z = e.get(115) !== "never";
    let Y = e.get(67);
    if (W && z) {
      Y += 16;
    }
    let j = 0;
    if (C) {
      const Pe = Math.max(o, x);
      j = Math.round(Pe * l);
    }
    let X = 0;
    if (w) {
      X = s * t.glyphMarginDecorationLaneCount;
    }
    let ee = 0;
    let re = ee + X;
    let ne = re + j;
    let pe = ne + Y;
    const le = i - X - j - Y;
    let he = false;
    let be = false;
    let fe = -1;
    if (p === "inherit" && A) {
      he = true;
      be = true;
    } else if (g === "on" || g === "bounded") {
      be = true;
    } else if (g === "wordWrapColumn") {
      fe = f;
    }
    const ke = jGa._computeMinimapLayout({
      outerWidth: i,
      outerHeight: r,
      lineHeight: s,
      typicalHalfwidthCharacterWidth: a,
      pixelRatio: u,
      scrollBeyondLastLine: I,
      paddingTop: B.top,
      paddingBottom: B.bottom,
      minimap: R,
      verticalScrollbarWidth: M,
      viewLineCount: d,
      remainingWidth: le,
      isViewportWrapping: be
    }, t.memory || new cEc());
    if (ke.renderMinimap !== 0 && ke.minimapLeft === 0) {
      ee += ke.minimapWidth;
      re += ke.minimapWidth;
      ne += ke.minimapWidth;
      pe += ke.minimapWidth;
    }
    const Se = le - ke.minimapWidth;
    const Fe = Math.max(1, Math.floor((Se - M - 2) / a));
    const De = O ? $ : 0;
    if (be) {
      fe = Math.max(1, Fe);
      if (g === "bounded") {
        fe = Math.min(fe, f);
      }
    }
    return {
      width: i,
      height: r,
      glyphMarginLeft: ee,
      glyphMarginWidth: X,
      glyphMarginDecorationLaneCount: t.glyphMarginDecorationLaneCount,
      lineNumbersLeft: re,
      lineNumbersWidth: j,
      decorationsLeft: ne,
      decorationsWidth: Y,
      contentLeft: pe,
      contentWidth: Se,
      minimap: ke,
      viewportColumn: Fe,
      isWordWrapMinified: he,
      isViewportWrapping: be,
      wrappingColumn: fe,
      verticalScrollbarWidth: M,
      horizontalScrollbarHeight: H,
      overviewRuler: {
        top: De,
        width: M,
        height: r - De * 2,
        right: 0
      }
    };
  }
};
Phh = class extends eI {
  constructor() {
    super(144, "wrappingStrategy", "simple", {
      "editor.wrappingStrategy": {
        enumDescriptions: [_(376, null), _(377, null)],
        type: "string",
        enum: ["simple", "advanced"],
        default: "simple",
        description: _(378, null)
      }
    });
  }
  validate(n) {
    return WI(n, "simple", ["simple", "advanced"]);
  }
  compute(n, e, t) {
    if (e.get(2) === 2) {
      return "advanced";
    } else {
      return t;
    }
  }
};
(function (n) {
  n.Off = "off";
  n.OnCode = "onCode";
  n.On = "on";
})(Foe ||= {});
Lhh = class extends eI {
  constructor() {
    const n = {
      enabled: Foe.Off
    };
    super(66, "lightbulb", n, {
      "editor.lightbulb.enabled": {
        type: "string",
        enum: [Foe.Off, Foe.OnCode, Foe.On],
        default: n.enabled,
        enumDescriptions: [_(379, null), _(380, null), _(381, null)],
        description: _(382, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    } else {
      return {
        enabled: WI(n.enabled, this.defaultValue.enabled, [Foe.Off, Foe.OnCode, Foe.On])
      };
    }
  }
};
Nhh = class extends eI {
  constructor() {
    const n = {
      enabled: true,
      maxLineCount: 5,
      defaultModel: "outlineModel",
      scrollWithEditor: true
    };
    super(120, "stickyScroll", n, {
      "editor.stickyScroll.enabled": {
        type: "boolean",
        default: n.enabled,
        description: _(383, null)
      },
      "editor.stickyScroll.maxLineCount": {
        type: "number",
        default: n.maxLineCount,
        minimum: 1,
        maximum: 20,
        description: _(384, null)
      },
      "editor.stickyScroll.defaultModel": {
        type: "string",
        enum: ["outlineModel", "foldingProviderModel", "indentationModel"],
        default: n.defaultModel,
        description: _(385, null)
      },
      "editor.stickyScroll.scrollWithEditor": {
        type: "boolean",
        default: n.scrollWithEditor,
        description: _(386, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      enabled: sp(e.enabled, this.defaultValue.enabled),
      maxLineCount: aE.clampedInt(e.maxLineCount, this.defaultValue.maxLineCount, 1, 20),
      defaultModel: WI(e.defaultModel, this.defaultValue.defaultModel, ["outlineModel", "foldingProviderModel", "indentationModel"]),
      scrollWithEditor: sp(e.scrollWithEditor, this.defaultValue.scrollWithEditor)
    };
  }
};
Mhh = class extends eI {
  constructor() {
    const n = {
      enabled: "on",
      fontSize: 0,
      fontFamily: "",
      padding: false,
      maximumLength: 43
    };
    super(146, "inlayHints", n, {
      "editor.inlayHints.enabled": {
        type: "string",
        default: n.enabled,
        description: _(387, null),
        enum: ["on", "onUnlessPressed", "offUnlessPressed", "off"],
        markdownEnumDescriptions: [_(388, null), _(389, null, Fs ? "Ctrl+Option" : "Ctrl+Alt"), _(390, null, Fs ? "Ctrl+Option" : "Ctrl+Alt"), _(391, null)]
      },
      "editor.inlayHints.fontSize": {
        type: "number",
        default: n.fontSize,
        markdownDescription: _(392, null, "`#editor.fontSize#`", "`5`")
      },
      "editor.inlayHints.fontFamily": {
        type: "string",
        default: n.fontFamily,
        markdownDescription: _(393, null, "`#editor.fontFamily#`")
      },
      "editor.inlayHints.padding": {
        type: "boolean",
        default: n.padding,
        description: _(394, null)
      },
      "editor.inlayHints.maximumLength": {
        type: "number",
        default: n.maximumLength,
        markdownDescription: _(395, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    if (typeof e.enabled == "boolean") {
      e.enabled = e.enabled ? "on" : "off";
    }
    return {
      enabled: WI(e.enabled, this.defaultValue.enabled, ["on", "off", "offUnlessPressed", "onUnlessPressed"]),
      fontSize: aE.clampedInt(e.fontSize, this.defaultValue.fontSize, 0, 100),
      fontFamily: OY.string(e.fontFamily, this.defaultValue.fontFamily),
      padding: sp(e.padding, this.defaultValue.padding),
      maximumLength: aE.clampedInt(e.maximumLength, this.defaultValue.maximumLength, 0, Number.MAX_SAFE_INTEGER)
    };
  }
};
Fhh = class extends eI {
  constructor() {
    super(67, "lineDecorationsWidth", 10);
  }
  validate(n) {
    if (typeof n == "string" && /^\d+(\.\d+)?ch$/.test(n)) {
      return -parseFloat(n.substring(0, n.length - 2));
    } else {
      return aE.clampedInt(n, this.defaultValue, 0, 1000);
    }
  }
  compute(n, e, t) {
    if (t < 0) {
      return aE.clampedInt(-t * n.fontInfo.typicalHalfwidthCharacterWidth, this.defaultValue, 0, 1000);
    } else {
      return t;
    }
  }
};
Ohh = class extends Pde {
  constructor() {
    super(68, "lineHeight", jI.lineHeight, n => Pde.clamp(n, 0, 150), {
      markdownDescription: _(396, null)
    });
  }
  compute(n, e, t) {
    return n.fontInfo.lineHeight;
  }
};
Uhh = class extends eI {
  constructor() {
    const n = {
      enabled: false,
      size: "proportional",
      side: "right",
      showSlider: "mouseover",
      autohide: false,
      renderCharacters: true,
      maxColumn: 120,
      scale: 1,
      showRegionSectionHeaders: true,
      showMarkSectionHeaders: true,
      markSectionHeaderRegex: "\\bMARK:\\s*(?<separator>-?)\\s*(?<label>.*)$",
      sectionHeaderFontSize: 9,
      sectionHeaderLetterSpacing: 1
    };
    super(74, "minimap", n, {
      "editor.minimap.enabled": {
        type: "boolean",
        default: n.enabled,
        description: _(397, null)
      },
      "editor.minimap.autohide": {
        type: "boolean",
        default: n.autohide,
        description: _(398, null)
      },
      "editor.minimap.size": {
        type: "string",
        enum: ["proportional", "fill", "fit"],
        enumDescriptions: [_(399, null), _(400, null), _(401, null)],
        default: n.size,
        description: _(402, null)
      },
      "editor.minimap.side": {
        type: "string",
        enum: ["left", "right"],
        default: n.side,
        description: _(403, null)
      },
      "editor.minimap.showSlider": {
        type: "string",
        enum: ["always", "mouseover"],
        default: n.showSlider,
        description: _(404, null)
      },
      "editor.minimap.scale": {
        type: "number",
        default: n.scale,
        minimum: 1,
        maximum: 3,
        enum: [1, 2, 3],
        description: _(405, null)
      },
      "editor.minimap.renderCharacters": {
        type: "boolean",
        default: n.renderCharacters,
        description: _(406, null)
      },
      "editor.minimap.maxColumn": {
        type: "number",
        default: n.maxColumn,
        description: _(407, null)
      },
      "editor.minimap.showRegionSectionHeaders": {
        type: "boolean",
        default: n.showRegionSectionHeaders,
        description: _(408, null)
      },
      "editor.minimap.showMarkSectionHeaders": {
        type: "boolean",
        default: n.showMarkSectionHeaders,
        description: _(409, null)
      },
      "editor.minimap.markSectionHeaderRegex": {
        type: "string",
        default: n.markSectionHeaderRegex,
        description: _(410, null)
      },
      "editor.minimap.sectionHeaderFontSize": {
        type: "number",
        default: n.sectionHeaderFontSize,
        description: _(411, null)
      },
      "editor.minimap.sectionHeaderLetterSpacing": {
        type: "number",
        default: n.sectionHeaderLetterSpacing,
        description: _(412, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    let t = this.defaultValue.markSectionHeaderRegex;
    const i = n.markSectionHeaderRegex;
    if (typeof i == "string") {
      try {
        new RegExp(i, "d");
        t = i;
      } catch {}
    }
    return {
      enabled: sp(e.enabled, this.defaultValue.enabled),
      autohide: sp(e.autohide, this.defaultValue.autohide),
      size: WI(e.size, this.defaultValue.size, ["proportional", "fill", "fit"]),
      side: WI(e.side, this.defaultValue.side, ["right", "left"]),
      showSlider: WI(e.showSlider, this.defaultValue.showSlider, ["always", "mouseover"]),
      renderCharacters: sp(e.renderCharacters, this.defaultValue.renderCharacters),
      scale: aE.clampedInt(e.scale, 1, 1, 3),
      maxColumn: aE.clampedInt(e.maxColumn, this.defaultValue.maxColumn, 1, 10000),
      showRegionSectionHeaders: sp(e.showRegionSectionHeaders, this.defaultValue.showRegionSectionHeaders),
      showMarkSectionHeaders: sp(e.showMarkSectionHeaders, this.defaultValue.showMarkSectionHeaders),
      markSectionHeaderRegex: t,
      sectionHeaderFontSize: Pde.clamp(e.sectionHeaderFontSize ?? this.defaultValue.sectionHeaderFontSize, 4, 32),
      sectionHeaderLetterSpacing: Pde.clamp(e.sectionHeaderLetterSpacing ?? this.defaultValue.sectionHeaderLetterSpacing, 0, 5)
    };
  }
};
$hh = class extends eI {
  constructor() {
    super(88, "padding", {
      top: 0,
      bottom: 0
    }, {
      "editor.padding.top": {
        type: "number",
        default: 0,
        minimum: 0,
        maximum: 1000,
        description: _(413, null)
      },
      "editor.padding.bottom": {
        type: "number",
        default: 0,
        minimum: 0,
        maximum: 1000,
        description: _(414, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      top: aE.clampedInt(e.top, 0, 0, 1000),
      bottom: aE.clampedInt(e.bottom, 0, 0, 1000)
    };
  }
};
qhh = class extends eI {
  constructor() {
    const n = {
      enabled: true,
      cycle: true
    };
    super(90, "parameterHints", n, {
      "editor.parameterHints.enabled": {
        type: "boolean",
        default: n.enabled,
        description: _(415, null)
      },
      "editor.parameterHints.cycle": {
        type: "boolean",
        default: n.cycle,
        description: _(416, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      enabled: sp(e.enabled, this.defaultValue.enabled),
      cycle: sp(e.cycle, this.defaultValue.cycle)
    };
  }
};
Hhh = class extends _Ve {
  constructor() {
    super(149);
  }
  compute(n, e, t) {
    return n.pixelRatio;
  }
};
Jhh = class extends eI {
  constructor() {
    super(92, "placeholder", undefined);
  }
  validate(n) {
    if (typeof n === "undefined") {
      return this.defaultValue;
    } else if (typeof n == "string") {
      return n;
    } else {
      return this.defaultValue;
    }
  }
};
Ghh = class extends eI {
  constructor() {
    const n = {
      other: "on",
      comments: "off",
      strings: "off"
    };
    const e = [{
      type: "boolean"
    }, {
      type: "string",
      enum: ["on", "inline", "off"],
      enumDescriptions: [_(417, null), _(418, null), _(419, null)]
    }];
    super(94, "quickSuggestions", n, {
      type: "object",
      additionalProperties: false,
      properties: {
        strings: {
          anyOf: e,
          default: n.strings,
          description: _(420, null)
        },
        comments: {
          anyOf: e,
          default: n.comments,
          description: _(421, null)
        },
        other: {
          anyOf: e,
          default: n.other,
          description: _(422, null)
        }
      },
      default: n,
      markdownDescription: _(423, null, "`#editor.suggestOnTriggerCharacters#`")
    });
    this.defaultValue = n;
  }
  validate(n) {
    if (typeof n == "boolean") {
      const l = n ? "on" : "off";
      return {
        comments: l,
        strings: l,
        other: l
      };
    }
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const {
      other: e,
      comments: t,
      strings: i
    } = n;
    const r = ["on", "inline", "off"];
    let s;
    let o;
    let a;
    if (typeof e == "boolean") {
      s = e ? "on" : "off";
    } else {
      s = WI(e, this.defaultValue.other, r);
    }
    if (typeof t == "boolean") {
      o = t ? "on" : "off";
    } else {
      o = WI(t, this.defaultValue.comments, r);
    }
    if (typeof i == "boolean") {
      a = i ? "on" : "off";
    } else {
      a = WI(i, this.defaultValue.strings, r);
    }
    return {
      other: s,
      comments: o,
      strings: a
    };
  }
};
(function (n) {
  n[n.Off = 0] = "Off";
  n[n.On = 1] = "On";
  n[n.Relative = 2] = "Relative";
  n[n.Interval = 3] = "Interval";
  n[n.Custom = 4] = "Custom";
})(Whh ||= {});
Qhh = class extends eI {
  constructor() {
    super(69, "lineNumbers", {
      renderType: 1,
      renderFn: null
    }, {
      type: "string",
      enum: ["off", "on", "relative", "interval"],
      enumDescriptions: [_(424, null), _(425, null), _(426, null), _(427, null)],
      default: "on",
      description: _(428, null)
    });
  }
  validate(n) {
    let e = this.defaultValue.renderType;
    let t = this.defaultValue.renderFn;
    if (typeof n !== "undefined") {
      if (typeof n == "function") {
        e = 4;
        t = n;
      } else if (n === "interval") {
        e = 3;
      } else if (n === "relative") {
        e = 2;
      } else if (n === "on") {
        e = 1;
      } else {
        e = 0;
      }
    }
    return {
      renderType: e,
      renderFn: t
    };
  }
};
jhh = class extends eI {
  constructor() {
    const n = [];
    const e = {
      type: "number",
      description: _(429, null)
    };
    super(107, "rulers", n, {
      type: "array",
      items: {
        anyOf: [e, {
          type: ["object"],
          properties: {
            column: e,
            color: {
              type: "string",
              description: _(430, null),
              format: "color-hex"
            }
          }
        }]
      },
      default: n,
      description: _(431, null)
    });
  }
  validate(n) {
    if (Array.isArray(n)) {
      const e = [];
      for (const t of n) {
        if (typeof t == "number") {
          e.push({
            column: aE.clampedInt(t, 0, 0, 10000),
            color: null
          });
        } else if (t && typeof t == "object") {
          const i = t;
          e.push({
            column: aE.clampedInt(i.column, 0, 0, 10000),
            color: i.color
          });
        }
      }
      e.sort((t, i) => t.column - i.column);
      return e;
    }
    return this.defaultValue;
  }
};
zhh = class extends eI {
  constructor() {
    super(97, "readOnlyMessage", undefined);
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    } else {
      return n;
    }
  }
};
Vhh = class extends eI {
  constructor() {
    const n = {
      vertical: 1,
      horizontal: 1,
      arrowSize: 11,
      useShadows: true,
      verticalHasArrows: false,
      horizontalHasArrows: false,
      horizontalScrollbarSize: 12,
      horizontalSliderSize: 12,
      verticalScrollbarSize: 14,
      verticalSliderSize: 14,
      handleMouseWheel: true,
      ignoreVerticalScrolling: false,
      alwaysConsumeMouseWheel: true,
      scrollByPage: false,
      ignoreHorizontalScrollbarInContentHeight: false
    };
    super(108, "scrollbar", n, {
      "editor.scrollbar.vertical": {
        type: "string",
        enum: ["auto", "visible", "hidden"],
        enumDescriptions: [_(432, null), _(433, null), _(434, null)],
        default: "auto",
        description: _(435, null)
      },
      "editor.scrollbar.horizontal": {
        type: "string",
        enum: ["auto", "visible", "hidden"],
        enumDescriptions: [_(436, null), _(437, null), _(438, null)],
        default: "auto",
        description: _(439, null)
      },
      "editor.scrollbar.verticalScrollbarSize": {
        type: "number",
        default: n.verticalScrollbarSize,
        description: _(440, null)
      },
      "editor.scrollbar.horizontalScrollbarSize": {
        type: "number",
        default: n.horizontalScrollbarSize,
        description: _(441, null)
      },
      "editor.scrollbar.scrollByPage": {
        type: "boolean",
        default: n.scrollByPage,
        description: _(442, null)
      },
      "editor.scrollbar.ignoreHorizontalScrollbarInContentHeight": {
        type: "boolean",
        default: n.ignoreHorizontalScrollbarInContentHeight,
        description: _(443, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    const t = aE.clampedInt(e.horizontalScrollbarSize, this.defaultValue.horizontalScrollbarSize, 0, 1000);
    const i = aE.clampedInt(e.verticalScrollbarSize, this.defaultValue.verticalScrollbarSize, 0, 1000);
    return {
      arrowSize: aE.clampedInt(e.arrowSize, this.defaultValue.arrowSize, 0, 1000),
      vertical: fhh(e.vertical, this.defaultValue.vertical),
      horizontal: fhh(e.horizontal, this.defaultValue.horizontal),
      useShadows: sp(e.useShadows, this.defaultValue.useShadows),
      verticalHasArrows: sp(e.verticalHasArrows, this.defaultValue.verticalHasArrows),
      horizontalHasArrows: sp(e.horizontalHasArrows, this.defaultValue.horizontalHasArrows),
      handleMouseWheel: sp(e.handleMouseWheel, this.defaultValue.handleMouseWheel),
      ignoreVerticalScrolling: sp(e.ignoreVerticalScrolling, this.defaultValue.ignoreVerticalScrolling),
      alwaysConsumeMouseWheel: sp(e.alwaysConsumeMouseWheel, this.defaultValue.alwaysConsumeMouseWheel),
      horizontalScrollbarSize: t,
      horizontalSliderSize: aE.clampedInt(e.horizontalSliderSize, t, 0, 1000),
      verticalScrollbarSize: i,
      verticalSliderSize: aE.clampedInt(e.verticalSliderSize, i, 0, 1000),
      scrollByPage: sp(e.scrollByPage, this.defaultValue.scrollByPage),
      ignoreHorizontalScrollbarInContentHeight: sp(e.ignoreHorizontalScrollbarInContentHeight, this.defaultValue.ignoreHorizontalScrollbarInContentHeight)
    };
  }
};
Rte = "inUntrustedWorkspace";
sz = {
  allowedCharacters: "editor.unicodeHighlight.allowedCharacters",
  invisibleCharacters: "editor.unicodeHighlight.invisibleCharacters",
  nonBasicASCII: "editor.unicodeHighlight.nonBasicASCII",
  ambiguousCharacters: "editor.unicodeHighlight.ambiguousCharacters",
  includeComments: "editor.unicodeHighlight.includeComments",
  includeStrings: "editor.unicodeHighlight.includeStrings",
  allowedLocales: "editor.unicodeHighlight.allowedLocales"
};
Khh = class extends eI {
  constructor() {
    const n = {
      nonBasicASCII: Rte,
      invisibleCharacters: true,
      ambiguousCharacters: true,
      includeComments: Rte,
      includeStrings: true,
      allowedCharacters: {},
      allowedLocales: {
        _os: true,
        _vscode: true
      }
    };
    super(130, "unicodeHighlight", n, {
      [sz.nonBasicASCII]: {
        restricted: true,
        type: ["boolean", "string"],
        enum: [true, false, Rte],
        default: n.nonBasicASCII,
        description: _(444, null)
      },
      [sz.invisibleCharacters]: {
        restricted: true,
        type: "boolean",
        default: n.invisibleCharacters,
        description: _(445, null)
      },
      [sz.ambiguousCharacters]: {
        restricted: true,
        type: "boolean",
        default: n.ambiguousCharacters,
        description: _(446, null)
      },
      [sz.includeComments]: {
        restricted: true,
        type: ["boolean", "string"],
        enum: [true, false, Rte],
        default: n.includeComments,
        description: _(447, null)
      },
      [sz.includeStrings]: {
        restricted: true,
        type: ["boolean", "string"],
        enum: [true, false, Rte],
        default: n.includeStrings,
        description: _(448, null)
      },
      [sz.allowedCharacters]: {
        restricted: true,
        type: "object",
        default: n.allowedCharacters,
        description: _(449, null),
        additionalProperties: {
          type: "boolean"
        }
      },
      [sz.allowedLocales]: {
        restricted: true,
        type: "object",
        additionalProperties: {
          type: "boolean"
        },
        default: n.allowedLocales,
        description: _(450, null)
      }
    });
  }
  applyUpdate(n, e) {
    let t = false;
    if (e.allowedCharacters && n) {
      if (!fv(n.allowedCharacters, e.allowedCharacters)) {
        n = {
          ...n,
          allowedCharacters: e.allowedCharacters
        };
        t = true;
      }
    }
    if (e.allowedLocales && n) {
      if (!fv(n.allowedLocales, e.allowedLocales)) {
        n = {
          ...n,
          allowedLocales: e.allowedLocales
        };
        t = true;
      }
    }
    const i = super.applyUpdate(n, e);
    if (t) {
      return new nOn(i.newValue, true);
    } else {
      return i;
    }
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      nonBasicASCII: wOt(e.nonBasicASCII, Rte, [true, false, Rte]),
      invisibleCharacters: sp(e.invisibleCharacters, this.defaultValue.invisibleCharacters),
      ambiguousCharacters: sp(e.ambiguousCharacters, this.defaultValue.ambiguousCharacters),
      includeComments: wOt(e.includeComments, Rte, [true, false, Rte]),
      includeStrings: wOt(e.includeStrings, Rte, [true, false, Rte]),
      allowedCharacters: this.validateBooleanMap(n.allowedCharacters, this.defaultValue.allowedCharacters),
      allowedLocales: this.validateBooleanMap(n.allowedLocales, this.defaultValue.allowedLocales)
    };
  }
  validateBooleanMap(n, e) {
    if (typeof n != "object" || !n) {
      return e;
    }
    const t = {};
    for (const [i, r] of Object.entries(n)) {
      if (r === true) {
        t[i] = true;
      }
    }
    return t;
  }
};
Yhh = class extends eI {
  constructor() {
    const n = {
      enabled: true,
      mode: "subwordSmart",
      showToolbar: "onHover",
      suppressSuggestions: false,
      keepOnBlur: false,
      fontFamily: "default",
      syntaxHighlightingEnabled: true,
      edits: {
        enabled: true,
        showCollapsed: false,
        renderSideBySide: "auto",
        allowCodeShifting: "always",
        useMultiLineGhostText: true
      }
    };
    super(64, "inlineSuggest", n, {
      "editor.inlineSuggest.enabled": {
        type: "boolean",
        default: n.enabled,
        description: _(451, null)
      },
      "editor.inlineSuggest.showToolbar": {
        type: "string",
        default: n.showToolbar,
        enum: ["always", "onHover", "never"],
        enumDescriptions: [_(452, null), _(453, null), _(454, null)],
        description: _(455, null)
      },
      "editor.inlineSuggest.syntaxHighlightingEnabled": {
        type: "boolean",
        default: n.syntaxHighlightingEnabled,
        description: _(456, null)
      },
      "editor.inlineSuggest.suppressSuggestions": {
        type: "boolean",
        default: n.suppressSuggestions,
        description: _(457, null)
      },
      "editor.inlineSuggest.fontFamily": {
        type: "string",
        default: n.fontFamily,
        description: _(458, null)
      },
      "editor.inlineSuggest.edits.allowCodeShifting": {
        type: "string",
        default: n.edits.allowCodeShifting,
        description: _(459, null),
        enum: ["always", "horizontal", "never"],
        tags: ["nextEditSuggestions"]
      },
      "editor.inlineSuggest.edits.renderSideBySide": {
        type: "string",
        default: n.edits.renderSideBySide,
        description: _(460, null),
        enum: ["auto", "never"],
        enumDescriptions: [_(461, null), _(462, null)],
        tags: ["nextEditSuggestions"]
      },
      "editor.inlineSuggest.edits.showCollapsed": {
        type: "boolean",
        default: n.edits.showCollapsed,
        description: _(463, null),
        tags: ["nextEditSuggestions"]
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      enabled: sp(e.enabled, this.defaultValue.enabled),
      mode: WI(e.mode, this.defaultValue.mode, ["prefix", "subword", "subwordSmart"]),
      showToolbar: WI(e.showToolbar, this.defaultValue.showToolbar, ["always", "onHover", "never"]),
      suppressSuggestions: sp(e.suppressSuggestions, this.defaultValue.suppressSuggestions),
      keepOnBlur: sp(e.keepOnBlur, this.defaultValue.keepOnBlur),
      fontFamily: OY.string(e.fontFamily, this.defaultValue.fontFamily),
      syntaxHighlightingEnabled: sp(e.syntaxHighlightingEnabled, this.defaultValue.syntaxHighlightingEnabled),
      edits: {
        enabled: sp(e.edits?.enabled, this.defaultValue.edits.enabled),
        showCollapsed: sp(e.edits?.showCollapsed, this.defaultValue.edits.showCollapsed),
        allowCodeShifting: WI(e.edits?.allowCodeShifting, this.defaultValue.edits.allowCodeShifting, ["always", "horizontal", "never"]),
        renderSideBySide: WI(e.edits?.renderSideBySide, this.defaultValue.edits.renderSideBySide, ["never", "auto"]),
        useMultiLineGhostText: sp(e.edits?.useMultiLineGhostText, this.defaultValue.edits.useMultiLineGhostText)
      }
    };
  }
};
Zhh = class extends eI {
  constructor() {
    const n = {
      enabled: J$.bracketPairColorizationOptions.enabled,
      independentColorPoolPerBracketType: J$.bracketPairColorizationOptions.independentColorPoolPerBracketType
    };
    super(15, "bracketPairColorization", n, {
      "editor.bracketPairColorization.enabled": {
        type: "boolean",
        default: n.enabled,
        markdownDescription: _(464, null, "`#workbench.colorCustomizations#`")
      },
      "editor.bracketPairColorization.independentColorPoolPerBracketType": {
        type: "boolean",
        default: n.independentColorPoolPerBracketType,
        description: _(465, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      enabled: sp(e.enabled, this.defaultValue.enabled),
      independentColorPoolPerBracketType: sp(e.independentColorPoolPerBracketType, this.defaultValue.independentColorPoolPerBracketType)
    };
  }
};
Xhh = class extends eI {
  constructor() {
    const n = {
      bracketPairs: false,
      bracketPairsHorizontal: "active",
      highlightActiveBracketPair: true,
      indentation: true,
      highlightActiveIndentation: true
    };
    super(16, "guides", n, {
      "editor.guides.bracketPairs": {
        type: ["boolean", "string"],
        enum: [true, "active", false],
        enumDescriptions: [_(466, null), _(467, null), _(468, null)],
        default: n.bracketPairs,
        description: _(469, null)
      },
      "editor.guides.bracketPairsHorizontal": {
        type: ["boolean", "string"],
        enum: [true, "active", false],
        enumDescriptions: [_(470, null), _(471, null), _(472, null)],
        default: n.bracketPairsHorizontal,
        description: _(473, null)
      },
      "editor.guides.highlightActiveBracketPair": {
        type: "boolean",
        default: n.highlightActiveBracketPair,
        description: _(474, null)
      },
      "editor.guides.indentation": {
        type: "boolean",
        default: n.indentation,
        description: _(475, null)
      },
      "editor.guides.highlightActiveIndentation": {
        type: ["boolean", "string"],
        enum: [true, "always", false],
        enumDescriptions: [_(476, null), _(477, null), _(478, null)],
        default: n.highlightActiveIndentation,
        description: _(479, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      bracketPairs: wOt(e.bracketPairs, this.defaultValue.bracketPairs, [true, false, "active"]),
      bracketPairsHorizontal: wOt(e.bracketPairsHorizontal, this.defaultValue.bracketPairsHorizontal, [true, false, "active"]),
      highlightActiveBracketPair: sp(e.highlightActiveBracketPair, this.defaultValue.highlightActiveBracketPair),
      indentation: sp(e.indentation, this.defaultValue.indentation),
      highlightActiveIndentation: wOt(e.highlightActiveIndentation, this.defaultValue.highlightActiveIndentation, [true, false, "always"])
    };
  }
};
emh = class extends eI {
  constructor() {
    const n = {
      insertMode: "insert",
      filterGraceful: true,
      snippetsPreventQuickSuggestions: false,
      localityBonus: false,
      shareSuggestSelections: false,
      selectionMode: "always",
      showIcons: true,
      showStatusBar: false,
      preview: false,
      previewMode: "subwordSmart",
      showInlineDetails: true,
      showMethods: true,
      showFunctions: true,
      showConstructors: true,
      showDeprecated: true,
      matchOnWordStartOnly: true,
      showFields: true,
      showVariables: true,
      showClasses: true,
      showStructs: true,
      showInterfaces: true,
      showModules: true,
      showProperties: true,
      showEvents: true,
      showOperators: true,
      showUnits: true,
      showValues: true,
      showConstants: true,
      showEnums: true,
      showEnumMembers: true,
      showKeywords: true,
      showWords: true,
      showColors: true,
      showFiles: true,
      showReferences: true,
      showFolders: true,
      showTypeParameters: true,
      showSnippets: true,
      showUsers: true,
      showIssues: true
    };
    super(123, "suggest", n, {
      "editor.suggest.insertMode": {
        type: "string",
        enum: ["insert", "replace"],
        enumDescriptions: [_(480, null), _(481, null)],
        default: n.insertMode,
        description: _(482, null)
      },
      "editor.suggest.filterGraceful": {
        type: "boolean",
        default: n.filterGraceful,
        description: _(483, null)
      },
      "editor.suggest.localityBonus": {
        type: "boolean",
        default: n.localityBonus,
        description: _(484, null)
      },
      "editor.suggest.shareSuggestSelections": {
        type: "boolean",
        default: n.shareSuggestSelections,
        markdownDescription: _(485, null)
      },
      "editor.suggest.selectionMode": {
        type: "string",
        enum: ["always", "never", "whenTriggerCharacter", "whenQuickSuggestion"],
        enumDescriptions: [_(486, null), _(487, null), _(488, null), _(489, null)],
        default: n.selectionMode,
        markdownDescription: _(490, null, "`#editor.quickSuggestions#`", "`#editor.suggestOnTriggerCharacters#`")
      },
      "editor.suggest.snippetsPreventQuickSuggestions": {
        type: "boolean",
        default: n.snippetsPreventQuickSuggestions,
        description: _(491, null)
      },
      "editor.suggest.showIcons": {
        type: "boolean",
        default: n.showIcons,
        description: _(492, null)
      },
      "editor.suggest.showStatusBar": {
        type: "boolean",
        default: n.showStatusBar,
        description: _(493, null)
      },
      "editor.suggest.preview": {
        type: "boolean",
        default: n.preview,
        description: _(494, null)
      },
      "editor.suggest.showInlineDetails": {
        type: "boolean",
        default: n.showInlineDetails,
        description: _(495, null)
      },
      "editor.suggest.maxVisibleSuggestions": {
        type: "number",
        deprecationMessage: _(496, null)
      },
      "editor.suggest.filteredTypes": {
        type: "object",
        deprecationMessage: _(497, null)
      },
      "editor.suggest.showMethods": {
        type: "boolean",
        default: true,
        markdownDescription: _(498, null)
      },
      "editor.suggest.showFunctions": {
        type: "boolean",
        default: true,
        markdownDescription: _(499, null)
      },
      "editor.suggest.showConstructors": {
        type: "boolean",
        default: true,
        markdownDescription: _(500, null)
      },
      "editor.suggest.showDeprecated": {
        type: "boolean",
        default: true,
        markdownDescription: _(501, null)
      },
      "editor.suggest.matchOnWordStartOnly": {
        type: "boolean",
        default: true,
        markdownDescription: _(502, null)
      },
      "editor.suggest.showFields": {
        type: "boolean",
        default: true,
        markdownDescription: _(503, null)
      },
      "editor.suggest.showVariables": {
        type: "boolean",
        default: true,
        markdownDescription: _(504, null)
      },
      "editor.suggest.showClasses": {
        type: "boolean",
        default: true,
        markdownDescription: _(505, null)
      },
      "editor.suggest.showStructs": {
        type: "boolean",
        default: true,
        markdownDescription: _(506, null)
      },
      "editor.suggest.showInterfaces": {
        type: "boolean",
        default: true,
        markdownDescription: _(507, null)
      },
      "editor.suggest.showModules": {
        type: "boolean",
        default: true,
        markdownDescription: _(508, null)
      },
      "editor.suggest.showProperties": {
        type: "boolean",
        default: true,
        markdownDescription: _(509, null)
      },
      "editor.suggest.showEvents": {
        type: "boolean",
        default: true,
        markdownDescription: _(510, null)
      },
      "editor.suggest.showOperators": {
        type: "boolean",
        default: true,
        markdownDescription: _(511, null)
      },
      "editor.suggest.showUnits": {
        type: "boolean",
        default: true,
        markdownDescription: _(512, null)
      },
      "editor.suggest.showValues": {
        type: "boolean",
        default: true,
        markdownDescription: _(513, null)
      },
      "editor.suggest.showConstants": {
        type: "boolean",
        default: true,
        markdownDescription: _(514, null)
      },
      "editor.suggest.showEnums": {
        type: "boolean",
        default: true,
        markdownDescription: _(515, null)
      },
      "editor.suggest.showEnumMembers": {
        type: "boolean",
        default: true,
        markdownDescription: _(516, null)
      },
      "editor.suggest.showKeywords": {
        type: "boolean",
        default: true,
        markdownDescription: _(517, null)
      },
      "editor.suggest.showWords": {
        type: "boolean",
        default: true,
        markdownDescription: _(518, null)
      },
      "editor.suggest.showColors": {
        type: "boolean",
        default: true,
        markdownDescription: _(519, null)
      },
      "editor.suggest.showFiles": {
        type: "boolean",
        default: true,
        markdownDescription: _(520, null)
      },
      "editor.suggest.showReferences": {
        type: "boolean",
        default: true,
        markdownDescription: _(521, null)
      },
      "editor.suggest.showCustomcolors": {
        type: "boolean",
        default: true,
        markdownDescription: _(522, null)
      },
      "editor.suggest.showFolders": {
        type: "boolean",
        default: true,
        markdownDescription: _(523, null)
      },
      "editor.suggest.showTypeParameters": {
        type: "boolean",
        default: true,
        markdownDescription: _(524, null)
      },
      "editor.suggest.showSnippets": {
        type: "boolean",
        default: true,
        markdownDescription: _(525, null)
      },
      "editor.suggest.showUsers": {
        type: "boolean",
        default: true,
        markdownDescription: _(526, null)
      },
      "editor.suggest.showIssues": {
        type: "boolean",
        default: true,
        markdownDescription: _(527, null)
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      insertMode: WI(e.insertMode, this.defaultValue.insertMode, ["insert", "replace"]),
      filterGraceful: sp(e.filterGraceful, this.defaultValue.filterGraceful),
      snippetsPreventQuickSuggestions: sp(e.snippetsPreventQuickSuggestions, this.defaultValue.filterGraceful),
      localityBonus: sp(e.localityBonus, this.defaultValue.localityBonus),
      shareSuggestSelections: sp(e.shareSuggestSelections, this.defaultValue.shareSuggestSelections),
      selectionMode: WI(e.selectionMode, this.defaultValue.selectionMode, ["always", "never", "whenQuickSuggestion", "whenTriggerCharacter"]),
      showIcons: sp(e.showIcons, this.defaultValue.showIcons),
      showStatusBar: sp(e.showStatusBar, this.defaultValue.showStatusBar),
      preview: sp(e.preview, this.defaultValue.preview),
      previewMode: WI(e.previewMode, this.defaultValue.previewMode, ["prefix", "subword", "subwordSmart"]),
      showInlineDetails: sp(e.showInlineDetails, this.defaultValue.showInlineDetails),
      showMethods: sp(e.showMethods, this.defaultValue.showMethods),
      showFunctions: sp(e.showFunctions, this.defaultValue.showFunctions),
      showConstructors: sp(e.showConstructors, this.defaultValue.showConstructors),
      showDeprecated: sp(e.showDeprecated, this.defaultValue.showDeprecated),
      matchOnWordStartOnly: sp(e.matchOnWordStartOnly, this.defaultValue.matchOnWordStartOnly),
      showFields: sp(e.showFields, this.defaultValue.showFields),
      showVariables: sp(e.showVariables, this.defaultValue.showVariables),
      showClasses: sp(e.showClasses, this.defaultValue.showClasses),
      showStructs: sp(e.showStructs, this.defaultValue.showStructs),
      showInterfaces: sp(e.showInterfaces, this.defaultValue.showInterfaces),
      showModules: sp(e.showModules, this.defaultValue.showModules),
      showProperties: sp(e.showProperties, this.defaultValue.showProperties),
      showEvents: sp(e.showEvents, this.defaultValue.showEvents),
      showOperators: sp(e.showOperators, this.defaultValue.showOperators),
      showUnits: sp(e.showUnits, this.defaultValue.showUnits),
      showValues: sp(e.showValues, this.defaultValue.showValues),
      showConstants: sp(e.showConstants, this.defaultValue.showConstants),
      showEnums: sp(e.showEnums, this.defaultValue.showEnums),
      showEnumMembers: sp(e.showEnumMembers, this.defaultValue.showEnumMembers),
      showKeywords: sp(e.showKeywords, this.defaultValue.showKeywords),
      showWords: sp(e.showWords, this.defaultValue.showWords),
      showColors: sp(e.showColors, this.defaultValue.showColors),
      showFiles: sp(e.showFiles, this.defaultValue.showFiles),
      showReferences: sp(e.showReferences, this.defaultValue.showReferences),
      showFolders: sp(e.showFolders, this.defaultValue.showFolders),
      showTypeParameters: sp(e.showTypeParameters, this.defaultValue.showTypeParameters),
      showSnippets: sp(e.showSnippets, this.defaultValue.showSnippets),
      showUsers: sp(e.showUsers, this.defaultValue.showUsers),
      showIssues: sp(e.showIssues, this.defaultValue.showIssues)
    };
  }
};
tmh = class extends eI {
  constructor() {
    super(118, "smartSelect", {
      selectLeadingAndTrailingWhitespace: true,
      selectSubwords: true
    }, {
      "editor.smartSelect.selectLeadingAndTrailingWhitespace": {
        description: _(528, null),
        default: true,
        type: "boolean"
      },
      "editor.smartSelect.selectSubwords": {
        description: _(529, null),
        default: true,
        type: "boolean"
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    } else {
      return {
        selectLeadingAndTrailingWhitespace: sp(n.selectLeadingAndTrailingWhitespace, this.defaultValue.selectLeadingAndTrailingWhitespace),
        selectSubwords: sp(n.selectSubwords, this.defaultValue.selectSubwords)
      };
    }
  }
};
nmh = class extends eI {
  constructor() {
    const n = [];
    super(135, "wordSegmenterLocales", n, {
      anyOf: [{
        description: _(530, null),
        type: "string"
      }, {
        description: _(531, null),
        type: "array",
        items: {
          type: "string"
        }
      }]
    });
  }
  validate(n) {
    if (typeof n == "string") {
      n = [n];
    }
    if (Array.isArray(n)) {
      const e = [];
      for (const t of n) {
        if (typeof t == "string") {
          try {
            if (Intl.Segmenter.supportedLocalesOf(t).length > 0) {
              e.push(t);
            }
          } catch {}
        }
      }
      return e;
    }
    return this.defaultValue;
  }
};
(function (n) {
  n[n.None = 0] = "None";
  n[n.Same = 1] = "Same";
  n[n.Indent = 2] = "Indent";
  n[n.DeepIndent = 3] = "DeepIndent";
})(imh ||= {});
rmh = class extends eI {
  constructor() {
    super(143, "wrappingIndent", 1, {
      "editor.wrappingIndent": {
        type: "string",
        enum: ["none", "same", "indent", "deepIndent"],
        enumDescriptions: [_(532, null), _(533, null), _(534, null), _(535, null)],
        description: _(536, null),
        default: "same"
      }
    });
  }
  validate(n) {
    switch (n) {
      case "none":
        return 0;
      case "same":
        return 1;
      case "indent":
        return 2;
      case "deepIndent":
        return 3;
    }
    return 1;
  }
  compute(n, e, t) {
    if (e.get(2) === 2) {
      return 0;
    } else {
      return t;
    }
  }
};
smh = class extends _Ve {
  constructor() {
    super(152);
  }
  compute(n, e, t) {
    const i = e.get(151);
    return {
      isDominatedByLongLines: n.isDominatedByLongLines,
      isWordWrapMinified: i.isWordWrapMinified,
      isViewportWrapping: i.isViewportWrapping,
      wrappingColumn: i.wrappingColumn
    };
  }
};
omh = class extends eI {
  constructor() {
    const n = {
      enabled: true,
      showDropSelector: "afterDrop"
    };
    super(36, "dropIntoEditor", n, {
      "editor.dropIntoEditor.enabled": {
        type: "boolean",
        default: n.enabled,
        markdownDescription: _(537, null)
      },
      "editor.dropIntoEditor.showDropSelector": {
        type: "string",
        markdownDescription: _(538, null),
        enum: ["afterDrop", "never"],
        enumDescriptions: [_(539, null), _(540, null)],
        default: "afterDrop"
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      enabled: sp(e.enabled, this.defaultValue.enabled),
      showDropSelector: WI(e.showDropSelector, this.defaultValue.showDropSelector, ["afterDrop", "never"])
    };
  }
};
amh = class extends eI {
  constructor() {
    const n = {
      enabled: false,
      showPasteSelector: "afterPaste"
    };
    super(89, "pasteAs", n, {
      "editor.pasteAs.enabled": {
        type: "boolean",
        default: n.enabled,
        markdownDescription: _(541, null)
      },
      "editor.pasteAs.showPasteSelector": {
        type: "string",
        markdownDescription: _(542, null),
        enum: ["afterPaste", "never"],
        enumDescriptions: [_(543, null), _(544, null)],
        default: "afterPaste"
      }
    });
  }
  validate(n) {
    if (!n || typeof n != "object") {
      return this.defaultValue;
    }
    const e = n;
    return {
      enabled: sp(e.enabled, this.defaultValue.enabled),
      showPasteSelector: WI(e.showPasteSelector, this.defaultValue.showPasteSelector, ["afterPaste", "never"])
    };
  }
};
cmh = "Consolas, 'Courier New', monospace";
lmh = "Menlo, Monaco, 'Courier New', monospace";
umh = "'Droid Sans Mono', 'monospace', monospace";
jI = {
  fontFamily: Fs ? lmh : xv ? umh : cmh,
  fontWeight: "normal",
  fontSize: Fs ? 12 : 14,
  lineHeight: 0,
  letterSpacing: 0
};
CVe = [];
(function (n) {
  n[n.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter";
  n[n.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter";
  n[n.accessibilitySupport = 2] = "accessibilitySupport";
  n[n.accessibilityPageSize = 3] = "accessibilityPageSize";
  n[n.ariaLabel = 4] = "ariaLabel";
  n[n.ariaRequired = 5] = "ariaRequired";
  n[n.autoClosingBrackets = 6] = "autoClosingBrackets";
  n[n.autoClosingComments = 7] = "autoClosingComments";
  n[n.screenReaderAnnounceInlineSuggestion = 8] = "screenReaderAnnounceInlineSuggestion";
  n[n.autoClosingDelete = 9] = "autoClosingDelete";
  n[n.autoClosingOvertype = 10] = "autoClosingOvertype";
  n[n.autoClosingQuotes = 11] = "autoClosingQuotes";
  n[n.autoIndent = 12] = "autoIndent";
  n[n.automaticLayout = 13] = "automaticLayout";
  n[n.autoSurround = 14] = "autoSurround";
  n[n.bracketPairColorization = 15] = "bracketPairColorization";
  n[n.guides = 16] = "guides";
  n[n.codeLens = 17] = "codeLens";
  n[n.codeLensFontFamily = 18] = "codeLensFontFamily";
  n[n.codeLensFontSize = 19] = "codeLensFontSize";
  n[n.colorDecorators = 20] = "colorDecorators";
  n[n.colorDecoratorsLimit = 21] = "colorDecoratorsLimit";
  n[n.columnSelection = 22] = "columnSelection";
  n[n.comments = 23] = "comments";
  n[n.contextmenu = 24] = "contextmenu";
  n[n.copyWithSyntaxHighlighting = 25] = "copyWithSyntaxHighlighting";
  n[n.cursorBlinking = 26] = "cursorBlinking";
  n[n.cursorSmoothCaretAnimation = 27] = "cursorSmoothCaretAnimation";
  n[n.cursorStyle = 28] = "cursorStyle";
  n[n.cursorSurroundingLines = 29] = "cursorSurroundingLines";
  n[n.cursorSurroundingLinesStyle = 30] = "cursorSurroundingLinesStyle";
  n[n.cursorWidth = 31] = "cursorWidth";
  n[n.disableLayerHinting = 32] = "disableLayerHinting";
  n[n.disableMonospaceOptimizations = 33] = "disableMonospaceOptimizations";
  n[n.domReadOnly = 34] = "domReadOnly";
  n[n.dragAndDrop = 35] = "dragAndDrop";
  n[n.dropIntoEditor = 36] = "dropIntoEditor";
  n[n.experimentalEditContextEnabled = 37] = "experimentalEditContextEnabled";
  n[n.emptySelectionClipboard = 38] = "emptySelectionClipboard";
  n[n.experimentalGpuAcceleration = 39] = "experimentalGpuAcceleration";
  n[n.experimentalWhitespaceRendering = 40] = "experimentalWhitespaceRendering";
  n[n.extraEditorClassName = 41] = "extraEditorClassName";
  n[n.fastScrollSensitivity = 42] = "fastScrollSensitivity";
  n[n.find = 43] = "find";
  n[n.fixedOverflowWidgets = 44] = "fixedOverflowWidgets";
  n[n.folding = 45] = "folding";
  n[n.foldingStrategy = 46] = "foldingStrategy";
  n[n.foldingHighlight = 47] = "foldingHighlight";
  n[n.foldingImportsByDefault = 48] = "foldingImportsByDefault";
  n[n.foldingMaximumRegions = 49] = "foldingMaximumRegions";
  n[n.unfoldOnClickAfterEndOfLine = 50] = "unfoldOnClickAfterEndOfLine";
  n[n.fontFamily = 51] = "fontFamily";
  n[n.fontInfo = 52] = "fontInfo";
  n[n.fontLigatures = 53] = "fontLigatures";
  n[n.fontSize = 54] = "fontSize";
  n[n.fontWeight = 55] = "fontWeight";
  n[n.fontVariations = 56] = "fontVariations";
  n[n.formatOnPaste = 57] = "formatOnPaste";
  n[n.formatOnType = 58] = "formatOnType";
  n[n.glyphMargin = 59] = "glyphMargin";
  n[n.gotoLocation = 60] = "gotoLocation";
  n[n.hideCursorInOverviewRuler = 61] = "hideCursorInOverviewRuler";
  n[n.hover = 62] = "hover";
  n[n.inDiffEditor = 63] = "inDiffEditor";
  n[n.inlineSuggest = 64] = "inlineSuggest";
  n[n.letterSpacing = 65] = "letterSpacing";
  n[n.lightbulb = 66] = "lightbulb";
  n[n.lineDecorationsWidth = 67] = "lineDecorationsWidth";
  n[n.lineHeight = 68] = "lineHeight";
  n[n.lineNumbers = 69] = "lineNumbers";
  n[n.lineNumbersMinChars = 70] = "lineNumbersMinChars";
  n[n.linkedEditing = 71] = "linkedEditing";
  n[n.links = 72] = "links";
  n[n.matchBrackets = 73] = "matchBrackets";
  n[n.minimap = 74] = "minimap";
  n[n.mouseStyle = 75] = "mouseStyle";
  n[n.mouseWheelScrollSensitivity = 76] = "mouseWheelScrollSensitivity";
  n[n.mouseWheelZoom = 77] = "mouseWheelZoom";
  n[n.multiCursorMergeOverlapping = 78] = "multiCursorMergeOverlapping";
  n[n.multiCursorModifier = 79] = "multiCursorModifier";
  n[n.multiCursorPaste = 80] = "multiCursorPaste";
  n[n.multiCursorLimit = 81] = "multiCursorLimit";
  n[n.occurrencesHighlight = 82] = "occurrencesHighlight";
  n[n.occurrencesHighlightDelay = 83] = "occurrencesHighlightDelay";
  n[n.overtypeCursorStyle = 84] = "overtypeCursorStyle";
  n[n.overtypeOnPaste = 85] = "overtypeOnPaste";
  n[n.overviewRulerBorder = 86] = "overviewRulerBorder";
  n[n.overviewRulerLanes = 87] = "overviewRulerLanes";
  n[n.padding = 88] = "padding";
  n[n.pasteAs = 89] = "pasteAs";
  n[n.parameterHints = 90] = "parameterHints";
  n[n.peekWidgetDefaultFocus = 91] = "peekWidgetDefaultFocus";
  n[n.placeholder = 92] = "placeholder";
  n[n.definitionLinkOpensInPeek = 93] = "definitionLinkOpensInPeek";
  n[n.quickSuggestions = 94] = "quickSuggestions";
  n[n.quickSuggestionsDelay = 95] = "quickSuggestionsDelay";
  n[n.readOnly = 96] = "readOnly";
  n[n.readOnlyMessage = 97] = "readOnlyMessage";
  n[n.renameOnType = 98] = "renameOnType";
  n[n.renderControlCharacters = 99] = "renderControlCharacters";
  n[n.renderFinalNewline = 100] = "renderFinalNewline";
  n[n.renderLineHighlight = 101] = "renderLineHighlight";
  n[n.renderLineHighlightOnlyWhenFocus = 102] = "renderLineHighlightOnlyWhenFocus";
  n[n.renderValidationDecorations = 103] = "renderValidationDecorations";
  n[n.renderWhitespace = 104] = "renderWhitespace";
  n[n.revealHorizontalRightPadding = 105] = "revealHorizontalRightPadding";
  n[n.roundedSelection = 106] = "roundedSelection";
  n[n.rulers = 107] = "rulers";
  n[n.scrollbar = 108] = "scrollbar";
  n[n.scrollBeyondLastColumn = 109] = "scrollBeyondLastColumn";
  n[n.scrollBeyondLastLine = 110] = "scrollBeyondLastLine";
  n[n.scrollPredominantAxis = 111] = "scrollPredominantAxis";
  n[n.selectionClipboard = 112] = "selectionClipboard";
  n[n.selectionHighlight = 113] = "selectionHighlight";
  n[n.selectOnLineNumbers = 114] = "selectOnLineNumbers";
  n[n.showFoldingControls = 115] = "showFoldingControls";
  n[n.showUnused = 116] = "showUnused";
  n[n.snippetSuggestions = 117] = "snippetSuggestions";
  n[n.smartSelect = 118] = "smartSelect";
  n[n.smoothScrolling = 119] = "smoothScrolling";
  n[n.stickyScroll = 120] = "stickyScroll";
  n[n.stickyTabStops = 121] = "stickyTabStops";
  n[n.stopRenderingLineAfter = 122] = "stopRenderingLineAfter";
  n[n.suggest = 123] = "suggest";
  n[n.suggestFontSize = 124] = "suggestFontSize";
  n[n.suggestLineHeight = 125] = "suggestLineHeight";
  n[n.suggestOnTriggerCharacters = 126] = "suggestOnTriggerCharacters";
  n[n.suggestSelection = 127] = "suggestSelection";
  n[n.tabCompletion = 128] = "tabCompletion";
  n[n.tabIndex = 129] = "tabIndex";
  n[n.unicodeHighlighting = 130] = "unicodeHighlighting";
  n[n.unusualLineTerminators = 131] = "unusualLineTerminators";
  n[n.useShadowDOM = 132] = "useShadowDOM";
  n[n.useTabStops = 133] = "useTabStops";
  n[n.wordBreak = 134] = "wordBreak";
  n[n.wordSegmenterLocales = 135] = "wordSegmenterLocales";
  n[n.wordSeparators = 136] = "wordSeparators";
  n[n.wordWrap = 137] = "wordWrap";
  n[n.wordWrapBreakAfterCharacters = 138] = "wordWrapBreakAfterCharacters";
  n[n.wordWrapBreakBeforeCharacters = 139] = "wordWrapBreakBeforeCharacters";
  n[n.wordWrapColumn = 140] = "wordWrapColumn";
  n[n.wordWrapOverride1 = 141] = "wordWrapOverride1";
  n[n.wordWrapOverride2 = 142] = "wordWrapOverride2";
  n[n.wrappingIndent = 143] = "wrappingIndent";
  n[n.wrappingStrategy = 144] = "wrappingStrategy";
  n[n.showDeprecated = 145] = "showDeprecated";
  n[n.inlayHints = 146] = "inlayHints";
  n[n.effectiveCursorStyle = 147] = "effectiveCursorStyle";
  n[n.editorClassName = 148] = "editorClassName";
  n[n.pixelRatio = 149] = "pixelRatio";
  n[n.tabFocusMode = 150] = "tabFocusMode";
  n[n.layoutInfo = 151] = "layoutInfo";
  n[n.wrappingInfo = 152] = "wrappingInfo";
  n[n.defaultColorDecorators = 153] = "defaultColorDecorators";
  n[n.colorDecoratorsActivatedOn = 154] = "colorDecoratorsActivatedOn";
  n[n.inlineCompletionsAccessibilityVerbose = 155] = "inlineCompletionsAccessibilityVerbose";
  n[n.automaticLayoutIgnoreHeight = 156] = "automaticLayoutIgnoreHeight";
  n[n.effectiveExperimentalEditContextEnabled = 157] = "effectiveExperimentalEditContextEnabled";
  n[n.commentOnLineNumbers = 158] = "commentOnLineNumbers";
})(dmh ||= {});
oz = {
  acceptSuggestionOnCommitCharacter: hu(new hw(0, "acceptSuggestionOnCommitCharacter", true, {
    markdownDescription: _(545, null)
  })),
  acceptSuggestionOnEnter: hu(new QI(1, "acceptSuggestionOnEnter", "on", ["on", "smart", "off"], {
    markdownEnumDescriptions: ["", _(546, null), ""],
    markdownDescription: _(547, null)
  })),
  accessibilitySupport: hu(new Ahh()),
  accessibilityPageSize: hu(new aE(3, "accessibilityPageSize", 500, 1, 1073741824, {
    description: _(548, null),
    tags: ["accessibility"]
  })),
  ariaLabel: hu(new OY(4, "ariaLabel", _(549, null))),
  ariaRequired: hu(new hw(5, "ariaRequired", false, undefined)),
  screenReaderAnnounceInlineSuggestion: hu(new hw(8, "screenReaderAnnounceInlineSuggestion", true, {
    description: _(550, null),
    tags: ["accessibility"]
  })),
  autoClosingBrackets: hu(new QI(6, "autoClosingBrackets", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
    enumDescriptions: ["", _(551, null), _(552, null), ""],
    description: _(553, null)
  })),
  autoClosingComments: hu(new QI(7, "autoClosingComments", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
    enumDescriptions: ["", _(554, null), _(555, null), ""],
    description: _(556, null)
  })),
  autoClosingDelete: hu(new QI(9, "autoClosingDelete", "auto", ["always", "auto", "never"], {
    enumDescriptions: ["", _(557, null), ""],
    description: _(558, null)
  })),
  autoClosingOvertype: hu(new QI(10, "autoClosingOvertype", "auto", ["always", "auto", "never"], {
    enumDescriptions: ["", _(559, null), ""],
    description: _(560, null)
  })),
  autoClosingQuotes: hu(new QI(11, "autoClosingQuotes", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
    enumDescriptions: ["", _(561, null), _(562, null), ""],
    description: _(563, null)
  })),
  autoIndent: hu(new _Ot(12, "autoIndent", 4, "full", ["none", "keep", "brackets", "advanced", "full"], ooA, {
    enumDescriptions: [_(564, null), _(565, null), _(566, null), _(567, null), _(568, null)],
    description: _(569, null)
  })),
  automaticLayout: hu(new hw(13, "automaticLayout", false)),
  autoSurround: hu(new QI(14, "autoSurround", "languageDefined", ["languageDefined", "quotes", "brackets", "never"], {
    enumDescriptions: [_(570, null), _(571, null), _(572, null), ""],
    description: _(573, null)
  })),
  bracketPairColorization: hu(new Zhh()),
  bracketPairGuides: hu(new Xhh()),
  stickyTabStops: hu(new hw(121, "stickyTabStops", false, {
    description: _(574, null)
  })),
  codeLens: hu(new hw(17, "codeLens", true, {
    description: _(575, null)
  })),
  codeLensFontFamily: hu(new OY(18, "codeLensFontFamily", "", {
    description: _(576, null)
  })),
  codeLensFontSize: hu(new aE(19, "codeLensFontSize", 0, 0, 100, {
    type: "number",
    default: 0,
    minimum: 0,
    maximum: 100,
    markdownDescription: _(577, null)
  })),
  colorDecorators: hu(new hw(20, "colorDecorators", true, {
    description: _(578, null)
  })),
  colorDecoratorActivatedOn: hu(new QI(154, "colorDecoratorsActivatedOn", "clickAndHover", ["clickAndHover", "hover", "click"], {
    enumDescriptions: [_(579, null), _(580, null), _(581, null)],
    description: _(582, null)
  })),
  colorDecoratorsLimit: hu(new aE(21, "colorDecoratorsLimit", 500, 1, 1000000, {
    markdownDescription: _(583, null)
  })),
  columnSelection: hu(new hw(22, "columnSelection", false, {
    description: _(584, null)
  })),
  comments: hu(new yhh()),
  contextmenu: hu(new hw(24, "contextmenu", true)),
  copyWithSyntaxHighlighting: hu(new hw(25, "copyWithSyntaxHighlighting", true, {
    description: _(585, null)
  })),
  cursorBlinking: hu(new _Ot(26, "cursorBlinking", 1, "blink", ["blink", "smooth", "phase", "expand", "solid", "hidden"], ghh, {
    description: _(586, null)
  })),
  cursorSmoothCaretAnimation: hu(new QI(27, "cursorSmoothCaretAnimation", "off", ["off", "explicit", "on"], {
    enumDescriptions: [_(587, null), _(588, null), _(589, null)],
    description: _(590, null)
  })),
  cursorStyle: hu(new _Ot(28, "cursorStyle", hT.Line, "line", ["line", "block", "underline", "line-thin", "block-outline", "underline-thin"], aEc, {
    description: _(591, null)
  })),
  overtypeCursorStyle: hu(new _Ot(84, "overtypeCursorStyle", hT.Block, "block", ["line", "block", "underline", "line-thin", "block-outline", "underline-thin"], aEc, {
    description: _(592, null)
  })),
  cursorSurroundingLines: hu(new aE(29, "cursorSurroundingLines", 0, 0, 1073741824, {
    description: _(593, null)
  })),
  cursorSurroundingLinesStyle: hu(new QI(30, "cursorSurroundingLinesStyle", "default", ["default", "all"], {
    enumDescriptions: [_(594, null), _(595, null)],
    markdownDescription: _(596, null)
  })),
  cursorWidth: hu(new aE(31, "cursorWidth", 0, 0, 1073741824, {
    markdownDescription: _(597, null)
  })),
  disableLayerHinting: hu(new hw(32, "disableLayerHinting", false)),
  disableMonospaceOptimizations: hu(new hw(33, "disableMonospaceOptimizations", false)),
  domReadOnly: hu(new hw(34, "domReadOnly", false)),
  dragAndDrop: hu(new hw(35, "dragAndDrop", true, {
    description: _(598, null)
  })),
  emptySelectionClipboard: hu(new Chh()),
  dropIntoEditor: hu(new omh()),
  experimentalEditContextEnabled: hu(new hw(37, "experimentalEditContextEnabled", av.quality !== "stable", {
    description: _(599, null),
    included: cgt || KMo || kw
  })),
  stickyScroll: hu(new Nhh()),
  experimentalGpuAcceleration: hu(new QI(39, "experimentalGpuAcceleration", "off", ["off", "on"], {
    tags: ["experimental"],
    enumDescriptions: [_(600, null), _(601, null)],
    description: _(602, null)
  })),
  experimentalWhitespaceRendering: hu(new QI(40, "experimentalWhitespaceRendering", "svg", ["svg", "font", "off"], {
    enumDescriptions: [_(603, null), _(604, null), _(605, null)],
    description: _(606, null)
  })),
  extraEditorClassName: hu(new OY(41, "extraEditorClassName", "")),
  fastScrollSensitivity: hu(new Pde(42, "fastScrollSensitivity", 5, n => n <= 0 ? 5 : n, {
    markdownDescription: _(607, null)
  })),
  find: hu(new Shh()),
  fixedOverflowWidgets: hu(new hw(44, "fixedOverflowWidgets", false)),
  folding: hu(new hw(45, "folding", true, {
    description: _(608, null)
  })),
  foldingStrategy: hu(new QI(46, "foldingStrategy", "auto", ["auto", "indentation"], {
    enumDescriptions: [_(609, null), _(610, null)],
    description: _(611, null)
  })),
  foldingHighlight: hu(new hw(47, "foldingHighlight", true, {
    description: _(612, null)
  })),
  foldingImportsByDefault: hu(new hw(48, "foldingImportsByDefault", false, {
    description: _(613, null)
  })),
  foldingMaximumRegions: hu(new aE(49, "foldingMaximumRegions", 5000, 10, 65000, {
    description: _(614, null)
  })),
  unfoldOnClickAfterEndOfLine: hu(new hw(50, "unfoldOnClickAfterEndOfLine", false, {
    description: _(615, null)
  })),
  fontFamily: hu(new OY(51, "fontFamily", jI.fontFamily, {
    description: _(616, null)
  })),
  fontInfo: hu(new khh()),
  fontLigatures2: hu(new Y5e()),
  fontSize: hu(new Thh()),
  fontWeight: hu(new Ihh()),
  fontVariations: hu(new Y4o()),
  formatOnPaste: hu(new hw(57, "formatOnPaste", false, {
    description: _(617, null)
  })),
  formatOnType: hu(new hw(58, "formatOnType", false, {
    description: _(618, null)
  })),
  glyphMargin: hu(new hw(59, "glyphMargin", true, {
    description: _(619, null)
  })),
  gotoLocation: hu(new Dhh()),
  hideCursorInOverviewRuler: hu(new hw(61, "hideCursorInOverviewRuler", false, {
    description: _(620, null)
  })),
  hover: hu(new Bhh()),
  inDiffEditor: hu(new hw(63, "inDiffEditor", false)),
  letterSpacing: hu(new Pde(65, "letterSpacing", jI.letterSpacing, n => Pde.clamp(n, -5, 20), {
    description: _(621, null)
  })),
  lightbulb: hu(new Lhh()),
  lineDecorationsWidth: hu(new Fhh()),
  lineHeight: hu(new Ohh()),
  lineNumbers: hu(new Qhh()),
  lineNumbersMinChars: hu(new aE(70, "lineNumbersMinChars", 5, 1, 300)),
  linkedEditing: hu(new hw(71, "linkedEditing", false, {
    description: _(622, null)
  })),
  links: hu(new hw(72, "links", true, {
    description: _(623, null)
  })),
  matchBrackets: hu(new QI(73, "matchBrackets", "always", ["always", "near", "never"], {
    description: _(624, null)
  })),
  minimap: hu(new Uhh()),
  mouseStyle: hu(new QI(75, "mouseStyle", "text", ["text", "default", "copy"])),
  mouseWheelScrollSensitivity: hu(new Pde(76, "mouseWheelScrollSensitivity", 1, n => n === 0 ? 1 : n, {
    markdownDescription: _(625, null)
  })),
  mouseWheelZoom: hu(new hw(77, "mouseWheelZoom", false, {
    markdownDescription: _(Fs ? 626 : 627, null)
  })),
  multiCursorMergeOverlapping: hu(new hw(78, "multiCursorMergeOverlapping", true, {
    description: _(628, null)
  })),
  multiCursorModifier: hu(new _Ot(79, "multiCursorModifier", "altKey", "alt", ["ctrlCmd", "alt"], coA, {
    markdownEnumDescriptions: [_(629, null), _(630, null)],
    markdownDescription: _(631, null)
  })),
  multiCursorPaste: hu(new QI(80, "multiCursorPaste", "spread", ["spread", "full"], {
    markdownEnumDescriptions: [_(632, null), _(633, null)],
    markdownDescription: _(634, null)
  })),
  multiCursorLimit: hu(new aE(81, "multiCursorLimit", 10000, 1, 100000, {
    markdownDescription: _(635, null)
  })),
  occurrencesHighlight: hu(new QI(82, "occurrencesHighlight", "singleFile", ["off", "singleFile", "multiFile"], {
    markdownEnumDescriptions: [_(636, null), _(637, null), _(638, null)],
    markdownDescription: _(639, null)
  })),
  occurrencesHighlightDelay: hu(new aE(83, "occurrencesHighlightDelay", 0, 0, 2000, {
    description: _(640, null),
    tags: ["preview"]
  })),
  overtypeOnPaste: hu(new hw(85, "overtypeOnPaste", true, {
    description: _(641, null)
  })),
  overviewRulerBorder: hu(new hw(86, "overviewRulerBorder", true, {
    description: _(642, null)
  })),
  overviewRulerLanes: hu(new aE(87, "overviewRulerLanes", 3, 0, 3)),
  padding: hu(new $hh()),
  pasteAs: hu(new amh()),
  parameterHints: hu(new qhh()),
  peekWidgetDefaultFocus: hu(new QI(91, "peekWidgetDefaultFocus", "tree", ["tree", "editor"], {
    enumDescriptions: [_(643, null), _(644, null)],
    description: _(645, null)
  })),
  placeholder: hu(new Jhh()),
  definitionLinkOpensInPeek: hu(new hw(93, "definitionLinkOpensInPeek", false, {
    description: _(646, null)
  })),
  quickSuggestions: hu(new Ghh()),
  quickSuggestionsDelay: hu(new aE(95, "quickSuggestionsDelay", 10, 0, 1073741824, {
    description: _(647, null)
  })),
  readOnly: hu(new hw(96, "readOnly", false)),
  readOnlyMessage: hu(new zhh()),
  renameOnType: hu(new hw(98, "renameOnType", false, {
    description: _(648, null),
    markdownDeprecationMessage: _(649, null)
  })),
  renderControlCharacters: hu(new hw(99, "renderControlCharacters", true, {
    description: _(650, null),
    restricted: true
  })),
  renderFinalNewline: hu(new QI(100, "renderFinalNewline", xv ? "dimmed" : "on", ["off", "on", "dimmed"], {
    description: _(651, null)
  })),
  renderLineHighlight: hu(new QI(101, "renderLineHighlight", "line", ["none", "gutter", "line", "all"], {
    enumDescriptions: ["", "", "", _(652, null)],
    description: _(653, null)
  })),
  renderLineHighlightOnlyWhenFocus: hu(new hw(102, "renderLineHighlightOnlyWhenFocus", false, {
    description: _(654, null)
  })),
  renderValidationDecorations: hu(new QI(103, "renderValidationDecorations", "editable", ["editable", "on", "off"])),
  renderWhitespace: hu(new QI(104, "renderWhitespace", "selection", ["none", "boundary", "selection", "trailing", "all"], {
    enumDescriptions: ["", _(655, null), _(656, null), _(657, null), ""],
    description: _(658, null)
  })),
  revealHorizontalRightPadding: hu(new aE(105, "revealHorizontalRightPadding", 15, 0, 1000)),
  roundedSelection: hu(new hw(106, "roundedSelection", true, {
    description: _(659, null)
  })),
  rulers: hu(new jhh()),
  scrollbar: hu(new Vhh()),
  scrollBeyondLastColumn: hu(new aE(109, "scrollBeyondLastColumn", 4, 0, 1073741824, {
    description: _(660, null)
  })),
  scrollBeyondLastLine: hu(new hw(110, "scrollBeyondLastLine", true, {
    description: _(661, null)
  })),
  scrollPredominantAxis: hu(new hw(111, "scrollPredominantAxis", true, {
    description: _(662, null)
  })),
  selectionClipboard: hu(new hw(112, "selectionClipboard", true, {
    description: _(663, null),
    included: xv
  })),
  selectionHighlight: hu(new hw(113, "selectionHighlight", true, {
    description: _(664, null)
  })),
  selectOnLineNumbers: hu(new hw(114, "selectOnLineNumbers", true)),
  showFoldingControls: hu(new QI(115, "showFoldingControls", "mouseover", ["always", "never", "mouseover"], {
    enumDescriptions: [_(665, null), _(666, null), _(667, null)],
    description: _(668, null)
  })),
  showUnused: hu(new hw(116, "showUnused", true, {
    description: _(669, null)
  })),
  showDeprecated: hu(new hw(145, "showDeprecated", true, {
    description: _(670, null)
  })),
  inlayHints: hu(new Mhh()),
  snippetSuggestions: hu(new QI(117, "snippetSuggestions", "inline", ["top", "bottom", "inline", "none"], {
    enumDescriptions: [_(671, null), _(672, null), _(673, null), _(674, null)],
    description: _(675, null)
  })),
  smartSelect: hu(new tmh()),
  smoothScrolling: hu(new hw(119, "smoothScrolling", false, {
    description: _(676, null)
  })),
  stopRenderingLineAfter: hu(new aE(122, "stopRenderingLineAfter", 10000, -1, 1073741824)),
  suggest: hu(new emh()),
  inlineSuggest: hu(new Yhh()),
  inlineCompletionsAccessibilityVerbose: hu(new hw(155, "inlineCompletionsAccessibilityVerbose", false, {
    description: _(677, null)
  })),
  automaticLayoutIgnoreHeight: hu(new hw(156, "automaticLayoutIgnoreHeight", false)),
  suggestFontSize: hu(new aE(124, "suggestFontSize", 0, 0, 1000, {
    markdownDescription: _(678, null, "`0`", "`#editor.fontSize#`")
  })),
  suggestLineHeight: hu(new aE(125, "suggestLineHeight", 0, 0, 1000, {
    markdownDescription: _(679, null, "`0`", "`#editor.lineHeight#`")
  })),
  suggestOnTriggerCharacters: hu(new hw(126, "suggestOnTriggerCharacters", true, {
    description: _(680, null)
  })),
  suggestSelection: hu(new QI(127, "suggestSelection", "first", ["first", "recentlyUsed", "recentlyUsedByPrefix"], {
    markdownEnumDescriptions: [_(681, null), _(682, null), _(683, null)],
    description: _(684, null)
  })),
  tabCompletion: hu(new QI(128, "tabCompletion", "off", ["on", "off", "onlySnippets"], {
    enumDescriptions: [_(685, null), _(686, null), _(687, null)],
    description: _(688, null)
  })),
  tabIndex: hu(new aE(129, "tabIndex", 0, -1, 1073741824)),
  unicodeHighlight: hu(new Khh()),
  unusualLineTerminators: hu(new QI(131, "unusualLineTerminators", "prompt", ["auto", "off", "prompt"], {
    enumDescriptions: [_(689, null), _(690, null), _(691, null)],
    description: _(692, null)
  })),
  useShadowDOM: hu(new hw(132, "useShadowDOM", true)),
  useTabStops: hu(new hw(133, "useTabStops", true, {
    description: _(693, null)
  })),
  wordBreak: hu(new QI(134, "wordBreak", "normal", ["normal", "keepAll"], {
    markdownEnumDescriptions: [_(694, null), _(695, null)],
    description: _(696, null)
  })),
  wordSegmenterLocales: hu(new nmh()),
  wordSeparators: hu(new OY(136, "wordSeparators", eVe, {
    description: _(697, null)
  })),
  wordWrap: hu(new QI(137, "wordWrap", "off", ["off", "on", "wordWrapColumn", "bounded"], {
    markdownEnumDescriptions: [_(698, null), _(699, null), _(700, null), _(701, null)],
    description: _(702, null)
  })),
  wordWrapBreakAfterCharacters: hu(new OY(138, "wordWrapBreakAfterCharacters", " \t})]?|/&.,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣")),
  wordWrapBreakBeforeCharacters: hu(new OY(139, "wordWrapBreakBeforeCharacters", "([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋")),
  wordWrapColumn: hu(new aE(140, "wordWrapColumn", 80, 1, 1073741824, {
    markdownDescription: _(703, null)
  })),
  wordWrapOverride1: hu(new QI(141, "wordWrapOverride1", "inherit", ["off", "on", "inherit"])),
  wordWrapOverride2: hu(new QI(142, "wordWrapOverride2", "inherit", ["off", "on", "inherit"])),
  effectiveCursorStyle: hu(new Ehh()),
  editorClassName: hu(new _hh()),
  defaultColorDecorators: hu(new QI(153, "defaultColorDecorators", "auto", ["auto", "always", "never"], {
    enumDescriptions: [_(704, null), _(705, null), _(706, null)],
    description: _(707, null)
  })),
  pixelRatio: hu(new Hhh()),
  tabFocusMode: hu(new hw(150, "tabFocusMode", false, {
    markdownDescription: _(708, null)
  })),
  layoutInfo: hu(new lEc()),
  wrappingInfo: hu(new smh()),
  wrappingIndent: hu(new rmh()),
  wrappingStrategy: hu(new Phh()),
  effectiveExperimentalEditContextEnabled: hu(new xhh()),
  commentOnLineNumbers: hu(new hw(158, "commentOnLineNumbers", false, {
    description: _(709, null)
  }))
};
