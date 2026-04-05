// Module: out-build/external/bufbuild/protobuf/message.js
// Offset: 2494967 (bundle byte offset)
// Size: 1576 bytes

ie=class{
  equals(n){
    return this.getType().runtime.util.equals(this.getType(), this, n)
  }
  clone(){
    return this.getType().runtime.util.clone(this)
  }
  fromBinary(n, e){
    const t=this.getType(), i=t.runtime.bin, r=i.makeReadOptions(e);
    return i.readMessage(this, r.readerFactory(n), n.byteLength, r), this
  }
  fromJson(n, e){
    const t=this.getType(), i=t.runtime.json, r=i.makeReadOptions(e);
    return i.readMessage(t, n, r, this), this
  }
  fromJsonString(n, e){
    let t;
    try{
      t=JSON.parse(n)
    }
    catch(i){
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${i instanceof Error?i.message:String(i)}`)
    }
    return this.fromJson(t, e)
  }
  toBinary(n){
    const e=this.getType(), t=e.runtime.bin, i=t.makeWriteOptions(n), r=i.writerFactory();
    return t.writeMessage(this, r, i), r.finish()
  }
  toJson(n){
    const e=this.getType(), t=e.runtime.json, i=t.makeWriteOptions(n);
    return t.writeMessage(this, i)
  }
  toJsonString(n){
    const e=this.toJson(n);
    return JSON.stringify(e, null, n?.prettySpaces??0)
  }
  toJSON(){
    return this.toJson({
      emitDefaultValues:!0
    })
  }
  getType(){
    return Object.getPrototypeOf(this).constructor
  }
}
}
});
function rmA(n, e, t, i){
  const r=i?.localName??e.substring(e.lastIndexOf(".")+1), s={
    [r]:function(o){
      n.util.initFields(this),n.util.initPartial(o,this)
    }
  }
  [r];
  return Object.setPrototypeOf(s.prototype, new ie), Object.assign(s, {
    runtime:n, typeName:e, fields:n.util.newFieldList(t), fromBinary(o, a){
      return new s().fromBinary(o,a)
    }, fromJson(o, a){
      return new s().fromJson(o,a)
    }, fromJsonString(o, a){
      return new s().fromJsonString(o,a)
    }, equals(o, a){
      return n.util.equals(s,o,a)
    }
  }), s
}
var smA=