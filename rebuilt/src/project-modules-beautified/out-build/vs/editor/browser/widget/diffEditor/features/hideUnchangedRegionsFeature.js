"use strict";

// Module: out-build/vs/editor/browser/widget/diffEditor/features/hideUnchangedRegionsFeature.js
// Offset: 2331453 (bundle byte offset)
// Size: 12544 bytes
ri();
bS();
qi();
tg();
rt();
Uc();
Jr();
Js();
Ht();
Wt();
Ix();
tl();
ts();
Tg();
V$();
Gde();
hhA();
F3n = class extends at {
  static {
    q5o = this;
  }
  static {
    this._breadcrumbsSourceFactory = Ua(q5o, () => ({
      dispose() {},
      getBreadcrumbItems(e, t) {
        return [];
      }
    }));
  }
  static setBreadcrumbsSourceFactory(e) {
    this._breadcrumbsSourceFactory.set(e, undefined);
  }
  get isUpdatingHiddenAreas() {
    return this._isUpdatingHiddenAreas;
  }
  constructor(e, t, i, r) {
    super();
    this._editors = e;
    this._diffModel = t;
    this._options = i;
    this._instantiationService = r;
    this._modifiedOutlineSource = wde(this, l => {
      const u = this._editors.modifiedModel.read(l);
      const d = q5o._breadcrumbsSourceFactory.read(l);
      if (!u || !d) {
        return undefined;
      } else {
        return d(u, this._instantiationService);
      }
    });
    this._isUpdatingHiddenAreas = false;
    this._register(this._editors.original.onDidChangeCursorPosition(l => {
      if (l.reason === 1) {
        return;
      }
      const u = this._diffModel.get();
      pp(d => {
        for (const m of this._editors.original.getSelections() || []) {
          u?.ensureOriginalLineIsVisible(m.getStartPosition().lineNumber, 0, d);
          u?.ensureOriginalLineIsVisible(m.getEndPosition().lineNumber, 0, d);
        }
      });
    }));
    this._register(this._editors.modified.onDidChangeCursorPosition(l => {
      if (l.reason === 1) {
        return;
      }
      const u = this._diffModel.get();
      pp(d => {
        for (const m of this._editors.modified.getSelections() || []) {
          u?.ensureModifiedLineIsVisible(m.getStartPosition().lineNumber, 0, d);
          u?.ensureModifiedLineIsVisible(m.getEndPosition().lineNumber, 0, d);
        }
      });
    }));
    const s = this._diffModel.map((l, u) => {
      const d = l?.unchangedRegions.read(u) ?? [];
      if (d.length === 1 && d[0].modifiedLineNumber === 1 && d[0].lineCount === this._editors.modifiedModel.read(u)?.getLineCount()) {
        return [];
      } else {
        return d;
      }
    });
    this.viewZones = Ite(this, (l, u) => {
      const d = this._modifiedOutlineSource.read(l);
      if (!d) {
        return {
          origViewZones: [],
          modViewZones: []
        };
      }
      const m = [];
      const p = [];
      const g = this._options.renderSideBySide.read(l);
      const f = this._options.compactMode.read(l);
      const A = this._editors.modifiedModel.read(l)?.getLineCount();
      const w = s.read(l);
      for (let C = 0; C < w.length; C++) {
        const x = w[C];
        if (!x.shouldHideControls(l)) {
          if (f) {
            const I = x.getHiddenModifiedRange(l);
            const B = I.startLineNumber === 1;
            const R = A !== undefined && I.endLineNumberExclusive === A + 1;
            if (B || R) {
              continue;
            }
          }
          if (f) {
            {
              const I = Ro(this, R => x.getHiddenOriginalRange(R).startLineNumber - 1);
              const B = new dbt(I, sBc);
              m.push(B);
              u.add(new oBc(this._editors.original, B, x, !g));
            }
            {
              const I = Ro(this, R => x.getHiddenModifiedRange(R).startLineNumber - 1);
              const B = new dbt(I, sBc);
              p.push(B);
              u.add(new oBc(this._editors.modified, B, x));
            }
          } else {
            const B = C === w.length - 1 ? 2 : 0;
            if (g) {
              const R = Ro(this, M => x.getHiddenOriginalRange(M).startLineNumber - 1);
              const N = new dbt(R, rBc + B);
              m.push(N);
              u.add(new aBc(this._editors.original, N, x, x.originalUnchangedRange, !g, d, M => this._diffModel.get().ensureModifiedLineIsVisible(M, 2, undefined), this._options));
            }
            {
              const R = Ro(this, O => x.getHiddenModifiedRange(O).startLineNumber - 1);
              const N = g ? rBc : XCh;
              const M = new dbt(R, N + B);
              p.push(M);
              u.add(new aBc(this._editors.modified, M, x, x.modifiedUnchangedRange, false, d, O => this._diffModel.get().ensureModifiedLineIsVisible(O, 2, undefined), this._options));
            }
          }
        }
      }
      return {
        origViewZones: m,
        modViewZones: p
      };
    });
    const o = {
      description: "unchanged lines",
      className: "diff-unchanged-lines",
      isWholeLine: true
    };
    const a = {
      description: "Fold Unchanged",
      glyphMarginHoverMessage: new _c(undefined, {
        isTrusted: true,
        supportThemeIcons: true
      }).appendMarkdown(_(244, null)),
      glyphMarginClassName: "fold-unchanged " + Qt.asClassName(Be.fold),
      zIndex: 10001
    };
    this._register(t5o(this._editors.original, Ro(this, l => {
      const u = s.read(l);
      const d = u.map(m => ({
        range: m.originalUnchangedRange.toInclusiveRange(),
        options: o
      }));
      for (const m of u) {
        if (m.shouldHideControls(l)) {
          d.push({
            range: Zt.fromPositions(new ar(m.originalLineNumber, 1)),
            options: a
          });
        }
      }
      return d;
    })));
    this._register(t5o(this._editors.modified, Ro(this, l => {
      const u = s.read(l);
      const d = u.map(m => ({
        range: m.modifiedUnchangedRange.toInclusiveRange(),
        options: o
      }));
      for (const m of u) {
        if (m.shouldHideControls(l)) {
          d.push({
            range: rh.ofLength(m.modifiedLineNumber, 1).toInclusiveRange(),
            options: a
          });
        }
      }
      return d;
    })));
    this._register(Oc(l => {
      const u = s.read(l);
      this._isUpdatingHiddenAreas = true;
      try {
        this._editors.original.setHiddenAreas(u.map(d => d.getHiddenOriginalRange(l).toInclusiveRange()).filter(Ch));
        this._editors.modified.setHiddenAreas(u.map(d => d.getHiddenModifiedRange(l).toInclusiveRange()).filter(Ch));
      } finally {
        this._isUpdatingHiddenAreas = false;
      }
    }));
    this._register(this._editors.modified.onMouseUp(l => {
      if (!l.event.rightButton && l.target.position && l.target.element?.className.includes("fold-unchanged")) {
        const u = l.target.position.lineNumber;
        const d = this._diffModel.get();
        if (!d) {
          return;
        }
        const m = d.unchangedRegions.get().find(p => p.modifiedUnchangedRange.includes(u));
        if (!m) {
          return;
        }
        m.collapseAll(undefined);
        l.event.stopPropagation();
        l.event.preventDefault();
      }
    }));
    this._register(this._editors.original.onMouseUp(l => {
      if (!l.event.rightButton && l.target.position && l.target.element?.className.includes("fold-unchanged")) {
        const u = l.target.position.lineNumber;
        const d = this._diffModel.get();
        if (!d) {
          return;
        }
        const m = d.unchangedRegions.get().find(p => p.originalUnchangedRange.includes(u));
        if (!m) {
          return;
        }
        m.collapseAll(undefined);
        l.event.stopPropagation();
        l.event.preventDefault();
      }
    }));
  }
};
F3n = q5o = __decorate([__param(3, ln)], F3n);
oBc = class extends i5o {
  constructor(n, e, t, i = false) {
    const r = kl("div.diff-hidden-lines-widget");
    super(n, e, r.root);
    this._unchangedRegion = t;
    this._hide = i;
    this._nodes = kl("div.diff-hidden-lines-compact", [kl("div.line-left", []), kl("div.text@text", []), kl("div.line-right", [])]);
    r.root.appendChild(this._nodes.root);
    if (this._hide) {
      this._nodes.root.replaceChildren();
    }
    this._register(Oc(s => {
      if (!this._hide) {
        const o = this._unchangedRegion.getHiddenModifiedRange(s).length;
        const a = _(245, null, o);
        this._nodes.text.innerText = a;
      }
    }));
  }
};
aBc = class aWa extends i5o {
  static {
    this._linesPerClick = 20;
  }
  _revealLinesAboveWithScrollCompensation(e) {
    if (e <= 0) {
      return;
    }
    const t = this._unchangedRegion.getHiddenModifiedRange(undefined).startLineNumber;
    const i = this._editor.getTopForLineNumber(t);
    this._unchangedRegion.showMoreAbove(e, undefined);
    const r = this._unchangedRegion.getHiddenModifiedRange(undefined).startLineNumber;
    const o = this._editor.getTopForLineNumber(r) - i;
    const a = new CustomEvent("diff-editor-scroll-compensate", {
      bubbles: true,
      detail: {
        scrollDelta: o
      }
    });
    this._editor.getDomNode()?.dispatchEvent(a);
    this._editor.setScrollTop(this._editor.getScrollTop() + o);
  }
  constructor(e, t, i, r, s, o, a, l) {
    const u = kl("div.diff-hidden-lines-widget");
    super(e, t, u.root);
    this._editor = e;
    this._unchangedRegion = i;
    this._unchangedRegionRange = r;
    this._hide = s;
    this._modifiedOutlineSource = o;
    this._revealModifiedHiddenLine = a;
    this._options = l;
    this._nodes = kl("div.diff-hidden-lines", [kl("div.top@top", {
      title: _(246, null)
    }), kl("div.center@content", {
      style: {
        display: "flex"
      }
    }, [kl("div@first", {
      class: "diff-show-more-lines",
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0px",
        flexShrink: "0"
      }
    }, [Ct("a", {
      title: _(247, null),
      role: "button",
      onclick: () => {
        this._unchangedRegion.showMoreAbove(aWa._linesPerClick, undefined);
      }
    }, ...a_("$(chevron-up)")), Ct("a", {
      title: _(248, null),
      role: "button",
      onclick: () => {
        this._unchangedRegion.showMoreBelow(aWa._linesPerClick, undefined);
      }
    }, ...a_("$(chevron-down)"))]), kl("div@others", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    })]), kl("div.bottom@bottom", {
      title: _(249, null),
      role: "button"
    })]);
    u.root.appendChild(this._nodes.root);
    this._nodes.others.style.display = "flex";
    this._nodes.others.style.alignItems = "center";
    this._nodes.others.style.flexGrow = "1";
    this._nodes.others.style.gap = "6px";
    const d = p => {
      const g = p.target;
      if (g.closest("a, .breadcrumb-item") || g.classList.contains("codicon")) {
        return;
      }
      const f = this._editor.getModel();
      if (!f) {
        return;
      }
      const A = this._unchangedRegion.visibleLineCountTop.get();
      const w = this._unchangedRegion.visibleLineCountBottom.get();
      const C = this._unchangedRegion.lineCount - A - w;
      if (C <= 0) {
        return;
      }
      const x = this._unchangedRegionRange.startLineNumber;
      const I = this._unchangedRegionRange.endLineNumberExclusive;
      const B = f.getLineCount();
      const R = x > 1 || A > 0;
      const N = I <= B || w > 0;
      const M = Math.min(aWa._linesPerClick, C);
      let O = 0;
      let $ = 0;
      if (R && N) {
        O = Math.min(Math.ceil(M / 2), C);
        $ = M - O;
      } else if (R) {
        O = M;
      } else {
        $ = M;
      }
      this._revealLinesAboveWithScrollCompensation(O);
      if ($ > 0) {
        this._unchangedRegion.showMoreBelow($, undefined);
      }
    };
    this._nodes.content.addEventListener("click", d);
    this._register({
      dispose: () => {
        this._nodes.content.removeEventListener("click", d);
      }
    });
    if (this._hide) {
      um(this._nodes.first);
    } else {
      this._register(aKe(this._nodes.first, {
        width: HB(this._editor).layoutInfoContentLeft
      }));
    }
    this._register(Oc(p => {
      const g = this._unchangedRegion.visibleLineCountTop.read(p) + this._unchangedRegion.visibleLineCountBottom.read(p) === this._unchangedRegion.lineCount;
      this._nodes.bottom.classList.toggle("canMoveTop", !g);
      this._nodes.bottom.classList.toggle("canMoveBottom", this._unchangedRegion.visibleLineCountBottom.read(p) > 0);
      this._nodes.top.classList.toggle("canMoveTop", this._unchangedRegion.visibleLineCountTop.read(p) > 0);
      this._nodes.top.classList.toggle("canMoveBottom", !g);
      const f = this._unchangedRegion.isDragged.read(p);
      const A = this._editor.getDomNode();
      if (A) {
        A.classList.toggle("draggingUnchangedRegion", !!f);
        if (f === "top") {
          A.classList.toggle("canMoveTop", this._unchangedRegion.visibleLineCountTop.read(p) > 0);
          A.classList.toggle("canMoveBottom", !g);
        } else if (f === "bottom") {
          A.classList.toggle("canMoveTop", !g);
          A.classList.toggle("canMoveBottom", this._unchangedRegion.visibleLineCountBottom.read(p) > 0);
        } else {
          A.classList.toggle("canMoveTop", false);
          A.classList.toggle("canMoveBottom", false);
        }
      }
    }));
    const m = this._editor;
    this._register(ei(this._nodes.top, "mousedown", p => {
      if (p.button !== 0) {
        return;
      }
      this._nodes.top.classList.toggle("dragging", true);
      this._nodes.root.classList.toggle("dragging", true);
      p.preventDefault();
      const g = p.clientY;
      let f = false;
      const A = this._unchangedRegion.visibleLineCountTop.get();
      this._unchangedRegion.isDragged.set("top", undefined);
      const w = As(this._nodes.top);
      const C = ei(w, "mousemove", I => {
        const R = I.clientY - g;
        f = f || Math.abs(R) > 2;
        const N = Math.round(R / m.getOption(68));
        const M = Math.max(0, Math.min(A + N, this._unchangedRegion.getMaxVisibleLineCountTop()));
        this._unchangedRegion.visibleLineCountTop.set(M, undefined);
      });
      const x = ei(w, "mouseup", I => {
        if (!f) {
          this._revealLinesAboveWithScrollCompensation(this._options.hideUnchangedRegionsRevealLineCount.get());
        }
        this._nodes.top.classList.toggle("dragging", false);
        this._nodes.root.classList.toggle("dragging", false);
        this._unchangedRegion.isDragged.set(undefined, undefined);
        C.dispose();
        x.dispose();
      });
    }));
    this._register(ei(this._nodes.bottom, "mousedown", p => {
      if (p.button !== 0) {
        return;
      }
      this._nodes.bottom.classList.toggle("dragging", true);
      this._nodes.root.classList.toggle("dragging", true);
      p.preventDefault();
      const g = p.clientY;
      let f = false;
      const A = this._unchangedRegion.visibleLineCountBottom.get();
      this._unchangedRegion.isDragged.set("bottom", undefined);
      const w = As(this._nodes.bottom);
      const C = ei(w, "mousemove", I => {
        const R = I.clientY - g;
        f = f || Math.abs(R) > 2;
        const N = Math.round(R / m.getOption(68));
        const M = Math.max(0, Math.min(A - N, this._unchangedRegion.getMaxVisibleLineCountBottom()));
        const O = this._unchangedRegionRange.endLineNumberExclusive > m.getModel().getLineCount() ? m.getContentHeight() : m.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
        this._unchangedRegion.visibleLineCountBottom.set(M, undefined);
        const $ = this._unchangedRegionRange.endLineNumberExclusive > m.getModel().getLineCount() ? m.getContentHeight() : m.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
        m.setScrollTop(m.getScrollTop() + ($ - O));
      });
      const x = ei(w, "mouseup", I => {
        this._unchangedRegion.isDragged.set(undefined, undefined);
        if (!f) {
          const B = m.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
          this._unchangedRegion.showMoreBelow(this._options.hideUnchangedRegionsRevealLineCount.get(), undefined);
          const R = m.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
          m.setScrollTop(m.getScrollTop() + (R - B));
        }
        this._nodes.bottom.classList.toggle("dragging", false);
        this._nodes.root.classList.toggle("dragging", false);
        C.dispose();
        x.dispose();
      });
    }));
    this._register(Oc(p => {
      const g = [];
      if (!this._hide) {
        const f = i.getHiddenModifiedRange(p).length;
        const A = _(250, null, f);
        const w = Ct("span", {
          title: _(251, null)
        }, A);
        w.classList.add("diff-hidden-lines-text");
        w.style.flexGrow = "1";
        g.push(w);
        const C = Ct("a", {
          class: "diff-hidden-lines-expand-all",
          role: "button",
          title: _(252, null)
        }, _(253, null));
        C.addEventListener("click", B => {
          B.preventDefault();
          B.stopPropagation();
          this._unchangedRegion.showAll(undefined);
        });
        g.push(C);
        const x = this._unchangedRegion.getHiddenModifiedRange(p);
        const I = this._modifiedOutlineSource.getBreadcrumbItems(x, p);
        if (I.length > 0) {
          g.push(Ct("span", {
            class: "diff-hidden-lines-separator"
          }, "\xA0\xA0•\xA0\xA0"));
          for (let B = 0; B < I.length; B++) {
            const R = I[B];
            const N = $oe.toIcon(R.kind);
            const M = kl("div.breadcrumb-item", {
              style: {
                display: "flex",
                alignItems: "center"
              }
            }, [tL(N), "\xA0", R.name, ...(B === I.length - 1 ? [] : [tL(Be.chevronRight)])]).root;
            g.push(M);
            M.onclick = () => {
              this._revealModifiedHiddenLine(R.startLineNumber);
            };
          }
        }
      }
      um(this._nodes.others, ...g);
    }));
  }
};
