"use strict";

// Module: out-build/vs/editor/contrib/suggest/browser/suggest.js
// Offset: 25259724 (bundle byte offset)
// Size: 4294 bytes
Po();
_s();
Q_();
rt();
Sx();
Js();
Yn();
tl();
ts();
td();
Vde();
Ht();
dr();
hs();
si();
Cm();
WAe();
VA();
Xf = {
  Visible: _la,
  HasFocusedSuggestion: new Sn("suggestWidgetHasFocusedSuggestion", false, _(1595, null)),
  DetailsVisible: new Sn("suggestWidgetDetailsVisible", false, _(1596, null)),
  MultipleSuggestions: new Sn("suggestWidgetMultipleSuggestions", false, _(1597, null)),
  MakesTextEdit: new Sn("suggestionMakesTextEdit", true, _(1598, null)),
  AcceptSuggestionsOnEnter: new Sn("acceptSuggestionOnEnter", true, _(1599, null)),
  HasInsertAndReplaceRange: new Sn("suggestionHasInsertAndReplaceRange", false, _(1600, null)),
  InsertMode: new Sn("suggestionInsertMode", undefined, {
    type: "string",
    description: _(1601, null)
  }),
  CanResolve: new Sn("suggestionCanResolve", false, _(1602, null))
};
ZUe = new st("suggestWidgetStatusBar");
PAg = class {
  constructor(n, e, t, i) {
    this.position = n;
    this.completion = e;
    this.container = t;
    this.provider = i;
    this.isInvalid = false;
    this.score = hz.Default;
    this.distance = 0;
    this.textLabel = typeof e.label == "string" ? e.label : e.label?.label;
    this.labelLow = this.textLabel.toLowerCase();
    this.isInvalid = !this.textLabel;
    this.sortTextLow = e.sortText && e.sortText.toLowerCase();
    this.filterTextLow = e.filterText && e.filterText.toLowerCase();
    this.extensionId = e.extensionId;
    if (Zt.isIRange(e.range)) {
      this.editStart = new ar(e.range.startLineNumber, e.range.startColumn);
      this.editInsertEnd = new ar(e.range.endLineNumber, e.range.endColumn);
      this.editReplaceEnd = new ar(e.range.endLineNumber, e.range.endColumn);
      this.isInvalid = this.isInvalid || Zt.spansMultipleLines(e.range) || e.range.startLineNumber !== n.lineNumber;
    } else {
      this.editStart = new ar(e.range.insert.startLineNumber, e.range.insert.startColumn);
      this.editInsertEnd = new ar(e.range.insert.endLineNumber, e.range.insert.endColumn);
      this.editReplaceEnd = new ar(e.range.replace.endLineNumber, e.range.replace.endColumn);
      this.isInvalid = this.isInvalid || Zt.spansMultipleLines(e.range.insert) || Zt.spansMultipleLines(e.range.replace) || e.range.insert.startLineNumber !== n.lineNumber || e.range.replace.startLineNumber !== n.lineNumber || e.range.insert.startColumn !== e.range.replace.startColumn;
    }
    if (typeof i.resolveCompletionItem != "function") {
      this._resolveCache = Promise.resolve();
      this._resolveDuration = 0;
    }
  }
  get isResolved() {
    return this._resolveDuration !== undefined;
  }
  get resolveDuration() {
    if (this._resolveDuration !== undefined) {
      return this._resolveDuration;
    } else {
      return -1;
    }
  }
  async resolve(n) {
    if (!this._resolveCache) {
      const e = n.onCancellationRequested(() => {
        this._resolveCache = undefined;
        this._resolveDuration = undefined;
      });
      const t = new J_(true);
      this._resolveCache = Promise.resolve(this.provider.resolveCompletionItem(this.completion, n)).then(i => {
        Object.assign(this.completion, i);
        this._resolveDuration = t.elapsed();
      }, i => {
        if (bf(i)) {
          this._resolveCache = undefined;
          this._resolveDuration = undefined;
        }
      }).finally(() => {
        e.dispose();
      });
    }
    return this._resolveCache;
  }
};
(function (n) {
  n[n.Top = 0] = "Top";
  n[n.Inline = 1] = "Inline";
  n[n.Bottom = 2] = "Bottom";
})(LAg ||= {});
wgi = class YWb {
  static {
    this.default = new YWb();
  }
  constructor(e = 2, t = new Set(), i = new Set(), r = new Map(), s = true) {
    this.snippetSortOrder = e;
    this.kindFilter = t;
    this.providerFilter = i;
    this.providerItemsToReuse = r;
    this.showDeprecated = s;
  }
};
NAg = class {
  constructor(n, e, t, i) {
    this.items = n;
    this.needsClipboard = e;
    this.durations = t;
    this.disposable = i;
  }
};
_gi = new Map();
_gi.set(0, nSA);
_gi.set(2, iSA);
_gi.set(1, FQl);
Ss.registerCommand("_executeCompletionItemProvider", async (n, ...e) => {
  const [t, i, r, s] = e;
  Kd(je.isUri(t));
  Kd(ar.isIPosition(i));
  Kd(typeof r == "string" || !r);
  Kd(typeof s == "number" || !s);
  const {
    completionProvider: o
  } = n.get($u);
  const a = await n.get(El).createModelReference(t);
  try {
    const l = {
      incomplete: false,
      suggestions: []
    };
    const u = [];
    const d = a.object.textEditorModel.validatePosition(i);
    const m = await $be("suggest.provideSuggestionItems", async () => await Lla(o, a.object.textEditorModel, d, undefined, {
      triggerCharacter: r ?? undefined,
      triggerKind: r ? 1 : 0
    }));
    for (const p of m.items) {
      if (u.length < (s ?? 0)) {
        u.push(p.resolve(Cs.None));
      }
      l.incomplete = l.incomplete || p.container.incomplete;
      l.suggestions.push(p.completion);
    }
    try {
      await Promise.all(u);
      return l;
    } finally {
      setTimeout(() => m.disposable.dispose(), 100);
    }
  } finally {
    a.dispose();
  }
});
xCt = class {
  static isAllOff(n) {
    return n.other === "off" && n.comments === "off" && n.strings === "off";
  }
  static isAllOn(n) {
    return n.other === "on" && n.comments === "on" && n.strings === "on";
  }
  static valueFor(n, e) {
    switch (e) {
      case 1:
        return n.comments;
      case 2:
        return n.strings;
      default:
        return n.other;
    }
  }
};
