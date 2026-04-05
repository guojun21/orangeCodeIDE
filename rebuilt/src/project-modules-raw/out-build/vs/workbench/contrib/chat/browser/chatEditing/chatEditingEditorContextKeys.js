// Module: out-build/vs/workbench/contrib/chat/browser/chatEditing/chatEditingEditorContextKeys.js
// Offset: 31000641 (bundle byte offset)
// Size: 2777 bytes

yn(), rt(), Uc(), Ht(), si(), Wt(), Nu(), od(), yit(), Hq(), xS(), qCa=new Sn("chatEdits.isGlobalEditingSession", void 0, _(5309, null)), M_i=new Sn("chatEdits.hasEditorModifications", void 0, _(5310, null)), tgu=new Sn("chatEdits.isReviewModeEnabled", !0, _(5311, null)), Lgn=new Sn("chatEdits.isRequestInProgress", !1, _(5312, null)), F_i=new Sn("chatEdits.requestCount", 0, _(5313, null)), O_i=class{
  static{
    this.ID="chat.edits.editorContextKeys"
  }
  constructor(e, t){
    this._store=new Ut;
    const i=this._store.add(new mp), r=tp(this, In.any(t.onDidAddGroup, t.onDidRemoveGroup), ()=>t.groups);
    this._store.add(Oc(s=>{
      const o=new Set(i.keys());
      for(const a of r.read(s))o.delete(a),!i.has(a)&&i.set(a,e.createInstance(HCa,a));
      for(const a of o)i.deleteAndDispose(a)
    }))
  }
  dispose(){
    this._store.dispose()
  }
}, O_i=__decorate([__param(0, ln), __param(1, da)], O_i), HCa=class{
  constructor(e, t, i, r){
    this._store=new Ut, this._ctxIsGlobalEditingSession=qCa.bindTo(e.scopedContextKeyService), this._ctxHasEditorModification=M_i.bindTo(e.scopedContextKeyService), this._ctxHasRequestInProgress=Lgn.bindTo(e.scopedContextKeyService), this._ctxReviewModeEnabled=tgu.bindTo(e.scopedContextKeyService), this._ctxRequestCount=F_i.bindTo(e.scopedContextKeyService);
    const s=tp(this, e.onDidModelChange, ()=>e.activeEditor);
    this._store.add(Oc(o=>{
      const a=s.read(o),l=gp.getOriginalUri(a,{
        supportSideBySide:op.PRIMARY
      });
      if(!l){
        this._reset();
        return
      }
      const u=new U_i(l,i,t).value.read(o);
      if(!u){
        this._reset();
        return
      }
      const{
        session:d,entry:m,isInlineChat:p
      }
      =u,g=r.getSession(d.chatSessionId),f=g?tp(this,g.onDidChange,()=>g.requestInProgress):F0(!1);
      this._ctxHasEditorModification.set(p||m?.state.read(o)===0),this._ctxIsGlobalEditingSession.set(d.isGlobalEditingSession),this._ctxReviewModeEnabled.set(m?m.reviewMode.read(o):!1),this._ctxHasRequestInProgress.set(!!m?.isCurrentlyBeingModifiedBy.read(o)||p&&f.read(o));
      const A=g?tp(this,g.onDidChange,()=>g.getRequests().length):F0(0);
      this._ctxRequestCount.set(A.read(o))
    }))
  }
  _reset(){
    this._ctxIsGlobalEditingSession.reset(), this._ctxHasEditorModification.reset(), this._ctxHasRequestInProgress.reset(), this._ctxReviewModeEnabled.reset(), this._ctxRequestCount.reset()
  }
  dispose(){
    this._store.dispose(), this._reset()
  }
}, HCa=__decorate([__param(1, YEe), __param(2, kV), __param(3, ES)], HCa), U_i=class{
  constructor(e, t, i){
    const r=tp(this, i.onDidChangeSessions, ()=>i.getSession2(e)), s=t.editingSessionsObs.map((o, a)=>{
      for(const l of o){
        const u=l.readEntry(e,a);
        if(u)return{
          session:l,entry:u,isInlineChat:!1
        }
      }
    });
    this.value=Ro(o=>{
      const a=r.read(o);
      return a?{
        session:a.editingSession,entry:a.editingSession.readEntry(e,o),isInlineChat:!0
      }
      :s.read(o)
    })
  }
}, U_i=__decorate([__param(1, kV), __param(2, YEe)], U_i)
}
}), ngu, kTf, igu=