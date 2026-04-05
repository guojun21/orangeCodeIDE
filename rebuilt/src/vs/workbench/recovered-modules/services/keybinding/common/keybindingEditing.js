"use strict";

// Module: out-build/vs/workbench/services/keybinding/common/keybindingEditing.js
// Offset: 27652403 (bundle byte offset)
// Size: 11505 bytes
Ht();
vr();
aB();
np();
GSt();
rt();
nI();
ts();
db();
td();
si();
ns();
Wt();
Ff();
Er();
Kw();
dnt = xi("keybindingEditingService");
cba = class extends at {
  constructor(e, t, i, r) {
    super();
    this.textModelResolverService = e;
    this.textFileService = t;
    this.fileService = i;
    this.userDataProfileService = r;
    this.queue = new yoe();
  }
  addKeybinding(e, t, i) {
    return this.queue.queue(() => this.doEditKeybinding(e, t, i, true));
  }
  addKeybindingRule(e, t, i) {
    return this.queue.queue(async () => {
      const r = await this.resolveAndValidate();
      const s = r.object.textEditorModel;
      const o = this.asObject(t, e, i, false);
      const {
        tabSize: a,
        insertSpaces: l
      } = s.getOptions();
      const u = s.getEOL();
      this.applyEditsToBuffer(oie(s.getValue(), [-1], o, {
        tabSize: a,
        insertSpaces: l,
        eol: u
      })[0], s);
      try {
        return await this.save();
      } finally {
        r.dispose();
      }
    });
  }
  editKeybinding(e, t, i) {
    return this.queue.queue(() => this.doEditKeybinding(e, t, i, false));
  }
  resetKeybinding(e) {
    return this.queue.queue(() => this.doResetKeybinding(e));
  }
  removeKeybinding(e) {
    return this.queue.queue(() => this.doRemoveKeybinding(e));
  }
  async doEditKeybinding(e, t, i, r) {
    const s = await this.resolveAndValidate();
    const o = s.object.textEditorModel;
    if (r) {
      this.updateKeybinding(e, t, i, o, -1);
    } else {
      const a = L1(o.getValue());
      const l = this.findUserKeybindingEntryIndex(e, a);
      this.updateKeybinding(e, t, i, o, l);
      if (e.isDefault && e.resolvedKeybinding) {
        this.removeDefaultKeybinding(e, o);
      }
    }
    try {
      await this.save();
    } finally {
      s.dispose();
    }
  }
  async doRemoveKeybinding(e) {
    const t = await this.resolveAndValidate();
    const i = t.object.textEditorModel;
    if (e.isDefault) {
      this.removeDefaultKeybinding(e, i);
    } else {
      this.removeUserKeybinding(e, i);
    }
    try {
      return await this.save();
    } finally {
      t.dispose();
    }
  }
  async doResetKeybinding(e) {
    const t = await this.resolveAndValidate();
    const i = t.object.textEditorModel;
    if (!e.isDefault) {
      this.removeUserKeybinding(e, i);
      this.removeUnassignedDefaultKeybinding(e, i);
    }
    try {
      return await this.save();
    } finally {
      t.dispose();
    }
  }
  save() {
    return this.textFileService.save(this.userDataProfileService.currentProfile.keybindingsResource);
  }
  updateKeybinding(e, t, i, r, s) {
    const {
      tabSize: o,
      insertSpaces: a
    } = r.getOptions();
    const l = r.getEOL();
    if (s !== -1) {
      this.applyEditsToBuffer(oie(r.getValue(), [s, "key"], t, {
        tabSize: o,
        insertSpaces: a,
        eol: l
      })[0], r);
      const u = oie(r.getValue(), [s, "when"], i, {
        tabSize: o,
        insertSpaces: a,
        eol: l
      });
      if (u.length > 0) {
        this.applyEditsToBuffer(u[0], r);
      }
    } else {
      this.applyEditsToBuffer(oie(r.getValue(), [-1], this.asObject(t, e.command, i, false), {
        tabSize: o,
        insertSpaces: a,
        eol: l
      })[0], r);
    }
  }
  removeUserKeybinding(e, t) {
    const {
      tabSize: i,
      insertSpaces: r
    } = t.getOptions();
    const s = t.getEOL();
    const o = L1(t.getValue());
    const a = this.findUserKeybindingEntryIndex(e, o);
    if (a !== -1) {
      this.applyEditsToBuffer(oie(t.getValue(), [a], undefined, {
        tabSize: i,
        insertSpaces: r,
        eol: s
      })[0], t);
    }
  }
  removeDefaultKeybinding(e, t) {
    const {
      tabSize: i,
      insertSpaces: r
    } = t.getOptions();
    const s = t.getEOL();
    const o = e.resolvedKeybinding ? e.resolvedKeybinding.getUserSettingsLabel() : null;
    if (o) {
      const a = this.asObject(o, e.command, e.when ? e.when.serialize() : undefined, true);
      if (L1(t.getValue()).every(u => !this.areSame(u, a))) {
        this.applyEditsToBuffer(oie(t.getValue(), [-1], a, {
          tabSize: i,
          insertSpaces: r,
          eol: s
        })[0], t);
      }
    }
  }
  removeUnassignedDefaultKeybinding(e, t) {
    const {
      tabSize: i,
      insertSpaces: r
    } = t.getOptions();
    const s = t.getEOL();
    const o = L1(t.getValue());
    const a = this.findUnassignedDefaultKeybindingEntryIndex(e, o).reverse();
    for (const l of a) {
      this.applyEditsToBuffer(oie(t.getValue(), [l], undefined, {
        tabSize: i,
        insertSpaces: r,
        eol: s
      })[0], t);
    }
  }
  findUserKeybindingEntryIndex(e, t) {
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      if (r.command === e.command) {
        if (!r.when && !e.when) {
          return i;
        }
        if (r.when && e.when) {
          const s = Ee.deserialize(r.when);
          if (s && s.serialize() === e.when.serialize()) {
            return i;
          }
        }
      }
    }
    return -1;
  }
  findUnassignedDefaultKeybindingEntryIndex(e, t) {
    const i = [];
    for (let r = 0; r < t.length; r++) {
      if (t[r].command === `-${e.command}`) {
        i.push(r);
      }
    }
    return i;
  }
  asObject(e, t, i, r) {
    const s = {
      key: e
    };
    if (t) {
      s.command = r ? `-${t}` : t;
    }
    if (i) {
      s.when = i;
    }
    return s;
  }
  areSame(e, t) {
    if (e.command !== t.command || e.key !== t.key) {
      return false;
    }
    const i = Ee.deserialize(e.when);
    const r = Ee.deserialize(t.when);
    return (!i || !!r) && (!!i || !r) && (!i || !r || !!i.equals(r)) && !!fv(e.args, t.args);
  }
  applyEditsToBuffer(e, t) {
    const i = t.getPositionAt(e.offset);
    const r = t.getPositionAt(e.offset + e.length);
    const s = new Zt(i.lineNumber, i.column, r.lineNumber, r.column);
    const a = t.getValueInRange(s) ? zb.replace(s, e.content) : zb.insert(i, e.content);
    t.pushEditOperations([new Vl(i.lineNumber, i.column, i.lineNumber, i.column)], [a], () => []);
  }
  async resolveModelReference() {
    if (!(await this.fileService.exists(this.userDataProfileService.currentProfile.keybindingsResource))) {
      await this.textFileService.write(this.userDataProfileService.currentProfile.keybindingsResource, this.getEmptyContent(), {
        encoding: "utf8"
      });
    }
    return this.textModelResolverService.createModelReference(this.userDataProfileService.currentProfile.keybindingsResource);
  }
  async resolveAndValidate() {
    if (this.textFileService.isDirty(this.userDataProfileService.currentProfile.keybindingsResource)) {
      throw new Error(_(14326, null));
    }
    const e = await this.resolveModelReference();
    const t = e.object.textEditorModel;
    const i = t.getEOL();
    if (t.getValue()) {
      const r = this.parse(t);
      if (r.parseErrors.length) {
        e.dispose();
        throw new Error(_(14327, null));
      }
      if (r.result) {
        if (!Array.isArray(r.result)) {
          e.dispose();
          throw new Error(_(14328, null));
        }
      } else {
        const s = i + "[]";
        this.applyEditsToBuffer({
          content: s,
          length: s.length,
          offset: t.getValue().length
        }, t);
      }
    } else {
      const r = this.getEmptyContent();
      this.applyEditsToBuffer({
        content: r,
        length: r.length,
        offset: 0
      }, t);
    }
    return e;
  }
  parse(e) {
    const t = [];
    return {
      result: L1(e.getValue(), t, {
        allowTrailingComma: true,
        allowEmptyContent: true
      }),
      parseErrors: t
    };
  }
  getEmptyContent() {
    return `${"// " + _(14329, null)}
[
]`;
  }
};
cba = __decorate([__param(0, El), __param(1, Gg), __param(2, Gr), __param(3, Py)], cba);
Vi(dnt, cba, 1);
