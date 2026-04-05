"use strict";

// Module: out-build/vs/editor/browser/viewParts/whitespace/whitespace.js
// Offset: 1752840 (bundle byte offset)
// Size: 4795 bytes
ylA();
WVe();
oa();
Qft();
tl();
az();
fyh = class extends p9e {
  constructor(n) {
    super();
    this._context = n;
    this._options = new sIc(this._context.configuration);
    this._selection = [];
    this._renderResult = null;
    this._context.addEventHandler(this);
  }
  dispose() {
    this._context.removeEventHandler(this);
    this._renderResult = null;
    super.dispose();
  }
  onConfigurationChanged(n) {
    const e = new sIc(this._context.configuration);
    if (this._options.equals(e)) {
      return n.hasChanged(151);
    } else {
      this._options = e;
      return true;
    }
  }
  onCursorStateChanged(n) {
    this._selection = n.selections;
    return this._options.renderWhitespace === "selection";
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
  prepareRender(n) {
    if (this._options.renderWhitespace === "none") {
      this._renderResult = null;
      return;
    }
    const e = n.visibleRange.startLineNumber;
    const i = n.visibleRange.endLineNumber - e + 1;
    const r = new Array(i);
    for (let o = 0; o < i; o++) {
      r[o] = true;
    }
    const s = this._context.viewModel.getMinimapLinesRenderingData(n.viewportData.startLineNumber, n.viewportData.endLineNumber, r);
    this._renderResult = [];
    for (let o = n.viewportData.startLineNumber; o <= n.viewportData.endLineNumber; o++) {
      const a = o - n.viewportData.startLineNumber;
      const l = s.data[a];
      let u = null;
      if (this._options.renderWhitespace === "selection") {
        const d = this._selection;
        for (const m of d) {
          if (m.endLineNumber < o || m.startLineNumber > o) {
            continue;
          }
          const p = m.startLineNumber === o ? m.startColumn : l.minColumn;
          const g = m.endLineNumber === o ? m.endColumn : l.maxColumn;
          if (p < g) {
            u ||= [];
            u.push(new ATc(p - 1, g - 1));
          }
        }
      }
      this._renderResult[a] = this._applyRenderWhitespace(n, o, u, l);
    }
  }
  _applyRenderWhitespace(n, e, t, i) {
    if (this._options.renderWhitespace === "selection" && !t || this._options.renderWhitespace === "trailing" && i.continuesWithWrappedLine) {
      return "";
    }
    const r = this._context.theme.getColor(iOn);
    const s = this._options.renderWithSVG;
    const o = i.content;
    const a = this._options.stopRenderingLineAfter === -1 ? o.length : Math.min(this._options.stopRenderingLineAfter, o.length);
    const l = i.continuesWithWrappedLine;
    const u = i.minColumn - 1;
    const d = this._options.renderWhitespace === "boundary";
    const m = this._options.renderWhitespace === "trailing";
    const p = this._options.lineHeight;
    const g = this._options.middotWidth;
    const f = this._options.wsmiddotWidth;
    const A = this._options.spaceWidth;
    const w = Math.abs(f - A);
    const C = Math.abs(g - A);
    const x = w < C ? 11825 : 183;
    const I = this._options.canUseHalfwidthRightwardsArrow;
    let B = "";
    let R = false;
    let N = TH(o);
    let M;
    if (N === -1) {
      R = true;
      N = a;
      M = a;
    } else {
      M = mde(o);
    }
    let O = 0;
    let $ = t && t[O];
    let H = 0;
    for (let W = u; W < a; W++) {
      const z = o.charCodeAt(W);
      if ($ && W >= $.endOffset) {
        O++;
        $ = t && t[O];
      }
      if (z !== 9 && z !== 32 || m && !R && W <= M) {
        continue;
      }
      if (d && W >= N && W <= M && z === 32) {
        const j = W - 1 >= 0 ? o.charCodeAt(W - 1) : 0;
        const X = W + 1 < a ? o.charCodeAt(W + 1) : 0;
        if (j !== 32 && X !== 32) {
          continue;
        }
      }
      if (d && l && W === a - 1) {
        const j = W - 1 >= 0 ? o.charCodeAt(W - 1) : 0;
        if (z === 32 && j !== 32 && j !== 9) {
          continue;
        }
      }
      if (t && (!$ || $.startOffset > W || $.endOffset <= W)) {
        continue;
      }
      const Y = n.visibleRangeForPosition(new ar(e, W + 1));
      if (Y) {
        if (s) {
          H = Math.max(H, Y.left);
          if (z === 9) {
            B += this._renderArrow(p, A, Y.left);
          } else {
            B += `<circle cx="${(Y.left + A / 2).toFixed(2)}" cy="${(p / 2).toFixed(2)}" r="${(A / 7).toFixed(2)}" />`;
          }
        } else if (z === 9) {
          B += `<div class="mwh" style="left:${Y.left}px;height:${p}px;">${I ? "￫" : "→"}</div>`;
        } else {
          B += `<div class="mwh" style="left:${Y.left}px;height:${p}px;">${String.fromCharCode(x)}</div>`;
        }
      }
    }
    if (s) {
      H = Math.round(H + A);
      return `<svg style="bottom:0;position:absolute;width:${H}px;height:${p}px" viewBox="0 0 ${H} ${p}" xmlns="http://www.w3.org/2000/svg" fill="${r}">${B}</svg>`;
    } else {
      return B;
    }
  }
  _renderArrow(n, e, t) {
    const i = e / 7;
    const r = e;
    const s = n / 2;
    const o = t;
    const a = {
      x: 0,
      y: i / 2
    };
    const l = {
      x: 100 / 125 * r,
      y: a.y
    };
    const u = {
      x: l.x - l.x * 0.2,
      y: l.y + l.x * 0.2
    };
    const d = {
      x: u.x + l.x * 0.1,
      y: u.y + l.x * 0.1
    };
    const m = {
      x: d.x + l.x * 0.35,
      y: d.y - l.x * 0.35
    };
    const p = {
      x: m.x,
      y: -m.y
    };
    const g = {
      x: d.x,
      y: -d.y
    };
    const f = {
      x: u.x,
      y: -u.y
    };
    const A = {
      x: l.x,
      y: -l.y
    };
    const w = {
      x: a.x,
      y: -a.y
    };
    return `<path d="M ${[a, l, u, d, m, p, g, f, A, w].map(I => `${(o + I.x).toFixed(2)}
   ${(s + I.y).toFixed(2)}
  `).join(" L ")}" />`;
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
sIc = class {
  constructor(n) {
    const e = n.options;
    const t = e.get(52);
    const i = e.get(40);
    if (i === "off") {
      this.renderWhitespace = "none";
      this.renderWithSVG = false;
    } else if (i === "svg") {
      this.renderWhitespace = e.get(104);
      this.renderWithSVG = true;
    } else {
      this.renderWhitespace = e.get(104);
      this.renderWithSVG = false;
    }
    this.spaceWidth = t.spaceWidth;
    this.middotWidth = t.middotWidth;
    this.wsmiddotWidth = t.wsmiddotWidth;
    this.canUseHalfwidthRightwardsArrow = t.canUseHalfwidthRightwardsArrow;
    this.lineHeight = e.get(68);
    this.stopRenderingLineAfter = e.get(122);
  }
  equals(n) {
    return this.renderWhitespace === n.renderWhitespace && this.renderWithSVG === n.renderWithSVG && this.spaceWidth === n.spaceWidth && this.middotWidth === n.middotWidth && this.wsmiddotWidth === n.wsmiddotWidth && this.canUseHalfwidthRightwardsArrow === n.canUseHalfwidthRightwardsArrow && this.lineHeight === n.lineHeight && this.stopRenderingLineAfter === n.stopRenderingLineAfter;
  }
};
