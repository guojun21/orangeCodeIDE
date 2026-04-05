// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/combineTextEditInfos.js
// Offset: 1089007 (bundle byte offset)
// Size: 2893 bytes

Vs(), iOo(), X5e(), uOo=class lNi{
  constructor(e, t, i){
    this.modified=e, this.lengthBefore=t, this.lengthAfter=i
  }
  splitAt(e){
    const t=aOn(e, this.lengthAfter);
    return hph(t, vW)?[this, void 0]:this.modified?[new lNi(this.modified, this.lengthBefore, e), new lNi(this.modified, vW, t)]:[new lNi(this.modified, e, e), new lNi(this.modified, t, t)]
  }
  toString(){
    return`${this.modified?"M":"U"}:${Lde(this.lengthBefore)} -> ${Lde(this.lengthAfter)}`
  }
}
}
});
function Bph(n, e, t, i){
  if(n.kind===4||n.kind===2){
    const r=[];
    for(const s of n.children)t=$B(e, s.length), r.push({
      nodeOffsetStart:e,nodeOffsetEnd:t
    }), e=t;
    for(let s=r.length-1;
    s>=0;
    s--){
      const{
        nodeOffsetStart:o,nodeOffsetEnd:a
      }
      =r[s];
      if(kOt(o,i)){
        const l=Bph(n.children[s],o,a,i);
        if(l)return l
      }
    }
    return null
  }
  else{
    if(n.kind===3)return null;
    if(n.kind===1){
      const r=wft(e,t);
      return{
        bracketInfo:n.bracketInfo,range:r
      }
    }
  }
  return null
}
function Rph(n, e, t, i){
  if(n.kind===4||n.kind===2){
    for(const r of n.children){
      if(t=$B(e,r.length),kOt(i,t)){
        const s=Rph(r,e,t,i);
        if(s)return s
      }
      e=t
    }
    return null
  }
  else{
    if(n.kind===3)return null;
    if(n.kind===1){
      const r=wft(e,t);
      return{
        bracketInfo:n.bracketInfo,range:r
      }
    }
  }
  return null
}
function FEc(n, e, t, i, r, s, o, a, l, u, d=!1){
  if(o>200)return!0;
  e:for(;
  ;
  )switch(n.kind){
    case 4:{
      const m=n.childrenLength;
      for(let p=0;
      p<m;
      p++){
        const g=n.getChild(p);
        if(g){
          if(t=$B(e,g.length),EOt(e,r)&&cOn(t,i)){
            if(cOn(t,r)){
              n=g;
              continue e
            }
            if(!FEc(g,e,t,i,r,s,o,0,l,u))return!1
          }
          e=t
        }
      }
      return!0
    }
    case 2:{
      const m=!u||!n.closingBracket||n.closingBracket.bracketInfo.closesColorized(n.openingBracket.bracketInfo);
      let p=0;
      if(l){
        let f=l.get(n.openingBracket.text);
        f===void 0&&(f=0),p=f,m&&(f++,l.set(n.openingBracket.text,f))
      }
      const g=n.childrenLength;
      for(let f=0;
      f<g;
      f++){
        const A=n.getChild(f);
        if(A){
          if(t=$B(e,A.length),EOt(e,r)&&cOn(t,i)){
            if(cOn(t,r)&&A.kind!==1){
              n=A,m?(o++,a=p+1):a=p;
              continue e
            }
            if((m||A.kind!==1||!n.closingBracket)&&!FEc(A,e,t,i,r,s,m?o+1:o,m?p+1:p,l,u,!n.closingBracket))return!1
          }
          e=t
        }
      }
      return l?.set(n.openingBracket.text,p),!0
    }
    case 3:{
      const m=wft(e,t);
      return s(new kEc(m,o-1,0,!0))
    }
    case 1:{
      const m=wft(e,t);
      return s(new kEc(m,o-1,a-1,d))
    }
    case 0:return!0
  }
}
function OEc(n, e, t, i, r, s, o, a){
  if(o>200)return!0;
  let l=!0;
  if(n.kind===2){
    let u=0;
    if(a){
      let p=a.get(n.openingBracket.text);
      p===void 0&&(p=0),u=p,p++,a.set(n.openingBracket.text,p)
    }
    const d=$B(e, n.openingBracket.length);
    let m=-1;
    if(s.includeMinIndentation&&(m=n.computeMinIndentation(e, s.textModel)), l=s.push(new dph(wft(e, t), wft(e, d), n.closingBracket?wft($B(d, n.child?.length||vW), t):void 0, o, u, n, m)), e=d, l&&n.child){
      const p=n.child;
      if(t=$B(e,p.length),EOt(e,r)&&cOn(t,i)&&(l=OEc(p,e,t,i,r,s,o+1,a),!l))return!1
    }
    a?.set(n.openingBracket.text, u)
  }
  else{
    let u=e;
    for(const d of n.children){
      const m=u;
      if(u=$B(u,d.length),EOt(m,r)&&EOt(i,u)&&(l=OEc(d,m,u,i,r,s,o,a),!l))return!1
    }
  }
  return l
}
var Pph, Lph, NoA=