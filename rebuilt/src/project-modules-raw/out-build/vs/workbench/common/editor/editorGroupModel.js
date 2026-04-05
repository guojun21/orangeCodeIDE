// Module: out-build/vs/workbench/common/editor/editorGroupModel.js
// Offset: 31356676 (bundle byte offset)
// Size: 11118 bytes

yn(), Nu(), xT(), Zq(), Wt(), Ei(), rt(), Ws(), Vs(), Wka={
  LEFT:"left", RIGHT:"right", FIRST:"first", LAST:"last"
}, N0i=class extends at{
  static{
    q1t=this
  }
  static{
    this.IDS=0
  }
  get id(){
    return this._id
  }
  get hasHadEditors(){
    return this._hasHadEditors
  }
  get active(){
    return this.selection[0]??null
  }
  constructor(e, t, i){
    super(), this.instantiationService=t, this.configurationService=i, this._onDidModelChange=this._register(new Qe({
      leakWarningThreshold:500
    })), this.onDidModelChange=this._onDidModelChange.event, this.editors=[], this.mru=[], this.editorListeners=new Set, this.locked=!1, this._hasHadEditors=!1, this.selection=[], this.preview=null, this.sticky=-1, this.transient=new Set, Gka(e)?this._id=this.deserialize(e):this._id=q1t.IDS++, this.onConfigurationUpdated(), this.registerListeners()
  }
  registerListeners(){
    this._register(this.configurationService.onDidChangeConfiguration(e=>this.onConfigurationUpdated(e)))
  }
  onConfigurationUpdated(e){
    e&&!e.affectsConfiguration("workbench.editor.openPositioning")&&!e.affectsConfiguration("workbench.editor.focusRecentEditorAfterClose")||(this.editorOpenPositioning=this.configurationService.getValue("workbench.editor.openPositioning"), this.focusRecentEditorAfterClose=this.configurationService.getValue("workbench.editor.focusRecentEditorAfterClose"))
  }
  get count(){
    return this.editors.length
  }
  get stickyCount(){
    return this.sticky+1
  }
  getEditors(e, t){
    const i=e===0?this.mru.slice(0):this.editors.slice(0);
    return t?.excludeSticky?e===0?i.filter(r=>!this.isSticky(r)):i.slice(this.sticky+1):i
  }
  getEditorByIndex(e){
    return this.editors[e]
  }
  get activeEditor(){
    return this.active
  }
  isActive(e){
    return this.matches(this.active, e)
  }
  get previewEditor(){
    return this.preview
  }
  openEditor(e, t){
    this._hasHadEditors=!0;
    const i=t?.sticky||typeof t?.index=="number"&&this.isSticky(t.index), r=t?.pinned||t?.sticky, s=!!t?.transient, o=t?.active||!this.activeEditor||!r&&this.preview===this.activeEditor, a=this.findEditor(e, t);
    if(a){
      const[l,u]=a;
      return this.doSetTransient(l,u,s===!1?!1:this.isTransient(l)),r&&this.doPin(l,u),this.setSelection(o?l:this.activeEditor,t?.inactiveSelection??[]),t&&typeof t.index=="number"&&this.moveEditor(l,t.index),i&&this.doStick(l,this.indexOf(l)),{
        editor:l,isNew:!1
      }
    }
    else{
      const l=e,u=this.indexOf(this.active);
      let d;
      if(t&&typeof t.index=="number"?d=t.index:this.editorOpenPositioning===Wka.FIRST?(d=0,!i&&this.isSticky(d)&&(d=this.sticky+1)):this.editorOpenPositioning===Wka.LAST?d=this.editors.length:(this.editorOpenPositioning===Wka.LEFT?u===0||!this.editors.length?d=0:d=u:d=u+1,!i&&this.isSticky(d)&&(d=this.sticky+1)),i&&(this.sticky++,this.isSticky(d)||(d=this.sticky)),(r||!this.preview)&&this.splice(d,!1,l),s&&this.doSetTransient(l,d,!0),!r){
        if(this.preview){
          const p=this.indexOf(this.preview);
          d>p&&d--,this.replaceEditor(this.preview,l,d,!o)
        }
        this.preview=l
      }
      this.registerEditorListeners(l);
      const m={
        kind:5,editor:l,editorIndex:d
      };
      return this._onDidModelChange.fire(m),this.setSelection(o?l:this.activeEditor,t?.inactiveSelection??[]),{
        editor:l,isNew:!0
      }
    }
  }
  registerEditorListeners(e){
    const t=new Ut;
    this.editorListeners.add(t), t.add(In.once(e.onWillDispose)(()=>{
      const i=this.editors.indexOf(e);
      if(i>=0){
        const r={
          kind:15,editor:e,editorIndex:i
        };
        this._onDidModelChange.fire(r)
      }
    })), t.add(e.onDidChangeDirty(()=>{
      const i={
        kind:14,editor:e,editorIndex:this.editors.indexOf(e)
      };
      this._onDidModelChange.fire(i)
    })), t.add(e.onDidChangeLabel(()=>{
      const i={
        kind:9,editor:e,editorIndex:this.editors.indexOf(e)
      };
      this._onDidModelChange.fire(i)
    })), t.add(e.onDidChangeCapabilities(()=>{
      const i={
        kind:10,editor:e,editorIndex:this.editors.indexOf(e)
      };
      this._onDidModelChange.fire(i)
    })), t.add(this.onDidModelChange(i=>{
      i.kind===6&&i.editor?.matches(e)&&(Bo(t),this.editorListeners.delete(t))
    }))
  }
  replaceEditor(e, t, i, r=!0){
    const s=this.doCloseEditor(e, iV.REPLACE, r);
    if(this.splice(i, !1, t), s){
      const o={
        kind:6,...s
      };
      this._onDidModelChange.fire(o)
    }
  }
  closeEditor(e, t=iV.UNKNOWN, i=!0){
    const r=this.doCloseEditor(e, t, i);
    if(r){
      const s={
        kind:6,...r
      };
      return this._onDidModelChange.fire(s),r
    }
  }
  doCloseEditor(e, t, i){
    const r=this.indexOf(e);
    if(r===-1)return;
    const s=this.editors[r], o=this.isSticky(r), a=this.active===s;
    if(i&&a)if(this.mru.length>1){
      let l;
      this.focusRecentEditorAfterClose?l=this.mru[1]:r===this.editors.length-1?l=this.editors[r-1]:l=this.editors[r+1];
      const u=this.selection.filter(d=>d!==s&&d!==l);
      this.doSetSelection(l,this.editors.indexOf(l),u)
    }
    else this.doSetSelection(null, void 0, []);
    else if(!a&&this.doIsSelected(s)){
      const l=this.selection.filter(u=>u!==s&&u!==this.activeEditor);
      this.doSetSelection(this.activeEditor,this.indexOf(this.activeEditor),l)
    }
    return this.preview===s&&(this.preview=null), this.transient.delete(s), this.splice(r, !0), {
      editor:s,sticky:o,editorIndex:r,context:t
    }
  }
  moveEditor(e, t){
    t>=this.editors.length?t=this.editors.length-1:t<0&&(t=0);
    const i=this.indexOf(e);
    if(i<0||t===i)return;
    const r=this.editors[i], s=this.sticky;
    this.isSticky(i)&&t>this.sticky?this.sticky--:!this.isSticky(i)&&t<=this.sticky&&this.sticky++, this.editors.splice(i, 1), this.editors.splice(t, 0, r);
    const o={
      kind:7,editor:r,oldEditorIndex:i,editorIndex:t
    };
    if(this._onDidModelChange.fire(o), s!==this.sticky){
      const a={
        kind:13,editor:r,editorIndex:t
      };
      this._onDidModelChange.fire(a)
    }
    return r
  }
  setActive(e){
    let t;
    return e?t=this.setEditorActive(e):this.setGroupActive(), t
  }
  setGroupActive(){
    this._onDidModelChange.fire({
      kind:0
    })
  }
  setEditorActive(e){
    const t=this.findEditor(e);
    if(!t)return;
    const[i, r]=t;
    return this.doSetSelection(i, r, []), i
  }
  get selectedEditors(){
    return this.editors.filter(e=>this.doIsSelected(e))
  }
  isSelected(e){
    let t;
    return typeof e=="number"?t=this.editors[e]:t=this.findEditor(e)?.[0], !!t&&this.doIsSelected(t)
  }
  doIsSelected(e){
    return this.selection.includes(e)
  }
  setSelection(e, t){
    const i=this.findEditor(e);
    if(!i)return;
    const[r, s]=i, o=new Set;
    for(const a of t){
      const l=this.findEditor(a);
      if(!l)return;
      const[u]=l;
      u!==r&&o.add(u)
    }
    this.doSetSelection(r, s, Array.from(o))
  }
  doSetSelection(e, t, i){
    const r=this.activeEditor, s=this.selection;
    let o;
    e?o=[e, ...i]:o=[], this.selection=o;
    const a=e&&typeof t=="number"&&r!==e;
    if(a){
      const l=this.indexOf(e,this.mru);
      this.mru.splice(l,1),this.mru.unshift(e);
      const u={
        kind:8,editor:e,editorIndex:t
      };
      this._onDidModelChange.fire(u)
    }
    if(a||s.length!==o.length||s.some(l=>!o.includes(l))){
      const l={
        kind:4
      };
      this._onDidModelChange.fire(l)
    }
  }
  setIndex(e){
    this._onDidModelChange.fire({
      kind:1
    })
  }
  setLabel(e){
    this._onDidModelChange.fire({
      kind:2
    })
  }
  pin(e){
    const t=this.findEditor(e);
    if(!t)return;
    const[i, r]=t;
    return this.doPin(i, r), i
  }
  doPin(e, t){
    if(this.isPinned(e))return;
    this.setTransient(e, !1), this.preview=null;
    const i={
      kind:11,editor:e,editorIndex:t
    };
    this._onDidModelChange.fire(i)
  }
  unpin(e){
    const t=this.findEditor(e);
    if(!t)return;
    const[i, r]=t;
    return this.doUnpin(i, r), i
  }
  doUnpin(e, t){
    if(!this.isPinned(e))return;
    const i=this.preview;
    this.preview=e;
    const r={
      kind:11,editor:e,editorIndex:t
    };
    this._onDidModelChange.fire(r), i&&this.closeEditor(i, iV.UNPIN)
  }
  isPinned(e){
    let t;
    return typeof e=="number"?t=this.editors[e]:t=e, !this.matches(this.preview, t)
  }
  stick(e){
    const t=this.findEditor(e);
    if(!t)return;
    const[i, r]=t;
    return this.doStick(i, r), i
  }
  doStick(e, t){
    if(this.isSticky(t))return;
    this.pin(e);
    const i=this.sticky+1;
    this.moveEditor(e, i), this.sticky++;
    const r={
      kind:13,editor:e,editorIndex:i
    };
    this._onDidModelChange.fire(r)
  }
  unstick(e){
    const t=this.findEditor(e);
    if(!t)return;
    const[i, r]=t;
    return this.doUnstick(i, r), i
  }
  doUnstick(e, t){
    if(!this.isSticky(t))return;
    const i=this.sticky;
    this.moveEditor(e, i), this.sticky--;
    const r={
      kind:13,editor:e,editorIndex:i
    };
    this._onDidModelChange.fire(r)
  }
  isSticky(e){
    if(this.sticky<0)return!1;
    let t;
    return typeof e=="number"?t=e:t=this.indexOf(e), t<0?!1:t<=this.sticky
  }
  setTransient(e, t){
    if(!t&&this.transient.size===0)return;
    const i=this.findEditor(e);
    if(!i)return;
    const[r, s]=i;
    return this.doSetTransient(r, s, t), r
  }
  doSetTransient(e, t, i){
    if(i){
      if(this.transient.has(e))return;
      this.transient.add(e)
    }
    else{
      if(!this.transient.has(e))return;
      this.transient.delete(e)
    }
    const r={
      kind:12,editor:e,editorIndex:t
    };
    this._onDidModelChange.fire(r)
  }
  isTransient(e){
    if(this.transient.size===0)return!1;
    let t;
    return typeof e=="number"?t=this.editors[e]:t=this.findEditor(e)?.[0], !!t&&this.transient.has(t)
  }
  splice(e, t, i){
    const r=this.editors[e];
    if(t&&this.isSticky(e)&&this.sticky--, i?this.editors.splice(e, t?1:0, i):this.editors.splice(e, t?1:0), !t&&i)this.mru.length===0?this.mru.push(i):this.mru.splice(1, 0, i);
    else{
      const s=this.indexOf(r,this.mru);
      t&&!i?this.mru.splice(s,1):t&&i&&this.mru.splice(s,1,i)
    }
  }
  indexOf(e, t=this.editors, i){
    let r=-1;
    if(!e)return r;
    for(let s=0;
    s<t.length;
    s++){
      const o=t[s];
      if(this.matches(o,e,i))if(i?.supportSideBySide&&o instanceof O1&&!(e instanceof O1))r=s;
      else{
        r=s;
        break
      }
    }
    return r
  }
  findEditor(e, t){
    const i=this.indexOf(e, this.editors, t);
    if(i!==-1)return[this.editors[i], i]
  }
  isFirst(e, t=this.editors){
    return this.matches(t[0], e)
  }
  isLast(e, t=this.editors){
    return this.matches(t[t.length-1], e)
  }
  contains(e, t){
    return this.indexOf(e, this.editors, t)!==-1
  }
  matches(e, t, i){
    if(!e||!t)return!1;
    if(i?.supportSideBySide&&e instanceof O1&&!(t instanceof O1))switch(i.supportSideBySide){
      case op.ANY:if(this.matches(e.primary,t,i)||this.matches(e.secondary,t,i))return!0;
      break;
      case op.BOTH:if(this.matches(e.primary,t,i)&&this.matches(e.secondary,t,i))return!0;
      break
    }
    const r=e===t;
    return i?.strictEquals?r:r||e.matches(t)
  }
  get isLocked(){
    return this.locked
  }
  lock(e){
    this.isLocked!==e&&(this.locked=e, this._onDidModelChange.fire({
      kind:3
    }))
  }
  clone(){
    const e=this.instantiationService.createInstance(q1t, void 0);
    e.editors=this.editors.slice(0), e.mru=this.mru.slice(0), e.preview=this.preview, e.selection=this.selection.slice(0), e.sticky=this.sticky;
    for(const t of e.editors)e.registerEditorListeners(t);
    return e
  }
  serialize(){
    const e=Di.as(Jp.EditorFactory), t=[], i=[];
    let r, s=this.sticky;
    for(let a=0;
    a<this.editors.length;
    a++){
      const l=this.editors[a];
      let u=!1;
      const d=e.getEditorSerializer(l);
      if(d){
        const m=d.canSerialize(l)?d.serialize(l):void 0;
        typeof m=="string"?(u=!0,i.push({
          id:l.typeId,value:m
        }),t.push(l),this.preview===l&&(r=t.length-1)):u=!1
      }
      !u&&this.isSticky(a)&&s--
    }
    const o=this.mru.map(a=>this.indexOf(a, t)).filter(a=>a>=0);
    return{
      id:this.id,locked:this.locked?!0:void 0,editors:i,mru:o,preview:r,sticky:s>=0?s:void 0
    }
  }
  deserialize(e){
    const t=Di.as(Jp.EditorFactory);
    return typeof e.id=="number"?(this._id=e.id, q1t.IDS=Math.max(e.id+1, q1t.IDS)):this._id=q1t.IDS++, e.locked&&(this.locked=!0), e.editors.length>0&&(this._hasHadEditors=!0), this.editors=lh(e.editors.map((i, r)=>{
      let s;
      const o=t.getEditorSerializer(i.id);
      if(o){
        const a=o.deserialize(this.instantiationService,i.value);
        a instanceof XS&&(s=a,this.registerEditorListeners(s))
      }
      return!s&&typeof e.sticky=="number"&&r<=e.sticky&&e.sticky--,s
    })), this.mru=lh(e.mru.map(i=>this.editors[i])), this.selection=this.mru.length>0?[this.mru[0]]:[], typeof e.preview=="number"&&(this.preview=this.editors[e.preview]), typeof e.sticky=="number"&&(this.sticky=e.sticky), this._id
  }
  dispose(){
    Bo(Array.from(this.editorListeners)), this.editorListeners.clear(), this.transient.clear(), super.dispose()
  }
}, N0i=q1t=__decorate([__param(1, ln), __param(2, Fn)], N0i)
}
}), Moy=