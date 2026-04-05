// Module: out-build/external/bufbuild/protobuf/private/field-list.js
// Offset: 2527043 (bundle byte offset)
// Size: 1164 bytes

lRc=class{
  constructor(n, e){
    this._fields=n, this._normalizer=e
  }
  findJsonName(n){
    if(!this.jsonNames){
      const e={
        
      };
      for(const t of this.list())e[t.jsonName]=e[t.name]=t;
      this.jsonNames=e
    }
    return this.jsonNames[n]
  }
  find(n){
    if(!this.numbers){
      const e={
        
      };
      for(const t of this.list())e[t.no]=t;
      this.numbers=e
    }
    return this.numbers[n]
  }
  list(){
    return this.all||(this.all=this._normalizer(this._fields)), this.all
  }
  byNumber(){
    return this.numbersAsc||(this.numbersAsc=this.list().concat().sort((n, e)=>n.no-e.no)), this.numbersAsc
  }
  byMember(){
    if(!this.members){
      this.members=[];
      const n=this.members;
      let e;
      for(const t of this.list())t.oneof?t.oneof!==e&&(e=t.oneof,n.push(e)):n.push(t)
    }
    return this.members
  }
}
}
});
function t1h(n, e){
  const t=n1h(n);
  return e?t:a1h(o1h(t))
}
function PmA(n){
  return t1h(n, !1)
}
function n1h(n){
  let e=!1;
  const t=[];
  for(let i=0;
  i<n.length;
  i++){
    let r=n.charAt(i);
    switch(r){
      case"_":e=!0;
      break;
      case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":t.push(r),e=!1;
      break;
      default:e&&(e=!1,r=r.toUpperCase()),t.push(r);
      break
    }
  }
  return t.join("")
}
var i1h, r1h, s1h, uRc, o1h, a1h, u5n=