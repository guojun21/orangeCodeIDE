"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookCellOverlays.js
// Offset: 33038774 (bundle byte offset)
// Size: 2814 bytes
sI();
rt();
Ht();
ip();
dr();
Av();
ss();
ph();
Sb();
Q9f = class extends at {
  constructor(n) {
    super();
    this.listView = n;
    this._lastOverlayId = 0;
    this._overlays = Object.create(null);
    this.domNode = mw(document.createElement("div"));
    this.domNode.setClassName("cell-overlays");
    this.domNode.setPosition("absolute");
    this.domNode.setAttribute("role", "presentation");
    this.domNode.setAttribute("aria-hidden", "true");
    this.domNode.setWidth("100%");
    this.listView.containerDomNode.appendChild(this.domNode.domNode);
  }
  changeCellOverlays(n) {
    let e = false;
    n({
      addOverlay: i => {
        e = true;
        return this._addOverlay(i);
      },
      removeOverlay: i => {
        e = true;
        this._removeOverlay(i);
      },
      layoutOverlay: i => {
        e = true;
        this._layoutOverlay(i);
      }
    });
    return e;
  }
  onCellsChanged(n) {
    this.layout();
  }
  onHiddenRangesChange() {
    this.layout();
  }
  layout() {
    for (const n in this._overlays) {
      this._layoutOverlay(n);
    }
  }
  _addOverlay(n) {
    const e = `${++this._lastOverlayId}`;
    const t = {
      overlayId: e,
      overlay: n,
      domNode: mw(n.domNode)
    };
    this._overlays[e] = t;
    t.domNode.setClassName("cell-overlay");
    t.domNode.setPosition("absolute");
    this.domNode.appendChild(t.domNode);
    return e;
  }
  _removeOverlay(n) {
    const e = this._overlays[n];
    if (e) {
      try {
        this.domNode.removeChild(e.domNode);
      } catch {}
      delete this._overlays[n];
    }
  }
  _layoutOverlay(n) {
    const e = this._overlays[n];
    if (!e) {
      return;
    }
    if (this._isInHiddenRanges(e)) {
      e.domNode.setDisplay("none");
      return;
    }
    e.domNode.setDisplay("block");
    const i = this.listView.indexOf(e.overlay.cell);
    if (i === -1) {
      return;
    }
    const r = this.listView.elementTop(i);
    e.domNode.setTop(r);
  }
  _isInHiddenRanges(n) {
    return this.listView.indexOf(n.overlay.cell) === -1;
  }
};
j9f = class Dto extends rn {
  static {
    this.cellOverlayIds = [];
  }
  constructor() {
    super({
      id: "notebook.developer.addCellOverlays",
      title: dt(9502, "Toggle Notebook Cell Overlays"),
      category: Br.Developer,
      precondition: Gy,
      f1: true
    });
  }
  async run(e) {
    const t = e.get(yi);
    const i = sA(t.activeEditorPane);
    if (i) {
      if (Dto.cellOverlayIds.length > 0) {
        i.changeCellOverlays(r => {
          Dto.cellOverlayIds.forEach(s => {
            r.removeOverlay(s);
          });
          Dto.cellOverlayIds = [];
        });
      } else {
        i.changeCellOverlays(r => {
          const s = i.getCellsInRange();
          if (s.length === 0) {
            return;
          }
          const o = [];
          for (let a = 0; a < s.length; a++) {
            if (s[a].cellKind !== zd.Markup) {
              continue;
            }
            const l = document.createElement("div");
            l.innerText = `Cell Overlay ${a}`;
            l.style.top = "10px";
            l.style.right = "10px";
            l.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
            const u = r.addOverlay({
              cell: s[a],
              domNode: l
            });
            o.push(u);
          }
          Dto.cellOverlayIds = o;
        });
      }
    }
  }
};
Dt(j9f);
