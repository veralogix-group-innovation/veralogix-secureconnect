import { NeonHeading } from "@/components/NeonHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, AlertTriangle, Database, FileCheck, Key, Server, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Security = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <NeonHeading level="h1" className="mb-4">
            Security Practices
          </NeonHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade security architecture protecting your building operations and resident data.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">ISO 27001 Certified • SOC 2 Type II Compliant</span>
          </div>
        </div>

        <div className="space-y-8 animate-slide-in">
          {/* Access Control & Authentication */}
          <Card className="glass border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Key className="h-6 w-6 text-primary" />
                Access Control & Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Role-Based Access Control (RBAC)</h4>
                      <p className="text-sm text-muted-foreground">
                        Least-privilege access model ensures users have only the permissions necessary for their role. Roles include: Resident, Property Manager, Trustee, Security Personnel, System Administrator. Access matrices are audited quarterly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Multi-Factor Authentication (MFA)</h4>
                      <p className="text-sm text-muted-foreground">
                        MFA is mandatory for all administrative accounts and optional for residents. Supported factors: SMS OTP, authenticator apps (TOTP), biometric (face/fingerprint), and hardware security keys (FIDO2).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Session Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Sessions expire after 30 minutes of inactivity (web) or 12 hours (mobile). Administrators are logged out after 15 minutes of inactivity. Concurrent session limits prevent credential sharing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Biometric Templates Processed On-Device</h4>
                      <p className="text-sm text-muted-foreground">
                        Facial recognition and fingerprint matching occur locally on access control devices. Templates are encrypted at rest using AES-256 and transmitted only via TLS 1.3. Raw biometric images are never stored.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Encryption Standards */}
          <Card className="glass border-2 border-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Lock className="h-6 w-6 text-secondary" />
                Encryption Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 mb-4">
                <p className="font-medium text-secondary">
                  We encrypt data at rest and in transit using industry-standard cryptographic protocols.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card border border-secondary/20">
                  <h4 className="font-semibold mb-2">Data in Transit</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• TLS 1.3 (minimum TLS 1.2)</li>
                    <li>• Perfect Forward Secrecy (PFS)</li>
                    <li>• Certificate pinning on mobile apps</li>
                    <li>• HTTPS enforced site-wide with HSTS</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-card border border-secondary/20">
                  <h4 className="font-semibold mb-2">Data at Rest</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• AES-256-GCM encryption</li>
                    <li>• Encrypted database volumes</li>
                    <li>• Encrypted backups with separate keys</li>
                    <li>• Hardware Security Modules (HSM) for key storage</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Key Management</h4>
                <p className="text-sm text-muted-foreground">
                  Encryption keys are rotated every 90 days. Master keys are stored in FIPS 140-2 Level 3 validated HSMs. Access to cryptographic material is logged and requires dual authorization for production systems.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vulnerability Management */}
          <Card className="glass border-2 border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Search className="h-6 w-6 text-accent" />
                Vulnerability Management & Patching
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h4 className="font-semibold mb-2">Automated Vulnerability Scanning</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuous scanning of infrastructure, applications, and dependencies using SAST, DAST, and SCA tools. Critical vulnerabilities are triaged within 4 hours; high-severity issues within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h4 className="font-semibold mb-2">Patch Management Cadence</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Critical patches:</strong> Applied within 24 hours of vendor release</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>High-priority patches:</strong> Applied within 7 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Routine updates:</strong> Monthly patch cycle with automated rollback capability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>IoT devices:</strong> Firmware updates pushed quarterly (or as needed for security fixes)</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h4 className="font-semibold mb-2">Dependency Management</h4>
                  <p className="text-sm text-muted-foreground">
                    All third-party libraries and frameworks are tracked via Software Bill of Materials (SBOM). Automated tools flag known vulnerabilities (CVEs) and initiate upgrade workflows.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incident Response & Audit Logs */}
          <Card className="glass border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Incident Response & Audit Logs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">24/7 Security Operations Center (SOC)</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our SOC monitors system health, security alerts, and anomalous activity around the clock. Automated alerting triggers incident response protocols for:
                </p>
                <ul className="space-y-2 text-muted-foreground mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Unauthorized access attempts (failed logins, brute force attacks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Privilege escalation or suspicious admin activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Data exfiltration patterns or anomalous data access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>System outages, performance degradation, or DDoS attacks</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-semibold mb-2">Immutable Audit Logs</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  All access events, configuration changes, and administrative actions are logged to a tamper-proof audit trail. Logs are retained for 12 months and include:
                </p>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• User authentication events</div>
                  <div>• Data access and modifications</div>
                  <div>• Role/permission changes</div>
                  <div>• System configuration updates</div>
                  <div>• API calls and integrations</div>
                  <div>• Security policy violations</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Incident Response Playbooks</h4>
                <p className="text-sm text-muted-foreground">
                  Predefined runbooks for common scenarios (data breach, ransomware, credential compromise) ensure rapid containment. Mean Time to Detect (MTTD) target: &lt;15 minutes. Mean Time to Respond (MTTR) target: &lt;1 hour for critical incidents.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Backups & Disaster Recovery */}
          <Card className="glass border-2 border-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Database className="h-6 w-6 text-secondary" />
                Backups & Disaster Recovery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-lg bg-card border border-secondary/20 text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">15 min</div>
                  <div className="text-sm text-muted-foreground">Recovery Point Objective (RPO)</div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-secondary/20 text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">&lt;2 hr</div>
                  <div className="text-sm text-muted-foreground">Recovery Time Objective (RTO)</div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-secondary/20 text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">99.99%</div>
                  <div className="text-sm text-muted-foreground">Infrastructure Availability SLA</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <h4 className="font-semibold mb-2">Automated Backups</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Database snapshots every 15 minutes (continuous replication)</li>
                    <li>• Daily full backups retained for 30 days</li>
                    <li>• Weekly backups retained for 1 year</li>
                    <li>• Geo-redundant storage across 3 availability zones</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <h4 className="font-semibold mb-2">Disaster Recovery Testing</h4>
                  <p className="text-sm text-muted-foreground">
                    Quarterly DR drills validate backup integrity and restoration procedures. Last successful test: September 2025 (full system recovery in 87 minutes).
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <h4 className="font-semibold mb-2">Business Continuity</h4>
                  <p className="text-sm text-muted-foreground">
                    Secondary data center in different geographic region ensures failover capability. Critical services (access control, emergency alerts) remain operational during primary site outage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vendor Due Diligence */}
          <Card className="glass border-2 border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileCheck className="h-6 w-6 text-accent" />
                Vendor Due Diligence & Third-Party Risk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                All third-party vendors and subprocessors undergo rigorous security assessments before integration:
              </p>
              <div className="grid gap-3">
                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h4 className="font-semibold mb-2">Pre-Integration Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Security questionnaires, SOC 2 audit review, penetration test reports, ISO 27001 certification verification, data processing agreement (DPA) review.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h4 className="font-semibold mb-2">Ongoing Monitoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Annual vendor risk re-assessments, continuous monitoring of security incidents, quarterly business reviews, and data breach notification clauses in all contracts.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h4 className="font-semibold mb-2">Key Vendors</h4>
                  <p className="text-sm text-muted-foreground">
                    Cloud infrastructure (AWS/Azure), payment processors (Stripe/PayPal), email services (SendGrid), analytics (anonymized data only), IoT device firmware partners.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Penetration Testing */}
          <Card className="glass border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Server className="h-6 w-6 text-primary" />
                Penetration Testing & Security Audits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Annual Penetration Tests</h4>
                  <p className="text-sm text-muted-foreground">
                    Independent third-party security firms conduct comprehensive penetration tests covering web applications, APIs, mobile apps, and network infrastructure. Last test: August 2025 (zero critical findings).
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Bug Bounty Program</h4>
                  <p className="text-sm text-muted-foreground">
                    Private bug bounty program with vetted security researchers. Rewards up to $10,000 for critical vulnerabilities. Responsible disclosure policy ensures timely patching.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Red Team Exercises</h4>
                  <p className="text-sm text-muted-foreground">
                    Bi-annual red team engagements simulate advanced persistent threats (APTs) to test detection and response capabilities.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Compliance Audits</h4>
                  <p className="text-sm text-muted-foreground">
                    Annual SOC 2 Type II audits, ISO 27001 certification renewals, and POPIA compliance reviews conducted by external auditors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="glass border-2 border-secondary/30">
            <CardHeader>
              <CardTitle className="text-2xl">Security FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What happens if there's a security breach?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our Incident Response Team activates within 15 minutes of detection. We contain the threat, assess impact, notify affected parties within 72 hours (as required by POPIA), and publish a transparent post-mortem. Residents receive immediate notifications via email and push alerts.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How do you protect against ransomware?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Multi-layered defense: endpoint detection and response (EDR) on all systems, network segmentation to isolate critical infrastructure, immutable backups stored offline, zero-trust architecture requiring verification for every access request, and regular employee phishing simulations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Can residents audit their access logs?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. Residents can view their own access history (entry/exit times, doors accessed) for the past 12 months via the SecureConnect™ portal. This transparency helps identify unauthorized access attempts. Property managers cannot view individual resident logs without explicit consent or a valid security incident.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Are IoT devices secure from hacking?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    IoT devices use encrypted communication (TLS 1.3), certificate-based authentication, and are isolated on a dedicated VLAN separate from resident networks. Default passwords are randomized per device. Firmware is digitally signed and auto-updates are pushed within 48 hours of security patches.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    Do you comply with international security standards?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. SecureConnect™ is ISO 27001 certified, SOC 2 Type II compliant, and adheres to NIST Cybersecurity Framework. We also meet PCI-DSS requirements for payment processing and comply with POPIA (South African data protection law).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    What security training do employees receive?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    All employees complete security awareness training during onboarding and annually thereafter. Engineers undergo secure coding training. Phishing simulations run quarterly. Access to production systems requires background checks and signed NDAs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Security Team */}
          <Card className="glass border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5">
            <CardContent className="pt-6 text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Report a Security Concern</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you discover a security vulnerability or have urgent security concerns, contact our Security Operations Center immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:security@veralogix.com">
                  <button className="btn btn--neon h-11 px-6">
                    Email Security Team
                  </button>
                </a>
                <a href="tel:+27123456789">
                  <button className="btn btn--shimmer h-11 px-6">
                    24/7 Security Hotline
                  </button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Emergency response time: &lt;15 minutes
              </p>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Last Updated: October 23, 2025</p>
            <p className="mt-2">Security practices are continuously reviewed and updated to address emerging threats.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
