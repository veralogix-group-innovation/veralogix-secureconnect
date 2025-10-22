import { NeonHeading } from "@/components/NeonHeading";
import { CardFX } from "@/components/CardFX";
import { Building2, Users, Award } from "lucide-react";

const caseStudies = [
  {
    name: "Parkside Towers",
    location: "Downtown Metro Area",
    units: 280,
    icon: Building2,
    headlineKPI: "$180K",
    kpiLabel: "First-Year Savings",
    narrative: "Parkside Towers faced escalating energy costs and reactive maintenance, leading to 15% annual budget overruns and resident complaints. After implementing SecureConnect™ with IoT sensors and predictive maintenance AI, the property transformed from crisis management to proactive optimization. Energy consumption dropped 32% through smart HVAC automation, while ML-powered predictive alerts prevented three major equipment failures that would have cost $85K in emergency repairs. Real-time monitoring cut maintenance response time from 4.2 hours to 18 minutes, and EV charging optimization reduced peak demand charges by $3,200 monthly. The complex now operates 28% below comparable properties while delivering measurably higher resident satisfaction.",
    whatChanged: [
      "Automated HVAC optimization reduced peak energy loads by 32%",
      "Predictive maintenance prevented 3 major equipment failures ($85K avoided)",
      "Smart EV charging balanced grid demand, cutting peak charges $3.2K/mo",
      "Real-time monitoring cut response time from 4.2 hours to 18 minutes"
    ],
    beforeAfter: [
      { metric: "Energy Cost", before: "$42K/mo", after: "$28.5K/mo" },
      { metric: "Maintenance Budget", before: "$220K/yr", after: "$158K/yr" }
    ]
  },
  {
    name: "Riverside Commons",
    location: "Suburban Complex",
    units: 156,
    icon: Users,
    headlineKPI: "65%",
    kpiLabel: "Turnover Reduction",
    narrative: "Riverside Commons suffered from security incidents and dated amenities that drove 22% annual turnover, costing $340K yearly in leasing commissions, unit renovations, and lost rent. SecureConnect™ deployed biometric access control, AI concierge services, and AR leasing experiences to modernize the resident lifecycle. Within eight months, security incidents plummeted 89% as unauthorized entry and package theft became virtually impossible. The AI concierge handled 1,840 resident requests without adding staff, while AR virtual tours converted 68% of remote prospects into applicants. Leasing velocity increased 40%, and the complex transformed from 22% turnover to 7.7%—saving $221K annually while becoming the area's most desirable address.",
    whatChanged: [
      "Biometric access eliminated 89% of security incidents and package theft",
      "AI concierge handled 1,840 requests with zero staff expansion",
      "AR leasing tours converted 68% of virtual visitors to applicants",
      "Community platform increased resident engagement by 340%"
    ],
    beforeAfter: [
      { metric: "Annual Turnover", before: "22%", after: "7.7%" },
      { metric: "Leasing Time", before: "45 days", after: "27 days" }
    ]
  },
  {
    name: "Harbor View Estates",
    location: "Coastal Development",
    units: 420,
    icon: Award,
    headlineKPI: "99.7%",
    kpiLabel: "System Uptime",
    narrative: "Harbor View Estates' aging infrastructure triggered frequent failures across HVAC, elevators, and water systems—averaging 26 critical outages yearly. Resident complaints surged 140% while property values stagnated below market comparables. SecureConnect™ deployed a comprehensive IoT sensor network with quarterly drone inspections and virtual property management dashboards. The transformation was immediate: sensors detected anomalies 2–6 hours before resident impact, enabling preemptive repairs. Drone thermal imaging identified roof degradation and facade issues invisible from ground level. Virtual management dashboards gave trustees 24/7 visibility into all building systems. System uptime improved from 94.2% to 99.7%, complaint resolution time dropped 78%, and property values increased 18% in 18 months as Harbor View became synonymous with reliability.",
    whatChanged: [
      "IoT sensors detected issues 2–6 hours before resident impact",
      "Drone thermal imaging identified roof/facade problems early",
      "Virtual dashboards provided trustees 24/7 system visibility",
      "Wellness monitoring ensured amenities maintained 99.7% uptime"
    ],
    beforeAfter: [
      { metric: "System Failures", before: "26/yr", after: "2/yr" },
      { metric: "Avg. Resolution Time", before: "6.5 days", after: "1.4 days" }
    ]
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <NeonHeading level="h1" className="mb-4">
            Proven Results
          </NeonHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world success stories from trustees and managing agents who transformed their complexes with SecureConnect™
          </p>
        </div>

        <div className="container mx-auto" style={{ width: 'min(1100px, 92vw)' }}>
          <div className="flex flex-wrap gap-7 justify-center">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              
              // Construct description with narrative + key metrics
              const description = `${study.narrative.slice(0, 140)}... 
              
What Changed:
${study.whatChanged.slice(0, 2).map(item => `• ${item}`).join('\n')}

Before → After:
${study.beforeAfter.map(m => `${m.metric}: ${m.before} → ${m.after}`).join(' | ')}`;
              
              return (
                <CardFX
                  key={index}
                  title={`${study.name}\n${study.headlineKPI} ${study.kpiLabel}`}
                  icon={<Icon className="h-12 w-12" />}
                  description={description}
                  ctaLabel="View Full Story"
                  ctaLink="#"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
