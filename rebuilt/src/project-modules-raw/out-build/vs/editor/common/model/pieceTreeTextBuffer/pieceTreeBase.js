// Module: out-build/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeBase.js
// Offset: 1150667 (bundle byte offset)
// Size: 24357 bytes

tl(), ts(), xw(), eaA(), i9e(), aRe=65535, dgh=class{
  constructor(n, e, t, i, r){
    this.lineStarts=n, this.cr=e, this.lf=t, this.crlf=i, this.isBasicASCII=r
  }
}, $Y=class{
  constructor(n, e, t, i, r){
    this.bufferIndex=n, this.start=e, this.end=t, this.lineFeedCnt=i, this.length=r
  }
}, LVe=class{
  constructor(n, e){
    this.buffer=n, this.lineStarts=e
  }
}, hgh=class{
  constructor(n, e){
    this._pieces=[], this._tree=n, this._BOM=e, this._index=0, n.root!==jb&&n.iterate(n.root, t=>(t!==jb&&this._pieces.push(t.piece), !0))
  }
  read(){
    return this._pieces.length===0?this._index===0?(this._index++, this._BOM):null:this._index>this._pieces.length-1?null:this._index===0?this._BOM+this._tree.getPieceContent(this._pieces[this._index++]):this._tree.getPieceContent(this._pieces[this._index++])
  }
}, mgh=class{
  constructor(n){
    this._limit=n, this._cache=[]
  }
  get(n){
    for(let e=this._cache.length-1;
    e>=0;
    e--){
      const t=this._cache[e];
      if(t.nodeStartOffset<=n&&t.nodeStartOffset+t.node.piece.length>=n)return t
    }
    return null
  }
  get2(n){
    for(let e=this._cache.length-1;
    e>=0;
    e--){
      const t=this._cache[e];
      if(t.nodeStartLineNumber&&t.nodeStartLineNumber<n&&t.nodeStartLineNumber+t.node.piece.lineFeedCnt>=n)return t
    }
    return null
  }
  set(n){
    this._cache.length>=this._limit&&this._cache.shift(), this._cache.push(n)
  }
  validate(n){
    let e=!1;
    const t=this._cache;
    for(let i=0;
    i<t.length;
    i++){
      const r=t[i];
      if(r.node.parent===null||r.nodeStartOffset>=n){
        t[i]=null,e=!0;
        continue
      }
    }
    if(e){
      const i=[];
      for(const r of t)r!==null&&i.push(r);
      this._cache=i
    }
  }
}, pgh=class{
  constructor(n, e, t){
    this.create(n, e, t)
  }
  create(n, e, t){
    this._buffers=[new LVe("", [0])], this._lastChangeBufferPos={
      line:0,column:0
    }, this.root=jb, this._lineCnt=1, this._length=0, this._EOL=e, this._EOLLength=e.length, this._EOLNormalized=t;
    let i=null;
    for(let r=0, s=n.length;
    r<s;
    r++)if(n[r].buffer.length>0){
      n[r].lineStarts||(n[r].lineStarts=r9e(n[r].buffer));
      const o=new $Y(r+1,{
        line:0,column:0
      },{
        line:n[r].lineStarts.length-1,column:n[r].buffer.length-n[r].lineStarts[n[r].lineStarts.length-1]
      },n[r].lineStarts.length-1,n[r].buffer.length);
      this._buffers.push(n[r]),i=this.rbInsertRight(i,o)
    }
    this._searchCache=new mgh(1), this._lastVisitedLine={
      lineNumber:0,value:""
    }, this.computeBufferMetadata()
  }
  normalizeEOL(n){
    const e=aRe, t=e-Math.floor(e/3), i=t*2;
    let r="", s=0;
    const o=[];
    if(this.iterate(this.root, a=>{
      const l=this.getNodeContent(a),u=l.length;
      if(s<=t||s+u<i)return r+=l,s+=u,!0;
      const d=r.replace(/\r\n|\r|\n/g,n);
      return o.push(new LVe(d,r9e(d))),r=l,s=u,!0
    }), s>0){
      const a=r.replace(/\r\n|\r|\n/g,n);
      o.push(new LVe(a,r9e(a)))
    }
    this.create(o, n, !0)
  }
  getEOL(){
    return this._EOL
  }
  setEOL(n){
    this._EOL=n, this._EOLLength=this._EOL.length, this.normalizeEOL(n)
  }
  createSnapshot(n){
    return new hgh(this, n)
  }
  equal(n){
    if(this.getLength()!==n.getLength()||this.getLineCount()!==n.getLineCount())return!1;
    let e=0;
    return this.iterate(this.root, i=>{
      if(i===jb)return!0;
      const r=this.getNodeContent(i),s=r.length,o=n.nodeAt(e),a=n.nodeAt(e+s),l=n.getValueInRange2(o,a);
      return e+=s,r===l
    })
  }
  getOffsetAt(n, e){
    let t=0, i=this.root;
    for(;
    i!==jb;
    )if(i.left!==jb&&i.lf_left+1>=n)i=i.left;
    else if(i.lf_left+i.piece.lineFeedCnt+1>=n){
      t+=i.size_left;
      const r=this.getAccumulatedValue(i,n-i.lf_left-2);
      return t+=r+e-1
    }
    else n-=i.lf_left+i.piece.lineFeedCnt, t+=i.size_left+i.piece.length, i=i.right;
    return t
  }
  getPositionAt(n){
    n=Math.floor(n), n=Math.max(0, n);
    let e=this.root, t=0;
    const i=n;
    for(;
    e!==jb;
    )if(e.size_left!==0&&e.size_left>=n)e=e.left;
    else if(e.size_left+e.piece.length>=n){
      const r=this.getIndexOf(e,n-e.size_left);
      if(t+=e.lf_left+r.index,r.index===0){
        const s=this.getOffsetAt(t+1,1),o=i-s;
        return new ar(t+1,o+1)
      }
      return new ar(t+1,r.remainder+1)
    }
    else if(n-=e.size_left+e.piece.length, t+=e.lf_left+e.piece.lineFeedCnt, e.right===jb){
      const r=this.getOffsetAt(t+1,1),s=i-n-r;
      return new ar(t+1,s+1)
    }
    else e=e.right;
    return new ar(1, 1)
  }
  getValueInRange(n, e){
    if(n.startLineNumber===n.endLineNumber&&n.startColumn===n.endColumn)return"";
    const t=this.nodeAt2(n.startLineNumber, n.startColumn), i=this.nodeAt2(n.endLineNumber, n.endColumn), r=this.getValueInRange2(t, i);
    return e?e!==this._EOL||!this._EOLNormalized?r.replace(/\r\n|\r|\n/g, e):e===this.getEOL()&&this._EOLNormalized?r:r.replace(/\r\n|\r|\n/g, e):r
  }
  getValueInRange2(n, e){
    if(n.node===e.node){
      const o=n.node,a=this._buffers[o.piece.bufferIndex].buffer,l=this.offsetInBuffer(o.piece.bufferIndex,o.piece.start);
      return a.substring(l+n.remainder,l+e.remainder)
    }
    let t=n.node;
    const i=this._buffers[t.piece.bufferIndex].buffer, r=this.offsetInBuffer(t.piece.bufferIndex, t.piece.start);
    let s=i.substring(r+n.remainder, r+t.piece.length);
    for(t=t.next();
    t!==jb;
    ){
      const o=this._buffers[t.piece.bufferIndex].buffer,a=this.offsetInBuffer(t.piece.bufferIndex,t.piece.start);
      if(t===e.node){
        s+=o.substring(a,a+e.remainder);
        break
      }
      else s+=o.substr(a,t.piece.length);
      t=t.next()
    }
    return s
  }
  getLinesContent(){
    const n=[];
    let e=0, t="", i=!1;
    return this.iterate(this.root, r=>{
      if(r===jb)return!0;
      const s=r.piece;
      let o=s.length;
      if(o===0)return!0;
      const a=this._buffers[s.bufferIndex].buffer,l=this._buffers[s.bufferIndex].lineStarts,u=s.start.line,d=s.end.line;
      let m=l[u]+s.start.column;
      if(i&&(a.charCodeAt(m)===10&&(m++,o--),n[e++]=t,t="",i=!1,o===0))return!0;
      if(u===d)return!this._EOLNormalized&&a.charCodeAt(m+o-1)===13?(i=!0,t+=a.substr(m,o-1)):t+=a.substr(m,o),!0;
      t+=this._EOLNormalized?a.substring(m,Math.max(m,l[u+1]-this._EOLLength)):a.substring(m,l[u+1]).replace(/(\r\n|\r|\n)$/,""),n[e++]=t;
      for(let p=u+1;
      p<d;
      p++)t=this._EOLNormalized?a.substring(l[p],l[p+1]-this._EOLLength):a.substring(l[p],l[p+1]).replace(/(\r\n|\r|\n)$/,""),n[e++]=t;
      return!this._EOLNormalized&&a.charCodeAt(l[d]+s.end.column-1)===13?(i=!0,s.end.column===0?e--:t=a.substr(l[d],s.end.column-1)):t=a.substr(l[d],s.end.column),!0
    }), i&&(n[e++]=t, t=""), n[e++]=t, n
  }
  getLength(){
    return this._length
  }
  getLineCount(){
    return this._lineCnt
  }
  getLineContent(n){
    return this._lastVisitedLine.lineNumber===n?this._lastVisitedLine.value:(this._lastVisitedLine.lineNumber=n, n===this._lineCnt?this._lastVisitedLine.value=this.getLineRawContent(n):this._EOLNormalized?this._lastVisitedLine.value=this.getLineRawContent(n, this._EOLLength):this._lastVisitedLine.value=this.getLineRawContent(n).replace(/(\r\n|\r|\n)$/, ""), this._lastVisitedLine.value)
  }
  _getCharCode(n){
    if(n.remainder===n.node.piece.length){
      const e=n.node.next();
      if(!e)return 0;
      const t=this._buffers[e.piece.bufferIndex],i=this.offsetInBuffer(e.piece.bufferIndex,e.piece.start);
      return t.buffer.charCodeAt(i)
    }
    else{
      const e=this._buffers[n.node.piece.bufferIndex],i=this.offsetInBuffer(n.node.piece.bufferIndex,n.node.piece.start)+n.remainder;
      return e.buffer.charCodeAt(i)
    }
  }
  getLineCharCode(n, e){
    const t=this.nodeAt2(n, e+1);
    return this._getCharCode(t)
  }
  getLineLength(n){
    if(n===this.getLineCount()){
      const e=this.getOffsetAt(n,1);
      return this.getLength()-e
    }
    return this.getOffsetAt(n+1, 1)-this.getOffsetAt(n, 1)-this._EOLLength
  }
  getCharCode(n){
    const e=this.nodeAt(n);
    return this._getCharCode(e)
  }
  getNearestChunk(n){
    const e=this.nodeAt(n);
    if(e.remainder===e.node.piece.length){
      const t=e.node.next();
      if(!t||t===jb)return"";
      const i=this._buffers[t.piece.bufferIndex],r=this.offsetInBuffer(t.piece.bufferIndex,t.piece.start);
      return i.buffer.substring(r,r+t.piece.length)
    }
    else{
      const t=this._buffers[e.node.piece.bufferIndex],i=this.offsetInBuffer(e.node.piece.bufferIndex,e.node.piece.start),r=i+e.remainder,s=i+e.node.piece.length;
      return t.buffer.substring(r,s)
    }
  }
  findMatchesInNode(n, e, t, i, r, s, o, a, l, u, d){
    const m=this._buffers[n.piece.bufferIndex], p=this.offsetInBuffer(n.piece.bufferIndex, n.piece.start), g=this.offsetInBuffer(n.piece.bufferIndex, r), f=this.offsetInBuffer(n.piece.bufferIndex, s);
    let A;
    const w={
      line:0,column:0
    };
    let C, x;
    e._wordSeparators?(C=m.buffer.substring(g, f), x=I=>I+g, e.reset(0)):(C=m.buffer, x=I=>I, e.reset(g));
    do if(A=e.next(C), A){
      if(x(A.index)>=f)return u;
      this.positionInBuffer(n,x(A.index)-p,w);
      const I=this.getLineFeedCnt(n.piece.bufferIndex,r,w),B=w.line===r.line?w.column-r.column+i:w.column+1,R=B+A[0].length;
      if(d[u++]=Sft(new Zt(t+I,B,t+I,R),A,a),x(A.index)+A[0].length>=f||u>=l)return u
    }
    while(A);
    return u
  }
  findMatchesLineByLine(n, e, t, i){
    const r=[];
    let s=0;
    const o=new kft(e.wordSeparators, e.regex);
    let a=this.nodeAt2(n.startLineNumber, n.startColumn);
    if(a===null)return[];
    const l=this.nodeAt2(n.endLineNumber, n.endColumn);
    if(l===null)return[];
    let u=this.positionInBuffer(a.node, a.remainder);
    const d=this.positionInBuffer(l.node, l.remainder);
    if(a.node===l.node)return this.findMatchesInNode(a.node, o, n.startLineNumber, n.startColumn, u, d, e, t, i, s, r), r;
    let m=n.startLineNumber, p=a.node;
    for(;
    p!==l.node;
    ){
      const f=this.getLineFeedCnt(p.piece.bufferIndex,u,p.piece.end);
      if(f>=1){
        const w=this._buffers[p.piece.bufferIndex].lineStarts,C=this.offsetInBuffer(p.piece.bufferIndex,p.piece.start),x=w[u.line+f],I=m===n.startLineNumber?n.startColumn:1;
        if(s=this.findMatchesInNode(p,o,m,I,u,this.positionInBuffer(p,x-C),e,t,i,s,r),s>=i)return r;
        m+=f
      }
      const A=m===n.startLineNumber?n.startColumn-1:0;
      if(m===n.endLineNumber){
        const w=this.getLineContent(m).substring(A,n.endColumn-1);
        return s=this._findMatchesInLine(e,o,w,n.endLineNumber,A,s,r,t,i),r
      }
      if(s=this._findMatchesInLine(e,o,this.getLineContent(m).substr(A),m,A,s,r,t,i),s>=i)return r;
      m++,a=this.nodeAt2(m,1),p=a.node,u=this.positionInBuffer(a.node,a.remainder)
    }
    if(m===n.endLineNumber){
      const f=m===n.startLineNumber?n.startColumn-1:0,A=this.getLineContent(m).substring(f,n.endColumn-1);
      return s=this._findMatchesInLine(e,o,A,n.endLineNumber,f,s,r,t,i),r
    }
    const g=m===n.startLineNumber?n.startColumn:1;
    return s=this.findMatchesInNode(l.node, o, m, g, u, d, e, t, i, s, r), r
  }
  _findMatchesInLine(n, e, t, i, r, s, o, a, l){
    const u=n.wordSeparators;
    if(!a&&n.simpleSearch){
      const m=n.simpleSearch,p=m.length,g=t.length;
      let f=-p;
      for(;
      (f=t.indexOf(m,f+p))!==-1;
      )if((!u||ZEc(u,t,g,f,p))&&(o[s++]=new SOt(new Zt(i,f+1+r,i,f+1+p+r),null),s>=l))return s;
      return s
    }
    let d;
    e.reset(0);
    do if(d=e.next(t), d&&(o[s++]=Sft(new Zt(i, d.index+1+r, i, d.index+1+d[0].length+r), d, a), s>=l))return s;
    while(d);
    return s
  }
  insert(n, e, t=!1){
    if(this._EOLNormalized=this._EOLNormalized&&t, this._lastVisitedLine.lineNumber=0, this._lastVisitedLine.value="", this.root!==jb){
      const{
        node:i,remainder:r,nodeStartOffset:s
      }
      =this.nodeAt(n),o=i.piece,a=o.bufferIndex,l=this.positionInBuffer(i,r);
      if(i.piece.bufferIndex===0&&o.end.line===this._lastChangeBufferPos.line&&o.end.column===this._lastChangeBufferPos.column&&s+o.length===n&&e.length<aRe){
        this.appendToNode(i,e),this.computeBufferMetadata();
        return
      }
      if(s===n)this.insertContentToNodeLeft(e,i),this._searchCache.validate(n);
      else if(s+i.piece.length>n){
        const u=[];
        let d=new $Y(o.bufferIndex,l,o.end,this.getLineFeedCnt(o.bufferIndex,l,o.end),this.offsetInBuffer(a,o.end)-this.offsetInBuffer(a,l));
        if(this.shouldCheckCRLF()&&this.endWithCR(e)&&this.nodeCharCodeAt(i,r)===10){
          const f={
            line:d.start.line+1,column:0
          };
          d=new $Y(d.bufferIndex,f,d.end,this.getLineFeedCnt(d.bufferIndex,f,d.end),d.length-1),e+=`
`
        }
        if(this.shouldCheckCRLF()&&this.startWithLF(e))if(this.nodeCharCodeAt(i,r-1)===13){
          const f=this.positionInBuffer(i,r-1);
          this.deleteNodeTail(i,f),e="\r"+e,i.piece.length===0&&u.push(i)
        }
        else this.deleteNodeTail(i,l);
        else this.deleteNodeTail(i,l);
        const m=this.createNewPieces(e);
        d.length>0&&this.rbInsertRight(i,d);
        let p=i;
        for(let g=0;
        g<m.length;
        g++)p=this.rbInsertRight(p,m[g]);
        this.deleteNodes(u)
      }
      else this.insertContentToNodeRight(e,i)
    }
    else{
      const i=this.createNewPieces(e);
      let r=this.rbInsertLeft(null,i[0]);
      for(let s=1;
      s<i.length;
      s++)r=this.rbInsertRight(r,i[s])
    }
    this.computeBufferMetadata()
  }
  delete(n, e){
    if(this._lastVisitedLine.lineNumber=0, this._lastVisitedLine.value="", e<=0||this.root===jb)return;
    const t=this.nodeAt(n), i=this.nodeAt(n+e), r=t.node, s=i.node;
    if(r===s){
      const m=this.positionInBuffer(r,t.remainder),p=this.positionInBuffer(r,i.remainder);
      if(t.nodeStartOffset===n){
        if(e===r.piece.length){
          const g=r.next();
          gOo(this,r),this.validateCRLFWithPrevNode(g),this.computeBufferMetadata();
          return
        }
        this.deleteNodeHead(r,p),this._searchCache.validate(n),this.validateCRLFWithPrevNode(r),this.computeBufferMetadata();
        return
      }
      if(t.nodeStartOffset+r.piece.length===n+e){
        this.deleteNodeTail(r,m),this.validateCRLFWithNextNode(r),this.computeBufferMetadata();
        return
      }
      this.shrinkNode(r,m,p),this.computeBufferMetadata();
      return
    }
    const o=[], a=this.positionInBuffer(r, t.remainder);
    this.deleteNodeTail(r, a), this._searchCache.validate(n), r.piece.length===0&&o.push(r);
    const l=this.positionInBuffer(s, i.remainder);
    this.deleteNodeHead(s, l), s.piece.length===0&&o.push(s);
    const u=r.next();
    for(let m=u;
    m!==jb&&m!==s;
    m=m.next())o.push(m);
    const d=r.piece.length===0?r.prev():r;
    this.deleteNodes(o), this.validateCRLFWithNextNode(d), this.computeBufferMetadata()
  }
  insertContentToNodeLeft(n, e){
    const t=[];
    if(this.shouldCheckCRLF()&&this.endWithCR(n)&&this.startWithLF(e)){
      const s=e.piece,o={
        line:s.start.line+1,column:0
      },a=new $Y(s.bufferIndex,o,s.end,this.getLineFeedCnt(s.bufferIndex,o,s.end),s.length-1);
      e.piece=a,n+=`
`,n9e(this,e,-1,-1),e.piece.length===0&&t.push(e)
    }
    const i=this.createNewPieces(n);
    let r=this.rbInsertLeft(e, i[i.length-1]);
    for(let s=i.length-2;
    s>=0;
    s--)r=this.rbInsertLeft(r, i[s]);
    this.validateCRLFWithPrevNode(r), this.deleteNodes(t)
  }
  insertContentToNodeRight(n, e){
    this.adjustCarriageReturnFromNext(n, e)&&(n+=`
`);
    const t=this.createNewPieces(n), i=this.rbInsertRight(e, t[0]);
    let r=i;
    for(let s=1;
    s<t.length;
    s++)r=this.rbInsertRight(r, t[s]);
    this.validateCRLFWithPrevNode(i)
  }
  positionInBuffer(n, e, t){
    const i=n.piece, r=n.piece.bufferIndex, s=this._buffers[r].lineStarts, a=s[i.start.line]+i.start.column+e;
    let l=i.start.line, u=i.end.line, d=0, m=0, p=0;
    for(;
    l<=u&&(d=l+(u-l)/2|0, p=s[d], d!==u);
    )if(m=s[d+1], a<p)u=d-1;
    else if(a>=m)l=d+1;
    else break;
    return t?(t.line=d, t.column=a-p, null):{
      line:d,column:a-p
    }
  }
  getLineFeedCnt(n, e, t){
    if(t.column===0)return t.line-e.line;
    const i=this._buffers[n].lineStarts;
    if(t.line===i.length-1)return t.line-e.line;
    const r=i[t.line+1], s=i[t.line]+t.column;
    if(r>s+1)return t.line-e.line;
    const o=s-1;
    return this._buffers[n].buffer.charCodeAt(o)===13?t.line-e.line+1:t.line-e.line
  }
  offsetInBuffer(n, e){
    return this._buffers[n].lineStarts[e.line]+e.column
  }
  deleteNodes(n){
    for(let e=0;
    e<n.length;
    e++)gOo(this, n[e])
  }
  createNewPieces(n){
    if(n.length>aRe){
      const u=[];
      for(;
      n.length>aRe;
      ){
        const m=n.charCodeAt(aRe-1);
        let p;
        m===13||m>=55296&&m<=56319?(p=n.substring(0,aRe-1),n=n.substring(aRe-1)):(p=n.substring(0,aRe),n=n.substring(aRe));
        const g=r9e(p);
        u.push(new $Y(this._buffers.length,{
          line:0,column:0
        },{
          line:g.length-1,column:p.length-g[g.length-1]
        },g.length-1,p.length)),this._buffers.push(new LVe(p,g))
      }
      const d=r9e(n);
      return u.push(new $Y(this._buffers.length,{
        line:0,column:0
      },{
        line:d.length-1,column:n.length-d[d.length-1]
      },d.length-1,n.length)),this._buffers.push(new LVe(n,d)),u
    }
    let e=this._buffers[0].buffer.length;
    const t=r9e(n, !1);
    let i=this._lastChangeBufferPos;
    if(this._buffers[0].lineStarts[this._buffers[0].lineStarts.length-1]===e&&e!==0&&this.startWithLF(n)&&this.endWithCR(this._buffers[0].buffer)){
      this._lastChangeBufferPos={
        line:this._lastChangeBufferPos.line,column:this._lastChangeBufferPos.column+1
      },i=this._lastChangeBufferPos;
      for(let u=0;
      u<t.length;
      u++)t[u]+=e+1;
      this._buffers[0].lineStarts=this._buffers[0].lineStarts.concat(t.slice(1)),this._buffers[0].buffer+="_"+n,e+=1
    }
    else{
      if(e!==0)for(let u=0;
      u<t.length;
      u++)t[u]+=e;
      this._buffers[0].lineStarts=this._buffers[0].lineStarts.concat(t.slice(1)),this._buffers[0].buffer+=n
    }
    const r=this._buffers[0].buffer.length, s=this._buffers[0].lineStarts.length-1, o=r-this._buffers[0].lineStarts[s], a={
      line:s,column:o
    }, l=new $Y(0, i, a, this.getLineFeedCnt(0, i, a), r-e);
    return this._lastChangeBufferPos=a, [l]
  }
  getLinesRawContent(){
    return this.getContentOfSubTree(this.root)
  }
  getLineRawContent(n, e=0){
    let t=this.root, i="";
    const r=this._searchCache.get2(n);
    if(r){
      t=r.node;
      const s=this.getAccumulatedValue(t,n-r.nodeStartLineNumber-1),o=this._buffers[t.piece.bufferIndex].buffer,a=this.offsetInBuffer(t.piece.bufferIndex,t.piece.start);
      if(r.nodeStartLineNumber+t.piece.lineFeedCnt===n)i=o.substring(a+s,a+t.piece.length);
      else{
        const l=this.getAccumulatedValue(t,n-r.nodeStartLineNumber);
        return o.substring(a+s,a+l-e)
      }
    }
    else{
      let s=0;
      const o=n;
      for(;
      t!==jb;
      )if(t.left!==jb&&t.lf_left>=n-1)t=t.left;
      else if(t.lf_left+t.piece.lineFeedCnt>n-1){
        const a=this.getAccumulatedValue(t,n-t.lf_left-2),l=this.getAccumulatedValue(t,n-t.lf_left-1),u=this._buffers[t.piece.bufferIndex].buffer,d=this.offsetInBuffer(t.piece.bufferIndex,t.piece.start);
        return s+=t.size_left,this._searchCache.set({
          node:t,nodeStartOffset:s,nodeStartLineNumber:o-(n-1-t.lf_left)
        }),u.substring(d+a,d+l-e)
      }
      else if(t.lf_left+t.piece.lineFeedCnt===n-1){
        const a=this.getAccumulatedValue(t,n-t.lf_left-2),l=this._buffers[t.piece.bufferIndex].buffer,u=this.offsetInBuffer(t.piece.bufferIndex,t.piece.start);
        i=l.substring(u+a,u+t.piece.length);
        break
      }
      else n-=t.lf_left+t.piece.lineFeedCnt,s+=t.size_left+t.piece.length,t=t.right
    }
    for(t=t.next();
    t!==jb;
    ){
      const s=this._buffers[t.piece.bufferIndex].buffer;
      if(t.piece.lineFeedCnt>0){
        const o=this.getAccumulatedValue(t,0),a=this.offsetInBuffer(t.piece.bufferIndex,t.piece.start);
        return i+=s.substring(a,a+o-e),i
      }
      else{
        const o=this.offsetInBuffer(t.piece.bufferIndex,t.piece.start);
        i+=s.substr(o,t.piece.length)
      }
      t=t.next()
    }
    return i
  }
  computeBufferMetadata(){
    let n=this.root, e=1, t=0;
    for(;
    n!==jb;
    )e+=n.lf_left+n.piece.lineFeedCnt, t+=n.size_left+n.piece.length, n=n.right;
    this._lineCnt=e, this._length=t, this._searchCache.validate(this._length)
  }
  getIndexOf(n, e){
    const t=n.piece, i=this.positionInBuffer(n, e), r=i.line-t.start.line;
    if(this.offsetInBuffer(t.bufferIndex, t.end)-this.offsetInBuffer(t.bufferIndex, t.start)===e){
      const s=this.getLineFeedCnt(n.piece.bufferIndex,t.start,i);
      if(s!==r)return{
        index:s,remainder:0
      }
    }
    return{
      index:r,remainder:i.column
    }
  }
  getAccumulatedValue(n, e){
    if(e<0)return 0;
    const t=n.piece, i=this._buffers[t.bufferIndex].lineStarts, r=t.start.line+e+1;
    return r>t.end.line?i[t.end.line]+t.end.column-i[t.start.line]-t.start.column:i[r]-i[t.start.line]-t.start.column
  }
  deleteNodeTail(n, e){
    const t=n.piece, i=t.lineFeedCnt, r=this.offsetInBuffer(t.bufferIndex, t.end), s=e, o=this.offsetInBuffer(t.bufferIndex, s), a=this.getLineFeedCnt(t.bufferIndex, t.start, s), l=a-i, u=o-r, d=t.length+u;
    n.piece=new $Y(t.bufferIndex, t.start, s, a, d), n9e(this, n, u, l)
  }
  deleteNodeHead(n, e){
    const t=n.piece, i=t.lineFeedCnt, r=this.offsetInBuffer(t.bufferIndex, t.start), s=e, o=this.getLineFeedCnt(t.bufferIndex, s, t.end), a=this.offsetInBuffer(t.bufferIndex, s), l=o-i, u=r-a, d=t.length+u;
    n.piece=new $Y(t.bufferIndex, s, t.end, o, d), n9e(this, n, u, l)
  }
  shrinkNode(n, e, t){
    const i=n.piece, r=i.start, s=i.end, o=i.length, a=i.lineFeedCnt, l=e, u=this.getLineFeedCnt(i.bufferIndex, i.start, l), d=this.offsetInBuffer(i.bufferIndex, e)-this.offsetInBuffer(i.bufferIndex, r);
    n.piece=new $Y(i.bufferIndex, i.start, l, u, d), n9e(this, n, d-o, u-a);
    const m=new $Y(i.bufferIndex, t, s, this.getLineFeedCnt(i.bufferIndex, t, s), this.offsetInBuffer(i.bufferIndex, s)-this.offsetInBuffer(i.bufferIndex, t)), p=this.rbInsertRight(n, m);
    this.validateCRLFWithPrevNode(p)
  }
  appendToNode(n, e){
    this.adjustCarriageReturnFromNext(e, n)&&(e+=`
`);
    const t=this.shouldCheckCRLF()&&this.startWithLF(e)&&this.endWithCR(n), i=this._buffers[0].buffer.length;
    this._buffers[0].buffer+=e;
    const r=r9e(e, !1);
    for(let p=0;
    p<r.length;
    p++)r[p]+=i;
    if(t){
      const p=this._buffers[0].lineStarts[this._buffers[0].lineStarts.length-2];
      this._buffers[0].lineStarts.pop(),this._lastChangeBufferPos={
        line:this._lastChangeBufferPos.line-1,column:i-p
      }
    }
    this._buffers[0].lineStarts=this._buffers[0].lineStarts.concat(r.slice(1));
    const s=this._buffers[0].lineStarts.length-1, o=this._buffers[0].buffer.length-this._buffers[0].lineStarts[s], a={
      line:s,column:o
    }, l=n.piece.length+e.length, u=n.piece.lineFeedCnt, d=this.getLineFeedCnt(0, n.piece.start, a), m=d-u;
    n.piece=new $Y(n.piece.bufferIndex, n.piece.start, a, d, l), this._lastChangeBufferPos=a, n9e(this, n, e.length, m)
  }
  nodeAt(n){
    let e=this.root;
    const t=this._searchCache.get(n);
    if(t)return{
      node:t.node,nodeStartOffset:t.nodeStartOffset,remainder:n-t.nodeStartOffset
    };
    let i=0;
    for(;
    e!==jb;
    )if(e.size_left>n)e=e.left;
    else if(e.size_left+e.piece.length>=n){
      i+=e.size_left;
      const r={
        node:e,remainder:n-e.size_left,nodeStartOffset:i
      };
      return this._searchCache.set(r),r
    }
    else n-=e.size_left+e.piece.length, i+=e.size_left+e.piece.length, e=e.right;
    return null
  }
  nodeAt2(n, e){
    let t=this.root, i=0;
    for(;
    t!==jb;
    )if(t.left!==jb&&t.lf_left>=n-1)t=t.left;
    else if(t.lf_left+t.piece.lineFeedCnt>n-1){
      const r=this.getAccumulatedValue(t,n-t.lf_left-2),s=this.getAccumulatedValue(t,n-t.lf_left-1);
      return i+=t.size_left,{
        node:t,remainder:Math.min(r+e-1,s),nodeStartOffset:i
      }
    }
    else if(t.lf_left+t.piece.lineFeedCnt===n-1){
      const r=this.getAccumulatedValue(t,n-t.lf_left-2);
      if(r+e-1<=t.piece.length)return{
        node:t,remainder:r+e-1,nodeStartOffset:i
      };
      e-=t.piece.length-r;
      break
    }
    else n-=t.lf_left+t.piece.lineFeedCnt, i+=t.size_left+t.piece.length, t=t.right;
    for(t=t.next();
    t!==jb;
    ){
      if(t.piece.lineFeedCnt>0){
        const r=this.getAccumulatedValue(t,0),s=this.offsetOfNode(t);
        return{
          node:t,remainder:Math.min(e-1,r),nodeStartOffset:s
        }
      }
      else if(t.piece.length>=e-1){
        const r=this.offsetOfNode(t);
        return{
          node:t,remainder:e-1,nodeStartOffset:r
        }
      }
      else e-=t.piece.length;
      t=t.next()
    }
    return null
  }
  nodeCharCodeAt(n, e){
    if(n.piece.lineFeedCnt<1)return-1;
    const t=this._buffers[n.piece.bufferIndex], i=this.offsetInBuffer(n.piece.bufferIndex, n.piece.start)+e;
    return t.buffer.charCodeAt(i)
  }
  offsetOfNode(n){
    if(!n)return 0;
    let e=n.size_left;
    for(;
    n!==this.root;
    )n.parent.right===n&&(e+=n.parent.size_left+n.parent.piece.length), n=n.parent;
    return e
  }
  shouldCheckCRLF(){
    return!(this._EOLNormalized&&this._EOL===`
`)
  }
  startWithLF(n){
    if(typeof n=="string")return n.charCodeAt(0)===10;
    if(n===jb||n.piece.lineFeedCnt===0)return!1;
    const e=n.piece, t=this._buffers[e.bufferIndex].lineStarts, i=e.start.line, r=t[i]+e.start.column;
    return i===t.length-1||t[i+1]>r+1?!1:this._buffers[e.bufferIndex].buffer.charCodeAt(r)===10
  }
  endWithCR(n){
    return typeof n=="string"?n.charCodeAt(n.length-1)===13:n===jb||n.piece.lineFeedCnt===0?!1:this.nodeCharCodeAt(n, n.piece.length-1)===13
  }
  validateCRLFWithPrevNode(n){
    if(this.shouldCheckCRLF()&&this.startWithLF(n)){
      const e=n.prev();
      this.endWithCR(e)&&this.fixCRLF(e,n)
    }
  }
  validateCRLFWithNextNode(n){
    if(this.shouldCheckCRLF()&&this.endWithCR(n)){
      const e=n.next();
      this.startWithLF(e)&&this.fixCRLF(n,e)
    }
  }
  fixCRLF(n, e){
    const t=[], i=this._buffers[n.piece.bufferIndex].lineStarts;
    let r;
    n.piece.end.column===0?r={
      line:n.piece.end.line-1,column:i[n.piece.end.line]-i[n.piece.end.line-1]-1
    }
    :r={
      line:n.piece.end.line,column:n.piece.end.column-1
    };
    const s=n.piece.length-1, o=n.piece.lineFeedCnt-1;
    n.piece=new $Y(n.piece.bufferIndex, n.piece.start, r, o, s), n9e(this, n, -1, -1), n.piece.length===0&&t.push(n);
    const a={
      line:e.piece.start.line+1,column:0
    }, l=e.piece.length-1, u=this.getLineFeedCnt(e.piece.bufferIndex, a, e.piece.end);
    e.piece=new $Y(e.piece.bufferIndex, a, e.piece.end, u, l), n9e(this, e, -1, -1), e.piece.length===0&&t.push(e);
    const d=this.createNewPieces(`\r
`);
    this.rbInsertRight(n, d[0]);
    for(let m=0;
    m<t.length;
    m++)gOo(this, t[m])
  }
  adjustCarriageReturnFromNext(n, e){
    if(this.shouldCheckCRLF()&&this.endWithCR(n)){
      const t=e.next();
      if(this.startWithLF(t)){
        if(n+=`
`,t.piece.length===1)gOo(this,t);
        else{
          const i=t.piece,r={
            line:i.start.line+1,column:0
          },s=i.length-1,o=this.getLineFeedCnt(i.bufferIndex,r,i.end);
          t.piece=new $Y(i.bufferIndex,r,i.end,o,s),n9e(this,t,-1,-1)
        }
        return!0
      }
    }
    return!1
  }
  iterate(n, e){
    if(n===jb)return e(jb);
    const t=this.iterate(n.left, e);
    return t&&e(n)&&this.iterate(n.right, e)
  }
  getNodeContent(n){
    if(n===jb)return"";
    const e=this._buffers[n.piece.bufferIndex], t=n.piece, i=this.offsetInBuffer(t.bufferIndex, t.start), r=this.offsetInBuffer(t.bufferIndex, t.end);
    return e.buffer.substring(i, r)
  }
  getPieceContent(n){
    const e=this._buffers[n.bufferIndex], t=this.offsetInBuffer(n.bufferIndex, n.start), i=this.offsetInBuffer(n.bufferIndex, n.end);
    return e.buffer.substring(t, i)
  }
  rbInsertRight(n, e){
    const t=new fOo(e, 1);
    if(t.left=jb, t.right=jb, t.parent=jb, t.size_left=0, t.lf_left=0, this.root===jb)this.root=t, t.color=0;
    else if(n.right===jb)n.right=t, t.parent=n;
    else{
      const r=jEc(n.right);
      r.left=t,t.parent=r
    }
    return agh(this, t), t
  }
  rbInsertLeft(n, e){
    const t=new fOo(e, 1);
    if(t.left=jb, t.right=jb, t.parent=jb, t.size_left=0, t.lf_left=0, this.root===jb)this.root=t, t.color=0;
    else if(n.left===jb)n.left=t, t.parent=n;
    else{
      const i=ogh(n.left);
      i.right=t,t.parent=i
    }
    return agh(this, t), t
  }
  getContentOfSubTree(n){
    let e="";
    return this.iterate(n, t=>(e+=this.getNodeContent(t), !0)), e
  }
}
}
}), bOo, exc=