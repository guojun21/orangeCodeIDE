"use strict";

// Module: out-build/vs/workbench/services/authentication/browser/authenticationUsageService.js
// Offset: 32642982 (bundle byte offset)
// Size: 5749 bytes
vr();
rt();
Er();
Wt();
jr();
Rl();
kr();
SU();
h7e = xi("IAuthenticationUsageService");
HEa = class extends at {
    constructor(e, t, i, r) {
        super();
        this._storageService = e;
        this._authenticationService = t;
        this._logService = i;
        this._queue = new yoe();
        this._extensionsUsingAuth = new Set();
        const s = r.trustedExtensionAuthAccess;
        if (Array.isArray(s)) {
            for (const o of s) {
                this._extensionsUsingAuth.add(o);
            }
        } else if (s) {
            for (const o of Object.values(s)) {
                for (const a of o) {
                    this._extensionsUsingAuth.add(a);
                }
            }
        }
        this._register(this._authenticationService.onDidRegisterAuthenticationProvider(o => this._queue.queue(() => this._addExtensionsToCache(o.id))));
    }
    async initializeExtensionUsageCache() {
        await this._queue.queue(() => Promise.all(this._authenticationService.getProviderIds().map(e => this._addExtensionsToCache(e))));
    }
    async extensionUsesAuth(e) {
        await this._queue.whenIdle();
        return this._extensionsUsingAuth.has(e);
    }
    readAccountUsages(e, t) {
        const i = `${e}-${t}-usages`;
        const r = this._storageService.get(i, -1);
        let s = [];
        if (r) {
            try {
                s = JSON.parse(r);
            } catch {}
        }
        return s;
    }
    removeAccountUsage(e, t) {
        const i = `${e}-${t}-usages`;
        this._storageService.remove(i, -1);
    }
    addAccountUsage(e, t, i, r, s) {
        const o = `${e}-${t}-usages`;
        const a = this.readAccountUsages(e, t);
        const l = a.findIndex(u => u.extensionId === r);
        if (l > -1) {
            a.splice(l, 1, {
                extensionId: r,
                extensionName: s,
                scopes: i,
                lastUsed: Date.now()
            });
        } else {
            a.push({
                extensionId: r,
                extensionName: s,
                scopes: i,
                lastUsed: Date.now()
            });
        }
        this._storageService.store(o, JSON.stringify(a), -1, 1);
        this._extensionsUsingAuth.add(r);
    }
    async _addExtensionsToCache(e) {
        try {
            const t = await this._authenticationService.getAccounts(e);
            for (const i of t) {
                const r = this.readAccountUsages(e, i.label);
                for (const s of r) {
                    this._extensionsUsingAuth.add(s.extensionId);
                }
            }
        } catch (t) {
            this._logService.error(t);
        }
    }
};
HEa = __decorate([__param(0, Hi), __param(1, WF), __param(2, Rr), __param(3, za)], HEa);
Vi(h7e, HEa, 1);
