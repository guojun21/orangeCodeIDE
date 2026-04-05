// Module: out-build/vs/base/browser/ui/tree/dataTree.js
// Offset: 24943188 (bundle byte offset)
// Size: 2083 bytes

LAe(), kca(), iNe(), Ef(), lme=class extends aCt{
  constructor(n, e, t, i, r, s={
    
  }){
    super(n, e, t, i, s), this.user=n, this.dataSource=r, this.nodesByIdentity=new Map, this.identityProvider=s.identityProvider
  }
  getInput(){
    return this.input
  }
  setInput(n, e){
    if(e&&!this.identityProvider)throw new Sq(this.user, "Can't restore tree view state without an identity provider");
    if(this.input=n, !n){
      this.nodesByIdentity.clear(),this.model.setChildren(null,bl.empty());
      return
    }
    if(!e){
      this._refresh(n);
      return
    }
    const t=[], i=[], r=o=>{
      const a=this.identityProvider.getId(o).toString();
      return!e.expanded[a]
    }, s=o=>{
      const a=this.identityProvider.getId(o.element).toString();
      e.focus.has(a)&&t.push(o.element),e.selection.has(a)&&i.push(o.element)
    };
    this._refresh(n, r, s), this.setFocus(t), this.setSelection(i), e&&typeof e.scrollTop=="number"&&(this.scrollTop=e.scrollTop)
  }
  updateChildren(n=this.input){
    if(typeof this.input>"u")throw new Sq(this.user, "Tree input not set");
    let e;
    this.identityProvider&&(e=t=>{
      const i=this.identityProvider.getId(t).toString(),r=this.nodesByIdentity.get(i);
      if(r)return r.collapsed
    }), this._refresh(n, e)
  }
  resort(n=this.input, e=!0){
    this.model.resort(n===this.input?null:n, e)
  }
  refresh(n){
    if(n===void 0){
      this.view.rerender();
      return
    }
    this.model.rerender(n)
  }
  _refresh(n, e, t){
    let i;
    if(this.identityProvider){
      const r=new Set,s=t;
      t=o=>{
        const a=this.identityProvider.getId(o.element).toString();
        r.add(a),this.nodesByIdentity.set(a,o),s?.(o)
      },i=o=>{
        const a=this.identityProvider.getId(o.element).toString();
        r.has(a)||this.nodesByIdentity.delete(a)
      }
    }
    this.model.setChildren(n===this.input?null:n, this.iterate(n, e).elements, {
      onDidCreateNode:t,onDidDeleteNode:i
    })
  }
  iterate(n, e){
    const t=[...this.dataSource.getChildren(n)];
    return{
      elements:bl.map(t,r=>{
        const{
          elements:s,size:o
        }
        =this.iterate(r,e),a=this.dataSource.hasChildren?this.dataSource.hasChildren(r):void 0,l=o===0?void 0:e&&e(r);
        return{
          element:r,children:s,collapsible:a,collapsed:l
        }
      }),size:t.length
    }
  }
  createModel(n, e){
    return new kpi(n, e)
  }
}
}
}), eWl, tWl, NAe, uU, MAe, nWl, kgg, Gy, hL, Gae, Egg, lD, eQ, xgg, Av=