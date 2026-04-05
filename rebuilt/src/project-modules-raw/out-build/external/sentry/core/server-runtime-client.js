// Module: out-build/external/sentry/core/server-runtime-client.js
// Offset: 96338 (bundle byte offset)
// Size: 1932 bytes

UYd(), FYd(), aT(), ZT(), rW(), jzv(), US(), owc(), loe(), ZMn(), zyc(), JYd=class extends s2n{
  constructor(n){
    QMn(), Qzv(n), super(n)
  }
  eventFromException(n, e){
    const t=$Yd(this, this._options.stackParser, n, e);
    return t.level="error", e5e(t)
  }
  eventFromMessage(n, e="info", t){
    return e5e(qYd(this._options.stackParser, n, e, t, this._options.attachStacktrace))
  }
  captureException(n, e, t){
    return HYd(e), super.captureException(n, e, t)
  }
  captureEvent(n, e, t){
    return!n.type&&n.exception?.values&&n.exception.values.length>0&&HYd(e), super.captureEvent(n, e, t)
  }
  captureCheckIn(n, e, t){
    const i="checkInId"in n&&n.checkInId?n.checkInId:NB();
    if(!this._isEnabled())return Lg&&Jo.warn("SDK not enabled, will not capture check-in."), i;
    const r=this.getOptions(), {
      release:s,environment:o,tunnel:a
    }
    =r, l={
      check_in_id:i,monitor_slug:n.monitorSlug,status:n.status,release:s,environment:o
    };
    "duration"in n&&(l.duration=n.duration), e&&(l.monitor_config={
      schedule:e.schedule,checkin_margin:e.checkinMargin,max_runtime:e.maxRuntime,timezone:e.timezone,failure_issue_threshold:e.failureIssueThreshold,recovery_threshold:e.recoveryThreshold
    });
    const[u, d]=jyc(this, t);
    d&&(l.contexts={
      trace:d
    });
    const m=OYd(l, u, this.getSdkMetadata(), a, this.getDsn());
    return Lg&&Jo.log("Sending checkin:", n.monitorSlug, n.status), this.sendEnvelope(m), i
  }
  _prepareEvent(n, e, t, i){
    return this._options.platform&&(n.platform=n.platform||this._options.platform), this._options.runtime&&(n.contexts={
      ...n.contexts,runtime:n.contexts?.runtime||this._options.runtime
    }), this._options.serverName&&(n.server_name=n.server_name||this._options.serverName), super._prepareEvent(n, e, t, i)
  }
}
}
});
function awc(n, e){
  e.debug===!0&&(Lg?Jo.enable():dBe(()=>{
    console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
  })), ry().update(e.initialScope);
  const i=new n(e);
  return TNo(i), i.init(), i
}
function TNo(n){
  ry().setClient(n)
}
var Xzv=