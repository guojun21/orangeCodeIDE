"use strict";

// Module: out-build/vs/base/common/htmlContent.js
// Offset: 2038783 (bundle byte offset)
// Size: 1211 bytes
_s();
kW();
zr();
Yr();
oa();
Yn();
(function (n) {
  n[n.Paragraph = 0] = "Paragraph";
  n[n.Break = 1] = "Break";
})(__h ||= {});
_c = class xGb {
  static lift(e) {
    const t = new xGb(e.value, e);
    t.uris = e.uris;
    t.baseUri = e.baseUri ? je.revive(e.baseUri) : undefined;
    return t;
  }
  constructor(e = "", t = false) {
    this.value = e;
    if (typeof this.value != "string") {
      throw uw("value");
    }
    if (typeof t == "boolean") {
      this.isTrusted = t;
      this.supportThemeIcons = false;
      this.supportHtml = false;
    } else {
      this.isTrusted = t.isTrusted ?? undefined;
      this.supportThemeIcons = t.supportThemeIcons ?? false;
      this.supportHtml = t.supportHtml ?? false;
    }
  }
  appendText(e, t = 0) {
    this.value += obt(this.supportThemeIcons ? FuA(e) : e).replace(/([ \t]+)/g, (i, r) => "&nbsp;".repeat(r.length)).replace(/\>/gm, "\\>").replace(/\n/g, t === 1 ? `\\
` : `

`);
    return this;
  }
  appendMarkdown(e) {
    this.value += e;
    return this;
  }
  appendCodeblock(e, t) {
    this.value += `
${UuA(t, e)}
`;
    return this;
  }
  appendLink(e, t, i) {
    this.value += "[";
    this.value += this._escape(t, "]");
    this.value += "](";
    this.value += this._escape(String(e), ")");
    if (i) {
      this.value += ` "${this._escape(this._escape(i, "\""), ")")}"`;
    }
    this.value += ")";
    return this;
  }
  _escape(e, t) {
    const i = new RegExp(UI(t), "g");
    return e.replace(i, (r, s) => e.charAt(s - 1) !== "\\" ? `\\${r}` : r);
  }
};
