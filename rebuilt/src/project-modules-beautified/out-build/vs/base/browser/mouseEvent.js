"use strict";

// Module: out-build/vs/base/browser/mouseEvent.js
// Offset: 316364 (bundle byte offset)
// Size: 2255 bytes
Ay();
F0c();
_r();
yy = class {
  constructor(n, e) {
    this.timestamp = Date.now();
    this.browserEvent = e;
    this.leftButton = e.button === 0;
    this.middleButton = e.button === 1;
    this.rightButton = e.button === 2;
    this.buttons = e.buttons;
    this.target = e.target;
    this.detail = e.detail || 1;
    if (e.type === "dblclick") {
      this.detail = 2;
    }
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.metaKey = e.metaKey;
    if (typeof e.pageX == "number") {
      this.posx = e.pageX;
      this.posy = e.pageY;
    } else {
      this.posx = e.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft;
      this.posy = e.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop;
    }
    const t = Pih.getPositionOfChildWindowRelativeToAncestorWindow(n, e.view);
    this.posx -= t.left;
    this.posy -= t.top;
  }
  preventDefault() {
    this.browserEvent.preventDefault();
  }
  stopPropagation() {
    this.browserEvent.stopPropagation();
  }
};
d5e = class {
  constructor(n, e = 0, t = 0) {
    this.browserEvent = n || null;
    this.target = n ? n.target || n.targetNode || n.srcElement : null;
    this.deltaY = t;
    this.deltaX = e;
    let i = false;
    if (_ze) {
      const r = navigator.userAgent.match(/Chrome\/(\d+)/);
      i = (r ? parseInt(r[1]) : 123) <= 122;
    }
    if (n) {
      const r = n;
      const s = n;
      const o = n.view?.devicePixelRatio || 1;
      if (typeof r.wheelDeltaY !== "undefined") {
        if (i) {
          this.deltaY = r.wheelDeltaY / (o * 120);
        } else {
          this.deltaY = r.wheelDeltaY / 120;
        }
      } else if (typeof s.VERTICAL_AXIS !== "undefined" && s.axis === s.VERTICAL_AXIS) {
        this.deltaY = -s.detail / 3;
      } else if (n.type === "wheel") {
        const a = n;
        if (a.deltaMode === a.DOM_DELTA_LINE) {
          if (u3 && !Fs) {
            this.deltaY = -n.deltaY / 3;
          } else {
            this.deltaY = -n.deltaY;
          }
        } else {
          this.deltaY = -n.deltaY / 40;
        }
      }
      if (typeof r.wheelDeltaX !== "undefined") {
        if (kte && Sc) {
          this.deltaX = -(r.wheelDeltaX / 120);
        } else if (i) {
          this.deltaX = r.wheelDeltaX / (o * 120);
        } else {
          this.deltaX = r.wheelDeltaX / 120;
        }
      } else if (typeof s.HORIZONTAL_AXIS !== "undefined" && s.axis === s.HORIZONTAL_AXIS) {
        this.deltaX = -n.detail / 3;
      } else if (n.type === "wheel") {
        const a = n;
        if (a.deltaMode === a.DOM_DELTA_LINE) {
          if (u3 && !Fs) {
            this.deltaX = -n.deltaX / 3;
          } else {
            this.deltaX = -n.deltaX;
          }
        } else {
          this.deltaX = -n.deltaX / 40;
        }
      }
      if (this.deltaY === 0 && this.deltaX === 0 && n.wheelDelta) {
        if (i) {
          this.deltaY = n.wheelDelta / (o * 120);
        } else {
          this.deltaY = n.wheelDelta / 120;
        }
      }
    }
  }
  preventDefault() {
    this.browserEvent?.preventDefault();
  }
  stopPropagation() {
    this.browserEvent?.stopPropagation();
  }
};
