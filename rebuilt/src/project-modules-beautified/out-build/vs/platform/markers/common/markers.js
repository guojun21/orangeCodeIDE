"use strict";

// Module: out-build/vs/platform/markers/common/markers.js
// Offset: 2480591 (bundle byte offset)
// Size: 10615 bytes
Vf();
Ht();
Wt();
(function (n) {
  n[n.Unnecessary = 1] = "Unnecessary";
  n[n.Deprecated = 2] = "Deprecated";
})(akh ||= {});
(function (n) {
  n[n.Hint = 1] = "Hint";
  n[n.Info = 2] = "Info";
  n[n.AI = 3] = "AI";
  n[n.Warning = 4] = "Warning";
  n[n.Error = 8] = "Error";
})(Gl ||= {});
(function (n) {
  function e(l, u) {
    return u - l;
  }
  n.compare = e;
  const t = Object.create(null);
  t[n.Error] = _(2121, null);
  t[n.Warning] = _(2122, null);
  t[n.Info] = _(2123, null);
  t[n.AI] = "AI Hint";
  function i(l) {
    return t[l] || "";
  }
  n.toString = i;
  const r = Object.create(null);
  r[n.Error] = _(2124, null);
  r[n.Warning] = _(2125, null);
  r[n.Info] = _(2126, null);
  function s(l) {
    return r[l] || "";
  }
  n.toStringPlural = s;
  function o(l) {
    switch (l) {
      case Ha.Error:
        return n.Error;
      case Ha.Warning:
        return n.Warning;
      case Ha.Info:
        return n.Info;
      case Ha.Ignore:
        return n.Hint;
      case Ha.AI:
        return n.AI;
      case Ha.Success:
        return n.Info;
    }
  }
  n.fromSeverity = o;
  function a(l) {
    switch (l) {
      case n.Error:
        return Ha.Error;
      case n.Warning:
        return Ha.Warning;
      case n.Info:
        return Ha.Info;
      case n.Hint:
        return Ha.Ignore;
      case n.AI:
        return Ha.AI;
    }
  }
  n.toSeverity = a;
})(Gl ||= {});
(function (n) {
  function t(r) {
    return i(r, true);
  }
  n.makeKey = t;
  function i(r, s) {
    const o = [""];
    if (r.source) {
      o.push(r.source.replace("¦", "\\¦"));
    } else {
      o.push("");
    }
    if (r.code) {
      if (typeof r.code == "string") {
        o.push(r.code.replace("¦", "\\¦"));
      } else {
        o.push(r.code.value.replace("¦", "\\¦"));
      }
    } else {
      o.push("");
    }
    if (r.severity !== undefined && r.severity !== null) {
      o.push(Gl.toString(r.severity));
    } else {
      o.push("");
    }
    if (r.message && s) {
      o.push(r.message.replace("¦", "\\¦"));
    } else {
      o.push("");
    }
    if (r.startLineNumber !== undefined && r.startLineNumber !== null) {
      o.push(r.startLineNumber.toString());
    } else {
      o.push("");
    }
    if (r.startColumn !== undefined && r.startColumn !== null) {
      o.push(r.startColumn.toString());
    } else {
      o.push("");
    }
    if (r.endLineNumber !== undefined && r.endLineNumber !== null) {
      o.push(r.endLineNumber.toString());
    } else {
      o.push("");
    }
    if (r.endColumn !== undefined && r.endColumn !== null) {
      o.push(r.endColumn.toString());
    } else {
      o.push("");
    }
    o.push("");
    return o.join("¦");
  }
  n.makeKeyOptionalMessage = i;
})(kKe ||= {});
bk = xi("markerService");
