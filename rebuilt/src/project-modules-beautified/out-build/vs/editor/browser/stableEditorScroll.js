"use strict";

// Module: out-build/vs/editor/browser/stableEditorScroll.js
// Offset: 1951992 (bundle byte offset)
// Size: 1967 bytes
$Se = class Lad {
  static capture(e) {
    if (e.getScrollTop() === 0 || e.hasPendingScrollAnimation()) {
      return new Lad(e.getScrollTop(), e.getContentHeight(), null, 0, null);
    }
    let t = null;
    let i = 0;
    const r = e.getVisibleRanges();
    if (r.length > 0) {
      t = r[0].getStartPosition();
      const s = e.getTopForPosition(t.lineNumber, t.column);
      i = e.getScrollTop() - s;
    }
    return new Lad(e.getScrollTop(), e.getContentHeight(), t, i, e.getPosition());
  }
  constructor(e, t, i, r, s) {
    this._initialScrollTop = e;
    this._initialContentHeight = t;
    this._visiblePosition = i;
    this._visiblePositionScrollDelta = r;
    this._cursorPosition = s;
  }
  restore(e) {
    if ((this._initialContentHeight !== e.getContentHeight() || this._initialScrollTop !== e.getScrollTop()) && this._visiblePosition) {
      const t = e.getTopForPosition(this._visiblePosition.lineNumber, this._visiblePosition.column);
      e.setScrollTop(t + this._visiblePositionScrollDelta);
    }
  }
  restoreRelativeVerticalPositionOfCursor(e) {
    if (this._initialContentHeight === e.getContentHeight() && this._initialScrollTop === e.getScrollTop()) {
      return;
    }
    const t = e.getPosition();
    if (!this._cursorPosition || !t) {
      return;
    }
    const i = e.getTopForLineNumber(t.lineNumber) - e.getTopForLineNumber(this._cursorPosition.lineNumber);
    e.setScrollTop(e.getScrollTop() + i, 1);
  }
};
TIc = class Nad {
  static capture(e) {
    if (e.hasPendingScrollAnimation()) {
      return new Nad(e.getScrollTop(), e.getContentHeight(), null, 0);
    }
    let t = null;
    let i = 0;
    const r = e.getVisibleRanges();
    if (r.length > 0) {
      t = r.at(-1).getEndPosition();
      i = e.getBottomForLineNumber(t.lineNumber) - e.getScrollTop();
    }
    return new Nad(e.getScrollTop(), e.getContentHeight(), t, i);
  }
  constructor(e, t, i, r) {
    this._initialScrollTop = e;
    this._initialContentHeight = t;
    this._visiblePosition = i;
    this._visiblePositionScrollDelta = r;
  }
  restore(e) {
    if ((this._initialContentHeight !== e.getContentHeight() || this._initialScrollTop !== e.getScrollTop()) && this._visiblePosition) {
      const t = e.getBottomForLineNumber(this._visiblePosition.lineNumber);
      e.setScrollTop(t - this._visiblePositionScrollDelta, 1);
    }
  }
};
