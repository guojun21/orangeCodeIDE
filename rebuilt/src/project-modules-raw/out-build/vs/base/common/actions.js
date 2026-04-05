// Module: out-build/vs/base/common/actions.js
// Offset: 574641 (bundle byte offset)
// Size: 2334 bytes

yn(), rt(), Ht(), Hs=class extends at{
  constructor(n, e="", t="", i=!0, r){
    super(), this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._enabled=!0, this._id=n, this._label=e, this._cssClass=t, this._enabled=i, this._actionCallback=r
  }
  get id(){
    return this._id
  }
  get label(){
    return this._label
  }
  set label(n){
    this._setLabel(n)
  }
  _setLabel(n){
    this._label!==n&&(this._label=n, this._onDidChange.fire({
      label:n
    }))
  }
  get tooltip(){
    return this._tooltip||""
  }
  set tooltip(n){
    this._setTooltip(n)
  }
  _setTooltip(n){
    this._tooltip!==n&&(this._tooltip=n, this._onDidChange.fire({
      tooltip:n
    }))
  }
  get class(){
    return this._cssClass
  }
  set class(n){
    this._setClass(n)
  }
  _setClass(n){
    this._cssClass!==n&&(this._cssClass=n, this._onDidChange.fire({
      class:n
    }))
  }
  get enabled(){
    return this._enabled
  }
  set enabled(n){
    this._setEnabled(n)
  }
  _setEnabled(n){
    this._enabled!==n&&(this._enabled=n, this._onDidChange.fire({
      enabled:n
    }))
  }
  get checked(){
    return this._checked
  }
  set checked(n){
    this._setChecked(n)
  }
  _setChecked(n){
    this._checked!==n&&(this._checked=n, this._onDidChange.fire({
      checked:n
    }))
  }
  async run(n, e){
    this._actionCallback&&await this._actionCallback(n)
  }
}, jD=class extends at{
  constructor(){
    super(...arguments), this._onWillRun=this._register(new Qe), this.onWillRun=this._onWillRun.event, this._onDidRun=this._register(new Qe), this.onDidRun=this._onDidRun.event
  }
  async run(n, e){
    if(!n.enabled)return;
    this._onWillRun.fire({
      action:n
    });
    let t;
    try{
      await this.runAction(n,e)
    }
    catch(i){
      t=i
    }
    this._onDidRun.fire({
      action:n,error:t
    })
  }
  async runAction(n, e){
    await n.run(e)
  }
}, id=class rad{
  constructor(){
    this.id=rad.ID, this.label="", this.tooltip="", this.class="separator", this.enabled=!1, this.checked=!1
  }
  static join(...e){
    let t=[];
    for(const i of e)i.length&&(t.length?t=[...t, new rad, ...i]:t=i);
    return t
  }
  static{
    this.ID="vs.actions.separator"
  }
  async run(){
    
  }
}, KP=class{
  get actions(){
    return this._actions
  }
  constructor(n, e, t, i){
    this.tooltip="", this.enabled=!0, this.checked=void 0, this.id=n, this.label=e, this.class=i, this._actions=t
  }
  async run(){
    
  }
}, gah=class uJb extends Hs{
  static{
    this.ID="vs.actions.empty"
  }
  constructor(){
    super(uJb.ID, _(44, null), void 0, !1)
  }
}
}
});
function Pn(n, e){
  if(Qo(e)){
    const t=CFo[e];
    if(t===void 0)throw new Error(`${n} references an unknown codicon: ${e}`);
    e=t
  }
  return CFo[n]=e, {
    id:n
  }
}
function fah(){
  return CFo
}
var CFo, SFo=