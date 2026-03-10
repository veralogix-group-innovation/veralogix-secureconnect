import { HolographicCity } from "@/components/HolographicCity";
import "./FinalCTASection.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo-secureconnect.png";

export const FinalCTASection = () => {
  return (
    <section className="final-cta-section" aria-labelledby="final-heading">
      <div className="dawn-overlay" aria-hidden="true"></div>
      <div className="cityscape-background">
        <HolographicCity />
      </div>
      <div className="cta-dust" aria-hidden="true"></div>
      
      <div className="cta-content">
        <img 
          src={logoImage} 
          alt="Veralogix SecureConnect" 
          className="w-80 h-auto mb-8 transition-all duration-500 ease-out hover:scale-110 cursor-pointer animate-fade-in"
          style={{ 
            filter: 'drop-shadow(0 0 24px rgba(168, 207, 69, 0.4))',
            maxWidth: '90%'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 40px rgba(168, 207, 69, 0.8))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'drop-shadow(0 0 24px rgba(168, 207, 69, 0.4))';
          }}
        />
        
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
