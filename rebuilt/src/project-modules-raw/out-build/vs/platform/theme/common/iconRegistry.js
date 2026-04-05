// Module: out-build/vs/platform/theme/common/iconRegistry.js
// Offset: 2149443 (bundle byte offset)
// Size: 4279 bytes

vr(), qi(), SFo(), Jr(), yn(), Js(), Yn(), Ht(), mF(), Ws(), rt(), _Dc={
  IconContribution:"base.contributions.icons"
}, (function(n){
  function e(t, i){
    let r=t.defaults;
    for(;
    Qt.isThemeIcon(r);
    ){
      const s=lKe.getIcon(r.id);
      if(!s)return;
      r=s.defaults
    }
    return r
  }
  n.getDefinition=e
})(P0h||(P0h={
  
})), (function(n){
  function e(i){
    return{
      weight:i.weight,style:i.style,src:i.src.map(r=>({
        format:r.format,location:r.location.toString()
      }))
    }
  }
  n.toJSONObject=e;
  function t(i){
    const r=s=>Qo(s)?s:void 0;
    if(i&&Array.isArray(i.src)&&i.src.every(s=>Qo(s.format)&&Qo(s.location)))return{
      weight:r(i.weight),style:r(i.style),src:i.src.map(s=>({
        format:s.format,location:je.parse(s.location)
      }))
    }
  }
  n.fromJSONObject=t
})(c5o||(c5o={
  
})), T3t=/^([\w_-]+)$/, l5o=/^(normal|italic|(oblique[ \w\s-]+))$/, u5o=/^(normal|bold|lighter|bolder|(\d{
  0-1000
}))$/, d5o=/^([\w_.%+-]+)$/, L0h=/^woff|woff2|truetype|opentype|embedded-opentype|svg$/, CDc=/^#[0-9a-fA-F]{
  0, 6
}
$/, w3n=_(2546, null), N0h=class extends at{
  constructor(){
    super(), this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this.iconSchema={
      definitions:{
        icons:{
          type:"object",properties:{
            fontId:{
              type:"string",description:_(2547,null),pattern:T3t.source,patternErrorMessage:w3n
            },fontCharacter:{
              type:"string",description:_(2548,null)
            }
          },additionalProperties:!1,defaultSnippets:[{
            body:{
              fontCharacter:"\\\\e030"
            }
          }
          ]
        }
      },type:"object",properties:{
        
      }
    }, this.iconReferenceSchema={
      type:"string",pattern:`^${Qt.iconNameExpression}$`,enum:[],enumDescriptions:[]
    }, this.iconsById={
      
    }, this.iconFontsById={
      
    }
  }
  registerIcon(n, e, t, i){
    const r=this.iconsById[n];
    if(r){
      if(t&&!r.description){
        r.description=t,this.iconSchema.properties[n].markdownDescription=`${t} $(${n})`;
        const a=this.iconReferenceSchema.enum.indexOf(n);
        a!==-1&&(this.iconReferenceSchema.enumDescriptions[a]=t),this._onDidChange.fire()
      }
      return r
    }
    const s={
      id:n,description:t,defaults:e,deprecationMessage:i
    };
    this.iconsById[n]=s;
    const o={
      $ref:"#/definitions/icons"
    };
    return i&&(o.deprecationMessage=i), t&&(o.markdownDescription=`${t}: $(${n})`), this.iconSchema.properties[n]=o, this.iconReferenceSchema.enum.push(n), this.iconReferenceSchema.enumDescriptions.push(t||""), this._onDidChange.fire(), {
      id:n
    }
  }
  deregisterIcon(n){
    delete this.iconsById[n], delete this.iconSchema.properties[n];
    const e=this.iconReferenceSchema.enum.indexOf(n);
    e!==-1&&(this.iconReferenceSchema.enum.splice(e, 1), this.iconReferenceSchema.enumDescriptions.splice(e, 1)), this._onDidChange.fire()
  }
  getIcons(){
    return Object.keys(this.iconsById).map(n=>this.iconsById[n])
  }
  getIcon(n){
    return this.iconsById[n]
  }
  getIconSchema(){
    return this.iconSchema
  }
  getIconReferenceSchema(){
    return this.iconReferenceSchema
  }
  registerIconFont(n, e){
    const t=this.iconFontsById[n];
    return t||(this.iconFontsById[n]=e, this._onDidChange.fire(), e)
  }
  deregisterIconFont(n){
    delete this.iconFontsById[n]
  }
  getIconFont(n){
    return this.iconFontsById[n]
  }
  toString(){
    const n=(r, s)=>r.id.localeCompare(s.id), e=r=>{
      for(;
      Qt.isThemeIcon(r.defaults);
      )r=this.iconsById[r.defaults.id];
      return`codicon codicon-${r?r.id:""}`
    }, t=[];
    t.push("| preview     | identifier                        | default codicon ID                | description"), t.push("| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |");
    const i=Object.keys(this.iconsById).map(r=>this.iconsById[r]);
    for(const r of i.filter(s=>!!s.description).sort(n))t.push(`|<i class="${e(r)}"></i>|${r.id}|${Qt.isThemeIcon(r.defaults)?r.defaults.id:r.id}|${r.description||""}|`);
    t.push("| preview     | identifier                        "), t.push("| ----------- | --------------------------------- |");
    for(const r of i.filter(s=>!Qt.isThemeIcon(s.defaults)).sort(n))t.push(`|<i class="${e(r)}"></i>|${r.id}|`);
    return t.join(`
`)
  }
}, lKe=new N0h, Di.add(_Dc.IconContribution, lKe), kdA(), h5o="vscode://schemas/icons", SDc=Di.as(KN.JSONContribution), SDc.registerSchema(h5o, lKe.getIconSchema()), kDc=new Hu(()=>SDc.notifySchemaChanged(h5o), 200), lKe.onDidChange(()=>{
  kDc.isScheduled()||kDc.schedule()
}), E9e=us("widget-close", Be.close, _(2549, null)), M0h=us("goto-previous-location", Be.arrowUp, _(2550, null)), F0h=us("goto-next-location", Be.arrowDown, _(2551, null)), m5o=Qt.modify(Be.sync, "spin"), ARe=Qt.modify(Be.loading, "spin")
}
}), EdA=