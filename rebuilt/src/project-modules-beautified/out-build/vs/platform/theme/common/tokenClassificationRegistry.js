"use strict";

// Module: out-build/vs/platform/theme/common/tokenClassificationRegistry.js
// Offset: 32784200 (bundle byte offset)
// Size: 6528 bytes
vr();
xf();
yn();
rt();
Ht();
mF();
Ws();
O5f = "*";
Jyu = ":";
Gyu = ".";
ySi = "\\w+[-_\\w+]*";
g7e = `^${ySi}$`;
U5f = `^(${ySi}|\\*)(\\${Gyu}${ySi})*(${Jyu}${ySi})?$`;
$5f = "^(\\s*(italic|bold|underline|strikethrough))*\\s*$";
fxe = class {
  constructor(n, e, t, i, r) {
    this.foreground = n;
    this.bold = e;
    this.underline = t;
    this.strikethrough = i;
    this.italic = r;
  }
};
(function (n) {
  function e(a) {
    return {
      _foreground: a.foreground === undefined ? null : Xr.Format.CSS.formatHexA(a.foreground, true),
      _bold: a.bold === undefined ? null : a.bold,
      _underline: a.underline === undefined ? null : a.underline,
      _italic: a.italic === undefined ? null : a.italic,
      _strikethrough: a.strikethrough === undefined ? null : a.strikethrough
    };
  }
  n.toJSONObject = e;
  function t(a) {
    if (a) {
      const l = d => typeof d == "boolean" ? d : undefined;
      const u = d => typeof d == "string" ? Xr.fromHex(d) : undefined;
      return new n(u(a._foreground), l(a._bold), l(a._underline), l(a._strikethrough), l(a._italic));
    }
  }
  n.fromJSONObject = t;
  function i(a, l) {
    if (a === l) {
      return true;
    } else {
      return a !== undefined && l !== undefined && (a.foreground instanceof Xr ? a.foreground.equals(l.foreground) : l.foreground === undefined) && a.bold === l.bold && a.underline === l.underline && a.strikethrough === l.strikethrough && a.italic === l.italic;
    }
  }
  n.equals = i;
  function r(a) {
    return a instanceof n;
  }
  n.is = r;
  function s(a) {
    return new n(a.foreground, a.bold, a.underline, a.strikethrough, a.italic);
  }
  n.fromData = s;
  function o(a, l, u, d, m, p) {
    let g;
    if (a !== undefined) {
      g = Xr.fromHex(a);
    }
    if (l !== undefined) {
      u = p = d = m = false;
      const f = /italic|bold|underline|strikethrough/g;
      let A;
      while (A = f.exec(l)) {
        switch (A[0]) {
          case "bold":
            u = true;
            break;
          case "italic":
            p = true;
            break;
          case "underline":
            d = true;
            break;
          case "strikethrough":
            m = true;
            break;
        }
      }
    }
    return new n(g, u, d, m, p);
  }
  n.fromSettings = o;
})(fxe ||= {});
(function (n) {
  function e(s, o) {
    if (o && typeof o._selector == "string" && o._style) {
      const a = fxe.fromJSONObject(o._style);
      if (a) {
        try {
          return {
            selector: s.parseTokenSelector(o._selector),
            style: a
          };
        } catch {}
      }
    }
  }
  n.fromJSONObject = e;
  function t(s) {
    return {
      _selector: s.selector.id,
      _style: fxe.toJSONObject(s.style)
    };
  }
  n.toJSONObject = t;
  function i(s, o) {
    if (s === o) {
      return true;
    } else {
      return s !== undefined && o !== undefined && s.selector && o.selector && s.selector.id === o.selector.id && fxe.equals(s.style, o.style);
    }
  }
  n.equals = i;
  function r(s) {
    return s && s.selector && typeof s.selector.id == "string" && fxe.is(s.style);
  }
  n.is = r;
})(wSi ||= {});
q5f = {
  TokenClassificationContribution: "base.contributions.tokenClassification"
};
H5f = class extends at {
  constructor() {
    super();
    this._onDidChangeSchema = this._register(new Qe());
    this.onDidChangeSchema = this._onDidChangeSchema.event;
    this.currentTypeNumber = 0;
    this.currentModifierBit = 1;
    this.tokenStylingDefaultRules = [];
    this.tokenStylingSchema = {
      type: "object",
      properties: {},
      patternProperties: {
        [U5f]: Hyu()
      },
      additionalProperties: false,
      definitions: {
        style: {
          type: "object",
          description: _(2552, null),
          properties: {
            foreground: {
              type: "string",
              description: _(2553, null),
              format: "color-hex",
              default: "#ff0000"
            },
            background: {
              type: "string",
              deprecationMessage: _(2554, null)
            },
            fontStyle: {
              type: "string",
              description: _(2555, null),
              pattern: $5f,
              patternErrorMessage: _(2556, null),
              defaultSnippets: [{
                label: _(2557, null),
                bodyText: "\"\""
              }, {
                body: "italic"
              }, {
                body: "bold"
              }, {
                body: "underline"
              }, {
                body: "strikethrough"
              }, {
                body: "italic bold"
              }, {
                body: "italic underline"
              }, {
                body: "italic strikethrough"
              }, {
                body: "bold underline"
              }, {
                body: "bold strikethrough"
              }, {
                body: "underline strikethrough"
              }, {
                body: "italic bold underline"
              }, {
                body: "italic bold strikethrough"
              }, {
                body: "italic underline strikethrough"
              }, {
                body: "bold underline strikethrough"
              }, {
                body: "italic bold underline strikethrough"
              }]
            },
            bold: {
              type: "boolean",
              description: _(2558, null)
            },
            italic: {
              type: "boolean",
              description: _(2559, null)
            },
            underline: {
              type: "boolean",
              description: _(2560, null)
            },
            strikethrough: {
              type: "boolean",
              description: _(2561, null)
            }
          },
          defaultSnippets: [{
            body: {
              foreground: "${1:#FF0000}",
              fontStyle: "${2:bold}"
            }
          }]
        }
      }
    };
    this.tokenTypeById = Object.create(null);
    this.tokenModifierById = Object.create(null);
    this.typeHierarchy = Object.create(null);
  }
  registerTokenType(n, e, t, i) {
    if (!n.match(g7e)) {
      throw new Error("Invalid token type id.");
    }
    if (t && !t.match(g7e)) {
      throw new Error("Invalid token super type id.");
    }
    const s = {
      num: this.currentTypeNumber++,
      id: n,
      superType: t,
      description: e,
      deprecationMessage: i
    };
    this.tokenTypeById[n] = s;
    const o = Hyu(e, i);
    this.tokenStylingSchema.properties[n] = o;
    this.typeHierarchy = Object.create(null);
  }
  registerTokenModifier(n, e, t) {
    if (!n.match(g7e)) {
      throw new Error("Invalid token modifier id.");
    }
    const i = this.currentModifierBit;
    this.currentModifierBit = this.currentModifierBit * 2;
    const r = {
      num: i,
      id: n,
      description: e,
      deprecationMessage: t
    };
    this.tokenModifierById[n] = r;
    this.tokenStylingSchema.properties[`*.${n}`] = Hyu(e, t);
  }
  parseTokenSelector(n, e) {
    const t = qyu(n, e);
    if (t.type) {
      return {
        match: (i, r, s) => {
          let o = 0;
          if (t.language !== undefined) {
            if (t.language !== s) {
              return -1;
            }
            o += 10;
          }
          if (t.type !== O5f) {
            const l = this.getTypeHierarchy(i).indexOf(t.type);
            if (l === -1) {
              return -1;
            }
            o += 100 - l;
          }
          for (const a of t.modifiers) {
            if (r.indexOf(a) === -1) {
              return -1;
            }
          }
          return o + t.modifiers.length * 100;
        },
        id: `${[t.type, ...t.modifiers.sort()].join(".")}${t.language !== undefined ? ":" + t.language : ""}`
      };
    } else {
      return {
        match: () => -1,
        id: "$invalid"
      };
    }
  }
  registerTokenStyleDefault(n, e) {
    this.tokenStylingDefaultRules.push({
      selector: n,
      defaults: e
    });
  }
  deregisterTokenStyleDefault(n) {
    const e = n.id;
    this.tokenStylingDefaultRules = this.tokenStylingDefaultRules.filter(t => t.selector.id !== e);
  }
  deregisterTokenType(n) {
    delete this.tokenTypeById[n];
    delete this.tokenStylingSchema.properties[n];
    this.typeHierarchy = Object.create(null);
  }
  deregisterTokenModifier(n) {
    delete this.tokenModifierById[n];
    delete this.tokenStylingSchema.properties[`*.${n}`];
  }
  getTokenTypes() {
    return Object.keys(this.tokenTypeById).map(n => this.tokenTypeById[n]);
  }
  getTokenModifiers() {
    return Object.keys(this.tokenModifierById).map(n => this.tokenModifierById[n]);
  }
  getTokenStylingSchema() {
    return this.tokenStylingSchema;
  }
  getTokenStylingDefaultRules() {
    return this.tokenStylingDefaultRules;
  }
  getTypeHierarchy(n) {
    let e = this.typeHierarchy[n];
    if (!e) {
      this.typeHierarchy[n] = e = [n];
      let t = this.tokenTypeById[n];
      while (t && t.superType) {
        e.push(t.superType);
        t = this.tokenTypeById[t.superType];
      }
    }
    return e;
  }
  toString() {
    const n = (e, t) => {
      const i = e.indexOf(".") === -1 ? 0 : 1;
      const r = t.indexOf(".") === -1 ? 0 : 1;
      if (i !== r) {
        return i - r;
      } else {
        return e.localeCompare(t);
      }
    };
    return Object.keys(this.tokenTypeById).sort(n).map(e => `- \`${e}\`: ${this.tokenTypeById[e].description}`).join(`
`);
  }
};
Wyu = Jyu.charCodeAt(0);
J5f = Gyu.charCodeAt(0);
_Si = Yly();
Di.add(q5f.TokenClassificationContribution, _Si);
CSi = "vscode://schemas/token-styling";
Qyu = Di.as(KN.JSONContribution);
Qyu.registerSchema(CSi, _Si.getTokenStylingSchema());
jyu = new Hu(() => Qyu.notifySchemaChanged(CSi), 200);
_Si.onDidChangeSchema(() => {
  if (!jyu.isScheduled()) {
    jyu.schedule();
  }
});
