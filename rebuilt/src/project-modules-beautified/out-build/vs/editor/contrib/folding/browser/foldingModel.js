"use strict";

// Module: out-build/vs/editor/contrib/folding/browser/foldingModel.js
// Offset: 25218843 (bundle byte offset)
// Size: 4875 bytes
yn();
Opi();
iw();
zvg = class {
  get regions() {
    return this._regions;
  }
  get textModel() {
    return this._textModel;
  }
  get decorationProvider() {
    return this._decorationProvider;
  }
  constructor(n, e) {
    this._updateEventEmitter = new Qe();
    this.onDidChange = this._updateEventEmitter.event;
    this._textModel = n;
    this._decorationProvider = e;
    this._regions = new Qae(new Uint32Array(0), new Uint32Array(0));
    this._editorDecorationIds = [];
  }
  toggleCollapseState(n) {
    if (!n.length) {
      return;
    }
    n = n.sort((t, i) => t.regionIndex - i.regionIndex);
    const e = {};
    this._decorationProvider.changeDecorations(t => {
      let i = 0;
      let r = -1;
      let s = -1;
      const o = a => {
        while (i < a) {
          const l = this._regions.getEndLineNumber(i);
          const u = this._regions.isCollapsed(i);
          if (l <= r) {
            const d = this.regions.getSource(i) !== 0;
            t.changeDecorationOptions(this._editorDecorationIds[i], this._decorationProvider.getDecorationOption(u, l <= s, d));
          }
          if (u && l > s) {
            s = l;
          }
          i++;
        }
      };
      for (const a of n) {
        const l = a.regionIndex;
        const u = this._editorDecorationIds[l];
        if (u && !e[u]) {
          e[u] = true;
          o(l);
          const d = !this._regions.isCollapsed(l);
          this._regions.setCollapsed(l, d);
          r = Math.max(r, this._regions.getEndLineNumber(l));
        }
      }
      o(this._regions.length);
    });
    this._updateEventEmitter.fire({
      model: this,
      collapseStateChanged: n
    });
  }
  removeManualRanges(n) {
    const e = new Array();
    const t = i => {
      for (const r of n) {
        if (!(r.startLineNumber > i.endLineNumber) && !(i.startLineNumber > r.endLineNumber)) {
          return true;
        }
      }
      return false;
    };
    for (let i = 0; i < this._regions.length; i++) {
      const r = this._regions.toFoldRange(i);
      if (r.source === 0 || !t(r)) {
        e.push(r);
      }
    }
    this.updatePost(Qae.fromFoldRanges(e));
  }
  update(n, e) {
    const t = this._currentFoldedOrManualRanges(e);
    const i = Qae.sanitizeAndMerge(n, t, this._textModel.getLineCount(), e);
    this.updatePost(Qae.fromFoldRanges(i));
  }
  updatePost(n) {
    const e = [];
    let t = -1;
    for (let i = 0, r = n.length; i < r; i++) {
      const s = n.getStartLineNumber(i);
      const o = n.getEndLineNumber(i);
      const a = n.isCollapsed(i);
      const l = n.getSource(i) !== 0;
      const u = {
        startLineNumber: s,
        startColumn: this._textModel.getLineMaxColumn(s),
        endLineNumber: o,
        endColumn: this._textModel.getLineMaxColumn(o) + 1
      };
      e.push({
        range: u,
        options: this._decorationProvider.getDecorationOption(a, o <= t, l)
      });
      if (a && o > t) {
        t = o;
      }
    }
    this._decorationProvider.changeDecorations(i => this._editorDecorationIds = i.deltaDecorations(this._editorDecorationIds, e));
    this._regions = n;
    this._updateEventEmitter.fire({
      model: this
    });
  }
  _currentFoldedOrManualRanges(n) {
    const e = [];
    for (let t = 0, i = this._regions.length; t < i; t++) {
      let r = this.regions.isCollapsed(t);
      const s = this.regions.getSource(t);
      if (r || s !== 0) {
        const o = this._regions.toFoldRange(t);
        const a = this._textModel.getDecorationRange(this._editorDecorationIds[t]);
        if (a) {
          if (r && n?.startsInside(a.startLineNumber + 1, a.endLineNumber)) {
            r = false;
          }
          e.push({
            startLineNumber: a.startLineNumber,
            endLineNumber: a.endLineNumber,
            type: o.type,
            isCollapsed: r,
            source: s
          });
        }
      }
    }
    return e;
  }
  getMemento() {
    const n = this._currentFoldedOrManualRanges();
    const e = [];
    const t = this._textModel.getLineCount();
    for (let i = 0, r = n.length; i < r; i++) {
      const s = n[i];
      if (s.startLineNumber >= s.endLineNumber || s.startLineNumber < 1 || s.endLineNumber > t) {
        continue;
      }
      const o = this._getLinesChecksum(s.startLineNumber + 1, s.endLineNumber);
      e.push({
        startLineNumber: s.startLineNumber,
        endLineNumber: s.endLineNumber,
        isCollapsed: s.isCollapsed,
        source: s.source,
        checksum: o
      });
    }
    if (e.length > 0) {
      return e;
    } else {
      return undefined;
    }
  }
  applyMemento(n) {
    if (!Array.isArray(n)) {
      return;
    }
    const e = [];
    const t = this._textModel.getLineCount();
    for (const r of n) {
      if (r.startLineNumber >= r.endLineNumber || r.startLineNumber < 1 || r.endLineNumber > t) {
        continue;
      }
      const s = this._getLinesChecksum(r.startLineNumber + 1, r.endLineNumber);
      if (!r.checksum || s === r.checksum) {
        e.push({
          startLineNumber: r.startLineNumber,
          endLineNumber: r.endLineNumber,
          type: undefined,
          isCollapsed: r.isCollapsed ?? true,
          source: r.source ?? 0
        });
      }
    }
    const i = Qae.sanitizeAndMerge(this._regions, e, t);
    this.updatePost(Qae.fromFoldRanges(i));
  }
  _getLinesChecksum(n, e) {
    return VC(this._textModel.getLineContent(n) + this._textModel.getLineContent(e)) % 1000000;
  }
  dispose() {
    this._decorationProvider.removeDecorations(this._editorDecorationIds);
  }
  getAllRegionsAtLine(n, e) {
    const t = [];
    if (this._regions) {
      let i = this._regions.findRange(n);
      let r = 1;
      while (i >= 0) {
        const s = this._regions.toRegion(i);
        if (!e || e(s, r)) {
          t.push(s);
        }
        r++;
        i = s.parentIndex;
      }
    }
    return t;
  }
  getRegionAtLine(n) {
    if (this._regions) {
      const e = this._regions.findRange(n);
      if (e >= 0) {
        return this._regions.toRegion(e);
      }
    }
    return null;
  }
  getRegionsInside(n, e) {
    const t = [];
    const i = n ? n.regionIndex + 1 : 0;
    const r = n ? n.endLineNumber : Number.MAX_VALUE;
    if (e && e.length === 2) {
      const s = [];
      for (let o = i, a = this._regions.length; o < a; o++) {
        const l = this._regions.toRegion(o);
        if (this._regions.getStartLineNumber(o) < r) {
          while (s.length > 0 && !l.containedBy(s[s.length - 1])) {
            s.pop();
          }
          s.push(l);
          if (e(l, s.length)) {
            t.push(l);
          }
        } else {
          break;
        }
      }
    } else {
      for (let s = i, o = this._regions.length; s < o; s++) {
        const a = this._regions.toRegion(s);
        if (this._regions.getStartLineNumber(s) < r) {
          if (!e || e(a)) {
            t.push(a);
          }
        } else {
          break;
        }
      }
    }
    return t;
  }
};
