// Module: out-build/vs/platform/theme/common/colorUtils.js
// Offset: 877690 (bundle byte offset)
// Size: 2712 bytes

Lv(), vr(), xf(), yn(), mF(), Ws(), Ht(), rt(), (function(n){
  n[n.Darken=0]="Darken", n[n.Lighten=1]="Lighten", n[n.Transparent=2]="Transparent", n[n.Opaque=3]="Opaque", n[n.OneOf=4]="OneOf", n[n.LessProminent=5]="LessProminent", n[n.IfDefinedThenElse=6]="IfDefinedThenElse"
})(Xlh||(Xlh={
  
})), Y4t={
  ColorContribution:"base.contributions.colors"
}, R4n="default", euh=class extends at{
  constructor(){
    super(), this._onDidChangeSchema=this._register(new Qe), this.onDidChangeSchema=this._onDidChangeSchema.event, this.colorSchema={
      type:"object",properties:{
        
      }
    }, this.colorReferenceSchema={
      type:"string",enum:[],enumDescriptions:[]
    }, this.colorsById={
      
    }
  }
  notifyThemeUpdate(n){
    for(const e of Object.keys(this.colorsById)){
      const t=n.getColor(e);
      t&&(this.colorSchema.properties[e].oneOf[0].defaultSnippets[0].body=`\${1:${Xr.Format.CSS.formatHexA(t,!0)}}`)
    }
    this._onDidChangeSchema.fire()
  }
  registerColor(n, e, t, i=!1, r){
    const s={
      id:n,description:t,defaults:e,needsTransparency:i,deprecationMessage:r
    };
    this.colorsById[n]=s;
    const o={
      type:"string",format:"color-hex",defaultSnippets:[{
        body:"${1:#ff0000}"
      }
      ]
    };
    return r&&(o.deprecationMessage=r), i&&(o.pattern="^#(?:(?<rgba>[0-9a-fA-f]{3}[0-9a-eA-E])|(?:[0-9a-fA-F]{6}(?:(?![fF]{2})(?:[0-9a-fA-F]{2}))))?$", o.patternErrorMessage=_(2544, null)), this.colorSchema.properties[n]={
      description:t,oneOf:[o,{
        type:"string",const:R4n,description:_(2545,null)
      }
      ]
    }, this.colorReferenceSchema.enum.push(n), this.colorReferenceSchema.enumDescriptions.push(t), this._onDidChangeSchema.fire(), n
  }
  deregisterColor(n){
    delete this.colorsById[n], delete this.colorSchema.properties[n];
    const e=this.colorReferenceSchema.enum.indexOf(n);
    e!==-1&&(this.colorReferenceSchema.enum.splice(e, 1), this.colorReferenceSchema.enumDescriptions.splice(e, 1)), this._onDidChangeSchema.fire()
  }
  getColors(){
    return Object.keys(this.colorsById).map(n=>this.colorsById[n])
  }
  resolveDefaultColor(n, e){
    const t=this.colorsById[n];
    if(t?.defaults){
      const i=$rA(t.defaults)?t.defaults[e.type]:t.defaults;
      return Qbe(i,e)
    }
  }
  getColorSchema(){
    return this.colorSchema
  }
  getColorReferenceSchema(){
    return this.colorReferenceSchema
  }
  toString(){
    const n=(e, t)=>{
      const i=e.indexOf(".")===-1?0:1,r=t.indexOf(".")===-1?0:1;
      return i!==r?i-r:e.localeCompare(t)
    };
    return Object.keys(this.colorsById).sort(n).map(e=>`- \`${e}\`: ${this.colorsById[e].description}`).join(`
`)
  }
}, Z4t=new euh, Di.add(Y4t.ColorContribution, Z4t), X4t="vscode://schemas/workbench-colors", u1c=Di.as(KN.JSONContribution), u1c.registerSchema(X4t, Z4t.getColorSchema()), d1c=new Hu(()=>u1c.notifySchemaChanged(X4t), 200), Z4t.onDidChangeSchema(()=>{
  d1c.isScheduled()||d1c.schedule()
})
}
}), ym, h1c, P4n, tuh, eOt, nN, Du, x_, m1c, PY, k4o, HrA, JrA, GrA, nuh, iuh, WrA, sVe=