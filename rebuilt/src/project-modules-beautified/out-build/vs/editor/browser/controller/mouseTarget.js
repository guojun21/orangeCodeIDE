"use strict";

// Module: out-build/vs/editor/browser/controller/mouseTarget.js
// Offset: 1505804 (bundle byte offset)
// Size: 19737 bytes
XOt();
j$();
STc();
tl();
ts();
koe();
ri();
wch();
L0();
(function (n) {
  n[n.Unknown = 0] = "Unknown";
  n[n.Content = 1] = "Content";
})(Nvh ||= {});
m9e = class {
  constructor(n = null) {
    this.hitTarget = n;
    this.type = 0;
  }
};
kTc = class {
  get hitTarget() {
    return this.spanNode;
  }
  constructor(n, e, t) {
    this.position = n;
    this.spanNode = e;
    this.injectedText = t;
    this.type = 1;
  }
};
(function (n) {
  function e(t, i, r) {
    const s = t.getPositionFromDOMInfo(i, r);
    if (s) {
      return new kTc(s, i, null);
    } else {
      return new m9e(i);
    }
  }
  n.createFromDOMInfo = e;
})(zft ||= {});
Mvh = class {
  constructor(n, e) {
    this.lastViewCursorsRenderData = n;
    this.lastTextareaPosition = e;
  }
};
HH = class {
  static _deduceRage(n, e = null) {
    if (!e && n) {
      return new Zt(n.lineNumber, n.column, n.lineNumber, n.column);
    } else {
      return e ?? null;
    }
  }
  static createUnknown(n, e, t) {
    return {
      type: 0,
      element: n,
      mouseColumn: e,
      position: t,
      range: this._deduceRage(t)
    };
  }
  static createTextarea(n, e) {
    return {
      type: 1,
      element: n,
      mouseColumn: e,
      position: null,
      range: null
    };
  }
  static createMargin(n, e, t, i, r, s) {
    return {
      type: n,
      element: e,
      mouseColumn: t,
      position: i,
      range: r,
      detail: s
    };
  }
  static createViewZone(n, e, t, i, r) {
    return {
      type: n,
      element: e,
      mouseColumn: t,
      position: i,
      range: this._deduceRage(i),
      detail: r
    };
  }
  static createContentText(n, e, t, i, r) {
    return {
      type: 6,
      element: n,
      mouseColumn: e,
      position: t,
      range: this._deduceRage(t, i),
      detail: r
    };
  }
  static createContentEmpty(n, e, t, i) {
    return {
      type: 7,
      element: n,
      mouseColumn: e,
      position: t,
      range: this._deduceRage(t),
      detail: i
    };
  }
  static createContentWidget(n, e, t) {
    return {
      type: 9,
      element: n,
      mouseColumn: e,
      position: null,
      range: null,
      detail: t
    };
  }
  static createScrollbar(n, e, t) {
    return {
      type: 11,
      element: n,
      mouseColumn: e,
      position: t,
      range: this._deduceRage(t)
    };
  }
  static createOverlayWidget(n, e, t) {
    return {
      type: 12,
      element: n,
      mouseColumn: e,
      position: null,
      range: null,
      detail: t
    };
  }
  static createOutsideEditor(n, e, t, i) {
    return {
      type: 13,
      element: null,
      mouseColumn: n,
      position: e,
      range: this._deduceRage(e),
      outsidePosition: t,
      outsideDistance: i
    };
  }
  static _typeToString(n) {
    if (n === 1) {
      return "TEXTAREA";
    } else if (n === 2) {
      return "GUTTER_GLYPH_MARGIN";
    } else if (n === 3) {
      return "GUTTER_LINE_NUMBERS";
    } else if (n === 4) {
      return "GUTTER_LINE_DECORATIONS";
    } else if (n === 5) {
      return "GUTTER_VIEW_ZONE";
    } else if (n === 6) {
      return "CONTENT_TEXT";
    } else if (n === 7) {
      return "CONTENT_EMPTY";
    } else if (n === 8) {
      return "CONTENT_VIEW_ZONE";
    } else if (n === 9) {
      return "CONTENT_WIDGET";
    } else if (n === 10) {
      return "OVERVIEW_RULER";
    } else if (n === 11) {
      return "SCROLLBAR";
    } else if (n === 12) {
      return "OVERLAY_WIDGET";
    } else {
      return "UNKNOWN";
    }
  }
  static toString(n) {
    return this._typeToString(n.type) + ": " + n.position + " - " + n.range + " - " + JSON.stringify(n.detail);
  }
};
wW = class {
  static isTextArea(n) {
    return n.length === 2 && n[0] === 3 && n[1] === 7;
  }
  static isChildOfViewLines(n) {
    return n.length >= 4 && n[0] === 3 && n[3] === 8;
  }
  static isStrictChildOfViewLines(n) {
    return n.length > 4 && n[0] === 3 && n[3] === 8;
  }
  static isChildOfScrollableElement(n) {
    return n.length >= 2 && n[0] === 3 && n[1] === 6;
  }
  static isChildOfMinimap(n) {
    return n.length >= 2 && n[0] === 3 && n[1] === 9;
  }
  static isChildOfContentWidgets(n) {
    return n.length >= 4 && n[0] === 3 && n[3] === 1;
  }
  static isChildOfOverflowGuard(n) {
    return n.length >= 1 && n[0] === 3;
  }
  static isChildOfOverflowingContentWidgets(n) {
    return n.length >= 1 && n[0] === 2;
  }
  static isChildOfOverlayWidgets(n) {
    return n.length >= 2 && n[0] === 3 && n[1] === 4;
  }
  static isChildOfOverflowingOverlayWidgets(n) {
    return n.length >= 1 && n[0] === 5;
  }
};
r3o = class xad {
  constructor(e, t, i) {
    this.viewModel = e.viewModel;
    const r = e.configuration.options;
    this.layoutInfo = r.get(151);
    this.viewDomNode = t.viewDomNode;
    this.viewLinesGpu = t.viewLinesGpu;
    this.lineHeight = r.get(68);
    this.stickyTabStops = r.get(121);
    this.typicalHalfwidthCharacterWidth = r.get(52).typicalHalfwidthCharacterWidth;
    this.lastRenderData = i;
    this._context = e;
    this._viewHelper = t;
  }
  getZoneAtCoord(e) {
    return xad.getZoneAtCoord(this._context, e);
  }
  static getZoneAtCoord(e, t) {
    const i = e.viewLayout.getWhitespaceAtVerticalOffset(t);
    if (i) {
      const r = i.verticalOffset + i.height / 2;
      const s = e.viewModel.getLineCount();
      let o = null;
      let a;
      let l = null;
      if (i.afterLineNumber !== s) {
        l = new ar(i.afterLineNumber + 1, 1);
      }
      if (i.afterLineNumber > 0) {
        o = new ar(i.afterLineNumber, e.viewModel.getLineMaxColumn(i.afterLineNumber));
      }
      if (l === null) {
        a = o;
      } else if (o === null) {
        a = l;
      } else if (t < r) {
        a = o;
      } else {
        a = l;
      }
      return {
        viewZoneId: i.id,
        afterLineNumber: i.afterLineNumber,
        positionBefore: o,
        positionAfter: l,
        position: a
      };
    }
    return null;
  }
  getFullLineRangeAtCoord(e) {
    if (this._context.viewLayout.isAfterLines(e)) {
      const r = this._context.viewModel.getLineCount();
      const s = this._context.viewModel.getLineMaxColumn(r);
      return {
        range: new Zt(r, s, r, s),
        isAfterLines: true
      };
    }
    const t = this._context.viewLayout.getLineNumberAtVerticalOffset(e);
    const i = this._context.viewModel.getLineMaxColumn(t);
    return {
      range: new Zt(t, 1, t, i),
      isAfterLines: false
    };
  }
  getLineNumberAtVerticalOffset(e) {
    return this._context.viewLayout.getLineNumberAtVerticalOffset(e);
  }
  isAfterLines(e) {
    return this._context.viewLayout.isAfterLines(e);
  }
  isInTopPadding(e) {
    return this._context.viewLayout.isInTopPadding(e);
  }
  isInBottomPadding(e) {
    return this._context.viewLayout.isInBottomPadding(e);
  }
  getVerticalOffsetForLineNumber(e) {
    return this._context.viewLayout.getVerticalOffsetForLineNumber(e);
  }
  findAttribute(e, t) {
    return xad._findAttribute(e, t, this._viewHelper.viewDomNode);
  }
  static _findAttribute(e, t, i) {
    while (e && e !== e.ownerDocument.body) {
      if (e.hasAttribute && e.hasAttribute(t)) {
        return e.getAttribute(t);
      }
      if (e === i) {
        return null;
      }
      e = e.parentNode;
    }
    return null;
  }
  getLineWidth(e) {
    return this._viewHelper.getLineWidth(e);
  }
  visibleRangeForPosition(e, t) {
    return this._viewHelper.visibleRangeForPosition(e, t);
  }
  getPositionFromDOMInfo(e, t) {
    return this._viewHelper.getPositionFromDOMInfo(e, t);
  }
  getCurrentScrollTop() {
    return this._context.viewLayout.getCurrentScrollTop();
  }
  getCurrentScrollLeft() {
    return this._context.viewLayout.getCurrentScrollLeft();
  }
};
Fvh = class {
  constructor(n, e, t, i) {
    this.editorPos = e;
    this.pos = t;
    this.relativePos = i;
    this.mouseVerticalOffset = Math.max(0, n.getCurrentScrollTop() + this.relativePos.y);
    this.mouseContentHorizontalOffset = n.getCurrentScrollLeft() + this.relativePos.x - n.layoutInfo.contentLeft;
    this.isInMarginArea = this.relativePos.x < n.layoutInfo.contentLeft && this.relativePos.x >= n.layoutInfo.glyphMarginLeft;
    this.isInContentArea = !this.isInMarginArea;
    this.mouseColumn = Math.max(0, s3o._getMouseColumn(this.mouseContentHorizontalOffset, n.typicalHalfwidthCharacterWidth));
  }
};
Ovh = class extends Fvh {
  get target() {
    if (this._useHitTestTarget) {
      return this.hitTestResult.value.hitTarget;
    } else {
      return this._eventTarget;
    }
  }
  get targetPath() {
    if (this._targetPathCacheElement !== this.target) {
      this._targetPathCacheElement = this.target;
      this._targetPathCacheValue = tve.collect(this.target, this._ctx.viewDomNode);
    }
    return this._targetPathCacheValue;
  }
  constructor(n, e, t, i, r) {
    super(n, e, t, i);
    this.hitTestResult = new Ob(() => s3o.doHitTest(this._ctx, this));
    this._targetPathCacheElement = null;
    this._targetPathCacheValue = new Uint8Array(0);
    this._ctx = n;
    this._eventTarget = r;
    const s = !!this._eventTarget;
    this._useHitTestTarget = !s;
  }
  toString() {
    return `pos(${this.pos.x},${this.pos.y}), editorPos(${this.editorPos.x},${this.editorPos.y}), relativePos(${this.relativePos.x},${this.relativePos.y}), mouseVerticalOffset: ${this.mouseVerticalOffset}, mouseContentHorizontalOffset: ${this.mouseContentHorizontalOffset}
	target: ${this.target ? this.target.outerHTML : null}`;
  }
  get wouldBenefitFromHitTestTargetSwitch() {
    return !this._useHitTestTarget && this.hitTestResult.value.hitTarget !== null && this.target !== this.hitTestResult.value.hitTarget;
  }
  switchToHitTestTarget() {
    this._useHitTestTarget = true;
  }
  _getMouseColumn(n = null) {
    if (n && n.column < this._ctx.viewModel.getLineMaxColumn(n.lineNumber)) {
      return ZP.visibleColumnFromColumn(this._ctx.viewModel.getLineContent(n.lineNumber), n.column, this._ctx.viewModel.model.getOptions().tabSize) + 1;
    } else {
      return this.mouseColumn;
    }
  }
  fulfillUnknown(n = null) {
    return HH.createUnknown(this.target, this._getMouseColumn(n), n);
  }
  fulfillTextarea() {
    return HH.createTextarea(this.target, this._getMouseColumn());
  }
  fulfillMargin(n, e, t, i) {
    return HH.createMargin(n, this.target, this._getMouseColumn(e), e, t, i);
  }
  fulfillViewZone(n, e, t) {
    return HH.createViewZone(n, this.target, this._getMouseColumn(e), e, t);
  }
  fulfillContentText(n, e, t) {
    return HH.createContentText(this.target, this._getMouseColumn(n), n, e, t);
  }
  fulfillContentEmpty(n, e) {
    return HH.createContentEmpty(this.target, this._getMouseColumn(n), n, e);
  }
  fulfillContentWidget(n) {
    return HH.createContentWidget(this.target, this._getMouseColumn(), n);
  }
  fulfillScrollbar(n) {
    return HH.createScrollbar(this.target, this._getMouseColumn(n), n);
  }
  fulfillOverlayWidget(n) {
    return HH.createOverlayWidget(this.target, this._getMouseColumn(), n);
  }
};
ETc = {
  isAfterLines: true
};
s3o = class Are {
  constructor(e, t) {
    this._context = e;
    this._viewHelper = t;
  }
  mouseTargetIsWidget(e) {
    const t = e.target;
    const i = tve.collect(t, this._viewHelper.viewDomNode);
    const r = t.parentElement;
    if (r && r.getAttribute("data-lexical-editor") === "true") {
      return true;
    }
    const s = r?.parentElement;
    return !!s && s.getAttribute("data-lexical-editor") === "true" || !!wW.isChildOfContentWidgets(i) || !!wW.isChildOfOverflowingContentWidgets(i) || !!wW.isChildOfOverlayWidgets(i) || !!wW.isChildOfOverflowingOverlayWidgets(i);
  }
  createMouseTarget(e, t, i, r, s) {
    const o = new r3o(this._context, this._viewHelper, e);
    const a = new Ovh(o, t, i, r, s);
    try {
      const l = Are._createMouseTarget(o, a);
      if (l.type === 6 && o.stickyTabStops && l.position !== null) {
        const u = Are._snapToSoftTabBoundary(l.position, o.viewModel);
        const d = Zt.fromPositions(u, u).plusRange(l.range);
        return a.fulfillContentText(u, d, l.detail);
      }
      return l;
    } catch {
      return a.fulfillUnknown();
    }
  }
  static _createMouseTarget(e, t) {
    if (t.target === null) {
      return t.fulfillUnknown();
    }
    const i = t;
    let r = null;
    if (!wW.isChildOfOverflowGuard(t.targetPath) && !wW.isChildOfOverflowingContentWidgets(t.targetPath) && !wW.isChildOfOverflowingOverlayWidgets(t.targetPath)) {
      r = r || t.fulfillUnknown();
    }
    r = r || Are._hitTestContentWidget(e, i);
    r = r || Are._hitTestOverlayWidget(e, i);
    r = r || Are._hitTestMinimap(e, i);
    r = r || Are._hitTestScrollbarSlider(e, i);
    r = r || Are._hitTestViewZone(e, i);
    r = r || Are._hitTestMargin(e, i);
    r = r || Are._hitTestViewCursor(e, i);
    r = r || Are._hitTestTextArea(e, i);
    r = r || Are._hitTestViewLines(e, i);
    r = r || Are._hitTestScrollbar(e, i);
    return r || t.fulfillUnknown();
  }
  static _hitTestContentWidget(e, t) {
    if (wW.isChildOfContentWidgets(t.targetPath) || wW.isChildOfOverflowingContentWidgets(t.targetPath)) {
      const i = e.findAttribute(t.target, "widgetId");
      if (i) {
        return t.fulfillContentWidget(i);
      } else {
        return t.fulfillUnknown();
      }
    }
    return null;
  }
  static _hitTestOverlayWidget(e, t) {
    if (wW.isChildOfOverlayWidgets(t.targetPath) || wW.isChildOfOverflowingOverlayWidgets(t.targetPath)) {
      const i = e.findAttribute(t.target, "widgetId");
      if (i) {
        return t.fulfillOverlayWidget(i);
      } else {
        return t.fulfillUnknown();
      }
    }
    return null;
  }
  static _hitTestViewCursor(e, t) {
    if (t.target) {
      const i = e.lastRenderData.lastViewCursorsRenderData;
      for (const r of i) {
        if (t.target === r.domNode) {
          return t.fulfillContentText(r.position, null, {
            mightBeForeignElement: false,
            injectedText: null
          });
        }
      }
    }
    if (t.isInContentArea) {
      const i = e.lastRenderData.lastViewCursorsRenderData;
      const r = t.mouseContentHorizontalOffset;
      const s = t.mouseVerticalOffset;
      for (const o of i) {
        if (r < o.contentLeft || r > o.contentLeft + o.width) {
          continue;
        }
        const a = e.getVerticalOffsetForLineNumber(o.position.lineNumber);
        if (a <= s && s <= a + o.height) {
          return t.fulfillContentText(o.position, null, {
            mightBeForeignElement: false,
            injectedText: null
          });
        }
      }
    }
    return null;
  }
  static _hitTestViewZone(e, t) {
    const i = e.getZoneAtCoord(t.mouseVerticalOffset);
    if (i) {
      const r = t.isInContentArea ? 8 : 5;
      return t.fulfillViewZone(r, i.position, i);
    }
    return null;
  }
  static _hitTestTextArea(e, t) {
    if (wW.isTextArea(t.targetPath)) {
      if (e.lastRenderData.lastTextareaPosition) {
        return t.fulfillContentText(e.lastRenderData.lastTextareaPosition, null, {
          mightBeForeignElement: false,
          injectedText: null
        });
      } else {
        return t.fulfillTextarea();
      }
    } else {
      return null;
    }
  }
  static _hitTestMargin(e, t) {
    if (t.isInMarginArea) {
      const i = e.getFullLineRangeAtCoord(t.mouseVerticalOffset);
      const r = i.range.getStartPosition();
      let s = Math.abs(t.relativePos.x);
      const o = {
        isAfterLines: i.isAfterLines,
        glyphMarginLeft: e.layoutInfo.glyphMarginLeft,
        glyphMarginWidth: e.layoutInfo.glyphMarginWidth,
        lineNumbersWidth: e.layoutInfo.lineNumbersWidth,
        offsetX: s
      };
      s -= e.layoutInfo.glyphMarginLeft;
      if (s <= e.layoutInfo.glyphMarginWidth) {
        const a = e.viewModel.coordinatesConverter.convertViewPositionToModelPosition(i.range.getStartPosition());
        const l = e.viewModel.glyphLanes.getLanesAtLine(a.lineNumber);
        o.glyphMarginLane = l[Math.floor(s / e.lineHeight)];
        return t.fulfillMargin(2, r, i.range, o);
      }
      s -= e.layoutInfo.glyphMarginWidth;
      if (s <= e.layoutInfo.lineNumbersWidth) {
        return t.fulfillMargin(3, r, i.range, o);
      } else {
        s -= e.layoutInfo.lineNumbersWidth;
        return t.fulfillMargin(4, r, i.range, o);
      }
    }
    return null;
  }
  static _hitTestViewLines(e, t) {
    if (!wW.isChildOfViewLines(t.targetPath)) {
      return null;
    }
    if (e.isInTopPadding(t.mouseVerticalOffset)) {
      return t.fulfillContentEmpty(new ar(1, 1), ETc);
    }
    if (e.isAfterLines(t.mouseVerticalOffset) || e.isInBottomPadding(t.mouseVerticalOffset)) {
      const r = e.viewModel.getLineCount();
      const s = e.viewModel.getLineMaxColumn(r);
      return t.fulfillContentEmpty(new ar(r, s), ETc);
    }
    if (wW.isStrictChildOfViewLines(t.targetPath)) {
      const r = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset);
      if (e.viewModel.getLineLength(r) === 0) {
        const o = e.getLineWidth(r);
        const a = jOn(t.mouseContentHorizontalOffset - o);
        return t.fulfillContentEmpty(new ar(r, 1), a);
      }
      const s = e.getLineWidth(r);
      if (t.mouseContentHorizontalOffset >= s) {
        const o = jOn(t.mouseContentHorizontalOffset - s);
        const a = new ar(r, e.viewModel.getLineMaxColumn(r));
        return t.fulfillContentEmpty(a, o);
      }
    } else if (e.viewLinesGpu) {
      const r = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset);
      if (e.viewModel.getLineLength(r) === 0) {
        const a = e.getLineWidth(r);
        const l = jOn(t.mouseContentHorizontalOffset - a);
        return t.fulfillContentEmpty(new ar(r, 1), l);
      }
      const s = e.getLineWidth(r);
      if (t.mouseContentHorizontalOffset >= s) {
        const a = jOn(t.mouseContentHorizontalOffset - s);
        const l = new ar(r, e.viewModel.getLineMaxColumn(r));
        return t.fulfillContentEmpty(l, a);
      }
      const o = e.viewLinesGpu.getPositionAtCoordinate(r, t.mouseContentHorizontalOffset);
      if (o) {
        const a = {
          injectedText: null,
          mightBeForeignElement: false
        };
        return t.fulfillContentText(o, Zt.fromPositions(o, o), a);
      }
    }
    const i = t.hitTestResult.value;
    if (i.type === 1) {
      return Are.createMouseTargetFromHitTestPosition(e, t, i.spanNode, i.position, i.injectedText);
    } else if (t.wouldBenefitFromHitTestTargetSwitch) {
      t.switchToHitTestTarget();
      return this._createMouseTarget(e, t);
    } else {
      return t.fulfillUnknown();
    }
  }
  static _hitTestMinimap(e, t) {
    if (wW.isChildOfMinimap(t.targetPath)) {
      const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset);
      const r = e.viewModel.getLineMaxColumn(i);
      return t.fulfillScrollbar(new ar(i, r));
    }
    return null;
  }
  static _hitTestScrollbarSlider(e, t) {
    if (wW.isChildOfScrollableElement(t.targetPath) && t.target && t.target.nodeType === 1) {
      const i = t.target.className;
      if (i && /\b(slider|scrollbar)\b/.test(i)) {
        const r = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset);
        const s = e.viewModel.getLineMaxColumn(r);
        return t.fulfillScrollbar(new ar(r, s));
      }
    }
    return null;
  }
  static _hitTestScrollbar(e, t) {
    if (wW.isChildOfScrollableElement(t.targetPath)) {
      const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset);
      const r = e.viewModel.getLineMaxColumn(i);
      return t.fulfillScrollbar(new ar(i, r));
    }
    return null;
  }
  getMouseColumn(e) {
    const t = this._context.configuration.options;
    const i = t.get(151);
    const r = this._context.viewLayout.getCurrentScrollLeft() + e.x - i.contentLeft;
    return Are._getMouseColumn(r, t.get(52).typicalHalfwidthCharacterWidth);
  }
  static _getMouseColumn(e, t) {
    if (e < 0) {
      return 1;
    } else {
      return Math.round(e / t) + 1;
    }
  }
  static createMouseTargetFromHitTestPosition(e, t, i, r, s) {
    const o = r.lineNumber;
    const a = r.column;
    const l = e.getLineWidth(o);
    if (t.mouseContentHorizontalOffset > l) {
      const C = jOn(t.mouseContentHorizontalOffset - l);
      return t.fulfillContentEmpty(r, C);
    }
    const u = e.visibleRangeForPosition(o, a);
    if (!u) {
      return t.fulfillUnknown(r);
    }
    const d = u.left;
    if (Math.abs(t.mouseContentHorizontalOffset - d) < 1) {
      return t.fulfillContentText(r, null, {
        mightBeForeignElement: !!s,
        injectedText: s
      });
    }
    const m = [];
    m.push({
      offset: u.left,
      column: a
    });
    if (a > 1) {
      const C = e.visibleRangeForPosition(o, a - 1);
      if (C) {
        m.push({
          offset: C.left,
          column: a - 1
        });
      }
    }
    const p = e.viewModel.getLineMaxColumn(o);
    if (a < p) {
      const C = e.visibleRangeForPosition(o, a + 1);
      if (C) {
        m.push({
          offset: C.left,
          column: a + 1
        });
      }
    }
    m.sort((C, x) => C.offset - x.offset);
    const g = t.pos.toClientCoordinates(As(e.viewDomNode));
    const f = i.getBoundingClientRect();
    const A = f.left <= g.clientX && g.clientX <= f.right;
    let w = null;
    for (let C = 1; C < m.length; C++) {
      const x = m[C - 1];
      const I = m[C];
      if (x.offset <= t.mouseContentHorizontalOffset && t.mouseContentHorizontalOffset <= I.offset) {
        w = new Zt(o, x.column, o, I.column);
        const B = Math.abs(x.offset - t.mouseContentHorizontalOffset);
        const R = Math.abs(I.offset - t.mouseContentHorizontalOffset);
        r = B < R ? new ar(o, x.column) : new ar(o, I.column);
        break;
      }
    }
    return t.fulfillContentText(r, w, {
      mightBeForeignElement: !A || !!s,
      injectedText: s
    });
  }
  static _doHitTestWithCaretRangeFromPoint(e, t) {
    const i = e.getLineNumberAtVerticalOffset(t.mouseVerticalOffset);
    const r = e.getVerticalOffsetForLineNumber(i);
    const s = r + e.lineHeight;
    if (i !== e.viewModel.getLineCount() || !(t.mouseVerticalOffset > s)) {
      const a = Math.floor((r + s) / 2);
      let l = t.pos.y + (a - t.mouseVerticalOffset);
      if (l <= t.editorPos.y) {
        l = t.editorPos.y + 1;
      }
      if (l >= t.editorPos.y + t.editorPos.height) {
        l = t.editorPos.y + t.editorPos.height - 1;
      }
      const u = new GOn(t.pos.x, l);
      const d = this._actualDoHitTestWithCaretRangeFromPoint(e, u.toClientCoordinates(As(e.viewDomNode)));
      if (d.type === 1) {
        return d;
      }
    }
    return this._actualDoHitTestWithCaretRangeFromPoint(e, t.pos.toClientCoordinates(As(e.viewDomNode)));
  }
  static _actualDoHitTestWithCaretRangeFromPoint(e, t) {
    const i = Qze(e.viewDomNode);
    let r;
    if (i) {
      if (typeof i.caretRangeFromPoint === "undefined") {
        r = ycA(i, t.clientX, t.clientY);
      } else {
        r = i.caretRangeFromPoint(t.clientX, t.clientY);
      }
    } else {
      r = e.viewDomNode.ownerDocument.caretRangeFromPoint(t.clientX, t.clientY);
    }
    if (!r || !r.startContainer) {
      return new m9e();
    }
    const s = r.startContainer;
    if (s.nodeType === s.TEXT_NODE) {
      const o = s.parentNode;
      const a = o ? o.parentNode : null;
      const l = a ? a.parentNode : null;
      if ((l && l.nodeType === l.ELEMENT_NODE ? l.className : null) === GVe.CLASS_NAME) {
        return zft.createFromDOMInfo(e, o, r.startOffset);
      } else {
        return new m9e(s.parentNode);
      }
    } else if (s.nodeType === s.ELEMENT_NODE) {
      const o = s.parentNode;
      const a = o ? o.parentNode : null;
      if ((a && a.nodeType === a.ELEMENT_NODE ? a.className : null) === GVe.CLASS_NAME) {
        return zft.createFromDOMInfo(e, s, s.textContent.length);
      } else {
        return new m9e(s);
      }
    }
    return new m9e();
  }
  static _doHitTestWithCaretPositionFromPoint(e, t) {
    const i = e.viewDomNode.ownerDocument.caretPositionFromPoint(t.clientX, t.clientY);
    if (i.offsetNode.nodeType === i.offsetNode.TEXT_NODE) {
      const r = i.offsetNode.parentNode;
      const s = r ? r.parentNode : null;
      const o = s ? s.parentNode : null;
      if ((o && o.nodeType === o.ELEMENT_NODE ? o.className : null) === GVe.CLASS_NAME) {
        return zft.createFromDOMInfo(e, i.offsetNode.parentNode, i.offset);
      } else {
        return new m9e(i.offsetNode.parentNode);
      }
    }
    if (i.offsetNode.nodeType === i.offsetNode.ELEMENT_NODE) {
      const r = i.offsetNode.parentNode;
      const s = r && r.nodeType === r.ELEMENT_NODE ? r.className : null;
      const o = r ? r.parentNode : null;
      const a = o && o.nodeType === o.ELEMENT_NODE ? o.className : null;
      if (s === GVe.CLASS_NAME) {
        const l = i.offsetNode.childNodes[Math.min(i.offset, i.offsetNode.childNodes.length - 1)];
        if (l) {
          return zft.createFromDOMInfo(e, l, 0);
        }
      } else if (a === GVe.CLASS_NAME) {
        return zft.createFromDOMInfo(e, i.offsetNode, 0);
      }
    }
    return new m9e(i.offsetNode);
  }
  static _snapToSoftTabBoundary(e, t) {
    const i = t.getLineContent(e.lineNumber);
    const {
      tabSize: r
    } = t.model.getOptions();
    const s = JFo.atomicPosition(i, e.column - 1, r, 2);
    if (s !== -1) {
      return new ar(e.lineNumber, s + 1);
    } else {
      return e;
    }
  }
  static doHitTest(e, t) {
    let i = new m9e();
    if (typeof e.viewDomNode.ownerDocument.caretRangeFromPoint == "function") {
      i = this._doHitTestWithCaretRangeFromPoint(e, t);
    } else if (e.viewDomNode.ownerDocument.caretPositionFromPoint) {
      i = this._doHitTestWithCaretPositionFromPoint(e, t.pos.toClientCoordinates(As(e.viewDomNode)));
    }
    if (i.type === 1) {
      const r = e.viewModel.getInjectedTextAt(i.position);
      const s = e.viewModel.normalizePosition(i.position, 2);
      if (r || !s.equals(i.position)) {
        i = new kTc(s, i.spanNode, r);
      }
    }
    return i;
  }
};
Uvh = class mNi {
  static {
    this._INSTANCE = null;
  }
  static getInstance() {
    mNi._INSTANCE ||= new mNi();
    return mNi._INSTANCE;
  }
  constructor() {
    this._cache = {};
    this._canvas = document.createElement("canvas");
  }
  getCharWidth(e, t) {
    const i = e + t;
    if (this._cache[i]) {
      return this._cache[i];
    }
    const r = this._canvas.getContext("2d");
    r.font = t;
    const o = r.measureText(e).width;
    this._cache[i] = o;
    return o;
  }
};
