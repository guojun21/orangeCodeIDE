// Module: out-build/vs/editor/contrib/folding/browser/indentRangeProvider.js
// Offset: 25226465 (bundle byte offset)
// Size: 1668 bytes

JEc(), Opi(), Zvg=5e3, Xvg="indent", fgi=class{
  constructor(n, e, t){
    this.editorModel=n, this.languageConfigurationService=e, this.foldingRangesLimit=t, this.id=Xvg
  }
  dispose(){
    
  }
  compute(n){
    const e=this.languageConfigurationService.getLanguageConfiguration(this.editorModel.getLanguageId()).foldingRules, t=e&&!!e.offSide, i=e&&e.markers;
    return Promise.resolve(QCA(this.editorModel, t, i, this.foldingRangesLimit))
  }
}, eAg=class{
  constructor(n){
    this._startIndexes=[], this._endIndexes=[], this._indentOccurrences=[], this._length=0, this._foldingRangesLimit=n
  }
  insertFirst(n, e, t){
    if(n>HAe||e>HAe)return;
    const i=this._length;
    this._startIndexes[i]=n, this._endIndexes[i]=e, this._length++, t<1e3&&(this._indentOccurrences[t]=(this._indentOccurrences[t]||0)+1)
  }
  toIndentRanges(n){
    const e=this._foldingRangesLimit.limit;
    if(this._length<=e){
      this._foldingRangesLimit.update(this._length,!1);
      const t=new Uint32Array(this._length),i=new Uint32Array(this._length);
      for(let r=this._length-1,s=0;
      r>=0;
      r--,s++)t[s]=this._startIndexes[r],i[s]=this._endIndexes[r];
      return new Qae(t,i)
    }
    else{
      this._foldingRangesLimit.update(this._length,e);
      let t=0,i=this._indentOccurrences.length;
      for(let a=0;
      a<this._indentOccurrences.length;
      a++){
        const l=this._indentOccurrences[a];
        if(l){
          if(l+t>e){
            i=a;
            break
          }
          t+=l
        }
      }
      const r=n.getOptions().tabSize,s=new Uint32Array(e),o=new Uint32Array(e);
      for(let a=this._length-1,l=0;
      a>=0;
      a--){
        const u=this._startIndexes[a],d=n.getLineContent(u),m=mOo(d,r);
        (m<i||m===i&&t++<e)&&(s[l]=u,o[l]=this._endIndexes[a],l++)
      }
      return new Qae(s,o)
    }
  }
}, tAg={
  limit:Zvg, update:()=>{
    
  }
}
}
}), nAg, ddn, hdn, TQl, IQl, Bla, kCt, bgi, iAg, DQl=