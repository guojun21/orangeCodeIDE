// Module: out-build/vs/workbench/contrib/comments/common/commentModel.js
// Offset: 33157133 (bundle byte offset)
// Size: 1464 bytes

lpe=class{
  constructor(n, e, t, i, r){
    this.uniqueOwner=n, this.owner=e, this.resource=t, this.comment=i, this.thread=r, this.isRoot=!1, this.replies=[], this.threadId=r.threadId, this.range=r.range, this.threadState=r.state, this.threadRelevance=r.applicability, this.contextValue=r.contextValue, this.controllerHandle=r.controllerHandle, this.threadHandle=r.commentThreadHandle
  }
  hasReply(){
    return this.replies&&this.replies.length!==0
  }
  get lastUpdatedAt(){
    if(this._lastUpdatedAt===void 0){
      let n=this.comment.timestamp||"";
      if(this.replies.length){
        const t=this.replies[this.replies.length-1].lastUpdatedAt;
        t>n&&(n=t)
      }
      this._lastUpdatedAt=n
    }
    return this._lastUpdatedAt
  }
}, Qie=class vzb{
  constructor(e, t, i, r){
    this.uniqueOwner=e, this.owner=t, this.id=i.toString(), this.resource=i, this.commentThreads=r.filter(s=>s.comments&&s.comments.length).map(s=>vzb.createCommentNode(e, t, i, s))
  }
  static createCommentNode(e, t, i, r){
    const{
      comments:s
    }
    =r, o=s.map(a=>new lpe(e, t, i, a, r));
    return o.length>1&&(o[0].replies=o.slice(1, o.length)), o[0].isRoot=!0, o[0]
  }
  get lastUpdatedAt(){
    if(this._lastUpdatedAt===void 0){
      let e="";
      if(!this.commentThreads.length)return e;
      for(const t of this.commentThreads){
        const i=t.lastUpdatedAt;
        i&&i>e&&(e=i)
      }
      this._lastUpdatedAt=e
    }
    return this._lastUpdatedAt
  }
}
}
});
function Pwu(n){
  return!!n.comments&&!!n.comments.length&&n.comments.some(e=>bT(e.body)?e.body.value.length>0:e.body.length>0)
}
var Cbn, uTa=