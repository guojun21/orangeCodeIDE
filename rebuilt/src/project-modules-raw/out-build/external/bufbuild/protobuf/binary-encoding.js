// Module: out-build/external/bufbuild/protobuf/binary-encoding.js
// Offset: 2514831 (bundle byte offset)
// Size: 8686 bytes

Lkh(), BRe(), EKe(), (function(n){
  n[n.Varint=0]="Varint", n[n.Bit64=1]="Bit64", n[n.LengthDelimited=2]="LengthDelimited", n[n.StartGroup=3]="StartGroup", n[n.EndGroup=4]="EndGroup", n[n.Bit32=5]="Bit32"
})(q6||(q6={
  
})), Qkh=class{
  constructor(n){
    this.stack=[], this.textEncoder=n??new TextEncoder, this.chunks=[], this.buf=[]
  }
  finish(){
    this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)), this.buf=[]);
    let n=0;
    for(let i=0;
    i<this.chunks.length;
    i++)n+=this.chunks[i].length;
    let e=new Uint8Array(n), t=0;
    for(let i=0;
    i<this.chunks.length;
    i++)e.set(this.chunks[i], t), t+=this.chunks[i].length;
    return this.chunks=[], e
  }
  fork(){
    return this.stack.push({
      chunks:this.chunks,buf:this.buf
    }), this.chunks=[], this.buf=[], this
  }
  join(){
    let n=this.finish(), e=this.stack.pop();
    if(!e)throw new Error("invalid state, fork stack empty");
    return this.chunks=e.chunks, this.buf=e.buf, this.uint32(n.byteLength), this.raw(n)
  }
  tag(n, e){
    return this.uint32((n<<3|e)>>>0)
  }
  raw(n){
    return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)), this.buf=[]), this.chunks.push(n), this
  }
  uint32(n){
    for(zBc(n);
    n>127;
    )this.buf.push(n&127|128), n=n>>>7;
    return this.buf.push(n), this
  }
  int32(n){
    return p9o(n), Pkh(n, this.buf), this
  }
  bool(n){
    return this.buf.push(n?1:0), this
  }
  bytes(n){
    return this.uint32(n.byteLength), this.raw(n)
  }
  string(n){
    let e=this.textEncoder.encode(n);
    return this.uint32(e.byteLength), this.raw(e)
  }
  float(n){
    ykh(n);
    let e=new Uint8Array(4);
    return new DataView(e.buffer).setFloat32(0, n, !0), this.raw(e)
  }
  double(n){
    let e=new Uint8Array(8);
    return new DataView(e.buffer).setFloat64(0, n, !0), this.raw(e)
  }
  fixed32(n){
    zBc(n);
    let e=new Uint8Array(4);
    return new DataView(e.buffer).setUint32(0, n, !0), this.raw(e)
  }
  sfixed32(n){
    p9o(n);
    let e=new Uint8Array(4);
    return new DataView(e.buffer).setInt32(0, n, !0), this.raw(e)
  }
  sint32(n){
    return p9o(n), n=(n<<1^n>>31)>>>0, Pkh(n, this.buf), this
  }
  sfixed64(n){
    let e=new Uint8Array(8), t=new DataView(e.buffer), i=Eo.enc(n);
    return t.setInt32(0, i.lo, !0), t.setInt32(4, i.hi, !0), this.raw(e)
  }
  fixed64(n){
    let e=new Uint8Array(8), t=new DataView(e.buffer), i=Eo.uEnc(n);
    return t.setInt32(0, i.lo, !0), t.setInt32(4, i.hi, !0), this.raw(e)
  }
  int64(n){
    let e=Eo.enc(n);
    return YBc(e.lo, e.hi, this.buf), this
  }
  sint64(n){
    let e=Eo.enc(n), t=e.hi>>31, i=e.lo<<1^t, r=(e.hi<<1|e.lo>>>31)^t;
    return YBc(i, r, this.buf), this
  }
  uint64(n){
    let e=Eo.uEnc(n);
    return YBc(e.lo, e.hi, this.buf), this
  }
}, jkh=class{
  constructor(n, e){
    this.varint64=omA, this.uint32=lmA, this.buf=n, this.len=n.length, this.pos=0, this.view=new DataView(n.buffer, n.byteOffset, n.byteLength), this.textDecoder=e??new TextDecoder
  }
  tag(){
    let n=this.uint32(), e=n>>>3, t=n&7;
    if(e<=0||t<0||t>5)throw new Error("illegal tag: field no "+e+" wire type "+t);
    return[e, t]
  }
  skip(n, e){
    let t=this.pos;
    switch(n){
      case q6.Varint:for(;
      this.buf[this.pos++]&128;
      );
      break;
      case q6.Bit64:this.pos+=4;
      case q6.Bit32:this.pos+=4;
      break;
      case q6.LengthDelimited:let i=this.uint32();
      this.pos+=i;
      break;
      case q6.StartGroup:for(;
      ;
      ){
        const[r,s]=this.tag();
        if(s===q6.EndGroup){
          if(e!==void 0&&r!==e)throw new Error("invalid end group tag");
          break
        }
        this.skip(s,r)
      }
      break;
      default:throw new Error("cant skip wire type "+n)
    }
    return this.assertBounds(), this.buf.subarray(t, this.pos)
  }
  assertBounds(){
    if(this.pos>this.len)throw new RangeError("premature EOF")
  }
  int32(){
    return this.uint32()|0
  }
  sint32(){
    let n=this.uint32();
    return n>>>1^-(n&1)
  }
  int64(){
    return Eo.dec(...this.varint64())
  }
  uint64(){
    return Eo.uDec(...this.varint64())
  }
  sint64(){
    let[n, e]=this.varint64(), t=-(n&1);
    return n=(n>>>1|(e&1)<<31)^t, e=e>>>1^t, Eo.dec(n, e)
  }
  bool(){
    let[n, e]=this.varint64();
    return n!==0||e!==0
  }
  fixed32(){
    return this.view.getUint32((this.pos+=4)-4, !0)
  }
  sfixed32(){
    return this.view.getInt32((this.pos+=4)-4, !0)
  }
  fixed64(){
    return Eo.uDec(this.sfixed32(), this.sfixed32())
  }
  sfixed64(){
    return Eo.dec(this.sfixed32(), this.sfixed32())
  }
  float(){
    return this.view.getFloat32((this.pos+=4)-4, !0)
  }
  double(){
    return this.view.getFloat64((this.pos+=8)-8, !0)
  }
  bytes(){
    let n=this.uint32(), e=this.pos;
    return this.pos+=n, this.assertBounds(), this.buf.subarray(e, e+n)
  }
  string(){
    return this.textDecoder.decode(this.bytes())
  }
}
}
});
function CmA(n){
  return n?{
    ...aRc, ...n
  }
  :aRc
}
function SmA(n){
  return n?{
    ...cRc, ...n
  }
  :cRc
}
function kmA(){
  return{
    makeReadOptions:CmA, makeWriteOptions:SmA, listUnknownFields(n){
      return n[Tbt]??[]
    }, discardUnknownFields(n){
      delete n[Tbt]
    }, writeUnknownFields(n, e){
      const i=n[Tbt];
      if(i)for(const r of i)e.tag(r.no,r.wireType).raw(r.data)
    }, onUnknownField(n, e, t, i){
      const r=n;
      Array.isArray(r[Tbt])||(r[Tbt]=[]),r[Tbt].push({
        no:e,wireType:t,data:i
      })
    }, readMessage(n, e, t, i, r){
      const s=n.getType(),o=r?e.len:e.pos+t;
      let a,l;
      for(;
      e.pos<o&&([a,l]=e.tag(),!(r===!0&&l==q6.EndGroup));
      ){
        const u=s.fields.find(a);
        if(!u){
          const d=e.skip(l,a);
          i.readUnknownFields&&this.onUnknownField(n,a,l,d);
          continue
        }
        zkh(n,e,u,l,i)
      }
      if(r&&(l!=q6.EndGroup||a!==t))throw new Error("invalid end group tag")
    }, readField:zkh, writeMessage(n, e, t){
      const i=n.getType();
      for(const r of i.fields.byNumber()){
        if(!$kh(r,n)){
          if(r.req)throw new Error(`cannot encode field ${i.typeName}.${r.name} to binary: required field not set`);
          continue
        }
        const s=r.oneof?n[r.oneof.localName].value:n[r.localName];
        Vkh(r,s,e,t)
      }
      return t.writeUnknownFields&&this.writeUnknownFields(n,e),e
    }, writeField(n, e, t, i){
      e!==void 0&&Vkh(n,e,t,i)
    }
  }
}
function zkh(n, e, t, i, r){
  let{
    repeated:s, localName:o
  }
  =t;
  switch(t.oneof&&(n=n[t.oneof.localName], n.case!=o&&delete n.value, n.case=o, o="value"), t.kind){
    case"scalar":case"enum":const a=t.kind=="enum"?ud.INT32:t.T;
    let l=v9o;
    if(t.kind=="scalar"&&t.L>0&&(l=xmA), s){
      let p=n[o];
      if(i==q6.LengthDelimited&&a!=ud.STRING&&a!=ud.BYTES){
        let f=e.uint32()+e.pos;
        for(;
        e.pos<f;
        )p.push(l(e,a))
      }
      else p.push(l(e,a))
    }
    else n[o]=l(e, a);
    break;
    case"message":const u=t.T;
    s?n[o].push(b9o(e, new u, r, t)):xbt(n[o])?b9o(e, n[o], r, t):(n[o]=b9o(e, new u, r, t), u.fieldWrapper&&!t.oneof&&!t.repeated&&(n[o]=u.fieldWrapper.unwrapField(n[o])));
    break;
    case"map":let[d, m]=EmA(t, e, r);
    n[o][d]=m;
    break
  }
}
function b9o(n, e, t, i){
  const r=e.getType().runtime.bin, s=i?.delimited;
  return r.readMessage(e, n, s?i.no:n.uint32(), t, s), e
}
function EmA(n, e, t){
  const i=e.uint32(), r=e.pos+i;
  let s, o;
  for(;
  e.pos<r;
  ){
    const[a]=e.tag();
    switch(a){
      case 1:s=v9o(e,n.K);
      break;
      case 2:switch(n.V.kind){
        case"scalar":o=v9o(e,n.V.T);
        break;
        case"enum":o=e.int32();
        break;
        case"message":o=b9o(e,new n.V.T,t,void 0);
        break
      }
      break
    }
  }
  if(s===void 0&&(s=t5t(n.K, xKe.BIGINT)), typeof s!="string"&&typeof s!="number"&&(s=s.toString()), o===void 0)switch(n.V.kind){
    case"scalar":o=t5t(n.V.T, xKe.BIGINT);
    break;
    case"enum":o=n.V.T.values[0].no;
    break;
    case"message":o=new n.V.T;
    break
  }
  return[s, o]
}
function xmA(n, e){
  const t=v9o(n, e);
  return typeof t=="bigint"?t.toString():t
}
function v9o(n, e){
  switch(e){
    case ud.STRING:return n.string();
    case ud.BOOL:return n.bool();
    case ud.DOUBLE:return n.double();
    case ud.FLOAT:return n.float();
    case ud.INT32:return n.int32();
    case ud.INT64:return n.int64();
    case ud.UINT64:return n.uint64();
    case ud.FIXED64:return n.fixed64();
    case ud.BYTES:return n.bytes();
    case ud.FIXED32:return n.fixed32();
    case ud.SFIXED32:return n.sfixed32();
    case ud.SFIXED64:return n.sfixed64();
    case ud.SINT64:return n.sint64();
    case ud.UINT32:return n.uint32();
    case ud.SINT32:return n.sint32()
  }
}
function Vkh(n, e, t, i){
  x9(e!==void 0);
  const r=n.repeated;
  switch(n.kind){
    case"scalar":case"enum":let s=n.kind=="enum"?ud.INT32:n.T;
    if(r)if(x9(Array.isArray(e)), n.packed)ImA(t, s, n.no, e);
    else for(const o of e)c5n(t, s, n.no, o);
    else c5n(t, s, n.no, e);
    break;
    case"message":if(r){
      x9(Array.isArray(e));
      for(const o of e)Kkh(t,i,n,o)
    }
    else Kkh(t, i, n, e);
    break;
    case"map":x9(typeof e=="object"&&e!=null);
    for(const[o, a]of Object.entries(e))TmA(t, i, n, o, a);
    break
  }
}
function TmA(n, e, t, i, r){
  n.tag(t.no, q6.LengthDelimited), n.fork();
  let s=i;
  switch(t.K){
    case ud.INT32:case ud.FIXED32:case ud.UINT32:case ud.SFIXED32:case ud.SINT32:s=Number.parseInt(i);
    break;
    case ud.BOOL:x9(i=="true"||i=="false"), s=i=="true";
    break
  }
  switch(c5n(n, t.K, 1, s), t.V.kind){
    case"scalar":c5n(n, t.V.T, 2, r);
    break;
    case"enum":c5n(n, ud.INT32, 2, r);
    break;
    case"message":x9(r!==void 0), n.tag(2, q6.LengthDelimited).bytes(r.toBinary(e));
    break
  }
  n.join()
}
function Kkh(n, e, t, i){
  const r=Jkh(t.T, i);
  t.delimited?n.tag(t.no, q6.StartGroup).raw(r.toBinary(e)).tag(t.no, q6.EndGroup):n.tag(t.no, q6.LengthDelimited).bytes(r.toBinary(e))
}
function c5n(n, e, t, i){
  x9(i!==void 0);
  let[r, s]=Ykh(e);
  n.tag(t, r)[s](i)
}
function ImA(n, e, t, i){
  if(!i.length)return;
  n.tag(t, q6.LengthDelimited).fork();
  let[, r]=Ykh(e);
  for(let s=0;
  s<i.length;
  s++)n[r](i[s]);
  n.join()
}
function Ykh(n){
  let e=q6.Varint;
  switch(n){
    case ud.BYTES:case ud.STRING:e=q6.LengthDelimited;
    break;
    case ud.DOUBLE:case ud.FIXED64:case ud.SFIXED64:e=q6.Bit64;
    break;
    case ud.FIXED32:case ud.SFIXED32:case ud.FLOAT:e=q6.Bit32;
    break
  }
  const t=ud[n].toLowerCase();
  return[e, t]
}
var Tbt, aRc, cRc, DmA=