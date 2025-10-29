import { HolographicCity } from "@/components/HolographicCity";
import { LogoFormation } from "./LogoFormation";
import "./FinalCTASection.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          <Link to="/contact">
            <Button variant="neon">Talk to a Consultant</Button>
          </Link>
          <Link to="/services">
            <Button variant="neon">Explore Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
