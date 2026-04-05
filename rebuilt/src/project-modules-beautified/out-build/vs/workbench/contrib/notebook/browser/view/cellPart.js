"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellPart.js
// Offset: 32978824 (bundle byte offset)
// Size: 2590 bytes
ri();
_s();
rt();
JV = class extends at {
  constructor() {
    super();
    this.cellDisposables = this._register(new Ut());
  }
  prepareRenderCell(n) {}
  renderCell(n) {
    this.currentCell = n;
    Zce(() => this.didRenderCell(n));
  }
  didRenderCell(n) {}
  unrenderCell(n) {
    this.currentCell = undefined;
    this.cellDisposables.clear();
  }
  prepareLayout() {}
  updateInternalLayoutNow(n) {}
  updateState(n, e) {}
  updateForExecutionState(n, e) {}
};
gwu = class extends at {
  constructor() {
    super();
    this.cellDisposables = this._register(new Ut());
  }
  prepareRenderCell(n) {}
  renderCell(n) {
    this.currentCell = n;
    this.didRenderCell(n);
  }
  didRenderCell(n) {}
  unrenderCell(n) {
    this.currentCell = undefined;
    this.cellDisposables.clear();
  }
  updateInternalLayoutNow(n) {}
  updateState(n, e) {}
  updateForExecutionState(n, e) {}
};
fwu = class Zcd extends at {
  constructor(e, t, i) {
    super();
    this.targetWindow = e;
    this.contentParts = t;
    this.overlayParts = i;
    this._scheduledOverlayRendering = this._register(new uo());
    this._scheduledOverlayUpdateState = this._register(new uo());
    this._scheduledOverlayUpdateExecutionState = this._register(new uo());
  }
  concatContentPart(e, t) {
    return new Zcd(t, this.contentParts.concat(e), this.overlayParts);
  }
  concatOverlayPart(e, t) {
    return new Zcd(t, this.contentParts, this.overlayParts.concat(e));
  }
  scheduleRenderCell(e) {
    for (const t of this.contentParts) {
      Zce(() => t.prepareRenderCell(e));
    }
    for (const t of this.overlayParts) {
      Zce(() => t.prepareRenderCell(e));
    }
    for (const t of this.contentParts) {
      Zce(() => t.renderCell(e));
    }
    this._scheduledOverlayRendering.value = VFn(this.targetWindow, () => {
      for (const t of this.overlayParts) {
        Zce(() => t.renderCell(e));
      }
    });
  }
  unrenderCell(e) {
    for (const t of this.contentParts) {
      Zce(() => t.unrenderCell(e));
    }
    this._scheduledOverlayRendering.value = undefined;
    this._scheduledOverlayUpdateState.value = undefined;
    this._scheduledOverlayUpdateExecutionState.value = undefined;
    for (const t of this.overlayParts) {
      Zce(() => t.unrenderCell(e));
    }
  }
  updateInternalLayoutNow(e) {
    for (const t of this.contentParts) {
      Zce(() => t.updateInternalLayoutNow(e));
    }
    for (const t of this.overlayParts) {
      Zce(() => t.updateInternalLayoutNow(e));
    }
  }
  prepareLayout() {
    for (const e of this.contentParts) {
      Zce(() => e.prepareLayout());
    }
  }
  updateState(e, t) {
    for (const i of this.contentParts) {
      Zce(() => i.updateState(e, t));
    }
    this._scheduledOverlayUpdateState.value = VFn(this.targetWindow, () => {
      for (const i of this.overlayParts) {
        Zce(() => i.updateState(e, t));
      }
    });
  }
  updateForExecutionState(e, t) {
    for (const i of this.contentParts) {
      Zce(() => i.updateForExecutionState(e, t));
    }
    this._scheduledOverlayUpdateExecutionState.value = VFn(this.targetWindow, () => {
      for (const i of this.overlayParts) {
        Zce(() => i.updateForExecutionState(e, t));
      }
    });
  }
};
