import { NeonHeading } from "@/components/NeonHeading";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

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
            <a href="/services" className="btn btn--neon inline-flex" aria-label="Explore all SecureConnect services">
              Explore All Services <ArrowRight className="ml-2" aria-hidden="true" />
            </a>
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
          <a href="/contact" className="btn btn--neon inline-flex" aria-label="Schedule a consultation with SecureConnect">
            Schedule a Consultation <ArrowRight className="ml-2" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
