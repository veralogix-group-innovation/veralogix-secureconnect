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

            {/* Video Placeholder */}
            <Card className="glass overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Button variant="hero" size="lg">
                  <PlayCircle className="mr-2 h-6 w-6" /> Watch Demo (30s)
                </Button>
              </div>
            </Card>

            {/* How It Works */}
            <section>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                How It Works
              </h2>
              <FeatureDiagram steps={service.howItWorks.steps} />
            </section>

            {/* Benefits & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                    <Award className="h-6 w-6" />
                    Core Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <p className="text-foreground">{feature}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* FAQs */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <HelpCircle className="h-8 w-8 text-accent" />
                Frequently Asked Questions
              </h2>
              <Card className="glass">
                <CardContent className="pt-6">
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
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Key Metrics</div>
                    <div className="space-y-3">
                      {service.metrics.map((metric, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{metric.label}</span>
                          <span className="font-bold text-primary">{metric.value}</span>
                        </div>
                      ))}
                    </div>
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
