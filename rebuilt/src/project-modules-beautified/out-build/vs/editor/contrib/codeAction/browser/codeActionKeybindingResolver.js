"use strict";

// Module: out-build/vs/editor/contrib/codeAction/browser/codeActionKeybindingResolver.js
// Offset: 4168750 (bundle byte offset)
// Size: 994 bytes
QY();
L0();
mve();
BW();
ka();
n$o = class {
    static {
        l5c = this;
    }
    static {
        this.codeActionCommands = [l9o, a9o, u9o, d9o, h9o];
    }
    constructor(e) {
        this.keybindingService = e;
    }
    getResolver() {
        const e = new Ob(() => this.keybindingService.getKeybindings().filter(t => l5c.codeActionCommands.indexOf(t.command) >= 0).filter(t => t.resolvedKeybinding).map(t => {
            let i = t.commandArgs;
            if (t.command === d9o) {
                i = {
                    kind: FA.SourceOrganizeImports.value
                };
            } else if (t.command === h9o) {
                i = {
                    kind: FA.SourceFixAll.value
                };
            }
            return {
                resolvedKeybinding: t.resolvedKeybinding,
                ...e5n.fromUser(i, {
                    kind: p0.None,
                    apply: "never"
                })
            };
        }));
        return t => {
            if (t.kind) {
                return this.bestKeybindingForCodeAction(t, e.value)?.resolvedKeybinding;
            }
        };
    }
    bestKeybindingForCodeAction(e, t) {
        if (!e.kind) {
            return;
        }
        const i = new p0(e.kind);
        return t.filter(r => r.kind.contains(i)).filter(r => r.preferred ? e.isPreferred : true).reduceRight((r, s) => r ? r.kind.contains(s.kind) ? s : r : s, undefined);
    }
};
n$o = l5c = __decorate([__param(0, mo)], n$o);
