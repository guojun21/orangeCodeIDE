// Module: out-build/vs/editor/common/cursor/cursorDeleteOperations.js
// Offset: 703543 (bundle byte offset)
// Size: 4475 bytes

oa(), M4t(), Eoe(), koe(), Lkc(), ts(), tl(), Xgt=class lad{
  static deleteRight(e, t, i, r){
    const s=[];
    let o=e!==3;
    for(let a=0, l=r.length;
    a<l;
    a++){
      const u=r[a];
      let d=u;
      if(d.isEmpty()){
        const m=u.getPosition(),p=tN.right(t,i,m);
        d=new Zt(p.lineNumber,p.column,m.lineNumber,m.column)
      }
      if(d.isEmpty()){
        s[a]=null;
        continue
      }
      d.startLineNumber!==d.endLineNumber&&(o=!0),s[a]=new D6(d,"")
    }
    return[o, s]
  }
  static isAutoClosingPairDelete(e, t, i, r, s, o, a){
    if(t==="never"&&i==="never"||e==="never")return!1;
    for(let l=0, u=o.length;
    l<u;
    l++){
      const d=o[l],m=d.getPosition();
      if(!d.isEmpty())return!1;
      const p=s.getLineContent(m.lineNumber);
      if(m.column<2||m.column>=p.length+1)return!1;
      const g=p.charAt(m.column-2),f=r.get(g);
      if(!f)return!1;
      if(Kze(g)){
        if(i==="never")return!1
      }
      else if(t==="never")return!1;
      const A=p.charAt(m.column-1);
      let w=!1;
      for(const C of f)C.open===g&&C.close===A&&(w=!0);
      if(!w)return!1;
      if(e==="auto"){
        let C=!1;
        for(let x=0,I=a.length;
        x<I;
        x++){
          const B=a[x];
          if(m.lineNumber===B.startLineNumber&&m.column===B.startColumn){
            C=!0;
            break
          }
        }
        if(!C)return!1
      }
    }
    return!0
  }
  static _runAutoClosingPairDelete(e, t, i){
    const r=[];
    for(let s=0, o=i.length;
    s<o;
    s++){
      const a=i[s].getPosition(),l=new Zt(a.lineNumber,a.column-1,a.lineNumber,a.column+1);
      r[s]=new D6(l,"")
    }
    return[!0, r]
  }
  static deleteLeft(e, t, i, r, s){
    if(this.isAutoClosingPairDelete(t.autoClosingDelete, t.autoClosingBrackets, t.autoClosingQuotes, t.autoClosingPairs.autoClosingPairsOpenByEnd, i, r, s))return this._runAutoClosingPairDelete(t, i, r);
    const o=[];
    let a=e!==2;
    for(let l=0, u=r.length;
    l<u;
    l++){
      const d=lad.getDeleteRange(r[l],i,t);
      if(d.isEmpty()){
        o[l]=null;
        continue
      }
      d.startLineNumber!==d.endLineNumber&&(a=!0),o[l]=new D6(d,"")
    }
    return[a, o]
  }
  static getDeleteRange(e, t, i){
    if(!e.isEmpty())return e;
    const r=e.getPosition();
    if(i.useTabStops&&r.column>1){
      const s=t.getLineContent(r.lineNumber),o=TH(s),a=o===-1?s.length+1:o+1;
      if(r.column<=a){
        const l=i.visibleColumnFromColumn(t,r),u=ZP.prevIndentTabStop(l,i.indentSize),d=i.columnFromVisibleColumn(t,r.lineNumber,u);
        return new Zt(r.lineNumber,d,r.lineNumber,r.column)
      }
    }
    return Zt.fromPositions(lad.getPositionAfterDeleteLeft(r, t), r)
  }
  static getPositionAfterDeleteLeft(e, t){
    if(e.column>1){
      const i=HtA(e.column-1,t.getLineContent(e.lineNumber));
      return e.with(void 0,i+1)
    }
    else if(e.lineNumber>1){
      const i=e.lineNumber-1;
      return new ar(i,t.getLineMaxColumn(i))
    }
    else return e
  }
  static cut(e, t, i){
    const r=[];
    let s=null;
    i.sort((o, a)=>ar.compare(o.getStartPosition(), a.getEndPosition()));
    for(let o=0, a=i.length;
    o<a;
    o++){
      const l=i[o];
      if(l.isEmpty())if(e.emptySelectionClipboard){
        const u=l.getPosition();
        let d,m,p,g;
        u.lineNumber<t.getLineCount()?(d=u.lineNumber,m=1,p=u.lineNumber+1,g=1):u.lineNumber>1&&s?.endLineNumber!==u.lineNumber?(d=u.lineNumber-1,m=t.getLineMaxColumn(u.lineNumber-1),p=u.lineNumber,g=t.getLineMaxColumn(u.lineNumber)):(d=u.lineNumber,m=1,p=u.lineNumber,g=t.getLineMaxColumn(u.lineNumber));
        const f=new Zt(d,m,p,g);
        s=f,f.isEmpty()?r[o]=null:r[o]=new D6(f,"")
      }
      else r[o]=null;
      else r[o]=new D6(l,"")
    }
    return new mW(0, r, {
      shouldPushStackElementBefore:!0,shouldPushStackElementAfter:!0
    })
  }
}
}
});
function m2(n, e, t, i){
  typeof n!="number"&&(n=n.getTime());
  const r=Math.round((new Date().getTime()-n)/1e3);
  if(r<-30)return _(45, null, m2(new Date().getTime()+r*1e3, !1));
  if(!i&&r<30)return _(46, null);
  let s;
  return r<eft?(s=r, _(e?s===1?t?47:48:t?49:50:s===1?t?51:52:t?53:54, null, s)):r<tft?(s=Math.floor(r/eft), _(e?s===1?t?55:56:t?57:58:s===1?t?59:60:t?61:62, null, s)):r<Zze?(s=Math.floor(r/tft), _(e?s===1?t?63:64:t?65:66:s===1?t?67:68:t?69:70, null, s)):r<Nkc?(s=Math.floor(r/Zze), _(e?s===1?71:72:s===1?73:74, null, s)):r<Mkc?(s=Math.floor(r/Nkc), _(e?s===1?t?75:76:t?77:78:s===1?t?79:80:t?81:82, null, s)):r<Fkc?(s=Math.floor(r/Mkc), _(e?s===1?t?83:84:t?85:86:s===1?t?87:88:t?89:90, null, s)):(s=Math.floor(r/Fkc), _(e?s===1?t?91:92:t?93:94:s===1?t?95:96:t?97:98, null, s))
}
function nrA(n, e){
  const t=Math.abs(n/1e3);
  return t<1?_(e?101:102, null, n):t<eft?_(e?103:104, null, Math.round(n)/1e3):t<tft?_(e?105:106, null, Math.round(n/(1e3*eft))):t<Zze?_(e?107:108, null, Math.round(n/(1e3*tft))):_(109, null, Math.round(n/(1e3*Zze)))
}
function _ch(n){
  return n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2, "0")+"-"+String(n.getDate()).padStart(2, "0")+"T"+String(n.getHours()).padStart(2, "0")+":"+String(n.getMinutes()).padStart(2, "0")+":"+String(n.getSeconds()).padStart(2, "0")+"."+(n.getMilliseconds()/1e3).toFixed(3).slice(2, 5)+"Z"
}
var eft, tft, Zze, Nkc, Mkc, Fkc, F4t, A9=