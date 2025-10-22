import { Link } from "react-router-dom";
import logo from "@/assets/logo-no-bg.svg";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm" role="contentinfo">
      <div className="container mx-auto px-4" style={{ paddingTop: 'var(--g4)', paddingBottom: 'var(--g4)' }}>
        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: 'var(--g4)', marginBottom: 'var(--g4)' }}>
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Veralogix SecureConnect logo" className="h-12 w-auto" width="auto" height="48" loading="lazy" style={{ marginBottom: 'var(--g2)' }} />
            <p className="text-muted-foreground max-w-md">
              Next-generation smart building solutions for residential complexes. 
              Powered by AI, IoT, and predictive analytics.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="font-bold text-foreground" style={{ marginBottom: 'var(--g2)' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--g1)' }}>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded">
                  Demo Dashboard
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="font-bold text-foreground" style={{ marginBottom: 'var(--g2)' }}>Contact</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--g2)' }}>
              <li className="flex items-start text-muted-foreground" style={{ gap: 'var(--g1)' }}>
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <a href="mailto:info@veralogix.com" className="hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded">
                  info@veralogix.com
                </a>
              </li>
              <li className="flex items-start text-muted-foreground" style={{ gap: 'var(--g1)' }}>
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" aria-hidden="true" />
                <a href="tel:+15551234567" className="hover:text-secondary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-2 rounded">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start text-muted-foreground" style={{ gap: 'var(--g1)' }}>
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" aria-hidden="true" />
                <span>123 Innovation Drive<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 flex flex-col md:flex-row justify-between items-center" style={{ paddingTop: 'var(--g4)', gap: 'var(--g2)' }}>
          <p className="text-muted-foreground text-sm">
            © {currentYear} Veralogix Group. SecureConnect™ is a registered trademark.
          </p>
          
          <div className="flex" style={{ gap: 'var(--g2)' }} role="list" aria-label="Social media links">
            <a 
              href="#" 
              className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              aria-label="Follow us on LinkedIn"
              role="listitem"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full border border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-2"
              aria-label="Follow us on Twitter"
              role="listitem"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
