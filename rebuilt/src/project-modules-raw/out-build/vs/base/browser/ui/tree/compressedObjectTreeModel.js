// Module: out-build/vs/base/browser/ui/tree/compressedObjectTreeModel.js
// Offset: 24907860 (bundle byte offset)
// Size: 6723 bytes

wca(), kca(), iNe(), Vs(), yn(), Ef(), ogg=n=>({
  getId(e){
    return e.elements.map(t=>n.getId(t).toString()).join("\0")
  }
}), agg=class{
  get onDidSpliceRenderedNodes(){
    return this.model.onDidSpliceRenderedNodes
  }
  get onDidSpliceModel(){
    return this.model.onDidSpliceModel
  }
  get onDidChangeCollapseState(){
    return this.model.onDidChangeCollapseState
  }
  get onDidChangeRenderNodeCount(){
    return this.model.onDidChangeRenderNodeCount
  }
  get size(){
    return this.nodes.size
  }
  constructor(n, e={
    
  }){
    this.user=n, this.rootRef=null, this.nodes=new Map, this.model=new kpi(n, e), this.enabled=typeof e.compressionEnabled>"u"?!0:e.compressionEnabled, this.identityProvider=e.identityProvider
  }
  setChildren(n, e=bl.empty(), t){
    const i=t.diffIdentityProvider&&ogg(t.diffIdentityProvider);
    if(n===null){
      const g=bl.map(e,this.enabled?xca:Eca);
      this._setChildren(null,g,{
        diffIdentityProvider:i,diffDepth:1/0
      });
      return
    }
    const r=this.nodes.get(n);
    if(!r)throw new Sq(this.user, "Unknown compressed tree node");
    const s=this.model.getNode(r), o=this.model.getParentNodeLocation(r), a=this.model.getNode(o), l=rgg(s), u=sgg(l, n, e), d=(this.enabled?xca:Eca)(u), m=t.diffIdentityProvider?((g, f)=>t.diffIdentityProvider.getId(g)===t.diffIdentityProvider.getId(f)):void 0;
    if(cg(d.element.elements, s.element.elements, m)){
      this._setChildren(r,d.children||bl.empty(),{
        diffIdentityProvider:i,diffDepth:1
      });
      return
    }
    const p=a.children.map(g=>g===s?d:g);
    this._setChildren(a.element, p, {
      diffIdentityProvider:i,diffDepth:s.depth-a.depth
    })
  }
  isCompressionEnabled(){
    return this.enabled
  }
  setCompressionEnabled(n){
    if(n===this.enabled)return;
    this.enabled=n;
    const t=this.model.getNode().children, i=bl.map(t, rgg), r=bl.map(i, n?xca:Eca);
    this._setChildren(null, r, {
      diffIdentityProvider:this.identityProvider,diffDepth:1/0
    })
  }
  _setChildren(n, e, t){
    const i=new Set, r=o=>{
      for(const a of o.element.elements)i.add(a),this.nodes.set(a,o.element)
    }, s=o=>{
      for(const a of o.element.elements)i.has(a)||this.nodes.delete(a)
    };
    this.model.setChildren(n, e, {
      ...t,onDidCreateNode:r,onDidDeleteNode:s
    })
  }
  has(n){
    return this.nodes.has(n)
  }
  getListIndex(n){
    const e=this.getCompressedNode(n);
    return this.model.getListIndex(e)
  }
  getListRenderCount(n){
    const e=this.getCompressedNode(n);
    return this.model.getListRenderCount(e)
  }
  getNode(n){
    if(typeof n>"u")return this.model.getNode();
    const e=this.getCompressedNode(n);
    return this.model.getNode(e)
  }
  getNodeLocation(n){
    const e=this.model.getNodeLocation(n);
    return e===null?null:e.elements[e.elements.length-1]
  }
  getParentNodeLocation(n){
    const e=this.getCompressedNode(n), t=this.model.getParentNodeLocation(e);
    return t===null?null:t.elements[t.elements.length-1]
  }
  getFirstElementChild(n){
    const e=this.getCompressedNode(n);
    return this.model.getFirstElementChild(e)
  }
  getLastElementAncestor(n){
    const e=typeof n>"u"?void 0:this.getCompressedNode(n);
    return this.model.getLastElementAncestor(e)
  }
  isCollapsible(n){
    const e=this.getCompressedNode(n);
    return this.model.isCollapsible(e)
  }
  setCollapsible(n, e){
    const t=this.getCompressedNode(n);
    return this.model.setCollapsible(t, e)
  }
  isCollapsed(n){
    const e=this.getCompressedNode(n);
    return this.model.isCollapsed(e)
  }
  setCollapsed(n, e, t){
    const i=this.getCompressedNode(n);
    return this.model.setCollapsed(i, e, t)
  }
  expandTo(n){
    const e=this.getCompressedNode(n);
    this.model.expandTo(e)
  }
  rerender(n){
    const e=this.getCompressedNode(n);
    this.model.rerender(e)
  }
  refilter(){
    this.model.refilter()
  }
  resort(n=null, e=!0){
    const t=this.getCompressedNode(n);
    this.model.resort(t, e)
  }
  getCompressedNode(n){
    if(n===null)return null;
    const e=this.nodes.get(n);
    if(!e)throw new Sq(this.user, `Tree element not found: ${n}`);
    return e
  }
}, cgg=n=>n[n.length-1], lgg=class NWb{
  get element(){
    return this.node.element===null?null:this.unwrapper(this.node.element)
  }
  get children(){
    return this.node.children.map(e=>new NWb(this.unwrapper, e))
  }
  get depth(){
    return this.node.depth
  }
  get visibleChildrenCount(){
    return this.node.visibleChildrenCount
  }
  get visibleChildIndex(){
    return this.node.visibleChildIndex
  }
  get collapsible(){
    return this.node.collapsible
  }
  get collapsed(){
    return this.node.collapsed
  }
  get visible(){
    return this.node.visible
  }
  get filterData(){
    return this.node.filterData
  }
  constructor(e, t){
    this.unwrapper=e, this.node=t
  }
}, ugg=class{
  get onDidSpliceModel(){
    return In.map(this.model.onDidSpliceModel, ({
      insertedNodes:n,deletedNodes:e
    })=>({
      insertedNodes:n.map(t=>this.nodeMapper.map(t)),deletedNodes:e.map(t=>this.nodeMapper.map(t))
    }))
  }
  get onDidSpliceRenderedNodes(){
    return In.map(this.model.onDidSpliceRenderedNodes, ({
      start:n,deleteCount:e,elements:t
    })=>({
      start:n,deleteCount:e,elements:t.map(i=>this.nodeMapper.map(i))
    }))
  }
  get onDidChangeCollapseState(){
    return In.map(this.model.onDidChangeCollapseState, ({
      node:n,deep:e
    })=>({
      node:this.nodeMapper.map(n),deep:e
    }))
  }
  get onDidChangeRenderNodeCount(){
    return In.map(this.model.onDidChangeRenderNodeCount, n=>this.nodeMapper.map(n))
  }
  constructor(n, e={
    
  }){
    this.rootRef=null, this.elementMapper=e.elementMapper||cgg;
    const t=i=>this.elementMapper(i.elements);
    this.nodeMapper=new yca(i=>new lgg(t, i)), this.model=new agg(n, D0A(t, e))
  }
  setChildren(n, e=bl.empty(), t={
    
  }){
    this.model.setChildren(n, e, t)
  }
  isCompressionEnabled(){
    return this.model.isCompressionEnabled()
  }
  setCompressionEnabled(n){
    this.model.setCompressionEnabled(n)
  }
  has(n){
    return this.model.has(n)
  }
  getListIndex(n){
    return this.model.getListIndex(n)
  }
  getListRenderCount(n){
    return this.model.getListRenderCount(n)
  }
  getNode(n){
    return this.nodeMapper.map(this.model.getNode(n))
  }
  getNodeLocation(n){
    return n.element
  }
  getParentNodeLocation(n){
    return this.model.getParentNodeLocation(n)
  }
  getFirstElementChild(n){
    const e=this.model.getFirstElementChild(n);
    return e===null||typeof e>"u"?e:this.elementMapper(e.elements)
  }
  getLastElementAncestor(n){
    const e=this.model.getLastElementAncestor(n);
    return e===null||typeof e>"u"?e:this.elementMapper(e.elements)
  }
  isCollapsible(n){
    return this.model.isCollapsible(n)
  }
  setCollapsible(n, e){
    return this.model.setCollapsible(n, e)
  }
  isCollapsed(n){
    return this.model.isCollapsed(n)
  }
  setCollapsed(n, e, t){
    return this.model.setCollapsed(n, e, t)
  }
  expandTo(n){
    return this.model.expandTo(n)
  }
  rerender(n){
    return this.model.rerender(n)
  }
  refilter(){
    return this.model.refilter()
  }
  resort(n=null, e=!0){
    return this.model.resort(n, e)
  }
  getCompressedTreeNode(n=null){
    return this.model.getNode(n)
  }
}
}
});
function R0A(n, e){
  return e&&{
    ...e, keyboardNavigationLabelProvider:e.keyboardNavigationLabelProvider&&{
      getKeyboardNavigationLabel(t){
        let i;
        try{
          i=n().getCompressedTreeNode(t)
        }
        catch{
          return e.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(t)
        }
        return i.element.elements.length===1?e.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(t):e.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(i.element.elements)
      }
    }
  }
}
var Hne, QGl, dgg, jGl, zGl=