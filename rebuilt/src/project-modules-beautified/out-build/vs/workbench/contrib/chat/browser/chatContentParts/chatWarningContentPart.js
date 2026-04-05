"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatWarningContentPart.js
// Offset: 32852019 (bundle byte offset)
// Size: 2158 bytes
ri();
bS();
qi();
rt();
xS();
nwu = Ct;
iwu = class extends at {
    constructor(n, e, t) {
        super();
        this.domNode = nwu(".chat-notification-widget");
        let i;
        let r;
        switch (n) {
            case Mnt.Warning:
                i = Be.warning;
                r = ".chat-warning-codicon";
                break;
            case Mnt.Error:
                i = Be.error;
                r = ".chat-error-codicon";
                break;
            case Mnt.Info:
                i = Be.info;
                r = ".chat-info-codicon";
                break;
        }
        this.domNode.appendChild(nwu(r, undefined, tL(i)));
        const s = this._register(t.render(e));
        this.domNode.appendChild(s.element);
    }
    hasSameContent(n) {
        return n.kind === "warning";
    }
};
