// Module: out-build/external/lexical/lexical/lexical.js
// Offset: 4091703 (bundle byte offset)
// Size: 52430 bytes

aqh(), YOc(), uqh(), ri(), iu(), _r(), xA=0, lI=1, Cve=3, uhe=4, C7h=class{
  constructor(n, e, t, i, r, s, o){
    this._parentEditor=e, this._rootElement=null, this._editorState=n, this._pendingEditorState=null, this._compositionKey=null, this._deferred=[], this._keyToDOMMap=new Map, this._updates=[], this._updating=!1, this._listeners={
      decorator:new Set,editable:new Set,mutation:new Map,root:new Set,textcontent:new Set,update:new Set
    }, this._commands=new Map, this._config=i, this._nodes=t, this._decorators={
      
    }, this._pendingDecorators=null, this._dirtyType=fYe, this._cloneNotNeeded=new Set, this._dirtyLeaves=new Set, this._dirtyElements=new Map, this._normalizedNodes=new Set, this._updateTags=new Set, this._observer=null, this._key=u7h(), this._onError=r, this._htmlConversions=s, this._editable=o, this._headless=e!==null&&e._headless, this._window=null, this._blockCursorElement=null
  }
  isComposing(){
    return this._compositionKey!=null
  }
  registerUpdateListener(n){
    const e=this._listeners.update;
    return e.add(n), ()=>{
      e.delete(n)
    }
  }
  registerEditableListener(n){
    const e=this._listeners.editable;
    return e.add(n), ()=>{
      e.delete(n)
    }
  }
  registerDecoratorListener(n){
    const e=this._listeners.decorator;
    return e.add(n), ()=>{
      e.delete(n)
    }
  }
  registerTextContentListener(n){
    const e=this._listeners.textcontent;
    return e.add(n), ()=>{
      e.delete(n)
    }
  }
  registerRootListener(n){
    const e=this._listeners.root;
    return n(this._rootElement, null), e.add(n), ()=>{
      n(null,this._rootElement),e.delete(n)
    }
  }
  registerCommand(n, e, t){
    t===void 0&&Yg(!1, 'Listener for type "command" requires a "priority".');
    const i=this._commands;
    i.has(n)||i.set(n, [new Set, new Set, new Set, new Set, new Set]);
    const r=i.get(n);
    r===void 0&&Yg(!1, "registerCommand: Command %s not found in command map", String(n));
    const s=r[t];
    return s.add(e), ()=>{
      s.delete(e),r.every(o=>o.size===0)&&i.delete(n)
    }
  }
  registerMutationListener(n, e){
    this._nodes.get(n.getType())===void 0&&Yg(!1, "Node %s has not been registered. Ensure node has been passed to createEditor.", n.name);
    const i=this._listeners.mutation;
    return i.set(e, n), ()=>{
      i.delete(e)
    }
  }
  registerNodeTransformToKlass(n, e){
    const t=n.getType(), i=this._nodes.get(t);
    return i===void 0&&Yg(!1, "Node %s has not been registered. Ensure node has been passed to createEditor.", n.name), i.transforms.add(e), i
  }
  registerNodeTransform(n, e){
    const t=this.registerNodeTransformToKlass(n, e), i=[t], r=t.replaceWithKlass;
    if(r!=null){
      const s=this.registerNodeTransformToKlass(r,e);
      i.push(s)
    }
    return ubA(this, n.getType()), ()=>{
      i.forEach(s=>s.transforms.delete(e))
    }
  }
  hasNodes(n){
    for(let e=0;
    e<n.length;
    e++){
      const i=n[e].getType();
      if(!this._nodes.has(i))return!1
    }
    return!0
  }
  dispatchCommand(n, e){
    return Fd(this, n, e)
  }
  getDecorators(){
    return this._decorators
  }
  getRootElement(){
    return this._rootElement
  }
  getKey(){
    return this._key
  }
  setRootElement(n){
    const e=this._rootElement;
    if(n!==e){
      const t=_6n(this._config.theme,"root"),i=this._pendingEditorState||this._editorState;
      if(this._rootElement=n,dqh(this,e,n,i),e!==null&&(this._config.disableEvents||wfA(e),t!=null&&e.classList.remove(...t)),n!==null){
        const r=JbA(n),s=n.style;
        s.userSelect="text",s.whiteSpace="pre-wrap",s.wordBreak="break-word",n.setAttribute("data-lexical-editor","true"),this._window=r,this._dirtyType=Evt,kqh(this),this._updateTags.add("history-merge"),gvt(this),this._config.disableEvents||yfA(n,this),t!=null&&n.classList.add(...t)
      }
      else this._window=null;
      b6n("root",this,!1,n,e)
    }
  }
  getElementByKey(n){
    return this._keyToDOMMap.get(n)||null
  }
  getEditorState(){
    return this._editorState
  }
  setEditorState(n, e){
    n.isEmpty()&&Yg(!1, "setEditorState: the editor state is empty. Ensure the editor state's root node never becomes empty."), Sqh(this);
    const t=this._pendingEditorState, i=this._updateTags, r=e!==void 0?e.tag:null;
    t!==null&&!t.isEmpty()&&(r!=null&&i.add(r), gvt(this)), this._pendingEditorState=n, this._dirtyType=Evt, this._dirtyElements.set("root", !1), this._compositionKey=null, r!=null&&i.add(r), gvt(this)
  }
  parseEditorState(n, e){
    const t=typeof n=="string"?JSON.parse(n):n;
    return ZfA(t, this, e)
  }
  update(n, e){
    ahe(this, n, e)
  }
  focus(n, e={
    
  }){
    const t=this._rootElement;
    t!==null&&(t.setAttribute("autocapitalize", "off"), ahe(this, ()=>{
      const i=Wd(),r=lf();
      i!==null?i.dirty=!0:r.getChildrenSize()!==0&&(e.defaultSelection==="rootStart"?r.selectStart():r.selectEnd())
    }, {
      onUpdate:()=>{
        t.removeAttribute("autocapitalize"),n&&n()
      },tag:"focus"
    }), this._pendingEditorState===null&&t.removeAttribute("autocapitalize"))
  }
  blur(){
    const n=this._rootElement;
    n!==null&&n.blur();
    const e=Y9e(this);
    e!==null&&e.removeAllRanges()
  }
  isEditable(){
    return this._editable
  }
  setEditable(n){
    this._editable!==n&&(this._editable=n, b6n("editable", this, !0, n))
  }
  toJSON(){
    return{
      editorState:this._editorState.toJSON()
    }
  }
}, B3c=class VGb{
  constructor(e, t){
    this._nodeMap=e, this._selection=t||null, this._flushSync=!1, this._readOnly=!1
  }
  isEmpty(){
    return this._nodeMap.size===1&&this._selection===null
  }
  read(e){
    return Yqh(this, e)
  }
  clone(e){
    const t=new VGb(this._nodeMap, e===void 0?this._selection:e);
    return t._readOnly=!0, t
  }
  toJSON(){
    return Yqh(this, ()=>({
      root:mqh(lf())
    }))
  }
}, zRe=Object.freeze({
  
}), yUo=30, wUo=[["keydown", AfA], ["keyup", vfA], ["pointerdown", dfA], ["compositionstart", ffA], ["compositionend", bfA], ["input", gfA], ["click", ufA], ["cut", zRe], ["copy", zRe], ["dragstart", zRe], ["dragover", zRe], ["dragend", zRe], ["paste", zRe], ["focus", zRe], ["blur", zRe], ["drop", zRe]], hvt&&wUo.push(["beforeinput", (n, e)=>pfA(n, e)]), w9t=0, R3c=0, P3c=0, vvt=null, _9t=new WeakMap, _Uo=new WeakMap, CUo=!1, SUo=!1, C9t=!1, S9t=!1, L3c=[0, "", 0, "root", 0], Avt=new Map, S7h=100, kUo=!1, EUo=0, E6n=class{
  static getType(){
    Yg(!1, "LexicalNode: Node %s does not implement .getType().", this.name)
  }
  static clone(n){
    Yg(!1, "LexicalNode: Node %s does not implement .clone().", this.name)
  }
  constructor(n){
    this.__type=this.constructor.getType(), this.__parent=null, this.__prev=null, this.__next=null, i7h(this, n)
  }
  getType(){
    return this.__type
  }
  isAttached(){
    let n=this.__key;
    for(;
    n!==null;
    ){
      if(n==="root")return!0;
      const e=jB(n);
      if(e===null)break;
      n=e.__parent
    }
    return!1
  }
  isSelected(n){
    const e=n||Wd();
    if(e==null)return!1;
    const t=e.getNodes().some(i=>i.__key===this.__key);
    return jd(this)?t:dd(e)&&e.anchor.type==="element"&&e.focus.type==="element"&&e.anchor.key===e.focus.key&&e.anchor.offset===e.focus.offset?!1:t
  }
  getKey(){
    return this.__key
  }
  getIndexWithinParent(){
    const n=this.getParent();
    if(n===null)return-1;
    let e=n.getFirstChild(), t=0;
    for(;
    e!==null;
    ){
      if(this.is(e))return t;
      t++,e=e.getNextSibling()
    }
    return-1
  }
  getParent(){
    const n=this.getLatest().__parent;
    return n===null?null:jB(n)
  }
  getParentOrThrow(){
    const n=this.getParent();
    return n===null&&Yg(!1, "Expected node %s to have a parent.", this.__key), n
  }
  getTopLevelElement(){
    let n=this;
    for(;
    n!==null;
    ){
      const e=n.getParent();
      if(zte(e))return n;
      n=e
    }
    return null
  }
  getTopLevelElementOrThrow(){
    const n=this.getTopLevelElement();
    return n===null&&Yg(!1, "Expected node %s to have a top parent element.", this.__key), n
  }
  getParents(){
    const n=[];
    let e=this.getParent();
    for(;
    e!==null;
    )n.push(e), e=e.getParent();
    return n
  }
  getParentKeys(){
    const n=[];
    let e=this.getParent();
    for(;
    e!==null;
    )n.push(e.__key), e=e.getParent();
    return n
  }
  getPreviousSibling(){
    const e=this.getLatest().__prev;
    return e===null?null:jB(e)
  }
  getPreviousSiblings(){
    const n=[], e=this.getParent();
    if(e===null)return n;
    let t=e.getFirstChild();
    for(;
    t!==null&&!t.is(this);
    )n.push(t), t=t.getNextSibling();
    return n
  }
  getNextSibling(){
    const e=this.getLatest().__next;
    return e===null?null:jB(e)
  }
  getNextSiblings(){
    const n=[];
    let e=this.getNextSibling();
    for(;
    e!==null;
    )n.push(e), e=e.getNextSibling();
    return n
  }
  getCommonAncestor(n){
    const e=this.getParents(), t=n.getParents();
    kd(this)&&e.unshift(this), kd(n)&&t.unshift(n);
    const i=e.length, r=t.length;
    if(i===0||r===0||e[i-1]!==t[r-1])return null;
    const s=new Set(t);
    for(let o=0;
    o<i;
    o++){
      const a=e[o];
      if(s.has(a))return a
    }
    return null
  }
  is(n){
    return n==null?!1:this.__key===n.__key
  }
  isBefore(n){
    if(this===n)return!1;
    if(n.isParentOf(this))return!0;
    if(this.isParentOf(n))return!1;
    const e=this.getCommonAncestor(n);
    let t=0, i=0, r=this;
    for(;
    ;
    ){
      const s=r.getParentOrThrow();
      if(s===e){
        t=r.getIndexWithinParent();
        break
      }
      r=s
    }
    for(r=n;
    ;
    ){
      const s=r.getParentOrThrow();
      if(s===e){
        i=r.getIndexWithinParent();
        break
      }
      r=s
    }
    return t<i
  }
  isParentOf(n){
    const e=this.__key;
    if(e===n.__key)return!1;
    let t=n;
    for(;
    t!==null;
    ){
      if(t.__key===e)return!0;
      t=t.getParent()
    }
    return!1
  }
  getNodesBetween(n){
    const e=this.isBefore(n), t=[], i=new Set;
    let r=this;
    for(;
    ;
    ){
      const s=r.__key;
      if(i.has(s)||(i.add(s),t.push(r)),r===n)break;
      const o=kd(r)?e?r.getFirstChild():r.getLastChild():null;
      if(o!==null){
        r=o;
        continue
      }
      const a=e?r.getNextSibling():r.getPreviousSibling();
      if(a!==null){
        r=a;
        continue
      }
      const l=r.getParentOrThrow();
      if(i.has(l.__key)||t.push(l),l===n)break;
      let u=null,d=l;
      do d===null&&Yg(!1,"getNodesBetween: ancestor is null"),u=e?d.getNextSibling():d.getPreviousSibling(),d=d.getParent(),d!==null&&u===null&&!i.has(d.__key)&&t.push(d);
      while(u===null);
      r=u
    }
    return e||t.reverse(), t
  }
  isDirty(){
    const e=G6()._dirtyLeaves;
    return e!==null&&e.has(this.__key)
  }
  getLatest(){
    const n=jB(this.__key);
    return n===null&&Yg(!1, "Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editorState.read/editor.update."), n
  }
  getWritable(){
    aae();
    const n=K9e(), e=G6(), t=n._nodeMap, i=this.__key, r=this.getLatest(), s=r.__parent, o=e._cloneNotNeeded, a=Wd();
    if(a!==null&&(a._cachedNodes=null), o.has(i))return gUo(r), r;
    const u=r.constructor.clone(r);
    return u.__parent=s, u.__next=r.__next, u.__prev=r.__prev, kd(r)&&kd(u)?(u.__first=r.__first, u.__last=r.__last, u.__size=r.__size, u.__indent=r.__indent, u.__format=r.__format, u.__dir=r.__dir):jd(r)&&jd(u)&&(u.__format=r.__format, u.__style=r.__style, u.__mode=r.__mode, u.__detail=r.__detail), o.add(i), u.__key=i, gUo(u), t.set(i, u), u
  }
  getTextContent(){
    return""
  }
  getTextContentSize(){
    return this.getTextContent().length
  }
  createDOM(n, e){
    Yg(!1, "createDOM: base method not extended")
  }
  updateDOM(n, e, t){
    Yg(!1, "updateDOM: base method not extended")
  }
  exportDOM(n){
    return{
      element:this.createDOM(n._config,n)
    }
  }
  exportJSON(){
    Yg(!1, "exportJSON: base method not extended")
  }
  static importJSON(n){
    Yg(!1, "LexicalNode: Node %s does not implement .importJSON().", this.name)
  }
  static transform(){
    return null
  }
  remove(n){
    t3c(this, !0, n)
  }
  replace(n, e){
    aae();
    let t=Wd();
    t!==null&&(t=t.clone()), k3c(this, n);
    const i=this.getLatest(), r=this.__key, s=n.__key, o=n.getWritable(), a=this.getParentOrThrow().getWritable(), l=a.__size;
    fvt(o);
    const u=i.getPreviousSibling(), d=i.getNextSibling(), m=i.__prev, p=i.__next, g=i.__parent;
    if(t3c(i, !1, !0), u===null)a.__first=s;
    else{
      const f=u.getWritable();
      f.__next=s
    }
    if(o.__prev=m, d===null)a.__last=s;
    else{
      const f=d.getWritable();
      f.__prev=s
    }
    if(o.__next=p, o.__parent=g, a.__size=l, e&&this.getChildren().forEach(f=>{
      o.append(f)
    }), dd(t)){
      cae(t);
      const f=t.anchor,A=t.focus;
      f.key===r&&Mqh(f,o),A.key===r&&Mqh(A,o)
    }
    return oYe()===r&&YY(s), o
  }
  insertAfter(n, e=!0){
    aae(), k3c(this, n);
    const t=this.getWritable(), i=n.getWritable(), r=i.getParent(), s=Wd();
    let o=!1, a=!1;
    if(r!==null){
      const p=n.getIndexWithinParent();
      if(fvt(i),dd(s)){
        const g=r.__key,f=s.anchor,A=s.focus;
        o=f.type==="element"&&f.key===g&&f.offset===p+1,a=A.type==="element"&&A.key===g&&A.offset===p+1
      }
    }
    const l=this.getNextSibling(), u=this.getParentOrThrow().getWritable(), d=i.__key, m=t.__next;
    if(l===null)u.__last=d;
    else{
      const p=l.getWritable();
      p.__prev=d
    }
    if(u.__size++, t.__next=d, i.__next=m, i.__prev=t.__key, i.__parent=t.__parent, e&&dd(s)){
      const p=this.getIndexWithinParent();
      hUo(s,u,p+1);
      const g=u.__key;
      o&&s.anchor.set(g,p+2,"element"),a&&s.focus.set(g,p+2,"element")
    }
    return n
  }
  insertBefore(n, e=!0){
    aae(), k3c(this, n);
    const t=this.getWritable(), i=n.getWritable(), r=i.__key;
    fvt(i);
    const s=this.getPreviousSibling(), o=this.getParentOrThrow().getWritable(), a=t.__prev, l=this.getIndexWithinParent();
    if(s===null)o.__first=r;
    else{
      const d=s.getWritable();
      d.__next=r
    }
    o.__size++, t.__prev=r, i.__prev=a, i.__next=t.__key, i.__parent=t.__parent;
    const u=Wd();
    if(e&&dd(u)){
      const d=this.getParentOrThrow();
      hUo(u,d,l)
    }
    return n
  }
  isParentRequired(){
    return!1
  }
  createParentElementNode(){
    return Lx()
  }
  selectPrevious(n, e){
    aae();
    const t=this.getPreviousSibling(), i=this.getParentOrThrow();
    if(t===null)return i.select(0, 0);
    if(kd(t))return t.select();
    if(!jd(t)){
      const r=t.getIndexWithinParent()+1;
      return i.select(r,r)
    }
    return t.select(n, e)
  }
  selectNext(n, e){
    aae();
    const t=this.getNextSibling(), i=this.getParentOrThrow();
    if(t===null)return i.select();
    if(kd(t))return t.select(0, 0);
    if(!jd(t)){
      const r=t.getIndexWithinParent();
      return i.select(r,r)
    }
    return t.select(n, e)
  }
  markDirty(){
    this.getWritable()
  }
}, Y$="", XY="", VRe="", N3c=!1, xUo=!1, T6n=null, k7h="40px", E7h=class{
  constructor(n, e, t){
    this._selection=null, this.key=n, this.offset=e, this.type=t
  }
  is(n){
    return this.key===n.key&&this.offset===n.offset&&this.type===n.type
  }
  isBefore(n){
    let e=this.getNode(), t=n.getNode();
    const i=this.offset, r=n.offset;
    if(kd(e)){
      const s=e.getDescendantByIndex(i);
      e=s??e
    }
    if(kd(t)){
      const s=t.getDescendantByIndex(r);
      t=s??t
    }
    return e===t?i<r:e.isBefore(t)
  }
  getNode(){
    const n=this.key, e=jB(n);
    return e===null&&Yg(!1, "Point.getNode: node not found"), e
  }
  set(n, e, t){
    const i=this._selection, r=this.key;
    this.key=n, this.offset=e, this.type=t, A9t()||(oYe()===r&&YY(n), i!==null&&(i._cachedNodes=null, i.dirty=!0))
  }
}, U3c=class KGb{
  constructor(e){
    this.dirty=!1, this._nodes=e, this._cachedNodes=null
  }
  is(e){
    if(!jte(e))return!1;
    const t=this._nodes, i=e._nodes;
    return t.size===i.size&&Array.from(t).every(r=>i.has(r))
  }
  add(e){
    this.dirty=!0, this._nodes.add(e), this._cachedNodes=null
  }
  delete(e){
    this.dirty=!0, this._nodes.delete(e), this._cachedNodes=null
  }
  clear(){
    this.dirty=!0, this._nodes.clear(), this._cachedNodes=null
  }
  has(e){
    return this._nodes.has(e)
  }
  clone(){
    return new KGb(new Set(this._nodes))
  }
  getStartEndPoints(){
    return null
  }
  extract(){
    return this.getNodes()
  }
  insertRawText(e){
    
  }
  insertText(){
    
  }
  insertNodes(e, t){
    const i=this.getNodes(), r=i.length, s=i[r-1];
    let o;
    if(jd(s))o=s.select();
    else{
      const a=s.getIndexWithinParent()+1;
      o=s.getParentOrThrow().select(a,a)
    }
    o.insertNodes(e, t);
    for(let a=0;
    a<r;
    a++)i[a].remove();
    return!0
  }
  getNodes(){
    const e=this._cachedNodes;
    if(e!==null)return e;
    const t=this._nodes, i=[];
    for(const r of t){
      const s=jB(r);
      s!==null&&i.push(s)
    }
    return A9t()||(this._cachedNodes=i), i
  }
  getTextContent(){
    const e=this.getNodes();
    let t="";
    for(let i=0;
    i<e.length;
    i++)t+=e[i].getTextContent();
    return t
  }
}, $3c=class YGb{
  constructor(e, t, i){
    this.gridKey=e, this.anchor=t, this.focus=i, this.dirty=!1, this._cachedNodes=null, t._selection=this, i._selection=this
  }
  is(e){
    return pvt(e)?this.gridKey===e.gridKey&&this.anchor.is(e.anchor)&&this.focus.is(e.focus):!1
  }
  set(e, t, i){
    this.dirty=!0, this.gridKey=e, this.anchor.key=t, this.focus.key=i, this._cachedNodes=null
  }
  clone(){
    return new YGb(this.gridKey, this.anchor, this.focus)
  }
  getStartEndPoints(){
    return[this.anchor, this.focus]
  }
  isCollapsed(){
    return!1
  }
  isBackward(){
    return this.focus.isBefore(this.anchor)
  }
  getCharacterOffsets(){
    return uUo(this)
  }
  extract(){
    return this.getNodes()
  }
  insertRawText(e){
    
  }
  insertText(){
    
  }
  insertNodes(e, t){
    const i=this.focus.getNode();
    return n3c(i.select(0, i.getChildrenSize())).insertNodes(e, t)
  }
  getShape(){
    const e=jB(this.anchor.key);
    Yg(e!==null, "getNodes: expected to find AnchorNode");
    const t=e.getIndexWithinParent(), i=e.getParentOrThrow().getIndexWithinParent(), r=jB(this.focus.key);
    Yg(r!==null, "getNodes: expected to find FocusNode");
    const s=r.getIndexWithinParent(), o=r.getParentOrThrow().getIndexWithinParent(), a=Math.min(t, s), l=Math.max(t, s), u=Math.min(i, o), d=Math.max(i, o);
    return{
      fromX:Math.min(a,l),fromY:Math.min(u,d),toX:Math.max(a,l),toY:Math.max(u,d)
    }
  }
  getNodes(){
    const e=this._cachedNodes;
    if(e!==null)return e;
    const t=this.anchor.getNode(), i=this.focus.getNode(), r=b7h(t, _ve), s=b7h(i, _ve);
    Yg(_ve(r), "Expected GridSelection anchor to be (or a child of) GridCellNode"), Yg(_ve(s), "Expected GridSelection focus to be (or a child of) GridCellNode");
    const o=r.getParent();
    Yg(bvt(o), "Expected anchorCell to have a parent GridRowNode");
    const a=o.getParent();
    Yg(k6n(a), "Expected tableNode to have a parent GridNode");
    const[l, u, d]=zfA(a, r, s);
    let m=Math.min(u.startColumn, d.startColumn), p=Math.min(u.startRow, d.startRow), g=Math.max(u.startColumn+u.cell.__colSpan-1, d.startColumn+d.cell.__colSpan-1), f=Math.max(u.startRow+u.cell.__rowSpan-1, d.startRow+d.cell.__rowSpan-1), A=m, w=p, C=m, x=p;
    function I(N){
      const{
        cell:M,startColumn:O,startRow:$
      }
      =N;
      m=Math.min(m,O),p=Math.min(p,$),g=Math.max(g,O+M.__colSpan-1),f=Math.max(f,$+M.__rowSpan-1)
    }
    for(;
    m<A||p<w||g>C||f>x;
    ){
      if(m<A){
        const N=x-w,M=A-1;
        for(let O=0;
        O<=N;
        O++)I(l[w+O][M]);
        A=M
      }
      if(p<w){
        const N=C-A,M=w-1;
        for(let O=0;
        O<=N;
        O++)I(l[M][A+O]);
        w=M
      }
      if(g>C){
        const N=x-w,M=C+1;
        for(let O=0;
        O<=N;
        O++)I(l[w+O][M]);
        C=M
      }
      if(f>x){
        const N=C-A,M=x+1;
        for(let O=0;
        O<=N;
        O++)I(l[M][A+O]);
        x=M
      }
    }
    const B=[a];
    let R=null;
    for(let N=p;
    N<=f;
    N++)for(let M=m;
    M<=g;
    M++){
      const{
        cell:O
      }
      =l[N][M],$=O.getParent();
      Yg(bvt($),"Expected GridCellNode parent to be a GridRowNode"),$!==R&&B.push($),B.push(O,...zbA(O)),R=$
    }
    return A9t()||(this._cachedNodes=B), B
  }
  getTextContent(){
    const e=this.getNodes();
    let t="";
    for(let i=0;
    i<e.length;
    i++)t+=e[i].getTextContent();
    return t
  }
}, k9t=class ZGb{
  constructor(e, t, i, r){
    this.anchor=e, this.focus=t, this.dirty=!1, this.format=i, this.style=r, this._cachedNodes=null, e._selection=this, t._selection=this
  }
  is(e){
    return dd(e)?this.anchor.is(e.anchor)&&this.focus.is(e.focus)&&this.format===e.format&&this.style===e.style:!1
  }
  isBackward(){
    return this.focus.isBefore(this.anchor)
  }
  isCollapsed(){
    return this.anchor.is(this.focus)
  }
  getStartEndPoints(){
    return[this.anchor, this.focus]
  }
  getNodes(){
    const e=this._cachedNodes;
    if(e!==null)return e;
    const t=this.anchor, i=this.focus, r=t.isBefore(i), s=r?t:i, o=r?i:t;
    let a=s.getNode(), l=o.getNode();
    const u=s.offset, d=o.offset;
    if(kd(a)){
      const p=a.getDescendantByIndex(u);
      a=p??a
    }
    if(kd(l)){
      let p=l.getDescendantByIndex(d);
      p!==null&&p!==a&&l.getChildAtIndex(d)===p&&(p=p.getPreviousSibling()),l=p??l
    }
    let m;
    return a.is(l)?kd(a)&&a.getChildrenSize()>0?m=[]:m=[a]:m=a.getNodesBetween(l), A9t()||(this._cachedNodes=m), m
  }
  setTextNodeRange(e, t, i, r){
    sYe(this.anchor, e.__key, t, "text"), sYe(this.focus, i.__key, r, "text"), this._cachedNodes=null, this.dirty=!0
  }
  getTextContent(){
    const e=this.getNodes();
    if(e.length===0)return"";
    const t=e[0], i=e[e.length-1], r=this.anchor, s=this.focus, o=r.isBefore(s), [a, l]=uUo(this);
    let u="", d=!0;
    for(let m=0;
    m<e.length;
    m++){
      const p=e[m];
      if(kd(p)&&!p.isInline())d||(u+=`
`),p.isEmpty()?d=!1:d=!0;
      else if(d=!1,jd(p)){
        let g=p.getTextContent();
        p===t?p===i?(r.type!=="element"||s.type!=="element"||s.offset===r.offset)&&(g=a<l?g.slice(a,l):g.slice(l,a)):g=o?g.slice(a):g.slice(l):p===i&&(g=o?g.slice(0,l):g.slice(0,a)),u+=g
      }
      else(ZD(p)||x3(p))&&(p!==i||!this.isCollapsed())&&(u+=p.getTextContent())
    }
    return u
  }
  applyDOMRange(e){
    const t=G6(), r=t.getEditorState()._selection, s=Jqh(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, r);
    if(s===null)return;
    const[o, a]=s;
    sYe(this.anchor, o.key, o.offset, o.type), sYe(this.focus, a.key, a.offset, a.type), this._cachedNodes=null
  }
  clone(){
    const e=this.anchor, t=this.focus;
    return new ZGb(QRe(e.key, e.offset, e.type), QRe(t.key, t.offset, t.type), this.format, this.style)
  }
  toggleFormat(e){
    this.format=n7h(this.format, e, null), this.dirty=!0
  }
  setStyle(e){
    this.style=e, this.dirty=!0
  }
  hasFormat(e){
    const t=bYe[e];
    return(this.format&t)!==0
  }
  insertRawText(e){
    const t=e.split(/(\r?\n|\t)/), i=[], r=t.length;
    for(let s=0;
    s<r;
    s++){
      const o=t[s];
      o===`
`||o===`\r
`?i.push(lhe()):o==="	"?i.push(Vte()):i.push(OA(o))
    }
    this.insertNodes(i)
  }
  insertText(e){
    const t=this.anchor, i=this.focus, r=this.isCollapsed()||t.isBefore(i), s=this.format, o=this.style;
    r&&t.type==="element"?Fqh(t, i, s, o):!r&&i.type==="element"&&Fqh(i, t, s, o);
    const a=this.getNodes(), l=a.length, u=r?t:i, d=r?i:t, m=u.offset, p=d.offset;
    let g=a[0];
    jd(g)||Yg(!1, "insertText: first node is not a text node");
    const A=g.getTextContent().length, w=g.getParentOrThrow(), C=l-1;
    let x=a[C];
    if(this.isCollapsed()&&m===A&&(g.isSegmented()||g.isToken()||!g.canInsertTextAfter()||!w.canInsertTextAfter()&&g.getNextSibling()===null)){
      let I=g.getNextSibling();
      if((!jd(I)||!I.canInsertTextBefore()||p3c(I))&&(I=OA(),I.setFormat(s),w.canInsertTextAfter()?g.insertAfter(I):w.insertAfter(I)),I.select(0,0),g=I,e!==""){
        this.insertText(e);
        return
      }
    }
    else if(this.isCollapsed()&&m===0&&(g.isSegmented()||g.isToken()||!g.canInsertTextBefore()||!w.canInsertTextBefore()&&g.getPreviousSibling()===null)){
      let I=g.getPreviousSibling();
      if((!jd(I)||p3c(I))&&(I=OA(),I.setFormat(s),w.canInsertTextBefore()?g.insertBefore(I):w.insertBefore(I)),I.select(),g=I,e!==""){
        this.insertText(e);
        return
      }
    }
    else if(g.isSegmented()&&m!==A){
      const I=OA(g.getTextContent());
      I.setFormat(s),g.replace(I),g=I
    }
    else if(!this.isCollapsed()&&e!==""){
      const I=x.getParent();
      if(!w.canInsertTextBefore()||!w.canInsertTextAfter()||kd(I)&&(!I.canInsertTextBefore()||!I.canInsertTextAfter())){
        this.insertText(""),Hqh(this.anchor,this.focus,null),this.insertText(e);
        return
      }
    }
    if(l===1){
      if(g.isToken()){
        const N=OA(e);
        N.select(),g.replace(N);
        return
      }
      const I=g.getFormat(),B=g.getStyle();
      if(m===p&&(I!==s||B!==o))if(g.getTextContent()==="")g.setFormat(s),g.setStyle(o);
      else{
        const N=OA(e);
        if(N.setFormat(s),N.setStyle(o),N.select(),m===0)g.insertBefore(N,!1);
        else{
          const[M]=g.splitText(m);
          M.insertAfter(N,!1)
        }
        N.isComposing()&&this.anchor.type==="text"&&(this.anchor.offset-=e.length);
        return
      }
      const R=p-m;
      g=g.spliceText(m,R,e,!0),g.getTextContent()===""?g.remove():this.anchor.type==="text"&&(g.isComposing()?this.anchor.offset-=e.length:(this.format=I,this.style=B))
    }
    else{
      const I=new Set([...g.getParentKeys(),...x.getParentKeys()]),B=kd(g)?g:g.getParentOrThrow();
      let R=kd(x)?x:x.getParentOrThrow(),N=x;
      if(!B.is(R)&&R.isInline())do N=R,R=R.getParentOrThrow();
      while(R.isInline());
      if(d.type==="text"&&(p!==0||x.getTextContent()==="")||d.type==="element"&&x.getIndexWithinParent()<p)if(jd(x)&&!x.isToken()&&p!==x.getTextContentSize()){
        if(x.isSegmented()){
          const W=OA(x.getTextContent());
          x.replace(W),x=W
        }
        x=x.spliceText(0,p,""),I.add(x.__key)
      }
      else{
        const W=x.getParentOrThrow();
        !W.canBeEmpty()&&W.getChildrenSize()===1?W.remove():x.remove()
      }
      else I.add(x.__key);
      const M=R.getChildren(),O=new Set(a),$=B.is(R),H=B.isInline()&&g.getNextSibling()===null?B:g;
      for(let W=M.length-1;
      W>=0;
      W--){
        const z=M[W];
        if(z.is(g)||kd(z)&&z.isParentOf(g))break;
        z.isAttached()&&(!O.has(z)||z.is(N)?$||H.insertAfter(z,!1):z.remove())
      }
      if(!$){
        let W=R,z=null;
        for(;
        W!==null;
        ){
          const Y=W.getChildren(),j=Y.length;
          (j===0||Y[j-1].is(z))&&(I.delete(W.__key),z=W),W=W.getParent()
        }
      }
      if(!g.isToken())g=g.spliceText(m,A-m,e,!0),g.getTextContent()===""?g.remove():g.isComposing()&&this.anchor.type==="text"&&(this.anchor.offset-=e.length);
      else if(m===A)g.select();
      else{
        const W=OA(e);
        W.select(),g.replace(W)
      }
      for(let W=1;
      W<l;
      W++){
        const z=a[W],Y=z.__key;
        I.has(Y)||z.remove()
      }
    }
  }
  removeText(){
    this.insertText("")
  }
  formatText(e){
    if(this.isCollapsed()){
      this.toggleFormat(e),YY(null);
      return
    }
    const t=this.getNodes(), i=[];
    for(const x of t)jd(x)&&i.push(x);
    const r=i.length;
    if(r===0){
      this.toggleFormat(e),YY(null);
      return
    }
    const s=this.anchor, o=this.focus, a=this.isBackward(), l=a?o:s, u=a?s:o;
    let d=0, m=i[0], p=l.type==="element"?0:l.offset;
    if(l.type==="text"&&p===m.getTextContentSize()&&(d=1, m=i[1], p=0), m==null)return;
    const g=m.getFormatFlags(e, null), f=r-1;
    let A=i[f];
    const w=u.type==="text"?u.offset:A.getTextContentSize();
    if(m.is(A)){
      if(p===w)return;
      if(p===0&&w===m.getTextContentSize())m.setFormat(g);
      else{
        const x=m.splitText(p,w),I=p===0?x[0]:x[1];
        I.setFormat(g),l.type==="text"&&l.set(I.__key,0,"text"),u.type==="text"&&u.set(I.__key,w-p,"text")
      }
      this.format=g;
      return
    }
    p!==0&&([, m]=m.splitText(p), p=0), m.setFormat(g);
    const C=A.getFormatFlags(e, g);
    w>0&&(w!==A.getTextContentSize()&&([A]=A.splitText(w)), A.setFormat(C));
    for(let x=d+1;
    x<f;
    x++){
      const I=i[x];
      if(!I.isToken()){
        const B=I.getFormatFlags(e,C);
        I.setFormat(B)
      }
    }
    l.type==="text"&&l.set(m.__key, p, "text"), u.type==="text"&&u.set(A.__key, w, "text"), this.format=g|C
  }
  insertNodes(e, t){
    if(!this.isCollapsed()){
      const f=this.isBackward()?this.anchor:this.focus,A=f.getNode().getNextSibling(),w=A?A.getKey():null,C=f.getNode().getPreviousSibling(),x=C?C.getKey():null;
      if(this.removeText(),this.isCollapsed()&&this.focus.type==="element"){
        let I;
        this.focus.key===w&&this.focus.offset===0?(I=OA(),this.focus.getNode().insertBefore(I)):this.focus.key===x&&this.focus.offset===this.focus.getNode().getChildrenSize()&&(I=OA(),this.focus.getNode().insertAfter(I)),I&&(this.focus.set(I.__key,0,"text"),this.anchor.set(I.__key,0,"text"))
      }
    }
    const i=this.anchor, r=i.offset, s=i.getNode();
    let o=s;
    if(i.type==="element"){
      const f=i.getNode(),A=f.getChildAtIndex(r-1);
      A===null?o=f:o=A
    }
    const a=[], l=s.getNextSiblings(), u=zte(s)?null:s.getTopLevelElementOrThrow();
    if(jd(s)){
      const A=s.getTextContent().length;
      if(r===0&&A!==0){
        const w=s.getPreviousSibling();
        w!==null?o=w:o=s.getParentOrThrow(),a.push(s)
      }
      else if(r===A)o=s;
      else{
        if(s.isToken())return!1;
        {
          let w;
          [o,w]=s.splitText(r),a.push(w)
        }
      }
    }
    const d=o;
    a.push(...l);
    const m=e[0];
    let p=!1, g=null;
    for(let f=0;
    f<e.length;
    f++){
      const A=e[f];
      if(!zte(o)&&!ZD(o)&&kd(A)&&!A.isInline()){
        if(A.is(m)){
          if(kd(o)&&o.isEmpty()&&o.canReplaceWith(A)){
            o.replace(A),o=A,p=!0;
            continue
          }
          const w=A.getFirstDescendant();
          if(g3c(w)){
            let C=w.getParentOrThrow();
            for(;
            C.isInline();
            )C=C.getParentOrThrow();
            const x=C.getChildren(),I=x.length;
            if(kd(o)){
              let B=o.getFirstChild();
              for(let R=0;
              R<I;
              R++){
                const N=x[R];
                B===null?o.append(N):B.insertAfter(N),B=N
              }
            }
            else{
              for(let B=I-1;
              B>=0;
              B--)o.insertAfter(x[B]);
              o=o.getParentOrThrow()
            }
            if(g=x[I-1],C.remove(),p=!0,C.is(A))continue
          }
        }
        jd(o)&&(u===null&&Yg(!1,"insertNode: topLevelElement is root node"),o=u)
      }
      else p&&!kd(A)&&!ZD(A)&&zte(o.getParent())&&Yg(!1,"insertNodes: cannot insert a non-element into a root node");
      if(p=!1,kd(o)&&!o.isInline())if(g=A,ZD(A)&&!A.isInline())o=o.insertAfter(A,!1);
      else if(kd(A)){
        if(!A.canBeEmpty()&&A.isEmpty())continue;
        if(ZY(o)){
          const w=o.getChildAtIndex(r);
          w!==null?w.insertBefore(A):o.append(A),o=A
        }
        else A.isInline()?(o.append(A),o=A):o=o.insertAfter(A,!1)
      }
      else{
        const w=o.getFirstChild();
        w!==null?w.insertBefore(A):o.append(A),o=A
      }
      else if(!kd(A)||kd(A)&&A.isInline()||ZD(o)&&!o.isInline())if(g=A,dd(this)&&ZD(A)&&(kd(o)||jd(o))&&!A.isInline()){
        let w,C;
        if(jd(o)){
          w=o.getParentOrThrow();
          const[I]=o.splitText(r);
          C=I.getIndexWithinParent()+1
        }
        else w=o,C=r;
        const[,x]=f7h(w,C);
        o=x.insertBefore(A)
      }
      else o=o.insertAfter(A,!1);
      else{
        const w=o.getParentOrThrow();
        x3(o)&&o.remove(),o=w,f--;
        continue
      }
    }
    if(t)if(jd(d))d.select();
    else{
      const f=o.getPreviousSibling();
      if(jd(f))f.select();
      else{
        const A=o.getIndexWithinParent();
        o.getParentOrThrow().select(A,A)
      }
    }
    if(kd(o)){
      const f=jd(g)?g:kd(g)&&g.isInline()?g.getLastDescendant():o.getLastDescendant();
      if(t||(f===null?o.select():jd(f)?f.getTextContent()===""?f.selectPrevious():f.select():f.selectNext()),a.length!==0){
        const A=o;
        for(let w=a.length-1;
        w>=0;
        w--){
          const C=a[w],x=C.getParentOrThrow();
          if(kd(o)&&!c3c(C)&&!(ZD(C)&&(!C.isInline()||C.isIsolated())))A===o?o.append(C):o.insertBefore(C),o=C;
          else if(!kd(o)&&!c3c(C))o.insertBefore(C),o=C;
          else if(kd(C)&&!C.canInsertAfter(o)){
            const I=x.constructor.clone(x);
            kd(I)||Yg(!1,"insertNodes: cloned parent clone is not an element"),I.append(C),o.insertAfter(I)
          }
          else o.insertAfter(C);
          x.isEmpty()&&!x.canBeEmpty()&&x.remove()
        }
      }
    }
    else if(!t)if(jd(o))o.select();
    else{
      const f=o.getParentOrThrow(),A=o.getIndexWithinParent()+1;
      f.select(A,A)
    }
    return!0
  }
  insertParagraph(){
    this.isCollapsed()||this.removeText();
    const e=this.anchor, t=e.offset;
    let i, r=[], s=[];
    if(e.type==="text"){
      const l=e.getNode();
      r=l.getNextSiblings().reverse(),i=l.getParentOrThrow();
      const u=i.isInline(),d=u?i.getTextContentSize():l.getTextContentSize();
      if(t===0)r.push(l);
      else if(u&&(s=i.getNextSiblings()),t!==d&&(!u||t!==l.getTextContentSize())){
        const[,m]=l.splitText(t);
        r.push(m)
      }
    }
    else{
      if(i=e.getNode(),zte(i)){
        const l=Lx(),u=i.getChildAtIndex(t);
        l.select(),u!==null?u.insertBefore(l,!1):i.append(l);
        return
      }
      r=i.getChildren().slice(t).reverse()
    }
    const o=r.length;
    if(t===0&&o>0&&i.isInline()){
      const l=i.getParentOrThrow(),u=l.insertNewAfter(this,!1);
      if(kd(u)){
        const d=l.getChildren();
        for(let m=0;
        m<d.length;
        m++)u.append(d[m])
      }
      return
    }
    const a=i.insertNewAfter(this, !1);
    if(a===null)this.insertLineBreak();
    else if(kd(a)){
      const l=i.getFirstChild();
      if(t===0&&(i.is(e.getNode())||l&&l.is(e.getNode()))&&o>0){
        i.insertBefore(a);
        return
      }
      let d=null;
      const m=s.length,p=a.getParentOrThrow();
      if(m>0)for(let g=0;
      g<m;
      g++){
        const f=s[g];
        p.append(f)
      }
      if(o!==0)for(let g=0;
      g<o;
      g++){
        const f=r[g];
        d===null?a.append(f):d.insertBefore(f),d=f
      }
      !a.canBeEmpty()&&a.getChildrenSize()===0?(a.selectPrevious(),a.remove()):a.selectStart()
    }
  }
  insertLineBreak(e){
    const t=lhe(), i=this.anchor;
    if(i.type==="element"){
      const r=i.getNode();
      ZY(r)&&this.insertParagraph()
    }
    e?this.insertNodes([t], !0):this.insertNodes([t])&&t.selectNext(0, 0)
  }
  getCharacterOffsets(){
    return uUo(this)
  }
  extract(){
    const e=this.getNodes(), t=e.length, i=t-1, r=this.anchor, s=this.focus;
    let o=e[0], a=e[i];
    const[l, u]=uUo(this);
    if(t===0)return[];
    if(t===1){
      if(jd(o)&&!this.isCollapsed()){
        const m=l>u?u:l,p=l>u?l:u,g=o.splitText(m,p),f=m===0?g[0]:g[1];
        return f!=null?[f]:[]
      }
      return[o]
    }
    const d=r.isBefore(s);
    if(jd(o)){
      const m=d?l:u;
      m===o.getTextContentSize()?e.shift():m!==0&&([,o]=o.splitText(m),e[0]=o)
    }
    if(jd(a)){
      const p=a.getTextContent().length,g=d?u:l;
      g===0?e.pop():g!==p&&([a]=a.splitText(g),e[i]=a)
    }
    return e
  }
  modify(e, t, i){
    const r=this.focus, s=this.anchor, o=e==="move", a=C6n(r, t);
    if(ZD(a)&&!a.isIsolated()){
      if(o&&a.isKeyboardSelectable()){
        const g=u3c();
        g.add(a.__key),cae(g);
        return
      }
      const p=t?a.getPreviousSibling():a.getNextSibling();
      if(jd(p)){
        const g=p.__key,f=t?p.getTextContent().length:0;
        r.set(g,f,"text"),o&&s.set(g,f,"text");
        return
      }
      else{
        const g=a.getParentOrThrow();
        let f,A;
        kd(p)?(A=p.__key,f=t?p.getChildrenSize():0):(f=a.getIndexWithinParent(),A=g.__key,t||f++),r.set(A,f,"element"),o&&s.set(A,f,"element");
        return
      }
    }
    const l=G6(), u=Y9e(l);
    if(!u)return;
    const d=l._blockCursorElement, m=l._rootElement;
    if(m!==null&&d!==null&&kd(a)&&!a.isInline()&&!a.canBeEmpty()&&x3c(d, l, m), qfA(u, e, t?"backward":"forward", i), u.rangeCount>0){
      const p=u.getRangeAt(0),g=this.anchor.getNode(),f=ZY(g)?g:GbA(g);
      if(this.applyDOMRange(p),this.dirty=!0,!o){
        const A=this.getNodes(),w=[];
        let C=!1;
        for(let x=0;
        x<A.length;
        x++){
          const I=A[x];
          S3c(I,f)?w.push(I):C=!0
        }
        if(C&&w.length>0)if(t){
          const x=w[0];
          kd(x)?x.selectStart():x.getParentOrThrow().selectStart()
        }
        else{
          const x=w[w.length-1];
          kd(x)?x.selectEnd():x.getParentOrThrow().selectEnd()
        }
        (u.anchorNode!==p.startContainer||u.anchorOffset!==p.startOffset)&&$fA(this)
      }
    }
  }
  deleteCharacter(e){
    const t=this.isCollapsed();
    if(this.isCollapsed()){
      const i=this.anchor,r=this.focus;
      let s=i.getNode();
      if(!e&&(i.type==="element"&&kd(s)&&i.offset===s.getChildrenSize()||i.type==="text"&&i.offset===s.getTextContentSize())){
        const a=s.getParent(),l=s.getNextSibling()||(a===null?null:a.getNextSibling());
        if(kd(l)&&l.isShadowRoot())return
      }
      const o=C6n(r,e);
      if(ZD(o)&&!o.isIsolated()){
        if(o.isKeyboardSelectable()&&kd(s)&&s.getChildrenSize()===0){
          s.remove();
          const a=u3c();
          a.add(o.__key),cae(a)
        }
        else o.remove(),G6().dispatchCommand(B6n,void 0);
        return
      }
      else if(!e&&kd(o)&&kd(s)&&s.isEmpty()){
        s.remove(),o.selectStart();
        return
      }
      if(this.modify("extend",e,"character"),this.isCollapsed()){
        if(e&&i.offset===0&&(i.type==="element"?i.getNode():i.getNode().getParentOrThrow()).collapseAtStart(this))return
      }
      else{
        const a=r.type==="text"?r.getNode():null;
        if(s=i.type==="text"?i.getNode():null,a!==null&&a.isSegmented()){
          const l=r.offset,u=a.getTextContentSize();
          if(a.is(s)||e&&l!==u||!e&&l!==0){
            Uqh(a,e,l);
            return
          }
        }
        else if(s!==null&&s.isSegmented()){
          const l=i.offset,u=s.getTextContentSize();
          if(s.is(a)||e&&l!==0||!e&&l!==u){
            Uqh(s,e,l);
            return
          }
        }
        HfA(this,e)
      }
    }
    if(this.removeText(), e&&!t&&this.isCollapsed()&&this.anchor.type==="element"&&this.anchor.offset===0){
      const i=this.anchor.getNode();
      i.isEmpty()&&ZY(i.getParent())&&i.getIndexWithinParent()===0&&i.collapseAtStart(this)
    }
  }
  deleteLine(e){
    this.isCollapsed()&&(this.anchor.type==="text"&&this.modify("extend", e, "lineboundary"), (e?this.focus:this.anchor).offset===0&&this.modify("extend", e, "character")), this.removeText()
  }
  deleteWord(e){
    this.isCollapsed()&&this.modify("extend", e, "word"), this.removeText()
  }
}, tJ=null, nJ=null, Yte=!1, IUo=!1, D6n=0, q3c={
  characterData:!0, childList:!0, subtree:!0
}, x7h=1, rvA=Array.isArray, T7h=typeof queueMicrotask=="function"?queueMicrotask:n=>{
  Promise.resolve().then(n)
}, B6n=Uh("SELECTION_CHANGE_COMMAND"), DUo=Uh("CLICK_COMMAND"), Sve=Uh("DELETE_CHARACTER_COMMAND"), X9e=Uh("INSERT_LINE_BREAK_COMMAND"), wvt=Uh("INSERT_PARAGRAPH_COMMAND"), dYe=Uh("CONTROLLED_TEXT_INSERTION_COMMAND"), hYe=Uh("PASTE_COMMAND"), R6n=Uh("REMOVE_TEXT_COMMAND"), e8e=Uh("DELETE_WORD_COMMAND"), mYe=Uh("DELETE_LINE_COMMAND"), t8e=Uh("FORMAT_TEXT_COMMAND"), E9t=Uh("UNDO_COMMAND"), x9t=Uh("REDO_COMMAND"), pYe=Uh("KEYDOWN_COMMAND"), P6n=Uh("KEY_ARROW_RIGHT_COMMAND"), H3c=Uh("MOVE_TO_END"), L6n=Uh("KEY_ARROW_LEFT_COMMAND"), J3c=Uh("MOVE_TO_START"), n8e=Uh("KEY_ARROW_UP_COMMAND"), i8e=Uh("KEY_ARROW_DOWN_COMMAND"), I7h=Uh("KEY_COMMAND_ARROW_DOWN_COMMAND"), D7h=Uh("KEY_COMMAND_ARROW_UP_COMMAND"), B7h=Uh("KEY_COMMAND_ARROW_LEFT_COMMAND"), R7h=Uh("KEY_COMMAND_ARROW_RIGHT_COMMAND"), KRe=Uh("KEY_ENTER_COMMAND"), G3c=Uh("KEY_SPACE_COMMAND"), T9t=Uh("KEY_BACKSPACE_COMMAND"), kve=Uh("KEY_ESCAPE_COMMAND"), N6n=Uh("KEY_DELETE_COMMAND"), W3c=Uh("KEY_ALT_ARROW_UP_COMMAND"), Q3c=Uh("KEY_ALT_ARROW_DOWN_COMMAND"), YRe=Uh("KEY_COMMAND_ENTER_COMMAND"), P7h=Uh("KEY_COMMAND_ABORT_COMMAND"), L7h=Uh("KEY_COMMAND_K_COMMAND"), N7h=Uh("KEY_COMMAND_Y_COMMAND"), M7h=Uh("KEY_COMMAND_D_COMMAND"), F7h=Uh("KEY_COMMAND_E_COMMAND"), O7h=Uh("KEY_COMMAND_C_COMMAND"), U7h=Uh("KEY_COMMAND_H_COMMAND"), $7h=Uh("KEY_COMMAND_1_COMMAND"), q7h=Uh("KEY_COMMAND_2_COMMAND"), H7h=Uh("KEY_COMMAND_3_COMMAND"), J7h=Uh("KEY_COMMAND_4_COMMAND"), G7h=Uh("KEY_COMMAND_5_COMMAND"), W7h=Uh("KEY_COMMAND_6_COMMAND"), Q7h=Uh("KEY_COMMAND_7_COMMAND"), j7h=Uh("KEY_COMMAND_8_COMMAND"), z7h=Uh("KEY_COMMAND_9_COMMAND"), V7h=Uh("KEY_COMMAND_0_COMMAND"), K7h=Uh("KEY_COMMAND_SHIFT_K_COMMAND"), Y7h=Uh("KEY_COMMAND_SHIFT_D_COMMAND"), Z7h=Uh("KEY_COMMAND_SHIFT_S_COMMAND"), X7h=Uh("KEY_COMMAND_S_COMMAND"), eHh=Uh("KEY_COMMAND_J_COMMAND"), tHh=Uh("KEY_COMMAND_Y_COMMAND"), nHh=Uh("KEY_COMMAND_U_COMMAND"), iHh=Uh("KEY_COMMAND_I_COMMAND"), rHh=Uh("KEY_COMMAND_L_COMMAND"), svA=Uh("KEY_COMMAND_Z_COMMAND"), sHh=Uh("KEY_COMMAND_T_COMMAND"), oHh=Uh("KEY_COMMAND_P_COMMAND"), aHh=Uh("KEY_COMMAND_B_COMMAND"), cHh=Uh("KEY_COMMAND_A_COMMAND"), ovA=Uh("KEY_COMMAND_SHIFT_Z_COMMAND"), j3c=Uh("KEY_COMMAND_N_COMMAND"), lHh=Uh("KEY_COMMAND_M_COMMAND"), uHh=Uh("KEY_COMMAND_G_COMMAND"), dHh=Uh("KEY_COMMAND_W_COMMAND"), z3c=Uh("KEY_COMMAND_R_COMMAND"), V3c=Uh("KEY_COMMAND_V_COMMAND"), hHh=Uh("KEY_COMMAND_SLASH_COMMAND"), K3c=Uh("KEY_COMMAND_DOT_COMMAND"), mHh=Uh("KEY_COMMAND_SHIFT_SLASH_COMMAND"), M6n=Uh("KEY_BACKSPACE_DELETE_COMMAND"), pHh=Uh("KEY_COMMAND_LEFT_BRACKET_COMMAND"), gHh=Uh("KEY_COMMAND_RIGHT_BRACKET_COMMAND"), ZRe=Uh("KEY_TAB_COMMAND"), fHh=Uh("KEY_ALT_COMMAND"), Y3c=Uh("KEY_ALT_UP_COMMAND"), bHh=Uh("KEY_COMMAND_COMMAND"), vHh=Uh("KEY_COMMAND_UP_COMMAND"), AHh=Uh("KEY_ALT_1_COMMAND"), yHh=Uh("KEY_ALT_2_COMMAND"), wHh=Uh("KEY_ALT_3_COMMAND"), _Hh=Uh("KEY_ALT_4_COMMAND"), CHh=Uh("KEY_ALT_5_COMMAND"), avA=Uh("KEY_COMMAND_ESCAPE_COMMAND"), SHh=Uh("KEY_SHIFT_DOWN_COMMAND"), kHh=Uh("KEY_SHIFT_UP_COMMAND"), F6n=Uh("INSERT_TAB_COMMAND"), r8e=Uh("INDENT_CONTENT_COMMAND"), gYe=Uh("OUTDENT_CONTENT_COMMAND"), I9t=Uh("DROP_COMMAND"), EHh=Uh("FORMAT_ELEMENT_COMMAND"), BUo=Uh("DRAGSTART_COMMAND"), RUo=Uh("DRAGOVER_COMMAND"), xHh=Uh("DRAGEND_COMMAND"), _vt=Uh("COPY_COMMAND"), Cvt=Uh("CUT_COMMAND"), Z3c=Uh("CLEAR_EDITOR_COMMAND"), X3c=Uh("CLEAR_HISTORY_COMMAND"), Svt=Uh("CAN_REDO_COMMAND"), kvt=Uh("CAN_UNDO_COMMAND"), O6n=Uh("FOCUS_COMMAND"), PUo=Uh("BLUR_COMMAND"), THh=Uh("KEY_MODIFIER_COMMAND"), D9t=1, XRe=3, fYe=0, e5c=1, Evt=2, t5c=0, LUo=1, NUo=2, MUo=1, FUo=2, U6n=4, $6n=8, OUo=16, UUo=32, $Uo=64, qUo=128, IHh=MUo|FUo|U6n|$6n|OUo|UUo|$Uo|qUo, HUo=1, q6n=2, JUo=1, GUo=2, WUo=3, QUo=4, jUo=5, zUo=6, n5c="\xA0", DHh="\u200B", H6n=g9t||f9t||b9t?n5c:DHh, ePe=`

`, BHh=rYe?n5c:H6n, i5c="\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC", r5c="A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF", RHh=new RegExp("^[^"+r5c+"]*["+i5c+"]"), PHh=new RegExp("^[^"+i5c+"]*["+r5c+"]"), bYe={
  bold:MUo, code:OUo, highlight:qUo, italic:FUo, strikethrough:U6n, subscript:UUo, superscript:$Uo, underline:$6n
}, LHh={
  directionless:HUo, unmergeable:q6n
}, s5c={
  center:GUo, end:zUo, justify:QUo, left:JUo, right:WUo, start:jUo
}, NHh={
  [GUo]:"center", [zUo]:"end", [QUo]:"justify", [JUo]:"left", [WUo]:"right", [jUo]:"start"
}, MHh={
  normal:t5c, segmented:NUo, token:LUo
}, FHh={
  [t5c]:"normal", [NUo]:"segmented", [LUo]:"token"
}, s8e=class XGb extends E6n{
  static getType(){
    return"text"
  }
  static clone(e){
    return new XGb(e.__text, e.__key)
  }
  constructor(e, t){
    super(t), this.__text=e, this.__format=0, this.__style="", this.__mode=0, this.__detail=0
  }
  getFormat(){
    return this.getLatest().__format
  }
  getDetail(){
    return this.getLatest().__detail
  }
  getMode(){
    const e=this.getLatest();
    return FHh[e.__mode]
  }
  getStyle(){
    return this.getLatest().__style
  }
  isToken(){
    return this.getLatest().__mode===LUo
  }
  isComposing(){
    return this.__key===oYe()
  }
  isSegmented(){
    return this.getLatest().__mode===NUo
  }
  isDirectionless(){
    return(this.getLatest().__detail&HUo)!==0
  }
  isUnmergeable(){
    return(this.getLatest().__detail&q6n)!==0
  }
  hasFormat(e){
    const t=bYe[e];
    return(this.getFormat()&t)!==0
  }
  isSimpleText(){
    return this.__type==="text"&&this.__mode===0
  }
  getTextContent(){
    return this.getLatest().__text
  }
  getFormatFlags(e, t){
    const r=this.getLatest().__format;
    return n7h(r, e, t)
  }
  createDOM(e){
    const t=this.__format, i=I3c(this, t), r=D3c(this, t), s=i===null?r:i, o=bi.document.createElement(s);
    let a=o;
    i!==null&&(a=bi.document.createElement(r), o.appendChild(a));
    const l=this.__text;
    y7h(a, this, r, t, l, e);
    const u=this.__style;
    return u!==""&&(o.style.cssText=u), o
  }
  updateDOM(e, t, i){
    const r=this.__text, s=e.__format, o=this.__format, a=I3c(this, s), l=I3c(this, o), u=D3c(this, s), d=D3c(this, o);
    if((a===null?u:a)!==(l===null?d:l))return!0;
    if(a===l&&u!==d){
      const x=t.firstChild;
      x==null&&Yg(!1,"updateDOM: prevInnerDOM is null or undefined");
      const I=bi.document.createElement(d);
      return y7h(I,this,d,o,r,i),t.replaceChild(I,x),!1
    }
    let g=t;
    l!==null&&a!==null&&(g=t.firstChild, g==null&&Yg(!1, "updateDOM: innerDOM is null or undefined")), A7h(r, g, this);
    const A=i.theme.text;
    A!==void 0&&s!==o&&v7h(d, s, o, g, A);
    const w=e.__style, C=this.__style;
    return w!==C&&(t.style.cssText=C), !1
  }
  static importDOM(){
    return{
      "#text":()=>({
        conversion:evA,priority:0
      }),b:()=>({
        conversion:YbA,priority:0
      }),code:()=>({
        conversion:aYe,priority:0
      }),em:()=>({
        conversion:aYe,priority:0
      }),i:()=>({
        conversion:aYe,priority:0
      }),s:()=>({
        conversion:aYe,priority:0
      }),span:()=>({
        conversion:KbA,priority:0
      }),strong:()=>({
        conversion:aYe,priority:0
      }),sub:()=>({
        conversion:aYe,priority:0
      }),sup:()=>({
        conversion:aYe,priority:0
      }),u:()=>({
        conversion:aYe,priority:0
      })
    }
  }
  static importJSON(e){
    const t=OA(e.text);
    return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t
  }
  exportDOM(e){
    let{
      element:t
    }
    =super.exportDOM(e);
    return t!==null&&(this.hasFormat("bold")&&(t=AUo(t, "b")), this.hasFormat("italic")&&(t=AUo(t, "i")), this.hasFormat("strikethrough")&&(t=AUo(t, "s")), this.hasFormat("underline")&&(t=AUo(t, "u"))), {
      element:t
    }
  }
  exportJSON(){
    return{
      detail:this.getDetail(),format:this.getFormat(),mode:this.getMode(),style:this.getStyle(),text:this.getTextContent(),type:"text",version:1
    }
  }
  selectionTransform(e, t){
    
  }
  setFormat(e){
    const t=this.getWritable();
    return t.__format=typeof e=="string"?bYe[e]:e, t
  }
  setDetail(e){
    const t=this.getWritable();
    return t.__detail=typeof e=="string"?LHh[e]:e, t
  }
  setStyle(e){
    const t=this.getWritable();
    return t.__style=e, t
  }
  toggleFormat(e){
    const t=bYe[e];
    return this.setFormat(this.getFormat()^t)
  }
  toggleDirectionless(){
    const e=this.getWritable();
    return e.__detail^=HUo, e
  }
  toggleUnmergeable(){
    const e=this.getWritable();
    return e.__detail^=q6n, e
  }
  setMode(e){
    const t=MHh[e];
    if(this.__mode===t)return this;
    const i=this.getWritable();
    return i.__mode=t, i
  }
  setTextContent(e){
    if(this.__text===e)return this;
    const t=this.getWritable();
    return t.__text=e, t
  }
  select(e, t){
    aae();
    let i=e, r=t;
    const s=Wd(), o=this.getTextContent(), a=this.__key;
    if(typeof o=="string"){
      const l=o.length;
      i===void 0&&(i=l),r===void 0&&(r=l)
    }
    else i=0, r=0;
    if(dd(s)){
      const l=oYe();
      (l===s.anchor.key||l===s.focus.key)&&YY(a),s.setTextNodeRange(this,i,this,r)
    }
    else return Gqh(a, i, a, r, "text", "text");
    return s
  }
  spliceText(e, t, i, r){
    const s=this.getWritable(), o=s.__text, a=i.length;
    let l=e;
    l<0&&(l=a+l, l<0&&(l=0));
    const u=Wd();
    if(r&&dd(u)){
      const m=e+a;
      u.setTextNodeRange(s,m,s,m)
    }
    const d=o.slice(0, l)+i+o.slice(l+t);
    return s.__text=d, s
  }
  canInsertTextBefore(){
    return!0
  }
  canInsertTextAfter(){
    return!0
  }
  splitText(...e){
    aae();
    const t=this.getLatest(), i=t.getTextContent(), r=t.__key, s=oYe(), o=new Set(e), a=[], l=i.length;
    let u="";
    for(let M=0;
    M<l;
    M++)u!==""&&o.has(M)&&(a.push(u), u=""), u+=i[M];
    u!==""&&a.push(u);
    const d=a.length;
    if(d===0)return[];
    if(a[0]===i)return[t];
    const m=a[0], p=t.getParentOrThrow();
    let g;
    const f=t.getFormat(), A=t.getStyle(), w=t.__detail;
    let C=!1;
    t.isSegmented()?(g=OA(m), g.__format=f, g.__style=A, g.__detail=w, C=!0):(g=t.getWritable(), g.__text=m);
    const x=Wd(), I=[g];
    let B=m.length;
    for(let M=1;
    M<d;
    M++){
      const O=a[M],$=O.length,H=OA(O).getWritable();
      H.__format=f,H.__style=A,H.__detail=w;
      const W=H.__key,z=B+$;
      if(dd(x)){
        const Y=x.anchor,j=x.focus;
        Y.key===r&&Y.type==="text"&&Y.offset>B&&Y.offset<=z&&(Y.key=W,Y.offset-=B,x.dirty=!0),j.key===r&&j.type==="text"&&j.offset>B&&j.offset<=z&&(j.key=W,j.offset-=B,x.dirty=!0)
      }
      s===r&&YY(W),B=z,I.push(H)
    }
    lbA(this);
    const R=p.getWritable(), N=this.getIndexWithinParent();
    return C?(R.splice(N, 0, I), this.remove()):R.splice(N, 1, I), dd(x)&&hUo(x, p, N, d-1), I
  }
  mergeWithSibling(e){
    const t=e===this.getPreviousSibling();
    !t&&e!==this.getNextSibling()&&Yg(!1, "mergeWithSibling: sibling must be a previous or next sibling");
    const i=this.__key, r=e.__key, s=this.__text, o=s.length;
    oYe()===r&&YY(i);
    const l=Wd();
    if(dd(l)){
      const p=l.anchor,g=l.focus;
      p!==null&&p.key===r&&(Qqh(p,t,i,e,o),l.dirty=!0),g!==null&&g.key===r&&(Qqh(g,t,i,e,o),l.dirty=!0)
    }
    const u=e.__text, d=t?u+s:s+u;
    this.setTextContent(d);
    const m=this.getWritable();
    return e.remove(), m
  }
  isTextEntity(){
    return!1
  }
}, o5c=new WeakMap, OHh=new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/, "i"), UHh={
  code:"code", em:"italic", i:"italic", s:"strikethrough", strong:"bold", sub:"subscript", sup:"superscript", u:"underline"
}, J6n=class eWb extends s8e{
  static getType(){
    return"tab"
  }
  static clone(e){
    const t=new eWb(e.__key);
    return t.__text=e.__text, t.__format=e.__format, t.__style=e.__style, t
  }
  constructor(e){
    super("	", e), this.__detail=q6n
  }
  static importDOM(){
    return null
  }
  static importJSON(e){
    const t=Vte();
    return t.setFormat(e.format), t.setStyle(e.style), t
  }
  exportJSON(){
    return{
      ...super.exportJSON(),type:"tab",version:1
    }
  }
  setTextContent(e){
    Yg(!1, "TabNode does not support setTextContent")
  }
  setDetail(e){
    Yg(!1, "TabNode does not support setDetail")
  }
  setMode(e){
    Yg(!1, "TabNode does not support setMode")
  }
  canInsertTextBefore(){
    return!1
  }
  canInsertTextAfter(){
    return!1
  }
}, Eve=class extends E6n{
  constructor(n){
    super(n), this.__first=null, this.__last=null, this.__size=0, this.__format=0, this.__indent=0, this.__dir=null
  }
  getFormat(){
    return this.getLatest().__format
  }
  getFormatType(){
    const n=this.getFormat();
    return NHh[n]||""
  }
  getIndent(){
    return this.getLatest().__indent
  }
  getChildren(){
    const n=[];
    let e=this.getFirstChild();
    for(;
    e!==null;
    )n.push(e), e=e.getNextSibling();
    return n
  }
  getChildrenKeys(){
    const n=[];
    let e=this.getFirstChild();
    for(;
    e!==null;
    )n.push(e.__key), e=e.getNextSibling();
    return n
  }
  getChildrenSize(){
    return this.getLatest().__size
  }
  isEmpty(){
    return this.getChildrenSize()===0
  }
  isDirty(){
    const e=G6()._dirtyElements;
    return e!==null&&e.has(this.__key)
  }
  isLastChild(){
    const n=this.getLatest(), e=this.getParentOrThrow().getLastChild();
    return e!==null&&e.is(n)
  }
  getAllTextNodes(){
    const n=[];
    let e=this.getFirstChild();
    for(;
    e!==null;
    ){
      if(jd(e)&&n.push(e),kd(e)){
        const t=e.getAllTextNodes();
        n.push(...t)
      }
      e=e.getNextSibling()
    }
    return n
  }
  getFirstDescendant(){
    let n=this.getFirstChild();
    for(;
    n!==null;
    ){
      if(kd(n)){
        const e=n.getFirstChild();
        if(e!==null){
          n=e;
          continue
        }
      }
      break
    }
    return n
  }
  getLastDescendant(){
    let n=this.getLastChild();
    for(;
    n!==null;
    ){
      if(kd(n)){
        const e=n.getLastChild();
        if(e!==null){
          n=e;
          continue
        }
      }
      break
    }
    return n
  }
  getDescendantByIndex(n){
    const e=this.getChildren(), t=e.length;
    if(n>=t){
      const r=e[t-1];
      return kd(r)&&r.getLastDescendant()||r||null
    }
    const i=e[n];
    return kd(i)&&i.getFirstDescendant()||i||null
  }
  getFirstChild(){
    const e=this.getLatest().__first;
    return e===null?null:jB(e)
  }
  getFirstChildOrThrow(){
    const n=this.getFirstChild();
    return n===null&&Yg(!1, "Expected node %s to have a first child.", this.__key), n
  }
  getLastChild(){
    const e=this.getLatest().__last;
    return e===null?null:jB(e)
  }
  getLastChildOrThrow(){
    const n=this.getLastChild();
    return n===null&&Yg(!1, "Expected node %s to have a last child.", this.__key), n
  }
  getChildAtIndex(n){
    const e=this.getChildrenSize();
    let t, i;
    if(n<e/2){
      for(t=this.getFirstChild(),i=0;
      t!==null&&i<=n;
      ){
        if(i===n)return t;
        t=t.getNextSibling(),i++
      }
      return null
    }
    for(t=this.getLastChild(), i=e-1;
    t!==null&&i>=n;
    ){
      if(i===n)return t;
      t=t.getPreviousSibling(),i--
    }
    return null
  }
  getTextContent(){
    let n="";
    const e=this.getChildren(), t=e.length;
    for(let i=0;
    i<t;
    i++){
      const r=e[i];
      n+=r.getTextContent(),kd(r)&&i!==t-1&&!r.isInline()&&(n+=ePe)
    }
    return n
  }
  getTextContentSize(){
    let n=0;
    const e=this.getChildren(), t=e.length;
    for(let i=0;
    i<t;
    i++){
      const r=e[i];
      n+=r.getTextContentSize(),kd(r)&&i!==t-1&&!r.isInline()&&(n+=ePe.length)
    }
    return n
  }
  getDirection(){
    return this.getLatest().__dir
  }
  hasFormat(n){
    if(n!==""){
      const e=s5c[n];
      return(this.getFormat()&e)!==0
    }
    return!1
  }
  select(n, e){
    aae();
    const t=Wd();
    let i=n, r=e;
    const s=this.getChildrenSize();
    if(!this.canBeEmpty()){
      if(n===0&&e===0){
        const a=this.getFirstChild();
        if(jd(a)||kd(a))return a.select(0,0)
      }
      else if((n===void 0||n===s)&&(e===void 0||e===s)){
        const a=this.getLastChild();
        if(jd(a)||kd(a))return a.select()
      }
    }
    i===void 0&&(i=s), r===void 0&&(r=s);
    const o=this.__key;
    if(dd(t))t.anchor.set(o, i, "element"), t.focus.set(o, r, "element"), t.dirty=!0;
    else return Gqh(o, i, o, r, "element", "element");
    return t
  }
  selectStart(){
    const n=this.getFirstDescendant();
    return kd(n)||jd(n)?n.select(0, 0):n!==null?n.selectPrevious():this.select(0, 0)
  }
  selectEnd(){
    const n=this.getLastDescendant();
    return kd(n)||jd(n)?n.select():n!==null?n.selectNext():this.select()
  }
  clear(){
    const n=this.getWritable();
    return this.getChildren().forEach(t=>t.remove()), n
  }
  append(...n){
    return this.splice(this.getChildrenSize(), 0, n)
  }
  setDirection(n){
    const e=this.getWritable();
    return e.__dir=n, e
  }
  setFormat(n){
    const e=this.getWritable();
    return e.__format=n!==""?s5c[n]:0, this
  }
  setIndent(n){
    const e=this.getWritable();
    return e.__indent=n, this
  }
  splice(n, e, t){
    const i=t.length, r=this.getChildrenSize(), s=this.getWritable(), o=s.__key, a=[], l=[], u=this.getChildAtIndex(n+e);
    let d=null, m=r-e+i;
    if(n!==0)if(n===r)d=this.getLastChild();
    else{
      const g=this.getChildAtIndex(n);
      g!==null&&(d=g.getPreviousSibling())
    }
    if(e>0){
      let g=d===null?this.getFirstChild():d.getNextSibling();
      for(let f=0;
      f<e;
      f++){
        g===null&&Yg(!1,"splice: sibling not found");
        const A=g.getNextSibling(),w=g.__key,C=g.getWritable();
        fvt(C),l.push(w),g=A
      }
    }
    let p=d;
    for(let g=0;
    g<i;
    g++){
      const f=t[g];
      p!==null&&f.is(p)&&(d=p=p.getPreviousSibling());
      const A=f.getWritable();
      A.__parent===o&&m--,fvt(A);
      const w=f.__key;
      if(p===null)s.__first=w,A.__prev=null;
      else{
        const C=p.getWritable();
        C.__next=w,A.__prev=C.__key
      }
      f.__key===o&&Yg(!1,"append: attempting to append self"),A.__parent=o,a.push(w),p=f
    }
    if(n+e===r){
      if(p!==null){
        const g=p.getWritable();
        g.__next=null,s.__last=p.__key
      }
    }
    else if(u!==null){
      const g=u.getWritable();
      if(p!==null){
        const f=p.getWritable();
        g.__prev=p.__key,f.__next=u.__key
      }
      else g.__prev=null
    }
    if(s.__size=m, l.length){
      const g=Wd();
      if(dd(g)){
        const f=new Set(l),A=new Set(a),{
          anchor:w,focus:C
        }
        =g;
        _7h(w,f,A)&&mUo(w,w.getNode(),this,d,u),_7h(C,f,A)&&mUo(C,C.getNode(),this,d,u),m===0&&!this.canBeEmpty()&&!zte(this)&&this.remove()
      }
    }
    return s
  }
  exportJSON(){
    return{
      children:[],direction:this.getDirection(),format:this.getFormatType(),indent:this.getIndent(),type:"element",version:1
    }
  }
  insertNewAfter(n, e){
    return null
  }
  canIndent(){
    return!0
  }
  collapseAtStart(n){
    return!1
  }
  excludeFromCopy(n){
    return!1
  }
  canExtractContents(){
    return!0
  }
  canReplaceWith(n){
    return!0
  }
  canInsertAfter(n){
    return!0
  }
  canBeEmpty(){
    return!0
  }
  canInsertTextBefore(){
    return!0
  }
  canInsertTextAfter(){
    return!0
  }
  isInline(){
    return!1
  }
  isShadowRoot(){
    return!1
  }
  canMergeWith(n){
    return!1
  }
  extractWithChild(n, e, t){
    return!1
  }
}, G6n=class tWb extends E6n{
  static getType(){
    return"linebreak"
  }
  static clone(e){
    return new tWb(e.__key)
  }
  constructor(e){
    super(e)
  }
  getTextContent(){
    return`
`
  }
  createDOM(){
    return bi.document.createElement("br")
  }
  updateDOM(){
    return!1
  }
  static importDOM(){
    return{
      br:e=>{
        const t=e.parentElement;
        let i,r;
        return t!==null&&((i=t.firstChild)===e||i.nextSibling===e&&i.nodeType===XRe&&(i.textContent||"").match(/^[\s|\r?\n|\t]+$/)!==null)&&((r=t.lastChild)===e||r.previousSibling===e&&r.nodeType===XRe&&(r.textContent||"").match(/^[\s|\r?\n|\t]+$/)!==null)?null:{
          conversion:tvA,priority:0
        }
      }
    }
  }
  static importJSON(e){
    return lhe()
  }
  exportJSON(){
    return{
      type:"linebreak",version:1
    }
  }
}, $Hh=class extends Eve{
  
}, qHh=class extends Eve{
  constructor(n, e){
    super(e), this.__colSpan=n, this.__rowSpan=1
  }
  exportJSON(){
    return{
      ...super.exportJSON(),colSpan:this.__colSpan,rowSpan:this.__rowSpan
    }
  }
  getColSpan(){
    return this.__colSpan
  }
  setColSpan(n){
    return this.getWritable().__colSpan=n, this
  }
  getRowSpan(){
    return this.__rowSpan
  }
  setRowSpan(n){
    return this.getWritable().__rowSpan=n, this
  }
}, HHh=class extends Eve{
  
}, W6n=class extends E6n{
  constructor(n){
    super(n)
  }
  decorate(n, e){
    Yg(!1, "decorate: base method not extended")
  }
  isIsolated(){
    return!1
  }
  isInline(){
    return!0
  }
  isKeyboardSelectable(){
    return!0
  }
}, VUo=class nWb extends Eve{
  static getType(){
    return"root"
  }
  static clone(){
    return new nWb
  }
  constructor(){
    super("root"), this.__cachedText=null
  }
  getTopLevelElementOrThrow(){
    Yg(!1, "getTopLevelElementOrThrow: root nodes are not top level elements")
  }
  getTextContent(){
    const e=this.__cachedText;
    return(A9t()||G6()._dirtyType===fYe)&&e!==null?e:super.getTextContent()
  }
  remove(){
    Yg(!1, "remove: cannot be called on root nodes")
  }
  replace(e){
    Yg(!1, "replace: cannot be called on root nodes")
  }
  insertBefore(e){
    Yg(!1, "insertBefore: cannot be called on root nodes")
  }
  insertAfter(e){
    Yg(!1, "insertAfter: cannot be called on root nodes")
  }
  updateDOM(e, t){
    return!1
  }
  append(...e){
    for(let t=0;
    t<e.length;
    t++){
      const i=e[t];
      !kd(i)&&!ZD(i)&&Yg(!1,"rootNode.append: Only element or decorator nodes can be appended to the root node")
    }
    return super.append(...e)
  }
  static importJSON(e){
    const t=lf();
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
  }
  exportJSON(){
    return{
      children:[],direction:this.getDirection(),format:this.getFormatType(),indent:this.getIndent(),type:"root",version:1
    }
  }
  collapseAtStart(){
    return!0
  }
}, o8e=class iWb extends Eve{
  static getType(){
    return"paragraph"
  }
  static clone(e){
    return new iWb(e.__key)
  }
  createDOM(e){
    const t=bi.document.createElement("p"), i=_6n(e.theme, "paragraph");
    return i!==void 0&&t.classList.add(...i), t
  }
  updateDOM(e, t, i){
    return!1
  }
  static importDOM(){
    return{
      p:e=>({
        conversion:ivA,priority:0
      })
    }
  }
  exportDOM(e){
    const{
      element:t
    }
    =super.exportDOM(e);
    if(t&&this.isEmpty()&&t.append(bi.document.createElement("br")), t){
      const i=this.getFormatType();
      t.style.textAlign=i;
      const r=this.getDirection();
      r&&(t.dir=r);
      const s=this.getIndent();
      s>0&&(t.style.textIndent=`${s*20}px`)
    }
    return{
      element:t
    }
  }
  static importJSON(e){
    const t=Lx();
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
  }
  exportJSON(){
    return{
      ...super.exportJSON(),type:"paragraph",version:1
    }
  }
  insertNewAfter(e, t){
    const i=Lx(), r=this.getDirection();
    return i.setDirection(r), this.insertAfter(i, t), i
  }
  collapseAtStart(){
    const e=this.getChildren();
    if(e.length===0||jd(e[0])&&e[0].getTextContent().trim()===""){
      if(this.getNextSibling()!==null)return this.selectNext(),this.remove(),!0;
      if(this.getPreviousSibling()!==null)return this.selectPrevious(),this.remove(),!0
    }
    return!1
  }
}
}
});
function JHh(n){
  if(n==="dev")return 0;
  const e=V9e.clusters[n].anyrunDashboard.group;
  switch(e){
    case"us":return 1;
    case"training":return 2;
    case"eval":return 3;
    case null:return n==="test1"?4:n==="local"?5:6;
    default:return e
  }
}
function cvA(n, e){
  const t=JHh(n)-JHh(e);
  if(t!==0)return t;
  const i=V9e.clusters[n].anyrunDashboard.group;
  if(i==="us"){
    const r=a=>{
      const l=/^us(\d+)(p?)$/.exec(a);
      return l?{
        n:Number(l[1]),isPrivacy:l[2]==="p"
      }
      :null
    }, s=r(n), o=r(e);
    if(s&&o)return s.isPrivacy!==o.isPrivacy?s.isPrivacy?1:-1:s.n-o.n
  }
  if(i==="training"||i==="eval"){
    const r=a=>{
      const l=/(\d+)$/.exec(a);
      return l?Number(l[1]):null
    }, s=r(n), o=r(e);
    if(s!==null&&o!==null)return s-o
  }
  return n.localeCompare(e)
}
var uI, Zte, GHh, WHh, QHh, jHh, J4, B9t, zHh, VHh, iJ=