// Module: out-build/external/sentry/core/scope.js
// Offset: 26762 (bundle byte offset)
// Size: 5414 bytes

ZT(), nNo(), US(), h9(), qAc(), loe(), tze(), wpt(), mBe(), ide(), fKd=100, dSe=class Yod{
  constructor(){
    this._notifyingListeners=!1, this._scopeListeners=[], this._eventProcessors=[], this._breadcrumbs=[], this._attachments=[], this._user={
      
    }, this._tags={
      
    }, this._extra={
      
    }, this._contexts={
      
    }, this._sdkProcessingMetadata={
      
    }, this._propagationContext={
      traceId:rde(),sampleRand:Math.random()
    }
  }
  clone(){
    const e=new Yod;
    return e._breadcrumbs=[...this._breadcrumbs], e._tags={
      ...this._tags
    }, e._extra={
      ...this._extra
    }, e._contexts={
      ...this._contexts
    }, this._contexts.flags&&(e._contexts.flags={
      values:[...this._contexts.flags.values]
    }), e._user=this._user, e._level=this._level, e._session=this._session, e._transactionName=this._transactionName, e._fingerprint=this._fingerprint, e._eventProcessors=[...this._eventProcessors], e._attachments=[...this._attachments], e._sdkProcessingMetadata={
      ...this._sdkProcessingMetadata
    }, e._propagationContext={
      ...this._propagationContext
    }, e._client=this._client, e._lastEventId=this._lastEventId, fbe(e, H2t(this)), e
  }
  setClient(e){
    this._client=e
  }
  setLastEventId(e){
    this._lastEventId=e
  }
  getClient(){
    return this._client
  }
  lastEventId(){
    return this._lastEventId
  }
  addScopeListener(e){
    this._scopeListeners.push(e)
  }
  addEventProcessor(e){
    return this._eventProcessors.push(e), this
  }
  setUser(e){
    return this._user=e||{
      email:void 0,id:void 0,ip_address:void 0,username:void 0
    }, this._session&&ypt(this._session, {
      user:e
    }), this._notifyScopeListeners(), this
  }
  getUser(){
    return this._user
  }
  setTags(e){
    return this._tags={
      ...this._tags,...e
    }, this._notifyScopeListeners(), this
  }
  setTag(e, t){
    return this._tags={
      ...this._tags,[e]:t
    }, this._notifyScopeListeners(), this
  }
  setExtras(e){
    return this._extra={
      ...this._extra,...e
    }, this._notifyScopeListeners(), this
  }
  setExtra(e, t){
    return this._extra={
      ...this._extra,[e]:t
    }, this._notifyScopeListeners(), this
  }
  setFingerprint(e){
    return this._fingerprint=e, this._notifyScopeListeners(), this
  }
  setLevel(e){
    return this._level=e, this._notifyScopeListeners(), this
  }
  setTransactionName(e){
    return this._transactionName=e, this._notifyScopeListeners(), this
  }
  setContext(e, t){
    return t===null?delete this._contexts[e]:this._contexts[e]=t, this._notifyScopeListeners(), this
  }
  setSession(e){
    return e?this._session=e:delete this._session, this._notifyScopeListeners(), this
  }
  getSession(){
    return this._session
  }
  update(e){
    if(!e)return this;
    const t=typeof e=="function"?e(this):e, i=t instanceof Yod?t.getScopeData():bY(t)?e:void 0, {
      tags:r,extra:s,user:o,contexts:a,level:l,fingerprint:u=[],propagationContext:d
    }
    =i||{
      
    };
    return this._tags={
      ...this._tags,...r
    }, this._extra={
      ...this._extra,...s
    }, this._contexts={
      ...this._contexts,...a
    }, o&&Object.keys(o).length&&(this._user=o), l&&(this._level=l), u.length&&(this._fingerprint=u), d&&(this._propagationContext=d), this
  }
  clear(){
    return this._breadcrumbs=[], this._tags={
      
    }, this._extra={
      
    }, this._user={
      
    }, this._contexts={
      
    }, this._level=void 0, this._transactionName=void 0, this._fingerprint=void 0, this._session=void 0, fbe(this, void 0), this._attachments=[], this.setPropagationContext({
      traceId:rde(),sampleRand:Math.random()
    }), this._notifyScopeListeners(), this
  }
  addBreadcrumb(e, t){
    const i=typeof t=="number"?t:fKd;
    if(i<=0)return this;
    const r={
      timestamp:pBe(),...e,message:e.message?BMn(e.message,2048):e.message
    };
    return this._breadcrumbs.push(r), this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
  }
  getLastBreadcrumb(){
    return this._breadcrumbs[this._breadcrumbs.length-1]
  }
  clearBreadcrumbs(){
    return this._breadcrumbs=[], this._notifyScopeListeners(), this
  }
  addAttachment(e){
    return this._attachments.push(e), this
  }
  clearAttachments(){
    return this._attachments=[], this
  }
  getScopeData(){
    return{
      breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:H2t(this)
    }
  }
  setSDKProcessingMetadata(e){
    return this._sdkProcessingMetadata=PMn(this._sdkProcessingMetadata, e, 2), this
  }
  setPropagationContext(e){
    return this._propagationContext=e, this
  }
  getPropagationContext(){
    return this._propagationContext
  }
  captureException(e, t){
    const i=t?.event_id||NB();
    if(!this._client)return Lg&&Jo.warn("No client configured on scope - will not capture exception!"), i;
    const r=new Error("Sentry syntheticException");
    return this._client.captureException(e, {
      originalException:e,syntheticException:r,...t,event_id:i
    }, this), i
  }
  captureMessage(e, t, i){
    const r=i?.event_id||NB();
    if(!this._client)return Lg&&Jo.warn("No client configured on scope - will not capture message!"), r;
    const s=new Error(e);
    return this._client.captureMessage(e, t, {
      originalException:e,syntheticException:s,...i,event_id:r
    }, this), r
  }
  captureEvent(e, t){
    const i=t?.event_id||NB();
    return this._client?(this._client.captureEvent(e, {
      ...t,event_id:i
    }, this), i):(Lg&&Jo.warn("No client configured on scope - will not capture event!"), i)
  }
  _notifyScopeListeners(){
    this._notifyingListeners||(this._notifyingListeners=!0, this._scopeListeners.forEach(e=>{
      e(this)
    }), this._notifyingListeners=!1)
  }
}
}
});
function bKd(){
  return fpt("defaultCurrentScope", ()=>new dSe)
}
function vKd(){
  return fpt("defaultIsolationScope", ()=>new dSe)
}
var AKd=