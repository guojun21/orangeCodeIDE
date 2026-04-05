// Module: out-build/vs/workbench/contrib/comments/browser/commentsModel.js
// Offset: 33158597 (bundle byte offset)
// Size: 2556 bytes

Vs(), Yn(), Ht(), Rwu(), rt(), tg(), Cbn=class Azb extends at{
  get resourceCommentThreads(){
    return this._resourceCommentThreads
  }
  constructor(){
    super(), this._resourceCommentThreads=[], this.commentThreadsMap=new Map
  }
  updateResourceCommentThreads(){
    const e=this.commentThreadsMap.size>1;
    this._resourceCommentThreads=[...this.commentThreadsMap.values()].map(t=>t.resourceWithCommentThreads.map(i=>(i.ownerLabel=e?t.ownerLabel:void 0, i)).flat()).flat()
  }
  setCommentThreads(e, t, i, r){
    this.commentThreadsMap.set(e, {
      ownerLabel:i,resourceWithCommentThreads:this.groupByResource(e,t,r)
    }), this.updateResourceCommentThreads()
  }
  deleteCommentsByOwner(e){
    if(e){
      const t=this.commentThreadsMap.get(e);
      this.commentThreadsMap.set(e,{
        ownerLabel:t?.ownerLabel,resourceWithCommentThreads:[]
      })
    }
    else this.commentThreadsMap.clear();
    this.updateResourceCommentThreads()
  }
  updateCommentThreads(e){
    const{
      uniqueOwner:t,owner:i,ownerLabel:r,removed:s,changed:o,added:a
    }
    =e, l=this.commentThreadsMap.get(t)?.resourceWithCommentThreads||[];
    return s.forEach(u=>{
      const d=l.findIndex(g=>g.id===u.resource),m=d>=0?l[d]:void 0,p=m?.commentThreads.findIndex(g=>g.threadId===u.threadId)??0;
      p>=0&&m?.commentThreads.splice(p,1),m?.commentThreads.length===0&&l.splice(d,1)
    }), o.forEach(u=>{
      const d=l.findIndex(g=>g.id===u.resource),m=d>=0?l[d]:void 0;
      if(!m)return;
      const p=m.commentThreads.findIndex(g=>g.threadId===u.threadId);
      p>=0?m.commentThreads[p]=Qie.createCommentNode(t,i,je.parse(m.id),u):u.comments&&u.comments.length&&m.commentThreads.push(Qie.createCommentNode(t,i,je.parse(m.id),u))
    }), a.forEach(u=>{
      const d=l.filter(m=>m.resource.toString()===u.resource);
      if(d.length){
        const m=d[0];
        u.comments&&u.comments.length&&m.commentThreads.push(Qie.createCommentNode(t,i,m.resource,u))
      }
      else l.push(new Qie(t,i,je.parse(u.resource),[u]))
    }), this.commentThreadsMap.set(t, {
      ownerLabel:r,resourceWithCommentThreads:l
    }), this.updateResourceCommentThreads(), s.length>0||o.length>0||a.length>0
  }
  hasCommentThreads(){
    return!!this._resourceCommentThreads.length&&this._resourceCommentThreads.some(e=>e.commentThreads.length>0&&e.commentThreads.some(t=>Pwu(t.thread)))
  }
  getMessage(){
    return this._resourceCommentThreads.length?"":_(5968, null)
  }
  groupByResource(e, t, i){
    const r=[], s=new Map;
    for(const o of yte(i, Azb._compareURIs))s.set(o[0].resource, new Qie(e, t, je.parse(o[0].resource), o));
    return s.forEach((o, a, l)=>{
      r.push(o)
    }), r
  }
  static _compareURIs(e, t){
    const i=e.resource.toString(), r=t.resource.toString();
    return i<r?-1:i>r?1:0
  }
}
}
}), QV, dTa, hTa, cwe=