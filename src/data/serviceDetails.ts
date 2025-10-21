export interface ServiceDetail {
  title: string;
  tagline: string;
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
    benefits: [
      "30% reduction in energy costs through real-time monitoring",
      "Proactive leak detection prevents costly water damage",
      "Automated HVAC optimization for resident comfort",
      "Predictive analytics for utility usage patterns"
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
        "Sensors are installed throughout the property in key areas",
        "Data streams to cloud dashboard in real-time with AI analysis",
        "Alerts sent instantly to property management and maintenance teams"
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
    benefits: [
      "Instant response to resident queries any time",
      "Automated maintenance request routing",
      "Package delivery notifications and tracking",
      "Amenity booking and calendar management"
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
        "Resident asks question via app, SMS, or voice interface",
        "AI understands intent and searches knowledge base",
        "Response provided instantly or ticket created for complex issues"
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
    benefits: [
      "Eliminate lost keys and access cards",
      "Audit trail for all entry events",
      "Guest access with time-limited permissions",
      "Enhanced security with face + fingerprint"
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
        "Resident enrolls biometrics via secure mobile app",
        "System creates encrypted template stored in cloud",
        "Entry granted in under 2 seconds with multi-factor verification"
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
    benefits: [
      "Fresh produce grown on-site for residents",
      "Zero pesticides and reduced carbon footprint",
      "Educational opportunities for community",
      "Reduced food costs through local sourcing"
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
        "Hydroponic towers installed in common areas or rooftops",
        "Automated system controls water, nutrients, and lighting cycles",
        "Residents harvest fresh produce weekly through community program"
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
    benefits: [
      "Reduce emergency repairs by 60%",
      "Extend equipment lifespan by 30%",
      "Lower maintenance costs significantly",
      "Minimize resident disruption"
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
        "IoT sensors monitor equipment performance and detect anomalies",
        "AI predicts failures 2-4 weeks before they occur",
        "Automated work orders scheduled during optimal maintenance windows"
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
    benefits: [
      "Attract eco-conscious residents",
      "Generate additional revenue streams",
      "Smart load balancing prevents overload",
      "Seamless billing integration"
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
        "Charging stations installed with smart load management",
        "Residents reserve and pay through mobile app",
        "Dynamic pricing and billing automatically integrated with rent"
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
    benefits: [
      "Tour units remotely from anywhere",
      "Visualize furniture in empty spaces",
      "Digital lease signing saves time",
      "Higher conversion rates"
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
        "3D scan of units creates immersive virtual tour",
        "Prospects explore via mobile AR or web browser from anywhere",
        "Digital application and e-signature complete lease in minutes"
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
    benefits: [
      "Maximize occupancy and revenue",
      "Real-time market analysis",
      "Seasonal demand optimization",
      "Competitive positioning insights"
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
        "AI analyzes 50+ factors: market rates, seasonality, local events, unit features",
        "Price recommendations generated daily for each unit and floor plan",
        "Auto-adjust prices or approve recommendations via dashboard"
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
    benefits: [
      "Track air quality in real-time",
      "Optimize HVAC for health",
      "Fitness amenity usage tracking",
      "Community wellness programs"
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
        "Sensors monitor air quality, temperature, humidity in real-time",
        "HVAC systems auto-adjust for optimal health and comfort",
        "Residents receive wellness scores and tips via mobile app"
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
    benefits: [
      "Manage properties from anywhere",
      "Automated rent collection",
      "Resident portal for requests",
      "Real-time financial reporting"
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
        "Entire property operations centralized in cloud platform",
        "Automated workflows handle rent collection, maintenance, communication",
        "Real-time dashboards provide insights from anywhere on any device"
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
    benefits: [
      "Eliminate dangerous roof access",
      "AI-powered damage detection",
      "Complete visual documentation",
      "Insurance claim support"
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
        "Drone captures 4K video and thermal imaging of entire roof",
        "AI analyzes footage and identifies damage, wear, and defects",
        "Detailed report with 3D model and repair recommendations delivered in 48 hours"
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
    benefits: [
      "Foster community engagement",
      "Event planning and RSVPs",
      "Neighborhood watch features",
      "Marketplace for residents"
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
        "Residents join private community via mobile app or web",
        "Share updates, organize events, buy/sell items, and connect with neighbors",
        "Management pushes important alerts and gauges community satisfaction"
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
  }
};
