// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellDragRenderer.js
// Offset: 33235666 (bundle byte offset)
// Size: 3614 bytes

ri(), ive(), xf(), _r(), ts(), Tg(), LSe(), C8f=class Szb{
  static{
    this._ttPolicy=nve("cellRendererEditorText", {
      createHTML(e){
        return e
      }
    })
  }
  getRichText(e, t){
    const i=e.getModel();
    if(!i)return null;
    const r=this.getDefaultColorMap(), s=e.getOptions().get(52), o="--notebook-editor-font-family", a="--notebook-editor-font-size", l="--notebook-editor-font-weight", u=`color: ${r[1]};background-color: ${r[2]};font-family: var(${o});font-weight: var(${l});font-size: var(${a});line-height: ${s.lineHeight}px;white-space: pre;`, d=Ct("div", {
      style:u
    }), m=s.fontSize, p=s.fontWeight;
    d.style.setProperty(o, s.fontFamily), d.style.setProperty(a, `${m}px`), d.style.setProperty(l, p);
    const g=this.getRichTextLinesAsHtml(i, t, r);
    return d.innerHTML=g, d
  }
  getRichTextLinesAsHtml(e, t, i){
    const r=t.startLineNumber, s=t.startColumn, o=t.endLineNumber, a=t.endColumn, l=e.getOptions().tabSize;
    let u="";
    for(let d=r;
    d<=o;
    d++){
      const m=e.tokenization.getLineTokens(d),p=m.getLineContent(),g=d===r?s-1:0,f=d===o?a-1:p.length;
      p===""?u+="<br>":u+=ybh(p,m.inflate(),i,g,f,l,Sc)
    }
    return Szb._ttPolicy?.createHTML(u)??u
  }
  getDefaultColorMap(){
    const e=pT.getColorMap(), t=["#000000"];
    if(e)for(let i=1, r=e.length;
    i<r;
    i++)t[i]=Xr.Format.CSS.formatHex(e[i]);
    return t
  }
}, S8f=class{
  getDragImage(n, e, t){
    let i=this.getDragImageImpl(n, e, t);
    return i||(i=document.createElement("div"), i.textContent="1 cell"), i
  }
  getDragImageImpl(n, e, t){
    const i=n.container.cloneNode(!0);
    i.classList.forEach(o=>i.classList.remove(o)), i.classList.add("cell-drag-image", "monaco-list-row", "focused", `${t}-cell-row`);
    const r=i.querySelector(".cell-editor-container");
    if(!r)return null;
    const s=new C8f().getRichText(e, new Zt(1, 1, 1, 1e3));
    return s?(um(r, s), i):null
  }
}
}
});
function aki(n){
  const e=sA(n.activeEditorPane);
  if(!e||!e.hasModel())return;
  const t=e.getActiveCell(), i=e.getSelectionViewModels();
  return{
    cell:t, selectedCells:i, notebookEditor:e
  }
}
function ady(n, e){
  const i=n.get(pO).listNotebookEditors().find(r=>r.hasModel()&&r.textModel.uri.toString()===e.toString());
  if(i&&i.hasModel())return i
}
function Kwu(n, e){
  const t=je.revive(e);
  if(t){
    const i=ady(n, t);
    if(i)return{
      notebookEditor:i
    }
  }
}
function cki(n, e){
  let t;
  for(const[, i]of n.notebookEditor.codeEditors)if(Zc(i.getModel()?.uri, e.uri)){
    t=i;
    break
  }
  return t
}
function Ywu(n, e, t){
  if(t){
    const i=n.get(ea);
    if(t.source)i.publicLog2("workbenchActionExecuted", {
      id:e,from:t.source
    });
    else if(je.isUri(t))i.publicLog2("workbenchActionExecuted", {
      id:e,from:"cellEditorContextMenu"
    });
    else if(t&&"from"in t&&t.from==="cellContainer")i.publicLog2("workbenchActionExecuted", {
      id:e,from:"cellContainer"
    });
    else{
      const r=k8f(t)?"cellToolbar":ngi(t)?"editorToolbar":"other";
      i.publicLog2("workbenchActionExecuted",{
        id:e,from:r
      })
    }
  }
}
function k8f(n){
  return!!n&&!!n.notebookEditor&&n.$mid===13
}
function cdy(n){
  if(n===void 0)return!1;
  const e=n.ranges;
  return!(!e||!Array.isArray(e)||e.some(t=>!kfg(t))||n.document&&!je.revive(n.document))
}
function lki(n, e){
  const t=Kwu(n, e)?.notebookEditor;
  if(t)return t;
  const i=sA(n.get(yi).activeEditorPane);
  if(!(!i||!i.hasModel()))return i
}
function krt(n, ...e){
  const t=e[0];
  if(cdy(t)){
    const r=lki(n, t.document);
    if(!r)return;
    const o=t.ranges.map(l=>r.getCellsInRange(l).slice(0)).flat(), a=t.autoReveal;
    return{
      ui:!1,notebookEditor:r,selectedCells:o,autoReveal:a
    }
  }
  if(kfg(t)){
    const r=e[1], s=lki(n, r);
    return s?{
      ui:!1,notebookEditor:s,selectedCells:s.getCellsInRange(t)
    }
    :void 0
  }
  const i=aki(n.get(yi));
  return i?{
    ui:!1, notebookEditor:i.notebookEditor, selectedCells:i.selectedCells??[], cell:i.cell
  }
  :void 0
}
var uwe, o7, h2e, E8f, UU, x8f, T8f, I8f, MT, $U, cx, Zwu, ETa, AN=