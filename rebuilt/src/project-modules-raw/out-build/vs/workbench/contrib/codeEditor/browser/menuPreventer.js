// Module: out-build/vs/workbench/contrib/codeEditor/browser/menuPreventer.js
// Offset: 25571644 (bundle byte offset)
// Size: 1970 bytes

rt(), Cu(), jZ=class extends at{
  static{
    this.ID="editor.contrib.menuPreventer"
  }
  constructor(n){
    super(), this._editor=n, this._altListeningMouse=!1, this._altMouseTriggered=!1, this._register(this._editor.onMouseDown(e=>{
      this._altListeningMouse&&(this._altMouseTriggered=!0)
    })), this._register(this._editor.onKeyDown(e=>{
      e.equals(512)&&(this._altListeningMouse||(this._altMouseTriggered=!1),this._altListeningMouse=!0)
    })), this._register(this._editor.onKeyUp(e=>{
      e.equals(512)&&(this._altMouseTriggered&&e.preventDefault(),this._altListeningMouse=!1,this._altMouseTriggered=!1)
    }))
  }
}, Mg(jZ.ID, jZ, 2)
}
});
function Dwg(n){
  for(let e=0, t=n.length;
  e<t;
  e+=4){
    const i=n[e+0], r=n[e+1], s=n[e+2], o=n[e+3];
    n[e+0]=o, n[e+1]=s, n[e+2]=r, n[e+3]=i
  }
}
function TkA(n){
  const e=new Uint8Array(n.buffer, n.byteOffset, n.length*4);
  return f0c()||Dwg(e), Ms.wrap(e)
}
function IkA(n){
  const e=n.buffer;
  if(f0c()||Dwg(e), e.byteOffset%4===0)return new Uint32Array(e.buffer, e.byteOffset, e.length/4);
  {
    const t=new Uint8Array(e.byteLength);
    return t.set(e), new Uint32Array(t.buffer, t.byteOffset, t.length/4)
  }
}
function Bwg(n){
  const e=new Uint32Array(DkA(n));
  let t=0;
  if(e[t++]=n.id, n.type==="full")e[t++]=1, e[t++]=n.data.length, e.set(n.data, t), t+=n.data.length;
  else{
    e[t++]=2, e[t++]=n.deltas.length;
    for(const i of n.deltas)e[t++]=i.start, e[t++]=i.deleteCount, i.data?(e[t++]=i.data.length, e.set(i.data, t), t+=i.data.length):e[t++]=0
  }
  return TkA(e)
}
function DkA(n){
  let e=0;
  if(e+=2, n.type==="full")e+=1+n.data.length;
  else{
    e+=1, e+=3*n.deltas.length;
    for(const t of n.deltas)t.data&&(e+=t.data.length)
  }
  return e
}
function Rwg(n){
  const e=IkA(n);
  let t=0;
  const i=e[t++];
  if(e[t++]===1){
    const a=e[t++], l=e.subarray(t, t+a);
    return t+=a, {
      id:i,type:"full",data:l
    }
  }
  const s=e[t++], o=[];
  for(let a=0;
  a<s;
  a++){
    const l=e[t++], u=e[t++], d=e[t++];
    let m;
    d>0&&(m=e.subarray(t, t+d), t+=d), o[a]={
      start:l,deleteCount:u,data:m
    }
  }
  return{
    id:i, type:"delta", deltas:o
  }
}
var Pwg, Lwg=