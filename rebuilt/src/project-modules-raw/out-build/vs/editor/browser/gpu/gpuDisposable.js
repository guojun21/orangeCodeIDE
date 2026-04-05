// Module: out-build/vs/editor/browser/gpu/gpuDisposable.js
// Offset: 1776967 (bundle byte offset)
// Size: 610 bytes

Js(), (function(n){
  async function e(r){
    try{
      if(!navigator.gpu)throw new Error("This browser does not support WebGPU");
      const s=await navigator.gpu.requestAdapter();
      if(!s)throw new Error("This browser supports WebGPU but it appears to be disabled");
      return dIc(await s.requestDevice())
    }
    catch(s){
      throw r&&r(s.message),s
    }
  }
  n.requestDevice=e;
  function t(r, s, o){
    const a=r.createBuffer(s);
    return o&&r.queue.writeBuffer(a, 0, Aze(o)?o():o), dIc(a)
  }
  n.createBuffer=t;
  function i(r, s){
    return dIc(r.createTexture(s))
  }
  n.createTexture=i
})(GY||(GY={
  
}))
}
}), Tyh, TlA=