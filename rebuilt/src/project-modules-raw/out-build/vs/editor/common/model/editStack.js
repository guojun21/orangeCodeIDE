// Module: out-build/vs/editor/common/model/editStack.js
// Offset: 1113427 (bundle byte offset)
// Size: 6404 bytes

Ht(), _s(), db(), Yn(), Oph(), Ql(), Yr(), tl(), Uoe=class bJe{
  static create(e, t){
    const i=e.getAlternativeVersionId(), r=qEc(e);
    return new bJe(i, i, r, r, t, t, [])
  }
  constructor(e, t, i, r, s, o, a){
    this.beforeVersionId=e, this.afterVersionId=t, this.beforeEOL=i, this.afterEOL=r, this.beforeCursorState=s, this.afterCursorState=o, this.changes=a
  }
  append(e, t, i, r, s){
    t.length>0&&(this.changes=UoA(this.changes, t)), this.afterEOL=i, this.afterVersionId=r, this.afterCursorState=s
  }
  static _writeSelectionsSize(e){
    return 4+16*(e?e.length:0)
  }
  static _writeSelections(e, t, i){
    if(SY(e, t?t.length:0, i), i+=4, t)for(const r of t)SY(e, r.selectionStartLineNumber, i), i+=4, SY(e, r.selectionStartColumn, i), i+=4, SY(e, r.positionLineNumber, i), i+=4, SY(e, r.positionColumn, i), i+=4;
    return i
  }
  static _readSelections(e, t, i){
    const r=CY(e, t);
    t+=4;
    for(let s=0;
    s<r;
    s++){
      const o=CY(e,t);
      t+=4;
      const a=CY(e,t);
      t+=4;
      const l=CY(e,t);
      t+=4;
      const u=CY(e,t);
      t+=4,i.push(new Vl(o,a,l,u))
    }
    return t
  }
  serialize(){
    let e=10+bJe._writeSelectionsSize(this.beforeCursorState)+bJe._writeSelectionsSize(this.afterCursorState)+4;
    for(const r of this.changes)e+=r.writeSize();
    const t=new Uint8Array(e);
    let i=0;
    SY(t, this.beforeVersionId, i), i+=4, SY(t, this.afterVersionId, i), i+=4, oCc(t, this.beforeEOL, i), i+=1, oCc(t, this.afterEOL, i), i+=1, i=bJe._writeSelections(t, this.beforeCursorState, i), i=bJe._writeSelections(t, this.afterCursorState, i), SY(t, this.changes.length, i), i+=4;
    for(const r of this.changes)i=r.write(t, i);
    return t.buffer
  }
  static deserialize(e){
    const t=new Uint8Array(e);
    let i=0;
    const r=CY(t, i);
    i+=4;
    const s=CY(t, i);
    i+=4;
    const o=sCc(t, i);
    i+=1;
    const a=sCc(t, i);
    i+=1;
    const l=[];
    i=bJe._readSelections(t, i, l);
    const u=[];
    i=bJe._readSelections(t, i, u);
    const d=CY(t, i);
    i+=4;
    const m=[];
    for(let p=0;
    p<d;
    p++)i=BSe.read(t, i, m);
    return new bJe(r, s, o, a, l, u, m)
  }
}, oRe=class{
  get type(){
    return 0
  }
  get resource(){
    return je.isUri(this.model)?this.model:this.model.uri
  }
  constructor(n, e, t, i){
    this.label=n, this.code=e, this.model=t, this._data=Uoe.create(t, i)
  }
  toString(){
    return(this._data instanceof Uoe?this._data:Uoe.deserialize(this._data)).changes.map(e=>e.toString()).join(", ")
  }
  matchesResource(n){
    return(je.isUri(this.model)?this.model:this.model.uri).toString()===n.toString()
  }
  setModel(n){
    this.model=n
  }
  canAppend(n){
    return this.model===n&&this._data instanceof Uoe
  }
  append(n, e, t, i, r){
    this._data instanceof Uoe&&this._data.append(n, e, t, i, r)
  }
  close(){
    this._data instanceof Uoe&&(this._data=this._data.serialize())
  }
  open(){
    this._data instanceof Uoe||(this._data=Uoe.deserialize(this._data))
  }
  undo(){
    if(je.isUri(this.model))throw new Error("Invalid SingleModelEditStackElement");
    this._data instanceof Uoe&&(this._data=this._data.serialize());
    const n=Uoe.deserialize(this._data);
    this.model._applyUndo(n.changes, n.beforeEOL, n.beforeVersionId, n.beforeCursorState)
  }
  redo(){
    if(je.isUri(this.model))throw new Error("Invalid SingleModelEditStackElement");
    this._data instanceof Uoe&&(this._data=this._data.serialize());
    const n=Uoe.deserialize(this._data);
    this.model._applyRedo(n.changes, n.afterEOL, n.afterVersionId, n.afterCursorState)
  }
  rebase(n, e, t, i, r, s, o, a){
    this.open();
    const l=t-(e-n), u=this._data, d=u.changes.map(g=>(i?g.newPosition:g.oldPosition)>=e?g.shift(l):g);
    u.changes=d;
    const m=g=>g.lineNumber>r?new ar(g.lineNumber+o, g.column):g.lineNumber===r&&g.column>=s?new ar(g.lineNumber+o, g.column+a):g, p=g=>Vl.fromPositions(m(g.getStartPosition()), m(g.getEndPosition()));
    u.afterCursorState=u.afterCursorState?.map(p)??null, u.beforeCursorState=u.beforeCursorState?.map(p)??null, this.close()
  }
  heapSize(){
    return this._data instanceof Uoe&&(this._data=this._data.serialize()), this._data.byteLength+168
  }
}, _ft=class{
  get resources(){
    return this._editStackElementsArr.map(n=>n.resource)
  }
  constructor(n, e, t){
    this.label=n, this.code=e, this.type=1, this._isOpen=!0, this._editStackElementsArr=t.slice(0), this._editStackElementsMap=new Map;
    for(const i of this._editStackElementsArr){
      const r=IOt(i.resource);
      this._editStackElementsMap.set(r,i)
    }
    this._delegate=null
  }
  setDelegate(n){
    this._delegate=n
  }
  prepareUndoRedo(){
    if(this._delegate)return this._delegate.prepareUndoRedo(this)
  }
  getMissingModels(){
    const n=[];
    for(const e of this._editStackElementsArr)je.isUri(e.model)&&n.push(e.model);
    return n
  }
  matchesResource(n){
    const e=IOt(n);
    return this._editStackElementsMap.has(e)
  }
  setModel(n){
    const e=IOt(je.isUri(n)?n:n.uri);
    this._editStackElementsMap.has(e)&&this._editStackElementsMap.get(e).setModel(n)
  }
  canAppend(n){
    if(!this._isOpen)return!1;
    const e=IOt(n.uri);
    return this._editStackElementsMap.has(e)?this._editStackElementsMap.get(e).canAppend(n):!1
  }
  append(n, e, t, i, r){
    const s=IOt(n.uri);
    this._editStackElementsMap.get(s).append(n, e, t, i, r)
  }
  close(){
    this._isOpen=!1
  }
  open(){
    
  }
  undo(){
    this._isOpen=!1;
    for(const n of this._editStackElementsArr)n.undo()
  }
  redo(){
    for(const n of this._editStackElementsArr)n.redo()
  }
  heapSize(n){
    const e=IOt(n);
    return this._editStackElementsMap.has(e)?this._editStackElementsMap.get(e).heapSize():0
  }
  split(){
    return this._editStackElementsArr
  }
  toString(){
    const n=[];
    for(const e of this._editStackElementsArr)n.push(`${ca(e.resource)}: ${e}`);
    return`{${n.join(", ")}}`
  }
}, Uph=class VJb{
  constructor(e, t){
    this._model=e, this._undoRedoService=t
  }
  pushStackElement(){
    const e=this._undoRedoService.getLastElement(this._model.uri);
    t9e(e)&&e.close()
  }
  popStackElement(){
    const e=this._undoRedoService.getLastElement(this._model.uri);
    t9e(e)&&e.open()
  }
  clear(){
    this._undoRedoService.removeElements(this._model.uri)
  }
  _getOrCreateEditStackElement(e, t, i){
    const r=this._undoRedoService.getLastElement(this._model.uri);
    if(t9e(r)&&r.canAppend(this._model)&&i!==!0)return r;
    const s=new oRe(_(885, null), "undoredo.textBufferEdit", this._model, e);
    return this._undoRedoService.pushElement(s, t), s
  }
  pushEOL(e){
    const t=this._getOrCreateEditStackElement(null, void 0);
    this._model.setEOL(e), t.append(this._model, [], qEc(this._model), this._model.getAlternativeVersionId(), null)
  }
  pushEditOperation(e, t, i, r, s){
    const o=this._getOrCreateEditStackElement(e, r, s), a=this._model.applyEdits(t, !0), l=VJb._computeCursorState(i, a), u=a.map((d, m)=>({
      index:m,textChange:d.textChange
    }));
    return u.sort((d, m)=>d.textChange.oldPosition===m.textChange.oldPosition?d.index-m.index:d.textChange.oldPosition-m.textChange.oldPosition), o.append(this._model, u.map(d=>d.textChange), qEc(this._model), this._model.getAlternativeVersionId(), l), l
  }
  static _computeCursorState(e, t){
    try{
      return e?e(t):null
    }
    catch(i){
      return Gc(i),null
    }
  }
}
}
}), HEc, $ph=