"use strict";

// Module: out-build/vs/editor/browser/services/bulkEditService.js
// Offset: 2402965 (bundle byte offset)
// Size: 1118 bytes
Wt();
Yn();
Js();
rL = xi("IWorkspaceEditService");
G3n = class {
  constructor(n) {
    this.metadata = n;
  }
  static convert(n) {
    return n.edits.map(e => {
      if (WR.is(e)) {
        return WR.lift(e);
      }
      if (QR.is(e)) {
        return QR.lift(e);
      }
      throw new Error("Unsupported edit");
    });
  }
};
WR = class lWa extends G3n {
  static is(e) {
    if (e instanceof lWa) {
      return true;
    } else {
      return $g(e) && je.isUri(e.resource) && $g(e.textEdit);
    }
  }
  static lift(e) {
    if (e instanceof lWa) {
      return e;
    } else {
      return new lWa(e.resource, e.textEdit, e.versionId, e.metadata);
    }
  }
  constructor(e, t, i = undefined, r) {
    super(r);
    this.resource = e;
    this.textEdit = t;
    this.versionId = i;
  }
};
QR = class uWa extends G3n {
  static is(e) {
    if (e instanceof uWa) {
      return true;
    } else {
      return $g(e) && (!!e.newResource || !!e.oldResource);
    }
  }
  static lift(e) {
    if (e instanceof uWa) {
      return e;
    } else {
      return new uWa(e.oldResource, e.newResource, e.options, e.metadata);
    }
  }
  constructor(e, t, i = {}, r) {
    super(r);
    this.oldResource = e;
    this.newResource = t;
    this.options = i;
  }
};
