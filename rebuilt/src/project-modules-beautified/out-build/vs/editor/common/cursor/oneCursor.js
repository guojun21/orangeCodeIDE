"use strict";

// Module: out-build/vs/editor/common/cursor/oneCursor.js
// Offset: 1317965 (bundle byte offset)
// Size: 3139 bytes
Eoe();
tl();
ts();
db();
Nxc = class nGb {
  constructor(e) {
    this._selTrackedRange = null;
    this._trackSelection = true;
    this._setState(e, new hW(new Zt(1, 1, 1, 1), 0, 0, new ar(1, 1), 0), new hW(new Zt(1, 1, 1, 1), 0, 0, new ar(1, 1), 0));
  }
  dispose(e) {
    this._removeTrackedRange(e);
  }
  startTrackingSelection(e) {
    this._trackSelection = true;
    this._updateTrackedRange(e);
  }
  stopTrackingSelection(e) {
    this._trackSelection = false;
    this._removeTrackedRange(e);
  }
  _updateTrackedRange(e) {
    if (this._trackSelection) {
      this._selTrackedRange = e.model._setTrackedRange(this._selTrackedRange, this.modelState.selection, 0);
    }
  }
  _removeTrackedRange(e) {
    this._selTrackedRange = e.model._setTrackedRange(this._selTrackedRange, null, 0);
  }
  asCursorState() {
    return new s_(this.modelState, this.viewState);
  }
  readSelectionFromMarkers(e) {
    const t = e.model._getTrackedRange(this._selTrackedRange);
    if (this.modelState.selection.isEmpty() && !t.isEmpty()) {
      return Vl.fromRange(t.collapseToEnd(), this.modelState.selection.getDirection());
    } else {
      return Vl.fromRange(t, this.modelState.selection.getDirection());
    }
  }
  ensureValidState(e) {
    this._setState(e, this.modelState, this.viewState);
  }
  setState(e, t, i) {
    this._setState(e, t, i);
  }
  static _validatePositionWithCache(e, t, i, r) {
    if (t.equals(i)) {
      return r;
    } else {
      return e.normalizePosition(t, 2);
    }
  }
  static _validateViewState(e, t) {
    const i = t.position;
    const r = t.selectionStart.getStartPosition();
    const s = t.selectionStart.getEndPosition();
    const o = e.normalizePosition(i, 2);
    const a = this._validatePositionWithCache(e, r, i, o);
    const l = this._validatePositionWithCache(e, s, r, a);
    if (i.equals(o) && r.equals(a) && s.equals(l)) {
      return t;
    } else {
      return new hW(Zt.fromPositions(a, l), t.selectionStartKind, t.selectionStartLeftoverVisibleColumns + r.column - a.column, o, t.leftoverVisibleColumns + i.column - o.column);
    }
  }
  _setState(e, t, i) {
    i &&= nGb._validateViewState(e.viewModel, i);
    if (t) {
      const r = e.model.validateRange(t.selectionStart);
      const s = t.selectionStart.equalsRange(r) ? t.selectionStartLeftoverVisibleColumns : 0;
      const o = e.model.validatePosition(t.position);
      const a = t.position.equals(o) ? t.leftoverVisibleColumns : 0;
      t = new hW(r, t.selectionStartKind, s, o, a);
    } else {
      if (!i) {
        return;
      }
      const r = e.model.validateRange(e.coordinatesConverter.convertViewRangeToModelRange(i.selectionStart));
      const s = e.model.validatePosition(e.coordinatesConverter.convertViewPositionToModelPosition(i.position));
      t = new hW(r, i.selectionStartKind, i.selectionStartLeftoverVisibleColumns, s, i.leftoverVisibleColumns);
    }
    if (i) {
      const r = e.coordinatesConverter.validateViewRange(i.selectionStart, t.selectionStart);
      const s = e.coordinatesConverter.validateViewPosition(i.position, t.position);
      i = new hW(r, t.selectionStartKind, t.selectionStartLeftoverVisibleColumns, s, t.leftoverVisibleColumns);
    } else {
      const r = e.coordinatesConverter.convertModelPositionToViewPosition(new ar(t.selectionStart.startLineNumber, t.selectionStart.startColumn));
      const s = e.coordinatesConverter.convertModelPositionToViewPosition(new ar(t.selectionStart.endLineNumber, t.selectionStart.endColumn));
      const o = new Zt(r.lineNumber, r.column, s.lineNumber, s.column);
      const a = e.coordinatesConverter.convertModelPositionToViewPosition(t.position);
      i = new hW(o, t.selectionStartKind, t.selectionStartLeftoverVisibleColumns, a, t.leftoverVisibleColumns);
    }
    this.modelState = t;
    this.viewState = i;
    this._updateTrackedRange(e);
  }
};
