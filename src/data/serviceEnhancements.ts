// Per-service enhancements: diagram captions + proof points (outcomes, deployment scope, integrations)
// Keyed by the same slug as serviceDetails.ts

export interface ProofPoint {
  label: string;
  value: string;
  detail: string;
}

export interface ServiceEnhancement {
  diagramCaption: string;
  proofPoints: ProofPoint[];
  serviceType: string; // Schema.org Service.serviceType
}

export const serviceEnhancements: Record<string, ServiceEnhancement> = {
  "smart-iot-sensors": {
    diagramCaption:
      "Wireless sensor nodes stream telemetry through a LoRaWAN gateway into the BMS, where dashboards and predictive alerts close the loop back to maintenance.",
    proofPoints: [
      { label: "Deployment Scope", value: "100 units in 2–3 days", detail: "Wireless install, no invasive wiring or resident disruption." },
      { label: "Outcome", value: "18–25% energy cut", detail: "Measured across common-area HVAC and lighting in year one." },
      { label: "Integrations", value: "Yardi · AppFolio · Buildium", detail: "REST APIs and webhooks feed existing PMS stacks." },
    ],
    serviceType: "Smart Building IoT Monitoring",
  },
  "ai-concierge": {
    diagramCaption:
      "Every resident message is parsed by an NLP intent model, routed to the right workflow, and answered with a live status update — human handoff on request.",
    proofPoints: [
      { label: "Deployment Scope", value: "Live in 2 weeks", detail: "Property rules and FAQs loaded during onboarding; learns from each interaction." },
      { label: "Outcome", value: "40–50% staff workload cut", detail: "Routine tickets resolved instantly, freeing teams for high-touch work." },
      { label: "Languages", value: "5 supported at launch", detail: "English, Spanish, Mandarin, French, German at 90%+ accuracy." },
    ],
    serviceType: "AI Tenant Concierge",
  },
  "biometric-access": {
    diagramCaption:
      "Enrollment captures consent; matching runs on-device so raw biometrics never leave the door controller — every entry writes to an immutable audit log.",
    proofPoints: [
      { label: "Outcome", value: "60–70% fewer incidents", detail: "Cloned cards eliminated; every entry cryptographically logged." },
      { label: "Privacy", value: "On-device templates", detail: "No biometric images stored; POPIA/GDPR-aligned consent workflow." },
      { label: "Deployment Scope", value: "Doors live in 1 day each", detail: "Retrofits existing controllers; PIN + mobile fallback always available." },
    ],
    serviceType: "Biometric Access Control",
  },
  "vertical-farms": {
    diagramCaption:
      "Hydroponic stacks are tuned by nutrient and climate sensors, LEDs and irrigation respond automatically, and harvested produce flows into a resident hub.",
    proofPoints: [
      { label: "Deployment Scope", value: "200 sq ft feeds 100 units", detail: "Rooftop or unused common areas convert cleanly." },
      { label: "Outcome", value: "90% less water", detail: "Closed-loop hydroponics vs. soil farming, zero transport emissions." },
      { label: "Resident Value", value: "30–40% below retail", detail: "Fresh greens and herbs delivered year-round." },
    ],
    serviceType: "Vertical Indoor Farming",
  },
  "predictive-maintenance": {
    diagramCaption:
      "Equipment telemetry lands in a data lake; an ML model flags anomalies, prioritises tickets, dispatches technicians, and learns from every outcome.",
    proofPoints: [
      { label: "Outcome", value: "60–70% fewer emergencies", detail: "Failures forecast 2–4 weeks ahead at 92% accuracy." },
      { label: "Deployment Scope", value: "HVAC, lifts, pumps, gensets", detail: "Any equipment with electronic controls or IoT-ready sensors." },
      { label: "Payback", value: "<12 months", detail: "Through avoided emergency callouts and extended asset life." },
    ],
    serviceType: "Predictive Maintenance AI",
  },
  "ev-charging": {
    diagramCaption:
      "A smart load manager negotiates chargers against building capacity, blends in solar and battery buffer, and shifts sessions to off-peak windows.",
    proofPoints: [
      { label: "Outcome", value: "Zero overload events", detail: "Dynamic load balancing stays inside the building's electrical envelope." },
      { label: "Deployment Scope", value: "1 charger per 10 units", detail: "Modular Level 2 and DC fast; scales without infrastructure overhaul." },
      { label: "Revenue", value: "$150–300/mo per charger", detail: "Flexible billing: amenity, pass-through, premium, or subscription." },
    ],
    serviceType: "EV Charging Infrastructure",
  },
  "ar-leasing": {
    diagramCaption:
      "One 3D scan powers 24/7 virtual tours; leads flow into CRM, prospects self-qualify, and e-signature closes the lease without an office visit.",
    proofPoints: [
      { label: "Outcome", value: "+35% conversion", detail: "Prospects arrive pre-qualified and emotionally invested." },
      { label: "Deployment Scope", value: "One model per floorplan", detail: "30–45 min scan represents all similar units; published within 24 hours." },
      { label: "Reach", value: "Any device", detail: "Runs on phone, tablet, or desktop — no app or headset required." },
    ],
    serviceType: "AR Virtual Leasing Tours",
  },
  "dynamic-pricing": {
    diagramCaption:
      "Fifty-plus demand and cost signals feed a pricing engine that proposes rates inside operator-set governance guardrails before publishing to the resident UI.",
    proofPoints: [
      { label: "Outcome", value: "+10–15% revenue", detail: "Measurable within 30 days; full optimisation by 90 days." },
      { label: "Governance", value: "Floors, ceilings, approvals", detail: "Operator sets guardrails; AI never breaches compliance limits." },
      { label: "Deployment Scope", value: "Existing residents protected", detail: "Applies to new leases and renewals only, never mid-lease." },
    ],
    serviceType: "Dynamic Rent Pricing AI",
  },
  "wellness-monitoring": {
    diagramCaption:
      "CO₂, VOC, PM2.5 and noise sensors feed threshold logic that retunes HVAC in real time and publishes a comfort index to residents and staff.",
    proofPoints: [
      { label: "Outcome", value: "95% excellent air-quality hours", detail: "Continuous auto-tuning against occupancy and pollutant load." },
      { label: "Energy", value: "–20% HVAC spend", detail: "Runtime driven by real demand, not fixed schedules." },
      { label: "Transparency", value: "Per-unit comfort score", detail: "Residents see their own metrics plus anonymised building averages." },
    ],
    serviceType: "Indoor Wellness Monitoring",
  },
  "virtual-property-management": {
    diagramCaption:
      "A single cloud platform unifies the tenant portal, work-order flow, payments, and IoT oversight — with offline caching for outage resilience.",
    proofPoints: [
      { label: "Outcome", value: "99% rent collection", detail: "Up from 94% baseline; late payments down 85% with auto-pay." },
      { label: "SLA", value: "<2 hr response", detail: "Down from 18 hr average across pilot portfolios." },
      { label: "Security", value: "SOC 2 Type II · AES-256", detail: "99.9% uptime with automatic encrypted backups." },
    ],
    serviceType: "Virtual Property Management Platform",
  },
  "drone-inspections": {
    diagramCaption:
      "A pre-programmed flight captures 4K and thermal imagery; AI grades defects by severity and drops a prioritised maintenance ticket into the queue.",
    proofPoints: [
      { label: "Safety", value: "Zero roof-access incidents", detail: "No technicians on the roof; FAA Part 107 pilots handle every flight." },
      { label: "Turnaround", value: "48-hour report", detail: "4K video, thermal anomalies, 3D model, repair estimates included." },
      { label: "Outcome", value: "+40–50% defect detection", detail: "AI catches damage that manual walks routinely miss." },
    ],
    serviceType: "Drone Roof Inspection Service",
  },
  "community-platform": {
    diagramCaption:
      "Residents post events, messages and polls into a private feed; AI moderation filters content and analytics surface engagement to management.",
    proofPoints: [
      { label: "Outcome", value: "+30% retention", detail: "Residents with community connections are 3× more likely to renew." },
      { label: "Adoption", value: "85% active users", detail: "Verified-resident-only access with automated offboarding." },
      { label: "Safety", value: "AI + human moderation", detail: "Configurable guidelines with appeals and emergency broadcast." },
    ],
    serviceType: "Resident Community Engagement Platform",
  },
  "guardian-follow-me": {
    diagramCaption:
      "One tap in the app dispatches a drone within 60 seconds; it lights the path, streams live video to the SOC, and auto-returns to charge after the escort.",
    proofPoints: [
      { label: "Outcome", value: "85% fewer night incidents", detail: "Illuminated escort plus 24/7 SOC monitoring closes the vulnerability window." },
      { label: "Deployment Scope", value: "2–4 drones per property", detail: "Fleet manager queues requests; <2 min wait even at peak." },
      { label: "Privacy", value: "Mission-only recording", detail: "Consent-gated, 30-day encrypted retention, POPIA/GDPR aligned." },
    ],
    serviceType: "Autonomous Safety Escort Drone",
  },
};
