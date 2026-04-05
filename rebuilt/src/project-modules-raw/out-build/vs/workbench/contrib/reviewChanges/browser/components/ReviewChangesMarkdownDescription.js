// Module: out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js
// Offset: 34138403 (bundle byte offset)
// Size: 5657 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), BCu(), hCu(), oBa(), v7f=qe("<div>"), A7f=qe("<button class=smart-review-panel__summary-more-button>"), y7f=qe("<div class=smart-review-panel__summary-text><div class=smart-review-panel__summary-content>"), w7f=300
}
});
function jpy(n){
  const e=n.trim().split(/\s+/);
  return e.length>=2?(e[0][0]+e[e.length-1][0]).toUpperCase():n.substring(0, 2).toUpperCase()
}
function _7f(n){
  const e=wr(), [t, i]=lt(void 0), [r, s]=lt(void 0), [o, a]=lt(void 0), {
    linesAdded:l, linesRemoved:u
  }
  =mqf(()=>[...n.resources]);
  An(()=>{
    const f=n.resources.length;
    f>0&&i(f)
  }), An(()=>{
    const f=l();
    f>0&&s(f)
  }), An(()=>{
    const f=u();
    f>0&&a(f)
  });
  const d=xe(()=>{
    const f=n.resources.length, A=t();
    return(n.isLoading??!1)&&f===0&&A!==void 0&&A>0?A:f
  }), m=xe(()=>{
    const f=l(), A=r();
    return(n.isLoading??!1)&&f===0&&A!==void 0&&A>0&&n.resources.length===0?A:f
  }), p=xe(()=>{
    const f=u(), A=o();
    return(n.isLoading??!1)&&f===0&&A!==void 0&&A>0&&n.resources.length===0?A:f
  }), g=()=>n.tabs!==void 0&&n.tabs.length>0;
  return[(()=>{
    var f=D7f(), A=f.firstChild, w=A.firstChild, C=w.firstChild, x=A.nextSibling, I=x.firstChild, B=I.firstChild, R=B.nextSibling, N=R.firstChild, M=N.nextSibling;
    return ge(f, K(Xe, {
      get when(){
        return n.prStatus
      },get children(){
        return K(zpy,{
          get status(){
            return n.prStatus
          }
        })
      }
    }), A), ge(C, ()=>n.title||"\xA0"), ge(w, K(Xe, {
      get when(){
        return n.prUrl
      },get children(){
        return K(kh,{
          class:"smart-review-panel__external-link-icon",get codicon(){
            return Be.linkExternal
          },hintText:"Open in GitHub",onClick:()=>{
            e.analyticsService.trackEvent("pr_review.open_in_github_clicked"),n.onOpenUrl?.(n.prUrl)
          },size:18
        })
      }
    }), null), ge(w, K(Xe, {
      get when(){
        return n.rightTitleElement
      },get children(){
        var O=C7f();
        return ge(O,()=>n.rightTitleElement),O
      }
    }), null), ge(A, K(Xe, {
      get when(){
        return n.summary
      },get children(){
        return K(Wpy,{
          get content(){
            return n.summary
          },get maxHeight(){
            return n.summaryMaxHeight
          },get isTrusted(){
            return n.summaryIsTrusted
          }
        })
      }
    }), null), ge(N, (()=>{
      var O=Ui(()=>d()===1);
      return()=>O()?"1 file":`${d()} files`
    })()), ge(R, K(Xe, {
      get when(){
        return m()>0||p()>0
      },get children(){
        return S7f()
      }
    }), M), ge(M, (()=>{
      var O=Ui(()=>m()>0);
      return()=>O()&&(()=>{
        var $=P7f(),H=$.firstChild;
        return ge($,m,null),$
      })()
    })(), null), ge(M, (()=>{
      var O=Ui(()=>p()>0);
      return()=>O()&&(()=>{
        var $=L7f(),H=$.firstChild;
        return ge($,p,null),$
      })()
    })(), null), ge(x, K(Xe, {
      get when(){
        return n.issuesCount!==void 0&&n.issuesCount>0
      },get children(){
        var O=k7f(),$=O.firstChild,H=$.nextSibling,W=H.firstChild;
        return ge(W,()=>`${n.issuesCount} found`),O
      }
    }), null), ge(x, K(Mpy, {
      get checkStatus(){
        return n.checkStatus
      },get isLoading(){
        return n.isCheckStatusLoading
      },get prNumber(){
        return n.prNumber
      },get prUrl(){
        return n.prUrl
      },get onOpenUrl(){
        return n.onOpenUrl
      },get prComments(){
        return n.prComments
      },get onOpenBugBotDiscussions(){
        return n.onOpenBugBotDiscussions
      },get onFixAllBugBotIssues(){
        return n.onFixAllBugBotIssues
      }
    }), null), ge(x, K(Xe, {
      get when(){
        return n.previewLinks&&n.previewLinks.length>0
      },get children(){
        var O=E7f(),$=O.firstChild,H=$.nextSibling;
        return ge(H,K(ia,{
          get each(){
            return n.previewLinks
          },children:(W,z)=>[K(Xe,{
            get when(){
              return z()>0
            },get children(){
              return N7f()
            }
          }),(()=>{
            var Y=M7f(),j=Y.firstChild,X=j.nextSibling;
            return Y.addEventListener("click",()=>{
              W.url.includes("github.com")?e.openerService.open(je.parse(W.url),{
                openExternal:!0
              }):(n.onOpenPreviewLink??n.onOpenUrl)?.(W.url)
            }),ge(j,()=>W.name),tn(()=>Un(X,Qt.asClassName(Be.linkExternal))),Y
          })()]
        })),O
      }
    }), null), ge(x, K(Xe, {
      get when(){
        return n.authorInfo
      },get children(){
        var O=I7f(),$=O.firstChild,H=$.nextSibling,W=H.firstChild,z=W.firstChild,Y=W.nextSibling;
        return ge(z,K(Xe,{
          get when(){
            return n.authorInfo.avatarUrl
          },get fallback(){
            return(()=>{
              var j=F7f();
              return ge(j,()=>jpy(n.authorInfo.username)),j
            })()
          },get children(){
            var j=x7f();
            return tn(X=>{
              var ee=n.authorInfo.avatarUrl,re=n.authorInfo.username;
              return ee!==X.e&&Zr(j,"src",X.e=ee),re!==X.t&&Zr(j,"alt",X.t=re),X
            },{
              e:void 0,t:void 0
            }),j
          }
        })),ge(W,K(Xe,{
          get when(){
            return n.authorInfo.hasAgentContribution
          },get children(){
            var j=T7f(),X=j.firstChild;
            return tn(()=>Zr(X,"src",og.asBrowserUri("vs/workbench/services/ai/browser/media/cursor_blame_logo.svg").toString(!0))),j
          }
        }),null),ge(Y,()=>n.authorInfo.username,null),ge(Y,K(Xe,{
          get when(){
            return n.authorInfo.hasAgentContribution
          },children:" & Agent"
        }),null),O
      }
    }), null), ge(x, K(Xe, {
      get when(){
        return n.additionalMetaSections
      },get children(){
        return n.additionalMetaSections
      }
    }), null), tn(()=>f.classList.toggle("smart-review-panel__header--no-tabs", !g())), f
  })(), K(Xe, {
    get when(){
      return n.tabs&&n.tabs.length>0||n.rightTabsElement
    }, get children(){
      var f=R7f(),A=f.firstChild,w=A.nextSibling;
      return ge(A,K(ia,{
        get each(){
          return n.tabs
        },children:C=>K(Xe,{
          get when(){
            return C.show===void 0||C.show()
          },fallback:null,get children(){
            var x=O7f();
            return Yd(x,"click",C.onClick),ge(x,()=>C.label),tn(I=>{
              var B=!!C.active,R=!C.active;
              return B!==I.e&&x.classList.toggle("active",I.e=B),R!==I.t&&x.classList.toggle("inactive",I.t=R),I
            },{
              e:void 0,t:void 0
            }),x
          }
        })
      })),ge(w,K(Xe,{
        get when(){
          return n.isLoading
        },get children(){
          var C=B7f();
          return ge(C,K(CL,{
            size:16
          })),C
        }
      }),null),ge(w,K(Xe,{
        get when(){
          return n.rightTabsElement
        },get children(){
          return n.rightTabsElement
        }
      }),null),f
    }
  })]
}
function zpy(n){
  const e=xe(()=>{
    switch(n.status){
      case"open":return"Open";
      case"closed":return"Closed";
      case"draft":return"Draft";
      case"merged":return"Merged";
      default:return n.status,""
    }
  });
  return(()=>{
    var t=U7f();
    return ge(t, e), tn(()=>Un(t, `pr-status-header-indicator ${n.status}`)), t
  })()
}
var C7f, S7f, k7f, E7f, x7f, T7f, I7f, D7f, B7f, R7f, P7f, L7f, N7f, M7f, F7f, O7f, U7f, $7f=