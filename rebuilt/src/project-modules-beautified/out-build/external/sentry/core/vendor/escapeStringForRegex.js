"use strict";

// Module: out-build/external/sentry/core/vendor/escapeStringForRegex.js
// Offset: 21152 (bundle byte offset)
// Size: 784 bytes
Ae({
  "out-build/external/sentry/core/vendor/escapeStringForRegex.js"() {
    "use strict";
  }
});
function BMn(n, e = 0) {
  if (typeof n != "string" || e === 0 || n.length <= e) {
    return n;
  } else {
    return `${n.slice(0, e)}...`;
  }
}
function tNo(n, e) {
  let t = n;
  const i = t.length;
  if (i <= 150) {
    return t;
  }
  if (e > i) {
    e = i;
  }
  let r = Math.max(e - 60, 0);
  if (r < 5) {
    r = 0;
  }
  let s = Math.min(r + 140, i);
  if (s > i - 5) {
    s = i;
  }
  if (s === i) {
    r = Math.max(s - 140, 0);
  }
  t = t.slice(r, s);
  if (r > 0) {
    t = `'{snip} ${t}`;
  }
  if (s < i) {
    t += " {snip}";
  }
  return t;
}
function Xje(n, e) {
  if (!Array.isArray(n)) {
    return "";
  }
  const t = [];
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    try {
      if (BAc(r)) {
        t.push("[VueViewModel]");
      } else {
        t.push(String(r));
      }
    } catch {
      t.push("[value cannot be serialized]");
    }
  }
  return t.join(e);
}
function RMn(n, e, t = false) {
  if (gte(n)) {
    if (iKd(e)) {
      return e.test(n);
    } else if (gte(e)) {
      if (t) {
        return n === e;
      } else {
        return n.includes(e);
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function Qj(n, e = [], t = false) {
  return e.some(i => RMn(n, i, t));
}
