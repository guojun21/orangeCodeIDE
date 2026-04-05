// Module: out-build/external/bufbuild/protobuf/google/protobuf/field_mask_pb.js
// Offset: 2572437 (bundle byte offset)
// Size: 1519 bytes

$te(), pve(), QmA=class ZNi extends ie{
  constructor(e){
    super(), this.paths=[], v.util.initPartial(e, this)
  }
  toJson(e){
    function t(i){
      let r=!1;
      const s=[];
      for(let o=0;
      o<i.length;
      o++){
        let a=i.charAt(o);
        switch(a){
          case"_":r=!0;
          break;
          case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":s.push(a),r=!1;
          break;
          default:r&&(r=!1,a=a.toUpperCase()),s.push(a);
          break
        }
      }
      return s.join("")
    }
    return this.paths.map(i=>{
      if(i.match(/_[0-9]?_/g)||i.match(/[A-Z]/g))throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "'+i+'" is irreversible');
      return t(i)
    }).join(",")
  }
  fromJson(e, t){
    if(typeof e!="string")throw new Error("cannot decode google.protobuf.FieldMask from JSON: "+v.json.debug(e));
    if(e==="")return this;
    function i(r){
      if(r.includes("_"))throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
      const s=r.replace(/[A-Z]/g,o=>"_"+o.toLowerCase());
      return s[0]==="_"?s.substring(1):s
    }
    return this.paths=e.split(",").map(i), this
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="google.protobuf.FieldMask"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"paths",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ZNi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ZNi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ZNi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ZNi, e, t)
  }
}
}
}), i5t, jR, Zde, fRc, P9o=