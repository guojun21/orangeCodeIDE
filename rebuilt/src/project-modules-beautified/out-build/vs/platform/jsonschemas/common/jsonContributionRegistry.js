"use strict";

// Module: out-build/vs/platform/jsonschemas/common/jsonContributionRegistry.js
// Offset: 755860 (bundle byte offset)
// Size: 2790 bytes
yn();
TrA();
rt();
Ws();
KN = {
  JSONContribution: "base.contributions.json"
};
Zch = class extends at {
  constructor() {
    super(...arguments);
    this.schemasById = {};
    this.schemaAssociations = {};
    this._onDidChangeSchema = this._register(new Qe());
    this.onDidChangeSchema = this._onDidChangeSchema.event;
    this._onDidChangeSchemaAssociations = this._register(new Qe());
    this.onDidChangeSchemaAssociations = this._onDidChangeSchemaAssociations.event;
  }
  registerSchema(n, e, t) {
    const i = Ych(n);
    this.schemasById[i] = e;
    this._onDidChangeSchema.fire(n);
    if (t) {
      t.add($i(() => {
        delete this.schemasById[i];
        this._onDidChangeSchema.fire(n);
      }));
    }
  }
  registerSchemaAssociation(n, e) {
    const t = Ych(n);
    this.schemaAssociations[t] ||= [];
    if (!this.schemaAssociations[t].includes(e)) {
      this.schemaAssociations[t].push(e);
      this._onDidChangeSchemaAssociations.fire();
    }
    return $i(() => {
      const i = this.schemaAssociations[t];
      if (i) {
        const r = i.indexOf(e);
        if (r !== -1) {
          i.splice(r, 1);
          if (i.length === 0) {
            delete this.schemaAssociations[t];
          }
          this._onDidChangeSchemaAssociations.fire();
        }
      }
    });
  }
  notifySchemaChanged(n) {
    this._onDidChangeSchema.fire(n);
  }
  getSchemaContributions() {
    return {
      schemas: this.schemasById
    };
  }
  getSchemaContent(n) {
    const e = this.schemasById[n];
    if (e) {
      return ErA(e);
    } else {
      return undefined;
    }
  }
  hasSchemaContent(n) {
    return !!this.schemasById[n];
  }
  getSchemaAssociations() {
    return this.schemaAssociations;
  }
};
Xch = new Zch();
Di.add(KN.JSONContribution, Xch);
