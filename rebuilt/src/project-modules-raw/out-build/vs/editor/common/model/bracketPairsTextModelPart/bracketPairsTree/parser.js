// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/parser.js
// Offset: 1086130 (bundle byte offset)
// Size: 2877 bytes

cOo(), iOo(), TOt(), X5e(), PoA(), LoA(), xph=class{
  get nodesConstructed(){
    return this._itemsConstructed
  }
  get nodesReused(){
    return this._itemsFromCache
  }
  constructor(n, e, t, i){
    if(this.tokenizer=n, this.createImmutableLists=i, this._itemsConstructed=0, this._itemsFromCache=0, t&&i)throw new Error("Not supported");
    this.oldNodeReader=t?new Eph(t):void 0, this.positionMapper=new mph(e)
  }
  parseDocument(){
    this._itemsConstructed=0, this._itemsFromCache=0;
    let n=this.parseList(Ooe.getEmpty(), 0);
    return n||(n=DSe.getEmpty()), n
  }
  parseList(n, e){
    const t=[];
    for(;
    ;
    ){
      let r=this.tryReadChildFromCache(n);
      if(!r){
        const s=this.tokenizer.peek();
        if(!s||s.kind===0&&oOn(s.length)||s.kind===2&&s.bracketIds.intersects(n))break;
        r=this.parseChild(n,e+1)
      }
      r.kind===4&&r.childrenLength===0||t.push(r)
    }
    return this.oldNodeReader?DoA(t):Sph(t, this.createImmutableLists)
  }
  tryReadChildFromCache(n){
    if(this.oldNodeReader){
      const e=this.positionMapper.getDistanceToNextChange(this.tokenizer.offset);
      if(e===null||!oOn(e)){
        const t=this.oldNodeReader.readLongestNodeAt(this.positionMapper.getOffsetBeforeChange(this.tokenizer.offset),i=>e!==null&&!kOt(i.length,e)?!1:i.canBeReused(n));
        if(t)return this._itemsFromCache++,this.tokenizer.skip(t.length),t
      }
    }
  }
  parseChild(n, e){
    this._itemsConstructed++;
    const t=this.tokenizer.read();
    switch(t.kind){
      case 2:return new vph(t.bracketIds,t.length);
      case 0:return t.astNode;
      case 1:{
        if(e>300)return new IVe(t.length);
        const i=n.merge(t.bracketIds),r=this.parseList(i,e+1),s=this.tokenizer.peek();
        return s&&s.kind===2&&(s.bracketId===t.bracketId||s.bracketIds.intersects(t.bracketIds))?(this.tokenizer.read(),TEc.create(t.astNode,r,s.astNode)):TEc.create(t.astNode,r,null)
      }
      default:throw new Error("unexpected")
    }
  }
}
}
});
function lOo(n, e){
  if(n.length===0)return e;
  if(e.length===0)return n;
  const t=new Ebe(Iph(n)), i=Iph(e);
  i.push({
    modified:!1, lengthBefore:void 0, lengthAfter:void 0
  });
  let r=t.dequeue();
  function s(u){
    if(u===void 0){
      const m=t.takeWhile(p=>!0)||[];
      return r&&m.unshift(r),m
    }
    const d=[];
    for(;
    r&&!oOn(u);
    ){
      const[m,p]=r.splitAt(u);
      d.push(m),u=aOn(m.lengthAfter,u),r=p??t.dequeue()
    }
    return oOn(u)||d.push(new uOo(!1, u, u)), d
  }
  const o=[];
  function a(u, d, m){
    if(o.length>0&&hph(o[o.length-1].endOffset, u)){
      const p=o[o.length-1];
      o[o.length-1]=new TVe(p.startOffset,d,$B(p.newLength,m))
    }
    else o.push({
      startOffset:u,endOffset:d,newLength:m
    })
  }
  let l=vW;
  for(const u of i){
    const d=s(u.lengthBefore);
    if(u.modified){
      const m=xoA(d,g=>g.lengthBefore),p=$B(l,m);
      a(l,p,u.lengthAfter),l=p
    }
    else for(const m of d){
      const p=l;
      l=$B(l,m.lengthBefore),m.modified&&a(p,l,m.lengthAfter)
    }
  }
  return o
}
function Iph(n){
  const e=[];
  let t=vW;
  for(const i of n){
    const r=aOn(t, i.startOffset);
    oOn(r)||e.push(new uOo(!1, r, r));
    const s=aOn(i.startOffset, i.endOffset);
    e.push(new uOo(!0, s, i.newLength)), t=i.endOffset
  }
  return e
}
var uOo, Dph=