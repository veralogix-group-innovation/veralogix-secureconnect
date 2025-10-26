import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/logo-no-bg.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dashboardLinks = [
    { name: "Main Dashboard", path: "/demo", description: "Unified control center" },
    { name: "For Residence", path: "/residence", description: "Resident portal" },
    { name: "For Trustees", path: "/trustees", description: "Executive insights" },
    { name: "For Managing Agent", path: "/managing-agent", description: "Operations control" },
  ];

  const otherLinks = [
    { name: "Services", path: "/services" },
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
            {/* Dashboards Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded">
                SecureConnect™ Dashboards
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass border border-primary/30 min-w-[280px]">
                {dashboardLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className="flex flex-col items-start px-4 py-3 cursor-pointer hover:bg-primary/10"
                    >
                      <span className="font-semibold text-foreground">{link.name}</span>
                      <span className="text-xs text-muted-foreground">{link.description}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Links */}
            {otherLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 rounded"
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact">
              <button className="btn btn--neon-animated" aria-label="Book a demo with Veralogix">
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
          <div id="mobile-nav" className="md:hidden animate-fade-in pb-4">
            {/* Dashboards Accordion */}
            <Accordion type="single" collapsible className="mb-2">
              <AccordionItem value="dashboards" className="border-primary/20">
                <AccordionTrigger className="text-foreground hover:text-primary font-medium py-3">
                  SecureConnect™ Dashboards
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 pl-4">
                    {dashboardLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block text-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-muted-foreground">{link.description}</div>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Other Links */}
            {otherLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-foreground hover:text-primary transition-colors font-medium py-3"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="btn btn--neon-animated w-full mt-4" aria-label="Book a demo with Veralogix">
                Book Demo
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
