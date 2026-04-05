"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViews/inlineEditsWordReplacementView.js
// Offset: 25540792 (bundle byte offset)
// Size: 4155 bytes
ri();
h0();
yn();
rt();
Uc();
Nl();
XP();
F3t();
zet();
fbt();
Y1e();
$I();
Ku();
LH();
l4o();
DCt();
t$e();
RCt = class extends at {
  static {
    this.MAX_LENGTH = 100;
  }
  constructor(e, t, i, r) {
    super();
    this._editor = e;
    this._edit = t;
    this._tabAction = i;
    this._languageService = r;
    this._onDidClick = this._register(new Qe());
    this.onDidClick = this._onDidClick.event;
    this._start = this._editor.observePosition(F0(this._edit.range.getStartPosition()), this._store);
    this._end = this._editor.observePosition(F0(this._edit.range.getEndPosition()), this._store);
    this._line = document.createElement("div");
    this._hoverableElement = Ua(this, null);
    this.isHovered = this._hoverableElement.map((s, o) => s?.didMouseMoveDuringHover.read(o) ?? false);
    this._renderTextEffect = Ro(s => {
      const o = this._editor.model.get();
      const a = o.getLineContent(this._edit.range.startLineNumber);
      const l = E2.replace(new dm(this._edit.range.startColumn - 1, this._edit.range.endColumn - 1), this._edit.text);
      const u = l.apply(a);
      const d = o.tokenization.tokenizeLinesAt(this._edit.range.startLineNumber, [u])?.[0];
      let m;
      if (d) {
        m = C4n.fromLineTokens(d).slice(l.getRangeAfterApply()).toLineTokens(this._edit.text, this._languageService.languageIdCodec);
      } else {
        m = OB.createEmpty(this._edit.text, this._languageService.languageIdCodec);
      }
      const p = gbt(new dKe([m]), hKe.fromEditor(this._editor.editor).withSetWidth(false).withScrollBeyondLastColumn(0), [], this._line, true);
      this._line.style.width = `${p.minWidthInPx}px`;
    });
    this._layout = Ro(this, s => {
      this._renderTextEffect.read(s);
      const o = this._start.read(s);
      const a = this._end.read(s);
      if (!o || !a || o.x > a.x || o.y > a.y) {
        return;
      }
      const l = this._editor.getOption(68).read(s);
      const u = this._editor.scrollLeft.read(s);
      const d = this._editor.getOption(52).read(s).typicalHalfwidthCharacterWidth;
      const m = d * 3;
      const p = 4;
      const g = new Koe(m, p);
      const f = x2.fromPoints(o, a).withHeight(l).translateX(-u);
      const A = x2.fromPointSize(f.getLeftBottom().add(g), new Koe(this._edit.text.length * d, f.height));
      const w = A.withLeft(f.left);
      return {
        originalLine: f,
        modifiedLine: A,
        lowerBackground: w,
        lineHeight: l
      };
    });
    this._root = Mv.div({
      class: "word-replacement"
    }, [Ro(s => {
      const o = Ket(this._layout).read(s);
      if (!o) {
        return [];
      }
      const a = this._editor.layoutInfoContentLeft.read(s);
      const l = 1;
      const u = nua(this._tabAction).map(m => zo(m)).read(s);
      const d = Ggi(this._tabAction).map(m => zo(m)).read(s);
      return [Mv.div({
        style: {
          position: "absolute",
          top: 0,
          left: a,
          width: this._editor.contentWidth,
          height: this._editor.editor.getContentHeight(),
          overflow: "hidden",
          pointerEvents: "none"
        }
      }, [Mv.div({
        style: {
          position: "absolute",
          ...Yet(m => o.read(m).lowerBackground.withMargin(l, l * 2, l, 0)),
          background: zo(Wm),
          cursor: "pointer",
          pointerEvents: "auto"
        },
        onmousedown: m => {
          m.preventDefault();
        },
        onmouseup: m => this._onDidClick.fire(new yy(As(m), m)),
        obsRef: m => {
          this._hoverableElement.set(m, undefined);
        }
      }), Mv.div({
        style: {
          position: "absolute",
          ...Yet(m => o.read(m).modifiedLine.withMargin(1, 2)),
          fontFamily: this._editor.getOption(51),
          fontSize: this._editor.getOption(54),
          fontWeight: this._editor.getOption(55),
          pointerEvents: "none",
          boxSizing: "border-box",
          borderRadius: "4px",
          border: `${l}px solid ${d}`,
          background: zo(owg),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          outline: `2px solid ${zo(Wm)}`
        }
      }, [this._line]), Mv.div({
        style: {
          position: "absolute",
          ...Yet(m => o.read(m).originalLine.withMargin(1)),
          boxSizing: "border-box",
          borderRadius: "4px",
          border: `${l}px solid ${u}`,
          background: zo(rwg),
          pointerEvents: "none"
        }
      }, []), Mv.svg({
        width: 11,
        height: 14,
        viewBox: "0 0 11 14",
        fill: "none",
        style: {
          position: "absolute",
          left: o.map(m => m.modifiedLine.left - 16),
          top: o.map(m => m.modifiedLine.top + Math.round((m.lineHeight - 14 - 5) / 2))
        }
      }, [Mv.svgElem("path", {
        d: "M1 0C1 2.98966 1 5.92087 1 8.49952C1 9.60409 1.89543 10.5 3 10.5H10.5",
        stroke: zo(x4o)
      }), Mv.svgElem("path", {
        d: "M6 7.5L9.99999 10.49998L6 13.5",
        stroke: zo(x4o)
      })])])];
    })]).keepUpdated(this._store);
    this._register(this._editor.createOverlayWidget({
      domNode: this._root.element,
      minContentWidthInPx: F0(0),
      position: F0({
        preference: {
          top: 0,
          left: 0
        }
      }),
      allowEditorOverflow: false
    }));
  }
};
RCt = __decorate([__param(3, Jl)], RCt);
