import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wifi, Brain, Cloud, User } from "lucide-react";
import "./SystemsFlowSection.css";

export const SystemsFlowSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  
  const nodes = [
    { icon: Wifi, label: "IoT Sensors", description: "Data collection" },
    { icon: Brain, label: "AI Core", description: "Processing" },
    { icon: Cloud, label: "Cloud Management", description: "Storage" },
    { icon: User, label: "Resident Interface", description: "Access" }
  ];

  return (
    <section ref={ref} className="systems-flow-section" aria-labelledby="systems-heading">
      <div className="grid-background" aria-hidden="true"></div>
      <div className="particle-overlay" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <h2 id="systems-heading" className="sr-only">Smart Systems in Motion</h2>
        
        <div className="flow-container">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <div key={idx} className="flow-wrapper">
                <div
                  className={`flow-node ${isVisible ? 'visible' : ''}`}
                  style={{ animationDelay: `${idx * 0.3}s` }}
                >
                  <div className="node-circle">
                    <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="node-label">{node.label}</div>
                  <div className="node-description">{node.description}</div>
                </div>
                
                {idx < nodes.length - 1 && (
                  <svg
                    className={`connection-line ${isVisible ? 'visible' : ''}`}
                    style={{ animationDelay: `${idx * 0.3 + 0.3}s` }}
                    aria-hidden="true"
                  >
                    <line x1="0" y1="50%" x2="100%" y2="50%" />
                    <circle r="4" className="flow-particle">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${idx * 0.5}s`}
                        path="M 0 0 L 100 0"
                      />
                    </circle>
                  </svg>
                )}
              </div>
            );
          })}
        </div>
        
        <p className="flow-caption">
          Every SecureConnect ecosystem runs on real-time intelligence — optimizing safety, comfort, and efficiency with minimal intervention.
        </p>
      </div>
    </section>
  );
};
