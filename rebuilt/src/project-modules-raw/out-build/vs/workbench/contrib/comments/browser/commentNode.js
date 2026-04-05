// Module: out-build/vs/workbench/contrib/comments/browser/commentNode.js
// Offset: 33191852 (bundle byte offset)
// Size: 16781 bytes

Ht(), ri(), Tg(), Ov(), nl(), rt(), Yn(), Wt(), cwe(), rki(), yn(), So(), wRe(), pl(), juy(), dr(), dg(), si(), Nwu(), a3t(), Rx(), jde(), qi(), Jr(), p8f(), Ei(), NSe(), zI(), z$(), u2e(), zr(), tki(), h0(), zg(), ka(), Id(), td(), tl(), g8f=class extends jD{
  async runAction(n, e){
    await n.run(...e)
  }
}, bTa=class extends at{
  get domNode(){
    return this._domNode
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x){
    super(), this.parentEditor=e, this.commentThread=t, this.comment=i, this.pendingEdit=r, this.owner=s, this.resource=o, this.parentThread=a, this.markdownRenderer=l, this.instantiationService=u, this.commentService=d, this.notificationService=m, this.contextMenuService=p, this.configurationService=f, this.hoverService=A, this.accessibilityService=w, this.keybindingService=C, this.textModelService=x, this._md=this._register(new uo), this._editAction=null, this._commentEditContainer=null, this._reactionsActionBar=this._register(new uo), this._reactionActions=this._register(new Ut), this._commentEditor=null, this._commentEditorDisposables=[], this._commentEditorModel=null, this._editorHeight=kbn, this._actionRunner=this._register(new g8f), this.toolbar=this._register(new uo), this._commentFormActions=null, this._commentEditorActions=null, this._onDidClick=new Qe, this.isEditing=!1, this._domNode=Ct("div.review-comment"), this._contextKeyService=this._register(g.createScoped(this._domNode)), this._commentContextValue=SD.commentContext.bindTo(this._contextKeyService), this.comment.contextValue&&this._commentContextValue.set(this.comment.contextValue), this._commentMenus=this.commentService.getCommentMenus(this.owner), this._domNode.tabIndex=-1, this._avatar=Rt(this._domNode, Ct("div.avatar-container")), this.updateCommentUserIcon(this.comment.userIconPath), this._commentDetailsContainer=Rt(this._domNode, Ct(".review-comment-contents")), this.createHeader(this._commentDetailsContainer), this._body=document.createElement("div"), this._body.classList.add("comment-body", USe), f.getValue(_bn)?.maxHeight!==!1&&this._body.classList.add("comment-body-max-height"), this.createScroll(this._commentDetailsContainer, this._body), this.updateCommentBody(this.comment.body), this.createReactionsContainer(this._commentDetailsContainer), this._domNode.setAttribute("aria-label", `${i.userName}, ${this.commentBodyValue}`), this._domNode.setAttribute("role", "treeitem"), this._clearTimeout=null, this._register(ei(this._domNode, ir.CLICK, ()=>this.isEditing||this._onDidClick.fire(this))), this._register(ei(this._domNode, ir.CONTEXT_MENU, I=>this.onContextMenu(I))), r&&this.switchToEditMode(), this._register(this.accessibilityService.onDidChangeScreenReaderOptimized(()=>{
      this.toggleToolbarHidden(!0)
    })), this.activeCommentListeners()
  }
  activeCommentListeners(){
    this._register(ei(this._domNode, ir.FOCUS_IN, ()=>{
      this.commentService.setActiveCommentAndThread(this.owner,{
        thread:this.commentThread,comment:this.comment
      })
    }, !0))
  }
  createScroll(e, t){
    this._scrollable=this._register(new Fde({
      forceIntegerValues:!0,smoothScrollDuration:125,scheduleAtNextAnimationFrame:r=>r_(As(e),r)
    })), this._scrollableElement=this._register(new Yft(t, {
      horizontal:3,vertical:3
    }, this._scrollable)), this._register(this._scrollableElement.onScroll(r=>{
      r.scrollLeftChanged&&(t.scrollLeft=r.scrollLeft),r.scrollTopChanged&&(t.scrollTop=r.scrollTop)
    }));
    const i=this._register(new Hg(t, "scroll")).event;
    this._register(i(r=>{
      const s=this._scrollableElement.getScrollPosition(),o=Math.abs(t.scrollLeft-s.scrollLeft)<=1?void 0:t.scrollLeft,a=Math.abs(t.scrollTop-s.scrollTop)<=1?void 0:t.scrollTop;
      (o!==void 0||a!==void 0)&&this._scrollableElement.setScrollPosition({
        scrollLeft:o,scrollTop:a
      })
    })), e.appendChild(this._scrollableElement.getDomNode())
  }
  updateCommentBody(e){
    this._body.innerText="", this._md.clear(), this._plainText=void 0, typeof e=="string"?(this._plainText=Rt(this._body, Ct(".comment-body-plainstring")), this._plainText.innerText=e):(this._md.value=this.markdownRenderer.render(e), this._body.appendChild(this._md.value.element))
  }
  updateCommentUserIcon(e){
    if(this._avatar.textContent="", e){
      const t=Rt(this._avatar,Ct("img.avatar"));
      t.src=og.uriToBrowserUri(je.revive(e)).toString(!0),t.onerror=i=>t.remove()
    }
  }
  get onDidClick(){
    return this._onDidClick.event
  }
  createTimestamp(e){
    this._timestamp=Rt(e, Ct("span.timestamp-container")), this.updateTimestamp(this.comment.timestamp)
  }
  updateTimestamp(e){
    if(!this._timestamp)return;
    const t=e!==void 0?new Date(e):void 0;
    t?this._timestampWidget?this._timestampWidget.setTimestamp(t):(this._timestampWidget=new fTa(this.configurationService, this.hoverService, this._timestamp, t), this._register(this._timestampWidget)):this._timestampWidget?.dispose()
  }
  createHeader(e){
    const t=Rt(e, Ct(`div.comment-title.${USe}`)), i=Rt(t, Ct("comment-header-info")), r=Rt(i, Ct("strong.author"));
    r.innerText=this.comment.userName, this.createTimestamp(i), this._isPendingLabel=Rt(i, Ct("span.isPending")), this.comment.label?this._isPendingLabel.innerText=this.comment.label:this._isPendingLabel.innerText="", this._actionsToolbarContainer=Rt(t, Ct(".comment-actions")), this.toggleToolbarHidden(!0), this.createActionsToolbar()
  }
  toggleToolbarHidden(e){
    e&&!this.accessibilityService.isScreenReaderOptimized()?this._actionsToolbarContainer.classList.add("hidden"):this._actionsToolbarContainer.classList.remove("hidden")
  }
  getToolbarActions(e){
    const t=e.getActions({
      shouldForwardArgs:!0
    }), s={
      primary:[],secondary:[]
    };
    return zuy(t, s, !1, o=>/^inline/.test(o)), s
  }
  get commentNodeContext(){
    return[{
      thread:this.commentThread,commentUniqueId:this.comment.uniqueIdInThread,$mid:10
    }, {
      commentControlHandle:this.commentThread.controllerHandle,commentThreadHandle:this.commentThread.commentThreadHandle,$mid:7
    }
    ]
  }
  createToolbar(){
    this.toolbar.value=new ave(this._actionsToolbarContainer, this.contextMenuService, {
      actionViewItemProvider:(e,t)=>e.id===Ebn.ID?new VH(e,e.menuActions,this.contextMenuService,{
        ...t,actionViewItemProvider:(i,r)=>this.actionViewItemProvider(i,r),classNames:["toolbar-toggle-pickReactions",...Qt.asClassNameArray(Be.reactions)],anchorAlignmentProvider:()=>1
      }):this.actionViewItemProvider(e,t),orientation:0
    }), this.toolbar.value.context=this.commentNodeContext, this.toolbar.value.actionRunner=this._actionRunner, this.registerActionBarListeners(this._actionsToolbarContainer)
  }
  createActionsToolbar(){
    const e=[], i=this.commentService.hasReactionHandler(this.owner)?this.createReactionPicker(this.comment.commentReactions||[]):void 0;
    i&&e.push(i);
    const r=this._commentMenus.getCommentTitleActions(this.comment, this._contextKeyService);
    this._register(r), this._register(r.onDidChange(a=>{
      const{
        primary:l,secondary:u
      }
      =this.getToolbarActions(r);
      !this.toolbar&&(l.length||u.length)&&this.createToolbar(),i&&l.unshift(i),this.toolbar.value.setActions(l,u)
    }));
    const{
      primary:s,secondary:o
    }
    =this.getToolbarActions(r);
    e.push(...s), (e.length||o.length)&&(this.createToolbar(), this.toolbar.value.setActions(e, o))
  }
  actionViewItemProvider(e, t){
    return e.id===Ebn.ID?t={
      label:!1,icon:!0
    }
    :t={
      label:!1,icon:!0
    }, e.id===Hwu.ID?new m8f(e):e instanceof Ub?this.instantiationService.createInstance(f2, e, {
      hoverDelegate:t.hoverDelegate
    }):e instanceof h2?this.instantiationService.createInstance(CRe, e, t):new aI({
      
    }, e, t)
  }
  async submitComment(){
    this._commentEditor&&this._commentFormActions&&(await this._commentFormActions.triggerDefaultAction(), this.pendingEdit=void 0)
  }
  createReactionPicker(e){
    const t=this._reactionActions.add(new Ebn(()=>{
      r?.show()
    }, _(5896, null)));
    let i=[];
    e&&e.length&&(i=e.map(s=>this._reactionActions.add(new Hs(`reaction.command.${s.label}`, `${s.label}`, "", !0, async()=>{
      try{
        await this.commentService.toggleReaction(this.owner,this.resource,this.commentThread,this.comment,s)
      }
      catch(o){
        const a=o.message?_(5897,null,o.message):_(5898,null);
        this.notificationService.error(a)
      }
    })))), t.menuActions=i;
    const r=this._reactionActions.add(new VH(t, t.menuActions, this.contextMenuService, {
      actionViewItemProvider:(s,o)=>s.id===Ebn.ID?r:this.actionViewItemProvider(s,o),classNames:"toolbar-toggle-pickReactions",anchorAlignmentProvider:()=>1
    }));
    return t
  }
  createReactionsContainer(e){
    this._reactionActionsContainer?.remove(), this._reactionsActionBar.clear(), this._reactionActions.clear(), this._reactionActionsContainer=Rt(e, Ct("div.comment-reactions")), this._reactionsActionBar.value=new Gf(this._reactionActionsContainer, {
      actionViewItemProvider:(i,r)=>i.id===Ebn.ID?new VH(i,i.menuActions,this.contextMenuService,{
        actionViewItemProvider:(s,o)=>this.actionViewItemProvider(s,o),classNames:["toolbar-toggle-pickReactions",...Qt.asClassNameArray(Be.reactions)],anchorAlignmentProvider:()=>1
      }):this.actionViewItemProvider(i,r)
    });
    const t=this.commentService.hasReactionHandler(this.owner);
    if(this.comment.commentReactions?.filter(i=>!!i.count).map(i=>{
      const r=this._reactionActions.add(new Hwu(`reaction.${i.label}`,`${i.label}`,i.hasReacted&&(i.canEdit||t)?"active":"",i.canEdit||t,async()=>{
        try{
          await this.commentService.toggleReaction(this.owner,this.resource,this.commentThread,this.comment,i)
        }
        catch(s){
          let o;
          i.hasReacted?o=s.message?_(5899,null,s.message):_(5900,null):o=s.message?_(5901,null,s.message):_(5902,null),this.notificationService.error(o)
        }
      },i.reactors,i.iconPath,i.count));
      this._reactionsActionBar.value?.push(r,{
        label:!0,icon:!0
      })
    }), t){
      const i=this.createReactionPicker(this.comment.commentReactions||[]);
      this._reactionsActionBar.value?.push(i,{
        label:!1,icon:!0
      })
    }
  }
  get commentBodyValue(){
    return typeof this.comment.body=="string"?this.comment.body:this.comment.body.value
  }
  async createCommentEditor(e){
    const t=Rt(e, Ct(".edit-textarea"));
    this._commentEditor=this.instantiationService.createInstance(d2e, t, d2e.getEditorOptions(this.configurationService), this._contextKeyService, this.parentThread);
    const i=je.from({
      scheme:_n.commentsInput,path:`/commentinput-${this.comment.uniqueIdInThread}-${Date.now()}.md`
    }), r=await this.textModelService.createModelReference(i);
    if(this._commentEditorModel=r, this._commentEditor.setModel(this._commentEditorModel.object.textEditorModel), this._commentEditor.setValue(this.pendingEdit?.body??this.commentBodyValue), this.pendingEdit)this._commentEditor.setPosition(this.pendingEdit.cursor);
    else{
      const o=this._commentEditorModel.object.textEditorModel.getLineCount(),a=this._commentEditorModel.object.textEditorModel.getLineLength(o)+1;
      this._commentEditor.setPosition(new ar(o,a))
    }
    this.pendingEdit=void 0, this._commentEditor.layout({
      width:t.clientWidth-14,height:this._editorHeight
    }), this._commentEditor.focus(), r_(As(e), ()=>{
      this._commentEditor.layout({
        width:t.clientWidth-14,height:this._editorHeight
      }),this._commentEditor.focus()
    });
    const s=this.commentThread;
    s.input={
      uri:this._commentEditor.getModel().uri,value:this.commentBodyValue
    }, this.commentService.setActiveEditingCommentThread(s), this.commentService.setActiveCommentAndThread(this.owner, {
      thread:s,comment:this.comment
    }), this._commentEditorDisposables.push(this._commentEditor.onDidFocusEditorWidget(()=>{
      s.input={
        uri:this._commentEditor.getModel().uri,value:this.commentBodyValue
      },this.commentService.setActiveEditingCommentThread(s),this.commentService.setActiveCommentAndThread(this.owner,{
        thread:s,comment:this.comment
      })
    })), this._commentEditorDisposables.push(this._commentEditor.onDidChangeModelContent(o=>{
      if(s.input&&this._commentEditor&&this._commentEditor.getModel().uri===s.input.uri){
        const a=this._commentEditor.getValue();
        if(a!==s.input.value){
          const l=s.input;
          l.value=a,s.input=l,this.commentService.setActiveEditingCommentThread(s),this.commentService.setActiveCommentAndThread(this.owner,{
            thread:s,comment:this.comment
          })
        }
      }
    })), this.calculateEditorHeight(), this._register(this._commentEditorModel.object.textEditorModel.onDidChangeContent(()=>{
      this._commentEditor&&this.calculateEditorHeight()&&(this._commentEditor.layout({
        height:this._editorHeight,width:this._commentEditor.getLayoutInfo().width
      }),this._commentEditor.render(!0))
    })), this._register(this._commentEditor), this._register(this._commentEditorModel)
  }
  calculateEditorHeight(){
    if(this._commentEditor){
      const e=u8f(this.parentEditor,this._commentEditor,this._editorHeight);
      if(e!==this._editorHeight)return this._editorHeight=e,!0
    }
    return!1
  }
  getPendingEdit(){
    const e=this._commentEditor?.getModel();
    if(this._commentEditor&&e&&e.getValueLength()>0)return{
      body:e.getValue(),cursor:this._commentEditor.getPosition()
    }
  }
  removeCommentEditor(){
    this.isEditing=!1, this._editAction&&(this._editAction.enabled=!0), this._body.classList.remove("hidden"), this._commentEditorModel?.dispose(), Bo(this._commentEditorDisposables), this._commentEditorDisposables=[], this._commentEditor?.dispose(), this._commentEditor=null, this._commentEditContainer.remove()
  }
  layout(e){
    const t=e!==void 0?e-72:this._commentEditor?.getLayoutInfo().width??0;
    this._commentEditor?.layout({
      width:t,height:this._editorHeight
    });
    const i=this._body.scrollWidth, r=KFn(this._body), s=this._body.scrollHeight, o=QSc(this._body)+4;
    this._scrollableElement.setScrollDimensions({
      width:r,scrollWidth:i,height:o,scrollHeight:s
    })
  }
  async switchToEditMode(){
    if(this.isEditing)return;
    this.isEditing=!0, this._body.classList.add("hidden"), this._commentEditContainer=Rt(this._commentDetailsContainer, Ct(".edit-container")), await this.createCommentEditor(this._commentEditContainer);
    const e=Rt(this._commentEditContainer, Ct(".form-actions")), t=Rt(e, Ct(".other-actions"));
    this.createCommentWidgetFormActions(t);
    const i=Rt(e, Ct(".editor-actions"));
    this.createCommentWidgetEditorActions(i)
  }
  createCommentWidgetFormActions(e){
    const i=this.commentService.getCommentMenus(this.owner).getCommentActions(this.comment, this._contextKeyService);
    this._register(i), this._register(i.onDidChange(()=>{
      this._commentFormActions?.setActions(i)
    })), this._commentFormActions=new Sbn(this.keybindingService, this._contextKeyService, this.contextMenuService, e, r=>{
      const s=this._commentEditor.getValue();
      r.run({
        thread:this.commentThread,commentUniqueId:this.comment.uniqueIdInThread,text:s,$mid:11
      }),this.removeCommentEditor()
    }), this._register(this._commentFormActions), this._commentFormActions.setActions(i)
  }
  createCommentWidgetEditorActions(e){
    const i=this.commentService.getCommentMenus(this.owner).getCommentEditorActions(this._contextKeyService);
    this._register(i), this._register(i.onDidChange(()=>{
      this._commentEditorActions?.setActions(i,!0)
    })), this._commentEditorActions=new Sbn(this.keybindingService, this._contextKeyService, this.contextMenuService, e, r=>{
      const s=this._commentEditor.getValue();
      r.run({
        thread:this.commentThread,commentUniqueId:this.comment.uniqueIdInThread,text:s,$mid:11
      }),this._commentEditor?.focus()
    }), this._register(this._commentEditorActions), this._commentEditorActions.setActions(i, !0)
  }
  setFocus(e, t=!1){
    e?(this._domNode.focus(), this.toggleToolbarHidden(!1), this._actionsToolbarContainer.classList.add("tabfocused"), this._domNode.tabIndex=0, this.comment.mode===NOt.Editing&&this._commentEditor?.focus()):(this._actionsToolbarContainer.classList.contains("tabfocused")&&!this._actionsToolbarContainer.classList.contains("mouseover")&&(this.toggleToolbarHidden(!0), this._domNode.tabIndex=-1), this._actionsToolbarContainer.classList.remove("tabfocused"))
  }
  registerActionBarListeners(e){
    this._register(ei(this._domNode, "mouseenter", ()=>{
      this.toggleToolbarHidden(!1),e.classList.add("mouseover")
    })), this._register(ei(this._domNode, "mouseleave", ()=>{
      e.classList.contains("mouseover")&&!e.classList.contains("tabfocused")&&this.toggleToolbarHidden(!0),e.classList.remove("mouseover")
    }))
  }
  async update(e){
    e.body!==this.comment.body&&this.updateCommentBody(e.body), this.comment.userIconPath&&e.userIconPath&&je.from(this.comment.userIconPath).toString()!==je.from(e.userIconPath).toString()&&this.updateCommentUserIcon(e.userIconPath);
    const t=e.mode!==void 0&&e.mode!==this.comment.mode;
    this.comment=e, t&&(e.mode===NOt.Editing?await this.switchToEditMode():this.removeCommentEditor()), e.label?this._isPendingLabel.innerText=e.label:this._isPendingLabel.innerText="", this.createReactionsContainer(this._commentDetailsContainer), this.comment.contextValue?this._commentContextValue.set(this.comment.contextValue):this._commentContextValue.reset(), this.comment.timestamp&&this.updateTimestamp(this.comment.timestamp)
  }
  onContextMenu(e){
    const t=new yy(As(this._domNode), e);
    this.contextMenuService.showContextMenu({
      getAnchor:()=>t,menuId:st.CommentThreadCommentContext,menuActionOptions:{
        shouldForwardArgs:!0
      },contextKeyService:this._contextKeyService,actionRunner:this._actionRunner,getActionsContext:()=>this.commentNodeContext
    })
  }
  focus(){
    this.domNode.focus(), this._clearTimeout||(this.domNode.classList.add("focus"), this._clearTimeout=setTimeout(()=>{
      this.domNode.classList.remove("focus")
    }, 3e3))
  }
  dispose(){
    super.dispose(), Bo(this._commentEditorDisposables)
  }
}, bTa=__decorate([__param(8, ln), __param(9, QV), __param(10, ms), __param(11, kc), __param(12, wi), __param(13, Fn), __param(14, Kc), __param(15, Cf), __param(16, mo), __param(17, El)], bTa)
}
}), vTa, Kuy=