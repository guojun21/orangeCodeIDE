"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/notebookEditorExtensions.js
// Offset: 30815277 (bundle byte offset)
// Size: 571 bytes
J0a = class BQb {
    static {
        this.INSTANCE = new BQb();
    }
    constructor() {
        this.editorContributions = [];
    }
    registerEditorContribution(e, t) {
        this.editorContributions.push({
            id: e,
            ctor: t
        });
    }
    getEditorContributions() {
        return this.editorContributions.slice(0);
    }
};
(function(n) {
    function e() {
        return J0a.INSTANCE.getEditorContributions();
    }
    n.getEditorContributions = e;

    function t(i) {
        return J0a.INSTANCE.getEditorContributions().filter(r => i.indexOf(r.id) >= 0);
    }
    n.getSomeEditorContributions = t;
})(Agn ||= {});
