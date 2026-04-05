// Module: out-build/vs/editor/contrib/editorState/browser/keybindingCancellation.js
// Offset: 2421263 (bundle byte offset)
// Size: 1010 bytes

Cu(), si(), Po(), l2(), Wt(), Er(), Ht(), X5o=xi("IEditorCancelService"), xBc=new Sn("cancellableOperation", !1, _(1077, null)), Vi(X5o, class{
  constructor(){
    this._tokens=new WeakMap
  }
  add(n, e){
    let t=this._tokens.get(n);
    t||(t=n.invokeWithinContext(r=>{
      const s=xBc.bindTo(r.get(wi)),o=new WD;
      return{
        key:s,tokens:o
      }
    }), this._tokens.set(n, t));
    let i;
    return t.key.set(!0), i=t.tokens.push(e), ()=>{
      i&&(i(),t.key.set(!t.tokens.isEmpty()),i=void 0)
    }
  }
  cancel(n){
    const e=this._tokens.get(n);
    if(!e)return;
    const t=e.tokens.pop();
    t&&(t.cancel(), e.key.set(!e.tokens.isEmpty()))
  }
}, 1), $Sh=class extends Wc{
  constructor(n, e){
    super(e), this.editor=n, this._unregister=n.invokeWithinContext(t=>t.get(X5o).add(n, this))
  }
  dispose(){
    this._unregister(), super.dispose()
  }
}, ld(new class extends dF{
  constructor(){
    super({
      id:"editor.cancelOperation",kbOpts:{
        weight:100,primary:9
      },precondition:xBc
    })
  }
  runEditorCommand(n, e){
    n.get(X5o).cancel(e)
  }
})
}
}), qSh, z3n, ERe, V3n, dve=