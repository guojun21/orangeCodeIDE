"use strict";

// Module: out-build/vs/editor/browser/config/migrateOptions.js
// Offset: 1454434 (bundle byte offset)
// Size: 4008 bytes
$On = class YGa {
  static {
    this.items = [];
  }
  constructor(e, t) {
    this.key = e;
    this.migrate = t;
  }
  apply(e) {
    const t = YGa._read(e, this.key);
    const i = s => YGa._read(e, s);
    const r = (s, o) => YGa._write(e, s, o);
    this.migrate(t, i, r);
  }
  static _read(e, t) {
    if (typeof e === "undefined") {
      return;
    }
    const i = t.indexOf(".");
    if (i >= 0) {
      const r = t.substring(0, i);
      return this._read(e[r], t.substring(i + 1));
    }
    return e[t];
  }
  static _write(e, t, i) {
    const r = t.indexOf(".");
    if (r >= 0) {
      const s = t.substring(0, r);
      e[s] = e[s] || {};
      this._write(e[s], t.substring(r + 1), i);
      return;
    }
    e[t] = i;
  }
};
JY("wordWrap", [[true, "on"], [false, "off"]]);
JY("lineNumbers", [[true, "on"], [false, "off"]]);
JY("cursorBlinking", [["visible", "solid"]]);
JY("renderWhitespace", [[true, "boundary"], [false, "none"]]);
JY("renderLineHighlight", [[true, "line"], [false, "none"]]);
JY("acceptSuggestionOnEnter", [[true, "on"], [false, "off"]]);
JY("tabCompletion", [[false, "off"], [true, "onlySnippets"]]);
JY("hover", [[true, {
  enabled: true
}], [false, {
  enabled: false
}]]);
JY("parameterHints", [[true, {
  enabled: true
}], [false, {
  enabled: false
}]]);
JY("autoIndent", [[false, "advanced"], [true, "full"]]);
JY("matchBrackets", [[true, "always"], [false, "never"]]);
JY("renderFinalNewline", [[true, "on"], [false, "off"]]);
JY("cursorSmoothCaretAnimation", [[true, "on"], [false, "off"]]);
JY("occurrencesHighlight", [[true, "singleFile"], [false, "off"]]);
JY("wordBasedSuggestions", [[true, "matchingDocuments"], [false, "off"]]);
JY("defaultColorDecorators", [[true, "auto"], [false, "never"]]);
eve("autoClosingBrackets", (n, e, t) => {
  if (n === false) {
    t("autoClosingBrackets", "never");
    if (typeof e("autoClosingQuotes") === "undefined") {
      t("autoClosingQuotes", "never");
    }
    if (typeof e("autoSurround") === "undefined") {
      t("autoSurround", "never");
    }
  }
});
eve("renderIndentGuides", (n, e, t) => {
  if (typeof n !== "undefined") {
    t("renderIndentGuides", undefined);
    if (typeof e("guides.indentation") === "undefined") {
      t("guides.indentation", !!n);
    }
  }
});
eve("highlightActiveIndentGuide", (n, e, t) => {
  if (typeof n !== "undefined") {
    t("highlightActiveIndentGuide", undefined);
    if (typeof e("guides.highlightActiveIndentation") === "undefined") {
      t("guides.highlightActiveIndentation", !!n);
    }
  }
});
ovh = {
  method: "showMethods",
  function: "showFunctions",
  constructor: "showConstructors",
  deprecated: "showDeprecated",
  field: "showFields",
  variable: "showVariables",
  class: "showClasses",
  struct: "showStructs",
  interface: "showInterfaces",
  module: "showModules",
  property: "showProperties",
  event: "showEvents",
  operator: "showOperators",
  unit: "showUnits",
  value: "showValues",
  constant: "showConstants",
  enum: "showEnums",
  enumMember: "showEnumMembers",
  keyword: "showKeywords",
  text: "showWords",
  color: "showColors",
  file: "showFiles",
  reference: "showReferences",
  folder: "showFolders",
  typeParameter: "showTypeParameters",
  snippet: "showSnippets"
};
eve("suggest.filteredTypes", (n, e, t) => {
  if (n && typeof n == "object") {
    for (const i of Object.entries(ovh)) {
      if (n[i[0]] === false && typeof e(`suggest.${i[1]}`) === "undefined") {
        t(`suggest.${i[1]}`, false);
      }
    }
    t("suggest.filteredTypes", undefined);
  }
});
eve("quickSuggestions", (n, e, t) => {
  if (typeof n == "boolean") {
    const i = n ? "on" : "off";
    t("quickSuggestions", {
      comments: i,
      strings: i,
      other: i
    });
  }
});
eve("experimental.stickyScroll.enabled", (n, e, t) => {
  if (typeof n == "boolean") {
    t("experimental.stickyScroll.enabled", undefined);
    if (typeof e("stickyScroll.enabled") === "undefined") {
      t("stickyScroll.enabled", n);
    }
  }
});
eve("experimental.stickyScroll.maxLineCount", (n, e, t) => {
  if (typeof n == "number") {
    t("experimental.stickyScroll.maxLineCount", undefined);
    if (typeof e("stickyScroll.maxLineCount") === "undefined") {
      t("stickyScroll.maxLineCount", n);
    }
  }
});
eve("codeActionsOnSave", (n, e, t) => {
  if (n && typeof n == "object") {
    let i = false;
    const r = {};
    for (const s of Object.entries(n)) {
      if (typeof s[1] == "boolean") {
        i = true;
        r[s[0]] = s[1] ? "explicit" : "never";
      } else {
        r[s[0]] = s[1];
      }
    }
    if (i) {
      t("codeActionsOnSave", r);
    }
  }
});
eve("codeActionWidget.includeNearbyQuickfixes", (n, e, t) => {
  if (typeof n == "boolean") {
    t("codeActionWidget.includeNearbyQuickfixes", undefined);
    if (typeof e("codeActionWidget.includeNearbyQuickFixes") === "undefined") {
      t("codeActionWidget.includeNearbyQuickFixes", n);
    }
  }
});
eve("lightbulb.enabled", (n, e, t) => {
  if (typeof n == "boolean") {
    t("lightbulb.enabled", n ? undefined : "off");
  }
});
eve("inlineSuggest.edits.codeShifting", (n, e, t) => {
  if (typeof n == "boolean") {
    t("inlineSuggest.edits.codeShifting", undefined);
    t("inlineSuggest.edits.allowCodeShifting", n ? "always" : "never");
  }
});
