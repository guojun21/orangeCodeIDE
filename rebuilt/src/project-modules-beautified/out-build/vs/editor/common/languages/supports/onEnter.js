"use strict";

// Module: out-build/vs/editor/common/languages/supports/onEnter.js
// Offset: 747663 (bundle byte offset)
// Size: 3519 bytes
_s();
oa();
Xze();
$ch = class oNi {
  constructor(e) {
    e = e || {};
    e.brackets = e.brackets || [["(", ")"], ["{", "}"], ["[", "]"]];
    this._brackets = [];
    e.brackets.forEach(t => {
      const i = oNi._createOpenBracketRegExp(t[0]);
      const r = oNi._createCloseBracketRegExp(t[1]);
      if (i && r) {
        this._brackets.push({
          open: t[0],
          openRegExp: i,
          close: t[1],
          closeRegExp: r
        });
      }
    });
    this._regExpRules = e.onEnterRules || [];
  }
  onEnter(e, t, i, r) {
    if (e >= 3) {
      for (let s = 0, o = this._regExpRules.length; s < o; s++) {
        const a = this._regExpRules[s];
        if ([{
          reg: a.beforeText,
          text: i
        }, {
          reg: a.afterText,
          text: r
        }, {
          reg: a.previousLineText,
          text: t
        }].every(u => u.reg ? (u.reg.lastIndex = 0, u.reg.test(u.text)) : true)) {
          return a.action;
        }
      }
    }
    if (e >= 2 && i.length > 0 && r.length > 0) {
      for (let s = 0, o = this._brackets.length; s < o; s++) {
        const a = this._brackets[s];
        if (a.openRegExp.test(i) && a.closeRegExp.test(r)) {
          return {
            indentAction: $R.IndentOutdent
          };
        }
      }
    }
    if (e >= 2 && i.length > 0) {
      for (let s = 0, o = this._brackets.length; s < o; s++) {
        if (this._brackets[s].openRegExp.test(i)) {
          return {
            indentAction: $R.Indent
          };
        }
      }
    }
    return null;
  }
  static _createOpenBracketRegExp(e) {
    let t = UI(e);
    if (!/\B/.test(t.charAt(0))) {
      t = "\\b" + t;
    }
    t += "\\s*$";
    return oNi._safeRegExp(t);
  }
  static _createCloseBracketRegExp(e) {
    let t = UI(e);
    if (!/\B/.test(t.charAt(t.length - 1))) {
      t = t + "\\b";
    }
    t = "^\\s*" + t;
    return oNi._safeRegExp(t);
  }
  static _safeRegExp(e) {
    try {
      return new RegExp(e);
    } catch (t) {
      Gc(t);
      return null;
    }
  }
};
