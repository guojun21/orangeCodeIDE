"use strict";

// Module: out-build/vs/platform/secrets/common/secrets.js
// Offset: 28161996 (bundle byte offset)
// Size: 3397 bytes
vr();
tau();
Wt();
kr();
yn();
jr();
rt();
L0();
Z$e = xi("secretStorageService");
ova = class extends at {
  constructor(e, t, i, r) {
    super();
    this._useInMemoryStorage = e;
    this._storageService = t;
    this._encryptionService = i;
    this._logService = r;
    this._storagePrefix = "secret://";
    this.onDidChangeSecretEmitter = this._register(new Qe());
    this.onDidChangeSecret = this.onDidChangeSecretEmitter.event;
    this._sequencer = new KFt();
    this._type = "unknown";
    this._onDidChangeValueDisposable = this._register(new Ut());
    this._lazyStorageService = new Ob(() => this.initialize());
  }
  get type() {
    return this._type;
  }
  get resolvedStorageService() {
    return this._lazyStorageService.value;
  }
  get(e) {
    return this._sequencer.queue(e, async () => {
      const t = await this.resolvedStorageService;
      const i = this.getKey(e);
      this._logService.trace("[secrets] getting secret for key:", i);
      const r = t.get(i, -1);
      if (!r) {
        this._logService.trace("[secrets] no secret found for key:", i);
        return;
      }
      try {
        this._logService.trace("[secrets] decrypting gotten secret for key:", i);
        const s = this._type === "in-memory" ? r : await this._encryptionService.decrypt(r);
        this._logService.trace("[secrets] decrypted secret for key:", i);
        return s;
      } catch (s) {
        this._logService.error(s);
        this.delete(e);
        return;
      }
    });
  }
  set(e, t) {
    return this._sequencer.queue(e, async () => {
      const i = await this.resolvedStorageService;
      this._logService.trace("[secrets] encrypting secret for key:", e);
      let r;
      try {
        r = this._type === "in-memory" ? t : await this._encryptionService.encrypt(t);
      } catch (o) {
        this._logService.error(o);
        throw o;
      }
      const s = this.getKey(e);
      this._logService.trace("[secrets] storing encrypted secret for key:", s);
      i.store(s, r, -1, 1);
      this._logService.trace("[secrets] stored encrypted secret for key:", s);
    });
  }
  delete(e) {
    return this._sequencer.queue(e, async () => {
      const t = await this.resolvedStorageService;
      const i = this.getKey(e);
      this._logService.trace("[secrets] deleting secret for key:", i);
      t.remove(i, -1);
      this._logService.trace("[secrets] deleted secret for key:", i);
    });
  }
  keys() {
    return this._sequencer.queue("__keys__", async () => {
      const e = await this.resolvedStorageService;
      this._logService.trace("[secrets] fetching keys of all secrets");
      const t = e.keys(-1, 1);
      this._logService.trace("[secrets] fetched keys of all secrets");
      return t.filter(i => i.startsWith(this._storagePrefix)).map(i => i.slice(this._storagePrefix.length));
    });
  }
  async initialize() {
    let e;
    if (!this._useInMemoryStorage && (await this._encryptionService.isEncryptionAvailable())) {
      this._logService.trace("[SecretStorageService] Encryption is available, using persisted storage");
      this._type = "persisted";
      e = this._storageService;
    } else {
      if (this._type === "in-memory") {
        return this._storageService;
      }
      this._logService.trace("[SecretStorageService] Encryption is not available, falling back to in-memory storage");
      this._type = "in-memory";
      e = this._register(new chh());
    }
    this._onDidChangeValueDisposable.clear();
    this._onDidChangeValueDisposable.add(e.onDidChangeValue(-1, undefined, this._onDidChangeValueDisposable)(t => {
      this.onDidChangeValue(t.key);
    }));
    return e;
  }
  reinitialize() {
    this._lazyStorageService = new Ob(() => this.initialize());
  }
  onDidChangeValue(e) {
    if (!e.startsWith(this._storagePrefix)) {
      return;
    }
    const t = e.slice(this._storagePrefix.length);
    this._logService.trace(`[SecretStorageService] Notifying change in value for secret: ${t}`);
    this.onDidChangeSecretEmitter.fire(t);
  }
  getKey(e) {
    return `${this._storagePrefix}${e}`;
  }
};
ova = __decorate([__param(1, Hi), __param(2, sva), __param(3, Rr)], ova);
