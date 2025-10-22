import { NeonHeading } from "@/components/NeonHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Award, ArrowRight } from "lucide-react";

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

        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card key={index} className="glass animate-slide-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Headline KPI Banner */}
                <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-b border-primary/30 p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-card/80 backdrop-blur-sm">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{study.name}</h3>
                        <p className="text-sm text-muted-foreground">{study.location} • {study.units} units</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {study.headlineKPI}
                      </div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide">{study.kpiLabel}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-6">
                  {/* Narrative */}
                  <div>
                    <p className="text-foreground leading-relaxed">{study.narrative}</p>
                  </div>

                  {/* What Changed */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <ArrowRight className="h-5 w-5" />
                      What Changed
                    </h4>
                    <ul className="space-y-2">
                      {study.whatChanged.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-secondary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Before/After Metrics */}
                  <div>
                    <h4 className="text-lg font-semibold text-secondary mb-3">Before & After</h4>
                    <div className="grid gap-3">
                      {study.beforeAfter.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-primary/20">
                          <span className="font-medium text-foreground">{metric.metric}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-muted-foreground line-through">{metric.before}</span>
                            <ArrowRight className="h-4 w-4 text-accent" />
                            <span className="text-primary font-bold text-lg">{metric.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
