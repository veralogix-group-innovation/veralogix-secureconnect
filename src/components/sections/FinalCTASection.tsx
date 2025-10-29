import { HolographicCity } from "@/components/HolographicCity";
import { LogoFormation } from "./LogoFormation";
import "./FinalCTASection.css";

export const FinalCTASection = () => {
  return (
    <section className="final-cta-section" aria-labelledby="final-heading">
      <div className="dawn-overlay" aria-hidden="true"></div>
      <div className="cityscape-background">
        <HolographicCity />
      </div>
      <div className="cta-dust" aria-hidden="true"></div>
      
      <div className="cta-content">
        <LogoFormation />
        
        <h2 id="final-heading" className="cta-tagline">
          Define your Future. Connect your World.
        </h2>
        
        <div className="cta-buttons">
          <a href="/contact" className="btn btn--neon-animated">
            Talk to a Consultant
          </a>
          <a href="/services" className="btn btn--neon-animated">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};
