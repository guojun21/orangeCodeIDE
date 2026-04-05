"use strict";

// Module: out-build/vs/workbench/common/configuration.js
// Offset: 28210298 (bundle byte offset)
// Size: 5310 bytes
Ht();
Mp();
Ws();
ps();
Ei();
rt();
yn();
Wf();
_r();
np();
vr();
m0();
_va = Object.freeze({
  id: "application",
  order: 100,
  title: _(4308, null),
  type: "object"
});
vQ = Object.freeze({
  id: "workbench",
  order: 7,
  title: _(4309, null),
  type: "object"
});
Cva = Object.freeze({
  id: "security",
  scope: 1,
  title: _(4310, null),
  type: "object",
  order: 7
});
gau = Object.freeze({
  id: "problems",
  title: _(4311, null),
  type: "object",
  order: 101
});
fau = Object.freeze({
  id: "window",
  order: 8,
  title: _(4312, null),
  type: "object"
});
t5 = {
  ConfigurationMigration: "base.contributions.configuration.migration"
};
cef = class {
  constructor() {
    this.migrations = [];
    this._onDidRegisterConfigurationMigrations = new Qe();
    this.onDidRegisterConfigurationMigration = this._onDidRegisterConfigurationMigrations.event;
  }
  registerConfigurationMigrations(n) {
    this.migrations.push(...n);
  }
};
VAi = new cef();
Di.add(t5.ConfigurationMigration, VAi);
KAi = class extends at {
  static {
    this.ID = "workbench.contrib.configurationMigration";
  }
  constructor(e, t) {
    super();
    this.configurationService = e;
    this.workspaceService = t;
    this._register(this.workspaceService.onDidChangeWorkspaceFolders(async i => {
      for (const r of i.added) {
        await this.migrateConfigurationsForFolder(r, VAi.migrations);
      }
    }));
    this.migrateConfigurations(VAi.migrations);
    this._register(VAi.onDidRegisterConfigurationMigration(i => this.migrateConfigurations(i)));
  }
  async migrateConfigurations(e) {
    await this.migrateConfigurationsForFolder(undefined, e);
    for (const t of this.workspaceService.getWorkspace().folders) {
      await this.migrateConfigurationsForFolder(t, e);
    }
  }
  async migrateConfigurationsForFolder(e, t) {
    await Promise.all([t.map(i => this.migrateConfigurationsForFolderAndOverride(i, e?.uri))]);
  }
  async migrateConfigurationsForFolderAndOverride(e, t) {
    const i = this.configurationService.inspect(e.key, {
      resource: t
    });
    const r = this.workspaceService.getWorkbenchState() === 3 ? [["user", 2], ["userLocal", 3], ["userRemote", 4], ["workspace", 5], ["workspaceFolder", 6]] : [["user", 2], ["userLocal", 3], ["userRemote", 4], ["workspace", 5]];
    for (const [s, o] of r) {
      const a = i[s];
      if (!a) {
        continue;
      }
      const l = [];
      if (a.value !== undefined) {
        const u = await this.runMigration(e, s, a.value, t, undefined);
        for (const d of u ?? []) {
          l.push([d, []]);
        }
      }
      for (const {
        identifiers: u,
        value: d
      } of a.overrides ?? []) {
        if (d !== undefined) {
          const m = await this.runMigration(e, s, d, t, u);
          for (const p of m ?? []) {
            l.push([p, u]);
          }
        }
      }
      if (l.length) {
        await Promise.allSettled(l.map(async ([[u, d], m]) => this.configurationService.updateValue(u, d.value, {
          resource: t,
          overrideIdentifiers: m
        }, o)));
      }
    }
  }
  async runMigration(e, t, i, r, s) {
    const o = l => {
      const d = this.configurationService.inspect(l, {
        resource: r
      })[t];
      if (d) {
        if (s) {
          return d.overrides?.find(({
            identifiers: m
          }) => fv(m, s))?.value;
        } else {
          return d.value;
        }
      }
    };
    const a = await e.migrateFn(i, o);
    if (Array.isArray(a)) {
      return a;
    } else {
      return [[e.key, a]];
    }
  }
};
KAi = __decorate([__param(0, Fn), __param(1, Lr)], KAi);
Ymn = class extends at {
  static {
    this.ID = "workbench.contrib.dynamicWorkbenchSecurityConfiguration";
  }
  constructor(e) {
    super();
    this.remoteAgentService = e;
    this._ready = new wy();
    this.ready = this._ready.p;
    this.create();
  }
  async create() {
    try {
      await this.doCreate();
    } finally {
      this._ready.complete();
    }
  }
  async doCreate() {
    if (!Sc && (await this.remoteAgentService.getEnvironment())?.os !== 1) {
      return;
    }
    Di.as(Dh.Configuration).registerConfiguration({
      ...Cva,
      properties: {
        "security.allowedUNCHosts": {
          type: "array",
          items: {
            type: "string",
            pattern: "^[^\\\\]+$",
            patternErrorMessage: _(4313, null)
          },
          default: [],
          markdownDescription: _(4314, null),
          scope: 3
        },
        "security.restrictUNCAccess": {
          type: "boolean",
          default: true,
          markdownDescription: _(4315, null),
          scope: 3
        }
      }
    });
  }
};
Ymn = __decorate([__param(0, Vp)], Ymn);
xye = "window.newWindowProfile";
YAi = class extends at {
  static {
    this.ID = "workbench.contrib.dynamicWindowConfiguration";
  }
  constructor(e, t) {
    super();
    this.userDataProfilesService = e;
    this.configurationService = t;
    this.registerNewWindowProfileConfiguration();
    this._register(this.userDataProfilesService.onDidChangeProfiles(i => this.registerNewWindowProfileConfiguration()));
    this.setNewWindowProfile();
    this.checkAndResetNewWindowProfileConfig();
    this._register(t.onDidChangeConfiguration(i => {
      if (i.source !== 7 && i.affectsConfiguration(xye)) {
        this.setNewWindowProfile();
      }
    }));
    this._register(this.userDataProfilesService.onDidChangeProfiles(() => this.checkAndResetNewWindowProfileConfig()));
  }
  registerNewWindowProfileConfiguration() {
    const e = Di.as(Dh.Configuration);
    const t = {
      ...fau,
      properties: {
        [xye]: {
          type: ["string", "null"],
          default: null,
          enum: [...this.userDataProfilesService.profiles.map(i => i.name), null],
          enumItemLabels: [...this.userDataProfilesService.profiles.map(i => ""), _(4316, null)],
          description: _(4317, null),
          scope: 1
        }
      }
    };
    if (this.configurationNode) {
      e.updateConfigurations({
        add: [t],
        remove: [this.configurationNode]
      });
    } else {
      e.registerConfiguration(t);
    }
    this.configurationNode = t;
  }
  setNewWindowProfile() {
    const e = this.configurationService.getValue(xye);
    this.newWindowProfile = e ? this.userDataProfilesService.profiles.find(t => t.name === e) : undefined;
  }
  checkAndResetNewWindowProfileConfig() {
    const e = this.configurationService.getValue(xye);
    if (!e) {
      return;
    }
    const t = this.newWindowProfile ? this.userDataProfilesService.profiles.find(i => i.id === this.newWindowProfile.id) : undefined;
    if (e !== t?.name) {
      this.configurationService.updateValue(xye, t?.name);
    }
  }
};
YAi = __decorate([__param(0, KA), __param(1, Fn)], YAi);
