"use strict";

// Module: out-build/vs/workbench/services/agentData/browser/localAgentEnvironment.js
// Offset: 28517792 (bundle byte offset)
// Size: 4187 bytes
rt();
OXg();
nif();
Hnt();
uO();
PAa();
Tkt();
Wu();
_U();
H8A();
dif = "agentEnvironment.slashMenuItems";
Pyi = class extends at {
  constructor(n) {
    super();
    this._workspaceRef = n;
    this._slashMenuRefreshVersion = 0;
    this._register({
      dispose: () => this._workspaceRef.dispose()
    });
    const {
      cursorCommandsService: e,
      cursorRulesService: t,
      subagentsService: i,
      mcpService: r,
      cacheStorageService: s
    } = this._workspaceRef.object.instantiationService.invokeFunction(a => ({
      cursorCommandsService: a.get(hMe),
      cursorRulesService: a.get(FJ),
      subagentsService: a.get(kkt),
      mcpService: a.get(IU),
      cacheStorageService: a.get(glu)
    }));
    this._cursorCommandsService = e;
    this._cursorRulesService = t;
    this._subagentsService = i;
    this._mcpService = r;
    this._mentionsCapability = new clu(this._workspaceRef.object);
    const o = `${dif}.${this._workspaceRef.object.workspaceIdentifier.id}`;
    this._slashMenuItems = new JAi([], {
      load: () => s.get(o, 0),
      save: a => s.store(o, a, 0, 1),
      serialize: J8A,
      deserialize: G8A
    });
    this.slashMenuItems = this._slashMenuItems;
    this._mcpServers = new Yb(this._buildMcpServers());
    this.mcpServers = this._mcpServers;
    this._register(this._mcpService.onSettingsChanged(() => {
      this._mcpServers.set(this._buildMcpServers());
    }));
    this._register(this._mcpService.onDidChangeServerStatus(() => {
      this._mcpServers.set(this._buildMcpServers());
    }));
    this._register(this._mcpService.onDidInitialize(() => {
      this._mcpServers.set(this._buildMcpServers());
    }));
    this._register(this._cursorCommandsService.onDidChangeCommands(() => {
      this._refreshSlashMenu();
    }));
    this._register(this._cursorRulesService.onDidChangeRules(() => {
      this._refreshSlashMenu();
    }));
    this._register(this._subagentsService.onDidSubagentsChange(() => {
      this._refreshSlashMenu();
    }));
  }
  _buildMcpServers() {
    return this._mcpService.allServers().filter(n => !plu(n)).map(n => ({
      id: n.identifier,
      name: n.name,
      isConnected: this._mcpService.statusCache()[n.identifier]?.type === "connected",
      isEnabled: this._mcpService.isServerEnabled(n)
    }));
  }
  async initialize() {
    await this._fetchAndSetSlashMenu();
  }
  async _refreshSlashMenu() {
    const n = ++this._slashMenuRefreshVersion;
    await this._fetchAndSetSlashMenu(n);
  }
  async _fetchAndSetSlashMenu(n) {
    const e = this._resolveSlashMenuServices();
    try {
      const t = await FXg({
        services: e,
        existingRuleIds: [],
        existingSubagentNames: [],
        supportsSkills: true,
        supportsSubagents: true,
        onSelectOption: () => {}
      });
      if (n !== undefined && n !== this._slashMenuRefreshVersion) {
        return;
      }
      this._slashMenuItems.set(t);
    } catch {}
  }
  applySelectionSideEffects(n, e) {
    switch (n.type) {
      case "skill":
        {
          const t = flu(n.id, "skill-");
          this._cursorCommandsService.markAsRecentlyUsed("skill", t);
          e?.(t);
          break;
        }
      case "command":
      case "subagent":
        {
          const t = flu(n.id, `${n.type}-`);
          this._cursorCommandsService.markAsRecentlyUsed(n.type, t);
          break;
        }
      case "mode":
      case "action":
      case "mention":
      case "heading":
      case "divider":
      case undefined:
        break;
      default:
        {
          const t = n.type;
          break;
        }
    }
  }
  applySkillSelectionSideEffects(n, e) {
    const t = flu(n, "skill-");
    this._cursorCommandsService.markAsRecentlyUsed("skill", t);
    e?.(t);
  }
  async getMentionItems(n, e) {
    return this._mentionsCapability.getMentionItems({
      query: n,
      cancellationToken: e
    });
  }
  toggleMcpServer(n, e) {
    const t = this._mcpService.allServers().find(r => r.identifier === n);
    if (!!t && this._mcpService.isServerEnabled(t) !== e) {
      this._mcpService.toggleServerEnabled(t);
    }
  }
  _resolveSlashMenuServices() {
    return this._workspaceRef.object.instantiationService.invokeFunction(n => {
      const e = n.get(hMe);
      const t = n.get(FJ);
      const i = n.get(kkt);
      const r = n.get(IU);
      const s = n.get(Tl);
      return {
        cursorCommandsService: {
          getCommands: () => e.getCommands(),
          getRecentlyUsedGlobalOrder: () => e.getRecentlyUsedGlobalOrder()
        },
        cursorRulesService: {
          getAllRules: () => t.getAllRules()
        },
        subagentsService: {
          getAllSubagents: () => i.getAllSubagents()
        },
        mcpService: {
          promptsCache: () => r.promptsCache(),
          allServers: () => r.allServers().map(o => ({
            identifier: o.identifier,
            name: o.name
          }))
        },
        experimentService: {
          checkFeatureGate: o => s.checkFeatureGate(o)
        }
      };
    });
  }
};
