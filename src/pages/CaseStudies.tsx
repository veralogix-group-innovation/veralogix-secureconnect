import { NeonHeading } from "@/components/NeonHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricPill } from "@/components/MetricPill";
import { Building2, TrendingDown, Users, Award } from "lucide-react";

const caseStudies = [
  {
    name: "Parkside Towers",
    location: "Downtown Metro Area",
    units: 280,
    icon: Building2,
    challenge: "High energy costs and inefficient maintenance scheduling leading to 15% budget overrun annually.",
    solution: "Implemented full SecureConnect™ suite including IoT sensors, predictive maintenance AI, and smart EV charging infrastructure.",
    results: [
      { label: "Energy Savings", value: "32%" },
      { label: "Maintenance Cost", value: "-28%" },
      { label: "Resident Satisfaction", value: "+45%" },
    ],
    testimonial: "SecureConnect™ transformed our operations. The predictive maintenance alone saved us $180K in the first year.",
    author: "Jane Mitchell, Property Manager"
  },
  {
    name: "Riverside Commons",
    location: "Suburban Complex",
    units: 156,
    icon: Users,
    challenge: "Security concerns and lack of modern amenities causing 22% annual tenant turnover.",
    solution: "Deployed biometric access control, AI concierge, and community platform with AR leasing experience.",
    results: [
      { label: "Turnover Rate", value: "-65%" },
      { label: "Leasing Speed", value: "+40%" },
      { label: "Security Incidents", value: "-89%" },
    ],
    testimonial: "The biometric access and AI concierge gave us a competitive edge. We're now the most sought-after complex in the area.",
    author: "Robert Chen, Board of Trustees Chair"
  },
  {
    name: "Harbor View Estates",
    location: "Coastal Development",
    units: 420,
    icon: Award,
    challenge: "Aging infrastructure with frequent system failures and resident complaints about amenity availability.",
    solution: "Complete retrofit with smart IoT network, wellness monitoring, drone inspections, and virtual property management.",
    results: [
      { label: "System Uptime", value: "99.7%" },
      { label: "Complaint Resolution", value: "+78%" },
      { label: "Property Value", value: "+18%" },
    ],
    testimonial: "We went from reactive to proactive management. Residents love the transparency and reliability.",
    author: "Sarah Williams, Managing Agent"
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
              <Card key={index} className="glass animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {study.name}
                        </CardTitle>
                        <div className="flex gap-2 text-muted-foreground">
                          <span>{study.location}</span>
                          <span>•</span>
                          <span>{study.units} units</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-destructive mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary mb-3">Key Results</h4>
                      <div className="space-y-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-primary/20">
                            <span className="text-muted-foreground">{result.label}</span>
                            <span className="text-2xl font-bold text-primary">{result.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded">
                    <p className="text-foreground italic mb-2">"{study.testimonial}"</p>
                    <p className="text-sm text-muted-foreground">— {study.author}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Aggregate Impact Across All Clients</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <MetricPill label="Avg Energy Reduction" value="28%" variant="success" />
            <MetricPill label="Client Satisfaction" value="4.8/5" variant="info" />
            <MetricPill label="ROI Timeline" value="18 mo" variant="default" />
            <MetricPill label="Uptime Guarantee" value="99.9%" variant="success" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
