"use strict";

// Module: out-build/vs/platform/instantiation/common/instantiation.js
// Offset: 572574 (bundle byte offset)
// Size: 306 bytes
(function (n) {
  n.serviceIds = new Map();
  n.DI_TARGET = "$di$target";
  n.DI_DEPENDENCIES = "$di$dependencies";
  function e(t) {
    return t[n.DI_DEPENDENCIES] || [];
  }
  n.getServiceDependencies = e;
})(qbe ||= {});
ln = xi("instantiationService");
