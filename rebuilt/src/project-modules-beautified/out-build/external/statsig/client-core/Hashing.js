"use strict";

// Module: out-build/external/statsig/client-core/Hashing.js
// Offset: 26673620 (bundle byte offset)
// Size: 697 bytes
Rtu();
Itt = n => {
    let e = 0;
    for (let t = 0; t < n.length; t++) {
        const i = n.charCodeAt(t);
        e = (e << 5) - e + i;
        e = e & e;
    }
    return String(e >>> 0);
};
Ptu = (n, e) => Itt(JSON.stringify(Ltu(n, e)));
Ltu = (n, e) => {
    if (n == null) {
        return null;
    }
    const t = Object.keys(n).sort();
    const i = {};
    t.forEach(r => {
        const s = n[r];
        if (e === 0 || WMg(s) !== "object") {
            i[r] = s;
            return;
        }
        i[r] = Ltu(s, e != null ? e - 1 : e);
    });
    return i;
};
