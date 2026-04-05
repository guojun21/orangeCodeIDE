"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatTaskContentPart.js
// Offset: 32833967 (bundle byte offset)
// Size: 825 bytes
ri();
yn();
rt();
Wt();
Kyu();
kCi();
Ixa = class extends at {
    constructor(e, t, i, r, s) {
        super();
        this.task = e;
        if (e.progress.length) {
            const o = this._register(s.createInstance(Jfn, e.progress, e.content.value, r, t));
            this.domNode = Ct(".chat-progress-task");
            this.domNode.appendChild(o.domNode);
            this.onDidChangeHeight = o.onDidChangeHeight;
        } else {
            const a = !(e.isSettled?.() ?? true) && !r.element.isComplete;
            const l = this._register(s.createInstance(yEt, e, i, r, a, true, undefined));
            this.domNode = l.domNode;
            this.onDidChangeHeight = In.None;
        }
    }
    hasSameContent(e) {
        return e.kind === "progressTask" && e.progress.length === this.task.progress.length && e.isSettled() === this.task.isSettled();
    }
    addDisposable(e) {
        this._register(e);
    }
};
Ixa = __decorate([__param(4, ln)], Ixa);
