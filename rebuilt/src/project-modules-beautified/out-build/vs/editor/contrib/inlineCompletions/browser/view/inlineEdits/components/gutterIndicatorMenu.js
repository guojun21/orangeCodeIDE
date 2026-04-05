"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/components/gutterIndicatorMenu.js
// Offset: 25499198 (bundle byte offset)
// Size: 2370 bytes
ri();
Ov();
bS();
Kde();
qi();
Uc();
_r();
Jr();
Ht();
hs();
si();
Id();
ka();
Nl();
h$o();
_dn();
sua = class {
  constructor(e, t, i, r, s, o) {
    this._model = e;
    this._close = t;
    this._editorObs = i;
    this._contextKeyService = r;
    this._keybindingService = s;
    this._commandService = o;
    this._inlineEditsShowCollapsed = this._editorObs.getOption(64).map(a => a.edits.showCollapsed);
  }
  toDisposableLiveElement() {
    return this._createHoverContent().toDisposableLiveElement();
  }
  _createHoverContent() {
    const e = Ua("active", undefined);
    const t = m => ({
      title: m.title,
      icon: m.icon,
      keybinding: typeof m.commandId == "string" ? this._getKeybinding(m.commandArgs ? undefined : m.commandId) : Ro(p => typeof m.commandId == "string" ? undefined : this._getKeybinding(m.commandArgs ? undefined : m.commandId.read(p)).read(p)),
      isActive: e.map(p => p === m.id),
      onHoverChange: p => e.set(p ? m.id : undefined, undefined),
      onAction: () => {
        this._close(true);
        return this._commandService.executeCommand(typeof m.commandId == "string" ? m.commandId : m.commandId.get(), ...(m.commandArgs ?? []));
      }
    });
    const i = lkA(this._model.displayName);
    const r = xdn(t({
      id: "gotoAndAccept",
      title: `${_(1357, null)} / ${_(1358, null)}`,
      icon: this._model.tabAction.map(m => m === sV.Accept ? Be.check : Be.arrowRight),
      commandId: this._model.tabAction.map(m => m === sV.Accept ? J9t : I5c)
    }));
    const s = xdn(t({
      id: "reject",
      title: _(1359, null),
      icon: Be.close,
      commandId: D5c
    }));
    const o = this._model.extensionCommands.map((m, p) => xdn(t({
      id: m.id + "_" + p,
      title: m.title,
      icon: Be.symbolEvent,
      commandId: m.id,
      commandArgs: m.arguments
    })));
    const a = this._inlineEditsShowCollapsed.map(m => xdn(t(m ? {
      id: "showExpanded",
      title: _(1360, null),
      icon: Be.expandAll,
      commandId: d$o
    } : {
      id: "showCollapsed",
      title: _(1361, null),
      icon: Be.collapseAll,
      commandId: d$o
    })));
    const l = xdn(t({
      id: "settings",
      title: _(1362, null),
      icon: Be.gear,
      commandId: "workbench.action.openSettings",
      commandArgs: ["@tag:nextEditSuggestions"]
    }));
    const u = this._model.action ? [this._model.action] : [];
    const d = u.length > 0 ? ukA(u.map(m => ({
      id: m.id,
      label: m.title,
      enabled: true,
      run: () => this._commandService.executeCommand(m.id, ...(m.arguments ?? [])),
      class: undefined,
      tooltip: m.tooltip ?? m.title
    })), {
      hoverDelegate: $3t
    }) : undefined;
    return ckA([i, r, s, a, l, o.length ? bwg() : undefined, ...o, d ? bwg() : undefined, d]);
  }
  _getKeybinding(e) {
    if (e) {
      return tp(this._contextKeyService.onDidChangeContext, () => this._keybindingService.lookupKeybinding(e));
    } else {
      return F0(undefined);
    }
  }
};
sua = __decorate([__param(3, wi), __param(4, mo), __param(5, fr)], sua);
