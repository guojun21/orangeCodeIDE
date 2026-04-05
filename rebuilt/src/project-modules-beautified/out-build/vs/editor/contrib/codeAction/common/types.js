"use strict";

// Module: out-build/vs/editor/contrib/codeAction/common/types.js
// Offset: 2473564 (bundle byte offset)
// Size: 4867 bytes
_s();
QY();
FA = new class {
  constructor() {
    this.QuickFix = new p0("quickfix");
    this.Refactor = new p0("refactor");
    this.RefactorExtract = this.Refactor.append("extract");
    this.RefactorInline = this.Refactor.append("inline");
    this.RefactorMove = this.Refactor.append("move");
    this.RefactorRewrite = this.Refactor.append("rewrite");
    this.Notebook = new p0("notebook");
    this.Source = new p0("source");
    this.SourceOrganizeImports = this.Source.append("organizeImports");
    this.SourceFixAll = this.Source.append("fixAll");
    this.SurroundWith = this.Refactor.append("surround");
  }
}();
(function (n) {
  n.IfSingle = "ifSingle";
  n.First = "first";
  n.Never = "never";
})(rkh ||= {});
(function (n) {
  n.Refactor = "refactor";
  n.RefactorPreview = "refactor preview";
  n.Lightbulb = "lightbulb";
  n.Default = "other (default)";
  n.SourceAction = "source action";
  n.QuickFix = "quick fix action";
  n.FixAll = "fix all";
  n.OrganizeImports = "organize imports";
  n.AutoFix = "auto fix";
  n.QuickFixHover = "quick fix hover window";
  n.OnSave = "save participants";
  n.ProblemsView = "problems view";
})(E9 ||= {});
e5n = class GCn {
  static fromUser(e, t) {
    if (!e || typeof e != "object") {
      return new GCn(t.kind, t.apply, false);
    } else {
      return new GCn(GCn.getKindFromUser(e, t.kind), GCn.getApplyFromUser(e, t.apply), GCn.getPreferredUser(e));
    }
  }
  static getApplyFromUser(e, t) {
    switch (typeof e.apply == "string" ? e.apply.toLowerCase() : "") {
      case "first":
        return "first";
      case "never":
        return "never";
      case "ifsingle":
        return "ifSingle";
      default:
        return t;
    }
  }
  static getKindFromUser(e, t) {
    if (typeof e.kind == "string") {
      return new p0(e.kind);
    } else {
      return t;
    }
  }
  static getPreferredUser(e) {
    if (typeof e.preferred == "boolean") {
      return e.preferred;
    } else {
      return false;
    }
  }
  constructor(e, t, i) {
    this.kind = e;
    this.apply = t;
    this.preferred = i;
  }
};
skh = class {
  constructor(n, e, t) {
    this.action = n;
    this.provider = e;
    this.highlightRange = t;
  }
  async resolve(n) {
    if (this.provider?.resolveCodeAction && !this.action.edit) {
      let e;
      try {
        e = await this.provider.resolveCodeAction(this.action, n);
      } catch (t) {
        JE(t);
      }
      if (e) {
        this.action.edit = e.edit;
      }
    }
    return this;
  }
};
