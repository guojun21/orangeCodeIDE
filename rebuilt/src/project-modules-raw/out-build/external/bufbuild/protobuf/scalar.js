// Module: out-build/external/bufbuild/protobuf/scalar.js
// Offset: 2500505 (bundle byte offset)
// Size: 1279 bytes

(function(n){
  n[n.DOUBLE=1]="DOUBLE", n[n.FLOAT=2]="FLOAT", n[n.INT64=3]="INT64", n[n.UINT64=4]="UINT64", n[n.INT32=5]="INT32", n[n.FIXED64=6]="FIXED64", n[n.FIXED32=7]="FIXED32", n[n.BOOL=8]="BOOL", n[n.STRING=9]="STRING", n[n.BYTES=12]="BYTES", n[n.UINT32=13]="UINT32", n[n.SFIXED32=15]="SFIXED32", n[n.SFIXED64=16]="SFIXED64", n[n.SINT32=17]="SINT32", n[n.SINT64=18]="SINT64"
})(ud||(ud={
  
})), (function(n){
  n[n.BIGINT=0]="BIGINT", n[n.STRING=1]="STRING"
})(xKe||(xKe={
  
}))
}
});
function TKe(n, e, t){
  if(e===t)return!0;
  if(n==ud.BYTES){
    if(!(e instanceof Uint8Array)||!(t instanceof Uint8Array)||e.length!==t.length)return!1;
    for(let i=0;
    i<e.length;
    i++)if(e[i]!==t[i])return!1;
    return!0
  }
  switch(n){
    case ud.UINT64:case ud.FIXED64:case ud.INT64:case ud.SFIXED64:case ud.SINT64:return e==t
  }
  return!1
}
function t5t(n, e){
  switch(n){
    case ud.BOOL:return!1;
    case ud.UINT64:case ud.FIXED64:case ud.INT64:case ud.SFIXED64:case ud.SINT64:return e==0?Eo.zero:"0";
    case ud.DOUBLE:case ud.FLOAT:return 0;
    case ud.BYTES:return new Uint8Array(0);
    case ud.STRING:return"";
    default:return 0
  }
}
function Nkh(n, e){
  switch(n){
    case ud.BOOL:return e===!1;
    case ud.STRING:return e==="";
    case ud.BYTES:return e instanceof Uint8Array&&!e.byteLength;
    default:return e==0
  }
}
var IKe=