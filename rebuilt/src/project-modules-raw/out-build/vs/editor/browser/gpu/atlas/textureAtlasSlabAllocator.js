// Module: out-build/vs/editor/browser/gpu/atlas/textureAtlasSlabAllocator.js
// Offset: 1767310 (bundle byte offset)
// Size: 4891 bytes

ri(), _s(), cu(), f9e(), xyh=class{
  constructor(n, e, t){
    this._canvas=n, this._textureIndex=e, this._slabs=[], this._activeSlabsByDims=new H2n, this._unusedRects=[], this._openRegionsByHeight=new Map, this._openRegionsByWidth=new Map, this._allocatedGlyphs=new Set, this._nextIndex=0, this._ctx=Xft(this._canvas.getContext("2d", {
      willReadFrequently:!0
    })), this._slabW=Math.min(t?.slabW??64<<Math.max(Math.floor($c().devicePixelRatio)-1, 0), this._canvas.width), this._slabH=Math.min(t?.slabH??this._slabW, this._canvas.height), this._slabsPerRow=Math.floor(this._canvas.width/this._slabW), this._slabsPerColumn=Math.floor(this._canvas.height/this._slabH)
  }
  allocate(n){
    const e=n.boundingBox.right-n.boundingBox.left+1, t=n.boundingBox.bottom-n.boundingBox.top+1;
    if(e>this._canvas.width||t>this._canvas.height)throw new _m("Glyph is too large for the atlas page");
    if(e>this._slabW||t>this._slabH){
      if(this._allocatedGlyphs.size>0)return;
      let l=this._canvas.width;
      for(;
      e<l/2&&t<l/2;
      )l/=2;
      this._slabW=l,this._slabH=l,this._slabsPerRow=Math.floor(this._canvas.width/this._slabW),this._slabsPerColumn=Math.floor(this._canvas.height/this._slabH)
    }
    const i={
      w:e,h:t
    };
    let r=this._activeSlabsByDims.get(i.w, i.h);
    if(r){
      const l=Math.floor(this._slabW/r.entryW)*Math.floor(this._slabH/r.entryH);
      r.count>=l&&(r=void 0)
    }
    let s, o;
    if(!r)if(e<t){
      const l=this._openRegionsByWidth.get(e);
      if(l?.length)for(let u=l.length-1;
      u>=0;
      u--){
        const d=l[u];
        if(d.w>=e&&d.h>=t){
          s=d.x,o=d.y,e<d.w&&this._unusedRects.push({
            x:d.x+e,y:d.y,w:d.w-e,h:t
          }),d.y+=t,d.h-=t,d.h===0&&(u===l.length-1?l.pop():this._unusedRects.splice(u,1));
          break
        }
      }
    }
    else{
      const l=this._openRegionsByHeight.get(t);
      if(l?.length)for(let u=l.length-1;
      u>=0;
      u--){
        const d=l[u];
        if(d.w>=e&&d.h>=t){
          s=d.x,o=d.y,t<d.h&&this._unusedRects.push({
            x:d.x,y:d.y+t,w:e,h:d.h-t
          }),d.x+=e,d.w-=e,d.h===0&&(u===l.length-1?l.pop():this._unusedRects.splice(u,1));
          break
        }
      }
    }
    if(s===void 0||o===void 0){
      if(!r){
        if(this._slabs.length>=this._slabsPerRow*this._slabsPerColumn)return;
        r={
          x:Math.floor(this._slabs.length%this._slabsPerRow)*this._slabW,y:Math.floor(this._slabs.length/this._slabsPerRow)*this._slabH,entryW:i.w,entryH:i.h,count:0
        };
        const u=this._slabW%r.entryW,d=this._slabH%r.entryH;
        u&&Eyh(this._openRegionsByWidth,u,{
          x:r.x+this._slabW-u,w:u,y:r.y,h:this._slabH-(d??0)
        }),d&&Eyh(this._openRegionsByHeight,d,{
          x:r.x,w:this._slabW,y:r.y+this._slabH-d,h:d
        }),this._slabs.push(r),this._activeSlabsByDims.set(r,i.w,i.h)
      }
      const l=Math.floor(this._slabW/r.entryW);
      s=r.x+Math.floor(r.count%l)*r.entryW,o=r.y+Math.floor(r.count/l)*r.entryH,r.count++
    }
    this._ctx.drawImage(n.source, n.boundingBox.left, n.boundingBox.top, e, t, s, o, e, t);
    const a={
      pageIndex:this._textureIndex,glyphIndex:this._nextIndex++,x:s,y:o,w:e,h:t,originOffsetX:n.originOffset.x,originOffsetY:n.originOffset.y,fontBoundingBoxAscent:n.fontBoundingBoxAscent,fontBoundingBoxDescent:n.fontBoundingBoxDescent
    };
    return this._allocatedGlyphs.add(a), a
  }
  getUsagePreview(){
    const n=this._canvas.width, e=this._canvas.height, t=new OffscreenCanvas(n, e), i=Xft(t.getContext("2d"));
    i.fillStyle="#808080", i.fillRect(0, 0, n, e);
    let r=0, s=0, o=0, a=0;
    const l=64<<Math.floor($c().devicePixelRatio)-1, u=l;
    for(const m of this._slabs){
      let p=0,g=0;
      for(let C=0;
      C<m.count;
      C++)p+m.entryW>l&&(p=0,g+=m.entryH),i.fillStyle="#FF0000",i.fillRect(m.x+p,m.y+g,m.entryW,m.entryH),r+=m.entryW*m.entryH,p+=m.entryW;
      const f=Math.floor(l/m.entryW),A=Math.floor(u/m.entryH),w=m.entryW*f*m.entryH*A;
      o+=l*u-w
    }
    for(const m of this._allocatedGlyphs)s+=m.w*m.h, i.fillStyle="#4040FF", i.fillRect(m.x, m.y, m.w, m.h);
    const d=Array.from(this._openRegionsByWidth.values()).flat().concat(Array.from(this._openRegionsByHeight.values()).flat());
    for(const m of d)i.fillStyle="#FF000088", i.fillRect(m.x, m.y, m.w, m.h), a+=m.w*m.h;
    return i.globalAlpha=.5, i.drawImage(this._canvas, 0, 0), i.globalAlpha=1, t.convertToBlob()
  }
  getStats(){
    const n=this._canvas.width, e=this._canvas.height;
    let t=0, i=0, r=0, s=0, o=0;
    const a=n*e, l=64<<Math.floor($c().devicePixelRatio)-1, u=l;
    for(const g of this._slabs){
      let f=0,A=0;
      for(let I=0;
      I<g.count;
      I++)f+g.entryW>l&&(f=0,A+=g.entryH),t+=g.entryW*g.entryH,f+=g.entryW;
      const w=Math.floor(l/g.entryW),C=Math.floor(u/g.entryH),x=g.entryW*w*g.entryH*C;
      r+=l*u-x
    }
    for(const g of this._allocatedGlyphs)i+=g.w*g.h;
    const d=Array.from(this._openRegionsByWidth.values()).flat().concat(Array.from(this._openRegionsByHeight.values()).flat());
    for(const g of d)o+=g.w*g.h;
    const m=r-o;
    s=t-(i-m);
    const p=i/(i+s+o);
    return[`page[${this._textureIndex}]:`, `     Total: ${a}px (${n}x${e})`, `      Used: ${i}px (${(i/a*100).toFixed(2)}%)`, `    Wasted: ${s}px (${(s/a*100).toFixed(2)}%)`, `Restricted: ${o}px (${(o/a*100).toFixed(2)}%) (hard to allocate)`, `Efficiency: ${p===1?"100":(p*100).toFixed(2)}%`, `     Slabs: ${this._slabs.length} of ${Math.floor(this._canvas.width/l)*Math.floor(this._canvas.height/u)}`].join(`
`)
  }
}
}
}), cIc, rve, lIc=