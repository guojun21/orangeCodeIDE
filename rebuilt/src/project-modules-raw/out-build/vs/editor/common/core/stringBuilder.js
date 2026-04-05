// Module: out-build/vs/editor/common/core/stringBuilder.js
// Offset: 740576 (bundle byte offset)
// Size: 2848 bytes

oa(), _r(), Ql(), Gbe=class{
  constructor(n){
    this._capacity=n|0, this._buffer=new Uint16Array(this._capacity), this._completedStrings=null, this._bufferLength=0
  }
  reset(){
    this._completedStrings=null, this._bufferLength=0
  }
  build(){
    return this._completedStrings!==null?(this._flushBuffer(), this._completedStrings.join("")):this._buildBuffer()
  }
  _buildBuffer(){
    if(this._bufferLength===0)return"";
    const n=new Uint16Array(this._buffer.buffer, 0, this._bufferLength);
    return Rch().decode(n)
  }
  _flushBuffer(){
    const n=this._buildBuffer();
    this._bufferLength=0, this._completedStrings===null?this._completedStrings=[n]:this._completedStrings[this._completedStrings.length]=n
  }
  appendCharCode(n){
    const e=this._capacity-this._bufferLength;
    e<=1&&(e===0||d3(n))&&this._flushBuffer(), this._buffer[this._bufferLength++]=n
  }
  appendASCIICharCode(n){
    this._bufferLength===this._capacity&&this._flushBuffer(), this._buffer[this._bufferLength++]=n
  }
  appendString(n){
    const e=n.length;
    if(this._bufferLength+e>=this._capacity){
      this._flushBuffer(),this._completedStrings[this._completedStrings.length]=n;
      return
    }
    for(let t=0;
    t<e;
    t++)this._buffer[this._bufferLength++]=n.charCodeAt(t)
  }
}
}
});
function lrA(n){
  const e=n.length;
  n=n.map(o=>[o[0].toLowerCase(), o[1].toLowerCase()]);
  const t=[];
  for(let o=0;
  o<e;
  o++)t[o]=o;
  const i=(o, a)=>{
    const[l, u]=o, [d, m]=a;
    return l===d||l===m||u===d||u===m
  }, r=(o, a)=>{
    const l=Math.min(o, a), u=Math.max(o, a);
    for(let d=0;
    d<e;
    d++)t[d]===u&&(t[d]=l)
  };
  for(let o=0;
  o<e;
  o++){
    const a=n[o];
    for(let l=o+1;
    l<e;
    l++){
      const u=n[l];
      i(a,u)&&r(t[o],t[l])
    }
  }
  const s=[];
  for(let o=0;
  o<e;
  o++){
    const a=[], l=[];
    for(let u=0;
    u<e;
    u++)if(t[u]===o){
      const[d,m]=n[u];
      a.push(d),l.push(m)
    }
    a.length>0&&s.push({
      open:a,close:l
    })
  }
  return s
}
function Pch(n, e, t, i){
  for(let r=0, s=e.length;
  r<s;
  r++){
    if(r===t)continue;
    const o=e[r];
    for(const a of o.open)a.indexOf(n)>=0&&i.push(a);
    for(const a of o.close)a.indexOf(n)>=0&&i.push(a)
  }
}
function Lch(n, e){
  return n.length-e.length
}
function ZFo(n){
  if(n.length<=1)return n;
  const e=[], t=new Set;
  for(const i of n)t.has(i)||(e.push(i), t.add(i));
  return e
}
function urA(n, e, t, i){
  let r=[];
  r=r.concat(n), r=r.concat(e);
  for(let s=0, o=r.length;
  s<o;
  s++)Pch(r[s], t, i, r);
  return r=ZFo(r), r.sort(Lch), r.reverse(), A4n(r)
}
function drA(n, e, t, i){
  let r=[];
  r=r.concat(n), r=r.concat(e);
  for(let s=0, o=r.length;
  s<o;
  s++)Pch(r[s], t, i, r);
  return r=ZFo(r), r.sort(Lch), r.reverse(), A4n(r.map(XFo))
}
function hrA(n){
  let e=[];
  for(const t of n){
    for(const i of t.open)e.push(i);
    for(const i of t.close)e.push(i)
  }
  return e=ZFo(e), A4n(e)
}
function mrA(n){
  let e=[];
  for(const t of n){
    for(const i of t.open)e.push(i);
    for(const i of t.close)e.push(i)
  }
  return e=ZFo(e), A4n(e.map(XFo))
}
function prA(n){
  const e=/^[\w ]+$/.test(n);
  return n=UI(n), e?`\\b${n}\\b`:n
}
function A4n(n, e){
  const t=`(${n.map(prA).join(")|(")})`;
  return iFn(t, !0, e)
}
var Nch, Mch, XFo, Ede, e4o=