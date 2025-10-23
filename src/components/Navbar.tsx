import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-no-bg.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Demo", path: "/demo" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Veralogix SecureConnect home">
            <img src={logo} alt="Veralogix SecureConnect logo" className="h-12 w-auto" width="auto" height="48" loading="eager" fetchPriority="high" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center" style={{ gap: 'var(--g4)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <button className="btn btn--neon" aria-label="Book a demo with Veralogix">
                Book Demo
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-nav" className="md:hidden animate-fade-in" style={{ paddingTop: 'var(--g2)', paddingBottom: 'var(--g2)', display: 'flex', flexDirection: 'column', gap: 'var(--g2)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-foreground hover:text-primary transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded"
                style={{ padding: 'var(--g1)' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="btn btn--neon w-full" aria-label="Book a demo with Veralogix">
                Book Demo
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
