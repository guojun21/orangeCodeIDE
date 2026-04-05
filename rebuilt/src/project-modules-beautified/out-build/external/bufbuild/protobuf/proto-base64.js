"use strict";

// Module: out-build/external/bufbuild/protobuf/proto-base64.js
// Offset: 2502798 (bundle byte offset)
// Size: 2207 bytes
RRe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
i5n = [];
for (let n = 0; n < RRe.length; n++) {
  i5n[RRe[n].charCodeAt(0)] = n;
}
i5n[45] = RRe.indexOf("+");
i5n[95] = RRe.indexOf("/");
r5n = {
  dec(n) {
    let e = n.length * 3 / 4;
    if (n[n.length - 2] == "=") {
      e -= 2;
    } else if (n[n.length - 1] == "=") {
      e -= 1;
    }
    let t = new Uint8Array(e);
    let i = 0;
    let r = 0;
    let s;
    let o = 0;
    for (let a = 0; a < n.length; a++) {
      s = i5n[n.charCodeAt(a)];
      if (s === undefined) {
        switch (n[a]) {
          case "=":
            r = 0;
          case `
`:
          case "\r":
          case "\t":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      }
      switch (r) {
        case 0:
          o = s;
          r = 1;
          break;
        case 1:
          t[i++] = o << 2 | (s & 48) >> 4;
          o = s;
          r = 2;
          break;
        case 2:
          t[i++] = (o & 15) << 4 | (s & 60) >> 2;
          o = s;
          r = 3;
          break;
        case 3:
          t[i++] = (o & 3) << 6 | s;
          r = 0;
          break;
      }
    }
    if (r == 1) {
      throw Error("invalid base64 string.");
    }
    return t.subarray(0, i);
  },
  enc(n) {
    let e = "";
    let t = 0;
    let i;
    let r = 0;
    for (let s = 0; s < n.length; s++) {
      i = n[s];
      switch (t) {
        case 0:
          e += RRe[i >> 2];
          r = (i & 3) << 4;
          t = 1;
          break;
        case 1:
          e += RRe[r | i >> 4];
          r = (i & 15) << 2;
          t = 2;
          break;
        case 2:
          e += RRe[r | i >> 6];
          e += RRe[i & 63];
          t = 0;
          break;
      }
    }
    if (t) {
      e += RRe[r];
      e += "=";
      if (t == 1) {
        e += "=";
      }
    }
    return e;
  }
};
