export interface ServiceDetail {
  title: string;
  tagline: string;
  problem: string;
  capability: string;
  kpis: string[];
  benefits: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  howItWorks: { steps: string[] };
  faqs: { question: string; answer: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "smart-iot-sensors": {
    title: "Smart IoT Sensors",
    tagline: "Transform your complex into an intelligent ecosystem",
    problem: "Buildings operate blindly, wasting energy and reacting to failures instead of preventing them.",
    capability: "SecureConnect™ IoT sensors deliver real-time environmental intelligence with predictive alerts.",
    kpis: [
      "Common-area energy –18–25%",
      "MTTR ↓ 35–45%",
      "False alarms ↓ 30–40%"
    ],
    benefits: [
      "30% reduction in energy costs through real-time monitoring",
      "Proactive leak detection prevents $50K+ water damage claims",
      "99.9% sensor uptime with <5 min emergency response time"
    ],
    features: [
      "Temperature, humidity, and air quality sensors",
      "Water leak detection and flow monitoring",
      "Energy consumption tracking per unit",
      "Cloud dashboard with mobile alerts"
    ],
    metrics: [
      { label: "Energy Savings", value: "30%" },
      { label: "Response Time", value: "<5 min" },
      { label: "Sensor Uptime", value: "99.9%" }
    ],
    howItWorks: {
      steps: [
        "Sensor nodes deployed",
        "LoRaWAN gateway relay",
        "BMS/IoT platform integration",
        "Dashboards & alerts",
        "Predictive maintenance loop"
      ]
    },
    faqs: [
      {
        question: "How long does installation take?",
        answer: "Typical installation for a 100-unit complex takes 2-3 days with minimal disruption to residents. Sensors are wireless and require no invasive wiring."
      },
      {
        question: "What happens if a sensor fails?",
        answer: "Our sensors self-monitor and report any connectivity issues. We provide 24/7 support and same-day replacement for any failed units under warranty."
      },
      {
        question: "Can I integrate with my existing property management system?",
        answer: "Yes, our platform offers REST APIs and webhooks that integrate with most major property management systems including Yardi, AppFolio, and Buildium."
      },
      {
        question: "What's the ROI timeline?",
        answer: "Most properties see positive ROI within 18-24 months through energy savings, reduced maintenance costs, and prevented water damage claims."
      }
    ]
  },
  "ai-concierge": {
    title: "AI Concierge",
    tagline: "Your 24/7 intelligent building assistant",
    problem: "Residents wait hours for simple answers while staff drown in repetitive inquiries.",
    capability: "SecureConnect™ AI Concierge resolves 85% of queries instantly with natural language understanding.",
    kpis: [
      "Staff workload ↓ 40–50%",
      "Response time <30s (vs. 4hr avg)",
      "Satisfaction 4.7/5.0"
    ],
    benefits: [
      "85% of queries resolved instantly with <30s response time",
      "Automated maintenance request routing reduces staff workload by 40%",
      "4.7/5 resident satisfaction score with 24/7 availability"
    ],
    features: [
      "Natural language processing in multiple languages",
      "Integration with property management systems",
      "Voice and chat interfaces",
      "Learning algorithm improves over time"
    ],
    metrics: [
      { label: "Resolution Rate", value: "85%" },
      { label: "Avg Response", value: "<30s" },
      { label: "Satisfaction", value: "4.7/5" }
    ],
    howItWorks: {
      steps: [
        "Resident request received",
        "NLP intent analysis",
        "Route to booking/maintenance/FAQ",
        "Status update & notification"
      ]
    },
    faqs: [
      {
        question: "Does it replace human staff?",
        answer: "No, it augments your team by handling routine inquiries 24/7, freeing staff to focus on complex issues and personal interactions that require human touch."
      },
      {
        question: "What languages are supported?",
        answer: "Currently supports English, Spanish, Mandarin, French, and German with 90%+ accuracy. Additional languages can be added upon request."
      },
      {
        question: "How does it learn about my property?",
        answer: "During onboarding, we load your property rules, amenities, policies, and FAQs. The AI then learns from interactions and feedback to improve over time."
      },
      {
        question: "Can residents opt out?",
        answer: "Absolutely. Residents can always request to speak with a human staff member at any time during an interaction."
      }
    ]
  },
  "biometric-access": {
    title: "Biometric Access Control",
    tagline: "Secure, touchless, and seamless entry",
    problem: "Key cards are lost, cloned, and create security gaps; manual logs are unreliable.",
    capability: "SecureConnect™ biometric access delivers 99.8% accuracy with immutable audit trails and consent-first privacy.",
    kpis: [
      "Card replacement cost $0 (was $50/ea)",
      "Security incidents ↓ 60–70%",
      "Entry speed <2s (99.9% uptime)"
    ],
    benefits: [
      "99.8% recognition accuracy with <2 second entry speed",
      "Complete audit trail eliminates security card replacement costs ($50/card)",
      "0.1% false rejection rate with multi-factor backup methods"
    ],
    features: [
      "Facial recognition with mask detection",
      "Multi-factor biometric authentication",
      "Cloud-based access management",
      "Integration with video surveillance"
    ],
    metrics: [
      { label: "Accuracy", value: "99.8%" },
      { label: "Entry Speed", value: "<2s" },
      { label: "False Rejects", value: "0.1%" }
    ],
    howItWorks: {
      steps: [
        "Enrollment with consent",
        "On-device biometric match",
        "Door controller access",
        "Immutable audit log (privacy-first)"
      ]
    },
    faqs: [
      {
        question: "Is my biometric data secure?",
        answer: "Yes. We use military-grade encryption and never store actual biometric images—only mathematical templates that cannot be reverse-engineered. Data is GDPR and CCPA compliant."
      },
      {
        question: "What if the system can't recognize me?",
        answer: "Multiple backup methods exist: fingerprint, PIN code, or mobile app access. False rejection rate is only 0.1%, but we ensure you're never locked out."
      },
      {
        question: "Can I grant temporary access to guests?",
        answer: "Yes, through the mobile app you can create time-limited access credentials for guests, contractors, or delivery personnel with configurable permissions."
      },
      {
        question: "Does it work at night or in poor lighting?",
        answer: "Our system uses infrared and 3D depth mapping to work in complete darkness and varying lighting conditions with the same 99.8% accuracy."
      }
    ]
  },
  "vertical-farms": {
    title: "Vertical Farming Systems",
    tagline: "Sustainable food production in your complex",
    problem: "Food miles and costs rise; residents want sustainability but lack access to fresh produce.",
    capability: "SecureConnect™ vertical farms deliver 365-day yields with 90% less water and zero transport emissions.",
    kpis: [
      "Water use ↓ 90% vs. soil farming",
      "Carbon footprint –75% (transport eliminated)",
      "Resident savings 30–40% below retail"
    ],
    benefits: [
      "365-day fresh produce with 90% less water than traditional farming",
      "75% carbon footprint reduction from eliminated transportation",
      "30-40% cost savings vs. retail prices for residents"
    ],
    features: [
      "Automated hydroponic growing systems",
      "Climate-controlled indoor environments",
      "IoT monitoring of nutrients and growth",
      "Community harvest programs"
    ],
    metrics: [
      { label: "Fresh Produce", value: "365 days" },
      { label: "Water Savings", value: "90%" },
      { label: "Carbon Reduced", value: "75%" }
    ],
    howItWorks: {
      steps: [
        "Hydro/aero stacks deployed",
        "Sensor feedback monitoring",
        "LED & irrigation control",
        "Harvest cycle",
        "Community hub distribution"
      ]
    },
    faqs: [
      {
        question: "How much space is required?",
        answer: "Our vertical systems are highly space-efficient. A 200 sq ft area can produce enough greens and herbs for 100 units. Rooftop or unused common areas work perfectly."
      },
      {
        question: "Who maintains the system?",
        answer: "Our system is 90% automated. We provide weekly remote monitoring and monthly on-site maintenance visits. Residents can volunteer to help with harvesting."
      },
      {
        question: "What can be grown?",
        answer: "Leafy greens (lettuce, kale, spinach), herbs (basil, cilantro, mint), tomatoes, peppers, strawberries, and microgreens. We customize based on resident preferences."
      },
      {
        question: "What's the cost to residents?",
        answer: "Produce is typically offered at 30-40% below retail prices or included as an amenity. Many properties offset costs through premium rent for this unique feature."
      }
    ]
  },
  "predictive-maintenance": {
    title: "Predictive Maintenance AI",
    tagline: "Prevent problems before they happen",
    problem: "Emergency repairs cost 3× planned work and cause tenant churn; equipment fails without warning.",
    capability: "SecureConnect™ Predictive AI forecasts failures 2–4 weeks early with 92% accuracy, eliminating downtime.",
    kpis: [
      "Emergency repairs ↓ 60–70%",
      "Maintenance costs –40%",
      "Equipment lifespan +30%"
    ],
    benefits: [
      "60% reduction in emergency repairs and equipment downtime",
      "40% lower maintenance costs with 92% prediction accuracy",
      "30% extended equipment lifespan through proactive care"
    ],
    features: [
      "Machine learning failure prediction",
      "Automated work order generation",
      "Equipment performance tracking",
      "Vendor scheduling integration"
    ],
    metrics: [
      { label: "Downtime Cut", value: "60%" },
      { label: "Cost Savings", value: "40%" },
      { label: "Accuracy", value: "92%" }
    ],
    howItWorks: {
      steps: [
        "Data lake aggregation",
        "ML anomaly detection model",
        "Ticket priority assignment",
        "Technician dispatch",
        "Feedback loop improves model"
      ]
    },
    faqs: [
      {
        question: "What equipment can be monitored?",
        answer: "HVAC systems, elevators, water heaters, pumps, generators, fire safety systems, and any equipment with electronic controls or that can accept IoT sensors."
      },
      {
        question: "How accurate are the predictions?",
        answer: "Our AI achieves 92% accuracy in predicting failures within a 2-week window. Accuracy improves over time as the system learns your specific equipment patterns."
      },
      {
        question: "Does this replace my maintenance team?",
        answer: "No, it makes them more efficient. Instead of reactive emergency repairs, they focus on planned preventive maintenance during optimal times, reducing stress and costs."
      },
      {
        question: "What's the payback period?",
        answer: "Most properties achieve ROI within 12 months through reduced emergency repairs, extended equipment life, and optimized maintenance staff utilization."
      }
    ]
  },
  "ev-charging": {
    title: "EV Charging Infrastructure",
    tagline: "Power the future of transportation",
    problem: "EV owners avoid properties without charging; electrical panels can't handle unmanaged load.",
    capability: "SecureConnect™ smart charging prevents overload, schedules off-peak loads, and generates ancillary revenue.",
    kpis: [
      "Electrical overload incidents: 0",
      "Off-peak utilization 70–80%",
      "Revenue/charger $150–300/mo"
    ],
    benefits: [
      "99.5% uptime with 80% charge in 30 minutes",
      "Smart load management prevents electrical overload",
      "Generate additional revenue with flexible billing models"
    ],
    features: [
      "Level 2 and DC fast charging",
      "Dynamic power management",
      "Mobile app reservation system",
      "Usage analytics dashboard"
    ],
    metrics: [
      { label: "Stations", value: "Scalable" },
      { label: "Charge Speed", value: "80% in 30min" },
      { label: "Uptime", value: "99.5%" }
    ],
    howItWorks: {
      steps: [
        "Smart load manager allocates power",
        "EV chargers energized",
        "Solar/battery buffer integration",
        "Off-peak scheduling optimization"
      ]
    },
    faqs: [
      {
        question: "How many stations do I need?",
        answer: "We recommend starting with 1 charger per 10 units, scaling based on adoption. Our system is modular and can grow with demand without infrastructure overhaul."
      },
      {
        question: "Can I charge residents for usage?",
        answer: "Yes, our platform supports multiple billing models: free amenity, cost-pass-through, premium pricing, or subscription plans. Billing integrates with property management systems."
      },
      {
        question: "What about electrical capacity?",
        answer: "Our smart load management system prevents circuit overload by dynamically distributing power based on demand and property capacity. We conduct full electrical assessment before installation."
      },
      {
        question: "How do you handle maintenance?",
        answer: "All stations come with 24/7 remote monitoring, automatic software updates, and on-site service agreements. Average uptime exceeds 99.5% with <4 hour response times."
      }
    ]
  },
  "ar-leasing": {
    title: "AR Leasing Experience",
    tagline: "Virtual tours that close deals",
    problem: "Prospects can't visualize units remotely; in-person tours waste staff time with unqualified leads.",
    capability: "SecureConnect™ AR tours let prospects walk units 24/7, place furniture virtually, and e-sign leases in minutes.",
    kpis: [
      "Tour volume +200%",
      "Conversion rates +35%",
      "Lease-signing time ↓ 50%"
    ],
    benefits: [
      "200% increase in tour volume with 24/7 virtual access",
      "35% higher conversion rates through emotional connection",
      "50% reduction in lease signing time with digital workflows"
    ],
    features: [
      "3D virtual walkthroughs",
      "AR furniture placement",
      "E-signature integration",
      "Virtual staging capabilities"
    ],
    metrics: [
      { label: "Tours Increase", value: "200%" },
      { label: "Conversion Up", value: "35%" },
      { label: "Lease Time", value: "-50%" }
    ],
    howItWorks: {
      steps: [
        "3D scan performed",
        "Virtual tour published",
        "CRM lead capture",
        "E-lease execution"
      ]
    },
    faqs: [
      {
        question: "How long does it take to create a virtual tour?",
        answer: "3D scanning takes 30-45 minutes per unit. Processing and publishing is completed within 24 hours. One model unit can represent all similar floor plans."
      },
      {
        question: "Do prospects need special equipment?",
        answer: "No special equipment needed. Tours work on any smartphone, tablet, or computer. AR furniture placement requires a modern smartphone (iOS 12+ or Android 8+)."
      },
      {
        question: "Can I still offer in-person tours?",
        answer: "Absolutely. Virtual tours complement in-person visits by pre-qualifying prospects and reducing tire-kickers. Serious prospects arrive already familiar with the unit."
      },
      {
        question: "How does this improve conversion rates?",
        answer: "Prospects can tour 24/7, share with family, and visualize their furniture before visiting. This creates emotional connection and reduces decision time, increasing conversions by 35% on average."
      }
    ]
  },
  "dynamic-pricing": {
    title: "Dynamic Pricing Engine",
    tagline: "Optimize revenue with AI",
    problem: "Static pricing leaves revenue on the table; manual adjustments lag market shifts by weeks.",
    capability: "SecureConnect™ pricing AI analyzes 50+ factors daily and auto-adjusts rates within governance guardrails.",
    kpis: [
      "Revenue +10–15%",
      "Occupancy 95–98%",
      "Time-to-lease ↓ 25%"
    ],
    benefits: [
      "15% revenue increase with 98% occupancy rates",
      "25% faster time-to-lease through optimized pricing",
      "Real-time analysis of 50+ market factors updated daily"
    ],
    features: [
      "Machine learning price models",
      "Market data integration",
      "Automated price adjustments",
      "Revenue forecasting tools"
    ],
    metrics: [
      { label: "Revenue Gain", value: "15%" },
      { label: "Occupancy", value: "98%" },
      { label: "Time to Lease", value: "-25%" }
    ],
    howItWorks: {
      steps: [
        "Demand/seasonality/cost inputs",
        "Pricing engine calculates optimal rates",
        "Resident UI displays pricing",
        "Governance guardrails enforce limits"
      ]
    },
    faqs: [
      {
        question: "Won't frequent price changes upset residents?",
        answer: "Current residents' rent is never changed mid-lease. Dynamic pricing only applies to available units and renewals, with guardrails to ensure fairness and compliance with local laws."
      },
      {
        question: "What data sources does the AI use?",
        answer: "We analyze your property's historical data, competitor pricing, local market reports, economic indicators, seasonality, events, weather, and 40+ other factors updated daily."
      },
      {
        question: "Can I override the AI recommendations?",
        answer: "Yes, you maintain full control. The system provides recommendations with explanations, and you can set price floors, ceilings, and approval workflows based on your comfort level."
      },
      {
        question: "How quickly does it impact revenue?",
        answer: "Most properties see measurable improvements within 30 days as the AI learns your market. Full optimization typically achieved in 90 days with 10-15% revenue increases common."
      }
    ]
  },
  "wellness-monitoring": {
    title: "Wellness Monitoring",
    tagline: "Healthier living environments",
    problem: "Poor air quality triggers allergies and complaints; HVAC runs on dumb schedules, wasting energy.",
    capability: "SecureConnect™ wellness sensors auto-tune HVAC for optimal CO₂/VOC/PM2.5 and publish comfort scores.",
    kpis: [
      "Resident satisfaction +40%",
      "HVAC energy –20%",
      "Air quality: excellent 95% of hours"
    ],
    benefits: [
      "40% increase in resident satisfaction through excellent air quality",
      "20% energy savings through optimized HVAC automation",
      "Real-time monitoring of CO2, VOCs, PM2.5, and humidity"
    ],
    features: [
      "Air quality sensors (CO2, VOC, PM2.5)",
      "Temperature and humidity monitoring",
      "Fitness center analytics",
      "Wellness app integration"
    ],
    metrics: [
      { label: "Air Quality", value: "Excellent" },
      { label: "Satisfaction", value: "+40%" },
      { label: "Energy", value: "-20%" }
    ],
    howItWorks: {
      steps: [
        "CO₂/PM/VOC/noise sensors",
        "Threshold monitoring",
        "HVAC auto-adjustments",
        "Comfort index published"
      ]
    },
    faqs: [
      {
        question: "What air quality metrics are monitored?",
        answer: "We track CO2, volatile organic compounds (VOCs), particulate matter (PM2.5), temperature, humidity, and air pressure. All metrics visible in real-time to residents and management."
      },
      {
        question: "How does this improve resident satisfaction?",
        answer: "Healthy air quality reduces allergies, improves sleep, and enhances cognitive function. Residents report 40% higher satisfaction in properties with wellness monitoring vs. those without."
      },
      {
        question: "Does it increase energy costs?",
        answer: "No, it actually reduces energy use by 20% on average. The system optimizes HVAC runtime based on actual occupancy and air quality needs rather than fixed schedules."
      },
      {
        question: "Can residents see their unit's data?",
        answer: "Yes, residents access their unit's wellness score and metrics via mobile app with personalized tips. Aggregate (anonymized) building data is also shared to encourage community engagement."
      }
    ]
  },
  "virtual-property-management": {
    title: "Virtual Property Management",
    tagline: "Cloud-powered operations",
    problem: "Staff juggle spreadsheets, paper tickets, and siloed tools; portfolio visibility is days behind.",
    capability: "SecureConnect™ Virtual PM unifies rent, work orders, and IoT oversight in one cloud platform with <2hr SLA.",
    kpis: [
      "Staff efficiency +50%",
      "Rent collection 99% (was 94%)",
      "Response time <2hr (was 18hr)"
    ],
    benefits: [
      "50% efficiency gain through automated workflows and cloud access",
      "99% rent collection rate with <2 hour response time",
      "Bank-level security with 99.9% uptime SLA"
    ],
    features: [
      "Cloud-based management platform",
      "Automated workflows",
      "Resident communication tools",
      "Integrated accounting"
    ],
    metrics: [
      { label: "Efficiency", value: "+50%" },
      { label: "Collections", value: "99%" },
      { label: "Response Time", value: "<2hr" }
    ],
    howItWorks: {
      steps: [
        "Tenant portal interface",
        "Work orders bidirectional",
        "Payments processing",
        "IoT oversight integration"
      ]
    },
    faqs: [
      {
        question: "Can I manage multiple properties?",
        answer: "Yes, our platform is designed for portfolio management. View consolidated financials, compare performance, and manage all properties from one dashboard with role-based access control."
      },
      {
        question: "How secure is cloud-based management?",
        answer: "Bank-level encryption (AES-256), SOC 2 Type II certified, automatic backups, and 99.9% uptime SLA. Data is more secure in our cloud than on local servers or file cabinets."
      },
      {
        question: "What about internet outages?",
        answer: "Our platform works offline with local caching and syncs automatically when connection is restored. Critical functions like access control have on-device backup protocols."
      },
      {
        question: "Can residents pay rent through the platform?",
        answer: "Yes, automated ACH/credit card payment with scheduled auto-pay, custom due dates, split payments for roommates, and instant payment confirmation. Reduces late payments by 85%."
      }
    ]
  },
  "drone-inspections": {
    title: "Drone Roof Inspections",
    tagline: "Safer, faster, smarter inspections",
    problem: "Manual roof inspections are dangerous, slow, and miss 40% of defects; claim denials rise.",
    capability: "SecureConnect™ drones capture 4K thermal imaging; AI detects 95% of defects in 48hr turnaround.",
    kpis: [
      "Safety incidents: 0 (was 2–3/yr)",
      "Inspection time ↓ 80%",
      "Defect detection +40–50%"
    ],
    benefits: [
      "100% safety improvement eliminating dangerous roof access",
      "80% time savings with 95% AI damage detection accuracy",
      "Complete 4K video documentation delivered in 48 hours"
    ],
    features: [
      "4K video and thermal imaging",
      "AI damage analysis",
      "3D roof modeling",
      "Historical comparison reports"
    ],
    metrics: [
      { label: "Safety", value: "100%" },
      { label: "Time Saved", value: "80%" },
      { label: "Accuracy", value: "95%" }
    ],
    howItWorks: {
      steps: [
        "Flight plan programmed",
        "Roof imaging capture",
        "AI defect detection",
        "Maintenance ticket generated"
      ]
    },
    faqs: [
      {
        question: "Is this FAA compliant?",
        answer: "Yes, all our pilots are FAA Part 107 certified and fully insured. We handle all regulatory compliance, airspace authorizations, and notifications for every flight."
      },
      {
        question: "How often should roofs be inspected?",
        answer: "We recommend quarterly inspections for proactive monitoring, post-storm assessments, and annual comprehensive inspections for insurance and maintenance planning."
      },
      {
        question: "Can you inspect in bad weather?",
        answer: "Safety is paramount. We don't fly in rain, high winds, or poor visibility. We schedule backup dates and typically complete inspections within 5 business days of initial request."
      },
      {
        question: "How detailed are the reports?",
        answer: "Reports include 4K video, annotated photos of all defects, thermal anomalies, 3D roof model with measurements, severity ratings, repair cost estimates, and historical comparison if available."
      }
    ]
  },
  "community-platform": {
    title: "Community Platform",
    tagline: "Connect your residents",
    problem: "Isolated residents churn faster; paper flyers and bulletin boards fail to engage.",
    capability: "SecureConnect™ Community Platform fosters neighbor connections with events, polls, and AI-moderated messaging.",
    kpis: [
      "Engagement +150%",
      "Retention +25–30%",
      "Active users 85%"
    ],
    benefits: [
      "150% increase in community engagement with 85% active users",
      "30% improvement in retention rates through stronger connections",
      "Private platform with AI moderation and emergency alerts"
    ],
    features: [
      "Social feed and messaging",
      "Event calendar and booking",
      "Classifieds marketplace",
      "Emergency alerts system"
    ],
    metrics: [
      { label: "Engagement", value: "+150%" },
      { label: "Active Users", value: "85%" },
      { label: "Retention", value: "+30%" }
    ],
    howItWorks: {
      steps: [
        "Events/messaging/polls posted",
        "AI moderation filters content",
        "Analytics dashboard insights"
      ]
    },
    faqs: [
      {
        question: "How do you moderate content?",
        answer: "Combination of AI content filtering, community reporting, and optional human moderation. Customizable community guidelines with automated enforcement and appeals process."
      },
      {
        question: "Is it private to our residents only?",
        answer: "Yes, completely private. Only verified residents can join using email verification or integration with your property management system. Former residents are automatically removed."
      },
      {
        question: "Can residents opt out?",
        answer: "Absolutely. Participation is voluntary. However, 85% of residents typically remain active due to the value provided in connecting with neighbors and staying informed."
      },
      {
        question: "How does this improve retention?",
        answer: "Residents with strong community connections are 3x more likely to renew. Our platform increases resident engagement by 150% and retention rates by 30% through fostering genuine relationships."
      }
    ]
  },
  "guardian-follow-me": {
    title: "Guardian Follow Me Home",
    tagline: "Your personal safety escort",
    problem: "Residents feel unsafe walking alone at night; dark parking areas and pathways increase security risks.",
    capability: "SecureConnect™ Guardian drones provide on-demand aerial escort with high-lumen lighting and live monitoring.",
    kpis: [
      "Safety incidents ↓ 85%",
      "Response time <60s",
      "Resident satisfaction 4.9/5.0"
    ],
    benefits: [
      "85% reduction in nighttime safety incidents and perceived risk",
      "60-second response time with autonomous path lighting",
      "4.9/5 resident satisfaction with 24/7 on-demand availability"
    ],
    features: [
      "Autonomous flight path planning",
      "High-lumen LED pathway lighting",
      "Live video monitoring",
      "Emergency alert integration"
    ],
    metrics: [
      { label: "Safety", value: "85% ↓" },
      { label: "Response", value: "<60s" },
      { label: "Satisfaction", value: "4.9/5" }
    ],
    howItWorks: {
      steps: [
        "Resident requests escort via app",
        "Drone launches autonomously",
        "Path illumination activated",
        "Live monitoring until destination",
        "Auto-return to charging station"
      ]
    },
    faqs: [
      {
        question: "How do I request a Guardian escort?",
        answer: "Simply open the mobile app and tap 'Request Guardian'. The drone launches within 60 seconds and meets you at your location. You can also schedule recurring escorts for regular late-night arrivals."
      },
      {
        question: "What if multiple residents need escorts?",
        answer: "Our fleet management system queues requests and deploys multiple drones when needed. Most properties have 2-4 drones ensuring <2 minute wait times even during peak hours."
      },
      {
        question: "Is someone monitoring the video feed?",
        answer: "Yes, live feeds are monitored by our 24/7 security operations center. In emergency situations, they can immediately contact local authorities and provide live video evidence."
      },
      {
        question: "What about privacy concerns?",
        answer: "Video is only recorded during active escort missions with resident consent. Footage is encrypted, retained for 30 days for security purposes only, and never used for any other purpose. GDPR and POPIA compliant."
      },
      {
        question: "How far can the Guardian escort me?",
        answer: "Typical range is 500 meters with 15-minute flight time. Sufficient for parking to unit, amenities to unit, or property perimeter escort. System automatically alerts if destination exceeds range."
      }
    ]
  }
};
