// Module: out-build/vs/editor/common/diff/defaultLinesDiffComputer/utils.js
// Offset: 2172913 (bundle byte offset)
// Size: 990 bytes

P3t=class{
  constructor(n, e){
    this.width=n, this.height=e, this.array=[], this.array=new Array(n*e)
  }
  get(n, e){
    return this.array[n+e*this.width]
  }
  set(n, e, t){
    this.array[n+e*this.width]=t
  }
}, PDc=class Uad{
  static{
    this.chrKeys=new Map
  }
  static getKey(e){
    let t=this.chrKeys.get(e);
    return t===void 0&&(t=this.chrKeys.size, this.chrKeys.set(e, t)), t
  }
  constructor(e, t, i){
    this.range=e, this.lines=t, this.source=i, this.histogram=[];
    let r=0;
    for(let s=e.startLineNumber-1;
    s<e.endLineNumberExclusive-1;
    s++){
      const o=t[s];
      for(let l=0;
      l<o.length;
      l++){
        r++;
        const u=o[l],d=Uad.getKey(u);
        this.histogram[d]=(this.histogram[d]||0)+1
      }
      r++;
      const a=Uad.getKey(`
`);
      this.histogram[a]=(this.histogram[a]||0)+1
    }
    this.totalCount=r
  }
  computeSimilarity(e){
    let t=0;
    const i=Math.max(this.histogram.length, e.histogram.length);
    for(let r=0;
    r<i;
    r++)t+=Math.abs((this.histogram[r]??0)-(e.histogram[r]??0));
    return 1-t/(this.totalCount+e.totalCount)
  }
}
}
}), X0h, BdA=