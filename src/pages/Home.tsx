import { Button } from "@/components/ui/button";
import { NeonHeading } from "@/components/NeonHeading";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Zap, Shield, Brain } from "lucide-react";
import logo from "@/assets/logo-no-bg.svg";
import heroBackground from "@/assets/hero-background.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <img 
              src={logo} 
              alt="Veralogix SecureConnect" 
              className="w-full max-w-3xl mx-auto mb-8 animate-float"
            />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8 animate-slide-in">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Next-generation smart building solutions for residential complexes.
              <br />
              Transform your property with AI-powered security, IoT sensors, and intelligent management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                variant="hero" 
                size="lg"
                asChild
              >
                <Link to="/contact">
                  Book a Demo <ArrowRight className="ml-2" />
                </Link>
              </Button>
              
              <Button 
                variant="neon" 
                size="lg"
                asChild
              >
                <a href="#pitch-deck">
                  <Download className="mr-2" /> Download Pitch Deck
                </a>
              </Button>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
              <div className="glass p-6 rounded-xl hover-lift">
                <Zap className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-foreground mb-2">Smart IoT</h3>
                <p className="text-muted-foreground">Real-time monitoring and automation</p>
              </div>
              
              <div className="glass p-6 rounded-xl hover-lift">
                <Shield className="h-12 w-12 text-secondary mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-foreground mb-2">Secure Access</h3>
                <p className="text-muted-foreground">Biometric and AI-powered security</p>
              </div>
              
              <div className="glass p-6 rounded-xl hover-lift">
                <Brain className="h-12 w-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-foreground mb-2">AI-Driven</h3>
                <p className="text-muted-foreground">Predictive maintenance and optimization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
