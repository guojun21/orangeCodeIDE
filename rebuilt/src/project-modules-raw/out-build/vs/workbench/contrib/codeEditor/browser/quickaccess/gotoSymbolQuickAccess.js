// Module: out-build/vs/workbench/contrib/codeEditor/browser/quickaccess/gotoSymbolQuickAccess.js
// Offset: 28234806 (bundle byte offset)
// Size: 3993 bytes

Ht(), Kl(), ss(), Ws(), eX(), R9A(), Ei(), rt(), vr(), Po(), dr(), iX(), Q_(), _s(), Kmn(), lv(), od(), eV(), Cm(), si(), gie(), kW(), Tye=class extends _nt{
  static{
    Cau=this
  }
  constructor(e, t, i, r, s, o){
    super(r, o, {
      openSideBySideDirection:()=>this.configuration.openSideBySideDirection
    }), this.editorService=e, this.editorGroupService=t, this.configurationService=i, this.outlineService=s, this.onDidActiveTextEditorControlChange=this.editorService.onDidActiveEditorChange
  }
  get configuration(){
    const e=this.configurationService.getValue().workbench?.editor;
    return{
      openEditorPinned:!e?.enablePreviewFromQuickOpen||!e?.enablePreview,openSideBySideDirection:e?.openSideBySideDirection
    }
  }
  get activeTextEditorControl(){
    if(!tCt(this.editorService.activeEditorPane?.getControl()))return this.editorService.activeTextEditorControl
  }
  gotoLocation(e, t){
    if((t.keyMods.alt||this.configuration.openEditorPinned&&t.keyMods.ctrlCmd||t.forceSideBySide)&&this.editorService.activeEditor){
      e.restoreViewState?.();
      const i={
        selection:t.range,pinned:t.keyMods.ctrlCmd||this.configuration.openEditorPinned,preserveFocus:t.preserveFocus
      };
      this.editorGroupService.sideGroup.openEditor(this.editorService.activeEditor,i)
    }
    else super.gotoLocation(e, t)
  }
  static{
    this.SYMBOL_PICKS_TIMEOUT=8e3
  }
  async getSymbolPicks(e, t, i, r, s){
    return!await Promise.race([this.waitForLanguageSymbolRegistry(e, r), Af(Cau.SYMBOL_PICKS_TIMEOUT)])||s.isCancellationRequested?[]:this.doGetSymbolPicks(this.getDocumentSymbols(e, s), o8(t), i, s, e)
  }
  provideWithoutTextEditor(e){
    return this.canPickWithOutlineService()?this.doGetOutlinePicks(e):super.provideWithoutTextEditor(e)
  }
  canPickWithOutlineService(){
    return this.editorService.activeEditorPane?this.outlineService.canCreateOutline(this.editorService.activeEditorPane):!1
  }
  doGetOutlinePicks(e){
    const t=this.editorService.activeEditorPane;
    if(!t)return at.None;
    const i=new Wc, r=new Ut;
    return r.add($i(()=>i.dispose(!0))), e.busy=!0, this.outlineService.createOutline(t, 4, i.token).then(s=>{
      if(!s)return;
      if(i.token.isCancellationRequested){
        s.dispose();
        return
      }
      r.add(s);
      const o=s.captureViewState();
      r.add($i(()=>{
        e.selectedItems.length===0&&o.dispose()
      }));
      const a=s.config.quickPickDataSource.getQuickPickElements(),l=a.map((m,p)=>({
        kind:0,index:p,score:0,label:m.label,description:m.description,ariaLabel:m.ariaLabel,iconClasses:m.iconClasses
      }));
      r.add(e.onDidAccept(()=>{
        e.hide();
        const[m]=e.selectedItems;
        m&&a[m.index]&&s.reveal(a[m.index].element,{
          
        },!1,!1)
      }));
      const u=()=>{
        const m=l.filter(p=>{
          if(e.value==="@")return p.score=0,p.highlights=void 0,!0;
          const g=e.value.substring(_nt.PREFIX.length).trim(),f=A3t(p.label),A=w9e(g,g.toLowerCase(),0,f.text,f.text.toLowerCase(),0,{
            firstMatchCanBeWeak:!0,boostFullMatch:!0
          });
          return A?(p.score=A[1],p.highlights={
            label:$3o(g,f)??void 0
          },!0):!1
        });
        if(m.length===0){
          const p=_(5785,null);
          e.items=[{
            label:p,index:-1,kind:14
          }
          ],e.ariaLabel=p
        }
        else e.items=m
      };
      u(),r.add(e.onDidChangeValue(u));
      const d=new uo;
      r.add(d),r.add(e.onDidChangeActive(()=>{
        const[m]=e.activeItems;
        m&&a[m.index]?d.value=s.preview(a[m.index].element):d.clear()
      }))
    }).catch(s=>{
      Gc(s),e.hide()
    }).finally(()=>{
      e.busy=!1
    }), r
  }
}, Tye=Cau=__decorate([__param(0, yi), __param(1, da), __param(2, Fn), __param(3, $u), __param(4, lkt), __param(5, Gne)], Tye), Sau=class _Qb extends rn{
  static{
    this.ID="workbench.action.gotoSymbol"
  }
  constructor(){
    super({
      id:_Qb.ID,title:{
        ...dt(5790,"Go to Symbol in Editor..."),mnemonicTitle:_(5786,null)
      },f1:!0,keybinding:{
        when:Ee.and(AL.negate(),Ece.negate()),weight:200,primary:3117
      },menu:[{
        id:st.MenubarGoMenu,group:"4_symbol_nav",order:1
      }
      ]
    })
  }
  run(e){
    e.get(ha).quickAccess.show(Tye.PREFIX, {
      itemActivation:IW.NONE
    })
  }
}, Dt(Sau), Di.as(kJ.Quickaccess).registerQuickAccessProvider({
  ctor:Tye, prefix:_nt.PREFIX, contextKey:"inFileSymbolsPicker", placeholder:_(5787, null), helpEntries:[{
    description:_(5788, null), prefix:_nt.PREFIX, commandId:Sau.ID, commandCenterOrder:40
  }, {
    description:_(5789, null), prefix:_nt.PREFIX_BY_CATEGORY
  }
  ]
})
}
}), Iye, Snt=