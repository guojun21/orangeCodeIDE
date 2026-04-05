"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/notebookOutlineDataSourceFactory.js
// Offset: 33434546 (bundle byte offset)
// Size: 1680 bytes
rt();
Wt();
Jdy();
sIa = class extends igt {
    constructor(e) {
        super();
        this.instantiationService = e;
    }
    createReferencedObject(e, t) {
        return this.instantiationService.createInstance(rIa, t);
    }
    destroyReferencedObject(e, t) {
        t.dispose();
    }
};
sIa = __decorate([__param(0, ln)], sIa);
oIa = xi("INotebookCellOutlineDataSourceFactory");
aIa = class {
    constructor(e) {
        this._data = e.createInstance(sIa);
    }
    getOrCreate(e) {
        return this._data.acquire(e.getId(), e);
    }
};
aIa = __decorate([__param(0, ln)], aIa);
