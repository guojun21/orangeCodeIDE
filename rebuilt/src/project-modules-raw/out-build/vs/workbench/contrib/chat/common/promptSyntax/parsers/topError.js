// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/parsers/topError.js
// Offset: 31056176 (bundle byte offset)
// Size: 822 bytes

Ht(), Lv(), Js(), Hgn(), Mgu=class{
  constructor(n){
    this.options=n, this.originalError=n.originalError, this.errorSubject=n.errorSubject, this.errorsCount=n.errorsCount, this.parentUri=n.parentUri
  }
  get localizedMessage(){
    const{
      originalError:n,parentUri:e,errorSubject:t,errorsCount:i
    }
    =this;
    Qb(i>=1, `Error count must be at least 1, got '${i}'.`);
    const r=i>1?_(5652, null, i-1):"";
    if(t==="root")return n instanceof Lgu?_(5653, null, n.uri.path, r):n instanceof dSa?_(5654, null, n.uri.path, r):n instanceof hSa?_(5655, null):n.message+r;
    egt(e, "Parent URI must be defined for error of non-root link.");
    const s=t==="child"?_(5656, null):_(5657, null, e.path), o=n instanceof hSa?_(5658, null):_(5659, null);
    return _(5660, null, s, o, n.uri.path, r)
  }
}
}
}), NU, MV=