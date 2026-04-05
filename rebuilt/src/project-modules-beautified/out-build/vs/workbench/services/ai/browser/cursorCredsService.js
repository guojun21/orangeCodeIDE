"use strict";

// Module: out-build/vs/workbench/services/ai/browser/cursorCredsService.js
// Offset: 28401480 (bundle byte offset)
// Size: 15103 bytes
Er();
Wt();
dr();
Dd();
yn();
CE();
rt();
Kl();
si();
Av();
So();
eu();
rce();
MJ = xi("cursorCredsService");
xU = "https://staging.cursor.sh";
AAa = "https://repo42.cursor.sh";
aMe = "https://dev-staging.cursor.sh";
Unt = "OzaBXLClY5CAGxNzUhQ2vlknpi07tGuE";
yAa = "dev.authentication.cursor.sh";
i5 = "https://localhost:";
Enf = 8000;
cMe = "http://localhost:4000";
B2 = {
  PROD: "Prod",
  PROD_EU_CENTRAL_1_AGENT: "Prod (eu-central-1 agent)",
  PROD_AP_SOUTHEAST_1_AGENT: "Prod (ap-southeast-1 agent)",
  STAGING: "Staging",
  DEV_STAGING: "DevStaging(w/local-website)",
  STAGING_LOCAL_WEBSITE: "Staging(w/local-website)",
  LOCAL_EXCEPT_CPP_AND_EMBEDDINGS: "DefaultLocal(no cpp/embeddings)",
  STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS: "StagingLocal(cpp/embeddings on Staging)",
  LOCAL_EXCEPT_CPP: "Local(except cpp)",
  FULL_LOCAL: "FullLocal",
  LOCAL_EXCEPT_EMBEDDINGS: "Local(except embeddings)"
};
wAa = class extends at {
  static {
    Iyi = this;
  }
  constructor(e, t, i, r, s) {
    super();
    this.reactiveStorageService = e;
    this.statusbarService = t;
    this.environmentService = i;
    this.contextKeyService = r;
    this.clientDebugLogService = s;
    this._onDidRequestRelogin = new Qe();
    this.onDidRequestRelogin = this._onDidRequestRelogin.event;
    this.prodGeoCppUrl = e$o;
    this.namingMap = {
      [B2.PROD]: () => this.switchToProdServer(),
      [B2.PROD_EU_CENTRAL_1_AGENT]: () => this.switchToProdEuCentral1AgentServer(),
      [B2.PROD_AP_SOUTHEAST_1_AGENT]: () => this.switchToProdApSoutheast1AgentServer(),
      [B2.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: () => this.switchToLocalExceptCppAndEmbeddingsServer(),
      [B2.LOCAL_EXCEPT_CPP]: () => this.switchToLocalExceptCppServer(),
      [B2.FULL_LOCAL]: () => this.switchToFullLocalServer(),
      [B2.STAGING]: () => this.switchToStagingServer(),
      [B2.DEV_STAGING]: () => this.switchToDevStagingServer(),
      [B2.STAGING_LOCAL_WEBSITE]: () => this.switchToStagingServerLocalWebsite(),
      [B2.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: () => this.switchToLocalExceptCppAndEmbeddingsServerStagingProd(),
      [B2.LOCAL_EXCEPT_EMBEDDINGS]: () => this.switchToLocalExceptEmbeddingsServer()
    };
    this.clientDebugLogService.setIssueTraceBaseUrl(() => this.getBackendUrl());
    this.testBackendUrlOverride = this.environmentService.testBackendUrl;
    this.switchToProdServer();
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  isDevUserOrDevBuild() {
    const e = this.contextKeyService.getContextKeyValue(hL.key) ?? false;
    return !this.environmentService.isBuilt || this.environmentService.isExtensionDevelopment || e;
  }
  getEffectiveCredentials() {
    const e = this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds;
    const t = this.testBackendUrlOverride;
    if (!t) {
      return e;
    }
    const i = this.getAgentBackendUrls(t);
    return {
      ...e,
      backendUrl: t,
      repoBackendUrl: t,
      telemBackendUrl: t,
      geoCppBackendUrl: t,
      cppConfigBackendUrl: t,
      cmdkBackendUrl: t,
      bcProxyUrl: t,
      agentBackendUrlPrivacy: i.privacy,
      agentBackendUrlNonPrivacy: i.nonPrivacy
    };
  }
  switchToExistingServer() {
    this.testBackendUrlOverride;
  }
  updateServerStatusBarOnlyRunsOnLocal() {
    if (!this.isDevUserOrDevBuild()) {
      return;
    }
    let e = this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.credentialsDisplayName;
    if (!e) {
      return;
    }
    e = e.replace("(", " (").replace("  (", " (");
    const t = {
      text: `Server: ${e}`,
      tooltip: "Click to switch backend server",
      command: "cursor.selectBackend",
      color: "statusBarItemProminentForeground",
      name: "currentServer",
      ariaLabel: `Current Server: ${e}`
    };
    let i = this.serverStatusBarEntry ?? Iyi.globalServerStatusBarEntry;
    if (i) {
      i.update(t);
      this.serverStatusBarEntry = i;
      Iyi.globalServerStatusBarEntry = i;
    } else {
      i = this.statusbarService.addEntry(t, "status.currentServer", 1, 200);
      this.serverStatusBarEntry = i;
      Iyi.globalServerStatusBarEntry = i;
    }
  }
  getAuth0ClientId() {
    return this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.authClientId;
  }
  reloginIfNeeded(e) {
    const t = this.getAuth0ClientId();
    if (e !== t) {
      this._onDidRequestRelogin.fire();
    }
  }
  localBackendPort() {
    return Enf;
  }
  getBcProxyDevUrl() {
    const e = this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerEnv ?? "prod";
    if (this.getBackendUrl().includes("localhost") || e === "dev" || e === "fullLocal") {
      return i5 + this.localBackendPort();
    } else {
      return hhe;
    }
  }
  switchToProdServer() {
    const e = this.getAuth0ClientId();
    const t = this.getAgentBackendUrls(hhe);
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: Tvt,
      backendUrl: hhe,
      authClientId: N9t,
      authDomain: M9t,
      repoBackendUrl: j6n,
      telemBackendUrl: a8e,
      geoCppBackendUrl: this.prodGeoCppUrl,
      cppConfigBackendUrl: Ivt,
      cmdkBackendUrl: Q6n,
      bcProxyUrl: hhe,
      agentBackendUrlPrivacy: t.privacy,
      agentBackendUrlNonPrivacy: t.nonPrivacy,
      credentialsDisplayName: B2.PROD
    });
    this.reloginIfNeeded(e);
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  switchToProdEuCentral1AgentServer() {
    const e = this.getAuth0ClientId();
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: Tvt,
      backendUrl: hhe,
      authClientId: N9t,
      authDomain: M9t,
      repoBackendUrl: j6n,
      telemBackendUrl: a8e,
      geoCppBackendUrl: this.prodGeoCppUrl,
      cppConfigBackendUrl: Ivt,
      cmdkBackendUrl: Q6n,
      bcProxyUrl: hhe,
      agentBackendUrlPrivacy: {
        default: ZHh
      },
      agentBackendUrlNonPrivacy: {
        default: XHh
      },
      credentialsDisplayName: B2.PROD_EU_CENTRAL_1_AGENT
    });
    this.reloginIfNeeded(e);
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  switchToProdApSoutheast1AgentServer() {
    const e = this.getAuth0ClientId();
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: Tvt,
      backendUrl: hhe,
      authClientId: N9t,
      authDomain: M9t,
      repoBackendUrl: j6n,
      telemBackendUrl: a8e,
      geoCppBackendUrl: this.prodGeoCppUrl,
      cppConfigBackendUrl: Ivt,
      cmdkBackendUrl: Q6n,
      bcProxyUrl: hhe,
      agentBackendUrlPrivacy: {
        default: eJh
      },
      agentBackendUrlNonPrivacy: {
        default: tJh
      },
      credentialsDisplayName: B2.PROD_AP_SOUTHEAST_1_AGENT
    });
    this.reloginIfNeeded(e);
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  switchToLocalExceptCppServer() {
    const e = this.localBackendPort();
    const t = i5 + e;
    const i = this.getAgentBackendUrls(t);
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: cMe,
      backendUrl: t,
      authClientId: Unt,
      authDomain: i5 + e,
      repoBackendUrl: i5 + e,
      telemBackendUrl: a8e,
      geoCppBackendUrl: this.prodGeoCppUrl,
      cppConfigBackendUrl: Ivt,
      cmdkBackendUrl: i5 + e,
      bcProxyUrl: this.getBcProxyDevUrl(),
      agentBackendUrlPrivacy: i.privacy,
      agentBackendUrlNonPrivacy: i.nonPrivacy,
      credentialsDisplayName: B2.LOCAL_EXCEPT_CPP
    });
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  switchToFullLocalServer() {
    const e = this.localBackendPort();
    const t = i5 + e;
    const i = this.getAgentBackendUrls(t);
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: cMe,
      backendUrl: t,
      authClientId: Unt,
      authDomain: i5 + e,
      repoBackendUrl: i5 + e,
      telemBackendUrl: i5 + e,
      geoCppBackendUrl: i5 + e,
      cppConfigBackendUrl: i5 + e,
      cmdkBackendUrl: i5 + e,
      bcProxyUrl: this.getBcProxyDevUrl(),
      agentBackendUrlPrivacy: i.privacy,
      agentBackendUrlNonPrivacy: i.nonPrivacy,
      credentialsDisplayName: B2.FULL_LOCAL
    });
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  switchToLocalExceptCppAndEmbeddingsServerStagingProd() {
    const e = this.localBackendPort();
    const t = i5 + e;
    const i = this.getAgentBackendUrls(t);
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: cMe,
      backendUrl: t,
      authClientId: Unt,
      authDomain: i5 + e,
      repoBackendUrl: AAa,
      telemBackendUrl: xU,
      geoCppBackendUrl: xU,
      cppConfigBackendUrl: xU,
      cmdkBackendUrl: i5 + e,
      bcProxyUrl: this.getBcProxyDevUrl(),
      agentBackendUrlPrivacy: i.privacy,
      agentBackendUrlNonPrivacy: i.nonPrivacy,
      credentialsDisplayName: B2.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS
    });
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  switchToLocalExceptCppAndEmbeddingsServer() {
    const e = this.localBackendPort();
    const t = i5 + e;
    const i = this.getAgentBackendUrls(t);
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: cMe,
      backendUrl: t,
      authClientId: Unt,
      authDomain: i5 + e,
      repoBackendUrl: AAa,
      telemBackendUrl: a8e,
      geoCppBackendUrl: this.prodGeoCppUrl,
      cppConfigBackendUrl: Ivt,
      cmdkBackendUrl: i5 + e,
      bcProxyUrl: this.getBcProxyDevUrl(),
      agentBackendUrlPrivacy: i.privacy,
      agentBackendUrlNonPrivacy: i.nonPrivacy,
      credentialsDisplayName: B2.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS
    });
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  switchToStagingServer() {
    const e = this.getAgentBackendUrls(xU);
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: Tvt,
      backendUrl: xU,
      authClientId: N9t,
      authDomain: M9t,
      repoBackendUrl: xU,
      telemBackendUrl: xU,
      geoCppBackendUrl: xU,
      cppConfigBackendUrl: xU,
      cmdkBackendUrl: xU,
      bcProxyUrl: xU,
      agentBackendUrlPrivacy: e.privacy,
      agentBackendUrlNonPrivacy: e.nonPrivacy,
      credentialsDisplayName: B2.STAGING
    });
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  switchToDevStagingServer() {
    const e = this.getAgentBackendUrls(aMe);
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: cMe,
      backendUrl: aMe,
      authClientId: Unt,
      authDomain: yAa,
      repoBackendUrl: aMe,
      telemBackendUrl: aMe,
      geoCppBackendUrl: aMe,
      cppConfigBackendUrl: aMe,
      cmdkBackendUrl: aMe,
      bcProxyUrl: aMe,
      agentBackendUrlPrivacy: e.privacy,
      agentBackendUrlNonPrivacy: e.nonPrivacy,
      credentialsDisplayName: B2.DEV_STAGING
    });
  }
  switchToStagingServerLocalWebsite() {
    const e = this.getAgentBackendUrls(xU);
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: cMe,
      backendUrl: xU,
      authClientId: Unt,
      authDomain: yAa,
      repoBackendUrl: xU,
      telemBackendUrl: xU,
      geoCppBackendUrl: xU,
      cppConfigBackendUrl: xU,
      cmdkBackendUrl: xU,
      bcProxyUrl: xU,
      agentBackendUrlPrivacy: e.privacy,
      agentBackendUrlNonPrivacy: e.nonPrivacy,
      credentialsDisplayName: B2.STAGING_LOCAL_WEBSITE
    });
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  switchToLocalExceptEmbeddingsServer() {
    const e = this.localBackendPort();
    const t = i5 + e;
    const i = this.getAgentBackendUrls(t);
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
      websiteUrl: cMe,
      backendUrl: t,
      authClientId: Unt,
      authDomain: yAa,
      repoBackendUrl: AAa,
      telemBackendUrl: a8e,
      geoCppBackendUrl: i5 + e,
      cppConfigBackendUrl: i5 + e,
      cmdkBackendUrl: i5 + e,
      bcProxyUrl: this.getBcProxyDevUrl(),
      agentBackendUrlPrivacy: i.privacy,
      agentBackendUrlNonPrivacy: i.nonPrivacy,
      credentialsDisplayName: B2.LOCAL_EXCEPT_EMBEDDINGS
    });
    this.updateServerStatusBarOnlyRunsOnLocal();
  }
  getCredentials() {
    return this.getEffectiveCredentials();
  }
  getLoginUrl() {
    return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/loginDeepControl`;
  }
  getLogoutUrl() {
    return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/api/auth/logout`;
  }
  getPricingUrl() {
    return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/pricing`;
  }
  getSettingsUrl() {
    return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/dashboard`;
  }
  getBackgroundAgentSettingsUrl() {
    return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/dashboard?tab=cloud-agents`;
  }
  getIntegrationsUrl() {
    return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/dashboard?tab=integrations`;
  }
  getConnectGithubUrl({
    authId: e,
    githubRepo: t,
    useBackgroundComposerEnv: i
  }) {
    let r = this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl;
    if (i === true) {
      const s = this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerEnv ?? "prod";
      if (this.getBackendUrl().includes("localhost") || s === "dev" || s === "fullLocal") {
        r = cMe;
      } else {
        r = Tvt;
      }
    }
    return `${r}/api/auth/connect-github?auth_id=${encodeURIComponent(e)}&github_repo=${encodeURIComponent(t ?? "")}&source=BACKGROUND_AGENT`;
  }
  getPollingEndpoint() {
    return `${this.getBackendUrl()}/auth/poll`;
  }
  getBackendUrl() {
    return this.getCredentials().backendUrl;
  }
  getRepoBackendUrl() {
    return this.getCredentials().repoBackendUrl;
  }
  getTelemBackendUrl() {
    return this.getCredentials().telemBackendUrl;
  }
  getGeoCppBackendUrl() {
    return this.getCredentials().geoCppBackendUrl;
  }
  getCppConfigBackendUrl() {
    return this.getCredentials().cppConfigBackendUrl;
  }
  upgradeToPlanOrGetUrl(e, t, i) {
    let r = `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/api/auth/checkoutDeepControl?tier=${e}`;
    if (t === true) {
      r += "&allowTrial=true";
    } else if (t === false) {
      r += "&allowTrial=false";
    }
    if (i === true) {
      r += "&allowAutomaticPayment=true";
    }
    return r;
  }
  setGeoCppBackendUrl(e) {
    if (e === "" || !e.includes("cursor.sh")) {
      e = e$o;
    }
    this.prodGeoCppUrl = e;
    this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", t => t.credentialsDisplayName !== B2.LOCAL_EXCEPT_EMBEDDINGS && t.credentialsDisplayName !== B2.FULL_LOCAL ? {
      ...t,
      geoCppBackendUrl: e
    } : t);
  }
  getAgentBackendUrls(e) {
    if (e.includes("localhost") || e.includes("lclhst.build")) {
      return {
        privacy: {
          default: e,
          "us-west-1": e
        },
        nonPrivacy: {
          default: e,
          "us-west-1": e
        }
      };
    } else if (e.includes(xU) || e.includes(aMe)) {
      return {
        privacy: {
          default: e,
          "us-west-1": e
        },
        nonPrivacy: {
          default: e,
          "us-west-1": e
        }
      };
    } else {
      return {
        privacy: {
          default: z6n,
          "us-west-1": K6n
        },
        nonPrivacy: {
          default: V6n,
          "us-west-1": Y6n
        }
      };
    }
  }
};
wAa = Iyi = __decorate([__param(0, ku), __param(1, V0), __param(2, Cc), __param(3, wi), __param(4, tie)], wAa);
Vi(MJ, wAa, 1);
(function (n) {
  n.Prod = "prod";
  n.ProdEuCentral1Agent = "prodEuCentral1Agent";
  n.Staging = "staging";
  n.DevStaging = "devStagingEverything";
  n.StagingLocalWebsite = "stagingLocalWebsite";
  n.LocalExceptCppAndEmbeddings = "local";
  n.LocalExceptCppAndEmbeddingsStaging = "localStaging";
  n.LocalExceptCPP = "fullLocal";
  n.LocalExceptEmbeddings = "localExceptEmbeddings";
  n.FullLocal = "fullLocalincludingcpp";
})(r5 ||= {});
xnf = {
  [r5.Prod]: 1814,
  [r5.ProdEuCentral1Agent]: 1813,
  [r5.Staging]: 1815,
  [r5.StagingLocalWebsite]: 1816,
  [r5.LocalExceptCppAndEmbeddings]: 1817,
  [r5.LocalExceptCPP]: 1818,
  [r5.FullLocal]: 1819,
  [r5.LocalExceptEmbeddings]: 1820,
  [r5.DevStaging]: 1821,
  [r5.LocalExceptCppAndEmbeddingsStaging]: 1822
};
v8A().map(Dt);
Tnf = class extends rn {
  constructor() {
    super({
      id: "cursor.selectBackend",
      title: {
        value: "Select Backend Server",
        original: "Select Backend Server"
      },
      f1: true,
      precondition: Ee.or(Gy, hL)
    });
  }
  async run(n) {
    const e = n.get(Cc);
    const t = n.get(wi);
    const i = n.get(ms);
    const r = t.getContextKeyValue(hL.key) ?? false;
    if (e.isBuilt && !e.isExtensionDevelopment && !r) {
      i.warn("Backend switching is not available in production builds.");
      return;
    }
    const s = n.get(ha);
    const o = n.get(MJ);
    const a = o.getCredentials().credentialsDisplayName;
    const l = Object.entries(o.namingMap).filter(([, p]) => typeof p == "function").map(([p]) => ({
      label: p,
      description: p === a ? "Current" : undefined
    }));
    const u = await s.pick(l, {
      placeHolder: "Select backend server to use",
      matchOnDescription: true
    });
    if (!u) {
      return;
    }
    const d = u.label;
    const m = o.namingMap[d];
    if (typeof m == "function") {
      const p = o.getAuth0ClientId();
      m();
      o.reloginIfNeeded(p);
    }
  }
};
Dt(Tnf);
