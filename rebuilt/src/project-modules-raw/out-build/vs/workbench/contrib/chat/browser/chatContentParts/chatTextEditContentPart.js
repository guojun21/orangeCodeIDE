// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatTextEditContentPart.js
// Offset: 32834792 (bundle byte offset)
// Size: 3117 bytes

ri(), Po(), yn(), rt(), zr(), Yr(), Js(), Yn(), Bc(), Tg(), bv(), hd(), fxa(), td(), Ht(), dr(), Er(), Wt(), bEa(), TSi(), xS(), Wq(), Xyu=Ct, ewu=xi("ICodeCompareModelService"), Dxa=class extends at{
  constructor(e, t, i, r, s, o){
    super(), this.codeCompareModelService=o, this._onDidChangeHeight=this._register(new Qe), this.onDidChangeHeight=this._onDidChangeHeight.event;
    const a=t.element;
    if(Kd(rA(a)), i.renderTextEditsAsSummary?.(e.uri))a.response.value.every(l=>l.kind==="textEditGroup")?this.domNode=Xyu(".interactive-edits-summary", void 0, a.isComplete?a.isCanceled?_(5233, null):_(5234, null):""):this.domNode=Xyu("div");
    else{
      const l=new Wc;
      let u=!1;
      this._register($i(()=>{
        u=!0,l.dispose(!0)
      })),this.comparePart=this._register(r.get()),this._register(this.comparePart.object.onDidChangeContentHeight(()=>{
        this._onDidChangeHeight.fire()
      }));
      const d={
        element:a,edit:e,diffData:(async()=>{
          const m=await this.codeCompareModelService.createModel(a,e);
          if(u){
            m.dispose();
            return
          }
          return this._register(m),{
            modified:m.object.modified.textEditorModel,original:m.object.original.textEditorModel,originalSha1:m.object.originalSha1
          }
        })()
      };
      this.comparePart.object.render(d,s,l.token),this.domNode=this.comparePart.object.element
    }
  }
  layout(e){
    this.comparePart?.object.layout(e)
  }
  hasSameContent(e){
    return e.kind==="textEditGroup"
  }
  addDisposable(e){
    this._register(e)
  }
}, Dxa=__decorate([__param(5, ewu)], Dxa), Bxa=class extends at{
  inUse(){
    return this._pool.inUse
  }
  constructor(e, t, i, r){
    super(), this._pool=this._register(new wCi(()=>r.createInstance(Sxa, e, st.ChatCompareBlock, t, i)))
  }
  get(){
    const e=this._pool.get();
    let t=!1;
    return{
      object:e,isStale:()=>t,dispose:()=>{
        e.reset(),t=!0,this._pool.release(e)
      }
    }
  }
}, Bxa=__decorate([__param(3, ln)], Bxa), Rxa=class{
  constructor(e, t, i){
    this.textModelService=e, this.modelService=t, this.chatService=i
  }
  async createModel(e, t){
    const i=await this.textModelService.createModelReference(t.uri), r=await this.textModelService.createModelReference(this.modelService.createModel(MVe(i.object.textEditorModel.createSnapshot()), {
      languageId:i.object.textEditorModel.getLanguageId(),onDidChange:In.None
    }, je.from({
      scheme:_n.vscodeChatCodeBlock,path:t.uri.path,query:Wr()
    }), !1).uri), s=new W2n($i(()=>{
      i.dispose(),r.dispose()
    }));
    let o="";
    if(t.state)o=t.state.sha1;
    else{
      const d=new vSi;
      d.canComputeSHA1(i.object.textEditorModel)&&(o=d.computeSHA1(i.object.textEditorModel),t.state={
        sha1:o,applied:0
      })
    }
    const a=this.chatService.getSession(e.sessionId), l=[];
    for(const d of a.getRequests())if(d.response){
      for(const m of d.response.response.value)if(!(m.kind!=="textEditGroup"||m.state?.applied||!Zc(m.uri,t.uri)))for(const p of m.edits){
        const g=p.map(Zbe.asEditOperation);
        l.push(g)
      }
      if(d.response===e.model)break
    }
    for(const d of l)r.object.textEditorModel.pushEditOperations(null, d, ()=>null);
    s.acquire(), setTimeout(()=>s.release(), 5e3);
    const u=()=>{
      s.release()
    };
    return{
      object:{
        originalSha1:o,original:i.object,modified:r.object
      },dispose:u,[Symbol.dispose]:u
    }
  }
}, Rxa=__decorate([__param(0, El), __param(1, Il), __param(2, ES)], Rxa), Vi(ewu, Rxa, 1)
}
}), twu, Pxa, Lxa, ruy=