"use strict";

// Module: out-build/vs/base/common/range.js
// Offset: 1967684 (bundle byte offset)
// Size: 1077 bytes
(function (n) {
  function e(s, o) {
    if (s.start >= o.end || o.start >= s.end) {
      return {
        start: 0,
        end: 0
      };
    }
    const a = Math.max(s.start, o.start);
    const l = Math.min(s.end, o.end);
    if (l - a <= 0) {
      return {
        start: 0,
        end: 0
      };
    } else {
      return {
        start: a,
        end: l
      };
    }
  }
  n.intersect = e;
  function t(s) {
    return s.end - s.start <= 0;
  }
  n.isEmpty = t;
  function i(s, o) {
    return !t(e(s, o));
  }
  n.intersects = i;
  function r(s, o) {
    const a = [];
    const l = {
      start: s.start,
      end: Math.min(o.start, s.end)
    };
    const u = {
      start: Math.max(o.end, s.start),
      end: s.end
    };
    if (!t(l)) {
      a.push(l);
    }
    if (!t(u)) {
      a.push(u);
    }
    return a;
  }
  n.relativeComplement = r;
})(QH ||= {});
