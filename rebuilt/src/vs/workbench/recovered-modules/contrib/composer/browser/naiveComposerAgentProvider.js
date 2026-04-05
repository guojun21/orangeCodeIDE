"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/naiveComposerAgentProvider.js
// Offset: 30406452 (bundle byte offset)
// Size: 3283 bytes
rkt();
yn();
rt();
Jk();
Kwi();
aie();
$wi();
BSf();
RSf = class {
    constructor(n, e, t, i, r, s, o, a, l, u) {
        this.composerDataHandle = e;
        this.persistedData = t;
        this.instantiationService = r;
        this.composerEffectiveAllowlistService = u;
        this.disposables = new Ut();
        const m = s.getWorkspace().folders.map(C => C.uri.fsPath);
        const p = m.length > 0 ? m : [""];
        this.permissionsEmitter = this.disposables.add(new Qe());
        const g = () => {
            const C = this.composerEffectiveAllowlistService.getEffectiveTerminalAllowlist().map(H => `Shell(${H})`);
            const x = this.composerEffectiveAllowlistService.getEffectiveMcpAllowlist().map(H => `Mcp(${H})`);
            const I = a.getModeAutoRun("agent");
            const B = a.getModeFullAutoRun("agent");
            const R = a.getComposerUnifiedMode(n) === "chat";
            let N;
            if (B && !R) {
                N = "unrestricted";
            } else if (I) {
                N = "allowlist";
            } else {
                C.length = 0;
                x.length = 0;
                N = "ask-every-time";
            }
            const M = {
                type: "insecure_none"
            };
            return {
                allow: [...C, ...x],
                deny: [],
                approvalMode: N,
                userConfiguredPolicy: M
            };
        };
        let f = JSON.stringify(g());
        const A = () => {
            setTimeout(() => {
                const C = g();
                const x = JSON.stringify(C);
                if (x !== f) {
                    f = x;
                    this.permissionsEmitter.fire(C);
                }
            }, 0);
        };
        const w = o.onChangeEffectManuallyDisposed({
            deps: [() => o.applicationUserPersistentStorage.composerState.yoloCommandAllowlist, () => wU(), () => o.applicationUserPersistentStorage.composerState.modes4?.find(C => C.id === "agent")?.autoRun ?? false, () => o.applicationUserPersistentStorage.composerState.modes4?.find(C => C.id === "agent")?.fullAutoRun ?? false],
            onChange: A
        });
        this.disposables.add(w);
        this.disposables.add(u.onDidChangePermissionsFile(A));
        this.disposables.add(l.onDidChangeUnifiedMode(C => {
            if (C.composerId === n) {
                A();
            }
        }));
        this.agentHandlePromise = i.createAgent(n, {
            workspacePaths: p,
            state: this.persistedData,
            notifyStateUpdate: C => {
                this.composerDataHandle.setData("agentBackendData", C);
            },
            fileChangeHandler: C => this.instantiationService.invokeFunction(x => x.get(iit).handleFileChange(n, C)),
            approvalHandler: async C => this.instantiationService.invokeFunction(x => x.get(Kkt).handleApprovalRequest(this.composerDataHandle, C)),
            getPermissions: async () => g(),
            onDidChangePermissions: this.permissionsEmitter.event
        });
    }
    async run(n, e) {
        const t = this.composerDataHandle.data.conversationActionManager ?? new RAi();
        const i = new sit(this.instantiationService, this.composerDataHandle, t, e.generationUUID);
        const r = await this.agentHandlePromise;
        let s = e.message;
        if (s.startsWith("/")) {
            s = " " + s;
        }
        const o = e.cursorCommands ?? [];
        if (o.length > 0) {
            const l = o.map(u => `--- Cursor Command: ${u.filename} ---
${u.content}
--- End Command ---`).join(`

`);
            if (l) {
                s = `<cursor_commands>
${l}
</cursor_commands>

${s}`;
            }
        }
        const a = r.run({
            userMessage: s,
            requestId: e.generationUUID,
            userBubbleId: e.userBubbleId,
            previousUserBubbleId: e.previousUserBubbleId,
            images: e.images,
            modelName: e.modelDetails.modelName,
            abortSignal: n.signal
        });
        for await (const l of a) {
            const u = K$.fromBinary(l.buffer);
            await i.sendUpdate(n, u);
        }
    }
};
PSf = class {
    constructor(n, e, t, i, r, s, o) {
        this.agentProviderService = n;
        this.instantiationService = e;
        this.workspaceContextService = t;
        this.reactiveStorageService = i;
        this.composerModesService = r;
        this.composerEventService = s;
        this.composerEffectiveAllowlistService = o;
    }
    loadAgent(n, e, t) {
        return new RSf(n, e, t, this.agentProviderService, this.instantiationService, this.workspaceContextService, this.reactiveStorageService, this.composerModesService, this.composerEventService, this.composerEffectiveAllowlistService);
    }
};
