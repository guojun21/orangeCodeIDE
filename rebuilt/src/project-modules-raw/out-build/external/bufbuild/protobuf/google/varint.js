// Module: out-build/external/bufbuild/protobuf/google/varint.js
// Offset: 2498758 (bundle byte offset)
// Size: 1639 bytes

n5n=4294967296, XBc=n=>{
  const e=String(n);
  return"0000000".slice(e.length)+e
}
}
});
function umA(){
  const n=new DataView(new ArrayBuffer(8));
  if(typeof BigInt=="function"&&typeof n.getBigInt64=="function"&&typeof n.getBigUint64=="function"&&typeof n.setBigInt64=="function"&&typeof n.setBigUint64=="function"&&(typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){
    const r=BigInt("-9223372036854775808"), s=BigInt("9223372036854775807"), o=BigInt("0"), a=BigInt("18446744073709551615");
    return{
      zero:BigInt(0),supported:!0,parse(l){
        const u=typeof l=="bigint"?l:BigInt(l);
        if(u>s||u<r)throw new Error(`int64 invalid: ${l}`);
        return u
      },uParse(l){
        const u=typeof l=="bigint"?l:BigInt(l);
        if(u>a||u<o)throw new Error(`uint64 invalid: ${l}`);
        return u
      },enc(l){
        return n.setBigInt64(0,this.parse(l),!0),{
          lo:n.getInt32(0,!0),hi:n.getInt32(4,!0)
        }
      },uEnc(l){
        return n.setBigInt64(0,this.uParse(l),!0),{
          lo:n.getInt32(0,!0),hi:n.getInt32(4,!0)
        }
      },dec(l,u){
        return n.setInt32(0,l,!0),n.setInt32(4,u,!0),n.getBigInt64(0,!0)
      },uDec(l,u){
        return n.setInt32(0,l,!0),n.setInt32(4,u,!0),n.getBigUint64(0,!0)
      }
    }
  }
  const t=r=>x9(/^-?[0-9]+$/.test(r), `int64 invalid: ${r}`), i=r=>x9(/^[0-9]+$/.test(r), `uint64 invalid: ${r}`);
  return{
    zero:"0", supported:!1, parse(r){
      return typeof r!="string"&&(r=r.toString()),t(r),r
    }, uParse(r){
      return typeof r!="string"&&(r=r.toString()),i(r),r
    }, enc(r){
      return typeof r!="string"&&(r=r.toString()),t(r),Dkh(r)
    }, uEnc(r){
      return typeof r!="string"&&(r=r.toString()),i(r),Dkh(r)
    }, dec(r, s){
      return amA(r,s)
    }, uDec(r, s){
      return Bkh(r,s)
    }
  }
}
var Eo, EKe=