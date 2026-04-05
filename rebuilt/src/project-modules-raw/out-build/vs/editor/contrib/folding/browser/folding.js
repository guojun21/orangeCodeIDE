// Module: out-build/vs/editor/contrib/folding/browser/folding.js
// Offset: 25233114 (bundle byte offset)
// Size: 20820 bytes

vr(), Po(), _s(), G_(), rt(), oa(), Js(), OCA(), A9e(), Cu(), Qh(), Tg(), QE(), Vvg(), WCA(), xQl(), Ht(), si(), DQl(), Opi(), Jca(), So(), xve(), Sx(), Cm(), yn(), hs(), Yn(), hd(), Ei(), Dd(), z9=new Sn("foldingEnabled", !1), AJ=class extends at{
  static{
    ECt=this
  }
  static{
    this.ID="editor.contrib.folding"
  }
  static get(e){
    return e.getContribution(ECt.ID)
  }
  static getFoldingRangeProviders(e, t){
    const i=e.foldingRangeProvider.ordered(t);
    return ECt._foldingRangeSelector?.(i, t)??i
  }
  static setFoldingRangeProviderSelector(e){
    return ECt._foldingRangeSelector=e, {
      dispose:()=>{
        ECt._foldingRangeSelector=void 0
      }
    }
  }
  constructor(e, t, i, r, s, o, a){
    super(), this.contextKeyService=t, this.languageConfigurationService=i, this.reactiveStorageService=o, this.languageFeaturesService=a, this.localToDispose=this._register(new Ut), this.editor=e, this._foldingLimitReporter=this._register(new BQl(e));
    const l=this.editor.getOptions();
    this._isEnabled=l.get(45), this._useFoldingProviders=l.get(46)!=="indentation", this._unfoldOnClickAfterEndOfLine=l.get(50), this._restoringViewState=!1, this._currentModelHasFoldedImports=!1, this._foldingImportsByDefault=l.get(48), this.updateDebounceInfo=s.for(a.foldingRangeProvider, "Folding", {
      min:200
    }), this.foldingModel=null, this.hiddenRangeModel=null, this.rangeProvider=null, this.foldingRegionPromise=null, this.foldingModelPromise=null, this.updateScheduler=null, this.cursorChangedScheduler=null, this.mouseDownInfo=null, this.foldingDecorationProvider=new iAg(e, o), this.foldingDecorationProvider.showFoldingControls=l.get(115), this.foldingDecorationProvider.showFoldingHighlights=l.get(47), this.foldingEnabled=z9.bindTo(this.contextKeyService), this.foldingEnabled.set(this._isEnabled), this._register(this.editor.onDidChangeModel(()=>this.onModelChanged())), this._register(this.editor.onDidChangeConfiguration(u=>{
      if(u.hasChanged(45)&&(this._isEnabled=this.editor.getOptions().get(45),this.foldingEnabled.set(this._isEnabled),this.onModelChanged()),u.hasChanged(49)&&this.onModelChanged(),u.hasChanged(115)||u.hasChanged(47)){
        const d=this.editor.getOptions();
        this.foldingDecorationProvider.showFoldingControls=d.get(115),this.foldingDecorationProvider.showFoldingHighlights=d.get(47),this.triggerFoldingModelChanged()
      }
      u.hasChanged(46)&&(this._useFoldingProviders=this.editor.getOptions().get(46)!=="indentation",this.onFoldingStrategyChanged()),u.hasChanged(50)&&(this._unfoldOnClickAfterEndOfLine=this.editor.getOptions().get(50)),u.hasChanged(48)&&(this._foldingImportsByDefault=this.editor.getOptions().get(48))
    })), this.onModelChanged()
  }
  get limitReporter(){
    return this._foldingLimitReporter
  }
  saveViewState(){
    const e=this.editor.getModel();
    if(!e||!this._isEnabled||e.isTooLargeForTokenization())return{
      
    };
    if(this.foldingModel){
      const t=this.foldingModel.getMemento(),i=this.rangeProvider?this.rangeProvider.id:void 0;
      return{
        collapsedRegions:t,lineCount:e.getLineCount(),provider:i,foldedImports:this._currentModelHasFoldedImports
      }
    }
  }
  restoreViewState(e){
    const t=this.editor.getModel();
    if(!(!t||!this._isEnabled||t.isTooLargeForTokenization()||!this.hiddenRangeModel)&&e&&(this._currentModelHasFoldedImports=!!e.foldedImports, e.collapsedRegions&&e.collapsedRegions.length>0&&this.foldingModel)){
      this._restoringViewState=!0;
      try{
        this.foldingModel.applyMemento(e.collapsedRegions)
      }
      finally{
        this._restoringViewState=!1
      }
    }
  }
  onModelChanged(){
    this.localToDispose.clear();
    const e=this.editor.getModel();
    !this._isEnabled||!e||e.isTooLargeForTokenization()||(this._currentModelHasFoldedImports=!1, this.foldingModel=new zvg(e, this.foldingDecorationProvider), this.localToDispose.add(this.foldingModel), this.hiddenRangeModel=new Yvg(this.foldingModel), this.localToDispose.add(this.hiddenRangeModel), this.localToDispose.add(this.hiddenRangeModel.onDidChange(t=>this.onHiddenRangesChanges(t))), this.updateScheduler=new Nv(this.updateDebounceInfo.get(e)), this.localToDispose.add(this.updateScheduler), this.cursorChangedScheduler=new Hu(()=>this.revealCursor(), 200), this.localToDispose.add(this.cursorChangedScheduler), this.localToDispose.add(this.languageFeaturesService.foldingRangeProvider.onDidChange(()=>this.onFoldingStrategyChanged())), this.localToDispose.add(this.editor.onDidChangeModelLanguageConfiguration(()=>this.onFoldingStrategyChanged())), this.localToDispose.add(this.editor.onDidChangeModelContent(t=>this.onDidChangeModelContent(t))), this.localToDispose.add(this.editor.onDidChangeCursorPosition(()=>this.onCursorPositionChanged())), this.localToDispose.add(this.editor.onMouseDown(t=>this.onEditorMouseDown(t))), this.localToDispose.add(this.editor.onMouseUp(t=>this.onEditorMouseUp(t))), this.localToDispose.add({
      dispose:()=>{
        this.foldingRegionPromise&&(this.foldingRegionPromise.cancel(),this.foldingRegionPromise=null),this.updateScheduler?.cancel(),this.updateScheduler=null,this.foldingModel=null,this.foldingModelPromise=null,this.hiddenRangeModel=null,this.cursorChangedScheduler=null,this.rangeProvider?.dispose(),this.rangeProvider=null
      }
    }), this.triggerFoldingModelChanged())
  }
  onFoldingStrategyChanged(){
    this.rangeProvider?.dispose(), this.rangeProvider=null, this.triggerFoldingModelChanged()
  }
  getRangeProvider(e){
    if(this.rangeProvider)return this.rangeProvider;
    const t=new fgi(e, this.languageConfigurationService, this._foldingLimitReporter);
    if(this.rangeProvider=t, this._useFoldingProviders&&this.foldingModel){
      const i=ECt.getFoldingRangeProviders(this.languageFeaturesService,e);
      i.length>0&&(this.rangeProvider=new Upi(e,i,()=>this.triggerFoldingModelChanged(),this._foldingLimitReporter,t))
    }
    return this.rangeProvider
  }
  getFoldingModel(){
    return this.foldingModelPromise
  }
  onDidChangeModelContent(e){
    this.hiddenRangeModel?.notifyChangeModelContent(e), this.triggerFoldingModelChanged()
  }
  triggerFoldingModelChanged(){
    this.updateScheduler&&(this.foldingRegionPromise&&(this.foldingRegionPromise.cancel(), this.foldingRegionPromise=null), this.foldingModelPromise=this.updateScheduler.trigger(()=>{
      const e=this.foldingModel;
      if(!e)return null;
      const t=new J_,i=this.getRangeProvider(e.textModel),r=this.foldingRegionPromise=dw(s=>i.compute(s));
      return r.then(s=>{
        if(s&&r===this.foldingRegionPromise){
          let o;
          if(this._foldingImportsByDefault&&!this._currentModelHasFoldedImports){
            const u=s.setCollapsedAllOfType(qY.Imports.value,!0);
            u&&(o=$Se.capture(this.editor),this._currentModelHasFoldedImports=u)
          }
          const a=this.editor.getSelections();
          e.update(s,jCA(a)),this.applyAutoFoldAgentLog(e,e.textModel),o?.restore(this.editor);
          const l=this.updateDebounceInfo.update(e.textModel,t.elapsed());
          this.updateScheduler&&(this.updateScheduler.defaultDelay=l)
        }
        return e
      })
    }).then(void 0, e=>(Gc(e), null)))
  }
  onHiddenRangesChanges(e){
    if(this.hiddenRangeModel&&e.length&&!this._restoringViewState){
      const t=this.editor.getSelections();
      t&&this.hiddenRangeModel.adjustSelections(t)&&this.editor.setSelections(t)
    }
    this.editor.setHiddenAreas(e, this)
  }
  onCursorPositionChanged(){
    this.hiddenRangeModel&&this.hiddenRangeModel.hasRanges()&&this.cursorChangedScheduler.schedule()
  }
  revealCursor(){
    const e=this.getFoldingModel();
    e&&e.then(t=>{
      if(t){
        const i=this.editor.getSelections();
        if(i&&i.length>0){
          const r=[];
          for(const s of i){
            const o=s.selectionStartLineNumber;
            this.hiddenRangeModel&&this.hiddenRangeModel.isHidden(o)&&r.push(...t.getAllRegionsAtLine(o,a=>a.isCollapsed&&o>a.startLineNumber))
          }
          r.length&&(t.toggleCollapseState(r),this.reveal(i[0].getPosition()))
        }
      }
    }).then(void 0, Gc)
  }
  onEditorMouseDown(e){
    if(this.mouseDownInfo=null, !this.hiddenRangeModel||!e.target||!e.target.range||!e.event.leftButton&&!e.event.middleButton)return;
    const t=e.target.range;
    let i=!1;
    switch(e.target.type){
      case 4:{
        const r=e.target.detail,s=e.target.element.offsetLeft;
        if(r.offsetX-s<4)return;
        i=!0;
        break
      }
      case 7:{
        if(this._unfoldOnClickAfterEndOfLine&&this.hiddenRangeModel.hasRanges()&&!e.target.detail.isAfterLines)break;
        return
      }
      case 6:{
        if(this.hiddenRangeModel.hasRanges()){
          const r=this.editor.getModel();
          if(r&&t.startColumn===r.getLineMaxColumn(t.startLineNumber))break
        }
        return
      }
      default:return
    }
    this.mouseDownInfo={
      lineNumber:t.startLineNumber,iconClicked:i
    }
  }
  onEditorMouseUp(e){
    const t=this.foldingModel;
    if(!t||!this.mouseDownInfo||!e.target)return;
    const i=this.mouseDownInfo.lineNumber, r=this.mouseDownInfo.iconClicked, s=e.target.range;
    if(!s||s.startLineNumber!==i)return;
    if(r){
      if(e.target.type!==4)return
    }
    else{
      const a=this.editor.getModel();
      if(!a||s.startColumn!==a.getLineMaxColumn(i))return
    }
    const o=t.getRegionAtLine(i);
    if(o&&o.startLineNumber===i){
      const a=o.isCollapsed;
      if(r||a){
        const l=e.event.altKey;
        let u=[];
        if(l){
          const d=p=>!p.containedBy(o)&&!o.containedBy(p),m=t.getRegionsInside(null,d);
          for(const p of m)p.isCollapsed&&u.push(p);
          u.length===0&&(u=m)
        }
        else{
          const d=e.event.middleButton||e.event.shiftKey;
          if(d)for(const m of t.getRegionsInside(o))m.isCollapsed===a&&u.push(m);
          (a||!d||u.length===0)&&u.push(o)
        }
        t.toggleCollapseState(u),this.reveal({
          lineNumber:i,column:1
        })
      }
    }
  }
  reveal(e){
    this.editor.revealPositionInCenterIfOutsideViewport(e, 0)
  }
  applyAutoFoldAgentLog(e, t){
    if(!e||!t)return;
    const i=e.regions, r=[], s=/^\s*#\s*region\b/i, o=/^\s*\/\/\s*#?region\b/i;
    for(let a=0;
    a<i.length;
    a++){
      if(i.isCollapsed(a))continue;
      const l=i.getType(a);
      if(l!==void 0&&l!==qY.Region.value)continue;
      const u=i.getStartLineNumber(a),d=t.getLineContent(u);
      if(!d.includes("agent log"))continue;
      (l===qY.Region.value||s.test(d)||o.test(d))&&r.push(i.toRegion(a))
    }
    r.length&&e.toggleCollapseState(r)
  }
}, AJ=ECt=__decorate([__param(1, wi), __param(2, JS), __param(3, ms), __param(4, ene), __param(5, ku), __param(6, $u)], AJ), BQl=class extends at{
  constructor(n){
    super(), this.editor=n, this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._computed=0, this._limited=!1
  }
  get limit(){
    return this.editor.getOptions().get(49)
  }
  get computed(){
    return this._computed
  }
  get limited(){
    return this._limited
  }
  update(n, e){
    (n!==this._computed||e!==this._limited)&&(this._computed=n, this._limited=e, this._onDidChange.fire())
  }
}, mU=class extends vu{
  runEditorCommand(n, e, t){
    const i=n.get(JS), r=AJ.get(e);
    if(!r)return;
    const s=r.getFoldingModel();
    if(s)return this.reportTelemetry(n, e), s.then(o=>{
      if(o){
        this.invoke(r,o,e,t,i);
        const a=e.getSelection();
        a&&r.reveal(a.getStartPosition())
      }
    })
  }
  getSelectedLines(n){
    const e=n.getSelections();
    return e?e.map(t=>t.startLineNumber):[]
  }
  getLineNumbers(n, e){
    return n&&n.selectionLines?n.selectionLines.map(t=>t+1):this.getSelectedLines(e)
  }
  run(n, e){
    
  }
}, sAg=class extends mU{
  constructor(){
    super({
      id:"editor.unfold",label:dt(1121,"Unfold"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:3166,mac:{
          primary:2654
        },weight:100
      },metadata:{
        description:"Unfold the content in the editor",args:[{
          name:"Unfold editor argument",description:`Property-value pairs that can be passed through this argument:
						* 'levels': Number of levels to unfold. If not set, defaults to 1.
						* 'direction': If 'up', unfold given number of levels up otherwise unfolds down.
						* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the unfold action to. If not set, the active selection(s) will be used.
						`,constraint:rAg,schema:{
            type:"object",properties:{
              levels:{
                type:"number",default:1
              },direction:{
                type:"string",enum:["up","down"],default:"down"
              },selectionLines:{
                type:"array",items:{
                  type:"number"
                }
              }
            }
          }
        }
        ]
      }
    })
  }
  invoke(n, e, t, i){
    const r=i&&i.levels||1, s=this.getLineNumbers(i, t);
    i&&i.direction==="up"?Qvg(e, !1, r, s):udn(e, !1, r, s)
  }
}, oAg=class extends mU{
  constructor(){
    super({
      id:"editor.unfoldRecursively",label:dt(1122,"Unfold Recursively"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2142),mac:{
          primary:Ma(Np,2142)
        },weight:100
      }
    })
  }
  invoke(n, e, t, i){
    udn(e, !1, Number.MAX_VALUE, this.getSelectedLines(t))
  }
}, aAg=class extends mU{
  constructor(){
    super({
      id:"editor.fold",label:dt(1123,"Fold"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:3164,mac:{
          primary:2652
        },weight:100
      },metadata:{
        description:"Fold the content in the editor",args:[{
          name:"Fold editor argument",description:`Property-value pairs that can be passed through this argument:
							* 'levels': Number of levels to fold.
							* 'direction': If 'up', folds given number of levels up otherwise folds down.
							* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the fold action to. If not set, the active selection(s) will be used.
							If no levels or direction is set, folds the region at the locations or if already collapsed, the first uncollapsed parent instead.
						`,constraint:rAg,schema:{
            type:"object",properties:{
              levels:{
                type:"number"
              },direction:{
                type:"string",enum:["up","down"]
              },selectionLines:{
                type:"array",items:{
                  type:"number"
                }
              }
            }
          }
        }
        ]
      }
    })
  }
  invoke(n, e, t, i){
    const r=this.getLineNumbers(i, t), s=i&&i.levels, o=i&&i.direction;
    typeof s!="number"&&typeof o!="string"?UCA(e, !0, r):o==="up"?Qvg(e, !0, s||1, r):udn(e, !0, s||1, r)
  }
}, cAg=class extends mU{
  constructor(){
    super({
      id:"editor.toggleFold",label:dt(1124,"Toggle Fold"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2090),mac:{
          primary:Ma(Np,2090)
        },weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=this.getSelectedLines(t);
    SQl(e, 1, i)
  }
}, lAg=class extends mU{
  constructor(){
    super({
      id:"editor.foldRecursively",label:dt(1125,"Fold Recursively"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2140),mac:{
          primary:Ma(Np,2140)
        },weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=this.getSelectedLines(t);
    udn(e, !0, Number.MAX_VALUE, i)
  }
}, uAg=class extends mU{
  constructor(){
    super({
      id:"editor.toggleFoldRecursively",label:dt(1126,"Toggle Fold Recursively"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,3114),mac:{
          primary:Ma(Np,3114)
        },weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=this.getSelectedLines(t);
    SQl(e, Number.MAX_VALUE, i)
  }
}, dAg=class extends mU{
  constructor(){
    super({
      id:"editor.foldAllBlockComments",label:dt(1127,"Fold All Block Comments"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2138),mac:{
          primary:Ma(Np,2138)
        },weight:100
      }
    })
  }
  invoke(n, e, t, i, r){
    if(e.regions.hasTypes())EQl(e, qY.Comment.value, !0);
    else{
      const s=t.getModel();
      if(!s)return;
      const o=r.getLanguageConfiguration(s.getLanguageId()).comments;
      if(o&&o.blockCommentStartToken){
        const a=new RegExp("^\\s*"+UI(o.blockCommentStartToken));
        kQl(e,a,!0)
      }
    }
  }
}, hAg=class extends mU{
  constructor(){
    super({
      id:"editor.foldAllMarkerRegions",label:dt(1128,"Fold All Regions"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2077),mac:{
          primary:Ma(Np,2077)
        },weight:100
      }
    })
  }
  invoke(n, e, t, i, r){
    if(e.regions.hasTypes())EQl(e, qY.Region.value, !0);
    else{
      const s=t.getModel();
      if(!s)return;
      const o=r.getLanguageConfiguration(s.getLanguageId()).foldingRules;
      if(o&&o.markers&&o.markers.start){
        const a=new RegExp(o.markers.start);
        kQl(e,a,!0)
      }
    }
  }
}, mAg=class extends mU{
  constructor(){
    super({
      id:"editor.unfoldAllMarkerRegions",label:dt(1129,"Unfold All Regions"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2078),mac:{
          primary:Ma(Np,2078)
        },weight:100
      }
    })
  }
  invoke(n, e, t, i, r){
    if(e.regions.hasTypes())EQl(e, qY.Region.value, !1);
    else{
      const s=t.getModel();
      if(!s)return;
      const o=r.getLanguageConfiguration(s.getLanguageId()).foldingRules;
      if(o&&o.markers&&o.markers.start){
        const a=new RegExp(o.markers.start);
        kQl(e,a,!1)
      }
    }
  }
}, pAg=class extends mU{
  constructor(){
    super({
      id:"editor.foldAllExcept",label:dt(1130,"Fold All Except Selected"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2136),mac:{
          primary:Ma(Np,2136)
        },weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=this.getSelectedLines(t);
    jvg(e, !0, i)
  }
}, gAg=class extends mU{
  constructor(){
    super({
      id:"editor.unfoldAllExcept",label:dt(1131,"Unfold All Except Selected"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2134),mac:{
          primary:Ma(Np,2134)
        },weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=this.getSelectedLines(t);
    jvg(e, !1, i)
  }
}, fAg=class extends mU{
  constructor(){
    super({
      id:"editor.foldAll",label:dt(1132,"Fold All"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2069),mac:{
          primary:Ma(Np,2069)
        },weight:100
      }
    })
  }
  invoke(n, e, t){
    udn(e, !0)
  }
}, bAg=class extends mU{
  constructor(){
    super({
      id:"editor.unfoldAll",label:dt(1133,"Unfold All"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2088),mac:{
          primary:Ma(Np,2088)
        },weight:100
      }
    })
  }
  invoke(n, e, t){
    udn(e, !1)
  }
}, RQl=class ucd extends mU{
  static{
    this.ID_PREFIX="editor.foldLevel"
  }
  static{
    this.ID=e=>ucd.ID_PREFIX+e
  }
  getFoldingLevel(){
    return parseInt(this.id.substr(ucd.ID_PREFIX.length))
  }
  invoke(e, t, i){
    $CA(t, this.getFoldingLevel(), !0, this.getSelectedLines(i))
  }
}, vAg=class extends mU{
  constructor(){
    super({
      id:"editor.gotoParentFold",label:dt(1134,"Go to Parent Fold"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=this.getSelectedLines(t);
    if(i.length>0){
      const r=qCA(i[0],e);
      r!==null&&t.setSelection({
        startLineNumber:r,startColumn:1,endLineNumber:r,endColumn:1
      })
    }
  }
}, AAg=class extends mU{
  constructor(){
    super({
      id:"editor.gotoPreviousFold",label:dt(1135,"Go to Previous Folding Range"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=this.getSelectedLines(t);
    if(i.length>0){
      const r=HCA(i[0],e);
      r!==null&&t.setSelection({
        startLineNumber:r,startColumn:1,endLineNumber:r,endColumn:1
      })
    }
  }
}, yAg=class extends mU{
  constructor(){
    super({
      id:"editor.gotoNextFold",label:dt(1136,"Go to Next Folding Range"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=this.getSelectedLines(t);
    if(i.length>0){
      const r=JCA(i[0],e);
      r!==null&&t.setSelection({
        startLineNumber:r,startColumn:1,endLineNumber:r,endColumn:1
      })
    }
  }
}, wAg=class extends mU{
  constructor(){
    super({
      id:"editor.createFoldingRangeFromSelection",label:dt(1137,"Create Folding Range from Selection"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2135),mac:{
          primary:Ma(Np,2135)
        },weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=[], r=t.getSelections();
    if(r){
      for(const s of r){
        let o=s.endLineNumber;
        s.endColumn===1&&--o,o>s.startLineNumber&&(i.push({
          startLineNumber:s.startLineNumber,endLineNumber:o,type:void 0,isCollapsed:!0,source:1
        }),t.setSelection({
          startLineNumber:s.startLineNumber,startColumn:1,endLineNumber:s.startLineNumber,endColumn:1
        }))
      }
      if(i.length>0){
        i.sort((o,a)=>o.startLineNumber-a.startLineNumber);
        const s=Qae.sanitizeAndMerge(e.regions,i,t.getModel()?.getLineCount());
        e.updatePost(Qae.fromFoldRanges(s))
      }
    }
  }
}, _Ag=class extends mU{
  constructor(){
    super({
      id:"editor.removeManualFoldingRanges",label:dt(1138,"Remove Manual Folding Ranges"),precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:Ma(Gm,2137),mac:{
          primary:Ma(Np,2137)
        },weight:100
      }
    })
  }
  invoke(n, e, t){
    const i=t.getSelections();
    if(i){
      const r=[];
      for(const s of i){
        const{
          startLineNumber:o,endLineNumber:a
        }
        =s;
        r.push(a>=o?{
          startLineNumber:o,endLineNumber:a
        }
        :{
          endLineNumber:a,startLineNumber:o
        })
      }
      e.removeManualRanges(r),n.triggerFoldingModelChanged()
    }
  }
}, CAg=class extends mU{
  constructor(){
    super({
      id:"editor.toggleImportFold",label:dt(1139,"Toggle Import Fold"),alias:"Toggle Import Fold",precondition:z9,kbOpts:{
        kbExpr:Ci.editorTextFocus,weight:100
      }
    })
  }
  async invoke(n, e){
    const t=[], i=e.regions;
    for(let r=i.length-1;
    r>=0;
    r--)i.getType(r)===qY.Imports.value&&t.push(i.toRegion(r));
    e.toggleCollapseState(t), n.triggerFoldingModelChanged()
  }
}, Mg(AJ.ID, AJ, 0), ac(sAg), ac(oAg), ac(aAg), ac(lAg), ac(uAg), ac(fAg), ac(bAg), ac(dAg), ac(hAg), ac(mAg), ac(pAg), ac(gAg), ac(cAg), ac(vAg), ac(AAg), ac(yAg), ac(wAg), ac(_Ag), ac(CAg);
for(let n=1;
n<=7;
n++)XiA(new RQl({
  id:RQl.ID(n), label:dt(1140, "Fold Level {0}", n), precondition:z9, kbOpts:{
    kbExpr:Ci.editorTextFocus, primary:Ma(Gm, 2048|21+n), mac:{
      primary:Ma(Np,2048|21+n)
    }, weight:100
  }
}));
Ss.registerCommand("_executeFoldingRangeProvider", async function(n, ...e){
  const[t]=e;
  if(!(t instanceof je))throw uw();
  const i=n.get($u), r=n.get(Il).getModel(t);
  if(!r)throw uw();
  const s=n.get(Fn);
  if(!s.getValue("editor.folding", {
    resource:t
  }))return[];
  const o=n.get(JS), a=s.getValue("editor.foldingStrategy", {
    resource:t
  }), l={
    get limit(){
      return s.getValue("editor.foldingMaximumRegions",{
        resource:t
      })
    }, update:(g, f)=>{
      
    }
  }, u=new fgi(r, o, l);
  let d=u;
  if(a!=="indentation"){
    const g=AJ.getFoldingRangeProviders(i, r);
    g.length&&(d=new Upi(r, g, ()=>{
      
    }, l, u))
  }
  const m=await d.compute(Cs.None), p=[];
  try{
    if(m)for(let g=0;
    g<m.length;
    g++){
      const f=m.getType(g);
      p.push({
        start:m.getStartLineNumber(g),end:m.getEndLineNumber(g),kind:f?qY.fromValue(f):void 0
      })
    }
    return p
  }
  finally{
    d.dispose()
  }
})
}
});
function vgi(n){
  return n.scheme===_n.vscodeRemote?n.authority:void 0
}
function QZ(n){
  if(!n)return;
  const e=n.indexOf("+");
  return e<0?n:n.substr(0, e)
}
function zCA(n){
  const{
    host:e, port:t
  }
  =VCA(n);
  if(typeof t>"u")throw new Error(`Invalid remote authority: ${n}. It must either be a remote of form <remoteName>+<arg> or a remote host of form <host>:<port>.`);
  return{
    host:e, port:t
  }
}
function VCA(n){
  const e=n.match(/^(\[[0-9a-z:]+\]):(\d+)$/);
  if(e)return{
    host:e[1], port:parseInt(e[2], 10)
  };
  const t=n.match(/^(\[[0-9a-z:]+\])$/);
  if(t)return{
    host:t[1], port:void 0
  };
  const i=n.match(/(.*):(\d+)$/);
  return i?{
    host:i[1], port:parseInt(i[2], 10)
  }
  :{
    host:n, port:void 0
  }
}
var zAe=