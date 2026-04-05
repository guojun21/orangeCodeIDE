"use strict";

// Module: out-build/vs/editor/browser/viewParts/indentGuides/indentGuides.js
// Offset: 1642080 (bundle byte offset)
// Size: 6021 bytes
$cA();
WVe();
az();
Io();
tl();
Vs();
Js();
Hph();
GEc();
BAh = class extends p9e {
  constructor(n) {
    super();
    this._context = n;
    this._primaryPosition = null;
    const e = this._context.configuration.options;
    const t = e.get(152);
    const i = e.get(52);
    this._spaceWidth = i.spaceWidth;
    this._maxIndentLeft = t.wrappingColumn === -1 ? -1 : t.wrappingColumn * i.typicalHalfwidthCharacterWidth;
    this._bracketPairGuideOptions = e.get(16);
    this._renderResult = null;
    this._context.addEventHandler(this);
  }
  dispose() {
    this._context.removeEventHandler(this);
    this._renderResult = null;
    super.dispose();
  }
  onConfigurationChanged(n) {
    const e = this._context.configuration.options;
    const t = e.get(152);
    const i = e.get(52);
    this._spaceWidth = i.spaceWidth;
    this._maxIndentLeft = t.wrappingColumn === -1 ? -1 : t.wrappingColumn * i.typicalHalfwidthCharacterWidth;
    this._bracketPairGuideOptions = e.get(16);
    return true;
  }
  onCursorStateChanged(n) {
    const t = n.selections[0].getPosition();
    if (this._primaryPosition?.equals(t)) {
      return false;
    } else {
      this._primaryPosition = t;
      return true;
    }
  }
  onDecorationsChanged(n) {
    return true;
  }
  onFlushed(n) {
    return true;
  }
  onLinesChanged(n) {
    return true;
  }
  onLinesDeleted(n) {
    return true;
  }
  onLinesInserted(n) {
    return true;
  }
  onScrollChanged(n) {
    return n.scrollTopChanged;
  }
  onZonesChanged(n) {
    return true;
  }
  onLanguageConfigurationChanged(n) {
    return true;
  }
  prepareRender(n) {
    if (!this._bracketPairGuideOptions.indentation && this._bracketPairGuideOptions.bracketPairs === false) {
      this._renderResult = null;
      return;
    }
    const e = n.visibleRange.startLineNumber;
    const t = n.visibleRange.endLineNumber;
    const i = n.scrollWidth;
    const r = this._primaryPosition;
    const s = this.getGuidesByLine(e, Math.min(t + 1, this._context.viewModel.getLineCount()), r);
    const o = [];
    for (let a = e; a <= t; a++) {
      const l = a - e;
      const u = s[l];
      let d = "";
      const m = n.visibleRangeForPosition(new ar(a, 1))?.left ?? 0;
      for (const p of u) {
        const g = p.column === -1 ? m + (p.visibleColumn - 1) * this._spaceWidth : n.visibleRangeForPosition(new ar(a, p.column)).left;
        if (g > i || this._maxIndentLeft > 0 && g > this._maxIndentLeft) {
          break;
        }
        const f = p.horizontalLine ? p.horizontalLine.top ? "horizontal-top" : "horizontal-bottom" : "vertical";
        const A = p.horizontalLine ? (n.visibleRangeForPosition(new ar(a, p.horizontalLine.endColumn))?.left ?? g + this._spaceWidth) - g : this._spaceWidth;
        d += `<div class="core-guide ${p.className} ${f}" style="left:${g}px;width:${A}px"></div>`;
      }
      o[l] = d;
    }
    this._renderResult = o;
  }
  getGuidesByLine(n, e, t) {
    const i = this._bracketPairGuideOptions.bracketPairs !== false ? this._context.viewModel.getBracketGuidesInRangeByLine(n, e, t, {
      highlightActive: this._bracketPairGuideOptions.highlightActiveBracketPair,
      horizontalGuides: this._bracketPairGuideOptions.bracketPairsHorizontal === true ? Cft.Enabled : this._bracketPairGuideOptions.bracketPairsHorizontal === "active" ? Cft.EnabledForActive : Cft.Disabled,
      includeInactive: this._bracketPairGuideOptions.bracketPairs === true
    }) : null;
    const r = this._bracketPairGuideOptions.indentation ? this._context.viewModel.getLinesIndentGuides(n, e) : null;
    let s = 0;
    let o = 0;
    let a = 0;
    if (this._bracketPairGuideOptions.highlightActiveIndentation !== false && t) {
      const d = this._context.viewModel.getActiveIndentGuide(t.lineNumber, n, e);
      s = d.startLineNumber;
      o = d.endLineNumber;
      a = d.indent;
    }
    const {
      indentSize: l
    } = this._context.viewModel.model.getOptions();
    const u = [];
    for (let d = n; d <= e; d++) {
      const m = new Array();
      u.push(m);
      const p = i ? i[d - n] : [];
      const g = new Ebe(p);
      const f = r ? r[d - n] : 0;
      for (let A = 1; A <= f; A++) {
        const w = (A - 1) * l + 1;
        const C = (this._bracketPairGuideOptions.highlightActiveIndentation === "always" || p.length === 0) && s <= d && d <= o && A === a;
        m.push(...(g.takeWhile(I => I.visibleColumn < w) || []));
        const x = g.peek();
        if (!x || x.visibleColumn !== w || x.horizontalLine) {
          m.push(new BVe(w, -1, `core-guide-indent lvl-${(A - 1) % 30}${C ? " indent-active" : ""}`, null, -1, -1));
        }
      }
      m.push(...(g.takeWhile(A => true) || []));
    }
    return u;
  }
  render(n, e) {
    if (!this._renderResult) {
      return "";
    }
    const t = e - n;
    if (t < 0 || t >= this._renderResult.length) {
      return "";
    } else {
      return this._renderResult[t];
    }
  }
};
HI((n, e) => {
  const t = [{
    bracketColor: bEc,
    guideColor: Fmh,
    guideColorActive: Jmh
  }, {
    bracketColor: vEc,
    guideColor: Omh,
    guideColorActive: Gmh
  }, {
    bracketColor: AEc,
    guideColor: Umh,
    guideColorActive: Wmh
  }, {
    bracketColor: yEc,
    guideColor: $mh,
    guideColorActive: Qmh
  }, {
    bracketColor: wEc,
    guideColor: qmh,
    guideColorActive: jmh
  }, {
    bracketColor: _Ec,
    guideColor: Hmh,
    guideColorActive: zmh
  }];
  const i = new WEc();
  const r = [{
    indentColor: mEc,
    indentColorActive: pEc
  }, {
    indentColor: vmh,
    indentColorActive: Cmh
  }, {
    indentColor: Amh,
    indentColorActive: Smh
  }, {
    indentColor: ymh,
    indentColorActive: kmh
  }, {
    indentColor: wmh,
    indentColorActive: Emh
  }, {
    indentColor: _mh,
    indentColorActive: xmh
  }];
  const s = t.map(a => {
    const l = n.getColor(a.bracketColor);
    const u = n.getColor(a.guideColor);
    const d = n.getColor(a.guideColorActive);
    const m = o3t(o3t(u) ?? l?.transparent(0.3));
    const p = o3t(o3t(d) ?? l);
    if (!!m && !!p) {
      return {
        guideColor: m,
        guideColorActive: p
      };
    }
  }).filter(Ch);
  const o = r.map(a => {
    const l = n.getColor(a.indentColor);
    const u = n.getColor(a.indentColorActive);
    const d = o3t(l);
    const m = o3t(u);
    if (!!d && !!m) {
      return {
        indentColor: d,
        indentColorActive: m
      };
    }
  }).filter(Ch);
  if (s.length > 0) {
    for (let a = 0; a < 30; a++) {
      const l = s[a % s.length];
      e.addRule(`.monaco-editor .${i.getInlineClassNameOfLevel(a).replace(/ /g, ".")} { --guide-color: ${l.guideColor}; --guide-color-active: ${l.guideColorActive}; }`);
    }
    e.addRule(".monaco-editor .vertical { box-shadow: 1px 0 0 0 var(--guide-color) inset; }");
    e.addRule(".monaco-editor .horizontal-top { border-top: 1px solid var(--guide-color); }");
    e.addRule(".monaco-editor .horizontal-bottom { border-bottom: 1px solid var(--guide-color); }");
    e.addRule(`.monaco-editor .vertical.${i.activeClassName} { box-shadow: 1px 0 0 0 var(--guide-color-active) inset; }`);
    e.addRule(`.monaco-editor .horizontal-top.${i.activeClassName} { border-top: 1px solid var(--guide-color-active); }`);
    e.addRule(`.monaco-editor .horizontal-bottom.${i.activeClassName} { border-bottom: 1px solid var(--guide-color-active); }`);
  }
  if (o.length > 0) {
    for (let a = 0; a < 30; a++) {
      const l = o[a % o.length];
      e.addRule(`.monaco-editor .lines-content .core-guide-indent.lvl-${a} { --indent-color: ${l.indentColor}; --indent-color-active: ${l.indentColorActive}; }`);
    }
    e.addRule(".monaco-editor .lines-content .core-guide-indent { box-shadow: 1px 0 0 0 var(--indent-color) inset; }");
    e.addRule(".monaco-editor .lines-content .core-guide-indent.indent-active { box-shadow: 1px 0 0 0 var(--indent-color-active) inset; }");
  }
});
