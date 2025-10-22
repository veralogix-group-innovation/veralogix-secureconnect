import { useParams, Link } from "react-router-dom";
import { NeonHeading } from "@/components/NeonHeading";
import { Button } from "@/components/ui/button";
import { GlowButton } from "@/components/GlowButton";
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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceDetails[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button variant="glass" asChild>
            <Link to="/services">
              <ArrowLeft className="mr-2" /> Back to Services
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/services">
            <ArrowLeft className="mr-2" /> Back to Services
          </Link>
        </Button>

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
                className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                role="img"
                aria-label={`${service.title} demonstration video placeholder`}
              >
                <Button variant="hero" size="lg" aria-label={`Play ${service.title} 30 second demo video`}>
                  <PlayCircle className="mr-2 h-6 w-6" aria-hidden="true" /> Watch Demo (30s)
                </Button>
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
                  <GlowButton glow="green" size="lg" asChild>
                    <Link to="/contact">Schedule a Demo</Link>
                  </GlowButton>
                  <Button variant="glass" size="lg" asChild>
                    <Link to="/services">
                      <ArrowLeft className="mr-2" /> View All Services
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
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
                    <div className="text-xs font-semibold text-primary mb-2">KPIs</div>
                    <ul className="space-y-2">
                      {service.kpis.map((kpi, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{kpi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Navigation Card */}
              <Card className="glass">
                <CardContent className="pt-6">
                  <nav className="space-y-2 text-sm">
                    <a href="#top" className="block text-muted-foreground hover:text-primary transition-colors">
                      Overview
                    </a>
                    <a href="#how-it-works" className="block text-muted-foreground hover:text-primary transition-colors">
                      How It Works
                    </a>
                    <a href="#benefits" className="block text-muted-foreground hover:text-primary transition-colors">
                      Benefits & Features
                    </a>
                    <a href="#faqs" className="block text-muted-foreground hover:text-primary transition-colors">
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
