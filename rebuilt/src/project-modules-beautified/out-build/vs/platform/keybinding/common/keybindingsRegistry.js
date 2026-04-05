"use strict";

// Module: out-build/vs/platform/keybinding/common/keybindingsRegistry.js
// Offset: 637736 (bundle byte offset)
// Size: 3207 bytes
hde();
_r();
hs();
Ws();
rt();
l2();
(function (n) {
  n[n.EditorCore = 0] = "EditorCore";
  n[n.EditorContrib = 100] = "EditorContrib";
  n[n.WorkbenchContrib = 200] = "WorkbenchContrib";
  n[n.BuiltinExtension = 300] = "BuiltinExtension";
  n[n.ExternalExtension = 400] = "ExternalExtension";
  n[n.CursorDefaultPriority = 500] = "CursorDefaultPriority";
  n[n.CursorMaxPriority = 600] = "CursorMaxPriority";
})(Oah ||= {});
Uah = class SJb {
  constructor() {
    this._coreKeybindings = new WD();
    this._extensionKeybindings = [];
    this._cachedMergedKeybindings = null;
  }
  static bindToCurrentPlatform(e) {
    if (cf === 1) {
      if (e && e.win) {
        return e.win;
      }
    } else if (cf === 2) {
      if (e && e.mac) {
        return e.mac;
      }
    } else if (e && e.linux) {
      return e.linux;
    }
    return e;
  }
  registerKeybindingRule(e) {
    const t = SJb.bindToCurrentPlatform(e);
    const i = new Ut();
    if (t && t.primary) {
      const r = eFn(t.primary, cf);
      if (r) {
        i.add(this._registerDefaultKeybinding(r, e.id, e.args, e.weight, 0, e.when));
      }
    }
    if (t && Array.isArray(t.secondary)) {
      for (let r = 0, s = t.secondary.length; r < s; r++) {
        const o = t.secondary[r];
        const a = eFn(o, cf);
        if (a) {
          i.add(this._registerDefaultKeybinding(a, e.id, e.args, e.weight, -r - 1, e.when));
        }
      }
    }
    return i;
  }
  setExtensionKeybindings(e) {
    const t = [];
    let i = 0;
    for (const r of e) {
      if (r.keybinding) {
        t[i++] = {
          keybinding: r.keybinding,
          command: r.id,
          commandArgs: r.args,
          when: r.when,
          weight1: r.weight,
          weight2: 0,
          extensionId: r.extensionId || null,
          isBuiltinExtension: r.isBuiltinExtension || false
        };
      }
    }
    this._extensionKeybindings = t;
    this._cachedMergedKeybindings = null;
  }
  registerCommandAndKeybindingRule(e) {
    return H_(this.registerKeybindingRule(e), Ss.registerCommand(e));
  }
  _registerDefaultKeybinding(e, t, i, r, s, o) {
    const a = this._coreKeybindings.push({
      keybinding: e,
      command: t,
      commandArgs: i,
      when: o,
      weight1: r,
      weight2: s,
      extensionId: null,
      isBuiltinExtension: false
    });
    this._cachedMergedKeybindings = null;
    return $i(() => {
      a();
      this._cachedMergedKeybindings = null;
    });
  }
  getDefaultKeybindings() {
    if (!this._cachedMergedKeybindings) {
      this._cachedMergedKeybindings = Array.from(this._coreKeybindings).concat(this._extensionKeybindings);
      this._cachedMergedKeybindings.sort(KiA);
    }
    return this._cachedMergedKeybindings.slice(0);
  }
};
qo = new Uah();
$ah = {
  EditorModes: "platform.keybindingsRegistry"
};
Di.add($ah.EditorModes, qo);
