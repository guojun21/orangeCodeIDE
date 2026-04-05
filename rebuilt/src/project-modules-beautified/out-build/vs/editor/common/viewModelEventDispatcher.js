"use strict";

// Module: out-build/vs/editor/common/viewModelEventDispatcher.js
// Offset: 1327884 (bundle byte offset)
// Size: 6372 bytes
yn();
rt();
nbh = class extends at {
  constructor() {
    super();
    this._onEvent = this._register(new Qe());
    this.onEvent = this._onEvent.event;
    this._eventHandlers = [];
    this._viewEventQueue = null;
    this._isConsumingViewEventQueue = false;
    this._collector = null;
    this._collectorCnt = 0;
    this._outgoingEvents = [];
  }
  emitOutgoingEvent(n) {
    this._addOutgoingEvent(n);
    this._emitOutgoingEvents();
  }
  _addOutgoingEvent(n) {
    for (let e = 0, t = this._outgoingEvents.length; e < t; e++) {
      const i = this._outgoingEvents[e].kind === n.kind ? this._outgoingEvents[e].attemptToMerge(n) : null;
      if (i) {
        this._outgoingEvents[e] = i;
        return;
      }
    }
    this._outgoingEvents.push(n);
  }
  _emitOutgoingEvents() {
    while (this._outgoingEvents.length > 0) {
      if (this._collector || this._isConsumingViewEventQueue) {
        return;
      }
      const n = this._outgoingEvents.shift();
      if (!n.isNoOp()) {
        this._onEvent.fire(n);
      }
    }
  }
  addViewEventHandler(n) {
    for (let e = 0, t = this._eventHandlers.length; e < t; e++) {
      if (this._eventHandlers[e] === n) {
        console.warn("Detected duplicate listener in ViewEventDispatcher", n);
      }
    }
    this._eventHandlers.push(n);
  }
  removeViewEventHandler(n) {
    for (let e = 0; e < this._eventHandlers.length; e++) {
      if (this._eventHandlers[e] === n) {
        this._eventHandlers.splice(e, 1);
        break;
      }
    }
  }
  beginEmitViewEvents() {
    this._collectorCnt++;
    if (this._collectorCnt === 1) {
      this._collector = new PSe();
    }
    return this._collector;
  }
  endEmitViewEvents() {
    this._collectorCnt--;
    if (this._collectorCnt === 0) {
      const n = this._collector.outgoingEvents;
      const e = this._collector.viewEvents;
      this._collector = null;
      for (const t of n) {
        this._addOutgoingEvent(t);
      }
      if (e.length > 0) {
        this._emitMany(e);
      }
    }
    this._emitOutgoingEvents();
  }
  emitSingleViewEvent(n) {
    try {
      this.beginEmitViewEvents().emitViewEvent(n);
    } finally {
      this.endEmitViewEvents();
    }
  }
  _emitMany(n) {
    if (this._viewEventQueue) {
      this._viewEventQueue = this._viewEventQueue.concat(n);
    } else {
      this._viewEventQueue = n;
    }
    if (!this._isConsumingViewEventQueue) {
      this._consumeViewEventQueue();
    }
  }
  _consumeViewEventQueue() {
    try {
      this._isConsumingViewEventQueue = true;
      this._doConsumeQueue();
    } finally {
      this._isConsumingViewEventQueue = false;
    }
  }
  _doConsumeQueue() {
    while (this._viewEventQueue) {
      const n = this._viewEventQueue;
      this._viewEventQueue = null;
      const e = this._eventHandlers.slice(0);
      for (const t of e) {
        t.handleEvents(n);
      }
    }
  }
};
PSe = class {
  constructor() {
    this.viewEvents = [];
    this.outgoingEvents = [];
  }
  emitViewEvent(n) {
    this.viewEvents.push(n);
  }
  emitOutgoingEvent(n) {
    this.outgoingEvents.push(n);
  }
};
(function (n) {
  n[n.ContentSizeChanged = 0] = "ContentSizeChanged";
  n[n.FocusChanged = 1] = "FocusChanged";
  n[n.WidgetFocusChanged = 2] = "WidgetFocusChanged";
  n[n.ScrollChanged = 3] = "ScrollChanged";
  n[n.ViewZonesChanged = 4] = "ViewZonesChanged";
  n[n.HiddenAreasChanged = 5] = "HiddenAreasChanged";
  n[n.ReadOnlyEditAttempt = 6] = "ReadOnlyEditAttempt";
  n[n.CursorStateChanged = 7] = "CursorStateChanged";
  n[n.ModelDecorationsChanged = 8] = "ModelDecorationsChanged";
  n[n.ModelLanguageChanged = 9] = "ModelLanguageChanged";
  n[n.ModelLanguageConfigurationChanged = 10] = "ModelLanguageConfigurationChanged";
  n[n.ModelContentChanged = 11] = "ModelContentChanged";
  n[n.ModelOptionsChanged = 12] = "ModelOptionsChanged";
  n[n.ModelTokensChanged = 13] = "ModelTokensChanged";
})(ibh ||= {});
rbh = class iGb {
  constructor(e, t, i, r) {
    this.kind = 0;
    this._oldContentWidth = e;
    this._oldContentHeight = t;
    this.contentWidth = i;
    this.contentHeight = r;
    this.contentWidthChanged = this._oldContentWidth !== this.contentWidth;
    this.contentHeightChanged = this._oldContentHeight !== this.contentHeight;
  }
  isNoOp() {
    return !this.contentWidthChanged && !this.contentHeightChanged;
  }
  attemptToMerge(e) {
    if (e.kind !== this.kind) {
      return null;
    } else {
      return new iGb(this._oldContentWidth, this._oldContentHeight, e.contentWidth, e.contentHeight);
    }
  }
};
$xc = class rGb {
  constructor(e, t) {
    this.kind = 1;
    this.oldHasFocus = e;
    this.hasFocus = t;
  }
  isNoOp() {
    return this.oldHasFocus === this.hasFocus;
  }
  attemptToMerge(e) {
    if (e.kind !== this.kind) {
      return null;
    } else {
      return new rGb(this.oldHasFocus, e.hasFocus);
    }
  }
};
sbh = class {
  constructor(n, e) {
    this.kind = 2;
    this.oldHasFocus = n;
    this.hasFocus = e;
  }
  isNoOp() {
    return this.oldHasFocus === this.hasFocus;
  }
  attemptToMerge(n) {
    if (n.kind !== this.kind) {
      return null;
    } else {
      return new $xc(this.oldHasFocus, n.hasFocus);
    }
  }
};
obh = class sGb {
  constructor(e, t, i, r, s, o, a, l) {
    this.kind = 3;
    this._oldScrollWidth = e;
    this._oldScrollLeft = t;
    this._oldScrollHeight = i;
    this._oldScrollTop = r;
    this.scrollWidth = s;
    this.scrollLeft = o;
    this.scrollHeight = a;
    this.scrollTop = l;
    this.scrollWidthChanged = this._oldScrollWidth !== this.scrollWidth;
    this.scrollLeftChanged = this._oldScrollLeft !== this.scrollLeft;
    this.scrollHeightChanged = this._oldScrollHeight !== this.scrollHeight;
    this.scrollTopChanged = this._oldScrollTop !== this.scrollTop;
  }
  isNoOp() {
    return !this.scrollWidthChanged && !this.scrollLeftChanged && !this.scrollHeightChanged && !this.scrollTopChanged;
  }
  attemptToMerge(e) {
    if (e.kind !== this.kind) {
      return null;
    } else {
      return new sGb(this._oldScrollWidth, this._oldScrollLeft, this._oldScrollHeight, this._oldScrollTop, e.scrollWidth, e.scrollLeft, e.scrollHeight, e.scrollTop);
    }
  }
};
abh = class {
  constructor() {
    this.kind = 4;
  }
  isNoOp() {
    return false;
  }
  attemptToMerge(n) {
    if (n.kind !== this.kind) {
      return null;
    } else {
      return this;
    }
  }
};
cbh = class {
  constructor() {
    this.kind = 5;
  }
  isNoOp() {
    return false;
  }
  attemptToMerge(n) {
    if (n.kind !== this.kind) {
      return null;
    } else {
      return this;
    }
  }
};
lbh = class yad {
  constructor(e, t, i, r, s, o, a) {
    this.kind = 7;
    this.oldSelections = e;
    this.selections = t;
    this.oldModelVersionId = i;
    this.modelVersionId = r;
    this.source = s;
    this.reason = o;
    this.reachedMaxCursorCount = a;
  }
  static _selectionsAreEqual(e, t) {
    if (!e && !t) {
      return true;
    }
    if (!e || !t) {
      return false;
    }
    const i = e.length;
    const r = t.length;
    if (i !== r) {
      return false;
    }
    for (let s = 0; s < i; s++) {
      if (!e[s].equalsSelection(t[s])) {
        return false;
      }
    }
    return true;
  }
  isNoOp() {
    return yad._selectionsAreEqual(this.oldSelections, this.selections) && this.oldModelVersionId === this.modelVersionId;
  }
  attemptToMerge(e) {
    if (e.kind !== this.kind) {
      return null;
    } else {
      return new yad(this.oldSelections, e.selections, this.oldModelVersionId, e.modelVersionId, e.source, e.reason, this.reachedMaxCursorCount || e.reachedMaxCursorCount);
    }
  }
};
ubh = class {
  constructor() {
    this.kind = 6;
  }
  isNoOp() {
    return false;
  }
  attemptToMerge(n) {
    if (n.kind !== this.kind) {
      return null;
    } else {
      return this;
    }
  }
};
dbh = class {
  constructor(n) {
    this.event = n;
    this.kind = 8;
  }
  isNoOp() {
    return false;
  }
  attemptToMerge(n) {
    return null;
  }
};
hbh = class {
  constructor(n) {
    this.event = n;
    this.kind = 9;
  }
  isNoOp() {
    return false;
  }
  attemptToMerge(n) {
    return null;
  }
};
mbh = class {
  constructor(n) {
    this.event = n;
    this.kind = 10;
  }
  isNoOp() {
    return false;
  }
  attemptToMerge(n) {
    return null;
  }
};
pbh = class {
  constructor(n) {
    this.event = n;
    this.kind = 11;
  }
  isNoOp() {
    return false;
  }
  attemptToMerge(n) {
    return null;
  }
};
gbh = class {
  constructor(n) {
    this.event = n;
    this.kind = 12;
  }
  isNoOp() {
    return false;
  }
  attemptToMerge(n) {
    return null;
  }
};
fbh = class {
  constructor(n) {
    this.event = n;
    this.kind = 13;
  }
  isNoOp() {
    return false;
  }
  attemptToMerge(n) {
    return null;
  }
};
