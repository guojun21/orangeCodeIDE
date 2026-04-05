"use strict";

// Module: out-build/vs/editor/common/textModelEvents.js
// Offset: 1241575 (bundle byte offset)
// Size: 2596 bytes
(function (n) {
  n[n.Flush = 1] = "Flush";
  n[n.LineChanged = 2] = "LineChanged";
  n[n.LinesDeleted = 3] = "LinesDeleted";
  n[n.LinesInserted = 4] = "LinesInserted";
  n[n.EOLChanged = 5] = "EOLChanged";
})(Kgh ||= {});
Ygh = class {
  constructor() {
    this.changeType = 1;
  }
};
o9e = class VGa {
  static applyInjectedText(e, t) {
    if (!t || t.length === 0) {
      return e;
    }
    let i = "";
    let r = 0;
    for (const s of t) {
      i += e.substring(r, s.column - 1);
      r = s.column - 1;
      i += s.options.content;
    }
    i += e.substring(r);
    return i;
  }
  static fromDecorations(e) {
    const t = [];
    for (const i of e) {
      if (i.options.before && i.options.before.content.length > 0) {
        t.push(new VGa(i.ownerId, i.range.startLineNumber, i.range.startColumn, i.options.before, i.options.before.order ?? 0));
      }
      if (i.options.after && i.options.after.content.length > 0) {
        t.push(new VGa(i.ownerId, i.range.endLineNumber, i.range.endColumn, i.options.after, i.options.after.order ?? 1));
      }
    }
    t.sort((i, r) => i.lineNumber === r.lineNumber ? i.column === r.column ? i.order - r.order : i.column - r.column : i.lineNumber - r.lineNumber);
    return t;
  }
  constructor(e, t, i, r, s) {
    this.ownerId = e;
    this.lineNumber = t;
    this.column = i;
    this.options = r;
    this.order = s;
  }
  withText(e) {
    return new VGa(this.ownerId, this.lineNumber, this.column, {
      ...this.options,
      content: e
    }, this.order);
  }
};
bxc = class {
  constructor(n, e, t) {
    this.changeType = 2;
    this.lineNumber = n;
    this.detail = e;
    this.injectedText = t;
  }
};
Zgh = class {
  constructor(n, e) {
    this.changeType = 3;
    this.fromLineNumber = n;
    this.toLineNumber = e;
  }
};
Xgh = class {
  constructor(n, e, t, i) {
    this.changeType = 4;
    this.injectedTexts = i;
    this.fromLineNumber = n;
    this.toLineNumber = e;
    this.detail = t;
  }
};
efh = class {
  constructor() {
    this.changeType = 5;
  }
};
_On = class eGb {
  constructor(e, t, i, r) {
    this.changes = e;
    this.versionId = t;
    this.isUndoing = i;
    this.isRedoing = r;
    this.resultingSelection = null;
  }
  containsEvent(e) {
    for (let t = 0, i = this.changes.length; t < i; t++) {
      if (this.changes[t].changeType === e) {
        return true;
      }
    }
    return false;
  }
  static merge(e, t) {
    const i = [].concat(e.changes).concat(t.changes);
    const r = t.versionId;
    const s = e.isUndoing || t.isUndoing;
    const o = e.isRedoing || t.isRedoing;
    return new eGb(i, r, s, o);
  }
};
vxc = class {
  constructor(n) {
    this.changes = n;
  }
};
COn = class gad {
  constructor(e, t) {
    this.rawContentChangedEvent = e;
    this.contentChangedEvent = t;
  }
  merge(e) {
    const t = _On.merge(this.rawContentChangedEvent, e.rawContentChangedEvent);
    const i = gad._mergeChangeEvents(this.contentChangedEvent, e.contentChangedEvent);
    return new gad(t, i);
  }
  static _mergeChangeEvents(e, t) {
    const i = [].concat(e.changes).concat(t.changes);
    const r = t.eol;
    const s = t.versionId;
    const o = e.isUndoing || t.isUndoing;
    const a = e.isRedoing || t.isRedoing;
    const l = e.isFlush || t.isFlush;
    const u = e.isEolChange && t.isEolChange;
    return {
      changes: i,
      eol: r,
      isEolChange: u,
      versionId: s,
      isUndoing: o,
      isRedoing: a,
      isFlush: l
    };
  }
};
