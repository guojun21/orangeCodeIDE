"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookOriginalCellModelFactory.js
// Offset: 33642831 (bundle byte offset)
// Size: 1646 bytes
rt();
Wt();
ph();
Yn();
Ku();
hd();
K_u = xi("INotebookOriginalCellModelFactory");
TIa = class extends igt {
    constructor(e, t) {
        super();
        this.modelService = e;
        this._languageService = t;
    }
    createReferencedObject(e, t, i, r, s) {
        const o = `${t.scheme}-chat-edit`;
        const a = je.from({
            scheme: o,
            fragment: t.fragment,
            path: t.path
        });
        const l = this._languageService.getLanguageIdByLanguageName(r) ? this._languageService.createById(r) : s === zd.Markup ? this._languageService.createById("markdown") : null;
        return this.modelService.createModel(i, l, a);
    }
    destroyReferencedObject(e, t) {
        t.dispose();
    }
};
TIa = __decorate([__param(0, Il), __param(1, Jl)], TIa);
IIa = class {
    constructor(e) {
        this._data = e.createInstance(TIa);
    }
    getOrCreate(e, t, i, r) {
        return this._data.acquire(e.toString(), e, t, i, r);
    }
};
IIa = __decorate([__param(0, ln)], IIa);
