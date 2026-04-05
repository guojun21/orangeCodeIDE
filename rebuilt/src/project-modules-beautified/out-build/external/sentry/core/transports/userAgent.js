"use strict";

// Module: out-build/external/sentry/core/transports/userAgent.js
// Offset: 94197 (bundle byte offset)
// Size: 1841 bytes
Ae({
    "out-build/external/sentry/core/transports/userAgent.js"() {
        "use strict";
    }
});

function rwc(n, e) {
    return n(e.stack || "", 1);
}

function swc(n, e) {
    const t = {
        type: e.name || e.constructor.name,
        value: e.message
    };
    const i = rwc(n, e);
    if (i.length) {
        t.stacktrace = {
            frames: i
        };
    }
    return t;
}

function zzv(n) {
    for (const e in n) {
        if (Object.prototype.hasOwnProperty.call(n, e)) {
            const t = n[e];
            if (t instanceof Error) {
                return t;
            }
        }
    }
}

function Vzv(n) {
    if ("name" in n && typeof n.name == "string") {
        let i = `'${n.name}' captured as exception`;
        if ("message" in n && typeof n.message == "string") {
            i += ` with message '${n.message}'`;
        }
        return i;
    } else if ("message" in n && typeof n.message == "string") {
        return n.message;
    }
    const e = eNo(n);
    if ($2t(n)) {
        return `Event \`ErrorEvent\` captured as exception with message \`${n.message}\``;
    }
    const t = Kzv(n);
    return `${t && t !== "Object" ? `'${t}'` : "Object"} captured as exception with keys: ${e}`;
}

function Kzv(n) {
    try {
        const e = Object.getPrototypeOf(n);
        if (e) {
            return e.constructor.name;
        } else {
            return undefined;
        }
    } catch {}
}

function Yzv(n, e, t, i) {
    if (uSe(t)) {
        return [t, undefined];
    }
    e.synthetic = true;
    if (bY(t)) {
        const s = n?.getOptions().normalizeDepth;
        const o = {
            __serialized__: jMn(t, s)
        };
        const a = zzv(t);
        if (a) {
            return [a, o];
        }
        const l = Vzv(t);
        const u = i?.syntheticException || new Error(l);
        u.message = l;
        return [u, o];
    }
    const r = i?.syntheticException || new Error(t);
    r.message = `${t}`;
    return [r, undefined];
}

function $Yd(n, e, t, i) {
    const s = i?.data && i.data.mechanism || {
        handled: true,
        type: "generic"
    };
    const [o, a] = Yzv(n, s, t, i);
    const l = {
        exception: {
            values: [swc(e, o)]
        }
    };
    if (a) {
        l.extra = a;
    }
    eze(l, undefined, undefined);
    nW(l, s);
    return {
        ...l,
        event_id: i?.event_id
    };
}

function qYd(n, e, t = "info", i, r) {
    const s = {
        event_id: i?.event_id,
        level: t
    };
    if (r && i?.syntheticException) {
        const o = rwc(n, i.syntheticException);
        if (o.length) {
            s.exception = {
                values: [{
                    value: e,
                    stacktrace: {
                        frames: o
                    }
                }]
            };
            nW(s, {
                synthetic: true
            });
        }
    }
    if (Apt(e)) {
        const {
            __sentry_template_string__: o,
            __sentry_template_values__: a
        } = e;
        s.logentry = {
            message: o,
            params: a
        };
        return s;
    }
    s.message = e;
    return s;
}
