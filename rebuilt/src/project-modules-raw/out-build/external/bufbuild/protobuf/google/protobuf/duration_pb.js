// Module: out-build/external/bufbuild/protobuf/google/protobuf/duration_pb.js
// Offset: 2567708 (bundle byte offset)
// Size: 1661 bytes

$te(), EKe(), pve(), n5t=class KNi extends ie{
  constructor(e){
    super(), this.seconds=Eo.zero, this.nanos=0, v.util.initPartial(e, this)
  }
  fromJson(e, t){
    if(typeof e!="string")throw new Error(`cannot decode google.protobuf.Duration from JSON: ${v.json.debug(e)}`);
    const i=e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if(i===null)throw new Error(`cannot decode google.protobuf.Duration from JSON: ${v.json.debug(e)}`);
    const r=Number(i[1]);
    if(r>315576e6||r<-315576e6)throw new Error(`cannot decode google.protobuf.Duration from JSON: ${v.json.debug(e)}`);
    if(this.seconds=Eo.parse(r), typeof i[2]=="string"){
      const s=i[2]+"0".repeat(9-i[2].length);
      this.nanos=parseInt(s),(r<0||Object.is(r,-0))&&(this.nanos=-this.nanos)
    }
    return this
  }
  toJson(e){
    if(Number(this.seconds)>315576e6||Number(this.seconds)<-315576e6)throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let t=this.seconds.toString();
    if(this.nanos!==0){
      let i=Math.abs(this.nanos).toString();
      i="0".repeat(9-i.length)+i,i.substring(3)==="000000"?i=i.substring(0,3):i.substring(6)==="000"&&(i=i.substring(0,6)),t+="."+i,this.nanos<0&&Number(this.seconds)==0&&(t="-"+t)
    }
    return t+"s"
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="google.protobuf.Duration"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"seconds",kind:"scalar",T:3
    }, {
      no:2,name:"nanos",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new KNi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new KNi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new KNi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(KNi, e, t)
  }
}
}
}), pRc, gRc=