"use strict";

// Module: out-build/vs/editor/browser/gpu/gpuDisposable.js
// Offset: 1776967 (bundle byte offset)
// Size: 610 bytes
Js();
(function (n) {
  async function e(r) {
    try {
      if (!navigator.gpu) {
        throw new Error("This browser does not support WebGPU");
      }
      const s = await navigator.gpu.requestAdapter();
      if (!s) {
        throw new Error("This browser supports WebGPU but it appears to be disabled");
      }
      return dIc(await s.requestDevice());
    } catch (s) {
      if (r) {
        r(s.message);
      }
      throw s;
    }
  }
  n.requestDevice = e;
  function t(r, s, o) {
    const a = r.createBuffer(s);
    if (o) {
      r.queue.writeBuffer(a, 0, Aze(o) ? o() : o);
    }
    return dIc(a);
  }
  n.createBuffer = t;
  function i(r, s) {
    return dIc(r.createTexture(s));
  }
  n.createTexture = i;
})(GY ||= {});
