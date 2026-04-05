// Module: out-build/vs/editor/contrib/snippet/browser/snippetVariables.js
// Offset: 25266907 (bundle byte offset)
// Size: 6327 bytes

iL(), Hl(), Yr(), oa(), Bc(), QE(), Vde(), Ht(), ps(), OAg=Object.freeze({
  CURRENT_YEAR:!0, CURRENT_YEAR_SHORT:!0, CURRENT_MONTH:!0, CURRENT_DATE:!0, CURRENT_HOUR:!0, CURRENT_MINUTE:!0, CURRENT_SECOND:!0, CURRENT_DAY_NAME:!0, CURRENT_DAY_NAME_SHORT:!0, CURRENT_MONTH_NAME:!0, CURRENT_MONTH_NAME_SHORT:!0, CURRENT_SECONDS_UNIX:!0, CURRENT_TIMEZONE_OFFSET:!0, SELECTION:!0, CLIPBOARD:!0, TM_SELECTED_TEXT:!0, TM_CURRENT_LINE:!0, TM_CURRENT_WORD:!0, TM_LINE_INDEX:!0, TM_LINE_NUMBER:!0, TM_FILENAME:!0, TM_FILENAME_BASE:!0, TM_DIRECTORY:!0, TM_FILEPATH:!0, CURSOR_INDEX:!0, CURSOR_NUMBER:!0, RELATIVE_FILEPATH:!0, BLOCK_COMMENT_START:!0, BLOCK_COMMENT_END:!0, LINE_COMMENT:!0, WORKSPACE_NAME:!0, WORKSPACE_FOLDER:!0, RANDOM:!0, RANDOM_HEX:!0, UUID:!0
}), OQl=class{
  constructor(n){
    this._delegates=n
  }
  resolve(n){
    for(const e of this._delegates){
      const t=e.resolve(n);
      if(t!==void 0)return t
    }
  }
}, UQl=class{
  constructor(n, e, t, i){
    this._model=n, this._selection=e, this._selectionIdx=t, this._overtypingCapturer=i
  }
  resolve(n){
    const{
      name:e
    }
    =n;
    if(e==="SELECTION"||e==="TM_SELECTED_TEXT"){
      let t=this._model.getValueInRange(this._selection)||void 0,i=this._selection.startLineNumber!==this._selection.endLineNumber;
      if(!t&&this._overtypingCapturer){
        const r=this._overtypingCapturer.getLastOvertypedInfo(this._selectionIdx);
        r&&(t=r.value,i=r.multiline)
      }
      if(t&&i&&n.snippet){
        const r=this._model.getLineContent(this._selection.startLineNumber),s=rE(r,0,this._selection.startColumn-1);
        let o=s;
        n.snippet.walk(l=>l===n?!1:(l instanceof gz&&(o=rE(Zv(l.value).pop())),!0));
        const a=voe(o,s);
        t=t.replace(/(\r\n|\r|\n)(.*)/g,(l,u,d)=>`${u}${o.substr(a)}${d}`)
      }
      return t
    }
    else{
      if(e==="TM_CURRENT_LINE")return this._model.getLineContent(this._selection.positionLineNumber);
      if(e==="TM_CURRENT_WORD"){
        const t=this._model.getWordAtPosition({
          lineNumber:this._selection.positionLineNumber,column:this._selection.positionColumn
        });
        return t&&t.word||void 0
      }
      else{
        if(e==="TM_LINE_INDEX")return String(this._selection.positionLineNumber-1);
        if(e==="TM_LINE_NUMBER")return String(this._selection.positionLineNumber);
        if(e==="CURSOR_INDEX")return String(this._selectionIdx);
        if(e==="CURSOR_NUMBER")return String(this._selectionIdx+1)
      }
    }
  }
}, $Ql=class{
  constructor(n, e){
    this._labelService=n, this._model=e
  }
  resolve(n){
    const{
      name:e
    }
    =n;
    if(e==="TM_FILENAME")return fd(this._model.uri.fsPath);
    if(e==="TM_FILENAME_BASE"){
      const t=fd(this._model.uri.fsPath),i=t.lastIndexOf(".");
      return i<=0?t:t.slice(0,i)
    }
    else{
      if(e==="TM_DIRECTORY")return zN(this._model.uri.fsPath)==="."?"":this._labelService.getUriLabel(Td(this._model.uri));
      if(e==="TM_FILEPATH")return this._labelService.getUriLabel(this._model.uri);
      if(e==="RELATIVE_FILEPATH")return this._labelService.getUriLabel(this._model.uri,{
        relative:!0,noPrefix:!0
      })
    }
  }
}, qQl=class{
  constructor(n, e, t, i){
    this._readClipboardText=n, this._selectionIdx=e, this._selectionCount=t, this._spread=i
  }
  resolve(n){
    if(n.name!=="CLIPBOARD")return;
    const e=this._readClipboardText();
    if(e){
      if(this._spread){
        const t=e.split(/\r\n|\n|\r/).filter(i=>!E6(i));
        if(t.length===this._selectionCount)return t[this._selectionIdx]
      }
      return e
    }
  }
}, Sgi=class{
  constructor(e, t, i){
    this._model=e, this._selection=t, this._languageConfigurationService=i
  }
  resolve(e){
    const{
      name:t
    }
    =e, i=this._model.getLanguageIdAtPosition(this._selection.selectionStartLineNumber, this._selection.selectionStartColumn), r=this._languageConfigurationService.getLanguageConfiguration(i).comments;
    if(r){
      if(t==="LINE_COMMENT")return r.lineCommentToken||void 0;
      if(t==="BLOCK_COMMENT_START")return r.blockCommentStartToken||void 0;
      if(t==="BLOCK_COMMENT_END")return r.blockCommentEndToken||void 0
    }
  }
}, Sgi=__decorate([__param(2, JS)], Sgi), HQl=class LUr{
  constructor(){
    this._date=new Date
  }
  static{
    this.dayNames=[_(1546, null), _(1547, null), _(1548, null), _(1549, null), _(1550, null), _(1551, null), _(1552, null)]
  }
  static{
    this.dayNamesShort=[_(1553, null), _(1554, null), _(1555, null), _(1556, null), _(1557, null), _(1558, null), _(1559, null)]
  }
  static{
    this.monthNames=[_(1560, null), _(1561, null), _(1562, null), _(1563, null), _(1564, null), _(1565, null), _(1566, null), _(1567, null), _(1568, null), _(1569, null), _(1570, null), _(1571, null)]
  }
  static{
    this.monthNamesShort=[_(1572, null), _(1573, null), _(1574, null), _(1575, null), _(1576, null), _(1577, null), _(1578, null), _(1579, null), _(1580, null), _(1581, null), _(1582, null), _(1583, null)]
  }
  resolve(e){
    const{
      name:t
    }
    =e;
    if(t==="CURRENT_YEAR")return String(this._date.getFullYear());
    if(t==="CURRENT_YEAR_SHORT")return String(this._date.getFullYear()).slice(-2);
    if(t==="CURRENT_MONTH")return String(this._date.getMonth().valueOf()+1).padStart(2, "0");
    if(t==="CURRENT_DATE")return String(this._date.getDate().valueOf()).padStart(2, "0");
    if(t==="CURRENT_HOUR")return String(this._date.getHours().valueOf()).padStart(2, "0");
    if(t==="CURRENT_MINUTE")return String(this._date.getMinutes().valueOf()).padStart(2, "0");
    if(t==="CURRENT_SECOND")return String(this._date.getSeconds().valueOf()).padStart(2, "0");
    if(t==="CURRENT_DAY_NAME")return LUr.dayNames[this._date.getDay()];
    if(t==="CURRENT_DAY_NAME_SHORT")return LUr.dayNamesShort[this._date.getDay()];
    if(t==="CURRENT_MONTH_NAME")return LUr.monthNames[this._date.getMonth()];
    if(t==="CURRENT_MONTH_NAME_SHORT")return LUr.monthNamesShort[this._date.getMonth()];
    if(t==="CURRENT_SECONDS_UNIX")return String(Math.floor(this._date.getTime()/1e3));
    if(t==="CURRENT_TIMEZONE_OFFSET"){
      const i=this._date.getTimezoneOffset(),r=i>0?"-":"+",s=Math.trunc(Math.abs(i/60)),o=s<10?"0"+s:s,a=Math.abs(i)-s*60,l=a<10?"0"+a:a;
      return r+o+":"+l
    }
  }
}, JQl=class{
  constructor(n){
    this._workspaceService=n
  }
  resolve(n){
    if(!this._workspaceService)return;
    const e=fW(this._workspaceService.getWorkspace());
    if(!fOt(e)){
      if(n.name==="WORKSPACE_NAME")return this._resolveWorkspaceName(e);
      if(n.name==="WORKSPACE_FOLDER")return this._resoveWorkspacePath(e)
    }
  }
  _resolveWorkspaceName(n){
    if(oE(n))return fd(n.uri.path);
    let e=fd(n.configPath.path);
    return e.endsWith(Noe)&&(e=e.substr(0, e.length-Noe.length-1)), e
  }
  _resoveWorkspacePath(n){
    if(oE(n))return pz(n.uri.fsPath);
    const e=fd(n.configPath.path);
    let t=n.configPath.fsPath;
    return t.endsWith(e)&&(t=t.substr(0, t.length-e.length-1)), t?pz(t):"/"
  }
}, GQl=class{
  resolve(n){
    const{
      name:e
    }
    =n;
    if(e==="RANDOM")return Math.random().toString().slice(-6);
    if(e==="RANDOM_HEX")return Math.random().toString(16).slice(-6);
    if(e==="UUID")return Wr()
  }
}
}
}), K1e, WQl, QQl, kgi, $Ag=