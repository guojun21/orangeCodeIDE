// Module: out-build/vs/editor/common/model/pieceTreeTextBuffer/rbTreeBase.js
// Offset: 1142434 (bundle byte offset)
// Size: 1752 bytes

fOo=class{
  constructor(n, e){
    this.piece=n, this.color=e, this.size_left=0, this.lf_left=0, this.parent=this, this.left=this, this.right=this
  }
  next(){
    if(this.right!==jb)return jEc(this.right);
    let n=this;
    for(;
    n.parent!==jb&&n.parent.left!==n;
    )n=n.parent;
    return n.parent===jb?jb:n.parent
  }
  prev(){
    if(this.left!==jb)return ogh(this.left);
    let n=this;
    for(;
    n.parent!==jb&&n.parent.right!==n;
    )n=n.parent;
    return n.parent===jb?jb:n.parent
  }
  detach(){
    this.parent=null, this.left=null, this.right=null
  }
}, (function(n){
  n[n.Black=0]="Black", n[n.Red=1]="Red"
})(cgh||(cgh={
  
})), jb=new fOo(null, 0), jb.parent=jb, jb.left=jb, jb.right=jb, jb.color=0
}
});
function YEc(n){
  if(!n||n.length===0)return!1;
  for(let e=0, t=n.length;
  e<t;
  e++){
    const i=n.charCodeAt(e);
    if(i===10)return!0;
    if(i===92){
      if(e++,e>=t)break;
      const r=n.charCodeAt(e);
      if(r===110||r===114||r===87)return!0
    }
    if(i===91&&e+5<t&&n.charCodeAt(e+1)===92){
      const r=n.charCodeAt(e+2);
      if((r===115||r===83||r===100||r===68)&&n.charCodeAt(e+3)===92){
        const s=n.charCodeAt(e+4);
        if((r===115&&s===83||r===83&&s===115||r===100&&s===68||r===68&&s===100)&&n.charCodeAt(e+5)===93)return!0
      }
    }
  }
  return!1
}
function Sft(n, e, t){
  if(!t)return new SOt(n, null);
  const i=[];
  for(let r=0, s=e.length;
  r<s;
  r++)i[r]=e[r];
  return new SOt(n, i)
}
function taA(n, e, t, i, r){
  if(i===0)return!0;
  const s=e.charCodeAt(i-1);
  if(n.get(s)!==0||s===13||s===10)return!0;
  if(r>0){
    const o=e.charCodeAt(i);
    if(n.get(o)!==0)return!0
  }
  return!1
}
function naA(n, e, t, i, r){
  if(i+r===t)return!0;
  const s=e.charCodeAt(i+r);
  if(n.get(s)!==0||s===13||s===10)return!0;
  if(r>0){
    const o=e.charCodeAt(i+r-1);
    if(n.get(o)!==0)return!0
  }
  return!1
}
function ZEc(n, e, t, i, r){
  return taA(n, e, t, i, r)&&naA(n, e, t, i, r)
}
var lgh, Nde, XEc, bOn, kft, i9e=