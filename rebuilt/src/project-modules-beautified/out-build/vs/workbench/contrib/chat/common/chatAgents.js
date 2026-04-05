"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/chatAgents.js
// Offset: 28285355 (bundle byte offset)
// Size: 9143 bytes
GD();
vr();
Po();
yn();
tg();
Ef();
rt();
UB();
Uc();
oa();
Jr();
si();
HA();
Wt();
jr();
Rl();
qq();
kr();
_E();
SS();
EI = xi("chatAgentService");
Yva = class extends at {
  static {
    this.AGENT_LEADER = "@";
  }
  constructor(e) {
    super();
    this.contextKeyService = e;
    this._agents = new Map();
    this._onDidChangeAgents = new Qe();
    this.onDidChangeAgents = this._onDidChangeAgents.event;
    this._agentsContextKeys = new Set();
    this._chatParticipantDetectionProviders = new Map();
    this._agentCompletionProviders = new Map();
    this._hasDefaultAgent = qa.enabled.bindTo(this.contextKeyService);
    this._defaultAgentRegistered = qa.panelParticipantRegistered.bindTo(this.contextKeyService);
    this._editingAgentRegistered = qa.editingParticipantRegistered.bindTo(this.contextKeyService);
    this._register(e.onDidChangeContext(t => {
      if (t.affectsSome(this._agentsContextKeys)) {
        this._updateContextKeys();
      }
    }));
    this._hasToolsAgentContextKey = qa.Editing.hasToolsAgent.bindTo(e);
  }
  registerAgent(e, t) {
    if (this.getAgent(e)) {
      throw new Error(`Agent already registered: ${JSON.stringify(e)}`);
    }
    const r = this;
    const s = t.slashCommands;
    t = {
      ...t,
      get slashCommands() {
        return s.filter(a => !a.when || r.contextKeyService.contextMatchesRules(Ee.deserialize(a.when)));
      }
    };
    const o = {
      data: t
    };
    this._agents.set(e, o);
    this._updateAgentsContextKeys();
    this._updateContextKeys();
    this._onDidChangeAgents.fire(undefined);
    return $i(() => {
      this._agents.delete(e);
      this._updateAgentsContextKeys();
      this._updateContextKeys();
      this._onDidChangeAgents.fire(undefined);
    });
  }
  _updateAgentsContextKeys() {
    this._agentsContextKeys.clear();
    for (const e of this._agents.values()) {
      if (e.data.when) {
        const t = Ee.deserialize(e.data.when);
        for (const i of t?.keys() || []) {
          this._agentsContextKeys.add(i);
        }
      }
    }
  }
  _updateContextKeys() {
    let e = false;
    let t = false;
    let i = false;
    for (const r of this.getAgents()) {
      if (r.isDefault && r.locations.includes(zh.EditingSession)) {
        e = true;
        if (r.isToolsAgent) {
          i = true;
        }
      } else if (r.isDefault) {
        t = true;
      }
    }
    this._editingAgentRegistered.set(e);
    this._defaultAgentRegistered.set(t);
    if (i !== this._hasToolsAgentContextKey.get()) {
      this._hasToolsAgentContextKey.set(i);
      this._onDidChangeAgents.fire(this.getDefaultAgent(zh.EditingSession));
    }
  }
  registerAgentImplementation(e, t) {
    const i = this._agents.get(e);
    if (!i) {
      throw new Error(`Unknown agent: ${JSON.stringify(e)}`);
    }
    if (i.impl) {
      throw new Error(`Agent already has implementation: ${JSON.stringify(e)}`);
    }
    if (i.data.isDefault) {
      this._hasDefaultAgent.set(true);
    }
    i.impl = t;
    this._onDidChangeAgents.fire(new myi(i.data, t));
    return $i(() => {
      i.impl = undefined;
      this._onDidChangeAgents.fire(undefined);
      if (i.data.isDefault) {
        this._hasDefaultAgent.set(false);
      }
    });
  }
  registerDynamicAgent(e, t) {
    e.isDynamic = true;
    const i = {
      data: e,
      impl: t
    };
    this._agents.set(e.id, i);
    this._onDidChangeAgents.fire(new myi(e, t));
    return $i(() => {
      this._agents.delete(e.id);
      this._onDidChangeAgents.fire(undefined);
    });
  }
  registerAgentCompletionProvider(e, t) {
    this._agentCompletionProviders.set(e, t);
    return {
      dispose: () => {
        this._agentCompletionProviders.delete(e);
      }
    };
  }
  async getAgentCompletionItems(e, t, i) {
    return (await this._agentCompletionProviders.get(e)?.(t, i)) ?? [];
  }
  updateAgent(e, t) {
    const i = this._agents.get(e);
    if (!i?.impl) {
      throw new Error(`No activated agent with id ${JSON.stringify(e)} registered`);
    }
    i.data.metadata = {
      ...i.data.metadata,
      ...t
    };
    this._onDidChangeAgents.fire(new myi(i.data, i.impl));
  }
  getDefaultAgent(e, t) {
    if (t === iA.Edit || t === iA.Agent) {
      e = zh.EditingSession;
    }
    return this._preferExtensionAgent(this.getActivatedAgents().filter(i => t === iA.Agent != !!i.isToolsAgent ? false : !!i.isDefault && i.locations.includes(e)));
  }
  get hasToolsAgent() {
    return !!this._hasToolsAgentContextKey.get();
  }
  getContributedDefaultAgent(e) {
    return this._preferExtensionAgent(this.getAgents().filter(t => !!t.isDefault && t.locations.includes(e)));
  }
  _preferExtensionAgent(e) {
    return Cbe(e, t => !t.isCore) ?? e.at(-1);
  }
  getAgent(e, t = false) {
    if (!!this._agentIsEnabled(e) || !!t) {
      return this._agents.get(e)?.data;
    }
  }
  _agentIsEnabled(e) {
    const t = typeof e == "string" ? this._agents.get(e) : e;
    return !t?.data.when || this.contextKeyService.contextMatchesRules(Ee.deserialize(t.data.when));
  }
  getAgentByFullyQualifiedId(e) {
    const t = bl.find(this._agents.values(), i => dyi(i.data) === e)?.data;
    if (!t || !!this._agentIsEnabled(t.id)) {
      return t;
    }
  }
  getAgents() {
    return Array.from(this._agents.values()).map(e => e.data).filter(e => this._agentIsEnabled(e.id));
  }
  getActivatedAgents() {
    return Array.from(this._agents.values()).filter(e => !!e.impl).filter(e => this._agentIsEnabled(e.data.id)).map(e => new myi(e.data, e.impl));
  }
  getAgentsByName(e) {
    return this._preferExtensionAgents(this.getAgents().filter(t => t.name === e));
  }
  _preferExtensionAgents(e) {
    const t = e.filter(i => !i.isCore);
    if (t.length > 0) {
      return t;
    } else {
      return e;
    }
  }
  agentHasDupeName(e) {
    const t = this.getAgent(e);
    if (t) {
      return this.getAgentsByName(t.name).filter(i => i.extensionId.value !== t.extensionId.value).length > 0;
    } else {
      return false;
    }
  }
  async invokeAgent(e, t, i, r, s) {
    const o = this._agents.get(e);
    if (!o?.impl) {
      throw new Error(`No activated agent with id "${e}"`);
    }
    return await o.impl.invoke(t, i, r, s);
  }
  setRequestPaused(e, t, i) {
    const r = this._agents.get(e);
    if (!r?.impl) {
      throw new Error(`No activated agent with id "${e}"`);
    }
    r.impl.setRequestPaused?.(t, i);
  }
  async getFollowups(e, t, i, r, s) {
    const o = this._agents.get(e);
    if (!o?.impl) {
      throw new Error(`No activated agent with id "${e}"`);
    }
    if (o.impl?.provideFollowups) {
      return o.impl.provideFollowups(t, i, r, s);
    } else {
      return [];
    }
  }
  async getChatTitle(e, t, i) {
    const r = this._agents.get(e);
    if (!r?.impl) {
      throw new Error(`No activated agent with id "${e}"`);
    }
    if (r.impl?.provideChatTitle) {
      return r.impl.provideChatTitle(t, i);
    }
  }
  registerChatParticipantDetectionProvider(e, t) {
    this._chatParticipantDetectionProviders.set(e, t);
    return $i(() => {
      this._chatParticipantDetectionProviders.delete(e);
    });
  }
  hasChatParticipantDetectionProviders() {
    return this._chatParticipantDetectionProviders.size > 0;
  }
  async detectAgentOrCommand(e, t, i, r) {
    const s = bl.first(this._chatParticipantDetectionProviders.values());
    if (!s) {
      return;
    }
    const o = this.getAgents().reduce((d, m) => {
      if (m.locations.includes(i.location)) {
        d.push({
          participant: m.id,
          disambiguation: m.disambiguation ?? []
        });
        for (const p of m.slashCommands) {
          d.push({
            participant: m.id,
            command: p.name,
            disambiguation: p.disambiguation ?? []
          });
        }
      }
      return d;
    }, []);
    const a = await s.provideParticipantDetection(e, t, {
      ...i,
      participants: o
    }, r);
    if (!a) {
      return;
    }
    const l = this.getAgent(a.participant);
    if (!l) {
      return;
    }
    if (!a.command) {
      return {
        agent: l
      };
    }
    const u = l?.slashCommands.find(d => d.name === a.command);
    if (u) {
      return {
        agent: l,
        command: u
      };
    }
  }
};
Yva = __decorate([__param(0, wi)], Yva);
myi = class {
  constructor(n, e) {
    this.data = n;
    this.impl = e;
  }
  get id() {
    return this.data.id;
  }
  get name() {
    return this.data.name ?? "";
  }
  get fullName() {
    return this.data.fullName ?? "";
  }
  get description() {
    return this.data.description ?? "";
  }
  get extensionId() {
    return this.data.extensionId;
  }
  get extensionPublisherId() {
    return this.data.extensionPublisherId;
  }
  get extensionPublisherDisplayName() {
    return this.data.publisherDisplayName;
  }
  get extensionDisplayName() {
    return this.data.extensionDisplayName;
  }
  get isDefault() {
    return this.data.isDefault;
  }
  get isToolsAgent() {
    return this.data.isToolsAgent;
  }
  get isCore() {
    return this.data.isCore;
  }
  get metadata() {
    return this.data.metadata;
  }
  get slashCommands() {
    return this.data.slashCommands;
  }
  get locations() {
    return this.data.locations;
  }
  get disambiguation() {
    return this.data.disambiguation;
  }
  async invoke(n, e, t, i) {
    return this.impl.invoke(n, e, t, i);
  }
  setRequestPaused(n, e) {
    if (this.impl.setRequestPaused) {
      this.impl.setRequestPaused(n, e);
    }
  }
  async provideFollowups(n, e, t, i) {
    if (this.impl.provideFollowups) {
      return this.impl.provideFollowups(n, e, t, i);
    } else {
      return [];
    }
  }
  provideWelcomeMessage(n) {
    if (this.impl.provideWelcomeMessage) {
      return this.impl.provideWelcomeMessage(n);
    }
  }
  provideSampleQuestions(n, e) {
    if (this.impl.provideSampleQuestions) {
      return this.impl.provideSampleQuestions(n, e);
    }
  }
  toJSON() {
    return this.data;
  }
};
cpn = xi("chatAgentNameService");
Zva = class {
  static {
    hyi = this;
  }
  static {
    this.StorageKey = "chat.participantNameRegistry";
  }
  constructor(e, t, i, r) {
    this.requestService = t;
    this.logService = i;
    this.storageService = r;
    this.registry = Ua(this, Object.create(null));
    this.disposed = false;
    if (!e.chatParticipantRegistry) {
      return;
    }
    this.url = e.chatParticipantRegistry;
    const s = r.get(hyi.StorageKey, -1);
    try {
      this.registry.set(JSON.parse(s ?? "{}"), undefined);
    } catch {
      r.remove(hyi.StorageKey, -1);
    }
    this.refresh();
  }
  refresh() {
    if (!this.disposed) {
      this.update().catch(e => this.logService.warn("Failed to fetch chat participant registry", e)).then(() => Af(300000)).then(() => this.refresh());
    }
  }
  async update() {
    const e = await this.requestService.request({
      type: "GET",
      url: this.url
    }, Cs.None);
    if (e.res.statusCode !== 200) {
      throw new Error("Could not get extensions report.");
    }
    const t = await Pye(e);
    if (!t || t.version !== 1) {
      throw new Error("Unexpected chat participant registry response.");
    }
    const i = t.restrictedChatParticipants;
    this.registry.set(i, undefined);
    this.storageService.store(hyi.StorageKey, JSON.stringify(i), -1, 1);
  }
  getAgentNameRestriction(e) {
    if (e.isCore) {
      return true;
    }
    const t = this.checkAgentNameRestriction(e.name, e).get();
    const i = !e.fullName || this.checkAgentNameRestriction(e.fullName.replace(/\s/g, ""), e).get();
    return t && i;
  }
  checkAgentNameRestriction(e, t) {
    return this.registry.map(r => r[e.toLowerCase()]).map(r => r ? r.some(s => k_(s, s.includes(".") ? t.extensionId.value : t.extensionPublisherId)) : true);
  }
  dispose() {
    this.disposed = true;
  }
};
Zva = hyi = __decorate([__param(0, za), __param(1, u8), __param(2, Rr), __param(3, Hi)], Zva);
