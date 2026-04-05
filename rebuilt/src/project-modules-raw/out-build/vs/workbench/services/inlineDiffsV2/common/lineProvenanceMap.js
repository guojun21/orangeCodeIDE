// Module: out-build/vs/workbench/services/inlineDiffsV2/common/lineProvenanceMap.js
// Offset: 33886334 (bundle byte offset)
// Size: 6751 bytes

mpe="BASE", K0u=class eld{
  constructor(){
    this._spans=[], this._deletionMarkers=[]
  }
  getOwnerAtLine(e){
    if(e<1)return mpe;
    const t=this._findSpanContaining(e);
    return t?t.owner:mpe
  }
  getOwnersInRange(e, t){
    if(e<1||e>t)return new Set([mpe]);
    const i=new Set;
    let r=e;
    for(const s of this._spans){
      if(s.end<e)continue;
      if(s.start>t)break;
      Math.max(s.start,e)>r&&i.add(mpe),i.add(s.owner),r=Math.min(s.end,t)+1
    }
    return r<=t&&i.add(mpe), i
  }
  getContributingOwnersInRange(e, t, i){
    const r=new Set, s=this.getOwnersInRange(e, t);
    for(const l of s)l!==mpe&&r.add(l);
    if(!i)return r;
    const o=Math.max(1, e-1), a=t+1;
    for(const l of this._deletionMarkers)if(!(l.position<o)){
      if(l.position>a)break;
      l.owner!==mpe&&r.add(l.owner)
    }
    return r
  }
  applyEdit(e, t, i, r, s){
    if(e<1)throw new Error(`startLine must be >= 1, got ${e}`);
    if(t<0||i<0)throw new Error("deleteCount and insertCount must be >= 0");
    if(t===0&&i===0)return;
    this._shiftDeletionMarkersForEdit(e, t, i);
    const o=i-t, a=[];
    if(t>0){
      const l=e+t-1;
      for(const u of this._spans)u.end<e?a.push(u):u.start>l?a.push({
        start:u.start+o,end:u.end+o,owner:u.owner
      }):(u.start<e&&a.push({
        start:u.start,end:e-1,owner:u.owner
      }),u.end>l&&a.push({
        start:e+i,end:u.end+o,owner:u.owner
      }))
    }
    else for(const l of this._spans)l.end<e?a.push(l):l.start>=e?a.push({
      start:l.start+i,end:l.end+i,owner:l.owner
    }):(a.push({
      start:l.start,end:e-1,owner:l.owner
    }), a.push({
      start:e+i,end:l.end+i,owner:l.owner
    }));
    i>0&&a.push({
      start:e,end:e+i-1,owner:r
    }), t>0&&i===0&&r!==mpe&&s!==void 0&&this.addDeletionMarker({
      position:e,affinity:"left",deletedCount:t,owner:r,deletedLines:s
    }), this._spans=a, this._sortSpans(), this._mergeAdjacentSpans()
  }
  spliceWithOwners(e, t, i, r){
    if(e<1)throw new Error(`startLine must be >= 1, got ${e}`);
    if(t<0||i<0)throw new Error("deleteCount and insertCount must be >= 0");
    if(t===0&&i===0)return;
    const s=i>0?e+i-1:e-1;
    this._validateInsertedOwners(e, s, r), this._shiftDeletionMarkersForEdit(e, t, i);
    const o=i-t, a=[];
    if(t>0){
      const l=e+t-1;
      for(const u of this._spans)u.end<e?a.push(u):u.start>l?a.push({
        start:u.start+o,end:u.end+o,owner:u.owner
      }):(u.start<e&&a.push({
        start:u.start,end:e-1,owner:u.owner
      }),u.end>l&&a.push({
        start:e+i,end:u.end+o,owner:u.owner
      }))
    }
    else for(const l of this._spans)l.end<e?a.push(l):l.start>=e?a.push({
      start:l.start+i,end:l.end+i,owner:l.owner
    }):(a.push({
      start:l.start,end:e-1,owner:l.owner
    }), a.push({
      start:e+i,end:l.end+i,owner:l.owner
    }));
    for(const l of r)l.owner!==mpe&&a.push(l);
    this._spans=a, this._sortSpans(), this._mergeAdjacentSpans()
  }
  getSpans(){
    return this._spans
  }
  getDeletionMarkers(){
    return this._deletionMarkers
  }
  addDeletionMarker(e){
    if(e.position<1)throw new Error(`marker.position must be >= 1, got ${e.position}`);
    this._deletionMarkers.push(e), this._sortDeletionMarkers()
  }
  restoreDeletionMarkers(e){
    if(e.length!==0){
      for(const t of e)if(t.position<1)throw new Error(`marker.position must be >= 1, got ${t.position}`);
      this._deletionMarkers.unshift(...e),this._sortDeletionMarkers()
    }
  }
  removeDeletionMarkersByOwner(e){
    this._deletionMarkers=this._deletionMarkers.filter(t=>t.owner!==e)
  }
  extractDeletionMarkersInDeletedInterval(e, t){
    if(t<=0)return[];
    const i=e+t-1, r=[], s=[];
    for(const o of this._deletionMarkers)o.position>e&&o.position<=i?r.push(o):s.push(o);
    return this._deletionMarkers=s, r
  }
  clone(){
    const e=new eld;
    return e._spans=this._spans.map(t=>({
      start:t.start,end:t.end,owner:t.owner
    })), e._deletionMarkers=this._deletionMarkers.map(t=>({
      position:t.position,affinity:t.affinity,deletedCount:t.deletedCount,owner:t.owner,deletedLines:[...t.deletedLines]
    })), e
  }
  serialize(){
    return{
      spans:this._spans.map(e=>({
        start:e.start,end:e.end,owner:e.owner
      })),deletionMarkers:this._deletionMarkers.map(e=>({
        position:e.position,affinity:e.affinity,deletedCount:e.deletedCount,owner:e.owner,deletedLines:[...e.deletedLines]
      }))
    }
  }
  static fromSerialized(e){
    const t=new eld;
    return t._spans=e.spans.map(i=>({
      start:i.start,end:i.end,owner:i.owner
    })), t._deletionMarkers=e.deletionMarkers.map(i=>({
      position:i.position,affinity:i.affinity,deletedCount:i.deletedCount,owner:i.owner,deletedLines:[...i.deletedLines]
    })), t._sortSpans(), t._sortDeletionMarkers(), t
  }
  _findSpanContaining(e){
    let t=0, i=this._spans.length-1;
    for(;
    t<=i;
    ){
      const r=t+i>>>1,s=this._spans[r];
      if(s.end<e)t=r+1;
      else if(s.start>e)i=r-1;
      else return s
    }
  }
  _sortSpans(){
    this._spans.sort((e, t)=>e.start-t.start)
  }
  _sortDeletionMarkers(){
    this._deletionMarkers.sort((e, t)=>e.position-t.position)
  }
  _shiftDeletionMarkersForEdit(e, t, i){
    if(this._deletionMarkers.length===0)return;
    let r=this._deletionMarkers;
    if(t>0){
      const s=e+t-1,o=e+t,a=[];
      for(const l of r){
        if(l.position<e){
          a.push(l);
          continue
        }
        if(l.position===e){
          a.push(l);
          continue
        }
        if(l.position<=s)continue;
        const u=l.position-t;
        l.position===o?a.push({
          ...l,position:u,affinity:"right"
        }):a.push({
          ...l,position:u
        })
      }
      r=a
    }
    if(i>0){
      const s=[];
      for(const o of r){
        if(o.position<e){
          s.push(o);
          continue
        }
        if(o.position===e){
          o.affinity==="right"?s.push({
            ...o,position:o.position+i
          }):s.push(o);
          continue
        }
        s.push({
          ...o,position:o.position+i
        })
      }
      r=s
    }
    this._deletionMarkers=r, this._sortDeletionMarkers()
  }
  _validateInsertedOwners(e, t, i){
    if(i.length===0)return;
    if(t<e)throw new Error("insertCount must be > 0 when insertedOwners is non-empty");
    let r=e-1;
    for(const s of i){
      if(s.start<e||s.end>t)throw new Error(`insertedOwners span [${s.start},${s.end}] is outside inserted range [${e},${t}]`);
      if(s.end<s.start)throw new Error(`insertedOwners span has end < start: [${s.start},${s.end}]`);
      if(s.start<=r)throw new Error(`insertedOwners spans overlap or are unsorted at [${s.start},${s.end}]`);
      r=s.end
    }
  }
  _mergeAdjacentSpans(){
    if(this._spans.length<=1)return;
    const e=[];
    let t=this._spans[0];
    for(let i=1;
    i<this._spans.length;
    i++){
      const r=this._spans[i];
      r.start===t.end+1&&r.owner===t.owner?t={
        start:t.start,end:r.end,owner:t.owner
      }
      :(e.push(t),t=r)
    }
    e.push(t), this._spans=e
  }
  _validateInvariants(){
    for(let e=0;
    e<this._spans.length;
    e++){
      const t=this._spans[e];
      if(t.start<1)throw new Error(`Span ${e} has invalid start: ${t.start}`);
      if(t.end<t.start)throw new Error(`Span ${e} has end (${t.end}) < start (${t.start})`);
      if(e>0){
        const i=this._spans[e-1];
        if(t.start<=i.end)throw new Error(`Span ${e} overlaps or precedes span ${e-1}`)
      }
      if(e>0){
        const i=this._spans[e-1];
        if(t.start===i.end+1&&t.owner===i.owner)throw new Error(`Spans ${e-1} and ${e} are adjacent with same owner and should be merged`)
      }
    }
    for(let e=0;
    e<this._deletionMarkers.length;
    e++){
      const t=this._deletionMarkers[e];
      if(t.position<1)throw new Error(`DeletionMarker ${e} has invalid position: ${t.position}`);
      if(t.deletedCount<0)throw new Error(`DeletionMarker ${e} has invalid deletedCount: ${t.deletedCount}`);
      if(e>0&&this._deletionMarkers[e-1].position>t.position)throw new Error(`DeletionMarkers are not sorted at index ${e}`)
    }
  }
}
}
}), dvn, C$f, xmy=