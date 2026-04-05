// Module: out-build/external/bufbuild/protobuf/private/binary-format.js
// Offset: 2523517 (bundle byte offset)
// Size: 3040 bytes

oRc(), tRc(), IKe(), BRe(), Hkh(), tke(), DKe(), Tbt=Symbol("@bufbuild/protobuf/unknown-fields"), aRc={
  readUnknownFields:!0, readerFactory:n=>new jkh(n)
}, cRc={
  writeUnknownFields:!0, writerFactory:()=>new Qkh
}
}
});
function BmA(){
  return{
    setEnumType:xkh, initPartial(n, e){
      if(n===void 0)return;
      const t=e.getType();
      for(const i of t.fields.byMember()){
        const r=i.localName,s=e,o=n;
        if(o[r]!=null)switch(i.kind){
          case"oneof":const a=o[r].case;
          if(a===void 0)continue;
          const l=i.findField(a);
          let u=o[r].value;
          l&&l.kind=="message"&&!xbt(u,l.T)?u=new l.T(u):l&&l.kind==="scalar"&&l.T===ud.BYTES&&(u=l5n(u)),s[r]={
            case:a,value:u
          };
          break;
          case"scalar":case"enum":let d=o[r];
          i.T===ud.BYTES&&(d=i.repeated?d.map(l5n):l5n(d)),s[r]=d;
          break;
          case"map":switch(i.V.kind){
            case"scalar":case"enum":if(i.V.T===ud.BYTES)for(const[g,f]of Object.entries(o[r]))s[r][g]=l5n(f);
            else Object.assign(s[r],o[r]);
            break;
            case"message":const p=i.V.T;
            for(const g of Object.keys(o[r])){
              let f=o[r][g];
              p.fieldWrapper||(f=new p(f)),s[r][g]=f
            }
            break
          }
          break;
          case"message":const m=i.T;
          if(i.repeated)s[r]=o[r].map(p=>xbt(p,m)?p:new m(p));
          else{
            const p=o[r];
            m.fieldWrapper?m.typeName==="google.protobuf.BytesValue"?s[r]=l5n(p):s[r]=p:s[r]=xbt(p,m)?p:new m(p)
          }
          break
        }
      }
    }, equals(n, e, t){
      return e===t?!0:!e||!t?!1:n.fields.byMember().every(i=>{
        const r=e[i.localName],s=t[i.localName];
        if(i.repeated){
          if(r.length!==s.length)return!1;
          switch(i.kind){
            case"message":return r.every((o,a)=>i.T.equals(o,s[a]));
            case"scalar":return r.every((o,a)=>TKe(i.T,o,s[a]));
            case"enum":return r.every((o,a)=>TKe(ud.INT32,o,s[a]))
          }
          throw new Error(`repeated cannot contain ${i.kind}`)
        }
        switch(i.kind){
          case"message":return i.T.equals(r,s);
          case"enum":return TKe(ud.INT32,r,s);
          case"scalar":return TKe(i.T,r,s);
          case"oneof":if(r.case!==s.case)return!1;
          const o=i.findField(r.case);
          if(o===void 0)return!0;
          switch(o.kind){
            case"message":return o.T.equals(r.value,s.value);
            case"enum":return TKe(ud.INT32,r.value,s.value);
            case"scalar":return TKe(o.T,r.value,s.value)
          }
          throw new Error(`oneof cannot contain ${o.kind}`);
          case"map":const a=Object.keys(r).concat(Object.keys(s));
          switch(i.V.kind){
            case"message":const l=i.V.T;
            return a.every(d=>l.equals(r[d],s[d]));
            case"enum":return a.every(d=>TKe(ud.INT32,r[d],s[d]));
            case"scalar":const u=i.V.T;
            return a.every(d=>TKe(u,r[d],s[d]))
          }
          break
        }
      })
    }, clone(n){
      const e=n.getType(),t=new e,i=t;
      for(const r of e.fields.byMember()){
        const s=n[r.localName];
        let o;
        if(r.repeated)o=s.map(A9o);
        else if(r.kind=="map"){
          o=i[r.localName];
          for(const[a,l]of Object.entries(s))o[a]=A9o(l)
        }
        else r.kind=="oneof"?o=r.findField(s.case)?{
          case:s.case,value:A9o(s.value)
        }
        :{
          case:void 0
        }
        :o=A9o(s);
        i[r.localName]=o
      }
      for(const r of e.runtime.bin.listUnknownFields(n))e.runtime.bin.onUnknownField(i,r.no,r.wireType,r.data);
      return t
    }
  }
}
function A9o(n){
  if(n===void 0)return n;
  if(xbt(n))return n.clone();
  if(n instanceof Uint8Array){
    const e=new Uint8Array(n.byteLength);
    return e.set(n), e
  }
  return n
}
function l5n(n){
  return n instanceof Uint8Array?n:new Uint8Array(n)
}
var RmA=