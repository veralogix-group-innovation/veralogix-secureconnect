import { useParams, Link } from "react-router-dom";
import { NeonHeading } from "@/components/NeonHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, PlayCircle } from "lucide-react";

const serviceDetails: Record<string, {
  title: string;
  tagline: string;
  benefits: string[];
  features: string[];
  metrics: { label: string; value: string }[];
}> = {
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
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceDetails[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button variant="glass" asChild>
            <Link to="/services">
              <ArrowLeft className="mr-2" /> Back to Services
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/services">
            <ArrowLeft className="mr-2" /> Back to Services
          </Link>
        </Button>

        <div className="animate-fade-in">
          <NeonHeading level="h1" className="mb-4">
            {service.title}
          </NeonHeading>
          <p className="text-2xl text-muted-foreground mb-12">{service.tagline}</p>

          {/* Video Placeholder */}
          <Card className="glass mb-12 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Button variant="hero" size="lg">
                <PlayCircle className="mr-2 h-6 w-6" /> Watch Demo (30s)
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Benefits */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Core Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {service.metrics.map((metric, index) => (
              <Card key={index} className="glass text-center hover-lift">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
