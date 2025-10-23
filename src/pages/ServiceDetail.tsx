import { useParams, Link } from "react-router-dom";
import { NeonHeading } from "@/components/NeonHeading";
import { MetricPill } from "@/components/MetricPill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, PlayCircle, Award, HelpCircle } from "lucide-react";
import { FeatureDiagram } from "@/components/FeatureDiagram";
import { serviceDetails } from "@/data/serviceDetails";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceDetails[slug] : null;
  const videoPlaceholderRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Lazy load video with IntersectionObserver
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!videoPlaceholderRef.current || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !videoLoaded) {
            setVideoLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoPlaceholderRef.current);

    return () => observer.disconnect();
  }, [videoLoaded]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Link to="/services">
          <button className="btn btn--dust h-11 px-6">
            <ArrowLeft className="mr-2" /> Back to Services
            <i aria-hidden="true"></i>
          </button>
        </Link>
      </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <Link to="/services">
          <button className="btn btn--dust mb-8 h-11 px-6">
            <ArrowLeft className="mr-2" /> Back to Services
            <i aria-hidden="true"></i>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 animate-fade-in space-y-12">
            <div>
              <NeonHeading level="h1" className="mb-4">
                {service.title}
              </NeonHeading>
              <p className="text-2xl text-muted-foreground">{service.tagline}</p>
            </div>

            {/* Video Placeholder with lazy loading */}
            <Card className="glass overflow-hidden">
              <div 
                ref={videoPlaceholderRef}
                className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative"
                role="img"
                aria-label={`${service.title} demonstration video placeholder`}
              >
                {videoLoaded ? (
                  <div className="w-full h-full relative">
                    <video
                      className="w-full h-full object-cover"
                      poster={`/assets/video-posters/${slug}.jpg`}
                      controls
                      preload="metadata"
                      aria-label={`${service.title} demonstration video`}
                    >
                      <source src={`/assets/videos/${slug}-demo.mp4`} type="video/mp4" />
                      <track kind="captions" src={`/assets/videos/${slug}-captions.vtt`} srcLang="en" label="English" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <button className="btn btn--neon h-14 px-10 text-base" aria-label={`Load ${service.title} 30 second demo video`}>
                    <PlayCircle className="mr-2 h-6 w-6" aria-hidden="true" /> Watch Demo (30s)
                  </button>
                )}
              </div>
            </Card>

            {/* How It Works */}
            <section id="how-it-works" aria-labelledby="how-it-works-heading">
              <h2 id="how-it-works-heading" className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ marginBottom: 'var(--g3)' }}>
                How It Works
              </h2>
              <FeatureDiagram steps={service.howItWorks.steps} />
            </section>

            {/* Benefits & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--g4)' }} id="benefits">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center" style={{ gap: 'var(--g1)' }}>
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 'var(--g2)' }}>
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start" style={{ gap: 'var(--g2)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" role="presentation" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary flex items-center" style={{ gap: 'var(--g1)' }}>
                    <Award className="h-6 w-6" aria-hidden="true" />
                    Core Features
                  </CardTitle>
                </CardHeader>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 'var(--g2)' }}>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start" style={{ gap: 'var(--g2)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" role="presentation" />
                      <p className="text-foreground">{feature}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* FAQs */}
            <section id="faqs" aria-labelledby="faqs-heading">
              <h2 id="faqs-heading" className="text-3xl font-bold flex items-center" style={{ marginBottom: 'var(--g3)', gap: 'var(--g2)' }}>
                <HelpCircle className="h-8 w-8 text-accent" aria-hidden="true" />
                Frequently Asked Questions
              </h2>
              <Card className="glass">
                <CardContent style={{ paddingTop: 'var(--g3)' }}>
                  <Accordion type="single" collapsible className="w-full">
                    {service.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-lg font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* CTA Panel */}
            <Card className="glass border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-8 text-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Ready to Transform Your Property?
                  </h3>
                  <p className="text-xl text-muted-foreground">
                    Schedule a personalized demo and see {service.title} in action
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <button className="btn btn--neon h-14 px-10 text-base">Schedule a Demo</button>
                  </Link>
                  <Link to="/services">
                    <button className="btn btn--dust h-14 px-10 text-base">
                      <ArrowLeft className="mr-2" /> View All Services
                      <i aria-hidden="true"></i>
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1" role="complementary" aria-label="Service summary">
            <div className="sticky top-24 space-y-6">
              {/* Summary Card */}
              <Card className="glass border-2 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="text-xs font-semibold text-primary mb-2">PROBLEM</div>
                    <p className="text-sm leading-relaxed">{service.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary mb-2">CAPABILITY</div>
                    <p className="text-sm leading-relaxed">{service.capability}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary mb-2">KEY PERFORMANCE INDICATORS</div>
                    <div className="flex flex-col gap-2">
                      {service.kpis.map((kpi, index) => (
                        <MetricPill 
                          key={index}
                          label={kpi.split(':')[0] || kpi.split('↓')[0] || kpi.split('−')[0] || kpi} 
                          value={kpi.includes(':') ? kpi.split(':')[1].trim() : kpi.includes('↓') ? kpi.split('↓')[1].trim() : kpi.includes('−') ? kpi.split('−')[1].trim() : '✓'} 
                          variant="success"
                        />
                      ))}
                    </div>
                  </div>
                  <Link to="/contact">
                    <button className="btn btn--neon w-full h-11 px-6">Get Started</button>
                  </Link>
                </CardContent>
              </Card>

              {/* Navigation Card */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Navigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2 text-sm" aria-label="Page sections">
                    <a 
                      href="#top" 
                      className="block text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded hover:bg-primary/10"
                      style={{ scrollBehavior: 'smooth' }}
                    >
                      Overview
                    </a>
                    <a 
                      href="#how-it-works" 
                      className="block text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded hover:bg-primary/10"
                      style={{ scrollBehavior: 'smooth' }}
                    >
                      How It Works
                    </a>
                    <a 
                      href="#benefits" 
                      className="block text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded hover:bg-primary/10"
                      style={{ scrollBehavior: 'smooth' }}
                    >
                      Benefits & Features
                    </a>
                    <a 
                      href="#faqs" 
                      className="block text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded hover:bg-primary/10"
                      style={{ scrollBehavior: 'smooth' }}
                    >
                      FAQs
                    </a>
                  </nav>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
