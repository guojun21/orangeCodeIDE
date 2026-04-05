// Module: out-build/vs/editor/contrib/colorPicker/browser/defaultDocumentColorProvider.js
// Offset: 4199890 (bundle byte offset)
// Size: 1622 bytes

xf(), rt(), Cm(), Hk(), H9t=class{
  constructor(e){
    this._editorWorkerService=e
  }
  async provideDocumentColors(e, t){
    return this._editorWorkerService.computeDefaultDocumentColors(e.uri)
  }
  provideColorPresentations(e, t, i){
    const r=t.range, s=t.color, o=s.alpha, a=new Xr(new Sa(Math.round(255*s.red), Math.round(255*s.green), Math.round(255*s.blue), o)), l=o?Xr.Format.CSS.formatRGB(a):Xr.Format.CSS.formatRGBA(a), u=o?Xr.Format.CSS.formatHSL(a):Xr.Format.CSS.formatHSLA(a), d=o?Xr.Format.CSS.formatHex(a):Xr.Format.CSS.formatHexA(a), m=[];
    return m.push({
      label:l,textEdit:{
        range:r,text:l
      }
    }), m.push({
      label:u,textEdit:{
        range:r,text:u
      }
    }), m.push({
      label:d,textEdit:{
        range:r,text:d
      }
    }), m
  }
}, H9t=__decorate([__param(0, c_)], H9t), c$o=class extends at{
  constructor(e, t){
    super(), this._register(e.colorProvider.register("*", new H9t(t)))
  }
}, c$o=__decorate([__param(0, $u), __param(1, c_)], c$o)
}
});
async function fJh(n, e, t, i="auto"){
  return C5c(new AJh, n, e, t, i)
}
function bJh(n, e, t, i){
  return Promise.resolve(t.provideColorPresentations(n, e, i))
}
async function C5c(n, e, t, i, r){
  let s=!1, o;
  const a=[], l=e.ordered(t);
  for(let u=l.length-1;
  u>=0;
  u--){
    const d=l[u];
    if(r!=="always"&&d instanceof H9t)o=d;
    else try{
      await n.compute(d,t,i,a)&&(s=!0)
    }
    catch(m){
      JE(m)
    }
  }
  return s?a:o&&r!=="never"?(await n.compute(o, t, i, a), a):[]
}
function vJh(n, e){
  const{
    colorProvider:t
  }
  =n.get($u), i=n.get(Il).getModel(e);
  if(!i)throw uw();
  const r=n.get(Fn).getValue("editor.defaultColorDecorators", {
    resource:e
  });
  return{
    model:i, colorProviderRegistry:t, defaultColorDecoratorsEnablement:r
  }
}
var AJh, yJh, wJh, l$o=