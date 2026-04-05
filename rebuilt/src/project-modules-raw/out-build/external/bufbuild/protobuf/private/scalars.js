// Module: out-build/external/bufbuild/protobuf/private/scalars.js
// Offset: 2501784 (bundle byte offset)
// Size: 909 bytes

EKe(), tke()
}
});
function dmA(n, e, t, i){
  let r;
  return{
    typeName:e, extendee:t, get field(){
      if(!r){
        const s=typeof i=="function"?i():i;
        s.name=e.split(".").pop(),s.jsonName=`[${e}]`,r=n.util.newFieldList([s]).list()[0]
      }
      return r
    }, runtime:n
  }
}
function Mkh(n){
  const e=n.field.localName, t=Object.create(null);
  return t[e]=hmA(n), [t, ()=>t[e]]
}
function hmA(n){
  const e=n.field;
  if(e.repeated)return[];
  if(e.default!==void 0)return e.default;
  switch(e.kind){
    case"enum":return e.T.values[0].no;
    case"scalar":return t5t(e.T, e.L);
    case"message":const t=e.T, i=new t;
    return t.fieldWrapper?t.fieldWrapper.unwrapField(i):i;
    case"map":throw"map fields are not allowed to be extensions"
  }
}
function mmA(n, e){
  if(!e.repeated&&(e.kind=="enum"||e.kind=="scalar")){
    for(let t=n.length-1;
    t>=0;
    --t)if(n[t].no==e.no)return[n[t]];
    return[]
  }
  return n.filter(t=>t.no===e.no)
}
var eRc=