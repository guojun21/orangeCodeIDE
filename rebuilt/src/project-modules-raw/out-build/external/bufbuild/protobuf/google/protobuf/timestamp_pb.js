// Module: out-build/external/bufbuild/protobuf/google/protobuf/timestamp_pb.js
// Offset: 2565317 (bundle byte offset)
// Size: 2391 bytes

$te(), EKe(), pve(), $0=class MDt extends ie{
  constructor(e){
    super(), this.seconds=Eo.zero, this.nanos=0, v.util.initPartial(e, this)
  }
  fromJson(e, t){
    if(typeof e!="string")throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${v.json.debug(e)}`);
    const i=e.match(/^([0-9]{
      4
    })-([0-9]{
      2
    })-([0-9]{
      2
    })T([0-9]{
      2
    }):([0-9]{
      2
    }):([0-9]{
      2
    })(?:Z|\.([0-9]{
      3,9
    })Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if(!i)throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const r=Date.parse(i[1]+"-"+i[2]+"-"+i[3]+"T"+i[4]+":"+i[5]+":"+i[6]+(i[8]?i[8]:"Z"));
    if(Number.isNaN(r))throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if(r<Date.parse("0001-01-01T00:00:00Z")||r>Date.parse("9999-12-31T23:59:59Z"))throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds=Eo.parse(r/1e3), this.nanos=0, i[7]&&(this.nanos=parseInt("1"+i[7]+"0".repeat(9-i[7].length))-1e9), this
  }
  toJson(e){
    const t=Number(this.seconds)*1e3;
    if(t<Date.parse("0001-01-01T00:00:00Z")||t>Date.parse("9999-12-31T23:59:59Z"))throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if(this.nanos<0)throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let i="Z";
    if(this.nanos>0){
      const r=(this.nanos+1e9).toString().substring(1);
      r.substring(3)==="000000"?i="."+r.substring(0,3)+"Z":r.substring(6)==="000"?i="."+r.substring(0,6)+"Z":i="."+r+"Z"
    }
    return new Date(t).toISOString().replace(".000Z", i)
  }
  toDate(){
    return new Date(Number(this.seconds)*1e3+Math.ceil(this.nanos/1e6))
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="google.protobuf.Timestamp"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"seconds",kind:"scalar",T:3
    }, {
      no:2,name:"nanos",kind:"scalar",T:5
    }
    ])
  }
  static now(){
    return MDt.fromDate(new Date)
  }
  static fromDate(e){
    const t=e.getTime();
    return new MDt({
      seconds:Eo.parse(Math.floor(t/1e3)),nanos:t%1e3*1e6
    })
  }
  static fromBinary(e, t){
    return new MDt().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new MDt().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new MDt().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(MDt, e, t)
  }
}
}
}), n5t, mRc=