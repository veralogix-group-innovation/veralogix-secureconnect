import { InnovationCard } from "./InnovationCard";
import { ConciergeIcon } from "@/components/icons/ConciergeIcon";
import { BiometricIcon } from "@/components/icons/BiometricIcon";
import { MaintenanceIcon } from "@/components/icons/MaintenanceIcon";
import { EVChargingIcon } from "@/components/icons/EVChargingIcon";
import { VerticalFarmIcon } from "@/components/icons/VerticalFarmIcon";
import { SensorNetworkIcon } from "@/components/icons/SensorNetworkIcon";

export const InnovationsSection = () => {
  const innovations = [
    {
      icon: <ConciergeIcon />,
      title: "AI-Powered Concierge",
      caption: "24/7 intelligent assistance for every resident request",
      slug: "ai-concierge"
    },
    {
      icon: <BiometricIcon />,
      title: "Biometric Access Control",
      caption: "Secure, touchless entry with privacy-first authentication",
      slug: "biometric-access"
    },
    {
      icon: <MaintenanceIcon />,
      title: "Predictive Maintenance AI",
      caption: "Prevent failures before they happen with smart analytics",
      slug: "predictive-maintenance"
    },
    {
      icon: <EVChargingIcon />,
      title: "EV Charging Infrastructure",
      caption: "Smart load management with solar and battery integration",
      slug: "ev-charging"
    },
    {
      icon: <VerticalFarmIcon />,
      title: "Vertical Indoor Farms",
      caption: "Fresh produce grown sustainably within the complex",
      slug: "vertical-farms"
    },
    {
      icon: <SensorNetworkIcon />,
      title: "Smart Sensor Network",
      caption: "Real-time monitoring for comfort, safety, and efficiency",
      slug: "iot-sensors"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[var(--base)] relative overflow-hidden" aria-labelledby="innovations-heading">
      <div className="electric-dust" aria-hidden="true"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 id="innovations-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16" style={{ color: 'hsl(var(--june-bud))', textShadow: '0 0 20px rgba(186, 217, 107, 0.4)' }}>
          Core Innovations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, idx) => (
            <InnovationCard
              key={idx}
              icon={innovation.icon}
              title={innovation.title}
              caption={innovation.caption}
              slug={innovation.slug}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        .electric-dust {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(1px 1px at 10% 20%, rgba(79, 200, 255, 0.2), transparent),
            radial-gradient(1px 1px at 80% 80%, rgba(79, 200, 255, 0.2), transparent),
            radial-gradient(1px 1px at 40% 60%, rgba(79, 200, 255, 0.15), transparent);
          background-size: 100% 100%;
          animation: dustDrift 20s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes dustDrift {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};
