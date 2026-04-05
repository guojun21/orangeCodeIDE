// Module: out-build/vs/workbench/common/editor.js
// Offset: 25035084 (bundle byte offset)
// Size: 5855 bytes

Ht(), Js(), Yn(), rt(), Wt(), Ws(), ns(), zr(), mk(), nl(), Vf(), Jp={
  EditorPane:"workbench.contributions.editors", EditorFactory:"workbench.contributions.editor.inputFactories"
}, G0={
  id:"default", displayName:_(4391, null), providerDisplayName:_(4392, null)
}, sbg="workbench.editor.sidebysideEditor", tla="workbench.editors.textDiffEditor", qWl="workbench.editors.binaryResourceDiffEditor", (function(n){
  n[n.PROGRAMMATIC=1]="PROGRAMMATIC", n[n.USER=2]="USER", n[n.EDIT=3]="EDIT", n[n.NAVIGATION=4]="NAVIGATION", n[n.JUMP=5]="JUMP"
})(obg||(obg={
  
})), (function(n){
  n[n.IDENTICAL=1]="IDENTICAL", n[n.SIMILAR=2]="SIMILAR", n[n.DIFFERENT=3]="DIFFERENT"
})(abg||(abg={
  
})), (function(n){
  n[n.SHORT=0]="SHORT", n[n.MEDIUM=1]="MEDIUM", n[n.LONG=2]="LONG"
})(cbg||(cbg={
  
})), (function(n){
  n[n.EXPLICIT=1]="EXPLICIT", n[n.AUTO=2]="AUTO", n[n.FOCUS_CHANGE=3]="FOCUS_CHANGE", n[n.WINDOW_CHANGE=4]="WINDOW_CHANGE"
})(lbg||(lbg={
  
})), ubg=class{
  constructor(){
    this.mapIdToSaveSource=new Map
  }
  registerSource(n, e){
    let t=this.mapIdToSaveSource.get(n);
    return t||(t={
      source:n,label:e
    }, this.mapIdToSaveSource.set(n, t)), t.source
  }
  getSourceLabel(n){
    return this.mapIdToSaveSource.get(n)?.label??n
  }
}, hU=new ubg, (function(n){
  n[n.None=0]="None", n[n.Readonly=2]="Readonly", n[n.Untitled=4]="Untitled", n[n.Singleton=8]="Singleton", n[n.RequiresTrust=16]="RequiresTrust", n[n.CanSplitInGroup=32]="CanSplitInGroup", n[n.ForceDescription=64]="ForceDescription", n[n.CanDropIntoEditor=128]="CanDropIntoEditor", n[n.MultipleEditors=256]="MultipleEditors", n[n.Scratchpad=512]="Scratchpad"
})(dbg||(dbg={
  
})), HWl=class extends at{
  
}, (function(n){
  n[n.UNKNOWN=0]="UNKNOWN", n[n.REPLACE=1]="REPLACE", n[n.MOVE=2]="MOVE", n[n.UNPIN=3]="UNPIN"
})(iV||(iV={
  
})), (function(n){
  n[n.GROUP_ACTIVE=0]="GROUP_ACTIVE", n[n.GROUP_INDEX=1]="GROUP_INDEX", n[n.GROUP_LABEL=2]="GROUP_LABEL", n[n.GROUP_LOCKED=3]="GROUP_LOCKED", n[n.EDITORS_SELECTION=4]="EDITORS_SELECTION", n[n.EDITOR_OPEN=5]="EDITOR_OPEN", n[n.EDITOR_CLOSE=6]="EDITOR_CLOSE", n[n.EDITOR_MOVE=7]="EDITOR_MOVE", n[n.EDITOR_ACTIVE=8]="EDITOR_ACTIVE", n[n.EDITOR_LABEL=9]="EDITOR_LABEL", n[n.EDITOR_CAPABILITIES=10]="EDITOR_CAPABILITIES", n[n.EDITOR_PIN=11]="EDITOR_PIN", n[n.EDITOR_TRANSIENT=12]="EDITOR_TRANSIENT", n[n.EDITOR_STICKY=13]="EDITOR_STICKY", n[n.EDITOR_DIRTY=14]="EDITOR_DIRTY", n[n.EDITOR_WILL_DISPOSE=15]="EDITOR_WILL_DISPOSE"
})(hbg||(hbg={
  
})), (function(n){
  n[n.PRIMARY=1]="PRIMARY", n[n.SECONDARY=2]="SECONDARY", n[n.BOTH=3]="BOTH", n[n.ANY=4]="ANY"
})(op||(op={
  
})), mbg=class{
  getOriginalUri(n, e){
    if(!n)return;
    if(JAe(n))return gp.getOriginalUri(n.result, e);
    if(e?.supportSideBySide){
      const{
        primary:i,secondary:r
      }
      =this.getSideEditors(n);
      if(i&&r){
        if(e?.supportSideBySide===op.BOTH)return{
          primary:this.getOriginalUri(i,{
            filterByScheme:e.filterByScheme
          }),secondary:this.getOriginalUri(r,{
            filterByScheme:e.filterByScheme
          })
        };
        if(e?.supportSideBySide===op.ANY)return this.getOriginalUri(i,{
          filterByScheme:e.filterByScheme
        })??this.getOriginalUri(r,{
          filterByScheme:e.filterByScheme
        });
        n=e.supportSideBySide===op.PRIMARY?i:r
      }
    }
    if(nV(n)||Jun(n)||j1e(n)||JAe(n)||Gun(n))return;
    const t=ACA(n)?n.preferredResource:n.resource;
    return!t||!e||!e.filterByScheme?t:this.filterUri(t, e.filterByScheme)
  }
  getSideEditors(n){
    return rbg(n)||j1e(n)?{
      primary:n.primary,secondary:n.secondary
    }
    :tgi(n)||nV(n)?{
      primary:n.modified,secondary:n.original
    }
    :{
      primary:void 0,secondary:void 0
    }
  }
  getCanonicalUri(n, e){
    if(!n)return;
    if(JAe(n))return gp.getCanonicalUri(n.result, e);
    if(e?.supportSideBySide){
      const{
        primary:i,secondary:r
      }
      =this.getSideEditors(n);
      if(i&&r){
        if(e?.supportSideBySide===op.BOTH)return{
          primary:this.getCanonicalUri(i,{
            filterByScheme:e.filterByScheme
          }),secondary:this.getCanonicalUri(r,{
            filterByScheme:e.filterByScheme
          })
        };
        if(e?.supportSideBySide===op.ANY)return this.getCanonicalUri(i,{
          filterByScheme:e.filterByScheme
        })??this.getCanonicalUri(r,{
          filterByScheme:e.filterByScheme
        });
        n=e.supportSideBySide===op.PRIMARY?i:r
      }
    }
    if(nV(n)||Jun(n)||j1e(n)||JAe(n)||Gun(n))return;
    const t=n.resource;
    return!t||!e||!e.filterByScheme?t:this.filterUri(t, e.filterByScheme)
  }
  filterUri(n, e){
    if(Array.isArray(e)){
      if(e.some(t=>n.scheme===t))return n
    }
    else if(e===n.scheme)return n
  }
}, (function(n){
  n[n.UNKNOWN=0]="UNKNOWN", n[n.KEYBOARD=1]="KEYBOARD", n[n.MOUSE=2]="MOUSE"
})(zUe||(zUe={
  
})), gp=new mbg, (function(n){
  n[n.LEFT=0]="LEFT", n[n.RIGHT=1]="RIGHT"
})(pbg||(pbg={
  
})), gbg=class{
  constructor(){
    this.editorSerializerConstructors=new Map, this.editorSerializerInstances=new Map
  }
  start(n){
    const e=this.instantiationService=n.get(ln);
    for(const[t, i]of this.editorSerializerConstructors)this.createEditorSerializer(t, i, e);
    this.editorSerializerConstructors.clear()
  }
  createEditorSerializer(n, e, t){
    const i=t.createInstance(e);
    this.editorSerializerInstances.set(n, i)
  }
  registerFileEditorFactory(n){
    if(this.fileEditorFactory)throw new Error("Can only register one file editor factory.");
    this.fileEditorFactory=n
  }
  getFileEditorFactory(){
    return ed(this.fileEditorFactory)
  }
  registerEditorSerializer(n, e){
    if(this.editorSerializerConstructors.has(n)||this.editorSerializerInstances.has(n))throw new Error(`A editor serializer with type ID '${n}' was already registered.`);
    return this.instantiationService?this.createEditorSerializer(n, e, this.instantiationService):this.editorSerializerConstructors.set(n, e), $i(()=>{
      this.editorSerializerConstructors.delete(n),this.editorSerializerInstances.delete(n)
    })
  }
  getEditorSerializer(n){
    return this.editorSerializerInstances.get(typeof n=="string"?n:n.typeId)
  }
}, Di.add(Jp.EditorFactory, new gbg), (function(n){
  n[n.MOST_RECENTLY_ACTIVE=0]="MOST_RECENTLY_ACTIVE", n[n.SEQUENTIAL=1]="SEQUENTIAL"
})(fbg||(fbg={
  
}))
}
});
function bbg(n){
  const e=n;
  return D_(e?.editor)&&D_(e?.replacement)
}
function JWl(n){
  const e=n;
  return!!e&&typeof e.id=="number"&&Array.isArray(e.editors)
}
function dNe(n){
  return n.getValue("workbench.editor.openSideBySideDirection")==="down"?1:3
}
var da, vbg, Abg, ybg, wbg, _bg, Cbg, Sbg, od=