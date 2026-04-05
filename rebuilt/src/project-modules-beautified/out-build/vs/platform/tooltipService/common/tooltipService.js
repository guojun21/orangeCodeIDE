"use strict";

// Module: out-build/vs/platform/tooltipService/common/tooltipService.js
// Offset: 956158 (bundle byte offset)
// Size: 10947 bytes
Er();
Wt();
rt();
kr();
ioA();
iw();
hs();
ml();
dr();
W4o = "tooltipServicePipelines";
nEc = "lastShownTooltipTime";
uhh = 14400000;
dhh = 1209600000;
hhh = 3600000;
iEc = false;
rRe = false;
vft = false;
mhh = false;
tOn = [];
FY = xi("tooltipService");
Q4o = class extends at {
    constructor(e, t) {
        super();
        this._storageService = e;
        this._commandService = t;
        this._sequenceConfigToSequenceHashMap = new Map();
        this._initializedState = false;
        this._numActivePromises = 0;
        this._pipelineConfigs = lhh;
        this._loadEventPipelineStates();
    }
    _initializeEmptyStates() {
        const e = {
            state: []
        };
        this._pipelineConfigs.forEach(t => {
            e.state.push({
                name: t.name,
                disableStatus: undefined,
                createdAt: Date.now()
            });
        });
        this.pipelinesState_persistent = e;
        this._initializeEmptySequenceState();
    }
    _initializeEmptySequenceState() {
        const e = {
            sequences: []
        };
        this._pipelineConfigs.forEach(t => {
            t.showOn.sequences.forEach(i => {
                e.sequences.push({
                    activeEventIndices: [],
                    sequenceHash: this._getSequenceConfigHash(i)
                });
            });
            t.disableOn.sequences.forEach(i => {
                e.sequences.push({
                    activeEventIndices: [],
                    sequenceHash: this._getSequenceConfigHash(i)
                });
            });
        });
        this._sequenceStates_nonPersistent = e;
    }
    _getSavedEventPipelineStateByName(e) {
        if (vft) {
            return;
        }
        const t = this._storageService.get(W4o, -1);
        if (!t || t === "") {
            if (rRe) {
                console.log("[Tooltip][Initializing Empty Pipeline State]");
            }
            this._initializeEmptyStates();
            return;
        }
        return JSON.parse(t).state.find(s => s.name === e);
    }
    _updatePipelineStateIfDisabledInBackgroundIsHigher(e) {
        if (vft) {
            return this.pipelinesState_persistent?.state.find(o => o.name === e);
        }
        if (this.pipelinesState_persistent === undefined) {
            return;
        }
        const t = this.pipelinesState_persistent.state.findIndex(o => o.name === e);
        if (t === -1) {
            return;
        }
        const i = this._getSavedEventPipelineStateByName(e);
        const r = i?.disableStatus?.disabledUntil;
        const s = this.pipelinesState_persistent.state[t].disableStatus?.disabledUntil;
        if (i === undefined || r === undefined) {
            return this.pipelinesState_persistent.state[t];
        } else if (s !== undefined && s >= r) {
            return this.pipelinesState_persistent.state[t];
        } else {
            this.pipelinesState_persistent.state[t] = i;
            return i;
        }
    }
    _loadEventPipelineStates() {
        try {
            const e = this._storageService.get(W4o, -1);
            if (vft || !e || e === "") {
                if (rRe) {
                    console.log("[Tooltip][Initializing Empty Pipeline State]");
                }
                this._initializeEmptyStates();
                return;
            }
            if (rRe) {
                console.log("[Tooltip][Loading Pipeline State]");
            }
            const t = JSON.parse(e);
            if (rRe) {
                console.log("[Tooltip][Current Pipelines State]", t);
            }
            const i = {
                state: []
            };
            for (let r of this._pipelineConfigs) {
                const s = t.state.find(o => o.name === r.name);
                if (s) {
                    i.state.push(s);
                } else {
                    i.state.push({
                        name: r.name,
                        disableStatus: undefined,
                        createdAt: Date.now()
                    });
                }
            }
            this.pipelinesState_persistent = i;
        } catch (e) {
            if (rRe) {
                console.log("[Tooltip][Error Loading Pipeline State]", e);
            }
            this._initializeEmptyStates();
        } finally {
            this._initializeEmptySequenceState();
            this._initializedState = true;
        }
    }
    _getSequenceConfigHash(e) {
        const t = {
            ...e
        };
        if ("debug" in t) {
            delete t.debug;
        }
        return VC(JSON.stringify(t));
    }
    _getSequenceState(e) {
        const t = {
            ...e
        };
        if ("debug" in t) {
            delete t.debug;
        }
        let i = this._sequenceConfigToSequenceHashMap.get(t);
        if (i === undefined) {
            i = this._getSequenceConfigHash(e);
            this._sequenceConfigToSequenceHashMap.set(e, i);
        }
        return this._sequenceStates_nonPersistent.sequences.find(r => r.sequenceHash === i);
    }
    _resetSequence(e) {
        const t = this._getSequenceState(e);
        if (t) {
            t.activeEventIndices = [];
        }
    }
    _savePipelineState() {
        if (!vft) {
            if (rRe) {
                console.log("[Tooltip][Saving Pipeline State]", this.pipelinesState_persistent);
            }
            this._storageService.store(W4o, JSON.stringify(this.pipelinesState_persistent), -1, 1);
            this._lastStateSaveTime = Date.now();
        }
    }
    _maybeSavePipelineState() {
        if (!this._lastStateSaveTime || !(Date.now() - this._lastStateSaveTime < hhh)) {
            this._savePipelineState();
        }
    }
    _triggerPipeline(e) {
        if (this.pipelinesState_persistent === undefined) {
            return;
        }
        e.showOn.sequences.forEach(i => this._resetSequence(i));
        const t = this.pipelinesState_persistent.state.find(i => i.name === e.name);
        if (t) {
            t.disableStatus = {
                disabledUntil: Date.now() + e.showOn.gracePeriod_ms
            };
            this._commandService.executeCommand(qCc, {
                location: e.popup.location,
                header: e.popup.header,
                subheader: e.popup.subheader,
                name: e.name
            });
            console.log(`[Tooltip][Show Tooltip]
${e.popup.header}
---
${e.popup.subheader}`);
            if (!iEc) {
                this._storageService.store(nEc, new Date().getTime().toString(), -1, 1);
            }
            if (!vft) {
                this._savePipelineState();
            }
        }
    }
    _disablePipeline(e) {
        if (this.pipelinesState_persistent === undefined) {
            return;
        }
        const t = this._pipelineConfigs.find(s => s.name === e);
        let i = this.pipelinesState_persistent.state.find(s => s.name === e);
        if (!t || !i || (rRe && console.log(`[Tooltip][Disable Tooltip]
${t.name}`), i = this._updatePipelineStateIfDisabledInBackgroundIsHigher(e), !i)) {
            return;
        }
        const r = Date.now() + t.disableOn.gracePeriod_ms;
        if (i?.disableStatus === undefined || !(i.disableStatus.disabledUntil > r)) {
            t.showOn.sequences.forEach(s => this._resetSequence(s));
            t.disableOn.sequences.forEach(s => this._resetSequence(s));
            i.disableStatus = {
                disabledUntil: r
            };
            this._savePipelineState();
        }
    }
    _processEventInSequenceEvent(e, t) {
        if (typeof t == "string") {
            return {
                isEventAccepted: e.startsWith(t),
                shouldAllowMultipleOfCurrentEvent: false,
                isSkippingAllowed: false
            };
        }
        if (t.length == 2 && t[0] === "*" && t[1] === "*") {
            return {
                isEventAccepted: true,
                shouldAllowMultipleOfCurrentEvent: true,
                isSkippingAllowed: false
            };
        }
        if (t.length === 3 && t.filter(a => a === "*").length === 2 && t.filter(a => a === "_").length === 1) {
            return {
                isEventAccepted: true,
                shouldAllowMultipleOfCurrentEvent: true,
                isSkippingAllowed: true
            };
        }
        if (t.length === 1 && t[0] === "*") {
            return {
                isEventAccepted: true,
                shouldAllowMultipleOfCurrentEvent: false,
                isSkippingAllowed: false
            };
        }
        if (t.length == 2 && t.filter(a => a === "*").length === 1 && t.filter(a => a === "_").length === 1) {
            return {
                isEventAccepted: true,
                shouldAllowMultipleOfCurrentEvent: false,
                isSkippingAllowed: true
            };
        }
        const i = t.includes("!");
        const r = t.includes("*");
        const s = t.includes("_");
        return {
            isEventAccepted: i ? !t.some(a => e.startsWith(a)) : t.some(a => e.startsWith(a)),
            shouldAllowMultipleOfCurrentEvent: r,
            isSkippingAllowed: s
        };
    }
    _processEventInSequence(e, t, i, r, s) {
        const o = this._getSequenceState(t);
        if (!o) {
            return;
        }
        if (o.activeEventIndices.length === 0) {
            o.activeEventIndices.push(0);
        }
        if (o.startTime && Date.now() - o.startTime > t.timeout_ms) {
            this._resetSequence(t);
        }
        const a = o.activeEventIndices;
        let l = false;
        let u = false;
        let d = [];
        let m = [];
        for (let p = 0; p < a.length; p++) {
            const g = a[p];
            const f = t.events[g];
            const {
                shouldAllowMultipleOfCurrentEvent: A,
                isEventAccepted: w,
                isSkippingAllowed: C
            } = this._processEventInSequenceEvent(i, f);
            if (C) {
                if (g + 1 === t.events.length) {
                    u = true;
                    r();
                    break;
                }
                if (!a.includes(g + 1)) {
                    a.push(g + 1);
                }
            }
            if (w && (l = true, o.startTime === undefined && (o.activeEventIndices.length === 1 && o.activeEventIndices[0] === 0 && !A || o.activeEventIndices.some(x => x > 0)) && (o.startTime = Date.now()), o.activeEventIndices.includes(g + 1) || (tOn.includes(e) && t.debug && console.log(`[Accepted Event ${i} as Event ${f}. Adding index ${g + 1}]`), d.push(g + 1)), A || m.push(p), g + 1 === t.events.length)) {
                u = true;
                r();
                break;
            }
        }
        if (!u) {
            m.sort((p, g) => g - p);
            for (const p of m) {
                o.activeEventIndices.splice(p, 1);
                if (tOn.includes(e) && t.debug) {
                    console.log("[Finished Removing]", o.activeEventIndices);
                }
            }
            for (const p of d) {
                if (!o.activeEventIndices.includes(p)) {
                    o.activeEventIndices.push(p);
                }
                if (tOn.includes(e) && t.debug) {
                    console.log("[Finished Adding]", o.activeEventIndices);
                }
            }
            if (!l) {
                if (tOn.includes(e) && t.debug) {
                    console.log(`[Failed Sequence], ${JSON.stringify(t)}`);
                }
                s();
            }
        }
    }
    async _registerEvent(e) {
        if (!!this._initializedState && this.pipelinesState_persistent !== undefined) {
            if (rRe) {
                console.log("[Tooltip][Registering event]", e);
            }
            for (const t of this._pipelineConfigs) {
                let i = this.pipelinesState_persistent.state.find(o => o.name === t.name);
                if (i === undefined) {
                    continue;
                }
                for (const o of t.disableOn.sequences) {
                    this._processEventInSequence(t.name, o, e, () => {
                        this._disablePipeline(t.name);
                    }, () => {
                        this._resetSequence(o);
                    });
                }
                if (i.disableStatus) {
                    if (i.disableStatus.disabledUntil < Date.now()) {
                        i.disableStatus = undefined;
                        t.showOn.sequences.forEach(o => this._resetSequence(o));
                    } else {
                        continue;
                    }
                }
                const r = i.createdAt ? Date.now() - i.createdAt : 0;
                const s = t.initialDisabledPeriod_ms ?? dhh;
                if (!mhh && r <= s) {
                    if (rRe) {
                        console.log("[Tooltip][Initial Disable Period]", t.name, r, s);
                    }
                    continue;
                }
                for (const o of t.showOn.sequences) {
                    this._processEventInSequence(t.name, o, e, () => {
                        i = this._updatePipelineStateIfDisabledInBackgroundIsHigher(t.name);
                        if (i?.disableStatus !== undefined && i.disableStatus.disabledUntil > Date.now()) {
                            return;
                        }
                        const a = Number(this._storageService.get(nEc, -1));
                        const l = Date.now() - a;
                        if (iEc || l > uhh || isNaN(l) || isNaN(a)) {
                            this._triggerPipeline(t);
                        }
                    }, () => {
                        this._resetSequence(o);
                    });
                }
            }
            if (!vft) {
                this._maybeSavePipelineState();
            }
        }
    }
    async registerEvent(e) {
        if (this._numActivePromises > 1000) {
            console.error("Too many active promises from tooltipservice. Possible leak");
            return;
        }
        Promise.resolve().then(async () => {
            const t = new Promise((i, r) => setTimeout(() => r(new Error("Timeout")), 1));
            this._numActivePromises++;
            Promise.race([t, new Promise(i => {
                this._registerEvent(e).then(() => {
                    i(true);
                });
            })]).then(() => {
                this._numActivePromises--;
            }).catch(i => {
                console.error(i);
                this._numActivePromises--;
            });
        }).catch(t => {
            console.error("tooltipservice timeout!");
        });
    }
    async registerUserCloseTooltip(e) {
        if (this.pipelinesState_persistent === undefined) {
            return;
        }
        const t = this.pipelinesState_persistent.state.find(i => i.name === e);
        if (t !== undefined) {
            t.disableStatus = {
                disabledUntil: Date.now() + 315360000000
            };
            this._savePipelineState();
        }
    }
};
Q4o = __decorate([__param(0, Hi), __param(1, fr)], Q4o);
Vi(FY, Q4o, 1);
Dt(class extends rn {
    constructor() {
        super({
            id: HCc,
            title: "Register Close Tooltip",
            category: "Tooltip",
            f1: false
        });
    }
    run(n, e) {
        const {
            tooltipName: t
        } = e;
        n.get(FY).registerUserCloseTooltip(t);
    }
});
