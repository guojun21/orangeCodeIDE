// Module: out-build/vs/editor/contrib/inlayHints/browser/inlayHintsController.js
// Offset: 25090944 (bundle byte offset)
// Size: 12041 bytes

ri(), Vs(), vr(), Po(), _s(), rt(), cu(), Js(), Yn(), XOt(), A9e(), pk(), nI(), ts(), Tg(), xw(), bv(), xve(), Cm(), td(), Api(), EGl(), Jbg(), hs(), Er(), Wt(), So(), Nl(), Io(), Gbg=class ccd{
  constructor(){
    this._entries=new Fb(50)
  }
  get(e){
    const t=ccd._key(e);
    return this._entries.get(t)
  }
  set(e, t){
    const i=ccd._key(e);
    this._entries.set(i, t)
  }
  static _key(e){
    return`${e.uri.toString()}/${e.getVersionId()}`
  }
}, XWl=xi("IInlayHintsCache"), Vi(XWl, Gbg, 1), dla=class{
  constructor(n, e){
    this.item=n, this.index=e
  }
  get part(){
    const n=this.item.hint.label;
    return typeof n=="string"?{
      label:n
    }
    :n[this.index]
  }
}, Wbg=class{
  constructor(n, e){
    this.part=n, this.hasTriggerModifier=e
  }
}, (function(n){
  n[n.Normal=0]="Normal", n[n.Invisible=1]="Invisible"
})(Qbg||(Qbg={
  
})), vCt=class{
  static{
    Yun=this
  }
  static{
    this.ID="editor.contrib.InlayHints"
  }
  static{
    this._MAX_DECORATORS=1500
  }
  static{
    this._whitespaceData={
      
    }
  }
  static get(e){
    return e.getContribution(Yun.ID)??void 0
  }
  constructor(e, t, i, r, s, o, a){
    this._editor=e, this._languageFeaturesService=t, this._inlayHintsCache=r, this._commandService=s, this._notificationService=o, this._instaService=a, this._disposables=new Ut, this._sessionDisposables=new Ut, this._decorationsMetadata=new Map, this._ruleFactory=new gTc(this._editor), this._activeRenderMode=0, this._debounceInfo=i.for(t.inlayHintsProvider, "InlayHint", {
      min:25
    }), this._disposables.add(t.inlayHintsProvider.onDidChange(()=>this._update())), this._disposables.add(e.onDidChangeModel(()=>this._update())), this._disposables.add(e.onDidChangeModelLanguage(()=>this._update())), this._disposables.add(e.onDidChangeConfiguration(l=>{
      l.hasChanged(146)&&this._update()
    })), this._update()
  }
  dispose(){
    this._sessionDisposables.dispose(), this._removeAllDecorations(), this._disposables.dispose()
  }
  _update(){
    this._sessionDisposables.clear(), this._removeAllDecorations();
    const e=this._editor.getOption(146);
    if(e.enabled==="off")return;
    const t=this._editor.getModel();
    if(!t||!this._languageFeaturesService.inlayHintsProvider.has(t))return;
    if(e.enabled==="on")this._activeRenderMode=0;
    else{
      let l,u;
      e.enabled==="onUnlessPressed"?(l=0,u=1):(l=1,u=0),this._activeRenderMode=l,this._sessionDisposables.add(qBe.getInstance().event(d=>{
        if(!this._editor.hasModel())return;
        const m=d.altKey&&d.ctrlKey&&!(d.shiftKey||d.metaKey)?u:l;
        if(m!==this._activeRenderMode){
          this._activeRenderMode=m;
          const p=this._editor.getModel(),g=this._copyInlayHintsWithCurrentAnchor(p);
          this._updateHintsDecorators([p.getFullModelRange()],g),o.schedule(0)
        }
      }))
    }
    const i=this._inlayHintsCache.get(t);
    i&&this._updateHintsDecorators([t.getFullModelRange()], i), this._sessionDisposables.add($i(()=>{
      t.isDisposed()||this._cacheHintsForFastRestore(t)
    }));
    let r;
    const s=new Set, o=new Hu(async()=>{
      const l=Date.now();
      r?.dispose(!0),r=new Wc;
      const u=t.onWillDispose(()=>r?.cancel());
      try{
        const d=r.token,m=await kGl.create(this._languageFeaturesService.inlayHintsProvider,t,this._getHintsRanges(),d);
        if(o.delay=this._debounceInfo.update(t,Date.now()-l),d.isCancellationRequested){
          m.dispose();
          return
        }
        for(const p of m.provider)typeof p.onDidChangeInlayHints=="function"&&!s.has(p)&&(s.add(p),this._sessionDisposables.add(p.onDidChangeInlayHints(()=>{
          o.isScheduled()||o.schedule()
        })));
        this._sessionDisposables.add(m),this._updateHintsDecorators(m.ranges,m.items),this._cacheHintsForFastRestore(t)
      }
      catch(d){
        Gc(d)
      }
      finally{
        r.dispose(),u.dispose()
      }
    }, this._debounceInfo.get(t));
    this._sessionDisposables.add(o), this._sessionDisposables.add($i(()=>r?.dispose(!0))), o.schedule(0), this._sessionDisposables.add(this._editor.onDidScrollChange(l=>{
      (l.scrollTopChanged||!o.isScheduled())&&o.schedule()
    }));
    const a=this._sessionDisposables.add(new uo);
    this._sessionDisposables.add(this._editor.onDidChangeModelContent(l=>{
      r?.cancel();
      const u=Math.max(o.delay,800);
      this._cursorInfo={
        position:this._editor.getPosition(),notEarlierThan:Date.now()+u
      },a.value=nC(()=>o.schedule(0),u),o.schedule()
    })), this._sessionDisposables.add(this._editor.onDidChangeConfiguration(l=>{
      l.hasChanged(146)&&o.schedule()
    })), this._sessionDisposables.add(this._installDblClickGesture(()=>o.schedule(0))), this._sessionDisposables.add(this._installLinkGesture()), this._sessionDisposables.add(this._installContextMenu())
  }
  _installLinkGesture(){
    const e=new Ut, t=e.add(new Cun(this._editor)), i=new Ut;
    return e.add(i), e.add(t.onMouseMoveOrRelevantKeyDown(r=>{
      const[s]=r,o=this._getInlayHintLabelPart(s),a=this._editor.getModel();
      if(!o||!a){
        i.clear();
        return
      }
      const l=new Wc;
      i.add($i(()=>l.dispose(!0))),o.item.resolve(l.token),this._activeInlayHintPart=o.part.command||o.part.location?new Wbg(o,s.hasTriggerModifier):void 0;
      const u=a.validatePosition(o.item.hint.position).lineNumber,d=new Zt(u,1,u,a.getLineMaxColumn(u)),m=this._getInlineHintsForRange(d);
      this._updateHintsDecorators([d],m),i.add($i(()=>{
        this._activeInlayHintPart=void 0,this._updateHintsDecorators([d],m)
      }))
    })), e.add(t.onCancel(()=>i.clear())), e.add(t.onExecute(async r=>{
      const s=this._getInlayHintLabelPart(r);
      if(s){
        const o=s.part;
        o.location?this._instaService.invokeFunction(Hbg,r,this._editor,o.location):AOo.is(o.command)&&await this._invokeCommand(o.command,s.item)
      }
    })), e
  }
  _getInlineHintsForRange(e){
    const t=new Set;
    for(const i of this._decorationsMetadata.values())e.containsRange(i.item.anchor.range)&&t.add(i.item);
    return Array.from(t)
  }
  _installDblClickGesture(e){
    return this._editor.onMouseUp(async t=>{
      if(t.event.detail!==2)return;
      const i=this._getInlayHintLabelPart(t);
      if(i&&(t.event.preventDefault(),await i.item.resolve(Cs.None),q_(i.item.hint.textEdits))){
        const r=i.item.hint.textEdits.map(s=>zb.replace(Zt.lift(s.range),s.text));
        this._editor.executeEdits("inlayHint.default",r),e()
      }
    })
  }
  _installContextMenu(){
    return this._editor.onContextMenu(async e=>{
      if(!wf(e.event.target))return;
      const t=this._getInlayHintLabelPart(e);
      t&&await this._instaService.invokeFunction(xCA,this._editor,e.event.target,t)
    })
  }
  _getInlayHintLabelPart(e){
    if(e.target.type!==6)return;
    const t=e.target.detail.injectedText?.options;
    if(t instanceof WOt&&t?.attachedData instanceof dla)return t.attachedData
  }
  async _invokeCommand(e, t){
    try{
      await this._commandService.executeCommand(e.id,...e.arguments??[])
    }
    catch(i){
      this._notificationService.notify({
        severity:Rs.Error,source:t.provider.displayName,message:i
      })
    }
  }
  _cacheHintsForFastRestore(e){
    const t=this._copyInlayHintsWithCurrentAnchor(e);
    this._inlayHintsCache.set(e, t)
  }
  _copyInlayHintsWithCurrentAnchor(e){
    const t=new Map;
    for(const[i, r]of this._decorationsMetadata){
      if(t.has(r.item))continue;
      const s=e.getDecorationRange(i);
      if(s){
        const o=new SGl(s,r.item.anchor.direction),a=r.item.with({
          anchor:o
        });
        t.set(r.item,a)
      }
    }
    return Array.from(t.values())
  }
  _getHintsRanges(){
    const t=this._editor.getModel(), i=this._editor.getVisibleRangesPlusViewportAboveBelow(), r=[];
    for(const s of i.sort(Zt.compareRangesUsingStarts)){
      const o=t.validateRange(new Zt(s.startLineNumber-30,s.startColumn,s.endLineNumber+30,s.endColumn));
      r.length===0||!Zt.areIntersectingOrTouching(r[r.length-1],o)?r.push(o):r[r.length-1]=Zt.plusRange(r[r.length-1],o)
    }
    return r
  }
  _updateHintsDecorators(e, t){
    const i=new Map;
    if(this._cursorInfo&&this._cursorInfo.notEarlierThan>Date.now()&&e.some(w=>w.containsPosition(this._cursorInfo.position))){
      const{
        position:w
      }
      =this._cursorInfo;
      this._cursorInfo=void 0;
      const C=new Map;
      for(const R of this._editor.getLineDecorations(w.lineNumber)??[]){
        const N=this._decorationsMetadata.get(R.id);
        if(R.range.startColumn>w.column)continue;
        const M=N?.decoration.options[N.item.anchor.direction];
        if(M&&M.attachedData!==Yun._whitespaceData){
          const O=C.get(N.item)??0;
          C.set(N.item,O+M.content.length)
        }
      }
      const x=t.filter(R=>R.anchor.range.startLineNumber===w.lineNumber&&R.anchor.range.endColumn<=w.column),I=Array.from(C.values());
      let B;
      for(;
      ;
      ){
        const R=x.shift(),N=I.shift();
        if(!N&&!R)break;
        if(R)i.set(R,N??0),B=R;
        else if(B&&N){
          let M=i.get(B);
          M+=N,M+=I.reduce((O,$)=>O+$,0),I.length=0;
          break
        }
      }
    }
    const r=[], s=(w, C, x, I, B)=>{
      const R={
        content:x,inlineClassNameAffectsLetterSpacing:!0,inlineClassName:C.className,cursorStops:I,attachedData:B
      };
      r.push({
        item:w,classNameRef:C,decoration:{
          range:w.anchor.range,options:{
            description:"InlayHint",showIfCollapsed:w.anchor.range.isEmpty(),collapseOnReplaceEdit:!w.anchor.range.isEmpty(),stickiness:0,[w.anchor.direction]:this._activeRenderMode===0?R:void 0
          }
        }
      })
    }, o=(w, C)=>{
      const x=this._ruleFactory.createClassNameRef({
        width:`${a/3|0}px`,display:"inline-block"
      });
      s(w,x,"\u200A",C?UH.Right:UH.None,Yun._whitespaceData)
    }, {
      fontSize:a,fontFamily:l,padding:u,isUniform:d
    }
    =this._getLayoutInfo(), m=this._editor.getOption(146).maximumLength, p="--code-editorInlayHintsFontFamily";
    this._editor.getContainerDomNode().style.setProperty(p, l);
    let g={
      line:0,totalLen:0
    };
    for(let w=0;
    w<t.length;
    w++){
      const C=t[w];
      if(g.line!==C.anchor.range.startLineNumber&&(g={
        line:C.anchor.range.startLineNumber,totalLen:0
      }),m&&g.totalLen>m)continue;
      C.hint.paddingLeft&&o(C,!1);
      const x=typeof C.hint.label=="string"?[{
        label:C.hint.label
      }
      ]:C.hint.label,I=i.get(C);
      let B=0;
      for(let R=0;
      R<x.length;
      R++){
        const N=x[R],M=R===0,O=R===x.length-1,$={
          fontSize:`${a}px`,fontFamily:`var(${p}), ${jI.fontFamily}`,verticalAlign:d?"baseline":"middle",unicodeBidi:"isolate"
        };
        q_(C.hint.textEdits)&&($.cursor="default"),this._fillInColors($,C.hint),(N.command||N.location)&&this._activeInlayHintPart?.part.item===C&&this._activeInlayHintPart.part.index===R&&($.textDecoration="underline",this._activeInlayHintPart.hasTriggerModifier&&($.color=kC(puh),$.cursor="pointer"));
        let H=N.label;
        g.totalLen+=H.length;
        let W=!1;
        const z=m!==0?g.totalLen-m:0;
        if(z>0&&(H=H.slice(0,-z)+"\u2026",W=!0),B+=H.length,I!==void 0){
          const Y=B-I;
          Y>=0&&(B-=Y,H=H.slice(0,-(1+Y))+"\u2026",W=!0)
        }
        if(u&&(M&&(O||W)?($.padding=`1px ${Math.max(1,a/4)|0}px`,$.borderRadius=`${a/4|0}px`):M?($.padding=`1px 0 1px ${Math.max(1,a/4)|0}px`,$.borderRadius=`${a/4|0}px 0 0 ${a/4|0}px`):O||W?($.padding=`1px ${Math.max(1,a/4)|0}px 1px 0`,$.borderRadius=`0 ${a/4|0}px ${a/4|0}px 0`):$.padding="1px 0 1px 0"),s(C,this._ruleFactory.createClassNameRef($),TCA(H),O&&!C.hint.paddingRight?UH.Right:UH.None,new dla(C,R)),W)break
      }
      if(I!==void 0&&B<I){
        const R=I-B;
        s(C,this._ruleFactory.createClassNameRef({
          
        }),"\u200A".repeat(R),UH.None)
      }
      if(C.hint.paddingRight&&o(C,!0),r.length>Yun._MAX_DECORATORS)break
    }
    const f=[];
    for(const[w, C]of this._decorationsMetadata){
      const x=this._editor.getModel()?.getDecorationRange(w);
      x&&e.some(I=>I.containsRange(x))&&(f.push(w),C.classNameRef.dispose(),this._decorationsMetadata.delete(w))
    }
    const A=$Se.capture(this._editor);
    this._editor.changeDecorations(w=>{
      const C=w.deltaDecorations(f,r.map(x=>x.decoration));
      for(let x=0;
      x<C.length;
      x++){
        const I=r[x];
        this._decorationsMetadata.set(C[x],I)
      }
    }), A.restore(this._editor)
  }
  _fillInColors(e, t){
    t.kind===wOo.Parameter?(e.backgroundColor=kC(Suh), e.color=kC(Cuh)):t.kind===wOo.Type?(e.backgroundColor=kC(_uh), e.color=kC(wuh)):(e.backgroundColor=kC(I4o), e.color=kC(T4o))
  }
  _getLayoutInfo(){
    const e=this._editor.getOption(146), t=e.padding, i=this._editor.getOption(54), r=this._editor.getOption(51);
    let s=e.fontSize;
    (!s||s<5||s>i)&&(s=i);
    const o=e.fontFamily||r;
    return{
      fontSize:s,fontFamily:o,padding:t,isUniform:!t&&o===r&&s===i
    }
  }
  _removeAllDecorations(){
    this._editor.removeDecorations(Array.from(this._decorationsMetadata.keys()));
    for(const e of this._decorationsMetadata.values())e.classNameRef.dispose();
    this._decorationsMetadata.clear()
  }
  getInlayHintsForLine(e){
    if(!this._editor.hasModel())return[];
    const t=new Set, i=[];
    for(const r of this._editor.getLineDecorations(e)){
      const s=this._decorationsMetadata.get(r.id);
      s&&!t.has(s.item.hint)&&(t.add(s.item.hint),i.push(s.item))
    }
    return i
  }
}, vCt=Yun=__decorate([__param(1, $u), __param(2, ene), __param(3, XWl), __param(4, fr), __param(5, ms), __param(6, ln)], vCt), Ss.registerCommand("_executeInlayHintProvider", async(n, ...e)=>{
  const[t, i]=e;
  Kd(je.isUri(t)), Kd(Zt.isIRange(i));
  const{
    inlayHintsProvider:r
  }
  =n.get($u), s=await n.get(El).createModelReference(t);
  try{
    const o=await kGl.create(r, s.object.textEditorModel, [Zt.lift(i)], Cs.None), a=o.items.map(l=>l.hint);
    return setTimeout(()=>o.dispose(), 0), a
  }
  finally{
    s.dispose()
  }
})
}
}), tQl, cgi, jbg=