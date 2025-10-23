import { NeonHeading } from "@/components/NeonHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, FileText, Users, Phone, Cookie, Globe, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Privacy = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <NeonHeading level="h1" className="mb-4">
            Privacy Policy
          </NeonHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veralogix SecureConnect™ is committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your data.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Lock className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">We encrypt data at rest and in transit using AES-256 and TLS 1.3</span>
          </div>
        </div>

        <div className="space-y-8 animate-slide-in">
          {/* Data Collection & Minimization */}
          <Card className="glass border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-6 w-6 text-primary" />
                Data Collection & Minimization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">What We Collect</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  SecureConnect™ collects only the data necessary to provide our smart building services. We adhere to data minimization principles as required by POPIA (Protection of Personal Information Act).
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Access Control Data:</strong> Biometric templates (facial recognition, fingerprints), access logs, timestamps, entry points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Building Operations:</strong> IoT sensor readings (temperature, humidity, CO₂), energy usage, water consumption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Resident Information:</strong> Name, unit number, contact details, service requests, payment information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Device Data:</strong> IP addresses, device identifiers, usage analytics for system optimization</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Why We Collect It</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Data is collected to: (1) provide secure building access, (2) optimize energy and resource consumption, (3) enable predictive maintenance, (4) deliver AI-powered concierge services, and (5) ensure safety and compliance with building regulations.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legal Basis & Consent */}
          <Card className="glass border-2 border-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="h-6 w-6 text-secondary" />
                Legal Basis & Consent
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Biometric Data Consent</h3>
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 mb-3">
                  <p className="text-sm font-medium text-secondary">
                    Biometric templates are processed on-device with explicit resident consent.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Before enrolling biometric identifiers (facial recognition or fingerprints), we obtain <strong>explicit written consent</strong> from each resident. Biometric templates are:
                </p>
                <ul className="space-y-2 text-muted-foreground mt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Encrypted and stored securely with access restricted to authorized personnel only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Processed locally on access control devices whenever technically feasible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Never shared with third parties without explicit consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Deleted within 30 days of a resident's departure or consent withdrawal</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Consent Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Residents may withdraw consent at any time via the SecureConnect™ portal or by contacting property management. Withdrawal will disable biometric access (PIN codes or key fobs remain available as alternatives).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Retention Windows */}
          <Card className="glass border-2 border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-6 w-6 text-accent" />
                Data Retention Windows
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <div className="font-semibold mb-1">Biometric Templates</div>
                    <div className="text-sm text-muted-foreground">Deleted within 30 days of departure/consent withdrawal</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <div className="font-semibold mb-1">Access Logs</div>
                    <div className="text-sm text-muted-foreground">Retained for 12 months for security audits</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <div className="font-semibold mb-1">IoT Sensor Data</div>
                    <div className="text-sm text-muted-foreground">Aggregated after 90 days; raw data purged</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <div className="font-semibold mb-1">Resident Accounts</div>
                    <div className="text-sm text-muted-foreground">Archived 60 days post-lease; anonymized after 7 years</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <div className="font-semibold mb-1">Maintenance Records</div>
                    <div className="text-sm text-muted-foreground">Retained for 7 years for compliance</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-accent/20">
                    <div className="font-semibold mb-1">Video Surveillance</div>
                    <div className="text-sm text-muted-foreground">Retained for 30 days unless incident flagged</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Subject Rights */}
          <Card className="glass border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Users className="h-6 w-6 text-primary" />
                Your Data Subject Rights (POPIA)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Under POPIA, you have the following rights regarding your personal information:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Right to Access</h4>
                  <p className="text-sm text-muted-foreground">Request a copy of all personal data we hold about you</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Right to Rectification</h4>
                  <p className="text-sm text-muted-foreground">Correct inaccurate or incomplete information</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Right to Erasure</h4>
                  <p className="text-sm text-muted-foreground">Request deletion of your data (subject to legal retention requirements)</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Right to Object</h4>
                  <p className="text-sm text-muted-foreground">Object to processing for direct marketing or automated decision-making</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Right to Data Portability</h4>
                  <p className="text-sm text-muted-foreground">Receive your data in a structured, machine-readable format</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                To exercise these rights, contact our Data Protection Officer at <a href="mailto:dpo@veralogix.com" className="text-primary hover:underline">dpo@veralogix.com</a> or via the contact details below.
              </p>
            </CardContent>
          </Card>

          {/* Cookies & Tracking */}
          <Card className="glass border-2 border-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Cookie className="h-6 w-6 text-secondary" />
                Cookies & Tracking Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                SecureConnect™ uses cookies and similar technologies to enhance user experience, analyze system performance, and maintain session security.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">Required for authentication, security, and core system functionality. Cannot be disabled.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">Collect anonymized usage data to improve system performance. You may opt out via browser settings.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Preference Cookies</h4>
                  <p className="text-sm text-muted-foreground">Remember your dashboard settings, language preferences, and accessibility options.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Processors */}
          <Card className="glass border-2 border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Globe className="h-6 w-6 text-accent" />
                Third-Party Processors & International Transfers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Service Providers</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We work with trusted third-party service providers who assist in delivering SecureConnect™ services. All processors are bound by strict data protection agreements:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Cloud Infrastructure:</strong> Secure hosting for databases and application servers (ISO 27001 certified)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Payment Processing:</strong> PCI-DSS compliant payment gateways for billing and lease payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Email & Notifications:</strong> Transactional email services for alerts and communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Analytics Platforms:</strong> Aggregated system performance monitoring (anonymized data only)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">International Data Transfers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Biometric data and access logs are stored within South Africa. Some operational data (e.g., anonymized analytics) may be processed by cloud providers in jurisdictions with adequate data protection laws. All international transfers comply with POPIA Chapter 9 requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="glass border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Mail className="h-6 w-6 text-primary" />
                Contact Our Data Protection Officer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                For privacy inquiries, data subject access requests, or to exercise your POPIA rights, please contact:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <a href="mailto:dpo@veralogix.com" className="text-primary hover:underline">dpo@veralogix.com</a>
                </div>
                <div className="p-4 rounded-lg bg-card border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Phone</span>
                  </div>
                  <a href="tel:+27123456789" className="text-primary hover:underline">+27 (12) 345-6789</a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Response Time:</strong> We respond to all privacy inquiries within 30 days as required by POPIA. For urgent security concerns, contact us immediately at <a href="mailto:security@veralogix.com" className="text-primary hover:underline">security@veralogix.com</a>.
              </p>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="glass border-2 border-secondary/30">
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Can I opt out of biometric access control?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. Biometric enrollment is optional. Residents may use alternative access methods such as PIN codes, key fobs, or mobile app access. Opting out will not affect your ability to access the building or amenities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Who has access to my biometric data?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Biometric templates are encrypted and accessible only to authorized security personnel and system administrators under strict audit controls. Templates are never shared with third parties or used for purposes beyond building access control.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How long does it take to delete my data?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Upon request, biometric data is deleted within 30 days. Other personal information follows retention schedules outlined above. Some data (e.g., financial records) must be retained for 7 years due to legal requirements, but is anonymized where possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Is my data shared with other residents or property owners?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No. Individual resident data is never shared with other residents. Property management and trustees have access only to aggregated, anonymized data for operational purposes (e.g., building-wide energy usage, occupancy trends). Access logs are restricted to security personnel.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    How do I file a complaint with the Information Regulator?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    If you are unsatisfied with our response to a privacy concern, you may lodge a complaint with the Information Regulator (South Africa) at <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.justice.gov.za/inforeg</a> or via email at <a href="mailto:inforeg@justice.gov.za" className="text-primary hover:underline">inforeg@justice.gov.za</a>.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Last Updated: October 23, 2025</p>
            <p className="mt-2">Veralogix SecureConnect™ reserves the right to update this Privacy Policy. Residents will be notified of material changes via email and in-app notifications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
