"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/chatEntitlementService.js
// Offset: 28269049 (bundle byte offset)
// Size: 16306 bytes
U$();
vr();
Po();
yn();
L0();
rt();
Ht();
Ei();
si();
ru();
HA();
Wt();
jr();
Rl();
qq();
kr();
Pa();
SU();
kS();
v0();
_E();
Fc();
Yn();
Vf();
eu();
_r();
Op();
uyi = xi("chatEntitlementService");
(function (n) {
  n[n.Unknown = 1] = "Unknown";
  n[n.Unresolved = 2] = "Unresolved";
  n[n.Available = 3] = "Available";
  n[n.Unavailable = 4] = "Unavailable";
  n[n.Limited = 5] = "Limited";
  n[n.Pro = 6] = "Pro";
})(TT ||= {});
(function (n) {
  n[n.Standard = 1] = "Standard";
  n[n.Disabled = 2] = "Disabled";
  n[n.Installed = 3] = "Installed";
})(Akt ||= {});
SV = {
  extensionId: av.defaultChatAgent?.extensionId ?? "",
  chatExtensionId: av.defaultChatAgent?.chatExtensionId ?? "",
  upgradePlanUrl: av.defaultChatAgent?.upgradePlanUrl ?? "",
  providerId: av.defaultChatAgent?.providerId ?? "",
  enterpriseProviderId: av.defaultChatAgent?.enterpriseProviderId ?? "",
  providerScopes: av.defaultChatAgent?.providerScopes ?? [[]],
  entitlementUrl: av.defaultChatAgent?.entitlementUrl ?? "",
  entitlementSignupLimitedUrl: av.defaultChatAgent?.entitlementSignupLimitedUrl ?? "",
  completionsAdvancedSetting: av.defaultChatAgent?.completionsAdvancedSetting ?? "",
  chatQuotaExceededContext: av.defaultChatAgent?.chatQuotaExceededContext ?? "",
  completionsQuotaExceededContext: av.defaultChatAgent?.completionsQuotaExceededContext ?? ""
};
zva = class extends at {
  constructor(e, t, i, r) {
    super();
    this.contextKeyService = r;
    this._onDidChangeQuotaExceeded = this._register(new Qe());
    this.onDidChangeQuotaExceeded = this._onDidChangeQuotaExceeded.event;
    this._onDidChangeQuotaRemaining = this._register(new Qe());
    this.onDidChangeQuotaRemaining = this._onDidChangeQuotaRemaining.event;
    this._quotas = {
      chatQuotaExceeded: false,
      completionsQuotaExceeded: false,
      quotaResetDate: undefined
    };
    this.ExtensionQuotaContextKeys = {
      chatQuotaExceeded: SV.chatQuotaExceededContext,
      completionsQuotaExceeded: SV.completionsQuotaExceededContext
    };
    this._onDidChangeSentiment = this._register(new Qe());
    this.onDidChangeSentiment = this._onDidChangeSentiment.event;
    this.chatQuotaExceededContextKey = qa.chatQuotaExceeded.bindTo(this.contextKeyService);
    this.completionsQuotaExceededContextKey = qa.completionsQuotaExceeded.bindTo(this.contextKeyService);
    this.onDidChangeEntitlement = In.map(In.filter(this.contextKeyService.onDidChangeContext, o => o.affectsSome(new Set([qa.Entitlement.pro.key, qa.Entitlement.limited.key, qa.Entitlement.canSignUp.key, qa.Entitlement.signedOut.key])), this._store), () => {}, this._store);
    this.onDidChangeSentiment = In.map(In.filter(this.contextKeyService.onDidChangeContext, o => o.affectsSome(new Set([qa.Setup.hidden.key, qa.Setup.installed.key])), this._store), () => {}, this._store);
    if (!t.defaultChatAgent || Eu && !i.remoteAuthority) {
      qa.Setup.hidden.bindTo(this.contextKeyService).set(true);
      return;
    }
    const s = this.context = new Ob(() => this._register(e.createInstance(Kva)));
    this.requests = new Ob(() => this._register(e.createInstance(Vva, s.value, {
      clearQuotas: () => this.clearQuotas(),
      acceptQuotas: o => this.acceptQuotas(o)
    })));
    this.registerListeners();
  }
  get entitlement() {
    if (this.contextKeyService.getContextKeyValue(qa.Entitlement.pro.key) === true) {
      return TT.Pro;
    } else if (this.contextKeyService.getContextKeyValue(qa.Entitlement.limited.key) === true) {
      return TT.Limited;
    } else if (this.contextKeyService.getContextKeyValue(qa.Entitlement.canSignUp.key) === true) {
      return TT.Available;
    } else if (this.contextKeyService.getContextKeyValue(qa.Entitlement.signedOut.key) === true) {
      return TT.Unknown;
    } else {
      return TT.Unresolved;
    }
  }
  get quotas() {
    return this._quotas;
  }
  registerListeners() {
    const e = new Set([this.ExtensionQuotaContextKeys.chatQuotaExceeded]);
    const t = new Set([this.ExtensionQuotaContextKeys.completionsQuotaExceeded]);
    this._register(this.contextKeyService.onDidChangeContext(i => {
      let r = false;
      if (i.affectsSome(e)) {
        const s = this.contextKeyService.getContextKeyValue(this.ExtensionQuotaContextKeys.chatQuotaExceeded);
        if (typeof s == "boolean" && s !== this._quotas.chatQuotaExceeded) {
          this._quotas = {
            ...this._quotas,
            chatQuotaExceeded: s
          };
          r = true;
        }
      }
      if (i.affectsSome(t)) {
        const s = this.contextKeyService.getContextKeyValue(this.ExtensionQuotaContextKeys.completionsQuotaExceeded);
        if (typeof s == "boolean" && s !== this._quotas.completionsQuotaExceeded) {
          this._quotas = {
            ...this._quotas,
            completionsQuotaExceeded: s
          };
          r = true;
        }
      }
      if (r) {
        this.updateContextKeys();
        this._onDidChangeQuotaExceeded.fire();
      }
    }));
  }
  acceptQuotas(e) {
    const t = this._quotas;
    this._quotas = e;
    this.updateContextKeys();
    if (t.chatQuotaExceeded !== this._quotas.chatQuotaExceeded || t.completionsQuotaExceeded !== this._quotas.completionsQuotaExceeded) {
      this._onDidChangeQuotaExceeded.fire();
    }
    if (t.chatRemaining !== this._quotas.chatRemaining || t.completionsRemaining !== this._quotas.completionsRemaining) {
      this._onDidChangeQuotaRemaining.fire();
    }
  }
  clearQuotas() {
    if (this.quotas.chatQuotaExceeded || this.quotas.completionsQuotaExceeded) {
      this.acceptQuotas({
        chatQuotaExceeded: false,
        completionsQuotaExceeded: false,
        quotaResetDate: undefined
      });
    }
  }
  updateContextKeys() {
    this.chatQuotaExceededContextKey.set(this._quotas.chatQuotaExceeded);
    this.completionsQuotaExceededContextKey.set(this._quotas.completionsQuotaExceeded);
  }
  get sentiment() {
    if (this.contextKeyService.getContextKeyValue(qa.Setup.installed.key) === true) {
      return Akt.Installed;
    } else if (this.contextKeyService.getContextKeyValue(qa.Setup.hidden.key) === true) {
      return Akt.Disabled;
    } else {
      return Akt.Standard;
    }
  }
  async update(e) {
    await this.requests?.value.forceResolveEntitlement(undefined, e);
  }
};
zva = __decorate([__param(0, ln), __param(1, za), __param(2, Cc), __param(3, wi)], zva);
Vva = Nnt = class extends at {
  static providerId(e) {
    if (e.getValue(`${SV.completionsAdvancedSetting}.authProvider`) === SV.enterpriseProviderId) {
      return SV.enterpriseProviderId;
    } else {
      return SV.providerId;
    }
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this.context = e;
    this.chatQuotasAccessor = t;
    this.telemetryService = i;
    this.authenticationService = r;
    this.logService = s;
    this.requestService = o;
    this.dialogService = a;
    this.openerService = l;
    this.configurationService = u;
    this.authenticationExtensionsService = d;
    this.lifecycleService = m;
    this.pendingResolveCts = new Wc();
    this.didResolveEntitlements = false;
    this.state = {
      entitlement: this.context.state.entitlement
    };
    this.registerListeners();
    this.resolve();
  }
  registerListeners() {
    this._register(this.authenticationService.onDidChangeDeclaredProviders(() => this.resolve()));
    this._register(this.authenticationService.onDidChangeSessions(e => {
      if (e.providerId === Nnt.providerId(this.configurationService)) {
        this.resolve();
      }
    }));
    this._register(this.authenticationService.onDidRegisterAuthenticationProvider(e => {
      if (e.id === Nnt.providerId(this.configurationService)) {
        this.resolve();
      }
    }));
    this._register(this.authenticationService.onDidUnregisterAuthenticationProvider(e => {
      if (e.id === Nnt.providerId(this.configurationService)) {
        this.resolve();
      }
    }));
    this._register(this.context.onDidChange(() => {
      if (!this.context.state.installed || this.context.state.entitlement === TT.Unknown) {
        this.state = {
          entitlement: this.state.entitlement,
          quotas: undefined
        };
        this.chatQuotasAccessor.clearQuotas();
      }
    }));
  }
  async resolve() {
    this.pendingResolveCts.dispose(true);
    const e = this.pendingResolveCts = new Wc();
    const t = await this.findMatchingProviderSession(e.token);
    if (e.token.isCancellationRequested) {
      return;
    }
    let i;
    if (t) {
      if (this.state.entitlement === TT.Unknown) {
        i = {
          entitlement: TT.Unresolved
        };
      }
    } else {
      this.didResolveEntitlements = false;
      i = {
        entitlement: TT.Unknown
      };
    }
    if (i) {
      this.update(i);
    }
    if (t && !this.didResolveEntitlements) {
      await this.resolveEntitlement(t, e.token);
    }
  }
  async findMatchingProviderSession(e) {
    const t = await this.doGetSessions(Nnt.providerId(this.configurationService));
    if (!e.isCancellationRequested) {
      for (const i of t) {
        for (const r of SV.providerScopes) {
          if (this.scopesMatch(i.scopes, r)) {
            return i;
          }
        }
      }
    }
  }
  async doGetSessions(e) {
    try {
      return await this.authenticationService.getSessions(e);
    } catch {}
    return [];
  }
  scopesMatch(e, t) {
    return e.length === t.length && t.every(i => e.includes(i));
  }
  async resolveEntitlement(e, t) {
    const i = await this.doResolveEntitlement(e, t);
    if (typeof i?.entitlement == "number" && !t.isCancellationRequested) {
      this.didResolveEntitlements = true;
      this.update(i);
    }
    return i;
  }
  async doResolveEntitlement(e, t) {
    if (Nnt.providerId(this.configurationService) === SV.enterpriseProviderId) {
      this.logService.trace("[chat entitlement]: enterprise provider, assuming Pro");
      return {
        entitlement: TT.Pro
      };
    }
    if (t.isCancellationRequested) {
      return;
    }
    const i = await this.request(SV.entitlementUrl, "GET", undefined, e, t);
    if (t.isCancellationRequested) {
      return;
    }
    if (!i) {
      this.logService.trace("[chat entitlement]: no response");
      return {
        entitlement: TT.Unresolved
      };
    }
    if (i.res.statusCode && i.res.statusCode !== 200) {
      this.logService.trace(`[chat entitlement]: unexpected status code ${i.res.statusCode}`);
      if (i.res.statusCode === 401 || i.res.statusCode === 403 || i.res.statusCode === 404) {
        return {
          entitlement: TT.Unknown
        };
      } else {
        return {
          entitlement: TT.Unresolved
        };
      }
    }
    let r = null;
    try {
      r = await Lnt(i);
    } catch {}
    if (t.isCancellationRequested) {
      return;
    }
    if (!r) {
      this.logService.trace("[chat entitlement]: response has no content");
      return {
        entitlement: TT.Unresolved
      };
    }
    let s;
    try {
      s = JSON.parse(r);
      this.logService.trace(`[chat entitlement]: parsed result is ${JSON.stringify(s)}`);
    } catch (d) {
      this.logService.trace(`[chat entitlement]: error parsing response (${d})`);
      return {
        entitlement: TT.Unresolved
      };
    }
    let o;
    if (s.access_type_sku === "free_limited_copilot") {
      o = TT.Limited;
    } else if (s.can_signup_for_limited) {
      o = TT.Available;
    } else if (s.chat_enabled) {
      o = TT.Pro;
    } else {
      o = TT.Unavailable;
    }
    const a = s.limited_user_quotas?.chat;
    const l = s.limited_user_quotas?.completions;
    const u = {
      entitlement: o,
      quotas: {
        chatTotal: s.monthly_quotas?.chat,
        completionsTotal: s.monthly_quotas?.completions,
        chatRemaining: typeof a == "number" ? Math.max(0, a) : undefined,
        completionsRemaining: typeof l == "number" ? Math.max(0, l) : undefined,
        resetDate: s.limited_user_reset_date
      }
    };
    this.logService.trace(`[chat entitlement]: resolved to ${u.entitlement}, quotas: ${JSON.stringify(u.quotas)}`);
    this.telemetryService.publicLog2("chatInstallEntitlement", {
      entitlement: u.entitlement,
      tid: s.analytics_tracking_id,
      quotaChat: s.limited_user_quotas?.chat,
      quotaCompletions: s.limited_user_quotas?.completions,
      quotaResetDate: s.limited_user_reset_date
    });
    return u;
  }
  async request(e, t, i, r, s) {
    try {
      return await this.requestService.request({
        type: t,
        url: e,
        data: t === "POST" ? JSON.stringify(i) : undefined,
        disableCache: true,
        headers: {
          Authorization: `Bearer ${r.accessToken}`
        }
      }, s);
    } catch (o) {
      if (!s.isCancellationRequested) {
        this.logService.error(`[chat entitlement] request: error ${o}`);
      }
      return;
    }
  }
  update(e) {
    this.state = e;
    this.context.update({
      entitlement: this.state.entitlement
    });
    if (e.quotas) {
      this.chatQuotasAccessor.acceptQuotas({
        chatQuotaExceeded: typeof e.quotas.chatRemaining == "number" ? e.quotas.chatRemaining <= 0 : false,
        completionsQuotaExceeded: typeof e.quotas.completionsRemaining == "number" ? e.quotas.completionsRemaining <= 0 : false,
        quotaResetDate: e.quotas.resetDate ? new Date(e.quotas.resetDate) : undefined,
        chatTotal: e.quotas.chatTotal,
        completionsTotal: e.quotas.completionsTotal,
        chatRemaining: e.quotas.chatRemaining,
        completionsRemaining: e.quotas.completionsRemaining
      });
    }
  }
  async forceResolveEntitlement(e, t = Cs.None) {
    e ||= await this.findMatchingProviderSession(t);
    if (e) {
      return this.resolveEntitlement(e, t);
    }
  }
  async signUpLimited(e) {
    const t = {
      restricted_telemetry: this.telemetryService.telemetryLevel === 0 ? "disabled" : "enabled",
      public_code_suggestions: "enabled"
    };
    const i = await this.request(SV.entitlementSignupLimitedUrl, "POST", t, e, Cs.None);
    if (!i) {
      if (await this.onUnknownSignUpError(_(5626, null), "[chat entitlement] sign-up: no response")) {
        return this.signUpLimited(e);
      } else {
        return {
          errorCode: 1
        };
      }
    }
    if (i.res.statusCode && i.res.statusCode !== 200) {
      if (i.res.statusCode === 422) {
        try {
          const a = await Lnt(i);
          if (a) {
            const l = JSON.parse(a);
            if (typeof l.message == "string" && l.message) {
              this.onUnprocessableSignUpError(`[chat entitlement] sign-up: unprocessable entity (${l.message})`, l.message);
              return {
                errorCode: i.res.statusCode
              };
            }
          }
        } catch {}
      }
      if (await this.onUnknownSignUpError(_(5627, null, i.res.statusCode), `[chat entitlement] sign-up: unexpected status code ${i.res.statusCode}`)) {
        return this.signUpLimited(e);
      } else {
        return {
          errorCode: i.res.statusCode
        };
      }
    }
    let r = null;
    try {
      r = await Lnt(i);
    } catch {}
    if (!r) {
      if (await this.onUnknownSignUpError(_(5628, null), "[chat entitlement] sign-up: response has no content")) {
        return this.signUpLimited(e);
      } else {
        return {
          errorCode: 2
        };
      }
    }
    let s;
    try {
      s = JSON.parse(r);
      this.logService.trace(`[chat entitlement] sign-up: response is ${r}`);
    } catch (o) {
      if (await this.onUnknownSignUpError(_(5629, null), `[chat entitlement] sign-up: error parsing response (${o})`)) {
        return this.signUpLimited(e);
      } else {
        return {
          errorCode: 3
        };
      }
    }
    this.update({
      entitlement: TT.Limited
    });
    return !!s?.subscribed;
  }
  async onUnknownSignUpError(e, t) {
    this.logService.error(t);
    if (!this.lifecycleService.willShutdown) {
      const {
        confirmed: i
      } = await this.dialogService.confirm({
        type: Ha.Error,
        message: _(5630, null),
        detail: e,
        primaryButton: _(5631, null)
      });
      return i;
    }
    return false;
  }
  onUnprocessableSignUpError(e, t) {
    this.logService.error(e);
    if (!this.lifecycleService.willShutdown) {
      this.dialogService.prompt({
        type: Ha.Error,
        message: _(5632, null),
        detail: t,
        buttons: [{
          label: _(5633, null),
          run: () => {}
        }, {
          label: _(5634, null),
          run: () => this.openerService.open(je.parse(SV.upgradePlanUrl))
        }]
      });
    }
  }
  async signIn() {
    const e = Nnt.providerId(this.configurationService);
    const t = await this.authenticationService.createSession(e, SV.providerScopes[0]);
    this.authenticationExtensionsService.updateAccountPreference(SV.extensionId, e, t.account);
    this.authenticationExtensionsService.updateAccountPreference(SV.chatExtensionId, e, t.account);
    const i = await this.forceResolveEntitlement(t);
    return {
      session: t,
      entitlements: i
    };
  }
  dispose() {
    this.pendingResolveCts.dispose(true);
    super.dispose();
  }
};
Vva = Nnt = __decorate([__param(2, ea), __param(3, WF), __param(4, Rr), __param(5, u8), __param(6, Ml), __param(7, Ja), __param(8, Fn), __param(9, cyi), __param(10, ap)], Vva);
Kva = class extends at {
  static {
    jva = this;
  }
  static {
    this.CHAT_ENTITLEMENT_CONTEXT_STORAGE_KEY = "chat.setupContext";
  }
  get state() {
    return this.suspendedState ?? this._state;
  }
  constructor(e, t, i, r, s) {
    super();
    this.storageService = t;
    this.extensionEnablementService = i;
    this.logService = r;
    this.extensionsWorkbenchService = s;
    this.suspendedState = undefined;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this.updateBarrier = undefined;
    this.canSignUpContextKey = qa.Entitlement.canSignUp.bindTo(e);
    this.signedOutContextKey = qa.Entitlement.signedOut.bindTo(e);
    this.limitedContextKey = qa.Entitlement.limited.bindTo(e);
    this.proContextKey = qa.Entitlement.pro.bindTo(e);
    this.hiddenContext = qa.Setup.hidden.bindTo(e);
    this.installedContext = qa.Setup.installed.bindTo(e);
    this._state = this.storageService.getObject(jva.CHAT_ENTITLEMENT_CONTEXT_STORAGE_KEY, 0) ?? {
      entitlement: TT.Unknown
    };
    this.checkExtensionInstallation();
    this.updateContextSync();
  }
  async checkExtensionInstallation() {
    await this.extensionsWorkbenchService.queryLocal();
    this._register(In.runAndSubscribe(this.extensionsWorkbenchService.onChange, e => {
      if (e && !$h.equals(e.identifier.id, SV.extensionId)) {
        return;
      }
      const t = this.extensionsWorkbenchService.local.find(i => $h.equals(i.identifier.id, SV.extensionId));
      this.update({
        installed: !!t?.local && this.extensionEnablementService.isEnabled(t.local)
      });
    }));
  }
  update(e) {
    this.logService.trace(`[chat entitlement context] update(): ${JSON.stringify(e)}`);
    if (typeof e.installed == "boolean") {
      this._state.installed = e.installed;
      if (e.installed) {
        e.hidden = false;
      }
    }
    if (typeof e.hidden == "boolean") {
      this._state.hidden = e.hidden;
    }
    if (typeof e.entitlement == "number") {
      this._state.entitlement = e.entitlement;
      if (this._state.entitlement === TT.Limited || this._state.entitlement === TT.Pro) {
        this._state.registered = true;
      } else if (this._state.entitlement === TT.Available) {
        this._state.registered = false;
      }
    }
    this.storageService.store(jva.CHAT_ENTITLEMENT_CONTEXT_STORAGE_KEY, this._state, 0, 1);
    return this.updateContext();
  }
  async updateContext() {
    await this.updateBarrier?.wait();
    this.updateContextSync();
  }
  updateContextSync() {
    this.logService.trace(`[chat entitlement context] updateContext(): ${JSON.stringify(this._state)}`);
    this.signedOutContextKey.set(this._state.entitlement === TT.Unknown);
    this.canSignUpContextKey.set(this._state.entitlement === TT.Available);
    this.limitedContextKey.set(this._state.entitlement === TT.Limited);
    this.proContextKey.set(this._state.entitlement === TT.Pro);
    this.hiddenContext.set(!!this._state.hidden);
    this.installedContext.set(!!this._state.installed);
    this._onDidChange.fire();
  }
  suspend() {
    this.suspendedState = {
      ...this._state
    };
    this.updateBarrier = new x6();
  }
  resume() {
    this.suspendedState = undefined;
    this.updateBarrier?.open();
    this.updateBarrier = undefined;
  }
};
Kva = jva = __decorate([__param(0, wi), __param(1, Hi), __param(2, nS), __param(3, Rr), __param(4, Em)], Kva);
