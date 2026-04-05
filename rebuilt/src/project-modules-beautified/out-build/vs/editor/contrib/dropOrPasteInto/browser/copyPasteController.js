"use strict";

// Module: out-build/vs/editor/contrib/dropOrPasteInto/browser/copyPasteController.js
// Offset: 2458585 (bundle byte offset)
// Size: 10940 bytes
ri();
Vs();
vr();
Po();
ZSe();
_s();
QY();
rt();
hF();
_r();
Bc();
Js();
Ht();
Kf();
S9();
hs();
Ei();
si();
Wt();
Xg();
Kl();
VOn();
wBc();
YI();
ts();
Tg();
Cm();
SBc();
EBc();
dve();
TBc();
xRe();
ZSh();
Rde();
OBc = "editor.changePasteType";
r9o = "editor.pasteAs.preferences";
s9o = new Sn("pasteWidgetVisible", false, _(1055, null));
o9o = "application/vnd.code.copymetadata";
ZH = class extends at {
  static {
    Yde = this;
  }
  static {
    this.ID = "editor.contrib.copyPasteActionController";
  }
  static get(e) {
    return e.getContribution(Yde.ID);
  }
  static setConfigureDefaultAction(e) {
    Yde._configureDefaultAction = e;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this._bulkEditService = i;
    this._clipboardService = r;
    this._commandService = s;
    this._configService = o;
    this._languageFeaturesService = a;
    this._quickInputService = l;
    this._progressService = u;
    this._tooltipService = d;
    this._uiOverlayService = m;
    this._editor = e;
    const p = e.getContainerDomNode();
    this._register(ei(p, "copy", g => this.handleCopy(g)));
    this._register(ei(p, "cut", g => this.handleCopy(g)));
    this._register(ei(p, "paste", g => this.handlePaste(g), true));
    this._pasteProgressManager = this._register(new K3n("pasteIntoEditor", e, t));
    this._postPasteWidgetManager = this._register(t.createInstance(Z3n, "pasteIntoEditor", e, s9o, {
      id: OBc,
      label: _(1056, null)
    }, () => Yde._configureDefaultAction ? [Yde._configureDefaultAction] : []));
  }
  changePasteType() {
    this._postPasteWidgetManager.tryShowSelector();
  }
  pasteAs(e) {
    this._editor.focus();
    try {
      this._pasteAsActionContext = {
        preferred: e
      };
      this._commandService.executeCommand("editor.action.clipboardPasteAction");
    } finally {
      this._pasteAsActionContext = undefined;
    }
  }
  clearWidgets() {
    this._postPasteWidgetManager.clear();
  }
  isPasteAsEnabled() {
    return this._editor.getOption(89).enabled;
  }
  async finishedPaste() {
    await this._currentPasteOperation;
  }
  handleCopy(e) {
    if (this._editor.isChatCodeblock === true) {
      this._tooltipService.registerEvent("chat.copy.codeblock.manual");
    } else if (this._editor.isSimpleWidget === false) {
      this._tooltipService.registerEvent("editor.copy.non_vim_mode");
    }
    if (!this._editor.hasTextFocus() || (this._clipboardService.clearInternalState?.(), !e.clipboardData)) {
      return;
    }
    const t = this._editor.getModel();
    const i = this._editor.getSelections();
    if (!t || !i?.length) {
      return;
    }
    const r = this._editor.getOption(38);
    let s = i;
    const o = i.length === 1 && i[0].isEmpty();
    if (o) {
      if (!r) {
        return;
      }
      s = [new Zt(s[0].startLineNumber, 1, s[0].startLineNumber, 1 + t.getLineLength(s[0].startLineNumber))];
    }
    const a = this._editor._getViewModel()?.getPlainTextToCopy(i, r, Sc);
    const l = Array.isArray(a) ? a : null;
    this._uiOverlayService.lastCopyData = {
      text: Array.isArray(a) ? a.join(`
`) : a ?? "",
      range: {
        selectionStartLineNumber: s[0].startLineNumber,
        selectionStartColumn: s[0].startColumn,
        positionLineNumber: s[0].endLineNumber,
        positionColumn: s[0].endColumn
      },
      languageId: t?.getLanguageIdAtPosition(s[0].startLineNumber, s[0].startColumn) ?? "",
      uri: t.uri
    };
    if (!this.isPasteAsEnabled()) {
      return;
    }
    const u = {
      multicursorText: l,
      pasteOnNewLine: o,
      mode: null
    };
    const d = this._languageFeaturesService.documentPasteEditProvider.ordered(t).filter(A => !!A.prepareDocumentPaste);
    if (!d.length) {
      this.setCopyMetadata(e.clipboardData, {
        defaultPastePayload: u
      });
      return;
    }
    const m = DSh(e.clipboardData);
    const p = d.flatMap(A => A.copyMimeTypes ?? []);
    const g = Wr();
    this.setCopyMetadata(e.clipboardData, {
      id: g,
      providerCopyMimeTypes: p,
      defaultPastePayload: u
    });
    const f = d.map(A => ({
      providerMimeTypes: A.copyMimeTypes,
      operation: dw(w => A.prepareDocumentPaste(t, s, m, w).catch(C => {
        console.error(C);
      }))
    }));
    Yde._currentCopyOperation?.operations.forEach(A => A.operation.cancel());
    Yde._currentCopyOperation = {
      handle: g,
      operations: f
    };
  }
  async handlePaste(e) {
    if (!e.clipboardData || !this._editor.hasTextFocus()) {
      return;
    }
    C3.get(this._editor)?.closeMessage();
    this._currentPasteOperation?.cancel();
    this._currentPasteOperation = undefined;
    const t = this._editor.getModel();
    const i = this._editor.getSelections();
    if (!i?.length || !t || this._editor.getOption(96) || !this.isPasteAsEnabled() && !this._pasteAsActionContext) {
      return;
    }
    const r = this.fetchCopyMetadata(e);
    const s = V5o(e.clipboardData);
    s.delete(o9o);
    const o = Array.from(e.clipboardData.files).map(u => u.type);
    const a = [...e.clipboardData.types, ...o, ...(r?.providerCopyMimeTypes ?? []), NA.uriList];
    const l = this._languageFeaturesService.documentPasteEditProvider.ordered(t).filter(u => {
      const d = this._pasteAsActionContext?.preferred;
      if (d && !this.providerMatchesPreference(u, d)) {
        return false;
      } else {
        return u.pasteMimeTypes?.some(m => gSh(m, a));
      }
    });
    if (!l.length) {
      if (this._pasteAsActionContext?.preferred) {
        this.showPasteAsNoEditMessage(i, this._pasteAsActionContext.preferred);
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
    if (!this._editor.isSimpleWidget && !this._editor.isChatCodeblock) {
      this._tooltipService.registerEvent("editor.paste");
    }
    if (this._pasteAsActionContext) {
      this.showPasteAsPick(this._pasteAsActionContext.preferred, l, i, s, r);
    } else {
      this.doPasteInline(l, i, s, r, e);
    }
  }
  showPasteAsNoEditMessage(e, t) {
    const i = "only" in t ? t.only.value : "preferences" in t ? t.preferences.length ? t.preferences.map(r => r.value).join(", ") : _(1057, null) : t.providerId;
    C3.get(this._editor)?.showMessage(_(1058, null, i), e[0].getStartPosition());
  }
  doPasteInline(e, t, i, r, s) {
    const o = this._editor;
    if (!o.hasModel()) {
      return;
    }
    const a = new ERe(o, 3, undefined);
    const l = dw(async u => {
      const d = this._editor;
      if (!d.hasModel()) {
        return;
      }
      const m = d.getModel();
      const p = new Ut();
      const g = p.add(new Wc(u));
      p.add(a.token.onCancellationRequested(() => g.cancel()));
      const f = g.token;
      try {
        await this.mergeInDataFromCopy(e, i, r, f);
        if (f.isCancellationRequested) {
          return;
        }
        const A = e.filter(x => this.isSupportedPasteProvider(x, i));
        if (!A.length || A.length === 1 && A[0] instanceof K3t) {
          return this.applyDefaultPasteHandler(i, r, f, s);
        }
        const w = {
          triggerKind: vOn.Automatic
        };
        const C = await this.getPasteEdits(A, i, m, t, w, f);
        p.add(C);
        if (f.isCancellationRequested) {
          return;
        }
        if (C.edits.length === 1 && C.edits[0].provider instanceof K3t) {
          return this.applyDefaultPasteHandler(i, r, f, s);
        }
        if (C.edits.length) {
          const x = d.getOption(89).showPasteSelector === "afterPaste";
          return this._postPasteWidgetManager.applyEditAndShowIfNeeded(t, {
            activeEditIndex: this.getInitialActiveEditIndex(m, C.edits),
            allEdits: C.edits
          }, x, async (I, B) => {
            if (!I.provider.resolveDocumentPasteEdit) {
              return I;
            }
            const R = I.provider.resolveDocumentPasteEdit(I, B);
            const N = new wy();
            const M = await this._pasteProgressManager.showWhile(t[0].getEndPosition(), _(1059, null, I.title), WP(Promise.race([N.p, R]), B), {
              cancel: () => N.cancel()
            }, 0);
            if (M) {
              I.insertText = M.insertText;
              I.additionalEdit = M.additionalEdit;
            }
            return I;
          }, f);
        }
        await this.applyDefaultPasteHandler(i, r, f, s);
      } finally {
        p.dispose();
        if (this._currentPasteOperation === l) {
          this._currentPasteOperation = undefined;
        }
      }
    });
    this._pasteProgressManager.showWhile(t[0].getEndPosition(), _(1060, null), l, {
      cancel: async () => {
        try {
          l.cancel();
          if (a.token.isCancellationRequested) {
            return;
          }
          await this.applyDefaultPasteHandler(i, r, a.token, s);
        } finally {
          a.dispose();
        }
      }
    }).then(() => {
      a.dispose();
    });
    this._currentPasteOperation = l;
  }
  showPasteAsPick(e, t, i, r, s) {
    const o = dw(async a => {
      const l = this._editor;
      if (!l.hasModel()) {
        return;
      }
      const u = l.getModel();
      const d = new Ut();
      const m = d.add(new ERe(l, 3, undefined, a));
      try {
        await this.mergeInDataFromCopy(t, r, s, m.token);
        if (m.token.isCancellationRequested) {
          return;
        }
        let p = t.filter(C => this.isSupportedPasteProvider(C, r, e));
        if (e) {
          p = p.filter(C => this.providerMatchesPreference(C, e));
        }
        const g = {
          triggerKind: vOn.PasteAs,
          only: e && "only" in e ? e.only : undefined
        };
        let f = d.add(await this.getPasteEdits(p, r, u, i, g, m.token));
        if (m.token.isCancellationRequested) {
          return;
        }
        if (e) {
          f = {
            edits: f.edits.filter(C => "only" in e ? e.only.contains(C.kind) : "preferences" in e ? e.preferences.some(x => x.contains(C.kind)) : e.providerId === C.provider.id),
            dispose: f.dispose
          };
        }
        if (!f.edits.length) {
          if (e) {
            this.showPasteAsNoEditMessage(i, e);
          }
          return;
        }
        let A;
        if (e) {
          A = f.edits.at(0);
        } else {
          const C = {
            id: "editor.pasteAs.default",
            label: _(1061, null),
            edit: undefined
          };
          const x = await this._quickInputService.pick([...f.edits.map(I => ({
            label: I.title,
            description: I.kind?.value,
            edit: I
          })), ...(Yde._configureDefaultAction ? [{
            type: "separator"
          }, {
            label: Yde._configureDefaultAction.label,
            edit: undefined
          }] : [])], {
            placeHolder: _(1062, null)
          });
          if (x === C) {
            Yde._configureDefaultAction?.run();
            return;
          }
          A = x?.edit;
        }
        if (!A) {
          return;
        }
        const w = OSh(u.uri, i, A);
        await this._bulkEditService.apply(w, {
          editor: this._editor
        });
      } finally {
        d.dispose();
        if (this._currentPasteOperation === o) {
          this._currentPasteOperation = undefined;
        }
      }
    });
    this._progressService.withProgress({
      location: 10,
      title: _(1063, null)
    }, () => o);
  }
  setCopyMetadata(e, t) {
    e.setData(o9o, JSON.stringify(t));
  }
  fetchCopyMetadata(e) {
    if (!e.clipboardData) {
      return;
    }
    const t = e.clipboardData.getData(o9o);
    if (t) {
      try {
        return JSON.parse(t);
      } catch {
        return;
      }
    }
    const [i, r] = i3t.getTextData(e.clipboardData);
    if (r) {
      return {
        defaultPastePayload: {
          mode: r.mode,
          multicursorText: r.multicursorText ?? null,
          pasteOnNewLine: !!r.isFromEmptySelection
        }
      };
    }
  }
  async mergeInDataFromCopy(e, t, i, r) {
    if (i?.id && Yde._currentCopyOperation?.handle === i.id) {
      const s = Yde._currentCopyOperation.operations.filter(a => e.some(l => l.pasteMimeTypes.some(u => gSh(u, a.providerMimeTypes)))).map(a => a.operation);
      const o = await Promise.all(s);
      if (r.isCancellationRequested) {
        return;
      }
      for (const a of o.reverse()) {
        if (a) {
          for (const [l, u] of a) {
            t.replace(l, u);
          }
        }
      }
    }
    if (!t.has(NA.uriList)) {
      const s = await this._clipboardService.readResources();
      if (r.isCancellationRequested) {
        return;
      }
      if (s.length) {
        t.append(NA.uriList, W3t(YSe.create(s)));
      }
    }
  }
  async getPasteEdits(e, t, i, r, s, o) {
    const a = new Ut();
    const l = await WP(Promise.all(e.map(async d => {
      try {
        const m = await d.provideDocumentPasteEdits?.(i, r, t, s, o);
        if (m) {
          a.add(m);
        }
        return m?.edits?.map(p => ({
          ...p,
          provider: d
        }));
      } catch (m) {
        if (!bf(m)) {
          console.error(m);
        }
        return;
      }
    })), o);
    const u = lh(l ?? []).flat().filter(d => !s.only || s.only.contains(d.kind));
    return {
      edits: USh(u),
      dispose: () => a.dispose()
    };
  }
  async applyDefaultPasteHandler(e, t, i, r) {
    const o = (await (e.get(NA.text) ?? e.get("text"))?.asString()) ?? "";
    if (i.isCancellationRequested) {
      return;
    }
    const a = {
      clipboardEvent: r,
      text: o,
      pasteOnNewLine: t?.defaultPastePayload.pasteOnNewLine ?? false,
      multicursorText: t?.defaultPastePayload.multicursorText ?? null,
      mode: null
    };
    this._editor.trigger("keyboard", "paste", a);
  }
  isSupportedPasteProvider(e, t, i) {
    if (e.pasteMimeTypes?.some(r => t.matches(r))) {
      return !i || this.providerMatchesPreference(e, i);
    } else {
      return false;
    }
  }
  providerMatchesPreference(e, t) {
    if ("only" in t) {
      return e.providedPasteEditKinds.some(i => t.only.contains(i));
    } else if ("preferences" in t) {
      return t.preferences.some(i => t.preferences.some(r => r.contains(i)));
    } else {
      return e.id === t.providerId;
    }
  }
  getInitialActiveEditIndex(e, t) {
    const i = this._configService.getValue(r9o, {
      resource: e.uri
    });
    for (const r of Array.isArray(i) ? i : []) {
      const s = new p0(r);
      const o = t.findIndex(a => s.contains(a.kind));
      if (o >= 0) {
        return o;
      }
    }
    return 0;
  }
};
ZH = Yde = __decorate([__param(1, ln), __param(2, rL), __param(3, jm), __param(4, fr), __param(5, Fn), __param(6, $u), __param(7, ha), __param(8, Ib), __param(9, FY), __param(10, YD)], ZH);
