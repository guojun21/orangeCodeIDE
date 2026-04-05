// Module: out-build/vs/editor/contrib/aiFullFilePromptBar/browser/useNewFileUx.js
// Offset: 33974197 (bundle byte offset)
// Size: 5304 bytes

Ti(), rt(), rf(), Q0(), es(), aC()
}
});
function M$f(n){
  return(()=>{
    var e=F$f(), t=e.firstChild, i=t.nextSibling, r=i.nextSibling;
    return e.addEventListener("mousedown", s=>n.onClick(s)), ge(e, ()=>n.current, t), ge(e, ()=>n.delimiter||"of", i), ge(e, ()=>n.total, null), ge(e, K(Xe, {
      get when(){
        return n.subText
      },get children(){
        return[" ",Ui(()=>n.subText)]
      }
    }), null), e
  })()
}
function Omy(n){
  const e=wr(), t=eCu(), i=Cfn(), r=pP(ODa), s=pP(UDa), o=pP(gvn), a=pP(pvn), [l, u]=lt([]);
  Ic(()=>{
    const Y=[...e.diffChangeSourceRegistry.getDescriptors()];
    u(Y);
    const j=e.diffChangeSourceRegistry.onDidChange(()=>{
      const X=[...e.diffChangeSourceRegistry.getDescriptors()];
      u(X)
    });
    Ai(()=>j.dispose())
  });
  const d=xe(()=>{
    const Y=l().filter(X=>X.metadata?.source===gce).filter(X=>!e.composerDataService.isWorktreeComposer(X.metadata?.composerId)).filter(X=>!FSt(X.uri)).filter(X=>!X.metadata?.hideDecorations);
    if(!n.uri)return Y;
    const j=Y.find(ee=>VV(ee, n.uri)&&ee.metadata?.composerId)?.metadata?.composerId;
    return j?Y.filter(X=>X.metadata?.composerId===j):Y
  }), m=xe(()=>n.uri?d().some(Y=>VV(Y, n.uri)):!1), p=xe(()=>JDa(d().map(Y=>({
    uri:Y.uri, currentRange:Y.currentRange, createdAt:Y.metadata?.createdAt
  }))).map(Y=>Y.toString())), g=xe(()=>{
    if(!n.uri)return;
    const Y=p().findIndex(j=>j===n.uri?.toString());
    return Y===-1?void 0:Y
  }), [f, A]=lt(0), w=xe(()=>n.uri?d().filter(j=>VV(j, n.uri)).reduce((j, X)=>j+X.changes.length, 0):0), C=()=>{
    if(!m()){
      A(0);
      return
    }
    if(!wN.get(n.editor)){
      A(0);
      return
    }
    const j=d().filter(le=>n.uri&&VV(le, n.uri)), X=n.editor.getModel()?.getLineCount()??0, ee=j.flatMap(le=>le.changes.map(he=>{
      const be=le.currentRange.startLineNumber+he.addedRange.startLineNumber-1,fe=le.currentRange.startLineNumber+he.addedRange.endLineNumberExclusive-1,ke=he.addedRange.startLineNumber===he.addedRange.endLineNumberExclusive,Se=Math.min(ke?be+1:fe,X);
      return{
        start:be,end:fe,widgetLine:Se
      }
    }));
    if(ee.length===0){
      A(0);
      return
    }
    const re=n.editor.getPosition(), ne=n.editor.getVisibleRanges();
    let pe=-1;
    if(re&&ne.some(le=>le.containsPosition(re))&&(pe=ee.findIndex(le=>re.lineNumber>=le.start&&re.lineNumber<=le.end||re.lineNumber===le.widgetLine)), pe===-1&&ne.length>0){
      const le=Math.floor((ne[0].startLineNumber+ne[ne.length-1].endLineNumber)/2);
      pe=ee.reduce((he,be,fe)=>Math.abs(be.start-le)<Math.abs(ee[he].start-le)?fe:he,0)
    }
    A(pe+1)
  };
  An(()=>{
    if(m()){
      sc(C);
      const Y=n.editor.onDidScrollChange(C),j=n.editor.onDidChangeCursorPosition(C),X=n.editor.onDidChangeModelContent(C);
      Ai(()=>{
        Y.dispose(),j.dispose(),X.dispose()
      })
    }
    else A(0)
  }), An(()=>{
    d(), m()&&sc(C)
  });
  const x=()=>{
    if(!wN.get(n.editor)||!n.uri)return;
    const j=d().find(X=>VV(X, n.uri));
    j&&e.diffChangeSourceRegistry.accept(j.id)
  }, I=()=>{
    if(!wN.get(n.editor)||!n.uri)return;
    const j=d().find(X=>VV(X, n.uri));
    j&&e.diffChangeSourceRegistry.reject(j.id)
  }, B=pP(hvn), R=()=>{
    n.editor.focus(), e.commandService.executeCommand(pvn)
  }, N=()=>{
    n.editor.focus(), e.commandService.executeCommand(gvn)
  }, M=xe(()=>g()===void 0||p().length>1), O=xe(()=>i()&&d().filter(Y=>!Y.metadata?.hideDecorations).length===0||n.uri?.scheme===_n.vscodeNotebookCell?!1:d().length>0), $=xe(()=>!m()&&d().length>0), H=()=>{
    n.editor.focus(), wN.get(n.editor)?.navigateToChange("previous", f()), C()
  }, W=()=>{
    n.editor.focus(), wN.get(n.editor)?.navigateToChange("next", f()), C()
  }, z=xe(()=>{
    if(!n.uri)return!1;
    const j=d().find(X=>VV(X, n.uri))?.metadata?.composerId;
    return e.composerDataService.isWorktreeComposer(j)
  });
  return K(Xe, {
    get when(){
      return Ui(()=>!!t())()&&O()
    }, get children(){
      var Y=J$f();
      return ge(Y,K(Xe,{
        get when(){
          return!$()
        },get children(){
          var j=H$f();
          return ge(j,K(Xe,{
            get when(){
              return m()
            },get children(){
              return[(()=>{
                var X=O$f();
                return ge(X,K(kh,{
                  get codicon(){
                    return Be.chevronUp
                  },onMouseDown:H,get hintText(){
                    return s()
                  }
                }),null),ge(X,K(M$f,{
                  get current(){
                    return f()
                  },get total(){
                    return w()
                  },onClick:ee=>{
                    ee.shiftKey||ee.metaKey||ee.ctrlKey?H():W()
                  },subText:void 0
                }),null),ge(X,K(kh,{
                  get codicon(){
                    return Be.chevronDown
                  },onMouseDown:W,get hintText(){
                    return r()
                  }
                }),null),X
              })(),(()=>{
                var X=U$f();
                return X.style.setProperty("height","12px"),X.style.setProperty("width","1px"),X.style.setProperty("opacity","0.4"),X.style.setProperty("background","var(--cursor-text-tertiary)"),X
              })()]
            }
          }),null),ge(j,K(Xe,{
            get when(){
              return M()
            },get children(){
              var X=q$f(),ee=X.firstChild;
              return ge(ee,K(kh,{
                get codicon(){
                  return Be.chevronRight
                },onMouseDown:R,get hintText(){
                  return a()
                }
              })),ge(X,K(Xe,{
                get when(){
                  return d().length>0
                },get children(){
                  return[K(M$f,{
                    get current(){
                      return(g()??0)+1
                    },get total(){
                      return p().length
                    },onClick:re=>{
                      re.shiftKey||re.metaKey||re.ctrlKey?R():N()
                    },subText:void 0
                  }),$$f()]
                }
              }),null),ge(X,K(kh,{
                get codicon(){
                  return Be.chevronRight
                },onMouseDown:N,get hintText(){
                  return o()
                }
              }),null),X
            }
          }),null),ge(j,K(Xe,{
            get when(){
              return Ui(()=>!!m())()&&!z()
            },get children(){
              return[K(xa,{
                variant:"outline",onMouseDown:I,class:"breadcrumbs-action-btn",children:"Undo File"
              }),K(xa,{
                variant:"primary",onMouseDown:x,get keybinding(){
                  return B()
                },class:"breadcrumbs-action-btn",children:"Keep File"
              })]
            }
          }),null),j
        }
      }),null),ge(Y,K(Xe,{
        get when(){
          return $()
        },get children(){
          return K(xa,{
            variant:"secondary",onMouseDown:N,get hintText(){
              return o()
            },class:"breadcrumbs-action-btn",children:"Review Next File"
          })
        }
      }),null),Y
    }
  })
}
var F$f, O$f, U$f, $$f, q$f, H$f, J$f, Umy=