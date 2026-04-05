// Module: out-build/external/sentry/core/utils/meta.js
// Offset: 106888 (bundle byte offset)
// Size: 455 bytes

bwc()
}
});
function eZd(n, e, t){
  let i, r, s;
  const o=t?.maxWait?Math.max(t.maxWait, e):0, a=t?.setTimeoutImpl||setTimeout;
  function l(){
    return u(), i=n(), i
  }
  function u(){
    r!==void 0&&clearTimeout(r), s!==void 0&&clearTimeout(s), r=s=void 0
  }
  function d(){
    return r!==void 0||s!==void 0?l():i
  }
  function m(){
    return r&&clearTimeout(r), r=a(l, e), o&&s===void 0&&(s=a(l, o)), i
  }
  return m.cancel=u, m.flush=d, m
}
var bVv=