"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookViewZones.js
// Offset: 33035277 (bundle byte offset)
// Size: 3497 bytes
sI();
_s();
rt();
Ht();
ip();
dr();
Av();
ss();
Sb();
sTa = () => {
  throw new Error("Invalid notebook view zone change accessor");
};
G9f = class extends at {
  constructor(n, e) {
    super();
    this.listView = n;
    this.coordinator = e;
    this.domNode = mw(document.createElement("div"));
    this.domNode.setClassName("view-zones");
    this.domNode.setPosition("absolute");
    this.domNode.setAttribute("role", "presentation");
    this.domNode.setAttribute("aria-hidden", "true");
    this.domNode.setWidth("100%");
    this._zones = {};
    this.listView.containerDomNode.appendChild(this.domNode.domNode);
  }
  changeViewZones(n) {
    let e = false;
    const t = {
      addZone: i => {
        e = true;
        return this._addZone(i);
      },
      removeZone: i => {
        e = true;
        this._removeZone(i);
      },
      layoutZone: i => {
        e = true;
        this._layoutZone(i);
      }
    };
    Iuy(n, t);
    t.addZone = sTa;
    t.removeZone = sTa;
    t.layoutZone = sTa;
    return e;
  }
  getViewZoneLayoutInfo(n) {
    const e = this._zones[n];
    if (!e) {
      return null;
    }
    const t = this.listView.getWhitespacePosition(e.whitespaceId);
    return {
      height: e.zone.heightInPx,
      top: t
    };
  }
  onCellsChanged(n) {
    n.splices.slice().reverse().forEach(t => {
      const [i, r, s] = t;
      const o = i;
      const a = i + r;
      for (const l in this._zones) {
        const u = this._zones[l].zone;
        const d = u.afterModelPosition - 1;
        if (d >= o && d < a) {
          u.afterModelPosition = o;
          this._updateWhitespace(this._zones[l]);
        } else if (d >= a) {
          const p = s.length - r;
          u.afterModelPosition += p;
          this._updateWhitespace(this._zones[l]);
        }
      }
    });
  }
  onHiddenRangesChange() {
    for (const n in this._zones) {
      this._updateWhitespace(this._zones[n]);
    }
  }
  _updateWhitespace(n) {
    const e = n.whitespaceId;
    const t = this.coordinator.convertModelIndexToViewIndex(n.zone.afterModelPosition);
    const i = this._isInHiddenRanges(n.zone);
    n.isInHiddenArea = i;
    this.listView.changeOneWhitespace(e, t, i ? 0 : n.zone.heightInPx);
  }
  layout() {
    for (const n in this._zones) {
      this._layoutZone(n);
    }
  }
  _addZone(n) {
    const e = this.coordinator.convertModelIndexToViewIndex(n.afterModelPosition);
    const t = this.listView.insertWhitespace(e, n.heightInPx);
    const i = this._isInHiddenRanges(n);
    const r = {
      whitespaceId: t,
      zone: n,
      domNode: mw(n.domNode),
      isInHiddenArea: i
    };
    this._zones[t] = r;
    r.domNode.setPosition("absolute");
    r.domNode.domNode.style.width = "100%";
    r.domNode.setDisplay("none");
    r.domNode.setAttribute("notebook-view-zone", t);
    this.domNode.appendChild(r.domNode);
    return t;
  }
  _removeZone(n) {
    this.listView.removeWhitespace(n);
    const e = this._zones[n];
    if (e) {
      try {
        this.domNode.removeChild(e.domNode);
      } catch {}
    }
    delete this._zones[n];
  }
  _layoutZone(n) {
    const e = this._zones[n];
    if (!e) {
      return;
    }
    this._updateWhitespace(this._zones[n]);
    if (this._isInHiddenRanges(e.zone)) {
      e.domNode.setDisplay("none");
    } else {
      const i = this.listView.getWhitespacePosition(e.whitespaceId);
      e.domNode.setTop(i);
      e.domNode.setDisplay("block");
      e.domNode.setHeight(e.zone.heightInPx);
    }
  }
  _isInHiddenRanges(n) {
    const e = n.afterModelPosition;
    return !this.coordinator.modelIndexIsVisible(e);
  }
  dispose() {
    super.dispose();
    this._zones = {};
  }
};
W9f = class Ito extends rn {
  static {
    this.viewZoneIds = [];
  }
  constructor() {
    super({
      id: "notebook.developer.addViewZones",
      title: dt(9521, "Toggle Notebook View Zones"),
      category: Br.Developer,
      precondition: Gy,
      f1: true
    });
  }
  async run(e) {
    const t = e.get(yi);
    const i = sA(t.activeEditorPane);
    if (i) {
      if (Ito.viewZoneIds.length > 0) {
        i.changeViewZones(r => {
          Ito.viewZoneIds.reverse().forEach(s => {
            r.removeZone(s);
          });
          Ito.viewZoneIds = [];
        });
      } else {
        i.changeViewZones(r => {
          const s = i.getCellsInRange();
          if (s.length === 0) {
            return;
          }
          const o = [];
          for (let a = 0; a < s.length; a++) {
            const l = document.createElement("div");
            l.innerText = `View Zone ${a}`;
            l.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
            const u = r.addZone({
              afterModelPosition: a,
              heightInPx: 200,
              domNode: l
            });
            o.push(u);
          }
          Ito.viewZoneIds = o;
        });
      }
    }
  }
};
Dt(W9f);
