// Module: out-build/vs/base/browser/ui/list/rowCache.js
// Offset: 1970007 (bundle byte offset)
// Size: 1426 bytes

ri(), i_h=class{
  constructor(n){
    this.renderers=n, this.cache=new Map, this.transactionNodesPendingRemoval=new Set, this.inTransaction=!1
  }
  alloc(n){
    let e=this.getTemplateCache(n).pop(), t=!1;
    if(e)t=this.transactionNodesPendingRemoval.has(e.domNode), t&&this.transactionNodesPendingRemoval.delete(e.domNode);
    else{
      const i=Ct(".monaco-list-row"),s=this.getRenderer(n).renderTemplate(i);
      e={
        domNode:i,templateId:n,templateData:s
      }
    }
    return{
      row:e,isReusingConnectedDomNode:t
    }
  }
  release(n){
    n&&this.releaseRow(n)
  }
  transact(n){
    if(this.inTransaction)throw new Error("Already in transaction");
    this.inTransaction=!0;
    try{
      n()
    }
    finally{
      for(const e of this.transactionNodesPendingRemoval)this.doRemoveNode(e);
      this.transactionNodesPendingRemoval.clear(),this.inTransaction=!1
    }
  }
  releaseRow(n){
    const{
      domNode:e,templateId:t
    }
    =n;
    e&&(this.inTransaction?this.transactionNodesPendingRemoval.add(e):this.doRemoveNode(e)), this.getTemplateCache(t).push(n)
  }
  doRemoveNode(n){
    n.classList.remove("scrolling"), n.remove()
  }
  getTemplateCache(n){
    let e=this.cache.get(n);
    return e||(e=[], this.cache.set(n, e)), e
  }
  dispose(){
    this.cache.forEach((n, e)=>{
      for(const t of n)this.getRenderer(e).disposeTemplate(t.templateData),t.templateData=null
    }), this.cache.clear(), this.transactionNodesPendingRemoval.clear()
  }
  getRenderer(n){
    const e=this.renderers.get(n);
    if(!e)throw new Error(`No renderer found for ${n}`);
    return e
  }
}
}
}), DuA=