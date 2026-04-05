"use strict";

// Module: out-build/vs/base/common/severity.js
// Offset: 857514 (bundle byte offset)
// Size: 734 bytes
oa();
(function (n) {
  n[n.Ignore = 0] = "Ignore";
  n[n.Info = 1] = "Info";
  n[n.Warning = 2] = "Warning";
  n[n.Error = 3] = "Error";
  n[n.AI = 4] = "AI";
  n[n.Success = 5] = "Success";
})(I4n ||= {});
(function (n) {
  const e = "error";
  const t = "warning";
  const i = "warn";
  const r = "info";
  const s = "ignore";
  const o = "success";
  function a(u) {
    if (u) {
      if (k_(e, u)) {
        return n.Error;
      } else if (k_(t, u) || k_(i, u)) {
        return n.Warning;
      } else if (k_(r, u)) {
        return n.Info;
      } else if (k_(o, u)) {
        return n.Success;
      } else {
        return n.Ignore;
      }
    } else {
      return n.Ignore;
    }
  }
  n.fromValue = a;
  function l(u) {
    switch (u) {
      case n.Error:
        return e;
      case n.Warning:
        return t;
      case n.Info:
        return r;
      case n.Success:
        return o;
      default:
        return s;
    }
  }
  n.toString = l;
})(I4n ||= {});
Ha = I4n;
