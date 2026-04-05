// Module: out-build/vs/workbench/contrib/notebook/browser/view/renderers/backLayerWebView.js
// Offset: 33119956 (bundle byte offset)
// Size: 34548 bytes

ri(), Vs(), vr(), Ql(), yn(), hF(), zr(), np(), Hl(), _r(), Yr(), Yn(), Bc(), Tg(), Ku(), bbn(), LSe(), Ht(), dr(), Ei(), si(), pl(), ru(), ns(), Fc(), kr(), Pa(), Nl(), Io(), ps(), EE(), Sb(), K9f(), Muy(), Fuy(), VSi(), ph(), vxe(), z0(), WV(), xwu(), eki(), od(), eu(), _g(), r8f=/:([\d]+)(?::([\d]+))?$/, s8f=/line=(\d+)$/, o8f=/^(.*)#([^#]*)$/, wbn=class extends NH{
  static{
    Dwu=this
  }
  static getOriginStore(e){
    return this._originStore??=new XSi("notebook.backlayerWebview.origins", e), this._originStore
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $){
    super(O), this.notebookEditor=e, this.id=t, this.notebookViewType=i, this.documentUri=r, this.options=s, this.rendererMessaging=o, this.webviewService=a, this.openerService=l, this.notebookService=u, this.contextService=d, this.environmentService=m, this.fileDialogService=p, this.fileService=g, this.contextMenuService=f, this.contextKeyService=A, this.workspaceTrustManagementService=w, this.configurationService=C, this.languageService=x, this.workspaceContextService=I, this.editorGroupService=B, this.storageService=R, this.pathService=N, this.notebookLogService=M, this.telemetryService=$, this.webview=void 0, this.insetMapping=new Map, this.pendingWebviewIdleCreationRequest=new Map, this.pendingWebviewIdleInsetMapping=new Map, this.reversedPendingWebviewIdleInsetMapping=new Map, this.markupPreviewMapping=new Map, this.hiddenInsetMapping=new Set, this.reversedInsetMapping=new Map, this.localResourceRootsCache=void 0, this._onMessage=this._register(new Qe), this._preloadsCache=new Set, this.onMessage=this._onMessage.event, this._disposed=!1, this.firstInit=!0, this.nonce=Wr(), this._logRendererDebugMessage("Creating backlayer webview for notebook"), this.element=document.createElement("div"), this.element.style.height="1400px", this.element.style.position="absolute", o&&(this._register(o), o.receiveMessageHandler=(H, W)=>!this.webview||this._disposed?Promise.resolve(!1):(this._sendMessageToWebview({
      __vscode_notebook_message:!0,type:"customRendererMessage",rendererId:H,message:W
    }), Promise.resolve(!0))), this._register(w.onDidChangeTrust(H=>{
      const W=this.asWebviewUri(this.getNotebookBaseUri(),void 0),z=this.generateContent(W.toString());
      this.webview?.setHtml(z)
    })), this._register(pT.onDidChange(()=>{
      this._sendMessageToWebview({
        type:"tokenizedStylesChanged",css:i8f()
      })
    }))
  }
  updateOptions(e){
    this.options=e, this._updateStyles(), this._updateOptions()
  }
  _logRendererDebugMessage(e){
    this.notebookLogService.debug("BacklayerWebview", `${this.documentUri} (${this.id}) - ${e}`)
  }
  _updateStyles(){
    this._sendMessageToWebview({
      type:"notebookStyles",styles:this._generateStyles()
    })
  }
  _updateOptions(){
    this._sendMessageToWebview({
      type:"notebookOptions",options:{
        dragAndDropEnabled:this.options.dragAndDropEnabled
      },renderOptions:{
        lineLimit:this.options.outputLineLimit,outputScrolling:this.options.outputScrolling,outputWordWrap:this.options.outputWordWrap,linkifyFilePaths:this.options.outputLinkifyFilePaths,minimalError:this.options.minimalError
      }
    })
  }
  _generateStyles(){
    return{
      "notebook-output-left-margin":`${this.options.leftMargin+this.options.runGutter}px`,"notebook-output-width":`calc(100% - ${this.options.leftMargin+this.options.rightMargin+this.options.runGutter}px)`,"notebook-output-node-padding":`${this.options.outputNodePadding}px`,"notebook-run-gutter":`${this.options.runGutter}px`,"notebook-preview-node-padding":`${this.options.previewNodePadding}px`,"notebook-markdown-left-margin":`${this.options.markdownLeftMargin}px`,"notebook-output-node-left-padding":`${this.options.outputNodeLeftPadding}px`,"notebook-markdown-min-height":`${this.options.previewNodePadding*2}px`,"notebook-markup-font-size":typeof this.options.markupFontSize=="number"&&this.options.markupFontSize>0?`${this.options.markupFontSize}px`:`calc(${this.options.fontSize}px * 1.2)`,"notebook-markdown-line-height":typeof this.options.markdownLineHeight=="number"&&this.options.markdownLineHeight>0?`${this.options.markdownLineHeight}px`:"normal","notebook-cell-output-font-size":`${this.options.outputFontSize||this.options.fontSize}px`,"notebook-cell-output-line-height":`${this.options.outputLineHeight}px`,"notebook-cell-output-max-height":`${this.options.outputLineHeight*this.options.outputLineLimit+2}px`,"notebook-cell-output-font-family":this.options.outputFontFamily||this.options.fontFamily,"notebook-cell-markup-empty-content":_(9496,null),"notebook-cell-renderer-not-found-error":_(9497,null),"notebook-cell-renderer-fallbacks-exhausted":_(9498,null),"notebook-markup-font-family":this.options.markupFontFamily
    }
  }
  generateContent(e){
    const t=this.getRendererData(), i=this.getStaticPreloadsData(), r={
      lineLimit:this.options.outputLineLimit,outputScrolling:this.options.outputScrolling,outputWordWrap:this.options.outputWordWrap,linkifyFilePaths:this.options.outputLinkifyFilePaths,minimalError:this.options.minimalError
    }, s=Nuy({
      ...this.options,tokenizationCss:i8f()
    }, {
      dragAndDropEnabled:this.options.dragAndDropEnabled
    }, r, t, i, this.workspaceTrustManagementService.isWorkspaceTrusted(), this.nonce), o=this.configurationService.getValue("notebook.experimental.enableCsp"), a=this.getColor(L4n), l=this.getColor(Boe);
    return`
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<base href="${e}/" />
				${o?`<meta http-equiv="Content-Security-Policy" content="
					default-src 'none';
					script-src ${ybn} 'unsafe-inline' 'unsafe-eval';
					style-src ${ybn} 'unsafe-inline';
					img-src ${ybn} https: http: data:;
					font-src ${ybn} https:;
					connect-src https:;
					child-src https: data:;
				">`:""}
				<style nonce="${this.nonce}">
					::highlight(find-highlight) {
						background-color: var(--vscode-editor-findMatchBackground, ${l});
					}

					::highlight(current-find-highlight) {
						background-color: var(--vscode-editor-findMatchHighlightBackground, ${a});
					}

					#container .cell_container {
						width: 100%;
					}

					#container .output_container {
						width: 100%;
					}

					#container .cell_container.nb-insertHighlight div.output_container div.output {
						background-color: var(--vscode-diffEditor-insertedLineBackground, var(--vscode-diffEditor-insertedTextBackground));
					}

					#container > div > div > div.output {
						font-size: var(--notebook-cell-output-font-size);
						width: var(--notebook-output-width);
						margin-left: var(--notebook-output-left-margin);
						background-color: var(--theme-notebook-output-background);
						padding-top: var(--notebook-output-node-padding);
						padding-right: var(--notebook-output-node-padding);
						padding-bottom: var(--notebook-output-node-padding);
						padding-left: var(--notebook-output-node-left-padding);
						box-sizing: border-box;
						border-top: none;
					}

					/* markdown */
					#container div.preview {
						width: 100%;
						padding-right: var(--notebook-preview-node-padding);
						padding-left: var(--notebook-markdown-left-margin);
						padding-top: var(--notebook-preview-node-padding);
						padding-bottom: var(--notebook-preview-node-padding);

						box-sizing: border-box;
						white-space: nowrap;
						overflow: hidden;
						white-space: initial;

						font-size: var(--notebook-markup-font-size);
						line-height: var(--notebook-markdown-line-height);
						color: var(--theme-ui-foreground);
						font-family: var(--notebook-markup-font-family);
					}

					#container div.preview.draggable {
						user-select: none;
						-webkit-user-select: none;
						-ms-user-select: none;
						cursor: grab;
					}

					#container div.preview.selected {
						background: var(--theme-notebook-cell-selected-background);
					}

					#container div.preview.dragging {
						background-color: var(--theme-background);
						opacity: 0.5 !important;
					}

					.monaco-workbench.vs-dark .notebookOverlay .cell.markdown .latex img,
					.monaco-workbench.vs-dark .notebookOverlay .cell.markdown .latex-block img {
						filter: brightness(0) invert(1)
					}

					#container .markup > div.nb-symbolHighlight {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .markup > div.nb-insertHighlight {
						background-color: var(--vscode-diffEditor-insertedLineBackground, var(--vscode-diffEditor-insertedTextBackground));
					}

					#container .nb-symbolHighlight .output_container .output {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .markup > div.nb-multiCellHighlight {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .nb-multiCellHighlight .output_container .output {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .nb-chatGenerationHighlight .output_container .output {
						background-color: var(--vscode-notebook-selectedCellBackground);
					}

					#container > div.nb-cellDeleted .output_container {
						background-color: var(--theme-notebook-diff-removed-background);
					}

					#container > div.nb-cellAdded .output_container {
						background-color: var(--theme-notebook-diff-inserted-background);
					}

					#container > div > div:not(.preview) > div {
						overflow-x: auto;
					}

					#container .no-renderer-error {
						color: var(--vscode-editorError-foreground);
					}

					body {
						padding: 0px;
						height: 100%;
						width: 100%;
					}

					table, thead, tr, th, td, tbody {
						border: none;
						border-color: transparent;
						border-spacing: 0;
						border-collapse: collapse;
					}

					table, th, tr {
						vertical-align: middle;
						text-align: right;
					}

					thead {
						font-weight: bold;
						background-color: rgba(130, 130, 130, 0.16);
					}

					th, td {
						padding: 4px 8px;
					}

					tr:nth-child(even) {
						background-color: rgba(130, 130, 130, 0.08);
					}

					tbody th {
						font-weight: normal;
					}

					.find-match {
						background-color: var(--vscode-editor-findMatchHighlightBackground);
					}

					.current-find-match {
						background-color: var(--vscode-editor-findMatchBackground);
					}

					#_defaultColorPalatte {
						color: var(--vscode-editor-findMatchHighlightBackground);
						background-color: var(--vscode-editor-findMatchBackground);
					}
				</style>
			</head>
			<body style="overflow: hidden;">
				<div id='findStart' tabIndex=-1></div>
				<div id='container' class="widgetarea" style="position: absolute;width:100%;top: 0px"></div>
				<div id="_defaultColorPalatte"></div>
				<script type="module">${s}</script>
			</body>
		</html>`
  }
  getRendererData(){
    return this.notebookService.getRenderers().map(e=>{
      const t={
        extends:e.entrypoint.extends,path:this.asWebviewUri(e.entrypoint.path,e.extensionLocation).toString()
      };
      return{
        id:e.id,entrypoint:t,mimeTypes:e.mimeTypes,messaging:e.messaging!=="never"&&!!this.rendererMessaging,isBuiltin:e.isBuiltin
      }
    })
  }
  getStaticPreloadsData(){
    return Array.from(this.notebookService.getStaticPreloads(this.notebookViewType), e=>({
      entrypoint:this.asWebviewUri(e.entrypoint,e.extensionLocation).toString().toString()
    }))
  }
  asWebviewUri(e, t){
    return cTa(e, t?.scheme===_n.vscodeRemote?{
      isRemote:!0,authority:t.authority
    }
    :void 0)
  }
  postKernelMessage(e){
    this._sendMessageToWebview({
      __vscode_notebook_message:!0,type:"customKernelMessage",message:e
    })
  }
  resolveOutputId(e){
    const t=this.reversedInsetMapping.get(e);
    return t?{
      cellInfo:this.insetMapping.get(t).cellInfo,output:t
    }
    :void 0
  }
  isResolved(){
    return!!this.webview
  }
  createWebview(e){
    const t=this.asWebviewUri(this.getNotebookBaseUri(), void 0), i=this.generateContent(t.toString());
    return this._initialize(i, e)
  }
  getNotebookBaseUri(){
    if(this.documentUri.scheme===_n.untitled){
      const e=this.workspaceContextService.getWorkspaceFolder(this.documentUri);
      if(e)return e.uri;
      const t=this.workspaceContextService.getWorkspace().folders;
      if(t.length)return t[0].uri
    }
    return Td(this.documentUri)
  }
  getBuiltinLocalResourceRoots(){
    return this.documentUri.path.toLowerCase().endsWith(".ipynb")?Eu?[]:[Td(og.asFileUri("vs/nls.js"))]:[]
  }
  _initialize(e, t){
    if(!As(this.element).document.body.contains(this.element))throw new Error("Element is already detached from the DOM tree");
    this.webview=this._createInset(this.webviewService, e), this.webview.mountTo(this.element, t), this._register(this.webview), this._register(new aTa(t, ()=>this.webview));
    const i=new wy;
    return this._register(this.webview.onFatalError(r=>{
      i.error(new Error(`Could not initialize webview: ${r.message}}`))
    })), this._register(this.webview.onMessage(async r=>{
      const s=r.message;
      if(!this._disposed&&s.__vscode_notebook_message)switch(s.type){
        case"initialized":{
          i.complete(),this.initializeWebViewState();
          break
        }
        case"initializedMarkup":{
          this.initializeMarkupPromise?.requestId===s.requestId&&(this.initializeMarkupPromise?.p.complete(),this.initializeMarkupPromise=void 0);
          break
        }
        case"dimension":{
          for(const o of s.updates){
            const a=o.height;
            if(o.isOutput){
              const l=this.resolveOutputId(o.id);
              if(l){
                const{
                  cellInfo:u,output:d
                }
                =l;
                this.notebookEditor.updateOutputHeight(u,d,a,!!o.init,"webview#dimension"),this.notebookEditor.scheduleOutputHeightAck(u,o.id,a)
              }
              else if(o.init){
                const u=this.reversedPendingWebviewIdleInsetMapping.get(o.id);
                if(u){
                  const d=this.pendingWebviewIdleInsetMapping.get(u);
                  this.pendingWebviewIdleCreationRequest.delete(u),this.pendingWebviewIdleCreationRequest.delete(u);
                  const m=d.cellInfo;
                  this.reversedInsetMapping.set(o.id,u),this.insetMapping.set(u,d),this.notebookEditor.updateOutputHeight(m,u,a,!!o.init,"webview#dimension"),this.notebookEditor.scheduleOutputHeightAck(m,o.id,a)
                }
                this.reversedPendingWebviewIdleInsetMapping.delete(o.id)
              }
              {
                if(!o.init)continue;
                const u=this.reversedInsetMapping.get(o.id);
                if(!u)continue;
                const d=this.insetMapping.get(u);
                d.initialized=!0
              }
            }
            else this.notebookEditor.updateMarkupCellHeight(o.id,a,!!o.init)
          }
          break
        }
        case"mouseenter":{
          const o=this.resolveOutputId(s.id);
          if(o){
            const a=this.notebookEditor.getCellByInfo(o.cellInfo);
            a&&(a.outputIsHovered=!0)
          }
          break
        }
        case"mouseleave":{
          const o=this.resolveOutputId(s.id);
          if(o){
            const a=this.notebookEditor.getCellByInfo(o.cellInfo);
            a&&(a.outputIsHovered=!1)
          }
          break
        }
        case"outputFocus":{
          const o=this.resolveOutputId(s.id);
          if(o){
            const a=this.notebookEditor.getCellByInfo(o.cellInfo);
            a&&(a.outputIsFocused=!0,this.notebookEditor.focusNotebookCell(a,"output",{
              outputId:o.output.model.outputId,skipReveal:!0,outputWebviewFocused:!0
            }))
          }
          break
        }
        case"outputBlur":{
          const o=this.resolveOutputId(s.id);
          if(o){
            const a=this.notebookEditor.getCellByInfo(o.cellInfo);
            a&&(a.outputIsFocused=!1,a.inputInOutputIsFocused=!1)
          }
          break
        }
        case"scroll-ack":break;
        case"scroll-to-reveal":{
          this.notebookEditor.setScrollTop(s.scrollTop-gbn);
          break
        }
        case"did-scroll-wheel":{
          this.notebookEditor.triggerScroll({
            ...s.payload,preventDefault:()=>{
              
            },stopPropagation:()=>{
              
            }
          });
          break
        }
        case"focus-editor":{
          const o=this.notebookEditor.getCellById(s.cellId);
          o&&(s.focusNext?this.notebookEditor.focusNextNotebookCell(o,"editor"):await this.notebookEditor.focusNotebookCell(o,"editor"));
          break
        }
        case"clicked-data-url":{
          this._onDidClickDataLink(s);
          break
        }
        case"clicked-link":{
          if(OR(s.href,_n.command)){
            const o=je.parse(s.href);
            if(o.path==="workbench.action.openLargeOutput"){
              const l=o.query,u=this.editorGroupService.activeGroup;
              u&&u.activeEditor&&u.pinEditor(u.activeEditor),this.openerService.open(Dg.generateCellOutputUriWithId(this.documentUri,l));
              return
            }
            if(o.path==="cellOutput.enableScrolling"){
              const l=o.query,u=this.reversedInsetMapping.get(l);
              u&&(this.telemetryService.publicLog2("workbenchActionExecuted",{
                id:"notebook.cell.toggleOutputScrolling",from:"inlineLink"
              }),u.cellViewModel.outputsViewModels.forEach(d=>{
                d.model.metadata&&(d.model.metadata.scrollable=!0,d.resetRenderer())
              }));
              return
            }
            this.openerService.open(s.href,{
              fromUserGesture:!0,fromWorkspace:!0,allowCommands:!1?!0:["github-issues.authNow","workbench.extensions.search","workbench.action.openSettings","_notebook.selectKernel","jupyter.viewOutput","jupyter.createPythonEnvAndSelectController"]
            });
            return
          }
          if(Cgt(s.href,_n.http,_n.https,_n.mailto))this.openerService.open(s.href,{
            fromUserGesture:!0,fromWorkspace:!0
          });
          else if(OR(s.href,_n.vscodeNotebookCell)){
            const o=je.parse(s.href);
            await this._handleNotebookCellResource(o)
          }
          else/^[\w\-]+:/.test(s.href)?FR(s.href)?this._openUri(je.file(s.href)):this._openUri(je.parse(s.href)):await this._handleResourceOpening(Huy(s.href));
          break
        }
        case"customKernelMessage":{
          this._onMessage.fire({
            message:s.message
          });
          break
        }
        case"customRendererMessage":{
          this.rendererMessaging?.postMessage(s.rendererId,s.message);
          break
        }
        case"clickMarkupCell":{
          const o=this.notebookEditor.getCellById(s.cellId);
          o&&(s.shiftKey||(Fs?s.metaKey:s.ctrlKey)?this.notebookEditor.toggleNotebookCellSelection(o,s.shiftKey):await this.notebookEditor.focusNotebookCell(o,"container",{
            skipReveal:!0
          }));
          break
        }
        case"contextMenuMarkupCell":{
          const o=this.notebookEditor.getCellById(s.cellId);
          if(o){
            await this.notebookEditor.focusNotebookCell(o,"container",{
              skipReveal:!0
            });
            const a=this.element.getBoundingClientRect();
            this.contextMenuService.showContextMenu({
              menuId:st.NotebookCellTitle,contextKeyService:this.contextKeyService,getAnchor:()=>({
                x:a.x+s.clientX,y:a.y+s.clientY
              })
            })
          }
          break
        }
        case"toggleMarkupPreview":{
          const o=this.notebookEditor.getCellById(s.cellId);
          o&&!this.notebookEditor.creationOptions.isReadOnly&&(this.notebookEditor.setMarkupCellEditState(s.cellId,aw.Editing),await this.notebookEditor.focusNotebookCell(o,"editor",{
            skipReveal:!0
          }));
          break
        }
        case"mouseEnterMarkupCell":{
          const o=this.notebookEditor.getCellById(s.cellId);
          o instanceof GV&&(o.cellIsHovered=!0);
          break
        }
        case"mouseLeaveMarkupCell":{
          const o=this.notebookEditor.getCellById(s.cellId);
          o instanceof GV&&(o.cellIsHovered=!1);
          break
        }
        case"cell-drag-start":{
          this.notebookEditor.didStartDragMarkupCell(s.cellId,s);
          break
        }
        case"cell-drag":{
          this.notebookEditor.didDragMarkupCell(s.cellId,s);
          break
        }
        case"cell-drop":{
          this.notebookEditor.didDropMarkupCell(s.cellId,{
            dragOffsetY:s.dragOffsetY,ctrlKey:s.ctrlKey,altKey:s.altKey
          });
          break
        }
        case"cell-drag-end":{
          this.notebookEditor.didEndDragMarkupCell(s.cellId);
          break
        }
        case"renderedMarkup":{
          const o=this.notebookEditor.getCellById(s.cellId);
          o instanceof GV&&(o.renderedHtml=s.html),this._handleHighlightCodeBlock(s.codeBlocks);
          break
        }
        case"renderedCellOutput":{
          this._handleHighlightCodeBlock(s.codeBlocks);
          break
        }
        case"outputResized":{
          this.notebookEditor.didResizeOutput(s.cellId);
          break
        }
        case"getOutputItem":{
          const a=this.resolveOutputId(s.outputId)?.output.model.outputs.find(l=>l.mime===s.mime);
          this._sendMessageToWebview({
            type:"returnOutputItem",requestId:s.requestId,output:a?{
              mime:a.mime,valueBytes:a.data.buffer
            }
            :void 0
          });
          break
        }
        case"logRendererDebugMessage":{
          this._logRendererDebugMessage(`${s.message}${s.data?" "+JSON.stringify(s.data,null,4):""}`);
          break
        }
        case"notebookPerformanceMessage":{
          this.notebookEditor.updatePerformanceMetadata(s.cellId,s.executionId,s.duration,s.rendererId),s.outputSize&&s.rendererId==="vscode.builtin-renderer"&&this._sendPerformanceData(s.outputSize,s.duration);
          break
        }
        case"outputInputFocus":{
          const o=this.resolveOutputId(s.id);
          if(o){
            const a=this.notebookEditor.getCellByInfo(o.cellInfo);
            a&&(a.inputInOutputIsFocused=s.inputFocused)
          }
          this.notebookEditor.didFocusOutputInputChange(s.inputFocused)
        }
      }
    })), i.p
  }
  _sendPerformanceData(e, t){
    const i={
      outputSize:e,renderTime:t
    };
    this.telemetryService.publicLog2("NotebookCellOutputRender", i)
  }
  _handleNotebookCellResource(e){
    const t=e.path.length>0?e:this.documentUri, i=/(?:^|&)line=([^&]+)/.exec(e.query);
    let r;
    if(i){
      const a=parseInt(i[1],10);
      isNaN(a)||(r={
        selection:{
          startLineNumber:a,startColumn:1
        }
      })
    }
    const s=/(?:^|&)execution_count=([^&]+)/.exec(e.query);
    if(s){
      const a=parseInt(s[1],10);
      if(!isNaN(a)){
        const u=this.notebookService.getNotebookTextModel(t)?.cells.slice().reverse().find(d=>d.internalMetadata.executionOrder===a);
        if(u?.uri)return this.openerService.open(u.uri,{
          fromUserGesture:!0,fromWorkspace:!0,editorOptions:r
        })
      }
    }
    const o=/\?line=(\d+)$/.exec(e.fragment);
    if(o){
      const a=parseInt(o[1],10);
      if(!isNaN(a)){
        const l=a+1,u=e.fragment.substring(0,o.index),d={
          selection:{
            startLineNumber:l,startColumn:1,endLineNumber:l,endColumn:1
          }
        };
        return this.openerService.open(t.with({
          fragment:u
        }),{
          fromUserGesture:!0,fromWorkspace:!0,editorOptions:d
        })
      }
    }
    return this.openerService.open(t, {
      fromUserGesture:!0,fromWorkspace:!0
    })
  }
  async _handleResourceOpening(e){
    let t, i;
    const r=o8f.exec(e);
    if(r&&(e=r[1], i=r[2]), e.startsWith("/")){
      t=await this.pathService.fileURI(e);
      const s=this.workspaceContextService.getWorkspace().folders;
      s.length&&(t=t.with({
        scheme:s[0].uri.scheme,authority:s[0].uri.authority
      }))
    }
    else if(e.startsWith("~")){
      const s=await this.pathService.userHome();
      s&&(t=je.joinPath(s,e.substring(2)))
    }
    else if(this.documentUri.scheme===_n.untitled){
      const s=this.workspaceContextService.getWorkspace().folders;
      if(!s.length)return;
      t=je.joinPath(s[0].uri,e)
    }
    else t=je.joinPath(Td(this.documentUri), e);
    t&&(i&&(t=t.with({
      fragment:i
    })), this._openUri(t))
  }
  _openUri(e){
    let t, i;
    const r=r8f.exec(e.path);
    r&&(e=e.with({
      path:e.path.slice(0,r.index),fragment:`L${r[0].slice(1)}`
    }), t=parseInt(r[1], 10), i=parseInt(r[2], 10));
    const s=s8f.exec(e.query);
    if(s){
      const a=parseInt(s[1],10);
      isNaN(a)||(t=a+1,i=1,e=e.with({
        fragment:`L${t}`
      }))
    }
    e=e.with({
      query:null
    });
    let o;
    for(const a of this.editorGroupService.groups){
      const l=a.editors.find(u=>u.resource&&Zc(u.resource,e,!0));
      if(l){
        o={
          group:a,editor:l
        };
        break
      }
    }
    if(o){
      const a=t!==void 0&&i!==void 0?{
        startLineNumber:t,startColumn:i
      }
      :void 0,l={
        selection:a
      };
      o.group.openEditor(o.editor,a?l:void 0)
    }
    else this.openerService.open(e, {
      fromUserGesture:!0,fromWorkspace:!0
    })
  }
  _handleHighlightCodeBlock(e){
    for(const{
      id:t,value:i,lang:r
    }
    of e){
      const s=this.languageService.getLanguageIdByLanguageName(r);
      s&&Oft(this.languageService,i,s).then(o=>{
        this._disposed||this._sendMessageToWebview({
          type:"tokenizedCodeBlock",html:o,codeBlockId:t
        })
      })
    }
  }
  async _onDidClickDataLink(e){
    if(typeof e.data!="string")return;
    const[t, i]=e.data.split(";base64,");
    if(!i||!t)return;
    const r=hk(this.documentUri)===".interactive"?this.workspaceContextService.getWorkspace().folders[0]?.uri??await this.fileDialogService.defaultFilePath():Td(this.documentUri);
    let s;
    if(e.downloadName)s=e.downloadName;
    else{
      const u=t.replace(/^data:/,""),d=u&&krA(u);
      s=d?`download${d}`:"download"
    }
    const o=Wo(r, s), a=await this.fileDialogService.showSaveDialog({
      defaultUri:o
    });
    if(!a)return;
    const l=Zj(i);
    await this.fileService.writeFile(a, l), await this.openerService.open(a)
  }
  _createInset(e, t){
    this.localResourceRootsCache=this._getResourceRootsCache();
    const i=e.createWebviewElement({
      origin:Dwu.getOriginStore(this.storageService).getOrigin(this.notebookViewType,void 0),title:_(9499,null),options:{
        purpose:"notebookRenderer",enableFindWidget:!1,transformCssVariables:e8f
      },contentOptions:{
        allowMultipleAPIAcquire:!0,allowScripts:!0,localResourceRoots:this.localResourceRootsCache
      },extension:void 0,providedViewType:"notebook.output"
    });
    return i.setHtml(t), i.setContextKeyService(this.contextKeyService), i
  }
  _getResourceRootsCache(){
    const e=this.contextService.getWorkspace().folders.map(i=>i.uri), t=this.getNotebookBaseUri();
    return[this.notebookService.getNotebookProviderResourceRoots(), this.notebookService.getRenderers().map(i=>Td(i.entrypoint.path)), ...Array.from(this.notebookService.getStaticPreloads(this.notebookViewType), i=>[Td(i.entrypoint), ...i.localResourceRoots]), e, t, this.getBuiltinLocalResourceRoots()].flat()
  }
  initializeWebViewState(){
    this._preloadsCache.clear(), this._currentKernel&&this._updatePreloadsFromKernel(this._currentKernel);
    for(const[e, t]of this.insetMapping.entries())this._sendMessageToWebview({
      ...t.cachedCreation,initiallyHidden:this.hiddenInsetMapping.has(e)
    });
    if(!this.initializeMarkupPromise?.isFirstInit){
      const e=[...this.markupPreviewMapping.values()];
      this.markupPreviewMapping.clear(),this.initializeMarkup(e)
    }
    this._updateStyles(), this._updateOptions()
  }
  shouldUpdateInset(e, t, i, r){
    if(this._disposed||"isOutputCollapsed"in e&&e.isOutputCollapsed)return!1;
    if(this.hiddenInsetMapping.has(t))return!0;
    const s=this.insetMapping.get(t);
    return!(!s||r===s.cachedCreation.outputOffset&&i===s.cachedCreation.cellTop)
  }
  ackHeight(e){
    this._sendMessageToWebview({
      type:"ack-dimension",updates:e
    })
  }
  updateScrollTops(e, t){
    if(this._disposed)return;
    const i=lh(e.map(r=>{
      const s=this.insetMapping.get(r.output);
      if(!s||!r.forceDisplay&&!this.shouldUpdateInset(r.cell,r.output,r.cellTop,r.outputOffset))return;
      const o=s.outputId;
      return s.cachedCreation.cellTop=r.cellTop,s.cachedCreation.outputOffset=r.outputOffset,this.hiddenInsetMapping.delete(r.output),{
        cellId:r.cell.id,outputId:o,cellTop:r.cellTop,outputOffset:r.outputOffset,forceDisplay:r.forceDisplay
      }
    }));
    !i.length&&!t.length||this._sendMessageToWebview({
      type:"view-scroll",widgets:i,markupCells:t
    })
  }
  async createMarkupPreview(e){
    if(!this._disposed){
      if(this.markupPreviewMapping.has(e.cellId)){
        console.error("Trying to create markup preview that already exists");
        return
      }
      this.markupPreviewMapping.set(e.cellId,e),this._sendMessageToWebview({
        type:"createMarkupCell",cell:e
      })
    }
  }
  async showMarkupPreview(e){
    if(this._disposed)return;
    const t=this.markupPreviewMapping.get(e.cellId);
    if(!t)return this.createMarkupPreview(e);
    const i=e.content===t.content, r=fv(e.metadata, t.metadata);
    (!i||!r||!t.visible)&&this._sendMessageToWebview({
      type:"showMarkupCell",id:e.cellId,handle:e.cellHandle,content:i?void 0:e.content,top:e.offset,metadata:r?void 0:e.metadata
    }), t.metadata=e.metadata, t.content=e.content, t.offset=e.offset, t.visible=!0
  }
  async hideMarkupPreviews(e){
    if(this._disposed)return;
    const t=[];
    for(const i of e){
      const r=this.markupPreviewMapping.get(i);
      r&&r.visible&&(t.push(i),r.visible=!1)
    }
    t.length&&this._sendMessageToWebview({
      type:"hideMarkupCells",ids:t
    })
  }
  async unhideMarkupPreviews(e){
    if(this._disposed)return;
    const t=[];
    for(const i of e){
      const r=this.markupPreviewMapping.get(i);
      r?r.visible||(r.visible=!0,t.push(i)):console.error(`Trying to unhide a preview that does not exist: ${i}`)
    }
    this._sendMessageToWebview({
      type:"unhideMarkupCells",ids:t
    })
  }
  async deleteMarkupPreviews(e){
    if(!this._disposed){
      for(const t of e)this.markupPreviewMapping.has(t)||console.error(`Trying to delete a preview that does not exist: ${t}`),this.markupPreviewMapping.delete(t);
      e.length&&this._sendMessageToWebview({
        type:"deleteMarkupCell",ids:e
      })
    }
  }
  async updateMarkupPreviewSelections(e){
    this._disposed||this._sendMessageToWebview({
      type:"updateSelectedMarkupCells",selectedCellIds:e.filter(t=>this.markupPreviewMapping.has(t))
    })
  }
  async initializeMarkup(e){
    if(this._disposed)return;
    this.initializeMarkupPromise?.p.complete();
    const t=Wr();
    this.initializeMarkupPromise={
      p:new wy,requestId:t,isFirstInit:this.firstInit
    }, this.firstInit=!1;
    for(const i of e)this.markupPreviewMapping.set(i.cellId, i);
    return this._sendMessageToWebview({
      type:"initializeMarkup",cells:e,requestId:t
    }), this.initializeMarkupPromise.p.p
  }
  _cachedInsetEqual(e, t){
    return t.type===1?e.renderer?.id===t.renderer.id:e.cachedCreation.type==="html"
  }
  requestCreateOutputWhenWebviewIdle(e, t, i, r){
    this._disposed||this.insetMapping.has(t.source)||this.pendingWebviewIdleCreationRequest.has(t.source)||this.pendingWebviewIdleInsetMapping.has(t.source)||this.pendingWebviewIdleCreationRequest.set(t.source, Mze(()=>{
      const{
        message:s,renderer:o,transfer:a
      }
      =this._createOutputCreationMessage(e,t,i,r,!0,!0);
      this._sendMessageToWebview(s,a),this.pendingWebviewIdleInsetMapping.set(t.source,{
        outputId:s.outputId,versionId:t.source.model.versionId,cellInfo:e,renderer:o,cachedCreation:s
      }),this.reversedPendingWebviewIdleInsetMapping.set(s.outputId,t.source),this.pendingWebviewIdleCreationRequest.delete(t.source)
    }))
  }
  createOutput(e, t, i, r){
    if(this._disposed)return;
    const s=this.insetMapping.get(t.source);
    if(this.pendingWebviewIdleCreationRequest.get(t.source)?.dispose(), this.pendingWebviewIdleCreationRequest.delete(t.source), this.pendingWebviewIdleInsetMapping.delete(t.source), s&&this.reversedPendingWebviewIdleInsetMapping.delete(s.outputId), s&&this._cachedInsetEqual(s, t)){
      this.hiddenInsetMapping.delete(t.source),this._sendMessageToWebview({
        type:"showOutput",cellId:s.cellInfo.cellId,outputId:s.outputId,cellTop:i,outputOffset:r
      });
      return
    }
    const{
      message:o,renderer:a,transfer:l
    }
    =this._createOutputCreationMessage(e, t, i, r, !1, !1);
    this._sendMessageToWebview(o, l), this.insetMapping.set(t.source, {
      outputId:o.outputId,versionId:t.source.model.versionId,cellInfo:e,renderer:a,cachedCreation:o
    }), this.hiddenInsetMapping.delete(t.source), this.reversedInsetMapping.set(o.outputId, t.source)
  }
  createMetadata(e, t){
    if(t.startsWith("image")){
      const i=e.outputs.find(r=>r.mime==="text/plain")?.data.buffer;
      if(i?.length&&i?.length>0){
        const r=new TextDecoder().decode(i);
        return{
          ...e.metadata,vscode_altText:r
        }
      }
    }
    return e.metadata
  }
  _createOutputCreationMessage(e, t, i, r, s, o){
    const a={
      type:"html",executionId:e.executionId,cellId:e.cellId,cellTop:i,outputOffset:r,left:0,requiredPreloads:[],createOnIdle:s
    }, l=[];
    let u, d;
    if(t.type===1){
      const m=t.source.model;
      d=t.renderer;
      const p=m.outputs.find(A=>A.mime===t.mimeType),g=this.createMetadata(m,t.mimeType),f=n8f(p.data.buffer,l);
      u={
        ...a,outputId:m.outputId,rendererId:t.renderer.id,content:{
          type:1,outputId:m.outputId,metadata:g,output:{
            mime:p.mime,valueBytes:f
          },allOutputs:m.outputs.map(A=>({
            mime:A.mime
          }))
        },initiallyHidden:o
      }
    }
    else u={
      ...a,outputId:Wr(),content:{
        type:t.type,htmlContent:t.htmlContent
      },initiallyHidden:o
    };
    return{
      message:u,renderer:d,transfer:l
    }
  }
  updateOutput(e, t, i, r){
    if(this._disposed)return;
    if(!this.insetMapping.has(t.source)){
      this.createOutput(e,t,i,r);
      return
    }
    const s=this.insetMapping.get(t.source);
    if(s.versionId===t.source.model.versionId)return;
    this.hiddenInsetMapping.delete(t.source);
    let o;
    const a=[];
    if(t.type===1){
      const l=t.source.model,u=l.outputs.find(g=>g.mime===t.mimeType),d=l.appendedSinceVersion(s.versionId,t.mimeType),m=d?{
        valueBytes:d.buffer,previousVersion:s.versionId
      }
      :void 0,p=n8f(u.data.buffer,a);
      o={
        type:1,outputId:s.outputId,metadata:l.metadata,output:{
          mime:t.mimeType,valueBytes:p,appended:m
        },allOutputs:l.outputs.map(g=>({
          mime:g.mime
        }))
      }
    }
    this._sendMessageToWebview({
      type:"showOutput",cellId:s.cellInfo.cellId,outputId:s.outputId,cellTop:i,outputOffset:r,content:o
    }, a), s.versionId=t.source.model.versionId
  }
  async copyImage(e){
    this._sendMessageToWebview({
      type:"copyImage",outputId:e.model.outputId,altOutputId:e.model.alternativeOutputId
    })
  }
  removeInsets(e){
    if(!this._disposed)for(const t of e){
      const i=this.insetMapping.get(t);
      if(!i)continue;
      const r=i.outputId;
      this._sendMessageToWebview({
        type:"clearOutput",rendererId:i.cachedCreation.rendererId,cellUri:i.cellInfo.cellUri.toString(),outputId:r,cellId:i.cellInfo.cellId
      }),this.insetMapping.delete(t),this.pendingWebviewIdleCreationRequest.get(t)?.dispose(),this.pendingWebviewIdleCreationRequest.delete(t),this.pendingWebviewIdleInsetMapping.delete(t),this.reversedPendingWebviewIdleInsetMapping.delete(r),this.reversedInsetMapping.delete(r)
    }
  }
  hideInset(e){
    if(this._disposed)return;
    const t=this.insetMapping.get(e);
    t&&(this.hiddenInsetMapping.add(e), this._sendMessageToWebview({
      type:"hideOutput",outputId:t.outputId,cellId:t.cellInfo.cellId
    }))
  }
  focusWebview(){
    this._disposed||this.webview?.focus()
  }
  selectOutputContents(e){
    if(this._disposed)return;
    const t=e.outputsViewModels.find(r=>r.model.outputId===e.focusedOutputId), i=t?this.insetMapping.get(t)?.outputId:void 0;
    this._sendMessageToWebview({
      type:"select-output-contents",cellOrOutputId:i||e.id
    })
  }
  selectInputContents(e){
    if(this._disposed)return;
    const t=e.outputsViewModels.find(r=>r.model.outputId===e.focusedOutputId), i=t?this.insetMapping.get(t)?.outputId:void 0;
    this._sendMessageToWebview({
      type:"select-input-contents",cellOrOutputId:i||e.id
    })
  }
  focusOutput(e, t, i){
    this._disposed||(i||this.webview?.focus(), this._sendMessageToWebview({
      type:"focus-output",cellOrOutputId:e,alternateId:t
    }))
  }
  blurOutput(){
    this._disposed||this._sendMessageToWebview({
      type:"blur-output"
    })
  }
  async find(e, t){
    if(e==="")return this._sendMessageToWebview({
      type:"findStop",ownerID:t.ownerID
    }), [];
    const i=new Promise(s=>{
      const o=this.webview?.onMessage(a=>{
        a.message.type==="didFind"&&(s(a.message.matches),o?.dispose())
      })
    });
    return this._sendMessageToWebview({
      type:"find",query:e,options:t
    }), await i
  }
  findStop(e){
    this._sendMessageToWebview({
      type:"findStop",ownerID:e
    })
  }
  async findHighlightCurrent(e, t){
    const i=new Promise(s=>{
      const o=this.webview?.onMessage(a=>{
        a.message.type==="didFindHighlightCurrent"&&(s(a.message.offset),o?.dispose())
      })
    });
    return this._sendMessageToWebview({
      type:"findHighlightCurrent",index:e,ownerID:t
    }), await i
  }
  async findUnHighlightCurrent(e, t){
    this._sendMessageToWebview({
      type:"findUnHighlightCurrent",index:e,ownerID:t
    })
  }
  deltaCellOutputContainerClassNames(e, t, i){
    this._sendMessageToWebview({
      type:"decorations",cellId:e,addedClassNames:t,removedClassNames:i
    })
  }
  deltaMarkupPreviewClassNames(e, t, i){
    this.markupPreviewMapping.get(e)&&this._sendMessageToWebview({
      type:"markupDecorations",cellId:e,addedClassNames:t,removedClassNames:i
    })
  }
  updateOutputRenderers(){
    if(!this.webview)return;
    const e=this.getRendererData();
    this.localResourceRootsCache=this._getResourceRootsCache();
    const t=[...this.localResourceRootsCache||[], ...this._currentKernel?[this._currentKernel.localResourceRoot]:[]];
    this.webview.localResourcesRoot=t, this._sendMessageToWebview({
      type:"updateRenderers",rendererData:e
    })
  }
  async updateKernelPreloads(e){
    if(this._disposed||e===this._currentKernel)return;
    const t=this._currentKernel;
    this._currentKernel=e, t&&t.preloadUris.length>0?this.webview?.reload():e&&this._updatePreloadsFromKernel(e)
  }
  _updatePreloadsFromKernel(e){
    const t=[];
    for(const i of e.preloadUris){
      const r=this.environmentService.isExtensionDevelopment&&(i.scheme==="http"||i.scheme==="https")?i:this.asWebviewUri(i,void 0);
      this._preloadsCache.has(r.toString())||(t.push({
        uri:r.toString(),originalUri:i.toString()
      }),this._preloadsCache.add(r.toString()))
    }
    t.length&&this._updatePreloads(t)
  }
  _updatePreloads(e){
    if(!this.webview)return;
    const t=[...this.localResourceRootsCache||[], ...this._currentKernel?[this._currentKernel.localResourceRoot]:[]];
    this.webview.localResourcesRoot=t, this._sendMessageToWebview({
      type:"preload",resources:e
    })
  }
  _sendMessageToWebview(e, t){
    this._disposed||this.webview?.postMessage(e, t)
  }
  dispose(){
    this._disposed=!0, this.webview?.dispose(), this.webview=void 0, this.notebookEditor=null, this.insetMapping.clear(), this.pendingWebviewIdleCreationRequest.clear(), super.dispose()
  }
}, wbn=Dwu=__decorate([__param(6, Wie), __param(7, Ja), __param(8, JA), __param(9, Lr), __param(10, Cc), __param(11, oy), __param(12, Gr), __param(13, kc), __param(14, wi), __param(15, Wx), __param(16, Fn), __param(17, Jl), __param(18, Lr), __param(19, da), __param(20, Hi), __param(21, kp), __param(22, awe), __param(23, bo), __param(24, ea)], wbn)
}
}), Bwu, Juy=