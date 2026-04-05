// Module: out-build/vs/base/common/glob.js
// Offset: 25002420 (bundle byte offset)
// Size: 1702 bytes

Vs(), vr(), d2(), cu(), Hl(), _r(), oa(), $pi="**", vWl="/", qpi="[/\\\\]", Hpi="[^/\\\\]", tfg=/\//g, nfg=/^\*\*\/\*\.[\w\.-]+$/, ifg=/^\*\*\/([\w\.-]+)\/?$/, rfg=/^{
  \*\*\/\*?[\w\.-]+\/?(, \*\*\/\*?[\w\.-]+\/?)*
}
$/, sfg=/^{
  \*\*\/\*?[\w\.-]+(\/(\*\*)?)?(, \*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*
}
$/, ofg=/^\*\*((\/[\w\.-]+)+)\/?$/, afg=/^([\w\.-]+(\/[\w\.-]+)*)\/?$/, AWl=new Fb(1e4), yWl=function(){
  return!1
}, G1e=function(){
  return null
}
}
});
function wWl(n){
  if(n.scheme!==_n.vscodeNotebookCell)return;
  const e=n.fragment.indexOf("s");
  if(e<0)return;
  const t=parseInt(n.fragment.substring(0, e).replace(cfg, ""), CWl), i=Zj(n.fragment.substring(e+1)).toString();
  if(!isNaN(t))return{
    handle:t, notebook:n.with({
      scheme:i,fragment:null
    })
  }
}
function X0A(n, e){
  const t=e.toString(CWl), r=`${t.length<Gca.length?Gca[t.length-1]:"z"}${t}s${VN(Ms.fromString(n.scheme),!0,!0)}`;
  return n.with({
    scheme:_n.vscodeNotebookCell, fragment:r
  })
}
function eCA(n){
  if(n.scheme!==_n.vscodeNotebookMetadata)return;
  const e=Zj(n.fragment).toString();
  return n.with({
    scheme:e, fragment:null
  })
}
function tCA(n){
  const e=`${VN(Ms.fromString(n.scheme),!0,!0)}`;
  return n.with({
    scheme:_n.vscodeNotebookMetadata, fragment:e
  })
}
function _Wl(n){
  if(n.scheme!==_n.vscodeNotebookCellOutput)return;
  const e=new URLSearchParams(n.query), t=e.get("openIn");
  if(!t)return;
  const i=e.get("outputId")??void 0, r=wWl(n.with({
    scheme:_n.vscodeNotebookCell, query:null
  })), s=e.get("outputIndex")?parseInt(e.get("outputIndex")||"", 10):void 0;
  return{
    notebook:r?r.notebook:n.with({
      scheme:e.get("notebookScheme")||_n.file,fragment:null,query:null
    }), openIn:t, outputId:i, outputIndex:s, cellHandle:r?.handle, cellFragment:n.fragment
  }
}
var Jpi, Gca, cfg, CWl, lfg, Gpi=