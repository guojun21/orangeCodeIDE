"use strict";

// Module: out-build/vs/base/browser/performance.js
// Offset: 1464622 (bundle byte offset)
// Size: 2379 bytes
(function (n) {
  const e = {
    total: 0,
    min: Number.MAX_VALUE,
    max: 0
  };
  const t = {
    ...e
  };
  const i = {
    ...e
  };
  const r = {
    ...e
  };
  let s = 0;
  let o;
  (function (O) {
    O[O.Before = 0] = "Before";
    O[O.InProgress = 1] = "InProgress";
    O[O.Finished = 2] = "Finished";
  })(o ||= {});
  const a = {
    keydown: 0,
    input: 0,
    render: 0
  };
  function l() {
    x();
    performance.mark("inputlatency/start");
    performance.mark("keydown/start");
    a.keydown = 1;
    queueMicrotask(u);
  }
  n.onKeyDown = l;
  function u() {
    if (a.keydown === 1) {
      performance.mark("keydown/end");
      a.keydown = 2;
    }
  }
  function d() {
    performance.mark("input/start");
    a.input = 1;
    C();
  }
  n.onBeforeInput = d;
  function m() {
    if (a.input === 0) {
      d();
    }
    queueMicrotask(p);
  }
  n.onInput = m;
  function p() {
    if (a.input === 1) {
      performance.mark("input/end");
      a.input = 2;
    }
  }
  function g() {
    x();
  }
  n.onKeyUp = g;
  function f() {
    x();
  }
  n.onSelectionChange = f;
  function A() {
    if (a.keydown === 2 && a.input === 2 && a.render === 0) {
      performance.mark("render/start");
      a.render = 1;
      queueMicrotask(w);
      C();
    }
  }
  n.onRenderStart = A;
  function w() {
    if (a.render === 1) {
      performance.mark("render/end");
      a.render = 2;
    }
  }
  function C() {
    setTimeout(x);
  }
  function x() {
    if (a.keydown === 2 && a.input === 2 && a.render === 2) {
      performance.mark("inputlatency/end");
      performance.measure("keydown", "keydown/start", "keydown/end");
      performance.measure("input", "input/start", "input/end");
      performance.measure("render", "render/start", "render/end");
      performance.measure("inputlatency", "inputlatency/start", "inputlatency/end");
      I("keydown", e);
      I("input", t);
      I("render", i);
      I("inputlatency", r);
      s++;
      B();
    }
  }
  function I(O, $) {
    const H = performance.getEntriesByName(O)[0].duration;
    $.total += H;
    $.min = Math.min($.min, H);
    $.max = Math.max($.max, H);
  }
  function B() {
    performance.clearMarks("keydown/start");
    performance.clearMarks("keydown/end");
    performance.clearMarks("input/start");
    performance.clearMarks("input/end");
    performance.clearMarks("render/start");
    performance.clearMarks("render/end");
    performance.clearMarks("inputlatency/start");
    performance.clearMarks("inputlatency/end");
    performance.clearMeasures("keydown");
    performance.clearMeasures("input");
    performance.clearMeasures("render");
    performance.clearMeasures("inputlatency");
    a.keydown = 0;
    a.input = 0;
    a.render = 0;
  }
  function R() {
    if (s === 0) {
      return;
    }
    const O = {
      keydown: N(e),
      input: N(t),
      render: N(i),
      total: N(r),
      sampleCount: s
    };
    M(e);
    M(t);
    M(i);
    M(r);
    s = 0;
    return O;
  }
  n.getAndClearMeasurements = R;
  function N(O) {
    return {
      average: O.total / s,
      max: O.max,
      min: O.min
    };
  }
  function M(O) {
    O.total = 0;
    O.min = Number.MAX_VALUE;
    O.max = 0;
  }
})(d9e ||= {});
