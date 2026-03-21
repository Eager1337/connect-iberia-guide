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

  const navLinkClass =
    "px-3 py-1.5 text-[11px] sm:text-xs lg:text-sm font-semibold rounded-full bg-secondary text-secondary-foreground hover:brightness-105 transition-all whitespace-nowrap";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logoFull} alt="Iberia Health Connect" className="h-8 sm:h-10 lg:h-12 brightness-0 invert" />
          </Link>

          {/* Nav buttons — always visible */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-wrap justify-end">
            <Link to="/" className={navLinkClass}>
              Home
            </Link>
            <Link to="/about" className={navLinkClass}>
              About Us
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`${navLinkClass} flex items-center gap-1`}>
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-card rounded-lg shadow-lg border border-border p-1.5 z-50">
                  <Link to="/services" className="block px-3 py-2 text-xs sm:text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    All Services
                  </Link>
                  <Link to="/services/healthcare-orientation" className="block px-3 py-2 text-xs sm:text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Healthcare Orientation
                  </Link>
                  <Link to="/services/guided-setup" className="block px-3 py-2 text-xs sm:text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Guided Setup
                  </Link>
                  <Link to="/services/ongoing-care-partner" className="block px-3 py-2 text-xs sm:text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Ongoing Care Partner
                  </Link>
                </div>
              )}
            </div>

            {/* Compare dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompareOpen(true)}
              onMouseLeave={() => setCompareOpen(false)}
            >
              <button className={`${navLinkClass} flex items-center gap-1`}>
                Compare <ChevronDown className="w-3 h-3" />
              </button>
              {compareOpen && (
                <div className="absolute top-full right-0 mt-1 w-60 bg-card rounded-lg shadow-lg border border-border p-1.5 z-50">
                  <Link to="/portugal-vs-spain" className="block px-3 py-2 text-xs sm:text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Portugal vs Spain
                  </Link>
                  <Link to="/portugal-healthcare" className="block px-3 py-2 text-xs sm:text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Healthcare in Portugal
                  </Link>
                  <Link to="/spain-healthcare" className="block px-3 py-2 text-xs sm:text-sm rounded-md hover:bg-muted transition-colors text-foreground">
                    Healthcare in Spain
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className={navLinkClass}>
              Contact Us
            </Link>

            <Link to="/resources" className={navLinkClass}>
              Resources
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
