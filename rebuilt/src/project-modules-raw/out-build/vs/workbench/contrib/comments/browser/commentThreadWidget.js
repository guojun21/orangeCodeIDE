// Module: out-build/vs/workbench/contrib/comments/browser/commentThreadWidget.js
// Offset: 33222016 (bundle byte offset)
// Size: 9072 bytes

Lwu(), ri(), KC(), yn(), rt(), Tg(), qwu(), cwe(), Kuy(), Yuy(), Zuy(), u2e(), Nl(), ky(), ts(), zwu(), b7e(), Ei(), tki(), Ht(), ka(), lv(), ski=class extends at{
  get commentThread(){
    return this._commentThread
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A){
    super(), this.container=e, this._parentEditor=t, this._owner=i, this._parentResourceUri=r, this._contextKeyService=s, this._scopedInstantiationService=o, this._commentThread=a, this._pendingComment=l, this._pendingEdits=u, this._markdownOptions=d, this._commentOptions=m, this._containerDelegate=p, this.commentService=g, this.configurationService=f, this._keybindingService=A, this._commentThreadDisposables=[], this._onDidResize=new Qe, this.onDidResize=this._onDidResize.event, this._threadIsEmpty=SD.commentThreadIsEmpty.bindTo(this._contextKeyService), this._threadIsEmpty.set(!a.comments||!a.comments.length), this._focusedContextKey=SD.commentFocused.bindTo(this._contextKeyService), this._commentMenus=this.commentService.getCommentMenus(this._owner), this._register(this._header=this._scopedInstantiationService.createInstance(ATa, e, {
      collapse:this._containerDelegate.collapse.bind(this)
    }, this._commentMenus, this._commentThread)), this._header.updateCommentThread(this._commentThread);
    const w=Ct(".body");
    e.appendChild(w), this._register($i(()=>w.remove()));
    const C=this._register(CC(w));
    this._register(Crt({
      name:"commentThreadWidget",focusNotifiers:[C],focusNextWidget:()=>{
        this._commentReply?.isCommentEditorFocused()||this._commentReply?.expandReplyAreaAndFocusCommentEditor()
      },focusPreviousWidget:()=>{
        this._commentReply?.isCommentEditorFocused()&&this._commentThread.comments?.length&&this._body.focus()
      }
    })), this._register(C.onDidFocus(()=>this._focusedContextKey.set(!0))), this._register(C.onDidBlur(()=>this._focusedContextKey.reset())), this._register(this.configurationService.onDidChangeConfiguration(B=>{
      B.affectsConfiguration("accessibility.verbosity.comments")&&this._setAriaLabel()
    })), this._body=this._scopedInstantiationService.createInstance(vTa, this._parentEditor, this._owner, this._parentResourceUri, w, this._markdownOptions, this._commentThread, this._pendingEdits, this._scopedInstantiationService, this), this._register(this._body), this._setAriaLabel(), this._styleElement=wC(this.container), this._commentThreadContextValue=SD.commentThreadContext.bindTo(this._contextKeyService), this._commentThreadContextValue.set(a.contextValue);
    const x=SD.commentControllerContext.bindTo(this._contextKeyService), I=this.commentService.getCommentController(this._owner);
    I?.contextValue&&x.set(I.contextValue), this.currentThreadListeners()
  }
  get hasUnsubmittedComments(){
    return!!this._commentReply?.commentEditor.getValue()||this._body.hasCommentsInEditMode()
  }
  _setAriaLabel(){
    let e=_(6015, null), t;
    const i=this.configurationService.getValue("accessibility.verbosity.comments");
    i&&(t=this._keybindingService.lookupKeybinding("editor.action.accessibilityHelp", this._contextKeyService)?.getLabel()??void 0), t?e=_(6016, null, e, t):i&&(e=_(6017, null, e)), this._body.container.ariaLabel=e
  }
  updateCurrentThread(e, t){
    e||t?this.commentService.setCurrentCommentThread(this.commentThread):this.commentService.setCurrentCommentThread(void 0)
  }
  currentThreadListeners(){
    let e=!1, t=!1;
    this._register(ei(this.container, ir.MOUSE_ENTER, i=>{
      i.toElement===this.container&&(e=!0,this.updateCurrentThread(e,t))
    }, !0)), this._register(ei(this.container, ir.MOUSE_LEAVE, i=>{
      i.fromElement===this.container&&(e=!1,this.updateCurrentThread(e,t))
    }, !0)), this._register(ei(this.container, ir.FOCUS_IN, ()=>{
      t=!0,this.updateCurrentThread(e,t)
    }, !0)), this._register(ei(this.container, ir.FOCUS_OUT, ()=>{
      t=!1,this.updateCurrentThread(e,t)
    }, !0))
  }
  async updateCommentThread(e){
    const t=this._commentThread.collapsibleState===Q$.Expanded&&this._commentThreadState===AW.Unresolved&&e.state===AW.Resolved;
    this._commentThreadState=e.state, this._commentThread=e, Bo(this._commentThreadDisposables), this._commentThreadDisposables=[], this._bindCommentThreadListeners(), await this._body.updateCommentThread(e, this._commentReply?.isCommentEditorFocused()??!1), this._threadIsEmpty.set(!this._body.length), this._header.updateCommentThread(e), this._commentReply?.updateCommentThread(e), this._commentThread.contextValue?this._commentThreadContextValue.set(this._commentThread.contextValue):this._commentThreadContextValue.reset(), t&&this.configurationService.getValue(_bn).collapseOnResolve&&this.collapse()
  }
  async display(e, t){
    const i=Math.max(23, Math.ceil(e*1.2));
    this._header.updateHeight(i), await this._body.display(), this._commentThread.canReply&&this._createCommentForm(t), this._createAdditionalActions(), this._register(this._body.onDidResize(r=>{
      this._refresh(r)
    })), this._commentThread.canReply&&this._commentReply&&this._commentReply.focusIfNeeded(), this._bindCommentThreadListeners()
  }
  _refresh(e){
    this._body.layout(), this._onDidResize.fire(e)
  }
  dispose(){
    super.dispose(), Bo(this._commentThreadDisposables), this.updateCurrentThread(!1, !1)
  }
  _bindCommentThreadListeners(){
    this._commentThreadDisposables.push(this._commentThread.onDidChangeCanReply(()=>{
      this._commentReply?this._commentReply.updateCanReply():this._commentThread.canReply&&this._createCommentForm(!1)
    })), this._commentThreadDisposables.push(this._commentThread.onDidChangeComments(async e=>{
      await this.updateCommentThread(this._commentThread)
    })), this._commentThreadDisposables.push(this._commentThread.onDidChangeLabel(e=>{
      this._header.createThreadLabel()
    }))
  }
  _createCommentForm(e){
    this._commentReply=this._scopedInstantiationService.createInstance(gTa, this._owner, this._body.container, this._parentEditor, this._commentThread, this._scopedInstantiationService, this._contextKeyService, this._commentMenus, this._commentOptions, this._pendingComment, this, e, this._containerDelegate.actionRunner), this._register(this._commentReply)
  }
  _createAdditionalActions(){
    this._additionalActions=this._scopedInstantiationService.createInstance(yTa, this._body.container, this._commentThread, this._contextKeyService, this._commentMenus, this._containerDelegate.actionRunner), this._register(this._additionalActions)
  }
  getCommentCoords(e){
    return this._body.getCommentCoords(e)
  }
  getPendingEdits(){
    return this._body.getPendingEdits()
  }
  getPendingComment(){
    if(this._commentReply)return this._commentReply.getPendingComment()
  }
  setPendingComment(e){
    this._pendingComment=e, this._commentReply?.setPendingComment(e)
  }
  getDimensions(){
    return this._body.getDimensions()
  }
  layout(e){
    this._body.layout(e), e!==void 0&&this._commentReply?.layout(e)
  }
  ensureFocusIntoNewEditingComment(){
    this._body.ensureFocusIntoNewEditingComment()
  }
  focusCommentEditor(){
    this._commentReply?.expandReplyAreaAndFocusCommentEditor()
  }
  focus(e){
    this._body.focus(e)
  }
  async submitComment(){
    const e=this._body.activeComment;
    if(e)return e.submitComment();
    if((this._commentReply?.getPendingComment()?.body.length??0)>0)return this._commentReply?.submitComment()
  }
  async collapse(){
    await this._containerDelegate.collapse()&&Zt.isIRange(this.commentThread.range)&&Ig(this._parentEditor)&&this._parentEditor.setSelection(this.commentThread.range)
  }
  applyTheme(e, t){
    const i=[];
    i.push(`.monaco-editor .review-widget > .body { border-top: 1px solid var(${Wwu}) }`), i.push(`.monaco-editor .review-widget > .head { background-color: var(${jwu}) }`);
    const r=e.getColor(PY);
    r&&i.push(`.review-widget .body .comment-body a { color: ${r} }`);
    const s=e.getColor(k4o);
    s&&i.push(`.review-widget .body .comment-body a:hover, a:active { color: ${s} }`);
    const o=e.getColor(nN);
    o&&(i.push(`.review-widget .body .comment-body a:focus { outline: 1px solid ${o}; }`), i.push(`.review-widget .body .monaco-editor.focused { outline: 1px solid ${o}; }`));
    const a=e.getColor(nuh);
    a&&i.push(`.review-widget .body .review-comment blockquote { background: ${a}; }`);
    const l=e.getColor(iuh);
    l&&i.push(`.review-widget .body .review-comment blockquote { border-color: ${l}; }`);
    const u=e.getColor(BV);
    u&&i.push(`.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item a.action-label { border-color: ${u}; }`);
    const d=e.getColor(Du);
    d&&(i.push(`.review-widget .body .comment-form .review-thread-reply-button { outline-color: ${d}; }`), i.push(`.review-widget .body .monaco-editor { outline: 1px solid ${d}; }`));
    const m=e.getColor(N4o);
    m&&i.push(`.review-widget .validation-error { border: 1px solid ${m}; }`);
    const p=e.getColor(P4o);
    p&&i.push(`.review-widget .validation-error { background: ${p}; }`);
    const g=e.getColor(L4o);
    g&&i.push(`.review-widget .body .comment-form .validation-error { color: ${g}; }`);
    const f="--comment-thread-editor-font-family", A="--comment-thread-editor-font-size", w="--comment-thread-editor-font-weight";
    this.container?.style.setProperty(f, t.fontFamily), this.container?.style.setProperty(A, `${t.fontSize}px`), this.container?.style.setProperty(w, t.fontWeight), i.push(`.review-widget .body code {
			font-family: var(${f});
			font-weight: var(${w});
		}`), this._styleElement.textContent=i.join(`
`), this._commentReply?.setCommentEditorDecorations()
  }
}, ski=__decorate([__param(12, QV), __param(13, Fn), __param(14, mo)], ski)
}
}), oki, rdy=