"use strict";

// Module: out-build/vs/workbench/services/workingCopy/common/storedFileWorkingCopySaveParticipant.js
// Offset: 31215200 (bundle byte offset)
// Size: 1182 bytes
vr();
Po();
jr();
Xg();
rt();
l2();
_s();
So();
Ht();
bka = class extends at {
    get length() {
        return this.saveParticipants.size;
    }
    constructor(e, t) {
        super();
        this.logService = e;
        this.progressService = t;
        this.saveParticipants = new WD();
    }
    addSaveParticipant(e) {
        const t = this.saveParticipants.push(e);
        return $i(() => t());
    }
    async participate(e, t, i, r) {
        const s = new Wc(r);
        e.model?.pushStackElement();
        i.report({
            message: _(14982, null)
        });
        let o = false;
        await this.progressService.withProgress({
            priority: k1.URGENT,
            location: 15,
            cancellable: _(14983, null),
            delay: e.isDirty() ? 5000 : 3000
        }, async a => {
            const l = Array.from(this.saveParticipants).sort((u, d) => {
                const m = u.ordinal ?? 0;
                const p = d.ordinal ?? 0;
                return m - p;
            });
            for (const u of l) {
                if (s.token.isCancellationRequested || e.isDisposed()) {
                    break;
                }
                try {
                    const d = u.participate(e, t, a, s.token);
                    await WP(d, s.token);
                } catch (d) {
                    if (bf(d)) {
                        if (!s.token.isCancellationRequested) {
                            s.cancel();
                            o = true;
                        }
                    } else {
                        this.logService.error(d);
                    }
                }
            }
        }, () => {
            s.cancel();
        });
        e.model?.pushStackElement();
        s.dispose();
        if (o) {
            throw new vf();
        }
    }
    dispose() {
        this.saveParticipants.clear();
        super.dispose();
    }
};
bka = __decorate([__param(0, Rr), __param(1, Ib)], bka);
