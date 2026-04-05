"use strict";

// Module: out-build/vs/editor/contrib/inlineDiffs/browser/widgets/removedLinesZoneWidget.js
// Offset: 33949049 (bundle byte offset)
// Size: 7508 bytes
ml();
Ei();
Ku();
LH();
HVe();
Vla();
Sun();
ri();
ri();
Io();
Lmy();
HDa = class extends nCt {
  constructor(e, t, i, r, s, o, a, l, u) {
    super(t, {
      showFrame: false,
      showArrow: false,
      ordinal: 2,
      keepEditorSelection: true,
      moveToLineWhenShown: false
    });
    this._languageService = a;
    this._themeService = l;
    this.configurationService = u;
    this._clickListener = null;
    this._container = null;
    this._content = null;
    this._overlay = null;
    this._renderScheduled = false;
    this.id = e;
    this._lines = i;
    this._lineTokens = r;
    this._position = o;
    this._elementClassName = "inline-diff-removed";
    this._heightInLines = 1;
    this.options.ordinal = q2o + 1;
    this._innerChanges = undefined;
    this.create();
    this._scrollListener = this.editor.onDidScrollChange(m => {
      if (m.scrollLeftChanged) {
        this._updateHorizontalScroll(m.scrollLeft);
      }
    });
    let d = this.editor.getLayoutInfo().width;
    this._widthListener = this.editor.onDidLayoutChange(m => {
      if (m.width !== d) {
        this._updateLineRendering();
        d = m.width;
      }
    });
    this._editorConfigurationListener = this.editor.onDidChangeConfiguration(m => {
      if (m.hasChanged(137) || m.hasChanged(141) || m.hasChanged(142)) {
        this._updateLineRendering();
      }
    });
    this._themeListener = this._themeService.onDidColorThemeChange(m => {
      this._setOverlayBackground(m);
    });
    if (this._container !== null) {
      this._container.style.marginLeft = "1px";
      if (this._container.parentElement) {
        this._container.parentElement.classList.add("removed-lines-zone-widget");
      }
    }
    this._updateHorizontalScroll(this.editor.getScrollLeft());
    this._updateLineRendering();
  }
  _updateLineRendering() {
    if (!!this._container && !this._renderScheduled) {
      this._renderScheduled = true;
      $c().requestAnimationFrame(() => {
        try {
          const e = this._renderContent();
          this.updateBackgroundColor();
          if (this._content && this._container && this._content.parentNode) {
            this._container.replaceChild(e.content, this._content);
          }
          this._content = e.content;
          const t = this._heightInLines;
          this._heightInLines = e.heightInLines;
          if (this._overlay) {
            this._overlay.style.width = `${this.editor.getLayoutInfo().contentLeft}px`;
          }
          if (t !== this._heightInLines) {
            this.hide();
            this.showWidget();
          }
        } catch (e) {
          console.error("Error during rendering:", e);
        } finally {
          this._renderScheduled = false;
        }
      });
    }
  }
  updatePosition(e) {
    this._position = e;
    this.showWidget();
  }
  updateBackgroundColor() {
    if (this._container?.closest(".agent-layout")) {
      const s = "rgba(191, 97, 106, 0.1)";
      if (this._container) {
        this._container.style.backgroundColor = s;
      }
      return;
    }
    const t = this.configurationService.getValue(NBe);
    const i = this._innerChanges && this._innerChanges.length > 0 ? "hsl(348deg 90% 50% / 15%)" : "hsl(348deg 90% 50% / 25%)";
    const r = t ? `var(--vscode-diffEditor-removedLineBackground, ${i})` : i;
    if (this._container) {
      this._container.style.backgroundColor = r;
    }
  }
  _fillContainer(e) {
    this._container = e;
    this._container.style.position = "relative";
    this._container.style.width = "1000000px";
    if (this._clickListener) {
      this._clickListener.dispose();
    }
    this._clickListener = ei(this._container, ir.CLICK, () => {
      const r = $c().getSelection();
      if (r && r.toString().trim().length > 0) {
        return;
      }
      const s = this._position.lineNumber + 1;
      this.editor.setPosition({
        lineNumber: s,
        column: 1
      });
      this.editor.revealLineInCenter(s);
      this.editor.focus();
    });
    this.updateBackgroundColor();
    this._disposables.add(this.configurationService.onDidChangeConfiguration(r => {
      if (r.affectsConfiguration(NBe)) {
        this.updateBackgroundColor();
      }
    }));
    const t = this._renderContent();
    this._content = t.content;
    this._heightInLines = t.heightInLines;
    const i = this._getLeftMargin();
    this._overlay = document.createElement("div");
    this._overlay.style.width = `${i + 1}px`;
    this._overlay.style.height = "100%";
    this._overlay.style.position = "absolute";
    this._overlay.style.zIndex = "3";
    this._setOverlayBackground(this._themeService.getColorTheme());
    e.appendChild(this._overlay);
    e.appendChild(this._content);
    this._updateHorizontalScroll(this.editor.getScrollLeft());
  }
  _setOverlayBackground(e) {
    if (this._overlay) {
      let t = "white";
      const i = e.getColor("editor.background");
      if (i) {
        t = i.toString();
      }
      this._overlay.style.backgroundColor = t;
    }
  }
  _getWrappedLines() {
    const e = [];
    const t = this.editor._getViewModel();
    if (t) {
      for (let i = 0; i < this._lines.length; i++) {
        const r = this._lines[i];
        const s = this._lineTokens[i];
        const o = s ? new OB(new Uint32Array(Object.values(s.tokens)), s.text, this._languageService.languageIdCodec) : undefined;
        const a = t.createLineBreaksComputer();
        a.addRequest(r, null, null);
        const l = a.finalize();
        let u = this._getInnerChangeDecorations(i, r);
        if (l.length === 0 || !l[0]) {
          e.push({
            text: r,
            tokens: o,
            innerChanges: u
          });
        } else {
          for (const d of l) {
            if (!d || !d.breakOffsets) {
              continue;
            }
            let m = 0;
            for (let p = 0; p < d.breakOffsets.length; p++) {
              const g = p < d.breakOffsets.length ? d.breakOffsets[p] : r.length;
              let f = r.slice(m, g);
              let A = 0;
              if (m !== 0) {
                f = " ".repeat(d.wrappedTextIndentLength) + f;
                A = d.wrappedTextIndentLength;
              }
              const w = u.filter(x => x.startColumn > m && (x.startColumn <= g || p === d.breakOffsets.length - 1)).map(x => new lz(Math.max(1, x.startColumn - m + A), Math.min(f.length + 1, x.endColumn - m + A), x.className, x.type));
              let C;
              if (o) {
                const x = o.sliceAndInflate(m, g, 0);
                const I = x.getCount();
                const B = [];
                if (A > 0) {
                  B.push({
                    text: " ".repeat(A),
                    metadata: x.getMetadata(0)
                  });
                }
                for (let R = 0; R < I; R++) {
                  B.push({
                    text: x.getTokenText(R),
                    metadata: x.getMetadata(R)
                  });
                }
                C = OB.createFromTextAndMetadata(B, this._languageService.languageIdCodec);
              }
              e.push({
                text: f,
                tokens: C,
                innerChanges: w
              });
              m = g;
            }
          }
        }
      }
    }
    return e;
  }
  _getInnerChangeDecorations(e, t) {
    if (!this._innerChanges) {
      return [];
    }
    const i = [];
    for (const r of this._innerChanges) {
      if (r.originalRange.startLineNumber === e + 1) {
        i.push(new lz(r.originalRange.startColumn, r.originalRange.endLineNumber === e + 1 ? r.originalRange.endColumn : t.length + 1, "inline-diff-inner-change-removed", 0));
      } else if (r.originalRange.startLineNumber < e + 1 && r.originalRange.endLineNumber >= e + 1) {
        i.push(new lz(1, r.originalRange.endLineNumber === e + 1 ? r.originalRange.endColumn : t.length + 1, "inline-diff-inner-change-removed", 0));
      }
    }
    return i;
  }
  _getLeftMargin() {
    return Math.max(this.editor.getLayoutInfo().contentLeft - 1, 0);
  }
  getHeightInLines() {
    return this._heightInLines;
  }
  _getMaximumHeightInLines() {}
  _renderContent() {
    const e = document.createElement("div");
    const {
      tabSize: t
    } = this.editor.getModel().getOptions();
    const i = this._getWrappedLines();
    KSA(e, t, i.map(s => ({
      content: s.text,
      decorations: s.innerChanges || [],
      lineTokens: s.tokens ? s.tokens : OB.createEmpty(s.text, this._languageService.languageIdCodec)
    })), this.editor.getOptions(), true, this._elementClassName);
    e.className = this._elementClassName;
    const r = this._getLeftMargin();
    e.style.marginLeft = `${r}px`;
    return {
      content: e,
      heightInLines: i.length
    };
  }
  _updateHorizontalScroll(e) {
    if (!!this._container && !!this._overlay) {
      this._container.style.marginLeft = `${-e}px`;
      this._overlay.style.marginLeft = `${e}px`;
    }
  }
  showWidget() {
    this.hide();
    this.show(this._position, this._heightInLines);
  }
  dispose() {
    super.dispose();
    this._scrollListener.dispose();
    this._widthListener.dispose();
    this._editorConfigurationListener.dispose();
    this._themeListener.dispose();
    this._clickListener?.dispose();
  }
};
HDa = __decorate([__param(6, Jl), __param(7, bo), __param(8, Fn)], HDa);
