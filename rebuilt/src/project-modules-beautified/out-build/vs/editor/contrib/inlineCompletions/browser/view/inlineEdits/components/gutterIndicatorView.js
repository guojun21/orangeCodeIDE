"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/components/gutterIndicatorView.js
// Offset: 25501568 (bundle byte offset)
// Size: 9088 bytes
ri();
bS();
vr();
qi();
_s();
rt();
Uc();
Mbe();
zg();
Id();
Wt();
kr();
XP();
Io();
F3t();
zet();
$I();
Jgi();
_dn();
DCt();
t$e();
dkA();
(function (n) {
  n.FirstTime = "firstTime";
  n.SecondTime = "secondTime";
  n.Active = "active";
})(zne ||= {});
oua = class extends at {
  get model() {
    const e = this._model.get();
    if (!e) {
      throw new _m("Inline Edit Model not available");
    }
    return e;
  }
  get _newUserType() {
    return this._storageService.get("inlineEditsGutterIndicatorUserKind", -1, zne.FirstTime);
  }
  set _newUserType(e) {
    switch (e) {
      case zne.FirstTime:
        throw new _m("UserKind should not be set to first time");
      case zne.SecondTime:
        this._firstToSecondTimeUserDisposable.clear();
        break;
      case zne.Active:
        this._newUserAnimationDisposable.clear();
        this._firstToSecondTimeUserDisposable.clear();
        this._secondTimeToActiveUserDisposable.clear();
        break;
    }
    this._storageService.store("inlineEditsGutterIndicatorUserKind", e, -1, 0);
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p) {
    super();
    this._editorObs = e;
    this._originalRange = t;
    this._verticalOffset = i;
    this._host = r;
    this._model = s;
    this._isHoveringOverInlineEdit = o;
    this._focusIsInMenu = a;
    this._hoverService = l;
    this._instantiationService = u;
    this._storageService = d;
    this._accessibilityService = m;
    this._activeCompletionId = Ro(g => {
      if (!this._layout.read(g)) {
        return;
      }
      const A = this._model.read(g);
      if (A) {
        return A.inlineEdit.inlineCompletion.id;
      }
    });
    this._newUserAnimationDisposable = this._register(new uo());
    this._firstToSecondTimeUserDisposable = this._register(new uo());
    this._secondTimeToActiveUserDisposable = this._register(new uo());
    this._state = Ro(g => {
      const f = this._originalRangeObs.read(g);
      if (f) {
        return {
          range: f,
          lineOffsetRange: this._editorObs.observeLineOffsetRange(f, this._store)
        };
      }
    });
    this._lineNumberToRender = Ro(this, g => {
      if (this._verticalOffset.read(g) !== 0) {
        return "";
      }
      const f = this._originalRange.read(g)?.startLineNumber;
      const A = this._editorObs.getOption(69).read(g);
      if (f === undefined || A.renderType === 0) {
        return "";
      }
      if (A.renderType === 3) {
        const w = this._editorObs.cursorPosition.read(g);
        if (f % 10 === 0 || w && w.lineNumber === f) {
          return f.toString();
        } else {
          return "";
        }
      }
      if (A.renderType === 2) {
        const w = this._editorObs.cursorPosition.read(g);
        if (!w) {
          return "";
        }
        const C = Math.abs(f - w.lineNumber);
        if (C === 0) {
          return f.toString();
        } else {
          return C.toString();
        }
      }
      if (A.renderType === 4) {
        if (A.renderFn) {
          return A.renderFn(f);
        } else {
          return "";
        }
      } else {
        return f.toString();
      }
    });
    this._layout = Ro(this, g => {
      const f = this._state.read(g);
      if (!f) {
        return;
      }
      const A = this._editorObs.layoutInfo.read(g);
      const w = this._editorObs.getOption(68).read(g);
      const C = 1;
      const x = 1;
      const I = 1;
      const B = x2.fromLeftTopRightBottom(0, 0, A.width, A.height - C);
      const R = B.withTop(this._stickyScrollHeight.read(g));
      const N = f.lineOffsetRange.read(g);
      const M = x2.fromRanges(dm.fromTo(x + A.glyphMarginLeft, A.decorationsLeft + A.decorationsWidth - I), N);
      const O = this._verticalOffset.read(g);
      let $ = M.withHeight(w).withWidth(22).translateY(O);
      const H = $.moveToBeContainedIn(R);
      const W = M;
      $ = M.containsRect(H) ? H : H.moveToBeContainedIn(B.intersect(M.union(B.withHeight(w))));
      const z = W.containsRect($) && R.containsRect($);
      let Y = M.containsRect($) ? "right" : $.top > M.top ? "top" : "bottom";
      let j = $.withWidth(0);
      let X = $;
      if (z && $.top === M.top + O) {
        $ = $.withWidth(A.decorationsLeft + A.decorationsWidth - A.glyphMarginLeft - x - I);
        j = $.intersectHorizontal(new dm(0, Math.max(A.lineNumbersLeft + A.lineNumbersWidth - x - 1, 0)));
        X = X.translateX(j.width);
      }
      let ee;
      if (z && (this._isHoveredOverIconDebounced.read(g) || this._isHoveredOverInlineEditDebounced.read(g))) {
        ee = tL(Be.check);
        Y = "right";
      } else {
        ee = this._tabAction.read(g) === sV.Accept ? tL(Be.keyboardTab) : tL(Be.arrowRight);
      }
      let re = 0;
      switch (Y) {
        case "right":
          re = 0;
          break;
        case "bottom":
          re = 90;
          break;
        case "top":
          re = -90;
          break;
      }
      return {
        rect: W,
        icon: ee,
        rotation: re,
        docked: z,
        iconRect: X,
        pillRect: $,
        lineHeight: w,
        lineNumberRect: j
      };
    });
    this._iconRef = Mv.ref();
    this._hoverVisible = Ua(this, false);
    this.isHoverVisible = this._hoverVisible;
    this._isHoveredOverIcon = Ua(this, false);
    this._isHoveredOverIconDebounced = QFn(this._isHoveredOverIcon, 100);
    this._tabAction = Ro(this, g => {
      const f = this._model.read(g);
      if (f) {
        return f.tabAction.read(g);
      } else {
        return sV.Inactive;
      }
    });
    this._indicator = Mv.div({
      class: "inline-edits-view-gutter-indicator",
      onclick: () => {
        const g = this._layout.map(f => f && f.docked).get();
        this._editorObs.editor.focus();
        if (g) {
          this.model.accept();
        } else {
          this.model.jump();
        }
      },
      tabIndex: 0,
      style: {
        position: "absolute",
        overflow: "visible"
      }
    }, Ket(this._layout).map(g => g ? [Mv.div({
      style: {
        position: "absolute",
        background: zo(mwg),
        borderRadius: "4px",
        ...Yet(f => g.read(f).rect)
      }
    }), Mv.div({
      class: "icon",
      ref: this._iconRef,
      onmouseenter: () => {
        this._showHover();
      },
      style: {
        cursor: "pointer",
        zIndex: "1000",
        position: "absolute",
        backgroundColor: this._gutterIndicatorStyles.map(f => f.background),
        "--vscodeIconForeground": this._gutterIndicatorStyles.map(f => f.foreground),
        border: this._gutterIndicatorStyles.map(f => `1px solid ${f.border}`),
        boxSizing: "border-box",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        transition: "background-color 0.2s ease-in-out, width 0.2s ease-in-out",
        ...Yet(f => g.read(f).pillRect)
      }
    }, [Mv.div({
      className: "line-number",
      style: {
        lineHeight: g.map(f => `${f.lineHeight}px`),
        display: g.map(f => f.lineNumberRect.width > 0 ? "flex" : "none"),
        alignItems: "center",
        justifyContent: "flex-end",
        width: g.map(f => f.lineNumberRect.width),
        height: "100%",
        color: this._gutterIndicatorStyles.map(f => f.foreground)
      }
    }, this._lineNumberToRender), Mv.div({
      style: {
        rotate: g.map(f => `${f.rotation}deg`),
        transition: "rotate 0.2s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: g.map(f => `${f.iconRect.width}px`)
      }
    }, [g.map(f => f.icon)])])] : [])).keepUpdated(this._store);
    this._originalRangeObs = Ket(this._originalRange);
    this._stickyScrollController = Kae.get(this._editorObs.editor);
    this._stickyScrollHeight = this._stickyScrollController ? tp(this._stickyScrollController.onDidChangeStickyScrollHeight, () => this._stickyScrollController.stickyScrollWidgetHeight) : F0(0);
    this._gutterIndicatorStyles = this._tabAction.map((g, f) => {
      switch (g) {
        case sV.Inactive:
          return {
            background: VAe(uwg, p).read(f).toString(),
            foreground: VAe(lwg, p).read(f).toString(),
            border: VAe(Rjl, p).read(f).toString()
          };
        case sV.Jump:
          return {
            background: VAe(cwg, p).read(f).toString(),
            foreground: VAe(awg, p).read(f).toString(),
            border: VAe(ICt, p).read(f).toString()
          };
        case sV.Accept:
          return {
            background: VAe(hwg, p).read(f).toString(),
            foreground: VAe(dwg, p).read(f).toString(),
            border: VAe(Pjl, p).read(f).toString()
          };
      }
    });
    this._register(this._editorObs.createOverlayWidget({
      domNode: this._indicator.element,
      position: F0(null),
      allowEditorOverflow: false,
      minContentWidthInPx: F0(0)
    }));
    this._register(this._editorObs.editor.onMouseMove(g => {
      const A = this._iconRef.element.getBoundingClientRect();
      const w = x2.fromLeftTopWidthHeight(A.left, A.top, A.width, A.height);
      const C = new Koe(g.event.posx, g.event.posy);
      this._isHoveredOverIcon.set(w.containsPoint(C), undefined);
    }));
    this._register(this._editorObs.editor.onDidScrollChange(() => {
      this._isHoveredOverIcon.set(false, undefined);
    }));
    this._isHoveredOverInlineEditDebounced = QFn(this._isHoveringOverInlineEdit, 100);
    this._register(p3(this._isHoveredOverInlineEditDebounced, g => {
      if (g) {
        this._triggerAnimation();
      }
    }));
    if (this._newUserType === zne.Active) {
      this._register(this.setupNewUserExperience());
    }
    this._register(Oc(g => {
      this._indicator.readEffect(g);
      if (this._indicator.element) {
        this._editorObs.editor.applyFontInfo(this._indicator.element);
      }
    }));
    this._register(M0((g, f) => {
      const A = this._host.read(g);
      if (A) {
        f.add(A.onDidAccept(() => {
          this._storageService.store("inlineEditsGutterIndicatorUserKind", zne.Active, -1, 0);
        }));
      }
    }));
  }
  setupNewUserExperience() {
    if (this._newUserType === zne.Active) {
      return at.None;
    }
    const e = new Ut();
    let t = false;
    let i = false;
    let r = 0;
    let s = 0;
    e.add(p3(this._activeCompletionId, async o => {
      if (o === undefined) {
        return;
      }
      const a = this._newUserType;
      switch (a) {
        case zne.FirstTime:
          {
            for (let l = 0; l < 3 && this._activeCompletionId.get() === o; l++) {
              await this._triggerAnimation();
              await Af(500);
            }
            break;
          }
        case zne.SecondTime:
          {
            this._triggerAnimation();
            break;
          }
      }
      switch (a) {
        case zne.FirstTime:
          {
            if (++r >= 5 || t) {
              this._newUserType = zne.SecondTime;
            }
            break;
          }
        case zne.SecondTime:
          {
            if (++s >= 5 && i) {
              this._newUserType = zne.Active;
            }
            break;
          }
      }
    }));
    e.add(p3(this._isHoveredOverIconDebounced, async o => {
      if (o) {
        t = true;
      }
    }));
    e.add(M0((o, a) => {
      const l = this._host.read(o);
      if (l) {
        a.add(l.onDidAccept(() => {
          i = true;
        }));
      }
    }));
    return e;
  }
  _triggerAnimation() {
    if (this._accessibilityService.isMotionReduced()) {
      return new Animation(null, null).finished;
    } else {
      return this._iconRef.element.animate([{
        outline: `2px solid ${this._gutterIndicatorStyles.map(t => t.border).get()}`,
        outlineOffset: "-1px",
        offset: 0
      }, {
        outline: "2px solid transparent",
        outlineOffset: "10px",
        offset: 1
      }], {
        duration: 500
      }).finished;
    }
  }
  _showHover() {
    if (this._hoverVisible.get()) {
      return;
    }
    const e = new Ut();
    const t = e.add(this._instantiationService.createInstance(sua, this.model, s => {
      if (s) {
        this._editorObs.editor.focus();
      }
      r?.dispose();
    }, this._editorObs).toDisposableLiveElement());
    const i = e.add(CC(t.element));
    e.add(i.onDidBlur(() => this._focusIsInMenu.set(false, undefined)));
    e.add(i.onDidFocus(() => this._focusIsInMenu.set(true, undefined)));
    e.add($i(() => this._focusIsInMenu.set(false, undefined)));
    const r = this._hoverService.showInstantHover({
      target: this._iconRef.element,
      content: t.element
    });
    if (r) {
      this._hoverVisible.set(true, undefined);
      e.add(this._editorObs.editor.onDidScrollChange(() => r.dispose()));
      e.add(r.onDispose(() => {
        this._hoverVisible.set(false, undefined);
        e.dispose();
      }));
    } else {
      e.dispose();
    }
  }
};
oua = __decorate([__param(7, Kc), __param(8, ln), __param(9, Hi), __param(10, Cf), __param(11, bo)], oua);
