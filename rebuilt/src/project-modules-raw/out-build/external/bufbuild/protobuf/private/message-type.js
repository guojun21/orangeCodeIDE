// Module: out-build/external/bufbuild/protobuf/private/message-type.js
// Offset: 2496543 (bundle byte offset)
// Size: 2215 bytes

$te()
}
});
function omA(){
  let n=0, e=0;
  for(let i=0;
  i<28;
  i+=7){
    let r=this.buf[this.pos++];
    if(n|=(r&127)<<i, (r&128)==0)return this.assertBounds(), [n, e]
  }
  let t=this.buf[this.pos++];
  if(n|=(t&15)<<28, e=(t&112)>>4, (t&128)==0)return this.assertBounds(), [n, e];
  for(let i=3;
  i<=31;
  i+=7){
    let r=this.buf[this.pos++];
    if(e|=(r&127)<<i, (r&128)==0)return this.assertBounds(), [n, e]
  }
  throw new Error("invalid varint")
}
function YBc(n, e, t){
  for(let s=0;
  s<28;
  s=s+7){
    const o=n>>>s, a=!(!(o>>>7)&&e==0), l=(a?o|128:o)&255;
    if(t.push(l), !a)return
  }
  const i=n>>>28&15|(e&7)<<4, r=e>>3!=0;
  if(t.push((r?i|128:i)&255), !!r){
    for(let s=3;
    s<31;
    s=s+7){
      const o=e>>>s,a=!!(o>>>7),l=(a?o|128:o)&255;
      if(t.push(l),!a)return
    }
    t.push(e>>>31&1)
  }
}
function Dkh(n){
  const e=n[0]==="-";
  e&&(n=n.slice(1));
  const t=1e6;
  let i=0, r=0;
  function s(o, a){
    const l=Number(n.slice(o, a));
    r*=t, i=i*t+l, i>=n5n&&(r=r+(i/n5n|0), i=i%n5n)
  }
  return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), e?Rkh(i, r):ZBc(i, r)
}
function amA(n, e){
  let t=ZBc(n, e);
  const i=t.hi&2147483648;
  i&&(t=Rkh(t.lo, t.hi));
  const r=Bkh(t.lo, t.hi);
  return i?"-"+r:r
}
function Bkh(n, e){
  if({
    lo:n, hi:e
  }
  =cmA(n, e), e<=2097151)return String(n5n*e+n);
  const t=n&16777215, i=(n>>>24|e<<8)&16777215, r=e>>16&65535;
  let s=t+i*6777216+r*6710656, o=i+r*8147497, a=r*2;
  const l=1e7;
  return s>=l&&(o+=Math.floor(s/l), s%=l), o>=l&&(a+=Math.floor(o/l), o%=l), a.toString()+XBc(o)+XBc(s)
}
function cmA(n, e){
  return{
    lo:n>>>0, hi:e>>>0
  }
}
function ZBc(n, e){
  return{
    lo:n|0, hi:e|0
  }
}
function Rkh(n, e){
  return e=~e, n?n=~n+1:e+=1, ZBc(n, e)
}
function Pkh(n, e){
  if(n>=0){
    for(;
    n>127;
    )e.push(n&127|128), n=n>>>7;
    e.push(n)
  }
  else{
    for(let t=0;
    t<9;
    t++)e.push(n&127|128), n=n>>7;
    e.push(1)
  }
}
function lmA(){
  let n=this.buf[this.pos++], e=n&127;
  if((n&128)==0)return this.assertBounds(), e;
  if(n=this.buf[this.pos++], e|=(n&127)<<7, (n&128)==0)return this.assertBounds(), e;
  if(n=this.buf[this.pos++], e|=(n&127)<<14, (n&128)==0)return this.assertBounds(), e;
  if(n=this.buf[this.pos++], e|=(n&127)<<21, (n&128)==0)return this.assertBounds(), e;
  n=this.buf[this.pos++], e|=(n&15)<<28;
  for(let t=5;
  (n&128)!==0&&t<10;
  t++)n=this.buf[this.pos++];
  if((n&128)!=0)throw new Error("invalid varint");
  return this.assertBounds(), e>>>0
}
var n5n, XBc, Lkh=