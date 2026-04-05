// Module: out-build/vs/editor/browser/gpu/viewGpuContext.js
// Offset: 1789094 (bundle byte offset)
// Size: 3922 bytes

Ht(), ri(), sI(), _s(), rt(), Uc(), Wt(), uIc(), Ei(), So(), YOn(), f9e(), RlA(), LlA(), yn(), NlA(), JH=class extends at{
  static{
    uz=this
  }
  static{
    this._decorationCssRuleExtractor=new Lyh
  }
  static get decorationCssRuleExtractor(){
    return uz._decorationCssRuleExtractor
  }
  static{
    this._decorationStyleCache=new Nyh
  }
  static get decorationStyleCache(){
    return uz._decorationStyleCache
  }
  static get atlas(){
    if(!uz._atlas)throw new _m("Cannot call ViewGpuContext.textureAtlas before device is resolved");
    return uz._atlas
  }
  get atlas(){
    return uz.atlas
  }
  constructor(e, t, i, r){
    super(), this._instantiationService=t, this._notificationService=i, this.configurationService=r, this.maxGpuCols=2e3, this.canvas=mw(document.createElement("canvas")), this.canvas.setClassName("editorCanvas"), this._register(In.runAndSubscribe(r.onDidChangeConfiguration, l=>{
      if(!l||l.affectsConfiguration("editor.scrollbar.verticalScrollbarSize")){
        const u=r.getValue("editor").scrollbar?.verticalScrollbarSize??14;
        this.canvas.domNode.style.boxSizing="border-box",this.canvas.domNode.style.paddingRight=`${u}px`
      }
    })), this.ctx=Xft(this.canvas.domNode.getContext("webgpu")), uz.device||(uz.device=GY.requestDevice(l=>{
      const u=[{
        label:_(198,null),run:()=>this.configurationService.updateValue("editor.experimentalGpuAcceleration","off")
      }
      ];
      this._notificationService.prompt(Rs.Warning,l,u)
    }).then(l=>(uz.deviceSync=l.object, uz._atlas||(uz._atlas=this._instantiationService.createInstance(b9e, l.object.limits.maxTextureDimension2D, void 0, uz.decorationStyleCache)), l.object)));
    const s=Ua(this, $c().devicePixelRatio);
    this._register(ei($c(), "resize", ()=>{
      s.set($c().devicePixelRatio,void 0)
    })), this.devicePixelRatio=s, this._register(p3(this.devicePixelRatio, ()=>uz.atlas?.clear()));
    const o=Ua(this, {
      width:this.canvas.domNode.width,height:this.canvas.domNode.height
    });
    this._register(yyh(this.canvas.domNode, $c(), (l, u)=>{
      this.canvas.domNode.width=l,this.canvas.domNode.height=u,o.set({
        width:l,height:u
      },void 0)
    })), this.canvasDevicePixelDimensions=o;
    const a=Ua(this, 0);
    this._register(this.configurationService.onDidChangeConfiguration(l=>{
      a.set(e.configuration.options.get(151).contentLeft,void 0)
    })), this.contentLeft=a, this.rectangleRenderer=this._instantiationService.createInstance(Pyh, e, this.contentLeft, this.devicePixelRatio, this.canvas.domNode, this.ctx, uz.device)
  }
  canRender(e, t, i){
    const r=t.getViewLineRenderingData(i);
    if(r.containsRTL||r.maxColumn>this.maxGpuCols)return!1;
    if(r.inlineDecorations.length>0){
      let s=!0;
      for(const o of r.inlineDecorations){
        if(o.type!==0){
          s=!1;
          break
        }
        const a=uz._decorationCssRuleExtractor.getStyleRules(this.canvas.domNode,o.inlineClassName);
        if(s&&=a.every(l=>{
          if(l.selectorText.includes(":"))return!1;
          for(const u of l.style)if(!Myh(u,l.style))return!1;
          return!0
        }),!s)break
      }
      return s
    }
    return!0
  }
  canRenderDetailed(e, t, i){
    const r=t.getViewLineRenderingData(i), s=[];
    if(r.containsRTL&&s.push("containsRTL"), r.maxColumn>this.maxGpuCols&&s.push("maxColumn > maxGpuCols"), r.inlineDecorations.length>0){
      let o=!0;
      const a=[],l=[],u=[];
      for(const d of r.inlineDecorations){
        if(d.type!==0){
          a.push(d.type),o=!1;
          continue
        }
        const m=uz._decorationCssRuleExtractor.getStyleRules(this.canvas.domNode,d.inlineClassName);
        o&&=m.every(p=>{
          if(p.selectorText.includes(":"))return l.push(p.selectorText),!1;
          for(const g of p.style)if(!Myh(g,p.style))return u.push(`${g}: ${p.style[g]}`),!1;
          return!0
        })
      }
      a.length>0&&s.push(`inlineDecorations with unsupported types (${a.map(d=>`\`${d}\``).join(", ")
    })`),u.length>0&&s.push(`inlineDecorations with unsupported CSS rules (${
      u.map(d=>`\`${d}\``).join(", ")
    })`),l.length>0&&s.push(`inlineDecorations with unsupported CSS selectors (${
      l.map(d=>`\`${d}\``).join(", ")
    })`)}return s}},JH=uz=__decorate([__param(1,ln),__param(2,ms),__param(3,Fn)],JH),Fyh=["color","font-weight","opacity"]}});function b3o(n,e){return n.isBasicASCII&&e.useMonospaceOptimizations?new Oyh(n):new Uyh(n)}var Oyh,Uyh,hIc=