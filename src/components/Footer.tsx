import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pb-20 lg:pb-0">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Iberia Health Connect" className="h-10 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Healthcare planning support for Americans relocating to Portugal or Spain.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-sm">f</a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-sm">in</a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-sm">ig</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/60">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/healthcare-orientation" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Healthcare Orientation</Link></li>
              <li><Link to="/services/guided-setup" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Guided Setup</Link></li>
              <li><Link to="/services/ongoing-care-partner" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Ongoing Care Partner</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Book a Consultation</Link></li>
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/60">Compare</h4>
            <ul className="space-y-3">
              <li><Link to="/portugal-vs-spain" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Portugal vs Spain</Link></li>
              <li><Link to="/portugal-healthcare" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Healthcare in Portugal</Link></li>
              <li><Link to="/spain-healthcare" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Healthcare in Spain</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/60">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/resources" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Resources</Link></li>
              <li><Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Iberia Health Connect. All rights reserved. We provide education and navigation support, not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
