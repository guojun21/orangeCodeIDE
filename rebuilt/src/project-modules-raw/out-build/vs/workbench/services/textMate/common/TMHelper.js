// Module: out-build/vs/workbench/services/textMate/common/TMHelper.js
// Offset: 32779874 (bundle byte offset)
// Size: 956 bytes

N5f=class Kcd{
  constructor(e, t){
    this.rawSelector=e, this.settings=t;
    const i=this.rawSelector.split(/ /);
    this.scope=i[i.length-1], this.parentScopes=i.slice(0, i.length-1)
  }
  matches(e, t){
    return Kcd._matches(this.scope, this.parentScopes, e, t)
  }
  static _cmp(e, t){
    if(e===null&&t===null)return 0;
    if(e===null)return-1;
    if(t===null)return 1;
    if(e.scope.length!==t.scope.length)return e.scope.length-t.scope.length;
    const i=e.parentScopes.length, r=t.parentScopes.length;
    if(i!==r)return i-r;
    for(let s=0;
    s<i;
    s++){
      const o=e.parentScopes[s].length,a=t.parentScopes[s].length;
      if(o!==a)return o-a
    }
    return 0
  }
  isMoreSpecific(e){
    return Kcd._cmp(this, e)>0
  }
  static _matchesOne(e, t){
    const i=e+".";
    return e===t||t.substring(0, i.length)===i
  }
  static _matches(e, t, i, r){
    if(!this._matchesOne(e, i))return!1;
    let s=t.length-1, o=r.length-1;
    for(;
    s>=0&&o>=0;
    )this._matchesOne(t[s], r[o])&&s--, o--;
    return s===-1
  }
}
}
}), obn, wxa=