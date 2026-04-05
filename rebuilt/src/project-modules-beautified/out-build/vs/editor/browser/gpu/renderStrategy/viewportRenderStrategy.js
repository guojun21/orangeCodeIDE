"use strict";

// Module: out-build/vs/editor/browser/gpu/renderStrategy/viewportRenderStrategy.js
// Offset: 1796632 (bundle byte offset)
// Size: 5795 bytes
ri();
xf();
_s();
yn();
koe();
hIc();
YOn();
f9e();
ZOn();
$yh();
qyh();
(function (n) {
  n[n.IndicesPerCell = 6] = "IndicesPerCell";
  n[n.CellBindBufferCapacityIncrement = 32] = "CellBindBufferCapacityIncrement";
  n[n.CellBindBufferInitialCapacity = 63] = "CellBindBufferInitialCapacity";
})(Hyh ||= {});
(function (n) {
  n[n.FloatsPerEntry = 6] = "FloatsPerEntry";
  n[n.BytesPerEntry = 24] = "BytesPerEntry";
  n[n.Offset_X = 0] = "Offset_X";
  n[n.Offset_Y = 1] = "Offset_Y";
  n[n.Offset_Unused1 = 2] = "Offset_Unused1";
  n[n.Offset_Unused2 = 3] = "Offset_Unused2";
  n[n.GlyphIndex = 4] = "GlyphIndex";
  n[n.TextureIndex = 5] = "TextureIndex";
})(Jyh ||= {});
Gyh = class Mat extends mIc {
  static {
    this.maxSupportedColumns = 2000;
  }
  get bindGroupEntries() {
    return [{
      binding: 1,
      resource: {
        buffer: this._cellBindBuffer
      }
    }, {
      binding: 6,
      resource: {
        buffer: this._scrollOffsetBindBuffer
      }
    }];
  }
  constructor(e, t, i, r) {
    super(e, t, i, r);
    this.type = "viewport";
    this.wgsl = pIc;
    this._cellBindBufferLineCapacity = 63;
    this._activeDoubleBufferIndex = 0;
    this._visibleObjectCount = 0;
    this._scrollInitialized = false;
    this._onDidChangeBindGroupEntries = this._register(new Qe());
    this.onDidChangeBindGroupEntries = this._onDidChangeBindGroupEntries.event;
    this._rebuildCellBuffer(this._cellBindBufferLineCapacity);
    const s = 2;
    this._scrollOffsetBindBuffer = this._register(GY.createBuffer(this._device, {
      label: "Monaco scroll offset buffer",
      size: s * Float32Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    })).object;
    this._scrollOffsetValueBuffer = new Float32Array(s);
  }
  _rebuildCellBuffer(e) {
    this._cellBindBuffer?.destroy();
    const t = (Math.floor(e / 32) + 1) * 32;
    const i = t * Mat.maxSupportedColumns * 6 * Float32Array.BYTES_PER_ELEMENT;
    this._cellBindBuffer = this._register(GY.createBuffer(this._device, {
      label: "Monaco full file cell buffer",
      size: i,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    })).object;
    this._cellValueBuffers = [new ArrayBuffer(i), new ArrayBuffer(i)];
    this._cellBindBufferLineCapacity = t;
    this._onDidChangeBindGroupEntries.fire();
  }
  onConfigurationChanged(e) {
    return true;
  }
  onDecorationsChanged(e) {
    return true;
  }
  onTokensChanged(e) {
    return true;
  }
  onLinesDeleted(e) {
    return true;
  }
  onLinesInserted(e) {
    return true;
  }
  onLinesChanged(e) {
    return true;
  }
  onScrollChanged(e) {
    const t = $c().devicePixelRatio;
    this._scrollOffsetValueBuffer[0] = (e?.scrollLeft ?? this._context.viewLayout.getCurrentScrollLeft()) * t;
    this._scrollOffsetValueBuffer[1] = (e?.scrollTop ?? this._context.viewLayout.getCurrentScrollTop()) * t;
    this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer);
    return true;
  }
  onThemeChanged(e) {
    return true;
  }
  onLineMappingChanged(e) {
    return true;
  }
  onZonesChanged(e) {
    return true;
  }
  reset() {
    for (const e of [0, 1]) {
      const t = new Float32Array(this._cellValueBuffers[e]);
      t.fill(0, 0, t.length);
      this._device.queue.writeBuffer(this._cellBindBuffer, 0, t.buffer, 0, t.byteLength);
    }
  }
  update(e, t) {
    let i = "";
    let r;
    let s = 0;
    let o = 0;
    let a = 0;
    let l = 0;
    let u = 0;
    let d = 0;
    let m;
    let p = 0;
    let g = 0;
    let f = 0;
    let A = 0;
    let w;
    let C;
    let x;
    let I;
    let B;
    let R = 0;
    let N = 0;
    let M;
    const O = $c().devicePixelRatio;
    let $;
    if (!this._scrollInitialized) {
      this.onScrollChanged();
      this._scrollInitialized = true;
    }
    if (this._cellBindBufferLineCapacity < e.endLineNumber - e.startLineNumber + 1) {
      this._rebuildCellBuffer(e.endLineNumber - e.startLineNumber + 1);
    }
    const H = new Float32Array(this._cellValueBuffers[this._activeDoubleBufferIndex]);
    H.fill(0);
    const W = Mat.maxSupportedColumns * 6;
    for (o = e.startLineNumber; o <= e.endLineNumber; o++) {
      if (this._viewGpuContext.canRender(t, e, o)) {
        I = e.getViewLineRenderingData(o);
        d = 0;
        $ = b3o(I, t);
        s = t.spaceWidth * O;
        l = 0;
        M = I.tokens;
        g = I.minColumn - 1;
        f = 0;
        for (let Y = 0, j = M.getCount(); Y < j; Y++) {
          f = M.getEndOffset(Y);
          if (!(f <= g)) {
            A = M.getMetadata(Y);
            a = g;
            for (; a < f && !(a > Mat.maxSupportedColumns); a++) {
              r = $.getSegmentAtIndex(a);
              if (r === undefined) {
                continue;
              }
              i = r;
              if (!I.isBasicASCII || !t.useMonospaceOptimizations) {
                s = this.glyphRasterizer.getTextMetrics(i).width;
              }
              C = undefined;
              w = undefined;
              x = undefined;
              for (B of I.inlineDecorations) {
                if (o < B.range.startLineNumber || o > B.range.endLineNumber || o === B.range.startLineNumber && a < B.range.startColumn - 1 || o === B.range.endLineNumber && a >= B.range.endColumn - 1) {
                  continue;
                }
                const ee = JH.decorationCssRuleExtractor.getStyleRules(this._viewGpuContext.canvas.domNode, B.inlineClassName);
                for (const re of ee) {
                  for (const ne of re.style) {
                    const pe = re.styleMap.get(ne)?.toString() ?? "";
                    switch (ne) {
                      case "color":
                        {
                          const le = Xr.Format.CSS.parse(pe);
                          if (!le) {
                            throw new _m("Invalid color format " + pe);
                          }
                          C = le.toNumber32Bit();
                          break;
                        }
                      case "font-weight":
                        {
                          if (MlA(pe) >= 400) {
                            w = true;
                          } else {
                            w = false;
                          }
                          break;
                        }
                      case "opacity":
                        {
                          x = FlA(pe);
                          break;
                        }
                      default:
                        throw new _m("Unexpected inline decoration style");
                    }
                  }
                }
              }
              if (i === " " || i === "\t") {
                p = ((o - 1) * Mat.maxSupportedColumns + a) * 6;
                H.fill(0, p, p + 6);
                if (i === "\t") {
                  const ee = a + d;
                  d = ZP.nextRenderTabStop(a + d, I.tabSize);
                  l += s * (d - ee);
                  d -= a + 1;
                } else {
                  l += s;
                }
                continue;
              }
              const X = JH.decorationStyleCache.getOrCreateEntry(C, w, x);
              m = this._viewGpuContext.atlas.getGlyph(this.glyphRasterizer, i, A, X, l);
              u = Math.round(e.relativeVerticalOffset[o - e.startLineNumber] * O + Math.floor((e.lineHeight * O - (m.fontBoundingBoxAscent + m.fontBoundingBoxDescent)) / 2) + m.fontBoundingBoxAscent);
              p = ((o - e.startLineNumber) * Mat.maxSupportedColumns + a) * 6;
              H[p + 0] = Math.floor(l);
              H[p + 1] = u;
              H[p + 4] = m.glyphIndex;
              H[p + 5] = m.pageIndex;
              l += s;
            }
            g = f;
          }
        }
        R = ((o - e.startLineNumber) * Mat.maxSupportedColumns + f) * 6;
        N = (o - e.startLineNumber) * Mat.maxSupportedColumns * 6;
        H.fill(0, R, N);
      }
    }
    const z = (e.endLineNumber - e.startLineNumber + 1) * W;
    this._device.queue.writeBuffer(this._cellBindBuffer, 0, H.buffer, 0, (e.endLineNumber - e.startLineNumber) * W * Float32Array.BYTES_PER_ELEMENT);
    this._activeDoubleBufferIndex = this._activeDoubleBufferIndex ? 0 : 1;
    this._visibleObjectCount = z;
    return z;
  }
  draw(e, t) {
    if (this._visibleObjectCount <= 0) {
      throw new _m("Attempt to draw 0 objects");
    }
    e.draw(QVe.length / 2, this._visibleObjectCount);
  }
};
