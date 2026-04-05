"use strict";

// Module: out-build/vs/workbench/services/magicLink/browser/magicLinkService.js
// Offset: 33799176 (bundle byte offset)
// Size: 1578 bytes
rt();
cu();
Yn();
Cm();
td();
ns();
Er();
Wt();
Dd();
Aye();
ps();
zk();
dmy = 900000;
E0u = xi("magicLinkService");
sDa = class extends at {
  constructor(e, t, i, r, s, o) {
    super();
    this.urlService = e;
    this.workspaceContextService = t;
    this.fileService = i;
    this.textModelService = r;
    this.languageFeaturesService = s;
    this.reactiveStorageService = o;
    this.generationUUIDToTabId = new Fb(50);
    this.tabIdToReferenceableCodeBlocks = new Fb(5);
  }
  async getMagicURIForText(e) {
    return await this._getMagicURIForText(e);
  }
  async _getMagicURIForText(e) {
    const t = await this._getMagicURIForTextImpl(e);
    if (t !== undefined) {
      return t;
    }
    const i = e.lastIndexOf(":");
    const r = i === -1 ? e : e.substring(0, i);
    const s = i === -1 ? undefined : e.substring(i + 1);
    return this._getMagicURIForTextImpl(r, s);
  }
  async _getMagicURIForTextImpl(e, t) {
    const i = e.trim();
    if (!i) {
      return;
    }
    let r;
    if (_TA(i)) {
      const s = this.workspaceContextService.getWorkspace();
      if (s.folders.length > 0 && s.folders[0].uri.scheme !== "file") {
        const o = je.file(i);
        r = s.folders[0].uri.with({
          path: o.path
        });
      } else {
        r = je.file(i);
      }
    } else {
      r = this.workspaceContextService.resolveRelativePath(i);
    }
    if ((await this.fileService.exists(r)) && (await this.fileService.stat(r)).isFile) {
      if (t !== undefined) {
        return r.with({
          fragment: `L${t}:1`
        });
      } else {
        return r;
      }
    }
  }
  linkGenerationToTab(e, t) {
    this.generationUUIDToTabId.set(e, t);
  }
  registerReferenceableCodeBlocksForGeneration(e, t) {
    const i = this.generationUUIDToTabId.get(e);
    if (i !== undefined) {
      this.tabIdToReferenceableCodeBlocks.set(i, t);
    }
  }
};
sDa = __decorate([__param(0, fce), __param(1, Lr), __param(2, Gr), __param(3, El), __param(4, $u), __param(5, ku)], sDa);
Vi(E0u, sDa, 1);
