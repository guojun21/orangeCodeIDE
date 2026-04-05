"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViews/originalEditorInlineDiffView.js
// Offset: 25544947 (bundle byte offset)
// Size: 4475 bytes
yn();
rt();
Uc();
V$();
k5o();
$I();
ts();
xw();
bv();
t$e();
kwg = class extends at {
  static supportsInlineDiffRendering(n) {
    return Swg(n);
  }
  constructor(n, e, t) {
    super();
    this._originalEditor = n;
    this._state = e;
    this._modifiedTextModel = t;
    this._onDidClick = this._register(new Qe());
    this.onDidClick = this._onDidClick.event;
    this.isHovered = HB(this._originalEditor).isTargetHovered(r => r.target.type === 6 && r.target.detail.injectedText?.options.attachedData instanceof gua && r.target.detail.injectedText.options.attachedData.owner === this, this._store);
    this._tokenizationFinished = AkA(this._modifiedTextModel);
    this._decorations = Ro(this, r => {
      const s = this._state.read(r);
      if (!s) {
        return;
      }
      const o = s.modifiedText;
      const a = s.mode === "insertionInline";
      const l = s.diff.length === 1 && s.diff[0].innerChanges?.length === 1;
      const u = true;
      const d = [];
      const m = [];
      const p = Zh.register({
        className: "inlineCompletions-line-insert",
        description: "line-insert",
        isWholeLine: true,
        marginClassName: "gutter-insert"
      });
      const g = Zh.register({
        className: "inlineCompletions-line-delete",
        description: "line-delete",
        isWholeLine: true,
        marginClassName: "gutter-delete"
      });
      const f = Zh.register({
        className: "inlineCompletions-char-delete",
        description: "char-delete",
        isWholeLine: false
      });
      const A = Zh.register({
        className: "inlineCompletions-char-insert",
        description: "char-insert",
        isWholeLine: true
      });
      const w = Zh.register({
        className: "inlineCompletions-char-insert",
        description: "char-insert",
        shouldFillLineOnLineBreak: true
      });
      const C = Zh.register({
        className: "inlineCompletions-char-insert diff-range-empty",
        description: "char-insert diff-range-empty"
      });
      for (const x of s.diff) {
        if (s.mode !== "sideBySide" && s.mode !== "deletion" && s.mode !== "insertionInline") {
          if (!x.original.isEmpty) {
            d.push({
              range: x.original.toInclusiveRange(),
              options: g
            });
          }
          if (!x.modified.isEmpty) {
            m.push({
              range: x.modified.toInclusiveRange(),
              options: p
            });
          }
        }
        if (x.modified.isEmpty || x.original.isEmpty) {
          if (!x.original.isEmpty) {
            d.push({
              range: x.original.toInclusiveRange(),
              options: f
            });
          }
          if (!x.modified.isEmpty) {
            m.push({
              range: x.modified.toInclusiveRange(),
              options: A
            });
          }
        } else {
          const B = a && Swg(x);
          for (const R of x.innerChanges || []) {
            if (x.original.contains(R.originalRange.startLineNumber)) {
              const N = this._originalEditor.getModel()?.getValueInRange(R.originalRange, 1);
              d.push({
                range: R.originalRange,
                options: {
                  description: "char-delete",
                  shouldFillLineOnLineBreak: false,
                  className: Njl("inlineCompletions-char-delete", R.originalRange.isSingleLine() && s.mode === "insertionInline" && "single-line-inline", R.originalRange.isEmpty() && "empty", (R.originalRange.isEmpty() && l || s.mode === "deletion" && N === `
`) && u && !B && "diff-range-empty"),
                  inlineClassName: B ? Njl("strike-through", "inlineCompletions") : null,
                  zIndex: 1
                }
              });
            }
            if (x.modified.contains(R.modifiedRange.startLineNumber)) {
              m.push({
                range: R.modifiedRange,
                options: R.modifiedRange.isEmpty() && u && !B && l ? C : w
              });
            }
            if (B) {
              const N = o.getValueOfRange(R.modifiedRange);
              const M = N.length > 3 ? [{
                text: N.slice(0, 1),
                extraClasses: ["start"],
                offsetRange: new dm(R.modifiedRange.startColumn - 1, R.modifiedRange.startColumn)
              }, {
                text: N.slice(1, -1),
                extraClasses: [],
                offsetRange: new dm(R.modifiedRange.startColumn, R.modifiedRange.endColumn - 2)
              }, {
                text: N.slice(-1),
                extraClasses: ["end"],
                offsetRange: new dm(R.modifiedRange.endColumn - 2, R.modifiedRange.endColumn - 1)
              }] : [{
                text: N,
                extraClasses: ["start", "end"],
                offsetRange: new dm(R.modifiedRange.startColumn - 1, R.modifiedRange.endColumn)
              }];
              this._tokenizationFinished.read(r);
              const O = this._modifiedTextModel.tokenization.getLineTokens(R.modifiedRange.startLineNumber);
              for (const {
                text: $,
                extraClasses: H,
                offsetRange: W
              } of M) {
                d.push({
                  range: Zt.fromPositions(R.originalRange.getEndPosition()),
                  options: {
                    description: "inserted-text",
                    before: {
                      tokens: O.getTokensInRange(W),
                      content: $,
                      inlineClassName: Njl("inlineCompletions-char-insert", R.modifiedRange.isSingleLine() && s.mode === "insertionInline" && "single-line-inline", ...H),
                      cursorStops: UH.None,
                      attachedData: new gua(this)
                    },
                    zIndex: 2,
                    showIfCollapsed: true
                  }
                });
              }
            }
          }
        }
      }
      return {
        originalDecorations: d,
        modifiedDecorations: m
      };
    });
    this._register(HB(this._originalEditor).setDecorations(this._decorations.map(r => r?.originalDecorations ?? [])));
    const i = this._state.map(r => r?.modifiedCodeEditor);
    this._register(M0((r, s) => {
      const o = i.read(r);
      if (o) {
        s.add(HB(o).setDecorations(this._decorations.map(a => a?.modifiedDecorations ?? [])));
      }
    }));
    this._register(this._originalEditor.onMouseUp(r => {
      if (r.target.type !== 6) {
        return;
      }
      const s = r.target.detail.injectedText?.options.attachedData;
      if (s instanceof gua && s.owner === this) {
        this._onDidClick.fire(r.event);
      }
    }));
  }
};
gua = class {
  constructor(n) {
    this.owner = n;
  }
};
Ewg = 0;
