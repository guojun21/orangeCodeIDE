"use strict";

// Module: out-build/vs/editor/common/model/intervalTree.js
// Offset: 1135249 (bundle byte offset)
// Size: 7185 bytes
(function (n) {
  n.EditorHintDecoration = "squiggly-hint";
  n.EditorInfoDecoration = "squiggly-info";
  n.EditorWarningDecoration = "squiggly-warning";
  n.EditorAIDecoration = "squiggly-ai";
  n.EditorErrorDecoration = "squiggly-error";
  n.EditorUnnecessaryDecoration = "squiggly-unnecessary";
  n.EditorUnnecessaryInlineDecoration = "squiggly-inline-unnecessary";
  n.EditorDeprecatedInlineDecoration = "squiggly-inline-deprecated";
})(tgh ||= {});
(function (n) {
  n[n.Black = 0] = "Black";
  n[n.Red = 1] = "Red";
})(ngh ||= {});
(function (n) {
  n[n.ColorMask = 1] = "ColorMask";
  n[n.ColorMaskInverse = 254] = "ColorMaskInverse";
  n[n.ColorOffset = 0] = "ColorOffset";
  n[n.IsVisitedMask = 2] = "IsVisitedMask";
  n[n.IsVisitedMaskInverse = 253] = "IsVisitedMaskInverse";
  n[n.IsVisitedOffset = 1] = "IsVisitedOffset";
  n[n.IsForValidationMask = 4] = "IsForValidationMask";
  n[n.IsForValidationMaskInverse = 251] = "IsForValidationMaskInverse";
  n[n.IsForValidationOffset = 2] = "IsForValidationOffset";
  n[n.StickinessMask = 24] = "StickinessMask";
  n[n.StickinessMaskInverse = 231] = "StickinessMaskInverse";
  n[n.StickinessOffset = 3] = "StickinessOffset";
  n[n.CollapseOnReplaceEditMask = 32] = "CollapseOnReplaceEditMask";
  n[n.CollapseOnReplaceEditMaskInverse = 223] = "CollapseOnReplaceEditMaskInverse";
  n[n.CollapseOnReplaceEditOffset = 5] = "CollapseOnReplaceEditOffset";
  n[n.IsMarginMask = 64] = "IsMarginMask";
  n[n.IsMarginMaskInverse = 191] = "IsMarginMaskInverse";
  n[n.IsMarginOffset = 6] = "IsMarginOffset";
  n[n.MIN_SAFE_DELTA = -1073741824] = "MIN_SAFE_DELTA";
  n[n.MAX_SAFE_DELTA = 1073741824] = "MAX_SAFE_DELTA";
})(igh ||= {});
pOo = class {
  constructor(n, e, t) {
    this.metadata = 0;
    this.parent = this;
    this.left = this;
    this.right = this;
    tI(this, 1);
    this.start = e;
    this.end = t;
    this.delta = 0;
    this.maxEnd = t;
    this.id = n;
    this.ownerId = 0;
    this.options = null;
    Qph(this, false);
    zph(this, false);
    Vph(this, 1);
    Kph(this, false);
    this.cachedVersionId = 0;
    this.cachedAbsoluteStart = e;
    this.cachedAbsoluteEnd = t;
    this.range = null;
    mT(this, false);
  }
  reset(n, e, t, i) {
    this.start = e;
    this.end = t;
    this.maxEnd = t;
    this.cachedVersionId = n;
    this.cachedAbsoluteStart = e;
    this.cachedAbsoluteEnd = t;
    this.range = i;
  }
  setOptions(n) {
    this.options = n;
    const e = this.options.className;
    Qph(this, e === "squiggly-error" || e === "squiggly-warning" || e === "squiggly-info");
    zph(this, this.options.glyphMarginClassName !== null);
    Vph(this, this.options.stickiness);
    Kph(this, this.options.collapseOnReplaceEdit);
  }
  setCachedOffsets(n, e, t) {
    if (this.cachedVersionId !== t) {
      this.range = null;
    }
    this.cachedVersionId = t;
    this.cachedAbsoluteStart = n;
    this.cachedAbsoluteEnd = e;
  }
  detach() {
    this.parent = null;
    this.left = null;
    this.right = null;
  }
};
_y = new pOo(null, 0, 0);
_y.parent = _y;
_y.left = _y;
_y.right = _y;
tI(_y, 0);
mOn = class {
  constructor() {
    this.root = _y;
    this.requestNormalizeDelta = false;
  }
  intervalSearch(n, e, t, i, r, s) {
    if (this.root === _y) {
      return [];
    } else {
      return KoA(this, n, e, t, i, r, s);
    }
  }
  search(n, e, t, i) {
    if (this.root === _y) {
      return [];
    } else {
      return Yph(this, n, e, t, i);
    }
  }
  collectNodesFromOwner(n) {
    return zoA(this, n);
  }
  collectNodesPostOrder() {
    return VoA(this);
  }
  insert(n) {
    Zph(this, n);
    this._normalizeDeltaIfNecessary();
  }
  delete(n) {
    Xph(this, n);
    this._normalizeDeltaIfNecessary();
  }
  resolveNode(n, e) {
    const t = n;
    let i = 0;
    while (n !== this.root) {
      if (n === n.parent.right) {
        i += n.parent.delta;
      }
      n = n.parent;
    }
    const r = t.start + i;
    const s = t.end + i;
    t.setCachedOffsets(r, s, e);
  }
  acceptReplace(n, e, t, i) {
    const r = QoA(this, n, n + e);
    for (let s = 0, o = r.length; s < o; s++) {
      const a = r[s];
      Xph(this, a);
    }
    this._normalizeDeltaIfNecessary();
    joA(this, n, n + e, t);
    this._normalizeDeltaIfNecessary();
    for (let s = 0, o = r.length; s < o; s++) {
      const a = r[s];
      a.start = a.cachedAbsoluteStart;
      a.end = a.cachedAbsoluteEnd;
      WoA(a, n, n + e, t, i);
      a.maxEnd = a.end;
      Zph(this, a);
    }
    this._normalizeDeltaIfNecessary();
  }
  getAllInOrder() {
    return Yph(this, 0, false, 0, false);
  }
  _normalizeDeltaIfNecessary() {
    if (this.requestNormalizeDelta) {
      this.requestNormalizeDelta = false;
      GoA(this);
    }
  }
};
(function (n) {
  n[n.MarkerDefined = 0] = "MarkerDefined";
  n[n.ForceMove = 1] = "ForceMove";
  n[n.ForceStay = 2] = "ForceStay";
})(rgh ||= {});
