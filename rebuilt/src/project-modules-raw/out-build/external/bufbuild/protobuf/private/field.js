// Module: out-build/external/bufbuild/protobuf/private/field.js
// Offset: 2528558 (bundle byte offset)
// Size: 1087 bytes

u5n(), BRe(), c1h=class{
  constructor(n){
    this.kind="oneof", this.repeated=!1, this.packed=!1, this.opt=!1, this.req=!1, this.default=void 0, this.fields=[], this.name=n, this.localName=PmA(n)
  }
  addField(n){
    x9(n.oneof===this, `field ${n.name} not one of ${this.name}`), this.fields.push(n)
  }
  findField(n){
    if(!this._lookup){
      this._lookup=Object.create(null);
      for(let e=0;
      e<this.fields.length;
      e++)this._lookup[this.fields[e].localName]=this.fields[e]
    }
    return this._lookup[n]
  }
}
}
});
function l1h(n, e){
  const t=[];
  let i;
  for(const r of typeof n=="function"?n():n){
    const s=r;
    if(s.localName=t1h(r.name, r.oneof!==void 0), s.jsonName=r.jsonName??i1h(r.name), s.repeated=r.repeated??!1, r.kind=="scalar"&&(s.L=r.L??xKe.BIGINT), s.delimited=r.delimited??!1, s.req=r.req??!1, s.opt=r.opt??!1, r.packed===void 0&&(e?s.packed=r.kind=="enum"||r.kind=="scalar"&&r.T!=ud.BYTES&&r.T!=ud.STRING:s.packed=!1), r.oneof!==void 0){
      const o=typeof r.oneof=="string"?r.oneof:r.oneof.name;
      (!i||i.name!=o)&&(i=new c1h(o)),s.oneof=i,i.addField(s)
    }
    t.push(s)
  }
  return t
}
var u1h=