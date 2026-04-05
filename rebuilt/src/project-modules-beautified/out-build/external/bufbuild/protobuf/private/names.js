"use strict";

// Module: out-build/external/bufbuild/protobuf/private/names.js
// Offset: 2528207 (bundle byte offset)
// Size: 351 bytes
i1h = n1h;
r1h = new Set(["constructor", "toString", "toJSON", "valueOf"]);
s1h = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]);
uRc = n => `${n}$`;
o1h = n => s1h.has(n) ? uRc(n) : n;
a1h = n => r1h.has(n) ? uRc(n) : n;
