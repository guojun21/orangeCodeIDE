// Module: out-build/vs/base/browser/ui/tree/tree.js
// Offset: 24824735 (bundle byte offset)
// Size: 757 bytes

(function(n){
  n[n.Hidden=0]="Hidden", n[n.Visible=1]="Visible", n[n.Recurse=2]="Recurse"
})(Mpg||(Mpg={
  
})), (function(n){
  n[n.Expanded=0]="Expanded", n[n.Collapsed=1]="Collapsed", n[n.PreserveOrExpanded=2]="PreserveOrExpanded", n[n.PreserveOrCollapsed=3]="PreserveOrCollapsed"
})(Cq||(Cq={
  
})), (function(n){
  n[n.Unknown=0]="Unknown", n[n.Twistie=1]="Twistie", n[n.Element=2]="Element", n[n.Filter=3]="Filter"
})(JUe||(JUe={
  
})), (function(n){
  n[n.Down=0]="Down", n[n.Up=1]="Up"
})(Fpg||(Fpg={
  
})), Sq=class extends Error{
  constructor(n, e){
    super(`TreeError [${n}] ${e}`)
  }
}, yca=class{
  constructor(n){
    this.fn=n, this._map=new WeakMap
  }
  map(n){
    let e=this._map.get(n);
    return e||(e=this.fn(n), this._map.set(n, e)), e
  }
}
}
}), GUe, _0A=