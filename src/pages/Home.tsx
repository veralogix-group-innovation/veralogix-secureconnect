import { Button } from "@/components/ui/button";
import { NeonHeading } from "@/components/NeonHeading";
import { GlowButton } from "@/components/GlowButton";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Brain } from "lucide-react";
import { HolographicCity } from "@/components/HolographicCity";
import { ParticleField } from "@/components/ParticleField";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Bleed */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Particle drift background */}
        <ParticleField />
        
        {/* Holographic city silhouette */}
        <HolographicCity />
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Main Headline */}
            <h1 className="text-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in">
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Secure living,
              </span>
              <span className="block text-foreground mt-2">
                beautifully connected.
              </span>
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-slide-in">
              <GlowButton 
                glow="green"
                variant="hero" 
                size="lg"
                asChild
                className="min-w-[200px]"
              >
                <Link to="/contact">
                  Book a demo
                </Link>
              </GlowButton>
              
              <GlowButton 
                glow="blue"
                variant="neon" 
                size="lg"
                asChild
                className="min-w-[200px]"
              >
                <Link to="/services">
                  View services
                </Link>
              </GlowButton>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <NeonHeading level="h2" className="mb-4">
              Comprehensive Smart Solutions
            </NeonHeading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our suite of integrated technologies designed to elevate your complex management
            </p>
          </div>
          
          <div className="text-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto text-center">
          <NeonHeading level="h2" className="mb-6">
            Ready to Transform Your Complex?
          </NeonHeading>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join forward-thinking trustees and managing agents who are already leveraging SecureConnect™
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Schedule a Consultation <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
