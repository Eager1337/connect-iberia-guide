import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setServicesOpen(false);
    setCompareOpen(false);
  }, [location]);

  const linkClass =
    "text-primary-foreground/90 hover:text-secondary font-medium text-[11px] sm:text-xs lg:text-sm uppercase tracking-wide whitespace-nowrap transition-colors px-1 sm:px-2 lg:px-3 py-2";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary/80">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoFull}
              alt="Iberia Health Connect"
              className="h-8 sm:h-10 lg:h-12"
            />
          </Link>

          {/* Always-horizontal nav links */}
          <div className="flex items-center gap-0 sm:gap-1 lg:gap-2 overflow-x-auto scrollbar-hide">
            <Link to="/" className={linkClass}>
              Home
            </Link>

            <Link to="/about" className={linkClass}>
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`${linkClass} flex items-center gap-0.5`}>
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-lg border border-border p-1.5 z-50">
                  <Link to="/services" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    All Services
                  </Link>
                  <Link to="/services/healthcare-orientation" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Healthcare Orientation
                  </Link>
                  <Link to="/services/guided-setup" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Guided Setup
                  </Link>
                  <Link to="/services/ongoing-care-partner" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Ongoing Care Partner
                  </Link>
                </div>
              )}
            </div>

            {/* Compare Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompareOpen(true)}
              onMouseLeave={() => setCompareOpen(false)}
            >
              <button className={`${linkClass} flex items-center gap-0.5`}>
                Compare <ChevronDown className="w-3 h-3" />
              </button>
              {compareOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-lg border border-border p-1.5 z-50">
                  <Link to="/portugal-vs-spain" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Portugal vs Spain
                  </Link>
                  <Link to="/portugal-healthcare" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Healthcare in Portugal
                  </Link>
                  <Link to="/spain-healthcare" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Healthcare in Spain
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className={linkClass}>
              Contact
            </Link>

            <Link to="/faq" className={linkClass}>
              FAQ
            </Link>

            <ThemeToggle />

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-3 lg:px-5 py-2 rounded-md bg-secondary text-secondary-foreground font-bold text-[10px] lg:text-sm whitespace-nowrap ml-1 lg:ml-3 hover:brightness-105 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
