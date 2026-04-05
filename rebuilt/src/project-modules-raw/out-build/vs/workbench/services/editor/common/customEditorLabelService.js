// Module: out-build/vs/workbench/services/editor/common/customEditorLabelService.js
// Offset: 28344678 (bundle byte offset)
// Size: 3444 bytes

yn(), iR(), rt(), Hl(), Yr(), Ei(), Er(), Wt(), ps(), cu(), mpn=class extends at{
  static{
    hpn=this
  }
  static{
    this.SETTING_ID_PATTERNS="workbench.editor.customLabels.patterns"
  }
  static{
    this.SETTING_ID_ENABLED="workbench.editor.customLabels.enabled"
  }
  constructor(e, t){
    super(), this.configurationService=e, this.workspaceContextService=t, this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this.patterns=[], this.enabled=!0, this.cache=new Fnh(1e3), this._templateRegexValidation=/[a-zA-Z0-9]/, this._parsedTemplateExpression=/\$\{
      (dirname|filename|extname|extname\((?<extnameN>[-+]?\d+)\)|dirname\((?<dirnameN>[-+]?\d+)\))\
    }
    /g, this._filenameCaptureExpression=/(?<filename>^\.*[^.]*)/, this.storeEnablementState(), this.storeCustomPatterns(), this.registerListeners()
  }
  registerListeners(){
    this._register(this.configurationService.onDidChangeConfiguration(e=>{
      if(e.affectsConfiguration(hpn.SETTING_ID_ENABLED)){
        const t=this.enabled;
        this.storeEnablementState(),t!==this.enabled&&this.patterns.length>0&&this._onDidChange.fire()
      }
      else e.affectsConfiguration(hpn.SETTING_ID_PATTERNS)&&(this.cache.clear(),this.storeCustomPatterns(),this._onDidChange.fire())
    }))
  }
  storeEnablementState(){
    this.enabled=this.configurationService.getValue(hpn.SETTING_ID_ENABLED)
  }
  storeCustomPatterns(){
    this.patterns=[];
    const e=this.configurationService.getValue(hpn.SETTING_ID_PATTERNS);
    for(const t in e){
      const i=e[t];
      if(!this._templateRegexValidation.test(i))continue;
      const r=FR(t),s=jae(t);
      this.patterns.push({
        pattern:t,template:i,isAbsolutePath:r,parsedPattern:s
      })
    }
    this.patterns.sort((t, i)=>this.patternWeight(i.pattern)-this.patternWeight(t.pattern))
  }
  patternWeight(e){
    let t=0;
    for(const i of e.split("/"))i==="**"?t+=1:i==="*"?t+=10:i.includes("*")||i.includes("?")?t+=50:i!==""&&(t+=100);
    return t
  }
  getName(e){
    if(!this.enabled||this.patterns.length===0)return;
    const t=e.toString(), i=this.cache.get(t);
    if(i!==void 0)return i??void 0;
    const r=this.applyPatterns(e);
    return this.cache.set(t, r??null), r
  }
  applyPatterns(e){
    const t=this.workspaceContextService.getWorkspaceFolder(e);
    let i;
    for(const r of this.patterns){
      let s;
      if(t&&!r.isAbsolutePath?(i||(i=eN(Td(t.uri),e)??e.path),s=i):s=e.path,r.parsedPattern(s))return this.applyTemplate(r.template,e,s)
    }
  }
  applyTemplate(e, t, i){
    let r;
    return e.replace(this._parsedTemplateExpression, (s, o, ...a)=>{
      r=r??hgt(t.path);
      const{
        dirnameN:l="0",extnameN:u="0"
      }
      =a.pop();
      if(o==="filename"){
        const{
          filename:d
        }
        =this._filenameCaptureExpression.exec(r.base)?.groups??{
          
        };
        if(d)return d
      }
      else if(o==="extname"){
        const d=this.getExtnames(r.base);
        if(d)return d
      }
      else if(o.startsWith("extname")){
        const d=parseInt(u),m=this.getNthExtname(r.base,d);
        if(m)return m
      }
      else if(o.startsWith("dirname")){
        const d=parseInt(l),m=this.getNthDirname(zN(i),d);
        if(m)return m
      }
      return s
    })
  }
  removeLeadingDot(e){
    let t=e;
    for(;
    t.startsWith(".");
    )t=t.slice(1);
    return t
  }
  getNthDirname(e, t){
    e=e.startsWith("/")?e.slice(1):e;
    const i=e.split("/");
    return this.getNthFragment(i, t)
  }
  getExtnames(e){
    return this.removeLeadingDot(e).split(".").slice(1).join(".")
  }
  getNthExtname(e, t){
    const i=this.removeLeadingDot(e).split(".");
    return i.shift(), this.getNthFragment(i, t)
  }
  getNthFragment(e, t){
    const i=e.length;
    let r;
    t<0?r=Math.abs(t)-1:r=i-t-1;
    const s=e[r];
    if(!(s===void 0||s===""))return s
  }
}, mpn=hpn=__decorate([__param(0, Fn), __param(1, Lr)], mpn), _ie=xi("ICustomEditorLabelService"), Vi(_ie, mpn, 1)
}
}), ppn, u8A=