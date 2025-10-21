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
    narrative: "Parkside Towers struggled with escalating energy costs and reactive maintenance, leading to 15% budget overruns annually. After implementing SecureConnect™ with IoT sensors and predictive maintenance AI, the property transformed from crisis management to proactive optimization. Energy consumption dropped by 32% through smart automation, while predictive alerts prevented costly equipment failures.",
    whatChanged: [
      "Automated HVAC optimization reduced peak energy loads",
      "Predictive maintenance prevented 3 major equipment failures",
      "Smart EV charging balanced grid demand during off-peak hours",
      "Real-time monitoring cut response time from hours to minutes"
    ],
    beforeAfter: [
      { metric: "Energy Cost", before: "$42K/mo", after: "$28.5K/mo" },
      { metric: "Maintenance Budget", before: "$220K/yr", after: "$158K/yr" },
      { metric: "Resident Satisfaction", before: "3.2/5", after: "4.6/5" }
    ]
  },
  {
    name: "Riverside Commons",
    location: "Suburban Complex",
    units: 156,
    icon: Users,
    headlineKPI: "65%",
    kpiLabel: "Turnover Reduction",
    narrative: "Security incidents and dated amenities drove Riverside's 22% annual turnover rate, costing $340K yearly in leasing and renovations. SecureConnect™ introduced biometric access control, AI concierge services, and an AR leasing experience. Within 8 months, security incidents plummeted 89%, leasing speed increased 40%, and the complex became the area's most desirable address.",
    whatChanged: [
      "Biometric access eliminated unauthorized entry and package theft",
      "AI concierge provided 24/7 resident support without staff expansion",
      "AR leasing tours converted 68% of virtual visitors to applicants",
      "Community platform fostered resident engagement and retention"
    ],
    beforeAfter: [
      { metric: "Annual Turnover", before: "22%", after: "7.7%" },
      { metric: "Leasing Time", before: "45 days", after: "27 days" },
      { metric: "Security Incidents", before: "34/yr", after: "4/yr" }
    ]
  },
  {
    name: "Harbor View Estates",
    location: "Coastal Development",
    units: 420,
    icon: Award,
    headlineKPI: "99.7%",
    kpiLabel: "System Uptime",
    narrative: "Harbor View's aging infrastructure caused frequent failures across HVAC, elevators, and water systems. Resident complaints surged while property values stagnated. SecureConnect™ deployed a comprehensive IoT sensor network with drone inspections and virtual property management. The transformation achieved 99.7% uptime, slashed complaint resolution time by 78%, and increased property values 18% in 18 months.",
    whatChanged: [
      "IoT sensors detected issues before residents noticed them",
      "Drone inspections identified roof and facade problems early",
      "Virtual management dashboard enabled remote monitoring 24/7",
      "Wellness monitoring ensured amenity systems never went offline"
    ],
    beforeAfter: [
      { metric: "System Failures", before: "26/yr", after: "2/yr" },
      { metric: "Avg. Resolution Time", before: "6.5 days", after: "1.4 days" },
      { metric: "Property Value", before: "$385K avg", after: "$454K avg" }
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
