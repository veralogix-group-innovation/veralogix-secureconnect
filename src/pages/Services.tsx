import { CardFX } from "@/components/CardFX";
import { NeonHeading } from "@/components/NeonHeading";
import { 
  Radio, 
  Bot, 
  Fingerprint, 
  Sprout, 
  Wrench, 
  Zap, 
  Glasses, 
  TrendingUp,
  Heart,
  Building2,
  Plane,
  Users
} from "lucide-react";

const services = [
  {
    title: "Smart IoT Sensors",
    description: "Real-time environmental monitoring, energy tracking, and automated alerts for optimal building performance.",
    icon: Radio,
    slug: "smart-iot-sensors"
  },
  {
    title: "AI Concierge",
    description: "24/7 intelligent virtual assistant for residents, handling queries, bookings, and service requests.",
    icon: Bot,
    slug: "ai-concierge"
  },
  {
    title: "Biometric Access Control",
    description: "Cutting-edge facial recognition and fingerprint systems for secure, touchless entry management.",
    icon: Fingerprint,
    slug: "biometric-access"
  },
  {
    title: "Vertical Farming Systems",
    description: "Sustainable on-site food production with automated hydroponic gardens for community wellness.",
    icon: Sprout,
    slug: "vertical-farms"
  },
  {
    title: "Predictive Maintenance AI",
    description: "Machine learning algorithms that predict equipment failures before they happen, reducing downtime.",
    icon: Wrench,
    slug: "predictive-maintenance"
  },
  {
    title: "EV Charging Infrastructure",
    description: "Smart electric vehicle charging stations with dynamic load management and billing integration.",
    icon: Zap,
    slug: "ev-charging"
  },
  {
    title: "AR Leasing Experience",
    description: "Augmented reality virtual tours and digital lease signing for modern prospective tenants.",
    icon: Glasses,
    slug: "ar-leasing"
  },
  {
    title: "Dynamic Pricing Engine",
    description: "AI-driven rent optimization based on market demand, seasonality, and unit features.",
    icon: TrendingUp,
    slug: "dynamic-pricing"
  },
  {
    title: "Wellness Monitoring",
    description: "Aggregate health and wellness tracking for community spaces, air quality, and fitness amenities.",
    icon: Heart,
    slug: "wellness-monitoring"
  },
  {
    title: "Virtual Property Management",
    description: "Cloud-based property management platform with automated workflows and resident portals.",
    icon: Building2,
    slug: "virtual-property-management"
  },
  {
    title: "Drone Roof Inspections",
    description: "Automated aerial surveys for roof and facade inspections with AI damage detection.",
    icon: Plane,
    slug: "drone-inspections"
  },
  {
    title: "Community Platform",
    description: "Social networking app for residents with event planning, classifieds, and neighborhood watch.",
    icon: Users,
    slug: "community-platform"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen px-4" style={{ paddingTop: 'var(--g4)', paddingBottom: 'var(--g4)' }}>
      <div className="container mx-auto">
        <header className="text-center animate-fade-in" style={{ marginBottom: 'var(--g4)' }}>
          <NeonHeading level="h1" style={{ marginBottom: 'var(--g3)' }}>
            SecureConnect™ Services
          </NeonHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive smart building solutions designed for the future of residential complex management
          </p>
        </header>

        {/* 3×4 Grid: 3 columns on desktop, responsive on smaller screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" role="list">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.slug} 
                role="listitem"
                className="animate-fade-in min-h-[280px] flex items-center"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'both'
                }}
              >
                <CardFX
                  title={service.title}
                  description={service.description}
                  icon={<IconComponent />}
                  ctaLabel="Explore"
                  ctaLink={`/services/${service.slug}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
