// Module: out-build/vs/workbench/services/textMate/browser/textMateTokenizationFeature.js
// Offset: 32780830 (bundle byte offset)
// Size: 3370 bytes

Wt(), obn=xi("textMateTokenizationFeature")
}
});
function qyu(n, e){
  let t=n.length, i=e;
  const r=[];
  for(let o=t-1;
  o>=0;
  o--){
    const a=n.charCodeAt(o);
    if(a===Wyu||a===J5f){
      const l=n.substring(o+1,t);
      t=o,a===Wyu?i=l:r.push(l)
    }
  }
  return{
    type:n.substring(0, t), modifiers:r, language:i
  }
}
function Yly(){
  const n=new H5f;
  function e(i, r, s=[], o, a){
    return n.registerTokenType(i, r, o, a), s&&t(i, s), i
  }
  function t(i, r){
    try{
      const s=n.parseTokenSelector(i);
      n.registerTokenStyleDefault(s,{
        scopesToProbe:r
      })
    }
    catch(s){
      console.log(s)
    }
  }
  return e("comment", _(2562, null), [["comment"]]), e("string", _(2563, null), [["string"]]), e("keyword", _(2564, null), [["keyword.control"]]), e("number", _(2565, null), [["constant.numeric"]]), e("regexp", _(2566, null), [["constant.regexp"]]), e("operator", _(2567, null), [["keyword.operator"]]), e("namespace", _(2568, null), [["entity.name.namespace"]]), e("type", _(2569, null), [["entity.name.type"], ["support.type"]]), e("struct", _(2570, null), [["entity.name.type.struct"]]), e("class", _(2571, null), [["entity.name.type.class"], ["support.class"]]), e("interface", _(2572, null), [["entity.name.type.interface"]]), e("enum", _(2573, null), [["entity.name.type.enum"]]), e("typeParameter", _(2574, null), [["entity.name.type.parameter"]]), e("function", _(2575, null), [["entity.name.function"], ["support.function"]]), e("member", _(2576, null), [], "method", "Deprecated use `method` instead"), e("method", _(2577, null), [["entity.name.function.member"], ["support.function"]]), e("macro", _(2578, null), [["entity.name.function.preprocessor"]]), e("variable", _(2579, null), [["variable.other.readwrite"], ["entity.name.variable"]]), e("parameter", _(2580, null), [["variable.parameter"]]), e("property", _(2581, null), [["variable.other.property"]]), e("enumMember", _(2582, null), [["variable.other.enummember"]]), e("event", _(2583, null), [["variable.other.event"]]), e("decorator", _(2584, null), [["entity.name.decorator"], ["entity.name.function"]]), e("label", _(2585, null), void 0), n.registerTokenModifier("declaration", _(2586, null), void 0), n.registerTokenModifier("documentation", _(2587, null), void 0), n.registerTokenModifier("static", _(2588, null), void 0), n.registerTokenModifier("abstract", _(2589, null), void 0), n.registerTokenModifier("deprecated", _(2590, null), void 0), n.registerTokenModifier("modification", _(2591, null), void 0), n.registerTokenModifier("async", _(2592, null), void 0), n.registerTokenModifier("readonly", _(2593, null), void 0), t("variable.readonly", [["variable.other.constant"]]), t("property.readonly", [["variable.other.constant.property"]]), t("type.defaultLibrary", [["support.type"]]), t("class.defaultLibrary", [["support.class"]]), t("interface.defaultLibrary", [["support.class"]]), t("variable.defaultLibrary", [["support.variable"], ["support.other.variable"]]), t("variable.defaultLibrary.readonly", [["support.constant"]]), t("property.defaultLibrary", [["support.variable.property"]]), t("property.defaultLibrary.readonly", [["support.constant.property"]]), t("function.defaultLibrary", [["support.function"]]), t("member.defaultLibrary", [["support.function"]]), n
}
function F5f(){
  return _Si
}
function Hyu(n, e){
  return{
    description:n, deprecationMessage:e, defaultSnippets:[{
      body:"${1:#ff0000}"
    }
    ], anyOf:[{
      type:"string",format:"color-hex"
    }, {
      $ref:"#/definitions/style"
    }
    ]
  }
}
var O5f, Jyu, Gyu, ySi, g7e, U5f, $5f, fxe, wSi, q5f, H5f, Wyu, J5f, _Si, CSi, Qyu, jyu, SSi=