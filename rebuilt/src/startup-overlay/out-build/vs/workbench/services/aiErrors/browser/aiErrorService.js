"use strict";

// Module: out-build/vs/workbench/services/aiErrors/browser/aiErrorService.js
// Offset: 30356784 (bundle byte offset)
// Size: 6620 bytes
mD();
qp();
hs();
Er();
Wt();
Px();
rmu();
Rb();
ml();
iM();
S9();
vE();
rce();
Qkt = xi("aiErrorService");
e0a = class {
    static {
        Bwi = this;
    }
    static {
        this.LOGIN_DEBUG_LOG_ID = "login-error-debug";
    }
    constructor(e, t, i, r, s, o, a) {
        this.layoutService = e;
        this.instantiationService = t;
        this.cursorAuthenticationService = i;
        this.commandService = r;
        this.uiOverlayService = s;
        this.structuredLogService = o;
        this.clientDebugLogService = a;
        this.rerunTimestamps = [];
        this.handlers = [];
    }
    logLoginDebug(e, t) {
        const i = new Date().toISOString();
        const r = JSON.stringify({
            timestamp: i,
            message: e,
            ...t
        });
        this.clientDebugLogService.log(Bwi.LOGIN_DEBUG_LOG_ID, r);
    }
    addErrorPopupHandler(e) {
        this.handlers.push(e);
    }
    removeErrorPopupHandler(e) {
        this.handlers = this.handlers.filter(t => t !== e);
    }
    tryRerun(e) {
        const t = this.okToRerun();
        this.rerunTimestamps.push(Date.now());
        if ((e !== true || t) && this.saveRerunFunc !== undefined) {
            this.saveRerunFunc();
        }
    }
    okToRerun() {
        const i = Date.now();
        const r = this.rerunTimestamps.slice(-2);
        const s = r.length < 2 || !r.every(o => i - o < 5000);
        this.rerunTimestamps = this.rerunTimestamps.slice(-2);
        return s;
    }
    shouldShowImmediateErrorMessage(e) {
        if (!(e instanceof fA) || e.code === j0.Canceled) {
            return false;
        }
        const t = BU(e);
        if (!t) {
            return true;
        }
        const i = t.error;
        return i !== yc.NOT_LOGGED_IN && i !== yc.AGENT_REQUIRES_LOGIN && i !== yc.PRO_USER_USAGE_LIMIT && i !== yc.FREE_USER_USAGE_LIMIT && i !== yc.FREE_USER_RATE_LIMIT_EXCEEDED && i !== yc.PRO_USER_RATE_LIMIT_EXCEEDED && i !== yc.BAD_API_KEY && i !== yc.BAD_MODEL_NAME && i !== yc.AUTH_TOKEN_EXPIRED && i !== yc.MAX_TOKENS && t.details?.shouldShowImmediateError !== false;
    }
    showImmediateErrorMessage(e, t, i, r, s, o, a) {
        if (t?.details?.shouldShowImmediateError === false) {
            return;
        }
        if (!t?.isExpected) {
            const d = r.rawMessage ?? "unknown error";
            const m = {
                bugId: s,
                bug: `automatic-from-connection-error.

request ID:${s}

error:${JSON.stringify(t?.error)}

error:${JSON.stringify(r)}`,
                priority: RW.MEDIUM,
                protoURL: i,
                contactEmail: "automatic-from-connection-error",
                connectionErrorRaw: d,
                failingRequestID: s,
                connectErrorCode: r.code,
                errorDetailCode: e,
                errorDetailTitle: t?.details?.title,
                errorDetailDetail: t?.details?.detail
            };
            const p = r.cause;
            this.structuredLogService.warn("transport", "Automatic bug report submitted for unexpected connection error", {
                requestId: s,
                source: o,
                protoURL: i,
                connectErrorCode: j0[r.code],
                errorDetailCode: e !== undefined ? yc[e] : undefined,
                errorDetailTitle: t?.details?.title,
                errorMessage: r.message,
                causeCode: p?.code,
                causeSyscall: p?.syscall,
                causeErrno: String(p?.errno)
            });
            this.commandService.executeCommand(MFn, m);
        }
        let l;
        switch (e) {
            case yc.OPENAI_RATE_LIMIT_EXCEEDED:
                l = "openai_rate_limit";
                break;
            case yc.OPENAI_ACCOUNT_LIMIT_EXCEEDED:
                l = "cursor_rate_limit";
                break;
            case yc.SLASH_EDIT_FILE_TOO_LONG:
                l = "fast_apply_large_file";
                break;
            case yc.FILE_UNSUPPORTED:
                l = "fast_apply_file_unsupported";
                break;
            case yc.CLAUDE_IMAGE_TOO_LARGE:
                l = "claude_image_too_large";
                break;
            case yc.API_KEY_RATE_LIMIT:
                l = "api_key_rate_limit";
                break;
            case yc.OPENAI:
                l = "openai";
                break;
            case yc.GPT_4_VISION_PREVIEW_RATE_LIMIT:
                l = "gpt_4_vision_rate_limit";
                break;
            case yc.MODEL_BLOCKED:
                l = "model_blocked";
                break;
            default:
                l = "internet";
        }
        let u = l === "internet" ? {
            case: l,
            generationUUID: s,
            errorCode: undefined,
            source: o,
            error: t
        } : {
            case: l,
            source: o,
            error: t
        };
        this.uiOverlayService.showErrorMetadata(u);
    }
    handleError(e, t, i, r, s, o) {
        const a = BU(e);
        console.log("error", e);
        console.log("errordetail", a);
        const l = a?.error;
        const u = a;
        this.saveRerunFunc = o;
        if (this.shouldShowImmediateErrorMessage(e)) {
            this.showImmediateErrorMessage(l, u, r, e, i, s, o);
            return;
        }
        if (l === yc.NOT_LOGGED_IN || l === yc.AGENT_REQUIRES_LOGIN) {
            this.logLoginDebug("NOT_LOGGED_IN error received", {
                errorType: l === yc.NOT_LOGGED_IN ? "NOT_LOGGED_IN" : "AGENT_REQUIRES_LOGIN",
                source: s,
                protoURL: r,
                generationUUID: i,
                model: t?.modelName,
                errorMessage: e.message,
                errorCode: j0[e.code],
                errorDetailTitle: a?.details?.title,
                errorDetailDetail: a?.details?.detail,
                hasRerunCallback: !!o
            });
            this.logLoginDebug("Attempting token refresh via cursorAuth.triggerTokenRefresh");
            this.commandService.executeCommand("cursorAuth.triggerTokenRefresh", true).then(async () => {
                await new Promise(g => setTimeout(g, 100));
                const d = await this.cursorAuthenticationService.getAccessToken();
                const m = d ? this.cursorAuthenticationService.isTokenExpired(d) : true;
                this.logLoginDebug("Token refresh completed", {
                    hasNewAccessToken: !!d,
                    isTokenExpired: m,
                    hasRerunCallback: !!o,
                    tokenLength: d ? d.length : 0
                });
                if (o && d && !m) {
                    const g = this.okToRerun();
                    this.rerunTimestamps.push(Date.now());
                    this.logLoginDebug("Token valid, attempting rerun", {
                        okToRerun: g,
                        rerunTimestampsCount: this.rerunTimestamps.length
                    });
                    if (g) {
                        o();
                        return;
                    }
                    this.logLoginDebug("Rerun rate-limited, showing login dialog");
                } else {
                    this.logLoginDebug("Token refresh did not help", {
                        reason: d ? m ? "token_expired" : "no_rerun_callback" : "no_token"
                    });
                }
                const p = t?.modelName ?? "undefined";
                this.logLoginDebug("Showing login dialog", {
                    model: p,
                    handlersCount: this.handlers.length
                });
                this.handlers.forEach(g => g(new Ynt(p, l, () => {
                    this.logLoginDebug("Login dialog rerun callback triggered");
                    if (o) {
                        const f = this.okToRerun();
                        this.rerunTimestamps.push(Date.now());
                        this.logLoginDebug("Rerun from dialog", {
                            okToRerun: f
                        });
                        if (f) {
                            o();
                        }
                    }
                }), this.layoutService, this.instantiationService));
                this.clientDebugLogService.upload(Bwi.LOGIN_DEBUG_LOG_ID);
            }).catch(d => {
                this.logLoginDebug("Token refresh failed with error", {
                    refreshError: String(d)
                });
                const m = t?.modelName ?? "undefined";
                this.handlers.forEach(p => p(new Ynt(m, l, () => {
                    this.logLoginDebug("Login dialog rerun callback triggered (after refresh failure)");
                    if (o) {
                        const g = this.okToRerun();
                        this.rerunTimestamps.push(Date.now());
                        this.logLoginDebug("Rerun from dialog (after refresh failure)", {
                            okToRerun: g
                        });
                        if (g) {
                            o();
                        }
                    }
                }), this.layoutService, this.instantiationService));
                this.clientDebugLogService.upload(Bwi.LOGIN_DEBUG_LOG_ID);
            });
        } else if (l === yc.PRO_USER_USAGE_LIMIT || l === yc.FREE_USER_USAGE_LIMIT || l === yc.FREE_USER_RATE_LIMIT_EXCEEDED || l === yc.PRO_USER_RATE_LIMIT_EXCEEDED || l === yc.BAD_API_KEY || l === yc.BAD_MODEL_NAME) {
            const d = t?.modelName ?? "undefined";
            this.handlers.forEach(m => m(new Ynt(d, l, () => {
                if (o) {
                    const p = this.okToRerun();
                    this.rerunTimestamps.push(Date.now());
                    if (p) {
                        o();
                    }
                }
            }), this.layoutService, this.instantiationService));
        } else if (l === yc.AUTH_TOKEN_EXPIRED) {
            this.cursorAuthenticationService.refreshAuthentication().then(async () => {
                const d = await this.cursorAuthenticationService.getAccessToken();
                if (o && d && !this.cursorAuthenticationService.isTokenExpired(d)) {
                    const m = this.okToRerun();
                    this.rerunTimestamps.push(Date.now());
                    if (m) {
                        o();
                    }
                } else {
                    this.uiOverlayService.showErrorMetadata({
                        case: "internet",
                        generationUUID: i,
                        source: s,
                        error: a,
                        errorCode: undefined
                    });
                }
            });
        } else if (l !== yc.MAX_TOKENS) {
            this.showImmediateErrorMessage(l, u, r, e, i, "other", o);
        }
    }
};
e0a = Bwi = __decorate([__param(0, vS), __param(1, ln), __param(2, wg), __param(3, fr), __param(4, YD), __param(5, Kk), __param(6, tie)], e0a);
Vi(Qkt, e0a, 1);
