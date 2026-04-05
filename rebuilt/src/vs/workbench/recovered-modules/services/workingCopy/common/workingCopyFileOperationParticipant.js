"use strict";

// Module: out-build/vs/workbench/services/workingCopy/common/workingCopyFileOperationParticipant.js
// Offset: 31214520 (bundle byte offset)
// Size: 680 bytes
jr();
rt();
Ei();
l2();
fka = class extends at {
    constructor(e, t) {
        super();
        this.logService = e;
        this.configurationService = t;
        this.participants = new WD();
    }
    addFileOperationParticipant(e) {
        const t = this.participants.push(e);
        return $i(() => t());
    }
    async participate(e, t, i, r) {
        const s = this.configurationService.getValue("files.participants.timeout");
        if (typeof s == "number" && !(s <= 0)) {
            for (const o of this.participants) {
                try {
                    await o.participate(e, t, i, s, r);
                } catch (a) {
                    this.logService.warn(a);
                }
            }
        }
    }
    dispose() {
        this.participants.clear();
        super.dispose();
    }
};
fka = __decorate([__param(0, Rr), __param(1, Fn)], fka);
