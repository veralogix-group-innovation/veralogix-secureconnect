Veralogix SecureConnect™ for Complexes — Knowledge Base (Master)
0) Brand DNA (non-negotiable)

Aesthetic: futuristic, secure, connected; minimalist layout; high contrast; clean hierarchy.

Backgrounds: always solid black #373435 (Mine Shaft).

Primary UI (heritage greens): #A8CF45, #BAD96B, #7D9C33, #455C08.

Neon accent ramp (updated):
#1FFF00 (31,255,0) · #4FFF00 (79,255,0) · #6FFF00 (111,255,0) · #8FFF00 (143,255,0) · #9FFF00 (159,255,0)
Use for links, interactive states, focus rings, glows.

Typography: Inter (fallback Segoe UI / Roboto). Headings in June Bud or white on black; body in white on black (or Mine Shaft on light green surfaces).

Motion: subtle glow + “hover dust”; no heavy animations; respect reduced-motion.

Accessibility: WCAG AA minimum; clear focus rings; alt text; ARIA labels; logical focus order.

1) Brand Tokens (authoritative CSS)
:root{
  /* Base */
  --base:#373435; --white:#FFFFFF;

  /* Heritage greens (primary UI) */
  --green1:#A8CF45; --green2:#BAD96B; --green3:#7D9C33; --green4:#455C08;

  /* Neon Green Ramp (accents) */
  --neonA:#1FFF00; /* rgb(31,255,0)  */
  --neonB:#4FFF00; /* rgb(79,255,0)  */
  --neonC:#6FFF00; /* rgb(111,255,0) */
  --neonD:#8FFF00; /* rgb(143,255,0) */
  --neonE:#9FFF00; /* rgb(159,255,0) */

  /* Type scale (rem) */
  --h1:2.2; --h2:1.8; --h3:1.4; --body:1.0; --small:.9;

  /* Spacing (rem) */
  --g1:.5; --g2:1; --g3:1.5; --g4:2;
}
.text-heading{font-weight:700; letter-spacing:.2px;}
.text-body{opacity:.94; line-height:1.6;}

Interactive & Motion Tokens (add to /brand.css)
/* Glow + motion tokens */
:root{
  --glow-neon: 0 0 18px rgba(31,255,0,.55);
  --glow-strong: 0 0 28px rgba(79,255,0,.65), 0 0 56px rgba(79,255,0,.35);
  --ease-standard: cubic-bezier(.2,.8,.2,1);
  --dur-fast: 150ms; --dur-med: 250ms; --dur-slow: 900ms;
}

/* Button shell (all variants inherit) */
.btn{ --r:999px; --pad:.85rem 1.2rem;
  border-radius:var(--r); padding:var(--pad); border:0; cursor:pointer;
  transition: transform var(--dur-fast) var(--ease-standard),
             filter var(--dur-fast) var(--ease-standard),
             box-shadow var(--dur-fast) var(--ease-standard);
  will-change: transform, filter, box-shadow;
  color: var(--white);
}
:focus-visible{ outline:2px solid var(--neonC); outline-offset:3px; }

/* Structure-only variants (effects added later) */
.btn--primary{
  background:linear-gradient(135deg,var(--neonA),var(--neonC) 55%,var(--neonE));
  color:#0A0A0A; box-shadow:var(--glow-neon);
}
.btn--ghost{
  background:transparent; color:var(--white);
  border:1px solid var(--neonB);
}

2) Content Voice

Confident, technical-but-clear; benefits over buzzwords; numbers where possible.

Veralogix SecureConnect™ is the provider; avoid vendor-neutral language unless comparing.

Copy pattern:
Problem — 1 sentence.
Capability — 1 sentence.
KPIs (3 bullets) — realistic ranges (e.g., “Common-area energy −18–25%”, “MTTR ↓ 35–45%”, “False alarms ↓ 30–40%”).

3) Site Map & Routes

/ Home (hero + value props + CTAs)

/services grid → /services/[slug] detail templates

/demo read-only dashboard (mock data)

/case-studies 2–3 wins with KPIs

/contact validated form

/privacy, /security (POPIA-aware placeholders)

Performance target: Lighthouse ≥90 (Home, Services). Lazy-load videos, optimize SVGs, prefetch fonts.

4) Core Components (reusable, brand-locked)

GlowButton (primary/ghost).
GlowButton variants (must support reduced-motion):
btn--neon (breathing glow, primary), btn--shimmer (diagonal sheen, secondary), btn--dust (hover dust, tertiary), btn--mag (magnetic tilt, hero CTAs), btn--ripple (press feedback, forms).
All variants: black base context, neon ramp accents, AA contrast, visible focus ring.

ServiceCard: black glass, thin neonB rim-light, icon, 2-line benefit, “Explore” CTA.

NeonSectionHeading: June Bud/white text, gentle top glow.

MetricPill: compact KPI chip, neonC on black.

FeatureDiagram (SVG): nodes/flows; green nodes; neon connectors; clear labels.

DataSparkline & Charts: single-hue neon ramp (A–E); aria-labeled; no 3D.

FAQAccordion: keyboard-navigable; one open at a time.

CardPanel: glassy black panels for summaries and CTAs.

5) Services (canonical list)

Create a card + full detail page for each:

Smart Building IoT Sensors

AI-Powered Tenant Concierge

Biometric Access Control

Vertical Indoor Farms

Predictive Maintenance AI

EV Charging Infrastructure

Augmented Reality Leasing

Drone Roof Inspections

Dynamic Pricing Algorithms

Wellness Monitoring Sensors

Virtual Property Management

Community Engagement Platform

Each Service Detail page includes: sticky summary (Problem/Capability/KPIs), FeatureDiagram, 30-sec video slot, 3 quantified benefits (MetricPills), FAQ accordion, CTA panel with GlowButton.

6) “How it works” — diagram briefs (map by slug)

/services/iot-sensors: sensor nodes → LoRaWAN gateway → BMS/IoT platform → dashboards & alerts → predictive-maintenance loop.

/services/ai-concierge: resident request → NLP intent → route (bookings/maintenance/FAQ) → status update & notifications.

/services/biometric-access: enrollment → on-device match → door controller → audit log; include privacy/consent.

/services/vertical-farms: hydro/aero stacks → sensor feedback → LED + irrigation control → harvest → community hub.

/services/predictive-maintenance: data lake → ML anomaly model → ticket priority → dispatch → model improves via outcomes.

/services/ev-charging: smart load manager → chargers → solar/battery buffer → off-peak scheduling / demand response.

/services/ar-leasing: 3D scan → virtual tour → CRM lead capture → e-lease.

/services/drone-roof-inspections: flight plan → roof imaging → defect detection → maintenance ticket.

/services/dynamic-pricing: demand/seasonality/costs → pricing engine → resident UI → governance guardrails.

/services/wellness-sensors: CO₂/PM/VOC/noise → thresholds → HVAC adjustments → comfort index.

/services/virtual-pm: tenant portal ↔ work orders ↔ payments ↔ IoT oversight.

/services/community-platform: events/messaging/polls → moderation → analytics.

7) Demo Dashboard (/demo)

Tiles (read-only, mocked JSON):

Access Events (timestamp, entry point, result)

Sensors (OK/Warning/Offline badges)

Energy (7-day area chart, kWh)

Water (bar chart, m³/day)

EV Load Manager (timeline vs. building cap)

Maintenance Queue (P1–P3, last updated)

Theme control: slider adjusts glow intensity only (color tokens unchanged).

8) Case Studies (/case-studies)

Card format: headline KPI, 100–140-word narrative, “What changed” bullets, mini before/after compare (two metrics).

9) Contact (/contact)

Fields: name, email, organization, message.
Validation: required + email format; clear error hints.
Success: confirmation panel.
Secondary CTA: Request a live demo (link stub ok).

10) Media Prompts (hero & service slots)

Hero: night residential complex, neon-green edge lights, soft data streams, escort drone motif, black base, subtle particle “dust,” smooth ease-in/out.

Service 30s reels: “Seamless Security” / “Connected Living” / “Sustainable Ops”: biometric panel → door event → dashboard glow; sensor overlays → prediction banner; EV schedule timeline sweep.

11) Compliance & Trust (bake into UI & copy)

Security: RBAC, MFA, encryption in transit/at rest, patch cadence, incident playbooks, audit logs.

Privacy: POPIA-aware; explicit consent for biometrics; data minimization; retention windows stated.

Governance: configuration guardrails (pricing/access), change logs visible to admins.

Microcopy seeds:
“We encrypt data at rest and in transit.”
“Biometric templates are processed on device with consent.”
“All access events are immutably logged.”

12) Accessibility & QA Checklist

AA+ contrast on critical UI; neon for accents (avoid long passages of neon text).

Keyboard: visible focus, logical order, no traps.

Screen readers: label icons; charts get aria-describedby captions.

Performance: LCP < 2.5s on 4G; images compressed; SVGs optimized; videos lazy-loaded.

Content: no lorem; each service has Problem/Capability/KPIs.

Brand: black base; heritage greens for primaries; neon ramp for interactives.

13) Data Schemas (mock JSON)
{
  "accessEvents":[
    {"ts":"2025-10-22T18:31:00Z","point":"Lobby A","result":"Granted"},
    {"ts":"2025-10-22T18:29:12Z","point":"Parking P2","result":"Denied"}
  ],
  "sensors":[
    {"id":"env-101","type":"CO2","status":"OK"},
    {"id":"door-404","type":"Door","status":"Warning"}
  ],
  "energy":[{"d":"2025-10-16","kWh":1188},{"d":"2025-10-22","kWh":1097}],
  "water":[{"d":"2025-10-16","m3":72},{"d":"2025-10-22","m3":66}],
  "evSchedule":[
    {"start":"18:00","end":"21:00","kw":120,"cap":150},
    {"start":"21:00","end":"00:00","kw":140,"cap":150}
  ],
  "maintenance":[
    {"id":"M-1042","priority":"P1","title":"Roof leak above lift","updated":"2025-10-22T16:05Z"}
  ]
}

14) Writing Templates (drop-in)

Problem — One sentence stating friction or risk.
Capability — One sentence stating what SecureConnect™ delivers.
KPIs

Metric with believable range

Metric with believable range

Metric with believable range

FAQ seeds

How does deployment work? Phased: common areas → amenities → units.

What about privacy? Consent, minimization, POPIA notices; opt-outs where feasible.

Who sees my data? Role-based access; audit logging; least-privilege defaults.

15) Animation & Motion Standards

UI hovers/clicks: 150–300 ms. Hero loops: 900–1200 ms.

Easing: cubic-bezier(0.2,0.8,0.2,1); no bounce.

Particle density: low; never obscure text/affordances.

Reduced motion: wrap any nonessential animation in @media (prefers-reduced-motion: no-preference){ … }.

15.1 Button Animation Recipes (CodePen-ready)

Use these CSS/JS snippets in the project (or buttons.css / buttons.js).

/* Neon Pulse (primary CTA) */
.btn--neon{
  background:linear-gradient(135deg,var(--neonA),var(--neonC) 55%,var(--neonE));
  color:#0A0A0A; filter:saturate(1.05); box-shadow:var(--glow-neon);
}
.btn--neon:hover{ filter:brightness(1.06) saturate(1.2); box-shadow:var(--glow-strong); }
@media (prefers-reduced-motion:no-preference){
  .btn--neon{ animation:breath 2.8s var(--ease-standard) infinite }
  @keyframes breath{ 50%{ box-shadow:0 0 18px rgba(31,255,0,.35) } }
}

/* Shimmer Line (secondary CTA) */
.btn--shimmer{ position:relative; overflow:hidden; color:var(--white);
  background:color-mix(in oklab,#000 80%,var(--neonC));
  border:1px solid color-mix(in oklab,var(--neonB) 55%,#000);
}
.btn--shimmer::after{ content:""; position:absolute; inset:-150% -20%;
  background:linear-gradient(75deg,transparent 45%,rgba(255,255,255,.18) 50%,transparent 55%);
  transform:translateX(-20%);
}
.btn--shimmer:hover::after{ animation:shimmer 900ms var(--ease-standard); }
@keyframes shimmer{ to{ transform:translateX(40%) } }

/* Hover Dust (tertiary/micro) */
.btn--dust{ position:relative; background:#111; color:var(--white); border:1px solid var(--neonB); }
.btn--dust i{ position:absolute; inset:0; pointer-events:none;
  mask:radial-gradient(6px 6px at 50% 50%, #000 98%, transparent);
  background:
    radial-gradient(3px 3px at 10% 40%, var(--neonB) 40%, transparent 45%),
    radial-gradient(2px 2px at 80% 30%, var(--neonD) 40%, transparent 45%),
    radial-gradient(2px 2px at 40% 70%, var(--neonA) 40%, transparent 45%),
    radial-gradient(3px 3px at 60% 20%, var(--neonE) 40%, transparent 45%);
  opacity:0; transition:opacity var(--dur-med) var(--ease-standard);
}
.btn--dust:hover i{ opacity:.55; filter:blur(.2px) drop-shadow(0 0 6px var(--neonC)); }

/* Magnetic Tilt (hero only) */
.btn--mag{ background:linear-gradient(135deg,#0d0d0d,#161616); color:var(--white);
  border:1px solid var(--neonB); transform:perspective(600px) rotateX(0) rotateY(0);
}
.btn--mag[data-tilt]{ transform:perspective(600px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(var(--tz,0px)); }
.btn--mag:hover{ box-shadow:var(--glow-strong); }

/* Press Ripple (forms/dialogs) */
.btn--ripple{ position:relative; overflow:hidden;
  background:linear-gradient(135deg,#0e0e0e,#141414);
  color:var(--white); border:1px solid var(--neonB);
}
.btn--ripple span.r{ position:absolute; border-radius:50%;
  transform:translate(-50%,-50%); width:6px; height:6px;
  background:radial-gradient(circle,var(--neonC),transparent 60%);
  animation:rip 600ms ease-out forwards;
}
@keyframes rip{ from{ opacity:.6; scale:1 } to{ opacity:0; scale:25 } }

/* Magnetic tilt (no deps) */
document.querySelectorAll('.btn--mag').forEach(btn=>{
  btn.addEventListener('pointermove',e=>{
    const r=btn.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
    const rx=(.5-(y/r.height))*8, ry=((x/r.width)-.5)*10;
    btn.style.setProperty('--rx', rx.toFixed(2)+'deg');
    btn.style.setProperty('--ry', ry.toFixed(2)+'deg');
    btn.style.setProperty('--tz','12px'); btn.setAttribute('data-tilt','');
  });
  btn.addEventListener('pointerleave',()=>{ btn.style.cssText=''; btn.removeAttribute('data-tilt'); });
});

/* Press ripple */
document.addEventListener('click',e=>{
  const b=e.target.closest('.btn--ripple'); if(!b) return;
  const r=b.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
  const s=document.createElement('span'); s.className='r'; s.style.left=x+'px'; s.style.top=y+'px';
  b.appendChild(s); s.addEventListener('animationend',()=>s.remove());
});


Usage snippet (for docs or Storybook):

<button class="btn btn--neon">Book a demo</button>
<button class="btn btn--shimmer">View services</button>
<button class="btn btn--dust">Learn more<i aria-hidden="true"></i></button>
<button class="btn btn--mag">Open dashboard</button>
<button class="btn btn--ripple">Contact us</button>

16) Governance & Change Management (copy cues)

Onboarding: resident comms pack; short clips; concierge scripts.

Ops cadence: weekly checks → monthly reviews → quarterly reports.

Risk: RACI, vendor SLAs, patch windows, incident drills.

17) Lovable Build Prompts (ready to paste)

Bootstrap

Create project “Veralogix SecureConnect™ for Complexes”. Add /brand.css with tokens (sections 1 + Interactive & Motion Tokens). Generate pages: /, /services, /demo, /case-studies, /contact, /privacy, /security. Create components: GlowButton (+ variants), ServiceCard, NeonSectionHeading, MetricPill, FeatureDiagram, DataSparkline, FAQAccordion, CardPanel. Apply brand DNA and accessibility globally.

Services

On /services, build a 3×4 grid for the 12 services; generate /services/[slug] with sticky summary (Problem/Capability/KPIs), FeatureDiagram (use briefs), 30s video slot, 3 MetricPills, FAQ accordion, and CTA panel.

Dashboard

Create /demo with tiles (Access Events, Sensors, Energy, Water, EV Load Manager, Maintenance Queue) using the mock JSON schema; add a glow-intensity slider that only changes glow strength.

Polish & QA

Enforce AA contrast, visible focus, alt/ARIA, Lighthouse ≥90 on / & /services, lazy-load video slots, optimize SVGs, remove lorem.

If off-brand

Reapply black base #373435, heritage greens for primary surfaces, neon ramp for interactive accents only, focus rings with var(--neonC).

18) Do / Don’t Quick Rules

Do: use neon ramp for links, hovers, focus, highlights; keep text mostly white.

Don’t: write long passages in neon; mix non-green neons; animate layout shifts; hide focus rings.

19) Glossary

BMS (Building Management System) · MTTR (Mean Time To Repair) · RBAC (Role-Based Access Control) · POPIA (South Africa privacy law) · LoRaWAN (low-power wide-area IoT).

20) Acceptance Criteria (sign-off)

Brand fidelity (black base, greens, neon ramp, glow rules) ✅

Accessibility AA (contrast, focus, SR labels, keyboard) ✅

Performance ≥90 (Home, Services) ✅

Content complete (Problem/Capability/KPIs + FAQ per service) ✅

Demo dashboard stable (loads mock data; glow toggle works) ✅
