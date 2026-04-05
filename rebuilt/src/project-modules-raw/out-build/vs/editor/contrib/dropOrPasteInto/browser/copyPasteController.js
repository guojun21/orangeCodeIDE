// Module: out-build/vs/editor/contrib/dropOrPasteInto/browser/copyPasteController.js
// Offset: 2458585 (bundle byte offset)
// Size: 10940 bytes

ri(), Vs(), vr(), Po(), ZSe(), _s(), QY(), rt(), hF(), _r(), Bc(), Js(), Ht(), Kf(), S9(), hs(), Ei(), si(), Wt(), Xg(), Kl(), VOn(), wBc(), YI(), ts(), Tg(), Cm(), SBc(), EBc(), dve(), TBc(), xRe(), ZSh(), Rde(), OBc="editor.changePasteType", r9o="editor.pasteAs.preferences", s9o=new Sn("pasteWidgetVisible", !1, _(1055, null)), o9o="application/vnd.code.copymetadata", ZH=class extends at{
  static{
    Yde=this
  }
  static{
    this.ID="editor.contrib.copyPasteActionController"
  }
  static get(e){
    return e.getContribution(Yde.ID)
  }
  static setConfigureDefaultAction(e){
    Yde._configureDefaultAction=e
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(), this._bulkEditService=i, this._clipboardService=r, this._commandService=s, this._configService=o, this._languageFeaturesService=a, this._quickInputService=l, this._progressService=u, this._tooltipService=d, this._uiOverlayService=m, this._editor=e;
    const p=e.getContainerDomNode();
    this._register(ei(p, "copy", g=>this.handleCopy(g))), this._register(ei(p, "cut", g=>this.handleCopy(g))), this._register(ei(p, "paste", g=>this.handlePaste(g), !0)), this._pasteProgressManager=this._register(new K3n("pasteIntoEditor", e, t)), this._postPasteWidgetManager=this._register(t.createInstance(Z3n, "pasteIntoEditor", e, s9o, {
      id:OBc,label:_(1056,null)
    }, ()=>Yde._configureDefaultAction?[Yde._configureDefaultAction]:[]))
  }
  changePasteType(){
    this._postPasteWidgetManager.tryShowSelector()
  }
  pasteAs(e){
    this._editor.focus();
    try{
      this._pasteAsActionContext={
        preferred:e
      },this._commandService.executeCommand("editor.action.clipboardPasteAction")
    }
    finally{
      this._pasteAsActionContext=void 0
    }
  }
  clearWidgets(){
    this._postPasteWidgetManager.clear()
  }
  isPasteAsEnabled(){
    return this._editor.getOption(89).enabled
  }
  async finishedPaste(){
    await this._currentPasteOperation
  }
  handleCopy(e){
    if(this._editor.isChatCodeblock===!0?this._tooltipService.registerEvent("chat.copy.codeblock.manual"):this._editor.isSimpleWidget===!1&&this._tooltipService.registerEvent("editor.copy.non_vim_mode"), !this._editor.hasTextFocus()||(this._clipboardService.clearInternalState?.(), !e.clipboardData))return;
    const t=this._editor.getModel(), i=this._editor.getSelections();
    if(!t||!i?.length)return;
    const r=this._editor.getOption(38);
    let s=i;
    const o=i.length===1&&i[0].isEmpty();
    if(o){
      if(!r)return;
      s=[new Zt(s[0].startLineNumber,1,s[0].startLineNumber,1+t.getLineLength(s[0].startLineNumber))]
    }
    const a=this._editor._getViewModel()?.getPlainTextToCopy(i, r, Sc), l=Array.isArray(a)?a:null;
    if(this._uiOverlayService.lastCopyData={
      text:Array.isArray(a)?a.join(`
`):a??"",range:{
        selectionStartLineNumber:s[0].startLineNumber,selectionStartColumn:s[0].startColumn,positionLineNumber:s[0].endLineNumber,positionColumn:s[0].endColumn
      },languageId:t?.getLanguageIdAtPosition(s[0].startLineNumber,s[0].startColumn)??"",uri:t.uri
    }, !this.isPasteAsEnabled())return;
    const u={
      multicursorText:l,pasteOnNewLine:o,mode:null
    }, d=this._languageFeaturesService.documentPasteEditProvider.ordered(t).filter(A=>!!A.prepareDocumentPaste);
    if(!d.length){
      this.setCopyMetadata(e.clipboardData,{
        defaultPastePayload:u
      });
      return
    }
    const m=DSh(e.clipboardData), p=d.flatMap(A=>A.copyMimeTypes??[]), g=Wr();
    this.setCopyMetadata(e.clipboardData, {
      id:g,providerCopyMimeTypes:p,defaultPastePayload:u
    });
    const f=d.map(A=>({
      providerMimeTypes:A.copyMimeTypes,operation:dw(w=>A.prepareDocumentPaste(t,s,m,w).catch(C=>{
        console.error(C)
      }))
    }));
    Yde._currentCopyOperation?.operations.forEach(A=>A.operation.cancel()), Yde._currentCopyOperation={
      handle:g,operations:f
    }
  }
  async handlePaste(e){
    if(!e.clipboardData||!this._editor.hasTextFocus())return;
    C3.get(this._editor)?.closeMessage(), this._currentPasteOperation?.cancel(), this._currentPasteOperation=void 0;
    const t=this._editor.getModel(), i=this._editor.getSelections();
    if(!i?.length||!t||this._editor.getOption(96)||!this.isPasteAsEnabled()&&!this._pasteAsActionContext)return;
    const r=this.fetchCopyMetadata(e), s=V5o(e.clipboardData);
    s.delete(o9o);
    const o=Array.from(e.clipboardData.files).map(u=>u.type), a=[...e.clipboardData.types, ...o, ...r?.providerCopyMimeTypes??[], NA.uriList], l=this._languageFeaturesService.documentPasteEditProvider.ordered(t).filter(u=>{
      const d=this._pasteAsActionContext?.preferred;
      return d&&!this.providerMatchesPreference(u,d)?!1:u.pasteMimeTypes?.some(m=>gSh(m,a))
    });
    if(!l.length){
      this._pasteAsActionContext?.preferred&&(this.showPasteAsNoEditMessage(i,this._pasteAsActionContext.preferred),e.preventDefault(),e.stopImmediatePropagation());
      return
    }
    e.preventDefault(), e.stopImmediatePropagation(), !this._editor.isSimpleWidget&&!this._editor.isChatCodeblock&&this._tooltipService.registerEvent("editor.paste"), this._pasteAsActionContext?this.showPasteAsPick(this._pasteAsActionContext.preferred, l, i, s, r):this.doPasteInline(l, i, s, r, e)
  }
  showPasteAsNoEditMessage(e, t){
    const i="only"in t?t.only.value:"preferences"in t?t.preferences.length?t.preferences.map(r=>r.value).join(", "):_(1057, null):t.providerId;
    C3.get(this._editor)?.showMessage(_(1058, null, i), e[0].getStartPosition())
  }
  doPasteInline(e, t, i, r, s){
    const o=this._editor;
    if(!o.hasModel())return;
    const a=new ERe(o, 3, void 0), l=dw(async u=>{
      const d=this._editor;
      if(!d.hasModel())return;
      const m=d.getModel(),p=new Ut,g=p.add(new Wc(u));
      p.add(a.token.onCancellationRequested(()=>g.cancel()));
      const f=g.token;
      try{
        if(await this.mergeInDataFromCopy(e,i,r,f),f.isCancellationRequested)return;
        const A=e.filter(x=>this.isSupportedPasteProvider(x,i));
        if(!A.length||A.length===1&&A[0]instanceof K3t)return this.applyDefaultPasteHandler(i,r,f,s);
        const w={
          triggerKind:vOn.Automatic
        },C=await this.getPasteEdits(A,i,m,t,w,f);
        if(p.add(C),f.isCancellationRequested)return;
        if(C.edits.length===1&&C.edits[0].provider instanceof K3t)return this.applyDefaultPasteHandler(i,r,f,s);
        if(C.edits.length){
          const x=d.getOption(89).showPasteSelector==="afterPaste";
          return this._postPasteWidgetManager.applyEditAndShowIfNeeded(t,{
            activeEditIndex:this.getInitialActiveEditIndex(m,C.edits),allEdits:C.edits
          },x,async(I,B)=>{
            if(!I.provider.resolveDocumentPasteEdit)return I;
            const R=I.provider.resolveDocumentPasteEdit(I,B),N=new wy,M=await this._pasteProgressManager.showWhile(t[0].getEndPosition(),_(1059,null,I.title),WP(Promise.race([N.p,R]),B),{
              cancel:()=>N.cancel()
            },0);
            return M&&(I.insertText=M.insertText,I.additionalEdit=M.additionalEdit),I
          },f)
        }
        await this.applyDefaultPasteHandler(i,r,f,s)
      }
      finally{
        p.dispose(),this._currentPasteOperation===l&&(this._currentPasteOperation=void 0)
      }
    });
    this._pasteProgressManager.showWhile(t[0].getEndPosition(), _(1060, null), l, {
      cancel:async()=>{
        try{
          if(l.cancel(),a.token.isCancellationRequested)return;
          await this.applyDefaultPasteHandler(i,r,a.token,s)
        }
        finally{
          a.dispose()
        }
      }
    }).then(()=>{
      a.dispose()
    }), this._currentPasteOperation=l
  }
  showPasteAsPick(e, t, i, r, s){
    const o=dw(async a=>{
      const l=this._editor;
      if(!l.hasModel())return;
      const u=l.getModel(),d=new Ut,m=d.add(new ERe(l,3,void 0,a));
      try{
        if(await this.mergeInDataFromCopy(t,r,s,m.token),m.token.isCancellationRequested)return;
        let p=t.filter(C=>this.isSupportedPasteProvider(C,r,e));
        e&&(p=p.filter(C=>this.providerMatchesPreference(C,e)));
        const g={
          triggerKind:vOn.PasteAs,only:e&&"only"in e?e.only:void 0
        };
        let f=d.add(await this.getPasteEdits(p,r,u,i,g,m.token));
        if(m.token.isCancellationRequested)return;
        if(e&&(f={
          edits:f.edits.filter(C=>"only"in e?e.only.contains(C.kind):"preferences"in e?e.preferences.some(x=>x.contains(C.kind)):e.providerId===C.provider.id),dispose:f.dispose
        }),!f.edits.length){
          e&&this.showPasteAsNoEditMessage(i,e);
          return
        }
        let A;
        if(e)A=f.edits.at(0);
        else{
          const C={
            id:"editor.pasteAs.default",label:_(1061,null),edit:void 0
          },x=await this._quickInputService.pick([...f.edits.map(I=>({
            label:I.title,description:I.kind?.value,edit:I
          })),...Yde._configureDefaultAction?[{
            type:"separator"
          },{
            label:Yde._configureDefaultAction.label,edit:void 0
          }
          ]:[]],{
            placeHolder:_(1062,null)
          });
          if(x===C){
            Yde._configureDefaultAction?.run();
            return
          }
          A=x?.edit
        }
        if(!A)return;
        const w=OSh(u.uri,i,A);
        await this._bulkEditService.apply(w,{
          editor:this._editor
        })
      }
      finally{
        d.dispose(),this._currentPasteOperation===o&&(this._currentPasteOperation=void 0)
      }
    });
    this._progressService.withProgress({
      location:10,title:_(1063,null)
    }, ()=>o)
  }
  setCopyMetadata(e, t){
    e.setData(o9o, JSON.stringify(t))
  }
  fetchCopyMetadata(e){
    if(!e.clipboardData)return;
    const t=e.clipboardData.getData(o9o);
    if(t)try{
      return JSON.parse(t)
    }
    catch{
      return
    }
    const[i, r]=i3t.getTextData(e.clipboardData);
    if(r)return{
      defaultPastePayload:{
        mode:r.mode,multicursorText:r.multicursorText??null,pasteOnNewLine:!!r.isFromEmptySelection
      }
    }
  }
  async mergeInDataFromCopy(e, t, i, r){
    if(i?.id&&Yde._currentCopyOperation?.handle===i.id){
      const s=Yde._currentCopyOperation.operations.filter(a=>e.some(l=>l.pasteMimeTypes.some(u=>gSh(u,a.providerMimeTypes)))).map(a=>a.operation),o=await Promise.all(s);
      if(r.isCancellationRequested)return;
      for(const a of o.reverse())if(a)for(const[l,u]of a)t.replace(l,u)
    }
    if(!t.has(NA.uriList)){
      const s=await this._clipboardService.readResources();
      if(r.isCancellationRequested)return;
      s.length&&t.append(NA.uriList,W3t(YSe.create(s)))
    }
  }
  async getPasteEdits(e, t, i, r, s, o){
    const a=new Ut, l=await WP(Promise.all(e.map(async d=>{
      try{
        const m=await d.provideDocumentPasteEdits?.(i,r,t,s,o);
        return m&&a.add(m),m?.edits?.map(p=>({
          ...p,provider:d
        }))
      }
      catch(m){
        bf(m)||console.error(m);
        return
      }
    })), o), u=lh(l??[]).flat().filter(d=>!s.only||s.only.contains(d.kind));
    return{
      edits:USh(u),dispose:()=>a.dispose()
    }
  }
  async applyDefaultPasteHandler(e, t, i, r){
    const o=await(e.get(NA.text)??e.get("text"))?.asString()??"";
    if(i.isCancellationRequested)return;
    const a={
      clipboardEvent:r,text:o,pasteOnNewLine:t?.defaultPastePayload.pasteOnNewLine??!1,multicursorText:t?.defaultPastePayload.multicursorText??null,mode:null
    };
    this._editor.trigger("keyboard", "paste", a)
  }
  isSupportedPasteProvider(e, t, i){
    return e.pasteMimeTypes?.some(r=>t.matches(r))?!i||this.providerMatchesPreference(e, i):!1
  }
  providerMatchesPreference(e, t){
    return"only"in t?e.providedPasteEditKinds.some(i=>t.only.contains(i)):"preferences"in t?t.preferences.some(i=>t.preferences.some(r=>r.contains(i))):e.id===t.providerId
  }
  getInitialActiveEditIndex(e, t){
    const i=this._configService.getValue(r9o, {
      resource:e.uri
    });
    for(const r of Array.isArray(i)?i:[]){
      const s=new p0(r),o=t.findIndex(a=>s.contains(a.kind));
      if(o>=0)return o
    }
    return 0
  }
}, ZH=Yde=__decorate([__param(1, ln), __param(2, rL), __param(3, jm), __param(4, fr), __param(5, Fn), __param(6, $u), __param(7, ha), __param(8, Ib), __param(9, FY), __param(10, YD)], ZH)
}
});
function UBc(n){
  return n.register(), n
}
function XSh(n, e){
  n&&(n.addImplementation(1e4, "code-editor", (t, i)=>{
    const r=t.get(fl).getFocusedCodeEditor();
    if(r&&r.hasTextFocus()){
      const s=r.getOption(38),o=r.getSelection();
      return o&&o.isEmpty()&&!s||(r.getOption(157)&&e==="cut"?(r.getContainerDomNode().ownerDocument.execCommand("copy"),r.trigger(void 0,"cut",void 0)):r.getContainerDomNode().ownerDocument.execCommand(e)),!0
    }
    return!1
  }), n.addImplementation(0, "generic-dom", (t, i)=>(Jy().execCommand(e), !0)))
}
var SKe, ekh, $Bc, tkh, B9e, R9e, eke, nkh, X3n=