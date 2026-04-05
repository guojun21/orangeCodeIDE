"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViews/inlineEditsLineReplacementView.js
// Offset: 25522002 (bundle byte offset)
// Size: 7088 bytes
ri();
h0();
yn();
rt();
Uc();
Nl();
XP();
Io();
XOt();
F3t();
zet();
fbt();
$I();
ts();
Ku();
LH();
l4o();
Lte();
DCt();
t$e();
mua = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this._editor = e;
    this._edit = t;
    this._tabAction = i;
    this._languageService = r;
    this._themeService = s;
    this._onDidClick = this._register(new Qe());
    this.onDidClick = this._onDidClick.event;
    this._originalBubblesDecorationOptions = {
      description: "inlineCompletions-original-bubble",
      className: "inlineCompletions-original-bubble",
      stickiness: 1
    };
    this._modifiedLineElements = Ro(o => {
      const a = [];
      let l = 0;
      const u = this._maxPrefixTrim.read(o);
      const d = this._edit.read(o);
      if (!d || !u) {
        return;
      }
      const m = u.prefixTrim;
      const p = _wg(d.replacements.map(A => A.modifiedRange)).map(A => new Zt(A.startLineNumber, A.startColumn - m, A.endLineNumber, A.endColumn - m));
      const g = this._editor.model.get();
      const f = d.modifiedRange.startLineNumber;
      for (let A = 0; A < d.modifiedRange.length; A++) {
        const w = document.createElement("div");
        const C = f + A;
        const x = d.modifiedLines[A].slice(m);
        const I = g.tokenization.tokenizeLinesAt(C, [x])?.[0];
        let B;
        if (I) {
          B = C4n.fromLineTokens(I).toLineTokens(x, this._languageService.languageIdCodec);
        } else {
          B = OB.createEmpty(x, this._languageService.languageIdCodec);
        }
        const R = [];
        for (const M of p.filter(O => O.startLineNumber === C)) {
          const O = Math.min(M.endColumn, x.length + 1);
          R.push(new Ode(new Zt(1, M.startColumn, 1, O), "inlineCompletions-modified-bubble", 0));
          R.push(new Ode(new Zt(1, M.startColumn, 1, M.startColumn + 1), "start", 0));
          R.push(new Ode(new Zt(1, O - 1, 1, O), "end", 0));
        }
        const N = gbt(new dKe([B]), hKe.fromEditor(this._editor.editor).withSetWidth(false).withScrollBeyondLastColumn(0), R, w, true);
        this._editor.getOption(52).read(o);
        l = Math.max(l, N.minWidthInPx);
        a.push(w);
      }
      return {
        lines: a,
        requiredWidth: l
      };
    });
    this._layout = Ro(this, o => {
      const a = this._modifiedLineElements.read(o);
      const l = this._maxPrefixTrim.read(o);
      const u = this._edit.read(o);
      if (!a || !l || !u) {
        return;
      }
      const {
        prefixLeftOffset: d
      } = l;
      const {
        requiredWidth: m
      } = a;
      const p = this._editor.getOption(68).read(o);
      const g = this._editor.layoutInfoContentLeft.read(o);
      const f = this._editor.layoutInfoVerticalScrollbarWidth.read(o);
      const A = this._editor.scrollLeft.read(o);
      const w = this._editor.scrollTop.read(o);
      const C = g - A;
      const x = this._editor.editor.getModel();
      const I = u.originalRange.mapToLineArray(j => this._editor.editor.getOffsetForColumn(j, x.getLineMaxColumn(j)) - d);
      const B = Math.max(...I, m);
      const R = u.originalRange.startLineNumber;
      const N = u.originalRange.endLineNumberExclusive - 1;
      const M = this._editor.editor.getTopForLineNumber(R) - w;
      const O = this._editor.editor.getBottomForLineNumber(N) - w;
      const $ = x2.fromLeftTopWidthHeight(C + d, M, B, O - M);
      const H = x2.fromLeftTopWidthHeight($.left, $.bottom, $.width, u.modifiedRange.length * p);
      const W = x2.hull([$, H]);
      const z = W.intersectVertical(new dm($.bottom, Number.MAX_SAFE_INTEGER));
      const Y = new x2(z.left, z.top, z.right, z.bottom);
      return {
        originalLinesOverlay: $,
        modifiedLinesOverlay: H,
        background: W,
        lowerBackground: z,
        lowerText: Y,
        minContentWidthRequired: d + B + f
      };
    });
    this._viewZoneInfo = Ro(o => {
      if (!this._editor.getOption(64).map(p => p.edits.allowCodeShifting === "always").read(o)) {
        return;
      }
      const l = this._layout.read(o);
      const u = this._edit.read(o);
      if (!l || !u) {
        return;
      }
      const d = l.lowerBackground.height;
      const m = u.originalRange.endLineNumberExclusive;
      return {
        height: d,
        lineNumber: m
      };
    });
    this._div = Mv.div({
      class: "line-replacement"
    }, [Ro(o => {
      const a = Ket(this._layout).read(o);
      const l = this._modifiedLineElements.read(o);
      if (!a || !l) {
        return [];
      }
      const u = a.read(o);
      const d = this._editor.layoutInfoContentLeft.read(o);
      const m = this._editor.contentWidth.read(o);
      const p = this._editor.editor.getContentHeight();
      const g = this._editor.getOption(68).read(o);
      l.lines.forEach(w => {
        w.style.width = `${u.lowerText.width}px`;
        w.style.height = `${g}px`;
        w.style.position = "relative";
      });
      const f = Ggi(this._tabAction).read(o);
      const A = nua(this._tabAction).read(o);
      return [Mv.div({
        style: {
          position: "absolute",
          top: 0,
          left: d,
          width: m,
          height: p,
          overflow: "hidden",
          pointerEvents: "none"
        }
      }, [Mv.div({
        class: "originalOverlayLineReplacement",
        style: {
          position: "absolute",
          ...Yet(w => a.read(w).background.translateX(-d)),
          borderRadius: "4px",
          border: VAe(A, this._themeService).map(w => `1px solid ${w.toString()}`),
          pointerEvents: "none",
          boxSizing: "border-box",
          background: zo(Sdn)
        }
      }), Mv.div({
        class: "modifiedOverlayLineReplacement",
        style: {
          position: "absolute",
          ...Yet(w => a.read(w).lowerBackground.translateX(-d)),
          borderRadius: "4px",
          background: zo(Wm),
          boxShadow: `${zo(q5e)} 0 6px 6px -6px`,
          border: `1px solid ${zo(f)}`,
          boxSizing: "border-box",
          overflow: "hidden",
          cursor: "pointer",
          pointerEvents: "auto"
        },
        onmousedown: w => {
          w.preventDefault();
        },
        onclick: w => this._onDidClick.fire(new yy(As(w), w))
      }, [Mv.div({
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: zo(swg)
        }
      })]), Mv.div({
        class: "modifiedLinesLineReplacement",
        style: {
          position: "absolute",
          boxSizing: "border-box",
          ...Yet(w => a.read(w).lowerText.translateX(-d)),
          fontFamily: this._editor.getOption(51),
          fontSize: this._editor.getOption(54),
          fontWeight: this._editor.getOption(55),
          pointerEvents: "none",
          whiteSpace: "nowrap",
          borderRadius: "4px",
          overflow: "hidden"
        }
      }, [...l.lines])])];
    })]).keepUpdated(this._store);
    this._previousViewZoneInfo = undefined;
    this._originalBubblesDecorationCollection = this._editor.editor.createDecorationsCollection();
    this._maxPrefixTrim = this._edit.map(o => o ? Ljl(o.replacements.flatMap(a => [a.originalRange, a.modifiedRange]), o.originalRange, o.modifiedLines, this._editor.editor) : undefined);
    this.isHovered = this._editor.isTargetHovered(o => this._isMouseOverWidget(o), this._store);
    this._register($i(() => this._originalBubblesDecorationCollection.clear()));
    this._register($i(() => this._editor.editor.changeViewZones(o => this.removePreviousViewZone(o))));
    this._register(qnA(this._viewZoneInfo, ({
      lastValue: o,
      newValue: a
    }) => {
      if (o !== a && (o?.height !== a?.height || o?.lineNumber !== a?.lineNumber)) {
        this._editor.editor.changeViewZones(l => {
          this.removePreviousViewZone(l);
          if (a) {
            this.addViewZone(a, l);
          }
        });
      }
    }));
    this._register(Oc(o => {
      const a = this._edit.read(o);
      const l = [];
      if (a) {
        l.push(..._wg(a.replacements.map(u => u.originalRange)));
      }
      this._originalBubblesDecorationCollection.set(l.map(u => ({
        range: u,
        options: this._originalBubblesDecorationOptions
      })));
    }));
    this._register(this._editor.createOverlayWidget({
      domNode: this._div.element,
      minContentWidthInPx: Ro(o => this._layout.read(o)?.minContentWidthRequired ?? 0),
      position: F0({
        preference: {
          top: 0,
          left: 0
        }
      }),
      allowEditorOverflow: false
    }));
  }
  _isMouseOverWidget(e) {
    const t = this._layout.get();
    if (!t || !(e.event instanceof mRe)) {
      return false;
    } else {
      return t.lowerBackground.containsPoint(new Koe(e.event.relativePos.x, e.event.relativePos.y));
    }
  }
  removePreviousViewZone(e) {
    if (!this._previousViewZoneInfo) {
      return;
    }
    e.removeZone(this._previousViewZoneInfo.id);
    const t = this._editor.cursorLineNumber.get();
    if (t !== null && t >= this._previousViewZoneInfo.lineNumber) {
      this._editor.editor.setScrollTop(this._editor.scrollTop.get() - this._previousViewZoneInfo.height);
    }
    this._previousViewZoneInfo = undefined;
  }
  addViewZone(e, t) {
    const i = t.addZone({
      afterLineNumber: e.lineNumber - 1,
      heightInPx: e.height,
      domNode: Ct("div")
    });
    this._previousViewZoneInfo = {
      height: e.height,
      lineNumber: e.lineNumber,
      id: i
    };
    const r = this._editor.cursorLineNumber.get();
    if (r !== null && r >= e.lineNumber) {
      this._editor.editor.setScrollTop(this._editor.scrollTop.get() + e.height);
    }
  }
};
mua = __decorate([__param(3, Jl), __param(4, bo)], mua);
