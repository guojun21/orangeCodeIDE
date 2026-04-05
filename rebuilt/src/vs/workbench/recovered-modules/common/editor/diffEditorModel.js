"use strict";

// Module: out-build/vs/workbench/common/editor/diffEditorModel.js
// Offset: 31136850 (bundle byte offset)
// Size: 498 bytes
Xye();
mfu = class extends Uce {
    get originalModel() {
        return this._originalModel;
    }
    get modifiedModel() {
        return this._modifiedModel;
    }
    constructor(n, e) {
        super();
        this._originalModel = n;
        this._modifiedModel = e;
    }
    async resolve() {
        await Promise.all([this._originalModel?.resolve(), this._modifiedModel?.resolve()]);
    }
    isResolved() {
        return !!this._originalModel?.isResolved() && !!this._modifiedModel?.isResolved();
    }
    dispose() {
        super.dispose();
    }
};
