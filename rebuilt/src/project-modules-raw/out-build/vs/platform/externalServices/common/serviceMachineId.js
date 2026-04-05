// Module: out-build/vs/platform/externalServices/common/serviceMachineId.js
// Offset: 30970101 (bundle byte offset)
// Size: 266 bytes

Ql(), Bc()
}
});
function LMe(n, e){
  const[t, i]=e.split("/");
  for(const r of n.resources){
    const[s, o]=r.type.split("/");
    if(s===t){
      if(!i||o===i)return r.id;
      break
    }
  }
}
var dTf, hTf, Jme, Rgn, jye=