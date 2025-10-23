import { NeonHeading } from "@/components/NeonHeading";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Brain } from "lucide-react";
import { HolographicCity } from "@/components/HolographicCity";
import { ParticleField } from "@/components/ParticleField";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Bleed */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" aria-label="Hero section">
        {/* Particle drift background */}
        <ParticleField />
        
        {/* Holographic city silhouette */}
        <HolographicCity />
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <div className="max-w-5xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--g4)' }}>
            {/* Main Headline */}
            <h1 className="text-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in">
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Secure living,
              </span>
              <span className="block text-foreground" style={{ marginTop: 'var(--g2)' }}>
                beautifully connected.
              </span>
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center animate-slide-in" style={{ gap: 'var(--g3)', paddingTop: 'var(--g4)' }}>
              <Link to="/contact" aria-label="Book a demo for SecureConnect">
                <button className="btn btn--mag min-w-[200px] h-14 px-10 text-base">
                  Book a demo
                </button>
              </Link>
              
              <Link to="/services" aria-label="View all SecureConnect services">
                <button className="btn btn--shimmer min-w-[200px] h-14 px-10 text-base">
                  View services
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20" role="presentation" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="px-4" style={{ paddingTop: 'var(--g4)', paddingBottom: 'var(--g4)' }} aria-labelledby="services-heading">
        <div className="container mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--g4)' }}>
            <NeonHeading level="h2" id="services-heading" style={{ marginBottom: 'var(--g2)' }}>
              Comprehensive Smart Solutions
            </NeonHeading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our suite of integrated technologies designed to elevate your complex management
            </p>
          </div>
          
          <div className="text-center">
            <Link to="/services" aria-label="Explore all SecureConnect services">
              <button className="btn btn--neon h-14 px-10 text-base">
                Explore All Services <ArrowRight className="ml-2" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" style={{ paddingTop: 'var(--g4)', paddingBottom: 'var(--g4)' }} aria-labelledby="cta-heading">
        <div className="container mx-auto text-center">
          <NeonHeading level="h2" id="cta-heading" style={{ marginBottom: 'var(--g3)' }}>
            Ready to Transform Your Complex?
          </NeonHeading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ marginBottom: 'var(--g4)' }}>
            Join forward-thinking trustees and managing agents who are already leveraging SecureConnect™
          </p>
          <Link to="/contact" aria-label="Schedule a consultation with SecureConnect">
            <button className="btn btn--neon h-14 px-10 text-base">
              Schedule a Consultation <ArrowRight className="ml-2" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
