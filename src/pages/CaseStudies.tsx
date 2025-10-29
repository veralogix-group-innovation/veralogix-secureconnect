import { NeonHeading } from "@/components/NeonHeading";
import { MetricPill } from "@/components/MetricPill";
import { Building2, Users, Award, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

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

// Video reel data
const videoReels = [
  {
    title: "Seamless Security",
    description: "Watch biometric authentication flow from panel interaction to door unlock and real-time dashboard updates.",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "Connected Living",
    description: "See sensor overlays detecting environmental changes and triggering predictive maintenance alerts.",
    thumbnail: "/placeholder.svg"
  },
  {
    title: "Sustainable Ops",
    description: "Experience the EV charging schedule timeline sweep optimizing for off-peak grid demand.",
    thumbnail: "/placeholder.svg"
  }
];

// Lazy video component
const LazyVideo = ({ title, description, thumbnail }: { title: string; description: string; thumbnail: string }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className="relative aspect-video rounded-lg overflow-hidden border border-primary/20 bg-card/50">
      {!isVisible ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-background">
          <Play className="h-16 w-16 text-primary/40" />
        </div>
      ) : (
        <div className="relative h-full">
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <button className="btn btn--neon">
              <Play className="h-5 w-5 mr-2 inline" />
              Play Video
            </button>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <NeonHeading level="h1" className="mb-4">
            Proven Results
          </NeonHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world success stories from trustees and managing agents who transformed their complexes with SecureConnect™
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-20">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            
            return (
              <article 
                key={index}
                className="grid lg:grid-cols-2 gap-8 p-8 rounded-xl border border-primary/20 bg-card/30 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{study.name}</h3>
                      <p className="text-sm text-muted-foreground">{study.location} • {study.units} units</p>
                    </div>
                  </div>

                  {/* Headline KPI */}
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                    <div className="text-5xl font-bold text-primary mb-2">{study.headlineKPI}</div>
                    <div className="text-lg text-muted-foreground">{study.kpiLabel}</div>
                  </div>

                  {/* Narrative */}
                  <p className="text-base leading-relaxed text-foreground/90">
                    {study.narrative}
                  </p>
                </div>

                {/* Right Column - Metrics & Changes */}
                <div className="space-y-6">
                  {/* Before vs After */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Before → After
                    </h4>
                    {study.beforeAfter.map((comparison, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-background/50 border border-primary/20">
                        <div className="text-sm text-muted-foreground mb-2">{comparison.metric}</div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg text-destructive/80 line-through">{comparison.before}</span>
                          <span className="text-primary">→</span>
                          <span className="text-2xl font-bold text-primary">{comparison.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* What Changed */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Key Improvements
                    </h4>
                    <ul className="space-y-3">
                      {study.whatChanged.map((change, idx) => (
                        <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                          <span className="text-primary mt-1 flex-shrink-0">✓</span>
                          <span className="text-foreground/80">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Video Reels Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <NeonHeading level="h2" className="mb-4">
              See It In Action
            </NeonHeading>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience SecureConnect™ through our interactive demonstration reels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoReels.map((reel, index) => (
              <LazyVideo key={index} {...reel} />
            ))}
          </div>
        </section>

        {/* CTA to Demo */}
        <div className="text-center mt-16">
          <Card className="glass border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Experience It Yourself
              </h3>
              <p className="text-lg text-muted-foreground">
                Explore our interactive dashboard simulator to see SecureConnect™ in action
              </p>
              <Link to="/demo">
                <button className="btn btn--neon h-14 px-10">Try the Dashboard Demo</button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
