// Module: out-build/external/bufbuild/protobuf/extension-accessor.js
// Offset: 2505005 (bundle byte offset)
// Size: 730 bytes

BRe(), eRc()
}
});
function $kh(n, e){
  const t=n.localName;
  if(n.repeated)return e[t].length>0;
  if(n.oneof)return e[n.oneof.localName].case===t;
  switch(n.kind){
    case"enum":case"scalar":return n.opt||n.req?e[t]!==void 0:n.kind=="enum"?e[t]!==n.T.values[0].no:!Nkh(n.T, e[t]);
    case"message":return e[t]!==void 0;
    case"map":return Object.keys(e[t]).length>0
  }
}
function qkh(n, e){
  const t=n.localName, i=!n.opt&&!n.req;
  if(n.repeated)e[t]=[];
  else if(n.oneof)e[n.oneof.localName]={
    case:void 0
  };
  else switch(n.kind){
    case"map":e[t]={
      
    };
    break;
    case"enum":e[t]=i?n.T.values[0].no:void 0;
    break;
    case"scalar":e[t]=i?t5t(n.T, n.L):void 0;
    break;
    case"message":e[t]=void 0;
    break
  }
}
var Hkh=