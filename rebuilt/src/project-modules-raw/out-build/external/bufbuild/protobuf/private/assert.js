// Module: out-build/external/bufbuild/protobuf/private/assert.js
// Offset: 2494065 (bundle byte offset)
// Size: 769 bytes

wkh=34028234663852886e22, _kh=-34028234663852886e22, Ckh=4294967295, Skh=2147483647, kkh=-2147483648
}
});
function Ekh(n){
  const e=n[VBc];
  return x9(e, "missing enum type on enum object"), e
}
function xkh(n, e, t, i){
  n[VBc]=Tkh(e, t.map(r=>({
    no:r.no, name:r.name, localName:n[r.no]
  })), i)
}
function Tkh(n, e, t){
  const i=Object.create(null), r=Object.create(null), s=[];
  for(const o of e){
    const a=Ikh(o);
    s.push(a), i[o.name]=a, r[o.no]=a
  }
  return{
    typeName:n, values:s, findName(o){
      return i[o]
    }, findNumber(o){
      return r[o]
    }
  }
}
function imA(n, e, t){
  const i={
    
  };
  for(const r of e){
    const s=Ikh(r);
    i[s.localName]=s.no, i[s.no]=s.localName
  }
  return xkh(i, n, e, t), i
}
function Ikh(n){
  return"localName"in n?n:{
    ...n, localName:n.name
  }
}
var VBc, KBc=