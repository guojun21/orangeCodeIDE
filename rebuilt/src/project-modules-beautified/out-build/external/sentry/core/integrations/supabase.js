"use strict";

// Module: out-build/external/sentry/core/integrations/supabase.js
// Offset: 127936 (bundle byte offset)
// Size: 2639 bytes
Awc();
ZT();
bte();
sW();
y6();
rW();
US();
h9();
loe();
zZd = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"];
VZd = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"];
KZd = {
  eq: "eq",
  neq: "neq",
  gt: "gt",
  gte: "gte",
  lt: "lt",
  lte: "lte",
  like: "like",
  "like(all)": "likeAllOf",
  "like(any)": "likeAnyOf",
  ilike: "ilike",
  "ilike(all)": "ilikeAllOf",
  "ilike(any)": "ilikeAnyOf",
  is: "is",
  in: "in",
  cs: "contains",
  cd: "containedBy",
  sr: "rangeGt",
  nxl: "rangeGte",
  sl: "rangeLt",
  nxr: "rangeLte",
  adj: "rangeAdjacent",
  ov: "overlaps",
  fts: "",
  plfts: "plain",
  phfts: "phrase",
  wfts: "websearch",
  not: "not"
};
Twc = ["select", "insert", "upsert", "update", "delete"];
c2n = n => {
  if (!n) {
    if (Lg) {
      Jo.warn("Supabase integration was not installed because no Supabase client was provided.");
    }
    return;
  }
  const e = n.constructor === Function ? n : n.constructor;
  oKv(e);
  sKv(n);
};
YZd = "Supabase";
ZZd = n => ({
  setupOnce() {
    c2n(n);
  },
  name: YZd
});
GNo = n => ZZd(n.supabaseClient);
