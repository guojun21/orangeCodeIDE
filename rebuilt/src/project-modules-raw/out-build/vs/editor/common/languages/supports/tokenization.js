// Module: out-build/vs/editor/common/languages/supports/tokenization.js
// Offset: 33067745 (bundle byte offset)
// Size: 45558 bytes

xf(), Y9f=/\b(comment|string|regex|regexp)\b/
}
});
async function Luy(n){
  const t=navigator.userAgent.indexOf("Chrome")>=0, i=new TextEncoder, r=new TextDecoder;
  function s(){
    let gt, At;
    return{
      promise:new Promise((ze,Yt)=>{
        gt=ze,At=Yt
      }),resolve:gt,reject:At
    }
  }
  let o=n.options;
  const a=n.isWorkspaceTrusted;
  let l=n.renderOptions;
  const u=Ne(), d=globalThis.acquireVsCodeApi, m=d();
  delete globalThis.acquireVsCodeApi;
  const p=new CSSStyleSheet;
  p.replaceSync(n.style.tokenizationCss);
  const g=typeof requestIdleCallback!="function"||typeof cancelIdleCallback!="function"?gt=>{
    setTimeout(()=>{
      if(At)return;
      const Tt=Date.now()+15;
      gt(Object.freeze({
        didTimeout:!0,timeRemaining(){
          return Math.max(0,Tt-Date.now())
        }
      }))
    });
    let At=!1;
    return{
      dispose(){
        At||(At=!0)
      }
    }
  }
  :(gt, At)=>{
    const Tt=requestIdleCallback(gt, typeof At=="number"?{
      timeout:At
    }
    :void 0);
    let ze=!1;
    return{
      dispose(){
        ze||(ze=!0,cancelIdleCallback(Tt))
      }
    }
  };
  function f(gt){
    for(const At of gt.composedPath())if(At instanceof HTMLElement&&At.classList.contains("output"))return{
      id:At.id
    }
  }
  let A;
  const w=gt=>{
    const At=gt&&f(gt);
    At&&(A=void 0, setTimeout(()=>{
      A?.id!==At.id&&hn("outputBlur",At)
    }, 0))
  }, C=gt=>gt.tagName.toLowerCase()==="input"||gt.tagName.toLowerCase()==="textarea"||"editContext"in gt&&!!gt.editContext, x=gt=>{
    A=f(gt);
    const At=window.document.activeElement;
    if(!At)return;
    const Tt=A?.id;
    Tt&&(C(At)||At.tagName==="SELECT")&&(hn("outputInputFocus", {
      inputFocused:!0,id:Tt
    }), At.addEventListener("blur", ()=>{
      hn("outputInputFocus",{
        inputFocused:!1,id:Tt
      })
    }, {
      once:!0
    }))
  }, I=gt=>{
    if(!gt||!gt.view||!gt.view.document)return;
    const At=A=f(gt);
    for(const Tt of gt.composedPath())if(Tt instanceof HTMLAnchorElement&&Tt.href){
      if(Tt.href.startsWith("blob:"))At&&hn("outputFocus",At),H(Tt.href,Tt.download);
      else if(Tt.href.startsWith("data:"))At&&hn("outputFocus",At),$(Tt.href,Tt.download);
      else if(Tt.getAttribute("href")?.trim().startsWith("#")){
        if(!Tt.hash){
          hn("scroll-to-reveal",{
            scrollTop:0
          });
          return
        }
        const ze=Tt.hash.substring(1);
        let Yt=gt.view.document.getElementById(ze);
        if(!Yt){
          for(const kt of gt.view.document.querySelectorAll(".preview"))if(Yt=kt.shadowRoot?.getElementById(ze),Yt)break
        }
        if(Yt){
          const kt=Yt.getBoundingClientRect().top+gt.view.scrollY;
          hn("scroll-to-reveal",{
            scrollTop:kt
          });
          return
        }
      }
      else{
        const ze=Tt.getAttribute("href");
        ze&&(ze.startsWith("command:")&&At&&hn("outputFocus",At),hn("clicked-link",{
          href:ze
        }))
      }
      gt.preventDefault(),gt.stopPropagation();
      return
    }
    At&&hn("outputFocus", At)
  }, B=()=>{
    const gt=window.getSelection();
    gt&&gt.removeAllRanges()
  }, R=gt=>{
    const At=window.getSelection();
    if(!At)return;
    const Tt=window.document.getElementById(gt);
    if(!Tt)return;
    At.removeAllRanges();
    const ze=document.createRange();
    ze.selectNode(Tt), At.addRange(ze)
  }, N=gt=>{
    if(!window.document.getElementById(gt))return;
    const Tt=window.document.activeElement;
    Tt&&C(Tt)&&Tt.select()
  }, M=gt=>{
    if(!A?.id||!gt.shiftKey)return;
    if(gt.shiftKey&&(gt.code==="ArrowUp"||gt.code==="ArrowDown")){
      gt.stopPropagation();
      return
    }
    if(!(gt.code==="PageUp"||gt.code==="PageDown")&&!(gt.metaKey&&(gt.code==="ArrowDown"||gt.code==="ArrowUp")))return;
    const At=window.document.getElementById(A.id), Tt=window.getSelection();
    if(!At||!Tt?.anchorNode)return;
    const ze=window.document.activeElement;
    if(ze&&C(ze))return;
    gt.stopPropagation(), gt.preventDefault();
    const{
      anchorNode:Yt,anchorOffset:kt
    }
    =Tt, xt=document.createRange();
    gt.code==="PageDown"||gt.code==="ArrowDown"?(xt.setStart(Yt, kt), xt.setEnd(At, 1)):(xt.setStart(At, 0), xt.setEnd(Yt, kt)), Tt.removeAllRanges(), Tt.addRange(xt)
  }, O=gt=>{
    if(!A?.id)return;
    const At=window.document.activeElement;
    if(!(At&&C(At))&&(gt.key==="a"&&gt.ctrlKey||gt.metaKey&&gt.key==="a")){
      gt.preventDefault();
      return
    }
  }, $=async(gt, At)=>{
    hn("clicked-data-url", {
      data:gt,downloadName:At
    })
  }, H=async(gt, At)=>{
    try{
      const ze=await(await fetch(gt)).blob(),Yt=new FileReader;
      Yt.addEventListener("load",()=>{
        $(Yt.result,At)
      }),Yt.readAsDataURL(ze)
    }
    catch(Tt){
      console.error(Tt.message)
    }
  };
  window.document.body.addEventListener("click", I), window.document.body.addEventListener("focusin", x), window.document.body.addEventListener("focusout", w), window.document.body.addEventListener("keydown", M), window.document.body.addEventListener("keydown", O);
  function W(){
    return Object.freeze({
      onDidReceiveKernelMessage:tt.event,postKernelMessage:gt=>hn("customKernelMessage",{
        message:gt
      })
    })
  }
  async function z(gt){
    try{
      return await Y(gt)
    }
    catch(At){
      throw console.error(At),At
    }
  }
  async function Y(gt){
    const At=await __import(gt);
    if(!At.activate){
      console.error(`Notebook preload '${gt}' was expected to be a module but it does not export an 'activate' function`);
      return
    }
    return At.activate(W())
  }
  const j=new class{
    constructor(){
      this.pending=new Map
    }
    updateHeight(gt, At, Tt){
      this.pending.size||setTimeout(()=>{
        this.updateImmediately()
      },0);
      const ze=this.pending.get(gt);
      ze&&ze.isOutput?this.pending.set(gt,{
        id:gt,height:At,init:ze.init,isOutput:ze.isOutput
      }):this.pending.set(gt,{
        id:gt,height:At,...Tt
      })
    }
    updateImmediately(){
      this.pending.size&&(hn("dimension",{
        updates:Array.from(this.pending.values())
      }),this.pending.clear())
    }
  };
  function X(gt){
    return gt>2.1
  }
  const ee=new class{
    constructor(){
      this._observedElements=new WeakMap,this._observer=new ResizeObserver(gt=>{
        for(const At of gt){
          if(!window.document.body.contains(At.target))continue;
          const Tt=this._observedElements.get(At.target);
          if(!Tt||(this.postResizeMessage(Tt.cellId),At.target.id!==Tt.id)||!At.contentRect)continue;
          if(!Tt.output){
            this.updateHeight(Tt,At.target.offsetHeight);
            continue
          }
          const ze=X(At.contentRect.height);
          ze&&Tt.lastKnownPadding===0||!ze&&Tt.lastKnownPadding!==0?window.requestAnimationFrame(()=>{
            ze?At.target.style.padding=`${n.style.outputNodePadding}px ${n.style.outputNodePadding}px ${n.style.outputNodePadding}px ${n.style.outputNodeLeftPadding}px`:At.target.style.padding="0px",this.updateHeight(Tt,ze?At.target.offsetHeight:0)
          }):this.updateHeight(Tt,ze?At.target.offsetHeight:0)
        }
      })
    }
    updateHeight(gt, At){
      gt.lastKnownHeight!==At&&(gt.lastKnownHeight=At,j.updateHeight(gt.id,At,{
        isOutput:gt.output
      }))
    }
    observe(gt, At, Tt, ze){
      this._observedElements.has(gt)||(this._observedElements.set(gt,{
        id:At,output:Tt,lastKnownPadding:n.style.outputNodePadding,lastKnownHeight:-1,cellId:ze
      }),this._observer.observe(gt))
    }
    postResizeMessage(gt){
      clearTimeout(this._outputResizeTimer),this._outputResizeTimer=setTimeout(()=>{
        hn("outputResized",{
          cellId:gt
        })
      },250)
    }
  };
  let re, ne, pe, le;
  function he(gt, At){
    if(pe=gt, At===void 0)return le=Date.now(), re=void 0, gt.setAttribute("recentlyScrolled", "true"), clearTimeout(ne), ne=setTimeout(()=>{
      pe?.removeAttribute("recentlyScrolled")
    }, 300), !0;
    if(gt.hasAttribute("recentlyScrolled")){
      if(le&&Date.now()-le>400){
        if(re&&At<0&&At<re-8)return clearTimeout(ne),pe?.removeAttribute("recentlyScrolled"),!1;
        if(re&&At>0&&At>re+8)return clearTimeout(ne),pe?.removeAttribute("recentlyScrolled"),!1;
        clearTimeout(ne),ne=setTimeout(()=>{
          pe?.removeAttribute("recentlyScrolled")
        },50)
      }
      else clearTimeout(ne),ne=setTimeout(()=>{
        pe?.removeAttribute("recentlyScrolled")
      },300);
      return re=At,!0
    }
    return!1
  }
  function be(gt){
    for(let At=gt.target;
    At;
    At=At.parentNode){
      if(!(At instanceof Element)||At.id==="container"||At.classList.contains("cell_container")||At.classList.contains("markup")||At.classList.contains("output_container"))return!1;
      if(gt.deltaY<0&&At.scrollTop>0)return he(At),!0;
      if(gt.deltaY>0&&At.scrollTop+At.clientHeight<At.scrollHeight){
        if(At.scrollHeight-At.scrollTop-At.clientHeight<2||window.getComputedStyle(At).overflowY==="hidden"||window.getComputedStyle(At).overflowY==="visible")continue;
        return he(At),!0
      }
      if(he(At,gt.deltaY))return!0
    }
    return!1
  }
  const fe=gt=>{
    gt.defaultPrevented||be(gt)||hn("did-scroll-wheel", {
      payload:{
        deltaMode:gt.deltaMode,deltaX:gt.deltaX,deltaY:gt.deltaY,deltaZ:gt.deltaZ,wheelDelta:gt.wheelDelta&&t?gt.wheelDelta/window.devicePixelRatio:gt.wheelDelta,wheelDeltaX:gt.wheelDeltaX&&t?gt.wheelDeltaX/window.devicePixelRatio:gt.wheelDeltaX,wheelDeltaY:gt.wheelDeltaY&&t?gt.wheelDeltaY/window.devicePixelRatio:gt.wheelDeltaY,detail:gt.detail,shiftKey:gt.shiftKey,type:gt.type
      }
    })
  };
  function ke(gt, At){
    const Tt=window.document.getElementById(gt)??(At?window.document.getElementById(At):void 0);
    if(Tt){
      if(Tt.contains(window.document.activeElement))return;
      const ze=Tt.id;
      let Yt=Tt.querySelector('[tabindex="0"], [href], button, input, option, select, textarea');
      if(!Yt)Yt=Tt,Yt.tabIndex=-1,hn("outputInputFocus",{
        inputFocused:!1,id:ze
      });
      else{
        const kt=C(Yt);
        hn("outputInputFocus",{
          inputFocused:kt,id:ze
        })
      }
      A=Tt,hn("outputFocus",{
        id:Tt.id
      }),Yt.focus()
    }
  }
  function Se(gt, At){
    const Tt=document.createElement("div");
    return Tt.id=`focus-sink-${gt}`, Tt.tabIndex=0, Tt.addEventListener("focus", ()=>{
      hn("focus-editor",{
        cellId:gt,focusNext:At
      })
    }), Tt
  }
  function Fe(gt, At="mark", Tt={
    
  }){
    function ze(Vn){
      if(!Vn.startContainer.ownerDocument)return[];
      if(Vn.startContainer.nodeType===Node.TEXT_NODE&&Vn.startOffset>0){
        const Si=Vn.startContainer,Xi=Vn.endOffset,Ji=Si.splitText(Vn.startOffset);
        Vn.endContainer===Si&&Vn.setEnd(Ji,Xi-Vn.startOffset),Vn.setStart(Ji,0)
      }
      Vn.endContainer.nodeType===Node.TEXT_NODE&&Vn.endOffset<Vn.endContainer.length&&Vn.endContainer.splitText(Vn.endOffset);
      const Xn=Vn.startContainer.ownerDocument.createTreeWalker(Vn.commonAncestorContainer,NodeFilter.SHOW_TEXT,Si=>Vn.intersectsNode(Si)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT);
      Xn.currentNode=Vn.startContainer;
      const hi=[];
      for(Xn.currentNode.nodeType===Node.TEXT_NODE&&hi.push(Xn.currentNode);
      Xn.nextNode()&&Vn.comparePoint(Xn.currentNode,0)!==1;
      )Xn.currentNode.nodeType===Node.TEXT_NODE&&hi.push(Xn.currentNode);
      return hi
    }
    function Yt(Vn, Xn, hi){
      const Si=Vn.ownerDocument.createElement(Xn);
      Object.keys(hi).forEach(Ji=>{
        Si.setAttribute(Ji,hi[Ji])
      });
      const Xi=Vn.ownerDocument.createRange();
      return Xi.selectNode(Vn),Xi.surroundContents(Si),Si
    }
    if(gt.collapsed)return{
      remove:()=>{
        
      },update:()=>{
        
      }
    };
    const kt=ze(gt), xt=[];
    for(const Vn in kt){
      const Xn=Yt(kt[Vn],At,Tt);
      xt.push(Xn)
    }
    function un(Vn){
      if(Vn.childNodes.length===1)Vn.parentNode?.replaceChild(Vn.firstChild,Vn);
      else{
        for(;
        Vn.firstChild;
        )Vn.parentNode?.insertBefore(Vn.firstChild,Vn);
        Vn.remove()
      }
    }
    function nn(){
      for(const Vn in xt)un(xt[Vn])
    }
    function Dn(Vn, Xn={
      
    }){
      Object.keys(Xn).forEach(hi=>{
        Vn.setAttribute(hi,Xn[hi])
      })
    }
    function Bn(Vn){
      for(const Xn in xt)Dn(xt[Xn],Vn)
    }
    return{
      remove:nn,update:Bn
    }
  }
  function De(gt){
    const At=window.getSelection();
    if(At)try{
      At.removeAllRanges();
      const Tt=document.createRange();
      Tt.setStart(gt.startContainer,gt.startOffset),Tt.setEnd(gt.endContainer,gt.endOffset),At.addRange(Tt)
    }
    catch(Tt){
      console.log(Tt)
    }
  }
  function Pe(gt, At, Tt="mark", ze={
    
  }){
    if(At){
      const Yt=Fe(gt,Tt,ze);
      return{
        range:gt,dispose:Yt.remove,update:(kt,xt)=>{
          xt===void 0?Yt.update({
            style:`background-color: ${kt}`
          }):Yt.update({
            class:xt
          })
        }
      }
    }
    else{
      window.document.execCommand("hiliteColor",!1,bt);
      const Yt=window.getSelection().getRangeAt(0).cloneRange(),kt={
        collapsed:Yt.collapsed,commonAncestorContainer:Yt.commonAncestorContainer,endContainer:Yt.endContainer,endOffset:Yt.endOffset,startContainer:Yt.startContainer,startOffset:Yt.startOffset
      };
      return{
        range:kt,dispose:()=>{
          De(kt);
          try{
            document.designMode="On",window.document.execCommand("removeFormat",!1,void 0),document.designMode="Off",window.getSelection()?.removeAllRanges()
          }
          catch(xt){
            console.log(xt)
          }
        },update:(xt,un)=>{
          De(kt);
          try{
            document.designMode="On",window.document.execCommand("removeFormat",!1,void 0),window.document.execCommand("hiliteColor",!1,xt),document.designMode="Off",window.getSelection()?.removeAllRanges()
          }
          catch(nn){
            console.log(nn)
          }
        }
      }
    }
  }
  function Ne(gt=()=>{
    
  }){
    const At=new Set;
    return{
      fire(Tt){
        for(const ze of[...At])ze.fn.call(ze.thisArg,Tt)
      },event(Tt,ze,Yt){
        const kt={
          fn:Tt,thisArg:ze
        },xt={
          dispose:()=>{
            At.delete(kt),gt(At)
          }
        };
        return At.add(kt),gt(At),Yt instanceof Array?Yt.push(xt):Yt&&Yt.add(xt),xt
      }
    }
  }
  function Oe(gt, At, Tt){
    At.innerText=gt;
    const ze=document.createElement("ul");
    for(const Yt of Tt){
      console.error(Yt);
      const kt=document.createElement("li");
      kt.innerText=Yt.message,ze.appendChild(kt)
    }
    At.appendChild(ze)
  }
  const Ge=new class{
    constructor(){
      this._requestPool=0,this._requests=new Map
    }
    getOutputItem(gt, At){
      const Tt=this._requestPool++,{
        promise:ze,resolve:Yt
      }
      =s();
      return this._requests.set(Tt,{
        resolve:Yt
      }),hn("getOutputItem",{
        requestId:Tt,outputId:gt,mime:At
      }),ze
    }
    resolveOutputItem(gt, At){
      const Tt=this._requests.get(gt);
      Tt&&(this._requests.delete(gt),Tt.resolve(At))
    }
  };
  let Le=!1;
  function We(gt, At, Tt, ze, Yt, kt){
    function xt(Bn, Vn, Xn, hi, Si){
      return Object.freeze({
        id:Bn,mime:Vn,metadata:Xn,appendedText(){
          if(Si)return r.decode(Si.valueBytes)
        },data(){
          return hi
        },text(){
          return r.decode(hi)
        },json(){
          return JSON.parse(this.text())
        },blob(){
          return new Blob([hi],{
            type:this.mime
          })
        },get _allOutputItems(){
          return Le||(Le=!0,console.warn("'_allOutputItems' is proposed API. DO NOT ship an extension that depends on it!")),nn
        }
      })
    }
    const un=new Map, nn=Object.freeze(Yt.map(Bn=>{
      const Vn=Bn.mime;
      return Object.freeze({
        mime:Vn,getItem(){
          const Xn=un.get(Vn);
          if(Xn)return Xn;
          const hi=Ge.getOutputItem(gt,Vn).then(Si=>Si?xt(gt,Si.mime,Tt,Si.valueBytes):void 0);
          return un.set(Vn,hi),hi
        }
      })
    })), Dn=xt(gt, At, Tt, ze, kt);
    return un.set(At, Promise.resolve(Dn)), Dn
  }
  const tt=Ne(), it=window.trustedTypes?.createPolicy("notebookRenderer", {
    createHTML:gt=>gt, createScript:gt=>gt
  });
  window.addEventListener("wheel", fe);
  const bt=window.getComputedStyle(window.document.getElementById("_defaultColorPalatte")).color, Nt=window.getComputedStyle(window.document.getElementById("_defaultColorPalatte")).backgroundColor;
  class ft{
    constructor(){
      this._activeHighlightInfo=new Map
    }
    addHighlights(At, Tt){
      for(let Yt=At.length-1;
      Yt>=0;
      Yt--){
        const kt=At[Yt],xt=Pe(kt.originalRange,!0,"mark",kt.isShadow?{
          style:"background-color: "+bt+";"
        }
        :{
          class:"find-match"
        });
        kt.highlightResult=xt
      }
      const ze={
        matches:At,currentMatchIndex:-1
      };
      this._activeHighlightInfo.set(Tt,ze)
    }
    removeHighlights(At){
      this._activeHighlightInfo.get(At)?.matches.forEach(Tt=>{
        Tt.highlightResult?.dispose()
      }),this._activeHighlightInfo.delete(At)
    }
    highlightCurrentMatch(At, Tt){
      const ze=this._activeHighlightInfo.get(Tt);
      if(!ze){
        console.error("Modified current highlight match before adding highlight list.");
        return
      }
      const Yt=ze.matches[ze.currentMatchIndex];
      Yt?.highlightResult?.update(bt,Yt.isShadow?void 0:"find-match");
      const kt=ze.matches[At];
      ze.currentMatchIndex=At;
      const xt=window.getSelection();
      if(kt&&xt&&kt.highlightResult){
        let un=0;
        try{
          const nn=window.document.getElementById(kt.id).getBoundingClientRect().top,Dn=document.createRange();
          Dn.selectNode(kt.highlightResult.range.startContainer),kt.highlightResult.range.startContainer.parentElement?.scrollIntoView({
            behavior:"auto",block:"end",inline:"nearest"
          });
          const Bn=Dn.getBoundingClientRect().top;
          Dn.detach(),un=Bn-nn
        }
        catch(nn){
          console.error(nn)
        }
        kt.highlightResult?.update(Nt,kt.isShadow?void 0:"current-find-match"),window.document.getSelection()?.removeAllRanges(),hn("didFindHighlightCurrent",{
          offset:un
        })
      }
    }
    unHighlightCurrentMatch(At, Tt){
      const ze=this._activeHighlightInfo.get(Tt);
      if(!ze)return;
      const Yt=ze.matches[At];
      Yt&&Yt.highlightResult&&Yt.highlightResult.update(bt,Yt.isShadow?void 0:"find-match")
    }
    dispose(){
      window.document.getSelection()?.removeAllRanges(),this._activeHighlightInfo.forEach(At=>{
        At.matches.forEach(Tt=>{
          Tt.highlightResult?.dispose()
        })
      })
    }
  }
  class _t{
    constructor(){
      this._activeHighlightInfo=new Map,this._matchesHighlight=new Highlight,this._matchesHighlight.priority=1,this._currentMatchesHighlight=new Highlight,this._currentMatchesHighlight.priority=2,CSS.highlights?.set("find-highlight",this._matchesHighlight),CSS.highlights?.set("current-find-highlight",this._currentMatchesHighlight)
    }
    _refreshRegistry(At=!0){
      At&&this._matchesHighlight.clear(),this._currentMatchesHighlight.clear(),this._activeHighlightInfo.forEach(Tt=>{
        if(At)for(let ze=0;
        ze<Tt.matches.length;
        ze++)this._matchesHighlight.add(Tt.matches[ze].originalRange);
        Tt.currentMatchIndex<Tt.matches.length&&Tt.currentMatchIndex>=0&&this._currentMatchesHighlight.add(Tt.matches[Tt.currentMatchIndex].originalRange)
      })
    }
    addHighlights(At, Tt){
      for(let Yt=0;
      Yt<At.length;
      Yt++)this._matchesHighlight.add(At[Yt].originalRange);
      const ze={
        matches:At,currentMatchIndex:-1
      };
      this._activeHighlightInfo.set(Tt,ze)
    }
    highlightCurrentMatch(At, Tt){
      const ze=this._activeHighlightInfo.get(Tt);
      if(!ze){
        console.error("Modified current highlight match before adding highlight list.");
        return
      }
      ze.currentMatchIndex=At;
      const Yt=ze.matches[At];
      if(Yt){
        let kt=0;
        try{
          const xt=window.document.getElementById(Yt.id).getBoundingClientRect().top;
          Yt.originalRange.startContainer.parentElement?.scrollIntoView({
            behavior:"auto",block:"end",inline:"nearest"
          }),kt=Yt.originalRange.getBoundingClientRect().top-xt,hn("didFindHighlightCurrent",{
            offset:kt
          })
        }
        catch(xt){
          console.error(xt)
        }
      }
      this._refreshRegistry(!1)
    }
    unHighlightCurrentMatch(At, Tt){
      const ze=this._activeHighlightInfo.get(Tt);
      ze&&(ze.currentMatchIndex=-1)
    }
    removeHighlights(At){
      this._activeHighlightInfo.delete(At),this._refreshRegistry()
    }
    dispose(){
      window.document.getSelection()?.removeAllRanges(),this._currentMatchesHighlight.clear(),this._matchesHighlight.clear()
    }
  }
  const It=CSS.highlights?new _t:new ft;
  function sn(gt){
    const Tt=gt.getRangeAt(0).cloneRange(), ze=gt.toString().length;
    gt.collapseToStart(), gt.modify("move", "backward", "lineboundary"), gt.modify("extend", "forward", "lineboundary");
    const Yt=gt.toString(), kt=Vt(gt.getRangeAt(0), Tt), xt={
      start:kt,end:kt+ze
    };
    return gt.removeAllRanges(), gt.addRange(Tt), {
      line:Yt,range:xt
    }
  }
  function Vt(gt, At){
    const Tt=Ft(gt.startContainer, At.startContainer), ze=bn(Tt, gt.startContainer)+gt.startOffset;
    return bn(Tt, At.startContainer)+At.startOffset-ze
  }
  function Ft(gt, At){
    const Tt=new Range;
    return Tt.setStart(gt, 0), Tt.setEnd(At, 0), Tt.commonAncestorContainer
  }
  function Xt(gt){
    let At=0;
    if(gt.nodeType===Node.TEXT_NODE)At+=gt.textContent?.length||0;
    else for(const Tt of gt.childNodes)At+=Xt(Tt);
    return At
  }
  function bn(gt, At){
    if(!At)return 0;
    let Tt=0;
    if(At===gt||!gt.contains(At))return Tt;
    let ze=At.previousSibling;
    for(;
    ze;
    )Tt+=Xt(ze), ze=ze.previousSibling;
    return Tt+bn(gt, At.parentNode)
  }
  const St=(gt, At)=>{
    let Tt=!0, ze=[];
    const Yt=document.createRange();
    Yt.selectNodeContents(window.document.getElementById("findStart"));
    const kt=window.getSelection();
    kt?.removeAllRanges(), kt?.addRange(Yt), ut.toggleDragDropEnabled(!1);
    try{
      for(document.designMode="On";
      Tt&&ze.length<500;
      )if(Tt=window.find(gt,!!At.caseSensitive,!1,!1,!!At.wholeWord,!0,!1),Tt){
        const xt=window.getSelection();
        if(!xt){
          console.log("no selection");
          break
        }
        if(At.includeMarkup&&xt.rangeCount>0&&xt.getRangeAt(0).startContainer.nodeType===1&&xt.getRangeAt(0).startContainer.classList.contains("markup")){
          const nn=xt.anchorNode?.firstChild,Dn=nn.shadowRoot,Bn=Dn?.getSelection?Dn?.getSelection():null;
          Bn&&Bn.anchorNode&&ze.push({
            type:"preview",id:nn.id,cellId:nn.id,container:nn,isShadow:!0,originalRange:Bn.getRangeAt(0),searchPreviewInfo:At.shouldGetSearchPreviewInfo?sn(Bn):void 0
          })
        }
        if(At.includeOutput&&xt.rangeCount>0&&xt.getRangeAt(0).startContainer.nodeType===1&&xt.getRangeAt(0).startContainer.classList.contains("output_container")){
          const nn=xt.getRangeAt(0).startContainer.parentElement.id,Dn=xt.anchorNode?.firstChild,Bn=Dn.shadowRoot,Vn=Bn?.getSelection?Bn?.getSelection():null;
          Vn&&Vn.anchorNode&&ze.push({
            type:"output",id:Dn.id,cellId:nn,container:Dn,isShadow:!0,originalRange:Vn.getRangeAt(0),searchPreviewInfo:At.shouldGetSearchPreviewInfo?sn(Vn):void 0
          })
        }
        const un=xt.anchorNode?.parentElement;
        if(un){
          const nn=ze.length?ze[ze.length-1]:null;
          if(nn&&nn.container.contains(un)&&At.includeOutput)ze.push({
            type:nn.type,id:nn.id,cellId:nn.cellId,container:nn.container,isShadow:!1,originalRange:xt.getRangeAt(0),searchPreviewInfo:At.shouldGetSearchPreviewInfo?sn(xt):void 0
          });
          else for(let Dn=un;
          Dn&&Dn instanceof Element;
          Dn=Dn.parentElement){
            if(Dn.classList.contains("output")&&At.includeOutput){
              const Bn=Dn.parentElement?.parentElement?.id;
              Bn&&ze.push({
                type:"output",id:Dn.id,cellId:Bn,container:Dn,isShadow:!1,originalRange:xt.getRangeAt(0),searchPreviewInfo:At.shouldGetSearchPreviewInfo?sn(xt):void 0
              });
              break
            }
            if(Dn.id==="container"||Dn===window.document.body)break
          }
        }
        else break
      }
    }
    catch(xt){
      console.log(xt)
    }
    ze=ze.filter(xt=>At.findIds.length?At.findIds.includes(xt.cellId):!0), It.addHighlights(ze, At.ownerID), window.document.getSelection()?.removeAllRanges(), ut.toggleDragDropEnabled(o.dragAndDropEnabled), document.designMode="Off", hn("didFind", {
      matches:ze.map((xt,un)=>({
        type:xt.type,id:xt.id,cellId:xt.cellId,index:un,searchPreviewInfo:xt.searchPreviewInfo
      }))
    })
  }, Bt=async(gt, At, Tt=5)=>{
    if(!window.document.hasFocus()&&Tt>0){
      setTimeout(()=>{
        Bt(gt,At,Tt-1)
      },50);
      return
    }
    try{
      const ze=window.document.getElementById(gt)??window.document.getElementById(At);
      let Yt=ze?.querySelector("img");
      if(!Yt){
        const kt=ze?.querySelector("svg.output-image")??ze?.querySelector("div.svgContainerStyle > svg");
        kt&&(Yt=new Image,Yt.src="data:image/svg+xml,"+encodeURIComponent(kt.outerHTML))
      }
      if(Yt){
        const kt=Yt;
        await navigator.clipboard.write([new ClipboardItem({
          "image/png":new Promise(xt=>{
            const un=document.createElement("canvas");
            un.width=kt.naturalWidth,un.height=kt.naturalHeight,un.getContext("2d").drawImage(kt,0,0),un.toBlob(Dn=>{
              Dn?xt(Dn):console.error("No blob data to write to clipboard"),un.remove()
            },"image/png")
          })
        })])
      }
      else console.error("Could not find image element to copy for output with id",gt)
    }
    catch(ze){
      console.error("Could not copy image:",ze)
    }
  };
  window.addEventListener("message", async gt=>{
    const At=gt;
    switch(At.data.type){
      case"initializeMarkup":{
        try{
          await Promise.all(At.data.cells.map(Tt=>ut.ensureMarkupCell(Tt)))
        }
        finally{
          j.updateImmediately(),hn("initializedMarkup",{
            requestId:At.data.requestId
          })
        }
        break
      }
      case"createMarkupCell":ut.ensureMarkupCell(At.data.cell);
      break;
      case"showMarkupCell":ut.showMarkupCell(At.data.id,At.data.top,At.data.content,At.data.metadata);
      break;
      case"hideMarkupCells":for(const Tt of At.data.ids)ut.hideMarkupCell(Tt);
      break;
      case"unhideMarkupCells":for(const Tt of At.data.ids)ut.unhideMarkupCell(Tt);
      break;
      case"deleteMarkupCell":for(const Tt of At.data.ids)ut.deleteMarkupCell(Tt);
      break;
      case"updateSelectedMarkupCells":ut.updateSelectedCells(At.data.selectedCellIds);
      break;
      case"html":{
        const Tt=At.data;
        Tt.createOnIdle?Mt.enqueueIdle(Tt.outputId,ze=>ut.renderOutputCell(Tt,ze)):Mt.enqueue(Tt.outputId,ze=>ut.renderOutputCell(Tt,ze));
        break
      }
      case"view-scroll":{
        At.data.widgets.forEach(Tt=>{
          Mt.enqueue(Tt.outputId,()=>{
            ut.updateOutputsScroll([Tt])
          })
        }),ut.updateMarkupScrolls(At.data.markupCells);
        break
      }
      case"clear":Pt.clearAll(),ut.clearAll(),window.document.getElementById("container").innerText="";
      break;
      case"clearOutput":{
        const{
          cellId:Tt,rendererId:ze,outputId:Yt
        }
        =At.data;
        Mt.cancelOutput(Yt),ut.clearOutput(Tt,Yt,ze);
        break
      }
      case"hideOutput":{
        const{
          cellId:Tt,outputId:ze
        }
        =At.data;
        Mt.enqueue(ze,()=>{
          ut.hideOutput(Tt)
        });
        break
      }
      case"showOutput":{
        const{
          outputId:Tt,cellTop:ze,cellId:Yt,content:kt
        }
        =At.data;
        Mt.enqueue(Tt,()=>{
          ut.showOutput(Yt,Tt,ze),kt&&ut.updateAndRerender(Yt,Tt,kt)
        });
        break
      }
      case"copyImage":{
        await Bt(At.data.outputId,At.data.altOutputId);
        break
      }
      case"ack-dimension":{
        for(const{
          cellId:Tt,outputId:ze,height:Yt
        }
        of At.data.updates)ut.updateOutputHeight(Tt,ze,Yt);
        break
      }
      case"preload":{
        const Tt=At.data.resources;
        for(const{
          uri:ze
        }
        of Tt)cn.load(ze);
        break
      }
      case"updateRenderers":{
        const{
          rendererData:Tt
        }
        =At.data;
        Pt.updateRendererData(Tt);
        break
      }
      case"focus-output":ke(At.data.cellOrOutputId,At.data.alternateId);
      break;
      case"blur-output":B();
      break;
      case"select-output-contents":R(At.data.cellOrOutputId);
      break;
      case"select-input-contents":N(At.data.cellOrOutputId);
      break;
      case"decorations":{
        let Tt=window.document.getElementById(At.data.cellId);
        Tt||(ut.ensureOutputCell(At.data.cellId,-1e5,!0),Tt=window.document.getElementById(At.data.cellId)),Tt?.classList.add(...At.data.addedClassNames),Tt?.classList.remove(...At.data.removedClassNames);
        break
      }
      case"markupDecorations":{
        const Tt=window.document.getElementById(At.data.cellId);
        Tt&&(Tt?.classList.add(...At.data.addedClassNames),Tt?.classList.remove(...At.data.removedClassNames));
        break
      }
      case"customKernelMessage":tt.fire(At.data.message);
      break;
      case"customRendererMessage":Pt.getRenderer(At.data.rendererId)?.receiveMessage(At.data.message);
      break;
      case"notebookStyles":{
        const Tt=window.document.documentElement.style;
        for(let ze=Tt.length-1;
        ze>=0;
        ze--){
          const Yt=Tt[ze];
          Yt&&Yt.startsWith("--notebook-")&&Tt.removeProperty(Yt)
        }
        for(const[ze,Yt]of Object.entries(At.data.styles))Tt.setProperty(`--${ze}`,Yt);
        break
      }
      case"notebookOptions":o=At.data.options,ut.toggleDragDropEnabled(o.dragAndDropEnabled),l=At.data.renderOptions,u.fire(l);
      break;
      case"tokenizedCodeBlock":{
        const{
          codeBlockId:Tt,html:ze
        }
        =At.data;
        ot.highlightCodeBlock(Tt,ze);
        break
      }
      case"tokenizedStylesChanged":{
        p.replaceSync(At.data.css);
        break
      }
      case"find":{
        It.removeHighlights(At.data.options.ownerID),St(At.data.query,At.data.options);
        break
      }
      case"findHighlightCurrent":{
        It?.highlightCurrentMatch(At.data.index,At.data.ownerID);
        break
      }
      case"findUnHighlightCurrent":{
        It?.unHighlightCurrentMatch(At.data.index,At.data.ownerID);
        break
      }
      case"findStop":{
        It.removeHighlights(At.data.ownerID);
        break
      }
      case"returnOutputItem":Ge.resolveOutputItem(At.data.requestId,At.data.output)
    }
  });
  const Jt="vscode.fallbackToNextRenderer";
  class Ot{
    constructor(At){
      this.data=At,this._onMessageEvent=Ne()
    }
    receiveMessage(At){
      this._onMessageEvent.fire(At)
    }
    async renderOutputItem(At, Tt, ze){
      try{
        await this.load()
      }
      catch(Yt){
        ze.aborted||Oe(`Error loading renderer '${this.data.id}'`,Tt,Yt instanceof Error?[Yt]:[]);
        return
      }
      if(!this._api){
        ze.aborted||Oe(`Renderer '${this.data.id}' does not implement renderOutputItem`,Tt,[]);
        return
      }
      try{
        const Yt=performance.now();
        await this._api.renderOutputItem(At,Tt,ze),this.postDebugMessage("Rendered output item",{
          id:At.id,duration:`${performance.now()-Yt}ms`
        })
      }
      catch(Yt){
        if(ze.aborted)return;
        if(Yt instanceof Error&&Yt.name===Jt)throw Yt;
        Oe(`Error rendering output item using '${this.data.id}'`,Tt,Yt instanceof Error?[Yt]:[]),this.postDebugMessage("Rendering output item failed",{
          id:At.id,error:Yt+""
        })
      }
    }
    disposeOutputItem(At){
      this._api?.disposeOutputItem?.(At)
    }
    createRendererContext(){
      const{
        id:At,messaging:Tt
      }
      =this.data,ze={
        setState:Yt=>m.setState({
          ...m.getState(),[At]:Yt
        }),getState:()=>{
          const Yt=m.getState();
          return typeof Yt=="object"&&Yt?Yt[At]:void 0
        },getRenderer:async Yt=>{
          const kt=Pt.getRenderer(Yt);
          if(kt)return kt._api?kt._api:kt.load()
        },workspace:{
          get isTrusted(){
            return a
          }
        },settings:{
          get lineLimit(){
            return l.lineLimit
          },get outputScrolling(){
            return l.outputScrolling
          },get outputWordWrap(){
            return l.outputWordWrap
          },get linkifyFilePaths(){
            return l.linkifyFilePaths
          },get minimalError(){
            return l.minimalError
          }
        },get onDidChangeSettings(){
          return u.event
        }
      };
      return Tt&&(ze.onDidReceiveMessage=this._onMessageEvent.event,ze.postMessage=Yt=>hn("customRendererMessage",{
        rendererId:At,message:Yt
      })),Object.freeze(ze)
    }
    load(){
      return this._loadPromise??=this._load(),this._loadPromise
    }
    async _load(){
      this.postDebugMessage("Start loading renderer");
      try{
        await cn.waitForAllCurrent();
        const At=performance.now(),Tt=await __import(this.data.entrypoint.path);
        if(this.postDebugMessage("Imported renderer",{
          duration:`${performance.now()-At}ms`
        }),!Tt)return;
        this._api=await Tt.activate(this.createRendererContext()),this.postDebugMessage("Activated renderer",{
          duration:`${performance.now()-At}ms`
        });
        const ze=n.rendererData.filter(Yt=>Yt.entrypoint.extends===this.data.id);
        return ze.length&&this.postDebugMessage("Activating dependant renderers",{
          dependents:ze.map(Yt=>Yt.id).join(", ")
        }),await Promise.all(ze.map(async Yt=>{
          const kt=Pt.getRenderer(Yt.id);
          if(!kt)throw new Error(`Could not find extending renderer: ${Yt.id}`);
          try{
            return await kt.load()
          }
          catch(xt){
            console.error(xt),this.postDebugMessage("Activating dependant renderer failed",{
              dependent:Yt.id,error:xt+""
            });
            return
          }
        })),this._api
      }
      catch(At){
        throw this.postDebugMessage("Loading renderer failed"),At
      }
    }
    postDebugMessage(At, Tt){
      hn("logRendererDebugMessage",{
        message:`[renderer ${this.data.id}] - ${At}`,data:Tt
      })
    }
  }
  const cn=new class{
    constructor(){
      this.preloads=new Map
    }
    waitFor(gt){
      return this.preloads.get(gt)||Promise.resolve(new Error(`Preload not ready: ${gt}`))
    }
    load(gt){
      const At=Promise.all([z(gt),this.waitForAllCurrent()]);
      return this.preloads.set(gt,At),At
    }
    waitForAllCurrent(){
      return Promise.all([...this.preloads.values()].map(gt=>gt.catch(At=>At)))
    }
  }, Mt=new class{
    constructor(){
      this.outputs=new Map,this.pendingOutputCreationRequest=new Map
    }
    enqueue(gt, At){
      this.pendingOutputCreationRequest.get(gt)?.dispose(),this.pendingOutputCreationRequest.delete(gt);
      const Tt=this.outputs.get(gt);
      if(Tt)Tt.queue=Tt.queue.then(async ze=>{
        Tt.abort.signal.aborted||await At(Tt.abort.signal)
      });
      else{
        const ze=new AbortController;
        this.outputs.set(gt,{
          abort:ze,queue:new Promise(Yt=>Yt(At(ze.signal)))
        })
      }
    }
    enqueueIdle(gt, At){
      this.pendingOutputCreationRequest.get(gt)?.dispose(),Mt.pendingOutputCreationRequest.set(gt,g(()=>{
        Mt.enqueue(gt,At),Mt.pendingOutputCreationRequest.delete(gt)
      }))
    }
    cancelAll(){
      this.pendingOutputCreationRequest.forEach(gt=>gt.dispose()),this.pendingOutputCreationRequest.clear();
      for(const{
        abort:gt
      }
      of this.outputs.values())gt.abort();
      this.outputs.clear()
    }
    cancelOutput(gt){
      this.pendingOutputCreationRequest.get(gt)?.dispose(),this.pendingOutputCreationRequest.delete(gt);
      const At=this.outputs.get(gt);
      At&&(At.abort.abort(),this.outputs.delete(gt))
    }
  }, Pt=new class{
    constructor(){
      this._renderers=new Map;
      for(const gt of n.rendererData)this.addRenderer(gt)
    }
    getRenderer(gt){
      return this._renderers.get(gt)
    }
    rendererEqual(gt, At){
      if(gt.id!==At.id||gt.entrypoint.path!==At.entrypoint.path||gt.entrypoint.extends!==At.entrypoint.extends||gt.messaging!==At.messaging||gt.mimeTypes.length!==At.mimeTypes.length)return!1;
      for(let Tt=0;
      Tt<gt.mimeTypes.length;
      Tt++)if(gt.mimeTypes[Tt]!==At.mimeTypes[Tt])return!1;
      return!0
    }
    updateRendererData(gt){
      const At=new Set(this._renderers.keys()),Tt=new Set(gt.map(ze=>ze.id));
      for(const ze of gt){
        const Yt=this._renderers.get(ze.id);
        Yt&&this.rendererEqual(Yt.data,ze)||this.addRenderer(ze)
      }
      for(const ze of At)Tt.has(ze)||this._renderers.delete(ze)
    }
    addRenderer(gt){
      this._renderers.set(gt.id,new Ot(gt))
    }
    clearAll(){
      Mt.cancelAll();
      for(const gt of this._renderers.values())gt.disposeOutputItem()
    }
    clearOutput(gt, At){
      Mt.cancelOutput(At),this._renderers.get(gt)?.disposeOutputItem(At)
    }
    async render(gt, At, Tt, ze){
      const Yt=this.findRenderer(At,gt);
      if(!Yt){
        const xt=(window.document.documentElement.style.getPropertyValue("--notebook-cell-renderer-not-found-error")||"").replace("$0",()=>gt.mime);
        this.showRenderError(gt,Tt,xt);
        return
      }
      if(!(await this._doRender(gt,Tt,Yt,ze)).continue)return;
      for(const xt of gt._allOutputItems){
        if(xt.mime===gt.mime)continue;
        const un=await xt.getItem();
        if(ze.aborted)return;
        if(un){
          const nn=this.findRenderer(void 0,un);
          if(nn&&!(await this._doRender(un,Tt,nn,ze)).continue)return
        }
      }
      const kt=(window.document.documentElement.style.getPropertyValue("--notebook-cell-renderer-fallbacks-exhausted")||"").replace("$0",()=>gt.mime);
      this.showRenderError(gt,Tt,kt)
    }
    async _doRender(gt, At, Tt, ze){
      try{
        return await Tt.renderOutputItem(gt,At,ze),{
          continue:!1
        }
      }
      catch(Yt){
        if(ze.aborted)return{
          continue:!1
        };
        if(Yt instanceof Error&&Yt.name===Jt)return{
          continue:!0
        };
        throw Yt
      }
    }
    findRenderer(gt, At){
      let Tt;
      if(typeof gt=="string")Tt=Array.from(this._renderers.values()).find(ze=>ze.data.id===gt);
      else{
        const ze=Array.from(this._renderers.values()).filter(Yt=>Yt.data.mimeTypes.includes(At.mime)&&!Yt.data.entrypoint.extends);
        ze.length&&(ze.sort((Yt,kt)=>+Yt.data.isBuiltin-+kt.data.isBuiltin),Tt=ze[0])
      }
      return Tt
    }
    showRenderError(gt, At, Tt){
      const ze=document.createElement("div"),Yt=document.createElement("div");
      Yt.className="no-renderer-error",Yt.innerText=Tt;
      const kt=document.createElement("div");
      kt.innerText=gt.text(),ze.appendChild(Yt),ze.appendChild(kt),At.innerText="",At.appendChild(ze)
    }
  }, ut=new class{
    constructor(){
      this._markupCells=new Map,this._outputCells=new Map
    }
    clearAll(){
      for(const At of this._markupCells.values())At.dispose();
      this._markupCells.clear();
      for(const At of this._outputCells.values())At.dispose();
      this._outputCells.clear()
    }
    async createMarkupCell(At, Tt, ze){
      const Yt=this._markupCells.get(At.cellId);
      if(Yt)return console.error(`Trying to create markup that already exists: ${At.cellId}`),Yt;
      const kt=new Lt(At.cellId,At.mime,At.content,Tt,At.metadata);
      return kt.element.style.visibility=ze?"":"hidden",this._markupCells.set(At.cellId,kt),await kt.ready,kt
    }
    async ensureMarkupCell(At){
      let Tt=this._markupCells.get(At.cellId);
      Tt?(Tt.element.style.visibility=At.visible?"":"hidden",await Tt.updateContentAndRender(At.content,At.metadata)):Tt=await this.createMarkupCell(At,At.offset,At.visible)
    }
    deleteMarkupCell(At){
      const Tt=this.getExpectedMarkupCell(At);
      Tt&&(Tt.remove(),Tt.dispose(),this._markupCells.delete(At))
    }
    async updateMarkupContent(At, Tt, ze){
      await this.getExpectedMarkupCell(At)?.updateContentAndRender(Tt,ze)
    }
    showMarkupCell(At, Tt, ze, Yt){
      this.getExpectedMarkupCell(At)?.show(Tt,ze,Yt)
    }
    hideMarkupCell(At){
      this.getExpectedMarkupCell(At)?.hide()
    }
    unhideMarkupCell(At){
      this.getExpectedMarkupCell(At)?.unhide()
    }
    getExpectedMarkupCell(At){
      const Tt=this._markupCells.get(At);
      if(!Tt){
        console.log(`Could not find markup cell '${At}'`);
        return
      }
      return Tt
    }
    updateSelectedCells(At){
      const Tt=new Set(At);
      for(const ze of this._markupCells.values())ze.setSelected(Tt.has(ze.id))
    }
    toggleDragDropEnabled(At){
      for(const Tt of this._markupCells.values())Tt.toggleDragDropEnabled(At)
    }
    updateMarkupScrolls(At){
      for(const{
        id:Tt,top:ze
      }
      of At){
        const Yt=this._markupCells.get(Tt);
        Yt&&(Yt.element.style.top=`${ze}px`)
      }
    }
    async renderOutputCell(At, Tt){
      const ze=await Promise.all(At.requiredPreloads.map(kt=>cn.waitFor(kt.uri).then(()=>{
        
      },xt=>xt)));
      return Tt.aborted?void 0:this.ensureOutputCell(At.cellId,At.cellTop,!1).renderOutputElement(At,ze,Tt)
    }
    ensureOutputCell(At, Tt, ze){
      let Yt=this._outputCells.get(At);
      const kt=!!Yt;
      return Yt||(Yt=new Gt(At),this._outputCells.set(At,Yt)),kt&&ze||(Yt.element.style.top=Tt+"px"),Yt
    }
    clearOutput(At, Tt, ze){
      this._outputCells.get(At)?.clearOutput(Tt,ze)
    }
    showOutput(At, Tt, ze){
      this._outputCells.get(At)?.show(Tt,ze)
    }
    updateAndRerender(At, Tt, ze){
      this._outputCells.get(At)?.updateContentAndRerender(Tt,ze)
    }
    hideOutput(At){
      this._outputCells.get(At)?.hide()
    }
    updateOutputHeight(At, Tt, ze){
      this._outputCells.get(At)?.updateOutputHeight(Tt,ze)
    }
    updateOutputsScroll(At){
      for(const Tt of At)this._outputCells.get(Tt.cellId)?.updateScroll(Tt)
    }
  };
  class ot{
    static{
      this.pendingCodeBlocksToHighlight=new Map
    }
    static highlightCodeBlock(At, Tt){
      const ze=ot.pendingCodeBlocksToHighlight.get(At);
      if(!ze)return;
      const Yt=it?.createHTML(Tt)??Tt;
      ze.innerHTML=Yt;
      const kt=ze.getRootNode();
      kt instanceof ShadowRoot&&(kt.adoptedStyleSheets.includes(p)||kt.adoptedStyleSheets.push(p))
    }
    static requestHighlightCodeBlock(At){
      const Tt=[];
      let ze=0;
      for(const Yt of At.querySelectorAll(".vscode-code-block")){
        const kt=Yt.getAttribute("data-vscode-code-block-lang");
        if(Yt.textContent&&kt){
          const xt=`${Date.now()}-${ze++}`;
          Tt.push({
            value:Yt.textContent,lang:kt,id:xt
          }),ot.pendingCodeBlocksToHighlight.set(xt,Yt)
        }
      }
      return Tt
    }
  }
  class Lt{
    constructor(At, Tt, ze, Yt, kt){
      this._isDisposed=!1;
      const xt=this;
      this.id=At,this._content={
        value:ze,version:0,metadata:kt
      };
      const{
        promise:un,resolve:nn,reject:Dn
      }
      =s();
      this.ready=un;
      let Bn;
      this.outputItem=Object.freeze({
        id:At,mime:Tt,get metadata(){
          return xt._content.metadata
        },text:()=>this._content.value,json:()=>{
          
        },data:()=>{
          if(Bn?.version===this._content.version)return Bn.value;
          const hi=i.encode(this._content.value);
          return Bn={
            version:this._content.version,value:hi
          },hi
        },blob(){
          return new Blob([this.data()],{
            type:this.mime
          })
        },_allOutputItems:[{
          mime:Tt,getItem:async()=>this.outputItem
        }
        ]
      });
      const Vn=window.document.getElementById("container"),Xn=document.createElement("div");
      Xn.className="markup",Xn.style.position="absolute",Xn.style.width="100%",this.element=document.createElement("div"),this.element.id=this.id,this.element.classList.add("preview"),this.element.style.position="absolute",this.element.style.top=Yt+"px",this.toggleDragDropEnabled(o.dragAndDropEnabled),Xn.appendChild(this.element),Vn.appendChild(Xn),this.addEventListeners(),this.updateContentAndRender(this._content.value,this._content.metadata).then(()=>{
        this._isDisposed||ee.observe(this.element,this.id,!1,this.id),nn()
      },()=>Dn())
    }
    dispose(){
      this._isDisposed=!0,this.renderTaskAbort?.abort(),this.renderTaskAbort=void 0
    }
    addEventListeners(){
      this.element.addEventListener("dblclick",()=>{
        hn("toggleMarkupPreview",{
          cellId:this.id
        })
      }),this.element.addEventListener("click",At=>{
        hn("clickMarkupCell",{
          cellId:this.id,altKey:At.altKey,ctrlKey:At.ctrlKey,metaKey:At.metaKey,shiftKey:At.shiftKey
        })
      }),this.element.addEventListener("contextmenu",At=>{
        hn("contextMenuMarkupCell",{
          cellId:this.id,clientX:At.clientX,clientY:At.clientY
        })
      }),this.element.addEventListener("mouseenter",()=>{
        hn("mouseEnterMarkupCell",{
          cellId:this.id
        })
      }),this.element.addEventListener("mouseleave",()=>{
        hn("mouseLeaveMarkupCell",{
          cellId:this.id
        })
      }),this.element.addEventListener("dragstart",At=>{
        en.startDrag(At,this.id)
      }),this.element.addEventListener("drag",At=>{
        en.updateDrag(At,this.id)
      }),this.element.addEventListener("dragend",At=>{
        en.endDrag(At,this.id)
      })
    }
    async updateContentAndRender(At, Tt){
      this._content={
        value:At,version:this._content.version+1,metadata:Tt
      },this.renderTaskAbort?.abort();
      const ze=new AbortController;
      this.renderTaskAbort=ze;
      try{
        await Pt.render(this.outputItem,void 0,this.element,this.renderTaskAbort.signal)
      }
      finally{
        this.renderTaskAbort===ze&&(this.renderTaskAbort=void 0)
      }
      const Yt=this.element.shadowRoot??this.element,kt=[];
      for(const un of Yt.children)switch(un.tagName){
        case"LINK":case"SCRIPT":case"STYLE":break;
        default:kt.push(un.outerHTML);
        break
      }
      const xt=ot.requestHighlightCodeBlock(Yt);
      hn("renderedMarkup",{
        cellId:this.id,html:kt.join(""),codeBlocks:xt
      }),j.updateHeight(this.id,this.element.offsetHeight,{
        isOutput:!1
      })
    }
    show(At, Tt, ze){
      this.element.style.visibility="",this.element.style.top=`${At}px`,typeof Tt=="string"||ze?this.updateContentAndRender(Tt??this._content.value,ze??this._content.metadata):this.updateMarkupDimensions()
    }
    hide(){
      this.element.style.visibility="hidden"
    }
    unhide(){
      this.element.style.visibility="",this.updateMarkupDimensions()
    }
    remove(){
      this.element.remove()
    }
    async updateMarkupDimensions(){
      j.updateHeight(this.id,this.element.offsetHeight,{
        isOutput:!1
      })
    }
    setSelected(At){
      this.element.classList.toggle("selected",At)
    }
    toggleDragDropEnabled(At){
      At?(this.element.classList.add("draggable"),this.element.setAttribute("draggable","true")):(this.element.classList.remove("draggable"),this.element.removeAttribute("draggable"))
    }
  }
  class Gt{
    constructor(At){
      this.outputElements=new Map;
      const Tt=window.document.getElementById("container"),ze=Se(At);
      Tt.appendChild(ze),this.element=document.createElement("div"),this.element.style.position="absolute",this.element.style.outline="0",this.element.id=At,this.element.classList.add("cell_container"),Tt.appendChild(this.element),this.element=this.element;
      const Yt=Se(At,!0);
      Tt.appendChild(Yt)
    }
    dispose(){
      for(const At of this.outputElements.values())At.dispose();
      this.outputElements.clear()
    }
    createOutputElement(At){
      let Tt=this.outputElements.get(At.outputId);
      return Tt||(Tt=new jt(At.outputId),this.element.appendChild(Tt.element),this.outputElements.set(At.outputId,Tt)),Tt.createOutputElement(At.outputId,At.outputOffset,At.left,At.cellId)
    }
    async renderOutputElement(At, Tt, ze){
      const Yt=Date.now(),kt=this.createOutputElement(At);
      if(await kt.render(At.content,At.rendererId,Tt,ze),kt.element.style.visibility=At.initiallyHidden?"hidden":"",At.executionId&&At.rendererId){
        let xt;
        At.content.type===1&&(xt=At.content.output.valueBytes.length),xt!==void 0&&xt>0&&xt<100*1024&&hn("notebookPerformanceMessage",{
          cellId:At.cellId,executionId:At.executionId,duration:Date.now()-Yt,rendererId:At.rendererId,outputSize:xt
        })
      }
    }
    clearOutput(At, Tt){
      const ze=this.outputElements.get(At);
      ze?.clear(Tt),ze?.dispose(),this.outputElements.delete(At)
    }
    show(At, Tt){
      this.outputElements.get(At)&&(this.element.style.visibility="",this.element.style.top=`${Tt}px`)
    }
    hide(){
      this.element.style.visibility="hidden"
    }
    updateContentAndRerender(At, Tt){
      this.outputElements.get(At)?.updateContentAndRender(Tt)
    }
    updateOutputHeight(At, Tt){
      this.outputElements.get(At)?.updateHeight(Tt)
    }
    updateScroll(At){
      this.element.style.top=`${At.cellTop}px`;
      const Tt=this.outputElements.get(At.outputId);
      Tt&&(Tt.updateScroll(At.outputOffset),At.forceDisplay&&Tt.outputNode&&(Tt.outputNode.element.style.visibility="")),At.forceDisplay&&(this.element.style.visibility="")
    }
  }
  class jt{
    get outputNode(){
      return this._outputNode
    }
    constructor(At){
      this.outputId=At,this.element=document.createElement("div"),this.element.classList.add("output_container"),this.element.setAttribute("data-vscode-context",JSON.stringify({
        preventDefaultContextMenuItems:!0
      })),this.element.style.position="absolute",this.element.style.overflow="hidden"
    }
    dispose(){
      this._outputNode?.dispose()
    }
    clear(At){
      At&&Pt.clearOutput(At,this.outputId),this.element.remove()
    }
    updateHeight(At){
      this.element.style.maxHeight=`${At}px`,this.element.style.height=`${At}px`
    }
    updateScroll(At){
      this.element.style.top=`${At}px`
    }
    createOutputElement(At, Tt, ze, Yt){
      return this.element.innerText="",this.element.style.maxHeight="0px",this.element.style.top=`${Tt}px`,this._outputNode?.dispose(),this._outputNode=new on(At,ze,Yt),this.element.appendChild(this._outputNode.element),this._outputNode
    }
    updateContentAndRender(At){
      this._outputNode?.updateAndRerender(At)
    }
  }
  m.postMessage({
    __vscode_notebook_message:!0, type:"initialized"
  });
  for(const gt of n.staticPreloadsData)cn.load(gt.entrypoint);
  function hn(gt, At){
    m.postMessage({
      __vscode_notebook_message:!0,type:gt,...At
    })
  }
  class on{
    constructor(At, Tt, ze){
      this.outputId=At,this.cellId=ze,this.hasResizeObserver=!1,this.element=document.createElement("div"),this.element.id=At,this.element.classList.add("output"),this.element.style.position="absolute",this.element.style.top="0px",this.element.style.left=Tt+"px",this.element.style.padding=`${n.style.outputNodePadding}px ${n.style.outputNodePadding}px ${n.style.outputNodePadding}px ${n.style.outputNodeLeftPadding}`,this.element.addEventListener("mouseenter",()=>{
        hn("mouseenter",{
          id:At
        })
      }),this.element.addEventListener("mouseleave",()=>{
        hn("mouseleave",{
          id:At
        })
      })
    }
    dispose(){
      this.renderTaskAbort?.abort(),this.renderTaskAbort=void 0
    }
    async render(At, Tt, ze, Yt){
      if(this.renderTaskAbort?.abort(),this.renderTaskAbort=void 0,this._content={
        preferredRendererId:Tt,preloadErrors:ze
      },At.type===0){
        const Vn=it?.createHTML(At.htmlContent)??At.htmlContent;
        this.element.innerHTML=Vn
      }
      else if(ze.some(Vn=>Vn instanceof Error)){
        const Vn=ze.filter(Xn=>Xn instanceof Error);
        Oe("Error loading preloads",this.element,Vn)
      }
      else{
        const Vn=We(this.outputId,At.output.mime,At.metadata,At.output.valueBytes,At.allOutputs,At.output.appended),Xn=new AbortController;
        this.renderTaskAbort=Xn,Yt?.addEventListener("abort",()=>Xn.abort());
        try{
          await Pt.render(Vn,Tt,this.element,Xn.signal)
        }
        finally{
          this.renderTaskAbort===Xn&&(this.renderTaskAbort=void 0)
        }
      }
      this.hasResizeObserver||(this.hasResizeObserver=!0,ee.observe(this.element,this.outputId,!0,this.cellId));
      const kt=this.element.offsetHeight,xt=document.defaultView.getComputedStyle(this.element),un=parseFloat(xt.paddingTop)+parseFloat(xt.paddingBottom),nn=kt-un;
      X(nn)&&xt.padding==="0px"?(j.updateHeight(this.outputId,kt+n.style.outputNodePadding*2,{
        isOutput:!0,init:!0
      }),this.element.style.padding=`${n.style.outputNodePadding}px ${n.style.outputNodePadding}px ${n.style.outputNodePadding}px ${n.style.outputNodeLeftPadding}`):X(nn)?(j.updateHeight(this.outputId,this.element.offsetHeight,{
        isOutput:!0,init:!0
      }),this.element.style.padding=`0 ${n.style.outputNodePadding}px 0 ${n.style.outputNodeLeftPadding}`):j.updateHeight(this.outputId,0,{
        isOutput:!0,init:!0
      });
      const Dn=this.element.shadowRoot??this.element,Bn=ot.requestHighlightCodeBlock(Dn);
      Bn.length>0&&hn("renderedCellOutput",{
        codeBlocks:Bn
      })
    }
    updateAndRerender(At){
      this._content&&this.render(At,this._content.preferredRendererId,this._content.preloadErrors)
    }
  }
  const en=new class{
    constructor(){
      window.document.addEventListener("dragover",At=>{
        At.preventDefault()
      }),window.document.addEventListener("drop",At=>{
        At.preventDefault();
        const Tt=this.currentDrag;
        Tt&&(this.currentDrag=void 0,hn("cell-drop",{
          cellId:Tt.cellId,ctrlKey:At.ctrlKey,altKey:At.altKey,dragOffsetY:At.clientY
        }))
      })
    }
    startDrag(At, Tt){
      if(!At.dataTransfer||!o.dragAndDropEnabled)return;
      this.currentDrag={
        cellId:Tt,clientY:At.clientY
      };
      const ze=9999;
      this.dragOverlay||(this.dragOverlay=document.createElement("div"),this.dragOverlay.style.position="absolute",this.dragOverlay.style.top="0",this.dragOverlay.style.left="0",this.dragOverlay.style.zIndex=`${ze}`,this.dragOverlay.style.width="100%",this.dragOverlay.style.height="100%",this.dragOverlay.style.background="transparent",window.document.body.appendChild(this.dragOverlay)),At.target.style.zIndex=`${ze+1}`,At.target.classList.add("dragging"),hn("cell-drag-start",{
        cellId:Tt,dragOffsetY:At.clientY
      });
      const Yt=()=>{
        this.currentDrag?.cellId===Tt&&(hn("cell-drag",{
          cellId:Tt,dragOffsetY:this.currentDrag.clientY
        }),window.requestAnimationFrame(Yt))
      };
      window.requestAnimationFrame(Yt)
    }
    updateDrag(At, Tt){
      Tt!==this.currentDrag?.cellId?this.currentDrag=void 0:this.currentDrag={
        cellId:Tt,clientY:At.clientY
      }
    }
    endDrag(At, Tt){
      this.currentDrag=void 0,At.target.classList.remove("dragging"),hn("cell-drag-end",{
        cellId:Tt
      }),this.dragOverlay&&(this.dragOverlay.remove(),this.dragOverlay=void 0),At.target.style.zIndex=""
    }
  }
}
function Nuy(n, e, t, i, r, s, o){
  return`
		const __import = (x) => import(x);
		(${Luy})(
			JSON.parse(decodeURIComponent("${encodeURIComponent(JSON.stringify({style:n,options:e,renderOptions:t,rendererData:i,staticPreloadsData:r,isWorkspaceTrusted:s,nonce:o}))}"))
		)
//# sourceURL=notebookWebviewPreloads.js
`
}
var Muy=