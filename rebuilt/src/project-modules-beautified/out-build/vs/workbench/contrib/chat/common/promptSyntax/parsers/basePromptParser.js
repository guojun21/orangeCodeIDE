"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/parsers/basePromptParser.js
// Offset: 31085303 (bundle byte offset)
// Size: 6029 bytes
usy();
Yn();
_sy();
yn();
Csy();
ts();
Js();
vr();
jr();
Hgu();
Yr();
Lv();
Yye();
Jgn();
Wt();
fSa();
Hgn();
jgn = class extends T1t {
  onUpdate(e) {
    this._register(this._onUpdate.event(e));
    return this;
  }
  get errorCondition() {
    return this._errorCondition;
  }
  get resolveFailed() {
    if (this.firstParseResult.gotFirstResult) {
      return !!this._errorCondition;
    }
  }
  async settled() {
    Qb(this.started, "Cannot wait on the parser that did not start yet.");
    await this.firstParseResult.promise;
    if (this.errorCondition) {
      return this;
    } else {
      egt(this.stream, "No stream reference found.");
      await this.stream.settled;
      return this;
    }
  }
  async allSettled() {
    await this.settled();
    await Promise.allSettled(this.references.map(e => e.allSettled()));
    return this;
  }
  constructor(e, t = [], i, r) {
    super();
    this.promptContentsProvider = e;
    this.instantiationService = i;
    this.logService = r;
    this._references = [];
    this._onUpdate = this._register(new Qe());
    this.firstParseResult = new PIf();
    this.started = false;
    this._onUpdate.fire = this._onUpdate.fire.bind(this._onUpdate);
    if (t.includes(this.uri.path)) {
      t.push(this.uri.path);
      this._errorCondition = new hSa(this.uri, t);
      this._onUpdate.fire();
      this.firstParseResult.complete();
      return this;
    }
    t.push(this.uri.path);
    this._register(this.promptContentsProvider.onContentChanged(s => {
      this.onContentsChanged(s, t);
      this.firstParseResult.complete();
    }));
    this.promptContentsProvider.onDispose(this.dispose.bind(this));
  }
  onContentsChanged(e, t) {
    this.stream?.dispose();
    delete this.stream;
    delete this._errorCondition;
    this.disposeReferences();
    if (e instanceof x1t) {
      this._errorCondition = e;
      this._onUpdate.fire();
      return;
    }
    this.stream = RIf.decode(e);
    this.stream.on("error", this.onStreamEnd.bind(this, this.stream));
    this.stream.on("end", this.onStreamEnd.bind(this, this.stream));
    this.stream.on("data", i => {
      if (i instanceof Y_i) {
        try {
          this.onReference(o0i.from(i), [...t]);
        } catch {}
      }
      if (i instanceof Cit && !i.isURL) {
        this.onReference(i, [...t]);
      }
    });
    if (this.stream.disposed) {
      this.logService.warn(`[prompt parser][${ca(this.uri)}] cannot start stream that has been already disposed, aborting`);
      return;
    }
    this.stream.start();
  }
  onReference(e, t) {
    const i = Iu.resolvePath(this.dirname, e.path);
    const r = this.promptContentsProvider.createNew({
      uri: i
    });
    const s = this.instantiationService.createInstance(DSa, r, e, t);
    s.onDispose(r.dispose.bind(r));
    this._references.push(s);
    s.onUpdate(this._onUpdate.fire);
    this._onUpdate.fire();
    s.start();
    return this;
  }
  onStreamEnd(e, t) {
    if (t) {
      this.logService.warn(`[prompt parser][${ca(this.uri)}] received an error on the chat prompt decoder stream: ${t}`);
    }
    this._onUpdate.fire();
    return this;
  }
  disposeReferences() {
    for (const e of [...this._references]) {
      e.dispose();
    }
    this._references.length = 0;
  }
  start() {
    if (this.started) {
      return this;
    } else {
      this.started = true;
      if (this.errorCondition) {
        return this;
      } else {
        this.promptContentsProvider.start();
        return this;
      }
    }
  }
  get uri() {
    return this.promptContentsProvider.uri;
  }
  get dirname() {
    return je.joinPath(this.uri, "..");
  }
  get references() {
    return [...this._references];
  }
  get allReferences() {
    const e = [];
    for (const t of this.references) {
      e.push(t);
      if (t.type === "file") {
        e.push(...t.allReferences);
      }
    }
    return e;
  }
  get allValidReferences() {
    return this.allReferences.filter(e => {
      const {
        errorCondition: t
      } = e;
      if (t) {
        if (t instanceof mSa) {
          return false;
        } else {
          return t instanceof Nqe;
        }
      } else {
        return true;
      }
    });
  }
  get allValidReferencesUris() {
    return this.allValidReferences.map(e => e.uri);
  }
  get errors() {
    const e = [];
    for (const t of this.references) {
      const {
        errorCondition: i
      } = t;
      if (i && !(i instanceof Nqe)) {
        e.push(i);
      }
    }
    return e;
  }
  get allErrors() {
    const e = [];
    for (const t of this.references) {
      const {
        errorCondition: i
      } = t;
      if (i && !(i instanceof Nqe)) {
        e.push({
          originalError: i,
          parentUri: this.uri
        });
      }
      e.push(...t.allErrors);
    }
    return e;
  }
  get topError() {
    if (this.errorCondition) {
      return new Mgu({
        errorSubject: "root",
        errorsCount: 1,
        originalError: this.errorCondition
      });
    }
    const e = [...this.errors];
    const t = [];
    for (const u of this.references) {
      t.push(...u.allErrors);
    }
    if (e.length === 0 && t.length === 0) {
      return;
    }
    const i = e[0];
    const r = t[0];
    const s = i !== undefined;
    const o = s ? {
      originalError: i,
      parentUri: this.uri
    } : r;
    const a = e.length + t.length;
    const l = s ? "child" : "indirect-child";
    return new Mgu({
      errorSubject: l,
      originalError: o.originalError,
      parentUri: o.parentUri,
      errorsCount: a
    });
  }
  sameUri(e) {
    return this.uri.toString() === e.toString();
  }
  get isPromptFile() {
    return Lqe(this.uri);
  }
  toString() {
    return `prompt:${this.uri.path}`;
  }
  dispose() {
    if (!this.disposed) {
      this.disposeReferences();
      this.stream?.dispose();
      this._onUpdate.fire();
      super.dispose();
    }
  }
};
jgn = __decorate([__param(2, ln), __param(3, Rr)], jgn);
DSa = class extends T1t {
  constructor(e, t, i = [], r) {
    super();
    this.promptContentsProvider = e;
    this.token = t;
    this.range = Zt.lift(this.token.range);
    this.path = this.token.path;
    this.text = this.token.text;
    this.parser = this._register(r.createInstance(jgn, this.promptContentsProvider, i));
  }
  get linkRange() {
    if (this.token instanceof o0i) {
      return this.token.dataRange;
    }
    if (this.token instanceof Cit) {
      return this.token.linkRange;
    }
  }
  get type() {
    if (this.token instanceof o0i || this.token instanceof Cit) {
      return "file";
    }
    QN(this.token, `Unknown token type '${this.token}'.`);
  }
  get subtype() {
    if (this.token instanceof o0i) {
      return "prompt";
    }
    if (this.token instanceof Cit) {
      return "markdown";
    }
    QN(this.token, `Unknown token type '${this.token}'.`);
  }
  start() {
    this.parser.start();
    return this;
  }
  onUpdate(e) {
    this.parser.onUpdate(e);
    return this;
  }
  get resolveFailed() {
    return this.parser.resolveFailed;
  }
  get errorCondition() {
    return this.parser.errorCondition;
  }
  get topError() {
    return this.parser.topError;
  }
  get uri() {
    return this.parser.uri;
  }
  get isPromptFile() {
    return this.parser.isPromptFile;
  }
  get errors() {
    return this.parser.errors;
  }
  get allErrors() {
    return this.parser.allErrors;
  }
  get references() {
    return this.parser.references;
  }
  get allReferences() {
    return this.parser.allReferences;
  }
  get allValidReferences() {
    return this.parser.allValidReferences;
  }
  async settled() {
    await this.parser.settled();
    return this;
  }
  async allSettled() {
    await this.parser.allSettled();
    return this;
  }
  toString() {
    return `prompt-reference/${this.type}:${this.subtype}/${this.token}`;
  }
};
DSa = __decorate([__param(3, ln)], DSa);
PIf = class extends wy {
  constructor() {
    super(...arguments);
    this._gotResult = false;
  }
  get gotFirstResult() {
    return this._gotResult;
  }
  get promise() {
    return this.p;
  }
  complete() {
    this._gotResult = true;
    return super.complete(undefined);
  }
};
