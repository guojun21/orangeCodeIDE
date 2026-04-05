// Module: out-build/vs/base/common/hash.js
// Offset: 465073 (bundle byte offset)
// Size: 3125 bytes

Ql(), oa(), wFn=n=>{
  if(typeof n=="string"&&n.length<250){
    const t=new yde;
    return t.update(n), Promise.resolve(t.digest())
  }
  let e;
  return typeof n=="string"?e=new TextEncoder().encode(n):n instanceof Ms?e=n.buffer:e=n, crypto.subtle.digest("sha-1", e).then(Fze)
}, (function(n){
  n[n.BLOCK_SIZE=64]="BLOCK_SIZE", n[n.UNICODE_REPLACEMENT=65533]="UNICODE_REPLACEMENT"
})(ash||(ash={
  
})), yde=class sJb{
  static{
    this._bigBlock32=new DataView(new ArrayBuffer(320))
  }
  constructor(){
    this._h0=1732584193, this._h1=4023233417, this._h2=2562383102, this._h3=271733878, this._h4=3285377520, this._buff=new Uint8Array(67), this._buffDV=new DataView(this._buff.buffer), this._buffLen=0, this._totalLen=0, this._leftoverHighSurrogate=0, this._finished=!1
  }
  update(e){
    const t=e.length;
    if(t===0)return;
    const i=this._buff;
    let r=this._buffLen, s=this._leftoverHighSurrogate, o, a;
    for(s!==0?(o=s, a=-1, s=0):(o=e.charCodeAt(0), a=0);
    ;
    ){
      let l=o;
      if(d3(o))if(a+1<t){
        const u=e.charCodeAt(a+1);
        ggt(u)?(a++,l=J0c(o,u)):l=65533
      }
      else{
        s=o;
        break
      }
      else ggt(o)&&(l=65533);
      if(r=this._push(i,r,l),a++,a<t)o=e.charCodeAt(a);
      else break
    }
    this._buffLen=r, this._leftoverHighSurrogate=s
  }
  _push(e, t, i){
    return i<128?e[t++]=i:i<2048?(e[t++]=192|(i&1984)>>>6, e[t++]=128|(i&63)>>>0):i<65536?(e[t++]=224|(i&61440)>>>12, e[t++]=128|(i&4032)>>>6, e[t++]=128|(i&63)>>>0):(e[t++]=240|(i&1835008)>>>18, e[t++]=128|(i&258048)>>>12, e[t++]=128|(i&4032)>>>6, e[t++]=128|(i&63)>>>0), t>=64&&(this._step(), t-=64, this._totalLen+=64, e[0]=e[64], e[1]=e[65], e[2]=e[66]), t
  }
  digest(){
    return this._finished||(this._finished=!0, this._leftoverHighSurrogate&&(this._leftoverHighSurrogate=0, this._buffLen=this._push(this._buff, this._buffLen, 65533)), this._totalLen+=this._buffLen, this._wrapUp()), Fze(this._h0)+Fze(this._h1)+Fze(this._h2)+Fze(this._h3)+Fze(this._h4)
  }
  _wrapUp(){
    this._buff[this._buffLen++]=128, this._buff.subarray(this._buffLen).fill(0), this._buffLen>56&&(this._step(), this._buff.fill(0));
    const e=8*this._totalLen;
    this._buffDV.setUint32(56, Math.floor(e/4294967296), !1), this._buffDV.setUint32(60, e%4294967296, !1), this._step()
  }
  _step(){
    const e=sJb._bigBlock32, t=this._buffDV;
    for(let m=0;
    m<64;
    m+=4)e.setUint32(m, t.getUint32(m, !1), !1);
    for(let m=64;
    m<320;
    m+=4)e.setUint32(m, LCc(e.getUint32(m-12, !1)^e.getUint32(m-32, !1)^e.getUint32(m-56, !1)^e.getUint32(m-64, !1), 1), !1);
    let i=this._h0, r=this._h1, s=this._h2, o=this._h3, a=this._h4, l, u, d;
    for(let m=0;
    m<80;
    m++)m<20?(l=r&s|~r&o, u=1518500249):m<40?(l=r^s^o, u=1859775393):m<60?(l=r&s|r&o|s&o, u=2400959708):(l=r^s^o, u=3395469782), d=LCc(i, 5)+l+a+u+e.getUint32(m*4, !1)&4294967295, a=o, o=s, s=LCc(r, 30), r=i, i=d;
    this._h0=this._h0+i&4294967295, this._h1=this._h1+r&4294967295, this._h2=this._h2+s&4294967295, this._h3=this._h3+o&4294967295, this._h4=this._h4+a&4294967295
  }
}
}
});
function zA(n, e, t){
  return Math.min(Math.max(n, e), t)
}
function Tgt(n, e){
  return(e+n%e)%e
}
function SnA(n, e, t, i, r, s, o, a){
  const l=o-t, u=a-i, d=r-t, m=s-i, p=n-t, g=e-i, f=l*l+u*u, A=l*d+u*m, w=l*p+u*g, C=d*d+m*m, x=d*p+m*g, I=1/(f*C-A*A), B=(C*w-A*x)*I, R=(f*x-A*w)*I;
  return B>=0&&R>=0&&B+R<1
}
function knA(n){
  return Qb(n>=0&&n<=1, "p must be between 0 and 1"), Math.random()<n
}
var _Fn, csh, sE=