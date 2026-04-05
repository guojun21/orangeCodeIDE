// Module: out-build/vs/base/browser/dompurify/dompurify.js
// Offset: 455360 (bundle byte offset)
// Size: 9713 bytes

({
  entries:_Cc, setPrototypeOf:CCc, isFrozen:Grh, getPrototypeOf:Wrh, getOwnPropertyDescriptor:Qrh
}
=Object), {
  freeze:kY, seal:Ade, create:SCc
}
=Object, {
  apply:A2o, construct:y2o
}
=typeof Reflect<"u"&&Reflect, kY||(kY=function(e){
  return e
}), Ade||(Ade=function(e){
  return e
}), A2o||(A2o=function(e, t, i){
  return e.apply(t, i)
}), y2o||(y2o=function(e, t){
  return new e(...t)
}), bFn=vde(Array.prototype.forEach), kCc=vde(Array.prototype.pop), XFt=vde(Array.prototype.push), vFn=vde(String.prototype.toLowerCase), w2o=vde(String.prototype.toString), ECc=vde(String.prototype.match), e4t=vde(String.prototype.replace), jrh=vde(String.prototype.indexOf), zrh=vde(String.prototype.trim), Bbe=vde(Object.prototype.hasOwnProperty), EY=vde(RegExp.prototype.test), t4t=AnA(TypeError), xCc=kY(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _2o=kY(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), C2o=kY(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Vrh=kY(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), S2o=kY(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Krh=kY(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), TCc=kY(["#text"]), ICc=kY(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), k2o=kY(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), DCc=kY(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), AFn=kY(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Yrh=Ade(/\{
  \{
    [\w\W]*|[\w\W]*\
  }
  \
}
/gm), Zrh=Ade(/<%[\w\W]*|[\w\W]*%>/gm), Xrh=Ade(/\${
  [\w\W]*
}
/gm), esh=Ade(/^data-[\-\w.\u00B7-\uFFFF]/), tsh=Ade(/^aria-[\-\w]+$/), BCc=Ade(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), nsh=Ade(/^(?:\w+script|data):/i), ish=Ade(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), RCc=Ade(/^html$/i), rsh=Ade(/^[a-z][.\w]*(-[.\w]+)+$/i), PCc=Object.freeze({
  __proto__:null, MUSTACHE_EXPR:Yrh, ERB_EXPR:Zrh, TMPLIT_EXPR:Xrh, DATA_ATTR:esh, ARIA_ATTR:tsh, IS_ALLOWED_URI:BCc, IS_SCRIPT_OR_DATA:nsh, ATTR_WHITESPACE:ish, DOCTYPE_NAME:RCc, CUSTOM_ELEMENT:rsh
}), n4t={
  element:1, attribute:2, text:3, cdataSection:4, entityReference:5, entityNode:6, progressingInstruction:7, comment:8, document:9, documentType:10, documentFragment:11, notation:12
}, ssh=function(){
  return typeof window>"u"?null:window
}, osh=function(e, t){
  if(typeof e!="object"||typeof e.createPolicy!="function")return null;
  let i=null;
  const r="data-tt-policy-suffix";
  t&&t.hasAttribute(r)&&(i=t.getAttribute(r));
  const s="dompurify"+(i?"#"+i:"");
  try{
    return e.createPolicy(s, {
      createHTML(o){
        return o
      },createScriptURL(o){
        return o
      }
    })
  }
  catch{
    return console.warn("TrustedTypes policy "+s+" could not be created."), null
  }
}, Rbe=Jrh()
}
});
function VC(n){
  return _Se(n, 0)
}
function _Se(n, e){
  switch(typeof n){
    case"object":return n===null?b5e(349, e):Array.isArray(n)?_nA(n, e):CnA(n, e);
    case"string":return E2o(n, e);
    case"boolean":return wnA(n, e);
    case"number":return b5e(n, e);
    case"undefined":return b5e(937, e);
    default:return b5e(617, e)
  }
}
function b5e(n, e){
  return(e<<5)-e+n|0
}
function wnA(n, e){
  return b5e(n?433:863, e)
}
function E2o(n, e){
  e=b5e(149417, e);
  for(let t=0, i=n.length;
  t<i;
  t++)e=b5e(n.charCodeAt(t), e);
  return e
}
function _nA(n, e){
  return e=b5e(104579, e), n.reduce((t, i)=>_Se(i, t), e)
}
function CnA(n, e){
  return e=b5e(181387, e), Object.keys(n).sort().reduce((t, i)=>(t=E2o(i, t), _Se(n[i], t)), e)
}
function LCc(n, e, t=32){
  const i=t-e, r=~((1<<i)-1);
  return(n<<e|(r&n)>>>i)>>>0
}
function Fze(n, e=32){
  return n instanceof ArrayBuffer?Array.from(new Uint8Array(n)).map(t=>t.toString(16).padStart(2, "0")).join(""):(n>>>0).toString(16).padStart(e/4, "0")
}
async function x2o(n){
  if(globalThis?.crypto?.subtle){
    const e=Ms.fromString(n, {
      dontUseNodeBuffer:!0
    }).buffer, t=await globalThis.crypto.subtle.digest({
      name:"sha-1"
    }, e);
    return Fze(t)
  }
  else{
    const e=new yde;
    return e.update(n), e.digest()
  }
}
async function yFn(n){
  const t=new TextEncoder().encode(n), i=await crypto.subtle.digest("SHA-256", t);
  return Fze(i)
}
var wFn, ash, yde, iw=