// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/utils/utils.js
// Offset: 25497325 (bundle byte offset)
// Size: 1873 bytes

ri(), Kde(), Vs(), GD(), rt(), Uc(), _r(), oa(), Yn(), dg(), $I(), tl(), ts(), EW(), WY(), bv(), akA=class aQb{
  static{
    this._modelId=0
  }
  constructor(e){
    this.scheme=e
  }
  getUniqueUri(){
    return je.from({
      scheme:this.scheme,path:new Date().toString()+String(aQb._modelId++)
    })
  }
}, rua=class{
  constructor(){
    this._data=""
  }
  moveTo(n){
    return this._data+=`M ${n.x} ${n.y} `, this
  }
  lineTo(n){
    return this._data+=`L ${n.x} ${n.y} `, this
  }
  curveTo(n, e){
    return this._data+=`Q ${n.x} ${n.y} ${e.x} ${e.y} `, this
  }
  curveTo2(n, e, t){
    return this._data+=`C ${n.x} ${n.y} ${e.x} ${e.y} ${t.x} ${t.y} `, this
  }
  build(){
    return this._data
  }
}
}
});
function ckA(n){
  return Mv.div({
    class:"content", style:{
      margin:4,minWidth:150
    }
  }, n)
}
function lkA(n){
  return Mv.div({
    class:"header", style:{
      color:zo(tuh),fontSize:"12px",fontWeight:"600",padding:"0 10px",lineHeight:26
    }
  }, [n])
}
function xdn(n){
  return Ite((e, t)=>Mv.div({
    class:["monaco-menu-option", n.isActive?.map(i=>i&&"active")], onmouseenter:()=>n.onHoverChange?.(!0), onmouseleave:()=>n.onHoverChange?.(!1), onclick:n.onAction, onkeydown:i=>{
      i.key==="Enter"&&n.onAction?.()
    }, tabIndex:0, style:{
      borderRadius:3
    }
  }, [Mv.elem("span", {
    style:{
      fontSize:16,display:"flex"
    }
  }, [Qt.isThemeIcon(n.icon)?tL(n.icon):n.icon.map(i=>tL(i))]), Mv.elem("span", {
    
  }, [n.title]), Mv.div({
    style:{
      marginLeft:"auto",opacity:"0.6"
    }, ref:i=>{
      const r=t.add(new Xoe(i,cf,{
        disableTitle:!0,...RBc
      }));
      t.add(Oc(s=>{
        r.set(n.keybinding.read(s))
      }))
    }
  })]))
}
function ukA(n, e){
  return Ite((t, i)=>Mv.div({
    class:["action-widget-action-bar"], style:{
      padding:"0 10px"
    }
  }, [Mv.div({
    ref:r=>{
      i.add(new Gf(r,e)).push(n,{
        icon:!1,label:!0
      })
    }
  })]))
}
function bwg(){
  return Mv.div({
    id:"inline-edit-gutter-indicator-menu-separator", class:"menu-separator", style:{
      color:zo(_dh),padding:"4px 0"
    }
  }, Mv.div({
    style:{
      borderBottom:`1px solid ${zo(N4n)}`
    }
  }))
}
var sua, dkA=