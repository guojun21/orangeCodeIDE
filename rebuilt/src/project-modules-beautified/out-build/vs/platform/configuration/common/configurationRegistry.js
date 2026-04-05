"use strict";

// Module: out-build/vs/platform/configuration/common/configurationRegistry.js
// Offset: 758650 (bundle byte offset)
// Size: 11109 bytes
Vs();
yn();
Js();
Ht();
Ei();
mF();
Ws();
rt();
(function (n) {
  n.Multiline = "multilineText";
  n.Singleline = "singlelineText";
})(zkc ||= {});
Dh = {
  Configuration: "base.contributions.configuration"
};
(function (n) {
  n[n.APPLICATION = 1] = "APPLICATION";
  n[n.MACHINE = 2] = "MACHINE";
  n[n.APPLICATION_MACHINE = 3] = "APPLICATION_MACHINE";
  n[n.WINDOW = 4] = "WINDOW";
  n[n.RESOURCE = 5] = "RESOURCE";
  n[n.LANGUAGE_OVERRIDABLE = 6] = "LANGUAGE_OVERRIDABLE";
  n[n.MACHINE_OVERRIDABLE = 7] = "MACHINE_OVERRIDABLE";
})(slh ||= {});
rz = {
  properties: {},
  patternProperties: {}
};
G4t = {
  properties: {},
  patternProperties: {}
};
W4t = {
  properties: {},
  patternProperties: {}
};
nft = {
  properties: {},
  patternProperties: {}
};
WBe = {
  properties: {},
  patternProperties: {}
};
QBe = {
  properties: {},
  patternProperties: {}
};
Wbe = {
  properties: {},
  patternProperties: {}
};
U5e = "vscode://schemas/settings/resourceLanguage";
Vkc = "vscode://schemas/settings/configurationDefaults";
w4n = Di.as(KN.JSONContribution);
olh = class extends at {
  constructor() {
    super();
    this.registeredConfigurationDefaults = [];
    this.overrideIdentifiers = new Set();
    this._onDidSchemaChange = this._register(new Qe());
    this.onDidSchemaChange = this._onDidSchemaChange.event;
    this._onDidUpdateConfiguration = this._register(new Qe());
    this.onDidUpdateConfiguration = this._onDidUpdateConfiguration.event;
    this.configurationDefaultsOverrides = new Map();
    this.defaultLanguageConfigurationOverridesNode = {
      id: "defaultOverrides",
      title: _(1807, null),
      properties: {}
    };
    this.configurationContributors = [this.defaultLanguageConfigurationOverridesNode];
    this.resourceLanguageSettingsSchema = {
      properties: {},
      patternProperties: {},
      additionalProperties: true,
      allowTrailingCommas: true,
      allowComments: true
    };
    this.configurationProperties = {};
    this.policyConfigurations = new Map();
    this.excludedConfigurationProperties = {};
    w4n.registerSchema(U5e, this.resourceLanguageSettingsSchema);
    this.registerOverridePropertyPatternKey();
  }
  registerConfiguration(n, e = true) {
    this.registerConfigurations([n], e);
    return n;
  }
  registerConfigurations(n, e = true) {
    const t = new Set();
    this.doRegisterConfigurations(n, e, t);
    w4n.registerSchema(U5e, this.resourceLanguageSettingsSchema);
    this._onDidSchemaChange.fire();
    this._onDidUpdateConfiguration.fire({
      properties: t
    });
  }
  deregisterConfigurations(n) {
    const e = new Set();
    this.doDeregisterConfigurations(n, e);
    w4n.registerSchema(U5e, this.resourceLanguageSettingsSchema);
    this._onDidSchemaChange.fire();
    this._onDidUpdateConfiguration.fire({
      properties: e
    });
  }
  updateConfigurations({
    add: n,
    remove: e
  }) {
    const t = new Set();
    this.doDeregisterConfigurations(e, t);
    this.doRegisterConfigurations(n, false, t);
    w4n.registerSchema(U5e, this.resourceLanguageSettingsSchema);
    this._onDidSchemaChange.fire();
    this._onDidUpdateConfiguration.fire({
      properties: t
    });
  }
  registerDefaultConfigurations(n) {
    const e = new Set();
    this.doRegisterDefaultConfigurations(n, e);
    this._onDidSchemaChange.fire();
    this._onDidUpdateConfiguration.fire({
      properties: e,
      defaultsOverrides: true
    });
  }
  doRegisterDefaultConfigurations(n, e) {
    this.registeredConfigurationDefaults.push(...n);
    const t = [];
    for (const {
      overrides: i,
      source: r
    } of n) {
      for (const s in i) {
        e.add(s);
        const o = this.configurationDefaultsOverrides.get(s) ?? this.configurationDefaultsOverrides.set(s, {
          configurationDefaultOverrides: []
        }).get(s);
        const a = i[s];
        o.configurationDefaultOverrides.push({
          value: a,
          source: r
        });
        if ($$.test(s)) {
          const l = this.mergeDefaultConfigurationsForOverrideIdentifier(s, a, r, o.configurationDefaultOverrideValue);
          if (!l) {
            continue;
          }
          o.configurationDefaultOverrideValue = l;
          this.updateDefaultOverrideProperty(s, l, r);
          t.push(...J4t(s));
        } else {
          const l = this.mergeDefaultConfigurationsForConfigurationProperty(s, a, r, o.configurationDefaultOverrideValue);
          if (!l) {
            continue;
          }
          o.configurationDefaultOverrideValue = l;
          const u = this.configurationProperties[s];
          if (u) {
            this.updatePropertyDefaultValue(s, u);
            this.updateSchema(s, u);
          }
        }
      }
    }
    this.doRegisterOverrideIdentifiers(t);
  }
  deregisterDefaultConfigurations(n) {
    const e = new Set();
    this.doDeregisterDefaultConfigurations(n, e);
    this._onDidSchemaChange.fire();
    this._onDidUpdateConfiguration.fire({
      properties: e,
      defaultsOverrides: true
    });
  }
  doDeregisterDefaultConfigurations(n, e) {
    for (const t of n) {
      const i = this.registeredConfigurationDefaults.indexOf(t);
      if (i !== -1) {
        this.registeredConfigurationDefaults.splice(i, 1);
      }
    }
    for (const {
      overrides: t,
      source: i
    } of n) {
      for (const r in t) {
        const s = this.configurationDefaultsOverrides.get(r);
        if (!s) {
          continue;
        }
        const o = s.configurationDefaultOverrides.findIndex(a => i ? a.source?.id === i.id : a.value === t[r]);
        if (o !== -1) {
          s.configurationDefaultOverrides.splice(o, 1);
          if (s.configurationDefaultOverrides.length === 0) {
            this.configurationDefaultsOverrides.delete(r);
          }
          if ($$.test(r)) {
            let a;
            for (const l of s.configurationDefaultOverrides) {
              a = this.mergeDefaultConfigurationsForOverrideIdentifier(r, l.value, l.source, a);
            }
            if (a && !xbe(a.value)) {
              s.configurationDefaultOverrideValue = a;
              this.updateDefaultOverrideProperty(r, a, i);
            } else {
              this.configurationDefaultsOverrides.delete(r);
              delete this.configurationProperties[r];
              delete this.defaultLanguageConfigurationOverridesNode.properties[r];
            }
          } else {
            let a;
            for (const u of s.configurationDefaultOverrides) {
              a = this.mergeDefaultConfigurationsForConfigurationProperty(r, u.value, u.source, a);
            }
            s.configurationDefaultOverrideValue = a;
            const l = this.configurationProperties[r];
            if (l) {
              this.updatePropertyDefaultValue(r, l);
              this.updateSchema(r, l);
            }
          }
          e.add(r);
        }
      }
    }
    this.updateOverridePropertyPatternKey();
  }
  updateDefaultOverrideProperty(n, e, t) {
    const i = {
      type: "object",
      default: e.value,
      description: _(1808, null, Gch(n)),
      $ref: U5e,
      defaultDefaultValue: e.value,
      source: t,
      defaultValueSource: t
    };
    this.configurationProperties[n] = i;
    this.defaultLanguageConfigurationOverridesNode.properties[n] = i;
  }
  mergeDefaultConfigurationsForOverrideIdentifier(n, e, t, i) {
    const r = i?.value || {};
    const s = i?.source ?? new Map();
    if (!(s instanceof Map)) {
      console.error("objectConfigurationSources is not a Map");
      return;
    }
    for (const o of Object.keys(e)) {
      const a = e[o];
      if ($g(a) && (Df(r[o]) || $g(r[o]))) {
        r[o] = {
          ...(r[o] ?? {}),
          ...a
        };
        if (t) {
          for (const u in a) {
            s.set(`${o}.${u}`, t);
          }
        }
      } else {
        r[o] = a;
        if (t) {
          s.set(o, t);
        } else {
          s.delete(o);
        }
      }
    }
    return {
      value: r,
      source: s
    };
  }
  mergeDefaultConfigurationsForConfigurationProperty(n, e, t, i) {
    const r = this.configurationProperties[n];
    const s = i?.value ?? r?.defaultDefaultValue;
    let o = t;
    if ($g(e) && (r !== undefined && r.type === "object" || r === undefined && (Df(s) || $g(s)))) {
      o = i?.source ?? new Map();
      if (!(o instanceof Map)) {
        console.error("defaultValueSource is not a Map");
        return;
      }
      for (const l in e) {
        if (t) {
          o.set(`${n}.${l}`, t);
        }
      }
      e = {
        ...($g(s) ? s : {}),
        ...e
      };
    }
    return {
      value: e,
      source: o
    };
  }
  deltaConfiguration(n) {
    let e = false;
    const t = new Set();
    if (n.removedDefaults) {
      this.doDeregisterDefaultConfigurations(n.removedDefaults, t);
      e = true;
    }
    if (n.addedDefaults) {
      this.doRegisterDefaultConfigurations(n.addedDefaults, t);
      e = true;
    }
    if (n.removedConfigurations) {
      this.doDeregisterConfigurations(n.removedConfigurations, t);
    }
    if (n.addedConfigurations) {
      this.doRegisterConfigurations(n.addedConfigurations, false, t);
    }
    this._onDidSchemaChange.fire();
    this._onDidUpdateConfiguration.fire({
      properties: t,
      defaultsOverrides: e
    });
  }
  notifyConfigurationSchemaUpdated(...n) {
    this._onDidSchemaChange.fire();
  }
  registerOverrideIdentifiers(n) {
    this.doRegisterOverrideIdentifiers(n);
    this._onDidSchemaChange.fire();
  }
  doRegisterOverrideIdentifiers(n) {
    for (const e of n) {
      this.overrideIdentifiers.add(e);
    }
    this.updateOverridePropertyPatternKey();
  }
  doRegisterConfigurations(n, e, t) {
    n.forEach(i => {
      this.validateAndRegisterProperties(i, e, i.extensionInfo, i.restrictedProperties, undefined, t);
      this.configurationContributors.push(i);
      this.registerJSONConfiguration(i);
    });
  }
  doDeregisterConfigurations(n, e) {
    const t = i => {
      if (i.properties) {
        for (const r in i.properties) {
          e.add(r);
          const s = this.configurationProperties[r];
          if (s?.policy?.name) {
            this.policyConfigurations.delete(s.policy.name);
          }
          delete this.configurationProperties[r];
          this.removeFromSchema(r, i.properties[r]);
        }
      }
      i.allOf?.forEach(r => t(r));
    };
    for (const i of n) {
      t(i);
      const r = this.configurationContributors.indexOf(i);
      if (r !== -1) {
        this.configurationContributors.splice(r, 1);
      }
    }
  }
  validateAndRegisterProperties(n, e = true, t, i, r = 4, s) {
    r = gA(n.scope) ? r : n.scope;
    const o = n.properties;
    if (o) {
      for (const l in o) {
        const u = o[l];
        if (e && nlh(l, u)) {
          delete o[l];
          continue;
        }
        u.source = t;
        u.defaultDefaultValue = o[l].default;
        this.updatePropertyDefaultValue(l, u);
        if ($$.test(l)) {
          u.scope = undefined;
        } else {
          u.scope = gA(u.scope) ? r : u.scope;
          u.restricted = gA(u.restricted) ? !!i?.includes(l) : u.restricted;
        }
        const d = o[l].hasOwnProperty("included") && !o[l].included;
        const m = o[l].policy?.name;
        if (d) {
          this.excludedConfigurationProperties[l] = o[l];
          if (m) {
            this.policyConfigurations.set(m, l);
            s.add(l);
          }
          delete o[l];
        } else {
          s.add(l);
          if (m) {
            this.policyConfigurations.set(m, l);
          }
          this.configurationProperties[l] = o[l];
          if (!o[l].deprecationMessage && o[l].markdownDeprecationMessage) {
            o[l].deprecationMessage = o[l].markdownDeprecationMessage;
          }
        }
      }
    }
    const a = n.allOf;
    if (a) {
      for (const l of a) {
        this.validateAndRegisterProperties(l, e, t, i, r, s);
      }
    }
  }
  getConfigurations() {
    return this.configurationContributors;
  }
  getConfigurationProperties() {
    return this.configurationProperties;
  }
  getPolicyConfigurations() {
    return this.policyConfigurations;
  }
  getExcludedConfigurationProperties() {
    return this.excludedConfigurationProperties;
  }
  getRegisteredDefaultConfigurations() {
    return [...this.registeredConfigurationDefaults];
  }
  getConfigurationDefaultsOverrides() {
    const n = new Map();
    for (const [e, t] of this.configurationDefaultsOverrides) {
      if (t.configurationDefaultOverrideValue) {
        n.set(e, t.configurationDefaultOverrideValue);
      }
    }
    return n;
  }
  registerJSONConfiguration(n) {
    const e = t => {
      const i = t.properties;
      if (i) {
        for (const s in i) {
          this.updateSchema(s, i[s]);
        }
      }
      t.allOf?.forEach(e);
    };
    e(n);
  }
  updateSchema(n, e) {
    rz.properties[n] = e;
    switch (e.scope) {
      case 1:
        G4t.properties[n] = e;
        break;
      case 2:
        nft.properties[n] = e;
        break;
      case 3:
        W4t.properties[n] = e;
        break;
      case 7:
        WBe.properties[n] = e;
        break;
      case 4:
        QBe.properties[n] = e;
        break;
      case 5:
        Wbe.properties[n] = e;
        break;
      case 6:
        Wbe.properties[n] = e;
        this.resourceLanguageSettingsSchema.properties[n] = e;
        break;
    }
  }
  removeFromSchema(n, e) {
    delete rz.properties[n];
    switch (e.scope) {
      case 1:
        delete G4t.properties[n];
        break;
      case 2:
        delete nft.properties[n];
        break;
      case 3:
        delete W4t.properties[n];
        break;
      case 7:
        delete WBe.properties[n];
        break;
      case 4:
        delete QBe.properties[n];
        break;
      case 5:
      case 6:
        delete Wbe.properties[n];
        delete this.resourceLanguageSettingsSchema.properties[n];
        break;
    }
  }
  updateOverridePropertyPatternKey() {
    for (const n of this.overrideIdentifiers.values()) {
      const e = `[${n}]`;
      const t = {
        type: "object",
        description: _(1809, null),
        errorMessage: _(1810, null),
        $ref: U5e
      };
      this.updatePropertyDefaultValue(e, t);
      rz.properties[e] = t;
      G4t.properties[e] = t;
      W4t.properties[e] = t;
      nft.properties[e] = t;
      WBe.properties[e] = t;
      QBe.properties[e] = t;
      Wbe.properties[e] = t;
    }
  }
  registerOverridePropertyPatternKey() {
    const n = {
      type: "object",
      description: _(1811, null),
      errorMessage: _(1812, null),
      $ref: U5e
    };
    rz.patternProperties[jBe] = n;
    G4t.patternProperties[jBe] = n;
    W4t.patternProperties[jBe] = n;
    nft.patternProperties[jBe] = n;
    WBe.patternProperties[jBe] = n;
    QBe.patternProperties[jBe] = n;
    Wbe.patternProperties[jBe] = n;
    this._onDidSchemaChange.fire();
  }
  updatePropertyDefaultValue(n, e) {
    const t = this.configurationDefaultsOverrides.get(n)?.configurationDefaultOverrideValue;
    let i;
    let r;
    if (t && (!e.disallowConfigurationDefault || !t.source)) {
      i = t.value;
      r = t.source;
    }
    if (Df(i)) {
      i = e.defaultDefaultValue;
      r = undefined;
    }
    if (Df(i)) {
      i = jkc(e.type);
    }
    e.default = i;
    e.defaultValueSource = r;
  }
};
Kkc = "\\[([^\\]]+)\\]";
Ykc = new RegExp(Kkc, "g");
jBe = `^(${Kkc})+$`;
$$ = new RegExp(jBe);
Zkc = "glob:";
Q4t = new olh();
Di.add(Dh.Configuration, Q4t);
