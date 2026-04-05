"use strict";

// Module: out-build/vs/workbench/contrib/appLayout/common/unifiedAppLayoutContextKeys.js
// Offset: 27466002 (bundle byte offset)
// Size: 2655 bytes
si();
_r();
$F = "cursor.agentIdeUnification.enabled";
_fa = new Sn($F, false, "Whether the agent ide unification is enabled");
s8 = Ee.equals(_fa.key, true);
R2A = Ee.equals(_fa.key, false);
Vtt = "cursor.agentIdeUnification.featureGate";
nru = new Sn(Vtt, true, "Whether the agent ide unification feature gate is enabled (always true)");
NSt = Ee.equals(nru.key, true);
QHg = "cursor.defaultSidebarLocation";
iru = new Sn(QHg, "right", "The default sidebar location for the agent ide unification");
P2A = Ee.equals(iru.key, "right");
L2A = Ee.equals(iru.key, "left");
Ivi = "cursor.agentIdeUnification.sidebarLocation";
Cfa = new Sn(Ivi, "right", "The sidebar location for the agent ide unification");
rru = Ee.equals(Cfa.key, "right");
Sfa = Ee.equals(Cfa.key, "left");
sru = "cursor.agentIdeUnification.unifiedSidebarVisible";
Dvi = new Sn(sru, false, "Whether the unified sidebar is visible");
jHg = Ee.equals(Dvi.key, true);
oru = Ee.equals(Dvi.key, false);
zHg = "cursor.agentIdeUnification.agentsSurfaceVisible";
MSt = new Sn(zHg, false, "Whether any agents surface is visible");
N2A = Ee.equals(MSt.key, true);
M2A = Ee.equals(MSt.key, false);
ONe = "cursor.noTitlebarLayout.enabled";
aru = new Sn(ONe, false, "Whether the no-titlebar layout is currently active (title bar hidden)");
F2A = Ee.equals(aru.key, true);
kfa = -35;
Bvi = "no-titlebar-layout";
cru = 11;
VHg = 60;
KHg = 52;
omn = "cursor.onboarding.showing";
O2A = new Sn(omn, false, "Whether the onboarding UI is currently being displayed");
