// Module: out-build/vs/editor/contrib/snippet/browser/snippetSession.js
// Offset: 25273234 (bundle byte offset)
// Size: 12404 bytes

Vs(), rt(), oa(), cSA(), nI(), ts(), db(), QE(), bv(), Pd(), ps(), Vde(), UAg(), WQl=class QFe{
  static{
    this._decor={
      active:Zh.register({
        description:"snippet-placeholder-1",stickiness:0,className:"snippet-placeholder"
      }),inactive:Zh.register({
        description:"snippet-placeholder-2",stickiness:1,className:"snippet-placeholder"
      }),activeFinal:Zh.register({
        description:"snippet-placeholder-3",stickiness:1,className:"finish-snippet-placeholder"
      }),inactiveFinal:Zh.register({
        description:"snippet-placeholder-4",stickiness:1,className:"finish-snippet-placeholder"
      })
    }
  }
  constructor(e, t, i){
    this._editor=e, this._snippet=t, this._snippetLineLeadingWhitespace=i, this._offset=-1, this._nestingLevel=1, this._placeholderGroups=yte(t.placeholders, Zoe.compareByIndex), this._placeholderGroupsIdx=-1
  }
  initialize(e){
    this._offset=e.newPosition
  }
  dispose(){
    this._placeholderDecorations&&this._editor.removeDecorations([...this._placeholderDecorations.values()]), this._placeholderGroups.length=0
  }
  _initDecorations(){
    if(this._offset===-1)throw new Error("Snippet not initialized!");
    if(this._placeholderDecorations)return;
    this._placeholderDecorations=new Map;
    const e=this._editor.getModel();
    this._editor.changeDecorations(t=>{
      for(const i of this._snippet.placeholders){
        const r=this._snippet.offset(i),s=this._snippet.fullLen(i),o=Zt.fromPositions(e.getPositionAt(this._offset+r),e.getPositionAt(this._offset+r+s)),a=i.isFinalTabstop?QFe._decor.inactiveFinal:QFe._decor.inactive,l=t.addDecoration(o,a);
        this._placeholderDecorations.set(i,l)
      }
    })
  }
  move(e){
    if(!this._editor.hasModel())return[];
    if(this._initDecorations(), this._placeholderGroupsIdx>=0){
      const r=[];
      for(const s of this._placeholderGroups[this._placeholderGroupsIdx])if(s.transform){
        const o=this._placeholderDecorations.get(s),a=this._editor.getModel().getDecorationRange(o),l=this._editor.getModel().getValueInRange(a),u=s.transform.resolve(l).split(/\r\n|\r|\n/);
        for(let d=1;
        d<u.length;
        d++)u[d]=this._editor.getModel().normalizeIndentation(this._snippetLineLeadingWhitespace+u[d]);
        r.push(zb.replace(a,u.join(this._editor.getModel().getEOL())))
      }
      r.length>0&&this._editor.executeEdits("snippet.placeholderTransform",r)
    }
    let t=!1;
    e===!0&&this._placeholderGroupsIdx<this._placeholderGroups.length-1?(this._placeholderGroupsIdx+=1, t=!0):e===!1&&this._placeholderGroupsIdx>0&&(this._placeholderGroupsIdx-=1, t=!0);
    const i=this._editor.getModel().changeDecorations(r=>{
      const s=new Set,o=[];
      for(const a of this._placeholderGroups[this._placeholderGroupsIdx]){
        const l=this._placeholderDecorations.get(a),u=this._editor.getModel().getDecorationRange(l);
        o.push(new Vl(u.startLineNumber,u.startColumn,u.endLineNumber,u.endColumn)),t=t&&this._hasPlaceholderBeenCollapsed(a),r.changeDecorationOptions(l,a.isFinalTabstop?QFe._decor.activeFinal:QFe._decor.active),s.add(a);
        for(const d of this._snippet.enclosingPlaceholders(a)){
          const m=this._placeholderDecorations.get(d);
          r.changeDecorationOptions(m,d.isFinalTabstop?QFe._decor.activeFinal:QFe._decor.active),s.add(d)
        }
      }
      for(const[a,l]of this._placeholderDecorations)s.has(a)||r.changeDecorationOptions(l,a.isFinalTabstop?QFe._decor.inactiveFinal:QFe._decor.inactive);
      return o
    });
    return t?this.move(e):i??[]
  }
  _hasPlaceholderBeenCollapsed(e){
    let t=e;
    for(;
    t;
    ){
      if(t instanceof Zoe){
        const i=this._placeholderDecorations.get(t);
        if(this._editor.getModel().getDecorationRange(i).isEmpty()&&t.toString().length>0)return!0
      }
      t=t.parent
    }
    return!1
  }
  get isAtFirstPlaceholder(){
    return this._placeholderGroupsIdx<=0||this._placeholderGroups.length===0
  }
  get isAtLastPlaceholder(){
    return this._placeholderGroupsIdx===this._placeholderGroups.length-1
  }
  get hasPlaceholder(){
    return this._snippet.placeholders.length>0
  }
  get isTrivialSnippet(){
    if(this._snippet.placeholders.length===0)return!0;
    if(this._snippet.placeholders.length===1){
      const[e]=this._snippet.placeholders;
      if(e.isFinalTabstop&&this._snippet.rightMostDescendant===e)return!0
    }
    return!1
  }
  computePossibleSelections(){
    const e=new Map;
    for(const t of this._placeholderGroups){
      let i;
      for(const r of t){
        if(r.isFinalTabstop)break;
        i||(i=[],e.set(r.index,i));
        const s=this._placeholderDecorations.get(r),o=this._editor.getModel().getDecorationRange(s);
        if(!o){
          e.delete(r.index);
          break
        }
        i.push(o)
      }
    }
    return e
  }
  get activeChoice(){
    if(!this._placeholderDecorations)return;
    const e=this._placeholderGroups[this._placeholderGroupsIdx][0];
    if(!e?.choice)return;
    const t=this._placeholderDecorations.get(e);
    if(!t)return;
    const i=this._editor.getModel().getDecorationRange(t);
    if(i)return{
      range:i,choice:e.choice
    }
  }
  get hasChoice(){
    let e=!1;
    return this._snippet.walk(t=>(e=t instanceof Q3n, !e)), e
  }
  merge(e){
    const t=this._editor.getModel();
    this._nestingLevel*=10, this._editor.changeDecorations(i=>{
      for(const r of this._placeholderGroups[this._placeholderGroupsIdx]){
        const s=e.shift();
        console.assert(s._offset!==-1),console.assert(!s._placeholderDecorations);
        const o=s._snippet.placeholderInfo.last.index;
        for(const l of s._snippet.placeholderInfo.all)l.isFinalTabstop?l.index=r.index+(o+1)/this._nestingLevel:l.index=r.index+l.index/this._nestingLevel;
        this._snippet.replace(r,s._snippet.children);
        const a=this._placeholderDecorations.get(r);
        i.removeDecoration(a),this._placeholderDecorations.delete(r);
        for(const l of s._snippet.placeholders){
          const u=s._snippet.offset(l),d=s._snippet.fullLen(l),m=Zt.fromPositions(t.getPositionAt(s._offset+u),t.getPositionAt(s._offset+u+d)),p=i.addDecoration(m,QFe._decor.inactive);
          this._placeholderDecorations.set(l,p)
        }
      }
      this._placeholderGroups=yte(this._snippet.placeholders,Zoe.compareByIndex)
    })
  }
  getEnclosingRange(){
    let e;
    const t=this._editor.getModel();
    for(const i of this._placeholderDecorations.values()){
      const r=t.getDecorationRange(i)??void 0;
      e?e=e.plusRange(r):e=r
    }
    return e
  }
}, QQl={
  overwriteBefore:0, overwriteAfter:0, adjustWhitespace:!0, clipboardText:void 0, overtypingCapturer:void 0
}, kgi=K1e=class{
  static adjustWhitespace(e, t, i, r, s){
    const o=e.getLineContent(t.lineNumber), a=rE(o, 0, t.column-1);
    let l;
    return r.walk(u=>{
      if(!(u instanceof gz)||u.parent instanceof Q3n||s&&!s.has(u))return!0;
      const d=u.value.split(/\r\n|\r|\n/);
      if(i){
        const p=r.offset(u);
        if(p===0)d[0]=e.normalizeIndentation(d[0]);
        else{
          l=l??r.toString();
          const g=l.charCodeAt(p-1);
          (g===10||g===13)&&(d[0]=e.normalizeIndentation(a+d[0]))
        }
        for(let g=1;
        g<d.length;
        g++)d[g]=e.normalizeIndentation(a+d[g])
      }
      const m=d.join(e.getEOL());
      return m!==u.value&&(u.parent.replace(u,[new gz(m)]),l=void 0),!0
    }), a
  }
  static adjustSelection(e, t, i, r){
    if(i!==0||r!==0){
      const{
        positionLineNumber:s,positionColumn:o
      }
      =t,a=o-i,l=o+r,u=e.validateRange({
        startLineNumber:s,startColumn:a,endLineNumber:s,endColumn:l
      });
      t=Vl.createWithDirection(u.startLineNumber,u.startColumn,u.endLineNumber,u.endColumn,t.getDirection())
    }
    return t
  }
  static createEditsAndSnippetsFromSelections(e, t, i, r, s, o, a, l, u){
    const d=[], m=[];
    if(!e.hasModel())return{
      edits:d,snippets:m
    };
    const p=e.getModel(), g=e.invokeWithinContext(B=>B.get(Lr)), f=e.invokeWithinContext(B=>new $Ql(B.get(Ol), p)), A=()=>a, w=p.getValueInRange(K1e.adjustSelection(p, e.getSelection(), i, 0)), C=p.getValueInRange(K1e.adjustSelection(p, e.getSelection(), 0, r)), x=p.getLineFirstNonWhitespaceColumn(e.getSelection().positionLineNumber), I=e.getSelections().map((B, R)=>({
      selection:B,idx:R
    })).sort((B, R)=>Zt.compareRangesUsingStarts(B.selection, R.selection));
    for(const{
      selection:B,idx:R
    }
    of I){
      let N=K1e.adjustSelection(p,B,i,0),M=K1e.adjustSelection(p,B,0,r);
      w!==p.getValueInRange(N)&&(N=B),C!==p.getValueInRange(M)&&(M=B);
      const O=B.setStartPosition(N.startLineNumber,N.startColumn).setEndPosition(M.endLineNumber,M.endColumn),$=new Ute().parse(t,!0,s),H=O.getStartPosition(),W=K1e.adjustWhitespace(p,H,o||R>0&&x!==p.getLineFirstNonWhitespaceColumn(B.positionLineNumber),$);
      $.resolveVariables(new OQl([f,new qQl(A,R,I.length,e.getOption(80)==="spread"),new UQl(p,B,R,l),new Sgi(p,B,u),new HQl,new JQl(g),new GQl])),d[R]=zb.replace(O,$.toString()),d[R].identifier={
        major:R,minor:0
      },d[R]._isTracked=!0,m[R]=new WQl(e,$,W)
    }
    return{
      edits:d,snippets:m
    }
  }
  static createEditsAndSnippetsFromEdits(e, t, i, r, s, o, a){
    if(!e.hasModel()||t.length===0)return{
      edits:[],snippets:[]
    };
    const l=[], u=e.getModel(), d=new Ute, m=new Z5o, p=new OQl([e.invokeWithinContext(f=>new $Ql(f.get(Ol), u)), new qQl(()=>s, 0, e.getSelections().length, e.getOption(80)==="spread"), new UQl(u, e.getSelection(), 0, o), new Sgi(u, e.getSelection(), a), new HQl, new JQl(e.invokeWithinContext(f=>f.get(Lr))), new GQl]);
    t=t.sort((f, A)=>Zt.compareRangesUsingStarts(f.range, A.range));
    let g=0;
    for(let f=0;
    f<t.length;
    f++){
      const{
        range:A,template:w,keepWhitespace:C
      }
      =t[f];
      if(f>0){
        const N=t[f-1].range,M=Zt.fromPositions(N.getEndPosition(),A.getStartPosition()),O=new gz(u.getValueInRange(M));
        m.appendChild(O),g+=O.value.length
      }
      const x=d.parseFragment(w,m);
      K1e.adjustWhitespace(u,A.getStartPosition(),C!==void 0?!C:r,m,new Set(x)),m.resolveVariables(p);
      const I=m.toString(),B=I.slice(g);
      g=I.length;
      const R=zb.replace(A,B);
      R.identifier={
        major:f,minor:0
      },R._isTracked=!0,l.push(R)
    }
    return d.ensureFinalTabstop(m, i, !0), {
      edits:l,snippets:[new WQl(e,m,"")]
    }
  }
  constructor(e, t, i=QQl, r){
    this._editor=e, this._template=t, this._options=i, this._languageConfigurationService=r, this._templateMerges=[], this._snippets=[]
  }
  dispose(){
    Bo(this._snippets)
  }
  _logInfo(){
    return`template="${this._template}", merged_templates="${this._templateMerges.join(" -> ")}"`
  }
  insert(){
    if(!this._editor.hasModel())return;
    const{
      edits:e,snippets:t
    }
    =typeof this._template=="string"?K1e.createEditsAndSnippetsFromSelections(this._editor, this._template, this._options.overwriteBefore, this._options.overwriteAfter, !1, this._options.adjustWhitespace, this._options.clipboardText, this._options.overtypingCapturer, this._languageConfigurationService):K1e.createEditsAndSnippetsFromEdits(this._editor, this._template, !1, this._options.adjustWhitespace, this._options.clipboardText, this._options.overtypingCapturer, this._languageConfigurationService);
    this._snippets=t, this._editor.executeEdits("snippet", e, i=>{
      const r=i.filter(s=>!!s.identifier);
      for(let s=0;
      s<t.length;
      s++)t[s].initialize(r[s].textChange);
      return this._snippets[0].hasPlaceholder?this._move(!0):r.map(s=>Vl.fromPositions(s.range.getEndPosition()))
    }), this._editor.revealRange(this._editor.getSelections()[0])
  }
  merge(e, t=QQl){
    if(!this._editor.hasModel())return;
    this._templateMerges.push([this._snippets[0]._nestingLevel, this._snippets[0]._placeholderGroupsIdx, e]);
    const{
      edits:i,snippets:r
    }
    =K1e.createEditsAndSnippetsFromSelections(this._editor, e, t.overwriteBefore, t.overwriteAfter, !0, t.adjustWhitespace, t.clipboardText, t.overtypingCapturer, this._languageConfigurationService);
    this._editor.executeEdits("snippet", i, s=>{
      const o=s.filter(l=>!!l.identifier);
      for(let l=0;
      l<r.length;
      l++)r[l].initialize(o[l].textChange);
      const a=r[0].isTrivialSnippet;
      if(!a){
        for(const l of this._snippets)l.merge(r);
        console.assert(r.length===0)
      }
      return this._snippets[0].hasPlaceholder&&!a?this._move(void 0):o.map(l=>Vl.fromPositions(l.range.getEndPosition()))
    })
  }
  next(){
    const e=this._move(!0);
    this._editor.setSelections(e), this._editor.revealPositionInCenterIfOutsideViewport(e[0].getPosition())
  }
  prev(){
    const e=this._move(!1);
    this._editor.setSelections(e), this._editor.revealPositionInCenterIfOutsideViewport(e[0].getPosition())
  }
  _move(e){
    const t=[];
    for(const i of this._snippets){
      const r=i.move(e);
      t.push(...r)
    }
    return t
  }
  get isAtFirstPlaceholder(){
    return this._snippets[0].isAtFirstPlaceholder
  }
  get isAtLastPlaceholder(){
    return this._snippets[0].isAtLastPlaceholder
  }
  get hasPlaceholder(){
    return this._snippets[0].hasPlaceholder
  }
  get hasChoice(){
    return this._snippets[0].hasChoice
  }
  get activeChoice(){
    return this._snippets[0].activeChoice
  }
  isSelectionWithinPlaceholders(){
    if(!this.hasPlaceholder)return!1;
    const e=this._editor.getSelections();
    if(e.length<this._snippets.length)return!1;
    const t=new Map;
    for(const i of this._snippets){
      const r=i.computePossibleSelections();
      if(t.size===0)for(const[s,o]of r){
        o.sort(Zt.compareRangesUsingStarts);
        for(const a of e)if(o[0].containsRange(a)){
          t.set(s,[]);
          break
        }
      }
      if(t.size===0)return!1;
      t.forEach((s,o)=>{
        s.push(...r.get(o))
      })
    }
    e.sort(Zt.compareRangesUsingStarts);
    for(const[i, r]of t){
      if(r.length!==e.length){
        t.delete(i);
        continue
      }
      r.sort(Zt.compareRangesUsingStarts);
      for(let s=0;
      s<r.length;
      s++)if(!r[s].containsRange(e[s])){
        t.delete(i);
        continue
      }
    }
    return t.size>0
  }
  getEnclosingRange(){
    let e;
    for(const t of this._snippets){
      const i=t.getEnclosingRange();
      e?e=e.plusRange(i):e=i
    }
    return e
  }
}, kgi=K1e=__decorate([__param(3, JS)], kgi)
}
}), gdn, Egi, tx, xgi, pU=