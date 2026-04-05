"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/ghostText/ghostTextView.js
// Offset: 25441745 (bundle byte offset)
// Size: 7808 bytes
ive();
bS();
qi();
yn();
v9e();
rt();
Uc();
oa();
HY();
V$();
pk();
Y1e();
tl();
ts();
kSe();
Ku();
xw();
LH();
HVe();
Qft();
Fla();
Tgi();
ri();
jSA();
h0();
VI();
vjl = true;
Ajl = "ghost-text";
wdn = class extends at {
  static {
    bjl = this;
  }
  static {
    this.hot = i3n(bjl);
  }
  constructor(e, t, i, r, s, o) {
    super();
    this._editor = e;
    this._model = t;
    this._options = i;
    this._shouldKeepCursorStable = r;
    this._isClickable = s;
    this._languageService = o;
    this._isDisposed = Ua(this, false);
    this._warningState = Ro(a => {
      const l = this._model.ghostText.read(a);
      if (!l) {
        return;
      }
      const u = this._model.warning.read(a);
      if (u) {
        return {
          lineNumber: l.lineNumber,
          position: new ar(l.lineNumber, l.parts[0].column),
          icon: u.icon
        };
      }
    });
    this._onDidClick = this._register(new Qe());
    this.onDidClick = this._onDidClick.event;
    this._editorObs = HB(this._editor);
    this._useSyntaxHighlighting = this._options.map(a => a.syntaxHighlightingEnabled);
    this._extraClassNames = Ro(this, a => {
      const l = [...(this._options.read(a).extraClasses ?? [])];
      if (this._useSyntaxHighlighting.read(a)) {
        l.push("syntax-highlighted");
      }
      if (vjl && this._warningState.read(a)) {
        l.push("warning");
      }
      return l.map(d => ` ${d}`).join("");
    });
    this.uiState = Ro(this, a => {
      if (this._isDisposed.read(a)) {
        return;
      }
      const l = this._editorObs.model.read(a);
      if (l !== this._model.targetTextModel.read(a)) {
        return;
      }
      const u = this._model.ghostText.read(a);
      if (!u) {
        return;
      }
      const d = u instanceof Mla ? u.columnRange : undefined;
      const m = this._useSyntaxHighlighting.read(a);
      const p = this._extraClassNames.read(a);
      const {
        inlineTexts: g,
        additionalLines: f,
        hiddenRange: A
      } = zSA(u, l, Ajl + p);
      const w = l.getLineContent(u.lineNumber);
      const C = new Vae(g.map(N => E2.insert(N.column - 1, N.text)));
      const x = m ? l.tokenization.tokenizeLinesAt(u.lineNumber, [C.apply(w), ...f.map(N => N.content)]) : undefined;
      const I = C.getNewTextRanges();
      const B = g.map((N, M) => ({
        ...N,
        tokens: x?.[0]?.getTokensInRange(I[M])
      }));
      const R = f.map((N, M) => ({
        content: x?.[M + 1] ?? OB.createEmpty(N.content, this._languageService.languageIdCodec),
        decorations: N.decorations
      }));
      return {
        replacedRange: d,
        inlineTexts: B,
        additionalLines: R,
        hiddenRange: A,
        lineNumber: u.lineNumber,
        additionalReservedLineCount: this._model.minReservedLineCount.read(a),
        targetTextModel: l,
        syntaxHighlightingEnabled: m
      };
    });
    this.decorations = Ro(this, a => {
      const l = this.uiState.read(a);
      if (!l) {
        return [];
      }
      const u = [];
      const d = this._extraClassNames.read(a);
      if (l.replacedRange) {
        u.push({
          range: l.replacedRange.toRange(l.lineNumber),
          options: {
            inlineClassName: "inline-completion-text-to-replace" + d,
            description: "GhostTextReplacement"
          }
        });
      }
      if (l.hiddenRange) {
        u.push({
          range: l.hiddenRange.toRange(l.lineNumber),
          options: {
            inlineClassName: "ghost-text-hidden",
            description: "ghost-text-hidden"
          }
        });
      }
      for (const m of l.inlineTexts) {
        u.push({
          range: Zt.fromPositions(new ar(l.lineNumber, m.column)),
          options: {
            description: "ghost-text-decoration",
            after: {
              content: m.text,
              tokens: m.tokens,
              inlineClassName: (m.preview ? "ghost-text-decoration-preview" : "ghost-text-decoration") + (this._isClickable ? " clickable" : "") + d + m.lineDecorations.map(p => " " + p.className).join(" "),
              cursorStops: UH.Left,
              attachedData: new zla(this)
            },
            showIfCollapsed: true
          }
        });
      }
      return u;
    });
    this._isInlineTextHovered = this._editorObs.isTargetHovered(a => a.target.type === 6 && a.target.detail.injectedText?.options.attachedData instanceof zla && a.target.detail.injectedText.options.attachedData.owner === this, this._store);
    this._additionalLinesWidget = this._register(new jyg(this._editor, Ro(a => {
      const l = this.uiState.read(a);
      if (l) {
        return {
          lineNumber: l.lineNumber,
          additionalLines: l.additionalLines,
          minReservedLineCount: l.additionalReservedLineCount,
          targetTextModel: l.targetTextModel
        };
      } else {
        return undefined;
      }
    }), this._shouldKeepCursorStable, this._isClickable));
    this.isHovered = Ro(this, a => this._isDisposed.read(a) ? false : this._isInlineTextHovered.read(a) || this._additionalLinesWidget.isHovered.read(a));
    this.height = Ro(this, a => this._editorObs.getOption(68).read(a) + (this._additionalLinesWidget.viewZoneHeight.read(a) ?? 0));
    this._register($i(() => {
      this._isDisposed.set(true, undefined);
    }));
    this._register(this._editorObs.setDecorations(this.decorations));
    if (this._isClickable) {
      this._register(this._additionalLinesWidget.onDidClick(a => this._onDidClick.fire(a)));
      this._register(this._editor.onMouseUp(a => {
        if (a.target.type !== 6) {
          return;
        }
        const l = a.target.detail.injectedText?.options.attachedData;
        if (l instanceof zla && l.owner === this) {
          this._onDidClick.fire(a.event);
        }
      }));
    }
    this._register(M0((a, l) => {
      if (vjl) {
        return;
      }
      const u = this._warningState.read(a);
      if (!u) {
        return;
      }
      const d = this._editorObs.getOption(68);
      l.add(this._editorObs.createContentWidget({
        position: F0({
          position: new ar(u.lineNumber, Number.MAX_SAFE_INTEGER),
          preference: [0],
          positionAffinity: 1
        }),
        allowEditorOverflow: false,
        domNode: Mv.div({
          class: "ghost-text-view-warning-widget",
          style: {
            width: d,
            height: d,
            marginLeft: 4,
            color: "orange"
          },
          ref: m => {
            m.ghostTextViewWarningWidgetData = {
              range: Zt.fromPositions(u.position)
            };
          }
        }, [Mv.div({
          class: "ghost-text-view-warning-widget-icon",
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          }
        }, [tL(u.icon && "id" in u.icon ? u.icon : Be.warning)])]).keepUpdated(l).element
      }));
    }));
  }
  static getWarningWidgetContext(e) {
    const t = e.ghostTextViewWarningWidgetData;
    if (t) {
      return t;
    }
    if (e.parentElement) {
      return this.getWarningWidgetContext(e.parentElement);
    }
  }
  ownsViewZone(e) {
    return this._additionalLinesWidget.viewZoneId === e;
  }
};
wdn = bjl = __decorate([__param(5, Jl)], wdn);
zla = class {
  constructor(n) {
    this.owner = n;
  }
};
jyg = class extends at {
  get viewZoneId() {
    return this._viewZoneInfo?.viewZoneId;
  }
  get viewZoneHeight() {
    return this._viewZoneHeight;
  }
  constructor(n, e, t, i) {
    super();
    this._editor = n;
    this._lines = e;
    this._shouldKeepCursorStable = t;
    this._isClickable = i;
    this._viewZoneHeight = Ua("viewZoneHeight", undefined);
    this._onDidClick = this._register(new Qe());
    this.onDidClick = this._onDidClick.event;
    this._viewZoneListener = this._register(new uo());
    this.hasBeenAccepted = false;
    this.editorOptionsChanged = m3("editorOptionChanged", In.filter(this._editor.onDidChangeConfiguration, r => r.hasChanged(33) || r.hasChanged(122) || r.hasChanged(104) || r.hasChanged(99) || r.hasChanged(53) || r.hasChanged(52) || r.hasChanged(68)));
    this.isHovered = HB(this._editor).isTargetHovered(r => Qyg(r.target.element), this._store);
    if (this._editor instanceof WS && this._shouldKeepCursorStable) {
      this._register(this._editor.onBeforeExecuteEdit(r => this.hasBeenAccepted = r.source === "inlineSuggestion.accept"));
    }
    this._register(Oc(r => {
      const s = this._lines.read(r);
      this.editorOptionsChanged.read(r);
      if (s) {
        this.hasBeenAccepted = false;
        this.updateLines(s.lineNumber, s.additionalLines, s.minReservedLineCount);
      } else {
        this.clear();
      }
    }));
  }
  dispose() {
    super.dispose();
    this.clear();
  }
  clear() {
    this._viewZoneListener.clear();
    this._editor.changeViewZones(n => {
      this.removeActiveViewZone(n);
    });
  }
  updateLines(n, e, t) {
    const i = this._editor.getModel();
    if (!i) {
      return;
    }
    const {
      tabSize: r
    } = i.getOptions();
    this._editor.changeViewZones(s => {
      const o = new Ut();
      this.removeActiveViewZone(s);
      const a = Math.max(e.length, t);
      if (a > 0) {
        const l = document.createElement("div");
        VSA(l, r, e, this._editor.getOptions(), this._isClickable);
        if (this._isClickable) {
          o.add(ei(l, "mousedown", u => {
            u.preventDefault();
          }));
          o.add(ei(l, "click", u => {
            if (Qyg(u.target)) {
              this._onDidClick.fire(new yy(As(u), u));
            }
          }));
        }
        this.addViewZone(s, n, a, l);
      }
      this._viewZoneListener.value = o;
    });
  }
  addViewZone(n, e, t, i) {
    const r = n.addZone({
      afterLineNumber: e,
      heightInLines: t,
      domNode: i,
      afterColumnAffinity: 1,
      onComputedHeight: s => {
        this._viewZoneHeight.set(s, undefined);
      }
    });
    this.keepCursorStable(e, t);
    this._viewZoneInfo = {
      viewZoneId: r,
      heightInLines: t,
      lineNumber: e
    };
  }
  removeActiveViewZone(n) {
    if (this._viewZoneInfo) {
      n.removeZone(this._viewZoneInfo.viewZoneId);
      if (!this.hasBeenAccepted) {
        this.keepCursorStable(this._viewZoneInfo.lineNumber, -this._viewZoneInfo.heightInLines);
      }
      this._viewZoneInfo = undefined;
      this._viewZoneHeight.set(undefined, undefined);
    }
  }
  keepCursorStable(n, e) {
    if (!this._shouldKeepCursorStable) {
      return;
    }
    const t = this._editor.getSelection()?.getStartPosition()?.lineNumber;
    if (t !== undefined && n < t) {
      this._editor.setScrollTop(this._editor.getScrollTop() + e * this._editor.getOption(68));
    }
  }
};
Ogi = nve("editorGhostText", {
  createHTML: n => n
});
