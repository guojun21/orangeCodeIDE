// Module: out-build/vs/platform/action/common/actionBadgeService.js
// Offset: 2297995 (bundle byte offset)
// Size: 717 bytes

yn(), Er(), Wt(), cve=xi("actionBadgeService"), HCh=class{
  constructor(){
    this._onDidChangeBadge=new Qe, this.onDidChangeBadge=this._onDidChangeBadge.event, this._badgesByActionId=new Map
  }
  setBadge(n, e){
    e?this._badgesByActionId.set(n, e):this._badgesByActionId.delete(n), this._onDidChangeBadge.fire({
      actionId:n,badge:e
    })
  }
  getBadge(n){
    return this._badgesByActionId.get(n)
  }
  clearBadge(n){
    this._badgesByActionId.delete(n), this._onDidChangeBadge.fire({
      actionId:n,badge:void 0
    })
  }
}, Vi(cve, HCh, 0)
}
});
function N3n(n){
  return n&&typeof n=="object"&&typeof n.original=="string"&&typeof n.value=="string"
}
function ZDc(n){
  return n?n.condition!==void 0:!1
}
var vbt=