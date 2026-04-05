"use strict";

// Module: out-build/vs/workbench/contrib/cursorBlame/browser/cursorBlameEditor.js
// Offset: 34198438 (bundle byte offset)
// Size: 35711 bytes
qi();
zr();
Yn();
Wt();
kr();
Pa();
Io();
hB();
Ud();
xT();
fgy();
Qrt = "workbench.editor.cursorblame";
g1i = class {
  constructor(e) {
    this.instantiationService = e;
  }
  canSerialize(e) {
    return e instanceof Sxe;
  }
  serialize(e) {
    if (e instanceof Sxe) {
      return JSON.stringify({
        options: e.options
      });
    }
  }
  deserialize(e, t) {
    try {
      const {
        options: i
      } = JSON.parse(t);
      return e.createInstance(Sxe, i);
    } catch {
      return;
    }
  }
};
g1i = __decorate([__param(0, ln)], g1i);
Sxe = class Gto extends XS {
  static {
    this.ID = "workbench.editor.cursorblame.input";
  }
  constructor(e) {
    super();
    this.options = e;
  }
  get typeId() {
    return Gto.ID;
  }
  get editorId() {
    return Qrt;
  }
  get resource() {
    return je.from({
      scheme: _n.cursorBlame,
      path: `commit/${this.options.commitId}`
    });
  }
  get capabilities() {
    return 2;
  }
  matches(e) {
    if (super.matches(e)) {
      return true;
    } else if (e instanceof Gto) {
      return this.options.commitId === e.options.commitId;
    } else if (!(e instanceof XS) && "resource" in e && e.resource) {
      return e.resource.scheme === _n.cursorBlame && e.resource.path === `commit/${this.options.commitId}`;
    } else {
      return false;
    }
  }
  getName() {
    const e = this.options.displayId || this.options.commitId.substring(0, 7);
    const t = this.options.subject;
    const i = `${e}: ${t}`;
    if (i.length <= 50) {
      return i;
    } else {
      return i.substring(0, 47) + "...";
    }
  }
  getTitle(e) {
    const t = this.options.displayId || this.options.commitId.substring(0, 7);
    const i = this.options.subject;
    if (e === 2) {
      const s = this.options.author ? ` by ${this.options.author}` : "";
      return `${t}: ${i}${s}`;
    }
    const r = `${t}: ${i}`;
    if (r.length <= 50) {
      return r;
    } else {
      return r.substring(0, 47) + "...";
    }
  }
  getIcon() {
    return Be.gitCommit;
  }
  toJSON() {
    return {
      options: this.options
    };
  }
  toUntyped() {
    return {
      resource: this.resource,
      options: {
        override: Gto.ID,
        pinned: true
      }
    };
  }
  copy() {
    return new Gto(this.options);
  }
};
_vn = class extends fD {
  static {
    UCu = this;
  }
  static {
    this.ID = Qrt;
  }
  constructor(e, t, i, r, s, o) {
    super(UCu.ID, e, t, i, r);
    this._instantiationService = s;
    this._analyticsService = o;
  }
  createEditor(e) {}
  async setInput(e, t, i, r) {
    await super.setInput(e, {
      ...t,
      pinned: true
    }, i, r);
    const s = this.getContainer();
    if (!s) {
      return;
    }
    const o = this._currentCommitId !== e.options.commitId;
    if (!this._solidDisposable || o) {
      this._solidDisposable?.dispose();
      this._solidDisposable = undefined;
      s.replaceChildren();
      this._currentCommitId = e.options.commitId;
      this._solidDisposable = uHf(s, this._instantiationService, e.options);
      this._analyticsService.trackEvent("cursor_blame.ai_details_opened");
    }
    this._inputDisposable?.dispose();
    this._inputDisposable = e.onWillDispose(() => {
      this._solidDisposable?.dispose();
      this._solidDisposable = undefined;
    });
  }
  layout(e) {}
  dispose() {
    this._solidDisposable?.dispose();
    this._solidDisposable = undefined;
    this._inputDisposable?.dispose();
    super.dispose();
  }
};
_vn = UCu = __decorate([__param(1, ea), __param(2, bo), __param(3, Hi), __param(4, ln), __param(5, uh)], _vn);
