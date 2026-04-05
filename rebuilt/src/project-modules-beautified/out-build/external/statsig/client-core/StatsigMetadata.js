"use strict";

// Module: out-build/external/statsig/client-core/StatsigMetadata.js
// Offset: 26684909 (bundle byte offset)
// Size: 183 bytes
Kpa = "3.20.2";
Ypa = {
    sdkVersion: Kpa,
    sdkType: "js-mono"
};
jtu = {
    get: () => Ypa,
    add: n => {
        Ypa = {
            ...Ypa,
            ...n
        };
    }
};
