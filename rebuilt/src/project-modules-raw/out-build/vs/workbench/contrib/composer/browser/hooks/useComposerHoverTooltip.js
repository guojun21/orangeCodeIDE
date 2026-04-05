// Module: out-build/vs/workbench/contrib/composer/browser/hooks/useComposerHoverTooltip.js
// Offset: 31368400 (bundle byte offset)
// Size: 432 bytes

Ek(), u5=(n={
  
})=>{
  const{
    showHover:e, hideHover:t
  }
  =ik(n.delay);
  return{
    showHover:(r, s, o=n.position??3, a)=>{
      e({
        content:s,target:r.currentTarget,appearance:{
          showPointer:!n.noPointer,compact:!0
        },position:{
          hoverPosition:o
        },container:n.useContainer?r.currentTarget:void 0,additionalClasses:n.additionalClasses,...a
      })
    }, hideHover:t
  }
}
}
}), Foy=