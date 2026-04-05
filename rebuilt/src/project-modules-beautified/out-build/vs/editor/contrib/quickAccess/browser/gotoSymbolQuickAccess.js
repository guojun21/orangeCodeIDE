"use strict";

// Module: out-build/vs/editor/contrib/quickAccess/browser/gotoSymbolQuickAccess.js
// Offset: 28204274 (bundle byte offset)
// Size: 5426 bytes
vr();
Po();
qi();
Jr();
iX();
rt();
oa();
ts();
Tg();
eV();
ref();
Ht();
Cm();
GD();
_nt = class extends pau {
  static {
    Ava = this;
  }
  static {
    this.PREFIX = "@";
  }
  static {
    this.SCOPE_PREFIX = ":";
  }
  static {
    this.PREFIX_BY_CATEGORY = `${this.PREFIX}${this.SCOPE_PREFIX}`;
  }
  constructor(e, t, i = Object.create(null)) {
    super(i);
    this._languageFeaturesService = e;
    this._outlineModelService = t;
    this.options = i;
    this.options.canAcceptInBackground = true;
  }
  provideWithoutTextEditor(e) {
    this.provideLabelPick(e, _(1487, null));
    return at.None;
  }
  provideWithTextEditor(e, t, i, r) {
    const s = e.editor;
    const o = this.getModel(s);
    if (o) {
      if (this._languageFeaturesService.documentSymbolProvider.has(o)) {
        return this.doProvideWithEditorSymbols(e, o, t, i, r);
      } else {
        return this.doProvideWithoutEditorSymbols(e, o, t, i);
      }
    } else {
      return at.None;
    }
  }
  doProvideWithoutEditorSymbols(e, t, i, r) {
    const s = new Ut();
    this.provideLabelPick(i, _(1488, null));
    (async () => !(await this.waitForLanguageSymbolRegistry(t, s)) || r.isCancellationRequested || s.add(this.doProvideWithEditorSymbols(e, t, i, r)))();
    return s;
  }
  provideLabelPick(e, t) {
    e.items = [{
      label: t,
      index: 0,
      kind: 14
    }];
    e.ariaLabel = t;
  }
  async waitForLanguageSymbolRegistry(e, t) {
    if (this._languageFeaturesService.documentSymbolProvider.has(e)) {
      return true;
    }
    const i = new wy();
    const r = t.add(this._languageFeaturesService.documentSymbolProvider.onDidChange(() => {
      if (this._languageFeaturesService.documentSymbolProvider.has(e)) {
        r.dispose();
        i.complete(true);
      }
    }));
    t.add($i(() => i.complete(false)));
    return i.p;
  }
  doProvideWithEditorSymbols(e, t, i, r, s) {
    const o = e.editor;
    const a = new Ut();
    a.add(i.onDidAccept(m => {
      const [p] = i.selectedItems;
      if (p && p.range) {
        this.gotoLocation(e, {
          range: p.range.selection,
          keyMods: i.keyMods,
          preserveFocus: m.inBackground
        });
        s?.handleAccept?.(p, m.inBackground);
        if (!m.inBackground) {
          i.hide();
        }
      }
    }));
    a.add(i.onDidTriggerItemButton(({
      item: m
    }) => {
      if (m && m.range) {
        this.gotoLocation(e, {
          range: m.range.selection,
          keyMods: i.keyMods,
          forceSideBySide: true
        });
        i.hide();
      }
    }));
    const l = this.getDocumentSymbols(t, r);
    const u = a.add(new uo());
    const d = async m => {
      u?.value?.cancel();
      i.busy = false;
      u.value = new Wc();
      i.busy = true;
      try {
        const p = o8(i.value.substr(Ava.PREFIX.length).trim());
        const g = await this.doGetSymbolPicks(l, p, undefined, u.value.token, t);
        if (r.isCancellationRequested) {
          return;
        }
        if (g.length > 0) {
          i.items = g;
          if (m && p.original.length === 0) {
            const f = Cbe(g, A => A.type !== "separator" && !!A.range && !!Zt.containsPosition(A.range.decoration, m));
            if (f) {
              i.activeItems = [f];
            }
          }
        } else if (p.original.length > 0) {
          this.provideLabelPick(i, _(1489, null));
        } else {
          this.provideLabelPick(i, _(1490, null));
        }
      } finally {
        if (!r.isCancellationRequested) {
          i.busy = false;
        }
      }
    };
    a.add(i.onDidChangeValue(() => d(undefined)));
    d(o.getSelection()?.getPosition());
    a.add(i.onDidChangeActive(() => {
      const [m] = i.activeItems;
      if (m && m.range) {
        o.revealRangeInCenter(m.range.selection, 0);
        this.addDecorations(o, m.range.decoration);
      }
    }));
    return a;
  }
  async doGetSymbolPicks(e, t, i, r, s) {
    const o = await e;
    if (r.isCancellationRequested) {
      return [];
    }
    const a = t.original.indexOf(Ava.SCOPE_PREFIX) === 0;
    const l = a ? 1 : 0;
    let u;
    let d;
    if (t.values && t.values.length > 1) {
      u = nba(t.values[0]);
      d = nba(t.values.slice(1));
    } else {
      u = t;
    }
    let m;
    const p = this.options?.openSideBySideDirection?.();
    if (p) {
      m = [{
        iconClass: p === "right" ? Qt.asClassName(Be.splitHorizontal) : Qt.asClassName(Be.splitVertical),
        tooltip: _(p === "right" ? 1491 : 1492, null)
      }];
    }
    const g = [];
    for (let C = 0; C < o.length; C++) {
      const x = o[C];
      const I = p5e(x.name);
      const B = `$(${$oe.toIcon(x.kind).id}) ${I}`;
      const R = B.length - I.length;
      let N = x.containerName;
      if (i?.extraContainerLabel) {
        if (N) {
          N = `${i.extraContainerLabel} \u2022 ${N}`;
        } else {
          N = i.extraContainerLabel;
        }
      }
      let M;
      let O;
      let $;
      let H;
      if (t.original.length > l) {
        let z = false;
        if (u !== t) {
          [M, O] = Cmn(B, {
            ...t,
            values: undefined
          }, l, R);
          if (typeof M == "number") {
            z = true;
          }
        }
        if (typeof M != "number" && ([M, O] = Cmn(B, u, l, R), typeof M != "number")) {
          continue;
        }
        if (!z && d) {
          if (N && d.original.length > 0) {
            [$, H] = Cmn(N, d);
          }
          if (typeof $ != "number") {
            continue;
          }
          if (typeof M == "number") {
            M += $;
          }
        }
      }
      const W = x.tags && x.tags.indexOf(1) >= 0;
      g.push({
        index: C,
        kind: x.kind,
        score: M,
        label: B,
        ariaLabel: ygh(x.name, x.kind),
        description: N,
        highlights: W ? undefined : {
          label: O,
          description: H
        },
        range: {
          selection: Zt.collapseToStart(x.selectionRange),
          decoration: x.range
        },
        uri: s.uri,
        symbolName: I,
        strikethrough: W,
        buttons: m
      });
    }
    const f = g.sort((C, x) => a ? this.compareByKindAndScore(C, x) : this.compareByScore(C, x));
    let A = [];
    if (a) {
      let C = function () {
        if (I && typeof x == "number" && B > 0) {
          I.label = B4(wva[x] || yva, B);
        }
      };
      var w = C;
      let x;
      let I;
      let B = 0;
      for (const R of f) {
        if (x !== R.kind) {
          C();
          x = R.kind;
          B = 1;
          I = {
            type: "separator"
          };
          A.push(I);
        } else {
          B++;
        }
        A.push(R);
      }
      C();
    } else if (f.length > 0) {
      A = [{
        label: _(1493, null, g.length),
        type: "separator"
      }, ...f];
    }
    return A;
  }
  compareByScore(e, t) {
    if (typeof e.score != "number" && typeof t.score == "number") {
      return 1;
    }
    if (typeof e.score == "number" && typeof t.score != "number") {
      return -1;
    }
    if (typeof e.score == "number" && typeof t.score == "number") {
      if (e.score > t.score) {
        return -1;
      }
      if (e.score < t.score) {
        return 1;
      }
    }
    if (e.index < t.index) {
      return -1;
    } else if (e.index > t.index) {
      return 1;
    } else {
      return 0;
    }
  }
  compareByKindAndScore(e, t) {
    const i = wva[e.kind] || yva;
    const r = wva[t.kind] || yva;
    const s = i.localeCompare(r);
    if (s === 0) {
      return this.compareByScore(e, t);
    } else {
      return s;
    }
  }
  async getDocumentSymbols(e, t) {
    const i = await this._outlineModelService.getOrCreate(e, t);
    if (t.isCancellationRequested) {
      return [];
    } else {
      return i.asListOfDocumentSymbols();
    }
  }
};
_nt = Ava = __decorate([__param(0, $u), __param(1, Gne)], _nt);
yva = _(1494, null);
wva = {
  5: _(1495, null),
  11: _(1496, null),
  8: _(1497, null),
  12: _(1498, null),
  4: _(1499, null),
  22: _(1500, null),
  23: _(1501, null),
  24: _(1502, null),
  10: _(1503, null),
  2: _(1504, null),
  3: _(1505, null),
  25: _(1506, null),
  1: _(1507, null),
  6: _(1508, null),
  9: _(1509, null),
  21: _(1510, null),
  14: _(1511, null),
  0: _(1512, null),
  17: _(1513, null),
  15: _(1514, null),
  16: _(1515, null),
  18: _(1516, null),
  19: _(1517, null),
  7: _(1518, null),
  13: _(1519, null)
};
