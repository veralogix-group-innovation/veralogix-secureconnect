import { NeonHeading } from "@/components/NeonHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  org: z.string().trim().max(150, "Organization name must be less than 150 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate with zod
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        org: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <NeonHeading level="h1" className="mb-4">
            Let's Connect
          </NeonHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your residential complex? Schedule a demo or reach out to our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glass animate-slide-in">
            <CardContent className="pt-6">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="flex justify-center">
                    <CheckCircle2 className="h-16 w-16 text-primary animate-scale-in" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`bg-background/50 border-primary/30 focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`bg-background/50 border-primary/30 focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org">Organization</Label>
                    <Input
                      id="org"
                      placeholder="Parkside Towers"
                      value={formData.org}
                      onChange={(e) => setFormData({...formData, org: e.target.value})}
                      className={`bg-background/50 border-primary/30 focus:border-primary ${errors.org ? 'border-destructive' : ''}`}
                    />
                    {errors.org && <p className="text-sm text-destructive">{errors.org}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your complex and what services interest you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`bg-background/50 border-primary/30 focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button variant="neon" type="submit" className="w-full h-14 px-10 text-base">
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <Card className="glass">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Request a Live Demo</h3>
                    <p className="text-muted-foreground mb-4">
                      Book a personalized 30-minute walkthrough of SecureConnect™ tailored to your complex's needs.
                    </p>
                    <Link to="/demo">
                      <button className="btn btn--shimmer h-11 px-6">View Demo Dashboard</button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-secondary/20">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a href="mailto:info@veralogix.com" className="text-secondary hover:underline">
                      info@veralogix.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Address</div>
                    <p className="text-muted-foreground">
                      Veralogix Group<br />
                      3A Laver St, Clubville<br />
                      Middelburg, 1050
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Download Pitch Deck</h3>
                <p className="text-muted-foreground mb-4">
                  Get our comprehensive 20-page pitch deck with detailed service breakdowns, pricing, and case studies.
                </p>
                <button className="btn btn--shimmer w-full h-11 px-6">
                  Download PDF (4.2 MB)
                </button>
              </CardContent>
            </Card>

            {/* Quick Service Links */}
            <Card className="glass">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">Interested in a specific service?</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Link to="/services/smart-iot-sensors">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary">IoT Sensors</Badge>
                  </Link>
                  <Link to="/services/biometric-access">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary">Biometric Access</Badge>
                  </Link>
                  <Link to="/services/ai-concierge">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary">AI Concierge</Badge>
                  </Link>
                  <Link to="/services/predictive-maintenance">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary">Predictive Maintenance</Badge>
                  </Link>
                  <Link to="/services/ev-charging">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary">EV Charging</Badge>
                  </Link>
                  <Link to="/services/ar-leasing">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary">AR Leasing</Badge>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
