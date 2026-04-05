// Module: out-build/vs/platform/observable/common/wrapInHotClass.js
// Offset: 25256971 (bundle byte offset)
// Size: 2753 bytes

SIc(), Uc(), Wt(), Rla=class{
  constructor(n){
    this.instantiationService=n
  }
  init(...n){
    
  }
}, NQl=class extends Rla{
  constructor(e){
    super(e), this.init()
  }
}, NQl=__decorate([__param(0, ln)], NQl), Pla=class extends Rla{
  constructor(e, t){
    super(t), this.init(e)
  }
}, Pla=__decorate([__param(1, ln)], Pla)
}
});
function eSA(){
  return Wet
}
function tSA(n){
  const e=Wet;
  return Wet=n, e
}
async function Lla(n, e, t, i=wgi.default, r={
  triggerKind:0
}, s=Cs.None){
  const o=new J_;
  t=t.clone();
  const a=e.getWordAtPosition(t), l=a?new Zt(t.lineNumber, a.startColumn, t.lineNumber, a.endColumn):Zt.fromPositions(t), u={
    replace:l, insert:l.setEndPosition(t.lineNumber, t.column)
  }, d=[], m=new Ut, p=[];
  let g=!1;
  const f=(w, C, x)=>{
    let I=!1;
    if(!C)return I;
    for(const B of C.suggestions)if(!i.kindFilter.has(B.kind)){
      if(!i.showDeprecated&&B?.tags?.includes(1))continue;
      B.range||(B.range=u),B.sortText||(B.sortText=typeof B.label=="string"?B.label:B.label.label),!g&&B.insertTextRules&&B.insertTextRules&4&&(g=Ute.guessNeedsClipboard(B.insertText)),d.push(new PAg(t,B,C,w)),I=!0
    }
    return Ste(C)&&m.add(C), p.push({
      providerName:w._debugDisplayName??"unknown_provider",elapsedProvider:C.duration??-1,elapsedOverall:x.elapsed()
    }), I
  }, A=(async()=>{
    if(!Wet||i.kindFilter.has(27))return;
    const w=i.providerItemsToReuse.get(Wet);
    if(w){
      w.forEach(I=>d.push(I));
      return
    }
    if(i.providerFilter.size>0&&!i.providerFilter.has(Wet))return;
    const C=new J_, x=await Wet.provideCompletionItems(e, t, r, s);
    f(Wet, x, C)
  })();
  for(const w of n.orderedGroups(e)){
    let C=!1;
    if(await Promise.all(w.map(async x=>{
      if(i.providerItemsToReuse.has(x)){
        const I=i.providerItemsToReuse.get(x);
        I.forEach(B=>d.push(B)),C=C||I.length>0;
        return
      }
      if(!(i.providerFilter.size>0&&!i.providerFilter.has(x)))try{
        const I=new J_,B=await x.provideCompletionItems(e,t,r,s);
        C=f(x,B,I)||C
      }
      catch(I){
        JE(I)
      }
    })), C||s.isCancellationRequested)break
  }
  return await A, s.isCancellationRequested?(m.dispose(), Promise.reject(new vf)):new NAg(d.sort(rSA(i.snippetSortOrder)), g, {
    entries:p, elapsed:o.elapsed()
  }, m)
}
function FQl(n, e){
  if(n.sortTextLow&&e.sortTextLow){
    if(n.sortTextLow<e.sortTextLow)return-1;
    if(n.sortTextLow>e.sortTextLow)return 1
  }
  return n.textLabel<e.textLabel?-1:n.textLabel>e.textLabel?1:n.completion.kind-e.completion.kind
}
function nSA(n, e){
  if(n.completion.kind!==e.completion.kind){
    if(n.completion.kind===27)return-1;
    if(e.completion.kind===27)return 1
  }
  return FQl(n, e)
}
function iSA(n, e){
  if(n.completion.kind!==e.completion.kind){
    if(n.completion.kind===27)return 1;
    if(e.completion.kind===27)return-1
  }
  return FQl(n, e)
}
function rSA(n){
  return _gi.get(n)
}
function RAg(n, e){
  n.getContribution("editor.contrib.suggestController")?.triggerSuggest(new Set().add(e), void 0, !0)
}
var Xf, ZUe, PAg, LAg, wgi, Wet, NAg, _gi, xCt, pme=