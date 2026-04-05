"use strict";

// Module: out-build/vs/editor/contrib/inlayHints/browser/inlayHintsHover.js
// Offset: 25102985 (bundle byte offset)
// Size: 2521 bytes
vr();
tg();
tl();
bv();
mhe();
Ku();
td();
iGh();
ppi();
eQl();
Ei();
Fc();
Cm();
Ht();
_r();
EGl();
Vs();
ka();
Id();
hs();
Ud();
Pa();
J0();
Dd();
tQl = class extends q9t {
  constructor(n, e, t, i) {
    super(10, e, n.item.anchor.range, t, i, true);
    this.part = n;
  }
};
cgi = class extends wun {
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g) {
    super(e, t, i, o, l, r, s, u, d, m, p, g);
    this._resolverService = a;
    this.hoverOrdinal = 6;
  }
  suggestHoverAnchor(e) {
    if (!vCt.get(this._editor) || e.target.type !== 6) {
      return null;
    }
    const i = e.target.detail.injectedText?.options;
    if (i instanceof WOt && i.attachedData instanceof dla) {
      return new tQl(i.attachedData, this, e.event.posx, e.event.posy);
    } else {
      return null;
    }
  }
  computeSync() {
    return [];
  }
  computeAsync(e, t, i, r) {
    if (e instanceof tQl) {
      return new IH(async s => {
        const {
          part: o
        } = e;
        await o.item.resolve(r);
        if (r.isCancellationRequested) {
          return;
        }
        let a;
        if (typeof o.item.hint.tooltip == "string") {
          a = new _c().appendText(o.item.hint.tooltip);
        } else if (o.item.hint.tooltip) {
          a = o.item.hint.tooltip;
        }
        if (a) {
          s.emitOne(new cme(this, e.range, [a], false, 0));
        }
        if (q_(o.item.hint.textEdits)) {
          s.emitOne(new cme(this, e.range, [new _c().appendText(_(1309, null))], false, 10001));
        }
        let l;
        if (typeof o.part.tooltip == "string") {
          l = new _c().appendText(o.part.tooltip);
        } else if (o.part.tooltip) {
          l = o.part.tooltip;
        }
        if (l) {
          s.emitOne(new cme(this, e.range, [l], false, 1));
        }
        if (o.part.location || o.part.command) {
          let d;
          const m = this._editor.getOption(79) === "altKey";
          const p = _(m ? Fs ? 1310 : 1311 : Fs ? 1312 : 1313, null);
          if (o.part.location && o.part.command) {
            d = new _c().appendText(_(1314, null, p));
          } else if (o.part.location) {
            d = new _c().appendText(_(1315, null, p));
          } else if (o.part.command) {
            d = new _c(`[${_(1316, null)}](${spg(o.part.command)} "${o.part.command.title}") (${p})`, {
              isTrusted: true
            });
          }
          if (d) {
            s.emitOne(new cme(this, e.range, [d], false, 10000));
          }
        }
        const u = await this._resolveInlayHintLabelPartHover(o, r);
        for await (const d of u) {
          s.emitOne(d);
        }
      });
    } else {
      return IH.EMPTY;
    }
  }
  async _resolveInlayHintLabelPartHover(e, t) {
    if (!e.part.location) {
      return IH.EMPTY;
    }
    const {
      uri: i,
      range: r
    } = e.part.location;
    const s = await this._resolverService.createModelReference(i);
    try {
      const o = s.object.textEditorModel;
      if (this._languageFeaturesService.hoverProvider.has(o)) {
        return F5c(this._languageFeaturesService.hoverProvider, o, new ar(r.startLineNumber, r.startColumn), t).filter(a => !y3t(a.hover.contents)).map(a => new cme(this, e.item.anchor.range, a.hover.contents, false, 2 + a.ordinal));
      } else {
        return IH.EMPTY;
      }
    } finally {
      s.dispose();
    }
  }
};
cgi = __decorate([__param(1, Jl), __param(2, Ja), __param(3, mo), __param(4, Kc), __param(5, Fn), __param(6, El), __param(7, $u), __param(8, fr), __param(9, ag), __param(10, uh), __param(11, ea), __param(12, ku)], cgi);
