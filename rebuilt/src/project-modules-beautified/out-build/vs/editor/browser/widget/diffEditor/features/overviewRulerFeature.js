"use strict";

// Module: out-build/vs/editor/browser/widget/diffEditor/features/overviewRulerFeature.js
// Offset: 2246311 (bundle byte offset)
// Size: 3404 bytes
ri();
sI();
ITc();
rt();
Uc();
Gde();
tl();
oyh();
Nl();
Io();
bbt = class extends at {
  static {
    QSe = this;
  }
  static {
    this.ONE_OVERVIEW_WIDTH = 15;
  }
  static {
    this.ENTIRE_DIFF_OVERVIEW_WIDTH = this.ONE_OVERVIEW_WIDTH * 2;
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this._editors = e;
    this._rootElement = t;
    this._diffModel = i;
    this._rootWidth = r;
    this._rootHeight = s;
    this._modifiedEditorLayoutInfo = o;
    this._themeService = a;
    this.width = QSe.ENTIRE_DIFF_OVERVIEW_WIDTH;
    const l = tp(this._themeService.onDidColorThemeChange, () => this._themeService.getColorTheme());
    const u = Ro(p => {
      const g = l.read(p);
      const f = g.getColor(b1c) || (g.getColor(_9) || M4n).transparent(2);
      const A = g.getColor(v1c) || (g.getColor(R6) || F4n).transparent(2);
      return {
        insertColor: f,
        removeColor: A
      };
    });
    const d = mw(document.createElement("div"));
    d.setClassName("diffViewport");
    d.setPosition("absolute");
    const m = kl("div.diffOverview", {
      style: {
        position: "absolute",
        top: "0px",
        width: QSe.ENTIRE_DIFF_OVERVIEW_WIDTH + "px"
      }
    }).root;
    this._register(A3n(m, d.domNode));
    this._register(_f(m, ir.POINTER_DOWN, p => {
      this._editors.modified.delegateVerticalScrollbarPointerDown(p);
    }));
    this._register(ei(m, ir.MOUSE_WHEEL, p => {
      this._editors.modified.delegateScrollFromMouseWheelEvent(p);
    }, {
      passive: false
    }));
    this._register(A3n(this._rootElement, m));
    this._register(M0((p, g) => {
      const f = this._diffModel.read(p);
      const A = this._editors.original.createOverviewRuler("original diffOverviewRuler");
      if (A) {
        g.add(A);
        g.add(A3n(m, A.getDomNode()));
      }
      const w = this._editors.modified.createOverviewRuler("modified diffOverviewRuler");
      if (w) {
        g.add(w);
        g.add(A3n(m, w.getDomNode()));
      }
      if (!A || !w) {
        return;
      }
      const C = m3("viewZoneChanged", this._editors.original.onDidChangeViewZones);
      const x = m3("viewZoneChanged", this._editors.modified.onDidChangeViewZones);
      const I = m3("hiddenRangesChanged", this._editors.original.onDidChangeHiddenAreas);
      const B = m3("hiddenRangesChanged", this._editors.modified.onDidChangeHiddenAreas);
      g.add(Oc(R => {
        C.read(R);
        x.read(R);
        I.read(R);
        B.read(R);
        const N = u.read(R);
        const M = f?.diff.read(R)?.mappings;
        function O(W, z, Y) {
          const j = Y._getViewModel();
          if (j) {
            return W.filter(X => X.length > 0).map(X => {
              const ee = j.coordinatesConverter.convertModelPositionToViewPosition(new ar(X.startLineNumber, 1));
              const re = j.coordinatesConverter.convertModelPositionToViewPosition(new ar(X.endLineNumberExclusive, 1));
              const ne = re.lineNumber - ee.lineNumber;
              return new nIc(ee.lineNumber, re.lineNumber, ne, z.toString());
            });
          } else {
            return [];
          }
        }
        const $ = O((M || []).map(W => W.lineRangeMapping.original), N.removeColor, this._editors.original);
        const H = O((M || []).map(W => W.lineRangeMapping.modified), N.insertColor, this._editors.modified);
        A?.setZones($);
        w?.setZones(H);
      }));
      g.add(Oc(R => {
        const N = this._rootHeight.read(R);
        const M = this._rootWidth.read(R);
        const O = this._modifiedEditorLayoutInfo.read(R);
        if (O) {
          const $ = QSe.ENTIRE_DIFF_OVERVIEW_WIDTH - QSe.ONE_OVERVIEW_WIDTH * 2;
          A.setLayout({
            top: 0,
            height: N,
            right: $ + QSe.ONE_OVERVIEW_WIDTH,
            width: QSe.ONE_OVERVIEW_WIDTH
          });
          w.setLayout({
            top: 0,
            height: N,
            right: 0,
            width: QSe.ONE_OVERVIEW_WIDTH
          });
          const H = this._editors.modifiedScrollTop.read(R);
          const W = this._editors.modifiedScrollHeight.read(R);
          const z = this._editors.modified.getOption(108);
          const Y = new o3o(z.verticalHasArrows ? z.arrowSize : 0, z.verticalScrollbarSize, 0, O.height, W, H);
          d.setTop(Y.getSliderPosition());
          d.setHeight(Y.getSliderSize());
        } else {
          d.setTop(0);
          d.setHeight(0);
        }
        m.style.height = N + "px";
        m.style.left = M - QSe.ENTIRE_DIFF_OVERVIEW_WIDTH + "px";
        d.setWidth(QSe.ENTIRE_DIFF_OVERVIEW_WIDTH);
      }));
    }));
  }
};
bbt = QSe = __decorate([__param(6, bo)], bbt);
