// Module: out-build/vs/editor/contrib/gotoSymbol/browser/goToCommands.js
// Offset: 25076180 (bundle byte offset)
// Size: 14513 bytes

Ew(), vr(), G_(), Js(), Yn(), dve(), lv(), Cu(), Oh(), yq(), tl(), ts(), Qh(), Tg(), rgi(), eCt(), ECA(), xRe(), wq(), Ht(), dr(), hs(), si(), Wt(), So(), Xg(), wet(), Cm(), Ef(), Av(), fE(), or.appendMenuItem(st.EditorContext, {
  submenu:st.EditorContextPeek, title:_(1178, null), group:"navigation", order:100
}), ogi=class JWb{
  static is(e){
    return!e||typeof e!="object"?!1:!!(e instanceof JWb||ar.isIPosition(e.position)&&e.model)
  }
  constructor(e, t){
    this.model=e, this.position=t
  }
}, VUe=class _Je extends xx{
  static{
    this._allSymbolNavigationCommands=new Map
  }
  static{
    this._activeAlternativeCommands=new Set
  }
  static all(){
    return _Je._allSymbolNavigationCommands.values()
  }
  static _patchConfig(e){
    const t={
      ...e,f1:!0
    };
    if(t.menu)for(const i of bl.wrap(t.menu))(i.id===st.EditorContext||i.id===st.EditorContextPeek)&&(i.when=Ee.and(e.precondition, i.when));
    return t
  }
  constructor(e, t){
    super(_Je._patchConfig(t)), this.configuration=e, _Je._allSymbolNavigationCommands.set(t.id, this)
  }
  runEditorCommand(e, t, i, r){
    if(!t.hasModel())return Promise.resolve(void 0);
    const s=e.get(ms), o=e.get(fl), a=e.get(p2), l=e.get(sgi), u=e.get($u), d=e.get(ln), m=e.get(R1), p=t.getModel(), g=t.getPosition(), f=ogi.is(i)?i:new ogi(p, g), A=new ERe(t, 5), w=performance.now(), C=WP(this._getLocationModel(u, f.model, f.position, A.token), A.token).then(async x=>{
      if(!x||A.token.isCancellationRequested)return;
      W_(x.ariaMessage);
      let I;
      if(x.referenceAt(p.uri,g)){
        const R=this._getAlternativeCommand(t);
        R!==void 0&&!_Je._activeAlternativeCommands.has(R)&&_Je._allSymbolNavigationCommands.has(R)&&(I=_Je._allSymbolNavigationCommands.get(R))
      }
      this.configuration.onlyGoToDefIfDefAndSingleResult&&(I=null);
      const B=x.references.length;
      if(B===0){
        if(!this.configuration.muteMessage){
          const R=p.getWordAtPosition(g);
          C3.get(t)?.showMessage(this._getNoResultFoundMessage(R),g)
        }
      }
      else if(B===1&&I)_Je._activeAlternativeCommands.add(this.desc.id),d.invokeFunction(R=>I.runEditorCommand(R,t,i,r).finally(()=>{
        _Je._activeAlternativeCommands.delete(this.desc.id)
      }));
      else return this._onResult(o,l,m,t,x,w,r)
    }, x=>{
      s.error(x)
    }).finally(()=>{
      A.dispose()
    });
    return a.showWhile(C, 250), C
  }
  async _onResult(e, t, i, r, s, o, a){
    const l=this._getGoToPreference(r);
    if(!(r instanceof q3)&&(this.configuration.openInPeek||l==="peek"&&s.references.length>1)){
      const u=performance.now()-o;
      i.distribution({
        stat:"editor.goToSymbol.duration",value:u,tags:{
          type:this.desc.id,outcome:"peek"
        }
      }),this._openInPeek(r,s,a)
    }
    else{
      const u=s.firstReference(),d=s.references.length>1&&l==="gotoAndPeek",m=performance.now()-o;
      i.distribution({
        stat:"editor.goToSymbol.duration",value:m,tags:{
          type:this.desc.id,outcome:d?"gotoAndPeek":"goto"
        }
      });
      const p=await this._openReference(r,e,u,this.configuration.openToSide,!d);
      d&&p?this._openInPeek(p,s,a):s.dispose(),l==="goto"&&t.put(u)
    }
  }
  async _openReference(e, t, i, r, s){
    let o;
    if(saA(i)&&(o=i.targetSelectionRange), o||(o=i.range), !o)return;
    const a=await t.openCodeEditor({
      resource:i.uri,options:{
        selection:Zt.collapseToStart(o),selectionRevealType:3,selectionSource:"code.jump"
      }
    }, e, r);
    if(a){
      if(s){
        const l=a.getModel(),u=a.createDecorationsCollection([{
          range:o,options:{
            description:"symbol-navigate-action-highlight",className:"symbolHighlight"
          }
        }
        ]);
        setTimeout(()=>{
          a.getModel()===l&&u.clear()
        },350)
      }
      return a
    }
  }
  _openInPeek(e, t, i){
    const r=z1e.get(e);
    r&&e.hasModel()?r.toggleWidget(i??e.getSelection(), dw(s=>Promise.resolve(t)), this.configuration.openInPeek):t.dispose()
  }
}, bCt=class extends VUe{
  async _getLocationModel(n, e, t, i){
    return new $ne(await F1e(n.definitionProvider, e, t, !1, i), _(1179, null))
  }
  _getNoResultFoundMessage(n){
    return n&&n.word?_(1180, null, n.word):_(1181, null)
  }
  _getAlternativeCommand(n){
    return n.getOption(60).alternativeDefinitionCommand
  }
  _getGoToPreference(n){
    return n.getOption(60).multipleDefinitions
  }
}, Dt(class scd extends bCt{
  static{
    this.id="editor.action.revealDefinition"
  }
  constructor(){
    super({
      openToSide:!1,openInPeek:!1,muteMessage:!1
    }, {
      id:scd.id,title:{
        ...dt(1205,"Go to Definition"),mnemonicTitle:_(1182,null)
      },precondition:Ci.hasDefinitionProvider,keybinding:[{
        when:Ci.editorTextFocus,primary:70,weight:100
      },{
        when:Ee.and(Ci.editorTextFocus,uU),primary:2118,weight:100
      }
      ],menu:[{
        id:st.EditorContext,group:"navigation",order:1.1
      },{
        id:st.MenubarGoMenu,precondition:null,group:"4_symbol_nav",order:2
      }
      ]
    }), Ss.registerCommandAlias("editor.action.goToDeclaration", scd.id)
  }
}), Dt(class ocd extends bCt{
  static{
    this.id="editor.action.revealDefinitionAside"
  }
  constructor(){
    super({
      openToSide:!0,openInPeek:!1,muteMessage:!1
    }, {
      id:ocd.id,title:dt(1206,"Open Definition to the Side"),precondition:Ee.and(Ci.hasDefinitionProvider,Ci.isInEmbeddedEditor.toNegated()),keybinding:[{
        when:Ci.editorTextFocus,primary:Ma(Gm,70),mac:{
          primary:Ma(Np,70)
        },weight:100
      },{
        when:Ee.and(Ci.editorTextFocus,uU),primary:Ma(Gm,2118),mac:{
          primary:Ma(Np,2118)
        },weight:100
      }
      ]
    }), Ss.registerCommandAlias("editor.action.openDeclarationToTheSide", ocd.id)
  }
}), Dt(class acd extends bCt{
  static{
    this.id="editor.action.peekDefinition"
  }
  constructor(){
    super({
      openToSide:!1,openInPeek:!0,muteMessage:!1
    }, {
      id:acd.id,title:dt(1207,"Peek Definition"),precondition:Ee.and(Ci.hasDefinitionProvider,Z4.notInPeekEditor,Ci.isInEmbeddedEditor.toNegated()),keybinding:{
        when:Ci.editorTextFocus,primary:582,linux:{
          primary:3140
        },weight:100
      },menu:{
        id:st.EditorContextPeek,group:"peek",order:2
      }
    }), Ss.registerCommandAlias("editor.action.previewDeclaration", acd.id)
  }
}), VWl=class extends VUe{
  async _getLocationModel(n, e, t, i){
    return new $ne(await fGl(n.declarationProvider, e, t, !1, i), _(1183, null))
  }
  _getNoResultFoundMessage(n){
    return n&&n.word?_(1184, null, n.word):_(1185, null)
  }
  _getAlternativeCommand(n){
    return n.getOption(60).alternativeDeclarationCommand
  }
  _getGoToPreference(n){
    return n.getOption(60).multipleDeclarations
  }
}, Dt(class GWb extends VWl{
  static{
    this.id="editor.action.revealDeclaration"
  }
  constructor(){
    super({
      openToSide:!1,openInPeek:!1,muteMessage:!1
    }, {
      id:GWb.id,title:{
        ...dt(1208,"Go to Declaration"),mnemonicTitle:_(1186,null)
      },precondition:Ee.and(Ci.hasDeclarationProvider,Ci.isInEmbeddedEditor.toNegated()),menu:[{
        id:st.EditorContext,group:"navigation",order:1.3
      },{
        id:st.MenubarGoMenu,precondition:null,group:"4_symbol_nav",order:3
      }
      ]
    })
  }
  _getNoResultFoundMessage(e){
    return e&&e.word?_(1187, null, e.word):_(1188, null)
  }
}), Dt(class extends VWl{
  constructor(){
    super({
      openToSide:!1,openInPeek:!0,muteMessage:!1
    }, {
      id:"editor.action.peekDeclaration",title:dt(1209,"Peek Declaration"),precondition:Ee.and(Ci.hasDeclarationProvider,Z4.notInPeekEditor,Ci.isInEmbeddedEditor.toNegated()),menu:{
        id:st.EditorContextPeek,group:"peek",order:3
      }
    })
  }
}), KWl=class extends VUe{
  async _getLocationModel(n, e, t, i){
    return new $ne(await pca(n.typeDefinitionProvider, e, t, !1, i), _(1189, null))
  }
  _getNoResultFoundMessage(n){
    return n&&n.word?_(1190, null, n.word):_(1191, null)
  }
  _getAlternativeCommand(n){
    return n.getOption(60).alternativeTypeDefinitionCommand
  }
  _getGoToPreference(n){
    return n.getOption(60).multipleTypeDefinitions
  }
}, Dt(class WWb extends KWl{
  static{
    this.ID="editor.action.goToTypeDefinition"
  }
  constructor(){
    super({
      openToSide:!1,openInPeek:!1,muteMessage:!1
    }, {
      id:WWb.ID,title:{
        ...dt(1210,"Go to Type Definition"),mnemonicTitle:_(1192,null)
      },precondition:Ci.hasTypeDefinitionProvider,keybinding:{
        when:Ci.editorTextFocus,primary:0,weight:100
      },menu:[{
        id:st.EditorContext,group:"navigation",order:1.4
      },{
        id:st.MenubarGoMenu,precondition:null,group:"4_symbol_nav",order:3
      }
      ]
    })
  }
}), Dt(class QWb extends KWl{
  static{
    this.ID="editor.action.peekTypeDefinition"
  }
  constructor(){
    super({
      openToSide:!1,openInPeek:!0,muteMessage:!1
    }, {
      id:QWb.ID,title:dt(1211,"Peek Type Definition"),precondition:Ee.and(Ci.hasTypeDefinitionProvider,Z4.notInPeekEditor,Ci.isInEmbeddedEditor.toNegated()),menu:{
        id:st.EditorContextPeek,group:"peek",order:4
      }
    })
  }
}), YWl=class extends VUe{
  async _getLocationModel(n, e, t, i){
    return new $ne(await dpi(n.implementationProvider, e, t, !1, i), _(1193, null))
  }
  _getNoResultFoundMessage(n){
    return n&&n.word?_(1194, null, n.word):_(1195, null)
  }
  _getAlternativeCommand(n){
    return n.getOption(60).alternativeImplementationCommand
  }
  _getGoToPreference(n){
    return n.getOption(60).multipleImplementations
  }
}, Dt(class jWb extends YWl{
  static{
    this.ID="editor.action.goToImplementation"
  }
  constructor(){
    super({
      openToSide:!1,openInPeek:!1,muteMessage:!1
    }, {
      id:jWb.ID,title:{
        ...dt(1212,"Go to Implementations"),mnemonicTitle:_(1196,null)
      },precondition:Ci.hasImplementationProvider,keybinding:{
        when:Ci.editorTextFocus,primary:2118,weight:100
      },menu:[{
        id:st.EditorContext,group:"navigation",order:1.45
      },{
        id:st.MenubarGoMenu,precondition:null,group:"4_symbol_nav",order:4
      }
      ]
    })
  }
}), Dt(class zWb extends YWl{
  static{
    this.ID="editor.action.peekImplementation"
  }
  constructor(){
    super({
      openToSide:!1,openInPeek:!0,muteMessage:!1
    }, {
      id:zWb.ID,title:dt(1213,"Peek Implementations"),precondition:Ee.and(Ci.hasImplementationProvider,Z4.notInPeekEditor,Ci.isInEmbeddedEditor.toNegated()),keybinding:{
        when:Ci.editorTextFocus,primary:3142,weight:100
      },menu:{
        id:st.EditorContextPeek,group:"peek",order:5
      }
    })
  }
}), ZWl=class extends VUe{
  _getNoResultFoundMessage(n){
    return n?_(1197, null, n.word):_(1198, null)
  }
  _getAlternativeCommand(n){
    return n.getOption(60).alternativeReferenceCommand
  }
  _getGoToPreference(n){
    return n.getOption(60).multipleReferences
  }
}, Dt(class extends ZWl{
  constructor(){
    super({
      openToSide:!1,openInPeek:!1,muteMessage:!1
    }, {
      id:"editor.action.goToReferences",title:{
        ...dt(1214,"Go to References"),mnemonicTitle:_(1199,null)
      },precondition:Ee.and(Ci.hasReferenceProvider,Z4.notInPeekEditor,Ci.isInEmbeddedEditor.toNegated()),keybinding:{
        when:Ci.editorTextFocus,primary:1094,weight:100
      },menu:[{
        id:st.EditorContext,group:"navigation",order:1.45
      },{
        id:st.MenubarGoMenu,precondition:null,group:"4_symbol_nav",order:5
      }
      ]
    })
  }
  async _getLocationModel(e, t, i, r){
    return new $ne(await hpi(e.referenceProvider, t, i, !0, !1, r), _(1200, null))
  }
}), Dt(class extends ZWl{
  constructor(){
    super({
      openToSide:!1,openInPeek:!0,muteMessage:!1
    }, {
      id:"editor.action.referenceSearch.trigger",title:dt(1215,"Peek References"),precondition:Ee.and(Ci.hasReferenceProvider,Z4.notInPeekEditor,Ci.isInEmbeddedEditor.toNegated()),menu:{
        id:st.EditorContextPeek,group:"peek",order:6
      }
    })
  }
  async _getLocationModel(e, t, i, r){
    return new $ne(await hpi(e.referenceProvider, t, i, !1, !1, r), _(1201, null))
  }
}), qbg=class extends VUe{
  constructor(n, e, t){
    super(n, {
      id:"editor.action.goToLocation",title:dt(1216,"Go to Any Symbol"),precondition:Ee.and(Z4.notInPeekEditor,Ci.isInEmbeddedEditor.toNegated())
    }), this._references=e, this._gotoMultipleBehaviour=t
  }
  async _getLocationModel(n, e, t, i){
    return new $ne(this._references, _(1202, null))
  }
  _getNoResultFoundMessage(n){
    return n&&_(1203, null, n.word)||""
  }
  _getGoToPreference(n){
    return this._gotoMultipleBehaviour??n.getOption(60).multipleReferences
  }
  _getAlternativeCommand(){
    
  }
}, Ss.registerCommand({
  id:"editor.action.goToLocations", metadata:{
    description:"Go to locations from a position in a file", args:[{
      name:"uri",description:"The text document in which to start",constraint:je
    }, {
      name:"position",description:"The position at which to start",constraint:ar.isIPosition
    }, {
      name:"locations",description:"An array of locations.",constraint:Array
    }, {
      name:"multiple",description:"Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`"
    }, {
      name:"noResultsMessage",description:"Human readable message that shows when locations is empty."
    }
    ]
  }, handler:async(n, e, t, i, r, s, o)=>{
    Kd(je.isUri(e)), Kd(ar.isIPosition(t)), Kd(Array.isArray(i)), Kd(typeof r>"u"||typeof r=="string"), Kd(typeof o>"u"||typeof o=="boolean");
    const a=n.get(fl), l=await a.openCodeEditor({
      resource:e
    }, a.getFocusedCodeEditor());
    if(Ig(l))return l.setPosition(t), l.revealPositionInCenterIfOutsideViewport(t, 0), l.invokeWithinContext(u=>{
      const d=new class extends qbg{
        _getNoResultFoundMessage(m){
          return s||super._getNoResultFoundMessage(m)
        }
      }
      ({
        muteMessage:!s,openInPeek:!!o,openToSide:!1
      },i,r);
      u.get(ln).invokeFunction(d.run.bind(d),l)
    })
  }
}), Ss.registerCommand({
  id:"editor.action.peekLocations", metadata:{
    description:"Peek locations from a position in a file", args:[{
      name:"uri",description:"The text document in which to start",constraint:je
    }, {
      name:"position",description:"The position at which to start",constraint:ar.isIPosition
    }, {
      name:"locations",description:"An array of locations.",constraint:Array
    }, {
      name:"multiple",description:"Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`"
    }
    ]
  }, handler:async(n, e, t, i, r)=>{
    n.get(fr).executeCommand("editor.action.goToLocations", e, t, i, r, void 0, !0)
  }
}), Ss.registerCommand({
  id:"editor.action.findReferences", handler:(n, e, t)=>{
    Kd(je.isUri(e)), Kd(ar.isIPosition(t));
    const i=n.get($u), r=n.get(fl);
    return r.openCodeEditor({
      resource:e
    }, r.getFocusedCodeEditor()).then(s=>{
      if(!Ig(s)||!s.hasModel())return;
      const o=z1e.get(s);
      if(!o)return;
      const a=dw(u=>hpi(i.referenceProvider,s.getModel(),ar.lift(t),!1,!1,u).then(d=>new $ne(d,_(1204,null)))),l=new Zt(t.lineNumber,t.column,t.lineNumber,t.column);
      return Promise.resolve(o.toggleWidget(l,a,!1))
    })
  }
}), Ss.registerCommandAlias("editor.action.showReferences", "editor.action.peekLocations")
}
});
async function xCA(n, e, t, i){
  const r=n.get(El), s=n.get(kc), o=n.get(fr), a=n.get(ln), l=n.get(ms);
  if(await i.item.resolve(Cs.None), !i.part.location)return;
  const u=i.part.location, d=[], m=new Set(or.getMenuItems(st.EditorContext).map(g=>JBe(g)?g.command.id:Wr()));
  for(const g of VUe.all())m.has(g.desc.id)&&d.push(new Hs(g.desc.id, Ub.label(g.desc, {
    renderShortTitle:!0
  }), void 0, !0, async()=>{
    const f=await r.createModelReference(u.uri);
    try{
      const A=new ogi(f.object.textEditorModel,Zt.getStartPosition(u.range)),w=i.item.anchor.range;
      await a.invokeFunction(g.runEditorCommand.bind(g),e,A,w)
    }
    finally{
      f.dispose()
    }
  }));
  if(i.part.command){
    const{
      command:g
    }
    =i.part;
    d.push(new id), d.push(new Hs(g.id, g.title, void 0, !0, async()=>{
      try{
        await o.executeCommand(g.id,...g.arguments??[])
      }
      catch(f){
        l.notify({
          severity:Rs.Error,source:i.item.provider.displayName,message:f
        })
      }
    }))
  }
  const p=e.getOption(132);
  s.showContextMenu({
    domForShadowRoot:p?e.getDomNode()??void 0:void 0, getAnchor:()=>{
      const g=qS(t);
      return{
        x:g.left,y:g.top+g.height+8
      }
    }, getActions:()=>d, onHide:()=>{
      e.focus()
    }, autoSelectFirstItem:!0
  })
}
async function Hbg(n, e, t, i){
  const s=await n.get(El).createModelReference(i.uri);
  await t.invokeWithinContext(async o=>{
    const a=e.hasSideBySideModifier, l=o.get(wi), u=Z4.inPeekEditor.getValue(l), d=!a&&t.getOption(93)&&!u;
    return new bCt({
      openToSide:a,openInPeek:d,muteMessage:!0
    }, {
      title:{
        value:"",original:""
      },id:"",precondition:void 0
    }).run(o, new ogi(s.object.textEditorModel, Zt.getStartPosition(i.range)), Zt.lift(i.range))
  }), s.dispose()
}
var Jbg=