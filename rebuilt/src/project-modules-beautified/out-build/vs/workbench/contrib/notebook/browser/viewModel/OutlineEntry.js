"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/OutlineEntry.js
// Offset: 25021359 (bundle byte offset)
// Size: 1509 bytes
qi();
Jr();
ay();
bJ();
ph();
Tg();
Kpi = class {
  get icon() {
    if (this.symbolKind) {
      return $oe.toIcon(this.symbolKind);
    } else if (this.isExecuting && this.isPaused) {
      return lNe;
    } else if (this.isExecuting) {
      return Qt.modify(lNe, "spin");
    } else if (this.cell.cellKind === zd.Markup) {
      return Be.markdown;
    } else {
      return Be.code;
    }
  }
  constructor(n, e, t, i, r, s, o, a) {
    this.index = n;
    this.level = e;
    this.cell = t;
    this.label = i;
    this.isExecuting = r;
    this.isPaused = s;
    this.range = o;
    this.symbolKind = a;
    this._children = [];
  }
  addChild(n) {
    this._children.push(n);
    n._parent = this;
  }
  get parent() {
    return this._parent;
  }
  get children() {
    return this._children;
  }
  get markerInfo() {
    return this._markerInfo;
  }
  get position() {
    if (this.range) {
      return {
        startLineNumber: this.range.startLineNumber,
        startColumn: this.range.startColumn
      };
    }
  }
  updateMarkers(n) {
    if (this.cell.cellKind === zd.Code) {
      const e = n.read({
        resource: this.cell.uri,
        severities: Gl.Error | Gl.Warning
      });
      if (e.length === 0) {
        this._markerInfo = undefined;
      } else {
        const t = e.find(i => i.severity === Gl.Error)?.severity ?? Gl.Warning;
        this._markerInfo = {
          topSev: t,
          count: e.length
        };
      }
    } else {
      let e;
      for (const t of this.children) {
        t.updateMarkers(n);
        if (t.markerInfo) {
          e = e ? Math.max(t.markerInfo.topSev, e) : t.markerInfo.topSev;
        }
      }
      this._markerInfo = e && {
        topSev: e,
        count: 0
      };
    }
  }
  clearMarkers() {
    this._markerInfo = undefined;
    for (const n of this.children) {
      n.clearMarkers();
    }
  }
  find(n, e) {
    if (n.id === this.cell.id) {
      return this;
    }
    e.push(this);
    for (const t of this.children) {
      const i = t.find(n, e);
      if (i) {
        return i;
      }
    }
    e.pop();
  }
  asFlatList(n) {
    n.push(this);
    for (const e of this.children) {
      e.asFlatList(n);
    }
  }
};
