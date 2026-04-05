"use strict";

// Module: out-build/vs/editor/common/cursor/cursorTypeOperations.js
// Offset: 821794 (bundle byte offset)
// Size: 2595 bytes
S4n();
Tlh();
Eoe();
v4o();
VBe = class {
  static indent(n, e, t) {
    if (e === null || t === null) {
      return [];
    }
    const i = [];
    for (let r = 0, s = t.length; r < s; r++) {
      i[r] = new xoe(t[r], {
        isUnshift: false,
        tabSize: n.tabSize,
        indentSize: n.indentSize,
        insertSpaces: n.insertSpaces,
        useTabStops: n.useTabStops,
        autoIndent: n.autoIndent
      }, n.languageConfigurationService);
    }
    return i;
  }
  static outdent(n, e, t) {
    const i = [];
    for (let r = 0, s = t.length; r < s; r++) {
      i[r] = new xoe(t[r], {
        isUnshift: true,
        tabSize: n.tabSize,
        indentSize: n.indentSize,
        insertSpaces: n.insertSpaces,
        useTabStops: n.useTabStops,
        autoIndent: n.autoIndent
      }, n.languageConfigurationService);
    }
    return i;
  }
  static shiftIndent(n, e, t) {
    return g4o(n, e, t);
  }
  static unshiftIndent(n, e, t) {
    return x4n(n, e, t);
  }
  static paste(n, e, t, i, r, s) {
    return $lh.getEdits(n, e, t, i, r, s);
  }
  static tab(n, e, t) {
    return Jlh.getCommands(n, e, t);
  }
  static compositionType(n, e, t, i, r, s, o, a) {
    return qlh.getEdits(n, e, t, i, r, s, o, a);
  }
  static compositionEndWithInterceptors(n, e, t, i, r, s) {
    if (!i) {
      return null;
    }
    let o = null;
    for (const m of i) {
      if (o === null) {
        o = m.insertedText;
      } else if (o !== m.insertedText) {
        return null;
      }
    }
    if (!o || o.length !== 1) {
      return c1c.getEdits(e, i);
    }
    const a = o;
    let l = false;
    for (const m of i) {
      if (m.deletedText.length !== 0) {
        l = true;
        break;
      }
    }
    if (l) {
      if (!Plh(e, a) || !e.surroundingPairs.hasOwnProperty(a)) {
        return null;
      }
      const m = Kze(a);
      for (const f of i) {
        if (f.deletedSelectionStart !== 0 || f.deletedSelectionEnd !== f.deletedText.length || /^[ \t]+$/.test(f.deletedText) || m && Kze(f.deletedText)) {
          return null;
        }
      }
      const p = [];
      for (const f of r) {
        if (!f.isEmpty()) {
          return null;
        }
        p.push(f.getPosition());
      }
      if (p.length !== i.length) {
        return null;
      }
      const g = [];
      for (let f = 0, A = p.length; f < A; f++) {
        g.push(new xlh(p[f], i[f].deletedText, e.surroundingPairs[a]));
      }
      return new mW(4, g, {
        shouldPushStackElementBefore: true,
        shouldPushStackElementAfter: false
      });
    }
    const u = Mlh.getEdits(e, t, r, s, a);
    if (u !== undefined) {
      return u;
    }
    const d = f4o.getEdits(e, t, r, a, true, false);
    if (d !== undefined) {
      return d;
    } else {
      return c1c.getEdits(e, i);
    }
  }
  static typeWithInterceptors(n, e, t, i, r, s, o) {
    const a = T4n.getEdits(t, i, r, o, n);
    if (a !== undefined) {
      return a;
    }
    const l = Llh.getEdits(t, i, r, o, n);
    if (l !== undefined) {
      return l;
    }
    const u = Nlh.getEdits(e, t, i, r, s, o);
    if (u !== undefined) {
      return u;
    }
    const d = f4o.getEdits(t, i, r, o, false, n);
    if (d !== undefined) {
      return d;
    }
    const m = Flh.getEdits(t, i, r, o, n);
    if (m !== undefined) {
      return m;
    }
    const p = Olh.getEdits(e, t, i, r, o, n);
    if (p !== undefined) {
      return p;
    } else {
      return Ulh.getEdits(t, e, r, o, n);
    }
  }
  static typeWithoutInterceptors(n, e, t, i, r) {
    return Hlh.getEdits(n, i, r);
  }
};
Qlh = class {
  constructor(n, e, t, i, r, s, o) {
    this.deletedText = n;
    this.deletedSelectionStart = e;
    this.deletedSelectionEnd = t;
    this.insertedText = i;
    this.insertedSelectionStart = r;
    this.insertedSelectionEnd = s;
    this.insertedTextRange = o;
  }
};
