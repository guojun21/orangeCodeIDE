// Module: out-build/vs/workbench/services/host/browser/host.js
// Offset: 28241874 (bundle byte offset)
// Size: 1034 bytes

Wt(), wd=xi("hostService")
}
});
function M9A(n){
  if(kH===2&&/^penguin(\.|$)/i.test(n))return"chromebook"
}
function F9A(n, e, t, i, r, s, o, a, l, u, d){
  const m=Object.create(null);
  m["common.machineId"]=s, m["common.macMachineId"]=o, m["common.sqmId"]=a, m["common.devDeviceId"]=l, m.sessionID=Wr()+Date.now(), m.commitHash=i, m.version=r, m["common.platformVersion"]=(n||"").replace(/^(\d+)(\.\d+)?(\.\d+)?(.*)/, "$1$2$3"), m["common.platform"]=ogt(kH), m["common.nodePlatform"]=h5e, m["common.nodeArch"]=t, m["common.product"]=d||"desktop", u&&(m["common.msftInternal"]=u);
  let p=0;
  const g=Date.now();
  Object.defineProperties(m, {
    timestamp:{
      get:()=>new Date,enumerable:!0
    }, "common.timesincesessionstart":{
      get:()=>Date.now()-g,enumerable:!0
    }, "common.sequence":{
      get:()=>p++,enumerable:!0
    }
  }), Z2n&&(m["common.snap"]="true");
  const f=M9A(e);
  return f&&(m["common.platformDetail"]=f), m
}
function O9A(n){
  const e=u2.USERDNSDOMAIN;
  if(!e)return!1;
  const t=e.toLowerCase();
  return n.some(i=>t===i)
}
var gef=