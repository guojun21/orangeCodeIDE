// Module: out-build/vs/workbench/contrib/comments/browser/commentThreadBody.js
// Offset: 33208633 (bundle byte offset)
// Size: 5746 bytes

ri(), Ht(), rt(), Tg(), yn(), cwe(), Tb(), Vuy(), oN(), Fc(), Ku(), vTa=class extends at{
  get length(){
    return this._commentThread.comments?this._commentThread.comments.length:0
  }
  get activeComment(){
    return this._commentElements.filter(e=>e.isEditing)[0]
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p){
    super(), this._parentEditor=e, this.owner=t, this.parentResourceUri=i, this.container=r, this._options=s, this._commentThread=o, this._pendingEdits=a, this._scopedInstatiationService=l, this._parentCommentThreadWidget=u, this.commentService=d, this.openerService=m, this.languageService=p, this._commentElements=[], this._focusedComment=void 0, this._onDidResize=new Qe, this.onDidResize=this._onDidResize.event, this._commentDisposable=new mp, this._register(ei(r, ir.FOCUS_IN, g=>{
      this.commentService.setActiveEditingCommentThread(this._commentThread)
    })), this._markdownRenderer=new sL(this._options, this.languageService, this.openerService)
  }
  focus(e){
    if(e!==void 0){
      const t=this._commentElements.find(i=>i.comment.uniqueIdInThread===e);
      if(t){
        t.focus();
        return
      }
    }
    this._commentsElement.focus()
  }
  hasCommentsInEditMode(){
    return this._commentElements.some(e=>e.isEditing)
  }
  ensureFocusIntoNewEditingComment(){
    this._commentElements.length===1&&this._commentElements[0].isEditing&&this._commentElements[0].setFocus(!0)
  }
  async display(){
    if(this._commentsElement=Rt(this.container, Ct("div.comments-container")), this._commentsElement.setAttribute("role", "presentation"), this._commentsElement.tabIndex=0, this._updateAriaLabel(), this._register(ei(this._commentsElement, ir.KEY_DOWN, e=>{
      const t=new vh(e);
      if((t.equals(16)||t.equals(18))&&(!this._focusedComment||!this._commentElements[this._focusedComment].isEditing)){
        const i=r=>{
          if(this._focusedComment===void 0&&r>=0)return 0;
          if(this._focusedComment===void 0&&r<0)return this._commentElements.length-1;
          const s=this._focusedComment+r;
          return Math.min(Math.max(0,s),this._commentElements.length-1)
        };
        this._setFocusedComment(t.equals(16)?i(-1):i(1))
      }
    })), this._commentDisposable.clearAndDisposeAll(), this._commentElements=[], this._commentThread.comments)for(const e of this._commentThread.comments){
      const t=this.createNewCommentNode(e);
      this._commentElements.push(t),this._commentsElement.appendChild(t.domNode),e.mode===NOt.Editing&&await t.switchToEditMode()
    }
    this._resizeObserver=new MutationObserver(this._refresh.bind(this)), this._resizeObserver.observe(this.container, {
      attributes:!0,childList:!0,characterData:!0,subtree:!0
    })
  }
  _refresh(){
    const e=DY(this.container);
    this._onDidResize.fire(e)
  }
  getDimensions(){
    return DY(this.container)
  }
  layout(e){
    this._commentElements.forEach(t=>{
      t.layout(e)
    })
  }
  getPendingEdits(){
    const e={
      
    };
    return this._commentElements.forEach(t=>{
      if(t.isEditing){
        const i=t.getPendingEdit();
        i&&(e[t.comment.uniqueIdInThread]=i)
      }
    }), e
  }
  getCommentCoords(e){
    const t=this._commentElements.filter(i=>i.comment.uniqueIdInThread===e);
    if(t&&t.length){
      const i=qS(this._commentElements[0].domNode),r=qS(t[0].domNode);
      return{
        thread:i,comment:r
      }
    }
  }
  async updateCommentThread(e, t){
    const i=this._commentElements.length, r=e.comments?e.comments.length:0, s=[], o=[];
    for(let m=0;
    m<i;
    m++){
      const p=this._commentElements[m].comment,g=e.comments?e.comments.filter(f=>f.uniqueIdInThread===p.uniqueIdInThread):[];
      g.length?this._commentElements[m].update(g[0]):(o.push(m),s.push(this._commentElements[m]))
    }
    for(let m=s.length-1;
    m>=0;
    m--){
      const p=s[m];
      this._commentDisposable.deleteAndDispose(p),this._commentElements.splice(o[m],1),p.domNode.remove()
    }
    let a=null;
    const l=[], u=[], d=[];
    for(let m=r-1;
    m>=0;
    m--){
      const p=e.comments[m],g=this._commentElements.filter(f=>f.comment.uniqueIdInThread===p.uniqueIdInThread);
      if(g.length)a=g[0].domNode,l.unshift(g[0]);
      else{
        const f=this.createNewCommentNode(p);
        l.unshift(f),a?(this._commentsElement.insertBefore(f.domNode,a),a=f.domNode):(this._commentsElement.appendChild(f.domNode),a=f.domNode),p.mode===NOt.Editing&&(d.push(f.switchToEditMode()),u.push(f))
      }
    }
    if(this._commentThread=e, this._commentElements=l, await Promise.all(d), u.length){
      const m=this._commentElements.indexOf(u[u.length-1]);
      this._focusedComment=m
    }
    this._updateAriaLabel(), t||this._setFocusedComment(this._focusedComment)
  }
  _updateAriaLabel(){
    this._commentThread.isDocumentCommentThread()?this._commentThread.range?this._commentsElement.ariaLabel=_(6009, null, this._commentThread.comments?.length, this._commentThread.range.startLineNumber, this._commentThread.range.endLineNumber, this._commentThread.label):this._commentsElement.ariaLabel=_(6010, null, this._commentThread.comments?.length, this._commentThread.label):this._commentsElement.ariaLabel=_(6011, null, this._commentThread.comments?.length, this._commentThread.label)
  }
  _setFocusedComment(e){
    this._focusedComment!==void 0&&this._commentElements[this._focusedComment]?.setFocus(!1), this._commentElements.length===0||e===void 0?this._focusedComment=void 0:(this._focusedComment=Math.min(e, this._commentElements.length-1), this._commentElements[this._focusedComment].setFocus(!0))
  }
  createNewCommentNode(e){
    const t=this._scopedInstatiationService.createInstance(bTa, this._parentEditor, this._commentThread, e, this._pendingEdits?this._pendingEdits[e.uniqueIdInThread]:void 0, this.owner, this.parentResourceUri, this._parentCommentThreadWidget, this._markdownRenderer), i=new Ut;
    return i.add(t.onDidClick(r=>this._setFocusedComment(this._commentElements.findIndex(s=>s.comment.uniqueIdInThread===r.comment.uniqueIdInThread)))), i.add(t), this._commentDisposable.set(t, i), t
  }
  dispose(){
    super.dispose(), this._resizeObserver&&(this._resizeObserver.disconnect(), this._resizeObserver=null), this._commentDisposable.dispose()
  }
}, vTa=__decorate([__param(9, QV), __param(10, Ja), __param(11, Jl)], vTa)
}
});
function Jwu(n){
  return!!n&&n.length>0
}
var f8f, Gwu, b8f, ATa, Yuy=