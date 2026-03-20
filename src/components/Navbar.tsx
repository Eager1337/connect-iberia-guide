import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setCompareOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link to="/" className="flex-shrink-0">
              <img src={logoFull} alt="Iberia Health Connect" className="h-10" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className="px-4 py-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground transition-colors">
                  Services <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-0 w-60 bg-card rounded-lg shadow-lg border border-border p-1.5">
                    <Link to="/services" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">All Services</Link>
                    <Link to="/services/healthcare-orientation" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">Healthcare Orientation</Link>
                    <Link to="/services/guided-setup" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">Guided Setup</Link>
                    <Link to="/services/ongoing-care-partner" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">Ongoing Care Partner</Link>
                  </div>
                )}
              </div>

              {/* Compare Dropdown */}
              <div className="relative" onMouseEnter={() => setCompareOpen(true)} onMouseLeave={() => setCompareOpen(false)}>
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground transition-colors">
                  Compare <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {compareOpen && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-card rounded-lg shadow-lg border border-border p-1.5">
                    <Link to="/portugal-vs-spain" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">Portugal vs Spain</Link>
                    <Link to="/portugal-healthcare" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">Healthcare in Portugal</Link>
                    <Link to="/spain-healthcare" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">Healthcare in Spain</Link>
                  </div>
                )}
              </div>

              <Link to="/faq" className="px-4 py-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground transition-colors">FAQ</Link>
              <Link to="/resources" className="px-4 py-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground transition-colors">Resources</Link>
              <Link to="/about" className="px-4 py-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground transition-colors">About</Link>

              <ThemeToggle />

              <Link
                to="/contact"
                className="ml-3 inline-flex items-center px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:brightness-105 transition-all"
              >
                Book Consult
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-primary-foreground">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link to="/" className="block text-sm font-medium py-2 text-foreground">Home</Link>
              <Link to="/services" className="block text-sm font-medium py-2 text-foreground">Services</Link>
              <Link to="/services/healthcare-orientation" className="block text-sm pl-4 py-1.5 text-muted-foreground">Healthcare Orientation</Link>
              <Link to="/services/guided-setup" className="block text-sm pl-4 py-1.5 text-muted-foreground">Guided Setup</Link>
              <Link to="/services/ongoing-care-partner" className="block text-sm pl-4 py-1.5 text-muted-foreground">Ongoing Care Partner</Link>
              <Link to="/portugal-vs-spain" className="block text-sm font-medium py-2 text-foreground">Portugal vs Spain</Link>
              <Link to="/portugal-healthcare" className="block text-sm pl-4 py-1.5 text-muted-foreground">Healthcare in Portugal</Link>
              <Link to="/spain-healthcare" className="block text-sm pl-4 py-1.5 text-muted-foreground">Healthcare in Spain</Link>
              <Link to="/faq" className="block text-sm font-medium py-2 text-foreground">FAQ</Link>
              <Link to="/resources" className="block text-sm font-medium py-2 text-foreground">Resources</Link>
              <Link to="/about" className="block text-sm font-medium py-2 text-foreground">About</Link>
              <Link to="/contact" className="block w-full text-center px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm mt-4">
                Book Consult
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 bg-card/95 border-t border-border">
        <Link
          to="/contact"
          className="block w-full text-center px-5 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm"
        >
          Book a Free 15-Minute Consultation
        </Link>
      </div>
    </>
  );
};

export default Navbar;
