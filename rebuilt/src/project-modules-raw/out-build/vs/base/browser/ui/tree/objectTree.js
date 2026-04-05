// Module: out-build/vs/base/browser/ui/tree/objectTree.js
// Offset: 24914583 (bundle byte offset)
// Size: 6300 bytes

LAe(), B0A(), kca(), U0(), Ef(), Hne=class extends aCt{
  get onDidChangeCollapseState(){
    return this.model.onDidChangeCollapseState
  }
  constructor(n, e, t, i, r={
    
  }){
    super(n, e, t, i, r), this.user=n
  }
  setChildren(n, e=bl.empty(), t){
    this.model.setChildren(n, e, t)
  }
  rerender(n){
    if(n===void 0){
      this.view.rerender();
      return
    }
    this.model.rerender(n)
  }
  updateElementHeight(n, e){
    const t=this.model.getListIndex(n);
    t!==-1&&this.view.updateElementHeight(t, e)
  }
  resort(n, e=!0){
    this.model.resort(n, e)
  }
  hasElement(n){
    return this.model.has(n)
  }
  createModel(n, e){
    return new kpi(n, e)
  }
}, QGl=class{
  get compressedTreeNodeProvider(){
    return this._compressedTreeNodeProvider()
  }
  constructor(n, e, t){
    this._compressedTreeNodeProvider=n, this.stickyScrollDelegate=e, this.renderer=t, this.templateId=t.templateId, t.onDidChangeTwistieState&&(this.onDidChangeTwistieState=t.onDidChangeTwistieState)
  }
  renderTemplate(n){
    return{
      compressedTreeNode:void 0,data:this.renderer.renderTemplate(n)
    }
  }
  renderElement(n, e, t, i){
    let r=this.stickyScrollDelegate.getCompressedNode(n);
    r||(r=this.compressedTreeNodeProvider.getCompressedTreeNode(n.element)), r.element.elements.length===1?(t.compressedTreeNode=void 0, this.renderer.renderElement(n, e, t.data, i)):(t.compressedTreeNode=r, this.renderer.renderCompressedElements(r, e, t.data, i))
  }
  disposeElement(n, e, t, i){
    t.compressedTreeNode?this.renderer.disposeCompressedElements?.(t.compressedTreeNode, e, t.data, i):this.renderer.disposeElement?.(n, e, t.data, i)
  }
  disposeTemplate(n){
    this.renderer.disposeTemplate(n.data)
  }
  renderTwistie(n, e){
    return this.renderer.renderTwistie?this.renderer.renderTwistie(n, e):!1
  }
}, __decorate([cl], QGl.prototype, "compressedTreeNodeProvider", null), dgg=class{
  constructor(n){
    this.modelProvider=n, this.compressedStickyNodes=new Map
  }
  getCompressedNode(n){
    return this.compressedStickyNodes.get(n)
  }
  constrainStickyScrollNodes(n, e, t){
    if(this.compressedStickyNodes.clear(), n.length===0)return[];
    for(let i=0;
    i<n.length;
    i++){
      const r=n[i],s=r.position+r.height;
      if(i+1<n.length&&s+n[i+1].height>t||i>=e-1&&e<n.length){
        const a=n.slice(0,i),l=n.slice(i),u=this.compressStickyNodes(l);
        return[...a,u]
      }
    }
    return n
  }
  compressStickyNodes(n){
    if(n.length===0)throw new Error("Can't compress empty sticky nodes");
    const e=this.modelProvider();
    if(!e.isCompressionEnabled())return n[0];
    const t=[];
    for(let l=0;
    l<n.length;
    l++){
      const u=n[l],d=e.getCompressedTreeNode(u.node.element);
      if(d.element){
        if(l!==0&&d.element.incompressible)break;
        t.push(...d.element.elements)
      }
    }
    if(t.length<2)return n[0];
    const i=n[n.length-1], r={
      elements:t,incompressible:!1
    }, s={
      ...i.node,children:[],element:r
    }, o=new Proxy(n[0].node, {
      
    }), a={
      node:o,startIndex:n[0].startIndex,endIndex:i.endIndex,position:n[0].position,height:n[0].height
    };
    return this.compressedStickyNodes.set(o, s), a
  }
}, jGl=class extends Hne{
  constructor(n, e, t, i, r={
    
  }){
    const s=()=>this, o=new dgg(()=>this.model), a=i.map(l=>new QGl(s, o, l));
    super(n, e, t, a, {
      ...R0A(s,r),stickyScrollDelegate:o
    })
  }
  setChildren(n, e=bl.empty(), t){
    this.model.setChildren(n, e, t)
  }
  createModel(n, e){
    return new ugg(n, e)
  }
  updateOptions(n={
    
  }){
    super.updateOptions(n), typeof n.compressionEnabled<"u"&&this.model.setCompressionEnabled(n.compressionEnabled)
  }
  getCompressedTreeNode(n=null){
    return this.model.getCompressedTreeNode(n)
  }
}
}
});
function VGl(n){
  return{
    ...n, children:[], refreshPromise:void 0, stale:!0, slow:!1, forceExpanded:!1
  }
}
function KGl(n, e){
  return e.parent?e.parent===n?!0:KGl(n, e.parent):!1
}
function P0A(n, e){
  return n===e||KGl(n, e)||KGl(e, n)
}
function hgg(n){
  return{
    browserEvent:n.browserEvent, elements:n.elements.map(e=>e.element)
  }
}
function Tca(n){
  return{
    browserEvent:n.browserEvent, element:n.element&&n.element.element, target:n.target
  }
}
function L0A(n){
  return{
    browserEvent:n.browserEvent, element:n.element&&n.element.element, anchor:n.anchor, isStickyScroll:n.isStickyScroll
  }
}
function YGl(n){
  return n instanceof ove?new fgg(n):n
}
function mgg(n){
  return n&&{
    ...n, collapseByDefault:!0, identityProvider:n.identityProvider&&{
      getId(e){
        return n.identityProvider.getId(e.element)
      }
    }, dnd:n.dnd&&new bgg(n.dnd), multipleSelectionController:n.multipleSelectionController&&{
      isSelectionSingleChangeEvent(e){
        return n.multipleSelectionController.isSelectionSingleChangeEvent({
          ...e,element:e.element
        })
      },isSelectionRangeChangeEvent(e){
        return n.multipleSelectionController.isSelectionRangeChangeEvent({
          ...e,element:e.element
        })
      }
    }, accessibilityProvider:n.accessibilityProvider&&{
      ...n.accessibilityProvider,getPosInSet:void 0,getSetSize:void 0,getRole:n.accessibilityProvider.getRole?e=>n.accessibilityProvider.getRole(e.element):()=>"treeitem",isChecked:n.accessibilityProvider.isChecked?e=>!!n.accessibilityProvider?.isChecked(e.element):void 0,getAriaLabel(e){
        return n.accessibilityProvider.getAriaLabel(e.element)
      },getWidgetAriaLabel(){
        return n.accessibilityProvider.getWidgetAriaLabel()
      },getWidgetRole:n.accessibilityProvider.getWidgetRole?()=>n.accessibilityProvider.getWidgetRole():()=>"tree",getAriaLevel:n.accessibilityProvider.getAriaLevel&&(e=>n.accessibilityProvider.getAriaLevel(e.element)),getActiveDescendantId:n.accessibilityProvider.getActiveDescendantId&&(e=>n.accessibilityProvider.getActiveDescendantId(e.element))
    }, filter:n.filter&&{
      filter(e,t){
        return n.filter.filter(e.element,t)
      }
    }, keyboardNavigationLabelProvider:n.keyboardNavigationLabelProvider&&{
      ...n.keyboardNavigationLabelProvider,getKeyboardNavigationLabel(e){
        return n.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e.element)
      }
    }, sorter:void 0, expandOnlyOnTwistieClick:typeof n.expandOnlyOnTwistieClick>"u"?void 0:typeof n.expandOnlyOnTwistieClick!="function"?n.expandOnlyOnTwistieClick:(e=>n.expandOnlyOnTwistieClick(e.element)), defaultFindVisibility:e=>e.hasChildren&&e.stale?1:typeof n.defaultFindVisibility=="number"?n.defaultFindVisibility:typeof n.defaultFindVisibility>"u"?2:n.defaultFindVisibility(e.element)
  }
}
function ZGl(n, e){
  e(n), n.children.forEach(t=>ZGl(t, e))
}
function N0A(n){
  const e=n&&mgg(n);
  return e&&{
    ...e, keyboardNavigationLabelProvider:e.keyboardNavigationLabelProvider&&{
      ...e.keyboardNavigationLabelProvider,getCompressedNodeKeyboardNavigationLabel(t){
        return n.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(t.map(i=>i.element))
      }
    }
  }
}
function M0A(n){
  return typeof n=="boolean"?n?1:0:Spi(n)?oCt(n.visibility):oCt(n)
}
var pgg, ggg, fgg, bgg, vgg, Agg, kq, ygg, wgg, _gg, Cgg, XGl=