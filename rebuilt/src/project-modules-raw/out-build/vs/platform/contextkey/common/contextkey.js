// Module: out-build/vs/platform/contextkey/common/contextkey.js
// Offset: 616470 (bundle byte offset)
// Size: 20652 bytes

_r(), oa(), QiA(), Wt(), Ht(), _s(), v9=new Map, v9.set("false", !1), v9.set("true", !0), v9.set("isMac", Fs), v9.set("isLinux", xv), v9.set("isWindows", Sc), v9.set("isWeb", Eu), v9.set("isMacNative", Fs&&!Eu), v9.set("isEdge", KMo), v9.set("isFirefox", zMo), v9.set("isChrome", cgt), v9.set("isSafari", VMo), I4t=new Map, kah=Object.prototype.hasOwnProperty, (function(n){
  n[n.False=0]="False", n[n.True=1]="True", n[n.Defined=2]="Defined", n[n.Not=3]="Not", n[n.Equals=4]="Equals", n[n.NotEquals=5]="NotEquals", n[n.And=6]="And", n[n.Regex=7]="Regex", n[n.NotRegex=8]="NotRegex", n[n.Or=9]="Or", n[n.In=10]="In", n[n.NotIn=11]="NotIn", n[n.Greater=12]="Greater", n[n.GreaterEquals=13]="GreaterEquals", n[n.Smaller=14]="Smaller", n[n.SmallerEquals=15]="SmallerEquals", n[n.Function=16]="Function"
})(Eah||(Eah={
  
})), xah={
  regexParsingWithErrorRecovery:!0
}, Tah=_(1818, null), Iah=_(1819, null), Dah=_(1820, null), Akc=_(1821, null), Bah=_(1822, null), Rah=_(1823, null), Pah=_(1824, null), Lah=_(1825, null), Nah=class rNi{
  static{
    this._parseError=new Error
  }
  get lexingErrors(){
    return this._scanner.errors
  }
  get parsingErrors(){
    return this._parsingErrors
  }
  constructor(e=xah){
    this._config=e, this._scanner=new T4t, this._tokens=[], this._current=0, this._parsingErrors=[], this._flagsGYRe=/g|y/g
  }
  parse(e){
    if(e===""){
      this._parsingErrors.push({
        message:Tah,offset:0,lexeme:"",additionalInfo:Iah
      });
      return
    }
    this._tokens=this._scanner.reset(e).scan(), this._current=0, this._parsingErrors=[];
    try{
      const t=this._expr();
      if(!this._isAtEnd()){
        const i=this._peek(),r=i.type===17?Rah:void 0;
        throw this._parsingErrors.push({
          message:Bah,offset:i.offset,lexeme:T4t.getLexeme(i),additionalInfo:r
        }),rNi._parseError
      }
      return t
    }
    catch(t){
      if(t!==rNi._parseError)throw t;
      return
    }
  }
  _expr(){
    return this._or()
  }
  _or(){
    const e=[this._and()];
    for(;
    this._matchOne(16);
    ){
      const t=this._and();
      e.push(t)
    }
    return e.length===1?e[0]:Ee.or(...e)
  }
  _and(){
    const e=[this._term()];
    for(;
    this._matchOne(15);
    ){
      const t=this._term();
      e.push(t)
    }
    return e.length===1?e[0]:Ee.and(...e)
  }
  _term(){
    if(this._matchOne(2)){
      const e=this._peek();
      switch(e.type){
        case 11:return this._advance(),iz.INSTANCE;
        case 12:return this._advance(),BY.INSTANCE;
        case 0:{
          this._advance();
          const t=this._expr();
          return this._consume(1,Akc),t?.negate()
        }
        case 17:return this._advance(),B4t.create(e.lexeme);
        default:throw this._errExpectedButGot("KEY | true | false | '(' expression ')'",e)
      }
    }
    return this._primary()
  }
  _primary(){
    const e=this._peek();
    switch(e.type){
      case 11:return this._advance(),Ee.true();
      case 12:return this._advance(),Ee.false();
      case 0:{
        this._advance();
        const t=this._expr();
        return this._consume(1,Akc),t
      }
      case 17:{
        if(e.lexeme.startsWith("@")){
          this._advance();
          const r=e.lexeme.substring(1);
          if(r.startsWith("!")){
            const o=r.substring(1),a=wah(o);
            if(a)return xFo.createWithoutRegistration(r,()=>!a())
          }
          const s=wah(r)||(()=>!1);
          return xFo.createWithoutRegistration(r,s)
        }
        const t=e.lexeme;
        if(this._advance(),this._matchOne(9)){
          const r=this._peek();
          if(!this._config.regexParsingWithErrorRecovery){
            if(this._advance(),r.type!==10)throw this._errExpectedButGot("REGEX",r);
            const s=r.lexeme,o=s.lastIndexOf("/"),a=o===s.length-1?void 0:this._removeFlagsGY(s.substring(o+1));
            let l;
            try{
              l=new RegExp(s.substring(1,o),a)
            }
            catch{
              throw this._errExpectedButGot("REGEX",r)
            }
            return RFo.create(t,l)
          }
          switch(r.type){
            case 10:case 19:{
              const s=[r.lexeme];
              this._advance();
              let o=this._peek(),a=0;
              for(let p=0;
              p<r.lexeme.length;
              p++)r.lexeme.charCodeAt(p)===40?a++:r.lexeme.charCodeAt(p)===41&&a--;
              for(;
              !this._isAtEnd()&&o.type!==15&&o.type!==16;
              ){
                switch(o.type){
                  case 0:a++;
                  break;
                  case 1:a--;
                  break;
                  case 10:case 18:for(let p=0;
                  p<o.lexeme.length;
                  p++)o.lexeme.charCodeAt(p)===40?a++:r.lexeme.charCodeAt(p)===41&&a--
                }
                if(a<0)break;
                s.push(T4t.getLexeme(o)),this._advance(),o=this._peek()
              }
              const l=s.join(""),u=l.lastIndexOf("/"),d=u===l.length-1?void 0:this._removeFlagsGY(l.substring(u+1));
              let m;
              try{
                m=new RegExp(l.substring(1,u),d)
              }
              catch{
                throw this._errExpectedButGot("REGEX",r)
              }
              return Ee.regex(t,m)
            }
            case 18:{
              const s=r.lexeme;
              this._advance();
              let o=null;
              if(!E6(s)){
                const a=s.indexOf("/"),l=s.lastIndexOf("/");
                if(a!==l&&a>=0){
                  const u=s.slice(a+1,l),d=s[l+1]==="i"?"i":"";
                  try{
                    o=new RegExp(u,d)
                  }
                  catch{
                    throw this._errExpectedButGot("REGEX",r)
                  }
                }
              }
              if(o===null)throw this._errExpectedButGot("REGEX",r);
              return RFo.create(t,o)
            }
            default:throw this._errExpectedButGot("REGEX",this._peek())
          }
        }
        if(this._matchOne(14)){
          this._consume(13,Dah);
          const r=this._value();
          return Ee.notIn(t,r)
        }
        switch(this._peek().type){
          case 3:{
            this._advance();
            const r=this._value();
            if(this._previous().type===18)return Ee.equals(t,r);
            switch(r){
              case"true":return Ee.has(t);
              case"false":return Ee.not(t);
              default:return Ee.equals(t,r)
            }
          }
          case 4:{
            this._advance();
            const r=this._value();
            if(this._previous().type===18)return Ee.notEquals(t,r);
            switch(r){
              case"true":return Ee.not(t);
              case"false":return Ee.has(t);
              default:return Ee.notEquals(t,r)
            }
          }
          case 5:return this._advance(),DFo.create(t,this._value());
          case 6:return this._advance(),BFo.create(t,this._value());
          case 7:return this._advance(),R4t.create(t,this._value());
          case 8:return this._advance(),IFo.create(t,this._value());
          case 13:return this._advance(),Ee.in(t,this._value());
          default:return Ee.has(t)
        }
      }
      case 20:throw this._parsingErrors.push({
        message:Pah,offset:e.offset,lexeme:"",additionalInfo:Lah
      }),rNi._parseError;
      default:throw this._errExpectedButGot(`true | false | KEY 
	| KEY '=~' REGEX 
	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`,this._peek())
    }
  }
  _value(){
    const e=this._peek();
    switch(e.type){
      case 17:case 18:return this._advance(),e.lexeme;
      case 11:return this._advance(),"true";
      case 12:return this._advance(),"false";
      case 13:return this._advance(),"in";
      default:return""
    }
  }
  _removeFlagsGY(e){
    return e.replaceAll(this._flagsGYRe, "")
  }
  _previous(){
    return this._tokens[this._current-1]
  }
  _matchOne(e){
    return this._check(e)?(this._advance(), !0):!1
  }
  _advance(){
    return this._isAtEnd()||this._current++, this._previous()
  }
  _consume(e, t){
    if(this._check(e))return this._advance();
    throw this._errExpectedButGot(t, this._peek())
  }
  _errExpectedButGot(e, t, i){
    const r=_(1826, null, e, T4t.getLexeme(t)), s=t.offset, o=T4t.getLexeme(t);
    return this._parsingErrors.push({
      message:r,offset:s,lexeme:o,additionalInfo:i
    }), rNi._parseError
  }
  _check(e){
    return this._peek().type===e
  }
  _peek(){
    return this._tokens[this._current]
  }
  _isAtEnd(){
    return this._peek().type===20
  }
}, Ee=class{
  static false(){
    return iz.INSTANCE
  }
  static true(){
    return BY.INSTANCE
  }
  static has(n){
    return D4t.create(n)
  }
  static equals(n, e){
    return Kgt.create(n, e)
  }
  static notEquals(n, e){
    return TFo.create(n, e)
  }
  static regex(n, e){
    return RFo.create(n, e)
  }
  static in(n, e){
    return ykc.create(n, e)
  }
  static notIn(n, e){
    return wkc.create(n, e)
  }
  static not(n){
    return B4t.create(n)
  }
  static and(...n){
    return _kc.create(n, null, !0)
  }
  static or(...n){
    return PFo.create(n, null, !0)
  }
  static greater(n, e){
    return R4t.create(n, e)
  }
  static greaterEquals(n, e){
    return IFo.create(n, e)
  }
  static smaller(n, e){
    return DFo.create(n, e)
  }
  static smallerEquals(n, e){
    return BFo.create(n, e)
  }
  static function(n, e){
    return xFo.create(n, e)
  }
  static{
    this._parser=new Nah({
      regexParsingWithErrorRecovery:!1
    })
  }
  static deserialize(n){
    return n==null?void 0:this._parser.parse(n)
  }
}, xFo=class HGa{
  static create(e, t){
    return jiA(e, t), new HGa(e, t)
  }
  static createWithoutRegistration(e, t){
    return new HGa(e, t)
  }
  constructor(e, t){
    this.type=16, this.id=e, this.fn=t
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:bkc(this.id, e.id)
  }
  equals(e){
    return e.type===this.type&&this.id===e.id
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    return this.fn()
  }
  serialize(){
    return`@${this.id}`
  }
  keys(){
    return[]
  }
  map(e){
    return this
  }
  negate(){
    return HGa.createWithoutRegistration(`!${this.id}`, ()=>!this.fn())
  }
}, iz=class dJb{
  static{
    this.INSTANCE=new dJb
  }
  constructor(){
    this.type=0
  }
  cmp(e){
    return this.type-e.type
  }
  equals(e){
    return e.type===this.type
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    return!1
  }
  serialize(){
    return"false"
  }
  keys(){
    return[]
  }
  map(e){
    return this
  }
  negate(){
    return BY.INSTANCE
  }
}, BY=class hJb{
  static{
    this.INSTANCE=new hJb
  }
  constructor(){
    this.type=1
  }
  cmp(e){
    return this.type-e.type
  }
  equals(e){
    return e.type===this.type
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    return!0
  }
  serialize(){
    return"true"
  }
  keys(){
    return[]
  }
  map(e){
    return this
  }
  negate(){
    return iz.INSTANCE
  }
}, D4t=class mJb{
  static create(e, t=null){
    const i=v9.get(e);
    return typeof i=="boolean"?i?BY.INSTANCE:iz.INSTANCE:new mJb(e, t)
  }
  constructor(e, t){
    this.key=e, this.negated=t, this.type=2
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:bkc(this.key, e.key)
  }
  equals(e){
    return e.type===this.type?this.key===e.key:!1
  }
  substituteConstants(){
    const e=v9.get(this.key);
    return typeof e=="boolean"?e?BY.INSTANCE:iz.INSTANCE:this
  }
  evaluate(e){
    return!!e.getValue(this.key)
  }
  serialize(){
    return this.key
  }
  keys(){
    return[this.key]
  }
  map(e){
    return e.mapDefined(this.key)
  }
  negate(){
    return this.negated||(this.negated=B4t.create(this.key, this)), this.negated
  }
}, Kgt=class pJb{
  static create(e, t, i=null){
    if(typeof t=="boolean")return t?D4t.create(e, i):B4t.create(e, i);
    const r=v9.get(e);
    return typeof r=="boolean"?t===(r?"true":"false")?BY.INSTANCE:iz.INSTANCE:new pJb(e, t, i)
  }
  constructor(e, t, i){
    this.key=e, this.value=t, this.negated=i, this.type=4
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:Vgt(this.key, this.value, e.key, e.value)
  }
  equals(e){
    return e.type===this.type?this.key===e.key&&this.value===e.value:!1
  }
  substituteConstants(){
    const e=v9.get(this.key);
    if(typeof e=="boolean"){
      const t=e?"true":"false";
      return this.value===t?BY.INSTANCE:iz.INSTANCE
    }
    return this
  }
  evaluate(e){
    return e.getValue(this.key)==this.value
  }
  serialize(){
    return`${this.key} == '${this.value}'`
  }
  keys(){
    return[this.key]
  }
  map(e){
    return e.mapEquals(this.key, this.value)
  }
  negate(){
    return this.negated||(this.negated=TFo.create(this.key, this.value, this)), this.negated
  }
}, ykc=class gJb{
  static create(e, t){
    return new gJb(e, t)
  }
  constructor(e, t){
    this.key=e, this.valueKey=t, this.type=10, this.negated=null
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:Vgt(this.key, this.valueKey, e.key, e.valueKey)
  }
  equals(e){
    return e.type===this.type?this.key===e.key&&this.valueKey===e.valueKey:!1
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    const t=e.getValue(this.valueKey), i=e.getValue(this.key);
    return Array.isArray(t)?t.includes(i):typeof i=="string"&&typeof t=="object"&&t!==null?kah.call(t, i):!1
  }
  serialize(){
    return`${this.key} in '${this.valueKey}'`
  }
  keys(){
    return[this.key, this.valueKey]
  }
  map(e){
    return e.mapIn(this.key, this.valueKey)
  }
  negate(){
    return this.negated||(this.negated=wkc.create(this.key, this.valueKey)), this.negated
  }
}, wkc=class fJb{
  static create(e, t){
    return new fJb(e, t)
  }
  constructor(e, t){
    this.key=e, this.valueKey=t, this.type=11, this._negated=ykc.create(e, t)
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:this._negated.cmp(e._negated)
  }
  equals(e){
    return e.type===this.type?this._negated.equals(e._negated):!1
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    return!this._negated.evaluate(e)
  }
  serialize(){
    return`${this.key} not in '${this.valueKey}'`
  }
  keys(){
    return this._negated.keys()
  }
  map(e){
    return e.mapNotIn(this.key, this.valueKey)
  }
  negate(){
    return this._negated
  }
}, TFo=class bJb{
  static create(e, t, i=null){
    if(typeof t=="boolean")return t?B4t.create(e, i):D4t.create(e, i);
    const r=v9.get(e);
    return typeof r=="boolean"?t===(r?"true":"false")?iz.INSTANCE:BY.INSTANCE:new bJb(e, t, i)
  }
  constructor(e, t, i){
    this.key=e, this.value=t, this.negated=i, this.type=5
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:Vgt(this.key, this.value, e.key, e.value)
  }
  equals(e){
    return e.type===this.type?this.key===e.key&&this.value===e.value:!1
  }
  substituteConstants(){
    const e=v9.get(this.key);
    if(typeof e=="boolean"){
      const t=e?"true":"false";
      return this.value===t?iz.INSTANCE:BY.INSTANCE
    }
    return this
  }
  evaluate(e){
    return e.getValue(this.key)!=this.value
  }
  serialize(){
    return`${this.key} != '${this.value}'`
  }
  keys(){
    return[this.key]
  }
  map(e){
    return e.mapNotEquals(this.key, this.value)
  }
  negate(){
    return this.negated||(this.negated=Kgt.create(this.key, this.value, this)), this.negated
  }
}, B4t=class vJb{
  static create(e, t=null){
    const i=v9.get(e);
    return typeof i=="boolean"?i?iz.INSTANCE:BY.INSTANCE:new vJb(e, t)
  }
  constructor(e, t){
    this.key=e, this.negated=t, this.type=3
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:bkc(this.key, e.key)
  }
  equals(e){
    return e.type===this.type?this.key===e.key:!1
  }
  substituteConstants(){
    const e=v9.get(this.key);
    return typeof e=="boolean"?e?iz.INSTANCE:BY.INSTANCE:this
  }
  evaluate(e){
    return!e.getValue(this.key)
  }
  serialize(){
    return`!${this.key}`
  }
  keys(){
    return[this.key]
  }
  map(e){
    return e.mapNot(this.key)
  }
  negate(){
    return this.negated||(this.negated=D4t.create(this.key, this)), this.negated
  }
}, R4t=class AJb{
  static create(e, t, i=null){
    return EFo(t, r=>new AJb(e, r, i))
  }
  constructor(e, t, i){
    this.key=e, this.value=t, this.negated=i, this.type=12
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:Vgt(this.key, this.value, e.key, e.value)
  }
  equals(e){
    return e.type===this.type?this.key===e.key&&this.value===e.value:!1
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    return typeof this.value=="string"?!1:parseFloat(e.getValue(this.key))>this.value
  }
  serialize(){
    return`${this.key} > ${this.value}`
  }
  keys(){
    return[this.key]
  }
  map(e){
    return e.mapGreater(this.key, this.value)
  }
  negate(){
    return this.negated||(this.negated=BFo.create(this.key, this.value, this)), this.negated
  }
}, IFo=class yJb{
  static create(e, t, i=null){
    return EFo(t, r=>new yJb(e, r, i))
  }
  constructor(e, t, i){
    this.key=e, this.value=t, this.negated=i, this.type=13
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:Vgt(this.key, this.value, e.key, e.value)
  }
  equals(e){
    return e.type===this.type?this.key===e.key&&this.value===e.value:!1
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    return typeof this.value=="string"?!1:parseFloat(e.getValue(this.key))>=this.value
  }
  serialize(){
    return`${this.key} >= ${this.value}`
  }
  keys(){
    return[this.key]
  }
  map(e){
    return e.mapGreaterEquals(this.key, this.value)
  }
  negate(){
    return this.negated||(this.negated=DFo.create(this.key, this.value, this)), this.negated
  }
}, DFo=class wJb{
  static create(e, t, i=null){
    return EFo(t, r=>new wJb(e, r, i))
  }
  constructor(e, t, i){
    this.key=e, this.value=t, this.negated=i, this.type=14
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:Vgt(this.key, this.value, e.key, e.value)
  }
  equals(e){
    return e.type===this.type?this.key===e.key&&this.value===e.value:!1
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    return typeof this.value=="string"?!1:parseFloat(e.getValue(this.key))<this.value
  }
  serialize(){
    return`${this.key} < ${this.value}`
  }
  keys(){
    return[this.key]
  }
  map(e){
    return e.mapSmaller(this.key, this.value)
  }
  negate(){
    return this.negated||(this.negated=IFo.create(this.key, this.value, this)), this.negated
  }
}, BFo=class _Jb{
  static create(e, t, i=null){
    return EFo(t, r=>new _Jb(e, r, i))
  }
  constructor(e, t, i){
    this.key=e, this.value=t, this.negated=i, this.type=15
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:Vgt(this.key, this.value, e.key, e.value)
  }
  equals(e){
    return e.type===this.type?this.key===e.key&&this.value===e.value:!1
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    return typeof this.value=="string"?!1:parseFloat(e.getValue(this.key))<=this.value
  }
  serialize(){
    return`${this.key} <= ${this.value}`
  }
  keys(){
    return[this.key]
  }
  map(e){
    return e.mapSmallerEquals(this.key, this.value)
  }
  negate(){
    return this.negated||(this.negated=R4t.create(this.key, this.value, this)), this.negated
  }
}, RFo=class CJb{
  static create(e, t){
    return new CJb(e, t)
  }
  constructor(e, t){
    this.key=e, this.regexp=t, this.type=7, this.negated=null
  }
  cmp(e){
    if(e.type!==this.type)return this.type-e.type;
    if(this.key<e.key)return-1;
    if(this.key>e.key)return 1;
    const t=this.regexp?this.regexp.source:"", i=e.regexp?e.regexp.source:"";
    return t<i?-1:t>i?1:0
  }
  equals(e){
    if(e.type===this.type){
      const t=this.regexp?this.regexp.source:"",i=e.regexp?e.regexp.source:"";
      return this.key===e.key&&t===i
    }
    return!1
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    const t=e.getValue(this.key);
    return this.regexp?this.regexp.test(t):!1
  }
  serialize(){
    const e=this.regexp?`/${this.regexp.source}/${this.regexp.flags}`:"/invalid/";
    return`${this.key} =~ ${e}`
  }
  keys(){
    return[this.key]
  }
  map(e){
    return e.mapRegex(this.key, this.regexp)
  }
  negate(){
    return this.negated||(this.negated=Mah.create(this)), this.negated
  }
}, Mah=class oad{
  static create(e){
    return new oad(e)
  }
  constructor(e){
    this._actual=e, this.type=8
  }
  cmp(e){
    return e.type!==this.type?this.type-e.type:this._actual.cmp(e._actual)
  }
  equals(e){
    return e.type===this.type?this._actual.equals(e._actual):!1
  }
  substituteConstants(){
    return this
  }
  evaluate(e){
    return!this._actual.evaluate(e)
  }
  serialize(){
    return`!(${this._actual.serialize()})`
  }
  keys(){
    return this._actual.keys()
  }
  map(e){
    return new oad(this._actual.map(e))
  }
  negate(){
    return this._actual
  }
}, _kc=class BCn{
  static create(e, t, i){
    return BCn._normalizeArr(e, t, i)
  }
  constructor(e, t){
    this.expr=e, this.negated=t, this.type=6
  }
  cmp(e){
    if(e.type!==this.type)return this.type-e.type;
    if(this.expr.length<e.expr.length)return-1;
    if(this.expr.length>e.expr.length)return 1;
    for(let t=0, i=this.expr.length;
    t<i;
    t++){
      const r=r4n(this.expr[t],e.expr[t]);
      if(r!==0)return r
    }
    return 0
  }
  equals(e){
    if(e.type===this.type){
      if(this.expr.length!==e.expr.length)return!1;
      for(let t=0,i=this.expr.length;
      t<i;
      t++)if(!this.expr[t].equals(e.expr[t]))return!1;
      return!0
    }
    return!1
  }
  substituteConstants(){
    const e=_ah(this.expr);
    return e===this.expr?this:BCn.create(e, this.negated, !1)
  }
  evaluate(e){
    for(let t=0, i=this.expr.length;
    t<i;
    t++)if(!this.expr[t].evaluate(e))return!1;
    return!0
  }
  static _normalizeArr(e, t, i){
    const r=[];
    let s=!1;
    for(const o of e)if(o){
      if(o.type===1){
        s=!0;
        continue
      }
      if(o.type===0)return iz.INSTANCE;
      if(o.type===6){
        r.push(...o.expr);
        continue
      }
      r.push(o)
    }
    if(r.length===0&&s)return BY.INSTANCE;
    if(r.length!==0){
      if(r.length===1)return r[0];
      r.sort(r4n);
      for(let o=1;
      o<r.length;
      o++)r[o-1].equals(r[o])&&(r.splice(o,1),o--);
      if(r.length===1)return r[0];
      for(;
      r.length>1;
      ){
        const o=r[r.length-1];
        if(o.type!==9)break;
        r.pop();
        const a=r.pop(),l=r.length===0,u=PFo.create(o.expr.map(d=>BCn.create([d,a],null,i)),null,l);
        u&&(r.push(u),r.sort(r4n))
      }
      if(r.length===1)return r[0];
      if(i){
        for(let o=0;
        o<r.length;
        o++)for(let a=o+1;
        a<r.length;
        a++)if(r[o].negate().equals(r[a]))return iz.INSTANCE;
        if(r.length===1)return r[0]
      }
      return new BCn(r,t)
    }
  }
  serialize(){
    return this.expr.map(e=>e.serialize()).join(" && ")
  }
  keys(){
    const e=[];
    for(const t of this.expr)e.push(...t.keys());
    return e
  }
  map(e){
    return new BCn(this.expr.map(t=>t.map(e)), null)
  }
  negate(){
    if(!this.negated){
      const e=[];
      for(const t of this.expr)e.push(t.negate());
      this.negated=PFo.create(e,this,!0)
    }
    return this.negated
  }
}, PFo=class LDt{
  static create(e, t, i){
    return LDt._normalizeArr(e, t, i)
  }
  constructor(e, t){
    this.expr=e, this.negated=t, this.type=9
  }
  cmp(e){
    if(e.type!==this.type)return this.type-e.type;
    if(this.expr.length<e.expr.length)return-1;
    if(this.expr.length>e.expr.length)return 1;
    for(let t=0, i=this.expr.length;
    t<i;
    t++){
      const r=r4n(this.expr[t],e.expr[t]);
      if(r!==0)return r
    }
    return 0
  }
  equals(e){
    if(e.type===this.type){
      if(this.expr.length!==e.expr.length)return!1;
      for(let t=0,i=this.expr.length;
      t<i;
      t++)if(!this.expr[t].equals(e.expr[t]))return!1;
      return!0
    }
    return!1
  }
  substituteConstants(){
    const e=_ah(this.expr);
    return e===this.expr?this:LDt.create(e, this.negated, !1)
  }
  evaluate(e){
    for(let t=0, i=this.expr.length;
    t<i;
    t++)if(this.expr[t].evaluate(e))return!0;
    return!1
  }
  static _normalizeArr(e, t, i){
    let r=[], s=!1;
    if(e){
      for(let o=0,a=e.length;
      o<a;
      o++){
        const l=e[o];
        if(l){
          if(l.type===0){
            s=!0;
            continue
          }
          if(l.type===1)return BY.INSTANCE;
          if(l.type===9){
            r=r.concat(l.expr);
            continue
          }
          r.push(l)
        }
      }
      if(r.length===0&&s)return iz.INSTANCE;
      r.sort(r4n)
    }
    if(r.length!==0){
      if(r.length===1)return r[0];
      for(let o=1;
      o<r.length;
      o++)r[o-1].equals(r[o])&&(r.splice(o,1),o--);
      if(r.length===1)return r[0];
      if(i){
        for(let o=0;
        o<r.length;
        o++)for(let a=o+1;
        a<r.length;
        a++)if(r[o].negate().equals(r[a]))return BY.INSTANCE;
        if(r.length===1)return r[0]
      }
      return new LDt(r,t)
    }
  }
  serialize(){
    return this.expr.map(e=>e.serialize()).join(" || ")
  }
  keys(){
    const e=[];
    for(const t of this.expr)e.push(...t.keys());
    return e
  }
  map(e){
    return new LDt(this.expr.map(t=>t.map(e)), null)
  }
  negate(){
    if(!this.negated){
      const e=[];
      for(const t of this.expr)e.push(t.negate());
      for(;
      e.length>1;
      ){
        const t=e.shift(),i=e.shift(),r=[];
        for(const s of Sah(t))for(const o of Sah(i))r.push(_kc.create([s,o],null,!1));
        e.unshift(LDt.create(r,null,!1))
      }
      this.negated=LDt.create(e,this,!0)
    }
    return this.negated
  }
}, Sn=class JGa extends D4t{
  static{
    this._info=[]
  }
  static all(){
    return JGa._info.values()
  }
  constructor(e, t, i){
    super(e, null), this._defaultValue=t, typeof i=="object"?JGa._info.push({
      ...i,key:e
    }):i!==!0&&JGa._info.push({
      key:e,description:i,type:t!=null?typeof t:void 0
    })
  }
  bindTo(e){
    return e.createKey(this.key, this._defaultValue)
  }
  getValue(e){
    return e.getContextKeyValue(this.key)
  }
  toNegated(){
    return this.negate()
  }
  isEqualTo(e){
    return Kgt.create(this.key, e)
  }
  notEqualsTo(e){
    return TFo.create(this.key, e)
  }
  greater(e){
    return R4t.create(this.key, e)
  }
}, wi=xi("contextKeyService")
}
}), Fah, Di, Ws=