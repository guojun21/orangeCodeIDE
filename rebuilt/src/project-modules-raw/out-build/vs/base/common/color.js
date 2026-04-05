// Module: out-build/vs/base/common/color.js
// Offset: 858973 (bundle byte offset)
// Size: 18717 bytes

Sa=class{
  constructor(n, e, t, i=1){
    this._rgbaBrand=void 0, this.r=Math.min(255, Math.max(0, n))|0, this.g=Math.min(255, Math.max(0, e))|0, this.b=Math.min(255, Math.max(0, t))|0, this.a=iVe(Math.max(Math.min(1, i), 0), 3)
  }
  static equals(n, e){
    return n.r===e.r&&n.g===e.g&&n.b===e.b&&n.a===e.a
  }
}, rVe=class aNi{
  constructor(e, t, i, r){
    this._hslaBrand=void 0, this.h=Math.max(Math.min(360, e), 0)|0, this.s=iVe(Math.max(Math.min(1, t), 0), 3), this.l=iVe(Math.max(Math.min(1, i), 0), 3), this.a=iVe(Math.max(Math.min(1, r), 0), 3)
  }
  static equals(e, t){
    return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a
  }
  static fromRGBA(e){
    const t=e.r/255, i=e.g/255, r=e.b/255, s=e.a, o=Math.max(t, i, r), a=Math.min(t, i, r);
    let l=0, u=0;
    const d=(a+o)/2, m=o-a;
    if(m>0){
      switch(u=Math.min(d<=.5?m/(2*d):m/(2-2*d),1),o){
        case t:l=(i-r)/m+(i<r?6:0);
        break;
        case i:l=(r-t)/m+2;
        break;
        case r:l=(t-i)/m+4;
        break
      }
      l*=60,l=Math.round(l)
    }
    return new aNi(l, u, d, s)
  }
  static _hue2rgb(e, t, i){
    return i<0&&(i+=1), i>1&&(i-=1), i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e
  }
  static toRGBA(e){
    const t=e.h/360, {
      s:i,l:r,a:s
    }
    =e;
    let o, a, l;
    if(i===0)o=a=l=r;
    else{
      const u=r<.5?r*(1+i):r+i-r*i,d=2*r-u;
      o=aNi._hue2rgb(d,u,t+1/3),a=aNi._hue2rgb(d,u,t),l=aNi._hue2rgb(d,u,t-1/3)
    }
    return new Sa(Math.round(o*255), Math.round(a*255), Math.round(l*255), s)
  }
}, $5e=class LJb{
  constructor(e, t, i, r){
    this._hsvaBrand=void 0, this.h=Math.max(Math.min(360, e), 0)|0, this.s=iVe(Math.max(Math.min(1, t), 0), 3), this.v=iVe(Math.max(Math.min(1, i), 0), 3), this.a=iVe(Math.max(Math.min(1, r), 0), 3)
  }
  static equals(e, t){
    return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a
  }
  static fromRGBA(e){
    const t=e.r/255, i=e.g/255, r=e.b/255, s=Math.max(t, i, r), o=Math.min(t, i, r), a=s-o, l=s===0?0:a/s;
    let u;
    return a===0?u=0:s===t?u=((i-r)/a%6+6)%6:s===i?u=(r-t)/a+2:u=(t-i)/a+4, new LJb(Math.round(u*60), l, s, e.a)
  }
  static toRGBA(e){
    const{
      h:t,s:i,v:r,a:s
    }
    =e, o=r*i, a=o*(1-Math.abs(t/60%2-1)), l=r-o;
    let[u, d, m]=[0, 0, 0];
    return t<60?(u=o, d=a):t<120?(u=a, d=o):t<180?(d=o, m=a):t<240?(d=a, m=o):t<300?(u=a, m=o):t<=360&&(u=o, m=a), u=Math.round((u+l)*255), d=Math.round((d+l)*255), m=Math.round((m+l)*255), new Sa(u, d, m, s)
  }
}, Xr=class BL{
  static fromHex(e){
    return BL.Format.CSS.parseHex(e)||BL.red
  }
  static equals(e, t){
    return!e&&!t?!0:!e||!t?!1:e.equals(t)
  }
  get hsla(){
    return this._hsla?this._hsla:rVe.fromRGBA(this.rgba)
  }
  get hsva(){
    return this._hsva?this._hsva:$5e.fromRGBA(this.rgba)
  }
  constructor(e){
    if(e)if(e instanceof Sa)this.rgba=e;
    else if(e instanceof rVe)this._hsla=e, this.rgba=rVe.toRGBA(e);
    else if(e instanceof $5e)this._hsva=e, this.rgba=$5e.toRGBA(e);
    else throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value")
  }
  equals(e){
    return!!e&&Sa.equals(this.rgba, e.rgba)&&rVe.equals(this.hsla, e.hsla)&&$5e.equals(this.hsva, e.hsva)
  }
  getRelativeLuminance(){
    const e=BL._relativeLuminanceForComponent(this.rgba.r), t=BL._relativeLuminanceForComponent(this.rgba.g), i=BL._relativeLuminanceForComponent(this.rgba.b), r=.2126*e+.7152*t+.0722*i;
    return iVe(r, 4)
  }
  reduceRelativeLuminace(e, t){
    let{
      r:i,g:r,b:s
    }
    =e.rgba, o=this.getContrastRatio(e);
    for(;
    o<t&&(i>0||r>0||s>0);
    )i-=Math.max(0, Math.ceil(i*.1)), r-=Math.max(0, Math.ceil(r*.1)), s-=Math.max(0, Math.ceil(s*.1)), o=this.getContrastRatio(new BL(new Sa(i, r, s)));
    return new BL(new Sa(i, r, s))
  }
  increaseRelativeLuminace(e, t){
    let{
      r:i,g:r,b:s
    }
    =e.rgba, o=this.getContrastRatio(e);
    for(;
    o<t&&(i<255||r<255||s<255);
    )i=Math.min(255, i+Math.ceil((255-i)*.1)), r=Math.min(255, r+Math.ceil((255-r)*.1)), s=Math.min(255, s+Math.ceil((255-s)*.1)), o=this.getContrastRatio(new BL(new Sa(i, r, s)));
    return new BL(new Sa(i, r, s))
  }
  static _relativeLuminanceForComponent(e){
    const t=e/255;
    return t<=.03928?t/12.92:Math.pow((t+.055)/1.055, 2.4)
  }
  getContrastRatio(e){
    const t=this.getRelativeLuminance(), i=e.getRelativeLuminance();
    return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)
  }
  isDarker(){
    return(this.rgba.r*299+this.rgba.g*587+this.rgba.b*114)/1e3<128
  }
  isLighter(){
    return(this.rgba.r*299+this.rgba.g*587+this.rgba.b*114)/1e3>=128
  }
  isLighterThan(e){
    const t=this.getRelativeLuminance(), i=e.getRelativeLuminance();
    return t>i
  }
  isDarkerThan(e){
    const t=this.getRelativeLuminance(), i=e.getRelativeLuminance();
    return t<i
  }
  ensureConstrast(e, t){
    const i=this.getRelativeLuminance(), r=e.getRelativeLuminance();
    if(this.getContrastRatio(e)<t){
      if(r<i){
        const l=this.reduceRelativeLuminace(e,t),u=this.getContrastRatio(l);
        if(u<t){
          const d=this.increaseRelativeLuminace(e,t),m=this.getContrastRatio(d);
          return u>m?l:d
        }
        return l
      }
      const o=this.increaseRelativeLuminace(e,t),a=this.getContrastRatio(o);
      if(a<t){
        const l=this.reduceRelativeLuminace(e,t),u=this.getContrastRatio(l);
        return a>u?o:l
      }
      return o
    }
    return e
  }
  lighten(e){
    return new BL(new rVe(this.hsla.h, this.hsla.s, this.hsla.l+this.hsla.l*e, this.hsla.a))
  }
  darken(e){
    return new BL(new rVe(this.hsla.h, this.hsla.s, this.hsla.l-this.hsla.l*e, this.hsla.a))
  }
  transparent(e){
    const{
      r:t,g:i,b:r,a:s
    }
    =this.rgba;
    return new BL(new Sa(t, i, r, s*e))
  }
  isTransparent(){
    return this.rgba.a===0
  }
  isOpaque(){
    return this.rgba.a===1
  }
  opposite(){
    return new BL(new Sa(255-this.rgba.r, 255-this.rgba.g, 255-this.rgba.b, this.rgba.a))
  }
  blend(e){
    const t=e.rgba, i=this.rgba.a, r=t.a, s=i+r*(1-i);
    if(s<1e-6)return BL.transparent;
    const o=this.rgba.r*i/s+t.r*r*(1-i)/s, a=this.rgba.g*i/s+t.g*r*(1-i)/s, l=this.rgba.b*i/s+t.b*r*(1-i)/s;
    return new BL(new Sa(o, a, l, s))
  }
  makeOpaque(e){
    if(this.isOpaque()||e.rgba.a!==1)return this;
    const{
      r:t,g:i,b:r,a:s
    }
    =this.rgba;
    return new BL(new Sa(e.rgba.r-s*(e.rgba.r-t), e.rgba.g-s*(e.rgba.g-i), e.rgba.b-s*(e.rgba.b-r), 1))
  }
  flatten(...e){
    const t=e.reduceRight((i, r)=>BL._flatten(r, i));
    return BL._flatten(this, t)
  }
  static _flatten(e, t){
    const i=1-e.rgba.a;
    return new BL(new Sa(i*t.rgba.r+e.rgba.a*e.rgba.r, i*t.rgba.g+e.rgba.a*e.rgba.g, i*t.rgba.b+e.rgba.a*e.rgba.b))
  }
  toString(){
    return this._toString||(this._toString=BL.Format.CSS.format(this)), this._toString
  }
  toNumber32Bit(){
    return this._toNumber32Bit||(this._toNumber32Bit=(this.rgba.r<<24|this.rgba.g<<16|this.rgba.b<<8|this.rgba.a*255<<0)>>>0), this._toNumber32Bit
  }
  static getLighterColor(e, t, i){
    if(e.isLighterThan(t))return e;
    i=i||.5;
    const r=e.getRelativeLuminance(), s=t.getRelativeLuminance();
    return i=i*(s-r)/s, e.lighten(i)
  }
  static getDarkerColor(e, t, i){
    if(e.isDarkerThan(t))return e;
    i=i||.5;
    const r=e.getRelativeLuminance(), s=t.getRelativeLuminance();
    return i=i*(r-s)/r, e.darken(i)
  }
  static{
    this.white=new BL(new Sa(255, 255, 255, 1))
  }
  static{
    this.black=new BL(new Sa(0, 0, 0, 1))
  }
  static{
    this.red=new BL(new Sa(255, 0, 0, 1))
  }
  static{
    this.blue=new BL(new Sa(0, 0, 255, 1))
  }
  static{
    this.green=new BL(new Sa(0, 255, 0, 1))
  }
  static{
    this.cyan=new BL(new Sa(0, 255, 255, 1))
  }
  static{
    this.lightgrey=new BL(new Sa(211, 211, 211, 1))
  }
  static{
    this.transparent=new BL(new Sa(0, 0, 0, 0))
  }
}, (function(n){
  let e;
  (function(t){
    let i;
    (function(r){
      function s(C){
        return C.rgba.a===1?`rgb(${C.rgba.r}, ${C.rgba.g}, ${C.rgba.b})`:n.Format.CSS.formatRGBA(C)
      }
      r.formatRGB=s;
      function o(C){
        return`rgba(${C.rgba.r}, ${C.rgba.g}, ${C.rgba.b}, ${+C.rgba.a.toFixed(2)})`
      }
      r.formatRGBA=o;
      function a(C){
        return C.hsla.a===1?`hsl(${C.hsla.h}, ${(C.hsla.s*100).toFixed(2)}%, ${(C.hsla.l*100).toFixed(2)}%)`:n.Format.CSS.formatHSLA(C)
      }
      r.formatHSL=a;
      function l(C){
        return`hsla(${C.hsla.h}, ${(C.hsla.s*100).toFixed(2)}%, ${(C.hsla.l*100).toFixed(2)}%, ${C.hsla.a.toFixed(2)})`
      }
      r.formatHSLA=l;
      function u(C){
        const x=C.toString(16);
        return x.length!==2?"0"+x:x
      }
      function d(C){
        return`#${u(C.rgba.r)}${u(C.rgba.g)}${u(C.rgba.b)}`
      }
      r.formatHex=d;
      function m(C,x=!1){
        return x&&C.rgba.a===1?n.Format.CSS.formatHex(C):`#${u(C.rgba.r)}${u(C.rgba.g)}${u(C.rgba.b)}${u(Math.round(C.rgba.a*255))}`
      }
      r.formatHexA=m;
      function p(C){
        return C.isOpaque()?n.Format.CSS.formatHex(C):n.Format.CSS.formatRGBA(C)
      }
      r.format=p;
      function g(C){
        if(C==="transparent")return n.transparent;
        if(C.startsWith("#"))return A(C);
        if(C.startsWith("rgba(")){
          const x=C.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
          if(!x)throw new Error("Invalid color format "+C);
          const I=parseInt(x.groups?.r??"0"),B=parseInt(x.groups?.g??"0"),R=parseInt(x.groups?.b??"0"),N=parseFloat(x.groups?.a??"0");
          return new n(new Sa(I,B,R,N))
        }
        if(C.startsWith("rgb(")){
          const x=C.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
          if(!x)throw new Error("Invalid color format "+C);
          const I=parseInt(x.groups?.r??"0"),B=parseInt(x.groups?.g??"0"),R=parseInt(x.groups?.b??"0");
          return new n(new Sa(I,B,R))
        }
        return f(C)
      }
      r.parse=g;
      function f(C){
        switch(C){
          case"aliceblue":return new n(new Sa(240,248,255,1));
          case"antiquewhite":return new n(new Sa(250,235,215,1));
          case"aqua":return new n(new Sa(0,255,255,1));
          case"aquamarine":return new n(new Sa(127,255,212,1));
          case"azure":return new n(new Sa(240,255,255,1));
          case"beige":return new n(new Sa(245,245,220,1));
          case"bisque":return new n(new Sa(255,228,196,1));
          case"black":return new n(new Sa(0,0,0,1));
          case"blanchedalmond":return new n(new Sa(255,235,205,1));
          case"blue":return new n(new Sa(0,0,255,1));
          case"blueviolet":return new n(new Sa(138,43,226,1));
          case"brown":return new n(new Sa(165,42,42,1));
          case"burlywood":return new n(new Sa(222,184,135,1));
          case"cadetblue":return new n(new Sa(95,158,160,1));
          case"chartreuse":return new n(new Sa(127,255,0,1));
          case"chocolate":return new n(new Sa(210,105,30,1));
          case"coral":return new n(new Sa(255,127,80,1));
          case"cornflowerblue":return new n(new Sa(100,149,237,1));
          case"cornsilk":return new n(new Sa(255,248,220,1));
          case"crimson":return new n(new Sa(220,20,60,1));
          case"cyan":return new n(new Sa(0,255,255,1));
          case"darkblue":return new n(new Sa(0,0,139,1));
          case"darkcyan":return new n(new Sa(0,139,139,1));
          case"darkgoldenrod":return new n(new Sa(184,134,11,1));
          case"darkgray":return new n(new Sa(169,169,169,1));
          case"darkgreen":return new n(new Sa(0,100,0,1));
          case"darkgrey":return new n(new Sa(169,169,169,1));
          case"darkkhaki":return new n(new Sa(189,183,107,1));
          case"darkmagenta":return new n(new Sa(139,0,139,1));
          case"darkolivegreen":return new n(new Sa(85,107,47,1));
          case"darkorange":return new n(new Sa(255,140,0,1));
          case"darkorchid":return new n(new Sa(153,50,204,1));
          case"darkred":return new n(new Sa(139,0,0,1));
          case"darksalmon":return new n(new Sa(233,150,122,1));
          case"darkseagreen":return new n(new Sa(143,188,143,1));
          case"darkslateblue":return new n(new Sa(72,61,139,1));
          case"darkslategray":return new n(new Sa(47,79,79,1));
          case"darkslategrey":return new n(new Sa(47,79,79,1));
          case"darkturquoise":return new n(new Sa(0,206,209,1));
          case"darkviolet":return new n(new Sa(148,0,211,1));
          case"deeppink":return new n(new Sa(255,20,147,1));
          case"deepskyblue":return new n(new Sa(0,191,255,1));
          case"dimgray":return new n(new Sa(105,105,105,1));
          case"dimgrey":return new n(new Sa(105,105,105,1));
          case"dodgerblue":return new n(new Sa(30,144,255,1));
          case"firebrick":return new n(new Sa(178,34,34,1));
          case"floralwhite":return new n(new Sa(255,250,240,1));
          case"forestgreen":return new n(new Sa(34,139,34,1));
          case"fuchsia":return new n(new Sa(255,0,255,1));
          case"gainsboro":return new n(new Sa(220,220,220,1));
          case"ghostwhite":return new n(new Sa(248,248,255,1));
          case"gold":return new n(new Sa(255,215,0,1));
          case"goldenrod":return new n(new Sa(218,165,32,1));
          case"gray":return new n(new Sa(128,128,128,1));
          case"green":return new n(new Sa(0,128,0,1));
          case"greenyellow":return new n(new Sa(173,255,47,1));
          case"grey":return new n(new Sa(128,128,128,1));
          case"honeydew":return new n(new Sa(240,255,240,1));
          case"hotpink":return new n(new Sa(255,105,180,1));
          case"indianred":return new n(new Sa(205,92,92,1));
          case"indigo":return new n(new Sa(75,0,130,1));
          case"ivory":return new n(new Sa(255,255,240,1));
          case"khaki":return new n(new Sa(240,230,140,1));
          case"lavender":return new n(new Sa(230,230,250,1));
          case"lavenderblush":return new n(new Sa(255,240,245,1));
          case"lawngreen":return new n(new Sa(124,252,0,1));
          case"lemonchiffon":return new n(new Sa(255,250,205,1));
          case"lightblue":return new n(new Sa(173,216,230,1));
          case"lightcoral":return new n(new Sa(240,128,128,1));
          case"lightcyan":return new n(new Sa(224,255,255,1));
          case"lightgoldenrodyellow":return new n(new Sa(250,250,210,1));
          case"lightgray":return new n(new Sa(211,211,211,1));
          case"lightgreen":return new n(new Sa(144,238,144,1));
          case"lightgrey":return new n(new Sa(211,211,211,1));
          case"lightpink":return new n(new Sa(255,182,193,1));
          case"lightsalmon":return new n(new Sa(255,160,122,1));
          case"lightseagreen":return new n(new Sa(32,178,170,1));
          case"lightskyblue":return new n(new Sa(135,206,250,1));
          case"lightslategray":return new n(new Sa(119,136,153,1));
          case"lightslategrey":return new n(new Sa(119,136,153,1));
          case"lightsteelblue":return new n(new Sa(176,196,222,1));
          case"lightyellow":return new n(new Sa(255,255,224,1));
          case"lime":return new n(new Sa(0,255,0,1));
          case"limegreen":return new n(new Sa(50,205,50,1));
          case"linen":return new n(new Sa(250,240,230,1));
          case"magenta":return new n(new Sa(255,0,255,1));
          case"maroon":return new n(new Sa(128,0,0,1));
          case"mediumaquamarine":return new n(new Sa(102,205,170,1));
          case"mediumblue":return new n(new Sa(0,0,205,1));
          case"mediumorchid":return new n(new Sa(186,85,211,1));
          case"mediumpurple":return new n(new Sa(147,112,219,1));
          case"mediumseagreen":return new n(new Sa(60,179,113,1));
          case"mediumslateblue":return new n(new Sa(123,104,238,1));
          case"mediumspringgreen":return new n(new Sa(0,250,154,1));
          case"mediumturquoise":return new n(new Sa(72,209,204,1));
          case"mediumvioletred":return new n(new Sa(199,21,133,1));
          case"midnightblue":return new n(new Sa(25,25,112,1));
          case"mintcream":return new n(new Sa(245,255,250,1));
          case"mistyrose":return new n(new Sa(255,228,225,1));
          case"moccasin":return new n(new Sa(255,228,181,1));
          case"navajowhite":return new n(new Sa(255,222,173,1));
          case"navy":return new n(new Sa(0,0,128,1));
          case"oldlace":return new n(new Sa(253,245,230,1));
          case"olive":return new n(new Sa(128,128,0,1));
          case"olivedrab":return new n(new Sa(107,142,35,1));
          case"orange":return new n(new Sa(255,165,0,1));
          case"orangered":return new n(new Sa(255,69,0,1));
          case"orchid":return new n(new Sa(218,112,214,1));
          case"palegoldenrod":return new n(new Sa(238,232,170,1));
          case"palegreen":return new n(new Sa(152,251,152,1));
          case"paleturquoise":return new n(new Sa(175,238,238,1));
          case"palevioletred":return new n(new Sa(219,112,147,1));
          case"papayawhip":return new n(new Sa(255,239,213,1));
          case"peachpuff":return new n(new Sa(255,218,185,1));
          case"peru":return new n(new Sa(205,133,63,1));
          case"pink":return new n(new Sa(255,192,203,1));
          case"plum":return new n(new Sa(221,160,221,1));
          case"powderblue":return new n(new Sa(176,224,230,1));
          case"purple":return new n(new Sa(128,0,128,1));
          case"rebeccapurple":return new n(new Sa(102,51,153,1));
          case"red":return new n(new Sa(255,0,0,1));
          case"rosybrown":return new n(new Sa(188,143,143,1));
          case"royalblue":return new n(new Sa(65,105,225,1));
          case"saddlebrown":return new n(new Sa(139,69,19,1));
          case"salmon":return new n(new Sa(250,128,114,1));
          case"sandybrown":return new n(new Sa(244,164,96,1));
          case"seagreen":return new n(new Sa(46,139,87,1));
          case"seashell":return new n(new Sa(255,245,238,1));
          case"sienna":return new n(new Sa(160,82,45,1));
          case"silver":return new n(new Sa(192,192,192,1));
          case"skyblue":return new n(new Sa(135,206,235,1));
          case"slateblue":return new n(new Sa(106,90,205,1));
          case"slategray":return new n(new Sa(112,128,144,1));
          case"slategrey":return new n(new Sa(112,128,144,1));
          case"snow":return new n(new Sa(255,250,250,1));
          case"springgreen":return new n(new Sa(0,255,127,1));
          case"steelblue":return new n(new Sa(70,130,180,1));
          case"tan":return new n(new Sa(210,180,140,1));
          case"teal":return new n(new Sa(0,128,128,1));
          case"thistle":return new n(new Sa(216,191,216,1));
          case"tomato":return new n(new Sa(255,99,71,1));
          case"turquoise":return new n(new Sa(64,224,208,1));
          case"violet":return new n(new Sa(238,130,238,1));
          case"wheat":return new n(new Sa(245,222,179,1));
          case"white":return new n(new Sa(255,255,255,1));
          case"whitesmoke":return new n(new Sa(245,245,245,1));
          case"yellow":return new n(new Sa(255,255,0,1));
          case"yellowgreen":return new n(new Sa(154,205,50,1));
          default:return null
        }
      }
      function A(C){
        const x=C.length;
        if(x===0||C.charCodeAt(0)!==35)return null;
        if(x===7){
          const I=16*w(C.charCodeAt(1))+w(C.charCodeAt(2)),B=16*w(C.charCodeAt(3))+w(C.charCodeAt(4)),R=16*w(C.charCodeAt(5))+w(C.charCodeAt(6));
          return new n(new Sa(I,B,R,1))
        }
        if(x===9){
          const I=16*w(C.charCodeAt(1))+w(C.charCodeAt(2)),B=16*w(C.charCodeAt(3))+w(C.charCodeAt(4)),R=16*w(C.charCodeAt(5))+w(C.charCodeAt(6)),N=16*w(C.charCodeAt(7))+w(C.charCodeAt(8));
          return new n(new Sa(I,B,R,N/255))
        }
        if(x===4){
          const I=w(C.charCodeAt(1)),B=w(C.charCodeAt(2)),R=w(C.charCodeAt(3));
          return new n(new Sa(16*I+I,16*B+B,16*R+R))
        }
        if(x===5){
          const I=w(C.charCodeAt(1)),B=w(C.charCodeAt(2)),R=w(C.charCodeAt(3)),N=w(C.charCodeAt(4));
          return new n(new Sa(16*I+I,16*B+B,16*R+R,(16*N+N)/255))
        }
        return null
      }
      r.parseHex=A;
      function w(C){
        switch(C){
          case 48:return 0;
          case 49:return 1;
          case 50:return 2;
          case 51:return 3;
          case 52:return 4;
          case 53:return 5;
          case 54:return 6;
          case 55:return 7;
          case 56:return 8;
          case 57:return 9;
          case 97:return 10;
          case 65:return 10;
          case 98:return 11;
          case 66:return 11;
          case 99:return 12;
          case 67:return 12;
          case 100:return 13;
          case 68:return 13;
          case 101:return 14;
          case 69:return 14;
          case 102:return 15;
          case 70:return 15
        }
        return 0
      }
    })(i=t.CSS||(t.CSS={
      
    }))
  })(e=n.Format||(n.Format={
    
  }))
})(Xr||(Xr={
  
}))
}
});
function YBe(n){
  return`--vscode-${n.replace(/\./g,"-")}`
}
function zo(n){
  return`var(${YBe(n)})`
}
function oft(n, e){
  return`var(${YBe(n)}, ${e})`
}
function $rA(n){
  return n!==null&&typeof n=="object"&&"light"in n&&"dark"in n
}
function Rn(n, e, t, i, r){
  return Z4t.registerColor(n, e, t, i, r)
}
function S4o(){
  return Z4t
}
function qrA(n, e){
  switch(n.op){
    case 0:return Qbe(n.value, e)?.darken(n.factor);
    case 1:return Qbe(n.value, e)?.lighten(n.factor);
    case 2:return Qbe(n.value, e)?.transparent(n.factor);
    case 3:{
      const t=Qbe(n.background,e);
      return t?Qbe(n.value,e)?.makeOpaque(t):Qbe(n.value,e)
    }
    case 4:for(const t of n.values){
      const i=Qbe(t,e);
      if(i)return i
    }
    return;
    case 6:return Qbe(e.defines(n.if)?n.then:n.else, e);
    case 5:{
      const t=Qbe(n.value,e);
      if(!t)return;
      const i=Qbe(n.background,e);
      return i?t.isDarkerThan(i)?Xr.getLighterColor(t,i,n.factor).transparent(n.transparency):Xr.getDarkerColor(t,i,n.factor).transparent(n.transparency):t.transparent(n.factor*n.transparency)
    }
    default:throw QN(n)
  }
}
function gF(n, e){
  return{
    op:0, value:n, factor:e
  }
}
function xde(n, e){
  return{
    op:1, value:n, factor:e
  }
}
function rl(n, e){
  return{
    op:2, value:n, factor:e
  }
}
function K4t(n, e){
  return{
    op:3, value:n, background:e
  }
}
function D4n(...n){
  return{
    op:4, values:n
  }
}
function B4n(n, e, t){
  return{
    op:6, if:n, then:e, else:t
  }
}
function Zlh(n, e, t, i){
  return{
    op:5, value:n, background:e, factor:t, transparency:i
  }
}
function Qbe(n, e){
  if(n!==null){
    if(typeof n=="string")return n[0]==="#"?Xr.fromHex(n):e.getColor(n);
    if(n instanceof Xr)return n;
    if(typeof n=="object")return qrA(n, e)
  }
}
var Xlh, Y4t, R4n, euh, Z4t, X4t, u1c, d1c, XP=