// Module: out-build/vs/workbench/contrib/chat/browser/chatInputPart.js
// Offset: 32563618 (bundle byte offset)
// Size: 35146 bytes

ri(), ri(), Zft(), Tb(), Rx(), Ew(), fk(), mb(), bS(), nl(), Po(), qi(), yn(), Tun(), rt(), cu(), _r(), Yn(), Cu(), VI(), pk(), ts(), hd(), td(), IRe(), ACt(), GAe(), git(), I_i(), Tq(), Ht(), zg(), x9e(), QEf(), Ery(), Snt(), dg(), vT(), dr(), hs(), Ei(), si(), pl(), ns(), WAe(), Wt(), E_(), ka(), Pd(), jr(), So(), kr(), Pa(), Io(), bCa(), zF(), fit(), ss(), Bqe(), hR(), _E(), Yau(), Nme(), xS(), x_i(), hcu(), SS(), $Ca(), $_i(), cIf(), asy(), lsy(), $If(), UIf(), nly(), kCi(), _ly(), egu(), Cly(), Sly(), r3f(), a3f(), l3f(), zgn(), nrt=Ct, eyu=250, QJ=class extends at{
  static{
    xEa=this
  }
  static{
    this.INPUT_SCHEME="chatSessionInput"
  }
  static{
    this._counter=0
  }
  get attachmentModel(){
    return this._attachmentModel
  }
  getAttachedAndImplicitContext(e){
    const t=[...this.attachmentModel.attachments];
    this.implicitContext?.enabled&&this.implicitContext.value&&t.push(this.implicitContext.toBaseEntry());
    const i=this.variableService.getDynamicVariables(e);
    for(const r of i)r instanceof Z1t&&t.push(...r.allValidReferences.map(s=>PSa(s, !1)));
    return t.push(...this.instructionAttachmentsPart.chatAttachments), t
  }
  get hasInstructionAttachments(){
    return!this.instructionAttachmentsPart.empty
  }
  get implicitContext(){
    return this._implicitContext
  }
  get relatedFiles(){
    return this._relatedFiles
  }
  get inputPartHeight(){
    return this._inputPartHeight
  }
  get followupsHeight(){
    return this._followupsHeight
  }
  get editSessionWidgetHeight(){
    return this._editSessionWidgetHeight
  }
  get inputEditor(){
    return this._inputEditor
  }
  get currentLanguageModel(){
    return this._currentLanguageModel?.identifier
  }
  get currentMode(){
    return this.location===zh.Panel&&!this.chatService.unifiedViewEnabled?iA.Ask:this._currentMode===iA.Agent&&!this.agentService.hasToolsAgent?iA.Edit:this._currentMode
  }
  get selectedElements(){
    const e=[], i=this._chatEditList?.object?.getSelectedElements()??[];
    for(const r of i)r.kind==="reference"&&je.isUri(r.reference)&&e.push(r.reference);
    return e
  }
  get attemptedWorkingSetEntriesCount(){
    return this._attemptedWorkingSetEntriesCount
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O){
    super(), this.location=e, this.options=t, this.historyService=s, this.modelService=o, this.instantiationService=a, this.contextKeyService=l, this.configurationService=u, this.keybindingService=d, this.accessibilityService=m, this.languageModelsService=p, this.logService=g, this.fileService=f, this.editorService=A, this.themeService=w, this.textModelResolverService=C, this.storageService=x, this.labelService=I, this.variableService=B, this.agentService=R, this.chatService=N, this.sharedWebExtracterService=M, this.experimentService=O, this._onDidLoadInputState=this._register(new Qe), this.onDidLoadInputState=this._onDidLoadInputState.event, this._onDidChangeHeight=this._register(new Qe), this.onDidChangeHeight=this._onDidChangeHeight.event, this._onDidFocus=this._register(new Qe), this.onDidFocus=this._onDidFocus.event, this._onDidBlur=this._register(new Qe), this.onDidBlur=this._onDidBlur.event, this._onDidChangeContext=this._register(new Qe), this.onDidChangeContext=this._onDidChangeContext.event, this._onDidAcceptFollowup=this._register(new Qe), this.onDidAcceptFollowup=this._onDidAcceptFollowup.event, this._indexOfLastAttachedContextDeletedWithKeyboard=-1, this._onDidChangeVisibility=this._register(new Qe), this.inputEditorHeight=0, this.followupsDisposables=this._register(new Ut), this.attachedContextDisposables=this._register(new uo), this._inputPartHeight=0, this._followupsHeight=0, this._editSessionWidgetHeight=0, this._waitForPersistedLanguageModel=this._register(new uo), this._onDidChangeCurrentLanguageModel=this._register(new Qe), this._onDidChangeCurrentChatMode=this._register(new Qe), this.onDidChangeCurrentChatMode=this._onDidChangeCurrentChatMode.event, this._currentMode=iA.Ask, this.inputUri=je.parse(`${xEa.INPUT_SCHEME}:input-${xEa._counter++}`), this._chatEditsActionsDisposables=this._register(new Ut), this._chatEditsDisposables=this._register(new Ut), this._attemptedWorkingSetEntriesCount=0, this._contextResourceLabels=this.instantiationService.createInstance(c5, {
      onDidChangeVisibility:this._onDidChangeVisibility.event
    }), this._attachmentModel=this._register(this.instantiationService.createInstance(NSa)), this.selectedToolsModel=this._register(this.instantiationService.createInstance(kEa)), this.dnd=this._register(this.instantiationService.createInstance(_Ea, this._attachmentModel, i)), this.getInputState=()=>({
      ...r(),chatContextAttachments:this._attachmentModel.attachments,chatMode:this._currentMode
    }), this.inputEditorMaxHeight=this.options.renderStyle==="compact"?eyu/3:eyu, this.inputEditorHasText=qa.inputHasText.bindTo(l), this.chatCursorAtTop=qa.inputCursorAtTop.bindTo(l), this.inputEditorHasFocus=qa.inputHasFocus.bindTo(l), this.promptInstructionsAttached=qa.instructionsAttached.bindTo(l), this.chatMode=qa.chatMode.bindTo(l), this.history=this.loadHistory(), this._register(this.historyService.onDidClearHistory(()=>this.history=new Tet([{
      text:""
    }
    ], dcu, tyu))), this._register(this.configurationService.onDidChangeConfiguration($=>{
      $.affectsConfiguration("accessibility.verbosity.panelChat")&&this.inputEditor.updateOptions({
        ariaLabel:this._getAriaLabel()
      })
    })), this._chatEditsListPool=this._register(this.instantiationService.createInstance(CCi, this._onDidChangeVisibility.event, st.ChatEditingWidgetModifiedFilesToolbar)), this._hasFileAttachmentContextKey=qa.hasFileAttachments.bindTo(l), this.instructionAttachmentsPart=this._register(a.createInstance(uSa, this.attachmentModel.promptInstructions, this._contextResourceLabels)), this.instructionAttachmentsPart.onAttachmentsCountChange(()=>{
      this._onDidChangeHeight.fire()
    }), this.initSelectedModel()
  }
  getSelectedModelStorageKey(){
    return`chat.currentLanguageModel.${this.location}`
  }
  initSelectedModel(){
    const e=this.storageService.get(this.getSelectedModelStorageKey(), -1);
    if(e){
      const t=this.languageModelsService.lookupLanguageModel(e);
      t?(this.setCurrentLanguageModel({
        metadata:t,identifier:e
      }),this.checkModelSupported()):this._waitForPersistedLanguageModel.value=this.languageModelsService.onDidChangeLanguageModels(i=>{
        const r=i.added?.find(s=>s.identifier===e);
        r&&(this._waitForPersistedLanguageModel.clear(),r.metadata.isUserSelectable&&(this.setCurrentLanguageModel({
          metadata:r.metadata,identifier:e
        }),this.checkModelSupported()))
      })
    }
    this._register(this._onDidChangeCurrentChatMode.event(()=>{
      this.checkModelSupported()
    })), this._register(this.configurationService.onDidChangeConfiguration(t=>{
      t.affectsConfiguration(CV.Edits2Enabled)&&this.checkModelSupported()
    }))
  }
  switchToNextModel(){
    const e=this.getModels();
    if(e.length>0){
      const i=(e.findIndex(r=>r.identifier===this._currentLanguageModel?.identifier)+1)%e.length;
      this.setCurrentLanguageModel(e[i])
    }
  }
  checkModelSupported(){
    this._currentLanguageModel&&!this.modelSupportedForDefaultAgent(this._currentLanguageModel)&&this.setCurrentLanguageModelToDefault()
  }
  setChatMode(e){
    this.options.supportsChangingModes&&(e=Qau(e)??(this.location===zh.Panel?iA.Ask:iA.Edit), this._currentMode=e, this.chatMode.set(e), this._onDidChangeCurrentChatMode.fire())
  }
  modelSupportedForDefaultAgent(e){
    return this.currentMode===iA.Agent||this.currentMode===iA.Edit&&this.configurationService.getValue(CV.Edits2Enabled)?this.configurationService.getValue("chat.agent.allModels")?!0:(typeof e.metadata.capabilities?.agentMode>"u"||e.metadata.capabilities.agentMode)&&!!e.metadata.capabilities?.toolCalling:!0
  }
  getModels(){
    const e=this.languageModelsService.getLanguageModelIds().map(t=>({
      identifier:t,metadata:this.languageModelsService.lookupLanguageModel(t)
    })).filter(t=>t.metadata?.isUserSelectable&&this.modelSupportedForDefaultAgent(t));
    return e.sort((t, i)=>t.metadata.name.localeCompare(i.metadata.name)), e
  }
  setCurrentLanguageModelToDefault(){
    const e=this.languageModelsService.getLanguageModelIds().find(r=>this.languageModelsService.lookupLanguageModel(r)?.isDefault), i=this.languageModelsService.getLanguageModelIds().find(r=>{
      const s=this.languageModelsService.lookupLanguageModel(r);
      return s?.isUserSelectable&&!s.isDefault
    })&&e?{
      metadata:this.languageModelsService.lookupLanguageModel(e),identifier:e
    }
    :void 0;
    i&&this.setCurrentLanguageModel(i)
  }
  setCurrentLanguageModel(e){
    this._currentLanguageModel=e, this.cachedDimensions&&this.layout(this.cachedDimensions.height, this.cachedDimensions.width), this.storageService.store(this.getSelectedModelStorageKey(), e.identifier, -1, 0), this._onDidChangeCurrentLanguageModel.fire(e)
  }
  loadHistory(){
    const e=this.historyService.getHistory(this.location);
    return e.length===0&&e.push({
      text:""
    }), new Tet(e, 50, tyu)
  }
  _getAriaLabel(){
    if(this.configurationService.getValue("accessibility.verbosity.panelChat")){
      const t=this.keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getLabel();
      return t?_(5352,null,t):_(5353,null)
    }
    return _(5354, null)
  }
  initForNewChatModel(e, t){
    this.history=this.loadHistory(), this.history.add({
      text:e.inputValue??this.history.current().text,state:e.inputState??this.getInputState()
    });
    const i=e.inputState?.chatContextAttachments??[];
    if(this._attachmentModel.clearAndSetContext(...i), e.inputValue&&this.setValue(e.inputValue, !1), e.inputState?.chatMode?this.setChatMode(e.inputState.chatMode):this.location===zh.EditingSession&&this.setChatMode(iA.Edit), t){
      const r=this.getDefaultModeExperimentStorageKey();
      this.storageService.getBoolean(r,1,!1)||Promise.all([this.experimentService.getTreatment("chat.defaultMode"),this.experimentService.getTreatment("chat.defaultLanguageModel")]).then(([o,a])=>{
        if(typeof o=="string"){
          this.storageService.store(r,!0,1,1);
          const l=Qau(o);
          l&&(this.logService.trace(`Applying default mode from experiment: ${l}`),this.setChatMode(l),this.checkModelSupported())
        }
        typeof a=="string"&&this._currentMode===iA.Agent&&(this.storageService.store(r,!0,1,1),this.logService.trace(`Applying default language model from experiment: ${a}`),this.setExpModelOrWait(a))
      })
    }
  }
  setExpModelOrWait(e){
    const t=this.languageModelsService.lookupLanguageModel(e);
    t?(this.setCurrentLanguageModel({
      metadata:t,identifier:e
    }), this.checkModelSupported(), this._waitForPersistedLanguageModel.clear()):this._waitForPersistedLanguageModel.value=this.languageModelsService.onDidChangeLanguageModels(i=>{
      const r=i.added?.find(s=>s.identifier===e);
      r&&(this._waitForPersistedLanguageModel.clear(),r.metadata.isUserSelectable&&(this.setCurrentLanguageModel({
        metadata:r.metadata,identifier:e
      }),this.checkModelSupported()))
    })
  }
  getDefaultModeExperimentStorageKey(){
    return`chat.${this.options.widgetViewKindTag}.hasSetDefaultModeByExperiment`
  }
  logInputHistory(){
    const e=[...this.history].map(t=>JSON.stringify(t)).join(`
`);
    this.logService.info(`[${this.location}] Chat input history:`, e)
  }
  setVisible(e){
    this._onDidChangeVisibility.fire(e)
  }
  get element(){
    return this.container
  }
  async showPreviousValue(){
    const e=this.getInputState();
    if(this.history.isAtEnd())this.saveCurrentValue(e);
    else{
      const t=this.getFilteredEntry(this._inputEditor.getValue(),e);
      this.history.has(t)||(this.saveCurrentValue(e),this.history.resetCursor())
    }
    this.navigateHistory(!0)
  }
  async showNextValue(){
    const e=this.getInputState();
    if(!this.history.isAtEnd()){
      {
        const t=this.getFilteredEntry(this._inputEditor.getValue(),e);
        this.history.has(t)||(this.saveCurrentValue(e),this.history.resetCursor())
      }
      this.navigateHistory(!1)
    }
  }
  async navigateHistory(e){
    const t=e?this.history.previous():this.history.next();
    let i=t.state?.chatContextAttachments??[];
    i.length>0&&(i=(await Promise.all(i.map(async s=>{
      if(s.isImage&&s.references?.length&&je.isUri(s.references[0].reference)){
        const o=s.references[0].reference;
        try{
          const a=o.toString(!0).startsWith("http")?await this.sharedWebExtracterService.readImage(o,Cs.None):(await this.fileService.readFile(o)).value;
          if(!a)return;
          const l={
            ...s
          };
          return l.value=otf(s)&&s.isPasted?a.buffer:await kit(a.buffer),l
        }
        catch(a){
          this.logService.error("Failed to fetch and reference.",a);
          return
        }
      }
      return s
    }))).filter(s=>s!==void 0)), this._attachmentModel.clearAndSetContext(...i), Ex(t.text), this.setValue(t.text, !0), this._onDidLoadInputState.fire(t.state);
    const r=this._inputEditor.getModel();
    if(r)if(e){
      const s=this._inputEditor._getViewModel()?.getLineLength(1)??1,o=r.getLineLength(1);
      s===o?this._inputEditor.setPosition({
        lineNumber:1,column:s+1
      }):this._inputEditor.setPosition({
        lineNumber:1,column:s
      })
    }
    else this._inputEditor.setPosition(u3f(r))
  }
  setValue(e, t){
    this.inputEditor.setValue(e), this.inputEditor.setPosition({
      lineNumber:1,column:e.length+1
    }), t||this.saveCurrentValue(this.getInputState())
  }
  saveCurrentValue(e){
    const t=this.getFilteredEntry(this._inputEditor.getValue(), e);
    this.history.replaceLast(t)
  }
  focus(){
    this._inputEditor.focus()
  }
  hasFocus(){
    return this._inputEditor.hasWidgetFocus()
  }
  async acceptInput(e){
    if(e){
      const t=this._inputEditor.getValue(),i=this.getInputState(),r=this.getFilteredEntry(t,i);
      this.history.replaceLast(r),this.history.add({
        text:""
      })
    }
    this.attachmentModel.clear(), this._onDidLoadInputState.fire({
      
    }), this.accessibilityService.isScreenReaderOptimized()&&Fs?this._acceptInputForVoiceover():(this._inputEditor.focus(), this._inputEditor.setValue(""))
  }
  validateCurrentMode(){
    !this.agentService.hasToolsAgent&&this._currentMode===iA.Agent&&this.setChatMode(iA.Edit)
  }
  getFilteredEntry(e, t){
    const i=t.chatContextAttachments?.map(s=>{
      if(s.isImage&&s.references?.length&&s.value){
        const o={
          ...s
        };
        return o.value=void 0,o
      }
      return s
    });
    return t.chatContextAttachments=i, {
      text:e,state:t
    }
  }
  _acceptInputForVoiceover(){
    const e=this._inputEditor.getDomNode();
    e&&(e.remove(), this._inputEditor.setValue(""), this._inputEditorElement.appendChild(e), this._inputEditor.focus())
  }
  _handleAttachedContextChange(){
    this._hasFileAttachmentContextKey.set(!!this._attachmentModel.attachments.find(e=>e.isFile)), this.renderAttachedContext()
  }
  render(e, t, i){
    let r;
    this.options.renderStyle==="compact"?r=kl(".interactive-input-part", [kl(".interactive-input-and-edit-session", [kl(".chat-editing-session@chatEditingSessionWidgetContainer"), kl(".interactive-input-and-side-toolbar@inputAndSideToolbar", [kl(".chat-input-container@inputContainer", [kl(".chat-editor-container@editorContainer"), kl(".chat-input-toolbars@inputToolbars")])]), kl(".chat-attachments-container@attachmentsContainer", [kl(".chat-attachment-toolbar@attachmentToolbar"), kl(".chat-attached-context@attachedContextContainer"), kl(".chat-related-files@relatedFilesContainer")]), kl(".interactive-input-followups@followupsContainer")])]):r=kl(".interactive-input-part", [kl(".interactive-input-followups@followupsContainer"), kl(".chat-editing-session@chatEditingSessionWidgetContainer"), kl(".interactive-input-and-side-toolbar@inputAndSideToolbar", [kl(".chat-input-container@inputContainer", [kl(".chat-attachments-container@attachmentsContainer", [kl(".chat-attachment-toolbar@attachmentToolbar"), kl(".chat-related-files@relatedFilesContainer"), kl(".chat-attached-context@attachedContextContainer")]), kl(".chat-editor-container@editorContainer"), kl(".chat-input-toolbars@inputToolbars")])])]), this.container=r.root, e.append(this.container), this.container.classList.toggle("compact", this.options.renderStyle==="compact"), this.followupsContainer=r.followupsContainer;
    const s=r.inputAndSideToolbar, o=r.inputContainer, a=r.editorContainer;
    this.attachmentsContainer=r.attachmentsContainer, this.attachedContextContainer=r.attachedContextContainer, this.relatedFilesContainer=r.relatedFilesContainer;
    const l=r.inputToolbars, u=r.attachmentToolbar;
    this.chatEditingSessionWidgetContainer=r.chatEditingSessionWidgetContainer, this.options.enableImplicitContext&&(this._implicitContext=this._register(new o3f), this._register(this._implicitContext.onDidChangeValue(()=>this._handleAttachedContextChange()))), this.renderAttachedContext(), this._register(this._attachmentModel.onDidChangeContext(()=>this._handleAttachedContextChange())), this.renderChatEditingSessionState(null), this.options.renderWorkingSet&&(this._relatedFiles=this._register(new c3f), this._register(this._relatedFiles.onDidChange(()=>this.renderChatRelatedFiles()))), this.renderChatRelatedFiles(), this.dnd.addOverlay(e, e);
    const d=this._register(this.contextKeyService.createScoped(o));
    qa.inChatInput.bindTo(d).set(!0);
    const m=this._register(this.instantiationService.createChild(new EA([wi, d]))), {
      historyNavigationBackwardsEnablement:p,historyNavigationForwardsEnablement:g
    }
    =this._register(CCt(d, this));
    this.historyNavigationBackwardsEnablement=p, this.historyNavigationForewardsEnablement=g;
    const f=MMe(this.configurationService);
    f.overflowWidgetsDomNode=this.options.editorOverflowWidgetsDomNode, f.pasteAs=oz.pasteAs.defaultValue, f.readOnly=!1, f.ariaLabel=this._getAriaLabel(), f.fontFamily=c3t, f.fontSize=13, f.lineHeight=20, f.padding=this.options.renderStyle==="compact"?{
      top:2,bottom:2
    }
    :{
      top:8,bottom:8
    }, f.cursorWidth=1, f.wrappingStrategy="advanced", f.bracketPairColorization={
      enabled:!1
    }, f.suggest={
      showIcons:!0,showSnippets:!1,showWords:!0,showStatusBar:!1,insertMode:"replace"
    }, f.scrollbar={
      ...f.scrollbar??{
        
      },vertical:"hidden"
    }, f.stickyScroll={
      enabled:!1
    }, this._inputEditorElement=Rt(a, nrt(nyu));
    const A=Vpu();
    A.contributions?.push(...SC.getSomeEditorContributions([ex.ID, IQ.ID, ZH.ID, DMe.ID])), this._inputEditor=this._register(m.createInstance(WS, this._inputEditorElement, f, A)), aR.get(this._inputEditor)?.forceRenderingAbove(), f.overflowWidgetsDomNode?.classList.add("hideSuggestTextIcons"), this._inputEditorElement.classList.add("hideSuggestTextIcons"), this._register(this._inputEditor.onDidChangeModelContent(()=>{
      const I=Math.min(this._inputEditor.getContentHeight(),this.inputEditorMaxHeight);
      I!==this.inputEditorHeight&&(this.inputEditorHeight=I,this._onDidChangeHeight.fire());
      const B=this._inputEditor.getModel(),R=!!B&&B.getValue().trim().length>0;
      this.inputEditorHasText.set(R)
    })), this._register(this._inputEditor.onDidContentSizeChange(I=>{
      I.contentHeightChanged&&(this.inputEditorHeight=I.contentHeight,this._onDidChangeHeight.fire())
    })), this._register(this._inputEditor.onDidFocusEditorText(()=>{
      this.inputEditorHasFocus.set(!0),this._onDidFocus.fire(),o.classList.toggle("focused",!0)
    })), this._register(this._inputEditor.onDidBlurEditorText(()=>{
      this.inputEditorHasFocus.set(!1),o.classList.toggle("focused",!1),this._onDidBlur.fire()
    })), this._register(this._inputEditor.onDidBlurEditorWidget(()=>{
      ZH.get(this._inputEditor)?.clearWidgets(),mme.get(this._inputEditor)?.clearWidgets()
    }));
    const w=this._register(F6());
    if(this._register(_f(l, ir.CLICK, I=>this.inputEditor.focus())), this._register(_f(this.attachmentsContainer, ir.CLICK, I=>this.inputEditor.focus())), this.inputActionsToolbar=this._register(this.instantiationService.createInstance(nL, l, st.ChatInput, {
      telemetrySource:this.options.menus.telemetrySource,menuOptions:{
        shouldForwardArgs:!0
      },hiddenItemStrategy:0,hoverDelegate:w
    })), this.inputActionsToolbar.context={
      widget:i
    }, this._register(this.inputActionsToolbar.onDidChangeMenuItems(()=>{
      this.cachedDimensions&&typeof this.cachedInputToolbarWidth=="number"&&this.cachedInputToolbarWidth!==this.inputActionsToolbar.getItemsWidth()&&this.layout(this.cachedDimensions.height,this.cachedDimensions.width)
    })), this.executeToolbar=this._register(this.instantiationService.createInstance(nL, l, this.options.menus.executeToolbar, {
      telemetrySource:this.options.menus.telemetrySource,menuOptions:{
        shouldForwardArgs:!0
      },hoverDelegate:w,hiddenItemStrategy:0,actionViewItemProvider:(I,B)=>{
        if((this.location===zh.Panel||this.location===zh.Editor)&&(I.id===w1t.ID||I.id===agu.ID||I.id===JCa.ID)&&I instanceof Ub){
          const R=this.instantiationService.createInstance(Ub,{
            id:"chat.moreExecuteActions",title:_(5355,null),icon:Be.chevronDown
          },void 0,void 0,void 0,void 0);
          return this.instantiationService.createInstance(TEa,I,R,{
            ...B,menuAsChild:!1
          })
        }
        if(I.id===ogu&&I instanceof Ub){
          if(this._currentLanguageModel||this.setCurrentLanguageModelToDefault(),this._currentLanguageModel){
            const R={
              onDidChangeModel:this._onDidChangeCurrentLanguageModel.event,setModel:N=>{
                this._waitForPersistedLanguageModel.clear(),this.setCurrentLanguageModel(N),this.renderAttachedContext()
              },getModels:()=>this.getModels()
            };
            return this.instantiationService.createInstance(IEa,I,this._currentLanguageModel,R)
          }
        }
        else if(I.id===sgu&&I instanceof Ub){
          const R={
            getMode:()=>this.currentMode,onDidChangeMode:this._onDidChangeCurrentChatMode.event
          };
          return this.instantiationService.createInstance(DEa,I,R)
        }
      }
    })), this.executeToolbar.getElement().classList.add("chat-execute-toolbar"), this.executeToolbar.context={
      widget:i
    }, this._register(this.executeToolbar.onDidChangeMenuItems(()=>{
      this.cachedDimensions&&typeof this.cachedExecuteToolbarWidth=="number"&&this.cachedExecuteToolbarWidth!==this.executeToolbar.getItemsWidth()&&this.layout(this.cachedDimensions.height,this.cachedDimensions.width)
    })), this.options.menus.inputSideToolbar){
      const I=this._register(this.instantiationService.createInstance(nL,s,this.options.menus.inputSideToolbar,{
        telemetrySource:this.options.menus.telemetrySource,menuOptions:{
          shouldForwardArgs:!0
        },hoverDelegate:w
      }));
      this.inputSideToolbarContainer=I.getElement(),I.getElement().classList.add("chat-side-toolbar"),I.context={
        widget:i
      }
    }
    let C=this.modelService.getModel(this.inputUri);
    if(C||(C=this.modelService.createModel("", null, this.inputUri, !0)), this.textModelResolverService.createModelReference(this.inputUri).then(I=>{
      if(this._store.isDisposed){
        I.dispose();
        return
      }
      this._register(I)
    }), this.inputModel=C, this.inputModel.updateOptions({
      bracketColorizationOptions:{
        enabled:!1,independentColorPoolPerBracketType:!1
      }
    }), this._inputEditor.setModel(this.inputModel), t){
      this.inputModel.setValue(t);
      const I=this.inputModel.getLineCount();
      this._inputEditor.setPosition({
        lineNumber:I,column:this.inputModel.getLineMaxColumn(I)
      })
    }
    const x=()=>{
      const I=this._inputEditor.getModel();
      if(!I)return;
      const B=this._inputEditor.getPosition();
      if(!B)return;
      const R=B.lineNumber===1&&B.column-1<=(this._inputEditor._getViewModel()?.getLineLength(1)??0);
      this.chatCursorAtTop.set(R),this.historyNavigationBackwardsEnablement.set(R),this.historyNavigationForewardsEnablement.set(B.equals(u3f(I)))
    };
    this._register(this._inputEditor.onDidChangeCursorPosition(I=>x())), x(), this._register(this.themeService.onDidFileIconThemeChange(()=>{
      this.renderAttachedContext()
    })), this.addFilesToolbar=this._register(this.instantiationService.createInstance(nL, u, st.ChatInputAttachmentToolbar, {
      telemetrySource:this.options.menus.telemetrySource,label:!0,menuOptions:{
        shouldForwardArgs:!0,renderShortTitle:!0
      },hiddenItemStrategy:0,hoverDelegate:w,actionViewItemProvider:(I,B)=>{
        if(I.id==="workbench.action.chat.editing.attachContext"||I.id==="workbench.action.chat.attachContext")return this.instantiationService.createInstance(d3f,void 0,I,B);
        if(I.id===aIf.id)return this.selectedToolsModel.toolsActionItemViewItemProvider(I,B)
      }
    })), this.addFilesToolbar.context={
      widget:i,placeholder:_(5356,null)
    }, this._register(this.addFilesToolbar.onDidChangeMenuItems(()=>{
      this.cachedDimensions&&this._onDidChangeHeight.fire()
    })), this._register(this.selectedToolsModel.toolsActionItemViewItemProvider.onDidRender(()=>this._onDidChangeHeight.fire()))
  }
  renderAttachedContext(){
    const e=this.attachedContextContainer, t=this.attachmentsContainer.offsetHeight, i=new Ut;
    this.attachedContextDisposables.value=i, th(e);
    const r=i.add(F6()), s=[...this.attachmentModel.attachments.entries()], o=!!s.length||!!this.implicitContext?.value||!this.instructionAttachmentsPart.empty;
    if(UBe(!!(o||this.addFilesToolbar&&!this.addFilesToolbar.isEmpty()), this.attachmentsContainer), UBe(o, this.attachedContextContainer), s.length||(this._indexOfLastAttachedContextDeletedWithKeyboard=-1), this.implicitContext?.value){
      const a=i.add(this.instantiationService.createInstance(sSa,this.implicitContext,this._contextResourceLabels));
      e.appendChild(a.domNode)
    }
    this.promptInstructionsAttached.set(!this.instructionAttachmentsPart.empty), this.instructionAttachmentsPart.render(e);
    for(const[a, l]of s){
      const u=je.isUri(l.value)?l.value:l.value&&typeof l.value=="object"&&"uri"in l.value&&je.isUri(l.value.uri)?l.value.uri:void 0,d=l.value&&typeof l.value=="object"&&"range"in l.value&&Zt.isIRange(l.value.range)?l.value.range:void 0,m=a===Math.min(this._indexOfLastAttachedContextDeletedWithKeyboard,this.attachmentModel.size-1);
      let p;
      u&&(l.isFile||l.isDirectory)?p=this.instantiationService.createInstance(nEa,u,d,l,this._currentLanguageModel,m,e,this._contextResourceLabels,r):l.isImage?p=this.instantiationService.createInstance(iEa,u,l,this._currentLanguageModel,m,e,this._contextResourceLabels,r):stf(l)?p=this.instantiationService.createInstance(rEa,l,this._currentLanguageModel,m,e,this._contextResourceLabels,r):p=this.instantiationService.createInstance(sEa,u,d,l,this._currentLanguageModel,m,e,this._contextResourceLabels,r),i.add(p),i.add(p.onDidDelete(g=>{
        this.handleAttachmentDeletion(g,a,l)
      }))
    }
    t!==this.attachmentsContainer.offsetHeight&&this._onDidChangeHeight.fire()
  }
  handleAttachmentDeletion(e, t, i){
    if(this._attachmentModel.delete(i.id), BH(e)){
      const r=new vh(e);
      (r.equals(3)||r.equals(10))&&(this._indexOfLastAttachedContextDeletedWithKeyboard=t)
    }
    this._attachmentModel.size===0&&this.focus(), this._onDidChangeContext.fire({
      removed:[i]
    })
  }
  async renderChatEditingSessionState(e){
    UBe(!!e, this.chatEditingSessionWidgetContainer);
    const t=new lT, i=e?.entries.get().map(f=>(t.add(f.modifiedURI), {
      reference:f.modifiedURI,state:f.state.get(),kind:"reference"
    }))??[];
    if(!e||!this.options.renderWorkingSet||!i.length){
      th(this.chatEditingSessionWidgetContainer),this._chatEditsDisposables.clear(),this._chatEditList=void 0;
      return
    }
    const r=this.chatEditingSessionWidgetContainer.querySelector(".chat-editing-session-container.show-file-icons")??Rt(this.chatEditingSessionWidgetContainer, nrt(".chat-editing-session-container.show-file-icons"));
    for(const f of e.entries.get())t.has(f.modifiedURI)||(i.unshift({
      reference:f.modifiedURI,state:f.state.get(),kind:"reference"
    }), t.add(f.modifiedURI));
    i.sort((f, A)=>f.kind==="reference"&&A.kind==="reference"?f.state===A.state||f.state===void 0||A.state===void 0?f.reference.toString().localeCompare(A.reference.toString()):f.state-A.state:0);
    const s=r.querySelector(".chat-editing-session-overview")??Rt(r, nrt(".chat-editing-session-overview")), o=s.querySelector(".working-set-title")??Rt(s, nrt(".working-set-title")), a=o.querySelector("span.working-set-count")??Rt(o, nrt("span.working-set-count"));
    a.textContent=i.length===1?_(5357, null):_(5358, null, i.length), o.ariaLabel=a.textContent, o.tabIndex=0, this._chatEditsActionsDisposables.clear();
    const l=s.querySelector(".chat-editing-session-actions")??Rt(s, nrt(".chat-editing-session-actions"));
    if(this._chatEditsActionsDisposables.add(this.instantiationService.createInstance(f_i, l, st.ChatEditingWidgetToolbar, {
      telemetrySource:this.options.menus.telemetrySource,menuOptions:{
        arg:{
          sessionId:e.chatSessionId
        }
      },buttonConfigProvider:f=>{
        if(f.id===Xpu.ID||f.id===Zpu.ID)return{
          showIcon:!0,showLabel:!1,isSecondary:!0
        }
      }
    })), !e)return;
    const u=r.querySelector(".chat-editing-session-list")??Rt(r, nrt(".chat-editing-session-list"));
    if(!this._chatEditList){
      this._chatEditList=this._chatEditsListPool.get();
      const f=this._chatEditList.object;
      this._chatEditsDisposables.add(this._chatEditList),this._chatEditsDisposables.add(f.onDidFocus(()=>{
        this._onDidFocus.fire()
      })),this._chatEditsDisposables.add(f.onDidOpen(async A=>{
        if(A.element?.kind==="reference"&&je.isUri(A.element.reference)){
          const w=A.element.reference,C=e.getEntry(w),x=await this.editorService.openEditor({
            resource:w,options:A.editorOptions
          },A.sideBySide?Aw:B1);
          x&&C?.getEditorIntegration(x).reveal(!0)
        }
      })),this._chatEditsDisposables.add(ei(f.getHTMLElement(),"click",A=>{
        this.hasFocus()||this._onDidFocus.fire()
      },!0)),Rt(u,f.getHTMLElement()),Rt(r,u)
    }
    const p=Math.min(i.length, 6)*22, g=this._chatEditList.object;
    g.layout(p), g.getHTMLElement().style.height=`${p}px`, g.splice(0, g.length, i), this._onDidChangeHeight.fire()
  }
  async renderChatRelatedFiles(){
    const e=this.relatedFilesContainer;
    th(e);
    const t=this.configurationService.getValue("chat.renderRelatedFiles");
    if(UBe(!!(this.relatedFiles?.value.length&&t), e), !t||!this.relatedFiles?.value.length)return;
    const i=Sm("element");
    for(const{
      uri:r,description:s
    }
    of this.relatedFiles.value){
      const o=this._chatEditsActionsDisposables.add(new pw(e,{
        supportIcons:!0,secondary:!0,hoverDelegate:i
      }));
      o.label=this.labelService.getUriBasenameLabel(r),o.element.classList.add("monaco-icon-label"),o.element.title=_(5359,null,this.labelService.getUriLabel(r,{
        relative:!0
      }),s??""),this._chatEditsActionsDisposables.add(o.onDidClick(async()=>{
        u.remove(),await this._attachmentModel.addFile(r),this.relatedFiles?.remove(r)
      }));
      const a=this._chatEditsActionsDisposables.add(new pw(e,{
        supportIcons:!1,secondary:!0,hoverDelegate:i,ariaLabel:_(5360,null,this.labelService.getUriLabel(r,{
          relative:!0
        }))
      }));
      a.icon=Be.add,a.setTitle(_(5361,null)),this._chatEditsActionsDisposables.add(a.onDidClick(async()=>{
        u.remove(),await this._attachmentModel.addFile(r),this.relatedFiles?.remove(r)
      }));
      const l=document.createElement("div");
      l.classList.add("separator");
      const u=document.createElement("span");
      u.classList.add("monaco-button-dropdown","sidebyside-button"),u.appendChild(a.element),u.appendChild(l),u.appendChild(o.element),Rt(e,u),this._chatEditsActionsDisposables.add($i(()=>{
        u.remove()
      }))
    }
    this._onDidChangeHeight.fire()
  }
  async renderFollowups(e, t){
    this.options.renderFollowups&&(this.followupsDisposables.clear(), th(this.followupsContainer), e&&e.length>0&&this.followupsDisposables.add(this.instantiationService.createInstance(CEa, this.followupsContainer, e, this.location, void 0, i=>this._onDidAcceptFollowup.fire({
      followup:i,response:t
    }))), this._onDidChangeHeight.fire())
  }
  get contentHeight(){
    const e=this.getLayoutData();
    return e.followupsHeight+e.inputPartEditorHeight+e.inputPartVerticalPadding+e.inputEditorBorder+e.attachmentsHeight+e.toolbarsHeight+e.chatEditingStateHeight
  }
  layout(e, t){
    return this.cachedDimensions=new Lu(t, e), this._layout(e, t)
  }
  _layout(e, t, i=!0){
    const r=this.getLayoutData(), s=Math.min(r.inputPartEditorHeight, e-r.followupsHeight-r.attachmentsHeight-r.inputPartVerticalPadding-r.toolbarsHeight), o=t-r.inputPartHorizontalPadding;
    this.followupsContainer.style.width=`${o}px`, this._inputPartHeight=r.inputPartVerticalPadding+r.followupsHeight+s+r.inputEditorBorder+r.attachmentsHeight+r.toolbarsHeight+r.chatEditingStateHeight, this._followupsHeight=r.followupsHeight, this._editSessionWidgetHeight=r.chatEditingStateHeight;
    const a=this._inputEditor.getScrollWidth(), u={
      width:t-r.inputPartHorizontalPadding-r.editorBorder-r.inputPartHorizontalPaddingInside-r.toolbarsWidth-r.sideToolbarWidth,height:s
    };
    if((!this.previousInputEditorDimension||this.previousInputEditorDimension.width!==u.width||this.previousInputEditorDimension.height!==u.height)&&(this._inputEditor.layout(u), this.previousInputEditorDimension=u), i&&a<10)return this._layout(e, t, !1)
  }
  getLayoutData(){
    const e=this.cachedExecuteToolbarWidth=this.executeToolbar.getItemsWidth(), t=this.cachedInputToolbarWidth=this.inputActionsToolbar.getItemsWidth(), i=(this.executeToolbar.getItemsLength()-1)*4, r=this.inputActionsToolbar.getItemsLength()?(this.inputActionsToolbar.getItemsLength()-1)*4:0;
    return{
      inputEditorBorder:2,followupsHeight:this.followupsContainer.offsetHeight,inputPartEditorHeight:Math.min(this._inputEditor.getContentHeight(),this.inputEditorMaxHeight),inputPartHorizontalPadding:this.options.renderStyle==="compact"?16:32,inputPartVerticalPadding:this.options.renderStyle==="compact"?12:28,attachmentsHeight:this.attachmentsContainer.offsetHeight+(this.attachmentsContainer.checkVisibility()?6:0),editorBorder:2,inputPartHorizontalPaddingInside:12,toolbarsWidth:this.options.renderStyle==="compact"?e+i+t+r:0,toolbarsHeight:this.options.renderStyle==="compact"?0:22,chatEditingStateHeight:this.chatEditingSessionWidgetContainer.offsetHeight,sideToolbarWidth:this.inputSideToolbarContainer?jP(this.inputSideToolbarContainer)+4:0
    }
  }
  getViewState(){
    return this.getInputState()
  }
  saveState(){
    this.history.isAtEnd()&&this.saveCurrentValue(this.getInputState());
    const e=[...this.history];
    this.historyService.saveHistory(this.location, e)
  }
}, QJ=xEa=__decorate([__param(4, ucu), __param(5, Il), __param(6, ln), __param(7, wi), __param(8, Fn), __param(9, mo), __param(10, Cf), __param(11, Pgn), __param(12, Rr), __param(13, Gr), __param(14, yi), __param(15, bo), __param(16, El), __param(17, Hi), __param(18, Ol), __param(19, h1t), __param(20, EI), __param(21, ES), __param(22, fCa), __param(23, xqe)], QJ), tyu=n=>JSON.stringify({
  ...n, state:{
    ...n.state, chatMode:void 0
  }
}), TEa=class extends Iye{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(e, t, [], "", {
      ...i,getKeyBinding:f=>a.lookupKeybinding(f.id,o)
    }, s, a, l, o, u, d, m);
    const p=r.createMenu(st.ChatExecuteSecondary, o), g=()=>{
      const f=xW(p.getActions({
        shouldForwardArgs:!0
      }));
      this.update(t,f)
    };
    g(), this._register(p.onDidChange(()=>g()))
  }
}, TEa=__decorate([__param(3, xd), __param(4, kc), __param(5, wi), __param(6, mo), __param(7, ms), __param(8, bo), __param(9, Cf), __param(10, cve)], TEa), IEa=class extends D_i{
  constructor(e, t, i, r, s, o, a, l, u, d){
    const m={
      getActions:()=>{
        const g=x=>({
          id:x.identifier,label:x.metadata.name,tooltip:"",class:void 0,enabled:!0,checked:x.identifier===this.currentLanguageModel.identifier,run:()=>{
            this.currentLanguageModel=x,this.renderLabel(this.element),this.delegate.setModel(x)
          }
        }),A=this.delegate.getModels().map(x=>g(x)),w=u.getMenuActions(st.ChatModelPicker,o),C=xW(w);
        return(C.length>0||a.entitlement===TT.Limited)&&A.push(new id),A.push(...C),a.entitlement===TT.Limited&&A.push(Sh({
          id:"moreModels",label:_(5362,null),run:()=>{
            const x="workbench.action.chat.upgradePlan";
            d.publicLog2("workbenchActionExecuted",{
              id:x,from:"chat-models"
            }),l.executeCommand(x)
          }
        })),A
      }
    }, p={
      ...e,tooltip:_(5363,null),run:()=>{
        
      }
    };
    super(p, m, r, void 0, s, o), this.currentLanguageModel=t, this.delegate=i, this._register(i.onDidChangeModel(g=>{
      this.currentLanguageModel=g,this.renderLabel(this.element)
    }))
  }
  renderLabel(e){
    return this.setAriaLabelAttributes(e), um(e, Ct("span.chat-model-label", void 0, this.currentLanguageModel.metadata.name), ...a_("$(chevron-down)")), null
  }
  render(e){
    super.render(e), e.classList.add("chat-modelPicker-item")
  }
}, IEa=__decorate([__param(3, kc), __param(4, mo), __param(5, wi), __param(6, uyi), __param(7, fr), __param(8, xd), __param(9, ea)], IEa), nyu=".interactive-input-editor", Kpu(nyu), DEa=class extends D_i{
  constructor(e, t, i, r, s, o, a){
    const l=d=>({
      ...e,id:d,label:this.modeToString(d),class:void 0,enabled:!0,checked:t.getMode()===d,run:async()=>{
        const m=await e.run({
          mode:d
        });
        return this.renderLabel(this.element),m
      }
    }), u={
      getActions:()=>{
        const d=[l(iA.Edit)];
        return a.hasToolsAgent&&d.push(l(iA.Agent)),o.unifiedViewEnabled&&d.unshift(l(iA.Ask)),d
      }
    };
    super(e, u, i, void 0, r, s), this.delegate=t, this._register(t.onDidChangeMode(()=>this.renderLabel(this.element)))
  }
  modeToString(e){
    switch(e){
      case iA.Agent:return _(5364,null);
      case iA.Edit:return _(5365,null);
      case iA.Ask:default:return _(5366,null)
    }
  }
  renderLabel(e){
    this.setAriaLabelAttributes(e);
    const t=this.modeToString(this.delegate.getMode());
    return um(e, Ct("span.chat-model-label", void 0, t), ...a_("$(chevron-down)")), null
  }
  render(e){
    super.render(e), e.classList.add("chat-modelPicker-item")
  }
}, DEa=__decorate([__param(2, kc), __param(3, mo), __param(4, wi), __param(5, ES), __param(6, EI)], DEa), d3f=class extends aI{
  constructor(n, e, t){
    super(n, e, t)
  }
  render(n){
    super.render(n), n.classList.add("chat-attached-context-attachment", "chat-add-files")
  }
}
}
}), h3f, BEa, Wfn, ZMe, REa, spe=