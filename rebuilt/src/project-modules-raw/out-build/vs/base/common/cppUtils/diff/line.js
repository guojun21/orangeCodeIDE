// Module: out-build/vs/base/common/cppUtils/diff/line.js
// Offset: 33812087 (bundle byte offset)
// Size: 797 bytes

D0u(), WUf(), QUf=new uDa, QUf.tokenize=function(n){
  this.options.stripTrailingCr&&(n=n.replace(/\r\n/g, `
`));
  let e=[], t=n.split(/(\n|\r\n)/);
  t[t.length-1]||t.pop();
  for(let i=0;
  i<t.length;
  i++){
    let r=t[i];
    i%2&&!this.options.newlineIsToken?e[e.length-1]+=r:(this.options.ignoreWhitespace&&(r=r.trim()), e.push(r))
  }
  return e
}
}
});
function vmy(n, e, t={
  
}, i=!0){
  return n.length>2e4||e.length>2e4||nvn.tokenize(n).length>2e3||nvn.tokenize(e).length>2e3?(console.error("BAD BAD BAD BAD BAD. THIS SHOULD NOT HAPPEN. PLEASE FIX THE CPP BUG. diffWords received strings that were too long. Returning the trivial diff.", n.length, e.length), [{
    value:n, removed:!0
  }, {
    value:e, added:!0
  }
  ]):(t=fmy(t, {
    ignoreWhitespace:i
  }), nvn.diff(n, e, t))
}
var B0u, R0u, nvn, jUf=