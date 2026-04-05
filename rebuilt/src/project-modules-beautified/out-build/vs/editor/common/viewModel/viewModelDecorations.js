"use strict";

// Module: out-build/vs/editor/common/viewModel/viewModelDecorations.js
// Offset: 1379364 (bundle byte offset)
// Size: 3383 bytes
tl();
ts();
Lte();
pk();
Nbh = class {
  constructor(n, e, t, i, r) {
    this.editorId = n;
    this.model = e;
    this.configuration = t;
    this._linesCollection = i;
    this._coordinatesConverter = r;
    this._decorationsCache = Object.create(null);
    this._cachedModelDecorationsResolver = null;
    this._cachedModelDecorationsResolverViewRange = null;
  }
  _clearCachedModelDecorationsResolver() {
    this._cachedModelDecorationsResolver = null;
    this._cachedModelDecorationsResolverViewRange = null;
  }
  dispose() {
    this._decorationsCache = Object.create(null);
    this._clearCachedModelDecorationsResolver();
  }
  reset() {
    this._decorationsCache = Object.create(null);
    this._clearCachedModelDecorationsResolver();
  }
  onModelDecorationsChanged() {
    this._decorationsCache = Object.create(null);
    this._clearCachedModelDecorationsResolver();
  }
  onLineMappingChanged() {
    this._decorationsCache = Object.create(null);
    this._clearCachedModelDecorationsResolver();
  }
  _getOrCreateViewModelDecoration(n) {
    const e = n.id;
    let t = this._decorationsCache[e];
    if (!t) {
      const i = n.range;
      const r = n.options;
      let s;
      if (r.isWholeLine) {
        const o = this._coordinatesConverter.convertModelPositionToViewPosition(new ar(i.startLineNumber, 1), 0, false, true);
        const a = this._coordinatesConverter.convertModelPositionToViewPosition(new ar(i.endLineNumber, this.model.getLineMaxColumn(i.endLineNumber)), 1);
        s = new Zt(o.lineNumber, o.column, a.lineNumber, a.column);
      } else {
        s = this._coordinatesConverter.convertModelRangeToViewRange(i, 1);
      }
      t = new Vxc(s, r);
      this._decorationsCache[e] = t;
    }
    return t;
  }
  getMinimapDecorationsInRange(n) {
    return this._getDecorationsInRange(n, true, false).decorations;
  }
  getDecorationsViewportData(n) {
    let e = this._cachedModelDecorationsResolver !== null;
    e = e && n.equalsRange(this._cachedModelDecorationsResolverViewRange);
    if (!e) {
      this._cachedModelDecorationsResolver = this._getDecorationsInRange(n, false, false);
      this._cachedModelDecorationsResolverViewRange = n;
    }
    return this._cachedModelDecorationsResolver;
  }
  getInlineDecorationsOnLine(n, e = false, t = false) {
    const i = new Zt(n, this._linesCollection.getViewLineMinColumn(n), n, this._linesCollection.getViewLineMaxColumn(n));
    return this._getDecorationsInRange(i, e, t).inlineDecorations[0];
  }
  _getDecorationsInRange(n, e, t) {
    const i = this._linesCollection.getDecorationsInRange(n, this.editorId, K4o(this.configuration.options), e, t);
    const r = n.startLineNumber;
    const s = n.endLineNumber;
    const o = [];
    let a = 0;
    const l = [];
    for (let u = r; u <= s; u++) {
      l[u - r] = [];
    }
    for (let u = 0, d = i.length; u < d; u++) {
      const m = i[u];
      const p = m.options;
      if (!Yxc(this.model, m)) {
        continue;
      }
      const g = this._getOrCreateViewModelDecoration(m);
      const f = g.range;
      o[a++] = g;
      if (p.inlineClassName) {
        const A = new Ode(f, p.inlineClassName, p.inlineClassNameAffectsLetterSpacing ? 3 : 0);
        const w = Math.max(r, f.startLineNumber);
        const C = Math.min(s, f.endLineNumber);
        for (let x = w; x <= C; x++) {
          l[x - r].push(A);
        }
      }
      if (p.beforeContentClassName && r <= f.startLineNumber && f.startLineNumber <= s) {
        const A = new Ode(new Zt(f.startLineNumber, f.startColumn, f.startLineNumber, f.startColumn), p.beforeContentClassName, 1);
        l[f.startLineNumber - r].push(A);
      }
      if (p.afterContentClassName && r <= f.endLineNumber && f.endLineNumber <= s) {
        const A = new Ode(new Zt(f.endLineNumber, f.endColumn, f.endLineNumber, f.endColumn), p.afterContentClassName, 2);
        l[f.endLineNumber - r].push(A);
      }
    }
    return {
      decorations: o,
      inlineDecorations: l
    };
  }
};
