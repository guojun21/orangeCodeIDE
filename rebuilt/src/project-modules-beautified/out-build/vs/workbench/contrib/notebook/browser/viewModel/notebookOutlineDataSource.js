"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/notebookOutlineDataSource.js
// Offset: 33431689 (bundle byte offset)
// Size: 2857 bytes
yn();
rt();
Yr();
Ei();
ay();
ph();
NWl();
rIa = class {
  constructor(e, t, i, r) {
    this._editor = e;
    this._markerService = t;
    this._configurationService = i;
    this._outlineEntryFactory = r;
    this._disposables = new Ut();
    this._onDidChange = new Qe();
    this.onDidChange = this._onDidChange.event;
    this._entries = [];
    this.recomputeState();
  }
  get activeElement() {
    return this._activeEntry;
  }
  get entries() {
    return this._entries;
  }
  get isEmpty() {
    return this._entries.length === 0;
  }
  get uri() {
    return this._uri;
  }
  async computeFullSymbols(e) {
    try {
      const i = this._editor?.getViewModel()?.viewCells.filter(r => r.cellKind === zd.Code);
      if (i) {
        const r = [];
        for (const s of i.slice(0, 50)) {
          r.push(this._outlineEntryFactory.cacheSymbols(s, e));
        }
        await Promise.allSettled(r);
      }
      this.recomputeState();
    } catch (t) {
      console.error("Failed to compute notebook outline symbols:", t);
      this.recomputeState();
    }
  }
  recomputeState() {
    this._disposables.clear();
    this._activeEntry = undefined;
    this._uri = undefined;
    if (!this._editor.hasModel()) {
      return;
    }
    this._uri = this._editor.textModel.uri;
    const e = this._editor;
    if (e.getLength() === 0) {
      return;
    }
    const t = e.getViewModel().viewCells;
    const i = [];
    for (const a of t) {
      i.push(...this._outlineEntryFactory.getOutlineEntries(a, i.length));
    }
    if (i.length > 0) {
      const a = [i[0]];
      const l = [i[0]];
      for (let u = 1; u < i.length; u++) {
        const d = i[u];
        while (true) {
          const m = l.length;
          if (m === 0) {
            a.push(d);
            l.push(d);
            break;
          } else {
            const p = l[m - 1];
            if (p.level < d.level) {
              p.addChild(d);
              l.push(d);
              break;
            } else {
              l.pop();
            }
          }
        }
      }
      this._entries = a;
    }
    const r = new uo();
    this._disposables.add(r);
    const s = () => {
      if (e.isDisposed) {
        return;
      }
      const a = d => {
        for (const m of this._entries) {
          if (d) {
            m.clearMarkers();
          } else {
            m.updateMarkers(this._markerService);
          }
        }
      };
      const l = this._configurationService.getValue("problems.visibility");
      if (l === undefined) {
        return;
      }
      const u = this._configurationService.getValue("outline.problems.enabled");
      if (l && u) {
        r.value = this._markerService.onMarkerChanged(d => {
          if (e.isDisposed) {
            console.error("notebook editor is disposed");
            return;
          }
          if (d.some(m => e.getCellsInRange().some(p => Zc(p.uri, m)))) {
            a(false);
            this._onDidChange.fire({});
          }
        });
        a(false);
      } else {
        r.clear();
        a(true);
      }
    };
    s();
    this._disposables.add(this._configurationService.onDidChangeConfiguration(a => {
      if (a.affectsConfiguration("problems.visibility") || a.affectsConfiguration("outline.problems.enabled")) {
        s();
        this._onDidChange.fire({});
      }
    }));
    const {
      changeEventTriggered: o
    } = this.recomputeActive();
    if (!o) {
      this._onDidChange.fire({});
    }
  }
  recomputeActive() {
    let e;
    const t = this._editor;
    if (t && t.hasModel() && t.getLength() > 0) {
      const i = t.cellAt(t.getFocus().start);
      if (i) {
        for (const r of this._entries) {
          e = r.find(i, []);
          if (e) {
            break;
          }
        }
      }
    }
    if (e !== this._activeEntry) {
      this._activeEntry = e;
      this._onDidChange.fire({
        affectOnlyActiveElement: true
      });
      return {
        changeEventTriggered: true
      };
    } else {
      return {
        changeEventTriggered: false
      };
    }
  }
  dispose() {
    this._entries.length = 0;
    this._activeEntry = undefined;
    this._disposables.dispose();
  }
};
rIa = __decorate([__param(1, bk), __param(2, Fn), __param(3, LWl)], rIa);
