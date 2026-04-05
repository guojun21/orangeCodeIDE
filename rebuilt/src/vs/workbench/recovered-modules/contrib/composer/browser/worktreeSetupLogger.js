"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/worktreeSetupLogger.js
// Offset: 30439462 (bundle byte offset)
// Size: 2989 bytes
mR();
Ws();
h0a = class kto {
    static {
        this.CHANNEL_ID = "cursor.worktreesSetup";
    }
    static {
        this.CHANNEL_LABEL = "Worktrees Setup";
    }
    constructor(e) {
        this.outputService = e;
        this.outputChannelRegistered = false;
    }
    ensureOutputChannel() {
        if (!this.outputChannelRegistered) {
            const e = Di.as(TU.OutputChannels);
            if (!e.getChannel(kto.CHANNEL_ID)) {
                e.registerChannel({
                    id: kto.CHANNEL_ID,
                    label: kto.CHANNEL_LABEL,
                    log: false
                });
            }
            this.outputChannelRegistered = true;
        }
        this.outputChannel ||= this.outputService.getChannel(kto.CHANNEL_ID);
    }
    info(e, t) {
        this.ensureOutputChannel();
        if (!this.outputChannel) {
            return;
        }
        const i = new Date().toISOString();
        this.outputChannel.append(`[${i}] ${e}
`);
        if (t !== undefined) {
            try {
                const r = JSON.stringify(t);
                this.outputChannel.append(`${r}
`);
            } catch {}
        }
    }
    error(e, t) {
        this.ensureOutputChannel();
        if (!this.outputChannel) {
            return;
        }
        const i = new Date().toISOString();
        this.outputChannel.append(`[${i}] ERROR: ${e}
`);
        if (t !== undefined) {
            try {
                const r = typeof t == "string" ? t : t instanceof Error ? `${t.name}: ${t.message}` : JSON.stringify(t);
                this.outputChannel.append(`${r}
`);
            } catch {}
        }
    }
    append(e) {
        this.ensureOutputChannel();
        if (this.outputChannel) {
            this.outputChannel.append(e);
            if (!e.endsWith(`
`)) {
                this.outputChannel.append(`
`);
            }
        }
    }
};
