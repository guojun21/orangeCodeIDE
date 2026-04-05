// Module: out-build/vs/base/browser/ui/tree/objectTreeModel.js
// Offset: 24902145 (bundle byte offset)
// Size: 5715 bytes

wca(), iNe(), Ef(), kpi=class{
  get size(){
    return this.nodes.size
  }
  constructor(n, e={
    
  }){
    this.user=n, this.rootRef=null, this.nodes=new Map, this.nodesByIdentity=new Map, this.model=new Upg(n, null, e), this.onDidSpliceModel=this.model.onDidSpliceModel, this.onDidSpliceRenderedNodes=this.model.onDidSpliceRenderedNodes, this.onDidChangeCollapseState=this.model.onDidChangeCollapseState, this.onDidChangeRenderNodeCount=this.model.onDidChangeRenderNodeCount, e.sorter&&(this.sorter={
      compare(t,i){
        return e.sorter.compare(t.element,i.element)
      }
    }), this.identityProvider=e.identityProvider
  }
  setChildren(n, e=bl.empty(), t={
    
  }){
    const i=this.getElementLocation(n);
    this._setChildren(i, this.preserveCollapseState(e), t)
  }
  _setChildren(n, e=bl.empty(), t){
    const i=new Set, r=new Set, s=a=>{
      if(a.element===null)return;
      const l=a;
      if(i.add(l.element),this.nodes.set(l.element,l),this.identityProvider){
        const u=this.identityProvider.getId(l.element).toString();
        r.add(u),this.nodesByIdentity.set(u,l)
      }
      t.onDidCreateNode?.(l)
    }, o=a=>{
      if(a.element===null)return;
      const l=a;
      if(i.has(l.element)||this.nodes.delete(l.element),this.identityProvider){
        const u=this.identityProvider.getId(l.element).toString();
        r.has(u)||this.nodesByIdentity.delete(u)
      }
      t.onDidDeleteNode?.(l)
    };
    this.model.splice([...n, 0], Number.MAX_VALUE, e, {
      ...t,onDidCreateNode:s,onDidDeleteNode:o
    })
  }
  preserveCollapseState(n=bl.empty()){
    return this.sorter&&(n=[...n].sort(this.sorter.compare.bind(this.sorter))), bl.map(n, e=>{
      let t=this.nodes.get(e.element);
      if(!t&&this.identityProvider){
        const s=this.identityProvider.getId(e.element).toString();
        t=this.nodesByIdentity.get(s)
      }
      if(!t){
        let s;
        return typeof e.collapsed>"u"?s=void 0:e.collapsed===Cq.Collapsed||e.collapsed===Cq.PreserveOrCollapsed?s=!0:e.collapsed===Cq.Expanded||e.collapsed===Cq.PreserveOrExpanded?s=!1:s=!!e.collapsed,{
          ...e,children:this.preserveCollapseState(e.children),collapsed:s
        }
      }
      const i=typeof e.collapsible=="boolean"?e.collapsible:t.collapsible;
      let r;
      return typeof e.collapsed>"u"||e.collapsed===Cq.PreserveOrCollapsed||e.collapsed===Cq.PreserveOrExpanded?r=t.collapsed:e.collapsed===Cq.Collapsed?r=!0:e.collapsed===Cq.Expanded?r=!1:r=!!e.collapsed,{
        ...e,collapsible:i,collapsed:r,children:this.preserveCollapseState(e.children)
      }
    })
  }
  rerender(n){
    const e=this.getElementLocation(n);
    this.model.rerender(e)
  }
  resort(n=null, e=!0){
    if(!this.sorter)return;
    const t=this.getElementLocation(n), i=this.model.getNode(t);
    this._setChildren(t, this.resortChildren(i, e), {
      
    })
  }
  resortChildren(n, e, t=!0){
    let i=[...n.children];
    return(e||t)&&(i=i.sort(this.sorter.compare.bind(this.sorter))), bl.map(i, r=>({
      element:r.element,collapsible:r.collapsible,collapsed:r.collapsed,children:this.resortChildren(r,e,!1)
    }))
  }
  getFirstElementChild(n=null){
    const e=this.getElementLocation(n);
    return this.model.getFirstElementChild(e)
  }
  getLastElementAncestor(n=null){
    const e=this.getElementLocation(n);
    return this.model.getLastElementAncestor(e)
  }
  has(n){
    return this.nodes.has(n)
  }
  getListIndex(n){
    const e=this.getElementLocation(n);
    return this.model.getListIndex(e)
  }
  getListRenderCount(n){
    const e=this.getElementLocation(n);
    return this.model.getListRenderCount(e)
  }
  isCollapsible(n){
    const e=this.getElementLocation(n);
    return this.model.isCollapsible(e)
  }
  setCollapsible(n, e){
    const t=this.getElementLocation(n);
    return this.model.setCollapsible(t, e)
  }
  isCollapsed(n){
    const e=this.getElementLocation(n);
    return this.model.isCollapsed(e)
  }
  setCollapsed(n, e, t){
    const i=this.getElementLocation(n);
    return this.model.setCollapsed(i, e, t)
  }
  expandTo(n){
    const e=this.getElementLocation(n);
    this.model.expandTo(e)
  }
  refilter(){
    this.model.refilter()
  }
  getNode(n=null){
    if(n===null)return this.model.getNode(this.model.rootRef);
    const e=this.nodes.get(n);
    if(!e)throw new Sq(this.user, `Tree element not found: ${n}`);
    return e
  }
  getNodeLocation(n){
    return n.element
  }
  getParentNodeLocation(n){
    if(n===null)throw new Sq(this.user, "Invalid getParentNodeLocation call");
    const e=this.nodes.get(n);
    if(!e)throw new Sq(this.user, `Tree element not found: ${n}`);
    const t=this.model.getNodeLocation(e), i=this.model.getParentNodeLocation(t);
    return this.model.getNode(i).element
  }
  getElementLocation(n){
    if(n===null)return[];
    const e=this.nodes.get(n);
    if(!e)throw new Sq(this.user, `Tree element not found: ${n}`);
    return this.model.getNodeLocation(e)
  }
}
}
});
function Eca(n){
  const e=[n.element], t=n.incompressible||!1;
  return{
    element:{
      elements:e,incompressible:t
    }, children:bl.map(bl.from(n.children), Eca), collapsible:n.collapsible, collapsed:n.collapsed
  }
}
function xca(n){
  const e=[n.element], t=n.incompressible||!1;
  let i, r;
  for(;
  [r, i]=bl.consume(bl.from(n.children), 2), !(r.length!==1||r[0].incompressible);
  )n=r[0], e.push(n.element);
  return{
    element:{
      elements:e,incompressible:t
    }, children:bl.map(bl.concat(r, i), xca), collapsible:n.collapsible, collapsed:n.collapsed
  }
}
function WGl(n, e=0){
  let t;
  return e<n.element.elements.length-1?t=[WGl(n, e+1)]:t=bl.map(bl.from(n.children), i=>WGl(i, 0)), e===0&&n.element.incompressible?{
    element:n.element.elements[e], children:t, incompressible:!0, collapsible:n.collapsible, collapsed:n.collapsed
  }
  :{
    element:n.element.elements[e], children:t, collapsible:n.collapsible, collapsed:n.collapsed
  }
}
function rgg(n){
  return WGl(n, 0)
}
function sgg(n, e, t){
  return n.element===e?{
    ...n, children:t
  }
  :{
    ...n, children:bl.map(bl.from(n.children), i=>sgg(i, e, t))
  }
}
function D0A(n, e){
  return{
    ...e, identityProvider:e.identityProvider&&{
      getId(t){
        return e.identityProvider.getId(n(t))
      }
    }, sorter:e.sorter&&{
      compare(t,i){
        return e.sorter.compare(t.elements[0],i.elements[0])
      }
    }, filter:e.filter&&{
      filter(t,i){
        const r=t.elements;
        for(let s=0;
        s<r.length-1;
        s++){
          const o=e.filter.filter(r[s],i);
          i=oCt(Spi(o)?o.visibility:o)
        }
        return e.filter.filter(r[r.length-1],i)
      }
    }
  }
}
var ogg, agg, cgg, lgg, ugg, B0A=