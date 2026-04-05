"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/asyncOperationRegistry.js
// Offset: 26901799 (bundle byte offset)
// Size: 1029 bytes
rt();
Er();
Wt();
Htt = xi("asyncOperationRegistry");
JFg = class extends at {
    constructor() {
        super();
        this._activeOperations = new Map();
    }
    enter(n, e, t) {
        let i = this._activeOperations.get(n);
        if (!i) {
            i = new Map();
            this._activeOperations.set(n, i);
        }
        const r = i.get(e);
        const s = r?.count ?? 0;
        i.set(e, {
            count: s + 1,
            metadata: t ? {
                ...t,
                enteredAt: t.enteredAt ?? Date.now()
            } : r?.metadata
        });
    }
    exit(n, e) {
        const t = this._activeOperations.get(n);
        if (t) {
            const i = t.get(e);
            const r = i?.count ?? 0;
            if (r <= 1) {
                t.delete(e);
            } else {
                t.set(e, {
                    count: r - 1,
                    metadata: i?.metadata
                });
            }
            if (t.size === 0) {
                this._activeOperations.delete(n);
            }
        }
    }
    getActiveOperations(n) {
        const e = this._activeOperations.get(n);
        if (e) {
            return Array.from(e.keys());
        } else {
            return [];
        }
    }
    getOperationMetadata(n, e) {
        return this._activeOperations.get(n)?.get(e)?.metadata;
    }
    getActiveOperationsWithMetadata(n) {
        const e = this._activeOperations.get(n);
        if (e) {
            return Array.from(e.entries()).map(([t, i]) => ({
                location: t,
                metadata: i.metadata
            }));
        } else {
            return [];
        }
    }
    clear(n) {
        this._activeOperations.delete(n);
    }
};
Vi(Htt, JFg, 1);
