"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViews/inlineEditsSideBySideView.js
// Offset: 25529090 (bundle byte offset)
// Size: 11702 bytes
ri();
h0();
xf();
yn();
rt();
Uc();
Wt();
Nl();
XP();
Io();
V$();
zet();
yq();
$I();
tl();
ts();
Jgi();
pdn();
DCt();
t$e();
BCt = 0;
Idn = 0;
Cwg = false;
KAe = 1;
n$e = 1;
fNe = 4;
pua = 20;
Mjl = 12;
Wgi = class extends at {
  static fitsInsideViewport(e, t, i, r, s) {
    const o = HB(e);
    const a = o.layoutInfoWidth.read(s);
    const l = o.layoutInfoContentLeft.read(s);
    const u = e.getLayoutInfo().verticalScrollbarWidth;
    const d = o.layoutInfoMinimap.read(s).minimapLeft !== 0 ? o.layoutInfoMinimap.read(s).minimapWidth : 0;
    const m = iua(o, r, undefined);
    const p = i.lineEdit.newLines.reduce((A, w) => Math.max(A, fwg(w, e, t)), 0);
    const g = pua;
    const f = Mjl + KAe * 2;
    return m + p + g + f < a - l - u - d;
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this._editor = e;
    this._edit = t;
    this._previewTextModel = i;
    this._uiState = r;
    this._tabAction = s;
    this._instantiationService = o;
    this._themeService = a;
    this._onDidClick = this._register(new Qe());
    this.onDidClick = this._onDidClick.event;
    this._display = Ro(this, l => this._uiState.read(l) ? "block" : "none");
    this.previewRef = Mv.ref();
    this._editorContainer = Mv.div({
      class: ["editorContainer"],
      style: {
        position: "absolute",
        overflow: "hidden",
        cursor: "pointer"
      },
      onmousedown: l => {
        l.preventDefault();
      },
      onclick: l => {
        this._onDidClick.fire(new yy(As(l), l));
      }
    }, [Mv.div({
      class: "preview",
      style: {
        pointerEvents: "none"
      },
      ref: this.previewRef
    })]).keepUpdated(this._store);
    this.isHovered = this._editorContainer.didMouseMoveDuringHover;
    this._activeViewZones = [];
    this._updatePreviewEditor = Ro(l => {
      this._editorContainer.readEffect(l);
      this._previewEditorObs.model.read(l);
      this._display.read(l);
      if (this._nonOverflowView) {
        this._nonOverflowView.element.style.display = this._display.read(l);
      }
      const u = this._uiState.read(l);
      const d = this._edit.read(l);
      if (!u || !d) {
        return;
      }
      const m = d.originalLineRange;
      const p = [];
      if (m.startLineNumber > 1) {
        p.push(new Zt(1, 1, m.startLineNumber - 1, 1));
      }
      if (m.startLineNumber + u.newTextLineCount < this._previewTextModel.getLineCount() + 1) {
        p.push(new Zt(m.startLineNumber + u.newTextLineCount, 1, this._previewTextModel.getLineCount() + 1, 1));
      }
      this.previewEditor.setHiddenAreas(p, undefined, true);
      const g = [...this._activeViewZones];
      this._activeViewZones = [];
      const f = m.endLineNumberExclusive - m.startLineNumber - u.newTextLineCount;
      this.previewEditor.changeViewZones(A => {
        g.forEach(w => A.removeZone(w));
        if (f > 0) {
          this._activeViewZones.push(A.addZone({
            afterLineNumber: m.startLineNumber + u.newTextLineCount - 1,
            heightInLines: f,
            showInHiddenAreas: true,
            domNode: Ct("div.diagonal-fill.inline-edits-view-zone")
          }));
        }
      });
    });
    this._previewEditorWidth = Ro(this, l => {
      const u = this._edit.read(l);
      if (u) {
        this._updatePreviewEditor.read(l);
        return iua(this._previewEditorObs, u.modifiedLineRange, l);
      } else {
        return 0;
      }
    });
    this._cursorPosIfTouchesEdit = Ro(this, l => {
      const u = this._editorObs.cursorPosition.read(l);
      const d = this._edit.read(l);
      if (!!d && !!u) {
        if (d.modifiedLineRange.contains(u.lineNumber)) {
          return u;
        } else {
          return undefined;
        }
      }
    });
    this._originalStartPosition = Ro(this, l => {
      const u = this._edit.read(l);
      if (u) {
        return new ar(u.originalLineRange.startLineNumber, 1);
      } else {
        return null;
      }
    });
    this._originalEndPosition = Ro(this, l => {
      const u = this._edit.read(l);
      if (u) {
        return new ar(u.originalLineRange.endLineNumberExclusive, 1);
      } else {
        return null;
      }
    });
    this._editorMaxContentWidthInRange = Ro(this, l => {
      const u = this._originalDisplayRange.read(l);
      if (u) {
        this._editorObs.versionId.read(l);
        return C5e(this, (d, m) => {
          const p = iua(this._editorObs, u, d);
          return Math.max(p, m ?? 0);
        });
      } else {
        return F0(0);
      }
    }).map((l, u) => l.read(u));
    this._previewEditorLayoutInfo = Ro(this, l => {
      const u = this._edit.read(l);
      if (!u || !this._uiState.read(l)) {
        return null;
      }
      const m = u.originalLineRange;
      const p = this._editorObs.scrollLeft.read(l);
      const g = this._editorMaxContentWidthInRange.read(l);
      const f = this._editorObs.layoutInfo.read(l);
      const A = this._previewEditorWidth.read(l);
      const w = f.contentWidth - f.verticalScrollbarWidth;
      const C = this._editor.getContainerDomNode().getBoundingClientRect();
      const x = f.contentLeft + f.contentWidth + C.left;
      const I = As(this._editor.getContainerDomNode()).innerWidth - x;
      const B = As(this._editor.getContainerDomNode()).innerWidth - C.right;
      const R = Math.min(f.contentWidth * 0.3, A, 100);
      const N = 0;
      const M = N + I;
      const O = this._cursorPosIfTouchesEdit.read(l);
      const $ = Math.max(w + p - N - Math.max(0, R - M), Math.min(O ? ikA(this._editorObs, O, l) + 50 : 0, w + p));
      const H = Math.min(g + pua, $);
      const W = g + pua + A + 70;
      const z = $ - H;
      let Y;
      let j;
      if (H > p) {
        Y = 0;
        j = f.contentLeft + H - p;
      } else {
        Y = p - H;
        j = f.contentLeft;
      }
      const X = this._originalVerticalStartPosition.read(l) ?? this._editor.getTopForLineNumber(m.startLineNumber) - this._editorObs.scrollTop.read(l);
      const ee = this._originalVerticalEndPosition.read(l) ?? this._editor.getBottomForLineNumber(m.endLineNumberExclusive - 1) - this._editorObs.scrollTop.read(l);
      const re = f.contentLeft - p;
      let ne = x2.fromLeftTopRightBottom(re, X, j, ee);
      const pe = ne.height === 0;
      if (!pe) {
        ne = ne.withMargin(Idn, BCt);
      }
      const le = this._editor.getOption(68) * u.modifiedLineRange.length;
      const he = ee - X;
      const be = Math.max(he, le);
      const fe = z === 0;
      const ke = 0;
      const Se = Math.min(A + Mjl, B + f.width - f.contentLeft - ke);
      let Fe = x2.fromLeftTopWidthHeight(ne.right + ke, X, Se, be);
      if (pe) {
        Fe = Fe.withMargin(Idn, BCt).translateY(Idn);
      } else {
        Fe = Fe.withMargin(Idn, BCt).translateX(BCt + KAe);
      }
      return {
        codeRect: ne,
        editRect: Fe,
        codeScrollLeft: p,
        contentLeft: f.contentLeft,
        isInsertion: pe,
        maxContentWidth: W,
        shouldShowShadow: fe,
        desiredPreviewEditorScrollLeft: Y,
        previewEditorWidth: Se
      };
    });
    this._shouldOverflow = Ro(l => {
      if (!Cwg) {
        return false;
      }
      const u = this._edit.read(l)?.originalLineRange;
      if (!u) {
        return false;
      }
      const d = this._stickyScrollHeight.read(l);
      return !(this._editor.getTopForLineNumber(u.startLineNumber) - this._editorObs.scrollTop.read(l) <= d) && !(this._editor.getTopForLineNumber(u.endLineNumberExclusive) - this._editorObs.scrollTop.read(l) >= this._editorObs.layoutInfo.read(l).height);
    });
    this._backgroundSvg = Mv.svg({
      transform: "translate(-0.5 -0.5)",
      style: {
        overflow: "visible",
        pointerEvents: "none",
        position: "absolute"
      }
    }, [Mv.svgElem("path", {
      class: "rightOfModifiedBackgroundCoverUp",
      d: Ro(l => {
        const u = this._previewEditorLayoutInfo.read(l);
        if (!!u && !this._originalBackgroundColor.read(l).isTransparent()) {
          return new rua().moveTo(u.codeRect.getRightTop()).lineTo(u.codeRect.getRightTop().deltaX(1000)).lineTo(u.codeRect.getRightBottom().deltaX(1000)).lineTo(u.codeRect.getRightBottom()).build();
        }
      }),
      style: {
        fill: oft(Wm, "transparent")
      }
    })]).keepUpdated(this._store);
    this._originalOverlay = Mv.div({
      style: {
        pointerEvents: "none",
        display: this._previewEditorLayoutInfo.map(l => l?.isInsertion ? "none" : "block")
      }
    }, Ro(l => {
      const u = Ket(this._previewEditorLayoutInfo).read(l);
      if (!u) {
        return;
      }
      const d = nua(this._tabAction).map(B => `${KAe}px solid ${zo(B)}`);
      const m = `${KAe + n$e}px solid ${zo(Wm)}`;
      const p = u.read(l).codeScrollLeft !== 0;
      const g = u.map(B => B.codeRect.bottom < B.editRect.bottom);
      const f = fNe * 2 + KAe * 2;
      const A = u.map(B => x2.fromLeftTopRightBottom(B.contentLeft - fNe - KAe, B.codeRect.top, B.contentLeft, B.codeRect.bottom + f)).read(l);
      const w = new dm(A.left, Number.MAX_SAFE_INTEGER);
      const C = u.map(B => B.codeRect.intersectHorizontal(w));
      const x = C.map(B => B.withMargin(n$e, 0, n$e, n$e).intersectHorizontal(w));
      const I = C.map(B => x2.fromLeftTopWidthHeight(B.right - f + KAe, B.bottom - KAe, f, f).intersectHorizontal(w));
      return [Mv.div({
        class: "originalSeparatorSideBySide",
        style: {
          ...x.read(l).toStyles(),
          boxSizing: "border-box",
          borderRadius: `${fNe}px 0 0 ${fNe}px`,
          borderTop: m,
          borderBottom: m,
          borderLeft: p ? "none" : m
        }
      }), Mv.div({
        class: "originalOverlaySideBySide",
        style: {
          ...C.read(l).toStyles(),
          boxSizing: "border-box",
          borderRadius: `${fNe}px 0 0 ${fNe}px`,
          borderTop: d,
          borderBottom: d,
          borderLeft: p ? "none" : d,
          backgroundColor: zo(Sdn)
        }
      }), Mv.div({
        class: "originalCornerCutoutSideBySide",
        style: {
          pointerEvents: "none",
          display: g.map(B => B ? "block" : "none"),
          ...I.read(l).toStyles()
        }
      }, [Mv.div({
        class: "originalCornerCutoutBackground",
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          backgroundColor: VAe(Sdn, this._themeService).map(B => B.toString())
        }
      }), Mv.div({
        class: "originalCornerCutoutBorder",
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          borderTop: d,
          borderRight: d,
          borderRadius: "0 100% 0 0",
          backgroundColor: zo(Wm)
        }
      })]), Mv.div({
        class: "originalOverlaySideBySideHider",
        style: {
          ...A.toStyles(),
          backgroundColor: zo(Wm)
        }
      })];
    })).keepUpdated(this._store);
    this._modifiedOverlay = Mv.div({
      style: {
        pointerEvents: "none"
      }
    }, Ro(l => {
      const u = Ket(this._previewEditorLayoutInfo).read(l);
      if (!u) {
        return;
      }
      const m = u.map(C => C.codeRect.bottom < C.editRect.bottom).map(C => `0 ${fNe}px ${fNe}px ${C ? fNe : 0}px`);
      const p = VAe(Ggi(this._tabAction), this._themeService).map(C => `1px solid ${C.toString()}`);
      const g = `${KAe + n$e}px solid ${zo(Wm)}`;
      const f = u.map(C => C.editRect.withMargin(0, KAe));
      const A = f.map(C => C.withMargin(n$e, n$e, n$e, 0));
      const w = Ro(C => {
        const x = f.read(C);
        const I = u.read(C);
        if (!I.isInsertion || I.contentLeft >= x.left) {
          return x2.fromLeftTopWidthHeight(x.left, x.top, 0, 0);
        } else {
          return new x2(I.contentLeft, x.top, x.left, x.top + KAe * 2);
        }
      });
      return [Mv.div({
        class: "modifiedInsertionSideBySide",
        style: {
          ...w.read(l).toStyles(),
          backgroundColor: Ggi(this._tabAction).map(C => zo(C))
        }
      }), Mv.div({
        class: "modifiedSeparatorSideBySide",
        style: {
          ...A.read(l).toStyles(),
          borderRadius: m,
          borderTop: g,
          borderBottom: g,
          borderRight: g,
          boxSizing: "border-box"
        }
      }), Mv.div({
        class: "modifiedOverlaySideBySide",
        style: {
          ...f.read(l).toStyles(),
          borderRadius: m,
          border: p,
          boxSizing: "border-box",
          backgroundColor: zo(Bjl)
        }
      })];
    })).keepUpdated(this._store);
    this._nonOverflowView = Mv.div({
      class: "inline-edits-view",
      style: {
        position: "absolute",
        overflow: "visible",
        top: "0px",
        left: "0px",
        zIndex: "0",
        display: this._display
      }
    }, [this._backgroundSvg, Ro(this, l => this._shouldOverflow.read(l) ? [] : [this._editorContainer, this._originalOverlay, this._modifiedOverlay])]).keepUpdated(this._store);
    this._originalDisplayRange = this._uiState.map(l => l?.originalDisplayRange);
    this._originalBackgroundColor = tp(this, this._themeService.onDidColorThemeChange, () => this._themeService.getColorTheme().getColor(Sdn) ?? Xr.transparent);
    this._editorObs = HB(this._editor);
    this._originalVerticalStartPosition = this._editorObs.observePosition(this._originalStartPosition, this._store).map(l => l?.y);
    this._originalVerticalEndPosition = this._editorObs.observePosition(this._originalEndPosition, this._store).map(l => l?.y);
    this._stickyScrollController = Kae.get(this._editorObs.editor);
    this._stickyScrollHeight = this._stickyScrollController ? tp(this._stickyScrollController.onDidChangeStickyScrollHeight, () => this._stickyScrollController.stickyScrollWidgetHeight) : F0(0);
    this._register(this._editorObs.createOverlayWidget({
      domNode: this._nonOverflowView.element,
      position: F0(null),
      allowEditorOverflow: false,
      minContentWidthInPx: Ro(l => {
        const u = this._previewEditorLayoutInfo.read(l)?.maxContentWidth;
        if (u === undefined) {
          return 0;
        } else {
          return u;
        }
      })
    }));
    this.previewEditor = this._register(this._instantiationService.createInstance(q3, this.previewRef.element, {
      glyphMargin: false,
      lineNumbers: "off",
      minimap: {
        enabled: false
      },
      guides: {
        indentation: false,
        bracketPairs: false,
        bracketPairsHorizontal: false,
        highlightActiveIndentation: false
      },
      rulers: [],
      padding: {
        top: 0,
        bottom: 0
      },
      folding: false,
      selectOnLineNumbers: false,
      selectionHighlight: false,
      columnSelection: false,
      overviewRulerBorder: false,
      overviewRulerLanes: 0,
      lineDecorationsWidth: 0,
      lineNumbersMinChars: 0,
      revealHorizontalRightPadding: 0,
      bracketPairColorization: {
        enabled: true,
        independentColorPoolPerBracketType: false
      },
      scrollBeyondLastLine: false,
      scrollbar: {
        vertical: "hidden",
        horizontal: "hidden",
        handleMouseWheel: false
      },
      readOnly: true,
      wordWrap: "off",
      wordWrapOverride1: "off",
      wordWrapOverride2: "off"
    }, {
      contextKeyValues: {
        [VS.inInlineEditsPreviewEditor.key]: true
      },
      contributions: []
    }, this._editor));
    this._previewEditorObs = HB(this.previewEditor);
    this.previewEditor.setModel(this._previewTextModel);
    this._register(Oc(l => {
      const u = this._previewEditorLayoutInfo.read(l);
      if (!u) {
        return;
      }
      const d = u.editRect.withMargin(-Idn, -BCt);
      this.previewEditor.layout({
        height: d.height,
        width: u.previewEditorWidth + 15
      });
      this._editorContainer.element.style.top = `${d.top}px`;
      this._editorContainer.element.style.left = `${d.left}px`;
      this._editorContainer.element.style.width = `${u.previewEditorWidth + BCt}px`;
    }));
    this._register(Oc(l => {
      const u = this._previewEditorLayoutInfo.read(l);
      if (u) {
        this._previewEditorObs.editor.setScrollLeft(u.desiredPreviewEditorScrollLeft);
      }
    }));
    this._updatePreviewEditor.recomputeInitiallyAndOnChange(this._store);
  }
};
Wgi = __decorate([__param(5, ln), __param(6, bo)], Wgi);
