// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/nodeReader.js
// Offset: 1084904 (bundle byte offset)
// Size: 1226 bytes

X5e(), Eph=class{
  constructor(n){
    this.lastOffset=vW, this.nextNodes=[n], this.offsets=[vW], this.idxs=[]
  }
  readLongestNodeAt(n, e){
    if(kOt(n, this.lastOffset))throw new Error("Invalid offset");
    for(this.lastOffset=n;
    ;
    ){
      const t=uOn(this.nextNodes);
      if(!t)return;
      const i=uOn(this.offsets);
      if(kOt(n,i))return;
      if(kOt(i,n))if($B(i,t.length)<=n)this.nextNodeAfterCurrent();
      else{
        const r=NEc(t);
        r!==-1?(this.nextNodes.push(t.getChild(r)),this.offsets.push(i),this.idxs.push(r)):this.nextNodeAfterCurrent()
      }
      else{
        if(e(t))return this.nextNodeAfterCurrent(),t;
        {
          const r=NEc(t);
          if(r===-1){
            this.nextNodeAfterCurrent();
            return
          }
          else this.nextNodes.push(t.getChild(r)),this.offsets.push(i),this.idxs.push(r)
        }
      }
    }
  }
  nextNodeAfterCurrent(){
    for(;
    ;
    ){
      const n=uOn(this.offsets),e=uOn(this.nextNodes);
      if(this.nextNodes.pop(),this.offsets.pop(),this.idxs.length===0)break;
      const t=uOn(this.nextNodes),i=NEc(t,this.idxs[this.idxs.length-1]);
      if(i!==-1){
        this.nextNodes.push(t.getChild(i)),this.offsets.push($B(n,e.length)),this.idxs[this.idxs.length-1]=i;
        break
      }
      else this.idxs.pop()
    }
  }
}
}
});
function MEc(n, e, t, i){
  return new xph(n, e, t, i).parseDocument()
}
var xph, Tph=