import { DollarSign, Shield, Lock, Wrench, ArrowRight } from "lucide-react";
import "./WhyVeralogixSection.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const WhyVeralogixSection = () => {
  const benefits = [
    { icon: DollarSign, text: "Lower costs through automation" },
    { icon: Shield, text: "24/7 AI security oversight" },
    { icon: Lock, text: "POPIA-compliant data protection" },
    { icon: Wrench, text: "Predictive maintenance savings" }
  ];

  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="container mx-auto px-4 py-20">
        <h2 id="why-heading" className="sr-only">Why Choose Veralogix</h2>
        
        <div className="comparison-container">
          <div className="before-panel">
            <h3 className="panel-title">Before SecureConnect</h3>
            <div className="icon-grid">
              <div className="fragmented-icon">📋</div>
              <div className="fragmented-icon">👮</div>
              <div className="fragmented-icon">📞</div>
              <div className="fragmented-icon">🔧</div>
            </div>
            <p className="panel-description">Disconnected systems, manual processes, reactive maintenance</p>
          </div>
          
          <div className="arrow-divider" aria-hidden="true">
            <ArrowRight size={48} />
          </div>
          
          <div className="after-panel">
            <h3 className="panel-title">After SecureConnect</h3>
            <div className="benefits-list">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="benefit-item">
                    <div className="benefit-icon">
                      <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className="benefit-text">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="cta-container">
          <Link to="/contact">
            <Button variant="neon">
              Schedule a Live Demo <ArrowRight className="ml-2" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
