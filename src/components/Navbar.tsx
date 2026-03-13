import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoFull from "@/assets/logo-full.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setCompareOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-card/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex-shrink-0">
              <img src={logoFull} alt="Iberia Health Connect" className="h-12" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  Services <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-lg border border-border p-2"
                    >
                      <Link to="/services" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors">All Services</Link>
                      <Link to="/services/healthcare-orientation" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors">Healthcare Orientation</Link>
                      <Link to="/services/guided-setup" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors">Guided Setup</Link>
                      <Link to="/services/ongoing-care-partner" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors">Ongoing Care Partner</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Compare Countries Dropdown */}
              <div className="relative" onMouseEnter={() => setCompareOpen(true)} onMouseLeave={() => setCompareOpen(false)}>
                <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  Compare Countries <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {compareOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-card rounded-lg shadow-lg border border-border p-2"
                    >
                      <Link to="/portugal-vs-spain" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors">Portugal vs Spain Comparison</Link>
                      <Link to="/portugal-healthcare" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors">Healthcare in Portugal</Link>
                      <Link to="/spain-healthcare" className="block px-4 py-2.5 text-sm rounded-md hover:bg-muted transition-colors">Healthcare in Spain</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/faq" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">FAQ</Link>
              <Link to="/resources" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Resources</Link>
              <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About</Link>

              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm shadow-[var(--shadow-cta)] hover:brightness-105 hover:scale-[1.02] transition-all"
              >
                Book a Free Consultation
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                <Link to="/" className="block text-sm font-medium py-2">Home</Link>
                <Link to="/services" className="block text-sm font-medium py-2">Services</Link>
                <Link to="/services/healthcare-orientation" className="block text-sm pl-4 py-1.5 text-muted-foreground">Healthcare Orientation</Link>
                <Link to="/services/guided-setup" className="block text-sm pl-4 py-1.5 text-muted-foreground">Guided Setup</Link>
                <Link to="/services/ongoing-care-partner" className="block text-sm pl-4 py-1.5 text-muted-foreground">Ongoing Care Partner</Link>
                <Link to="/portugal-vs-spain" className="block text-sm font-medium py-2">Portugal vs Spain</Link>
                <Link to="/portugal-healthcare" className="block text-sm pl-4 py-1.5 text-muted-foreground">Healthcare in Portugal</Link>
                <Link to="/spain-healthcare" className="block text-sm pl-4 py-1.5 text-muted-foreground">Healthcare in Spain</Link>
                <Link to="/faq" className="block text-sm font-medium py-2">FAQ</Link>
                <Link to="/resources" className="block text-sm font-medium py-2">Resources</Link>
                <Link to="/about" className="block text-sm font-medium py-2">About</Link>
                <Link to="/contact" className="block w-full text-center px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm mt-4">
                  Book a Free Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 bg-card/95 backdrop-blur-md border-t border-border">
        <Link
          to="/contact"
          className="block w-full text-center px-5 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm shadow-[var(--shadow-cta)]"
        >
          Book a Free 15-Minute Consultation
        </Link>
      </div>
    </>
  );
};

export default Navbar;
