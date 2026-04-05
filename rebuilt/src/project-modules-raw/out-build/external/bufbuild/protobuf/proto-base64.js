// Module: out-build/external/bufbuild/protobuf/proto-base64.js
// Offset: 2502798 (bundle byte offset)
// Size: 2207 bytes

RRe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), i5n=[];
for(let n=0;
n<RRe.length;
n++)i5n[RRe[n].charCodeAt(0)]=n;
i5n[45]=RRe.indexOf("+"), i5n[95]=RRe.indexOf("/"), r5n={
  dec(n){
    let e=n.length*3/4;
    n[n.length-2]=="="?e-=2:n[n.length-1]=="="&&(e-=1);
    let t=new Uint8Array(e), i=0, r=0, s, o=0;
    for(let a=0;
    a<n.length;
    a++){
      if(s=i5n[n.charCodeAt(a)],s===void 0)switch(n[a]){
        case"=":r=0;
        case`
`:case"\r":case"	":case" ":continue;
        default:throw Error("invalid base64 string.")
      }
      switch(r){
        case 0:o=s,r=1;
        break;
        case 1:t[i++]=o<<2|(s&48)>>4,o=s,r=2;
        break;
        case 2:t[i++]=(o&15)<<4|(s&60)>>2,o=s,r=3;
        break;
        case 3:t[i++]=(o&3)<<6|s,r=0;
        break
      }
    }
    if(r==1)throw Error("invalid base64 string.");
    return t.subarray(0, i)
  }, enc(n){
    let e="", t=0, i, r=0;
    for(let s=0;
    s<n.length;
    s++)switch(i=n[s], t){
      case 0:e+=RRe[i>>2],r=(i&3)<<4,t=1;
      break;
      case 1:e+=RRe[r|i>>4],r=(i&15)<<2,t=2;
      break;
      case 2:e+=RRe[r|i>>6],e+=RRe[i&63],t=0;
      break
    }
    return t&&(e+=RRe[r], e+="=", t==1&&(e+="=")), e
  }
}
}
});
function pmA(n, e, t){
  Okh(e, n);
  const i=e.runtime.bin.makeReadOptions(t), r=mmA(n.getType().runtime.bin.listUnknownFields(n), e.field), [s, o]=Mkh(e);
  for(const a of r)e.runtime.bin.readField(s, i.readerFactory(a.data), e.field, a.wireType, i);
  return o()
}
function gmA(n, e, t, i){
  Okh(e, n);
  const r=e.runtime.bin.makeReadOptions(i), s=e.runtime.bin.makeWriteOptions(i);
  if(Fkh(n, e)){
    const u=n.getType().runtime.bin.listUnknownFields(n).filter(d=>d.no!=e.field.no);
    n.getType().runtime.bin.discardUnknownFields(n);
    for(const d of u)n.getType().runtime.bin.onUnknownField(n, d.no, d.wireType, d.data)
  }
  const o=s.writerFactory();
  let a=e.field;
  !a.opt&&!a.repeated&&(a.kind=="enum"||a.kind=="scalar")&&(a={
    ...e.field, opt:!0
  }), e.runtime.bin.writeField(a, t, o, s);
  const l=r.readerFactory(o.finish());
  for(;
  l.pos<l.len;
  ){
    const[u, d]=l.tag(), m=l.skip(d, u);
    n.getType().runtime.bin.onUnknownField(n, u, d, m)
  }
}
function Fkh(n, e){
  const t=n.getType();
  return e.extendee.typeName===t.typeName&&!!t.runtime.bin.listUnknownFields(n).find(i=>i.no==e.field.no)
}
function Okh(n, e){
  x9(n.extendee.typeName==e.getType().typeName, `extension ${n.typeName} can only be applied to message ${n.extendee.typeName}`)
}
var Ukh=