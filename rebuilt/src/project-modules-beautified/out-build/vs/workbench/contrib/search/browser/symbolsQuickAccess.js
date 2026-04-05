"use strict";

// Module: out-build/vs/workbench/contrib/search/browser/symbolsQuickAccess.js
// Offset: 28196349 (bundle byte offset)
// Size: 4373 bytes
Ht();
bce();
vr();
ynt();
Tg();
Pd();
zr();
Fc();
ss();
ts();
Ei();
Oh();
Get();
iX();
qi();
Jr();
wnt = class extends nX {
  static {
    zAi = this;
  }
  static {
    this.PREFIX = "#";
  }
  static {
    this.TYPING_SEARCH_DELAY = 200;
  }
  static {
    this.TREAT_AS_GLOBAL_SYMBOL_TYPES = new Set([4, 9, 0, 10, 2, 3, 1]);
  }
  get defaultFilterValue() {
    const e = this.codeEditorService.getFocusedCodeEditor();
    if (e) {
      return cdn(e) ?? undefined;
    }
  }
  constructor(e, t, i, r, s) {
    super(zAi.PREFIX, {
      canAcceptInBackground: true,
      noResultsPick: {
        label: _(10786, null)
      }
    });
    this.labelService = e;
    this.openerService = t;
    this.editorService = i;
    this.configurationService = r;
    this.codeEditorService = s;
    this.delayer = this._register(new L4(zAi.TYPING_SEARCH_DELAY));
    this.excludedProviders = new Set();
    this._refreshExcludedProvidersFromConfig();
    this._register(this.configurationService.onDidChangeConfiguration(o => {
      if (o.affectsConfiguration("search.quickAccess.excludeSymbolProviders")) {
        this._refreshExcludedProvidersFromConfig();
      }
    }));
  }
  get configuration() {
    const e = this.configurationService.getValue().workbench?.editor;
    return {
      openEditorPinned: !e?.enablePreviewFromQuickOpen || !e?.enablePreview,
      openSideBySideDirection: e?.openSideBySideDirection
    };
  }
  _getPicks(e, t, i) {
    return this.getSymbolPicks(e, undefined, i);
  }
  async getSymbolPicks(e, t, i) {
    return this.delayer.trigger(async () => i.isCancellationRequested ? [] : this.doGetSymbolPicks(o8(e), t, i), t?.delay);
  }
  async doGetSymbolPicks(e, t, i) {
    let r;
    let s;
    if (e.values && e.values.length > 1) {
      r = nba(e.values[0]);
      s = nba(e.values.slice(1));
    } else {
      r = e;
    }
    const o = await KXg(r.original, this.excludedProviders, i);
    if (i.isCancellationRequested) {
      return [];
    }
    const a = [];
    const l = this.configuration.openSideBySideDirection;
    for (const {
      symbol: u,
      provider: d
    } of o) {
      if (t?.skipLocal && !zAi.TREAT_AS_GLOBAL_SYMBOL_TYPES.has(u.kind) && u.containerName) {
        continue;
      }
      const m = u.name;
      const p = `$(${$oe.toIcon(u.kind).id}) ${m}`;
      const g = p.length - m.length;
      let f;
      let A;
      let w = false;
      if (r.original.length > 0 && (r !== e && ([f, A] = Cmn(p, {
        ...e,
        values: undefined
      }, 0, g), typeof f == "number" && (w = true)), typeof f != "number" && ([f, A] = Cmn(p, r, 0, g), typeof f != "number"))) {
        continue;
      }
      const C = u.location.uri;
      let x;
      if (C) {
        const N = this.labelService.getUriLabel(C, {
          relative: true
        });
        if (u.containerName) {
          x = `${u.containerName} \u2022 ${N}`;
        } else {
          x = N;
        }
      }
      let I;
      let B;
      if (!w && s && s.original.length > 0) {
        if (x) {
          [I, B] = Cmn(x, s);
        }
        if (typeof I != "number") {
          continue;
        }
        if (typeof f == "number") {
          f += I;
        }
      }
      const R = u.tags ? u.tags.indexOf(1) >= 0 : false;
      a.push({
        symbol: u,
        resource: C,
        score: f,
        label: p,
        ariaLabel: m,
        highlights: R ? undefined : {
          label: A,
          description: B
        },
        description: x,
        strikethrough: R,
        buttons: [{
          iconClass: l === "right" ? Qt.asClassName(Be.splitHorizontal) : Qt.asClassName(Be.splitVertical),
          tooltip: _(l === "right" ? 10787 : 10788, null)
        }],
        trigger: (N, M) => {
          this.openSymbol(d, u, i, {
            keyMods: M,
            forceOpenSideBySide: true
          });
          return HF.CLOSE_PICKER;
        },
        accept: async (N, M) => this.openSymbol(d, u, i, {
          keyMods: N,
          preserveFocus: M.inBackground,
          forcePinned: M.inBackground
        })
      });
    }
    if (!t?.skipSorting) {
      a.sort((u, d) => this.compareSymbols(u, d));
    }
    return a;
  }
  async openSymbol(e, t, i, r) {
    let s = t;
    if (typeof e.resolveWorkspaceSymbol != "function" || !(s = (await e.resolveWorkspaceSymbol(t, i)) || t, i.isCancellationRequested)) {
      if (s.location.uri.scheme === _n.http || s.location.uri.scheme === _n.https) {
        await this.openerService.open(s.location.uri, {
          fromUserGesture: true,
          allowContributedOpeners: true
        });
      } else {
        await this.editorService.openEditor({
          resource: s.location.uri,
          options: {
            preserveFocus: r?.preserveFocus,
            pinned: r.keyMods.ctrlCmd || r.forcePinned || this.configuration.openEditorPinned,
            selection: s.location.range ? Zt.collapseToStart(s.location.range) : undefined
          }
        }, r.keyMods.alt || this.configuration.openEditorPinned && r.keyMods.ctrlCmd || r?.forceOpenSideBySide ? Aw : B1);
      }
    }
  }
  compareSymbols(e, t) {
    if (typeof e.score == "number" && typeof t.score == "number") {
      if (e.score > t.score) {
        return -1;
      }
      if (e.score < t.score) {
        return 1;
      }
    }
    if (e.symbol && t.symbol) {
      const i = e.symbol.name.toLowerCase();
      const r = t.symbol.name.toLowerCase();
      const s = i.localeCompare(r);
      if (s !== 0) {
        return s;
      }
    }
    if (e.symbol && t.symbol) {
      const i = $oe.toIcon(e.symbol.kind).id;
      const r = $oe.toIcon(t.symbol.kind).id;
      return i.localeCompare(r);
    }
    return 0;
  }
  _refreshExcludedProvidersFromConfig() {
    const e = this.configurationService.getValue("search.quickAccess.excludeSymbolProviders");
    const t = Array.isArray(e) ? e : [];
    this.excludedProviders = new Set(t.map(i => i.toLowerCase()));
  }
};
wnt = zAi = __decorate([__param(0, Ol), __param(1, Ja), __param(2, yi), __param(3, Fn), __param(4, fl)], wnt);
