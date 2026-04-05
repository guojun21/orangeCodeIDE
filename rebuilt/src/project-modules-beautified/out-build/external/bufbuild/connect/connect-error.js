"use strict";

// Module: out-build/external/bufbuild/connect/connect-error.js
// Offset: 26660769 (bundle byte offset)
// Size: 1097 bytes
pL();
ytu();
fA = class PSn extends Error {
  constructor(e, t = j0.Unknown, i, r, s) {
    super(xNA(e, t));
    this.name = "ConnectError";
    Object.setPrototypeOf(this, new.target.prototype);
    this.rawMessage = e;
    this.code = t;
    this.metadata = new Headers(i ?? {});
    this.details = r ?? [];
    this.cause = s;
  }
  static from(e, t = j0.Unknown) {
    if (e instanceof PSn) {
      return e;
    } else if (e instanceof Error) {
      if (e.name == "AbortError") {
        return new PSn(e.message, j0.Canceled);
      } else {
        return new PSn(e.message, t, undefined, undefined, e);
      }
    } else {
      return new PSn(String(e), t, undefined, undefined, e);
    }
  }
  static [Symbol.hasInstance](e) {
    if (e instanceof Error) {
      if (Object.getPrototypeOf(e) === PSn.prototype) {
        return true;
      } else {
        return e.name === "ConnectError" && "code" in e && typeof e.code == "number" && "metadata" in e && "details" in e && Array.isArray(e.details) && "rawMessage" in e && typeof e.rawMessage == "string" && "cause" in e;
      }
    } else {
      return false;
    }
  }
  findDetails(e) {
    const t = "typeName" in e ? {
      findMessage: r => r === e.typeName ? e : undefined
    } : e;
    const i = [];
    for (const r of this.details) {
      if ("getType" in r) {
        if (t.findMessage(r.getType().typeName)) {
          i.push(r);
        }
        continue;
      }
      const s = t.findMessage(r.type);
      if (s) {
        try {
          i.push(s.fromBinary(r.value));
        } catch {}
      }
    }
    return i;
  }
};
