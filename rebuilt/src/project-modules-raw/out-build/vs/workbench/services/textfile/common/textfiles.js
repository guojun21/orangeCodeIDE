// Module: out-build/vs/workbench/services/textfile/common/textfiles.js
// Offset: 26921848 (bundle byte offset)
// Size: 756 bytes

ns(), Wt(), Ql(), Js(), Gg=xi("textFileService"), (function(n){
  n[n.FILE_IS_BINARY=0]="FILE_IS_BINARY"
})(zFg||(zFg={
  
})), Gga=class extends GI{
  static isTextFileOperationError(n){
    return n instanceof Error&&!gA(n.textFileOperationResult)
  }
  constructor(n, e, t){
    super(n, 10), this.textFileOperationResult=e, this.options=t
  }
}, (function(n){
  n[n.SAVED=0]="SAVED", n[n.DIRTY=1]="DIRTY", n[n.PENDING_SAVE=2]="PENDING_SAVE", n[n.CONFLICT=3]="CONFLICT", n[n.ORPHAN=4]="ORPHAN", n[n.ERROR=5]="ERROR"
})(VFg||(VFg={
  
})), (function(n){
  n[n.EDITOR=1]="EDITOR", n[n.REFERENCE=2]="REFERENCE", n[n.OTHER=3]="OTHER"
})(KFg||(KFg={
  
})), (function(n){
  n[n.Encode=0]="Encode", n[n.Decode=1]="Decode"
})(YFg||(YFg={
  
}))
}
}), Lq, lce=