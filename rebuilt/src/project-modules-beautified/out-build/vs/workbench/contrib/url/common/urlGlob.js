"use strict";

// Module: out-build/vs/workbench/contrib/url/common/urlGlob.js
// Offset: 32854651 (bundle byte offset)
// Size: 1391 bytes
swu = (n, e) => {
  let t = n.with({
    query: null,
    fragment: null
  }).toString(true);
  const i = o => o.replace(/\/+$/, "");
  e = i(e);
  t = i(t);
  const r = Array.from({
    length: t.length + 1
  }).map(() => Array.from({
    length: e.length + 1
  }).map(() => {}));
  if (/^[^./:]*:\/\//.test(e)) {
    return bxe(r, t, e, 0, 0);
  }
  const s = /^(https?):\/\//.exec(t)?.[1];
  if (s) {
    return bxe(r, t, `${s}://${e}`, 0, 0);
  } else {
    return false;
  }
};
bxe = (n, e, t, i, r) => {
  if (n[i]?.[r] !== undefined) {
    return n[i][r];
  }
  const s = [];
  if (i === e.length) {
    return r === t.length;
  }
  if (r === t.length) {
    return e.slice(i)[0] === "/";
  }
  if (e[i] === t[r]) {
    s.push(bxe(n, e, t, i + 1, r + 1));
  }
  if (t[r] + t[r + 1] === "*.") {
    if (!["/", ":"].includes(e[i])) {
      s.push(bxe(n, e, t, i + 1, r));
    }
    s.push(bxe(n, e, t, i, r + 2));
  }
  if (t[r] === "*") {
    if (i + 1 === e.length) {
      s.push(bxe(n, e, t, i + 1, r + 1));
    } else {
      s.push(bxe(n, e, t, i + 1, r));
    }
    s.push(bxe(n, e, t, i, r + 1));
  }
  if (t[r] + t[r + 1] === ":*") {
    if (e[i] === ":") {
      let o = i + 1;
      do {
        o++;
      } while (/[0-9]/.test(e[o]));
      s.push(bxe(n, e, t, o, r + 2));
    } else {
      s.push(bxe(n, e, t, i, r + 2));
    }
  }
  return n[i][r] = s.some(o => o === true);
};
