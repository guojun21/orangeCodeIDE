"use strict";

// Module: out-build/vs/editor/browser/widget/diffEditor/diffEditorViewModel.js
// Offset: 2198626 (bundle byte offset)
// Size: 11944 bytes
vr();
Po();
rt();
Uc();
Y0h();
Gde();
v9e();
Ix();
ODc();
WY();
iOo();
Dph();
mCh();
Js();
Vs();
Lv();
k3n = class extends at {
  setActiveMovedText(e) {
    this._activeMovedText.set(e, undefined);
  }
  setHoveredMovedText(e) {
    this._hoveredMovedText.set(e, undefined);
  }
  constructor(e, t, i) {
    super();
    this.model = e;
    this._options = t;
    this._diffProviderFactoryService = i;
    this._isDiffUpToDate = Ua(this, false);
    this.isDiffUpToDate = this._isDiffUpToDate;
    this._diff = Ua(this, undefined);
    this.diff = this._diff;
    this._unchangedRegions = Ua(this, undefined);
    this.unchangedRegions = Ro(this, a => this._options.hideUnchangedRegions.read(a) ? this._unchangedRegions.read(a)?.regions ?? [] : (pp(l => {
      for (const u of this._unchangedRegions.get()?.regions || []) {
        u.collapseAll(l);
      }
    }), []));
    this.movedTextToCompare = Ua(this, undefined);
    this._activeMovedText = Ua(this, undefined);
    this._hoveredMovedText = Ua(this, undefined);
    this.activeMovedText = Ro(this, a => this.movedTextToCompare.read(a) ?? this._hoveredMovedText.read(a) ?? this._activeMovedText.read(a));
    this._cancellationTokenSource = new Wc();
    this._diffProvider = Ro(this, a => {
      const l = this._diffProviderFactoryService.createDiffProvider({
        diffAlgorithm: this._options.diffAlgorithm.read(a)
      });
      const u = m3("onDidChange", l.onDidChange);
      return {
        diffProvider: l,
        onChangeSignal: u
      };
    });
    this._register($i(() => this._cancellationTokenSource.cancel()));
    const r = IY("contentChangedSignal");
    const s = this._register(new Hu(() => r.trigger(undefined), 200));
    this._register(Oc(a => {
      const l = this._unchangedRegions.read(a);
      if (!l || l.regions.some(f => f.isDragged.read(a))) {
        return;
      }
      const u = l.originalDecorationIds.map(f => e.original.getDecorationRange(f)).map(f => f ? rh.fromRangeInclusive(f) : undefined);
      const d = l.modifiedDecorationIds.map(f => e.modified.getDecorationRange(f)).map(f => f ? rh.fromRangeInclusive(f) : undefined);
      const m = l.regions.map((f, A) => !u[A] || !d[A] ? undefined : new M3t(u[A].startLineNumber, d[A].startLineNumber, u[A].length, f.visibleLineCountTop.read(a), f.visibleLineCountBottom.read(a))).filter(Ch);
      const p = [];
      let g = false;
      for (const f of RMo(m, (A, w) => A.getHiddenModifiedRange(a).endLineNumberExclusive === w.getHiddenModifiedRange(a).startLineNumber)) {
        if (f.length > 1) {
          g = true;
          const A = f.reduce((C, x) => C + x.lineCount, 0);
          const w = new M3t(f[0].originalLineNumber, f[0].modifiedLineNumber, A, f[0].visibleLineCountTop.get(), f[f.length - 1].visibleLineCountBottom.get());
          p.push(w);
        } else {
          p.push(f[0]);
        }
      }
      if (g) {
        const f = e.original.deltaDecorations(l.originalDecorationIds, p.map(w => ({
          range: w.originalUnchangedRange.toInclusiveRange(),
          options: {
            description: "unchanged"
          }
        })));
        const A = e.modified.deltaDecorations(l.modifiedDecorationIds, p.map(w => ({
          range: w.modifiedUnchangedRange.toInclusiveRange(),
          options: {
            description: "unchanged"
          }
        })));
        pp(w => {
          this._unchangedRegions.set({
            regions: p,
            originalDecorationIds: f,
            modifiedDecorationIds: A
          }, w);
        });
      }
    }));
    const o = (a, l, u) => {
      const d = M3t.fromDiffs(a.changes, e.original.getLineCount(), e.modified.getLineCount(), this._options.hideUnchangedRegionsMinimumLineCount.read(u), this._options.hideUnchangedRegionsContextLineCount.read(u));
      let m;
      const p = this._unchangedRegions.get();
      if (p) {
        const w = p.originalDecorationIds.map(B => e.original.getDecorationRange(B)).map(B => B ? rh.fromRangeInclusive(B) : undefined);
        const C = p.modifiedDecorationIds.map(B => e.modified.getDecorationRange(B)).map(B => B ? rh.fromRangeInclusive(B) : undefined);
        let I = CdA(p.regions.map((B, R) => {
          if (!w[R] || !C[R]) {
            return;
          }
          const N = w[R].length;
          return new M3t(w[R].startLineNumber, C[R].startLineNumber, N, Math.min(B.visibleLineCountTop.get(), N), Math.min(B.visibleLineCountBottom.get(), N - B.visibleLineCountTop.get()));
        }).filter(Ch), (B, R) => !R || B.modifiedLineNumber >= R.modifiedLineNumber + R.lineCount && B.originalLineNumber >= R.originalLineNumber + R.lineCount).map(B => new Wde(B.getHiddenOriginalRange(u), B.getHiddenModifiedRange(u)));
        I = Wde.clip(I, rh.ofLength(1, e.original.getLineCount()), rh.ofLength(1, e.modified.getLineCount()));
        m = Wde.inverse(I, e.original.getLineCount(), e.modified.getLineCount());
      }
      const g = [];
      if (m) {
        for (const w of d) {
          const C = m.filter(x => x.original.intersectsStrict(w.originalUnchangedRange) && x.modified.intersectsStrict(w.modifiedUnchangedRange));
          g.push(...w.setVisibleRanges(C, l));
        }
      } else {
        g.push(...d);
      }
      const f = e.original.deltaDecorations(p?.originalDecorationIds || [], g.map(w => ({
        range: w.originalUnchangedRange.toInclusiveRange(),
        options: {
          description: "unchanged"
        }
      })));
      const A = e.modified.deltaDecorations(p?.modifiedDecorationIds || [], g.map(w => ({
        range: w.modifiedUnchangedRange.toInclusiveRange(),
        options: {
          description: "unchanged"
        }
      })));
      this._unchangedRegions.set({
        regions: g,
        originalDecorationIds: f,
        modifiedDecorationIds: A
      }, l);
    };
    this._register(e.modified.onDidChangeContent(a => {
      if (this._diff.get()) {
        const u = TVe.fromModelContentChanges(a.changes);
        this._lastDiff;
        e.original;
        e.modified;
        const d = undefined;
        if (d) {
          this._lastDiff = d;
          pp(m => {
            this._diff.set(E3n.fromDiffResult(this._lastDiff), m);
            o(d, m);
            const p = this.movedTextToCompare.get();
            this.movedTextToCompare.set(p ? this._lastDiff.moves.find(g => g.lineRangeMapping.modified.intersect(p.lineRangeMapping.modified)) : undefined, m);
          });
        }
      }
      this._isDiffUpToDate.set(false, undefined);
      s.schedule();
    }));
    this._register(e.original.onDidChangeContent(a => {
      if (this._diff.get()) {
        const u = TVe.fromModelContentChanges(a.changes);
        this._lastDiff;
        e.original;
        e.modified;
        const d = undefined;
        if (d) {
          this._lastDiff = d;
          pp(m => {
            this._diff.set(E3n.fromDiffResult(this._lastDiff), m);
            o(d, m);
            const p = this.movedTextToCompare.get();
            this.movedTextToCompare.set(p ? this._lastDiff.moves.find(g => g.lineRangeMapping.modified.intersect(p.lineRangeMapping.modified)) : undefined, m);
          });
        }
      }
      this._isDiffUpToDate.set(false, undefined);
      s.schedule();
    }));
    this._register(M0(async (a, l) => {
      this._options.hideUnchangedRegionsMinimumLineCount.read(a);
      this._options.hideUnchangedRegionsContextLineCount.read(a);
      s.cancel();
      r.read(a);
      const u = this._diffProvider.read(a);
      u.onChangeSignal.read(a);
      $de(_5o, a);
      $de(FDc, a);
      this._isDiffUpToDate.set(false, undefined);
      let d = [];
      l.add(e.original.onDidChangeContent(g => {
        const f = TVe.fromModelContentChanges(g.changes);
        d = lOo(d, f);
      }));
      let m = [];
      l.add(e.modified.onDidChangeContent(g => {
        const f = TVe.fromModelContentChanges(g.changes);
        m = lOo(m, f);
      }));
      let p = await u.diffProvider.computeDiff(e.original, e.modified, {
        ignoreTrimWhitespace: this._options.ignoreTrimWhitespace.read(a),
        maxComputationTimeMs: this._options.maxComputationTimeMs.read(a),
        computeMoves: this._options.showMoves.read(a)
      }, this._cancellationTokenSource.token);
      if (!this._cancellationTokenSource.token.isCancellationRequested && !e.original.isDisposed() && !e.modified.isDisposed()) {
        p = QdA(p, e.original, e.modified);
        p = (e.original, e.modified, undefined) ?? p;
        p = (e.original, e.modified, undefined) ?? p;
        pp(g => {
          o(p, g);
          this._lastDiff = p;
          const f = E3n.fromDiffResult(p);
          this._diff.set(f, g);
          this._isDiffUpToDate.set(true, g);
          const A = this.movedTextToCompare.get();
          this.movedTextToCompare.set(A ? this._lastDiff.moves.find(w => w.lineRangeMapping.modified.intersect(A.lineRangeMapping.modified)) : undefined, g);
        });
      }
    }));
  }
  ensureModifiedLineIsVisible(e, t, i) {
    if (this.diff.get()?.mappings.length === 0) {
      return;
    }
    const r = this._unchangedRegions.get()?.regions || [];
    for (const s of r) {
      if (s.getHiddenModifiedRange(undefined).contains(e)) {
        s.showModifiedLine(e, t, i);
        return;
      }
    }
  }
  ensureOriginalLineIsVisible(e, t, i) {
    if (this.diff.get()?.mappings.length === 0) {
      return;
    }
    const r = this._unchangedRegions.get()?.regions || [];
    for (const s of r) {
      if (s.getHiddenOriginalRange(undefined).contains(e)) {
        s.showOriginalLine(e, t, i);
        return;
      }
    }
  }
  async waitForDiff() {
    await FBe(this.isDiffUpToDate, e => e);
  }
  serializeState() {
    return {
      collapsedRegions: this._unchangedRegions.get()?.regions.map(t => ({
        range: t.getHiddenModifiedRange(undefined).serialize()
      }))
    };
  }
  restoreSerializedState(e) {
    const t = e.collapsedRegions?.map(r => rh.deserialize(r.range));
    const i = this._unchangedRegions.get();
    if (!!i && !!t) {
      pp(r => {
        for (const s of i.regions) {
          for (const o of t) {
            if (s.modifiedUnchangedRange.intersect(o)) {
              s.setHiddenModifiedRange(o, r);
              break;
            }
          }
        }
      });
    }
  }
};
k3n = __decorate([__param(2, b5o)], k3n);
E3n = class BGb {
  static fromDiffResult(e) {
    return new BGb(e.changes.map(t => new UDc(t)), e.moves || [], e.identical, e.quitEarly);
  }
  constructor(e, t, i, r) {
    this.mappings = e;
    this.movedTexts = t;
    this.identical = i;
    this.quitEarly = r;
  }
};
UDc = class {
  constructor(n) {
    this.lineRangeMapping = n;
  }
};
M3t = class iWa {
  static fromDiffs(e, t, i, r, s) {
    const o = _3.inverse(e, t, i);
    const a = [];
    for (const l of o) {
      let u = l.original.startLineNumber;
      let d = l.modified.startLineNumber;
      let m = l.original.length;
      const p = u === 1 && d === 1;
      const g = u + m === t + 1 && d + m === i + 1;
      if ((p || g) && m >= s + r) {
        if (p && !g) {
          m -= s;
        }
        if (g && !p) {
          u += s;
          d += s;
          m -= s;
        }
        a.push(new iWa(u, d, m, 0, 0));
      } else if (m >= s * 2 + r) {
        u += s;
        d += s;
        m -= s * 2;
        a.push(new iWa(u, d, m, 0, 0));
      }
    }
    return a;
  }
  get originalUnchangedRange() {
    return rh.ofLength(this.originalLineNumber, this.lineCount);
  }
  get modifiedUnchangedRange() {
    return rh.ofLength(this.modifiedLineNumber, this.lineCount);
  }
  constructor(e, t, i, r, s) {
    this.originalLineNumber = e;
    this.modifiedLineNumber = t;
    this.lineCount = i;
    this._visibleLineCountTop = Ua(this, 0);
    this.visibleLineCountTop = this._visibleLineCountTop;
    this._visibleLineCountBottom = Ua(this, 0);
    this.visibleLineCountBottom = this._visibleLineCountBottom;
    this._shouldHideControls = Ro(this, l => this.visibleLineCountTop.read(l) + this.visibleLineCountBottom.read(l) === this.lineCount && !this.isDragged.read(l));
    this.isDragged = Ua(this, undefined);
    const o = Math.max(Math.min(r, this.lineCount), 0);
    const a = Math.max(Math.min(s, this.lineCount - r), 0);
    Unh(r === o);
    Unh(s === a);
    this._visibleLineCountTop.set(o, undefined);
    this._visibleLineCountBottom.set(a, undefined);
  }
  setVisibleRanges(e, t) {
    const i = [];
    const r = new xVe(e.map(l => l.modified)).subtractFrom(this.modifiedUnchangedRange);
    let s = this.originalLineNumber;
    let o = this.modifiedLineNumber;
    const a = this.modifiedLineNumber + this.lineCount;
    if (r.ranges.length === 0) {
      this.showAll(t);
      i.push(this);
    } else {
      let l = 0;
      for (const u of r.ranges) {
        const d = l === r.ranges.length - 1;
        l++;
        const m = (d ? a : u.endLineNumberExclusive) - o;
        const p = new iWa(s, o, m, 0, 0);
        p.setHiddenModifiedRange(u, t);
        i.push(p);
        s = p.originalUnchangedRange.endLineNumberExclusive;
        o = p.modifiedUnchangedRange.endLineNumberExclusive;
      }
    }
    return i;
  }
  shouldHideControls(e) {
    return this._shouldHideControls.read(e);
  }
  getHiddenOriginalRange(e) {
    return rh.ofLength(this.originalLineNumber + this._visibleLineCountTop.read(e), this.lineCount - this._visibleLineCountTop.read(e) - this._visibleLineCountBottom.read(e));
  }
  getHiddenModifiedRange(e) {
    return rh.ofLength(this.modifiedLineNumber + this._visibleLineCountTop.read(e), this.lineCount - this._visibleLineCountTop.read(e) - this._visibleLineCountBottom.read(e));
  }
  setHiddenModifiedRange(e, t) {
    const i = e.startLineNumber - this.modifiedLineNumber;
    const r = this.modifiedLineNumber + this.lineCount - e.endLineNumberExclusive;
    this.setState(i, r, t);
  }
  getMaxVisibleLineCountTop() {
    return this.lineCount - this._visibleLineCountBottom.get();
  }
  getMaxVisibleLineCountBottom() {
    return this.lineCount - this._visibleLineCountTop.get();
  }
  showMoreAbove(e = 10, t) {
    const i = this.getMaxVisibleLineCountTop();
    this._visibleLineCountTop.set(Math.min(this._visibleLineCountTop.get() + e, i), t);
  }
  showMoreBelow(e = 10, t) {
    const i = this.lineCount - this._visibleLineCountTop.get();
    this._visibleLineCountBottom.set(Math.min(this._visibleLineCountBottom.get() + e, i), t);
  }
  showAll(e) {
    this._visibleLineCountBottom.set(this.lineCount - this._visibleLineCountTop.get(), e);
  }
  showModifiedLine(e, t, i) {
    const r = e + 1 - (this.modifiedLineNumber + this._visibleLineCountTop.get());
    const s = this.modifiedLineNumber - this._visibleLineCountBottom.get() + this.lineCount - e;
    if (t === 0 && r < s || t === 1) {
      this._visibleLineCountTop.set(this._visibleLineCountTop.get() + r, i);
    } else {
      this._visibleLineCountBottom.set(this._visibleLineCountBottom.get() + s, i);
    }
  }
  showOriginalLine(e, t, i) {
    const r = e - this.originalLineNumber;
    const s = this.originalLineNumber + this.lineCount - e;
    if (t === 0 && r < s || t === 1) {
      this._visibleLineCountTop.set(Math.min(this._visibleLineCountTop.get() + s - r, this.getMaxVisibleLineCountTop()), i);
    } else {
      this._visibleLineCountBottom.set(Math.min(this._visibleLineCountBottom.get() + r - s, this.getMaxVisibleLineCountBottom()), i);
    }
  }
  collapseAll(e) {
    this._visibleLineCountTop.set(0, e);
    this._visibleLineCountBottom.set(0, e);
  }
  setState(e, t, i) {
    e = Math.max(Math.min(e, this.lineCount), 0);
    t = Math.max(Math.min(t, this.lineCount - e), 0);
    this._visibleLineCountTop.set(e, i);
    this._visibleLineCountBottom.set(t, i);
  }
};
(function (n) {
  n[n.FromCloserSide = 0] = "FromCloserSide";
  n[n.FromTop = 1] = "FromTop";
  n[n.FromBottom = 2] = "FromBottom";
})(fCh ||= {});
