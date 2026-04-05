// Module: out-build/vs/editor/browser/widget/diffEditor/features/gutterFeature.js
// Offset: 2325666 (bundle byte offset)
// Size: 5634 bytes

ri(), rt(), Uc(), vT(), dr(), si(), Id(), Wt(), Ix(), $I(), ts(), EW(), WY(), q3t(), KCh(), DCh(), Gde(), uhA(), O5o=[], M3n=35, U5o=class extends at{
  constructor(e, t, i, r, s, o, a, l, u){
    super(), this._diffModel=t, this._editors=i, this._options=r, this._sashLayout=s, this._boundarySashes=o, this._instantiationService=a, this._contextKeyService=l, this._menuService=u, this._menu=this._register(this._menuService.createMenu(st.DiffEditorHunkToolbar, this._contextKeyService)), this._actions=tp(this, this._menu.onDidChange, ()=>this._menu.getActions()), this._hasActions=this._actions.map(m=>m.length>0), this._showSash=Ro(this, m=>this._options.renderSideBySide.read(m)&&this._hasActions.read(m)), this.width=Ro(this, m=>this._hasActions.read(m)?M3n:0), this.elements=kl("div.gutter@gutter", {
      style:{
        position:"absolute",height:"100%",width:M3n+"px"
      }
    }, []), this._currentDiff=Ro(this, m=>{
      const p=this._diffModel.read(m);
      if(!p)return;
      const g=p.diff.read(m)?.mappings,f=this._editors.modifiedCursor.read(m);
      if(f)return g?.find(A=>A.lineRangeMapping.modified.contains(f.lineNumber))
    }), this._selectedDiffs=Ro(this, m=>{
      const g=this._diffModel.read(m)?.diff.read(m);
      if(!g)return O5o;
      const f=this._editors.modifiedSelections.read(m);
      if(f.every(x=>x.isEmpty()))return O5o;
      const A=new xVe(f.map(x=>rh.fromRangeInclusive(x))),C=g.mappings.filter(x=>x.lineRangeMapping.innerChanges&&A.intersects(x.lineRangeMapping.modified)).map(x=>({
        mapping:x,rangeMappings:x.lineRangeMapping.innerChanges.filter(I=>f.some(B=>Zt.areIntersecting(I.modifiedRange,B)))
      }));
      return C.length===0||C.every(x=>x.rangeMappings.length===0)?O5o:C
    }), this._register(ydA(e, this.elements.root)), this._register(ei(this.elements.root, "click", ()=>{
      this._editors.modified.focus()
    })), this._register(aKe(this.elements.root, {
      display:this._hasActions.map(m=>m?"block":"none")
    })), wde(this, m=>this._showSash.read(m)?new jDc(e, this._sashLayout.dimensions, this._options.enableSplitViewResizing, this._boundarySashes, MSc(this, g=>this._sashLayout.sashLeft.read(g)-M3n, (g, f)=>this._sashLayout.sashLeft.set(g+M3n, f)), ()=>this._sashLayout.resetSash()):void 0).recomputeInitiallyAndOnChange(this._store);
    const d=Ro(this, m=>{
      const p=this._diffModel.read(m);
      if(!p)return[];
      const g=p.diff.read(m);
      if(!g)return[];
      const f=this._selectedDiffs.read(m);
      if(f.length>0){
        const w=_3.fromRangeMappings(f.flatMap(C=>C.rangeMappings));
        return[new iBc(w,!0,st.DiffEditorSelectionToolbar,void 0,p.model.original.uri,p.model.modified.uri)]
      }
      const A=this._currentDiff.read(m);
      return g.mappings.map(w=>new iBc(w.lineRangeMapping.withInnerChangesFromLineRanges(),w.lineRangeMapping===A?.lineRangeMapping,st.DiffEditorHunkToolbar,void 0,p.model.original.uri,p.model.modified.uri))
    });
    this._register(new YCh(this._editors.modified, this.elements.root, {
      getIntersectingGutterItems:(m,p)=>d.read(p),createView:(m,p)=>this._instantiationService.createInstance($5o,m,p,this)
    })), this._register(ei(this.elements.gutter, ir.MOUSE_WHEEL, m=>{
      this._editors.modified.getOption(108).handleMouseWheel&&this._editors.modified.delegateScrollFromMouseWheelEvent(m)
    }, {
      passive:!1
    }))
  }
  computeStagedValue(e){
    const t=e.innerChanges??[], i=new bKe(this._editors.modifiedModel.get()), r=new bKe(this._editors.original.getModel());
    return new Fte(t.map(a=>a.toTextEdit(i))).apply(r)
  }
  layout(e){
    this.elements.gutter.style.left=e+"px"
  }
}, U5o=__decorate([__param(6, ln), __param(7, wi), __param(8, xd)], U5o), iBc=class{
  constructor(n, e, t, i, r, s){
    this.mapping=n, this.showAlways=e, this.menuId=t, this.rangeOverride=i, this.originalUri=r, this.modifiedUri=s
  }
  get id(){
    return this.mapping.modified.toString()
  }
  get range(){
    return this.rangeOverride??this.mapping.modified
  }
}, $5o=class extends at{
  constructor(e, t, i, r){
    super(), this._item=e, this._elements=kl("div.gutterItem", {
      style:{
        height:"20px",width:"34px"
      }
    }, [kl("div.background@background", {
      
    }, []), kl("div.buttons@buttons", {
      
    }, [])]), this._showAlways=this._item.map(this, o=>o.showAlways), this._menuId=this._item.map(this, o=>o.menuId), this._isSmall=Ua(this, !1), this._lastItemRange=void 0, this._lastViewRange=void 0;
    const s=this._register(r.createInstance(Yoe, "element", {
      instantHover:!0
    }, {
      position:{
        hoverPosition:1
      }
    }));
    this._register(A3n(t, this._elements.root)), this._register(Oc(o=>{
      const a=this._showAlways.read(o);
      this._elements.root.classList.toggle("noTransition",!0),this._elements.root.classList.toggle("showAlways",a),setTimeout(()=>{
        this._elements.root.classList.toggle("noTransition",!1)
      },0)
    })), this._register(M0((o, a)=>{
      this._elements.buttons.replaceChildren();
      const l=a.add(r.createInstance(nL,this._elements.buttons,this._menuId.read(o),{
        orientation:1,hoverDelegate:s,toolbarOptions:{
          primaryGroup:u=>u.startsWith("primary")
        },overflowBehavior:{
          maxItems:this._isSmall.read(o)?1:3
        },hiddenItemStrategy:0,actionRunner:a.add(new nBc(()=>{
          const u=this._item.get(),d=u.mapping;
          return{
            mapping:d,originalWithModifiedChanges:i.computeStagedValue(d),originalUri:u.originalUri,modifiedUri:u.modifiedUri
          }
        })),menuOptions:{
          shouldForwardArgs:!0
        }
      }));
      a.add(l.onDidChangeMenuItems(()=>{
        this._lastItemRange&&this.layout(this._lastItemRange,this._lastViewRange)
      }))
    }))
  }
  layout(e, t){
    this._lastItemRange=e, this._lastViewRange=t;
    let i=this._elements.buttons.clientHeight;
    this._isSmall.set(this._item.get().mapping.original.startLineNumber===1&&e.length<30, void 0), i=this._elements.buttons.clientHeight;
    const r=e.length/2-i/2, s=i;
    let o=e.start+r;
    const a=dm.tryCreate(s, t.endExclusive-s-i), l=dm.tryCreate(e.start+s, e.endExclusive-i-s);
    l&&a&&l.start<l.endExclusive&&(o=a.clip(o), o=l.clip(o)), this._elements.buttons.style.top=`${o-e.start}px`
  }
}, $5o=__decorate([__param(3, ln)], $5o)
}
}), rBc, XCh, sBc, hhA=