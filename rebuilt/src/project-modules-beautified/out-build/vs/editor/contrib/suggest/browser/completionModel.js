"use strict";

// Module: out-build/vs/editor/contrib/suggest/browser/completionModel.js
// Offset: 25366441 (bundle byte offset)
// Size: 3755 bytes
Vs();
Q_();
oa();
ujl = class {
  constructor(n, e) {
    this.leadingLineContent = n;
    this.characterCountDelta = e;
  }
};
(function (n) {
  n[n.Nothing = 0] = "Nothing";
  n[n.All = 1] = "All";
  n[n.Incr = 2] = "Incr";
})(Syg ||= {});
djl = class bSn {
  constructor(e, t, i, r, s, o, a = o3n.default, l = undefined) {
    this.clipboardText = l;
    this._snippetCompareFn = bSn._compareCompletionItems;
    this._items = e;
    this._column = t;
    this._wordDistance = r;
    this._options = s;
    this._refilterKind = 1;
    this._lineContext = i;
    this._fuzzyScoreOptions = a;
    if (o === "top") {
      this._snippetCompareFn = bSn._compareCompletionItemsSnippetsUp;
    } else if (o === "bottom") {
      this._snippetCompareFn = bSn._compareCompletionItemsSnippetsDown;
    }
  }
  get lineContext() {
    return this._lineContext;
  }
  set lineContext(e) {
    if (this._lineContext.leadingLineContent !== e.leadingLineContent || this._lineContext.characterCountDelta !== e.characterCountDelta) {
      this._refilterKind = this._lineContext.characterCountDelta < e.characterCountDelta && this._filteredItems ? 2 : 1;
      this._lineContext = e;
    }
  }
  get items() {
    this._ensureCachedState();
    return this._filteredItems;
  }
  getItemsByProvider() {
    this._ensureCachedState();
    return this._itemsByProvider;
  }
  getIncompleteProvider() {
    this._ensureCachedState();
    const e = new Set();
    for (const [t, i] of this.getItemsByProvider()) {
      if (i.length > 0 && i[0].container.incomplete) {
        e.add(t);
      }
    }
    return e;
  }
  get stats() {
    this._ensureCachedState();
    return this._stats;
  }
  _ensureCachedState() {
    if (this._refilterKind !== 0) {
      this._createCachedState();
    }
  }
  _createCachedState() {
    this._itemsByProvider = new Map();
    const e = [];
    const {
      leadingLineContent: t,
      characterCountDelta: i
    } = this._lineContext;
    let r = "";
    let s = "";
    const o = this._refilterKind === 1 ? this._items : this._filteredItems;
    const a = [];
    const l = !this._options.filterGraceful || o.length > 2000 ? w9e : jwh;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      if (d.isInvalid) {
        continue;
      }
      const m = this._itemsByProvider.get(d.provider);
      if (m) {
        m.push(d);
      } else {
        this._itemsByProvider.set(d.provider, [d]);
      }
      const p = d.position.column - d.editStart.column;
      const g = p + i - (d.position.column - this._column);
      if (r.length !== g) {
        r = g === 0 ? "" : t.slice(-g);
        s = r.toLowerCase();
      }
      d.word = r;
      if (g === 0) {
        d.score = hz.Default;
      } else {
        let f = 0;
        while (f < p) {
          const A = r.charCodeAt(f);
          if (A === 32 || A === 9) {
            f += 1;
          } else {
            break;
          }
        }
        if (f >= g) {
          d.score = hz.Default;
        } else if (typeof d.completion.filterText == "string") {
          const A = l(r, s, f, d.completion.filterText, d.filterTextLow, 0, this._fuzzyScoreOptions);
          if (!A) {
            continue;
          }
          if (Tbe(d.completion.filterText, d.textLabel) === 0) {
            d.score = A;
          } else {
            d.score = AuA(r, s, f, d.textLabel, d.labelLow, 0);
            d.score[0] = A[0];
          }
        } else {
          const A = l(r, s, f, d.textLabel, d.labelLow, 0, this._fuzzyScoreOptions);
          if (!A) {
            continue;
          }
          d.score = A;
        }
      }
      d.idx = u;
      d.distance = this._wordDistance.distance(d.position, d.completion);
      a.push(d);
      e.push(d.textLabel.length);
    }
    this._filteredItems = a.sort(this._snippetCompareFn);
    this._refilterKind = 0;
    this._stats = {
      pLabelLen: e.length ? BMo(e.length - 0.85, e, (u, d) => u - d) : 0
    };
  }
  static _compareCompletionItems(e, t) {
    if (e.score[0] > t.score[0]) {
      return -1;
    } else if (e.score[0] < t.score[0]) {
      return 1;
    } else if (e.distance < t.distance) {
      return -1;
    } else if (e.distance > t.distance) {
      return 1;
    } else if (e.idx < t.idx) {
      return -1;
    } else if (e.idx > t.idx) {
      return 1;
    } else {
      return 0;
    }
  }
  static _compareCompletionItemsSnippetsDown(e, t) {
    if (e.completion.kind !== t.completion.kind) {
      if (e.completion.kind === 27) {
        return 1;
      }
      if (t.completion.kind === 27) {
        return -1;
      }
    }
    return bSn._compareCompletionItems(e, t);
  }
  static _compareCompletionItemsSnippetsUp(e, t) {
    if (e.completion.kind !== t.completion.kind) {
      if (e.completion.kind === 27) {
        return -1;
      }
      if (t.completion.kind === 27) {
        return 1;
      }
    }
    return bSn._compareCompletionItems(e, t);
  }
};
