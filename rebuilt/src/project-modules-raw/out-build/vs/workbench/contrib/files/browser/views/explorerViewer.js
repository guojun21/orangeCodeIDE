// Module: out-build/vs/workbench/contrib/files/browser/views/explorerViewer.js
// Offset: 32471870 (bundle byte offset)
// Size: 31128 bytes

ri(), iR(), Xg(), So(), ns(), zp(), ps(), rt(), pl(), Io(), Ei(), gD(), Yr(), JZ(), Ht(), wH(), np(), Hl(), hfn(), unt(), sN(), A8(), Wt(), dz(), zr(), ZVe(), _r(), ru(), Uye(), ss(), Tka(), Q_(), yn(), Pd(), Js(), _d(), YI(), $ie(), HDf(), mk(), H3n(), rly(), cu(), Dde(), $b(), vr(), N1(), iu(), sly(), wE(), LAe(), _s(), si(), aNe(), Nl(), XP(), WAu=class rzb{
  static{
    this.ITEM_HEIGHT=22
  }
  getHeight(e){
    return rzb.ITEM_HEIGHT
  }
  getTemplateId(e){
    return yCi.ID
  }
}, cEa=new Qe, lEa=class{
  constructor(e, t, i, r, s, o, a, l, u, d){
    this.fileFilter=e, this.findProvider=t, this.progressService=i, this.configService=r, this.notificationService=s, this.layoutService=o, this.fileService=a, this.explorerService=l, this.contextService=u, this.filesConfigService=d
  }
  getParent(e){
    if(e.parent)return e.parent;
    throw new Error("getParent only supported for cached parents")
  }
  hasChildren(e){
    return Array.isArray(e)||e.hasChildren(t=>this.fileFilter.filter(t, 1))
  }
  getChildren(e){
    if(Array.isArray(e))return e;
    if(this.findProvider.isShowingFilterResults())return Array.from(e.children.values());
    const t=e.error, i=this.explorerService.sortOrderConfiguration.sortOrder, r=e.fetchChildren(i);
    if(Array.isArray(r))return r;
    const s=r.then(o=>(e instanceof v8&&e.isRoot&&!e.error&&t&&this.contextService.getWorkbenchState()!==2&&cEa.fire(e.resource), o), o=>{
      if(e instanceof v8&&e.isRoot)if(this.contextService.getWorkbenchState()===2){
        const a=new v8(e.resource,this.fileService,this.configService,this.filesConfigService,void 0,void 0,!1);
        return a.error=o,[a]
      }
      else cEa.fire(e.resource);
      else this.notificationService.error(o);
      return[]
    });
    return this.progressService.withProgress({
      location:1,delay:this.layoutService.isRestored()?800:1500
    }, o=>s), s
  }
}, lEa=__decorate([__param(2, Ib), __param(3, Fn), __param(4, ms), __param(5, Vu), __param(6, Gr), __param(7, DC), __param(8, Lr), __param(9, IC)], lEa), QAu=class extends v8{
  constructor(n, e, t, i, r, s){
    super(n, e, t, i, r, s)
  }
}, HOf=class{
  constructor(){
    this._tree=new Map, this._highlightedItems=new Map
  }
  get highlightedItems(){
    return Array.from(this._highlightedItems.values())
  }
  get(n){
    const e=this.find(n);
    if(e===void 0)return 0;
    const{
      treeLayer:t,relPath:i
    }
    =e;
    return this._highlightedItems.set(i, n), t.childMatches
  }
  find(n){
    const e=this._tree.get(n.root.name);
    if(e===void 0)return;
    const t=eN(n.root.resource, n.resource);
    if(t===void 0||t.startsWith(".."))throw new Error("Resource is not a child of the root");
    if(t==="")return{
      treeLayer:e,relPath:t
    };
    let i=e;
    for(const r of t.split("/")){
      if(!i.stats[r])return;
      i=i.stats[r]
    }
    return{
      treeLayer:i,relPath:t
    }
  }
  add(n, e){
    const t=eN(e.resource, n);
    if(t===void 0||t.startsWith(".."))throw new Error("Resource is not a child of the root");
    let i=this._tree.get(e.name);
    i||(i={
      childMatches:0,stats:{
        
      },isMatch:!1
    }, this._tree.set(e.name, i)), i.childMatches++;
    let r=i;
    for(const s of t.split("/"))r.stats[s]||(r.stats[s]={
      childMatches:0,stats:{
        
      },isMatch:!1
    }), r=r.stats[s], r.childMatches++;
    r.childMatches--, r.isMatch=!0
  }
  isMatch(n){
    const e=this.find(n);
    if(e===void 0)return!1;
    const{
      treeLayer:t
    }
    =e;
    return t.isMatch
  }
  clear(){
    this._tree.clear()
  }
}, uEa=class{
  get highlightTree(){
    return this.findHighlightTree
  }
  constructor(e, t, i, r, s, o, a, l, u){
    this.filesFilter=e, this.treeProvider=t, this.searchService=i, this.fileService=r, this.configurationService=s, this.filesConfigService=o, this.progressService=a, this.explorerService=l, this.sessionId=0, this.phantomParents=new Set, this.findHighlightTree=new HOf, this.explorerFindActiveContextKey=mgu.bindTo(u)
  }
  isShowingFilterResults(){
    return!!this.filterSessionStartState
  }
  isVisible(e){
    return!this.filterSessionStartState||this.explorerService.isEditable(e)?!0:this.filterSessionStartState.rootsWithProviders.has(e.root)?e.isMarkedAsFiltered():!0
  }
  startSession(){
    this.sessionId++
  }
  async endSession(){
    this.filterSessionStartState&&await this.endFilterSession(), this.highlightSessionStartState&&this.endHighlightSession()
  }
  async find(e, t, i){
    const r=this.doFind(e, t, i);
    return await this.progressService.withProgress({
      location:1,delay:750
    }, s=>r)
  }
  async doFind(e, t, i){
    return t.findMode===nR.Highlight?(this.filterSessionStartState&&await this.endFilterSession(), this.highlightSessionStartState||this.startHighlightSession(), await this.doHighlightFind(e, t.matchType, i)):(this.highlightSessionStartState&&this.endHighlightSession(), this.filterSessionStartState||this.startFilterSession(), await this.doFilterFind(e, t.matchType, i))
  }
  startFilterSession(){
    const e=this.treeProvider(), t=e.getInput();
    if(!t)return;
    const i=this.explorerService.roots.filter(r=>this.searchSupportsScheme(r.resource.scheme));
    this.filterSessionStartState={
      viewState:e.getViewState(),input:t,rootsWithProviders:new Set(i)
    }, this.explorerFindActiveContextKey.set(!0)
  }
  async doFilterFind(e, t, i){
    if(!this.filterSessionStartState)throw new Error("ExplorerFindProvider: no session state");
    const r=Array.from(this.filterSessionStartState.rootsWithProviders), s=await this.getSearchResults(e, r, t, i);
    if(i.isCancellationRequested)return;
    this.clearPhantomElements();
    for(const{
      explorerRoot:l,files:u,directories:d
    }
    of s)this.addWorkspaceFilterResults(l, u, d);
    await this.treeProvider().setInput(this.filterSessionStartState.input);
    const a=s.some(({
      hitMaxResults:l
    })=>l);
    return{
      isMatch:l=>l.isMarkedAsFiltered(),matchCount:s.reduce((l,{
        files:u,directories:d
      })=>l+u.length+d.length,0),warningMessage:a?_(8085,null):void 0
    }
  }
  addWorkspaceFilterResults(e, t, i){
    const r=[...t.map(s=>({
      resource:s,isDirectory:!1
    })), ...i.map(s=>({
      resource:s,isDirectory:!0
    }))];
    for(const{
      resource:s,isDirectory:o
    }
    of r){
      const a=e.find(s);
      if(a&&a.root===e){
        a.markItemAndParentsAsFiltered();
        continue
      }
      const l=this.createPhantomItems(s,e,o);
      if(l.length===0)throw new Error("Phantom item was not created even though it is not in the model");
      const u=l[0].parent;
      u instanceof QAu||this.phantomParents.add(u),l[l.length-1].markItemAndParentsAsFiltered()
    }
  }
  createPhantomItems(e, t, i){
    const r=eN(t.resource, e);
    if(!r)throw new Error("Resource is not a child of the root");
    const s=[];
    let o=t, a=t.resource;
    const l=r.split("/");
    for(const u of l){
      a=a.with({
        path:`${a.path}/${u}`
      });
      let d=o.getChild(u);
      if(!d){
        const m=l[l.length-1]===u?i:!0;
        d=new QAu(a,this.fileService,this.configurationService,this.filesConfigService,o,m),o.addChild(d),s.push(d)
      }
      o=d
    }
    return s
  }
  async endFilterSession(){
    if(this.clearPhantomElements(), this.explorerFindActiveContextKey.set(!1), !this.filterSessionStartState)throw new Error("ExplorerFindProvider: no session state to restore");
    await this.treeProvider().setInput(this.filterSessionStartState.input, this.filterSessionStartState.viewState), this.filterSessionStartState=void 0, this.explorerService.refresh()
  }
  clearPhantomElements(){
    for(const e of this.phantomParents)e.forgetChildren();
    this.phantomParents.clear(), this.explorerService.roots.forEach(e=>e.unmarkItemAndChildren())
  }
  startHighlightSession(){
    const e=this.explorerService.roots.filter(t=>this.searchSupportsScheme(t.resource.scheme));
    this.highlightSessionStartState={
      rootsWithProviders:new Set(e)
    }
  }
  async doHighlightFind(e, t, i){
    if(!this.highlightSessionStartState)throw new Error("ExplorerFindProvider: no highlight session state");
    const r=Array.from(this.highlightSessionStartState.rootsWithProviders), s=await this.getSearchResults(e, r, t, i);
    if(i.isCancellationRequested)return;
    this.clearHighlights();
    for(const{
      explorerRoot:a,files:l,directories:u
    }
    of s)this.addWorkspaceHighlightResults(a, l.concat(u));
    const o=s.some(({
      hitMaxResults:a
    })=>a);
    return{
      isMatch:a=>this.findHighlightTree.isMatch(a)||this.findHighlightTree.get(a)>0&&this.treeProvider().isCollapsed(a),matchCount:s.reduce((a,{
        files:l,directories:u
      })=>a+l.length+u.length,0),warningMessage:o?_(8086,null):void 0
    }
  }
  addWorkspaceHighlightResults(e, t){
    const i=new Set, r=o=>{
      for(;
      o;
      )i.add(o),o=o.parent
    };
    for(const o of t){
      const a=e.find(o);
      if(a&&a.root===e){
        this.findHighlightTree.add(o,e),r(a.parent);
        continue
      }
      const l=aly(o,e);
      l&&(this.findHighlightTree.add(o,e),r(l.parent))
    }
    const s=this.treeProvider();
    for(const o of i)s.hasNode(o)&&s.rerender(o)
  }
  endHighlightSession(){
    this.highlightSessionStartState=void 0, this.clearHighlights()
  }
  clearHighlights(){
    const e=this.treeProvider();
    for(const t of this.findHighlightTree.highlightedItems)e.hasNode(t)&&e.rerender(t);
    this.findHighlightTree.clear()
  }
  searchSupportsScheme(e){
    return e!==_n.file&&e!==_n.vscodeRemote?!1:this.searchService.schemeHasFileSearchProvider(e)
  }
  async getSearchResults(e, t, i, r){
    const s=e.toLowerCase(), o=i===XW.Fuzzy;
    return await Promise.all(t.map((a, l)=>this.searchInWorkspace(s, a, l, o, r)))
  }
  async searchInWorkspace(e, t, i, r, s){
    const o=uly(r?cly(e):lly(e)), a=GAi(this.configurationService.getValue({
      resource:t.resource
    }))||{
      
    }, l={
      folderQueries:[{
        folder:t.resource,disregardIgnoreFiles:!this.configurationService.getValue("explorer.excludeGitIgnore")
      }
      ],type:1,shouldGlobMatchFilePattern:!0,cacheKey:`explorerfindprovider:${t.name}:${i}:${this.sessionId}`,excludePattern:a
    };
    let u, d;
    try{
      [u,d]=await Promise.all([this.searchService.fileSearch({
        ...l,filePattern:`**/${o}`,maxResults:512
      },s),this.searchService.fileSearch({
        ...l,filePattern:`**/${o}/**`
      },s)])
    }
    catch(A){
      if(!bf(A))throw A
    }
    if(!u||!d||s.isCancellationRequested)return{
      explorerRoot:t,files:[],directories:[],hitMaxResults:!1
    };
    const m=u.results.map(A=>A.resource), p=oly(d.results.map(A=>A.resource), t, o), g=m.filter(A=>!this.filesFilter.isIgnored(A, t.resource, !1)), f=p.filter(A=>!this.filesFilter.isIgnored(A, t.resource, !0));
    return{
      explorerRoot:t,files:g,directories:f,hitMaxResults:!!u.limitHit||!!d.limitHit
    }
  }
}, uEa=__decorate([__param(2, bQ), __param(3, Gr), __param(4, Fn), __param(5, IC), __param(6, Ib), __param(7, DC), __param(8, wi)], uEa), jAu=class{
  static{
    this.ID=0
  }
  get index(){
    return this._index
  }
  get count(){
    return this.items.length
  }
  get current(){
    return this.items[this._index]
  }
  get currentId(){
    return`${this.id}_${this.index}`
  }
  get labels(){
    return this._labels
  }
  constructor(n, e, t, i, r){
    this.id=n, this.items=e, this.depth=i, this.collapsed=r, this._onDidChange=new Qe, this.onDidChange=this._onDidChange.event, this._index=e.length-1, this.updateLabels(t), this._updateLabelDisposable=t.label.onDidRender(()=>this.updateLabels(t))
  }
  updateLabels(n){
    this._labels=Array.from(n.container.querySelectorAll(".label-name"));
    let e="";
    for(let t=0;
    t<this.labels.length;
    t++){
      const i=e.length?`${this.items[t].name}, compact, ${e}`:this.items[t].name;
      this.labels[t].setAttribute("aria-label",i),this.labels[t].setAttribute("aria-level",`${this.depth+t}`),e=e.length?`${this.items[t].name} ${e}`:this.items[t].name
    }
    this.updateCollapsed(this.collapsed), this._index<this.labels.length&&this.labels[this._index].classList.add("active")
  }
  previous(){
    this._index<=0||this.setIndex(this._index-1)
  }
  next(){
    this._index>=this.items.length-1||this.setIndex(this._index+1)
  }
  first(){
    this._index!==0&&this.setIndex(0)
  }
  last(){
    this._index!==this.items.length-1&&this.setIndex(this.items.length-1)
  }
  setIndex(n){
    n<0||n>=this.items.length||(this.labels[this._index].classList.remove("active"), this._index=n, this.labels[this._index].classList.add("active"), this._onDidChange.fire())
  }
  updateCollapsed(n){
    this.collapsed=n;
    for(let e=0;
    e<this.labels.length;
    e++)this.labels[e].setAttribute("aria-expanded", n?"false":"true")
  }
  dispose(){
    this._onDidChange.dispose(), this._updateLabelDisposable.dispose()
  }
}, yCi=class{
  static{
    GAu=this
  }
  static{
    this.ID="file"
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p){
    this.labels=t, this.highlightTree=i, this.updateWidth=r, this.contextViewService=s, this.themeService=o, this.configurationService=a, this.explorerService=l, this.labelService=u, this.contextService=d, this.contextMenuService=m, this.instantiationService=p, this.compressedNavigationControllers=new Map, this._onDidChangeActiveDescendant=new foe, this.onDidChangeActiveDescendant=this._onDidChangeActiveDescendant.event, this.config=this.configurationService.getValue();
    const g=()=>{
      const f=this.configurationService.getValue("workbench.tree.indent"),A=Math.max(22-f,0);
      e.style.setProperty("--vscode-explorer-align-offset-margin-left",`${A}px`)
    };
    this.configListener=this.configurationService.onDidChangeConfiguration(f=>{
      f.affectsConfiguration("explorer")&&(this.config=this.configurationService.getValue()),f.affectsConfiguration("workbench.tree.indent")&&g()
    }), g()
  }
  getWidgetAriaLabel(){
    return _(8087, null)
  }
  get templateId(){
    return GAu.ID
  }
  renderTemplate(e){
    const t=new Ut, i=t.add(this.labels.create(e, {
      supportHighlights:!0
    }));
    t.add(i.onDidRender(()=>{
      try{
        s.currentContext&&this.updateWidth(s.currentContext)
      }
      catch{
        
      }
    }));
    const r=oEa.create(this.instantiationService, e, t);
    t.add(oEa.onDidRegisterDescriptor(o=>{
      const a=o.create(this.instantiationService,e);
      r.push(t.add(a)),a.setResource(s.currentContext?.resource)
    }));
    const s={
      templateDisposables:t,elementDisposables:t.add(new Ut),label:i,container:e,contribs:r
    };
    return s
  }
  renderElement(e, t, i){
    const r=e.element;
    i.currentContext=r;
    const s=this.explorerService.getEditableData(r);
    i.label.element.classList.remove("compressed"), s?(i.label.element.style.display="none", i.contribs.forEach(o=>o.setResource(void 0)), i.elementDisposables.add(this.renderInputBox(i.container, r, s))):(i.label.element.style.display="flex", this.renderStat(r, r.name, void 0, e.filterData, i))
  }
  renderCompressedElements(e, t, i, r){
    const s=e.element.elements[e.element.elements.length-1];
    i.currentContext=s;
    const o=e.element.elements.filter(l=>this.explorerService.isEditable(l)), a=o.length===0?void 0:this.explorerService.getEditableData(o[0]);
    if(a)i.label.element.classList.remove("compressed"), i.label.element.style.display="none", i.contribs.forEach(l=>l.setResource(void 0)), i.elementDisposables.add(this.renderInputBox(i.container, o[0], a));
    else{
      i.label.element.classList.add("compressed"),i.label.element.style.display="flex";
      const l=`compressed-explorer_${jAu.ID++}`,u=e.element.elements.map(g=>g.name);
      let d=e.filterData;
      if(d&&d.length>2){
        const g=u.join("/").length-u[u.length-1].length;
        d=[d[0],d[1]+g,...d.slice(2)]
      }
      this.renderStat(s,u,l,d,i);
      const m=new jAu(l,e.element.elements,i,e.depth,e.collapsed);
      i.elementDisposables.add(m);
      const p=this.compressedNavigationControllers.get(s)??[];
      this.compressedNavigationControllers.set(s,[...p,m]),i.elementDisposables.add(this._onDidChangeActiveDescendant.add(m.onDidChange)),i.elementDisposables.add(ei(i.container,"mousedown",g=>{
        const f=aEa(g.target);
        f&&m.setIndex(f.index)
      })),i.elementDisposables.add($i(()=>{
        const g=this.compressedNavigationControllers.get(s)??[],f=g.findIndex(A=>A===m);
        if(f<0)throw new Error("Disposing unknown navigation controller");
        g.length===1?this.compressedNavigationControllers.delete(s):g.splice(f,1)
      }))
    }
  }
  renderStat(e, t, i, r, s){
    s.label.element.style.display="flex";
    const o=["explorer-item"];
    this.explorerService.isCut(e)&&o.push("cut");
    const a=this.themeService.getFileIconTheme();
    s.container.parentElement?.parentElement?.querySelector(".monaco-tl-twistie")?.classList.toggle("force-twistie", e.hasNests&&a.hidesExplorerArrows);
    const u=a.hasFileIcons&&(a.hidesExplorerArrows||!a.hasFolderIcons), d=e.nestedParent&&u;
    s.contribs.forEach(p=>p.setResource(e.resource)), s.label.setResource({
      resource:e.resource,name:t
    }, {
      fileKind:e.isRoot?xg.ROOT_FOLDER:e.isDirectory?xg.FOLDER:xg.FILE,extraClasses:d?[...o,"align-nest-icon-with-parent-icon"]:o,fileDecorations:this.config.explorer.decorations,matches:e.isDirectory?[]:oI(r),separator:this.labelService.getSeparator(e.resource.scheme,e.resource.authority),domId:i
    });
    const m=e.isDirectory?this.highlightTree.get(e):0;
    if(m>0){
      const p=new ume(s.label.element.lastElementChild,{
        
      },{
        ...lve,badgeBackground:zo(vdh),badgeBorder:zo(Adh)
      });
      p.setCount(m),p.setTitleFormat(_(8088,null,m)),s.elementDisposables.add(p)
    }
    s.label.element.classList.toggle("highlight-badge", m>0)
  }
  renderInputBox(e, t, i){
    const r=this.labels.create(e), s=["explorer-item", "explorer-item-edited"], o=t.isRoot?xg.ROOT_FOLDER:t.isDirectory?xg.FOLDER:xg.FILE, a=this.themeService.getFileIconTheme(), l=a.hasFileIcons&&(a.hidesExplorerArrows||!a.hasFolderIcons), u=t.nestedParent&&l, d={
      hidePath:!0,hideLabel:!0,fileKind:o,extraClasses:u?[...s,"align-nest-icon-with-parent-icon"]:s
    }, m=t.name?Td(t.resource):t.resource, p=t.name||"";
    r.setFile(Wo(m, p||" "), d), r.element.firstElementChild.style.display="none";
    const g=new J9(r.element, this.contextViewService, {
      validationOptions:{
        validation:I=>{
          const B=i.validationMessage(I);
          return!B||B.severity!==Rs.Error?null:{
            content:B.content,formatContent:!0,type:3
          }
        }
      },ariaLabel:_(8089,null),inputBoxStyles:g2
    }), f=p.lastIndexOf(".");
    let A="prefix";
    g.value=p, g.focus(), g.select({
      start:0,end:f>0&&!t.isDirectory?f:p.length
    });
    const w=_6((I, B)=>{
      r.element.style.display="none";
      const R=g.value;
      Bo(x),r.element.remove(),B&&i.onFinish(R,I)
    }), C=()=>{
      if(g.isInputValid()){
        const I=i.validationMessage(g.value);
        I?g.showMessage({
          content:I.content,formatContent:!0,type:I.severity===Rs.Info?1:I.severity===Rs.Warning?2:3
        }):g.hideMessage()
      }
    };
    C();
    const x=[g, g.onDidChange(I=>{
      r.setFile(Wo(m,I||" "),d)
    }), _f(g.inputElement, ir.KEY_DOWN, I=>{
      if(I.equals(60)){
        const B=g.value.lastIndexOf(".");
        if(t.isDirectory||B===-1)return;
        A==="prefix"?(A="all",g.select({
          start:0,end:g.value.length
        })):A==="all"?(A="suffix",g.select({
          start:B+1,end:g.value.length
        })):(A="prefix",g.select({
          start:0,end:B
        }))
      }
      else I.equals(3)?g.validate()||w(!0,!0):I.equals(9)&&w(!1,!0)
    }), _f(g.inputElement, ir.KEY_UP, I=>{
      C()
    }), ei(g.inputElement, ir.BLUR, async()=>{
      for(;
      ;
      ){
        await Af(0);
        const I=g.inputElement.ownerDocument;
        if(!I.hasFocus())break;
        if(zP(g.inputElement))return;
        if(wf(I.activeElement)&&sFo(I.activeElement,"context-view"))await In.toPromise(this.contextMenuService.onDidHideContextMenu);
        else break
      }
      w(g.isInputValid(),!0)
    }), r];
    return $i(()=>{
      w(!1,!1)
    })
  }
  disposeElement(e, t, i){
    i.currentContext=void 0, i.elementDisposables.clear()
  }
  disposeCompressedElements(e, t, i){
    i.currentContext=void 0, i.elementDisposables.clear()
  }
  disposeTemplate(e){
    e.templateDisposables.dispose()
  }
  getCompressedNavigationController(e){
    return this.compressedNavigationControllers.get(e)
  }
  getAriaLabel(e){
    return e.name
  }
  getAriaLevel(e){
    let t=0, i=e.parent;
    for(;
    i;
    )i=i.parent, t++;
    return this.contextService.getWorkbenchState()===3&&(t=t+1), t
  }
  getActiveDescendantId(e){
    return this.compressedNavigationControllers.get(e)?.[0]?.currentId??void 0
  }
  dispose(){
    this.configListener.dispose()
  }
}, yCi=GAu=__decorate([__param(4, sy), __param(5, bo), __param(6, Fn), __param(7, DC), __param(8, Ol), __param(9, Lr), __param(10, kc), __param(11, ln)], yCi), dEa=class{
  constructor(e, t, i, r, s, o){
    this.contextService=e, this.configurationService=t, this.explorerService=i, this.editorService=r, this.uriIdentityService=s, this.fileService=o, this.hiddenExpressionPerRoot=new Map, this.editorsAffectingFilter=new Set, this._onDidChange=new Qe, this.toDispose=[], this.ignoreFileResourcesPerRoot=new Map, this.ignoreTreesPerRoot=new Map, this.toDispose.push(this.contextService.onDidChangeWorkspaceFolders(()=>this.updateConfiguration())), this.toDispose.push(this.configurationService.onDidChangeConfiguration(a=>{
      (a.affectsConfiguration("files.exclude")||a.affectsConfiguration("explorer.excludeGitIgnore"))&&this.updateConfiguration()
    })), this.toDispose.push(this.fileService.onDidFilesChange(a=>{
      for(const[l,u]of this.ignoreFileResourcesPerRoot.entries())u.forEach(async d=>{
        a.contains(d,0)&&await this.processIgnoreFile(l,d,!0),a.contains(d,2)&&(this.ignoreTreesPerRoot.get(l)?.delete(Td(d)),u.delete(d),this._onDidChange.fire())
      })
    })), this.toDispose.push(this.editorService.onDidVisibleEditorsChange(()=>{
      const a=this.editorService.visibleEditors;
      let l=!1;
      for(const u of a){
        if(!u.resource)continue;
        const d=this.explorerService.findClosest(u.resource);
        if(d&&d.isExcluded){
          l=!0;
          break
        }
      }
      for(const u of this.editorsAffectingFilter)if(!a.includes(u)){
        l=!0;
        break
      }
      l&&(this.editorsAffectingFilter.clear(),this._onDidChange.fire())
    })), this.updateConfiguration()
  }
  get onDidChange(){
    return this._onDidChange.event
  }
  updateConfiguration(){
    let e=!1, t=!1;
    this.contextService.getWorkspace().folders.forEach(i=>{
      const r=this.configurationService.getValue({
        resource:i.uri
      }),s=r?.files?.exclude||Object.create(null),o=r.explorer.excludeGitIgnore;
      if(o&&!this.ignoreTreesPerRoot.has(i.uri.toString())&&(t=!0,this.ignoreFileResourcesPerRoot.set(i.uri.toString(),new lT),this.ignoreTreesPerRoot.set(i.uri.toString(),MH.forUris(l=>this.uriIdentityService.extUri.ignorePathCasing(l)))),!o&&this.ignoreTreesPerRoot.has(i.uri.toString())&&(t=!0,this.ignoreFileResourcesPerRoot.delete(i.uri.toString()),this.ignoreTreesPerRoot.delete(i.uri.toString())),!e){
        const l=this.hiddenExpressionPerRoot.get(i.uri.toString());
        e=!l||!fv(l.original,s)
      }
      const a=mh(s);
      Object.assign(a,QAi),this.hiddenExpressionPerRoot.set(i.uri.toString(),{
        original:a,parsed:jae(a)
      })
    }), (e||t)&&(this.editorsAffectingFilter.clear(), this._onDidChange.fire())
  }
  async processIgnoreFile(e, t, i){
    const r=Td(t), s=this.ignoreTreesPerRoot.get(e);
    if(!s||!i&&s.has(r))return;
    const o=await this.fileService.readFile(t);
    if(i)s.get(r)?.updateContents(o.value.toString());
    else{
      const a=s.findSubstr(r),l=new OOf(o.value.toString(),r.path,a);
      s.set(r,l),this.ignoreFileResourcesPerRoot.get(e)?.has(t)||this.ignoreFileResourcesPerRoot.get(e)?.add(t)
    }
    this._onDidChange.fire()
  }
  filter(e, t){
    return e.name===".gitignore"&&this.ignoreTreesPerRoot.has(e.root.resource.toString())?(this.processIgnoreFile(e.root.resource.toString(), e.resource, !1), !0):this.isVisible(e, t)
  }
  isVisible(e, t){
    if(e.isExcluded=!1, t===0)return e.isExcluded=!0, !1;
    if(this.explorerService.getEditableData(e))return!0;
    if((this.hiddenExpressionPerRoot.get(e.root.resource.toString())?.parsed(DBe(e.root.resource.path, e.resource.path), e.name, o=>!!(e.parent&&e.parent.getChild(o)))?!0:this.isIgnored(e.resource, e.root.resource, e.isDirectory))||e.parent?.isExcluded){
      e.isExcluded=!0;
      const a=this.editorService.visibleEditors.find(l=>l.resource&&this.uriIdentityService.extUri.isEqualOrParent(l.resource,e.resource));
      return a&&e.root===this.explorerService.findClosestRoot(e.resource)?(this.editorsAffectingFilter.add(a),!0):!1
    }
    return!0
  }
  isIgnored(e, t, i){
    const s=this.ignoreTreesPerRoot.get(t.toString())?.findSubstr(e)?.isPathIncludedInTraversal(e.path, i);
    return s===void 0?!1:!s
  }
  dispose(){
    Bo(this.toDispose)
  }
}, dEa=__decorate([__param(0, Lr), __param(1, Fn), __param(2, DC), __param(3, yi), __param(4, xl), __param(5, Gr)], dEa), hEa=class{
  constructor(e, t){
    this.explorerService=e, this.contextService=t
  }
  compare(e, t){
    if(e.isRoot){
      if(t.isRoot){
        const l=this.contextService.getWorkspaceFolder(e.resource),u=this.contextService.getWorkspaceFolder(t.resource);
        return l&&u?l.index-u.index:-1
      }
      return-1
    }
    if(t.isRoot)return 1;
    const i=this.explorerService.sortOrderConfiguration.sortOrder, r=this.explorerService.sortOrderConfiguration.lexicographicOptions;
    this.explorerService.sortOrderConfiguration.reverse&&([e, t]=[t, e]);
    let o, a;
    switch(r){
      case"upper":o=_FA,a=EFA;
      break;
      case"lower":o=CFA,a=xFA;
      break;
      case"unicode":o=SFA,a=TFA;
      break;
      default:o=Pru,a=kFA
    }
    switch(i){
      case"type":if(e.isDirectory&&!t.isDirectory)return-1;
      if(t.isDirectory&&!e.isDirectory)return 1;
      if(e.isDirectory&&t.isDirectory)return o(e.name,t.name);
      break;
      case"filesFirst":if(e.isDirectory&&!t.isDirectory)return 1;
      if(t.isDirectory&&!e.isDirectory)return-1;
      break;
      case"foldersNestsFiles":if(e.isDirectory&&!t.isDirectory)return-1;
      if(t.isDirectory&&!e.isDirectory)return 1;
      if(e.hasNests&&!t.hasNests)return-1;
      if(t.hasNests&&!e.hasNests)return 1;
      break;
      case"mixed":break;
      default:if(e.isDirectory&&!t.isDirectory)return-1;
      if(t.isDirectory&&!e.isDirectory)return 1;
      break
    }
    switch(i){
      case"type":return a(e.name,t.name);
      case"modified":return e.mtime!==t.mtime?e.mtime&&t.mtime&&e.mtime<t.mtime?1:-1:o(e.name,t.name);
      default:return o(e.name,t.name)
    }
  }
}, hEa=__decorate([__param(0, DC), __param(1, Lr)], hEa), mEa=class{
  static{
    mxe=this
  }
  static{
    this.CONFIRM_DND_SETTING_KEY="explorer.confirmDragAndDrop"
  }
  constructor(e, t, i, r, s, o, a, l, u, d){
    this.isCollapsed=e, this.explorerService=t, this.editorService=i, this.dialogService=r, this.contextService=s, this.fileService=o, this.configurationService=a, this.instantiationService=l, this.workspaceEditingService=u, this.uriIdentityService=d, this.compressedDropTargetDisposable=at.None, this.disposables=new Ut, this.dropEnabled=!1;
    const m=p=>{
      (!p||p.affectsConfiguration("explorer.enableDragAndDrop"))&&(this.dropEnabled=this.configurationService.getValue("explorer.enableDragAndDrop"))
    };
    m(void 0), this.disposables.add(this.configurationService.onDidChangeConfiguration(p=>m(p)))
  }
  onDragOver(e, t, i, r, s){
    if(!this.dropEnabled)return!1;
    if(t){
      const o=mxe.getCompressedStatFromDragEvent(t,s);
      if(o){
        const a=aEa(s.target);
        if(a&&a.index<a.count-1){
          const l=this.handleDragOver(e,o,i,r,s);
          return l?(a.element!==this.compressedDragOverElement&&(this.compressedDragOverElement=a.element,this.compressedDropTargetDisposable.dispose(),this.compressedDropTargetDisposable=$i(()=>{
            a.element.classList.remove("drop-target"),this.compressedDragOverElement=void 0
          }),a.element.classList.add("drop-target")),typeof l=="boolean"?l:{
            ...l,feedback:[]
          }):(this.compressedDropTargetDisposable.dispose(),!1)
        }
      }
    }
    return this.compressedDropTargetDisposable.dispose(), this.handleDragOver(e, t, i, r, s)
  }
  handleDragOver(e, t, i, r, s){
    const o=s&&(s.ctrlKey&&!Fs||s.altKey&&Fs), a=e instanceof f3t, u={
      type:a||o?0:1,position:"drop-target"
    };
    if(a){
      if(!k9(s,fT.FILES,nM.FILES,fT.RESOURCES))return!1
    }
    else{
      if(e instanceof WIc)return!1;
      {
        const d=mxe.getStatsFromDragAndDropData(e),m=d.every(p=>p.isRoot);
        if(!t)return!o&&d.every(p=>!!p.parent&&p.parent.isRoot)?!1:m?{
          accept:!0,effect:{
            type:1,position:"drop-target-after"
          }
        }
        :{
          accept:!0,bubble:0,effect:u,autoExpand:!1
        };
        if(!Array.isArray(d)||!o&&d.every(p=>p.isReadonly)||d.some(p=>p.isRoot?!1:!!(this.uriIdentityService.extUri.isEqual(p.resource,t.resource)||!o&&this.uriIdentityService.extUri.isEqual(Td(p.resource),t.resource)||this.uriIdentityService.extUri.isEqualOrParent(t.resource,p.resource))))return!1;
        if(m){
          if(!t.isRoot)return!1;
          let p;
          switch(r){
            case 0:case 1:p="drop-target-before";
            break;
            case 2:case 3:p="drop-target-after";
            break
          }
          return{
            accept:!0,effect:{
              type:1,position:p
            }
          }
        }
      }
    }
    if(t){
      if(t.isDirectory)return t.isReadonly?!1:{
        accept:!0,bubble:0,effect:u,autoExpand:!0
      };
      if(this.contextService.getWorkspace().folders.every(d=>d.uri.toString()!==t.resource.toString()))return{
        accept:!0,bubble:1,effect:u
      }
    }
    else return{
      accept:!0,bubble:0,effect:u
    };
    return!1
  }
  getDragURI(e){
    return this.explorerService.isEditable(e)?null:e.resource.toString()
  }
  getDragLabel(e, t){
    return e.length===1?mxe.getCompressedStatFromDragEvent(e[0], t).name:String(e.length)
  }
  onDragStart(e, t){
    const i=mxe.getStatsFromDragAndDropData(e, t);
    if(i&&i.length&&t.dataTransfer){
      this.instantiationService.invokeFunction(s=>Yme(s,i,t));
      const r=i.filter(s=>s.resource.scheme===_n.file).map(s=>s.resource.fsPath);
      r.length&&t.dataTransfer.setData(nM.FILES,JSON.stringify(r))
    }
  }
  async drop(e, t, i, r, s){
    if(this.compressedDropTargetDisposable.dispose(), t){
      const a=mxe.getCompressedStatFromDragEvent(t,s);
      a&&(t=a)
    }
    if(t||(t=this.explorerService.roots[this.explorerService.roots.length-1], r=3), !t.isDirectory&&t.parent&&(t=t.parent), t.isReadonly)return;
    const o=t;
    if(o)try{
      e instanceof f3t?!Eu||iRe(this.contextService.getWorkspace())&&zde.supported(bi)?await this.instantiationService.createInstance(wka).import(o,s,bi):await this.instantiationService.createInstance(_0i).upload(t,s):await this.handleExplorerDrop(e,o,i,r,s)
    }
    catch(a){
      this.dialogService.error(Jw(a))
    }
  }
  async handleExplorerDrop(e, t, i, r, s){
    const o=mxe.getStatsFromDragAndDropData(e), a=new Map(o.map(p=>[p, this.isCollapsed(p)]));
    for(const[p, g]of a)if(g){
      const f=p.nestedChildren;
      if(f)for(const A of f)a.set(A,!0)
    }
    const l=vCc([...a.keys()], p=>p.resource), u=s.ctrlKey&&!Fs||s.altKey&&Fs;
    if(!u&&this.configurationService.getValue(mxe.CONFIRM_DND_SETTING_KEY)){
      const p=l.length>1&&l.every(A=>A.isRoot)?_(8090,null):l.length>1?_(8091,null,l.length,t.name):l[0].isRoot?_(8092,null,l[0].name):_(8093,null,l[0].name,t.name),g=l.length>1&&!l.every(A=>A.isRoot)?uve(l.map(A=>A.resource)):void 0,f=await this.dialogService.confirm({
        message:p,detail:g,checkbox:{
          label:_(8094,null)
        },primaryButton:_(8095,null)
      });
      if(!f.confirmed)return;
      f.checkboxChecked===!0&&await this.configurationService.updateValue(mxe.CONFIRM_DND_SETTING_KEY,!1)
    }
    await this.doHandleRootDrop(l.filter(p=>p.isRoot), t, r);
    const m=l.filter(p=>!p.isRoot);
    return u?this.doHandleExplorerDropOnCopy(m, t):this.doHandleExplorerDropOnMove(m, t)
  }
  async doHandleRootDrop(e, t, i){
    if(e.length===0)return;
    const r=this.contextService.getWorkspace().folders;
    let s;
    const o=[], a=[], l=[];
    for(let u=0;
    u<r.length;
    u++){
      const d={
        uri:r[u].uri,name:r[u].name
      };
      t instanceof v8&&this.uriIdentityService.extUri.isEqual(r[u].uri,t.resource)&&(s=u);
      for(const m of e)if(this.uriIdentityService.extUri.isEqual(r[u].uri,m.resource)){
        o.push(u);
        break
      }
      e.every(m=>m.resource.toString()!==r[u].uri.toString())?a.push(d):l.push(d)
    }
    if(s===void 0)s=a.length;
    else{
      switch(i){
        case 3:case 2:s++;
        break
      }
      for(const u of o)u<s&&s--
    }
    return a.splice(s, 0, ...l), this.workspaceEditingService.updateFolders(0, a.length, a)
  }
  async doHandleExplorerDropOnCopy(e, t){
    const i=this.configurationService.getValue().explorer, r=[];
    for(const{
      resource:a,isDirectory:l
    }
    of e){
      const u=i.incrementalNaming==="disabled",d=await Qfu(this.explorerService,this.fileService,this.dialogService,t,{
        resource:a,isDirectory:l,allowOverwrite:u
      },i.incrementalNaming);
      if(!d)continue;
      const m=new QR(a,d,{
        copy:!0,overwrite:u
      });
      r.push(m)
    }
    const s=qOf(e);
    await this.explorerService.applyBulkEdit(r, {
      confirmBeforeUndo:i.confirmUndo==="default"||i.confirmUndo==="verbose",undoLabel:_(8096,null,s),progressLabel:_(8097,null,s)
    });
    const o=r.filter(a=>{
      const l=a.newResource?this.explorerService.findClosest(a.newResource):void 0;
      return l&&!l.isDirectory
    }).map(a=>({
      resource:a.newResource,options:{
        pinned:!0
      }
    }));
    await this.editorService.openEditors(o)
  }
  async doHandleExplorerDropOnMove(e, t){
    const i=e.filter(o=>!o.isReadonly).map(o=>new QR(o.resource, Wo(t.resource, o.name))), r=qOf(e), s={
      confirmBeforeUndo:this.configurationService.getValue().explorer.confirmUndo==="verbose",undoLabel:_(8098,null,r),progressLabel:_(8099,null,r)
    };
    try{
      await this.explorerService.applyBulkEdit(i,s)
    }
    catch(o){
      if(o.fileOperationResult===4){
        const a=[];
        for(const d of i)d.newResource&&await this.fileService.exists(d.newResource)&&a.push(d.newResource);
        const l=hoy(a),{
          confirmed:u
        }
        =await this.dialogService.confirm(l);
        u&&await this.explorerService.applyBulkEdit(i.map(d=>new QR(d.oldResource,d.newResource,{
          overwrite:!0
        })),s)
      }
      else throw o
    }
  }
  static getStatsFromDragAndDropData(e, t){
    return e.context?e.context:t&&e.elements.length===1?(e.context=[mxe.getCompressedStatFromDragEvent(e.elements[0], t)], e.context):e.elements
  }
  static getCompressedStatFromDragEvent(e, t){
    const i=As(t).document.elementFromPoint(t.clientX, t.clientY), r=aEa(i);
    if(r){
      const{
        count:s,index:o
      }
      =r;
      let a=s-1;
      for(;
      a>o&&e.parent;
      )e=e.parent,a--;
      return e
    }
    return e
  }
  onDragEnd(){
    this.compressedDropTargetDisposable.dispose()
  }
  dispose(){
    this.compressedDropTargetDisposable.dispose()
  }
}, mEa=mxe=__decorate([__param(1, DC), __param(2, yi), __param(3, Ml), __param(4, Lr), __param(5, Gr), __param(6, Fn), __param(7, ln), __param(8, uX), __param(9, xl)], mEa), JOf=class{
  isIncompressible(n){
    return n.isRoot||!n.isDirectory||n instanceof w0i||!n.parent||n.parent.isRoot
  }
}
}
});
function hly(n){
  if(n.isRoot&&n.error)return{
    tooltip:_(8074, null, Jw(n.error)), letter:"!", color:mdh
  };
  if(n.isSymbolicLink)return{
    tooltip:_(8075, null), letter:"\u2937"
  };
  if(n.isUnknown)return{
    tooltip:_(8076, null), letter:"?"
  };
  if(n.isExcluded)return{
    color:N1c
  }
}
var pEa, mly=