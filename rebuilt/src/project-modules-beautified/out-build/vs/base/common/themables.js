"use strict";

// Module: out-build/vs/base/common/themables.js
// Offset: 607636 (bundle byte offset)
// Size: 1687 bytes
qi();
(function (n) {
  function e(t) {
    return t && typeof t == "object" && typeof t.id == "string";
  }
  n.isThemeColor = e;
})(gkc ||= {});
(function (n) {
  n.iconNameSegment = "[A-Za-z0-9]+";
  n.iconNameExpression = "[A-Za-z0-9-]+";
  n.iconModifierExpression = "~[A-Za-z]+";
  n.iconNameCharacter = "[A-Za-z0-9~-]";
  const e = new RegExp(`^(${n.iconNameExpression})(${n.iconModifierExpression})?$`);
  function t(p) {
    if (!p) {
      return t(Be.error);
    }
    const g = e.exec(p.id);
    if (!g) {
      return t(Be.error);
    }
    const [, f, A] = g;
    const w = ["codicon", "codicon-" + f];
    if (A) {
      w.push("codicon-modifier-" + A.substring(1));
    }
    return w;
  }
  n.asClassNameArray = t;
  function i(p) {
    if (!p) {
      return i(Be.error);
    }
    const g = e.exec(p.id);
    if (!g) {
      return i(Be.error);
    }
    const [, f, A] = g;
    let w = `codicon codicon-${f}`;
    if (A) {
      w += ` codicon-modifier-${A.substring(1)}`;
    }
    return w;
  }
  n.asClassName = i;
  function r(p) {
    if (!p) {
      return r(Be.error);
    }
    const g = e.exec(p.id);
    if (!g) {
      return r(Be.error);
    }
    const [, f, A] = g;
    let w = `.codicon.codicon-${f}`;
    if (A) {
      w += `.codicon-modifier-${A.substring(1)}`;
    }
    return w;
  }
  n.asCSSSelector = r;
  function s(p) {
    return p && typeof p == "object" && typeof p.id == "string" && (typeof p.color === "undefined" || gkc.isThemeColor(p.color));
  }
  n.isThemeIcon = s;
  const o = new RegExp(`^\\$\\((${n.iconNameExpression}(?:${n.iconModifierExpression})?)\\)$`);
  function a(p) {
    const g = o.exec(p);
    if (!g) {
      return;
    }
    const [, f] = g;
    return {
      id: f
    };
  }
  n.fromString = a;
  function l(p) {
    return {
      id: p
    };
  }
  n.fromId = l;
  function u(p, g) {
    let f = p.id;
    const A = f.lastIndexOf("~");
    if (A !== -1) {
      f = f.substring(0, A);
    }
    if (g) {
      f = `${f}~${g}`;
    }
    return {
      id: f
    };
  }
  n.modify = u;
  function d(p) {
    const g = p.id.lastIndexOf("~");
    if (g !== -1) {
      return p.id.substring(g + 1);
    }
  }
  n.getModifier = d;
  function m(p, g) {
    return p.id === g.id && p.color?.id === g.color?.id;
  }
  n.isEqual = m;
})(Qt ||= {});
