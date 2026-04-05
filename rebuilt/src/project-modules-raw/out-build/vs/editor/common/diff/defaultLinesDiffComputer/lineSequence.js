// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/lineSequence.js
// Offset: 2192850 (bundle byte offset)
// Size: 643 bytes

S3n=class{
  constructor(n, e){
    this.trimmedHash=n, this.lines=e
  }
  getElement(n){
    return this.trimmedHash[n]
  }
  get length(){
    return this.trimmedHash.length
  }
  getBoundaryScore(n){
    const e=n===0?0:pCh(this.lines[n-1]), t=n===this.lines.length?0:pCh(this.lines[n]);
    return 1e3-(e+t)
  }
  getText(n){
    return this.lines.slice(n.start, n.endExclusive).join(`
`)
  }
  isStronglyEqual(n, e){
    return this.lines[n]===this.lines[e]
  }
}
}
});
function WdA(n){
  return new Wde(new rh(n.seq1Range.start+1, n.seq1Range.endExclusive+1), new rh(n.seq2Range.start+1, n.seq2Range.endExclusive+1))
}
var _5o, ODc=