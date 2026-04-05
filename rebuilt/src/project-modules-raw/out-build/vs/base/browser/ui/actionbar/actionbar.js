// Module: out-build/vs/base/browser/ui/actionbar/actionbar.js
// Offset: 2121392 (bundle byte offset)
// Size: 12209 bytes

ri(), Tb(), Rx(), mb(), nl(), yn(), rt(), Js(), S0h(), (function(n){
  n[n.HORIZONTAL=0]="HORIZONTAL", n[n.VERTICAL=1]="VERTICAL"
})(k0h||(k0h={
  
})), Gf=class extends at{
  constructor(n, e={
    
  }){
    super(), this._actionRunnerDisposables=this._register(new Ut), this.viewItemDisposables=this._register(new mp), this.triggerKeyDown=!1, this.focusable=!0, this._onDidBlur=this._register(new Qe), this.onDidBlur=this._onDidBlur.event, this._onDidCancel=this._register(new Qe({
      onWillAddFirstListener:()=>this.cancelHasListener=!0
    })), this.onDidCancel=this._onDidCancel.event, this.cancelHasListener=!1, this._onDidRun=this._register(new Qe), this.onDidRun=this._onDidRun.event, this._onWillRun=this._register(new Qe), this.onWillRun=this._onWillRun.event, this.options=e, this._context=e.context??null, this._orientation=this.options.orientation??0, this._triggerKeys={
      keyDown:this.options.triggerKeys?.keyDown??!1,keys:this.options.triggerKeys?.keys??[3,10]
    }, this._hoverDelegate=e.hoverDelegate??this._register(F6()), this.options.actionRunner?this._actionRunner=this.options.actionRunner:(this._actionRunner=new jD, this._actionRunnerDisposables.add(this._actionRunner)), this._actionRunnerDisposables.add(this._actionRunner.onDidRun(r=>this._onDidRun.fire(r))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun(r=>this._onWillRun.fire(r))), this.viewItems=[], this.focusedItem=void 0, this.domNode=document.createElement("div"), this.domNode.className="monaco-action-bar";
    let t, i;
    switch(this._orientation){
      case 0:t=[15],i=[17];
      break;
      case 1:t=[16],i=[18],this.domNode.className+=" vertical";
      break
    }
    this._register(ei(this.domNode, ir.KEY_DOWN, r=>{
      const s=new vh(r);
      let o=!0;
      const a=typeof this.focusedItem=="number"?this.viewItems[this.focusedItem]:void 0;
      t&&(s.equals(t[0])||s.equals(t[1]))?o=this.focusPrevious():i&&(s.equals(i[0])||s.equals(i[1]))?o=this.focusNext():s.equals(9)&&this.cancelHasListener?this._onDidCancel.fire():s.equals(14)?o=this.focusFirst():s.equals(13)?o=this.focusLast():s.equals(2)&&a instanceof w3&&a.trapsArrowNavigation?o=this.focusNext(void 0,!0):this.isTriggerKeyEvent(s)?this._triggerKeys.keyDown?this.doTrigger(s):this.triggerKeyDown=!0:o=!1,o&&(s.preventDefault(),s.stopPropagation())
    })), this._register(ei(this.domNode, ir.KEY_UP, r=>{
      const s=new vh(r);
      this.isTriggerKeyEvent(s)?(!this._triggerKeys.keyDown&&this.triggerKeyDown&&(this.triggerKeyDown=!1,this.doTrigger(s)),s.preventDefault(),s.stopPropagation()):(s.equals(2)||s.equals(1026)||s.equals(16)||s.equals(18)||s.equals(15)||s.equals(17))&&this.updateFocusedItem()
    })), this.focusTracker=this._register(CC(this.domNode)), this._register(this.focusTracker.onDidBlur(()=>{
      (_C()===this.domNode||!HS(_C(),this.domNode))&&(this._onDidBlur.fire(),this.previouslyFocusedItem=this.focusedItem,this.focusedItem=void 0,this.triggerKeyDown=!1)
    })), this._register(this.focusTracker.onDidFocus(()=>this.updateFocusedItem())), this.actionsList=document.createElement("ul"), this.actionsList.className="actions-container", this.options.highlightToggledItems&&this.actionsList.classList.add("highlight-toggled"), this.actionsList.setAttribute("role", this.options.ariaRole||"toolbar"), this.options.ariaLabel&&this.actionsList.setAttribute("aria-label", this.options.ariaLabel), this.domNode.appendChild(this.actionsList), n.appendChild(this.domNode)
  }
  refreshRole(){
    this.length()>=1?this.actionsList.setAttribute("role", this.options.ariaRole||"toolbar"):this.actionsList.setAttribute("role", "presentation")
  }
  setAriaLabel(n){
    n?this.actionsList.setAttribute("aria-label", n):this.actionsList.removeAttribute("aria-label")
  }
  setFocusable(n){
    if(this.focusable=n, this.focusable){
      const e=this.viewItems.find(t=>t instanceof w3&&t.isEnabled());
      e instanceof w3&&e.setFocusable(!0)
    }
    else this.viewItems.forEach(e=>{
      e instanceof w3&&e.setFocusable(!1)
    })
  }
  isTriggerKeyEvent(n){
    let e=!1;
    return this._triggerKeys.keys.forEach(t=>{
      e=e||n.equals(t)
    }), e
  }
  updateFocusedItem(){
    for(let n=0;
    n<this.actionsList.children.length;
    n++){
      const e=this.actionsList.children[n];
      if(HS(_C(),e)){
        this.focusedItem=n,this.viewItems[this.focusedItem]?.showHover?.();
        break
      }
    }
  }
  get context(){
    return this._context
  }
  set context(n){
    this._context=n, this.viewItems.forEach(e=>e.setActionContext(n))
  }
  get actionRunner(){
    return this._actionRunner
  }
  set actionRunner(n){
    this._actionRunner=n, this._actionRunnerDisposables.clear(), this._actionRunnerDisposables.add(this._actionRunner.onDidRun(e=>this._onDidRun.fire(e))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun(e=>this._onWillRun.fire(e))), this.viewItems.forEach(e=>e.actionRunner=n)
  }
  getContainer(){
    return this.domNode
  }
  hasAction(n){
    return this.viewItems.findIndex(e=>e.action.id===n.id)!==-1
  }
  getAction(n){
    if(typeof n=="number")return this.viewItems[n]?.action;
    if(wf(n)){
      for(;
      n.parentElement!==this.actionsList;
      ){
        if(!n.parentElement)return;
        n=n.parentElement
      }
      for(let e=0;
      e<this.actionsList.childNodes.length;
      e++)if(this.actionsList.childNodes[e]===n)return this.viewItems[e].action
    }
  }
  push(n, e={
    
  }){
    const t=Array.isArray(n)?n:[n];
    let i=_1(e.index)?e.index:null;
    t.forEach(r=>{
      const s=document.createElement("li");
      s.className="action-item",s.setAttribute("role","presentation");
      let o;
      const a={
        hoverDelegate:this._hoverDelegate,...e,isTabList:this.options.ariaRole==="tablist"
      };
      this.options.actionViewItemProvider&&(o=this.options.actionViewItemProvider(r,a)),o||(o=new aI(this.context,r,a)),this.options.allowContextMenu||this.viewItemDisposables.set(o,ei(s,ir.CONTEXT_MENU,l=>{
        zu.stop(l,!0)
      })),o.actionRunner=this._actionRunner,o.setActionContext(this.context),o.render(s),this.focusable&&o instanceof w3&&this.viewItems.length===0&&o.setFocusable(!0),i===null||i<0||i>=this.actionsList.children.length?(this.actionsList.appendChild(s),this.viewItems.push(o)):(this.actionsList.insertBefore(s,this.actionsList.children[i]),this.viewItems.splice(i,0,o),i++)
    }), typeof this.focusedItem=="number"&&this.focus(this.focusedItem), this.refreshRole()
  }
  getWidth(n){
    if(n>=0&&n<this.actionsList.children.length){
      const e=this.actionsList.children.item(n);
      if(e)return e.clientWidth
    }
    return 0
  }
  getHeight(n){
    if(n>=0&&n<this.actionsList.children.length){
      const e=this.actionsList.children.item(n);
      if(e)return e.clientHeight
    }
    return 0
  }
  pull(n){
    n>=0&&n<this.viewItems.length&&(this.actionsList.childNodes[n].remove(), this.viewItemDisposables.deleteAndDispose(this.viewItems[n]), Bo(this.viewItems.splice(n, 1)), this.refreshRole())
  }
  clear(){
    this.isEmpty()||(this.viewItems=Bo(this.viewItems), this.viewItemDisposables.clearAndDisposeAll(), th(this.actionsList), this.refreshRole())
  }
  length(){
    return this.viewItems.length
  }
  isEmpty(){
    return this.viewItems.length===0
  }
  focus(n){
    let e=!1, t;
    if(n===void 0?e=!0:typeof n=="number"?t=n:typeof n=="boolean"&&(e=n), e&&typeof this.focusedItem>"u"){
      const i=this.viewItems.findIndex(r=>r.isEnabled());
      this.focusedItem=i===-1?void 0:i,this.updateFocus(void 0,void 0,!0)
    }
    else t!==void 0&&(this.focusedItem=t), this.updateFocus(void 0, void 0, !0)
  }
  focusFirst(){
    return this.focusedItem=this.length()-1, this.focusNext(!0)
  }
  focusLast(){
    return this.focusedItem=0, this.focusPrevious(!0)
  }
  focusNext(n, e){
    if(typeof this.focusedItem>"u")this.focusedItem=this.viewItems.length-1;
    else if(this.viewItems.length<=1)return!1;
    const t=this.focusedItem;
    let i;
    do{
      if(!n&&this.options.preventLoopNavigation&&this.focusedItem+1>=this.viewItems.length)return this.focusedItem=t,!1;
      this.focusedItem=(this.focusedItem+1)%this.viewItems.length,i=this.viewItems[this.focusedItem]
    }
    while(this.focusedItem!==t&&(this.options.focusOnlyEnabledItems&&!i.isEnabled()||i.action.id===id.ID));
    return this.updateFocus(void 0, void 0, e), !0
  }
  focusPrevious(n){
    if(typeof this.focusedItem>"u")this.focusedItem=0;
    else if(this.viewItems.length<=1)return!1;
    const e=this.focusedItem;
    let t;
    do{
      if(this.focusedItem=this.focusedItem-1,this.focusedItem<0){
        if(!n&&this.options.preventLoopNavigation)return this.focusedItem=e,!1;
        this.focusedItem=this.viewItems.length-1
      }
      t=this.viewItems[this.focusedItem]
    }
    while(this.focusedItem!==e&&(this.options.focusOnlyEnabledItems&&!t.isEnabled()||t.action.id===id.ID));
    return this.updateFocus(!0), !0
  }
  updateFocus(n, e, t=!1){
    typeof this.focusedItem>"u"&&this.actionsList.focus({
      preventScroll:e
    }), this.previouslyFocusedItem!==void 0&&this.previouslyFocusedItem!==this.focusedItem&&this.viewItems[this.previouslyFocusedItem]?.blur();
    const i=this.focusedItem!==void 0?this.viewItems[this.focusedItem]:void 0;
    if(i){
      let r=!0;
      Aze(i.focus)||(r=!1),this.options.focusOnlyEnabledItems&&Aze(i.isEnabled)&&!i.isEnabled()&&(r=!1),i.action.id===id.ID&&(r=!1),r?(t||this.previouslyFocusedItem!==this.focusedItem)&&(i.focus(n),this.previouslyFocusedItem=this.focusedItem):(this.actionsList.focus({
        preventScroll:e
      }),this.previouslyFocusedItem=void 0),r&&i.showHover?.()
    }
  }
  doTrigger(n){
    if(typeof this.focusedItem>"u")return;
    const e=this.viewItems[this.focusedItem];
    if(e instanceof w3){
      const t=e._context===null||e._context===void 0?n:e._context;
      this.run(e._action,t)
    }
  }
  async run(n, e){
    await this._actionRunner.run(n, e)
  }
  dispose(){
    this._context=void 0, this.viewItems=Bo(this.viewItems), this.getContainer().remove(), super.dispose()
  }
}
}
});
function AdA(n, e, t, i){
  if(n.length===0)return e;
  if(e.length===0)return n;
  const r=[];
  let s=0, o=0;
  for(;
  s<n.length&&o<e.length;
  ){
    const a=n[s], l=e[o], u=t(a), d=t(l);
    u<d?(r.push(a), s++):u>d?(r.push(l), o++):(r.push(i(a, l)), s++, o++)
  }
  for(;
  s<n.length;
  )r.push(n[s]), s++;
  for(;
  o<e.length;
  )r.push(e[o]), o++;
  return r
}
function t5o(n, e){
  const t=new Ut, i=n.createDecorationsCollection();
  return t.add(_5e({
    debugName:()=>`Apply decorations from ${e.debugName}`
  }, r=>{
    const s=e.read(r);
    i.set(s)
  })), t.add({
    dispose:()=>{
      i.clear()
    }
  }), t
}
function A3n(n, e){
  return n.appendChild(e), $i(()=>{
    e.remove()
  })
}
function ydA(n, e){
  return n.prepend(e), $i(()=>{
    e.remove()
  })
}
function E0h(n, e, t){
  let i=e.get(), r=i, s=i;
  const o=Ua("animatedValue", i);
  let a=-1;
  const l=300;
  let u;
  t.add(p4t({
    createEmptyChangeSummary:()=>({
      animate:!1
    }), handleChange:(m, p)=>(m.didChange(e)&&(p.animate=p.animate||m.change), !0)
  }, (m, p)=>{
    u!==void 0&&(n.cancelAnimationFrame(u), u=void 0), r=s, i=e.read(m), a=Date.now()-(p.animate?0:l), d()
  }));
  function d(){
    const m=Date.now()-a;
    s=Math.floor(wdA(m, r, i-r, l)), m<l?u=n.requestAnimationFrame(d):s=i, o.set(s, void 0)
  }
  return o
}
function wdA(n, e, t, i){
  return n===i?e+t:t*(-Math.pow(2, -10*n/i)+1)+e
}
function aKe(n, e){
  return Oc(t=>{
    for(let[i, r]of Object.entries(e))r&&typeof r=="object"&&"read"in r&&(r=r.read(t)), typeof r=="number"&&(r=`${r}px`), i=i.replace(/[A-Z]/g, s=>"-"+s.toLowerCase()), n.style[i]=r
  })
}
function n5o(n, e, t, i){
  const r=new Ut, s=[];
  return r.add(M0((o, a)=>{
    const l=e.read(o), u=new Map, d=new Map;
    t&&t(!0), n.changeViewZones(m=>{
      for(const p of s)m.removeZone(p),i?.delete(p);
      s.length=0;
      for(const p of l){
        const g=m.addZone(p);
        p.setZoneId&&p.setZoneId(g),s.push(g),i?.add(g),u.set(p,g)
      }
    }), t&&t(!1), a.add(p4t({
      createEmptyChangeSummary(){
        return{
          zoneIds:[]
        }
      },handleChange(m,p){
        const g=d.get(m.changedObservable);
        return g!==void 0&&p.zoneIds.push(g),!0
      }
    }, (m, p)=>{
      for(const g of l)g.onChange&&(d.set(g.onChange,u.get(g)),g.onChange.read(m));
      t&&t(!0),n.changeViewZones(g=>{
        for(const f of p.zoneIds)g.layoutZone(f)
      }),t&&t(!1)
    }))
  })), r.add({
    dispose(){
      t&&t(!0),n.changeViewZones(o=>{
        for(const a of s)o.removeZone(a)
      }),i?.clear(),t&&t(!1)
    }
  }), r
}
function x0h(n, e){
  const t=Cbe(e, r=>r.original.startLineNumber<=n.lineNumber);
  if(!t)return Zt.fromPositions(n);
  if(t.original.endLineNumberExclusive<=n.lineNumber){
    const r=n.lineNumber-t.original.endLineNumberExclusive+t.modified.endLineNumberExclusive;
    return Zt.fromPositions(new ar(r, n.column))
  }
  if(!t.innerChanges)return Zt.fromPositions(new ar(t.modified.startLineNumber, 1));
  const i=Cbe(t.innerChanges, r=>r.originalRange.getStartPosition().isBeforeOrEqual(n));
  if(!i){
    const r=n.lineNumber-t.original.startLineNumber+t.modified.startLineNumber;
    return Zt.fromPositions(new ar(r, n.column))
  }
  if(i.originalRange.containsPosition(n))return i.modifiedRange;
  {
    const r=_dA(i.originalRange.getEndPosition(), n);
    return Zt.fromPositions(r.addToPosition(i.modifiedRange.getEndPosition()))
  }
}
function _dA(n, e){
  return n.lineNumber===e.lineNumber?new YN(0, e.column-n.column):new YN(e.lineNumber-n.lineNumber, e.column-1)
}
function CdA(n, e){
  let t;
  return n.filter(i=>{
    const r=e(i, t);
    return t=i, r
  })
}
var wDc, i5o, dbt, T0h, I0h, hbt, r5o, D0h, Gde=