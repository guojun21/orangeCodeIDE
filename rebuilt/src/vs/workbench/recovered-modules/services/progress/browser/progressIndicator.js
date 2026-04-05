"use strict";

// Module: out-build/vs/workbench/services/progress/browser/progressIndicator.js
// Offset: 30845747 (bundle byte offset)
// Size: 4183 bytes
yn();
rt();
Xg();
Tpu = class extends at {
  constructor(n, e) {
    super();
    this.progressBar = n;
    this.group = e;
    this.registerListeners();
  }
  registerListeners() {
    if (this.group) {
      this._register(this.group.onDidModelChange(n => {
        if (n.kind === 8 || n.kind === 6 && this.group && this.group.isEmpty) {
          this.progressBar.stop().hide();
        }
      }));
    }
  }
  show(n, e) {
    if (this.group && this.group.isEmpty) {
      return EIc;
    } else if (n === true) {
      return this.doShow(true, e);
    } else {
      return this.doShow(n, e);
    }
  }
  doShow(n, e) {
    if (typeof n == "boolean") {
      this.progressBar.infinite().show(e);
    } else {
      this.progressBar.total(n).show(e);
    }
    return {
      total: t => {
        this.progressBar.total(t);
      },
      worked: t => {
        if (this.progressBar.hasTotal()) {
          this.progressBar.worked(t);
        } else {
          this.progressBar.infinite().show();
        }
      },
      done: () => {
        this.progressBar.stop().hide();
      }
    };
  }
  async showWhile(n, e) {
    if (this.group && this.group.isEmpty) {
      try {
        await n;
      } catch {}
    }
    return this.doShowWhile(n, e);
  }
  async doShowWhile(n, e) {
    try {
      this.progressBar.infinite().show(e);
      await n;
    } catch {} finally {
      this.progressBar.stop().hide();
    }
  }
};
(function (n) {
  let e;
  (function (r) {
    r[r.None = 0] = "None";
    r[r.Done = 1] = "Done";
    r[r.Infinite = 2] = "Infinite";
    r[r.While = 3] = "While";
    r[r.Work = 4] = "Work";
  })(e = n.Type ||= {});
  n.None = {
    type: 0
  };
  n.Done = {
    type: 1
  };
  n.Infinite = {
    type: 2
  };
  class t {
    constructor(s, o, a) {
      this.whilePromise = s;
      this.whileStart = o;
      this.whileDelay = a;
      this.type = 3;
    }
  }
  n.While = t;
  class i {
    constructor(s, o) {
      this.total = s;
      this.worked = o;
      this.type = 4;
    }
  }
  n.Work = i;
})(Hye ||= {});
sCa = class extends at {
  constructor(n, e) {
    super();
    this.progressBar = n;
    this.scope = e;
    this.progressState = Hye.None;
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.scope.onDidChangeActive(() => {
      if (this.scope.isActive) {
        this.onDidScopeActivate();
      } else {
        this.onDidScopeDeactivate();
      }
    }));
  }
  onDidScopeActivate() {
    if (this.progressState.type !== Hye.Done.type) {
      if (this.progressState.type === 3) {
        let n;
        if (this.progressState.whileDelay > 0) {
          const e = this.progressState.whileDelay - (Date.now() - this.progressState.whileStart);
          if (e > 0) {
            n = e;
          }
        }
        this.doShowWhile(n);
      } else if (this.progressState.type === 2) {
        this.progressBar.infinite().show();
      } else if (this.progressState.type === 4) {
        if (this.progressState.total) {
          this.progressBar.total(this.progressState.total).show();
        }
        if (this.progressState.worked) {
          this.progressBar.worked(this.progressState.worked).show();
        }
      }
    }
  }
  onDidScopeDeactivate() {
    this.progressBar.stop().hide();
  }
  show(n, e) {
    if (typeof n == "boolean") {
      this.progressState = Hye.Infinite;
    } else {
      this.progressState = new Hye.Work(n, undefined);
    }
    if (this.scope.isActive) {
      if (this.progressState.type === 2) {
        this.progressBar.infinite().show(e);
      } else if (this.progressState.type === 4 && typeof this.progressState.total == "number") {
        this.progressBar.total(this.progressState.total).show(e);
      }
    }
    return {
      total: t => {
        this.progressState = new Hye.Work(t, this.progressState.type === 4 ? this.progressState.worked : undefined);
        if (this.scope.isActive) {
          this.progressBar.total(t);
        }
      },
      worked: t => {
        if (!this.scope.isActive || this.progressBar.hasTotal()) {
          this.progressState = new Hye.Work(this.progressState.type === 4 ? this.progressState.total : undefined, this.progressState.type === 4 && typeof this.progressState.worked == "number" ? this.progressState.worked + t : t);
          if (this.scope.isActive) {
            this.progressBar.worked(t);
          }
        } else {
          this.progressState = Hye.Infinite;
          this.progressBar.infinite().show();
        }
      },
      done: () => {
        this.progressState = Hye.Done;
        if (this.scope.isActive) {
          this.progressBar.stop().hide();
        }
      }
    };
  }
  async showWhile(n, e) {
    if (this.progressState.type === 3) {
      n = Promise.allSettled([n, this.progressState.whilePromise]);
    }
    this.progressState = new Hye.While(n, e || 0, Date.now());
    try {
      this.doShowWhile(e);
      await n;
    } catch {} finally {
      if (this.progressState.type !== 3 || this.progressState.whilePromise === n) {
        this.progressState = Hye.None;
        if (this.scope.isActive) {
          this.progressBar.stop().hide();
        }
      }
    }
  }
  doShowWhile(n) {
    if (this.scope.isActive) {
      this.progressBar.infinite().show(n);
    }
  }
};
oCa = class extends at {
  get isActive() {
    return this._isActive;
  }
  constructor(n, e) {
    super();
    this.scopeId = n;
    this._isActive = e;
    this._onDidChangeActive = this._register(new Qe());
    this.onDidChangeActive = this._onDidChangeActive.event;
  }
  PUBLIC_BE_CAREFUL_onScopeOpened(n) {
    this.onScopeOpened(n);
  }
  PUBLIC_BE_CAREFUL_onScopeClosed(n) {
    this.onScopeClosed(n);
  }
  onScopeOpened(n) {
    if (n === this.scopeId) {
      if (!this._isActive) {
        this._isActive = true;
        this._onDidChangeActive.fire();
      }
    }
  }
  onScopeClosed(n) {
    if (n === this.scopeId && this._isActive) {
      this._isActive = false;
      this._onDidChangeActive.fire();
    }
  }
};
